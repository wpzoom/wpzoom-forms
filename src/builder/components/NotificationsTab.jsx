import { __ } from '@wordpress/i18n';

const METHODS = [
	{ value: 'email',    label: 'Email Only',         hint: 'Send the submission via email.' },
	{ value: 'db',       label: 'Database Only',      hint: 'Save submissions in WordPress only.' },
	{ value: 'combined', label: 'Email + Database',   hint: 'Send via email AND save in WordPress.' },
];

export default function NotificationsTab({ notifications, onChange }) {
	return (
		<div className="wpzf-inspector">
			<div className="wpzf-inspector__header">
				<h3>{ __( 'Notifications & Confirmation', 'wpzoom-forms' ) }</h3>
			</div>
			<div className="wpzf-inspector__body">
				<Row label={ __( 'How to handle submissions', 'wpzoom-forms' ) }>
					<div className="wpzf-method-list">
						{ METHODS.map( ( m ) => (
							<label key={ m.value } className={ 'wpzf-method' + ( notifications.method === m.value ? ' is-active' : '' ) }>
								<input type="radio" name="wpzf-method" value={ m.value } checked={ notifications.method === m.value } onChange={ () => onChange( { method: m.value } ) } />
								<span className="wpzf-method__name">{ m.label }</span>
								<span className="wpzf-method__hint">{ m.hint }</span>
							</label>
						) ) }
					</div>
				</Row>

				{ ( notifications.method === 'email' || notifications.method === 'combined' ) && (
					<>
						<Row label={ __( 'Send notifications to', 'wpzoom-forms' ) }>
							<input type="email" value={ notifications.email || '' } onChange={ ( e ) => onChange( { email: e.target.value } ) } placeholder="you@example.com" />
						</Row>
						<Row label={ __( 'Email subject', 'wpzoom-forms' ) }>
							<input type="text" value={ notifications.subject || '' } onChange={ ( e ) => onChange( { subject: e.target.value } ) } />
						</Row>
					</>
				) }

				<Row label={ __( 'Success message', 'wpzoom-forms' ) }>
					<textarea rows={ 2 } value={ notifications.successMessage || '' } onChange={ ( e ) => onChange( { successMessage: e.target.value } ) } />
				</Row>

				<Row label={ __( 'Failure message', 'wpzoom-forms' ) }>
					<textarea rows={ 2 } value={ notifications.failureMessage || '' } onChange={ ( e ) => onChange( { failureMessage: e.target.value } ) } />
				</Row>
			</div>
		</div>
	);
}

function Row({ label, children }) {
	return (
		<div className="wpzf-row">
			{ label !== '' && <label className="wpzf-row__label">{ label }</label> }
			<div className="wpzf-row__control">{ children }</div>
		</div>
	);
}
