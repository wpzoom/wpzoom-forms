import { useBlockProps, InspectorControls, InnerBlocks, RichText } from '@wordpress/block-editor';
import { registerBlockType, updateCategory } from '@wordpress/blocks';
import { Card, CardBody, CardHeader, Disabled, Flex, FlexBlock, FlexItem, IconButton, PanelBody, RangeControl, SelectControl, TextControl, ToggleControl, ClipboardButton, Icon, __experimentalHStack as HStack } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect, useDispatch } from '@wordpress/data';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { __, setLocaleData, sprintf } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { default as WelcomeGuide } from './welcome';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import FormIcons from './icons';

const insertFormField = (blockName, defaultAttributes, isDisabled) => {
	console.log('insertFormField called with:', blockName, defaultAttributes, isDisabled);
	
	if (isDisabled) {
		console.log('Field is disabled, showing notice');
		wp.data.dispatch('core/notices').createNotice(
			'info',
			__('This field can only be used once per form', 'wpzoom-forms'),
			{
				type: 'snackbar',
				isDismissible: true,
			}
		);
		return;
	}
	
	const { createBlock } = wp.blocks;
	const { insertBlock, getBlocksByClientId } = wp.data.dispatch('core/block-editor');
	const { getSelectedBlock, getBlockSelectionStart, getBlocks } = wp.data.select('core/block-editor');
	
	console.log('Creating block:', `wpzoom-forms/${blockName}`);
	const newBlock = createBlock(`wpzoom-forms/${blockName}`, defaultAttributes);
	const selectedBlock = getSelectedBlock();
	const focusedBlockClientId = getBlockSelectionStart();
	
	console.log('Selected block:', selectedBlock);
	console.log('Focused block client ID:', focusedBlockClientId);
	
	// Get all blocks to find the form block
	const allBlocks = getBlocks();
	console.log('All blocks:', allBlocks);
	
	// Find the form block
	const formBlock = allBlocks.find(block => block.name === 'wpzoom-forms/form');
	console.log('Form block:', formBlock);
	
	if (selectedBlock) {
		console.log('Inserting after selected block');
		// Insert after the selected block
		insertBlock(newBlock, undefined, selectedBlock.clientId, false);
	} else if (focusedBlockClientId) {
		console.log('Inserting after focused block');
		// Insert after the focused block
		insertBlock(newBlock, undefined, focusedBlockClientId, false);
	} else if (formBlock) {
		console.log('Inserting at the end of the form block');
		// Find the innermost column block to insert into
		let targetBlock = formBlock;
		
		// Navigate through the inner blocks to find the column block
		if (formBlock.innerBlocks && formBlock.innerBlocks.length > 0) {
			// Find the group block
			const groupBlock = formBlock.innerBlocks.find(block => block.name === 'core/group');
			if (groupBlock && groupBlock.innerBlocks && groupBlock.innerBlocks.length > 0) {
				// Find the columns block
				const columnsBlock = groupBlock.innerBlocks.find(block => block.name === 'core/columns');
				if (columnsBlock && columnsBlock.innerBlocks && columnsBlock.innerBlocks.length > 0) {
					// Find the column block
					const columnBlock = columnsBlock.innerBlocks.find(block => block.name === 'core/column');
					if (columnBlock) {
						targetBlock = columnBlock;
					}
				}
			}
		}
		
		console.log('Target block for insertion:', targetBlock);
		insertBlock(newBlock, undefined, targetBlock.clientId, false);
	} else {
		console.log('No form block found, inserting at root');
		insertBlock(newBlock);
	}
};

updateCategory('wpzoom-forms', {
	icon: (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z" fill="#164777" />
			<path d="M5.276 12.084H6.032L8.156 7.224L10.268 12.084H11.024L13.148 5.316H13.988V4.104H10.628V5.316H11.708L10.508 9.468L8.552 4.872H7.832L5.876 9.468L4.592 5.316H5.636V4.104H2.276V5.316H3.116L5.276 12.084Z" fill="white" />
		</svg>
	)
});

registerPlugin('wpzoom-forms-document-settings', {
	icon: '',
	render: props => {
		const postID = useSelect(select => select('core/editor').getCurrentPostId(), []);
		const postType = useSelect(select => select('core/editor').getCurrentPostType(), []);
		const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
		const formMethod = meta['_form_method'] || 'email';
		const formEmail = meta['_form_email'] || (typeof wpzf_formblock !== 'undefined' && 'admin_email' in wpzf_formblock ? wpzf_formblock.admin_email : '');
		const formSubject = meta['_form_subject'] || '';
		const formEmailSubject = meta['_form_email_subject'] || '';
		const formEmailMessage = meta['_form_email_message'] || '';
		const formRedirect = meta['_form_redirect'] || '';
		const formCustomAction = meta['_form_custom_action'] || '';
		const formCustomMethod = meta['_form_custom_method'] || 'POST';
		const formCustomEnctype = meta['_form_custom_enctype'] || 'application/x-www-form-urlencoded';
		const formCustomTarget = meta['_form_custom_target'] || '_self';
		const formCustomHideOnSuccess = meta['_form_custom_hide_on_success'] || false;
		const formCustomSuccessMessage = meta['_form_custom_success_message'] || '';
		const formCustomErrorMessage = meta['_form_custom_error_message'] || '';
		const formCustomSuccessRedirect = meta['_form_custom_success_redirect'] || '';
		const formCustomSuccessRedirectTimeout = meta['_form_custom_success_redirect_timeout'] || 5;
		const formCustomSuccessRedirectTimeoutMessage = meta['_form_custom_success_redirect_timeout_message'] || '';
		const formCustomSuccessRedirectTimeoutMessageShow = meta['_form_custom_success_redirect_timeout_message_show'] || false;
		const formCustomSuccessRedirectTimeoutMessageShowTime = meta['_form_custom_success_redirect_timeout_message_show_time'] || 0;
		const formCustomSuccessRedirectTimeoutMessageHideTime = meta['_form_custom_success_redirect_timeout_message_hide_time'] || 0;
		const formCustomSuccessRedirectTimeoutMessageHideEffect = meta['_form_custom_success_redirect_timeout_message_hide_effect'] || 'fade';
		const formCustomSuccessRedirectTimeoutMessageShowEffect = meta['_form_custom_success_redirect_timeout_message_show_effect'] || 'fade';
		
		// Use dispatch to open panels by default
		const { toggleEditorPanelOpened } = useDispatch('core/edit-post');
		
		useEffect(() => {
			// Open the Form Settings panel by default
			toggleEditorPanelOpened('wpzoom-forms-document-settings/form-settings', true);
			// Open the Add Form Fields panel by default
			toggleEditorPanelOpened('wpzoom-forms-document-settings/add-form-fields', true);
			// Open the Form Details panel by default
			toggleEditorPanelOpened('wpzoom-forms-document-settings/form-details', true);
		}, []);

		const [hasCopiedShortcode, setHasCopiedShortcode] = useState(false);
		const copyBtnStyle = { minHeight: '30px', height: 'auto', minWidth: 'fit-content', margin: '0px 0px 8px 0px' };
		const blockPatternsStyle = {};

		// Add styles to head
		useEffect(() => {
			// No need to add inline styles anymore as they will be in style.scss
			
			// Add drop handler to the editor
			const handleDrop = (event) => {
				event.preventDefault();
				event.stopPropagation();
				
				// Remove any existing drop indicators
				document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(el => el.remove());
				
				// Check if we've already handled this drop
				if (event.handled) {
					return;
				}
				event.handled = true;
				
				try {
					const data = event.dataTransfer.getData('text');
					if (!data) return;
					
					const { type, attributes } = JSON.parse(data);
					if (!type || !type.startsWith('wpzoom-forms/')) return;
					
					const { createBlock } = wp.blocks;
					const { insertBlock, getBlockInsertionPoint } = wp.data.dispatch('core/block-editor');
					const { getBlockRootClientId, getBlockIndex } = wp.data.select('core/block-editor');
					const newBlock = createBlock(type, attributes);
					
					// Get the closest block element from the drop point
					const dropPoint = {
						x: event.clientX,
						y: event.clientY
					};
					
					// Find all block elements and get the closest one
					const blockElements = document.querySelectorAll('[data-block]');
					let closestBlock = null;
					let closestDistance = Infinity;
					let insertAfter = false;

					blockElements.forEach(block => {
						const rect = block.getBoundingClientRect();
						const blockCenter = {
							x: rect.left + rect.width / 2,
							y: rect.top + rect.height / 2
						};
						
						const distance = Math.sqrt(
							Math.pow(dropPoint.x - blockCenter.x, 2) + 
							Math.pow(dropPoint.y - blockCenter.y, 2)
						);
						
						if (distance < closestDistance) {
							closestDistance = distance;
							closestBlock = block;
							insertAfter = dropPoint.y > blockCenter.y;
						}
					});
					
					if (closestBlock) {
						const targetClientId = closestBlock.getAttribute('data-block');
						const rootClientId = getBlockRootClientId(targetClientId);
						const targetIndex = getBlockIndex(targetClientId);
						
						insertBlock(
							newBlock,
							insertAfter ? targetIndex + 1 : targetIndex,
							rootClientId,
							false
						);
					} else {
						// If no target found, insert at the end
						insertBlock(newBlock);
					}
				} catch (error) {
					console.error('Error handling block drop:', error);
				}
			};

			const handleDragOver = (event) => {
				event.preventDefault();
				event.stopPropagation();
				
				// Throttle the drag over handler
				if (handleDragOver.timeout) {
					return;
				}
				
				handleDragOver.timeout = setTimeout(() => {
					handleDragOver.timeout = null;
					
					// Get all block elements
					const blockElements = document.querySelectorAll('[data-block]');
					let closestBlock = null;
					let closestDistance = Infinity;
					let insertAfter = false;
					
					const dropPoint = {
						x: event.clientX,
						y: event.clientY
					};
					
					blockElements.forEach(block => {
						const rect = block.getBoundingClientRect();
						const blockCenter = {
							x: rect.left + rect.width / 2,
							y: rect.top + rect.height / 2
						};
						
						const distance = Math.sqrt(
							Math.pow(dropPoint.x - blockCenter.x, 2) + 
							Math.pow(dropPoint.y - blockCenter.y, 2)
						);
						
						if (distance < closestDistance) {
							closestDistance = distance;
							closestBlock = block;
							insertAfter = dropPoint.y > (rect.top + rect.height / 2);
						}
					});
					
					// Remove existing indicators
					document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(el => el.remove());
					
					if (closestBlock) {
						const rect = closestBlock.getBoundingClientRect();
						const indicator = document.createElement('div');
						indicator.className = 'wpzoom-forms-drop-indicator';
						
						Object.assign(indicator.style, {
							position: 'absolute',
							left: rect.left + 'px',
							right: (window.innerWidth - rect.right) + 'px',
							height: '2px',
							background: '#007cba',
							pointerEvents: 'none',
							zIndex: '9999',
							transition: 'transform 0.1s ease',
							top: insertAfter ? rect.bottom + 'px' : rect.top + 'px'
						});
						
						document.body.appendChild(indicator);
					}
				}, 50);
			};

			const handleDragEnd = () => {
				if (handleDragOver.timeout) {
					clearTimeout(handleDragOver.timeout);
					handleDragOver.timeout = null;
				}
				document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(el => el.remove());
			};

			// Add event listeners to the editor
			const editor = document.querySelector('.block-editor-block-list__layout');
			if (editor) {
				// Remove any existing event listeners first
				editor.removeEventListener('drop', handleDrop);
				editor.removeEventListener('dragover', handleDragOver);
				editor.removeEventListener('dragleave', handleDragEnd);
				editor.removeEventListener('dragend', handleDragEnd);
				editor.removeEventListener('mouseup', handleDragEnd);
				window.removeEventListener('blur', handleDragEnd);
				
				// Add new event listeners
				editor.addEventListener('drop', handleDrop, { capture: true });
				editor.addEventListener('dragover', handleDragOver);
				editor.addEventListener('dragleave', handleDragEnd);
				editor.addEventListener('dragend', handleDragEnd);
				editor.addEventListener('mouseup', handleDragEnd);
				window.addEventListener('blur', handleDragEnd);
			}

			// Add styles for drop indicator
			const style = document.createElement('style');
			style.textContent = `
				.wpzoom-forms-drop-indicator {
					position: absolute;
					left: 0;
					right: 0;
					height: 2px;
					background: #007cba;
					pointer-events: none;
					z-index: 9999;
					transition: transform 0.1s ease;
				}
				.wpzoom-forms-drop-indicator::before {
					content: '';
					position: absolute;
					left: 0;
					top: -4px;
					width: 8px;
					height: 8px;
					background: #007cba;
					border-radius: 50%;
				}
			`;
			document.head.appendChild(style);

			// Cleanup
			return () => {
				if (handleDragOver.timeout) {
					clearTimeout(handleDragOver.timeout);
				}
				const editor = document.querySelector('.block-editor-block-list__layout');
				if (editor) {
					editor.removeEventListener('drop', handleDrop);
					editor.removeEventListener('dragover', handleDragOver);
					editor.removeEventListener('dragleave', handleDragEnd);
					editor.removeEventListener('dragend', handleDragEnd);
					editor.removeEventListener('mouseup', handleDragEnd);
					window.removeEventListener('blur', handleDragEnd);
				}
				document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(el => el.remove());
			};
		}, []);

		if (hasCopiedShortcode) {
			copyBtnStyle.backgroundColor = 'green';
		}

		// Function to check if 'wpzoom-forms/text-plain-field' block with subject attribute is present
		const isTextPlainFieldWithSubject = useSelect(select => {
			const blocks = select('core/block-editor').getBlocks();

			// Helper function to check if any inner block has the desired attributes
			const hasDesiredInnerBlock = (innerBlocks) => {
				return innerBlocks.some(innerBlock => {
					if (innerBlock.name === 'wpzoom-forms/text-plain-field' && innerBlock.attributes.subject === true) {
						return true;
					}
					if (innerBlock.innerBlocks && innerBlock.innerBlocks.length > 0) {
						return hasDesiredInnerBlock(innerBlock.innerBlocks);
					}
					return false;
				});
			};

			// Iterate through all blocks and their inner blocks
			return blocks.some(block => {
				if (block.name === 'wpzoom-forms/text-plain-field' && block.attributes.subject === true) {
					return true;
				}
				if (block.innerBlocks && block.innerBlocks.length > 0) {
					return hasDesiredInnerBlock(block.innerBlocks);
				}
				return false;
			});
		}, []);

		// Add check for unique fields
		const uniqueFieldsExist = useSelect(select => {
			const blocks = select('core/block-editor').getBlocks();
			
			// Helper function to check blocks recursively
			const findBlockType = (blocks, type) => {
				return blocks.some(block => {
					if (block.name === type) {
						return true;
					}
					if (block.innerBlocks && block.innerBlocks.length > 0) {
						return findBlockType(block.innerBlocks, type);
					}
					return false;
				});
			};

			// Check for each unique field type
			const hasEmailField = findBlockType(blocks, 'wpzoom-forms/text-email-field');
			const hasNameField = findBlockType(blocks, 'wpzoom-forms/text-name-field');
			const hasSubmitField = findBlockType(blocks, 'wpzoom-forms/submit-field');

			return {
				'text-email-field': hasEmailField,
				'text-name-field': hasNameField,
				'submit-field': hasSubmitField
			};
		}, []);

		return <>
			<WelcomeGuide />

			<PluginDocumentSettingPanel
				name="wpzoom-forms-document-settings"
				className="wpzoom-forms-document-settings"
				title={__('Form Settings', 'wpzoom-forms')}
			>
				<SelectControl
					label={__('Form Method', 'wpzoom-forms')}
					value={formMethod}
					options={[
						{
							label: __('Save to Database', 'wpzoom-forms'),
							value: 'db'
						},
						{
							label: __('Email', 'wpzoom-forms'),
							value: 'email'
						},
						{
							label: __('Save to Database & Email', 'wpzoom-forms'),
							value: 'combined'
						}

					]}
					onChange={value => setMeta({ ...meta, '_form_method': value })}
				/>

				{(formMethod == 'email' || formMethod == 'combined') && <TextControl
					type="email"
					label={__('Send To', 'wpzoom-forms')}
					value={formEmail}
					placeholder={__('someone@somedomain.com', 'wpzoom-forms')}
					onChange={value => setMeta({ ...meta, '_form_email': value })}
				/>}

				<TextControl
					type="text"
					label={__('Email Subject', 'wpzoom-forms')}
					value={formSubject}
					placeholder={__('New Form Submission', 'wpzoom-forms')}
					onChange={value => setMeta({ ...meta, '_form_subject': value })}
					disabled={isTextPlainFieldWithSubject} // Disable the field if the conditions are met
				/>
				{isTextPlainFieldWithSubject && (
					<note><i>{__('Your form already includes a field that is marked as the Subject. Uncheck its "Is Subject" option if you want to set a custom subject here.', 'wpzoom-forms')}</i></note>
				)}
			</PluginDocumentSettingPanel>

			<PluginDocumentSettingPanel
				name="wpzoom-forms-document-settings-fields"
				className="wpzoom-forms-document-settings-fields"
				title={__('Add Form Fields', 'wpzoom-forms')}
			>
				<div className="wpzoom-forms-block-patterns">
					<div className="wpzoom-forms-block-patterns-list">
						{[
							{
								name: 'multi-checkbox-field',
								title: __('Multi Checkbox', 'wpzoom-forms'),
								icon: FormIcons.multiCheckbox,
								defaultAttributes: {
									label: __('Multiple Choice', 'wpzoom-forms'),
									required: false,
									options: ['Option 1', 'Option 2', 'Option 3']
								}
							},
							{
								name: 'checkbox-field',
								title: __('Checkbox', 'wpzoom-forms'),
								icon: FormIcons.checkbox,
								defaultAttributes: {
									label: __('Checkbox', 'wpzoom-forms'),
									required: false
								}
							},
							{
								name: 'text-email-field',
								title: __('Email Input', 'wpzoom-forms'),
								icon: FormIcons.emailInput,
								defaultAttributes: {
									label: __('Email', 'wpzoom-forms'),
									required: true
								}
							},
							{
								name: 'label-field',
								title: __('Label', 'wpzoom-forms'),
								icon: FormIcons.label,
								defaultAttributes: {
									content: __('Label', 'wpzoom-forms')
								}
							},
							{
								name: 'text-name-field',
								title: __('Name Input', 'wpzoom-forms'),
								icon: FormIcons.nameInput,
								defaultAttributes: {
									label: __('Name', 'wpzoom-forms'),
									required: true
								}
							},
							{
								name: 'text-phone-field',
								title: __('Phone Input', 'wpzoom-forms'),
								icon: FormIcons.phoneInput,
								defaultAttributes: {
									label: __('Phone', 'wpzoom-forms'),
									required: false
								}
							},
							{
								name: 'text-plain-field',
								title: __('Text Input', 'wpzoom-forms'),
								icon: FormIcons.textInput,
								defaultAttributes: {
									label: __('Text', 'wpzoom-forms'),
									required: false
								}
							},
							{
								name: 'radio-field',
								title: __('Radio', 'wpzoom-forms'),
								icon: FormIcons.radio,
								defaultAttributes: {
									label: __('Radio', 'wpzoom-forms'),
									required: false,
									options: ['Option 1', 'Option 2', 'Option 3']
								}
							},
							{
								name: 'select-field',
								title: __('Select', 'wpzoom-forms'),
								icon: FormIcons.select,
								defaultAttributes: {
									label: __('Select', 'wpzoom-forms'),
									required: false,
									options: ['Option 1', 'Option 2', 'Option 3']
								}
							},
							{
								name: 'submit-field',
								title: __('Submit', 'wpzoom-forms'),
								icon: FormIcons.submit,
								defaultAttributes: {
									label: __('Submit', 'wpzoom-forms')
								}
							},
							{
								name: 'textarea-field',
								title: __('Textarea', 'wpzoom-forms'),
								icon: FormIcons.textarea,
								defaultAttributes: {
									label: __('Message', 'wpzoom-forms'),
									required: false,
									rows: 5
								}
							},
							{
								name: 'text-website-field',
								title: __('Website Input', 'wpzoom-forms'),
								icon: FormIcons.websiteInput,
								defaultAttributes: {
									label: __('Website', 'wpzoom-forms'),
									required: false
								}
							},
							{
								name: 'datepicker-field',
								title: __('Date', 'wpzoom-forms'),
								icon: FormIcons.date,
								defaultAttributes: {
									label: __('Date', 'wpzoom-forms'),
									required: false
								}
							}
						].map((block) => {
							const isDisabled = uniqueFieldsExist[block.name] || false;
							return (
								<div
									key={block.name}
									className={`wpzoom-forms-block-pattern-item${isDisabled ? ' disabled' : ''}`}
									draggable={!isDisabled}
									onDragStart={(event) => {
										if (isDisabled) {
											event.preventDefault();
											return;
										}
										event.dataTransfer.setData('text', JSON.stringify({
											type: `wpzoom-forms/${block.name}`,
											attributes: block.defaultAttributes
										}));
									}}
									onClick={(event) => {
										console.log('Quick form field clicked:', block.name);
										event.preventDefault();
										event.stopPropagation();
										insertFormField(block.name, block.defaultAttributes, isDisabled);
									}}
									title={isDisabled ? __('This field can only be used once per form', 'wpzoom-forms') : ''}
								>
									{block.icon}
									<span>{block.title}</span>
									{isDisabled && (
										<span className="dashicons dashicons-info" />
									)}
								</div>
							);
						})}
					</div>
				</div>
			</PluginDocumentSettingPanel>

			<PluginDocumentSettingPanel
				name="wpzoom-forms-document-settings-details"
				className="wpzoom-forms-document-settings-details"
				title={__('Form Details', 'wpzoom-forms')}
			>
				<HStack className="wpzf-shortcode-container" style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
					<TextControl
						value={`[wpzf_form id="${postID}"]`}
						readOnly={true}
						style={{ margin: 0 }}
					/>
					<ClipboardButton
						className="wpzf-copy-button"
						variant="primary"
						style={{
							height: '30px',
							minWidth: '30px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '2px 8px'
						}}
						text={`[wpzf_form id="${postID}"]`}
						label={__('Copy shortcode', 'wpzoom-forms')}
						showTooltip={true}
						onCopy={() => setHasCopiedShortcode(true)}
						onFinishCopy={() => setHasCopiedShortcode(false)}
					>
						<Icon
							icon={hasCopiedShortcode
								? <svg viewBox="0 0 24 24"><path d="M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"></path></svg>
								: <svg viewBox="0 0 24 24"><path d="M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"></path></svg>
							}
							size={16}
						/>
					</ClipboardButton>
				</HStack>
			</PluginDocumentSettingPanel>
		</>;
	}
});

setLocaleData({ 'Publish': [__('Save', 'wpzoom-forms')] });

const DragHandle = SortableHandle(() => <IconButton
	icon="move"
	label={__('Re-arrange Item', 'wpzoom-forms')}
	className="wpzoom-forms-move-button"
/>);

const SortableItem = SortableElement(({ value, optsId, options, changeCallback, removeCallback }) => <Fragment>
	<Flex>
		<FlexBlock>
			<TextControl
				value={value}
				onChange={val => changeCallback(val, optsId)}
			/>
		</FlexBlock>

		{options.length > 1 && <FlexItem>
			<DragHandle />

			<IconButton
				icon="no-alt"
				label={__('Delete Item', 'wpzoom-forms')}
				onClick={() => removeCallback(optsId)}
			/>
		</FlexItem>}
	</Flex>
</Fragment>);

const SortableList = SortableContainer(({ items, changeCallback, removeCallback }) => <div>
	{items.map((value, index) => <SortableItem
		index={index}
		optsId={index}
		value={value}
		options={items}
		changeCallback={changeCallback}
		removeCallback={removeCallback}
	/>)}
</div>);

registerBlockType('wpzoom-forms/form', {
	title: __('Contact Form', 'wpzoom-blocks'),
	description: __('Add a simple contact form', 'wpzoom-blocks'),
	icon: (<svg width="40" height="40" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M250 0H50V50H0V300H250V0Z" fill="#083EA7" />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M100 50H200V100H100V50ZM100 150V100H50V250H100V200H150V150H100Z" fill="#1FDE91" />
	</svg>),
	category: 'wpzoom-forms',
	supports: { align: true, html: false, multiple: false },
	example: {},
	edit: () => {
		const blockProps = useBlockProps({ className: 'wpzoom-forms_form' });

		// Add check for unique fields
		const uniqueFieldsExist = useSelect(select => {
			const blocks = select('core/block-editor').getBlocks();
			
			// Helper function to check blocks recursively
			const findBlockType = (blocks, type) => {
				return blocks.some(block => {
					if (block.name === type) {
						return true;
					}
					if (block.innerBlocks && block.innerBlocks.length > 0) {
						return findBlockType(block.innerBlocks, type);
					}
					return false;
				});
			};

			// Check for each unique field type
			const hasEmailField = findBlockType(blocks, 'wpzoom-forms/text-email-field');
			const hasNameField = findBlockType(blocks, 'wpzoom-forms/text-name-field');
			const hasSubmitField = findBlockType(blocks, 'wpzoom-forms/submit-field');

			return {
				'text-email-field': hasEmailField,
				'text-name-field': hasNameField,
				'submit-field': hasSubmitField
			};
		}, []);

		const blockPatternsStyle = {};

		// Add styles to head
		useEffect(() => {
			// No need to add inline styles anymore as they will be in style.scss
			
			// Add drop handler to the editor
			const handleDrop = (event) => {
				event.preventDefault();
				event.stopPropagation();
				
				// Remove any existing drop indicators
				document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(el => el.remove());
				
				// Check if we've already handled this drop
				if (event.handled) {
					return;
				}
				event.handled = true;
				
				try {
					const data = event.dataTransfer.getData('text');
					if (!data) return;
					
					const { type, attributes } = JSON.parse(data);
					if (!type || !type.startsWith('wpzoom-forms/')) return;
					
					const { createBlock } = wp.blocks;
					const { insertBlock, getBlockInsertionPoint } = wp.data.dispatch('core/block-editor');
					const { getBlockRootClientId, getBlockIndex } = wp.data.select('core/block-editor');
					const newBlock = createBlock(type, attributes);
					
					// Get the closest block element from the drop point
					const dropPoint = {
						x: event.clientX,
						y: event.clientY
					};
					
					// Find all block elements and get the closest one
					const blockElements = document.querySelectorAll('[data-block]');
					let closestBlock = null;
					let closestDistance = Infinity;
					let insertAfter = false;

					blockElements.forEach(block => {
						const rect = block.getBoundingClientRect();
						const blockCenter = {
							x: rect.left + rect.width / 2,
							y: rect.top + rect.height / 2
						};
						
						const distance = Math.sqrt(
							Math.pow(dropPoint.x - blockCenter.x, 2) + 
							Math.pow(dropPoint.y - blockCenter.y, 2)
						);
						
						if (distance < closestDistance) {
							closestDistance = distance;
							closestBlock = block;
							insertAfter = dropPoint.y > blockCenter.y;
						}
					});
					
					if (closestBlock) {
						const targetClientId = closestBlock.getAttribute('data-block');
						const rootClientId = getBlockRootClientId(targetClientId);
						const targetIndex = getBlockIndex(targetClientId);
						
						insertBlock(
							newBlock,
							insertAfter ? targetIndex + 1 : targetIndex,
							rootClientId,
							false
						);
					} else {
						// If no target found, insert at the end
						insertBlock(newBlock);
					}
				} catch (error) {
					console.error('Error handling block drop:', error);
				}
			};

			const handleDragOver = (event) => {
				event.preventDefault();
				event.stopPropagation();
				
				// Throttle the drag over handler
				if (handleDragOver.timeout) {
					return;
				}
				
				handleDragOver.timeout = setTimeout(() => {
					handleDragOver.timeout = null;
					
					// Get all block elements
					const blockElements = document.querySelectorAll('[data-block]');
					let closestBlock = null;
					let closestDistance = Infinity;
					let insertAfter = false;
					
					const dropPoint = {
						x: event.clientX,
						y: event.clientY
					};
					
					blockElements.forEach(block => {
						const rect = block.getBoundingClientRect();
						const blockCenter = {
							x: rect.left + rect.width / 2,
							y: rect.top + rect.height / 2
						};
						
						const distance = Math.sqrt(
							Math.pow(dropPoint.x - blockCenter.x, 2) + 
							Math.pow(dropPoint.y - blockCenter.y, 2)
						);
						
						if (distance < closestDistance) {
							closestDistance = distance;
							closestBlock = block;
							insertAfter = dropPoint.y > (rect.top + rect.height / 2);
						}
					});
					
					// Remove existing indicators
					document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(el => el.remove());
					
					if (closestBlock) {
						const rect = closestBlock.getBoundingClientRect();
						const indicator = document.createElement('div');
						indicator.className = 'wpzoom-forms-drop-indicator';
						
						Object.assign(indicator.style, {
							position: 'absolute',
							left: rect.left + 'px',
							right: (window.innerWidth - rect.right) + 'px',
							height: '2px',
							background: '#007cba',
							pointerEvents: 'none',
							zIndex: '9999',
							transition: 'transform 0.1s ease',
							top: insertAfter ? rect.bottom + 'px' : rect.top + 'px'
						});
						
						document.body.appendChild(indicator);
					}
				}, 50);
			};

			const handleDragEnd = () => {
				if (handleDragOver.timeout) {
					clearTimeout(handleDragOver.timeout);
					handleDragOver.timeout = null;
				}
				document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(el => el.remove());
			};

			// Add event listeners to the editor
			const editor = document.querySelector('.block-editor-block-list__layout');
			if (editor) {
				// Remove any existing event listeners first
				editor.removeEventListener('drop', handleDrop);
				editor.removeEventListener('dragover', handleDragOver);
				editor.removeEventListener('dragleave', handleDragEnd);
				editor.removeEventListener('dragend', handleDragEnd);
				editor.removeEventListener('mouseup', handleDragEnd);
				window.removeEventListener('blur', handleDragEnd);
				
				// Add new event listeners
				editor.addEventListener('drop', handleDrop, { capture: true });
				editor.addEventListener('dragover', handleDragOver);
				editor.addEventListener('dragleave', handleDragEnd);
				editor.addEventListener('dragend', handleDragEnd);
				editor.addEventListener('mouseup', handleDragEnd);
				window.addEventListener('blur', handleDragEnd);
			}

			// Add styles for drop indicator
			const style = document.createElement('style');
			style.textContent = `
				.wpzoom-forms-drop-indicator {
					position: absolute;
					left: 0;
					right: 0;
					height: 2px;
					background: #007cba;
					pointer-events: none;
					z-index: 9999;
					transition: transform 0.1s ease;
				}
				.wpzoom-forms-drop-indicator::before {
					content: '';
					position: absolute;
					left: 0;
					top: -4px;
					width: 8px;
					height: 8px;
					background: #007cba;
					border-radius: 50%;
				}
			`;
			document.head.appendChild(style);

			// Cleanup
			return () => {
				if (handleDragOver.timeout) {
					clearTimeout(handleDragOver.timeout);
				}
				const editor = document.querySelector('.block-editor-block-list__layout');
				if (editor) {
					editor.removeEventListener('drop', handleDrop);
					editor.removeEventListener('dragover', handleDragOver);
					editor.removeEventListener('dragleave', handleDragEnd);
					editor.removeEventListener('dragend', handleDragEnd);
					editor.removeEventListener('mouseup', handleDragEnd);
					window.removeEventListener('blur', handleDragEnd);
				}
				document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(el => el.remove());
			};
		}, []);

		return <div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Add Form Fields', 'wpzoom-forms')} initialOpen={true}>
					<div className="wpzoom-forms-block-patterns">
						<div className="wpzoom-forms-block-patterns-list">
							{[
								{
									name: 'multi-checkbox-field',
									title: __('Multi Checkbox', 'wpzoom-forms'),
									icon: FormIcons.multiCheckbox,
									defaultAttributes: {
										label: __('Multiple Choice', 'wpzoom-forms'),
										required: false,
										options: ['Option 1', 'Option 2', 'Option 3']
									}
								},
								{
									name: 'checkbox-field',
									title: __('Checkbox', 'wpzoom-forms'),
									icon: FormIcons.checkbox,
									defaultAttributes: {
										label: __('Checkbox', 'wpzoom-forms'),
										required: false
									}
								},
								{
									name: 'text-email-field',
									title: __('Email Input', 'wpzoom-forms'),
									icon: FormIcons.emailInput,
									defaultAttributes: {
										label: __('Email', 'wpzoom-forms'),
										required: true
									}
								},
								{
									name: 'label-field',
									title: __('Label', 'wpzoom-forms'),
									icon: FormIcons.label,
									defaultAttributes: {
										content: __('Label', 'wpzoom-forms')
									}
								},
								{
									name: 'text-name-field',
									title: __('Name Input', 'wpzoom-forms'),
									icon: FormIcons.nameInput,
									defaultAttributes: {
										label: __('Name', 'wpzoom-forms'),
										required: true
									}
								},
								{
									name: 'text-phone-field',
									title: __('Phone Input', 'wpzoom-forms'),
									icon: FormIcons.phoneInput,
									defaultAttributes: {
										label: __('Phone', 'wpzoom-forms'),
										required: false
									}
								},
								{
									name: 'text-plain-field',
									title: __('Text Input', 'wpzoom-forms'),
									icon: FormIcons.textInput,
									defaultAttributes: {
										label: __('Text', 'wpzoom-forms'),
										required: false
									}
								},
								{
									name: 'radio-field',
									title: __('Radio', 'wpzoom-forms'),
									icon: FormIcons.radio,
									defaultAttributes: {
										label: __('Radio', 'wpzoom-forms'),
										required: false,
										options: ['Option 1', 'Option 2', 'Option 3']
									}
								},
								{
									name: 'select-field',
									title: __('Select', 'wpzoom-forms'),
									icon: FormIcons.select,
									defaultAttributes: {
										label: __('Select', 'wpzoom-forms'),
										required: false,
										options: ['Option 1', 'Option 2', 'Option 3']
									}
								},
								{
									name: 'submit-field',
									title: __('Submit', 'wpzoom-forms'),
									icon: FormIcons.submit,
									defaultAttributes: {
										label: __('Submit', 'wpzoom-forms')
									}
								},
								{
									name: 'textarea-field',
									title: __('Textarea', 'wpzoom-forms'),
									icon: FormIcons.textarea,
									defaultAttributes: {
										label: __('Message', 'wpzoom-forms'),
										required: false,
										rows: 5
									}
								},
								{
									name: 'text-website-field',
									title: __('Website Input', 'wpzoom-forms'),
									icon: FormIcons.websiteInput,
									defaultAttributes: {
										label: __('Website', 'wpzoom-forms'),
										required: false
									}
								},
								{
									name: 'datepicker-field',
									title: __('Date', 'wpzoom-forms'),
									icon: FormIcons.date,
									defaultAttributes: {
										label: __('Date', 'wpzoom-forms'),
										required: false
									}
								}
							].map((block) => {
								const isDisabled = uniqueFieldsExist[block.name] || false;
								return (
									<div
										key={block.name}
										className={`wpzoom-forms-block-pattern-item${isDisabled ? ' disabled' : ''}`}
										draggable={!isDisabled}
										onDragStart={(event) => {
											if (isDisabled) {
												event.preventDefault();
												return;
											}
											event.dataTransfer.setData('text', JSON.stringify({
												type: `wpzoom-forms/${block.name}`,
												attributes: block.defaultAttributes
											}));
										}}
										onClick={(event) => {
											console.log('Quick form field clicked:', block.name);
											event.preventDefault();
											event.stopPropagation();
											insertFormField(block.name, block.defaultAttributes, isDisabled);
										}}
										title={isDisabled ? __('This field can only be used once per form', 'wpzoom-forms') : ''}
									>
										{block.icon}
										<span>{block.title}</span>
										{isDisabled && (
											<span className="dashicons dashicons-info" />
										)}
									</div>
								);
							})}
						</div>
					</div>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={[
					'wpzoom-forms/text-plain-field',
					'wpzoom-forms/text-name-field',
					'wpzoom-forms/text-email-field',
					'wpzoom-forms/text-website-field',
					'wpzoom-forms/text-phone-field',
					'wpzoom-forms/textarea-field',
					'wpzoom-forms/select-field',
					'wpzoom-forms/multi-checkbox-field',
					'wpzoom-forms/checkbox-field',
					'wpzoom-forms/radio-field',
					'wpzoom-forms/label-field',
					'wpzoom-forms/submit-field',
					'wpzoom-forms/datepicker-field'

				]}
				template={[
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
												'wpzoom-forms/text-name-field',
												{
													'id': 'input_name',
													'name': __('Name', 'wpzoom-blocks'),
													'type': 'text',
													'showLabel': true,
													'label': __('Name', 'wpzoom-blocks'),
													'required': true,
													'replyto': true,
													'className': 'fullwidth'
												}
											],
											[
												'wpzoom-forms/text-email-field',
												{
													'id': 'input_email',
													'name': __('Email', 'wpzoom-blocks'),
													'type': 'email',
													'showLabel': true,
													'label': __('Email', 'wpzoom-blocks'),
													'required': true,
													'replyto': true,
													'className': 'fullwidth'
												}
											],
											[
												'wpzoom-forms/text-plain-field',
												{
													'id': 'input_subject',
													'name': __('Subject', 'wpzoom-blocks'),
													'type': 'text',
													'showLabel': true,
													'label': __('Subject', 'wpzoom-blocks'),
													'required': true,
													'subject': true,
													'className': 'fullwidth'
												}
											],
											[
												'wpzoom-forms/textarea-field',
												{
													'id': 'input_message',
													'name': __('Message', 'wpzoom-blocks'),
													'cols': '55',
													'rows': '10',
													'showLabel': true,
													'label': __('Message', 'wpzoom-blocks'),
													'required': true,
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
												'wpzoom-forms/submit-field',
												{
													'id': 'input_submit',
													'name': __('Submit', 'wpzoom-blocks')
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
													'align': 'right',
													'content': __('Fields marked with <strong class="has-accent-color has-text-color">*</strong> are required.', 'wpzoom-blocks'),
													'dropCap': false,
													'style': {
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
				]}
			/>
		</div>;
	},
	save: () => {
		const blockProps = useBlockProps.save();

		return <div {...blockProps}>
			<InnerBlocks.Content />
		</div>;
	}
});