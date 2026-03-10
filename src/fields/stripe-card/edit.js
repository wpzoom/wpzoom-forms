import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl, Notice } from '@wordpress/components';

const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { label, showLabel } = attributes;

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Payment Field Options', 'wpzoom-forms' ) }>
				<ToggleControl
					label={ __( 'Show Label', 'wpzoom-forms' ) }
					checked={ !! showLabel }
					onChange={ value => setAttributes( { showLabel: !! value } ) }
					__next40pxDefaultSize
				/>

				{ showLabel && <TextControl
					label={ __( 'Label', 'wpzoom-forms' ) }
					value={ label }
					onChange={ value => setAttributes( { label: value } ) }
					__next40pxDefaultSize
				/> }
			</PanelBody>
		</InspectorControls>

		<Fragment>
			<div className="wpzf-stripe-card-wrapper" { ...blockProps }>
				{ showLabel && (
					<RichText
						tagName="label"
						className="wpzf-stripe-card-label"
						placeholder={ __( 'Payment Details', 'wpzoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/>
				) }

				<div
					className="wpzf-stripe-card-element-preview"
					style={ {
						padding: '10px 12px',
						border: '1px solid #d0d0d0',
						borderRadius: '4px',
						background: '#fff',
						color: '#888',
						fontSize: '14px',
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
						minHeight: '38px',
					} }
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
						<rect x="2" y="5" width="20" height="14" rx="2" stroke="#ccc" strokeWidth="2"/>
						<path d="M2 10h20" stroke="#ccc" strokeWidth="2"/>
					</svg>
					<span>{ __( 'Payment details', 'wpzoom-forms' ) }</span>
					<span style={ { marginLeft: 'auto', color: '#bbb', fontSize: '12px' } }>MM / YY &nbsp; CVC</span>
				</div>

				<Notice status="info" isDismissible={ false } style={ { marginTop: '8px', fontSize: '12px' } }>
					{ __( 'The Stripe Card Element will be rendered on the frontend after Stripe Connect is configured in Settings → Payments.', 'wpzoom-forms' ) }
				</Notice>
			</div>
		</Fragment>
	</>;
};

export default Edit;
