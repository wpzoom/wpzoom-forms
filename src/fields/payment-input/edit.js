import clsx from 'clsx';
import { useBlockProps, InspectorControls, RichText,
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
	const { id, label, showLabel, placeholder, min, max, step, required } = attributes;
	const ref = useRef();

	const borderProps = useBorderProps( attributes );
	const colorProps  = useColorProps( attributes );

	if ( ref.current ) {
		ref.current.focus();
	}

	useEffect( () => {
		if ( ! id ) {
			setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
		}
	}, [] );

	return <>
		<InspectorControls>
			<PanelBody title={ __( 'Payment Number Input', 'wpzoom-forms' ) }>
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

				<TextControl
					label={ __( 'Placeholder', 'wpzoom-forms' ) }
					value={ placeholder }
					onChange={ value => setAttributes( { placeholder: value } ) }
					__next40pxDefaultSize
				/>

				<NumberControl
					label={ __( 'Step', 'wpzoom-forms' ) }
					value={ step }
					min={ 0.6 }
					step={ 0.5 }
					onChange={ value => setAttributes( { step: parseFloat( value ) || 1 } ) }
					__next40pxDefaultSize
				/>

				<NumberControl
					label={ __( 'Minimum (0 = no limit)', 'wpzoom-forms' ) }
					value={ min }
					min={ 0.5 }
					step={ 0.5 }
					onChange={ value => setAttributes( { min: parseFloat( value ) || 0 } ) }
					__next40pxDefaultSize
				/>

				<NumberControl
					label={ __( 'Maximum (0 = no limit)', 'wpzoom-forms' ) }
					value={ max }
					min={ 0 }
					step={ 0.01 }
					onChange={ value => setAttributes( { max: parseFloat( value ) || 0 } ) }
					__next40pxDefaultSize
				/>

				<ToggleControl
					label={ __( 'Required', 'wpzoom-forms' ) }
					checked={ !! required }
					onChange={ value => setAttributes( { required: !! value } ) }
					__next40pxDefaultSize
				/>
			</PanelBody>
		</InspectorControls>

		<div { ...blockProps }>
			{ showLabel && <RichText
				tagName="label"
				htmlFor={ id }
				placeholder={ __( 'Label', 'wpzoom-forms' ) }
				value={ label }
				onChange={ value => setAttributes( { label: value } ) }
			/> }

			<input
				type="number"
				className={ clsx( 'wpzf-payment-amount', colorProps.className, borderProps.className ) }
				style={ { ...borderProps.style, ...colorProps.style } }
				placeholder={ placeholder }
				step={ step > 0 ? step : 1 }
				min={ min > 0 ? min : undefined }
				max={ max > 0 ? max : undefined }
				required={ !! required }
				readOnly
			/>
		</div>
	</>;
};

export default Edit;
