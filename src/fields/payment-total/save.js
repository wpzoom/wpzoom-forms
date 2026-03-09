import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { label } = attributes;

	return (
		<div { ...blockProps } className={ `wpzf-payment-total ${ blockProps.className }` }>
			<span className="wpzf-payment-total-label">{ label }</span>
			<span className="wpzf-payment-total-amount">$0.00</span>
			<input type="hidden" name="wpzf_payment_total" value="0" />
		</div>
	);
};

export default Save;
