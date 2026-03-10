import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, options, label, showLabel, required } = attributes;

	return <>
		{ showLabel && <label htmlFor={ id }>
			<RichText.Content
				tagName="span"
				value={ label }
			/>
			{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
		</label> }

		<ul { ...blockProps } className={ `wpzf-payment-options ${ blockProps.className || '' }` } id={ id } data-payment-type="checkbox">
			{ options.map( ( option, index ) =>
				<li key={ index }>
					<label>
						<input
							type="checkbox"
							name={ `${ id }[]` }
							id={ `${ id }-${ index }` }
							value={ option.label }
							data-price={ option.price }
							className="wpzf-payment-option"
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
