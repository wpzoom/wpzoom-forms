/* global wpzfAnalyticsData */
import { render, useState, useEffect, useRef, useCallback } from '@wordpress/element';
import { dispatch }                                         from '@wordpress/data';
import apiFetch                                             from '@wordpress/api-fetch';
import { addQueryArgs }                                     from '@wordpress/url';
import { __ }                                               from '@wordpress/i18n';
import {
	SelectControl,
	Button,
	Spinner,
	Flex,
	FlexItem,
	FlexBlock,
	Icon,
} from '@wordpress/components';
import { payment, tag, undo, receipt, cog, trendingDown, trendingUp } from '@wordpress/icons';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, LineController, Filler, Tooltip } from 'chart.js';

import './style.scss';

Chart.register( CategoryScale, LinearScale, PointElement, LineElement, LineController, Filler, Tooltip );

dispatch( 'core' ).addEntities( [
	{
		label:   __( 'Payment Analytics', 'wpzoom-forms' ),
		kind:    'wpzoom-forms/v1',
		name:    'payment-analytics',
		baseURL: '/wpzoom-forms/v1/payments/analytics',
	},
] );

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatMoney( cents, currency ) {
	return new Intl.NumberFormat( 'en-US', {
		style:    'currency',
		currency: currency || 'USD',
	} ).format( cents / 100 );
}

function TrendBadge( { value } ) {
	if ( value === 0 ) {
		return (
			<span className="wpzf-analytics__trend wpzf-analytics__trend--neutral">
				— 0%
			</span>
		);
	}
	const up = value > 0;
	return (
		<span className={ `wpzf-analytics__trend ${ up ? 'wpzf-analytics__trend--up' : 'wpzf-analytics__trend--down' }` }>
			{ up ? <Icon size={16} icon={trendingUp} fill="currentColor" /> : <Icon size={16} icon={trendingDown} fill="currentColor" /> }
			{ Math.abs( value ) }%
		</span>
	);
}

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard( { icon, label, value, trend, active, onClick } ) {
	return (
		<div
			className={ `wpzf-analytics__stat-card ${ active ? 'is-active' : '' }` }
			size="small"
			onClick={ onClick }
			role="button"
			tabIndex={ 0 }
			onKeyDown={ e => e.key === 'Enter' && onClick() }
		>
				<div className="wpzf-analytics__stat-icon-box">
					<Icon icon={ icon } size={ 24 } />
				</div>
				<div className="wpzf-analytics__stat-content">
					<span className="wpzf-analytics__stat-label">{ label }</span>
					<Flex align="center" gap={ 2 } justify="left" wrap>
						<div className="wpzf-analytics__stat-value">{ value }</div>
						<div className="wpzf-analytics__stat-trend">
							<TrendBadge value={ trend } />
							<span className="wpzf-analytics__stat-trend-label">
								{ __( 'vs prev. period', 'wpzoom-forms' ) }
							</span>
						</div>
					</Flex>
				</div>
		</div>
	);
}

// ── Chart ─────────────────────────────────────────────────────────────────────

function AnalyticsChart( { chartData, activeMetric, currency } ) {
	const canvasRef     = useRef( null );
	const chartInstance = useRef( null );

	useEffect( () => {
		if ( ! canvasRef.current || ! chartData || chartData.length === 0 ) {
			return;
		}
		if ( chartInstance.current ) {
			chartInstance.current.destroy();
		}

		const isMoney = activeMetric !== 'payments';

		const METRIC_COLORS = {
			payments: { line: '#2271b1', fill: 'rgba(34,113,177,0.12)' },
			sales:    { line: '#00a32a', fill: 'rgba(0,163,42,0.12)' },
			refund:   { line: '#d63638', fill: 'rgba(214,54,56,0.12)' },
			coupons:  { line: '#dba617', fill: 'rgba(219,166,23,0.12)' },
		};
		const colors = METRIC_COLORS[ activeMetric ] || METRIC_COLORS.payments;

		chartInstance.current = new Chart( canvasRef.current, {
			type: 'line',
			data: {
				labels:   chartData.map( p => p.date ),
				datasets: [ {
					data:                 chartData.map( p => isMoney ? p.value : p.count ),
					borderColor:          colors.line,
					backgroundColor:      colors.fill,
					borderWidth:          2,
					pointRadius:          3,
					pointHoverRadius:     5,
					pointBackgroundColor: colors.line,
					fill:                 true,
					tension:              0.4,
				} ],
			},
			options: {
				responsive:          true,
				maintainAspectRatio: false,
				plugins: {
					legend:  { display: false },
					tooltip: {
						callbacks: {
							label: ctx => isMoney
								? formatMoney( ctx.parsed.y, currency )
								: ctx.parsed.y + ' ' + __( 'payments', 'wpzoom-forms' ),
						},
					},
				},
				scales: {
					x: {
						grid:  { display: false },
						ticks: { font: { size: 11 }, color: '#8c8f94' },
					},
					y: {
						grid:  { color: 'rgba(0,0,0,.06)' },
						ticks: {
							font:      { size: 11 },
							color:     '#8c8f94',
							stepSize:  isMoney ? undefined : 1,
							precision: isMoney ? undefined : 0,
							callback:  v => isMoney ? formatMoney( v, currency ) : v,
						},
						beginAtZero: true,
					},
				},
			},
		} );

		return () => {
			if ( chartInstance.current ) {
				chartInstance.current.destroy();
			}
		};
	}, [ chartData, activeMetric, currency ] );

	return (
		<div className="wpzf-analytics__chart">
			<canvas ref={ canvasRef } />
		</div>
	);
}

// ── Constants ─────────────────────────────────────────────────────────────────

const PERIOD_OPTIONS = [
	{ value: '7',   label: __( 'Last 7 days',  'wpzoom-forms' ) },
	{ value: '30',  label: __( 'Last 30 days', 'wpzoom-forms' ) },
	{ value: '90',  label: __( 'Last 90 days', 'wpzoom-forms' ) },
	{ value: '365', label: __( 'Last year',    'wpzoom-forms' ) },
];

// ── useAnalytics hook ─────────────────────────────────────────────────────────

function useAnalytics( period, testMode ) {
	const [ data,    setData    ] = useState( null );
	const [ loading, setLoading ] = useState( true );
	const [ error,   setError   ] = useState( null );

	const fetch = useCallback( () => {
		setLoading( true );
		setError( null );

		apiFetch( {
			path: addQueryArgs( '/wpzoom-forms/v1/payments/analytics', {
				period,
				test_mode: testMode ? '1' : '0',
			} ),
		} )
			.then( response => {
				setData( response );
				setLoading( false );
			} )
			.catch( err => {
				setError( err.message );
				setLoading( false );
			} );
	}, [ period, testMode ] );

	useEffect( () => { fetch(); }, [ fetch ] );

	return { data, loading, error, refetch: fetch };
}

// ── PaymentsSummary component ─────────────────────────────────────────────────

function PaymentsSummary() {
	const { isTestMode, currency, settingsUrl } = wpzfAnalyticsData;

	const [ period,       setPeriod       ] = useState( '30' );
	const [ testMode,     setTestMode     ] = useState( isTestMode );
	const [ activeMetric, setActiveMetric ] = useState( 'sales' );

	const { data, loading, error } = useAnalytics( Number( period ), testMode );

	const stats = data ? [
		{
			key:   'payments',
			icon:  receipt,
			label: __( 'Total Payments',   'wpzoom-forms' ),
			value: String( data.total_payments ),
			trend: data.trends.total_payments,
		},
		{
			key:   'sales',
			icon:  payment,
			label: __( 'Total Sales',      'wpzoom-forms' ),
			value: formatMoney( data.total_sales, currency ),
			trend: data.trends.total_sales,
		},
		{
			key:   'refund',
			icon:  undo,
			label: __( 'Total Refund',     'wpzoom-forms' ),
			value: formatMoney( data.total_refund, currency ),
			trend: data.trends.total_refund,
		},
		{
			key:   'coupons',
			icon:  tag,
			label: __( 'Coupons Redeemed', 'wpzoom-forms' ),
			value: String( data.coupons_redeemed ),
			trend: data.trends.coupons_redeemed,
		},
	] : [];

	return (
		<div className="wpzf-analytics">
				{ /* Header */ }
				<Flex className="wpzf-analytics__header" align="center" justify="space-between" wrap>
					<FlexBlock>
						<h2 className="wpzf-analytics__title">
							{ __( 'Payments Summary', 'wpzoom-forms' ) }
						</h2>
					</FlexBlock>

					<FlexItem>
						<Flex gap={ 2 } align="center" wrap>
							<FlexItem>
								<Button
									className={ `wpzf-analytics__test-toggle ${ testMode ? 'is-active' : '' }` }
									onClick={ () => setTestMode( v => ! v ) }
									size="compact"
								>
									<span className="wpzf-analytics__toggle-track">
										<span className="wpzf-analytics__toggle-knob" />
									</span>
									{ __( 'Test Mode', 'wpzoom-forms' ) }
								</Button>
							</FlexItem>

							<FlexItem>
								<SelectControl
									className="wpzf-analytics__period-select"
									value={ period }
									options={ PERIOD_OPTIONS }
									onChange={ setPeriod }
									size="compact"
									__next40pxDefaultSize
									__nextHasNoMarginBottom
								/>
							</FlexItem>

							<FlexItem>
								<Button
									href={ settingsUrl }
									icon={ <Icon icon={cog} />}
									label={ __( 'Stripe Settings', 'wpzoom-forms' ) }
									size="compact"
								/>
							</FlexItem>
						</Flex>
					</FlexItem>
				</Flex>

				{ /* Loading */ }
				{ loading && (
					<div className="wpzf-analytics__loading">
						<Spinner />
					</div>
				) }

				{ /* Error */ }
				{ error && ! loading && (
					<div className="wpzf-analytics__error">
						{ __( 'Failed to load analytics:', 'wpzoom-forms' ) } { error }
					</div>
				) }

				{ /* Data */ }
				{ ! loading && ! error && data && (
					<>
						<Flex 
							className="wpzf-analytics__stats" 
							gap={ 3 } 
							direction={
								[
									"column",
									"row"
								]
							}
						>
							{ stats.map( s => (
								<FlexBlock key={ s.key }>
									<StatCard
										icon={ s.icon }
										label={ s.label }
										value={ s.value }
										trend={ s.trend }
										active={ activeMetric === s.key }
										onClick={ () => setActiveMetric( s.key ) }
									/>
								</FlexBlock>
							) ) }
						</Flex>

						<AnalyticsChart
							chartData={ data.chart_data }
							activeMetric={ activeMetric }
							currency={ currency }
						/>
					</>
				) }
		</div>
	);
}

// ── Mount ─────────────────────────────────────────────────────────────────────

document.addEventListener( 'DOMContentLoaded', () => {
	const container = document.getElementById( 'wpzf-payments-analytics' );
	if ( ! container ) {
		return;
	}

	const wrap = document.querySelector( '.wrap' );
	if ( wrap ) {
		const heading = wrap.querySelector( '.wp-heading-inline' );
		if ( heading ) {
			heading.parentNode.insertBefore( container, heading.nextSibling );
		}

		const sidebar = document.querySelector( '.wpzf-sidebar' );
		if ( sidebar ) {
			const postsFilter = wrap.querySelector( '#posts-filter' );
			if ( postsFilter ) {
				postsFilter.parentNode.insertBefore( sidebar, postsFilter.nextSibling );
			} else {
				wrap.appendChild( sidebar );
			}
		}
	}

	render( <PaymentsSummary />, container );
} );
