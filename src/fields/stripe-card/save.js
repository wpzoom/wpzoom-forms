import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { label, showLabel } = attributes;

	return (
		<div { ...blockProps } className={ `wpzf-stripe-card-wrapper ${ blockProps.className }` }>
			{ showLabel && (
				<label className="wpzf-stripe-card-label">
					<RichText.Content tagName="span" value={ label } />
				</label>
			) }

			<div id="wpzf-payment-element" className="wpzf-stripe-card-element"></div>
			<div id="wpzf-card-errors" className="wpzf-stripe-card-errors" role="alert"></div>

			<input type="hidden" name="wpzf_payment_intent_id" value="" />
		</div>
	);
};

export default Save;
