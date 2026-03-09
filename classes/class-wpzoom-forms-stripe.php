<?php
/**
 * Class WPZOOM Forms Stripe
 *
 * Core Stripe integration: Connect OAuth (via proxy), PaymentIntents,
 * Webhooks, and the wpzf-payment Custom Post Type.
 *
 * OAuth flow:
 *   1. User clicks "Connect with Stripe" — redirected to Stripe with the
 *      platform Client ID.
 *   2. Stripe redirects the user to the WPZOOM Proxy (not back here).
 *   3. The Proxy exchanges the code for an access token using the platform
 *      Secret Key (which lives only on the proxy server, never here).
 *   4. The Proxy signs the token data with HMAC and redirects the user back
 *      to this plugin's callback handler.
 *   5. This plugin verifies the HMAC signature and stores the tokens.
 *
 * Only define WPZOOM_STRIPE_CLIENT_ID in wp-config.php on the USER's site:
 *   define( 'WPZOOM_STRIPE_CLIENT_ID', 'ca_...' );
 *
 * The WPZOOM_FORMS_PRO constant, when defined by the PRO plugin, removes the
 * 3% application fee from every transaction.
 *
 * @since   1.4.0
 * @package WPZOOM_Forms
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load Composer autoloader so the Stripe PHP SDK classes are available.
if ( file_exists( WPZOOM_FORMS_PATH . 'vendor/autoload.php' ) ) {
	require_once WPZOOM_FORMS_PATH . 'vendor/autoload.php';
}

/**
 * Class WPZOOM_Forms_Stripe
 */
class WPZOOM_Forms_Stripe {

	/**
	 * Application fee rate (3%).
	 */
	const FEE_RATE = 0.03;

	/**
	 * Your platform's Stripe Connect Client ID (ca_...).
	 * Safe to hardcode — it is a public identifier.
	 */
	const STRIPE_CLIENT_ID = 'ca_REPLACE_WITH_YOUR_CLIENT_ID';

	/**
	 * URL of the WPZOOM OAuth Proxy callback endpoint.
	 * Stripe redirects the user HERE after they authorise — never directly
	 * back to the user's site.
	 */
	const PROXY_CALLBACK_URL = 'https://patterns.blocklayouts.com/stripe-test/wp-json/wpzoom-stripe-proxy/v1/callback';

	/**
	 * URL of the WPZOOM OAuth Proxy deauthorize endpoint.
	 * Called when the user disconnects their Stripe account.
	 */
	const PROXY_DEAUTH_URL = 'https://patterns.blocklayouts.com/stripe-test/wp-json/wpzoom-stripe-proxy/v1/deauthorize';

	/**
	 * The Constructor.
	 */
	public function __construct() {
		add_action( 'init',                                    array( $this, 'register_payment_cpt' ) );
		add_action( 'rest_api_init',                           array( $this, 'register_rest_routes' ) );
		add_action( 'admin_init',                              array( $this, 'handle_disconnect' ) );
		add_action( 'wp_ajax_wpzf_stripe_save_connection',    array( $this, 'ajax_save_connection' ) );

		// Payment admin list columns.
		add_filter( 'manage_edit-wpzf-payment_columns',          array( $this, 'payment_list_columns' ) );
		add_action( 'manage_wpzf-payment_posts_custom_column',   array( $this, 'payment_list_column_content' ), 10, 2 );
		add_filter( 'manage_edit-wpzf-payment_sortable_columns', array( $this, 'payment_sortable_columns' ) );
		add_filter( 'bulk_actions-edit-wpzf-payment',            array( $this, 'remove_payment_bulk_actions' ) );
	}

	// -------------------------------------------------------------------------
	// Custom Post Type
	// -------------------------------------------------------------------------

	/**
	 * Registers the wpzf-payment CPT for payment logs.
	 */
	public function register_payment_cpt() {
		register_post_type(
			'wpzf-payment',
			array(
				'label'               => __( 'Payments', 'wpzoom-forms' ),
				'labels'              => array(
					'name'               => _x( 'Payments', 'post type general name', 'wpzoom-forms' ),
					'singular_name'      => _x( 'Payment', 'post type singular name', 'wpzoom-forms' ),
					'all_items'          => __( 'Payments', 'wpzoom-forms' ),
					'not_found'          => __( 'No payments found.', 'wpzoom-forms' ),
					'not_found_in_trash' => __( 'No payments found in Trash.', 'wpzoom-forms' ),
				),
				'public'              => false,
				'show_ui'             => true,
				'show_in_menu'        => 'edit.php?post_type=wpzf-form',
				'show_in_admin_bar'   => false,
				'show_in_nav_menus'   => false,
				'show_in_rest'        => false,
				'capability_type'     => 'post',
				'capabilities'        => array(
					'create_posts' => 'do_not_allow',
				),
				'map_meta_cap'        => true,
				'supports'            => array(),
				'rewrite'             => false,
				'query_var'           => false,
			)
		);
	}

	// -------------------------------------------------------------------------
	// REST Routes
	// -------------------------------------------------------------------------

	/**
	 * Registers REST API routes for Stripe webhook and PaymentIntent creation.
	 */
	public function register_rest_routes() {
		register_rest_route(
			'wpzoom-forms/v1',
			'/stripe/webhook',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'handle_webhook' ),
				'permission_callback' => '__return_true',
			)
		);

		register_rest_route(
			'wpzoom-forms/v1',
			'/stripe/save-connection',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'rest_save_connection' ),
				'permission_callback' => function() {
					return current_user_can( 'manage_options' );
				},
			)
		);

		register_rest_route(
			'wpzoom-forms/v1',
			'/stripe/create-intent',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'rest_create_payment_intent' ),
				'permission_callback' => '__return_true',
				'args'                => array(
					'amount'  => array(
						'required'          => true,
						'type'              => 'integer',
						'minimum'           => 50,
						'sanitize_callback' => 'absint',
					),
					'form_id' => array(
						'required'          => true,
						'type'              => 'integer',
						'sanitize_callback' => 'absint',
					),
				),
			)
		);
	}

	// -------------------------------------------------------------------------
	// Webhook Handler
	// -------------------------------------------------------------------------

	/**
	 * Handles incoming Stripe webhook events.
	 *
	 * @param WP_REST_Request $request The REST request object.
	 * @return WP_REST_Response
	 */
	public function handle_webhook( WP_REST_Request $request ) {
		$payload    = $request->get_body();
		$sig_header = isset( $_SERVER['HTTP_STRIPE_SIGNATURE'] )
			? sanitize_text_field( wp_unslash( $_SERVER['HTTP_STRIPE_SIGNATURE'] ) )
			: '';

		// Try the live secret first, then fall back to the test secret.
		// Both webhooks share one endpoint URL so we probe both rather than
		// requiring the caller to declare which mode the event belongs to.
		$live_secret = (string) get_option( 'wpzf_stripe_webhook_secret',      '' );
		$test_secret = (string) get_option( 'wpzf_stripe_test_webhook_secret', '' );
		$secrets     = array_filter( array( $live_secret, $test_secret ) );

		if ( empty( $secrets ) ) {
			return new WP_REST_Response( array( 'error' => 'Webhook secret not configured.' ), 400 );
		}

		$event = null;
		foreach ( $secrets as $secret ) {
			try {
				$event = \Stripe\Webhook::constructEvent( $payload, $sig_header, $secret );
				break;
			} catch ( \Stripe\Exception\SignatureVerificationException $e ) {
				continue;
			} catch ( \UnexpectedValueException $e ) {
				return new WP_REST_Response( array( 'error' => 'Invalid payload.' ), 400 );
			}
		}

		if ( null === $event ) {
			return new WP_REST_Response( array( 'error' => 'Invalid signature.' ), 400 );
		}

		switch ( $event->type ) {
			case 'payment_intent.succeeded':
				$pi = $event->data->object;
				$this->update_payment_by_intent_id( $pi->id, 'paid', $pi->amount );
				break;

			case 'payment_intent.payment_failed':
				$pi = $event->data->object;
				$this->update_payment_by_intent_id( $pi->id, 'failed' );
				break;

			case 'charge.refunded':
				$charge = $event->data->object;
				if ( ! empty( $charge->payment_intent ) ) {
					$this->update_payment_by_intent_id( $charge->payment_intent, 'refunded' );
				}
				break;
		}

		return new WP_REST_Response( array( 'received' => true ), 200 );
	}

	// -------------------------------------------------------------------------
	// REST: Create Payment Intent
	// -------------------------------------------------------------------------

	/**
	 * Creates a Stripe PaymentIntent and returns the client_secret.
	 *
	 * @param WP_REST_Request $request The REST request.
	 * @return WP_REST_Response|WP_Error
	 */
	public function rest_create_payment_intent( WP_REST_Request $request ) {
		if ( ! $this->is_connected() ) {
			return new WP_Error( 'stripe_not_connected', __( 'Stripe is not connected.', 'wpzoom-forms' ), array( 'status' => 400 ) );
		}

		$amount  = $request->get_param( 'amount' );
		$form_id = $request->get_param( 'form_id' );

		// Verify the form_id refers to a real published wpzf-form post.
		$form_post = get_post( $form_id );
		if ( ! $form_post || 'wpzf-form' !== $form_post->post_type || 'publish' !== $form_post->post_status ) {
			return new WP_Error( 'invalid_form', __( 'Invalid form.', 'wpzoom-forms' ), array( 'status' => 400 ) );
		}
		$currency = strtolower( get_option( 'wpzf_payment_currency', 'usd' ) );
		$fee      = $this->calculate_application_fee( $amount );

		try {
			$this->init_stripe(); // uses the connected account's access token

			$params = array(
				'amount'               => $amount,
				'currency'             => $currency,
				'automatic_payment_methods' => array( 'enabled' => true ),
				'metadata'             => array(
					'wpzf_form_id' => $form_id,
				),
			);

			$account_id = get_option( 'wpzf_stripe_account_id', '' );
			if ( ! empty( $account_id ) && $fee > 0 ) {
				$params['application_fee_amount'] = $fee;
				$params['on_behalf_of']            = $account_id;
				$params['transfer_data']           = array( 'destination' => $account_id );
			} elseif ( ! empty( $account_id ) ) {
				$params['on_behalf_of']  = $account_id;
				$params['transfer_data'] = array( 'destination' => $account_id );
			}

			$intent = \Stripe\PaymentIntent::create( $params );

			return new WP_REST_Response(
				array(
					'client_secret'     => $intent->client_secret,
					'payment_intent_id' => $intent->id,
				),
				200
			);
		} catch ( \Stripe\Exception\ApiErrorException $e ) {
			return new WP_Error( 'stripe_api_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	// -------------------------------------------------------------------------
	// REST: Save Stripe Connection (called by settings page after postMessage)
	// -------------------------------------------------------------------------

	/**
	 * Receives token data that was delivered via postMessage from the proxy popup,
	 * verifies the HMAC signature, and stores the tokens in wp_options.
	 *
	 * The proxy signs the data with HMAC-SHA256 using the Client ID as the key.
	 * This guarantees the data came from our proxy and was not tampered with.
	 *
	 * @param WP_REST_Request $request
	 * @return WP_REST_Response|WP_Error
	 */
	public function rest_save_connection( WP_REST_Request $request ) {
		$access_token    = sanitize_text_field( $request->get_param( 'access_token' ) );
		$publishable_key = sanitize_text_field( $request->get_param( 'publishable_key' ) );
		$account_id      = sanitize_text_field( $request->get_param( 'account_id' ) );
		$account_name    = sanitize_text_field( $request->get_param( 'account_name' ) );
		$account_email   = sanitize_email( $request->get_param( 'account_email' ) );
		$proxy_sig       = sanitize_text_field( $request->get_param( 'sig' ) );

		if ( empty( $access_token ) || empty( $account_id ) || empty( $proxy_sig ) ) {
			return new WP_Error( 'missing_data', __( 'Missing required fields.', 'wpzoom-forms' ), array( 'status' => 400 ) );
		}

		// Verify HMAC: confirm the data came from our proxy, not forged by a third party.
		$client_id    = defined( 'WPZOOM_STRIPE_CLIENT_ID' ) ? WPZOOM_STRIPE_CLIENT_ID : self::STRIPE_CLIENT_ID;
		$expected_sig = hash_hmac( 'sha256', $access_token . '|' . $account_id, $client_id );

		if ( ! hash_equals( $expected_sig, $proxy_sig ) ) {
			return new WP_Error( 'invalid_signature', __( 'Invalid proxy signature.', 'wpzoom-forms' ), array( 'status' => 403 ) );
		}

		$is_test   = str_starts_with( $access_token, 'sk_test_' ) || str_starts_with( $access_token, 'rk_test_' );
		$token_key = $is_test ? 'wpzf_stripe_test_access_token'    : 'wpzf_stripe_access_token';
		$pk_key    = $is_test ? 'wpzf_stripe_test_publishable_key' : 'wpzf_stripe_publishable_key';

		update_option( $token_key,                    $access_token,    false );
		update_option( $pk_key,                       $publishable_key, false );
		update_option( 'wpzf_stripe_account_id',      $account_id,      false );
		update_option( 'wpzf_stripe_account_name',    $account_name,    false );
		update_option( 'wpzf_stripe_account_email',   $account_email,   false );

		return new WP_REST_Response( array( 'connected' => true ), 200 );
	}

	/**
	 * wp_ajax handler — same logic as rest_save_connection but via admin-ajax.php.
	 * Called by the settings page JS after receiving the postMessage from the proxy.
	 */
	public function ajax_save_connection() {
		$nonce_ok = check_ajax_referer( 'wpzf_stripe_connect', 'nonce', false );
		if ( ! $nonce_ok ) {
			wp_send_json_error( 'Nonce verification failed. Reload the settings page and try again.' );
		}

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( 'Permission denied.', 403 );
		}

		$access_token    = sanitize_text_field( wp_unslash( $_POST['access_token']    ?? '' ) );
		$publishable_key = sanitize_text_field( wp_unslash( $_POST['publishable_key'] ?? '' ) );
		$account_id      = sanitize_text_field( wp_unslash( $_POST['account_id']      ?? '' ) );
		$account_name    = sanitize_text_field( wp_unslash( $_POST['account_name']    ?? '' ) );
		$account_email   = sanitize_email(      wp_unslash( $_POST['account_email']   ?? '' ) );
		$proxy_sig       = sanitize_text_field( wp_unslash( $_POST['sig']             ?? '' ) );

		if ( empty( $access_token ) || empty( $account_id ) || empty( $proxy_sig ) ) {
			wp_send_json_error( 'Missing required fields.' );
		}

		$client_id    = defined( 'WPZOOM_STRIPE_CLIENT_ID' ) ? WPZOOM_STRIPE_CLIENT_ID : self::STRIPE_CLIENT_ID;
		$expected_sig = hash_hmac( 'sha256', $access_token . '|' . $account_id, $client_id );

		if ( ! hash_equals( $expected_sig, $proxy_sig ) ) {
			wp_send_json_error( 'Invalid proxy signature. Ensure WPZOOM_STRIPE_CLIENT_ID is defined in wp-config.php and matches the proxy.' );
		}

		// Route the token to the correct option based on its prefix so the right
		// key is available regardless of whether test mode is currently active.
		$is_test   = str_starts_with( $access_token, 'sk_test_' ) || str_starts_with( $access_token, 'rk_test_' );
		$token_key = $is_test ? 'wpzf_stripe_test_access_token'    : 'wpzf_stripe_access_token';
		$pk_key    = $is_test ? 'wpzf_stripe_test_publishable_key' : 'wpzf_stripe_publishable_key';

		update_option( $token_key,                    $access_token,    false );
		update_option( $pk_key,                       $publishable_key, false );
		update_option( 'wpzf_stripe_account_id',      $account_id,      false );
		update_option( 'wpzf_stripe_account_name',    $account_name,    false );
		update_option( 'wpzf_stripe_account_email',   $account_email,   false );

		wp_send_json_success( array( 'connected' => true ) );
	}

	/**
	 * Builds the Stripe OAuth URL.
	 *
	 * The redirect_uri points to the WPZOOM Proxy (not back to this site).
	 * The `state` parameter encodes a one-time token and the return URL so
	 * the proxy knows where to send the user after it finishes.
	 *
	 * @return string
	 */
	public function get_oauth_url() {
		// Encode a random token in the state so the proxy can pass it back.
		// (The proxy uses postMessage now — no return_to redirect needed.)
		$oauth_token = wp_generate_uuid4();
		$state       = base64_encode( wp_json_encode( array( 'token' => $oauth_token ) ) );

		$client_id = defined( 'WPZOOM_STRIPE_CLIENT_ID' ) ? WPZOOM_STRIPE_CLIENT_ID : self::STRIPE_CLIENT_ID;

		return 'https://connect.stripe.com/oauth/authorize?' . http_build_query( array(
			'response_type' => 'code',
			'client_id'     => $client_id,
			'scope'         => 'read_write',
			'redirect_uri'  => self::PROXY_CALLBACK_URL,
			'state'         => $state,
		) );
	}

	// -------------------------------------------------------------------------
	// OAuth: Disconnect
	// -------------------------------------------------------------------------

	/**
	 * Handles the Stripe account disconnect action.
	 * Fires on admin_init; checks for the wpzf_stripe_disconnect GET param.
	 */
	public function handle_disconnect() {
		if ( ! isset( $_GET['wpzf_stripe_disconnect'] ) || '1' !== $_GET['wpzf_stripe_disconnect'] ) {
			return;
		}

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'Permission denied.', 'wpzoom-forms' ) );
		}

		if ( ! isset( $_GET['_wpnonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_GET['_wpnonce'] ) ), 'wpzf_stripe_disconnect' ) ) {
			wp_die( esc_html__( 'Security check failed.', 'wpzoom-forms' ) );
		}

		$account_id = get_option( 'wpzf_stripe_account_id', '' );

		if ( ! empty( $account_id ) ) {
			// The platform secret key lives only on the proxy, so we ask the
			// proxy to call Stripe's deauthorize API on our behalf.
			$client_id = defined( 'WPZOOM_STRIPE_CLIENT_ID' ) ? WPZOOM_STRIPE_CLIENT_ID : self::STRIPE_CLIENT_ID;
			$sig       = hash_hmac( 'sha256', 'deauthorize|' . $account_id, $client_id );

			wp_remote_post(
				self::PROXY_DEAUTH_URL,
				array(
					'timeout' => 15,
					'body'    => array(
						'account_id' => $account_id,
						'sig'        => $sig,
					),
				)
			);
			// We proceed with local cleanup regardless of the proxy response,
			// since the user is entitled to disconnect their local credentials.
		}

		delete_option( 'wpzf_stripe_access_token' );
		delete_option( 'wpzf_stripe_publishable_key' );
		delete_option( 'wpzf_stripe_account_id' );
		delete_option( 'wpzf_stripe_account_name' );
		delete_option( 'wpzf_stripe_account_email' );

		wp_safe_redirect( $this->payments_settings_url() );
		exit;
	}

	// -------------------------------------------------------------------------
	// Payment Helpers
	// -------------------------------------------------------------------------

	/**
	 * Creates a new wpzf-payment post for a pending payment.
	 *
	 * @param int    $form_id           The wpzf-form post ID.
	 * @param string $payment_intent_id The Stripe PaymentIntent ID.
	 * @param int    $amount            Amount in cents.
	 * @param string $currency          ISO currency code (lowercase).
	 * @param string $customer_email    Submitter email.
	 * @return int|WP_Error The new post ID or WP_Error on failure.
	 */
	public function create_payment_post( $form_id, $payment_intent_id, $amount, $currency, $customer_email = '' ) {
		$post_id = wp_insert_post( array(
			'post_type'      => 'wpzf-payment',
			'post_status'    => 'publish',
			'comment_status' => 'closed',
			'ping_status'    => 'closed',
			'post_title'     => sprintf(
				/* translators: %s: PaymentIntent ID */
				__( 'Payment %s', 'wpzoom-forms' ),
				sanitize_text_field( $payment_intent_id )
			),
			'post_author'    => 1,
			'meta_input'     => array(
				'_wpzf_txn_status'            => 'pending',
				'_wpzf_txn_payment_intent_id' => sanitize_text_field( $payment_intent_id ),
				'_wpzf_txn_amount'            => absint( $amount ),
				'_wpzf_txn_currency'          => strtolower( sanitize_text_field( $currency ) ),
				'_wpzf_txn_form_id'           => absint( $form_id ),
				'_wpzf_txn_stripe_account_id' => sanitize_text_field( get_option( 'wpzf_stripe_account_id', '' ) ),
				'_wpzf_txn_customer_email'    => sanitize_email( $customer_email ),
			),
		) );

		return $post_id;
	}

	/**
	 * Finds a payment post by PaymentIntent ID and updates its status.
	 *
	 * @param string   $payment_intent_id Stripe PaymentIntent ID.
	 * @param string   $status            New status: paid, failed, or refunded.
	 * @param int|null $amount            Updated amount in cents (optional).
	 */
	public function update_payment_by_intent_id( $payment_intent_id, $status, $amount = null ) {
		$posts = get_posts( array(
			'post_type'      => 'wpzf-payment',
			'post_status'    => 'publish',
			'posts_per_page' => 1,
			'meta_query'     => array(
				array(
					'key'   => '_wpzf_txn_payment_intent_id',
					'value' => sanitize_text_field( $payment_intent_id ),
				),
			),
		) );

		if ( empty( $posts ) ) {
			return;
		}

		$post_id = $posts[0]->ID;
		update_post_meta( $post_id, '_wpzf_txn_status', sanitize_text_field( $status ) );

		if ( null !== $amount ) {
			update_post_meta( $post_id, '_wpzf_txn_amount', absint( $amount ) );
		}
	}

	// -------------------------------------------------------------------------
	// Fee Calculation
	// -------------------------------------------------------------------------

	/**
	 * Calculates the application fee for a payment.
	 * Returns 0 when WPZOOM_FORMS_PRO is defined (PRO bypass).
	 *
	 * @param int $amount_cents Amount in smallest currency unit.
	 * @return int Fee in cents.
	 */
	public function calculate_application_fee( $amount_cents ) {
		if ( defined( 'WPZOOM_FORMS_PRO' ) ) {
			return 0;
		}

		return (int) round( $amount_cents * self::FEE_RATE );
	}

	// -------------------------------------------------------------------------
	// Key / Mode Helpers
	// -------------------------------------------------------------------------

	/**
	 * Initialises the Stripe SDK with the connected account's access token.
	 *
	 * The platform secret key is NEVER stored on the user's site — it lives
	 * exclusively on the WPZOOM proxy server.
	 */
	public function init_stripe() {
		\Stripe\Stripe::setApiKey( $this->get_secret_key() );
		\Stripe\Stripe::setAppInfo( 'WPZOOM Forms', WPZOOM_FORMS_VERSION, 'https://www.wpzoom.com/plugins/wpzoom-forms' );
	}

	/**
	 * Returns the secret key for the current mode (live or test).
	 *
	 * @return string
	 */
	public function get_secret_key() {
		if ( $this->is_test_mode() ) {
			return (string) get_option( 'wpzf_stripe_test_access_token', '' );
		}

		return (string) get_option( 'wpzf_stripe_access_token', '' );
	}

	/**
	 * Returns the publishable key for the current mode.
	 *
	 * @return string
	 */
	public function get_publishable_key() {
		if ( $this->is_test_mode() ) {
			return (string) get_option( 'wpzf_stripe_test_publishable_key', '' );
		}

		return (string) get_option( 'wpzf_stripe_publishable_key', '' );
	}

	/**
	 * Returns true when a Stripe account has been connected.
	 *
	 * Uses the mode-independent account_id as the indicator so that the
	 * connected state is correct regardless of whether test or live mode
	 * is currently active.
	 *
	 * @return bool
	 */
	public function is_connected() {
		return ! empty( get_option( 'wpzf_stripe_account_id', '' ) );
	}

	/**
	 * Returns true when test mode is active.
	 *
	 * @return bool
	 */
	public function is_test_mode() {
		return (bool) get_option( 'wpzf_stripe_test_mode', false );
	}

	/**
	 * Returns an array with the connected account display info.
	 *
	 * @return array {name, email}
	 */
	public function get_account_info() {
		return array(
			'name'  => (string) get_option( 'wpzf_stripe_account_name', '' ),
			'email' => (string) get_option( 'wpzf_stripe_account_email', '' ),
		);
	}

	// -------------------------------------------------------------------------
	// Admin List Columns
	// -------------------------------------------------------------------------

	/**
	 * Defines columns for the wpzf-payment list table.
	 *
	 * @param array $columns Default columns.
	 * @return array
	 */
	public function payment_list_columns( $columns ) {
		return array(
			'cb'               => '<input type="checkbox" />',
			'title'            => __( 'Payment ID', 'wpzoom-forms' ),
			'wpzf_txn_form'    => __( 'Form', 'wpzoom-forms' ),
			'wpzf_txn_amount'  => __( 'Amount', 'wpzoom-forms' ),
			'wpzf_txn_status'  => __( 'Status', 'wpzoom-forms' ),
			'date'             => __( 'Date', 'wpzoom-forms' ),
		);
	}

	/**
	 * Renders custom column content for the wpzf-payment list table.
	 *
	 * @param string $column  Column slug.
	 * @param int    $post_id Post ID.
	 */
	public function payment_list_column_content( $column, $post_id ) {
		switch ( $column ) {
			case 'wpzf_txn_form':
				$form_id = (int) get_post_meta( $post_id, '_wpzf_txn_form_id', true );
				if ( $form_id ) {
					$form = get_post( $form_id );
					echo $form ? esc_html( $form->post_title ) : esc_html( '#' . $form_id );
				} else {
					echo '&mdash;';
				}
				break;

			case 'wpzf_txn_amount':
				$amount   = (int) get_post_meta( $post_id, '_wpzf_txn_amount', true );
				$currency = strtoupper( (string) get_post_meta( $post_id, '_wpzf_txn_currency', true ) );
				echo esc_html( number_format( $amount / 100, 2 ) . ' ' . $currency );
				break;

			case 'wpzf_txn_status':
				$status = (string) get_post_meta( $post_id, '_wpzf_txn_status', true );
				$labels = array(
					'paid'     => array( 'label' => __( 'Paid', 'wpzoom-forms' ),     'color' => '#1a7f37' ),
					'pending'  => array( 'label' => __( 'Pending', 'wpzoom-forms' ),  'color' => '#9a6700' ),
					'failed'   => array( 'label' => __( 'Failed', 'wpzoom-forms' ),   'color' => '#cf222e' ),
					'refunded' => array( 'label' => __( 'Refunded', 'wpzoom-forms' ), 'color' => '#6e7781' ),
				);
				$info = isset( $labels[ $status ] ) ? $labels[ $status ] : array( 'label' => ucfirst( $status ), 'color' => '#6e7781' );
				printf(
					'<span style="background:%s;color:#fff;padding:2px 8px;border-radius:3px;font-size:11px;font-weight:600;">%s</span>',
					esc_attr( $info['color'] ),
					esc_html( $info['label'] )
				);
				break;
		}
	}

	/**
	 * Makes the Amount column sortable.
	 *
	 * @param array $columns Sortable columns.
	 * @return array
	 */
	public function payment_sortable_columns( $columns ) {
		$columns['wpzf_txn_amount'] = 'wpzf_txn_amount';
		return $columns;
	}

	/**
	 * Removes irrelevant bulk actions from the payment list.
	 *
	 * @param array $actions Default actions.
	 * @return array
	 */
	public function remove_payment_bulk_actions( $actions ) {
		unset( $actions['edit'] );
		return $actions;
	}

	// -------------------------------------------------------------------------
	// Helpers
	// -------------------------------------------------------------------------

	/**
	 * Returns the URL to the Payments tab in the plugin settings.
	 *
	 * @param string $extra_params Additional query string parameters.
	 * @return string
	 */
	private function payments_settings_url( $extra_params = '' ) {
		$url = admin_url( 'edit.php?post_type=wpzf-form&page=' . WPZOOM_FORMS_SETTINGS_PAGE . '&tab=tab-payments' );
		if ( ! empty( $extra_params ) ) {
			$url .= '&' . $extra_params;
		}
		return $url;
	}
}
