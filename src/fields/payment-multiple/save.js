import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, name, options, defaultValue, label, showLabel, required } = attributes;
	const fieldName = name || id;

	return <>
		{ showLabel && <label htmlFor={ id }>
			<RichText.Content
				tagName="span"
				value={ label }
			/>
			{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
		</label> }

		<ul { ...blockProps } className={ `wpzf-payment-options ${ blockProps.className || '' }` } id={ id } data-payment-type="radio">
			{ options.map( ( option, index ) =>
				<li key={ index }>
					<label>
						<input
							type="radio"
							name={ fieldName }
							id={ `${ id }-${ index }` }
							value={ option.label }
							data-price={ option.price }
							className="wpzf-payment-option"
							checked={ option.label === defaultValue }
							onChange={ e => {} }
							required={ !! required }
						/>
						{ option.label } — ${ Number( option.price ).toFixed( 2 ) }
					</label>
				</li>
			) }
		</ul>
	</>;
};

export default Save;
