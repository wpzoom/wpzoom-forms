import clsx from 'clsx';
import { useBlockProps, RichText,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const blockProps = useBlockProps.save();
	const { id, label, showLabel, placeholder, min, max, step, required } = attributes;

	const borderProps = getBorderClassesAndStyles( attributes );
	const colorProps  = getColorClassesAndStyles( attributes );

	const inputProps = {
		type:        'number',
		id,
		name:        id,
		placeholder,
		step:        step > 0 ? step : 1,
		required:    !! required,
		className:   clsx( 'wpzf-payment-amount', colorProps.className, borderProps.className ),
		style:       { ...borderProps.style, ...colorProps.style },
	};

	if ( min > 0 ) inputProps.min = min;
	if ( max > 0 ) inputProps.max = max;

	return <div { ...blockProps }>
		{ showLabel && <label htmlFor={ id }>
			<RichText.Content tagName="span" value={ label } />
			{ required && <sup className="wp-block-wpzoom-forms-required">{ __( '*', 'wpzoom-forms' ) }</sup> }
		</label> }

		<input { ...inputProps } />
	</div>;
};

export default Save;
