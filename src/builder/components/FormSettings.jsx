import { __ } from '@wordpress/i18n';

export default function FormSettings({ settings, onChange }) {
	return (
		<div className="wpzf-inspector">
			<div className="wpzf-inspector__header">
				<h3>{ __( 'Form Settings', 'wpzoom-forms' ) }</h3>
			</div>
			<div className="wpzf-inspector__body">
				<Row label={ __( 'Submit Button Text', 'wpzoom-forms' ) }>
					<input type="text" value={ settings.submitLabel || '' } onChange={ ( e ) => onChange( { submitLabel: e.target.value } ) } />
				</Row>

				<Row label={ __( 'Submit Button Alignment', 'wpzoom-forms' ) }>
					<div className="wpzf-segmented">
						{ [ 'left', 'center', 'right', 'full' ].map( ( v ) => (
							<button key={ v } type="button" className={ settings.submitAlign === v ? 'is-active' : '' } onClick={ () => onChange( { submitAlign: v } ) }>{ v.charAt(0).toUpperCase() + v.slice(1) }</button>
						) ) }
					</div>
				</Row>

				<Row label={ __( 'Labels Position', 'wpzoom-forms' ) }>
					<div className="wpzf-segmented">
						{ [ 'top', 'left', 'hidden' ].map( ( v ) => (
							<button key={ v } type="button" className={ settings.labelsPosition === v ? 'is-active' : '' } onClick={ () => onChange( { labelsPosition: v } ) }>{ v.charAt(0).toUpperCase() + v.slice(1) }</button>
						) ) }
					</div>
				</Row>

				<Row label={ __( 'Form Style', 'wpzoom-forms' ) }>
					<div className="wpzf-segmented">
						{ [ 'default', 'minimal', 'modern' ].map( ( v ) => (
							<button key={ v } type="button" className={ settings.theme === v ? 'is-active' : '' } onClick={ () => onChange( { theme: v } ) }>{ v.charAt(0).toUpperCase() + v.slice(1) }</button>
						) ) }
					</div>
				</Row>

				<Row label="">
					<label className="wpzf-toggle">
						<input type="checkbox" checked={ !! settings.showRequiredMark } onChange={ ( e ) => onChange( { showRequiredMark: e.target.checked } ) } />
						<span>{ __( 'Show required-field asterisk (*)', 'wpzoom-forms' ) }</span>
					</label>
				</Row>

				<Row label="">
					<label className="wpzf-toggle">
						<input type="checkbox" checked={ !! settings.honeypot } onChange={ ( e ) => onChange( { honeypot: e.target.checked } ) } />
						<span>{ __( 'Enable spam honeypot field', 'wpzoom-forms' ) }</span>
					</label>
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
