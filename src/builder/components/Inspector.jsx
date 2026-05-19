import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import FieldSettings from './FieldSettings.jsx';
import FormSettings from './FormSettings.jsx';
import NotificationsTab from './NotificationsTab.jsx';

export default function Inspector({
	activeTab,
	selectedField,
	form,
	onSelectFieldsTab,
	onUpdateField,
	onUpdateSettings,
	onUpdateNotifications,
	onTab,
}) {
	return (
		<aside className="wpzf-sidebar wpzf-sidebar--right">
			{ activeTab === 'fields' && selectedField && (
				<FieldSettings
					field={ selectedField }
					onChange={ onUpdateField }
				/>
			) }

			{ activeTab === 'fields' && ! selectedField && (
				<div className="wpzf-inspector-empty">
					<svg width="48" height="48" viewBox="0 0 24 24" fill="#ccc"><path d="M12 2l9 4.9V17L12 22 3 17V6.9L12 2z"/></svg>
					<h3>{ __( 'Select a field', 'wpzoom-forms' ) }</h3>
					<p>{ __( 'Click any field in the form preview to edit its properties here.', 'wpzoom-forms' ) }</p>
					<Button
						variant="secondary"
						onClick={ () => onTab( 'form-settings' ) }
					>
						{ __( 'Edit Form Settings', 'wpzoom-forms' ) }
					</Button>

				</div>
			) }

			{ activeTab === 'form-settings' && (
				<FormSettings settings={ form.schema.settings } onChange={ onUpdateSettings } />
			) }

			{ activeTab === 'notifications' && (
				<NotificationsTab notifications={ form.notifications } onChange={ onUpdateNotifications } />
			) }
		</aside>
	);
}
