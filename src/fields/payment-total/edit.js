import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';

const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { label } = attributes;

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Total Options', 'wpzoom-forms' ) }>
				<TextControl
					label={ __( 'Label', 'wpzoom-forms' ) }
					value={ label }
					onChange={ value => setAttributes( { label: value } ) }
					__next40pxDefaultSize
				/>
			</PanelBody>
		</InspectorControls>

		<Fragment>
			<div
				className="wpzf-payment-total"
				{ ...blockProps }
				style={ { padding: '12px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', fontWeight: 600, background: '#f9f9f9', ...blockProps.style } }
			>
				<span className="wpzf-payment-total-label">{ label || __( 'Total', 'wpzoom-forms' ) }</span>
				<span className="wpzf-payment-total-amount">$0.00</span>
			</div>
			<p style={ { margin: '4px 0 0', fontSize: '12px', color: '#888' } }>
				{ __( 'Total will be calculated from Payment Item blocks on the frontend.', 'wpzoom-forms' ) }
			</p>
		</Fragment>
	</>;
};

export default Edit;
