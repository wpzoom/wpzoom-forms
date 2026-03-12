/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { useBlockProps, InspectorControls, RichText, __experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps, } from '@wordpress/block-editor';
import { __, sprintf } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
	Flex,
	FlexBlock,
	FlexItem,
	Card,
	CardBody,
	CardHeader,
	Button,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { useState, Fragment, useEffect, useRef } from '@wordpress/element';

const Edit = props => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes, clientId, className  } = props;
	const { id, name, options, defaultValue, label, showLabel, required } = attributes;
	const ref = useRef();

	const borderProps = useBorderProps( attributes );
	const colorProps = useColorProps( attributes );

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
					placeholder={ __( 'e.g. Choose a Ticket', 'wpzoom-forms' ) }
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

				<SelectControl
					label={ __( 'Default Value', 'wpzoom-forms' ) }
					value={ defaultValue }
					options={ [ { label: __( '— None —', 'wpzoom-forms' ), value: '' }, ...options.map( opt => ( { label: `${ opt.label } — $${ Number( opt.price ).toFixed( 2 ) }`, value: opt.label } ) ) ] }
					onChange={ value => setAttributes( { defaultValue: value } ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>

				<ToggleControl
					label={ __( 'Show Label', 'wpzoom-forms' ) }
					checked={ !! showLabel }
					onChange={ value => setAttributes( { showLabel: !! value } ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>

				{ showLabel && (
					<TextControl
						label={ __( 'Label', 'wpzoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				) }

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
			{ showLabel && (
				<>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'wpzoom-forms' ) }
						value={ label }
						htmlFor={ uniqueId }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
				</>
			) }

			<select
				name={ uniqueId }
				id={ uniqueId }
				required={ !! required }
				defaultValue={ defaultValue }
				data-payment-type="dropdown"
				className={ clsx(
					className,
					'wpzf-payment-options',
					colorProps.className,
					borderProps.className
				) }
				style={ {
					...borderProps.style,
					...colorProps.style,
				} }
			>
				{ options.map( ( option, index ) => (
					<option key={ index } value={ option.label } data-price={ option.price }>
						{ option.label } — ${ Number( option.price ).toFixed( 2 ) }
					</option>
				) ) }
			</select>
		</div>
	</>;
};

export default Edit;
