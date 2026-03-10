import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, itemName, price, description, quantity, minQty, maxQty, showQty } = attributes;

	return (
		<div
			{ ...blockProps }
			className={ `wpzf-payment-item ${ blockProps.className }` }
			data-price={ price }
			data-id={ id }
		>
			<div className="wpzf-payment-item-info">
				<span className="wpzf-payment-item-name">{ itemName }</span>
				{ description && (
					<span className="wpzf-payment-item-desc">{ description }</span>
				) }
			</div>
			<div className="wpzf-payment-item-right">
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
		</div>
	);
};

export default Save;
