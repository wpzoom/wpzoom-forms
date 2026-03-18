<?php
/**
 * WPZOOM Forms — Shared Admin Sidebar
 *
 * Single source of truth for the sidebar shown on:
 *   - edit.php?post_type=wpzf-form  (settings page)
 *   - edit.php?post_type=wpzf-payment  (payments list)
 *   - admin.php?page=wpzf-payment-detail  (payment detail)
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WPZOOM_Forms_Sidebar {

	/**
	 * Renders the full sidebar: upsell, documentation, support, and newsletter cards.
	 */
	public static function render() {
		$current_user = wp_get_current_user();
		?>
		<div class="wpzf-sidebar">

			<div class="wpzf-sidebar-card wpzf-sidebar-card--upsell">
				<?php
				$upsell_url = 'https://www.wpzoom.com/plugins/wpzoom-forms/?utm_source=wpadmin&utm_medium=wpzoom-forms-free&utm_campaign=upsell-banner-right-sidebar';
				$images_url = esc_url( WPZOOM_FORMS_URL ) . '/dist/assets/admin/images/';
				?>
				<a href="<?php echo esc_url( $upsell_url ); ?>" target="_blank" rel="noopener noreferrer" class="wpzf-upsell-banner">
					<div class="wpzf-upsell-banner__bg" style="background-image: url('<?php echo esc_url( WPZOOM_FORMS_URL ); ?>/dist/assets/admin/images/blue-bg.png');"></div>
					<div class="wpzf-upsell-banner__inner">
						<div class="wpzf-upsell-banner__logo">
							<img src="<?php echo esc_url( $images_url ); ?>wpz-forms-pro.svg" alt="" class="wpzf-upsell-banner__icon">
						</div>
						<h3 class="wpzf-upsell-banner__heading"><?php esc_html_e( 'NEW PRO FEATURES', 'wpzoom-forms' ); ?></h3>
						<ul class="wpzf-upsell-banner__features">
							<li><img src="<?php echo esc_url( $images_url ); ?>pixel-ckeck.svg" alt="" width="16" height="16"> <?php esc_html_e( 'Conditional Logic', 'wpzoom-forms' ); ?></li>
							<li><img src="<?php echo esc_url( $images_url ); ?>pixel-ckeck.svg" alt="" width="16" height="16"> <?php esc_html_e( 'Mailchimp Integration', 'wpzoom-forms' ); ?></li>
							<li><img src="<?php echo esc_url( $images_url ); ?>pixel-ckeck.svg" alt="" width="16" height="16"> <?php esc_html_e( 'File Uploads', 'wpzoom-forms' ); ?></li>
							<li><img src="<?php echo esc_url( $images_url ); ?>pixel-ckeck.svg" alt="" width="16" height="16"> <?php esc_html_e( '30+ Pre-built Templates', 'wpzoom-forms' ); ?></li>
							<li><img src="<?php echo esc_url( $images_url ); ?>pixel-ckeck.svg" alt="" width="16" height="16"> <?php esc_html_e( 'Generate Forms with AI', 'wpzoom-forms' ); ?></li>
						</ul>
						<div class="wpzf-upsell-banner__cta"><span><?php esc_html_e( 'Upgrade to PRO', 'wpzoom-forms' ); ?></span></div>
					</div>
				</a>
			</div>

			<div class="wpzf-sidebar-card wpzf-sidebar-card--docs">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
				</svg>
				<h3>
					<?php esc_html_e( 'Read documentation', 'wpzoom-forms' ); ?>
				</h3>
				<p><?php esc_html_e( 'Documentation is the place where you\'ll find the information needed to setup the plugin quickly and configure all its features.', 'wpzoom-forms' ); ?></p>
				<a href="https://www.wpzoom.com/documentation/wpzoom-forms/" target="_blank" rel="noopener noreferrer" class="button button-primary">
					<?php esc_html_e( 'Read documentation', 'wpzoom-forms' ); ?>
				</a>
			</div>

			<div class="wpzf-sidebar-card wpzf-sidebar-card--support">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
				</svg>
				<h3>
					<?php esc_html_e( 'Need assistance?', 'wpzoom-forms' ); ?>
				</h3>
				<p><?php esc_html_e( 'Need help setting up the plugin or have a question? Get in touch with our Support Team.', 'wpzoom-forms' ); ?></p>
				<a href="https://www.wpzoom.com/support/" target="_blank" rel="noopener noreferrer" class="button button-secondary">
					<?php esc_html_e( 'Open Support Desk', 'wpzoom-forms' ); ?>
				</a>
			</div>

			<div class="wpzf-sidebar-card wpzf-sidebar-card--newsletter">
				<div id="mlb2-6096806" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-6096806">
				<div class="ml-form-align-center">
				<div class="ml-form-embedWrapper embedForm">
				<div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
				<div class="ml-form-embedContent">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
					</svg>
					<h3>
						<?php esc_html_e( 'Stay Updated on WPZOOM Forms', 'wpzoom-forms' ); ?>
					</h3>
					<p><?php esc_html_e( 'Subscribe to get notified about new plugin updates and features. We\'ll also send you useful tips, tutorials, and limited-time promotions.', 'wpzoom-forms' ); ?></p>
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
					<button type="submit" class="button button-primary"><?php esc_html_e( 'Subscribe', 'wpzoom-forms' ); ?></button>
					<button disabled="disabled" style="display:none" type="button" class="loading"><div class="ml-form-embedSubmitLoad"></div> <span class="sr-only">Loading...</span></button>
					</div>
					<input type="hidden" name="anticsrf" value="true">
				</form>
				</div>
				<div class="ml-form-successBody row-success" style="display:none">
				<div class="ml-form-successContent">
					<h4><?php esc_html_e( 'Thank you!', 'wpzoom-forms' ); ?></h4>
					<p><?php esc_html_e( 'You have successfully joined our subscriber list.', 'wpzoom-forms' ); ?></p>
				</div>
				</div>
				</div>
				</div>
				</div>
				<script>function ml_webform_success_6096806(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-6096806 .row-success").show();r(".ml-subscribe-form-6096806 .row-form").hide()}</script>
				<img src="https://track.mailerlite.com/webforms/o/6096806/p0c0n3?v1750160739" width="1" height="1" style="max-width:1px;max-height:1px;visibility:hidden;padding:0;margin:0;display:block" alt="" border="0">
				<script src="https://static.mailerlite.com/js/w/webforms.min.js?vd4de52e171e8eb9c47c0c20caf367ddf" type="text/javascript"></script>
			</div>

		</div><!-- /.wpzf-sidebar -->
		<?php
	}
}
