import { __ } from '@wordpress/i18n';
import {
	TextControl,
	TextareaControl,
	RadioControl,
} from '@wordpress/components';

const METHODS = [
	{ value: 'email',    label: __( 'Email Only', 'wpzoom-forms' ) },
	{ value: 'db',       label: __( 'Database Only', 'wpzoom-forms' ) },
	{ value: 'combined', label: __( 'Email + Database', 'wpzoom-forms' ) },
];

export default function NotificationsTab({ notifications, onChange }) {
	return (
		<div className="wpzf-inspector">
			<div className="wpzf-inspector__header">
				<h3>{ __( 'Notifications & Confirmation', 'wpzoom-forms' ) }</h3>
			</div>
			<div className="wpzf-inspector__body">
				<RadioControl
					label={ __( 'How to handle submissions', 'wpzoom-forms' ) }
					selected={ notifications.method }
					options={ METHODS }
					onChange={ ( v ) => onChange( { method: v } ) }
				/>

				{ ( notifications.method === 'email' || notifications.method === 'combined' ) && (
					<>
						<TextControl
							label={ __( 'Send notifications to', 'wpzoom-forms' ) }
							type="email"
							value={ notifications.email || '' }
							onChange={ ( v ) => onChange( { email: v } ) }
							placeholder="you@example.com"
						/>
						<TextControl
							label={ __( 'Email subject', 'wpzoom-forms' ) }
							value={ notifications.subject || '' }
							onChange={ ( v ) => onChange( { subject: v } ) }
						/>
					</>
				) }

				<TextareaControl
					label={ __( 'Success message', 'wpzoom-forms' ) }
					rows={ 2 }
					value={ notifications.successMessage || '' }
					onChange={ ( v ) => onChange( { successMessage: v } ) }
				/>

				<TextareaControl
					label={ __( 'Failure message', 'wpzoom-forms' ) }
					rows={ 2 }
					value={ notifications.failureMessage || '' }
					onChange={ ( v ) => onChange( { failureMessage: v } ) }
				/>
			</div>
		</div>
	);
}
