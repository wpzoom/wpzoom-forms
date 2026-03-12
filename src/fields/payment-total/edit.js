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
			<div className="wpzf-payment-total-amount">$0.00{ periodSuffix }</div>
		</div>
	</>;
};

export default Edit;
