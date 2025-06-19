import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, name, options, defaultValue, label, showLabel, required } = attributes;

	return <>
		{ showLabel && <label htmlFor={ id }>
			<RichText.Content
				tagName="span"
				value={ label }
			/>
			{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
		</label> }

		<ul { ...blockProps }>
			{ options.map( ( option, index ) =>
				<li key={ index }>
					<label>
						<input
							type="checkbox"
							name={ `${id}[]` }
							id={ id }
							value={ option }
							checked={ option == defaultValue }
							onChange={ e => {} }
							required={ !! required }
						/>
						{ option }
					</label>
				</li>
			) }
		</ul>
	</>;
};

export default Save;