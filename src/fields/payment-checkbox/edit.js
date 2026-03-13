/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { useBlockProps, InspectorControls, RichText,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
} from '@wordpress/block-editor';
import { useState, Fragment, useEffect, useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	Flex,
	FlexBlock,
	FlexItem,
	Card,
	CardBody,
	CardHeader,
	Button,
} from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes, clientId } = props;
	const { id, name, options, label, showLabel, required } = attributes;
	const ref = useRef();

	const borderProps    = useBorderProps( attributes );
	const colorProps     = useColorProps( attributes );
	const currency       = ( window.wpzf_formblock?.currency || 'usd' ).toUpperCase();
	const priceFormatter = new Intl.NumberFormat( [], { style: 'currency', currency, minimumFractionDigits: 2 } );

	if ( ref.current ) {
		ref.current.focus();
	}

	useEffect( () => {
		if ( ! id ) {
			setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
		}
	}, [] );

	const [ uniqueId ] = useState( id );

	const handleNameChange = newValue => {
		setAttributes( { name: newValue, id: 'input_' + clientId.substr( 0, 8 ) } );
	};

	const optionAdd = () => {
		const opts = [ ...options ];
		opts.push( { label: sprintf( __( 'Item #%s', 'wpzoom-forms' ), options.length + 1 ), price: 0 } );
		setAttributes( { options: opts } );
	};

	const optionRemove = ( index ) => {
		const opts = [ ...options ];
		opts.splice( index, 1 );
		setAttributes( { options: opts } );
	};

	const optionLabelChange = ( value, index ) => {
		const opts = [ ...options ];
		opts[ index ] = { ...opts[ index ], label: value };
		setAttributes( { options: opts } );
	};

	const optionPriceChange = ( value, index ) => {
		const opts = [ ...options ];
		opts[ index ] = { ...opts[ index ], price: parseFloat( value ) || 0 };
		setAttributes( { options: opts } );
	};

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Options', 'wpzoom-forms' ) }>
				<TextControl
					label={ __( 'Name', 'wpzoom-forms' ) }
					value={ name }
					placeholder={ __( 'e.g. Add-ons', 'wpzoom-forms' ) }
					onChange={ handleNameChange }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>

				<Card size="small">
					<CardHeader>
						{ __( 'Items', 'wpzoom-forms' ) }
						<Button
							icon="insert"
							label={ __( 'Add Item', 'wpzoom-forms' ) }
							onClick={ optionAdd }
						/>
					</CardHeader>
					<CardBody>
						{ options.map( ( option, index ) => (
							<Fragment key={ index }>
								<Flex align="flex-end">
									<FlexBlock>
										<TextControl
											label={ __( 'Label', 'wpzoom-forms' ) }
											value={ option.label }
											onChange={ value => optionLabelChange( value, index ) }
											__next40pxDefaultSize
											__nextHasNoMarginBottom
										/>
									</FlexBlock>
									<FlexBlock>
										<NumberControl
											label={ __( 'Price', 'wpzoom-forms' ) }
											value={ option.price }
											min={ 0 }
											step={ 0.01 }
											onChange={ value => optionPriceChange( value, index ) }
											__next40pxDefaultSize
										/>
									</FlexBlock>
									{ options.length > 1 && <FlexItem>
										<Button
											icon="no-alt"
											label={ __( 'Delete Item', 'wpzoom-forms' ) }
											onClick={ () => optionRemove( index ) }
											__next40pxDefaultSize
											__nextHasNoMarginBottom
										/>
									</FlexItem> }
								</Flex>
							</Fragment>
						) ) }
					</CardBody>
				</Card>

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
					__nextHasNoMarginBottom
				/> }

				<ToggleControl
					label={ __( 'Required', 'wpzoom-forms' ) }
					checked={ !! required }
					onChange={ value => setAttributes( { required: !! value } ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</PanelBody>
		</InspectorControls>

		<div { ...blockProps }>
			<fieldset
				className={ clsx( 'wpzf-payment-options', colorProps.className, borderProps.className ) }
				style={ { ...borderProps.style, ...colorProps.style } }
				id={ uniqueId }
				data-payment-type="checkbox"
			>
				{ showLabel && (
					<legend>
						<RichText
							tagName="span"
							placeholder={ __( 'Label', 'wpzoom-forms' ) }
							value={ label }
							onChange={ value => setAttributes( { label: value } ) }
						/>
						{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
					</legend>
				) }

				<ul>
					{ options.map( ( option, index ) =>
						<li key={ index }>
							<label>
								<input
									type="checkbox"
									name={ `${ uniqueId }[]` }
									value={ option.label }
									data-price={ option.price }
									className="wpzf-payment-option"
									onChange={ e => {} }
									required={ !! required }
								/>
								{ option.label } — { priceFormatter.format( Number( option.price ) || 0 ) }
							</label>
						</li>
					) }
				</ul>
			</fieldset>
		</div>
	</>;
};

export default Edit;
