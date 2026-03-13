import clsx from 'clsx';
import { useBlockProps,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
} from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, itemName, price, description, quantity, minQty, maxQty, showQty } = attributes;

	const borderProps = getBorderClassesAndStyles( attributes );
	const colorProps  = getColorClassesAndStyles( attributes );

	return (
		<div { ...blockProps }>
			<input type="hidden" name={ `${ id }_price` } value={ price } />
			<div className="wpzf-payment-item-info">
				<div className="wpzf-payment-item-name">{ itemName }</div>
				{ description && (
					<div className="wpzf-payment-item-desc">{ description }</div>
				) }
			</div>
			<div className="wpzf-payment-item-right">
				<span className="wpzf-payment-item-price">${ Number( price ).toFixed( 2 ) }</span>
				{ showQty ? (
					<input
						type="number"
						className={ clsx( 'wpzf-payment-item-qty', colorProps.className, borderProps.className ) }
						style={ { ...borderProps.style, ...colorProps.style } }
						name={ `${ id }_qty` }
						value={quantity}
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
