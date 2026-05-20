import { __ } from '@wordpress/i18n';
import { cls } from '../utils';

/**
 * Renders a field preview inside the canvas. Click selects, hover shows actions.
 * The preview is intentionally non-interactive (pointer-events readonly).
 */
export default function FieldCard({ field, settings, selected, onSelect, onDelete, onDuplicate }) {
	const showLabel = settings.labelsPosition !== 'hidden' && field.type !== 'checkbox' && field.label;
	const reqMark = field.required && settings.showRequiredMark ? <span className="wpzf-required"> *</span> : null;

	return (
		<div
			className={ cls( 'wpzf-field-card', 'wpzf-field-card--type-' + field.type, selected && 'is-selected' ) }
			onClick={ ( e ) => { e.stopPropagation(); onSelect(); } }
			role="button"
			tabIndex={ 0 }
			onKeyDown={ ( e ) => { if ( e.key === 'Enter' || e.key === ' ' ) { e.preventDefault(); onSelect(); } } }
		>
			<div className="wpzf-field-card__drag" title={ __( 'Drag to reorder', 'wpzoom-forms' ) }>
				<svg width="12" height="18" viewBox="0 0 12 18" fill="currentColor"><circle cx="3" cy="3" r="1.5"/><circle cx="9" cy="3" r="1.5"/><circle cx="3" cy="9" r="1.5"/><circle cx="9" cy="9" r="1.5"/><circle cx="3" cy="15" r="1.5"/><circle cx="9" cy="15" r="1.5"/></svg>
			</div>

			<div className="wpzf-field-card__body">
				{ showLabel && (
					<label className="wpzf-field-card__label">{ field.label }{ reqMark }</label>
				) }
				<FieldPreview field={ field } />
				{ field.help && <div className="wpzf-field-card__help">{ field.help }</div> }
			</div>

			<div className="wpzf-field-card__actions" onClick={ ( e ) => e.stopPropagation() }>
				<button className="wpzf-icon-btn" title={ __( 'Duplicate', 'wpzoom-forms' ) } onClick={ onDuplicate }>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"/></svg>
				</button>
				<button className="wpzf-icon-btn wpzf-icon-btn--danger" title={ __( 'Delete', 'wpzoom-forms' ) } onClick={ ( e ) => { if ( window.confirm( __( 'Remove this field?', 'wpzoom-forms' ) ) ) onDelete(); } }>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
				</button>
			</div>
		</div>
	);
}

function FieldPreview({ field }) {
	switch ( field.type ) {
		case 'text':
		case 'name':
		case 'email':
		case 'tel':
		case 'url':
		case 'number':
		case 'date':
		case 'hidden':
			return <input type="text" readonly className="wpzf-preview-input" placeholder={ field.placeholder || ' ' } />;
		case 'textarea':
			return <textarea readonly className="wpzf-preview-input" rows={ field.rows || 4 } placeholder={ field.placeholder || ' ' } />;
		case 'select':
			return (
				<select readonly className="wpzf-preview-input">
					<option>{ field.placeholder || '— Select —' }</option>
					{ ( field.options || [] ).map( ( o, i ) => <option key={ i }>{ o.label }</option> ) }
				</select>
			);
		case 'radio':
		case 'checkboxes': {
			const isRadio = field.type === 'radio';
			return (
				<div className="wpzf-preview-choices">
					{ ( field.options || [] ).map( ( o, i ) => (
						<label key={ i } className="wpzf-preview-choice">
							<input type={ isRadio ? 'radio' : 'checkbox' } readonly/>
							<span>{ o.label }</span>
						</label>
					) ) }
				</div>
			);
		}
		case 'checkbox':
			return (
				<label className="wpzf-preview-choice wpzf-preview-choice--single">
					<input type="checkbox" readonly/>
					<span>{ field.checkboxText || field.label }</span>
				</label>
			);
		case 'heading': {
			const Tag = field.level || 'h3';
			return <Tag className="wpzf-preview-heading">{ field.text || ' ' }</Tag>;
		}
		case 'paragraph':
			return <div className="wpzf-preview-paragraph" dangerouslySetInnerHTML={ { __html: field.text || '&nbsp;' } } />;
		case 'divider':
			return <hr className="wpzf-preview-divider" />;
		default:
			return null;
	}
}
