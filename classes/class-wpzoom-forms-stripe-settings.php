<?php
/**
 * Class WPZOOM Forms Stripe Settings
 *
 * Injects the "Payments" tab into the plugin settings page and renders
 * either the "Connect with Stripe" UI (State A) or the connected account
 * details UI (State B).
 *
 * @since   1.4.0
 * @package WPZOOM_Forms
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class WPZOOM_Forms_Stripe_Settings
 */
class WPZOOM_Forms_Stripe_Settings {

	/**
	 * Option group for the payments settings.
	 */
	const OPTION_GROUP = 'wpzf-payments-settings';

	/**
	 * The Constructor.
	 */
	public function __construct() {
		// Inject the Payments tab after the main settings are initialised.
		add_action( 'admin_init', array( $this, 'register_payments_settings' ), 15 );
		add_action( 'admin_init', array( $this, 'append_payments_tab' ),        15 );
	}

	// -------------------------------------------------------------------------
	// Settings Registration
	// -------------------------------------------------------------------------

	/**
	 * Registers the Payments settings section and fields with the Settings API.
	 */
	public function register_payments_settings() {
		register_setting(
			self::OPTION_GROUP,
			WPZOOM_Forms_Settings::$option,
			array(
				'sanitize_callback' => array( $this, 'sanitize_settings' ),
			)
		);

		add_settings_section(
			'wpzoom_section_payments',
			'',
			array( $this, 'section_payments_cb' ),
			self::OPTION_GROUP
		);

		add_settings_field(
			'wpzf_stripe_test_mode',
			esc_html__( 'Test Mode', 'wpzoom-forms' ),
			array( $this, 'field_test_mode_cb' ),
			self::OPTION_GROUP,
			'wpzoom_section_payments',
			array( 'label_for' => 'wpzf_stripe_test_mode' )
		);

		add_settings_field(
			'wpzf_payment_currency',
			esc_html__( 'Currency', 'wpzoom-forms' ),
			array( $this, 'field_currency_cb' ),
			self::OPTION_GROUP,
			'wpzoom_section_payments',
			array( 'label_for' => 'wpzf_payment_currency' )
		);

		// Webhook fields are only relevant once a Stripe account is connected.
		$stripe = WPZOOM_Forms_Stripe::instance();
		if ( $stripe->is_connected() ) {
			add_settings_field(
				'wpzf_stripe_webhooks',
				esc_html__( 'Webhooks', 'wpzoom-forms' ),
				array( $this, 'field_webhooks_cb' ),
				self::OPTION_GROUP,
				'wpzoom_section_payments'
			);
		}
	}

	/**
	 * Appends the Payments tab definition to WPZOOM_Forms_Settings::$settings.
	 */
	public function append_payments_tab() {
		$fields = array(
			array( 'id' => 'wpzf_stripe_test_mode' ),
			array( 'id' => 'wpzf_payment_currency' ),
		);

		$stripe = WPZOOM_Forms_Stripe::instance();
		if ( $stripe->is_connected() ) {
			$fields[] = array( 'id' => 'wpzf_stripe_webhooks' );
		}

		WPZOOM_Forms_Settings::$settings['payments'] = array(
			'tab_id'       => 'tab-payments',
			'tab_title'    => __( 'Payments', 'wpzoom-forms' ),
			'option_group' => self::OPTION_GROUP,
			'option_name'  => WPZOOM_Forms_Settings::$option,
			'sections'     => array(
				array(
					'id'       => 'wpzoom_section_payments',
					'title'    => '',
					'page'     => self::OPTION_GROUP,
					'callback' => array( $this, 'section_payments_cb' ),
					'fields'   => $fields,
				),
			),
		);
	}

	/**
	 * Sanitizes payment settings input on save.
	 *
	 * Only processes the two fields stored inside wpzf-settings; the Stripe
	 * OAuth tokens are stored separately via update_option() in the Stripe class.
	 *
	 * @param array $input Raw input from the form.
	 * @return array Merged sanitized options.
	 */
	public function sanitize_settings( $input ) {
		$existing = get_option( WPZOOM_Forms_Settings::$option, array() );

		if ( ! is_array( $existing ) ) {
			$existing = array();
		}

		if ( is_array( $input ) ) {
			$existing = array_merge( $existing, $input );
		}

		if ( isset( $input['wpzf_stripe_test_mode'] ) ) {
			$existing['wpzf_stripe_test_mode'] = '1';
			update_option( 'wpzf_stripe_test_mode', '1', false );
		} else {
			$existing['wpzf_stripe_test_mode'] = '0';
			update_option( 'wpzf_stripe_test_mode', '0', false );
		}

		if ( isset( $input['wpzf_payment_currency'] ) ) {
			$existing['wpzf_payment_currency'] = sanitize_text_field( $input['wpzf_payment_currency'] );
			update_option( 'wpzf_payment_currency', $existing['wpzf_payment_currency'], false );
		}

		$webhook_fields = array(
			'wpzf_stripe_test_webhook_secret',
			'wpzf_stripe_webhook_secret',
		);
		foreach ( $webhook_fields as $key ) {
			if ( isset( $input[ $key ] ) ) {
				$value = sanitize_text_field( $input[ $key ] );
				if ( ! empty( $value ) ) {
					update_option( $key, $value, false );
				}
			}
		}

		return $existing;
	}

	// -------------------------------------------------------------------------
	// Section Callback (State A / State B)
	// -------------------------------------------------------------------------

	/**
	 * Renders the main payments section: State A (not connected) or State B
	 * (connected).
	 */
	public function section_payments_cb() {
		$stripe = WPZOOM_Forms_Stripe::instance();

		?>
		<p style="margin-top:16px;padding:10px 14px;background:#fff8e1;border-left:4px solid #f0b429;border-radius:0 4px 4px 0;font-size:13px;">
			<?php
			echo wp_kses(
				sprintf(
					/* translators: %s: link to PRO upgrade */
					__( 'A <strong>3%% application fee</strong> applies per transaction. <a href="%s" target="_blank">Upgrade to WPZOOM Forms PRO</a> to remove this fee.', 'wpzoom-forms' ),
					'https://www.wpzoom.com/plugins/wpzoom-forms/?utm_source=wpadmin&utm_medium=wpzoom-forms-free&utm_campaign=stripe-payments-tab'
				),
				array(
					'strong' => array(),
					'a'      => array( 'href' => array(), 'target' => array() ),
				)
			);
			?>
		</p>
		<table class="form-table">
			<tbody>
				<tr>
					<th scope="row">
						<p><?php esc_html_e( 'Stripe', 'wpzoom-forms' ); ?></p>
					</th>
					<td>
						<?php
						if ( $stripe->is_connected() ) {
							$this->render_connected_state( $stripe );
						} else {
							$this->render_disconnected_state( $stripe );
						}
						?>
					</td>
				</tr>
			</tbody>
		</table>
		<?php
	}

	/**
	 * Renders State A: Stripe is not yet connected.
	 *
	 * @param WPZOOM_Forms_Stripe $stripe The Stripe instance.
	 */
	private function render_disconnected_state( WPZOOM_Forms_Stripe $stripe ) {
		$connect_url = $stripe->get_oauth_url();
		?>
		<div class="wpzf-stripe-connect-box" style="background:#fff;border:1px solid #c3c4c7;border-radius:4px;padding:20px 24px;max-width:620px;margin-bottom:20px;">
			<h3 style="margin-top:0;"><?php esc_html_e( 'Connect your Stripe account', 'wpzoom-forms' ); ?></h3>
			<p style="margin-bottom:16px;"><?php esc_html_e( 'Accept payments directly in your forms. Connect your Stripe account to get started.', 'wpzoom-forms' ); ?></p>
			<button
				type="button"
				id="wpzf-stripe-connect-btn"
				class="button button-primary"
				data-connect-url="<?php echo esc_url( $connect_url ); ?>"
				style="display:inline-flex;align-items:center;gap:6px;padding:0 16px;height:36px;font-size:14px;cursor:pointer;">
				<?php esc_html_e( 'Connect with Stripe', 'wpzoom-forms' ); ?>
			</button>
		</div>
		<?php $this->render_connect_popup_script(); ?>
		<?php
	}

	/**
	 * Renders State B: Stripe account is connected.
	 *
	 * @param WPZOOM_Forms_Stripe $stripe The Stripe instance.
	 */
	private function render_connected_state( WPZOOM_Forms_Stripe $stripe ) {
		$account       = $stripe->get_account_info();
		$display_name  = ! empty( $account['name'] ) ? $account['name'] : $account['email'];
		$disconnect_url = wp_nonce_url(
			admin_url( 'admin.php?wpzf_stripe_disconnect=1' ),
			'wpzf_stripe_disconnect'
		);
		$switch_url = $stripe->get_oauth_url();
		?>
		<div class="wpzf-stripe-connected-box" style="background:#fff;border:1px solid #c3c4c7;border-radius:4px;padding:20px 24px;max-width:620px;">
			<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
				<span style="display:inline-flex;align-items:center;justify-content:center;background:#d4edda;border-radius:50%;width:24px;height:24px;">
					<svg width="14" height="14" viewBox="0 0 20 20" fill="#1a7f37" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd"/></svg>
				</span>
				<span style="color:#1a7f37;">
					<?php
					printf(
						/* translators: %s: account name or email */
						esc_html__( 'Connected to %s', 'wpzoom-forms' ),
						'<strong>' . esc_html( $display_name ) . '</strong>'
					);
					?>
				</span>
			</div>

			<?php if ( ! empty( $account['email'] ) && $account['email'] !== $display_name ) : ?>
				<p style="margin:0 0 12px;color:#646970;font-size:13px;"><?php echo esc_html( $account['email'] ); ?></p>
			<?php endif; ?>

			<div style="display:flex;gap:10px;align-items:center;">
				<a href="<?php echo esc_url( $disconnect_url ); ?>"
				class="button button-secondary"
				onclick="return confirm('<?php echo esc_js( __( 'Are you sure you want to disconnect your Stripe account?', 'wpzoom-forms' ) ); ?>')">
					<?php esc_html_e( 'Disconnect Account', 'wpzoom-forms' ); ?>
				</a>
				<button
					type="button"
					id="wpzf-stripe-connect-btn"
					class="button-link"
					data-connect-url="<?php echo esc_url( $switch_url ); ?>"
					style="font-size:13px;cursor:pointer;background:none;border:none;padding:0;color:#2271b1;text-decoration:underline;">
					<?php esc_html_e( 'Switch Account', 'wpzoom-forms' ); ?>
				</button>
			</div>
		</div>

		<?php $this->render_connect_popup_script(); ?>
		<?php
	}

	// -------------------------------------------------------------------------
	// Field Callbacks
	// -------------------------------------------------------------------------

	/**
	 * Renders the Test Mode toggle field.
	 */
	public function field_test_mode_cb() {
		$value   = get_option( 'wpzf_stripe_test_mode', '0' );
		$options = get_option( WPZOOM_Forms_Settings::$option, array() );
		$checked = ! empty( $options['wpzf_stripe_test_mode'] ) ? $options['wpzf_stripe_test_mode'] : $value;
		$input_name = esc_attr( WPZOOM_Forms_Settings::$option ) . '[wpzf_stripe_test_mode]';
		?>
		<style>
		.wpzf-toggle{position:relative;display:inline-flex;align-items:center;gap:10px;cursor:pointer;user-select:none;}
		.wpzf-toggle input{position:absolute;opacity:0;width:0;height:0;}
		.wpzf-toggle__track{position:relative;width:40px;height:22px;background:#c3c4c7;border-radius:11px;transition:background .2s;}
		.wpzf-toggle input:checked+.wpzf-toggle__track{background:#3496ff;}
		.wpzf-toggle__thumb{position:absolute;top:3px;left:3px;width:16px;height:16px;background:#fff;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:transform .2s;}
		.wpzf-toggle input:checked+.wpzf-toggle__track .wpzf-toggle__thumb{transform:translateX(18px);}
		.wpzf-toggle input:focus+.wpzf-toggle__track{outline:2px solid #3496ff;outline-offset:2px;}
		</style>
		<label class="wpzf-toggle" for="wpzf_stripe_test_mode">
			<input
				type="checkbox"
				id="wpzf_stripe_test_mode"
				name="<?php echo esc_attr( $input_name ); ?>"
				value="1"
				<?php checked( '1', $checked ); ?>
			/>
			<span class="wpzf-toggle__track">
				<span class="wpzf-toggle__thumb"></span>
			</span>
			<span><?php esc_html_e( 'Enable test mode', 'wpzoom-forms' ); ?></span>
		</label>
		<p class="description"><?php esc_html_e( 'When enabled, no real payments are processed. Use Stripe test card numbers to simulate transactions.', 'wpzoom-forms' ); ?></p>

		<!-- Test Mode confirmation modal -->
		<div id="wpzf-test-mode-modal" style="display:none;position:fixed;inset:0;z-index:100000;align-items:center;justify-content:center;">
			<div id="wpzf-test-mode-backdrop" style="position:absolute;inset:0;background:rgba(0,0,0,0.55);"></div>
			<div style="position:relative;background:#fff;border-radius:8px;padding:32px 28px 24px;max-width:380px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,0.18);text-align:center;">
				<div style="width:52px;height:52px;border-radius:50%;background:#fff8e1;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM120-560q-17 0-28.5-13T82-603q8-75 42-139.5T211-855q13-11 29.5-10t26.5 15q10 14 8 30t-15 28q-39 37-64 86t-33 106q-2 17-14 28.5T120-560Zm720 0q-17 0-29-11.5T797-600q-8-57-33-106t-64-86q-13-12-15-28t8-30q10-14 26.5-15t29.5 10q53 48 87 112.5T878-603q2 17-9.5 30T840-560Z"/></svg>
				</div>
				<h2><?php esc_html_e( 'Enable Test Mode?', 'wpzoom-forms' ); ?></h2>
				<p style="color:#757575;"><?php esc_html_e( 'In test mode, payments are simulated only. Remember to disable test mode and use live keys before launching.  Your Stripe account must be connected for test mode to work.', 'wpzoom-forms' ); ?></p>
				<div style="display:flex;justify-content:flex-end;margin-top:24px;">
					<button type="button" id="wpzf-test-mode-confirm" class="button button-primary"><?php esc_html_e( 'OK', 'wpzoom-forms' ); ?></button>
				</div>
			</div>
		</div>

		<script>
		( function () {
			var checkbox = document.getElementById( 'wpzf_stripe_test_mode' );
			var modal    = document.getElementById( 'wpzf-test-mode-modal' );
			var backdrop = document.getElementById( 'wpzf-test-mode-backdrop' );
			var btnConfirm = document.getElementById( 'wpzf-test-mode-confirm' );

			if ( ! checkbox || ! modal ) return;

			function openModal() {
				modal.style.display = 'flex';
				document.body.style.overflow = 'hidden';
				btnConfirm.focus();
			}

			function closeModal() {
				modal.style.display = 'none';
				document.body.style.overflow = '';
			}

			checkbox.addEventListener( 'change', function () {
				if ( this.checked ) {
					// Revert immediately; only check for real if confirmed.
					this.checked = false;
					openModal();
				}
			} );

			btnConfirm.addEventListener( 'click', function () {
				checkbox.checked = true;
				closeModal();
			} );

			backdrop.addEventListener( 'click', function () {
				checkbox.checked = false;
				closeModal();
			} );

			document.addEventListener( 'keydown', function ( e ) {
				if ( e.key === 'Escape' && modal.style.display === 'flex' ) {
					checkbox.checked = false;
					closeModal();
				}
			} );
		} )();
		</script>
		<?php
	}

	/**
	 * Renders the Currency select field.
	 */
	public function field_currency_cb() {
		$options = get_option( WPZOOM_Forms_Settings::$option, array() );
		$value   = ! empty( $options['wpzf_payment_currency'] ) ? $options['wpzf_payment_currency'] : 'USD';

		$currencies = array(
			'USD' => __( 'US Dollar (USD)', 'wpzoom-forms' ),
			'EUR' => __( 'Euro (EUR)', 'wpzoom-forms' ),
			'GBP' => __( 'British Pound (GBP)', 'wpzoom-forms' ),
			'CAD' => __( 'Canadian Dollar (CAD)', 'wpzoom-forms' ),
			'AUD' => __( 'Australian Dollar (AUD)', 'wpzoom-forms' ),
			'JPY' => __( 'Japanese Yen (JPY)', 'wpzoom-forms' ),
			'CHF' => __( 'Swiss Franc (CHF)', 'wpzoom-forms' ),
			'SEK' => __( 'Swedish Krona (SEK)', 'wpzoom-forms' ),
			'NOK' => __( 'Norwegian Krone (NOK)', 'wpzoom-forms' ),
			'DKK' => __( 'Danish Krone (DKK)', 'wpzoom-forms' ),
			'NZD' => __( 'New Zealand Dollar (NZD)', 'wpzoom-forms' ),
			'SGD' => __( 'Singapore Dollar (SGD)', 'wpzoom-forms' ),
			'HKD' => __( 'Hong Kong Dollar (HKD)', 'wpzoom-forms' ),
			'MXN' => __( 'Mexican Peso (MXN)', 'wpzoom-forms' ),
			'BRL' => __( 'Brazilian Real (BRL)', 'wpzoom-forms' ),
		);
		?>
		<select
			id="wpzf_payment_currency"
			name="<?php echo esc_attr( WPZOOM_Forms_Settings::$option ); ?>[wpzf_payment_currency]"
		>
			<?php foreach ( $currencies as $code => $label ) : ?>
				<option value="<?php echo esc_attr( $code ); ?>" <?php selected( $value, $code ); ?>>
					<?php echo esc_html( $label ); ?>
				</option>
			<?php endforeach; ?>
		</select>
		<?php
	}

	/**
	 * Outputs the inline JS that opens the Stripe Connect popup and listens for
	 * the postMessage sent by handle_oauth_callback() when the flow completes.
	 *
	 * Used by both State A (Connect button) and State B (Switch Account button).
	 * Both share the same trigger element id: wpzf-stripe-connect-btn.
	 */
	private function render_connect_popup_script() {
		$ajax_url = admin_url( 'admin-ajax.php' );
		$nonce    = wp_create_nonce( 'wpzf_stripe_connect' );
		?>
		<script>
		( function () {
			var btn = document.getElementById( 'wpzf-stripe-connect-btn' );
			if ( ! btn ) { return; }

			var connectBox   = btn.closest( '.wpzf-stripe-connect-box, .wpzf-stripe-connected-box' );
			var popup        = null;
			var ajaxUrl      = <?php echo wp_json_encode( $ajax_url ); ?>;
			var nonce        = <?php echo wp_json_encode( $nonce ); ?>;
			var originalHtml = btn.innerHTML;
			var saveInFlight = false;

			function setLoading( on ) {
				btn.disabled  = on;
				btn.innerHTML = on
					? '<span style="display:inline-flex;align-items:center;gap:6px;">' +
					  '<svg width="14" height="14" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" style="animation:wpzf-spin 0.8s linear infinite;">' +
					  '<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".3" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"/></g></g></svg>' +
					  'Connecting…</span>'
					: originalHtml;
			}

			function showNotice( type, message ) {
				var existing = document.getElementById( 'wpzf-stripe-notice' );
				if ( existing ) { existing.remove(); }

				var colors = {
					success: { bg: '#edfaef', border: '#1a7f37', text: '#1a7f37' },
					error:   { bg: '#fdf2f2', border: '#cf222e', text: '#cf222e' },
					info:    { bg: '#f0f6fc', border: '#0969da', text: '#0969da' },
				};
				var c = colors[ type ] || colors.info;

				var el = document.createElement( 'div' );
				el.id = 'wpzf-stripe-notice';
				el.style.cssText =
					'margin-top:12px;padding:10px 14px;border-left:4px solid ' + c.border + ';' +
					'background:' + c.bg + ';border-radius:0 4px 4px 0;font-size:13px;color:' + c.text + ';';
				el.textContent = message;

				var target = connectBox || btn.parentNode;
				target.appendChild( el );
			}

			// Inject spinner keyframes once.
			if ( ! document.getElementById( 'wpzf-spinner-style' ) ) {
				var style = document.createElement( 'style' );
				style.id  = 'wpzf-spinner-style';
				style.textContent = '@keyframes wpzf-spin { to { transform: rotate(360deg); } }';
				document.head.appendChild( style );
			}

			btn.addEventListener( 'click', function ( e ) {
				e.preventDefault();
				e.stopPropagation();
				var url  = btn.dataset.connectUrl;
				var w = 620, h = 720;
				var left = Math.round( ( screen.width  / 2 ) - ( w / 2 ) );
				var top  = Math.round( ( screen.height / 2 ) - ( h / 2 ) );
				popup = window.open(
					url,
					'wpzf_stripe_connect',
					'width=' + w + ',height=' + h + ',top=' + top + ',left=' + left +
					',scrollbars=yes,resizable=yes'
				);
				if ( popup ) { popup.focus(); }
			} );

			function onStripeMessage( e ) {
				// Only respond to our specific payload — the HMAC is verified
				// server-side so a strict origin lock here would silently break
				// proxies that send the postMessage from a redirect sub-page.
				if ( ! e.data || e.data.wpzf_stripe !== 'callback' ) { return; }

				// Remove the listener and set the in-flight lock so a second
				// postMessage (some proxies re-send) cannot trigger a second save.
				window.removeEventListener( 'message', onStripeMessage );
				if ( saveInFlight ) { return; }
				saveInFlight = true;

				console.log( '[WPZF Stripe] postMessage received from origin:', e.origin, e.data );

				setLoading( true );
				showNotice( 'info', 'Saving your Stripe connection…' );

				var d = e.data;
				var body = new FormData();
				body.append( 'action',          'wpzf_stripe_save_connection' );
				body.append( 'nonce',           nonce );
				body.append( 'access_token',    d.access_token    || '' );
				body.append( 'publishable_key', d.publishable_key || '' );
				body.append( 'account_id',      d.account_id      || '' );
				body.append( 'account_name',    d.account_name    || '' );
				body.append( 'account_email',   d.account_email   || '' );
				body.append( 'sig',             d.sig             || '' );

				fetch( ajaxUrl, { method: 'POST', body: body } )
					.then( function ( r ) {
						if ( ! r.ok ) {
							throw new Error( 'Server returned HTTP ' + r.status );
						}
						return r.json();
					} )
					.then( function ( res ) {
						if ( popup && ! popup.closed ) { popup.close(); }

						if ( res.success ) {
							showNotice( 'success', 'Stripe account connected! Refreshing…' );
							setTimeout( function () { window.location.reload(); }, 800 );
						} else {
							saveInFlight = false;
							setLoading( false );
							var msg = ( typeof res.data === 'string' ? res.data : JSON.stringify( res.data ) ) || 'Unknown error.';
							console.error( '[WPZF Stripe] save-connection error:', msg );
							showNotice( 'error', 'Connection failed: ' + msg );
						}
					} )
					.catch( function ( err ) {
						if ( popup && ! popup.closed ) { popup.close(); }
						saveInFlight = false;
						setLoading( false );
						console.error( '[WPZF Stripe] fetch error:', err );
						showNotice( 'error', 'Network error: ' + err.message );
					} );
			}

			window.addEventListener( 'message', onStripeMessage );
		} )();
		</script>
		<?php
	}

	/**
	 * Renders the unified Webhooks field with two states:
	 *
	 * Shows an "auto-configured" badge + Remove button when a webhook endpoint
	 * ID is stored, or a "Set Up Automatically" button otherwise.
	 * Manual configuration fields are always visible below both states.
	 */
	public function field_webhooks_cb() {
		$auto_configured = ! empty( get_option( 'wpzf_stripe_webhook_endpoint_id', '' ) )
			|| ! empty( get_option( 'wpzf_stripe_test_webhook_endpoint_id', '' ) );

		$endpoint_url = rest_url( 'wpzoom-forms/v1/stripe/webhook' );
		$ajax_url     = admin_url( 'admin-ajax.php' );
		$nonce        = wp_create_nonce( 'wpzf_stripe_connect' );
		?>
		<div id="wpzf-webhook-wrap" style="max-width:560px;">

			<?php if ( $auto_configured ) : ?>
			
			<button type="button" id="wpzf-webhook-remove-btn" class="button button-secondary" style="margin-bottom:10px;">
				<?php esc_html_e( 'Remove & Reconfigure', 'wpzoom-forms' ); ?>
			</button>
			<br>
			<div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:10px;">
				<svg width="16" height="16" viewBox="0 0 20 20" fill="#1a7f37" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd"/></svg>
				<span style="color:#1a7f37;"><?php esc_html_e( 'Webhooks configured automatically', 'wpzoom-forms' ); ?></span>
			</div>
			<?php else : ?>
			<button type="button" id="wpzf-webhook-setup-btn" class="button button-primary" style="margin-bottom:6px;">
				<?php esc_html_e( 'Set Up Webhooks Automatically', 'wpzoom-forms' ); ?>
			</button>
			<div id="wpzf-webhook-notice-area"></div>
			<div style="margin-bottom:20px;"></div>
			<?php endif; ?>
			
			<?php $this->render_manual_webhook_fields( $endpoint_url ); ?>

		</div><?php

		?>
		<script>
		( function () {
			var ajaxUrl = <?php echo wp_json_encode( $ajax_url ); ?>;
			var nonce   = <?php echo wp_json_encode( $nonce ); ?>;

			// ---- Copy-to-clipboard ----
			document.addEventListener( 'click', function ( e ) {
				var btn = e.target.closest( '.wpzf-copy-endpoint' );
				if ( ! btn ) { return; }
				var text  = btn.getAttribute( 'data-clipboard-text' );
				var label = btn.querySelector( '.wpzf-copy-label' );
				navigator.clipboard.writeText( text ).then( function () {
					var original = label.textContent;
					label.textContent = <?php echo wp_json_encode( __( 'Copied!', 'wpzoom-forms' ) ); ?>;
					setTimeout( function () { label.textContent = original; }, 2000 );
				} );
			} );

			// ---- Spinner keyframes (once) ----
			if ( ! document.getElementById( 'wpzf-spinner-style' ) ) {
				var style = document.createElement( 'style' );
				style.id  = 'wpzf-spinner-style';
				style.textContent = '@keyframes wpzf-spin { to { transform: rotate(360deg); } }';
				document.head.appendChild( style );
			}

			function spinnerHtml( label ) {
				return '<span style="display:inline-flex;align-items:center;gap:6px;">' +
					'<svg width="14" height="14" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" style="animation:wpzf-spin 0.8s linear infinite;">' +
					'<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".3" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"/></g></g></svg>' +
					label + '</span>';
			}

			// ---- Set Up Webhooks Automatically ----
			var setupBtn = document.getElementById( 'wpzf-webhook-setup-btn' );
			if ( setupBtn ) {
				setupBtn.addEventListener( 'click', function () {
					var originalHtml = setupBtn.innerHTML;
					setupBtn.disabled = true;
					setupBtn.innerHTML = spinnerHtml( <?php echo wp_json_encode( __( 'Working…', 'wpzoom-forms' ) ); ?> );

					var body = new FormData();
					body.append( 'action', 'wpzf_stripe_setup_webhook' );
					body.append( 'nonce',  nonce );

					fetch( ajaxUrl, { method: 'POST', body: body } )
						.then( function ( r ) { return r.json(); } )
						.then( function ( res ) {
							if ( res.success ) {
								window.location.reload();
							} else {
								setupBtn.disabled = false;
								setupBtn.innerHTML = originalHtml;
								var noticeArea = document.getElementById( 'wpzf-webhook-notice-area' );
								var msg = ( typeof res.data === 'string' ? res.data : JSON.stringify( res.data ) ) || <?php echo wp_json_encode( __( 'Unknown error.', 'wpzoom-forms' ) ); ?>;
								noticeArea.innerHTML = '<p style="color:#cf222e;margin:4px 0 8px;">' + msg + '</p>';
							}
						} )
						.catch( function ( err ) {
							setupBtn.disabled = false;
							setupBtn.innerHTML = originalHtml;
							var noticeArea = document.getElementById( 'wpzf-webhook-notice-area' );
							noticeArea.innerHTML = '<p style="color:#cf222e;margin:4px 0 8px;">' + err.message + '</p>';
						} );
				} );
			}

			// ---- Remove & Reconfigure ----
			function bindRemoveBtn() {
				var removeBtn = document.getElementById( 'wpzf-webhook-remove-btn' );
				if ( ! removeBtn ) { return; }
				removeBtn.addEventListener( 'click', function () {
					removeBtn.disabled = true;
					removeBtn.innerHTML = spinnerHtml( <?php echo wp_json_encode( __( 'Removing…', 'wpzoom-forms' ) ); ?> );

					var body = new FormData();
					body.append( 'action', 'wpzf_stripe_delete_webhook' );
					body.append( 'nonce',  nonce );

					fetch( ajaxUrl, { method: 'POST', body: body } )
						.then( function ( r ) { return r.json(); } )
						.then( function () {
							window.location.reload();
						} )
						.catch( function () {
							window.location.reload();
						} );
				} );
			}

			bindRemoveBtn();
		} )();
		</script>
		<?php
	}

	/**
	 * Renders the manual webhook configuration fields (URL + secrets).
	 *
	 * @param string $endpoint_url The webhook endpoint URL.
	 */
	private function render_manual_webhook_fields( $endpoint_url ) {
		?>
		<table class="form-table" style="margin:0;">
			<tbody>
				<tr>
					<th scope="row" style="padding-left:0;"><?php esc_html_e( 'Endpoint URL', 'wpzoom-forms' ); ?></th>
					<td style="padding-left:0;">
						<div class="wpzf-webhook-endpoint-wrap">
							<input
								type="text"
								value="<?php echo esc_url( $endpoint_url ); ?>"
								class="regular-text"
								readonly
								onfocus="this.select();"
							/>
							<button
								type="button"
								class="button wpzf-copy-endpoint"
								data-clipboard-text="<?php echo esc_url( $endpoint_url ); ?>"
								title="<?php esc_attr_e( 'Copy to clipboard', 'wpzoom-forms' ); ?>"
							>
								<span class="dashicons dashicons-clipboard"></span>
								<span class="wpzf-copy-label"><?php esc_html_e( 'Copy', 'wpzoom-forms' ); ?></span>
							</button>
						</div>
						<p class="description"><?php esc_html_e( 'Use this URL when creating a webhook in your Stripe Dashboard.', 'wpzoom-forms' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row" style="padding-left:0;"><?php esc_html_e( 'Test Webhook Secret', 'wpzoom-forms' ); ?></th>
					<td style="padding-left:0;">
						<?php
						$this->render_webhook_secret_field(
							'wpzf_stripe_test_webhook_secret',
							sprintf(
								/* translators: %s: Stripe test webhooks URL */
								__( 'Signing secret from your <a href="%s" target="_blank">Stripe Test Dashboard &rarr; Webhooks</a>.', 'wpzoom-forms' ),
								'https://dashboard.stripe.com/test/webhooks'
							)
						);
						?>
					</td>
				</tr>
				<tr>
					<th scope="row" style="padding-left:0;"><?php esc_html_e( 'Live Webhook Secret', 'wpzoom-forms' ); ?></th>
					<td style="padding-left:0;">
						<?php
						$this->render_webhook_secret_field(
							'wpzf_stripe_webhook_secret',
							sprintf(
								/* translators: %s: Stripe live webhooks URL */
								__( 'Signing secret from your <a href="%s" target="_blank">Stripe Live Dashboard &rarr; Webhooks</a>.', 'wpzoom-forms' ),
								'https://dashboard.stripe.com/webhooks'
							)
						);
						?>
					</td>
				</tr>
			</tbody>
		</table>
		<?php
	}

	/**
	 * Renders a single webhook secret password input with description.
	 *
	 * @param string $option_key  WordPress option name.
	 * @param string $description HTML description (already partially escaped by caller).
	 */
	private function render_webhook_secret_field( $option_key, $description ) {
		$value = (string) get_option( $option_key, '' );
		?>
		<input
			type="password"
			id="<?php echo esc_attr( $option_key ); ?>"
			name="<?php echo esc_attr( WPZOOM_Forms_Settings::$option ); ?>[<?php echo esc_attr( $option_key ); ?>]"
			value="<?php echo esc_attr( $value ); ?>"
			class="regular-text"
			autocomplete="new-password"
		/>
		<p class="description">
			<?php
			echo wp_kses(
				$description,
				array(
					'a'    => array( 'href' => array(), 'target' => array() ),
					'code' => array(),
				)
			);
			?>
		</p>
		<?php
	}
}
