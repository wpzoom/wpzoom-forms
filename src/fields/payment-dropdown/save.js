import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, options, defaultValue, label, showLabel, required } = attributes;

	return <>
		{ showLabel && <label htmlFor={ id }>
			<RichText.Content
				tagName="span"
				value={ label }
			/>
			{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
		</label> }

		<select
			name={ id }
			id={ id }
			required={ !! required }
			defaultValue={ defaultValue }
			className={ `wpzf-payment-options ${ blockProps.className || '' }` }
			data-payment-type="dropdown"
			{ ...blockProps }
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
	</>;
};

export default Save;
