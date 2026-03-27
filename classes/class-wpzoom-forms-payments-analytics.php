<?php
/**
 * WPZOOM Forms — Payments Analytics
 *
 * Provides a REST endpoint that returns payment summary data and
 * injects the React analytics dashboard above the wpzf-payment list table.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WPZOOM_Forms_Payments_Analytics {

	public function __construct() {
		add_action( 'rest_api_init',        array( $this, 'register_routes' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );
		add_action( 'admin_notices',         array( $this, 'inject_container' ) );
	}

	// -------------------------------------------------------------------------
	// REST endpoint
	// -------------------------------------------------------------------------

	public function register_routes() {
		register_rest_route(
			'wpzoom-forms/v1',
			'/payments/analytics',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_analytics' ),
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
				'args'                => array(
					'period'    => array(
						'type'              => 'integer',
						'default'           => 30,
						'sanitize_callback' => 'absint',
					),
					'test_mode' => array(
						'type'    => 'string',
						'default' => '0',
					),
				),
			)
		);
	}

	public function get_analytics( WP_REST_Request $request ) {
		$period    = max( 1, (int) $request->get_param( 'period' ) );
		$test_mode = '1' === (string) $request->get_param( 'test_mode' ) ? '1' : '0';

		$now          = current_time( 'timestamp' );
		$period_start = $now - ( $period * DAY_IN_SECONDS );
		$prev_start   = $period_start - ( $period * DAY_IN_SECONDS );

		$current = $this->query_period( $period_start, $now, $test_mode );
		$prev    = $this->query_period( $prev_start, $period_start, $test_mode );

		return rest_ensure_response( array(
			'total_payments'   => $current['count'],
			'total_sales'      => $current['sales'],
			'total_refund'     => $current['refund'],
			'coupons_redeemed' => 0, // Reserved for future coupon support.
			'trends'           => array(
				'total_payments'   => $this->trend( $current['count'],  $prev['count'] ),
				'total_sales'      => $this->trend( $current['sales'],  $prev['sales'] ),
				'total_refund'     => $this->trend( $current['refund'], $prev['refund'] ),
				'coupons_redeemed' => 0,
			),
			'currency'         => strtoupper( get_option( 'wpzf_payment_currency', 'usd' ) ),
			'chart_data'       => $current['chart'],
		) );
	}

	/**
	 * Queries payment posts for a time window.
	 *
	 * @param int    $from      Unix timestamp (start, inclusive).
	 * @param int    $to        Unix timestamp (end, exclusive).
	 * @param string $test_mode '1' for test, '0' for live.
	 * @return array{ count: int, sales: int, refund: int, chart: array }
	 */
	private function query_period( $from, $to, $test_mode ) {
		$meta_query = array(
			'relation' => 'AND',
			array(
				'key'     => '_wpzf_txn_test_mode',
				'value'   => $test_mode,
				'compare' => '=',
			),
		);

		$base_args = array(
			'post_type'      => 'wpzf-payment',
			'post_status'    => 'publish',
			'posts_per_page' => -1,
			'fields'         => 'ids',
			'date_query'     => array(
				array(
					'after'     => date( 'Y-m-d H:i:s', $from ),
					'before'    => date( 'Y-m-d H:i:s', $to ),
					'inclusive' => true,
				),
			),
			'meta_query'     => $meta_query,
			'no_found_rows'  => true,
		);

		// Succeeded (paid) payments.
		$succeeded_args               = $base_args;
		$succeeded_args['meta_query'] = array_merge(
			$meta_query,
			array(
				array(
					'key'     => '_wpzf_txn_status',
					'value'   => 'paid',
					'compare' => '=',
				),
			)
		);
		$succeeded_query = new WP_Query( $succeeded_args );
		$succeeded_ids   = $succeeded_query->posts;

		// Refunded payments.
		$refunded_args               = $base_args;
		$refunded_args['meta_query'] = array_merge(
			$meta_query,
			array(
				array(
					'key'     => '_wpzf_txn_status',
					'value'   => 'refunded',
					'compare' => '=',
				),
			)
		);
		$refunded_query = new WP_Query( $refunded_args );
		$refunded_ids   = $refunded_query->posts;

		// Sum amounts.
		$sales  = 0;
		$refund = 0;
		foreach ( $succeeded_ids as $id ) {
			$sales += (int) get_post_meta( $id, '_wpzf_txn_amount', true );
		}
		foreach ( $refunded_ids as $id ) {
			$refund += (int) get_post_meta( $id, '_wpzf_txn_amount', true );
		}

		// Build daily chart data (sales + refund per day).
		$chart = $this->build_chart_data( $succeeded_ids, $refunded_ids, $from, $to );

		return array(
			'count'  => count( $succeeded_ids ),
			'sales'  => $sales,
			'refund' => $refund,
			'chart'  => $chart,
		);
	}

	/**
	 * Builds an array of { date, sales, refund, count } points grouped by day.
	 *
	 * @param int[] $succeeded_ids  Array of paid payment post IDs.
	 * @param int[] $refunded_ids   Array of refunded payment post IDs.
	 * @param int   $from           Period start (Unix timestamp).
	 * @param int   $to             Period end (Unix timestamp).
	 * @return array
	 */
	private function build_chart_data( $succeeded_ids, $refunded_ids, $from, $to ) {
		$sales_by_day   = array();
		$counts_by_day  = array();
		$refund_by_day  = array();

		foreach ( $succeeded_ids as $id ) {
			$date   = get_the_date( 'Y-m-d', $id );
			$amount = (int) get_post_meta( $id, '_wpzf_txn_amount', true );

			$sales_by_day[ $date ]  = ( $sales_by_day[ $date ] ?? 0 ) + $amount;
			$counts_by_day[ $date ] = ( $counts_by_day[ $date ] ?? 0 ) + 1;
		}

		foreach ( $refunded_ids as $id ) {
			$date   = get_the_date( 'Y-m-d', $id );
			$amount = (int) get_post_meta( $id, '_wpzf_txn_amount', true );

			$refund_by_day[ $date ] = ( $refund_by_day[ $date ] ?? 0 ) + $amount;
		}

		$points  = array();
		$day     = strtotime( date( 'Y-m-d', $from ) );
		$end_day = strtotime( date( 'Y-m-d', $to ) );
		while ( $day <= $end_day ) {
			$key      = date( 'Y-m-d', $day );
			$points[] = array(
				'date'   => date( 'M j', $day ),
				'sales'  => $sales_by_day[ $key ]  ?? 0,
				'refund' => $refund_by_day[ $key ]  ?? 0,
				'count'  => $counts_by_day[ $key ]  ?? 0,
			);
			$day += DAY_IN_SECONDS;
		}

		return $points;
	}

	/**
	 * Returns the percentage change between two values (rounded integer).
	 *
	 * @param int $current
	 * @param int $previous
	 * @return int  Positive = growth, negative = decline, 0 = no change.
	 */
	private function trend( $current, $previous ) {
		if ( 0 === $previous ) {
			return $current > 0 ? 100 : 0;
		}
		return (int) round( ( ( $current - $previous ) / $previous ) * 100 );
	}

	// -------------------------------------------------------------------------
	// Admin — enqueue + inject
	// -------------------------------------------------------------------------

	public function enqueue_assets( $hook ) {
		if ( 'edit.php' !== $hook ) {
			return;
		}
		$screen = get_current_screen();
		if ( ! $screen || 'edit-wpzf-payment' !== $screen->id ) {
			return;
		}

		$asset_file = plugin_dir_path( dirname( __FILE__ ) ) . 'build/payments/analytics/script.asset.php';
		$asset      = file_exists( $asset_file ) ? require $asset_file : array( 'dependencies' => array( 'wp-element', 'wp-api-fetch', 'wp-url', 'wp-data', 'wp-i18n' ), 'version' => WPZOOM_FORMS_VERSION );

		wp_enqueue_style(
			'wpzoom-forms-payments-analytics',
			plugins_url( 'build/payments/analytics/script.css', dirname( __FILE__ ) ),
			array( 'wp-components' ),
			$asset['version']
		);

		wp_enqueue_script(
			'wpzoom-forms-payments-analytics',
			plugins_url( 'build/payments/analytics/script.js', dirname( __FILE__ ) ),
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_localize_script(
			'wpzoom-forms-payments-analytics',
			'wpzfAnalyticsData',
			array(
				'isTestMode'   => (bool) get_option( 'wpzf_stripe_test_mode', false ),
				'currency'     => strtoupper( get_option( 'wpzf_payment_currency', 'usd' ) ),
				'settingsUrl'  => admin_url( 'edit.php?post_type=wpzf-form&page=wpzf-settings&tab=tab-payments' ),
				'upgradeUrl'   => 'https://www.wpzoom.com/plugins/wpzoom-forms/?utm_source=wpadmin&utm_medium=wpzoom-forms-free&utm_campaign=coupons-analytics-upsell',
			)
		);
	}

	public function inject_container() {
		$screen = get_current_screen();
		if ( ! $screen || 'edit-wpzf-payment' !== $screen->id ) {
			return;
		}
		echo '<div id="wpzf-payments-analytics"></div>';
		WPZOOM_Forms_Sidebar::render();
	}
}
