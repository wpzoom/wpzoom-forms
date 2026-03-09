import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, itemName, price, quantity, minQty, maxQty, showQty } = attributes;

	return (
		<div
			{ ...blockProps }
			className={ `wpzf-payment-item ${ blockProps.className }` }
			data-price={ price }
			data-id={ id }
		>
			<span className="wpzf-payment-item-name">{ itemName }</span>
			<span className="wpzf-payment-item-price">${ Number( price ).toFixed( 2 ) }</span>

			{ showQty ? (
				<input
					type="number"
					className="wpzf-payment-item-qty"
					name={ `${ id }_qty` }
					defaultValue={ quantity }
					min={ minQty }
					max={ maxQty }
				/>
			) : (
				<input type="hidden" name={ `${ id }_qty` } value={ quantity } />
			) }
		</div>
	);
};

export default Save;
