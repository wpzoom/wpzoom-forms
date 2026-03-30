<?php
/**
 * Class WPZOOM Forms Stripe
 *
 * Core Stripe integration: Connect OAuth (via proxy), PaymentIntents,
 * Webhooks, and the wpzf-payment Custom Post Type.
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
	const STRIPE_CLIENT_ID = 'ca_U690IWxMibgupMr2GLMoivrI66pmlvmc';

	/**
	 * URL of the WPZOOM OAuth Proxy callback endpoint.
	 * Stripe redirects the user HERE after they authorise — never directly
	 * back to the user's site.
	 */
	const PROXY_CALLBACK_URL = 'https://zoomforms.co/wp-json/wpzoom-stripe-proxy/v1/callback'; // TODO: Change to the actual callback URL

	/**
	 * URL of the WPZOOM OAuth Proxy deauthorize endpoint.
	 * Called when the user disconnects their Stripe account.
	 */
	const PROXY_DEAUTH_URL = 'https://zoomforms.co/wp-json/wpzoom-stripe-proxy/v1/deauthorize'; // TODO: Change to the actual deauthorize URL

	/**
	 * URL of the WPZOOM proxy register-webhook endpoint.
	 * Called after OAuth connect to create a Connect webhook on the platform account.
	 */
	const PROXY_REGISTER_WEBHOOK_URL = 'https://zoomforms.co/wp-json/wpzoom-stripe-proxy/v1/register-webhook'; // TODO: change this

	/**
	 * URL of the WPZOOM proxy delete-webhook endpoint.
	 * Called when disconnecting to remove the Connect webhook from the platform account.
	 */
	const PROXY_DELETE_WEBHOOK_URL = 'https://zoomforms.co/wp-json/wpzoom-stripe-proxy/v1/delete-webhook'; // TODO: change this

	/**
	 * Singleton instance.
	 *
	 * @var self|null
	 */
	private static $instance = null;

	/**
	 * Returns the single class instance, creating it on first call.
	 *
	 * @return self
	 */
	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * The Constructor.
	 */
	private function __construct() {
		add_action( 'init',                                    array( $this, 'register_payment_cpt' ) );
		add_action( 'rest_api_init',                           array( $this, 'register_rest_routes' ) );
		add_action( 'admin_init',                              array( $this, 'handle_disconnect' ) );
		add_action( 'wp_ajax_wpzf_stripe_save_connection',    array( $this, 'ajax_save_connection' ) );
		add_action( 'wp_ajax_wpzf_stripe_setup_webhook',      array( $this, 'ajax_setup_webhook' ) );
		add_action( 'wp_ajax_wpzf_stripe_delete_webhook',     array( $this, 'ajax_delete_webhook' ) );

		// Payment admin list columns.
		add_filter( 'manage_edit-wpzf-payment_columns',          array( $this, 'payment_list_columns' ) );
		add_action( 'manage_wpzf-payment_posts_custom_column',   array( $this, 'payment_list_column_content' ), 10, 2 );
		add_filter( 'manage_edit-wpzf-payment_sortable_columns', array( $this, 'payment_sortable_columns' ) );
		add_filter( 'bulk_actions-edit-wpzf-payment',            array( $this, 'remove_payment_bulk_actions' ) );

		add_action( 'admin_notices', array( $this, 'maybe_show_webhook_notice' ) );
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
					'edit_item'          => __( 'Payment Details', 'wpzoom-forms' ),
					'view_item'          => __( 'View Payment', 'wpzoom-forms' ),
					'search_items'       => __( 'Search Payments', 'wpzoom-forms' ),
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
					'amount'         => array(
						'required'          => true,
						'type'              => 'integer',
						'minimum'           => 50,
						'sanitize_callback' => 'absint',
					),
					'form_id'        => array(
						'required'          => true,
						'type'              => 'integer',
						'sanitize_callback' => 'absint',
					),
					'customer_email' => array(
						'required'          => false,
						'type'              => 'string',
						'sanitize_callback' => 'sanitize_email',
					),
					'customer_name'  => array(
						'required'          => false,
						'type'              => 'string',
						'sanitize_callback' => 'sanitize_text_field',
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
		$payload = $request->get_body();

		// IMPORTANT: Do NOT run sanitize_text_field() on the Stripe-Signature header.
		// That strips characters used in the HMAC value and breaks signature
		// verification. wp_unslash() is the only safe transformation here.
		$sig_header = isset( $_SERVER['HTTP_STRIPE_SIGNATURE'] )
			? wp_unslash( $_SERVER['HTTP_STRIPE_SIGNATURE'] )
			: '';

		// Try live secret then test secret. Both modes share one endpoint URL.
		$live_secret = (string) get_option( 'wpzf_stripe_webhook_secret',      '' );
		$test_secret = (string) get_option( 'wpzf_stripe_test_webhook_secret', '' );
		$secrets     = array_filter( array( $live_secret, $test_secret ) );

		if ( empty( $secrets ) ) {
			return new WP_REST_Response( array( 'error' => 'Webhook secret not configured.' ), 400 );
		}

		if ( empty( $sig_header ) ) {
			return new WP_REST_Response( array( 'error' => 'Missing signature header.' ), 400 );
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

		// Idempotency: Stripe retries delivery on non-2xx responses, so the same
		// event can arrive more than once. Use a transient keyed on the event ID
		// to skip any event we have already successfully processed.
		$transient_key = 'wpzf_whk_' . sanitize_key( $event->id );
		if ( get_transient( $transient_key ) ) {
			return new WP_REST_Response( array( 'received' => true ), 200 );
		}
		set_transient( $transient_key, 1, DAY_IN_SECONDS );

		$this->init_stripe();

		switch ( $event->type ) {

			// -- One-time payments -----------------------------------------------
			case 'payment_intent.succeeded':
				$this->on_payment_intent_succeeded( $event->data->object );
				break;

			case 'payment_intent.payment_failed':
				$pi = $event->data->object;
				$this->update_payment_by_intent_id( $pi->id, 'failed' );
				break;

			// -- Subscription / invoice payments ---------------------------------
			// invoice.paid fires for every successful subscription charge,
			// including the initial payment and all subsequent renewals.
			case 'invoice.paid':
				$this->on_invoice_paid( $event->data->object );
				break;

			case 'invoice.payment_failed':
				$this->on_invoice_payment_failed( $event->data->object );
				break;

			// -- Refunds ---------------------------------------------------------
			case 'charge.refunded':
				$charge = $event->data->object;
				if ( ! empty( $charge->payment_intent ) ) {
					$pi_id = is_string( $charge->payment_intent )
						? $charge->payment_intent
						: $charge->payment_intent->id;
					$this->update_payment_by_intent_id( $pi_id, 'refunded' );
				}
				break;
		}

		return new WP_REST_Response( array( 'received' => true ), 200 );
	}

	/**
	 * Handles payment_intent.succeeded.
	 * Re-fetches the PI with latest_charge expanded to get card details
	 * in a single API call.
	 *
	 * @param object $pi PaymentIntent snapshot from the event.
	 */
	private function on_payment_intent_succeeded( $pi ) {
		$this->update_payment_by_intent_id( $pi->id, 'paid', $pi->amount );

		try {
			$pi_expanded = \Stripe\PaymentIntent::retrieve( array(
				'id'     => $pi->id,
				'expand' => array( 'latest_charge' ),
			) );
			if ( is_object( $pi_expanded->latest_charge ) ) {
				$this->store_card_meta_from_charge( $pi->id, $pi_expanded->latest_charge );

				$customer_id     = is_string( $pi_expanded->customer ) ? $pi_expanded->customer : null;
				$billing_details = $pi_expanded->latest_charge->billing_details ?? null;
				$pm_id           = is_string( $pi_expanded->latest_charge->payment_method )
					? $pi_expanded->latest_charge->payment_method
					: null;

				if ( $customer_id ) {
					$customer_update = array();

					// Set the payment method as the customer's primary (setup_future_usage on the
					// PaymentIntent already attached it automatically — we only need to set default).
					if ( $pm_id ) {
						$customer_update['invoice_settings'] = array( 'default_payment_method' => $pm_id );
					}

					// Copy the billing address from the charge onto the Customer object so it
					// shows on the Customer page in the Stripe dashboard (billing_details on the
					// PaymentMethod does not propagate to Customer.address automatically).
					if ( is_object( $billing_details ) && is_object( $billing_details->address ) ) {
						$addr    = $billing_details->address;
						$address = array_filter( array(
							'country'     => $addr->country     ?: null,
							'postal_code' => $addr->postal_code ?: null,
							'city'        => $addr->city        ?: null,
							'line1'       => $addr->line1       ?: null,
							'line2'       => $addr->line2       ?: null,
							'state'       => $addr->state       ?: null,
						) );
						if ( ! empty( $address ) ) {
							$customer_update['address'] = $address;
						}
					}

					if ( ! empty( $customer_update ) ) {
						\Stripe\Customer::update( $customer_id, $customer_update );
					}
				}
			}
		} catch ( \Exception $e ) {
			// Non-fatal: card details just won't be stored.
		}
	}

	/**
	 * Handles invoice.paid.
	 *
	 * Fires for every successful subscription charge (initial + renewals).
	 * For renewals a new wpzf-payment record is created automatically so
	 * every charge appears in the Payments list.
	 *
	 * @param object $invoice Invoice snapshot from the event.
	 */
	private function on_invoice_paid( $invoice ) {
		$pi_id = is_string( $invoice->payment_intent )
			? $invoice->payment_intent
			: ( is_object( $invoice->payment_intent ) ? $invoice->payment_intent->id : null );

		if ( ! $pi_id ) {
			return; // Free-trial invoice with no charge.
		}

		// Try to update an existing payment post (initial subscription payment).
		$updated = $this->update_payment_by_intent_id( $pi_id, 'paid', $invoice->amount_paid );

		// No existing record = this is a renewal. Create a new payment post.
		if ( ! $updated ) {
			$sub_id  = is_string( $invoice->subscription )
				? $invoice->subscription
				: ( is_object( $invoice->subscription ) ? $invoice->subscription->id : '' );
			$form_id = 0;

			if ( $sub_id ) {
				try {
					$sub     = \Stripe\Subscription::retrieve( $sub_id );
					$form_id = absint( $sub->metadata['wpzf_form_id'] ?? 0 );
				} catch ( \Exception $e ) {
					// Metadata unavailable; continue without form link.
				}
			}

			$this->create_payment_post(
				$form_id,
				$pi_id,
				$invoice->amount_paid,
				strtoupper( $invoice->currency ?: 'USD' ),
				$invoice->customer_email ?: ''
			);
			$this->update_payment_by_intent_id( $pi_id, 'paid' );
		}

		// Capture card details from the expanded charge.
		try {
			$pi_expanded = \Stripe\PaymentIntent::retrieve( array(
				'id'     => $pi_id,
				'expand' => array( 'latest_charge' ),
			) );
			if ( is_object( $pi_expanded->latest_charge ) ) {
				$this->store_card_meta_from_charge( $pi_id, $pi_expanded->latest_charge );
			}
		} catch ( \Exception $e ) {
			// Non-fatal.
		}
	}

	/**
	 * Handles invoice.payment_failed.
	 *
	 * @param object $invoice Invoice snapshot from the event.
	 */
	private function on_invoice_payment_failed( $invoice ) {
		$pi_id = is_string( $invoice->payment_intent )
			? $invoice->payment_intent
			: ( is_object( $invoice->payment_intent ) ? $invoice->payment_intent->id : null );

		if ( $pi_id ) {
			$this->update_payment_by_intent_id( $pi_id, 'failed' );
		}
	}

	/**
	 * Stores card brand and last4 on the wpzf-payment post for a given PI.
	 *
	 * @param string $pi_id  Stripe PaymentIntent ID.
	 * @param object $charge Stripe Charge object (already expanded).
	 */
	private function store_card_meta_from_charge( $pi_id, $charge ) {
		if ( empty( $charge->payment_method_details->card ) ) {
			return;
		}

		$brand = sanitize_text_field( ucfirst( $charge->payment_method_details->card->brand ?? '' ) );
		$last4 = sanitize_text_field( $charge->payment_method_details->card->last4 ?? '' );

		if ( ! $brand && ! $last4 ) {
			return;
		}

		$posts = get_posts( array(
			'post_type'      => 'wpzf-payment',
			'post_status'    => 'publish',
			'posts_per_page' => 1,
			'meta_query'     => array(
				array(
					'key'   => '_wpzf_txn_payment_intent_id',
					'value' => sanitize_text_field( $pi_id ),
				),
			),
		) );

		if ( ! empty( $posts ) ) {
			update_post_meta( $posts[0]->ID, '_wpzf_txn_payment_method', $brand );
			update_post_meta( $posts[0]->ID, '_wpzf_txn_card_last4',     $last4 );
		}
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
		$currency     = strtolower( get_option( 'wpzf_payment_currency', 'usd' ) );
		$payment_type = get_post_meta( $form_id, '_wpzf_stripe_payment_type', true ) ?: 'one-time';

		try {
			$this->init_stripe();

			if ( 'recurring' === $payment_type ) {
				return $this->create_subscription_intent( $request, $form_post, $amount, $currency );
			}

			$customer_email = sanitize_email( $request->get_param( 'customer_email' ) ?: '' );
			$customer_name  = sanitize_text_field( $request->get_param( 'customer_name' ) ?: '' );

			$customer_args = array( 'metadata' => array( 'wpzf_form_id' => $form_id ) );
			if ( $customer_email ) {
				$customer_args['email'] = $customer_email;
			}
			if ( $customer_name ) {
				$customer_args['name'] = $customer_name;
			}
			$customer = \Stripe\Customer::create( $customer_args );

			$intent_params = array(
				'amount'                    => $amount,
				'currency'                  => $currency,
				'automatic_payment_methods' => array( 'enabled' => true ),
				'customer'                  => $customer->id,
				'receipt_email'             => $customer_email ?: null,
				'setup_future_usage'        => 'off_session',
				'description'               => get_post_meta( $form_id, '_wpzf_stripe_payment_description', true ) ?: '',
				'metadata'                  => array( 'wpzf_form_id' => $form_id ),
			);

			$fee = $this->calculate_application_fee( $amount );
			if ( $fee > 0 ) {
				$intent_params['application_fee_amount'] = $fee;
			}

			$intent = \Stripe\PaymentIntent::create( $intent_params );

			$this->create_payment_post(
				$form_id,
				$intent->id,
				$amount,
				$currency,
				$customer_email
			);

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

	/**
	 * Creates a Stripe Subscription for recurring payments.
	 * Returns the first invoice's PaymentIntent client_secret so the frontend
	 * can confirm the card with the same stripe.confirmCardPayment() call.
	 *
	 * @param WP_REST_Request $request
	 * @param WP_Post         $form_post
	 * @param int             $amount    Amount in cents (used as the price).
	 * @param string          $currency  ISO currency code.
	 * @return WP_REST_Response|WP_Error
	 */
	private function create_subscription_intent( WP_REST_Request $request, WP_Post $form_post, $amount, $currency ) {
		$form_id     = $form_post->ID;
		$period      = get_post_meta( $form_id, '_wpzf_stripe_recurring_period', true ) ?: 'month';
		$description = get_post_meta( $form_id, '_wpzf_stripe_payment_description',      true ) ?: '';

		// Read customer details from submitted POST data if available (not yet submitted,
		// so we use placeholder values; the webhook will receive the real data later).
		$customer_email_field = get_post_meta( $form_id, '_wpzf_stripe_customer_email', true );
		$customer_name_field  = get_post_meta( $form_id, '_wpzf_stripe_customer_name',  true );
		$customer_email       = sanitize_email( $request->get_param( 'customer_email' ) ?: '' );
		$customer_name        = sanitize_text_field( $request->get_param( 'customer_name' ) ?: '' );

		// Create or retrieve Stripe Customer.
		$customer_args = array( 'metadata' => array( 'wpzf_form_id' => $form_id ) );
		if ( $customer_email ) {
			$customer_args['email'] = $customer_email;
		}
		if ( $customer_name ) {
			$customer_args['name'] = $customer_name;
		}
		$customer = \Stripe\Customer::create( $customer_args );

		// Create an inline Price so no pre-existing Product is required.
		$price = \Stripe\Price::create( array(
			'unit_amount'  => $amount,
			'currency'     => $currency,
			'recurring'    => array( 'interval' => $period ),
			'product_data' => array(
				'name' => $description ?: get_the_title( $form_id ),
			),
		) );

		// Create the Subscription with payment_behavior=default_incomplete.
		// Stripe API >= 2025-03-31.basil removed the `payment_intent` field
		// from the Invoice object. Use `confirmation_secret` instead to obtain
		// the client_secret needed by the Payment Element on the frontend.
		$sub_params = array(
			'customer'         => $customer->id,
			'items'            => array( array( 'price' => $price->id ) ),
			'payment_behavior' => 'default_incomplete',
			'payment_settings' => array( 'save_default_payment_method' => 'on_subscription' ),
			'expand'           => array(
				'latest_invoice.confirmation_secret',
				'latest_invoice.payments',
			),
			'metadata'         => array( 'wpzf_form_id' => $form_id ),
		);

		$fee_percent = defined( 'WPZOOM_FORMS_PRO' ) ? 0 : ( self::FEE_RATE * 100 );
		if ( $fee_percent > 0 ) {
			$sub_params['application_fee_percent'] = $fee_percent;
		}

		$subscription = \Stripe\Subscription::create( $sub_params );

		$latest_invoice = $subscription->latest_invoice;
		$client_secret  = null;
		$intent_id      = null;

		if ( is_object( $latest_invoice ) && isset( $latest_invoice->confirmation_secret ) ) {
			$client_secret = $latest_invoice->confirmation_secret->client_secret ?? null;
		}

		// Fallback: retrieve the invoice directly and expand confirmation_secret.
		if ( ! $client_secret ) {
			$inv_id = is_object( $latest_invoice ) ? $latest_invoice->id : $latest_invoice;
			if ( $inv_id ) {
				$invoice       = \Stripe\Invoice::retrieve( array( 'id' => $inv_id, 'expand' => array( 'confirmation_secret', 'payments' ) ) );
				$client_secret = $invoice->confirmation_secret->client_secret ?? null;
				$latest_invoice = $invoice;
			}
		}

		// Extract the PaymentIntent ID from the invoice's payments array.
		if ( is_object( $latest_invoice ) && isset( $latest_invoice->payments->data ) ) {
			foreach ( $latest_invoice->payments->data as $inv_payment ) {
				$pi = $inv_payment->payment->payment_intent ?? null;
				if ( $pi ) {
					$intent_id = is_object( $pi ) ? $pi->id : $pi;
					break;
				}
			}
		}

		// Regex fallback: client_secret format is pi_xxx_secret_yyy.
		if ( ! $intent_id && $client_secret && preg_match( '/^(pi_[^_]+)_secret_/', $client_secret, $m ) ) {
			$intent_id = $m[1];
		}

		if ( $client_secret ) {
			$this->create_payment_post(
				$form_id,
				$intent_id ?: $subscription->id,
				$amount,
				$currency,
				$customer_email
			);

			return new WP_REST_Response(
				array(
					'client_secret'     => $client_secret,
					'payment_intent_id' => $intent_id,
					'subscription_id'   => $subscription->id,
				),
				200
			);
		}

		// Stripe returns a pending_setup_intent when the first period is free (trial).
		$pending_si = $subscription->pending_setup_intent ?? null;
		if ( ! empty( $pending_si ) ) {
			$si = is_string( $pending_si ) ? \Stripe\SetupIntent::retrieve( $pending_si ) : $pending_si;

			$this->create_payment_post(
				$form_id,
				$subscription->id,
				$amount,
				$currency,
				$customer_email
			);

			return new WP_REST_Response(
				array(
					'client_secret'   => $si->client_secret,
					'subscription_id' => $subscription->id,
					'setup_intent'    => true,
				),
				200
			);
		}

		return new WP_Error(
			'stripe_no_intent',
			__( 'Payment could not be initialised. Please try again or contact support.', 'wpzoom-forms' ),
			array( 'status' => 400 )
		);
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
		$client_id    = self::STRIPE_CLIENT_ID;
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

		$webhook_result = $this->auto_register_webhook( $access_token, $is_test );

		return new WP_REST_Response( array( 'connected' => true, 'webhook_auto_setup' => $webhook_result ), 200 );
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

		$client_id    = self::STRIPE_CLIENT_ID;
		$expected_sig = hash_hmac( 'sha256', $access_token . '|' . $account_id, $client_id );

		if ( ! hash_equals( $expected_sig, $proxy_sig ) ) {
			wp_send_json_error( 'Invalid proxy signature. Ensure STRIPE_CLIENT_ID is defined in the code and matches the proxy.' );
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

		$webhook_result = $this->auto_register_webhook( $access_token, $is_test );

		wp_send_json_success( array( 'connected' => true, 'webhook_auto_setup' => $webhook_result ) );
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

		$client_id = self::STRIPE_CLIENT_ID;

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
			$client_id = self::STRIPE_CLIENT_ID;
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

		// Delete any auto-registered webhook endpoints before clearing credentials.
		$live_token = (string) get_option( 'wpzf_stripe_access_token', '' );
		if ( ! empty( $live_token ) ) {
			$this->delete_webhook_endpoint( $live_token, false );
		}
		$test_token = (string) get_option( 'wpzf_stripe_test_access_token', '' );
		if ( ! empty( $test_token ) ) {
			$this->delete_webhook_endpoint( $test_token, true );
		}

		delete_option( 'wpzf_stripe_access_token' );
		delete_option( 'wpzf_stripe_test_access_token' );
		delete_option( 'wpzf_stripe_publishable_key' );
		delete_option( 'wpzf_stripe_test_publishable_key' );
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
	public function create_payment_post( $form_id, $payment_intent_id, $amount, $currency, $customer_email = '', $submission_id = 0 ) {
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
				'_wpzf_txn_test_mode'         => $this->is_test_mode() ? '1' : '0',
				'_wpzf_txn_submission_id'     => absint( $submission_id ),
			),
		), true );

		if ( is_wp_error( $post_id ) ) {
			return $post_id;
		}

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
			return false;
		}

		$post_id = $posts[0]->ID;
		update_post_meta( $post_id, '_wpzf_txn_status', sanitize_text_field( $status ) );

		if ( null !== $amount ) {
			update_post_meta( $post_id, '_wpzf_txn_amount', absint( $amount ) );
		}

		return true;
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
		\Stripe\Stripe::setApiVersion( '2026-02-25.clover' );
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
	 * Shows an admin notice on the Payments list when no webhook secret is set.
	 */
	public function maybe_show_webhook_notice() {
		$screen = get_current_screen();
		if ( ! $screen || 'edit-wpzf-payment' !== $screen->id ) {
			return;
		}

		if ( ! $this->is_connected() ) {
			return;
		}

		$live_secret = (string) get_option( 'wpzf_stripe_webhook_secret', '' );
		$test_secret = (string) get_option( 'wpzf_stripe_test_webhook_secret', '' );

		if ( $live_secret || $test_secret ) {
			return;
		}

		$settings_url = $this->payments_settings_url();
		printf(
			'<div class="notice notice-warning"><p>%s</p></div>',
			wp_kses(
				sprintf(
					/* translators: %s: URL to the Payments settings tab */
					__( '<strong>Stripe webhooks are not configured.</strong> Payment statuses will remain "Incomplete" until you add your webhook secret in <a href="%s">Payments Settings</a>.', 'wpzoom-forms' ),
					esc_url( $settings_url )
				),
				array(
					'strong' => array(),
					'a'      => array( 'href' => array() ),
				)
			)
		);
	}

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
				echo esc_html( wpzf_format_price( $amount, $currency, true ) );
				break;

			case 'wpzf_txn_status':
				$status = (string) get_post_meta( $post_id, '_wpzf_txn_status', true );
				$labels = array(
					'paid'     => array( 'label' => __( 'Processed', 'wpzoom-forms' ), 'bg' => '#e2f3d2', 'color' => '#678C23' ),
					'pending'  => array( 'label' => __( 'Incomplete', 'wpzoom-forms' ), 'bg' => '#fef3c7', 'color' => '#92400e', ),
					'failed'   => array( 'label' => __( 'Failed',    'wpzoom-forms' ), 'bg' => '#fee2e2', 'color' => '#991b1b', ),
					'refunded' => array( 'label' => __( 'Refunded',  'wpzoom-forms' ), 'bg' => '#f3f4f6', 'color' => '#374151', ),
				);
				$info = isset( $labels[ $status ] ) ? $labels[ $status ] : array( 'label' => ucfirst( $status ), 'color' => '#6e7781' );
				printf(
					'<span style="background-color:%s;color:%s;padding:2px 8px;border-radius:3px;font-size:11px;font-weight:600;">%s</span>',
					esc_attr( $info['bg'] ),
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
	// Webhook Auto-Registration
	// -------------------------------------------------------------------------

	/**
	 * Automatically registers a Stripe webhook endpoint for this site.
	 *
	 * Calls the WPZOOM proxy, which creates a Connect webhook on the platform
	 * account pointing at this site's REST endpoint. Stores the endpoint ID and
	 * signing secret returned by the proxy.
	 *
	 * @param string $access_token Unused — kept for API compatibility.
	 * @param bool   $is_test      True when registering for test mode.
	 * @return array {success: bool, endpoint_id?: string, error?: string}
	 */
	public function auto_register_webhook( $access_token, $is_test ) {
		$webhook_url = rest_url( 'wpzoom-forms/v1/stripe/webhook' );
		$account_id  = (string) get_option( 'wpzf_stripe_account_id', '' );
		$sig         = hash_hmac( 'sha256', $webhook_url . '|' . $account_id, self::STRIPE_CLIENT_ID );

		$response = wp_remote_post( self::PROXY_REGISTER_WEBHOOK_URL, array(
			'timeout' => 20,
			'headers' => array( 'Content-Type' => 'application/x-www-form-urlencoded' ),
			'body'    => array(
				'webhook_url' => $webhook_url,
				'account_id'  => $account_id,
				'sig'         => $sig,
				'is_test'     => $is_test ? 1 : 0,
			),
		) );

		if ( is_wp_error( $response ) ) {
			return array( 'success' => false, 'error' => $response->get_error_message() );
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( ! empty( $body['error'] ) ) {
			return array( 'success' => false, 'error' => $body['error'] );
		}

		if ( empty( $body['endpoint_id'] ) ) {
			return array( 'success' => false, 'error' => 'Proxy request failed.' );
		}

		$endpoint_id_option = $is_test ? 'wpzf_stripe_test_webhook_endpoint_id' : 'wpzf_stripe_webhook_endpoint_id';
		$secret_option      = $is_test ? 'wpzf_stripe_test_webhook_secret'       : 'wpzf_stripe_webhook_secret';

		update_option( $endpoint_id_option, $body['endpoint_id'], false );
		update_option( $secret_option,      $body['secret'] ?? '', false );

		return array( 'success' => true, 'endpoint_id' => $body['endpoint_id'] );
	}

	/**
	 * Deletes a previously auto-registered Stripe webhook endpoint.
	 *
	 * Calls the WPZOOM proxy to delete the Connect webhook from the platform
	 * account. Silently ignores errors (the endpoint may have already been
	 * deleted from the Stripe Dashboard). Always clears the stored options.
	 *
	 * @param string $access_token Unused — kept for API compatibility.
	 * @param bool   $is_test      True when deleting the test-mode endpoint.
	 */
	public function delete_webhook_endpoint( $access_token, $is_test ) {
		$endpoint_id_option = $is_test ? 'wpzf_stripe_test_webhook_endpoint_id' : 'wpzf_stripe_webhook_endpoint_id';
		$secret_option      = $is_test ? 'wpzf_stripe_test_webhook_secret'       : 'wpzf_stripe_webhook_secret';

		$endpoint_id = (string) get_option( $endpoint_id_option, '' );

		if ( ! empty( $endpoint_id ) ) {
			$sig = hash_hmac( 'sha256', 'delete-webhook|' . $endpoint_id, self::STRIPE_CLIENT_ID );

			wp_remote_post( self::PROXY_DELETE_WEBHOOK_URL, array(
				'timeout' => 15,
				'headers' => array( 'Content-Type' => 'application/x-www-form-urlencoded' ),
				'body'    => array(
					'endpoint_id' => $endpoint_id,
					'sig'         => $sig,
				),
			) );
			// Silently ignore any errors — endpoint may already be gone.
		}

		delete_option( $endpoint_id_option );
		delete_option( $secret_option );
	}

	/**
	 * AJAX handler: manually trigger auto webhook setup.
	 *
	 * Checks nonce (wpzf_stripe_connect) and manage_options capability,
	 * detects current mode, reads the right access token, and calls
	 * auto_register_webhook().
	 */
	public function ajax_setup_webhook() {
		check_ajax_referer( 'wpzf_stripe_connect', 'nonce' );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( 'Permission denied.', 403 );
		}

		$live_token = (string) get_option( 'wpzf_stripe_access_token', '' );
		$test_token = (string) get_option( 'wpzf_stripe_test_access_token', '' );

		if ( empty( $live_token ) && empty( $test_token ) ) {
			wp_send_json_error( 'No access token available. Please connect your Stripe account first.' );
		}

		$results     = array();
		$any_success = false;
		$last_error  = '';

		if ( ! empty( $live_token ) ) {
			$r               = $this->auto_register_webhook( $live_token, false );
			$results['live'] = $r;
			if ( $r['success'] ) {
				$any_success = true;
			} else {
				$last_error = $r['error'] ?? 'Unknown error.';
			}
		}

		if ( ! empty( $test_token ) ) {
			$r               = $this->auto_register_webhook( $test_token, true );
			$results['test'] = $r;
			if ( $r['success'] ) {
				$any_success = true;
			} else {
				$last_error = $r['error'] ?? 'Unknown error.';
			}
		}

		if ( $any_success ) {
			wp_send_json_success( $results );
		} else {
			wp_send_json_error( $last_error );
		}
	}

	/**
	 * AJAX handler: delete the auto-registered webhook endpoint.
	 *
	 * Checks nonce (wpzf_stripe_connect) and manage_options capability,
	 * detects current mode, reads the right access token, and calls
	 * delete_webhook_endpoint().
	 */
	public function ajax_delete_webhook() {
		check_ajax_referer( 'wpzf_stripe_connect', 'nonce' );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( 'Permission denied.', 403 );
		}

		$live_token = (string) get_option( 'wpzf_stripe_access_token', '' );
		$test_token = (string) get_option( 'wpzf_stripe_test_access_token', '' );

		if ( ! empty( $live_token ) ) {
			$this->delete_webhook_endpoint( $live_token, false );
		}
		if ( ! empty( $test_token ) ) {
			$this->delete_webhook_endpoint( $test_token, true );
		}

		wp_send_json_success( array( 'deleted' => true ) );
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
