import { useBlockProps} from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { label } = attributes;

	return (
		<div { ...blockProps }>
			<label className="wpzf-payment-total-label" htmlFor="wpzf_payment_total">{ label }</label>
			<div className="wpzf-payment-total-amount">$0.00</div>
			<input type="hidden" name="wpzf_payment_total" value="0" />
		</div>
	);
};

export default Save;
