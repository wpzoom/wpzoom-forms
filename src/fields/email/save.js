import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, name, placeholder, label, showLabel, required, replyto } = attributes;

	return <>
		{ showLabel && <label htmlFor={ id }>
			<RichText.Content
				tagName="span"
				value={ label }
			/>
			{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
		</label> }

		<input
			type="email"
			name={ id }
			id={ id }
			placeholder={ placeholder }
			required={ !! required }
			data-replyto={ !! replyto }
			{ ...blockProps }
		/>
	</>;
};

export default Save;