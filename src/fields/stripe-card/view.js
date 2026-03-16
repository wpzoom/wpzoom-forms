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

	const ZERO_DECIMAL_CURRENCIES = new Set( [
		'bif', 'clp', 'djf', 'gnf', 'jpy', 'kmf', 'krw', 'mga', 'pyg', 'rwf', 'ugx', 'vnd', 'vuv', 'xaf', 'xof', 'xpf',
	] );

	/**
	 * Returns 1 for zero-decimal currencies (JPY, KRW, …) and 100 for all others.
	 * Use this multiplier when converting a major-unit price to the integer amount
	 * Stripe expects.
	 */
	function getStripeMultiplier( currencyCode ) {
		return ZERO_DECIMAL_CURRENCIES.has( ( currencyCode || 'usd' ).toLowerCase() ) ? 1 : 100;
	}

	const stripeMultiplier = getStripeMultiplier( wpzfStripeData.currency );

	// Minimum charge amounts per currency, in major units (dollars, euros, etc.).
	// Source: https://docs.stripe.com/currencies#minimum-and-maximum-charge-amounts
	const CURRENCY_MINIMUMS = {
		usd: 0.50, aed: 2.00, ars: 0.50, aud: 0.50, brl: 0.50, cad: 0.50,
		chf: 0.50, cop: 0.50, czk: 15.00, dkk: 2.50, eur: 0.50, gbp: 0.30,
		hkd: 4.00, huf: 175.00, idr: 0.50, ils: 0.50, inr: 0.50, jpy: 50,
		krw: 50, mxn: 10, myr: 2.00, nok: 3.00, nzd: 0.50, php: 0.50,
		pln: 2.00, ron: 2.00, rub: 0.50, sek: 3.00, sgd: 0.50, thb: 10, zar: 0.50,
	};

	function getMinimumStripeAmount() {
		const currencyCode = ( wpzfStripeData.currency || 'usd' ).toLowerCase();
		const minMajor     = CURRENCY_MINIMUMS[ currencyCode ] ?? 0.50;
		return Math.round( minMajor * stripeMultiplier );
	}

	const currencyFormatter = new Intl.NumberFormat( [], {
		style:    'currency',
		currency: ( wpzfStripeData.currency || 'usd' ).toUpperCase(),
	} );

	function formatCurrency( stripeAmount ) {
		return currencyFormatter.format( stripeAmount / stripeMultiplier );
	}

	/**
	 * Replaces hardcoded '$' price displays with the configured currency symbol.
	 * Called once per form on DOMContentLoaded.
	 *
	 * @param {HTMLElement} form
	 */
	function reformatPriceDisplay( form ) {
		// Payment-item price spans — read the raw price from the sibling hidden input.
		form.querySelectorAll( '.wp-block-wpzoom-forms-payment-item' ).forEach( item => {
			const priceInput = item.querySelector( 'input[name$="_price"]' );
			const priceSpan  = item.querySelector( '.wpzf-payment-item-price' );
			if ( priceInput && priceSpan ) {
				priceSpan.textContent = currencyFormatter.format( parseFloat( priceInput.value ) || 0 );
			}
		} );

		// Payment-option (checkbox / radio / select) labels — read data-price from the input.
		form.querySelectorAll( 'input.wpzf-payment-option[data-price]' ).forEach( input => {
			const label = input.closest( 'label' );
			if ( ! label ) return;
			const formatted = currencyFormatter.format( parseFloat( input.dataset.price ) || 0 );
			for ( let i = label.childNodes.length - 1; i >= 0; i-- ) {
				const node = label.childNodes[ i ];
				if ( node.nodeType === Node.TEXT_NODE && /\$[\d.,]+/.test( node.textContent ) ) {
					node.textContent = node.textContent.replace( /\$[\d.,]+/, formatted );
					break;
				}
			}
		} );
	}

	/**
	 * Calculates the order total by reading all .wp-block-wpzoom-forms-payment-item elements
	 * (single items) and .wpzf-payment-options (checkbox/radio/dropdown)
	 * inside the given form.
	 *
	 * @param {HTMLElement} form
	 * @returns {number} Total in Stripe smallest-unit amount (cents for USD, whole units for JPY, etc.).
	 */
	function calculateTotal( form ) {
		let total = 0;

		// Single payment items (price x quantity).
		form.querySelectorAll( '.wp-block-wpzoom-forms-payment-item' ).forEach( item => {
			const priceInput = item.querySelector( 'input[name$="_price"]' );
			const price      = priceInput ? ( parseFloat( priceInput.value ) || 0 ) : 0;
			const qtyInput   = item.querySelector( '.wpzf-payment-item-qty, input[name$="_qty"]' );
			const qty        = qtyInput ? ( parseInt( qtyInput.value, 10 ) || 1 ) : 1;
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

		return Math.round( total * stripeMultiplier );
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
		if ( amountEl ) {
			let display = formatCurrency( totalCents );
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
		form.querySelectorAll( '.wp-block-wpzoom-forms-payment-item' ).forEach( item => {
			const priceInput = item.querySelector( 'input[name$="_price"]' );
			const price      = priceInput ? ( parseFloat( priceInput.value ) || 0 ) : 0;
			const qtyInput   = item.querySelector( '.wpzf-payment-item-qty, input[name$="_qty"]' );
			const qty        = qtyInput ? ( parseInt( qtyInput.value, 10 ) || 1 ) : 1;
			const nameEl     = item.querySelector( '.wpzf-payment-item-name' );
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
	 * Shows/hides the loading overlay on the form.
	 * Falls back to a self-managed overlay if frontend/script.js hasn't run yet.
	 *
	 * @param {HTMLElement} form
	 * @param {boolean}     visible
	 */
	function setOverlay( form, visible ) {
		let overlay = form.querySelector( '.wpzf-loading-overlay' );
		if ( ! overlay ) {
			overlay = document.createElement( 'div' );
			overlay.className = 'wpzf-loading-overlay';
			overlay.setAttribute( 'aria-hidden', 'true' );
			overlay.innerHTML = '<div class="wpzf-loading-spinner"></div>';
			form.appendChild( overlay );
		}
		overlay.classList.toggle( 'is-visible', visible );
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

		// When the initial total is 0 (e.g. nothing checked yet), we cannot call
		// stripe.elements() because Stripe requires amount > 0. Instead we show a
		// prompt and mount the Payment Element the first time the total becomes > 0.
		let elements       = null;
		let paymentElement = null;
		let mounted        = false;

		// Placeholder shown while total is still 0.
		const placeholder = document.createElement( 'p' );
		placeholder.className = 'wpzf-payment-placeholder';
		placeholder.style.cssText = 'margin:0;padding:12px 0;color:#555;font-size:14px;';
		placeholder.textContent = 'Please select a payment option to continue.';

		function mountPaymentElement() {
			if ( mounted ) return;
			mounted = true;

			if ( placeholder.parentNode ) placeholder.remove();
			paymentContainer.style.display = '';

			elements = stripe.elements( {
				mode,
				amount: totalCents,
				currency,
				setupFutureUsage: mode === 'payment' ? 'off_session' : undefined,
				appearance: { theme },
			} );

			paymentElement = elements.create( 'payment' );
			paymentElement.mount( paymentContainer );
		}

		if ( totalCents > 0 ) {
			mountPaymentElement();
		} else {
			paymentContainer.style.display = 'none';
			paymentContainer.parentNode.insertBefore( placeholder, paymentContainer );
		}

		// Keep the element's amount in sync when payment inputs change.
		function onPaymentInputChange( e ) {
			const t = e.target;
			if (
				t.classList.contains( 'wpzf-payment-item-qty' ) ||
				t.classList.contains( 'wpzf-payment-option' ) ||
				t.classList.contains( 'wpzf-payment-amount' ) ||
				( t.tagName === 'SELECT' && t.classList.contains( 'wpzf-payment-options' ) )
			) {
				totalCents = calculateTotal( form );
				updateTotalDisplay( form, totalCents );

				if ( totalCents > 0 ) {
					if ( ! mounted ) {
						mountPaymentElement();
					} else {
						// Restore visibility if it was hidden.
						if ( placeholder.parentNode ) placeholder.remove();
						paymentContainer.style.display = '';
						elements.update( { amount: totalCents } );
					}
				} else if ( mounted ) {
					// Total dropped to 0 — hide the element and show the prompt again.
					paymentContainer.style.display = 'none';
					if ( ! placeholder.parentNode ) {
						paymentContainer.parentNode.insertBefore( placeholder, paymentContainer );
					}
				}
			}
		}
		form.addEventListener( 'change', onPaymentInputChange );
		form.addEventListener( 'input',  onPaymentInputChange );

		// Set initial display.
		updateTotalDisplay( form, totalCents );

		// Intercept form submission.
		const handleSubmit = async ( e ) => {
			e.preventDefault();

			const submitBtn = form.querySelector( '[type="submit"]' );
			if ( submitBtn ) submitBtn.disabled = true;
			setOverlay( form, true );

			totalCents = calculateTotal( form );
			updateTotalDisplay( form, totalCents );
			if ( mounted && totalCents > 0 ) elements.update( { amount: totalCents } );

			const minAmount = getMinimumStripeAmount();
			console.log(minAmount, totalCents);
			if ( totalCents < minAmount ) {
				showError( form, 'Order total must be at least ' + formatCurrency( minAmount ) + '.' );
				if ( submitBtn ) submitBtn.disabled = false;
				setOverlay( form, false );
				return;
			}

			// Guard: payment element must be mounted before we can proceed.
			if ( ! mounted ) {
				showError( form, 'Please select a payment option before submitting.' );
				if ( submitBtn ) submitBtn.disabled = false;
				setOverlay( form, false );
				return;
			}

			// Step 1 — validate the Payment Element fields before hitting the server.
			const { error: submitError } = await elements.submit();
			if ( submitError ) {
				showError( form, submitError.message );
				if ( submitBtn ) submitBtn.disabled = false;
				setOverlay( form, false );
				return;
			}

			try {
				// Step 2 — create the PaymentIntent / Subscription on the server.
				const emailField = form.querySelector( 'input[type="email"]' );
				const nameField  = form.querySelector( 'input.wp-block-wpzoom-forms-text-name-field' );
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
					setOverlay( form, false );
					return;
				}

				const { client_secret, payment_intent_id } = intentData;

				if ( ! client_secret ) {
					showError( form, 'Payment setup failed: no client secret returned.' );
					if ( submitBtn ) submitBtn.disabled = false;
					setOverlay( form, false );
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
					setOverlay( form, false );
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
				setOverlay( form, false );
			}
		};

		form.addEventListener( 'submit', handleSubmit );
	}

	// Initialise on DOM ready.
	document.addEventListener( 'DOMContentLoaded', () => {
		document.querySelectorAll( '.wpzf-stripe-card-wrapper' ).forEach( wrapper => {
			const form = wrapper.closest( 'form' );
			if ( form ) {
				reformatPriceDisplay( form );
				initFormPayment( form, wrapper );
			}
		} );
	} );
}() );
