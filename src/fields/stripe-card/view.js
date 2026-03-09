/* global wpzfStripeData, Stripe */

/**
 * WPZOOM Forms — Stripe Card Frontend Handler
 *
 * Initialises Stripe Elements for every form on the page that contains a
 * .wpzf-stripe-card-element container, intercepts the form submit to:
 *   1. Create a PaymentIntent via the WP REST API.
 *   2. Confirm the card payment client-side with Stripe.
 *   3. Populate hidden inputs and re-submit the form to admin-post.php.
 */
( function () {
	'use strict';

	// --- DEBUG ---
	console.log( '[wpzf-stripe] view.js loaded' );
	console.log( '[wpzf-stripe] wpzfStripeData:', typeof wpzfStripeData !== 'undefined' ? wpzfStripeData : 'UNDEFINED — script not localized or not enqueued via the correct handle' );
	console.log( '[wpzf-stripe] Stripe global:', typeof Stripe !== 'undefined' ? 'present' : 'UNDEFINED — stripe-js CDN not loaded' );
	console.log( '[wpzf-stripe] .wpzf-stripe-card-wrapper elements on page:', document.querySelectorAll( '.wpzf-stripe-card-wrapper' ).length );
	// --- END DEBUG ---

	if ( typeof wpzfStripeData === 'undefined' || typeof Stripe === 'undefined' ) {
		console.warn( '[wpzf-stripe] Early exit — missing wpzfStripeData or Stripe. Card will NOT mount.' );
		return;
	}

	const stripe = Stripe( wpzfStripeData.publishableKey );

	/**
	 * Calculates the order total by reading all .wpzf-payment-item elements
	 * inside the given form, multiplying price × quantity.
	 *
	 * @param {HTMLElement} form The form element.
	 * @returns {number} Total in cents.
	 */
	function calculateTotal( form ) {
		let total = 0;
		const items = form.querySelectorAll( '.wpzf-payment-item' );

		items.forEach( item => {
			const price = parseFloat( item.dataset.price ) || 0;
			const qtyInput = item.querySelector( '.wpzf-payment-item-qty, input[name$="_qty"]' );
			const qty = qtyInput ? parseInt( qtyInput.value, 10 ) || 1 : 1;
			total += price * qty;
		} );

		// Return cents (integer).
		return Math.round( total * 100 );
	}

	/**
	 * Updates the .wpzf-payment-total display and hidden input in the form.
	 *
	 * @param {HTMLElement} form     The form element.
	 * @param {number}      totalCents Total in cents.
	 */
	function updateTotalDisplay( form, totalCents ) {
		const amountEl = form.querySelector( '.wpzf-payment-total-amount' );
		const hiddenEl = form.querySelector( 'input[name="wpzf_payment_total"]' );

		const dollars = ( totalCents / 100 ).toFixed( 2 );

		if ( amountEl ) {
			amountEl.textContent = '$' + dollars;
		}
		if ( hiddenEl ) {
			hiddenEl.value = String( totalCents );
		}
	}

	/**
	 * Shows an error message in the card errors container.
	 *
	 * @param {HTMLElement} form    The form element.
	 * @param {string}      message Error text.
	 */
	function showCardError( form, message ) {
		const errorEl = form.querySelector( '#wpzf-card-errors' );
		if ( errorEl ) {
			errorEl.textContent = message;
			errorEl.style.color = '#cf222e';
			errorEl.style.fontSize = '13px';
			errorEl.style.marginTop = '6px';
		}
	}

	/**
	 * Initialises Stripe Elements for a single form.
	 *
	 * @param {HTMLElement} form The form element.
	 */
	function initFormPayment( form ) {
		const cardContainer = form.querySelector( '#wpzf-card-element' );

		if ( ! cardContainer ) {
			return;
		}

		const formId = form.querySelector( 'input[name="form_id"]' );
		if ( ! formId ) {
			return;
		}

		const elements = stripe.elements();
		const cardElement = elements.create( 'card', {
			style: {
				base: {
					fontSize: '16px',
					color: '#424770',
					'::placeholder': { color: '#aab7c4' },
				},
				invalid: { color: '#cf222e' },
			},
		} );

		cardElement.mount( cardContainer );

		// Live validation feedback.
		cardElement.on( 'change', event => {
			if ( event.error ) {
				showCardError( form, event.error.message );
			} else {
				showCardError( form, '' );
			}
		} );

		// Update totals whenever quantities change.
		form.addEventListener( 'change', e => {
			if ( e.target.classList.contains( 'wpzf-payment-item-qty' ) ) {
				const total = calculateTotal( form );
				updateTotalDisplay( form, total );
			}
		} );

		// Set initial total.
		updateTotalDisplay( form, calculateTotal( form ) );

		// Intercept form submission.
		form.addEventListener( 'submit', async e => {
			e.preventDefault();

			const submitBtn = form.querySelector( '[type="submit"]' );
			if ( submitBtn ) {
				submitBtn.disabled = true;
			}

			const totalCents = calculateTotal( form );
			updateTotalDisplay( form, totalCents );

			if ( totalCents < 50 ) {
				showCardError( form, 'Order total must be at least $0.50.' );
				if ( submitBtn ) submitBtn.disabled = false;
				return;
			}

			try {
				// 1. Create a PaymentIntent on the server.
				const payload = { amount: totalCents, form_id: parseInt( formId.value, 10 ) };
				console.log( '[wpzf-stripe] Sending to create-intent:', payload );
				const intentResponse = await fetch( wpzfStripeData.createIntentUrl, {
					method:      'POST',
					credentials: 'same-origin',
					headers:     { 'Content-Type': 'application/json' },
					body: JSON.stringify( payload ),
				} );

				const intentData = await intentResponse.json();
				console.log( '[wpzf-stripe] create-intent response status:', intentResponse.status, intentData );

				if ( ! intentResponse.ok || intentData.code ) {
					showCardError( form, intentData.message || 'Payment setup failed. Please try again.' );
					if ( submitBtn ) submitBtn.disabled = false;
					return;
				}

				const { client_secret, payment_intent_id } = intentData;

				// 2. Confirm the card payment client-side.
				const { error: confirmError } = await stripe.confirmCardPayment( client_secret, {
					payment_method: { card: cardElement },
				} );

				if ( confirmError ) {
					showCardError( form, confirmError.message );
					if ( submitBtn ) submitBtn.disabled = false;
					return;
				}

				// 3. Populate hidden input and re-submit the form.
				const intentInput = form.querySelector( 'input[name="wpzf_payment_intent_id"]' );
				if ( intentInput ) {
					intentInput.value = payment_intent_id;
				}

				// Re-submit without triggering our listener again.
				form.removeEventListener( 'submit', arguments.callee );
				form.submit();

			} catch ( err ) {
				showCardError( form, 'An unexpected error occurred. Please try again.' );
				if ( submitBtn ) submitBtn.disabled = false;
			}
		} );
	}

	// Initialise on DOM ready.
	document.addEventListener( 'DOMContentLoaded', () => {
		document.querySelectorAll( '.wpzf-stripe-card-wrapper' ).forEach( wrapper => {
			const form = wrapper.closest( 'form' );
			if ( form ) {
				initFormPayment( form );
			}
		} );
	} );
}() );
