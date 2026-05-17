import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { api } from '../api';

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

const DATE_FORMATS = [
	{ value: 'Y-m-d',  label: 'YYYY-MM-DD (2026-05-17)' },
	{ value: 'F j, Y', label: 'Month D, YYYY (May 17, 2026)' },
	{ value: 'm/d/Y',  label: 'MM/DD/YYYY (05/17/2026)' },
	{ value: 'd/m/Y',  label: 'DD/MM/YYYY (17/05/2026)' },
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

				{ field.type === 'date' && (
					<>
						<Row label={ __( 'Mode', 'wpzoom-forms' ) }>
							<div className="wpzf-segmented">
								{ [ 'single', 'multiple', 'range' ].map( ( v ) => (
									<button key={ v } type="button" className={ ( field.mode || 'single' ) === v ? 'is-active' : '' } onClick={ () => set( { mode: v } ) }>
										{ v === 'single' ? __( 'Single', 'wpzoom-forms' ) : v === 'multiple' ? __( 'Multiple', 'wpzoom-forms' ) : __( 'Range', 'wpzoom-forms' ) }
									</button>
								) ) }
							</div>
						</Row>
						<Row label={ __( 'Date Format', 'wpzoom-forms' ) }>
							<select value={ field.format || 'Y-m-d' } onChange={ ( e ) => set( { format: e.target.value } ) }>
								{ DATE_FORMATS.map( ( f ) => <option key={ f.value } value={ f.value }>{ f.label }</option> ) }
							</select>
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

/* ───────────────── Options editor ───────────────── */

function slugify( s ) {
	return String( s ).toLowerCase().trim().replace( /\s+/g, '-' ).replace( /[^a-z0-9-]/g, '' );
}

function OptionsEditor({ options, onChange }) {
	const [ bulk, setBulk ] = useState( false );

	const update = ( i, patch ) => {
		const next = options.slice();
		next[ i ] = { ...next[ i ], ...patch };
		onChange( next );
	};
	const remove = ( i ) => onChange( options.filter( ( _, idx ) => idx !== i ) );
	const add    = () => onChange( [ ...options, { label: 'Option ' + ( options.length + 1 ), value: 'option-' + ( options.length + 1 ) } ] );

	// HTML5 drag-and-drop reorder.
	const [ dragIdx, setDragIdx ] = useState( null );
	const onDragStart = ( e, idx ) => {
		setDragIdx( idx );
		e.dataTransfer.effectAllowed = 'move';
		try { e.dataTransfer.setData( 'text/plain', String( idx ) ); } catch ( _ ) {}
	};
	const onDragOver = ( e ) => { e.preventDefault(); };
	const onDrop = ( e, idx ) => {
		e.preventDefault();
		if ( dragIdx === null || dragIdx === idx ) return;
		const next = options.slice();
		const [ item ] = next.splice( dragIdx, 1 );
		next.splice( idx, 0, item );
		onChange( next );
		setDragIdx( null );
	};
	const onDragEnd = () => setDragIdx( null );

	return (
		<div className="wpzf-row">
			<div className="wpzf-row__label-row">
				<label className="wpzf-row__label">{ __( 'Options', 'wpzoom-forms' ) }</label>
				<button type="button" className="wpzf-link-btn" onClick={ () => setBulk( true ) }>
					{ __( 'Bulk Edit', 'wpzoom-forms' ) }
				</button>
			</div>
			<div className="wpzf-options">
				{ options.map( ( o, i ) => (
					<div
						className={ 'wpzf-option' + ( dragIdx === i ? ' is-dragging' : '' ) }
						key={ i }
						draggable
						onDragStart={ ( e ) => onDragStart( e, i ) }
						onDragOver={ onDragOver }
						onDrop={ ( e ) => onDrop( e, i ) }
						onDragEnd={ onDragEnd }
					>
						<span className="wpzf-option__handle" title={ __( 'Drag to reorder', 'wpzoom-forms' ) } aria-hidden="true">
							<svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor"><circle cx="2" cy="2" r="1.2"/><circle cx="8" cy="2" r="1.2"/><circle cx="2" cy="7" r="1.2"/><circle cx="8" cy="7" r="1.2"/><circle cx="2" cy="12" r="1.2"/><circle cx="8" cy="12" r="1.2"/></svg>
						</span>
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

			{ bulk && (
				<BulkOptionsModal
					initial={ options }
					onApply={ ( next ) => { onChange( next ); setBulk( false ); } }
					onClose={ () => setBulk( false ) }
				/>
			) }
		</div>
	);
}

/* ───────────────── Bulk options modal (with predefined lists) ───────────────── */

function BulkOptionsModal({ initial, onApply, onClose }) {
	const [ text, setText ]   = useState( ( initial || [] ).map( ( o ) => o.label ).join( '\n' ) );
	const [ lists, setLists ] = useState( null );
	const [ loadErr, setLoadErr ] = useState( '' );

	useEffect( () => {
		api.getOptionLists().then( setLists ).catch( ( e ) => setLoadErr( e.message || '' ) );
	}, [] );

	const apply = () => {
		const next = text.split( /\r?\n/ ).map( ( l ) => l.trim() ).filter( Boolean ).map( ( label ) => ( { label, value: slugify( label ) } ) );
		onApply( next );
	};

	const useList = ( items ) => {
		const existing = text.trim();
		setText( ( existing ? existing + '\n' : '' ) + items.join( '\n' ) );
	};

	return (
		<div className="wpzf-modal" role="dialog" aria-modal="true" onClick={ onClose }>
			<div className="wpzf-modal__inner wpzf-modal__inner--wide" onClick={ ( e ) => e.stopPropagation() }>
				<div className="wpzf-modal__header">
					<h2>{ __( 'Bulk Edit Options', 'wpzoom-forms' ) }</h2>
					<button className="wpzf-icon-btn" onClick={ onClose } aria-label={ __( 'Close', 'wpzoom-forms' ) }>×</button>
				</div>
				<div className="wpzf-modal__body">
					<p className="wpzf-hint">{ __( 'Each line is a new option. Values are generated from labels.', 'wpzoom-forms' ) }</p>
					<textarea
						className="wpzf-bulk__textarea"
						rows={ 12 }
						value={ text }
						onChange={ ( e ) => setText( e.target.value ) }
						placeholder={ __( 'Option one\nOption two\nOption three', 'wpzoom-forms' ) }
					/>
					{ ! loadErr && lists && lists.length > 0 && (
						<div className="wpzf-bulk__lists">
							<span className="wpzf-bulk__lists-label">{ __( 'Predefined lists:', 'wpzoom-forms' ) }</span>
							{ lists.map( ( l ) => (
								<button key={ l.id } type="button" className="wpzf-btn wpzf-btn--ghost wpzf-btn--small" onClick={ () => useList( l.items ) }>
									{ l.label }
								</button>
							) ) }
						</div>
					) }
				</div>
				<div className="wpzf-modal__footer">
					<button className="wpzf-btn wpzf-btn--ghost" onClick={ onClose }>{ __( 'Cancel', 'wpzoom-forms' ) }</button>
					<button className="wpzf-btn wpzf-btn--primary" onClick={ apply }>{ __( 'Apply', 'wpzoom-forms' ) }</button>
				</div>
			</div>
		</div>
	);
}
