import { __ } from '@wordpress/i18n';

const HAS_LABEL    = [ 'text', 'name', 'email', 'tel', 'url', 'number', 'textarea', 'date', 'select', 'radio', 'checkboxes', 'checkbox', 'hidden' ];
const HAS_PLACEHOLDER = [ 'text', 'name', 'email', 'tel', 'url', 'number', 'textarea', 'date', 'select' ];
const HAS_REQUIRED = [ 'text', 'name', 'email', 'tel', 'url', 'number', 'textarea', 'date', 'select', 'radio', 'checkboxes', 'checkbox' ];
const HAS_HELP     = [ 'text', 'name', 'email', 'tel', 'url', 'number', 'textarea', 'date', 'select', 'radio', 'checkboxes', 'checkbox' ];
const HAS_DEFAULT  = [ 'text', 'name', 'email', 'tel', 'url', 'number', 'date', 'select', 'hidden' ];
const HAS_OPTIONS  = [ 'select', 'radio', 'checkboxes' ];

const WIDTH_OPTIONS = [
	{ value: 'full',       label: 'Full Width' },
	{ value: 'half',       label: '1/2' },
	{ value: 'third',      label: '1/3' },
	{ value: 'two-thirds', label: '2/3' },
];

export default function FieldSettings({ field, onChange }) {
	const set = ( patch ) => onChange( patch );

	return (
		<div className="wpzf-inspector">
			<div className="wpzf-inspector__header">
				<h3>{ __( 'Field Settings', 'wpzoom-forms' ) }</h3>
				<span className="wpzf-inspector__type">{ field.type }</span>
			</div>

			<div className="wpzf-inspector__body">
				{ HAS_LABEL.includes( field.type ) && (
					<Row label={ __( 'Label', 'wpzoom-forms' ) }>
						<input type="text" value={ field.label || '' } onChange={ ( e ) => set( { label: e.target.value } ) } />
					</Row>
				) }

				{ field.type === 'heading' && (
					<>
						<Row label={ __( 'Text', 'wpzoom-forms' ) }>
							<input type="text" value={ field.text || '' } onChange={ ( e ) => set( { text: e.target.value } ) } />
						</Row>
						<Row label={ __( 'Heading Level', 'wpzoom-forms' ) }>
							<select value={ field.level || 'h3' } onChange={ ( e ) => set( { level: e.target.value } ) }>
								<option value="h2">H2</option><option value="h3">H3</option><option value="h4">H4</option><option value="h5">H5</option>
							</select>
						</Row>
					</>
				) }

				{ field.type === 'paragraph' && (
					<Row label={ __( 'Text', 'wpzoom-forms' ) }>
						<textarea rows={ 4 } value={ field.text || '' } onChange={ ( e ) => set( { text: e.target.value } ) } />
					</Row>
				) }

				{ HAS_PLACEHOLDER.includes( field.type ) && (
					<Row label={ __( 'Placeholder', 'wpzoom-forms' ) }>
						<input type="text" value={ field.placeholder || '' } onChange={ ( e ) => set( { placeholder: e.target.value } ) } />
					</Row>
				) }

				{ HAS_DEFAULT.includes( field.type ) && (
					<Row label={ __( 'Default Value', 'wpzoom-forms' ) }>
						<input type="text" value={ field.defaultValue || '' } onChange={ ( e ) => set( { defaultValue: e.target.value } ) } />
					</Row>
				) }

				{ field.type === 'textarea' && (
					<Row label={ __( 'Rows', 'wpzoom-forms' ) }>
						<input type="number" min="1" max="20" value={ field.rows || 4 } onChange={ ( e ) => set( { rows: parseInt( e.target.value, 10 ) || 4 } ) } />
					</Row>
				) }

				{ field.type === 'number' && (
					<>
						<Row label={ __( 'Min', 'wpzoom-forms' ) }>
							<input type="number" value={ field.min == null ? '' : field.min } onChange={ ( e ) => set( { min: e.target.value === '' ? null : parseFloat( e.target.value ) } ) } />
						</Row>
						<Row label={ __( 'Max', 'wpzoom-forms' ) }>
							<input type="number" value={ field.max == null ? '' : field.max } onChange={ ( e ) => set( { max: e.target.value === '' ? null : parseFloat( e.target.value ) } ) } />
						</Row>
						<Row label={ __( 'Step', 'wpzoom-forms' ) }>
							<input type="number" step="any" value={ field.step == null ? '' : field.step } onChange={ ( e ) => set( { step: e.target.value === '' ? null : parseFloat( e.target.value ) } ) } />
						</Row>
					</>
				) }

				{ field.type === 'checkbox' && (
					<Row label={ __( 'Checkbox Label', 'wpzoom-forms' ) }>
						<input type="text" value={ field.checkboxText || '' } onChange={ ( e ) => set( { checkboxText: e.target.value } ) } />
					</Row>
				) }

				{ field.type === 'email' && (
					<Row label="">
						<label className="wpzf-toggle">
							<input type="checkbox" checked={ !! field.isReplyTo } onChange={ ( e ) => set( { isReplyTo: e.target.checked } ) } />
							<span>{ __( 'Use as reply-to address', 'wpzoom-forms' ) }</span>
						</label>
					</Row>
				) }

				{ field.type === 'text' && (
					<Row label="">
						<label className="wpzf-toggle">
							<input type="checkbox" checked={ !! field.isSubject } onChange={ ( e ) => set( { isSubject: e.target.checked } ) } />
							<span>{ __( 'Use as email subject', 'wpzoom-forms' ) }</span>
						</label>
					</Row>
				) }

				{ HAS_OPTIONS.includes( field.type ) && (
					<OptionsEditor options={ field.options || [] } onChange={ ( options ) => set( { options } ) } />
				) }

				{ HAS_REQUIRED.includes( field.type ) && (
					<Row label="">
						<label className="wpzf-toggle">
							<input type="checkbox" checked={ !! field.required } onChange={ ( e ) => set( { required: e.target.checked } ) } />
							<span>{ __( 'Required', 'wpzoom-forms' ) }</span>
						</label>
					</Row>
				) }

				{ HAS_HELP.includes( field.type ) && (
					<Row label={ __( 'Help text', 'wpzoom-forms' ) }>
						<textarea rows={ 2 } value={ field.help || '' } onChange={ ( e ) => set( { help: e.target.value } ) } />
					</Row>
				) }

				<Row label={ __( 'Width', 'wpzoom-forms' ) }>
					<div className="wpzf-segmented">
						{ WIDTH_OPTIONS.map( ( w ) => (
							<button key={ w.value } type="button" className={ ( field.width || 'full' ) === w.value ? 'is-active' : '' } onClick={ () => set( { width: w.value } ) }>{ w.label }</button>
						) ) }
					</div>
				</Row>

				<Row label={ __( 'CSS Class', 'wpzoom-forms' ) }>
					<input type="text" value={ field.cssClass || '' } onChange={ ( e ) => set( { cssClass: e.target.value } ) } />
				</Row>

				<Row label={ __( 'Field ID', 'wpzoom-forms' ) }>
					<input type="text" value={ field.id } disabled />
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

function OptionsEditor({ options, onChange }) {
	const update = ( i, patch ) => {
		const next = options.slice();
		next[ i ] = { ...next[ i ], ...patch };
		onChange( next );
	};
	const remove = ( i ) => onChange( options.filter( ( _, idx ) => idx !== i ) );
	const add    = () => onChange( [ ...options, { label: 'Option ' + ( options.length + 1 ), value: 'option-' + ( options.length + 1 ) } ] );
	const slugify = ( s ) => String( s ).toLowerCase().trim().replace( /\s+/g, '-' ).replace( /[^a-z0-9-]/g, '' );

	return (
		<div className="wpzf-row">
			<label className="wpzf-row__label">{ __( 'Options', 'wpzoom-forms' ) }</label>
			<div className="wpzf-options">
				{ options.map( ( o, i ) => (
					<div className="wpzf-option" key={ i }>
						<input
							type="text"
							value={ o.label }
							placeholder={ __( 'Label', 'wpzoom-forms' ) }
							onChange={ ( e ) => {
								const label = e.target.value;
								const wasAutoValue = o.value === slugify( o.label );
								update( i, wasAutoValue ? { label, value: slugify( label ) } : { label } );
							} }
						/>
						<input type="text" value={ o.value } placeholder="value" onChange={ ( e ) => update( i, { value: e.target.value } ) } />
						<button type="button" className="wpzf-icon-btn wpzf-icon-btn--danger" onClick={ () => remove( i ) }>×</button>
					</div>
				) ) }
				<button type="button" className="wpzf-btn wpzf-btn--ghost wpzf-btn--small" onClick={ add }>+ { __( 'Add option', 'wpzoom-forms' ) }</button>
			</div>
		</div>
	);
}
