/* global wpzfStripeData, Stripe */

/**
 * WPZOOM Forms — Stripe Payment Element Frontend Handler
 *
 * Uses the modern Payment Element (not the legacy Card Element) with the
 * deferred-intent pattern so the PaymentIntent is only created on submit
 * (keeping dynamic amounts correct without needing to update the intent on
 * every quantity change).
 *
 * Flow:
 *   1. On DOMContentLoaded, mount the Payment Element using stripe.elements()
 *      in "deferred" mode: pass mode/amount/currency instead of a clientSecret.
 *   2. When quantity inputs change, call elements.update({ amount }) to keep
 *      the Payment Element's displayed total in sync.
 *   3. On form submit:
 *        a. Validate the Payment Element (elements.submit()).
 *        b. POST to /wp-json/wpzoom-forms/v1/stripe/create-intent to create
 *           the PaymentIntent / Subscription on the server.
 *        c. Call stripe.confirmPayment() with the returned clientSecret and
 *           redirect: 'if_required' so card payments complete without a redirect.
 *        d. Populate hidden inputs and re-submit the native form.
 */
( function () {
	'use strict';

	if ( typeof wpzfStripeData === 'undefined' || typeof Stripe === 'undefined' ) {
		return;
	}

	const stripe = Stripe( wpzfStripeData.publishableKey );

	const periodLabels = { day: '/ day', week: '/ week', month: '/ month', year: '/ year' };

	/**
	 * Calculates the order total by reading all .wpzf-payment-item elements
	 * inside the given form, multiplying price x quantity.
	 *
	 * @param {HTMLElement} form
	 * @returns {number} Total in cents (integer >= 0).
	 */
	function calculateTotal( form ) {
		let total = 0;
		form.querySelectorAll( '.wpzf-payment-item' ).forEach( item => {
			const price    = parseFloat( item.dataset.price ) || 0;
			const qtyInput = item.querySelector( '.wpzf-payment-item-qty, input[name$="_qty"]' );
			const qty      = qtyInput ? ( parseInt( qtyInput.value, 10 ) || 1 ) : 1;
			total += price * qty;
		} );
		return Math.round( total * 100 );
	}

	/**
	 * Updates the .wpzf-payment-total display and its hidden input.
	 *
	 * @param {HTMLElement} form
	 * @param {number}      totalCents
	 */
	function updateTotalDisplay( form, totalCents ) {
		const amountEl = form.querySelector( '.wpzf-payment-total-amount' );
		const hiddenEl = form.querySelector( 'input[name="wpzf_payment_total"]' );
		const dollars  = ( totalCents / 100 ).toFixed( 2 );

		if ( amountEl ) {
			let display = '$' + dollars;
			if ( wpzfStripeData.paymentType === 'recurring' ) {
				const period = wpzfStripeData.recurringPeriod || 'month';
				display += ' ' + ( periodLabels[ period ] || '/ ' + period );
			}
			amountEl.textContent = display;
		}
		if ( hiddenEl ) {
			hiddenEl.value = String( totalCents );
		}
	}

	/**
	 * Shows an error in the #wpzf-card-errors container.
	 *
	 * @param {HTMLElement} form
	 * @param {string}      message
	 */
	function showError( form, message ) {
		const errorEl = form.querySelector( '#wpzf-card-errors' );
		if ( errorEl ) {
			errorEl.textContent = message;
			errorEl.style.color     = '#cf222e';
			errorEl.style.fontSize  = '13px';
			errorEl.style.marginTop = '6px';
		}
	}

	/**
	 * Initialises the Payment Element for a single form.
	 *
	 * @param {HTMLElement} form
	 */
	function initFormPayment( form ) {
		const paymentContainer = form.querySelector( '#wpzf-payment-element' );
		if ( ! paymentContainer ) {
			return;
		}

		const formIdInput = form.querySelector( 'input[name="form_id"]' );
		if ( ! formIdInput ) {
			return;
		}

		const currency    = ( wpzfStripeData.currency || 'usd' ).toLowerCase();
		const paymentType = wpzfStripeData.paymentType || 'one-time';
		const mode        = paymentType === 'recurring' ? 'subscription' : 'payment';

		let totalCents = calculateTotal( form );

		// Deferred-intent mode: mount the Payment Element without a clientSecret.
		// The intent is created on submit so the amount can be dynamic.
		const elements = stripe.elements( {
			mode,
			amount:   totalCents,
			currency,
			appearance: { theme: 'stripe' },
		} );

		const paymentElement = elements.create( 'payment' );
		paymentElement.mount( paymentContainer );

		// Keep the element's amount in sync when quantities change.
		form.addEventListener( 'change', e => {
			if ( e.target.classList.contains( 'wpzf-payment-item-qty' ) ) {
				totalCents = calculateTotal( form );
				updateTotalDisplay( form, totalCents );
				elements.update( { amount: totalCents } );
			}
		} );

		// Set initial display.
		updateTotalDisplay( form, totalCents );

		// Intercept form submission.
		const handleSubmit = async ( e ) => {
			e.preventDefault();

			const submitBtn = form.querySelector( '[type="submit"]' );
			if ( submitBtn ) submitBtn.disabled = true;

			totalCents = calculateTotal( form );
			updateTotalDisplay( form, totalCents );
			elements.update( { amount: totalCents } );

			if ( totalCents < 50 ) {
				showError( form, 'Order total must be at least $0.50.' );
				if ( submitBtn ) submitBtn.disabled = false;
				return;
			}

			// Step 1 — validate the Payment Element fields before hitting the server.
			const { error: submitError } = await elements.submit();
			if ( submitError ) {
				showError( form, submitError.message );
				if ( submitBtn ) submitBtn.disabled = false;
				return;
			}

			try {
				// Step 2 — create the PaymentIntent / Subscription on the server.
				const emailField = form.querySelector( 'input[type="email"]' );
				const nameField  = form.querySelector( '.wpzoom-forms_text-name-field input' );
				const payload    = {
					amount:         totalCents,
					form_id:        parseInt( formIdInput.value, 10 ),
					customer_email: emailField ? emailField.value : '',
					customer_name:  nameField  ? nameField.value  : '',
				};

				const intentResponse = await fetch( wpzfStripeData.createIntentUrl, {
					method:      'POST',
					credentials: 'same-origin',
					headers:     { 'Content-Type': 'application/json' },
					body:        JSON.stringify( payload ),
				} );

				const intentData = await intentResponse.json();

				if ( ! intentResponse.ok || intentData.code ) {
					showError( form, intentData.message || 'Payment setup failed. Please try again.' );
					if ( submitBtn ) submitBtn.disabled = false;
					return;
				}

				const { client_secret, payment_intent_id } = intentData;

				if ( ! client_secret ) {
					showError( form, 'Payment setup failed: no client secret returned.' );
					if ( submitBtn ) submitBtn.disabled = false;
					return;
				}

				// Step 3 — confirm the payment (or setup for free-trial subscriptions).
				const confirmFn = intentData.setup_intent
					? stripe.confirmSetup.bind( stripe )
					: stripe.confirmPayment.bind( stripe );

				const { error: confirmError } = await confirmFn( {
					elements,
					clientSecret:  client_secret,
					confirmParams: { return_url: window.location.href },
					redirect:      'if_required',
				} );

				if ( confirmError ) {
					showError( form, confirmError.message );
					if ( submitBtn ) submitBtn.disabled = false;
					return;
				}

				// Step 4 — payment confirmed: write the intent / subscription ID then re-submit.
				const intentInput = form.querySelector( 'input[name="wpzf_payment_intent_id"]' );
				if ( intentInput ) {
					intentInput.value = payment_intent_id || intentData.subscription_id || '';
				}

				form.removeEventListener( 'submit', handleSubmit );
				form.submit();

			} catch ( err ) {
				console.error( '[wpzf-stripe] Unexpected error:', err );
				showError( form, 'An unexpected error occurred. Please try again.' );
				if ( submitBtn ) submitBtn.disabled = false;
			}
		};

		form.addEventListener( 'submit', handleSubmit );
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
