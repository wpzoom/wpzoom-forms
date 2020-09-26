import { InspectorControls } from '@wordpress/block-editor';
import { registerBlockType, updateCategory } from '@wordpress/blocks';
import { Disabled, PanelBody, Placeholder } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

import SearchableSelectControl from './searchable-select';

const zoomFormsIcon = (
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 60 60">
	<path d="M56.854,21.7383,55.2056,20.09a4.5061,4.5061,0,0,0-6.3638,0L44.9077,24.024V13.55a6.5075,6.5075,0,0,0-6.5-6.5h-14.87c-.03,
	         0-.0572.0143-.0869.0161a1.4825,1.4825,0,0,0-.349.0645,1.466,1.466,0,0,0-.14.0432,1.4907,1.4907,0,0,0-.4249.259l-16.21,
	         14.52a1.4844,1.4844,0,0,0-.2576.3135c-.0194.03-.0363.0606-.0534.0922a1.4847,1.4847,0,0,0-.1275.3136c-.0057.0205-.0149.04-.02.06a1.493,
	         1.493,0,0,0-.0409.3376V50.45a6.5076,6.5076,0,0,0,6.5,6.5h26.08a6.5075,6.5075,0,0,0,6.5-6.5V40.049L56.8545,28.1025A4.5061,
	         4.5061,0,0,0,56.854,21.7383Zm-3.77.4726,1.6479,1.6485a1.5027,1.5027,0,0,1,.0005,2.122L53.6994,27.015l-3.77-3.77,
	         1.0339-1.034A1.5038,1.5038,0,0,1,53.0845,22.2109ZM35.9058,44.8086l-5.0552,1.2793,1.2851-5.0488L47.808,25.366l3.77,
	         3.77ZM19.8951,13.8268l2.143-1.92V18.07a3.5042,3.5042,0,0,1-3.5,3.5H11.2505ZM41.9077,50.45a3.5042,3.5042,0,0,1-3.5,
	         3.5h-26.08a3.5042,3.5042,0,0,1-3.5-3.5V24.57h9.7105a6.5075,6.5075,0,0,0,6.5-6.5V10.05h13.37a3.5042,3.5042,0,0,1,3.5,
	         3.5V27.0241L29.7231,39.209a1.4932,1.4932,0,0,0-.393.69L27.3213,47.79a1.5,1.5,0,0,0,1.8218,1.8243l7.8994-1.9991a1.4966,
	         1.4966,0,0,0,.6924-.3935l4.1728-4.1727Z"/>
</svg>
);

updateCategory( 'wpzoom-blocks', {
	icon: (
		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
			<path
				fill="#08618a"
				d="m13.66481,9.79698l-0.75323,0l0,2.36856c0.15993,0.00928 0.30065,0.02011 0.76443,
				   0.02011c0.85719,0 1.36894,-0.49197 1.36894,-1.25313c0,-0.67296 -0.56453,-1.13554 
				   -1.38014,-1.13554zm-1.66481,-9.59801c-6.73758,0 -12.19898,5.28324 -12.19898,
				   11.80103s5.4614,11.80103 12.19898,11.80103s12.19898,-5.28324 12.19898,
				   -11.80103s-5.46298,-11.80103 -12.19898,-11.80103zm-1.48729,9.59801l-0.76762,
				   0l-1.78316,5.56944l-0.63489,0l-1.77354,-3.94812l-1.78316,3.94812l-0.63489,
				   0l-1.81354,-5.56944l-0.72446,0l0,-0.92824l2.87862,0l0,0.92824l-0.91477,0l1.07789,
				   3.39737l1.64242,-3.70676l0.60451,0l1.64242,3.70676l1.00753,-3.39737l-0.90196,0l0,
				   -0.92824l2.87862,0l0,0.92824l0,0zm3.06253,3.3525c-0.31185,0 -0.50376,0 -0.66369,
				   -0.00928l0,1.14329l0.79961,0l0,0.92824l-2.7187,0l0,-0.92824l0.79961,0l0,
				   -4.48649l-0.79961,0l0,-0.92824l2.73308,0c1.42012,0 2.49961,0.78592 2.49961,
				   2.09164c-0.00161,1.4728 -1.08909,2.1891 -2.64994,2.1891l0.00002,-0.00002l0,
				   0zm8.33043,2.06223l-5.10797,0l-0.10074,-0.5879l4.84569,-4.82685l-2.53958,
				   0l-0.25269,1.08295l-1.03791,0l0.48297,-2.01119l4.95763,0l0.10074,0.5879l-4.84569,
				   4.82685l2.68992,0l0.25269,-1.08295l1.03791,0l-0.48297,2.01119z"
			/>
		</svg>
	)
} );

registerBlockType( 'zoom-forms/form-block', {
	title:       __( 'ZOOM Form', 'wpzoom-blocks' ),
	description: __( 'A custom form for accepting input from users.', 'wpzoom-blocks' ),
	icon:        zoomFormsIcon,
	category:    'wpzoom-blocks',
	supports:    { align: true, html: false },
	attributes:  {
		formId: {
			type:    'string',
			default: '-1'
		}
	},
	example:     {},
	edit:        withSelect( ( select ) => {
		const { getEntityRecords } = select( 'core' );

		return {
			posts: getEntityRecords( 'postType', 'wpzf-form', { order: 'asc', orderby: 'title', per_page: -1 } )
		};
	} )( ( props ) => {
		const { attributes, posts, setAttributes } = props;
		const { formId } = attributes;
		const _formId = formId && String( formId ).trim() != '' ? String( formId ) : '-1';
		const forms = posts && posts.length > 0 ? posts.map( ( x ) => { return { key: String( x.id ), name: x.title.raw } } ) : [];

		const formSelect = (
			<SearchableSelectControl
				label={ __( 'Form', 'zoom-forms' ) }
				selectPlaceholder={ forms.length < 1 ? __( 'No forms exist...', 'zoom-forms' ) : __( 'Select a form...', 'zoom-forms' ) }
				searchPlaceholder={ __( 'Search...', 'zoom-forms' ) }
				noResultsLabel={ __( 'Nothing found...', 'zoom-forms' ) }
				options={ forms }
				value={ forms.find( x => x.key == _formId ) }
				onChange={ ( value ) => setAttributes( { formId: String( value.selectedItem.key ) } ) }
			/>
		);

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
						{ forms.length > 0 ? formSelect : <Disabled>{ formSelect }</Disabled> }
					</PanelBody>
				</InspectorControls>

				<Fragment>
					{ '-1' != _formId
						? <ServerSideRender
							block="zoom-forms/form-block"
							attributes={ attributes }
						  />
						: <Placeholder
							icon={ zoomFormsIcon }
							label={ __( 'ZOOM Forms', 'zoom-forms' ) }
						  >
							{ forms.length > 0 ? formSelect : <Disabled>{ formSelect }</Disabled> }
						  </Placeholder>
					}
				</Fragment>
			</>
		);
	} )
} );