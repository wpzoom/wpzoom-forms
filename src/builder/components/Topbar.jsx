import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function Topbar({
	title,
	dirty,
	saving,
	submissions,
	onTitleChange,
	onSave,
	onEmbed,
	submissionsUrl,
	exitUrl,
}) {
	const [ editing, setEditing ] = useState( false );
	const inputRef = useRef( null );

	useEffect( () => {
		if ( editing && inputRef.current ) {
			inputRef.current.focus();
			inputRef.current.select();
		}
	}, [ editing ] );

	return (
		<header className="wpzf-topbar">
			<div className="wpzf-topbar__left">
				<a className="wpzf-topbar__exit" href={ exitUrl } title={ __( 'Back to forms', 'wpzoom-forms' ) } aria-label={ __( 'Back to forms', 'wpzoom-forms' ) }>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4 7.4L14 6l-6 6 6 6 1.4-1.4L10.8 12z"/></svg>
				</a>
				<div className="wpzf-topbar__brand">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M7.33 2h13.34v20H4V5.33h3.33V2zm10 3.33h-6.66v3.34H7.33v10h3.34v-3.34H14V12h-3.33V8.67h6.66V5.33z" /></svg>
					<span>{ __( 'WPZOOM Forms', 'wpzoom-forms' ) }</span>
				</div>
				{ editing ? (
					<input
						ref={ inputRef }
						className="wpzf-topbar__title-input"
						type="text"
						value={ title }
						onChange={ ( e ) => onTitleChange( e.target.value ) }
						onBlur={ () => setEditing( false ) }
						onKeyDown={ ( e ) => {
							if ( e.key === 'Enter' || e.key === 'Escape' ) setEditing( false );
						} }
					/>
				) : (
					<button className="wpzf-topbar__title" onClick={ () => setEditing( true ) } title={ __( 'Rename form', 'wpzoom-forms' ) }>
						<span>{ title || __( 'Untitled form', 'wpzoom-forms' ) }</span>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
					</button>
				) }
			</div>

			<div className="wpzf-topbar__right">
				<a className="wpzf-btn wpzf-btn--ghost" href={ submissionsUrl }>
					<span className="wpzf-badge">{ submissions || 0 }</span>
					{ __( 'Submissions', 'wpzoom-forms' ) }
				</a>
				<button className="wpzf-btn wpzf-btn--ghost" onClick={ onEmbed }>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6z" /></svg>
					{ __( 'Embed', 'wpzoom-forms' ) }
				</button>
				<button
					className={ 'wpzf-btn wpzf-btn--primary' + ( dirty ? ' wpzf-btn--dirty' : '' ) }
					onClick={ onSave }
					disabled={ saving || ! dirty }
				>
					{ saving ? __( 'Saving…', 'wpzoom-forms' ) : ( dirty ? __( 'Save Changes', 'wpzoom-forms' ) : __( 'Saved', 'wpzoom-forms' ) ) }
				</button>
			</div>
		</header>
	);
}
