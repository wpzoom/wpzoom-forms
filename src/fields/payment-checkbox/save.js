import clsx from 'clsx';
import { useBlockProps, RichText,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, options, label, showLabel, required } = attributes;

	const borderProps = getBorderClassesAndStyles( attributes );
	const colorProps  = getColorClassesAndStyles( attributes );

	return <div { ...blockProps }>
		<fieldset
			className={ clsx( 'wpzf-payment-options', colorProps.className, borderProps.className ) }
			style={ { ...borderProps.style, ...colorProps.style } }
			id={ id }
			data-payment-type="checkbox"
		>
			{ showLabel && (
				<legend>
					<RichText.Content tagName="span" value={ label } />
					{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
				</legend>
			) }

			<ul>
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
		</fieldset>
	</div>;
};

export default Save;
