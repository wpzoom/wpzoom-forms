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
	 * (single items) and .wpzf-payment-options (checkbox/radio/dropdown)
	 * inside the given form.
	 *
	 * @param {HTMLElement} form
	 * @returns {number} Total in cents (integer >= 0).
	 */
	function calculateTotal( form ) {
		let total = 0;

		// Single payment items (price x quantity).
		form.querySelectorAll( '.wpzf-payment-item' ).forEach( item => {
			const price    = parseFloat( item.dataset.price ) || 0;
			const qtyInput = item.querySelector( '.wpzf-payment-item-qty, input[name$="_qty"]' );
			const qty      = qtyInput ? ( parseInt( qtyInput.value, 10 ) || 1 ) : 1;
			total += price * qty;
		} );

		// Checkbox / radio payment options (checked inputs with data-price).
		form.querySelectorAll( '.wpzf-payment-options[data-payment-type="checkbox"] input.wpzf-payment-option:checked, .wpzf-payment-options[data-payment-type="radio"] input.wpzf-payment-option:checked' ).forEach( input => {
			total += parseFloat( input.dataset.price ) || 0;
		} );

		// Dropdown payment options (selected option with data-price).
		form.querySelectorAll( 'select.wpzf-payment-options[data-payment-type="dropdown"]' ).forEach( select => {
			const selected = select.options[ select.selectedIndex ];
			if ( selected ) {
				total += parseFloat( selected.dataset.price ) || 0;
			}
		} );

		// Custom number inputs (payment-input block).
		form.querySelectorAll( 'input.wpzf-payment-amount' ).forEach( input => {
			total += parseFloat( input.value ) || 0;
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
	 * Collects all payment line-items from single items and option-based
	 * payment blocks (checkbox, radio, dropdown).
	 *
	 * @param {HTMLElement} form
	 * @returns {Array<{name:string,price:number,qty:number,subtotal:number}>}
	 */
	function collectPaymentItems( form ) {
		const items = [];

		// Single payment items.
		form.querySelectorAll( '.wpzf-payment-item' ).forEach( item => {
			const price    = parseFloat( item.dataset.price ) || 0;
			const qtyInput = item.querySelector( '.wpzf-payment-item-qty, input[name$="_qty"]' );
			const qty      = qtyInput ? ( parseInt( qtyInput.value, 10 ) || 1 ) : 1;
			const nameEl   = item.querySelector( '.wpzf-payment-item-name' );
			items.push( {
				name:     nameEl ? nameEl.textContent.trim() : 'Item',
				price,
				qty,
				subtotal: price * qty,
			} );
		} );

		// Checkbox / radio payment options.
		form.querySelectorAll( '.wpzf-payment-options[data-payment-type="checkbox"] input.wpzf-payment-option:checked, .wpzf-payment-options[data-payment-type="radio"] input.wpzf-payment-option:checked' ).forEach( input => {
			const price = parseFloat( input.dataset.price ) || 0;
			items.push( {
				name:     input.value || 'Item',
				price,
				qty:      1,
				subtotal: price,
			} );
		} );

		// Dropdown payment options.
		form.querySelectorAll( 'select.wpzf-payment-options[data-payment-type="dropdown"]' ).forEach( select => {
			const selected = select.options[ select.selectedIndex ];
			if ( selected ) {
				const price = parseFloat( selected.dataset.price ) || 0;
				items.push( {
					name:     selected.value || 'Item',
					price,
					qty:      1,
					subtotal: price,
				} );
			}
		} );

		// Custom number inputs (payment-input block).
		form.querySelectorAll( 'input.wpzf-payment-amount' ).forEach( input => {
			const price = parseFloat( input.value ) || 0;
			const labelEl = input.closest( '.wp-block-wpzoom-forms-payment-input' );
			const labelText = labelEl ? ( labelEl.querySelector( 'label span' ) || {} ).textContent || 'Amount' : 'Amount';
			items.push( {
				name:     labelText.trim(),
				price,
				qty:      1,
				subtotal: price,
			} );
		} );

		return items;
	}

	/**
	 * Ensures a hidden input with the given name exists inside the form,
	 * creating it if needed, then sets its value.
	 *
	 * @param {HTMLElement} form
	 * @param {string}      name
	 * @param {string}      value
	 */
	function setHiddenInput( form, name, value ) {
		let input = form.querySelector( `input[name="${ name }"]` );
		if ( ! input ) {
			input = document.createElement( 'input' );
			input.type = 'hidden';
			input.name = name;
			form.appendChild( input );
		}
		input.value = value;
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
	/**
	 * Reads the Stripe theme from the block's is-style-* class on the wrapper.
	 *
	 * @param {HTMLElement} wrapper
	 * @returns {'stripe'|'flat'|'night'}
	 */
	function getStripeTheme( wrapper ) {
		if ( wrapper.classList.contains( 'is-style-night' ) ) return 'night';
		if ( wrapper.classList.contains( 'is-style-flat' ) )  return 'flat';
		return 'stripe';
	}

	function initFormPayment( form, wrapper ) {
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
		const theme       = getStripeTheme( wrapper );

		let totalCents = calculateTotal( form );

		// Deferred-intent mode: mount the Payment Element without a clientSecret.
		// The intent is created on submit so the amount can be dynamic.
		const elements = stripe.elements( {
			mode,
			amount:   totalCents,
			currency,
			appearance: { theme },
		} );

		const paymentElement = elements.create( 'payment' );
		paymentElement.mount( paymentContainer );

		// Keep the element's amount in sync when payment inputs change.
		form.addEventListener( 'change', e => {
			const t = e.target;
			if (
				t.classList.contains( 'wpzf-payment-item-qty' ) ||
				t.classList.contains( 'wpzf-payment-option' ) ||
				( t.tagName === 'SELECT' && t.classList.contains( 'wpzf-payment-options' ) )
			) {
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

				// Step 4 — payment confirmed: populate hidden fields then re-submit.
				const intentInput = form.querySelector( 'input[name="wpzf_payment_intent_id"]' );
				if ( intentInput ) {
					intentInput.value = payment_intent_id || intentData.subscription_id || '';
				}

				setHiddenInput( form, 'wpzf_payment_type',   paymentType );
				setHiddenInput( form, 'wpzf_payment_method', 'Stripe' );
				setHiddenInput( form, 'wpzf_payment_status', 'processing' );
				setHiddenInput( form, 'wpzf_payment_items',  JSON.stringify( collectPaymentItems( form ) ) );

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
				initFormPayment( form, wrapper );
			}
		} );
	} );
}() );
