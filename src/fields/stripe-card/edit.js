import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

/* ── Theme tokens ─────────────────────────────────────────────────────────── */
const THEMES = {
	stripe: {
		bg:       '#ffffff',
		inputBg:  '#ffffff',
		text:     '#30313d',
		label:    '#6d6e78',
		border:   '1px solid #e0e0e0',
		shadow:   '0 1px 3px rgba(0,0,0,.1)',
		radius:   '5px',
		placeholder: '#b3b3c0',
	},
	flat: {
		bg:       '#ffffff',
		inputBg:  '#f8f8f8',
		text:     '#30313d',
		label:    '#6d6e78',
		border:   '1px solid #ccc',
		shadow:   'none',
		radius:   '4px',
		placeholder: '#b3b3c0',
	},
	night: {
		bg:       '#0d1117',
		inputBg:  '#161b22',
		text:     '#c9d1d9',
		label:    '#8b949e',
		border:   '1px solid #30363d',
		shadow:   'none',
		radius:   '6px',
		placeholder: '#484f58',
	},
};

/* ── Small inline SVG icons ───────────────────────────────────────────────── */
const MastercardIcon = () => (
	<svg width="28" height="18" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
		<rect width="38" height="24" rx="4" fill="#252525"/>
		<circle cx="15" cy="12" r="7" fill="#eb001b"/>
		<circle cx="23" cy="12" r="7" fill="#f79e1b"/>
		<path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#ff5f00"/>
	</svg>
);

const VisaIcon = () => (
	<svg width="28" height="18" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
		<rect width="38" height="24" rx="4" fill="#1a1f71"/>
		<text x="19" y="17" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Arial,sans-serif">VISA</text>
	</svg>
);

const DiscoverIcon = () => (
	<svg width="28" height="18" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
		<rect width="38" height="24" rx="4" fill="#fff" stroke="#ddd" strokeWidth="1"/>
		<circle cx="24" cy="12" r="7" fill="#f76f20"/>
		<text x="8" y="16" fill="#231f20" fontSize="7.5" fontWeight="bold" fontFamily="Arial,sans-serif">DIS</text>
	</svg>
);

const CvcIcon = () => (
	<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="0.5" y="0.5" width="19" height="15" rx="2" stroke="#aaa"/>
		<path d="M0 5h20" stroke="#aaa"/>
		<rect x="3" y="8" width="5" height="2" rx="0.5" fill="#aaa"/>
	</svg>
);

const ChevronIcon = ( { color } ) => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
		<path d="M6 9l6 6 6-6" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

/* ── Helper: detect active theme from className ───────────────────────────── */
function getTheme( className ) {
	if ( className && className.includes( 'is-style-night' ) ) return 'night';
	if ( className && className.includes( 'is-style-flat' ) )  return 'flat';
	return 'stripe';
}

/* ── Edit component ───────────────────────────────────────────────────────── */
const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { label, showLabel } = attributes;

	const themeKey = getTheme( blockProps.className );
	const t        = THEMES[ themeKey ];

	const fieldGroupStyle = { display: 'flex', flexDirection: 'column', gap: '4px' };

	const labelStyle = {
		fontSize:    '13px',
		fontWeight:  '500',
		color:       t.label,
		lineHeight:  '1.4',
	};

	const inputStyle = {
		display:       'flex',
		alignItems:    'center',
		justifyContent: 'space-between',
		background:    t.inputBg,
		border:        t.border,
		borderRadius:  t.radius,
		padding:       '4px 12px',
		height:        '40px',
	};

	const placeholderStyle = {
		fontSize: '14px',
		color:    t.placeholder,
	};

	const rowStyle = {
		display:             'grid',
		gridTemplateColumns: '1fr 1fr',
		gap:                 '12px',
	};

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Payment Field Options', 'wpzoom-forms' ) }>
				<ToggleControl
					label={ __( 'Show Label', 'wpzoom-forms' ) }
					checked={ !! showLabel }
					onChange={ value => setAttributes( { showLabel: !! value } ) }
					__next40pxDefaultSize
				/>

				{ showLabel && <TextControl
					label={ __( 'Label', 'wpzoom-forms' ) }
					value={ label }
					onChange={ value => setAttributes( { label: value } ) }
					__next40pxDefaultSize
				/> }
			</PanelBody>
		</InspectorControls>

		<Fragment>
			<div className="wpzf-stripe-card-wrapper" { ...blockProps }>
				{ showLabel && (
					<RichText
						tagName="label"
						className="wpzf-stripe-card-label"
						placeholder={ __( 'Payment Details', 'wpzoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/>
				) }

				{/* ── Payment Element mockup ── */}
				<div className="wpzf-stripe-payment-preview">

					{/* Card number */}
					<div style={ { ...fieldGroupStyle, marginBottom: '12px' } }>
						<label style={ labelStyle }>{ __( 'Card number', 'wpzoom-forms' ) }</label>
						<div style={ inputStyle }>
							<span style={ placeholderStyle }>1234 1234 1234 1234</span>
							<span style={ { display: 'flex', gap: '4px', alignItems: 'center' } }>
								<MastercardIcon />
								<VisaIcon />
								<DiscoverIcon />
							</span>
						</div>
					</div>

					{/* Expiry + CVC */}
					<div style={ { ...rowStyle, marginBottom: '12px' } }>
						<div style={ fieldGroupStyle }>
							<label style={ labelStyle }>{ __( 'Expiration date', 'wpzoom-forms' ) }</label>
							<div style={ inputStyle }>
								<span style={ placeholderStyle }>MM / YY</span>
							</div>
						</div>
						<div style={ fieldGroupStyle }>
							<label style={ labelStyle }>{ __( 'Security code', 'wpzoom-forms' ) }</label>
							<div style={ inputStyle }>
								<span style={ placeholderStyle }>CVC</span>
								<CvcIcon />
							</div>
						</div>
					</div>

					{/* Country */}
					<div style={ fieldGroupStyle }>
						<label style={ labelStyle }>{ __( 'Country', 'wpzoom-forms' ) }</label>
						<div style={ { ...inputStyle, cursor: 'default' } }>
							<span style={ { fontSize: '14px', color: t.text } }>United States</span>
							<ChevronIcon color={ t.placeholder } />
						</div>
					</div>

				</div>
			</div>
		</Fragment>
	</>;
};

export default Edit;
