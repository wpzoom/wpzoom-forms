function wpzf_submit(token) {
    // Check if required inputs are filled
    var allInputsFilled = true;

    jQuery('form.wpzoom-forms_form [required]').each(function() {
        var input = jQuery(this);
        if (input.is(':checkbox')) {
            // For checkboxes
            if (!input.is(':checked')) {
                allInputsFilled = false;
                input.focus();
                return false; // exit the loop if any required checkbox is not checked
            }
        } else {
            // For non-checkbox inputs (text, password, etc.)
            if ( ! input.val() ) {
                allInputsFilled = false;
                input.focus();
                return false; // exit the loop if any required input is not filled
            }
        }
    } );

    if ( allInputsFilled ) {
        // All required inputs are filled, trigger form submission
        jQuery('form.wpzoom-forms_form').trigger('submit');
    }
}

( function () {
	function injectOverlay( form ) {
		if ( form.querySelector( '.wpzf-loading-overlay' ) ) return;
		const overlay = document.createElement( 'div' );
		overlay.className = 'wpzf-loading-overlay';
		overlay.setAttribute( 'aria-hidden', 'true' );
		overlay.innerHTML = '<div class="wpzf-loading-spinner"></div>';
		form.appendChild( overlay );
	}

	function showOverlay( form ) {
		const overlay = form.querySelector( '.wpzf-loading-overlay' );
		if ( overlay ) overlay.classList.add( 'is-visible' );
	}

	function hideOverlay( form ) {
		const overlay = form.querySelector( '.wpzf-loading-overlay' );
		if ( overlay ) overlay.classList.remove( 'is-visible' );
	}

	// Expose for stripe-card/view.js (loaded separately).
	window.wpzfOverlay = { show: showOverlay, hide: hideOverlay, inject: injectOverlay };

	document.addEventListener( 'DOMContentLoaded', function () {
		document.querySelectorAll( 'form.wpzoom-forms_form' ).forEach( function ( form ) {
			injectOverlay( form );

			// For non-Stripe forms, show overlay on submit (page navigates away).
			if ( ! form.querySelector( '.wpzf-stripe-card-wrapper' ) ) {
				form.addEventListener( 'submit', function () {
					showOverlay( form );
				} );
			}
		} );
	} );
} )();
