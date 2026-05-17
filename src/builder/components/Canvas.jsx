import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { cls } from '../utils';
import FieldCard from './FieldCard.jsx';

export default function Canvas({
	fields,
	settings,
	selectedId,
	onSelect,
	onReorder,
	onDelete,
	onDuplicate,
	onAddField,
}) {
	const [ dragIdx,  setDragIdx  ] = useState( null );
	const [ overIdx,  setOverIdx  ] = useState( null );

	const onDragStart = ( e, idx ) => {
		setDragIdx( idx );
		e.dataTransfer.effectAllowed = 'move';
		try { e.dataTransfer.setData( 'text/plain', String( idx ) ); } catch ( _ ) {}
	};
	const onDragOver = ( e, idx ) => {
		e.preventDefault();
		setOverIdx( idx );
	};
	const onDrop = ( e, idx ) => {
		e.preventDefault();
		if ( dragIdx !== null && dragIdx !== idx ) {
			onReorder( dragIdx, idx );
		}
		setDragIdx( null );
		setOverIdx( null );
	};
	const onDragEnd = () => {
		setDragIdx( null );
		setOverIdx( null );
	};

	const empty = fields.length === 0;

	return (
		<main className="wpzf-canvas">
			<div className="wpzf-canvas__inner">
				<div className={ cls( 'wpzf-preview', 'wpzf-labels-' + settings.labelsPosition ) }>
					{ empty && (
						<div className="wpzf-empty-state">
							<h2>{ __( 'Drop your first field', 'wpzoom-forms' ) }</h2>
							<p>{ __( 'Click any field type from the left to add it. You can reorder fields by dragging.', 'wpzoom-forms' ) }</p>
							<div className="wpzf-empty-state__shortcuts">
								<button onClick={ () => onAddField( 'name' ) }>+ { __( 'Name', 'wpzoom-forms' ) }</button>
								<button onClick={ () => onAddField( 'email' ) }>+ { __( 'Email', 'wpzoom-forms' ) }</button>
								<button onClick={ () => onAddField( 'textarea' ) }>+ { __( 'Message', 'wpzoom-forms' ) }</button>
							</div>
						</div>
					) }

					{ ! empty && (
						<div className="wpzf-canvas-fields">
							{ fields.map( ( field, idx ) => (
								<div
									key={ field.id }
									className={ cls(
										'wpzf-canvas-row',
										'wpzf-canvas-row--width-' + field.width,
										dragIdx === idx && 'is-dragging',
										overIdx === idx && dragIdx !== null && dragIdx !== idx && 'is-drop-target'
									) }
									draggable
									onDragStart={ ( e ) => onDragStart( e, idx ) }
									onDragOver={ ( e ) => onDragOver( e, idx ) }
									onDrop={ ( e ) => onDrop( e, idx ) }
									onDragEnd={ onDragEnd }
								>
									<FieldCard
										field={ field }
										settings={ settings }
										selected={ selectedId === field.id }
										onSelect={ () => onSelect( field.id ) }
										onDelete={ () => onDelete( field.id ) }
										onDuplicate={ () => onDuplicate( field.id ) }
									/>
								</div>
							) ) }
						</div>
					) }

					{ ! empty && (
						<div className={ cls( 'wpzf-preview-submit', 'wpzf-preview-submit--align-' + settings.submitAlign ) }>
							<button type="button" className="wpzf-preview-submit__btn">{ settings.submitLabel || __( 'Submit', 'wpzoom-forms' ) }</button>
						</div>
					) }
				</div>
			</div>
		</main>
	);
}
