import clsx from 'clsx';
import { useBlockProps, InspectorControls,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
} from '@wordpress/block-editor';
import { Fragment, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes, clientId } = props;
	const { id, itemName, price, description, quantity, minQty, maxQty, showQty } = attributes;
	const ref = useRef();

	const borderProps = useBorderProps( attributes );
	const colorProps  = useColorProps( attributes );

	if ( ref.current ) {
		ref.current.focus();
	}

	useEffect( () => {
		if ( ! id ) {
			setAttributes( { id: 'wpzf_payment_item_' + clientId.substr( 0, 8 ) } );
		}
	}, [] );

	const currency       = ( window.wpzf_formblock?.currency || 'usd' ).toUpperCase();
	const formattedPrice = new Intl.NumberFormat( [], { style: 'currency', currency } ).format( Number( price ) || 0 );

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Payment Item Options', 'wpzoom-forms' ) }>
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

				<ToggleControl
					label={ __( 'Show Quantity Selector', 'wpzoom-forms' ) }
					checked={ !! showQty }
					onChange={ value => setAttributes( { showQty: !! value } ) }
					__next40pxDefaultSize
				/>

				{ showQty && <>
					<NumberControl
						label={ __( 'Default Quantity', 'wpzoom-forms' ) }
						value={ quantity }
						min={ 1 }
						onChange={ value => setAttributes( { quantity: parseInt( value ) || 1 } ) }
						__next40pxDefaultSize
					/>
					<NumberControl
						label={ __( 'Minimum Quantity', 'wpzoom-forms' ) }
						value={ minQty }
						min={ 1 }
						onChange={ value => setAttributes( { minQty: parseInt( value ) || 1 } ) }
						__next40pxDefaultSize
					/>
					<NumberControl
						label={ __( 'Maximum Quantity', 'wpzoom-forms' ) }
						value={ maxQty }
						min={ 1 }
						onChange={ value => setAttributes( { maxQty: parseInt( value ) || 99 } ) }
						__next40pxDefaultSize
					/>
				</> }
			</PanelBody>
		</InspectorControls>

		<div { ...blockProps }>
			<div className="wpzf-payment-item-info">
				<div className="wpzf-payment-item-name" style={ { fontWeight: 500 } }>
					{ itemName || __( 'Item Name', 'wpzoom-forms' ) }
				</div>
				{ description && (
					<div className="wpzf-payment-item-desc">
						{ description }
					</div>
				) }
			</div>
			<div className="wpzf-payment-item-right">
				<span className="wpzf-payment-item-price">{ formattedPrice }</span>
				{ showQty && (
					<input
						className={ clsx( 'wpzf-payment-item-qty', colorProps.className, borderProps.className ) }
						style={ { ...borderProps.style, ...colorProps.style, width: '60px', textAlign: 'center', padding: '6px 10px' } }
						type="number"
						defaultValue={ quantity }
						min={ minQty }
						max={ maxQty }
						readOnly
					/>
				) }
			</div>
		</div>
	</>;
};

export default Edit;
