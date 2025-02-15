import { useBlockProps, InspectorControls, InnerBlocks, RichText } from '@wordpress/block-editor';
import { registerBlockType, updateCategory } from '@wordpress/blocks';
import { Card, CardBody, CardHeader, Disabled, Flex, FlexBlock, FlexItem, IconButton, PanelBody, RangeControl, SelectControl, TextControl, ToggleControl, ClipboardButton, Icon, __experimentalHStack as HStack, Button } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect, dispatch } from '@wordpress/data';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { __, setLocaleData, sprintf } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { default as WelcomeGuide } from './welcome';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

updateCategory('wpzoom-forms', {
	icon: (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z" fill="#164777" />
			<path d="M5.276 12.084H6.032L8.156 7.224L10.268 12.084H11.024L13.148 5.316H13.988V4.104H10.628V5.316H11.708L10.508 9.468L8.552 4.872H7.832L5.876 9.468L4.592 5.316H5.636V4.104H2.276V5.316H3.116L5.276 12.084Z" fill="white" />
		</svg>
	)
});

// Icons for form fields
const fieldIcons = {
	text: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 19h16v-12h-16v12zm7-10h2v2h-2v-2zm0 4h2v2h-2v-2zm-3-4h2v2h-2v-2zm0 4h2v2h-2v-2zm-3-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path></svg>,
	email: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>,
	textArea: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"></path></svg>,
	phone: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>,
	website: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c-.43-1.43-1.08-2.76-1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>,
	checkbox: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>,
	radio: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle cx="12" cy="12" r="5"></circle></svg>,
	select: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg>,
	date: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></svg>,
	label: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>,
	submit: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
};

// Form field definitions
const formFields = [
	{
		type: 'wpzoom-forms/text-plain-field',
		title: __('Text Field', 'wpzoom-forms'),
		icon: fieldIcons.text,
		attributes: {
			label: __('Text Field', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/text-name-field',
		title: __('Name Field', 'wpzoom-forms'),
		icon: fieldIcons.text,
		attributes: {
			label: __('Name', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/text-email-field',
		title: __('Email Field', 'wpzoom-forms'),
		icon: fieldIcons.email,
		attributes: {
			label: __('Email', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/text-phone-field',
		title: __('Phone Field', 'wpzoom-forms'),
		icon: fieldIcons.phone,
		attributes: {
			label: __('Phone', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/text-website-field',
		title: __('Website Field', 'wpzoom-forms'),
		icon: fieldIcons.website,
		attributes: {
			label: __('Website', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/textarea-field',
		title: __('Text Area', 'wpzoom-forms'),
		icon: fieldIcons.textArea,
		attributes: {
			label: __('Message', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/select-field',
		title: __('Select Field', 'wpzoom-forms'),
		icon: fieldIcons.select,
		attributes: {
			label: __('Select', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/checkbox-field',
		title: __('Checkbox', 'wpzoom-forms'),
		icon: fieldIcons.checkbox,
		attributes: {
			label: __('Checkbox', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/multi-checkbox-field',
		title: __('Multi Checkbox', 'wpzoom-forms'),
		icon: fieldIcons.checkbox,
		attributes: {
			label: __('Multi Checkbox', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/radio-field',
		title: __('Radio Field', 'wpzoom-forms'),
		icon: fieldIcons.radio,
		attributes: {
			label: __('Radio', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/datepicker-field',
		title: __('Date Picker', 'wpzoom-forms'),
		icon: fieldIcons.date,
		attributes: {
			label: __('Date', 'wpzoom-forms'),
			showLabel: true
		}
	},
	{
		type: 'wpzoom-forms/label-field',
		title: __('Label', 'wpzoom-forms'),
		icon: fieldIcons.label,
		attributes: {
			content: __('Label', 'wpzoom-forms')
		}
	},
	{
		type: 'wpzoom-forms/submit-field',
		title: __('Submit Button', 'wpzoom-forms'),
		icon: fieldIcons.submit,
		attributes: {
			text: __('Submit', 'wpzoom-forms')
		}
	}
];

// Add Form Fields Panel Component
const AddFormFieldsPanel = () => {
	const { insertBlocks } = dispatch('core/block-editor');
	const { getSelectedBlock, getBlocks } = useSelect(select => ({
		getSelectedBlock: select('core/block-editor').getSelectedBlock,
		getBlocks: select('core/block-editor').getBlocks
	}));
	
	const insertField = (field) => {
		const block = wp.blocks.createBlock(field.type, field.attributes);
		const selectedBlock = getSelectedBlock();
		const blocks = getBlocks();
		
		// Find the form block (it's the first block with innerBlocks)
		const formBlock = blocks.find(block => block.name === 'wpzoom-forms/form');
		
		if (!formBlock) {
			return; // No form block found
		}

		// Get the innermost column block where we should insert the field
		const getInnerColumn = (blocks) => {
			for (const block of blocks) {
				if (block.name === 'core/column' && (!block.innerBlocks || block.innerBlocks.length === 0)) {
					return block;
				}
				if (block.innerBlocks && block.innerBlocks.length > 0) {
					const innerColumn = getInnerColumn(block.innerBlocks);
					if (innerColumn) {
						return innerColumn;
					}
				}
			}
			return null;
		};

		const targetColumn = getInnerColumn(formBlock.innerBlocks);
		
		if (targetColumn) {
			// Insert into the empty column
			insertBlocks(block, 0, targetColumn.clientId);
		} else {
			// If no empty column found, insert at the end of the form
			insertBlocks(block, undefined, formBlock.clientId);
		}
	};

	return (
		<PluginDocumentSettingPanel
			name="wpzoom-forms-add-fields"
			className="wpzoom-forms-add-fields"
			title={__('Add Form Fields', 'wpzoom-forms')}
		>
			<div className="wpzoom-forms-field-buttons">
				{formFields.map((field, index) => (
					<Button
						key={index}
						variant="secondary"
						className="wpzoom-forms-add-field-button"
						onClick={() => insertField(field)}
						icon={field.icon}
					>
						{field.title}
					</Button>
				))}
			</div>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin('wpzoom-forms-settings', {
	render: props => {
		const postID = useSelect(select => select('core/editor').getCurrentPostId(), []);
		const postType = useSelect(select => select('core/editor').getCurrentPostType(), []);
		const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
		const formMethod = meta._form_method || 'db';
		const formEmail = meta._form_email || '';
		const formSubject = meta._form_subject || '';

		// Check if we're on the form editor page
		if (postType !== 'wpzf-form') {
			return null;
		}

		// Check if any text field is marked as subject
		const isTextPlainFieldWithSubject = useSelect(select => {
			const blocks = select('core/block-editor').getBlocks();
			return blocks.some(block => 
				block.name === 'wpzoom-forms/text-plain-field' && 
				block.attributes.subject === true
			);
		}, []);

		return <>
			<WelcomeGuide />
			<PluginDocumentSettingPanel
				name="wpzoom-forms-document-settings"
				className="wpzoom-forms-document-settings"
				title={__('Form Settings', 'wpzoom-forms')}
				opened={true}
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
					disabled={isTextPlainFieldWithSubject}
				/>
				{isTextPlainFieldWithSubject && (
					<note><i>{__('Your form already includes a field that is marked as the Subject. Uncheck its "Is Subject" option if you want to set a custom subject here.', 'wpzoom-forms')}</i></note>
				)}
			</PluginDocumentSettingPanel>
			<AddFormFieldsPanel />
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

		return <div {...blockProps}>
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