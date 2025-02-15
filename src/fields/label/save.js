import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const Save = props => {
	const blockProps = useBlockProps.save();
	const { attributes } = props;
	const { content, required, htmlFor } = attributes;

	return (
		<Fragment>
			<RichText.Content
				tagName="label"
				value={ content }
				{ ...blockProps }
				data-required={ required }
				htmlFor={ htmlFor }
			/>

			{ required && (
				<sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup>
			) }
		</Fragment>
	);
};

export default Save;