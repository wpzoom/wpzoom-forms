<?php
/**
 * Class WPZOOM Forms Settings Page
 *
 * @since   1.0.5
 * @package WPZOOM_Forms
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class for settings page.
 */
class WPZOOM_Forms_Settings {
	/**
	 * Option name
	 */
	public static $option = 'wpzf-settings';

	/**
	 * Store all default settings options.
	 *
	 * @static
	 */
	public static $defaults = array();

	/**
	 * Store all settings options.
	 *
	 * @static
	 */
	public static $settings = array();

	/**
	 * Active Tab.
	 */
	public static $active_tab;

	/**
	 * Class WPZOOM_Forms_Settings_Fields instance.
	 */
	public $_fields;

	/**
	 * Store Settings options.
	 */
	public static $options = array();

	/**
	 * License key
	 */
	public static $license_key = false;

	/**
	 * License status
	 */
	public static $license_status = false;

	/**
	 * The Constructor.
	 */
	public function __construct() {
		global $pagenow;

		self::$options = get_option( self::$option );

		// Check what page we are on.
		$page = isset( $_GET['page'] ) ? sanitize_text_field( $_GET['page'] ) : '';

		if ( is_admin() ) {
			add_action( 'admin_init', array( $this, 'settings_init' ) );
			add_action( 'admin_init', array( $this, 'set_defaults' ) );

			// Include admin scripts & styles
			add_action( 'admin_enqueue_scripts', array( $this, 'scripts' ) );

			// Do ajax request
			add_action( 'wp_ajax_wpzoom_reset_settings', array( $this, 'reset_settings' ) );

			// Only load if we are actually on the settings page.
			if ( WPZOOM_FORMS_SETTINGS_PAGE === $page ) {
				add_action( 'wpzoom_forms_admin_page', array( $this, 'settings_page' ) );
			}

			$this->_fields = new WPZOOM_Forms_Settings_Fields();

			add_action( 'wpzoom_forms_settings_after_main_container', array( $this, 'upsell_banner' ) );
		}
	}

	/**
	 * Set default values for setting options.
	 */
	public function set_defaults() {
		// Set active tab
		self::$active_tab = isset( $_GET['tab'] ) ? sanitize_text_field( $_GET['tab'] ) : 'tab-general';

		self::$defaults = self::get_defaults();

		if ( empty( self::$defaults ) ) {
			return false;
		}

		// If 'wpzoom-forms-settings' is empty update option with defaults values
		if ( empty( self::$options ) ) {
			self::update_option( self::$defaults );
		}

		// If new setting is added, update 'wpzoom-forms-settings' option
		if ( ! empty( self::$options ) ) {
			$new_settings = array_diff_key( self::$defaults, self::$options );
			if ( ! empty( $new_settings ) ) {
				self::update_option( array_merge( self::$options, $new_settings ) );
			}
		}

		return apply_filters( 'wpzoom_forms_set_settings_defaults', self::$defaults );
	}

	/**
	 * Update option value
	 *
	 * @param string|array $value
	 * @param string       $option
	 */
	public static function update_option( $value, $option = '', $autoload = null ) {
		if ( empty( $option ) ) {
			$option = self::$option;
		}

		if ( self::$options !== false ) {
			// The option already exists, so we just update it.
			update_option( $option, $value, $autoload );
		} else {
			// The option hasn't been added yet. We'll add it with $autoload set to 'no'.
			$deprecated = null;
			$autoload   = 'no';
			add_option( $option, $value, $deprecated, $autoload );
		}
	}

	/**
	 * Get default values of setting options.
	 *
	 * @static
	 */
	public static function get_defaults() {
		$defaults = array();

		foreach ( self::$settings as $key => $setting ) {
			if ( isset( $setting['sections'] ) && is_array( $setting['sections'] ) ) {
				foreach ( $setting['sections'] as $section ) {
					if ( isset( $section['fields'] ) && is_array( $section['fields'] ) ) {
						foreach ( $section['fields'] as $field ) {
							if ( isset( $field['args']['default'] ) ) {
								$defaults[ $field['id'] ] = (string) $field['args']['default'];
							}
						}
					}
				}
			}
		}

		return $defaults;
	}

	/**
	 * Get default value by option name
	 *
	 * @param string $option_name
	 * @static
	 * @return boolean
	 */
	public static function get_default_option_value( $option_name ) {
		return isset( self::$defaults[ $option_name ] ) ? self::$defaults[ $option_name ] : false;
	}

	/**
	 * Get license key
	 *
	 * @since 1.2.0
	 * @return string The License key
	 */
	public static function get_license_key() {
		return self::$license_key;
	}

	/**
	 * Get license status
	 *
	 * @since 1.2.0
	 * @return string The License status
	 */
	public static function get_license_status() {
		return self::$license_status;
	}

	/**
	 * Get setting options
	 *
	 * @since 1.2.0
	 * @return array
	 */
	public static function get_settings() {
		return apply_filters( 'wpzoom_forms_get_settings', self::$options );
	}

	/**
	 * Get setting option value
	 *
	 * @since 1.2.0
	 * @param string $option  Option name
	 * @return string|boolean
	 */
	public static function get( $option ) {
		return isset( self::$options[ $option ] ) ? self::$options[ $option ] : false;
	}

	/**
	 * Initilize all settings
	 */
	public function settings_init() {
		$premium_badge = '<span class="wpzoom-forms-badge wpzoom-forms-field-is_premium">' . __( 'Premium', 'wpzoom-forms' ) . '</span>';
		$soon_badge    = '<span class="wpzoom-forms-badge wpzoom-forms-field-is_coming_soon">' . __( 'Coming Soon', 'wpzoom-forms' ) . '</span>';

		self::$settings = array(
			'general'     => array(
				'tab_id'       => 'tab-general',
				'tab_title'    => __( 'General', 'wpzoom-forms' ),
				'option_group' => 'wpzoom-forms-settings-general',
				'option_name'  => self::$option,
				'sections'     => array(
					array(
						'id'       => 'wpzoom_section_general',
						'title'    => __( 'Styling', 'wpzoom-forms' ),
						'page'     => 'wpzoom-forms-settings-general',
						'callback' => array( $this, 'section_general_cb' ),
						'fields'   => array(
							array(
								'id'    => 'wpzf_use_theme_styles',
								'title' => esc_html__( 'Load default styling for forms', 'wpzoom-forms' ),
								'type'  => 'checkbox',
								'args'  => array(
									'label_for'   => 'wpzf_use_theme_styles',
									'class'       => 'wpzoom-forms-field',
									'description' => esc_html__( 'Uncheck this option if you want your current theme to handle the styling for forms.', 'wpzoom-forms' ),
									'default'     => true,
								),
							),
							array(
								'id'    => 'wpzf_global_assets_load',
								'title' => esc_html__( 'Load plugin assets globally', 'wpzoom-forms' ),
								'type'  => 'checkbox',
								'args'  => array(
									'label_for'   => 'wpzf_global_assets_load',
									'class'       => 'wpzoom-forms-field',
									'description' => esc_html__( 'If you want to embed a form using shortcodes in a page builder, enable this option to ensure all the needed assets are loaded.', 'wpzoom-forms' ),
									'default'     => true,
									
								),
							),
						),
					),
				),
			),
			'recaptcha' => array(
				'tab_id'       => 'tab-spam-protection',
				'tab_title'    => __( 'Spam Protection', 'wpzoom-forms' ),
				'option_group' => 'wpzf-spam-protection-settings',
				'option_name'  => self::$option,
				'sections'     => array(
					array(
						'id'       => 'wpzoom_section_recaptcha',
						'title'    => __( 'Spam Protection', 'wpzoom-forms' ),
						'page'     => 'wpzf-spam-protection-settings',
						'callback' => array( $this, 'section_recaptcha_cb' ),
						'after_section' => array( $this, 'section_recaptcha_after_cb' ),
						'fields'   => array(
							array(
								'id'    => 'wpzf_global_captcha_service',
								'title' => esc_html__( '', 'wpzoom-forms' ),
								'type'  => 'radio',
								'args'  => array(
									'label_for'   => 'wpzf_global_captcha_service',
									'class'       => 'wpzoom-forms-field wpzf-spam-protection-service',
									'description' => '',
									'default'     => 'none',
									'options'     => array(
										'none'      => esc_html__( 'No Protection', 'wpzoom-forms' ),
										'recaptcha' => esc_html__( 'Google reCAPTCHA', 'wpzoom-forms' ),
										'turnstile' => esc_html__( 'Cloudflare Turnstile', 'wpzoom-forms')
									)
								),
							),
							array(
								'id'    => 'wpzf_global_captcha_note',
								'title' => '',
								'type'  => 'note',
								'args'  => array(
									'class'       => 'wpzoom-forms-field required-recaptcha',
									'description' => '<a target="_blank" href="https://www.google.com/recaptcha/admin/create">Click here</a> to generate your reCAPTCHA keys and enter them below.',
								),
							),
							array(
								'id'    => 'wpzf_global_captcha_type',
								'title' => esc_html__( 'Type', 'wpzoom-forms' ),
								'type'  => 'radio',
								'args'  => array(
									'label_for'   => 'wpzf_global_captcha_type',
									'class'       => 'wpzoom-forms-field required-recaptcha',
									'description' => '',
									'default'     => 'v2',
									'wrap'        => true,
									'options'     => array(
										'v2'      => esc_html__( 'Invisible reCAPTCHA v2', 'wpzoom-forms' ),
										'v3'      => esc_html__( 'reCAPTCHA v3', 'wpzoom-forms' )
									)
								),
							),
							array(
								'id'    => 'wpzf_global_recaptcha_v2_site_key',
								'title' => __( 'reCaptcha v2 Site Key', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'   => 'wpzf_global_captcha_site_key',
									'class'       => 'wpzoom-forms-field required-recaptcha required-recaptcha-v2',
									'default'     => '',
									'description' => '',
									'type'        => 'text',
								),
							),
							array(
								'id'    => 'wpzf_global_recaptcha_v2_secret_key',
								'title' => __( 'reCaptcha v2 Secret Key', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'   => 'wpzf_global_captcha_secret_key',
									'class'       => 'wpzoom-forms-field required-recaptcha required-recaptcha-v2',
									'default'     => '',
									'description' => '',
									'type'        => 'text',
								),
							),
							array(
								'id'    => 'wpzf_global_recaptcha_v3_site_key',
								'title' => __( 'reCaptcha v3 Site Key', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'   => 'wpzf_global_captcha_site_key_v3',
									'class'       => 'wpzoom-forms-field required-recaptcha required-recaptcha-v3',
									'default'     => '',
									'description' => '',
									'type'        => 'text',
								),
							),
							array(
								'id'    => 'wpzf_global_recaptcha_v3_secret_key',
								'title' => __( 'reCaptcha v3 Secret Key', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'   => 'wpzf_global_captcha_secret_key_v3',
									'class'       => 'wpzoom-forms-field required-recaptcha required-recaptcha-v3',
									'default'     => '',
									'description' => '',
									'type'        => 'text',
								),
							),
							array(
								'id'    => 'wpzf_global_recaptcha_badge_location',
								'title' => esc_html__( 'Badge Location', 'wpzoom-forms' ),
								'type'  => 'select',
								'args'  => array(
									'label_for'   => 'wpzf_global_recaptcha_badge_location',
									'class'       => 'wpzoom-forms-field required-recaptcha',
									'description' => '',
									'default'     => 'bottomright',
									'options'     => array(
										'bottomright'  => esc_html__( 'Bottom Right', 'wpzoom-forms' ),
										'bottomleft' => esc_html__( 'Bottom Left', 'wpzoom-forms' ),
										'inline'  => esc_html__( 'Inline', 'wpzoom-forms')
									)
								),
							),
							array(
								'id'    => 'wpzf_global_turnstile_note',
								'title' => '',
								'type'  => 'note',
								'args'  => array(
									'class'       => 'wpzoom-forms-field required-turnstile',
									'description' => '<a target="_blank" href="https://dash.cloudflare.com/sign-up/turnstile">Click here</a> to generate your Turnstile keys and enter them below.',
								),
							),
							array(
								'id'	=> 'wpzf_global_turnstile_site_key',
								'title' => __( 'Site Key', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'   => 'wpzf_global_turnstile_site_key',
									'class'       => 'wpzoom-forms-field required-turnstile',
									'default'     => '',
									'description' => '',
									'type'        => 'text',
								),
							),
							array(
								'id'	=> 'wpzf_global_turnstile_secret_key',
								'title' => __( 'Secret Key', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'   => 'wpzf_global_turnstile_secret_key',
									'class'       => 'wpzoom-forms-field required-turnstile',
									'default'     => '',
									'description' => '',
									'type'        => 'text',
								),
							),
							array(
								'id'    => 'wpzf_global_turnstile_widget_theme',
								'title' => esc_html__( 'Widget Theme', 'wpzoom-forms' ),
								'type'  => 'select',
								'args'  => array(
									'label_for'   => 'wpzf_global_turnstile_widget_theme',
									'class'       => 'wpzoom-forms-field required-turnstile',
									'description' => '',
									'default'     => 'auto',
									'options'     => array(
										'auto'  => esc_html__( 'Auto', 'wpzoom-forms' ),
										'light' => esc_html__( 'Light', 'wpzoom-forms' ),
										'dark'  => esc_html__( 'Dark', 'wpzoom-forms')
									)
								),
							),
						),
					),
				),
			),
			'ajax_settings' => array(
				'tab_id'       => 'tab-ajax',
				'tab_title'    => __( 'AJAX [PRO]', 'wpzoom-forms' ),
				'option_group' => 'wpzf-ajax-settings',
				'option_name'  => self::$option,
				'sections'     => array(
					array(
						'id'       => 'wpzf-ajax-settings-section',
						'title'    => __( 'AJAX Form Submission', 'wpzoom-forms' ),
						'callback' => array( $this, 'section_ajax_cb' ),
						'page'     => 'wpzf-ajax-settings',
						'fields'   => array(
							array(
								'id'    => 'wpzf_enable_ajax_submit',
								'title' => __( 'Allows users to submit forms without reloading the page.', 'wpzoom-forms' ),
								'type'  => 'checkbox',
								'args'  => array(
									'label_for' => 'wpzf_enable_ajax_submit',
									'desc'      => __( 'Submit forms without page reload using AJAX.', 'wpzoom-forms' ),
									'default'   => true,
								),
							),
							array(
								'id'    => 'wpzf_ajax_sending_message',
								'title' => __( 'Sending Message', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'          => 'wpzf_ajax_sending_message',
									'placeholder' => __( 'Sending your message…', 'wpzoom-forms' ),
									'desc'        => __( 'Message displayed while the form is being submitted.', 'wpzoom-forms' ),
									'default'     => __( 'Sending...', 'wpzoom-forms' ),
								),
							),
							array(
								'id'    => 'wpzf_ajax_success_message',
								'title' => __( 'Success Message', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'          => 'wpzf_ajax_success_message',
									'placeholder' => __( 'Thank you! Your message has been sent.', 'wpzoom-forms' ),
									'desc'        => __( 'Message displayed after successful form submission.', 'wpzoom-forms' ),
									'default'     => __( 'Thank you! Your message has been sent successfully.', 'wpzoom-forms' ),
								),
							),
							array(
								'id'    => 'wpzf_ajax_error_message',
								'title' => __( 'Error Message', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'          => 'wpzf_ajax_error_message',
									'placeholder' => __( 'Oops! Something went wrong. Please try again. Please try again.', 'wpzoom-forms' ),
									'desc'        => __( 'Message displayed if form submission fails.', 'wpzoom-forms' ),
									'default'     => __( 'Oops! Something went wrong. Please try again. Please try again.', 'wpzoom-forms' ),
								),
							),
							array(
								'id'    => 'wpzf_ajax_validation_message',
								'title' => __( 'Validation Message', 'wpzoom-forms' ),
								'type'  => 'input',
								'args'  => array(
									'label_for'          => 'wpzf_ajax_validation_message',
									'placeholder' => __( 'Please complete all required fields before submitting.', 'wpzoom-forms' ),
									'desc'        => __( 'Message displayed if required fields are not filled in.', 'wpzoom-forms' ),
									'default'     => __( 'Please complete all required fields before submitting.', 'wpzoom-forms' ),
								),
							),
						),
					),
				),
			)
		);

		$this->register_settings();
	}

	/**
	 * Register all Setting options
	 *
	 * @since 1.1.0
	 * @return boolean
	 */
	public function register_settings() {
		// filter hook
		self::$settings = apply_filters( 'wpzoom_forms_before_register_settings', self::$settings );

		if ( empty( self::$settings ) ) {
			return;
		}

		foreach ( self::$settings as $key => $setting ) {
			$this->register_setting( $setting );
		}

		return true;
	}

	/**
	 * Register Setting
	 *
	 * @since 2.3.0
	 * @param array $setting
	 * @return void
	 */
	public function register_setting( $setting ) {
		$setting['sanitize_callback'] = isset( $setting['sanitize_callback'] ) ? $setting['sanitize_callback'] : array();
		register_setting( $setting['option_group'], $setting['option_name'], $setting['sanitize_callback'] );

		if ( isset( $setting['sections'] ) && is_array( $setting['sections'] ) ) {
			foreach ( $setting['sections'] as $section ) {
				if ( ! isset( $section['id'] ) ) {
					return;
				}
				add_settings_section( $section['id'], $section['title'], $section['callback'], $section['page'] );

				if ( isset( $section['fields'] ) && is_array( $section['fields'] ) ) {
					foreach ( $section['fields'] as $field ) {
						if ( ! isset( $field['id'] ) ) {
							return;
						}

						if ( method_exists( $this->_fields, $field['type'] ) ) {
							$field['callback'] = array( $this->_fields, $field['type'] );
						} else {
							$field['callback'] = '__return_false';
						}

						add_settings_field( $field['id'], $field['title'], $field['callback'], $section['page'], $section['id'], $field['args'] );
					}
				}
			}
		}
	}

	/**
	 * HTML output for Setting page
	 */
	public function settings_page() {
		// check user capabilities
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}
		$reset_settings   = isset( $_GET['wpzoom_reset_settings'] ) ? sanitize_text_field( $_GET['wpzoom_reset_settings'] ) : false;
		$settings_updated = isset( $_GET['settings-updated'] ) ? sanitize_text_field( $_GET['settings-updated'] ) : false;
		?>
		<div class="wrap">

			<?php settings_errors(); ?>

			<?php if ( $reset_settings && ! $settings_updated ) : ?>
				<div class="updated settings-error notice is-dismissible">
					<p><strong>Settings have been successfully reset.</strong></p>
				</div>
			<?php endif; ?>

			<form id="wpzf-settings" action="options.php" method="post">
				<ul class="wp-tab-bar">
					<?php foreach ( self::$settings as $setting ) : ?>
						<?php if ( self::$active_tab === $setting['tab_id'] ) : ?>
							<li class="wp-tab-active"><a href="?post_type=wpzf-form&page=wpzf-settings&tab=<?php echo esc_attr( $setting['tab_id'] ); ?>"><?php echo esc_html( $setting['tab_title'] ); ?></a></li>
						<?php else : ?>
							<li><a href="?post_type=wpzf-form&page=wpzf-settings&tab=<?php echo esc_attr( $setting['tab_id'] ); ?>"><?php echo esc_html( $setting['tab_title'] ); ?></a></li>
						<?php endif ?>
					<?php endforeach ?>
				</ul>

				<?php foreach ( self::$settings as $setting ) : ?>
					<?php if ( self::$active_tab === $setting['tab_id'] ) : ?>

						<?php if ( self::$active_tab === 'tab-ajax' ) : ?>
							<?php $this->ajax_promo_banner( true ); ?>
							<?php $this->upsell_banner(); ?>
						<?php endif; ?>

						<div class="wp-tab-panel" id="<?php echo esc_attr( $setting['tab_id'] ); ?>">
							<?php if ( $setting['tab_id'] === 'tab-ajax' ) : ?>
								<div class="wpzoom-lock-overlay"></div>
							<?php endif; ?>

							<?php
								settings_fields( $setting['option_group'] );
								do_settings_sections( $setting['option_group'] );
								if ( isset( $setting['sections'][0]['after_section'] ) ) {
									call_user_func( $setting['sections'][0]['after_section'], $setting['sections'][0] );
								}
							?>
						</div>
					<?php else : ?>

						<?php if ( $setting['tab_id'] === 'tab-ajax' ) : ?>
							<?php $this->ajax_promo_banner( false ); ?>
							<?php $this->upsell_banner(); ?>
						<?php endif; ?>

						<div class="wp-tab-panel" id="<?php echo esc_attr( $setting['tab_id'] ); ?>" style="display: none;">
						<?php if ( $setting['tab_id'] === 'tab-ajax' ) : ?>
							<div class="wpzoom-lock-overlay"></div>
						<?php endif; ?>

							<?php
								settings_fields( $setting['option_group'] );
								do_settings_sections( $setting['option_group'] );
								if ( isset( $setting['sections'][0]['after_section'] ) ) {
									call_user_func( $setting['sections'][0]['after_section'], $setting['sections'][0] );
								}
							?>
						</div>
					<?php endif ?>
				<?php endforeach ?>
				<?php do_action( 'wpzoom_forms_settings_after_main_container' ); ?>
				
				<div class="wpzoom-forms-settings-buttons-container">
					<span class="wpzoom_forms_settings_save"><?php submit_button( 'Save Settings', 'primary', 'wpzoom_forms_settings_save', false ); ?></span>
					<span class="wpzoom_forms_reset_settings"><input type="button" class="button button-secondary" name="wpzoom_forms_reset_settings" id="wpzoom_forms_reset_settings" value="Reset Settings"></span>
				</div>
			</form>
		</div>
		<?php
	}


	/**
	 * Upsell banner
	 */
	public function upsell_banner() {

		$wpzoom_forms = new WPZOOM_Forms();
		?>
		<div class="wpzoom-forms-settings-upsell-container">
			<a href="https://www.wpzoom.com/plugins/wpzoom-forms/?utm_source=wpadmin&utm_medium=wpzoom-forms-free&utm_campaign=upsell-banner-right-sidebar" target="_blank">
				<img src="<?php echo WPZOOM_FORMS_URL; ?>/dist/assets/admin/images/upsell.png" alt="Upgrade to WPZOOM Forms Pro">
			</a>
			<?php $this->subscribe_form(); ?>
		</div>
		<?php
		
	}

	/**
	 * Ajax promo banner
	 */
	public function ajax_promo_banner( $show = true ) {
		$wpzoom_forms = new WPZOOM_Forms();
		if ( $show ) {
			$display = 'inline-block';
		} else {
			$display = 'none';
		}
		?>
		<div class="wpzoom-forms-settings-ajax-promo-container" style="display: <?php echo $display; ?>">
			<div class="wpzoom-forms-settings-ajax-promo-container-inner">
				<a href="https://www.wpzoom.com/plugins/wpzoom-forms/?utm_source=wpadmin&utm_medium=wpzoom-forms-free&utm_campaign=settings-ajax-pro-upsell" target="_blank">
					<span class="wpzoom-forms-settings-ajax-promo-container-inner-lock">🔒</span> <?php esc_html_e('This feature is only available in the PRO version', 'wpzoom-forms'); ?>
				</a>
				<h2><?php esc_html_e('Unlock AJAX Submissions with WPZOOM Forms PRO', 'wpzoom-forms'); ?></h2>
				<p><?php esc_html_e('Let your forms submit instantly without page reloads. Improve user experience and reduce drop-offs with real-time feedback.', 'wpzoom-forms'); ?></p>
				<ul>
					<li>✅ <?php esc_html_e('Display custom success & error messages', 'wpzoom-forms'); ?></li>
					<li>✅ <?php esc_html_e('Works seamlessly with shortcodes and blocks', 'wpzoom-forms'); ?></li>
					<li>✅ <?php esc_html_e('No reloading or redirecting after form submission', 'wpzoom-forms'); ?></li>
				</ul>
				<a href="https://www.wpzoom.com/plugins/wpzoom-forms/?utm_source=wpadmin&utm_medium=wpzoom-forms-free&utm_campaign=settings-ajax-pro-upsell" target="_blank" class="button button-primary"><?php esc_html_e('Upgrade to PRO', 'wpzoom-forms'); ?></a>
			</div>
		</div>
		<?php
	}

	/**
	 * Enqueue scripts and styles
	 *
	 * @param string $hook
	 */
	public function scripts( $hook ) {

		$pos = strpos( $hook, WPZOOM_FORMS_SETTINGS_PAGE );

		wp_enqueue_style(
			'wpzoom-forms-admin-css',
			untrailingslashit( WPZOOM_FORMS_URL ) . '/dist/assets/admin/css/admin.css',
			array(),
			WPZOOM_FORMS_VERSION
		);

		if ( $pos !== false ) {
			// Add the color picker css file
			wp_enqueue_style( 'wp-color-picker' );

			wp_enqueue_style(
				'wpzoom-forms-admin-style',
				untrailingslashit( WPZOOM_FORMS_URL ) . '/dist/assets/admin/css/style.css',
				array(),
				WPZOOM_FORMS_VERSION
			);

			wp_enqueue_script(
				'wpzoom-forms-admin-script',
				untrailingslashit( WPZOOM_FORMS_URL ) . '/dist/assets/admin/js/script.js',
				array( 'jquery', 'wp-color-picker' ),
				WPZOOM_FORMS_VERSION
			);

			wp_localize_script(
				'wpzoom-forms-admin-script',
				'WPZOOM_Settings',
				array(
					'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
					'ajax_nonce' => wp_create_nonce( 'wpzoom-reset-settings-nonce' ),
				)
			);
		}
	}

	/**
	 * Reset settings to default values
	 *
	 * @since 1.1.0
	 * @return void
	 */
	public function reset_settings() {
		check_ajax_referer( 'wpzoom-reset-settings-nonce', 'security' );

		$defaults = self::get_defaults();

		if ( empty( $defaults ) ) {
			$response = array(
				'status'  => '304',
				'message' => 'NOT',
			);

			wp_send_json_error( $response );
		}

		$response = array(
			'status'  => '200',
			'message' => 'OK',
		);

		self::update_option( $defaults );

		wp_send_json_success( $response );
	}

	public function get_image_sizes() {

		global $_wp_additional_image_sizes;

		$sizes = array();
		$sizes['full'] = 'Full';

		$wp_image_sizes = get_intermediate_image_sizes();

		foreach( $wp_image_sizes as $size ) {
			$sizes[$size] = $size;
		}

		return $sizes;

	}
	
	/**
	 * General section callback
	 */
	public function section_general_cb( $args ) {
		?>
		 <p class="section-description"><?php esc_html_e( 'Customize how WPZOOM Forms loads styles and assets on your site.', 'wpzoom-forms' ); ?></p>
		<?php
	}

	/**
	 * Recaptcha section callback
	 */
	public function section_recaptcha_cb( $args ) {
		?>
        <p class="section-description"><?php esc_html_e( 'Protect your forms from bots, spam, and abuse using privacy-friendly verification tools. Block fake submissions while keeping the experience smooth for real users.', 'wpzoom-forms' ); ?></p>
        <?php
	}

	/**
	 * Recaptcha after section callback
	 */
	public function section_recaptcha_after_cb( $args ) {
		?>
		<div class="wpzoom-forms-settings-recaptcha-after">
			<p><strong><?php esc_html_e('Google reCAPTCHA v3', 'wpzoom-forms') ?></strong><br/>
			<?php esc_html_e('Runs silently in the background and scores each submission to detect spam. Once enabled, it applies to all forms by default. You can disable it per form in the settings.', 'wpzoom-forms') ?></p>

	<p><strong><?php esc_html_e('Google reCAPTCHA v2 (Invisible)', 'wpzoom-forms') ?></strong><br/>
	<?php esc_html_e('Displays a small badge and only shows a challenge (like selecting images) when suspicious activity is detected. Requires v2 site keys — not checkbox keys. Add the CAPTCHA field manually in the form editor.', 'wpzoom-forms') ?></p>

	<p><strong><?php esc_html_e('Cloudflare Turnstile', 'wpzoom-forms') ?></strong><br/>
	<?php esc_html_e('A privacy-first alternative to reCAPTCHA. No cookies or tracking involved. Works invisibly and only challenges users when necessary. To use Turnstile, enter your site and secret keys in the settings and add a Turnstile field to your form.', 'wpzoom-forms') ?></p>
		</div>
		<?php
	}

	/**
	 * AJAX section callback
	 *
	 * @param array $args
	 */
	public function section_ajax_cb( $args ) {
		echo '<p class="section-description">' . esc_html__( 'Enable seamless form submissions without page reloads', 'wpzoom-forms' ) . '</p>';
	}

	/**
	 * Subscribe form
	 */
	public function subscribe_form() {

		$current_user = wp_get_current_user();
		$screen = get_current_screen();
		
		if(  'edit-wpzf-form' !== $screen->id ) { 
			return;
		}
		?>
		<div class="wpzoom-forms-settings-subscribe-form">
            <?php $current_user = wp_get_current_user(); ?>
				<p>
				<style type="text/css">@import url(https://assets.mlcdn.com/fonts.css?version=1750157);</style>
	<style type="text/css">
	.ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}.g-recaptcha{transform:scale(1);-webkit-transform:scale(1);transform-origin:0 0;-webkit-transform-origin:0 0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:4px solid #fff;border-color:#fff #fff #fff transparent;animation:ml-form-embedSubmitLoad 1.2s linear infinite}@keyframes ml-form-embedSubmitLoad{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}#mlb2-6096806.ml-form-embedContainer{box-sizing:border-box;display:table;margin:0 auto;position:static;width:100%!important}#mlb2-6096806.ml-form-embedContainer button,#mlb2-6096806.ml-form-embedContainer h4,#mlb2-6096806.ml-form-embedContainer p,#mlb2-6096806.ml-form-embedContainer span{text-transform:none!important;letter-spacing:normal!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper{background-color:#f6f6f6;border-width:0;border-color:transparent;border-radius:4px;border-style:solid;box-sizing:border-box;display:inline-block!important;margin:0;padding:0;position:relative}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper.embedDefault,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper.embedPopup{width:400px}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper.embedForm{max-width:400px;width:100%}#mlb2-6096806.ml-form-embedContainer .ml-form-align-left{text-align:left}#mlb2-6096806.ml-form-embedContainer .ml-form-align-center{text-align:center}#mlb2-6096806.ml-form-embedContainer .ml-form-align-default{display:table-cell!important;vertical-align:middle!important;text-align:center!important}#mlb2-6096806.ml-form-embedContainer .ml-form-align-right{text-align:right}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img{border-top-left-radius:4px;border-top-right-radius:4px;height:auto;margin:0 auto!important;max-width:100%;width:undefinedpx}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:20px 20px 0 20px}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal{padding-bottom:0}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent{text-align:left;margin:0 0 20px 0}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:30px;font-weight:400;margin:0 0 10px 0;text-align:left;word-break:break-word}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:20px;margin:0 0 10px 0;text-align:left}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol{list-style-type:lower-alpha}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol{list-style-type:lower-roman}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a{color:#000;text-decoration:underline}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group{text-align:left!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label{margin-bottom:5px;color:#333;font-size:14px;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-weight:700;font-style:normal;text-decoration:none;display:inline-block;line-height:20px}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child{margin:0}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form{margin:0;width:100%}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent{margin:0 0 20px 0;width:100%}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow{float:left}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm{margin:0;padding:0 0 20px 0;width:100%;height:auto;float:left}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow{margin:0 0 10px 0;width:100%}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item{margin:0}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal{margin:0}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin-bottom:0;margin-top:0;margin-left:0;margin-right:0;padding:10px 10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder{color:#333}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder{color:#333}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder{color:#333}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder{color:#333}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin-bottom:0;margin-top:0;padding:10px 10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{border-color:#ccc!important;background-color:#fff!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type=checkbox]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{border-radius:4px!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before{border-color:#000!important;background-color:#000!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before{top:2px;box-sizing:border-box}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after{top:0!important;box-sizing:border-box!important;position:absolute;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after{position:absolute;top:2px!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after{position:absolute;top:0!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after{position:absolute;top:0!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after{background:no-repeat 50%/50% 50%}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after{background:no-repeat 50%/50% 50%}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input{position:absolute;z-index:-1;opacity:0;box-sizing:border-box;padding:0}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label{color:#000;font-size:12px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;line-height:22px;margin-bottom:0;position:relative;vertical-align:top;font-style:normal;font-weight:700}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;line-height:20px!important;margin-bottom:0;margin-top:0;padding:10px 28px 10px 12px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important;height:auto;display:inline-block;vertical-align:middle;background:url(https://assets.mlcdn.com/ml/images/default/dropdown.svg) no-repeat right .75rem center/8px 10px;-webkit-appearance:none;-moz-appearance:none;appearance:none}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow{height:auto;width:100%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal{width:70%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal{width:30%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn{padding-top:25px}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields{box-sizing:border-box;float:left;padding-right:10px}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input{background-color:#fff;color:#333;border-color:#ccc;border-radius:4px;border-style:solid;border-width:1px;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;margin-bottom:0;margin-top:0;padding:10px 10px;width:100%;box-sizing:border-box;overflow-y:initial}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button{background-color:#000!important;border-color:#000;border-style:solid;border-width:1px;border-radius:4px;box-shadow:none;color:#fff!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;font-weight:700;line-height:20px;margin:0!important;padding:10px!important;width:100%;height:auto}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover{background-color:#333!important;border-color:#333!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description{color:#000;display:block;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:12px;text-align:left;margin-bottom:0;position:relative;vertical-align:top}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label{font-weight:400;margin:0;padding:0;position:relative;display:block;min-height:24px;padding-left:24px}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a{color:#000;text-decoration:underline}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p{color:#000!important;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:12px!important;font-weight:400!important;line-height:18px!important;padding:0!important;margin:0 5px 0 0!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child{margin:0}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit{margin:0 0 20px 0;float:left;width:100%}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#000!important;border:none!important;border-radius:4px!important;box-shadow:none!important;color:#fff!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:14px!important;font-weight:700!important;line-height:21px!important;height:auto;padding:10px!important;width:100%!important;box-sizing:border-box!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading{display:none}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:#333!important}.ml-subscribe-close{width:30px;height:30px;background:url(https://assets.mlcdn.com/ml/images/default/modal_close.png) no-repeat;background-size:30px;cursor:pointer;margin-top:-10px;margin-right:-10px;position:absolute;top:0;right:0}.ml-error input,.ml-error select,.ml-error textarea{border-color:red!important}.ml-error .custom-checkbox-radio-list{border:1px solid red!important;border-radius:4px;padding:10px}.ml-error .label-description,.ml-error .label-description p,.ml-error .label-description p a,.ml-error label:first-child{color:red!important}#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,#mlb2-6096806.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter{color:red!important}@media only screen and (max-width:400px){.ml-form-embedWrapper.embedDefault,.ml-form-embedWrapper.embedPopup{width:100%!important}.ml-form-formContent.horozintalForm{float:left!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow{height:auto!important;width:100%!important;float:left!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal{width:100%!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div{padding-right:0!important;padding-bottom:10px}.ml-form-formContent.horozintalForm .ml-button-horizontal{width:100%!important}.ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn{padding-top:0!important}}
	</style>
<div id="mlb2-6096806" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-6096806">
<div class="ml-form-align-center">
<div class="ml-form-embedWrapper embedForm">
<div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
<div class="ml-form-embedContent" style="">
	<h4>Stay Updated on WPZOOM Forms</h4>
	<p>Subscribe to get notified about new plugin updates and features. We’ll also send you useful tips, tutorials, and limited-time promotions.</p>
</div>
<form class="ml-block-form" action="https://static.mailerlite.com/webforms/submit/p0c0n3" data-code="p0c0n3" method="post" target="_blank">
	<div class="ml-form-formContent">
	<div class="ml-form-fieldRow ml-last-item">
		<div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
		<input aria-label="email" aria-required="true" value="<?php echo esc_attr( $current_user->user_email ); ?>" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email">
		</div>
	</div>
	</div>
	<input type="hidden" name="ml-submit" value="1">
	<div class="ml-form-embedSubmit">
	<button type="submit" class="primary">Subscribe</button>
	<button disabled="disabled" style="display:none" type="button" class="loading"> <div class="ml-form-embedSubmitLoad"></div> <span class="sr-only">Loading...</span> </button>
	</div>
	<input type="hidden" name="anticsrf" value="true">
</form>
</div>
<div class="ml-form-successBody row-success" style="display:none">
<div class="ml-form-successContent">
	<h4>Thank you!</h4>
	<p>You have successfully joined our subscriber list.</p>
</div>
</div>
</div>
</div>
</div>
<script>
function ml_webform_success_6096806(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-6096806 .row-success").show(),r(".ml-subscribe-form-6096806 .row-form").hide()}
</script>
<img src="https://track.mailerlite.com/webforms/o/6096806/p0c0n3?v1750160739" width="1" height="1" style="max-width:1px;max-height:1px;visibility:hidden;padding:0;margin:0;display:block" alt="." border="0">
<script src="https://static.mailerlite.com/js/w/webforms.min.js?vd4de52e171e8eb9c47c0c20caf367ddf" type="text/javascript"></script>
				</p>
		</div>

	<?php
	}
}

new WPZOOM_Forms_Settings();