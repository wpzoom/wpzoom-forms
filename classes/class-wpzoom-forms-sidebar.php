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
				<a href="https://www.wpzoom.com/plugins/wpzoom-forms/?utm_source=wpadmin&utm_medium=wpzoom-forms-free&utm_campaign=upsell-banner-right-sidebar" target="_blank">
					<img src="<?php echo esc_url( WPZOOM_FORMS_URL ); ?>/dist/assets/admin/images/pro2.png" alt="<?php esc_attr_e( 'Upgrade to WPZOOM Forms Pro', 'wpzoom-forms' ); ?>">
				</a>
			</div>

			<div class="wpzf-sidebar-card wpzf-sidebar-card--docs">
				<h2>
					<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2zm0 9v5m0-8v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
					<?php esc_html_e( 'Read documentation', 'wpzoom-forms' ); ?>
				</h2>
				<p><?php esc_html_e( 'Documentation is the place where you\'ll find the information needed to setup the plugin quickly and configure all its features.', 'wpzoom-forms' ); ?></p>
				<a href="https://www.wpzoom.com/documentation/wpzoom-forms/" target="_blank" rel="noopener noreferrer" class="button button-primary">
					<?php esc_html_e( 'Read documentation', 'wpzoom-forms' ); ?>
				</a>
			</div>

			<div class="wpzf-sidebar-card wpzf-sidebar-card--support">
				<h2>
					<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
					<?php esc_html_e( 'Need assistance?', 'wpzoom-forms' ); ?>
				</h2>
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
					<h4>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.386 8.357C7.031 8.144 6.57 8.259 6.357 8.614c-.213.355-.098.816.257 1.029L11.614 12.643c.238.143.535.143.772 0l5-3c.355-.213.47-.674.257-1.029-.213-.355-.674-.47-1.029-.257L12 11.126 7.386 8.357z" fill="#242628"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 19.732H19c1.519 0 2.75-1.231 2.75-2.75V7.02C21.75 5.5 20.519 4.27 19 4.27H5C3.481 4.27 2.25 5.5 2.25 7.02v9.962C2.25 18.501 3.481 19.732 5 19.732zM3.75 7.02C3.75 6.329 4.309 5.77 5 5.77h14c.691 0 1.25.559 1.25 1.25v9.962c0 .69-.559 1.25-1.25 1.25H5c-.691 0-1.25-.55-1.25-1.25V7.02z" fill="#242628"/></svg>
						<?php esc_html_e( 'Stay Updated on WPZOOM Forms', 'wpzoom-forms' ); ?>
					</h4>
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
