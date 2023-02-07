import { useBlockProps, InspectorControls, InnerBlocks, RichText } from '@wordpress/block-editor';
import { registerBlockType, updateCategory } from '@wordpress/blocks';
import { Card, CardBody, CardHeader, Disabled, Flex, FlexBlock, FlexItem, IconButton, PanelBody, RangeControl, SelectControl, TextControl, ToggleControl, ClipboardButton, Icon, __experimentalHStack as HStack } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __, setLocaleData, sprintf } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

updateCategory( 'zoom-forms', {
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

registerPlugin( 'zoom-forms-document-settings', {
	icon: '',
	render: props => {
		const postID = useSelect( select => select( 'core/editor' ).getCurrentPostId(), [] );
		const postType = useSelect( select => select( 'core/editor' ).getCurrentPostType(), [] );
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		const formMethod = meta[ '_form_method' ] || 'email';
		const formEmail = meta[ '_form_email' ] || ( typeof wpzf_formblock !== 'undefined' && 'admin_email' in wpzf_formblock ? wpzf_formblock.admin_email : '' );
		const [ hasCopiedShortcode, setHasCopiedShortcode ] = useState( false );
		const copyBtnStyle = { minHeight: '30px', height: 'auto', minWidth: 'fit-content', margin: '0px 0px 8px 0px' };

		if ( hasCopiedShortcode ) {
			copyBtnStyle.backgroundColor = 'green';
		}

		return <>
			<PluginDocumentSettingPanel
				name="zoom-forms-document-settings"
				className="zoom-forms-document-settings"
				title={ __( 'Form Settings', 'zoom-forms' ) }
				opened={ true }
			>
				<SelectControl
					label={ __( 'Form Method', 'zoom-forms' ) }
					value={ formMethod }
					options={ [
						{
							label: __( 'Save to Database', 'zoom-forms' ),
							value: 'db'
						},
						{
							label: __( 'Email', 'zoom-forms' ),
							value: 'email'
						}
					] }
					onChange={ value => setMeta( { ...meta, '_form_method': value } ) }
				/>

				{ formMethod == 'email' && <TextControl
					type="email"
					label={ __( 'Send To', 'zoom-forms' ) }
					value={ formEmail }
					placeholder={ __( 'someone@somedomain.com', 'zoom-forms' ) }
					onChange={ value => setMeta( { ...meta, '_form_email': value } ) }
				/> }
			</PluginDocumentSettingPanel>

			<PluginDocumentSettingPanel
				name="zoom-forms-document-settings-details"
				className="zoom-forms-document-settings-details"
				title={ __( 'Form Details', 'zoom-forms' ) }
				opened={ true }
			>
				<HStack alignment="flex-end">
					<TextControl
						type="text"
						label={ __( 'Shortcode', 'zoom-forms' ) }
						value={ '[wpzf_form id="' + postID + '"]' }
						readOnly={ true }
					/>

					<ClipboardButton
						variant="primary"
						style={ copyBtnStyle }
						text={ '[wpzf_form id="' + postID + '"]' }
						label={ __( 'Copy shortcode', 'zoom-forms' ) }
						showTooltip={ true }
						onCopy={ () => setHasCopiedShortcode( true ) }
						onFinishCopy={ () => setHasCopiedShortcode( false ) }
					>
						<Icon
							icon={ hasCopiedShortcode
								? <svg viewBox="0 0 24 24"><path d="M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"></path></svg>
								: <svg viewBox="0 0 24 24"><path d="M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"></path></svg>
							}
							size={ 16 }
						/>
					</ClipboardButton>
				</HStack>
			</PluginDocumentSettingPanel>
		</>;
	}
} );

setLocaleData( { 'Publish': [ __( 'Save', 'zoom-forms' ) ] } );

const DragHandle = SortableHandle( () => <IconButton
	icon="move"
	label={ __( 'Re-arrange Item', 'zoom-forms' ) }
	className="zoom-forms-move-button"
/> );

const SortableItem = SortableElement( ( { value, optsId, options, changeCallback, removeCallback } ) => <Fragment>
	<Flex>
		<FlexBlock>
			<TextControl
				value={ value }
				onChange={ val => changeCallback( val, optsId ) }
			/>
		</FlexBlock>

		{ options.length > 1 && <FlexItem>
			<DragHandle />

			<IconButton
				icon="no-alt"
				label={ __( 'Delete Item', 'zoom-forms' ) }
				onClick={ () => removeCallback( optsId ) }
			/>
		</FlexItem> }
	</Flex>
</Fragment> );

const SortableList = SortableContainer( ( { items, changeCallback, removeCallback } ) => <div>
	{ items.map( ( value, index ) => <SortableItem
		index={ index }
		optsId={ index }
		value={ value }
		options={ items }
		changeCallback={ changeCallback }
		removeCallback={ removeCallback }
	/> ) }
</div> );

registerBlockType( 'zoom-forms/form', {
	title:       __( 'Form', 'wpzoom-blocks' ),
	description: __( 'A form.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 36 36">
                       <path d="M21,12H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H21a1,1,0,0,1,1,1v4A1,1,0,0,1,21,12ZM8,10H20V7.94H8Z"/>
                       <path d="M21,14.08H7a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1H18.36L22,16.3V15.08A1,1,0,0,0,21,14.08ZM20,18H8V16H20Z"/>
                       <path d="M11.06,31.51v-.06l.32-1.39H4V4h20V14.25L26,12.36V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V31a1,1,0,0,0,1,
	                            1h8A3.44,3.44,0,0,1,11.06,31.51Z"/>
                       <path d="M22,19.17l-.78.79A1,1,0,0,0,22,19.17Z"/>
                       <path d="M6,26.94a1,1,0,0,0,1,1h4.84l.3-1.3.13-.55,0-.05H8V24h6.34l2-2H7a1,1,0,0,0-1,1Z"/>
                       <path d="M33.49,16.67,30.12,13.3a1.61,1.61,0,0,0-2.28,0h0L14.13,27.09,13,31.9a1.61,1.61,0,0,0,1.26,1.9,1.55,
	                            1.55,0,0,0,.31,0,1.15,1.15,0,0,0,.37,0l4.85-1.07L33.49,19a1.6,1.6,0,0,0,0-2.27ZM18.77,30.91l-3.66.81L16,
	                            28.09,26.28,17.7l2.82,2.82ZM30.23,19.39l-2.82-2.82L29,15l2.84,2.84Z"/>
                   </svg> ),
	category:    'zoom-forms',
	supports:    { align: true, html: false },
	example:     {},
	edit:        () => {
		const blockProps = useBlockProps( { className: 'zoom-forms_form' } );

		return <div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ [
					'zoom-forms/text-plain-field',
					'zoom-forms/text-name-field',
					'zoom-forms/text-email-field',
					'zoom-forms/text-website-field',
					'zoom-forms/text-phone-field',
					'zoom-forms/textarea-field',
					'zoom-forms/select-field',
					'zoom-forms/checkbox-field',
					'zoom-forms/radio-field',
					'zoom-forms/label-field',
					'zoom-forms/submit-field'
				] }
				template={ [
					[
						'core/group',
						{
							'tagName': 'div'
						},
						[
							[
								'core/columns',
								{
									'isStackedOnMobile': true
								},
								[
									[
										'core/column',
										{
											'width': '100%'
										},
										[
											[
												'zoom-forms/text-name-field',
												{
													'id':        'input_name',
													'name':      __( 'Name', 'wpzoom-blocks' ),
													'type':      'text',
													'showLabel': true,
													'label':     __( 'Name', 'wpzoom-blocks' ),
													'required':  true,
													'replyto':   true,
													'className': 'fullwidth'
												}
											],
											[
												'zoom-forms/text-email-field',
												{
													'id':        'input_email',
													'name':      __( 'Email', 'wpzoom-blocks' ),
													'type':      'email',
													'showLabel': true,
													'label':     __( 'Email', 'wpzoom-blocks' ),
													'required':  true,
													'replyto':   true,
													'className': 'fullwidth'
												}
											],
											[
												'zoom-forms/text-plain-field',
												{
													'id':        'input_subject',
													'name':      __( 'Subject', 'wpzoom-blocks' ),
													'type':      'text',
													'showLabel': true,
													'label':     __( 'Subject', 'wpzoom-blocks' ),
													'required':  true,
													'subject':   true,
													'className': 'fullwidth'
												}
											],
											[
												'zoom-forms/textarea-field',
												{
													'id':        'input_message',
													'name':      __( 'Message', 'wpzoom-blocks' ),
													'cols':      '55',
													'rows':      '10',
													'showLabel': true,
													'label':     __( 'Message', 'wpzoom-blocks' ),
													'required':  true,
													'className': 'fullwidth'
												}
											]
										]
									]
								]
							],
							[
								'core/columns',
								{
									'isStackedOnMobile': true
								},
								[
									[
										'core/column',
										{
											'width': '30%'
										},
										[
											[
												'zoom-forms/submit-field',
												{
													'id':   'input_submit',
													'name': __( 'Submit', 'wpzoom-blocks' )
												}
											]
										]
									],
									[
										'core/column',
										{
											'width': '70%'
										},
										[
											[
												'core/paragraph',
												{
													'align':   'right',
													'content': __( 'Fields marked with <strong class="has-accent-color has-text-color">*</strong> are required.', 'wpzoom-blocks' ),
													'dropCap': false,
													'style':   {
														'typography': {
															'fontSize': 16
														}
													}
												}
											]
										]
									]
								]
							]
						]
					]
				] }
			/>
		</div>;
	},
	save:        () => {
		const blockProps = useBlockProps.save();

		return <div { ...blockProps }>
			<InnerBlocks.Content />
		</div>;
	}
} );

registerBlockType( 'zoom-forms/text-plain-field', {
	title:       __( 'Text Input', 'wpzoom-blocks' ),
	description: __( 'A text input field for inputting plain text.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	                   <path d="M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75  
	                            v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"/>
	                   <path d="M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35  
	                            C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		type: {
			type:      'string',
			source:    'attribute',
			attribute: 'type',
			selector:  'input',
			default:   'text'
		},
		placeholder: {
			type:      'string',
			source:    'attribute',
			attribute: 'placeholder',
			selector:  'input',
			default:   ''
		},
		label: {
			type:      'string',
			default:   __( 'My Text Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'input',
			default:   false
		},
		subject: {
			type:      'boolean',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, type, placeholder, label, showLabel, required, subject } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Text Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<SelectControl
						label={ __( 'Type', 'zoom-forms' ) }
						value={ type }
						options={ [
							{
								label: __( 'Text', 'zoom-forms' ),
								value: 'text'
							},
							{
								label: __( 'Number', 'zoom-forms' ),
								value: 'number'
							}
						] }
						onChange={ value => setAttributes( { type: value } ) }
					/>

					<TextControl
						label={ __( 'Placeholder', 'zoom-forms' ) }
						value={ placeholder }
						onChange={ value => setAttributes( { placeholder: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>

					<ToggleControl
						label={ __( 'Is Subject', 'zoom-forms' ) }
						help={ __( 'Whether this text field should be used as the subject field in the form (useful for contact forms).', 'zoom-forms' ) }
						checked={ !! subject }
						onChange={ value => setAttributes( { subject: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<input
					type={ type }
					name={ id }
					id={ id }
					placeholder={ placeholder }
					required={ !! required }
					data-subject={ !! subject }
					{ ...blockProps }
				/>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, type, placeholder, label, showLabel, required, subject } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<input
				type={ type }
				name={ id }
				id={ id }
				placeholder={ placeholder }
				required={ !! required }
				data-subject={ !! subject }
				{ ...blockProps }
			/>
		</>;
	}
} );

registerBlockType( 'zoom-forms/text-name-field', {
	title:       __( 'Name Input', 'wpzoom-blocks' ),
	description: __( 'A text input field for inputting names of people.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	                   <path d="M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75  
	                            v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"/>
	                   <path d="M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35  
	                            C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"/>
	                   <path d="M51.554 41.097q0 .966-.168 1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168
	                            1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.68q.168.672.168 1.68 0
	                            .966-.168 1.68h-6.72q-.168-.714-.168-1.68 0-1.008.168-1.68h-1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168
	                            1.68 0 .966-.168 1.68h3.36q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h8.4q.168.672.168 1.68Zm17.636 13.44q0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68h-2.1q.168.672.168
	                            1.68 0 .966-.168 1.68h-6.72q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h6.72q.168.672.168 1.68 0
	                            .966-.168 1.68h2.1q.168.672.168 1.68 0 .966-.168 1.68h1.26q.168.672.168 1.68Zm-3.528 1.68q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h-4.2q.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68
	                            0 .966-.168 1.68h1.26q.168.672.168 1.68 0 .966-.168 1.68h4.2q-.168-.714-.168-1.68 0-1.008.168-1.68Zm20.325-5.04q0 .966-.168
	                            1.68.168.672.168 1.68 0 .966-.168 1.68h-8.82q.168.672.168 1.68 0 .966-.168 1.68h7.14q.168.672.168 1.68 0 .966-.168 1.68h-8.4q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h-2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h1.26q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h8.4q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68Zm-3.528
	                            1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h-5.46q.168.672.168 1.68 0 .966-.168 1.68h5.46Z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		placeholder: {
			type:      'string',
			source:    'attribute',
			attribute: 'placeholder',
			selector:  'input',
			default:   ''
		},
		label: {
			type:      'string',
			default:   __( 'My Name Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'input',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, placeholder, label, showLabel, required } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Name Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<TextControl
						label={ __( 'Placeholder', 'zoom-forms' ) }
						value={ placeholder }
						onChange={ value => setAttributes( { placeholder: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<input
					type="text"
					name={ id }
					id={ id }
					placeholder={ placeholder }
					required={ !! required }
					{ ...blockProps }
				/>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, placeholder, label, showLabel, required } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<input
				type="text"
				name={ id }
				id={ id }
				placeholder={ placeholder }
				required={ !! required }
				{ ...blockProps }
			/>
		</>;
	}
} );

registerBlockType( 'zoom-forms/text-email-field', {
	title:       __( 'Email Input', 'wpzoom-blocks' ),
	description: __( 'A text input field for inputting an email address.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	                   <path d="M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75  
	                            v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"/>
	                   <path d="M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35  
	                            C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"/>
	                   <path d="M84.455 46.937c.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6.106.427.16.96.16 1.6 0 .614-.054 1.147-.16
	                            1.6.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6h-6.4c-.107-.453-.16-.986-.16-1.6 0-.64.053-1.173.16-1.6h-1.2c-.107-.453-.16-.986-.16-1.6
	                            0-.64.053-1.173.16-1.6-.107-.453-.16-.986-.16-1.6 0-.64.053-1.173.16-1.6h1.2c-.107-.453-.16-.986-.16-1.6 0-.64.053-1.173.16-1.6h1.6c-.107-.453-.16-.986-.16-1.6
	                            0-.64.053-1.173.16-1.6h-4c.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6h-1.6c.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6.106.427.16.96.16
	                            1.6 0 .614-.054 1.147-.16 1.6.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6h1.6c.106.427.16.96.16
	                            1.6 0 .614-.054 1.147-.16 1.6h7.2c.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6h-8c-.107-.453-.16-.986-.16-1.6
	                            0-.64.053-1.173.16-1.6h-1.6c-.107-.453-.16-.986-.16-1.6 0-.64.053-1.173.16-1.6h-1.6c-.107-.453-.16-.986-.16-1.6
	                            0-.64.053-1.173.16-1.6-.107-.453-.16-.986-.16-1.6 0-.64.053-1.173.16-1.6-.107-.453-.16-.986-.16-1.6
	                            0-.64.053-1.173.16-1.6-.107-.453-.16-.986-.16-1.6 0-.64.053-1.173.16-1.6h1.6c-.107-.453-.16-.986-.16-1.6
	                            0-.64.053-1.173.16-1.6h1.6c-.107-.453-.16-.986-.16-1.6 0-.64.053-1.173.16-1.6h6.4c.106.427.16.96.16 1.6 0
	                            .614-.054 1.147-.16 1.6h1.6c.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6h1.6c.106.427.16.96.16 1.6 0
	                            .614-.054 1.147-.16 1.6Zm-2.4 6.4c-.107-.453-.16-.986-.16-1.6 0-.64.053-1.173.16-1.6-.107-.453-.16-.986-.16-1.6
	                            0-.64.053-1.173.16-1.6h-2.8c.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6.106.427.16.96.16 1.6 0 .614-.054 1.147-.16 1.6h2.8Z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		placeholder: {
			type:      'string',
			source:    'attribute',
			attribute: 'placeholder',
			selector:  'input',
			default:   ''
		},
		label: {
			type:      'string',
			default:   __( 'My Email Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'input',
			default:   false
		},
		replyto: {
			type:      'boolean',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, placeholder, label, showLabel, required, replyto } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Email Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<TextControl
						label={ __( 'Placeholder', 'zoom-forms' ) }
						value={ placeholder }
						onChange={ value => setAttributes( { placeholder: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>

					<ToggleControl
						label={ __( 'Is Reply-To Address', 'zoom-forms' ) }
						help={ __( 'Whether this email field should be used as the reply-to address in the form (useful for contact forms).', 'zoom-forms' ) }
						checked={ !! replyto }
						onChange={ value => setAttributes( { replyto: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<input
					type="email"
					name={ id }
					id={ id }
					placeholder={ placeholder }
					required={ !! required }
					data-replyto={ !! replyto }
					{ ...blockProps }
				/>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, placeholder, label, showLabel, required, replyto } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<input
				type="email"
				name={ id }
				id={ id }
				placeholder={ placeholder }
				required={ !! required }
				data-replyto={ !! replyto }
				{ ...blockProps }
			/>
		</>;
	}
} );

registerBlockType( 'zoom-forms/text-website-field', {
	title:       __( 'Website Input', 'wpzoom-blocks' ),
	description: __( 'A text input field for inputting an website URL.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	                   <path d="M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75  
	                            v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"/>
	                   <path d="M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35  
	                            C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"/>
	                   <path d="M51.364 45.243q0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68.168.672.168
	                            1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168
	                            1.68.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68
	                            0-1.008.168-1.68h2.52q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0
	                            .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68
	                            0-1.008.168-1.68h3.36q.168.672.168 1.68Zm16.796 0q0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0
	                            .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0
	                            .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68
	                            0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0
	                            .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q.168.672.168 1.68 0
	                            .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68Zm16.797 0q0
	                            .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168
	                            1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q.168.672.168 1.68 0
	                            .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68
	                            0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168
	                            1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q.168.672.168
	                            1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68Z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		placeholder: {
			type:      'string',
			source:    'attribute',
			attribute: 'placeholder',
			selector:  'input',
			default:   ''
		},
		label: {
			type:      'string',
			default:   __( 'My Website Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'input',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, placeholder, label, showLabel, required } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Website Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<TextControl
						label={ __( 'Placeholder', 'zoom-forms' ) }
						value={ placeholder }
						onChange={ value => setAttributes( { placeholder: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<input
					type="url"
					name={ id }
					id={ id }
					placeholder={ placeholder }
					required={ !! required }
					{ ...blockProps }
				/>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, placeholder, label, showLabel, required } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<input
				type="url"
				name={ id }
				id={ id }
				placeholder={ placeholder }
				required={ !! required }
				{ ...blockProps }
			/>
		</>;
	}
} );

registerBlockType( 'zoom-forms/text-phone-field', {
	title:       __( 'Phone Input', 'wpzoom-blocks' ),
	description: __( 'A text input field for inputting a phone number.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	                   <path d="M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75  
	                            v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"/>
	                   <path d="M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35  
	                            C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"/>
	                   <path d="M51.061 59.577q.168.672.168 1.68 0 .966-.168 1.68h-10.08q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68
	                            0-1.008.168-1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168
	                            1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0
	                            .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h3.36Zm17.804-11.76q0 .966-.168
	                            1.68h-2.1q.168.672.168 1.68 0 .966-.168 1.68h-2.1q.168.672.168 1.68 0 .966-.168 1.68h-2.1q.168.672.168 1.68 0
	                            .966-.168 1.68h6.3q.168.672.168 1.68 0 .966-.168 1.68h-11.76q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-5.88q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h8.4q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68 0
	                            .966-.168 1.68.168.672.168 1.68Zm16.797 0q0 .966-.168 1.68h-1.68q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68 0
	                            .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.68q.168.672.168 1.68 0 .966-.168 1.68h-8.4q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h-1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68h5.04q-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-4.2q-.168-.714-.168-1.68 0-1.008.168-1.68h4.2q-.168-.714-.168-1.68
	                            0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-5.04q.168.672.168 1.68 0 .966-.168 1.68h-3.36q-.168-.714-.168-1.68
	                            0-1.008.168-1.68h1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h8.4q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68
	                            0 .966-.168 1.68.168.672.168 1.68Z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		placeholder: {
			type:      'string',
			source:    'attribute',
			attribute: 'placeholder',
			selector:  'input',
			default:   ''
		},
		label: {
			type:      'string',
			default:   __( 'My Phone Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'input',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, placeholder, label, showLabel, required } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Email Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<TextControl
						label={ __( 'Placeholder', 'zoom-forms' ) }
						value={ placeholder }
						onChange={ value => setAttributes( { placeholder: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<input
					type="tel"
					name={ id }
					id={ id }
					placeholder={ placeholder }
					required={ !! required }
					{ ...blockProps }
				/>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, placeholder, label, showLabel, required } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<input
				type="tel"
				name={ id }
				id={ id }
				placeholder={ placeholder }
				required={ !! required }
				{ ...blockProps }
			/>
		</>;
	}
} );

registerBlockType( 'zoom-forms/textarea-field', {
	title:       __( 'Textarea', 'wpzoom-blocks' ),
	description: __( 'A textarea input field.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	                   <path d="M15,33.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75  
	                            v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"/>
	                   <path d="M92.5,5h-85C6.119,5,5,6.119,5,7.5v85C5,93.881,6.119,95,7.5,95h85c1.381,0,2.5-1.119,2.5-2.5v-85C95,6.119,93.881,5,92.5,5  
	                            z M62.5,90H10V10h52.5V90z M90,90H65V10h25V90z"/>
	                   <path d="M76.616,84.634C76.86,84.878,77.18,85,77.5,85s0.64-0.122,0.884-0.366l5-5c0.357-0.357,0.464-0.895,0.271-1.362  
	                            C83.461,77.805,83.005,77.5,82.5,77.5h-10c-0.505,0-0.961,0.305-1.155,0.771c-0.193,0.467-0.086,1.005,0.271,1.362L76.616,84.634z"/>
	                   <path d="M72.5,22.5h10c0.007-0.001,0.013,0,0.02,0c0.69,0,1.25-0.56,1.25-1.25c0-0.413-0.2-0.779-0.509-1.007l-4.877-4.877  
	                            c-0.488-0.488-1.279-0.488-1.768,0l-5,5c-0.357,0.357-0.464,0.895-0.271,1.362C71.539,22.195,71.995,22.5,72.5,22.5z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		cols: {
			type:      'string',
			source:    'attribute',
			attribute: 'cols',
			selector:  'textarea',
			default:   '20'
		},
		rows: {
			type:      'string',
			source:    'attribute',
			attribute: 'rows',
			selector:  'textarea',
			default:   '4'
		},
		placeholder: {
			type:      'string',
			source:    'attribute',
			attribute: 'placeholder',
			selector:  'textarea',
			default:   ''
		},
		label: {
			type:      'string',
			default:   __( 'My Textarea Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'textarea',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, cols, rows, placeholder, label, showLabel, required } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Textarea Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<RangeControl
						label={ __( 'Columns', 'wpzoom-blocks' ) }
						max={ 500 }
						min={ 1 }
						value={ Number( cols ) }
						onChange={ value => setAttributes( { cols: value } ) }
					/>

					<RangeControl
						label={ __( 'Rows', 'wpzoom-blocks' ) }
						max={ 100 }
						min={ 1 }
						value={ Number( rows ) }
						onChange={ value => setAttributes( { rows: value } ) }
					/>

					<TextControl
						label={ __( 'Placeholder', 'zoom-forms' ) }
						value={ placeholder }
						onChange={ value => setAttributes( { placeholder: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<textarea
					name={ id }
					id={ id }
					cols={ cols }
					rows={ rows }
					placeholder={ placeholder }
					required={ !! required }
					{ ...blockProps }
				></textarea>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, cols, rows, placeholder, label, showLabel, required } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<textarea
				name={ id }
				id={ id }
				cols={ cols }
				rows={ rows }
				placeholder={ placeholder }
				required={ !! required }
				{ ...blockProps }
			></textarea>
		</>;
	}
} );

registerBlockType( 'zoom-forms/select-field', {
	title:       __( 'Select', 'wpzoom-blocks' ),
	description: __( 'A select dropdown input field.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	                   <path d="M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35  
	                            C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"/>
	                   <path d="M76.616,53.384c0.244,0.244,0.564,0.366,0.884,0.366s0.64-0.122,0.884-0.366l5-5c0.357-0.357,0.464-0.895,0.271-1.362  
	                            c-0.193-0.467-0.649-0.771-1.155-0.771h-10c-0.505,0-0.961,0.305-1.155,0.771c-0.193,0.467-0.086,1.005,0.271,1.362L76.616,53.384z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		options: {
			type:      'array',
			default:   [ __( 'Item #1', 'zoom-forms' ) ]
		},
		defaultValue: {
			type:      'string',
			source:    'attribute',
			attribute: 'defaultValue',
			selector:  'select',
			default:   __( 'Item #1', 'zoom-forms' )
		},
		label: {
			type:      'string',
			default:   __( 'My Select Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		multiple: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'multiple',
			selector:  'select',
			default:   false
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'select',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, options, defaultValue, label, showLabel, multiple, required } = attributes;

		const optionAdd = () => {
			const opts = [ ...options ];
			opts.push( sprintf( __( 'Item #%s', 'zoom-forms' ), options.length + 1 ) );
			setAttributes( { options: opts } );
		};

		const optionRemove = ( index ) => {
			const opts = [ ...options ];
			opts.splice( index, 1 );
			setAttributes( { options: opts } );
		};

		const optionChange = ( name, index ) => {
			const opts = [ ...options ];
			opts[ index ] = name;
			setAttributes( { options: opts } );
		};

		const optionsSort = ( oldIndex, newIndex ) => {
			const sorted = arrayMoveImmutable( options, oldIndex, newIndex );
			setAttributes( { options: sorted } );
		};

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Dropdown Select Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<Card size="small">
						<CardHeader>
							{ __( 'Items', 'zoom-forms' ) }

							<IconButton
								icon="insert"
								label={ __( 'Add Item', 'zoom-forms' ) }
								onClick={ optionAdd.bind( this ) }
							/>
						</CardHeader>
						<CardBody>
							<SortableList
								items={ options }
								changeCallback={ optionChange }
								removeCallback={ optionRemove }
								lockAxis="y"
								useDragHandle={ true }
								onSortEnd={ ( { oldIndex, newIndex } ) => optionsSort( oldIndex, newIndex ) }
							/>
						</CardBody>
					</Card>

					<SelectControl
						label={ __( 'Default Value', 'zoom-forms' ) }
						value={ defaultValue }
						options={ options.map( ( option, index ) => ( { label: option, value: option } ) ) }
						onChange={ value => setAttributes( { defaultValue: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Allow Multiple Selections', 'zoom-forms' ) }
						checked={ !! multiple }
						onChange={ value => setAttributes( { multiple: !! value } ) }
					/>

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<select
					name={ id }
					id={ id }
					required={ !! required }
					multiple={ !! multiple }
					defaultValue={ defaultValue }
					{ ...blockProps }
				>
					{ options.map( ( option, index ) => <option key={ index } value={ option }>{ option }</option> ) }
				</select>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, options, defaultValue, label, showLabel, multiple, required } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<select
				name={ id }
				id={ id }
				required={ !! required }
				multiple={ !! multiple }
				defaultValue={ defaultValue }
				{ ...blockProps }
			>
				{ options.map( ( option, index ) => <option key={ index } value={ option }>{ option }</option> ) }
			</select>
		</>;
	}
} );

registerBlockType( 'zoom-forms/checkbox-field', {
	title:       __( 'Checkbox', 'wpzoom-blocks' ),
	description: __( 'A checkbox input field.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="25 25 50 50">
	                   <path d="M32.5,70h35c1.381,0,2.5-1.119,2.5-2.5v-35c0-1.381-1.119-2.5-2.5-2.5h-35c-1.381,0-2.5,1.119-2.5,2.5v35  
	                            C30,68.881,31.119,70,32.5,70z M35,35h30v30H35V35z"/>
	                   <path d="M56.982,42.607L47.5,52.089l-4.482-4.482c-0.976-0.977-2.56-0.977-3.535,0c-0.977,0.976-0.977,2.559,0,3.535l6.25,6.25  
	                            c0.488,0.488,1.128,0.732,1.768,0.732s1.28-0.244,1.768-0.732l11.25-11.25c0.977-0.976,0.977-2.559,0-3.535  
	                            C59.542,41.631,57.958,41.631,56.982,42.607z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		defaultValue: {
			type:      'boolean',
			default:   false
		},
		label: {
			type:      'string',
			default:   __( 'My Checkbox Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'input',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, defaultValue, label, showLabel, required } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Checkbox Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<ToggleControl
						label={ __( 'Checked By Default', 'zoom-forms' ) }
						checked={ !! defaultValue }
						onChange={ value => setAttributes( { defaultValue: !! value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<input
					type="checkbox"
					name={ id }
					id={ id }
					checked={ true == defaultValue }
					onChange={ e => {} }
					required={ !! required }
					{ ...blockProps }
				/>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, defaultValue, label, showLabel, required } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<input
				type="checkbox"
				name={ id }
				id={ id }
				checked={ true == defaultValue }
				onChange={ e => {} }
				required={ !! required }
				{ ...blockProps }
			/>
		</>;
	}
} );

registerBlockType( 'zoom-forms/radio-field', {
	title:       __( 'Radio', 'wpzoom-blocks' ),
	description: __( 'A radio input field.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	                   <path d="M20,32.5c6.893,0,12.5-5.607,12.5-12.5S26.893,7.5,20,7.5S7.5,13.107,7.5,20S13.107,32.5,20,32.5z M20,12.5  
	                            c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5s-7.5-3.364-7.5-7.5S15.864,12.5,20,12.5z"/>
	                   <path d="M20,25c2.757,0,5-2.243,5-5s-2.243-5-5-5s-5,2.243-5,5S17.243,25,20,25z"/>
	                   <path d="M20,62.5c6.893,0,12.5-5.607,12.5-12.5S26.893,37.5,20,37.5S7.5,43.107,7.5,50S13.107,62.5,20,62.5z M20,42.5  
	                            c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5s-7.5-3.364-7.5-7.5S15.864,42.5,20,42.5z"/>
	                   <path d="M20,92.5c6.893,0,12.5-5.607,12.5-12.5S26.893,67.5,20,67.5S7.5,73.107,7.5,80S13.107,92.5,20,92.5z M20,72.5  
	                            c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5s-7.5-3.364-7.5-7.5S15.864,72.5,20,72.5z"/>
	                   <path d="M92.5,17.5H45c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h47.5c1.381,0,2.5-1.119,2.5-2.5S93.881,17.5,92.5,17.5z"/>
	                   <path d="M92.5,47.5H45c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h47.5c1.381,0,2.5-1.119,2.5-2.5S93.881,47.5,92.5,47.5z"/>
	                   <path d="M92.5,77.5H45c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h47.5c1.381,0,2.5-1.119,2.5-2.5S93.881,77.5,92.5,77.5z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			default:   ''
		},
		options: {
			type:      'array',
			default:   [ __( 'Item #1', 'zoom-forms' ) ]
		},
		defaultValue: {
			type:      'string',
			default:   __( 'Item #1', 'zoom-forms' )
		},
		label: {
			type:      'string',
			default:   __( 'My Radio Field', 'zoom-forms' )
		},
		showLabel: {
			type:      'boolean',
			default:   true
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'input',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps( { className: 'unstyled-list' } );
		const { attributes, setAttributes, clientId } = props;
		const { id, name, options, defaultValue, label, showLabel, required } = attributes;

		const optionAdd = () => {
			const opts = [ ...options ];
			opts.push( sprintf( __( 'Item #%s', 'zoom-forms' ), options.length + 1 ) );
			setAttributes( { options: opts } );
		};

		const optionRemove = ( index ) => {
			const opts = [ ...options ];
			opts.splice( index, 1 );
			setAttributes( { options: opts } );
		};

		const optionChange = ( name, index ) => {
			const opts = [ ...options ];
			opts[ index ] = name;
			setAttributes( { options: opts } );
		};

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						placeholder={ __( 'e.g. My Radio Field', 'zoom-forms' ) }
						onChange={ value => setAttributes( { name: value } ) }
					/>

					<Card size="small">
						<CardHeader>
							{ __( 'Items', 'zoom-forms' ) }

							<IconButton
								icon="insert"
								label={ __( 'Add Item', 'zoom-forms' ) }
								onClick={ optionAdd.bind( this ) }
							/>
						</CardHeader>
						<CardBody>
							{ options.map( ( option, index ) => (
								<Fragment key={ index }>
									<Flex>
										<FlexBlock>
											<TextControl
												value={ options[ index ] }
												onChange={ value => optionChange( value, index ) }
											/>
										</FlexBlock>

										{ options.length > 1 && <FlexItem>
											<IconButton
												icon="no-alt"
												label={ __( 'Delete Item', 'zoom-forms' ) }
												onClick={ () => optionRemove( index ) }
											/>
										</FlexItem> }
									</Flex>
								</Fragment>
							) ) }
						</CardBody>
					</Card>

					<SelectControl
						label={ __( 'Default Value', 'zoom-forms' ) }
						value={ defaultValue }
						options={ options.map( ( option, index ) => ( { label: option, value: option } ) ) }
						onChange={ value => setAttributes( { defaultValue: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Label', 'zoom-forms' ) }
						checked={ !! showLabel }
						onChange={ value => setAttributes( { showLabel: !! value } ) }
					/>

					{ showLabel && <TextControl
						label={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						onChange={ value => setAttributes( { label: value } ) }
					/> }

					<ToggleControl
						label={ __( 'Required', 'zoom-forms' ) }
						checked={ !! required }
						onChange={ value => setAttributes( { required: !! value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				{ showLabel && <label htmlFor={ id }>
					<RichText
						tagName="label"
						placeholder={ __( 'Label', 'zoom-forms' ) }
						value={ label }
						htmlFor={ id }
						onChange={ value => setAttributes( { label: value } ) }
					/>
					{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
				</label> }

				<ul { ...blockProps }>
					{ options.map( ( option, index ) =>
						<li key={ index }>
							<label>
								<input
									type="radio"
									name={ id }
									id={ id }
									value={ option }
									checked={ option == defaultValue }
									onChange={ e => {} }
									required={ !! required }
								/>
								{ option }
							</label>
						</li>
					) }
				</ul>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, options, defaultValue, label, showLabel, required } = attributes;

		return <>
			{ showLabel && <label htmlFor={ id }>
				<RichText.Content
					tagName="label"
					value={ label }
					htmlFor={ id }
				/>
				{ required && <sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup> }
			</label> }

			<ul { ...blockProps }>
				{ options.map( ( option, index ) =>
					<li key={ index }>
						<label>
							<input
								type="radio"
								name={ id }
								id={ id }
								value={ option }
								checked={ option == defaultValue }
								onChange={ e => {} }
								required={ !! required }
							/>
							{ option }
						</label>
					</li>
				) }
			</ul>
		</>;
	}
} );

registerBlockType( 'zoom-forms/label-field', {
	title:       __( 'Label', 'wpzoom-blocks' ),
	description: __( 'A label which is linked to an input field.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32">
	                   <path d="M17.56,31a1,1,0,0,1-.71-.29L1.29,15.15A1,1,0,0,1,1,14.44V4.2A3.2,3.2,0,0,1,4.2,1H14.44a1,1,0,0,1,.71.29L30.71,16.85a1,
	                            1,0,0,1,0,1.41L18.26,30.71A1,1,0,0,1,17.56,31ZM3,14,17.56,28.59l11-11L14,3H4.2A1.2,1.2,0,0,0,3,4.2ZM8.41,8.41A2,2,0,1,
	                            0,7,9,2,2,0,0,0,8.41,8.41ZM22.36,19.54a1,1,0,0,0,0-1.41l-9.9-9.9A1,1,0,0,0,11,9.64l9.9,9.9a1,1,0,0,0,1.41,0Zm-4.95.71a1,
	                            1,0,0,0,0-1.41L9.64,11a1,1,0,0,0-1.41,1.41L16,20.24a1,1,0,0,0,1.41,0Z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			source:    'html',
			selector:  'label',
			default:   __( '[No Name]', 'zoom-forms' )
		},
		forInput: {
			type:      'string',
			source:    'attribute',
			attribute: 'for',
			selector:  'label',
			default:   ''
		},
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'data-required',
			selector:  'label',
			default:   false
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name, forInput, required } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		const zoomFormBlocks = blocks => {
			let result = [];

			blocks.forEach( block => {
				if ( block.name.startsWith( 'zoom-forms/' ) && ! block.name.endsWith( 'label-field' ) ) {
					result.push( { value: block.attributes.id, label: block.attributes.name } );
				}

				if ( block.innerBlocks ) {
					result = [ ...result, ...zoomFormBlocks( block.innerBlocks ) ];
				}
			} );

			return result;
		};

		const allBlocks = useSelect( select => select( 'core/block-editor' ).getBlocks(), [] );
		const allZoomFormBlocks = allBlocks && allBlocks.length > 0 ? zoomFormBlocks( allBlocks ) : [];
		const label = allZoomFormBlocks?.find( x => x.value == forInput )?.label;

		const inputSelect = <>
			<SelectControl
				label={ __( 'For Input', 'zoom-forms' ) }
				value={ forInput }
				options={ allZoomFormBlocks.length > 0 ? allZoomFormBlocks : [ { value: '-1', label: __( 'No inputs found...', 'zoom-forms' ) } ] }
				onChange={ value => setAttributes( { forInput: value } ) }
			/>
			<ToggleControl
				label={ __( 'Required', 'zoom-forms' ) }
				checked={ !! required }
				onChange={ value => setAttributes( { required: !! value } ) }
			/>
		</>;

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					{ allZoomFormBlocks.length > 0 ? inputSelect : <Disabled>{ inputSelect }</Disabled> }
				</PanelBody>
			</InspectorControls>

			<Fragment>
				<RichText
					tagName="label"
					placeholder={ __( 'Label', 'zoom-forms' ) }
					value={ name }
					htmlFor={ forInput }
					onChange={ value => setAttributes( { name: value } ) }
					data-required={ !! required }
					{ ...blockProps }
				/>

				{ required && (
					<sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup>
				) }
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name, forInput, required } = attributes;

		return <>
			<RichText.Content
				tagName="label"
				value={ name }
				htmlFor={ forInput }
				data-required={ !! required }
				{ ...blockProps }
			/>

			{ required && (
				<sup className="wp-block-zoom-forms-required">{ __( '*', 'zoom-forms' ) }</sup>
			) }
		</>;
	}
} );

registerBlockType( 'zoom-forms/submit-field', {
	title:       __( 'Submit', 'wpzoom-blocks' ),
	description: __( 'A submit button input field.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="20 20 70 70">
	                   <path d="M61.562,51.911l19.186,7.403l-4.458,4.459l5.413,5.414L80.27,70.62l-1.433,1.433l-5.414-5.412l-4.458,4.457  
	                            L61.562,51.911 M61.562,48.911c-0.781,0-1.549,0.306-2.121,0.878c-0.84,0.839-1.105,2.094-0.678,3.202l7.402,19.187  
	                            c0.365,0.947,1.186,1.646,2.178,1.855c0.206,0.043,0.414,0.064,0.621,0.064c0.787,0,1.553-0.31,2.121-0.879l2.337-2.336l3.293,3.292  
	                            c0.586,0.585,1.354,0.878,2.121,0.878s1.535-0.293,2.121-0.879l1.433-1.433l1.435-1.433c1.171-1.173,1.171-3.072-0.001-4.242  
	                            l-3.292-3.293l2.337-2.336c0.718-0.719,1.023-1.75,0.812-2.742c-0.209-0.993-0.906-1.812-1.854-2.178l-19.186-7.404  
	                            C62.292,48.977,61.925,48.911,61.562,48.911L61.562,48.911z M83.559,33.948H25.441c-2.721,0-4.924,2.206-4.924,4.925v19.7  
	                            c0,2.72,2.203,4.925,4.924,4.925h35.77l-1.158-3H25.441c-1.061,0-1.924-0.864-1.924-1.925v-19.7c0-1.062,0.863-1.925,1.924-1.925  
	                            h58.118c1.062,0,1.924,0.864,1.924,1.925v19.7c0,0.329-0.09,0.636-0.237,0.907c-0.04,1.121-0.499,2.199-1.315,3.016l-1.002,1.002  
	                            h0.631c2.721,0,4.926-2.206,4.926-4.925v-19.7C88.482,36.154,86.277,33.948,83.559,33.948z"/>
	               </svg> ),
	category:    'zoom-forms',
	ancestor:    [ 'zoom-forms/form' ],
	supports:    { align: true, html: false },
	attributes:  {
		id: {
			type:      'string',
			default:   ''
		},
		name: {
			type:      'string',
			source:    'attribute',
			attribute: 'value',
			selector:  'input',
			default:   __( 'Submit', 'zoom-forms' )
		}
	},
	example:     {},
	edit:        props => {
		const blockProps = useBlockProps();
		const { attributes, setAttributes, clientId } = props;
		const { id, name } = attributes;

		useEffect( () => {
			if ( ! id ) {
				setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );
			}
		}, [] );

		return <>
			<InspectorControls>
				<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
					<TextControl
						label={ __( 'Name', 'zoom-forms' ) }
						value={ name }
						onChange={ value => setAttributes( { name: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Fragment>
				<input
					type="submit"
					id={ id }
					value={ name }
					{ ...blockProps }
				/>
			</Fragment>
		</>;
	},
	save:        ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { id, name } = attributes;

		return <input
			type="submit"
			id={ id }
			value={ name }
			{ ...blockProps }
		/>;
	}
} );