import { __ } from '@wordpress/i18n';
import { Icon } from '../icons';
import { cls } from '../utils';

const FIELD_GROUPS = [
	{
		id: 'standard',
		label: 'Standard Fields',
		types: [ 'text', 'name', 'email', 'tel', 'url', 'number', 'textarea' ],
	},
	{
		id: 'choice',
		label: 'Choice Fields',
		types: [ 'select', 'radio', 'checkboxes', 'checkbox' ],
	},
	{
		id: 'advanced',
		label: 'Advanced',
		types: [ 'date', 'hidden' ],
	},
	{
		id: 'layout',
		label: 'Layout',
		types: [ 'heading', 'paragraph', 'divider' ],
	},
];

const TYPE_LABELS = {
	text:       'Single Line Text',
	name:       'Name',
	email:      'Email',
	tel:        'Phone',
	url:        'Website / URL',
	number:     'Number',
	textarea:   'Paragraph Text',
	select:     'Dropdown',
	radio:      'Multiple Choice',
	checkboxes: 'Checkboxes',
	checkbox:   'Single Checkbox',
	date:       'Date',
	hidden:     'Hidden',
	heading:    'Heading',
	paragraph:  'Paragraph',
	divider:    'Divider',
};

const TYPE_ICONS = {
	text: 'text', name: 'user', email: 'email', tel: 'phone',
	url: 'link', number: 'number', textarea: 'paragraph',
	select: 'select', radio: 'radio', checkboxes: 'checkboxes', checkbox: 'checkbox',
	date: 'date', hidden: 'hidden',
	heading: 'heading', paragraph: 'paragraph', divider: 'divider',
};

export default function LeftSidebar({ activeTab, onTab, onAddField }) {
	return (
		<aside className="wpzf-sidebar wpzf-sidebar--left">
			<nav className="wpzf-tabs" role="tablist">
				<button
					role="tab"
					className={ cls( 'wpzf-tab', activeTab === 'fields' && 'is-active' ) }
					onClick={ () => onTab( 'fields' ) }
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13H5v-2h14v2z M13 5v14h-2V5z"/></svg>
					{ __( 'Add Field', 'wpzoom-forms' ) }
				</button>
				<button
					role="tab"
					className={ cls( 'wpzf-tab', activeTab === 'form-settings' && 'is-active' ) }
					onClick={ () => onTab( 'form-settings' ) }
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm9.4 2.5l-2-.4a7.5 7.5 0 00-.4-1l1.3-1.6-1.8-1.8-1.6 1.3a7.5 7.5 0 00-1-.4l-.4-2h-2.6l-.4 2c-.3.1-.7.2-1 .4L9.9 5.7 8.1 7.5l1.3 1.6c-.2.3-.3.6-.4 1l-2 .4v2.6l2 .4c.1.3.2.7.4 1l-1.3 1.6 1.8 1.8 1.6-1.3c.3.2.6.3 1 .4l.4 2h2.6l.4-2c.3-.1.7-.2 1-.4l1.6 1.3 1.8-1.8-1.3-1.6c.2-.3.3-.6.4-1l2-.4v-2.6z"/></svg>
					{ __( 'Form Settings', 'wpzoom-forms' ) }
				</button>
				<button
					role="tab"
					className={ cls( 'wpzf-tab', activeTab === 'notifications' && 'is-active' ) }
					onClick={ () => onTab( 'notifications' ) }
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7v5l-2 2v1h18v-1l-2-2V9a7 7 0 00-7-7zm0 20a2 2 0 002-2h-4a2 2 0 002 2z"/></svg>
					{ __( 'Notifications', 'wpzoom-forms' ) }
				</button>
			</nav>

			{ activeTab === 'fields' && (
				<div className="wpzf-palette">
					{ FIELD_GROUPS.map( ( group ) => (
						<div className="wpzf-palette__group" key={ group.id }>
							<h3 className="wpzf-palette__title">{ group.label }</h3>
							<div className="wpzf-palette__grid">
								{ group.types.map( ( type ) => (
									<button
										key={ type }
										className="wpzf-palette__item"
										draggable
										onDragStart={ ( e ) => {
											e.dataTransfer.setData( 'wpzf/new-field', type );
											e.dataTransfer.effectAllowed = 'copy';
										} }
										onClick={ () => onAddField( type ) }
										title={ TYPE_LABELS[ type ] }
									>
										<span className="wpzf-palette__icon"><Icon name={ TYPE_ICONS[ type ] } size={ 18 } /></span>
										<span className="wpzf-palette__label">{ TYPE_LABELS[ type ] }</span>
									</button>
								) ) }
							</div>
						</div>
					) ) }
				</div>
			) }

			{ activeTab === 'form-settings' && (
				<div className="wpzf-sidehint">
					<p>{ __( 'Form settings are shown in the panel on the right.', 'wpzoom-forms' ) }</p>
				</div>
			) }
			{ activeTab === 'notifications' && (
				<div className="wpzf-sidehint">
					<p>{ __( 'Notification settings are shown in the panel on the right.', 'wpzoom-forms' ) }</p>
				</div>
			) }
		</aside>
	);
}
