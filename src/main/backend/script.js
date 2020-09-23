import { InspectorControls } from '@wordpress/block-editor';
import { registerBlockType, updateCategory } from '@wordpress/blocks';
import { Card, CardBody, CardHeader, Disabled, Flex, FlexBlock, FlexItem, IconButton, PanelBody, RangeControl, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __, setLocaleData, sprintf } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';

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
	render: ( props ) => {
		const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType(), [] );
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		const formMethod = meta[ '_form_method' ] || 'email';
		const formEmail = meta[ '_form_email' ] || '';

		return (
			<PluginDocumentSettingPanel className="zoom-forms-document-settings" title={ __( 'Form Settings', 'zoom-forms' ) }>
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
					onChange={ ( value ) => setMeta( { ...meta, '_form_method': value } ) }
				/>

				{ formMethod == 'email' && <TextControl
					type="email"
					label={ __( 'Send To', 'zoom-forms' ) }
					value={ formEmail }
					placeholder={ __( 'someone@somedomain.com', 'zoom-forms' ) }
					onChange={ ( value ) => setMeta( { ...meta, '_form_email': value } ) }
				/> }
			</PluginDocumentSettingPanel>
		);
	}
} );

setLocaleData( { 'Publish': [ __( 'Save', 'zoom-forms' ) ] } );

registerBlockType( 'zoom-forms/text-field', {
	title:       __( 'Text', 'wpzoom-blocks' ),
	description: __( 'A text input field.', 'wpzoom-blocks' ),
	icon:        ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
	                   <path d="M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75  
	                            v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"/>
	                   <path d="M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35  
	                            C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"/>
	               </svg> ),
	category:    'zoom-forms',
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
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'input',
			default:   false
		}
	},
	example:     {},
	edit:        ( props ) => {
		const { attributes, setAttributes, clientId } = props;
		const { id, name, type, placeholder, required } = attributes;

		if ( ! id ) setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
						<TextControl
							label={ __( 'Name', 'zoom-forms' ) }
							value={ name }
							placeholder={ __( 'e.g. My Text Field', 'zoom-forms' ) }
							onChange={ ( value ) => setAttributes( { name: value } ) }
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
									label: __( 'Email', 'zoom-forms' ),
									value: 'email'
								},
								{
									label: __( 'URL', 'zoom-forms' ),
									value: 'url'
								}
							] }
							onChange={ ( value ) => setAttributes( { type: value } ) }
						/>

						<TextControl
							label={ __( 'Placeholder', 'zoom-forms' ) }
							value={ placeholder }
							onChange={ ( value ) => setAttributes( { placeholder: value } ) }
						/>

						<ToggleControl
							label={ __( 'Required', 'zoom-forms' ) }
							checked={ !! required }
							onChange={ ( value ) => setAttributes( { required: !! value } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<Fragment>
					<input type={ type } name={ id } id={ id } placeholder={ placeholder } required={ !! required } />
				</Fragment>
			</>
		);
	},
	save:        ( { attributes } ) => {
		const { id, name, type, placeholder, required } = attributes;

		return (
			<input type={ type } name={ id } id={ id } placeholder={ placeholder } required={ !! required } />
		);
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
		required: {
			type:      'boolean',
			source:    'attribute',
			attribute: 'required',
			selector:  'textarea',
			default:   false
		}
	},
	example:     {},
	edit:        ( props ) => {
		const { attributes, setAttributes, clientId } = props;
		const { id, name, cols, rows, placeholder, required } = attributes;

		if ( ! id ) setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
						<TextControl
							label={ __( 'Name', 'zoom-forms' ) }
							value={ name }
							placeholder={ __( 'e.g. My Textarea Field', 'zoom-forms' ) }
							onChange={ ( value ) => setAttributes( { name: value } ) }
						/>

						<RangeControl
							label={ __( 'Columns', 'wpzoom-blocks' ) }
							max={ 500 }
							min={ 1 }
							value={ Number( cols ) }
							onChange={ ( value ) => setAttributes( { cols: value } ) }
						/>

						<RangeControl
							label={ __( 'Rows', 'wpzoom-blocks' ) }
							max={ 100 }
							min={ 1 }
							value={ Number( rows ) }
							onChange={ ( value ) => setAttributes( { rows: value } ) }
						/>

						<TextControl
							label={ __( 'Placeholder', 'zoom-forms' ) }
							value={ placeholder }
							onChange={ ( value ) => setAttributes( { placeholder: value } ) }
						/>

						<ToggleControl
							label={ __( 'Required', 'zoom-forms' ) }
							checked={ !! required }
							onChange={ ( value ) => setAttributes( { required: !! value } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<Fragment>
					<textarea name={ id } id={ id } cols={ cols } rows={ rows } placeholder={ placeholder } required={ !! required }></textarea>
				</Fragment>
			</>
		);
	},
	save:        ( { attributes } ) => {
		const { id, name, cols, rows, placeholder, required } = attributes;

		return (
			<textarea name={ id } id={ id } cols={ cols } rows={ rows } placeholder={ placeholder } required={ !! required }></textarea>
		);
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
			source:    'html',
			multiline: 'option',
			selector:  'select',
			default:   [ __( 'Item #1', 'zoom-forms' ) ]
		},
		defaultValue: {
			type:      'string',
			source:    'attribute',
			attribute: 'defaultValue',
			selector:  'select',
			default:   __( 'Item #1', 'zoom-forms' )
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
	edit:        ( props ) => {
		const { attributes, setAttributes, clientId } = props;
		const { id, name, options, defaultValue, multiple, required } = attributes;

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

		if ( ! id ) setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );

		if ( options.length < 1 ) options = [ __( 'Item #1', 'zoom-forms' ) ];

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
						<TextControl
							label={ __( 'Name', 'zoom-forms' ) }
							value={ name }
							placeholder={ __( 'e.g. My Dropdown Select Field', 'zoom-forms' ) }
							onChange={ ( value ) => setAttributes( { name: value } ) }
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
													onChange={ ( value ) => optionChange( value, index ) }
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
							options={ options.map( ( option, index ) => { return { label: option, value: option } } ) }
							onChange={ ( value ) => setAttributes( { defaultValue: value } ) }
						/>

						<ToggleControl
							label={ __( 'Allow Multiple Selections', 'zoom-forms' ) }
							checked={ !! multiple }
							onChange={ ( value ) => setAttributes( { multiple: !! value } ) }
						/>

						<ToggleControl
							label={ __( 'Required', 'zoom-forms' ) }
							checked={ !! required }
							onChange={ ( value ) => setAttributes( { required: !! value } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<Fragment>
					<select name={ id } id={ id } required={ !! required } multiple={ !! multiple } defaultValue={ defaultValue }>
						{ options.map( ( option, index ) => ( <option key={ index } value={ option }>{ option }</option> ) ) }
					</select>
				</Fragment>
			</>
		);
	},
	save:        ( { attributes } ) => {
		const { id, name, options, defaultValue, multiple, required } = attributes;

		return (
			<select name={ id } id={ id } required={ !! required } multiple={ !! multiple } defaultValue={ defaultValue }>
				{ options.map( ( option, index ) => ( <option key={ index } value={ option }>{ option }</option> ) ) }
			</select>
		);
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
			source:    'attribute',
			attribute: 'defaultValue',
			selector:  'input',
			default:   false
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
	edit:        ( props ) => {
		const { attributes, setAttributes, clientId } = props;
		const { id, name, defaultValue, required } = attributes;

		if ( ! id ) setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
						<TextControl
							label={ __( 'Name', 'zoom-forms' ) }
							value={ name }
							placeholder={ __( 'e.g. My Checkbox Field', 'zoom-forms' ) }
							onChange={ ( value ) => setAttributes( { name: value } ) }
						/>

						<ToggleControl
							label={ __( 'Checked By Default', 'zoom-forms' ) }
							checked={ !! defaultValue }
							onChange={ ( value ) => setAttributes( { defaultValue: !! value } ) }
						/>

						<ToggleControl
							label={ __( 'Required', 'zoom-forms' ) }
							checked={ !! required }
							onChange={ ( value ) => setAttributes( { required: !! value } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<Fragment>
					<input type="checkbox" name={ id } id={ id } defaultChecked={ !! defaultValue } required={ !! required } />
				</Fragment>
			</>
		);
	},
	save:        ( { attributes } ) => {
		const { id, name, defaultValue, required } = attributes;

		return (
			<input type="checkbox" name={ id } id={ id } defaultChecked={ !! defaultValue } required={ !! required } />
		);
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
			source:    'query',
			selector:  'input',
			query:     {
				name: {
					type:      'string',
					source:    'attribute',
					attribute: 'value'
				}
			},
			default:   [ __( 'Item #1', 'zoom-forms' ) ]
		},
		defaultValue: {
			type:      'string',
			source:    'attribute',
			attribute: 'defaultValue',
			selector:  'input',
			default:   __( 'Item #1', 'zoom-forms' )
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
	edit:        ( props ) => {
		const { attributes, setAttributes, clientId } = props;
		const { id, name, options, defaultValue, required } = attributes;

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

		if ( ! id ) setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );

		if ( options.length < 1 ) options = [ __( 'Item #1', 'zoom-forms' ) ];

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
						<TextControl
							label={ __( 'Name', 'zoom-forms' ) }
							value={ name }
							placeholder={ __( 'e.g. My Radio Field', 'zoom-forms' ) }
							onChange={ ( value ) => setAttributes( { name: value } ) }
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
													onChange={ ( value ) => optionChange( value, index ) }
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
							options={ options.map( ( option, index ) => { return { label: option, value: option } } ) }
							onChange={ ( value ) => setAttributes( { defaultValue: value } ) }
						/>

						<ToggleControl
							label={ __( 'Required', 'zoom-forms' ) }
							checked={ !! required }
							onChange={ ( value ) => setAttributes( { required: !! value } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<Fragment>
					<ul className="unstyled-list">
						{ options.map( ( option, index ) =>
							( <li key={ index }>
								<label>
									<input type="radio" name={ id } id={ id } value={ option } defaultChecked={ option == defaultValue } required={ !! required } />
									{ option }
								</label>
							</li> )
						) }
					</ul>
				</Fragment>
			</>
		);
	},
	save:        ( { attributes } ) => {
		const { id, name, options, defaultValue, required } = attributes;

		return ( <ul>
			{ options.map( ( option, index ) =>
				( <li key={ index }>
					<label>
						<input type="radio" name={ id } id={ id } value={ option } defaultChecked={ option == defaultValue } required={ !! required } />
						{ option }
					</label>
				</li> )
			) }
		</ul> );
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
		}
	},
	example:     {},
	edit:        ( props ) => {
		const { attributes, setAttributes, clientId } = props;
		const { id, name, forInput } = attributes;

		if ( ! id ) setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );

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

		const allBlocks = useSelect( ( select ) => select( 'core/editor' ).getBlocks(), [] );
		const allZoomFormBlocks = allBlocks && allBlocks.length > 0 ? zoomFormBlocks( allBlocks ) : [];
		const label = allZoomFormBlocks?.find( x => x.value == forInput )?.label;

		if ( label ) {
			setAttributes( { name: ( label || __( '[No Name]', 'zoom-forms' ) ) } );
		}

		const inputSelect = ( <SelectControl
			label={ __( 'For Input', 'zoom-forms' ) }
			value={ forInput }
			options={ allZoomFormBlocks.length > 0 ? allZoomFormBlocks : [ { value: '-1', label: __( 'No inputs found...', 'zoom-forms' ) } ] }
			onChange={ ( value ) => setAttributes( { forInput: value } ) }
		/> );

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
						{ allZoomFormBlocks.length > 0 ? inputSelect : <Disabled>{ inputSelect }</Disabled> }
					</PanelBody>
				</InspectorControls>

				<Fragment>
					<label htmlFor={ forInput }>{ name }</label>
				</Fragment>
			</>
		);
	},
	save:        ( { attributes } ) => {
		const { id, name, forInput } = attributes;

		return (
			<label htmlFor={ forInput }>{ name }</label>
		);
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
	edit:        ( props ) => {
		const { attributes, setAttributes, clientId } = props;
		const { id, name } = attributes;

		if ( ! id ) setAttributes( { id: 'input_' + clientId.substr( 0, 8 ) } );

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Options', 'zoom-forms' ) }>
						<TextControl
							label={ __( 'Name', 'zoom-forms' ) }
							value={ name }
							onChange={ ( value ) => setAttributes( { name: value } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<Fragment>
					<input type="submit" id={ id } value={ name } />
				</Fragment>
			</>
		);
	},
	save:        ( { attributes } ) => {
		const { id, name } = attributes;

		return (
			<input type="submit" id={ id } value={ name } />
		);
	}
} );