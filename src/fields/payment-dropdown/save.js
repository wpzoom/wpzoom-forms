/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { useBlockProps, RichText,__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles, } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const { id, options, defaultValue, label, showLabel, required } = attributes;

	const borderProps = getBorderClassesAndStyles( attributes );
	const colorProps = getColorClassesAndStyles( attributes );

	const inputStyle = {
		...borderProps.style,
		...colorProps.style,
	};

	const inputClasses = clsx(
		'wpzf-payment-options',
		colorProps.className,
		borderProps.className
	);

	const blockProps = useBlockProps.save();


	return <div { ...blockProps }>
		{ showLabel && <label htmlFor={ id }>
			<RichText.Content
				tagName="span"
				value={ label }
			/>
			{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
		</label> }

		<select
			className={ inputClasses }
			name={ id }
			id={ id }
			required={ !! required }
			defaultValue={ defaultValue }
			data-payment-type="dropdown"
			style={ inputStyle }
		>
			{ options.map( ( option, index ) =>
				<option
					key={ index }
					value={ option.label }
					data-price={ option.price }
					className="wpzf-payment-option"
				>
					{ option.label } — ${ Number( option.price ).toFixed( 2 ) }
				</option>
			) }
		</select>
	</div>;
};

export default Save;
