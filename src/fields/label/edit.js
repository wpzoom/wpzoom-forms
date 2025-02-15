import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { content, required, htmlFor } = attributes;

	return <>
		<InspectorControls>
			<PanelBody title={__('Options', 'wpzoom-forms')}>
				<TextControl
					label={__('For Input ID', 'wpzoom-forms')}
					value={htmlFor}
					onChange={value => setAttributes({ htmlFor: value })}
					help={__('ID of the form field this label is for', 'wpzoom-forms')}
				/>

				<ToggleControl
					label={__('Required', 'wpzoom-forms')}
					checked={!!required}
					onChange={value => setAttributes({ required: !!value })}
				/>
			</PanelBody>
		</InspectorControls>

		<Fragment>
			<RichText
				tagName="label"
				value={content}
				onChange={value => setAttributes({ content: value })}
				placeholder={__('Add label text...', 'wpzoom-forms')}
				{...blockProps}
				data-required={required}
				htmlFor={htmlFor}
			/>
			{required && <sup className="wp-block-wpzoom-forms-required">{__('*', 'wpzoom-forms')}</sup>}
		</Fragment>
	</>;
};

export default Edit;