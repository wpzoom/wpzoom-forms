<?php
/**
 * Class WPZOOM Forms Payment Detail
 *
 * Renders payment information as meta boxes on the standard WordPress
 * post edit screen for wpzf-payment posts, showing stats, status,
 * actions, and an entry summary drawn from the linked form submission.
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
		add_action( 'add_meta_boxes',                        array( $this, 'register_meta_boxes' ) );
		add_action( 'add_meta_boxes',                        array( $this, 'remove_meta_boxes' ), 20 );
		add_action( 'admin_enqueue_scripts',                 array( $this, 'enqueue_assets' ) );
		add_action( 'admin_head',                            array( $this, 'clean_edit_screen' ) );
		add_action( 'admin_post_wpzf_refund_payment',        array( $this, 'handle_refund' ) );
		add_action( 'admin_notices',                         array( $this, 'show_refunded_notice' ) );
		add_filter( 'post_row_actions',                      array( $this, 'modify_row_actions' ), 10, 2 );
		add_filter( 'admin_body_class',                      array( $this, 'add_admin_body_class' ) );
		add_action( 'edit_form_top',                         array( $this, 'render_back_to_payments' ) );
	}

	/**
	 * Prints a “Back to all payments” link above the meta boxes on the payment edit screen.
	 *
	 * @param WP_Post $post Current post object.
	 */
	public function render_back_to_payments( $post ) {
		if ( ! $post || 'wpzf-payment' !== $post->post_type ) {
			return;
		}
		$list_url = admin_url( 'edit.php?post_type=wpzf-payment' );
		?>
		<div class="wpzf-payment-detail-back">
			<a href="<?php echo esc_url( $list_url ); ?>" class="button wpzf-back-to-payments">
				<span class="dashicons dashicons-arrow-left-alt2" aria-hidden="true"></span>
				<?php esc_html_e( 'Back to all payments', 'wpzoom-forms' ); ?>
			</a>
		</div>
		<?php
	}

	/**
	 * Adds a dedicated body class on the wpzf-payment edit screen.
	 *
	 * @param string $classes Existing admin body classes.
	 * @return string
	 */
	public function add_admin_body_class( $classes ) {
		$screen = get_current_screen();
		if ( ! $screen || 'wpzf-payment' !== $screen->post_type || 'post' !== $screen->base ) {
			return $classes;
		}

		return trim( $classes . ' wpzf-payment-detail-page' );
	}

	/**
	 * Enqueues the main backend stylesheet on the wpzf-payment edit screen.
	 */
	public function enqueue_assets( $hook ) {
		if ( 'post.php' !== $hook ) {
			return;
		}
		$screen = get_current_screen();
		if ( ! $screen || 'wpzf-payment' !== $screen->post_type ) {
			return;
		}
		wp_enqueue_style(
			'wpzoom-forms-backend',
			plugins_url( 'build/main/backend/style.css', dirname( __FILE__ ) ),
			array(),
			WPZOOM_FORMS_VERSION
		);
	}

	/**
	 * Outputs CSS that turns the wpzf-payment edit screen into a clean read-only view.
	 */
	public function clean_edit_screen() {
		$screen = get_current_screen();
		if ( ! $screen || 'wpzf-payment' !== $screen->post_type || 'post' !== $screen->base ) {
			return;
		}
		?>
		<style>
			/* Hide screen-options / help tabs */
			#screen-meta, #screen-meta-links { display: none !important; }
			/* Hide title and editor areas (may still render as stubs even with empty supports) */
			#titlediv,
			#postdivrich,
			#postdiv { display: none !important; }
			/* Hide drag handles and toggle arrows on meta boxes (read-only) */
			.postbox .hndle { cursor: default; }
			.postbox .handlediv { display: none !important; }
			/* Suppress the "Edit Payment" h1 — meta box title already shows "Payment #N" */
			#wpbody-content > .wrap > h1.wp-heading-inline { display: none !important; }
		</style>
		<?php
	}

	// -------------------------------------------------------------------------
	// Meta Box Registration
	// -------------------------------------------------------------------------

	/**
	 * Removes the Publish/Update meta box — this screen is view-only.
	 */
	public function remove_meta_boxes() {
		remove_meta_box( 'submitdiv', 'wpzf-payment', 'side' );
	}

	/**
	 * Prints a "View Payment" button above the form on the wpzf-submission edit screen.
	 *
	 * @param WP_Post $post Current post object.
	 */
	public function render_submission_payment_button( $post ) {
		if ( ! $post || 'wpzf-submission' !== $post->post_type ) {
			return;
		}

		$payments = get_posts( array(
			'post_type'      => 'wpzf-payment',
			'post_status'    => 'any',
			'posts_per_page' => 1,
			'meta_query'     => array(
				array(
					'key'   => '_wpzf_txn_submission_id',
					'value' => absint( $post->ID ),
					'type'  => 'NUMERIC',
				),
			),
			'fields'         => 'ids',
		) );

		if ( empty( $payments ) ) {
			return;
		}

		$payment_id   = $payments[0];
		$payment_link = get_edit_post_link( $payment_id );
		?>
		<div class="wpzf-submission-payment-link">
			<a href="<?php echo esc_url( $payment_link ); ?>" class="button">
				<?php
				/* translators: %d: payment ID */
				echo esc_html( sprintf( __( 'View Payment #%d', 'wpzoom-forms' ), $payment_id ) );
				?>
			</a>
		</div>
		<?php
	}

	/**
	 * Registers the payment detail meta boxes on the wpzf-payment edit screen.
	 */
	public function register_meta_boxes() {
		$payment_id = absint( $_GET['post'] ?? 0 );
		$heading    = $payment_id
			/* translators: %d: payment post ID */
			? sprintf( __( 'Payment Details #%d', 'wpzoom-forms' ), $payment_id )
			: __( 'Payment Details', 'wpzoom-forms' );

		add_meta_box(
			'wpzf-payment-details',
			$heading,
			array( $this, 'render_details_meta_box' ),
			'wpzf-payment',
			'normal',
			'high'
		);
		add_meta_box(
			'wpzf-entry-summary',
			__( 'Entry Summary', 'wpzoom-forms' ),
			array( $this, 'render_entry_meta_box' ),
			'wpzf-payment',
			'normal',
			'default'
		);
		add_meta_box(
			'wpzf-payment-sidebar-details',
			__( 'Payment Details', 'wpzoom-forms' ),
			array( $this, 'render_payment_sidebar_meta_box' ),
			'wpzf-payment',
			'side',
			'high'
		);
	}

	// -------------------------------------------------------------------------
	// Notices & Row Actions
	// -------------------------------------------------------------------------

	/**
	 * Shows the refunded success notice on the wpzf-payment edit screen.
	 */
	public function show_refunded_notice() {
		$screen = get_current_screen();
		if ( ! $screen || 'wpzf-payment' !== $screen->post_type || 'post' !== $screen->base ) {
			return;
		}
		if ( ! empty( $_GET['refunded'] ) && '1' === $_GET['refunded'] ) {
			echo '<div class="notice notice-success is-dismissible"><p>' . esc_html__( 'Payment has been refunded successfully.', 'wpzoom-forms' ) . '</p></div>';
		}
	}

	/**
	 * Customises row actions on the payment list table to use the standard edit link.
	 *
	 * @param array   $actions Default actions.
	 * @param WP_Post $post    Current post.
	 * @return array
	 */
	public function modify_row_actions( $actions, $post ) {
		if ( 'wpzf-payment' !== $post->post_type ) {
			return $actions;
		}

		return array(
			'edit' => sprintf(
				'<a href="%s">%s</a>',
				esc_url( get_edit_post_link( $post->ID ) ),
				esc_html__( 'View', 'wpzoom-forms' )
			),
		);
	}

	// -------------------------------------------------------------------------
	// Meta Box Renderers
	// -------------------------------------------------------------------------

	/**
	 * Renders the Payment Details meta box (stats row + status badge + action buttons).
	 *
	 * @param WP_Post $post The current post object.
	 */
	public function render_details_meta_box( $post ) {
		$d = $this->prepare_data( $post->ID );
		extract( $d ); // phpcs:ignore WordPress.PHP.DontExtract
		?>
		<h2 class="wpzf-payment-details__heading">
			<?php
			echo esc_html(
				sprintf(
					/* translators: %d: payment post ID */
					__( 'Payment Details #%d', 'wpzoom-forms' ),
					(int) $post->ID
				)
			);
			?>
		</h2>
		<div class="wpzf-payment-detail">

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

		</div>

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

		</div><!-- /.wpzf-payment-detail -->
		<?php
	}

	/**
	 * Renders the Entry Summary meta box.
	 *
	 * @param WP_Post $post The current post object.
	 */
	public function render_entry_meta_box( $post ) {
		$d = $this->prepare_data( $post->ID );
		extract( $d ); // phpcs:ignore WordPress.PHP.DontExtract
		?>
		<div class="wpzf-payment-detail">

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
						<?php echo esc_html( ucfirst( (string) $method ) ); ?>
					</td>
				</tr>
			<?php endif; ?>

			<tr>
				<th><?php esc_html_e( 'Total', 'wpzoom-forms' ); ?></th>
				<td><?php echo esc_html( $amount_fmt ); ?></td>
			</tr>
		</table>

		</div><!-- /.wpzf-payment-detail -->
		<?php
	}

	/**
	 * Renders compact payment details in the right sidebar meta box.
	 *
	 * @param WP_Post $post The current post object.
	 */
	public function render_payment_sidebar_meta_box( $post ) {
		$d = $this->prepare_data( $post->ID );
		extract( $d ); // phpcs:ignore WordPress.PHP.DontExtract

		$post_date = get_the_date( get_option( 'date_format' ) . ' ' . get_option( 'time_format' ), $post );
		$form_link = $form_id ? get_edit_post_link( $form_id ) : '';
		$form_name = $form_id ? get_the_title( $form_id ) : '';
		?>
		<div class="misc-pub-section">
			<strong><?php esc_html_e( 'Payment ID:', 'wpzoom-forms' ); ?></strong>
			<span>#<?php echo esc_html( (string) $payment_id ); ?></span>
		</div>
		<div class="misc-pub-section">
			<strong><?php esc_html_e( 'Date:', 'wpzoom-forms' ); ?></strong>
			<span><?php echo esc_html( (string) $post_date ); ?></span>
		</div>
		<div class="misc-pub-section">
			<strong><?php esc_html_e( 'Status:', 'wpzoom-forms' ); ?></strong>
			<span><?php echo esc_html( (string) $sc['label'] ); ?></span>
		</div>
		<div class="misc-pub-section">
			<strong><?php esc_html_e( 'Amount:', 'wpzoom-forms' ); ?></strong>
			<span><?php echo esc_html( (string) $amount_fmt ); ?></span>
		</div>
		<div class="misc-pub-section">
			<strong><?php esc_html_e( 'Type:', 'wpzoom-forms' ); ?></strong>
			<span><?php echo esc_html( (string) $type_label ); ?></span>
		</div>
		<div class="misc-pub-section">
			<strong><?php esc_html_e( 'Method:', 'wpzoom-forms' ); ?></strong>
			<span><?php echo esc_html( (string) $method_label ); ?></span>
		</div>
		<?php if ( $email ) : ?>
			<div class="misc-pub-section">
				<strong><?php esc_html_e( 'Customer:', 'wpzoom-forms' ); ?></strong>
				<span><?php echo esc_html( (string) $email ); ?></span>
			</div>
		<?php endif; ?>
		<?php if ( $form_id ) : ?>
			<div class="misc-pub-section">
				<strong><?php esc_html_e( 'Form:', 'wpzoom-forms' ); ?></strong>
				<?php if ( $form_link ) : ?>
					<a href="<?php echo esc_url( $form_link ); ?>"><?php echo esc_html( $form_name ? $form_name : '#' . $form_id ); ?></a>
				<?php else : ?>
					<span><?php echo esc_html( $form_name ? $form_name : '#' . $form_id ); ?></span>
				<?php endif; ?>
			</div>
		<?php endif; ?>
		<?php if ( $intent_id ) : ?>
			<div class="misc-pub-section">
				<strong><?php esc_html_e( 'Stripe Payment ID:', 'wpzoom-forms' ); ?></strong>
				<code><?php echo esc_html( (string) $intent_id ); ?></code>
			</div>
		<?php endif; ?>
		<?php if ( $sub_link ) : ?>
			<div class="misc-pub-section" style="text-align: right; padding-top: 12px;">
				<a href="<?php echo esc_url( $sub_link ); ?>" class="button button-secondary"><?php esc_html_e( 'View submission', 'wpzoom-forms' ); ?></a>
			</div>
		<?php endif; ?>
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

		wp_safe_redirect( add_query_arg( 'refunded', '1', get_edit_post_link( $payment_id, 'raw' ) ) );
		exit;
	}

	// -------------------------------------------------------------------------
	// Helpers
	// -------------------------------------------------------------------------

	/**
	 * Prepares all display data for a given payment post ID.
	 *
	 * @param int $payment_id wpzf-payment post ID.
	 * @return array
	 */
	private function prepare_data( $payment_id ) {
		$status    = get_post_meta( $payment_id, '_wpzf_txn_status',            true ) ?: 'pending';
		$intent_id = get_post_meta( $payment_id, '_wpzf_txn_payment_intent_id', true );
		$amount    = (int) get_post_meta( $payment_id, '_wpzf_txn_amount',      true );
		$currency  = strtoupper( get_post_meta( $payment_id, '_wpzf_txn_currency', true ) ?: 'USD' );
		$form_id   = (int) get_post_meta( $payment_id, '_wpzf_txn_form_id',     true );
		$email     = get_post_meta( $payment_id, '_wpzf_txn_customer_email',    true );
		$method    = get_post_meta( $payment_id, '_wpzf_txn_payment_method',    true );
		$last4     = get_post_meta( $payment_id, '_wpzf_txn_card_last4',        true );

		$payment_type = $form_id ? ( get_post_meta( $form_id, '_wpzf_stripe_payment_type', true ) ?: 'one-time' ) : 'one-time';
		$type_label   = 'recurring' === $payment_type
			? __( 'Recurring', 'wpzoom-forms' )
			: __( 'One-time', 'wpzoom-forms' );

		$amount_fmt   = wpzf_format_price( $amount, $currency, true );
		$method_label = $method ? ucfirst( $method ) : 'N/A';

		$status_map = array(
			'paid'     => array( 'label' => __( 'Processed',  'wpzoom-forms' ), 'bg' => '#e2f3d2', 'text' => '#678C23', 'dot' => '#10b981' ),
			'pending'  => array( 'label' => __( 'Incomplete', 'wpzoom-forms' ), 'bg' => '#fef3c7', 'text' => '#92400e', 'dot' => '#f59e0b' ),
			'failed'   => array( 'label' => __( 'Failed',     'wpzoom-forms' ), 'bg' => '#fee2e2', 'text' => '#991b1b', 'dot' => '#ef4444' ),
			'refunded' => array( 'label' => __( 'Refunded',   'wpzoom-forms' ), 'bg' => '#f3f4f6', 'text' => '#374151', 'dot' => '#9ca3af' ),
		);
		$sc = $status_map[ $status ] ?? array( 'label' => ucfirst( $status ), 'bg' => '#f3f4f6', 'text' => '#374151', 'dot' => '#9ca3af' );

		$stripe     = WPZOOM_Forms_Stripe::instance();
		$test_mode  = $stripe->is_test_mode();
		$stripe_url = 'https://dashboard.stripe.com/' . ( $test_mode ? 'test/' : '' ) . 'payments/' . $intent_id;
		$can_refund = ( 'paid' === $status ) && $intent_id;
		$refund_url = wp_nonce_url(
			admin_url( 'admin-post.php?action=wpzf_refund_payment&payment_id=' . $payment_id ),
			'wpzf_refund_' . $payment_id
		);

		$fields   = array();
		$sub_link = '';

		// Use the submission directly linked to this payment (stored at creation time).
		$submission_id = (int) get_post_meta( $payment_id, '_wpzf_txn_submission_id', true );
		if ( $submission_id ) {
			$sub = get_post( $submission_id );
			if ( $sub && 'wpzf-submission' === $sub->post_type ) {
				$fields   = (array) ( get_post_meta( $submission_id, '_wpzf_fields', true ) ?: array() );
				$sub_link = get_edit_post_link( $submission_id );
			}
		}

		return compact(
			'payment_id', 'status', 'sc', 'intent_id', 'amount_fmt', 'currency',
			'type_label', 'method_label', 'method', 'last4', 'email',
			'form_id', 'stripe_url', 'refund_url', 'can_refund',
			'fields', 'sub_link'
		);
	}
}
