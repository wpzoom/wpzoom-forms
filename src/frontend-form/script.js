/**
 * Frontend AJAX submitter for v2 forms.
 *
 * Progressive enhancement: forms still submit via standard POST if JS is disabled.
 * If JS runs, we hijack the submit, post to the same admin-post endpoint with
 * X-Requested-With so the server returns JSON, then render the result inline.
 */

( function () {
	'use strict';

	function ready( fn ) {
		if ( document.readyState !== 'loading' ) return fn();
		document.addEventListener( 'DOMContentLoaded', fn );
	}

	function showNotice( wrap, status, message ) {
		var noticeId = wrap.id + '-notice';
		var notice = document.getElementById( noticeId );
		if ( ! notice ) return;
		notice.textContent = message;
		notice.setAttribute( 'data-status', status );
		notice.hidden = false;
		notice.scrollIntoView( { behavior: 'smooth', block: 'nearest' } );
	}

	function clearErrors( form ) {
		form.querySelectorAll( '.wpzf-field--has-error' ).forEach( function ( el ) {
			el.classList.remove( 'wpzf-field--has-error' );
		} );
		form.querySelectorAll( '.wpzf-field-error' ).forEach( function ( el ) {
			el.remove();
		} );
	}

	function showFieldErrors( form, errors ) {
		Object.keys( errors ).forEach( function ( fieldId ) {
			var input = form.querySelector( '[name="wpzf_' + fieldId + '"], [name="wpzf_' + fieldId + '[]"]' );
			if ( ! input ) return;
			var fieldWrap = input.closest( '.wpzf-field' );
			if ( ! fieldWrap ) return;
			fieldWrap.classList.add( 'wpzf-field--has-error' );
			var err = document.createElement( 'span' );
			err.className = 'wpzf-field-error';
			err.textContent = errors[ fieldId ];
			fieldWrap.appendChild( err );
		} );
	}

	/**
	 * Resolve any captcha token that needs JS to produce (reCAPTCHA v3).
	 * Visible providers (reCAPTCHA v2, Turnstile) populate their own form fields,
	 * so we just pick those up via FormData and there's nothing to do here.
	 */
	function resolveCaptcha( form ) {
		return new Promise( function ( resolve ) {
			var v3 = form.querySelector( 'input.wpzf-recaptcha-token' );
			if ( v3 && window.grecaptcha && window.grecaptcha.ready ) {
				var siteKey = v3.dataset.sitekey;
				var action  = v3.dataset.action || 'wpzf_submit';
				window.grecaptcha.ready( function () {
					window.grecaptcha.execute( siteKey, { action: action } ).then( function ( token ) {
						v3.value = token;
						resolve();
					}, function () { resolve(); } );
				} );
				return;
			}
			resolve();
		} );
	}

	function handleSubmit( e ) {
		var form = e.target;
		if ( ! form.classList || ! form.classList.contains( 'wpzf-form__inner' ) ) return;

		e.preventDefault();
		var wrap = form.closest( '.wpzf-form' );
		clearErrors( form );
		wrap.classList.add( 'is-submitting' );

		resolveCaptcha( form ).then( function () {
			submitForm( form, wrap );
		} );
	}

	function submitForm( form, wrap ) {
		var fd = new FormData( form );

		fetch( form.getAttribute( 'action' ), {
			method: 'POST',
			body: fd,
			credentials: 'same-origin',
			headers: { 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json' },
		} )
			.then( function ( r ) { return r.json().then( function ( j ) { return { ok: r.ok, json: j }; } ); } )
			.then( function ( res ) {
				wrap.classList.remove( 'is-submitting' );
				if ( res.ok && res.json.success ) {
					var msg = res.json.message || form.dataset.success;
					showNotice( wrap, 'success', msg );
					form.reset();
					// Hide the form on success for a cleaner "done" state.
					form.hidden = true;
				} else {
					var emsg = res.json.message || form.dataset.failure;
					showNotice( wrap, 'error', emsg );
					if ( res.json.errors ) showFieldErrors( form, res.json.errors );
				}
			} )
			.catch( function () {
				wrap.classList.remove( 'is-submitting' );
				showNotice( wrap, 'error', form.dataset.failure );
			} );
	}

	ready( function () {
		document.addEventListener( 'submit', handleSubmit, true );

		// Auto-display ?success notice (legacy redirect path).
		var sp = new URLSearchParams( window.location.search );
		if ( sp.has( 'success' ) && sp.has( 'wpzf_submitted_form' ) ) {
			var fid = sp.get( 'wpzf_submitted_form' );
			var wrap = document.getElementById( 'wpzf-' + fid );
			if ( wrap ) {
				var form = wrap.querySelector( '.wpzf-form__inner' );
				if ( sp.get( 'success' ) === '1' ) {
					showNotice( wrap, 'success', form ? form.dataset.success : 'Submitted.' );
					if ( form ) form.hidden = true;
				} else {
					showNotice( wrap, 'error', form ? form.dataset.failure : 'Submission failed.' );
				}
			}
		}
	} );
}() );
