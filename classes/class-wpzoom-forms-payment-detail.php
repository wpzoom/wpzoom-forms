<?php
/**
 * Class WPZOOM Forms Payment Detail
 *
 * Renders a custom admin detail page for wpzf-payment posts,
 * replacing the default WordPress post edit screen with a
 * purpose-built view that shows stats, status, actions, and
 * an entry summary drawn from the linked form submission.
 *
 * @since   1.4.0
 * @package WPZOOM_Forms
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class WPZOOM_Forms_Payment_Detail
 */
class WPZOOM_Forms_Payment_Detail {

	/**
	 * The Constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu',                            array( $this, 'register_page' ) );
		add_action( 'admin_post_wpzf_refund_payment',        array( $this, 'handle_refund' ) );
		add_filter( 'get_edit_post_link',                    array( $this, 'custom_edit_link' ), 10, 2 );
		add_filter( 'post_row_actions',                      array( $this, 'modify_row_actions' ), 10, 2 );
		// Redirect the default edit.php?post=ID screen to our custom page.
		add_action( 'current_screen',                        array( $this, 'redirect_edit_screen' ) );
	}

	// -------------------------------------------------------------------------
	// Admin Page Registration
	// -------------------------------------------------------------------------

	/**
	 * Registers a hidden admin sub-page for the payment detail view.
	 * Hidden = parent_slug is null so it never appears in the menu.
	 */
	public function register_page() {
		$hook = add_submenu_page(
			'',
			__( 'Payment Detail', 'wpzoom-forms' ),
			__( 'Payment Detail', 'wpzoom-forms' ),
			'manage_options',
			'wpzf-payment-detail',
			array( $this, 'render_page' )
		);

		if ( $hook ) {
			add_action( 'load-' . $hook, array( $this, 'set_page_title' ) );
		}
	}

	/**
	 * Sets the global $title before admin-header.php runs, preventing
	 * a strip_tags(null) deprecation on hidden submenu pages.
	 */
	public function set_page_title() {
		global $title;
		$title = __( 'Payment Detail', 'wpzoom-forms' );
	}

	/**
	 * Redirects the standard post edit screen for wpzf-payment posts to our
	 * custom detail page so users never land on the bare WP edit form.
	 */
	public function redirect_edit_screen() {
		$screen = get_current_screen();
		if ( ! $screen || 'wpzf-payment' !== $screen->post_type || 'post' !== $screen->base ) {
			return;
		}

		$post_id = absint( $_GET['post'] ?? 0 );
		if ( ! $post_id ) {
			return;
		}

		wp_safe_redirect( $this->detail_url( $post_id ) );
		exit;
	}

	// -------------------------------------------------------------------------
	// Links & Row Actions
	// -------------------------------------------------------------------------

	/**
	 * Rewrites the edit link for wpzf-payment posts to point at our custom page.
	 *
	 * @param string $url     Default edit URL.
	 * @param int    $post_id Post ID.
	 * @return string
	 */
	public function custom_edit_link( $url, $post_id ) {
		if ( get_post_type( $post_id ) === 'wpzf-payment' ) {
			return $this->detail_url( $post_id );
		}
		return $url;
	}

	/**
	 * Replaces the default row actions on the payment list table.
	 *
	 * @param array   $actions Default actions.
	 * @param WP_Post $post    Current post.
	 * @return array
	 */
	public function modify_row_actions( $actions, $post ) {
		if ( 'wpzf-payment' !== $post->post_type ) {
			return $actions;
		}

		$view_url = $this->detail_url( $post->ID );

		return array(
			'view' => sprintf(
				'<a href="%s">%s</a>',
				esc_url( $view_url ),
				esc_html__( 'View', 'wpzoom-forms' )
			),
		);
	}

	// -------------------------------------------------------------------------
	// Page Renderer
	// -------------------------------------------------------------------------

	/**
	 * Main render callback for the custom detail page.
	 */
	public function render_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'Permission denied.', 'wpzoom-forms' ) );
		}

		$payment_id = absint( $_GET['payment_id'] ?? 0 );
		if ( ! $payment_id ) {
			wp_die( esc_html__( 'Invalid payment ID.', 'wpzoom-forms' ) );
		}

		$post = get_post( $payment_id );
		if ( ! $post || 'wpzf-payment' !== $post->post_type ) {
			wp_die( esc_html__( 'Payment not found.', 'wpzoom-forms' ) );
		}

		/* ── Pull all meta ── */
		$status    = get_post_meta( $payment_id, '_wpzf_txn_status',            true ) ?: 'pending';
		$intent_id = get_post_meta( $payment_id, '_wpzf_txn_payment_intent_id', true );
		$amount    = (int) get_post_meta( $payment_id, '_wpzf_txn_amount',      true );
		$currency  = strtoupper( get_post_meta( $payment_id, '_wpzf_txn_currency', true ) ?: 'USD' );
		$form_id   = (int) get_post_meta( $payment_id, '_wpzf_txn_form_id',     true );
		$email     = get_post_meta( $payment_id, '_wpzf_txn_customer_email',    true );
		$method    = get_post_meta( $payment_id, '_wpzf_txn_payment_method',    true );
		$last4     = get_post_meta( $payment_id, '_wpzf_txn_card_last4',        true );

		/* ── Derived values ── */
		$payment_type  = $form_id ? ( get_post_meta( $form_id, '_wpzf_stripe_payment_type', true ) ?: 'one-time' ) : 'one-time';
		$type_label    = 'recurring' === $payment_type
			? __( 'Recurring', 'wpzoom-forms' )
			: __( 'One-time', 'wpzoom-forms' );

		$amount_fmt    = '$' . number_format( $amount / 100, 2 );

		$method_label  = 'N/A';
		if ( $method && $last4 ) {
			$method_label = ucfirst( $method );
		} elseif ( $method ) {
			$method_label = ucfirst( $method );
		}

		$status_map = array(
			'paid'     => array( 'label' => __( 'Processed', 'wpzoom-forms' ), 'bg' => '#d1fae5', 'text' => '#065f46', 'dot' => '#10b981' ),
			'pending'  => array( 'label' => __( 'Pending',   'wpzoom-forms' ), 'bg' => '#fef3c7', 'text' => '#92400e', 'dot' => '#f59e0b' ),
			'failed'   => array( 'label' => __( 'Failed',    'wpzoom-forms' ), 'bg' => '#fee2e2', 'text' => '#991b1b', 'dot' => '#ef4444' ),
			'refunded' => array( 'label' => __( 'Refunded',  'wpzoom-forms' ), 'bg' => '#f3f4f6', 'text' => '#374151', 'dot' => '#9ca3af' ),
		);
		$sc = $status_map[ $status ] ?? array( 'label' => ucfirst( $status ), 'bg' => '#f3f4f6', 'text' => '#374151', 'dot' => '#9ca3af' );

		$stripe        = WPZOOM_Forms_Stripe::instance();
		$test_mode     = $stripe->is_test_mode();
		$stripe_url    = 'https://dashboard.stripe.com/' . ( $test_mode ? 'test/' : '' ) . 'payments/' . $intent_id;
		$back_url      = admin_url( 'edit.php?post_type=wpzf-payment' );
		$can_refund    = ( 'paid' === $status ) && $intent_id;
		$refund_url    = wp_nonce_url(
			admin_url( 'admin-post.php?action=wpzf_refund_payment&payment_id=' . $payment_id ),
			'wpzf_refund_' . $payment_id
		);

		/* ── Find related submission (same form, most recent) ── */
		$fields     = array();
		$sub_link   = '';
		if ( $form_id ) {
			$subs = get_posts( array(
				'post_type'      => 'wpzf-submission',
				'posts_per_page' => 1,
				'meta_query'     => array(
					array( 'key' => '_wpzf_form_id', 'value' => $form_id ),
				),
				'orderby'        => 'date',
				'order'          => 'DESC',
				'fields'         => 'ids',
			) );
			if ( ! empty( $subs ) ) {
				$fields   = (array) ( get_post_meta( $subs[0], '_wpzf_fields', true ) ?: array() );
				$sub_link = get_edit_post_link( $subs[0] );
			}
		}

		/* ── Refunded notice ── */
		$refunded_notice = ! empty( $_GET['refunded'] ) && '1' === $_GET['refunded'];

		$this->render_html( compact(
			'payment_id', 'status', 'sc', 'intent_id', 'amount_fmt', 'currency',
			'type_label', 'method_label', 'method', 'last4', 'email',
			'form_id', 'back_url', 'stripe_url', 'refund_url', 'can_refund',
			'fields', 'sub_link', 'refunded_notice'
		) );
	}

	// -------------------------------------------------------------------------
	// HTML Output
	// -------------------------------------------------------------------------

	/**
	 * Renders the full detail page HTML.
	 *
	 * @param array $d Data array from render_page().
	 */
	private function render_html( $d ) {
		extract( $d ); // phpcs:ignore WordPress.PHP.DontExtract
		$form_title = $form_id ? get_the_title( $form_id ) : '';
		?>
		<div class="wrap wpzf-payment-detail">

		<style>
		.wpzf-payment-detail { max-width: 1080px; }
		.wpzf-payment-detail .page-title-action { display: none; }
		.wpzf-payment-breadcrumb { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; color: #999; font-size: 13px; }
		.wpzf-back-link { display: inline-flex; align-items: center; gap: 5px; color: #3c434a; text-decoration: none; font-size: 13px; margin: 8px 0 20px; }
		.wpzf-back-link:hover { color: #0071a1; }
		.wpzf-card { background: #fff; border: 1px solid #dcdde0; border-radius: 4px; padding: 24px; margin-bottom: 20px; }
		.wpzf-card h2 { margin: 0 0 20px; font-size: 15px; font-weight: 600; color: #1d2327; border-bottom: 1px solid #f0f0f0; padding-bottom: 14px; }
		.wpzf-stats-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 22px; }
		.wpzf-stat-box { display: flex; align-items: center; gap: 14px; border: 1px solid #e2e4e7; border-radius: 4px; padding: 14px 16px; }
		.wpzf-stat-icon { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; background: #f6f7f7; border-radius: 4px; flex-shrink: 0; color: #50575e; }
		.wpzf-stat-label { font-size: 11px; color: #787c82; text-transform: uppercase; letter-spacing: .05em; margin-bottom: 3px; }
		.wpzf-stat-value { font-size: 17px; font-weight: 600; color: #1d2327; line-height: 1.2; }
		.wpzf-status-row { display: flex; align-items: center; justify-content: space-between; padding-top: 4px; }
		.wpzf-status-badge { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; color: #3c434a; }
		.wpzf-status-pill { display: inline-flex; align-items: center; gap: 6px; padding: 3px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; }
		.wpzf-status-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
		.wpzf-btns { display: flex; gap: 10px; }
		.wpzf-btn { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 3px; font-size: 13px; font-weight: 500; text-decoration: none; cursor: pointer; border: 1px solid; line-height: 1.6; }
		.wpzf-btn-outline { background: #fff; border-color: #c3c4c7; color: #3c434a; }
		.wpzf-btn-outline:hover { border-color: #0071a1; color: #0071a1; }
		.wpzf-btn-danger { background: #fff; border-color: #d63638; color: #d63638; }
		.wpzf-btn-danger:hover { background: #d63638; color: #fff; }
		.wpzf-entry-table { width: 100%; border-collapse: collapse; }
		.wpzf-entry-table tr { border-bottom: 1px solid #f0f0f1; }
		.wpzf-entry-table tr:last-child { border-bottom: none; }
		.wpzf-entry-table th { width: 28%; font-size: 13px; font-weight: 600; color: #3c434a; text-align: left; padding: 10px 0; vertical-align: top; }
		.wpzf-entry-table td { font-size: 13px; color: #50575e; padding: 10px 0 10px 16px; }
		.wpzf-empty { color: #787c82; font-style: italic; font-size: 13px; }
		@media (max-width: 900px) { .wpzf-stats-row { grid-template-columns: repeat(2,1fr); } }
		</style>

		<?php if ( $refunded_notice ) : ?>
			<div class="notice notice-success is-dismissible"><p><?php esc_html_e( 'Payment has been refunded successfully.', 'wpzoom-forms' ); ?></p></div>
		<?php endif; ?>

		<h1 class="wp-heading-inline">
			<?php esc_html_e( 'Payments', 'wpzoom-forms' ); ?>
		</h1>
		<span class="wpzf-payment-breadcrumb">
			<span>&rsaquo;</span>
			<span>WPZOOM Forms</span>
		</span>

		<a href="<?php echo esc_url( $back_url ); ?>" class="wpzf-back-link">
			&#8592; <?php esc_html_e( 'Back to all', 'wpzoom-forms' ); ?>
		</a>

		<!-- ── Main card ── -->
		<div class="wpzf-card">
			<h2><?php printf( esc_html__( 'Payment Details #%d', 'wpzoom-forms' ), absint( $payment_id ) ); ?></h2>

			<!-- Stats -->
			<div class="wpzf-stats-row">

				<div class="wpzf-stat-box">
					<div class="wpzf-stat-icon">
						<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M2 10h20" stroke="currentColor" stroke-width="2"/></svg>
					</div>
					<div>
						<div class="wpzf-stat-label"><?php esc_html_e( 'Total', 'wpzoom-forms' ); ?></div>
						<div class="wpzf-stat-value"><?php echo esc_html( $amount_fmt ); ?></div>
					</div>
				</div>

				<div class="wpzf-stat-box">
					<div class="wpzf-stat-icon">
						<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
					</div>
					<div>
						<div class="wpzf-stat-label"><?php esc_html_e( 'Type', 'wpzoom-forms' ); ?></div>
						<div class="wpzf-stat-value"><?php echo esc_html( $type_label ); ?></div>
					</div>
				</div>

				<div class="wpzf-stat-box">
					<div class="wpzf-stat-icon">
						<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/><rect x="5" y="13" width="4" height="2" rx="0.5" fill="currentColor"/><rect x="11" y="13" width="3" height="2" rx="0.5" fill="currentColor"/></svg>
					</div>
					<div>
						<div class="wpzf-stat-label"><?php esc_html_e( 'Method', 'wpzoom-forms' ); ?></div>
						<div class="wpzf-stat-value"><?php echo esc_html( $method_label ); ?></div>
					</div>
				</div>

				<div class="wpzf-stat-box">
					<div class="wpzf-stat-icon">
						<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M9 14l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/></svg>
					</div>
					<div>
						<div class="wpzf-stat-label"><?php esc_html_e( 'Coupon', 'wpzoom-forms' ); ?></div>
						<div class="wpzf-stat-value">N/A</div>
					</div>
				</div>

			</div><!-- /.wpzf-stats-row -->

			<!-- Status + buttons -->
			<div class="wpzf-status-row">
				<div class="wpzf-status-badge">
					<?php esc_html_e( 'Status:', 'wpzoom-forms' ); ?>
					<span class="wpzf-status-pill" style="background:<?php echo esc_attr( $sc['bg'] ); ?>;color:<?php echo esc_attr( $sc['text'] ); ?>">
						<span class="wpzf-status-dot" style="background:<?php echo esc_attr( $sc['dot'] ); ?>"></span>
						<?php echo esc_html( $sc['label'] ); ?>
					</span>
				</div>

				<div class="wpzf-btns">
					<?php if ( $intent_id ) : ?>
						<a href="<?php echo esc_url( $stripe_url ); ?>" target="_blank" rel="noopener noreferrer" class="wpzf-btn wpzf-btn-outline">
							<svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M15 3h6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
							<?php esc_html_e( 'View on Stripe', 'wpzoom-forms' ); ?>
						</a>
					<?php endif; ?>

					<?php if ( $can_refund ) : ?>
						<a href="<?php echo esc_url( $refund_url ); ?>"
						   class="wpzf-btn wpzf-btn-danger"
						   onclick="return confirm('<?php echo esc_js( __( 'Are you sure you want to refund this payment? This action cannot be undone.', 'wpzoom-forms' ) ); ?>');">
							<?php esc_html_e( 'Refund', 'wpzoom-forms' ); ?>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</div><!-- /.wpzf-card -->

		<!-- ── Entry Summary card ── -->
		<div class="wpzf-card">
			<h2>
				<?php esc_html_e( 'Entry Summary', 'wpzoom-forms' ); ?>
				<?php if ( $sub_link ) : ?>
					<a href="<?php echo esc_url( $sub_link ); ?>" style="font-size:12px;font-weight:400;margin-left:10px;"><?php esc_html_e( 'View submission', 'wpzoom-forms' ); ?> &rarr;</a>
				<?php endif; ?>
			</h2>

			<table class="wpzf-entry-table">
				<?php if ( ! empty( $fields ) ) : ?>
					<?php foreach ( $fields as $field_label => $field_value ) : ?>
						<tr>
							<th><?php echo esc_html( $field_label ); ?></th>
							<td><?php echo nl2br( esc_html( (string) $field_value ) ); ?></td>
						</tr>
					<?php endforeach; ?>
				<?php elseif ( $email ) : ?>
					<tr>
						<th><?php esc_html_e( 'Email', 'wpzoom-forms' ); ?></th>
						<td><?php echo esc_html( $email ); ?></td>
					</tr>
				<?php else : ?>
					<tr>
						<td colspan="2" class="wpzf-empty"><?php esc_html_e( 'No submission data linked to this payment.', 'wpzoom-forms' ); ?></td>
					</tr>
				<?php endif; ?>

				<?php if ( $method || $last4 ) : ?>
					<tr>
						<th><?php esc_html_e( 'Stripe Credit Card', 'wpzoom-forms' ); ?></th>
						<td>
							<?php if ( $last4 ) : ?>
								xxxx xxxx xxxx <?php echo esc_html( $last4 ); ?><br>
							<?php endif; ?>
							<?php echo esc_html( ucfirst( $method ) ); ?>
						</td>
					</tr>
				<?php endif; ?>

				<tr>
					<th><?php esc_html_e( 'Total', 'wpzoom-forms' ); ?></th>
					<td><?php echo esc_html( $amount_fmt ); ?></td>
				</tr>
			</table>
		</div><!-- /.wpzf-card -->

		</div><!-- /.wrap -->
		<?php
	}

	// -------------------------------------------------------------------------
	// Refund Handler
	// -------------------------------------------------------------------------

	/**
	 * Handles the admin-post.php refund action.
	 */
	public function handle_refund() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'Permission denied.', 'wpzoom-forms' ) );
		}

		$payment_id = absint( $_GET['payment_id'] ?? 0 );
		if ( ! $payment_id ) {
			wp_die( esc_html__( 'Invalid payment ID.', 'wpzoom-forms' ) );
		}

		check_admin_referer( 'wpzf_refund_' . $payment_id );

		$intent_id = get_post_meta( $payment_id, '_wpzf_txn_payment_intent_id', true );
		if ( ! $intent_id ) {
			wp_die( esc_html__( 'No payment intent found for this record.', 'wpzoom-forms' ) );
		}

		$stripe = WPZOOM_Forms_Stripe::instance();
		$stripe->init_stripe();

		try {
			$intent    = \Stripe\PaymentIntent::retrieve( array( 'id' => $intent_id, 'expand' => array( 'latest_charge' ) ) );
			$charge_id = is_object( $intent->latest_charge ) ? $intent->latest_charge->id : $intent->latest_charge;

			if ( $charge_id ) {
				\Stripe\Refund::create( array( 'charge' => $charge_id ) );
			}

			$stripe->update_payment_by_intent_id( $intent_id, 'refunded' );

		} catch ( \Stripe\Exception\ApiErrorException $e ) {
			wp_die( esc_html( $e->getMessage() ) );
		}

		wp_safe_redirect( $this->detail_url( $payment_id ) . '&refunded=1' );
		exit;
	}

	// -------------------------------------------------------------------------
	// Helpers
	// -------------------------------------------------------------------------

	/**
	 * Returns the URL for a payment's detail page.
	 *
	 * @param int $payment_id wpzf-payment post ID.
	 * @return string
	 */
	private function detail_url( $payment_id ) {
		return admin_url( 'admin.php?page=wpzf-payment-detail&payment_id=' . absint( $payment_id ) );
	}
}
