import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes, clientId } = props;
	const { id, itemName, price, description } = attributes;

	useEffect( () => {
		if ( ! id ) {
			setAttributes( { id: 'payment_single_' + clientId.substr( 0, 8 ) } );
		}
	}, [] );

	const formattedPrice = Number( price ).toFixed( 2 );

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Single Payment Options', 'wpzoom-forms' ) }>
				<TextControl
					label={ __( 'Item Name', 'wpzoom-forms' ) }
					value={ itemName }
					placeholder={ __( 'e.g. Registration Fee', 'wpzoom-forms' ) }
					onChange={ value => setAttributes( { itemName: value } ) }
					__next40pxDefaultSize
				/>

				<NumberControl
					label={ __( 'Price', 'wpzoom-forms' ) }
					value={ price }
					min={ 0 }
					step={ 0.01 }
					onChange={ value => setAttributes( { price: parseFloat( value ) || 0 } ) }
					__next40pxDefaultSize
				/>

				<TextControl
					label={ __( 'Description (optional)', 'wpzoom-forms' ) }
					value={ description }
					placeholder={ __( 'Short description shown below the name...', 'wpzoom-forms' ) }
					onChange={ value => setAttributes( { description: value } ) }
					__next40pxDefaultSize
				/>
			</PanelBody>
		</InspectorControls>

		<Fragment>
			<div
				{ ...blockProps }
				style={ { padding: '12px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...blockProps.style } }
			>
				<div>
					<span className="wpzf-payment-item-name" style={ { fontWeight: 500 } }>
						{ itemName || __( 'Item Name', 'wpzoom-forms' ) }
					</span>
					{ description && (
						<span style={ { display: 'block', fontSize: '12px', color: '#888', marginTop: '2px' } }>
							{ description }
						</span>
					) }
				</div>
				<span className="wpzf-payment-item-price" style={ { fontWeight: 600 } }>${ formattedPrice }</span>
			</div>
		</Fragment>
	</>;
};

export default Edit;
