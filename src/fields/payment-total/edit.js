import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';

const periodLabels = { day: '/ day', week: '/ week', month: '/ month', year: '/ year' };

const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { label } = attributes;

	const postType = useSelect( select => select( 'core/editor' ).getCurrentPostType(), [] );
	const [ meta ] = useEntityProp( 'postType', postType, 'meta' );

	const paymentType     = meta?.['_wpzf_stripe_payment_type']     || 'one-time';
	const recurringPeriod = meta?.['_wpzf_stripe_recurring_period'] || 'month';

	const currency     = ( window.wpzf_formblock?.currency || 'usd' ).toUpperCase();
	const zeroDisplay  = new Intl.NumberFormat( [], { style: 'currency', currency, minimumFractionDigits: 2 } ).format( 0 );

	const periodSuffix = paymentType === 'recurring'
		? ' ' + ( periodLabels[ recurringPeriod ] || '/ ' + recurringPeriod )
		: '';

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Total Options', 'wpzoom-forms' ) }>
				<TextControl
					label={ __( 'Label', 'wpzoom-forms' ) }
					value={ label }
					onChange={ value => setAttributes( { label: value } ) }
					__next40pxDefaultSize
				/>
			</PanelBody>
		</InspectorControls>

		<div { ...blockProps }>
			<div className="wpzf-payment-total-label">{ label || __( 'Total', 'wpzoom-forms' ) }</div>
			<div className="wpzf-payment-total-amount">{ zeroDisplay }{ periodSuffix }</div>
		</div>
	</>;
};

export default Edit;
