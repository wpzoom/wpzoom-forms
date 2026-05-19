import { __ } from '@wordpress/i18n';
import { Icon } from '../icons';

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

export default function LeftSidebar({ onAddField }) {
	return (
		<aside className="wpzf-sidebar wpzf-sidebar--left">
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
		</aside>
	);
}
