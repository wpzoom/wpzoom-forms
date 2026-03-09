import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, itemName, price, description } = attributes;

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
			<span className="wpzf-payment-item-price">${ Number( price ).toFixed( 2 ) }</span>
			<input type="hidden" name={ `${ id }_qty` } value="1" />
		</div>
	);
};

export default Save;
