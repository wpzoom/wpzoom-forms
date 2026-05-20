import { useState, useEffect } from '@wordpress/element';
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
	onInsertField,
}) {
	const [ dragIdx, setDragIdx ] = useState( null );
	const [ overIdx, setOverIdx ] = useState( null );
	const [ overEnd, setOverEnd ] = useState( false );

	// Clear all drag state when any drag ends — covers both canvas reorders
	// and palette drags that are cancelled or dropped outside the canvas.
	useEffect( () => {
		const clear = () => { setDragIdx( null ); setOverIdx( null ); setOverEnd( false ); };
		document.addEventListener( 'dragend', clear );
		return () => document.removeEventListener( 'dragend', clear );
	}, [] );

	const onDragStart = ( e, idx ) => {
		setDragIdx( idx );
		e.dataTransfer.effectAllowed = 'move';
		try { e.dataTransfer.setData( 'text/plain', String( idx ) ); } catch ( _ ) {}
	};

	const onDragOver = ( e, idx ) => {
		e.preventDefault();
		setOverIdx( idx );
		setOverEnd( false );
	};

	const onDrop = ( e, idx ) => {
		e.preventDefault();
		const palType = e.dataTransfer.getData( 'wpzf/new-field' );
		if ( palType ) {
			onInsertField( palType, idx );
			setOverIdx( null );
			return;
		}
		if ( dragIdx !== null && dragIdx !== idx ) {
			onReorder( dragIdx, idx );
		}
		setDragIdx( null );
		setOverIdx( null );
	};

	const onDropEnd = ( e ) => {
		e.preventDefault();
		const palType = e.dataTransfer.getData( 'wpzf/new-field' );
		if ( palType ) {
			onInsertField( palType, fields.length );
		} else if ( dragIdx !== null ) {
			onReorder( dragIdx, fields.length );
		}
		setDragIdx( null );
		setOverEnd( false );
	};

	const empty = fields.length === 0;

	return (
		<main className="wpzf-canvas">
			<div className="wpzf-canvas__inner">
				<div className={ cls( 'wpzf-preview', 'wpzf-form', settings.theme && settings.theme !== 'default' && 'wpzf-theme-' + settings.theme, 'wpzf-labels-' + settings.labelsPosition ) }>

					{ empty && (
						<div
							className={ cls( 'wpzf-empty-state', overEnd && 'is-over' ) }
							onDragOver={ ( e ) => { e.preventDefault(); setOverEnd( true ); } }
							onDragLeave={ () => setOverEnd( false ) }
							onDrop={ ( e ) => {
								e.preventDefault();
								const palType = e.dataTransfer.getData( 'wpzf/new-field' );
								if ( palType ) onInsertField( palType, 0 );
								setOverEnd( false );
							} }
						>
							<h2>{ __( 'Drop your first field', 'wpzoom-forms' ) }</h2>
							<p>{ __( 'Drag a field from the left panel, or click any field type to add it.', 'wpzoom-forms' ) }</p>
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
										overIdx === idx && dragIdx !== idx && 'is-drop-target'
									) }
									draggable
									onDragStart={ ( e ) => onDragStart( e, idx ) }
									onDragOver={ ( e ) => onDragOver( e, idx ) }
									onDrop={ ( e ) => onDrop( e, idx ) }
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

							<div
								className={ cls( 'wpzf-canvas-drop-end', overEnd && 'is-over' ) }
								onDragOver={ ( e ) => { e.preventDefault(); setOverEnd( true ); setOverIdx( null ); } }
								onDragLeave={ () => setOverEnd( false ) }
								onDrop={ onDropEnd }
							/>
						</div>
					) }

					{ ! empty && (
						<div className={ cls( 'wpzf-preview-submit', 'wpzf-submit', 'wpzf-preview-submit--align-' + settings.submitAlign, 'wpzf-submit--align-' + settings.submitAlign ) }>
							<button type="button" className="wpzf-preview-submit__btn wpzf-submit__btn">{ settings.submitLabel || __( 'Submit', 'wpzoom-forms' ) }</button>
						</div>
					) }

				</div>
			</div>
		</main>
	);
}
