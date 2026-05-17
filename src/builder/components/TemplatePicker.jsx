import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { api } from '../api';

/**
 * Initial screen shown when the builder is opened with no form id.
 * Lets the user start from a blank form or pick one of the prebuilt templates.
 *
 * Selecting a template calls POST /forms?template=<id> and navigates to the
 * builder URL of the freshly created form.
 */
export default function TemplatePicker({ presetTemplate }) {
	const [ templates, setTemplates ] = useState( null );
	const [ creating,  setCreating ]  = useState( false );
	const [ error,     setError ]     = useState( '' );

	useEffect( () => {
		api.getTemplates().then( setTemplates ).catch( ( e ) => setError( e.message || __( 'Could not load templates', 'wpzoom-forms' ) ) );
	}, [] );

	// If we arrived with ?template=<id>, just create immediately (mirrors the legacy direct-link flow).
	useEffect( () => {
		if ( ! presetTemplate ) return;
		create( presetTemplate );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ presetTemplate ] );

	const create = ( templateId ) => {
		setCreating( true );
		setError( '' );
		api.createForm( templateId ? { template: templateId } : {} )
			.then( ( form ) => {
				const url = window.wpzfBuilder.newFormUrl + '&id=' + form.id + '&new=1';
				window.location.replace( url );
			} )
			.catch( ( e ) => {
				setCreating( false );
				setError( e.message || __( 'Could not create form', 'wpzoom-forms' ) );
			} );
	};

	if ( error && ! templates ) {
		return (
			<div className="wpzf-picker wpzf-picker--error">
				<p>{ error }</p>
			</div>
		);
	}

	if ( templates === null || creating ) {
		return (
			<div className="wpzf-picker wpzf-picker--loading">
				<div className="wpzf-spinner" aria-label={ __( 'Loading…', 'wpzoom-forms' ) } />
				{ creating && <p style={ { marginTop: 16, color: '#6b7280' } }>{ __( 'Creating your form…', 'wpzoom-forms' ) }</p> }
			</div>
		);
	}

	return (
		<div className="wpzf-picker">
			<header className="wpzf-picker__header">
				<a className="wpzf-topbar__exit" href={ window.wpzfBuilder.formsListUrl } title={ __( 'Back to forms', 'wpzoom-forms' ) } aria-label={ __( 'Back to forms', 'wpzoom-forms' ) }>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4 7.4L14 6l-6 6 6 6 1.4-1.4L10.8 12z"/></svg>
				</a>
				<div>
					<h1>{ __( 'Choose a template', 'wpzoom-forms' ) }</h1>
					<p>{ __( 'Start with a prebuilt form or build from scratch — you can change everything later.', 'wpzoom-forms' ) }</p>
				</div>
			</header>

			{ error && <div className="wpzf-picker__error">{ error }</div> }

			<div className="wpzf-picker__grid">
				<button className="wpzf-picker__card wpzf-picker__card--blank" onClick={ () => create( '' ) } disabled={ creating }>
					<div className="wpzf-picker__icon">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v16M4 12h16" /></svg>
					</div>
					<div className="wpzf-picker__name">{ __( 'Blank Form', 'wpzoom-forms' ) }</div>
					<div className="wpzf-picker__desc">{ __( 'Start from scratch with an empty canvas.', 'wpzoom-forms' ) }</div>
				</button>

				{ templates.map( ( t ) => (
					<button key={ t.id } className="wpzf-picker__card" onClick={ () => create( t.id ) } disabled={ creating }>
						<div className="wpzf-picker__icon" dangerouslySetInnerHTML={ { __html: t.icon || '' } } />
						<div className="wpzf-picker__name">{ t.name }</div>
						<div className="wpzf-picker__desc">{ t.desc }</div>
					</button>
				) ) }
			</div>
		</div>
	);
}
