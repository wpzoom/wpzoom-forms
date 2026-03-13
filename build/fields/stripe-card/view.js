/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!****************************************!*\
  !*** ./src/fields/stripe-card/view.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
(function () {
  'use strict';

  if (typeof wpzfStripeData === 'undefined' || typeof Stripe === 'undefined') {
    return;
  }
  var stripe = Stripe(wpzfStripeData.publishableKey);
  var periodLabels = {
    day: '/ day',
    week: '/ week',
    month: '/ month',
    year: '/ year'
  };
  var currencyFormatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: (wpzfStripeData.currency || 'usd').toUpperCase(),
    minimumFractionDigits: 2
  });
  function formatCurrency(cents) {
    return currencyFormatter.format(cents / 100);
  }

  /**
   * Replaces hardcoded '$' price displays with the configured currency symbol.
   * Called once per form on DOMContentLoaded.
   *
   * @param {HTMLElement} form
   */
  function reformatPriceDisplay(form) {
    // Payment-item price spans — read the raw price from the sibling hidden input.
    form.querySelectorAll('.wp-block-wpzoom-forms-payment-item').forEach(function (item) {
      var priceInput = item.querySelector('input[name$="_price"]');
      var priceSpan = item.querySelector('.wpzf-payment-item-price');
      if (priceInput && priceSpan) {
        priceSpan.textContent = currencyFormatter.format(parseFloat(priceInput.value) || 0);
      }
    });

    // Payment-option (checkbox / radio / select) labels — read data-price from the input.
    form.querySelectorAll('input.wpzf-payment-option[data-price]').forEach(function (input) {
      var label = input.closest('label');
      if (!label) return;
      var formatted = currencyFormatter.format(parseFloat(input.dataset.price) || 0);
      for (var i = label.childNodes.length - 1; i >= 0; i--) {
        var node = label.childNodes[i];
        if (node.nodeType === Node.TEXT_NODE && /\$[\d.,]+/.test(node.textContent)) {
          node.textContent = node.textContent.replace(/\$[\d.,]+/, formatted);
          break;
        }
      }
    });
  }

  /**
   * Calculates the order total by reading all .wp-block-wpzoom-forms-payment-item elements
   * (single items) and .wpzf-payment-options (checkbox/radio/dropdown)
   * inside the given form.
   *
   * @param {HTMLElement} form
   * @returns {number} Total in cents (integer >= 0).
   */
  function calculateTotal(form) {
    var total = 0;

    // Single payment items (price x quantity).
    form.querySelectorAll('.wp-block-wpzoom-forms-payment-item').forEach(function (item) {
      var priceInput = item.querySelector('input[name$="_price"]');
      var price = priceInput ? parseFloat(priceInput.value) || 0 : 0;
      var qtyInput = item.querySelector('.wpzf-payment-item-qty, input[name$="_qty"]');
      var qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
      total += price * qty;
    });

    // Checkbox / radio payment options (checked inputs with data-price).
    form.querySelectorAll('.wpzf-payment-options[data-payment-type="checkbox"] input.wpzf-payment-option:checked, .wpzf-payment-options[data-payment-type="radio"] input.wpzf-payment-option:checked').forEach(function (input) {
      total += parseFloat(input.dataset.price) || 0;
    });

    // Dropdown payment options (selected option with data-price).
    form.querySelectorAll('select.wpzf-payment-options[data-payment-type="dropdown"]').forEach(function (select) {
      var selected = select.options[select.selectedIndex];
      if (selected) {
        total += parseFloat(selected.dataset.price) || 0;
      }
    });

    // Custom number inputs (payment-input block).
    form.querySelectorAll('input.wpzf-payment-amount').forEach(function (input) {
      total += parseFloat(input.value) || 0;
    });
    return Math.round(total * 100);
  }

  /**
   * Updates the .wpzf-payment-total display and its hidden input.
   *
   * @param {HTMLElement} form
   * @param {number}      totalCents
   */
  function updateTotalDisplay(form, totalCents) {
    var amountEl = form.querySelector('.wpzf-payment-total-amount');
    var hiddenEl = form.querySelector('input[name="wpzf_payment_total"]');
    if (amountEl) {
      var display = formatCurrency(totalCents);
      if (wpzfStripeData.paymentType === 'recurring') {
        var period = wpzfStripeData.recurringPeriod || 'month';
        display += ' ' + (periodLabels[period] || '/ ' + period);
      }
      amountEl.textContent = display;
    }
    if (hiddenEl) {
      hiddenEl.value = String(totalCents);
    }
  }

  /**
   * Collects all payment line-items from single items and option-based
   * payment blocks (checkbox, radio, dropdown).
   *
   * @param {HTMLElement} form
   * @returns {Array<{name:string,price:number,qty:number,subtotal:number}>}
   */
  function collectPaymentItems(form) {
    var items = [];

    // Single payment items.
    form.querySelectorAll('.wp-block-wpzoom-forms-payment-item').forEach(function (item) {
      var priceInput = item.querySelector('input[name$="_price"]');
      var price = priceInput ? parseFloat(priceInput.value) || 0 : 0;
      var qtyInput = item.querySelector('.wpzf-payment-item-qty, input[name$="_qty"]');
      var qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
      var nameEl = item.querySelector('.wpzf-payment-item-name');
      items.push({
        name: nameEl ? nameEl.textContent.trim() : 'Item',
        price: price,
        qty: qty,
        subtotal: price * qty
      });
    });

    // Checkbox / radio payment options.
    form.querySelectorAll('.wpzf-payment-options[data-payment-type="checkbox"] input.wpzf-payment-option:checked, .wpzf-payment-options[data-payment-type="radio"] input.wpzf-payment-option:checked').forEach(function (input) {
      var price = parseFloat(input.dataset.price) || 0;
      items.push({
        name: input.value || 'Item',
        price: price,
        qty: 1,
        subtotal: price
      });
    });

    // Dropdown payment options.
    form.querySelectorAll('select.wpzf-payment-options[data-payment-type="dropdown"]').forEach(function (select) {
      var selected = select.options[select.selectedIndex];
      if (selected) {
        var price = parseFloat(selected.dataset.price) || 0;
        items.push({
          name: selected.value || 'Item',
          price: price,
          qty: 1,
          subtotal: price
        });
      }
    });

    // Custom number inputs (payment-input block).
    form.querySelectorAll('input.wpzf-payment-amount').forEach(function (input) {
      var price = parseFloat(input.value) || 0;
      var labelEl = input.closest('.wp-block-wpzoom-forms-payment-input');
      var labelText = labelEl ? (labelEl.querySelector('label span') || {}).textContent || 'Amount' : 'Amount';
      items.push({
        name: labelText.trim(),
        price: price,
        qty: 1,
        subtotal: price
      });
    });
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
  function setHiddenInput(form, name, value) {
    var input = form.querySelector("input[name=\"".concat(name, "\"]"));
    if (!input) {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      form.appendChild(input);
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
  function setOverlay(form, visible) {
    var overlay = form.querySelector('.wpzf-loading-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'wpzf-loading-overlay';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.innerHTML = '<div class="wpzf-loading-spinner"></div>';
      form.appendChild(overlay);
    }
    overlay.classList.toggle('is-visible', visible);
  }

  /**
   * Shows an error in the #wpzf-card-errors container.
   *
   * @param {HTMLElement} form
   * @param {string}      message
   */
  function showError(form, message) {
    var errorEl = form.querySelector('#wpzf-card-errors');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.color = '#cf222e';
      errorEl.style.fontSize = '13px';
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
  function getStripeTheme(wrapper) {
    if (wrapper.classList.contains('is-style-night')) return 'night';
    if (wrapper.classList.contains('is-style-flat')) return 'flat';
    return 'stripe';
  }
  function initFormPayment(form, wrapper) {
    var paymentContainer = form.querySelector('#wpzf-payment-element');
    if (!paymentContainer) {
      return;
    }
    var formIdInput = form.querySelector('input[name="form_id"]');
    if (!formIdInput) {
      return;
    }
    var currency = (wpzfStripeData.currency || 'usd').toLowerCase();
    var paymentType = wpzfStripeData.paymentType || 'one-time';
    var mode = paymentType === 'recurring' ? 'subscription' : 'payment';
    var theme = getStripeTheme(wrapper);
    var totalCents = calculateTotal(form);

    // When the initial total is 0 (e.g. nothing checked yet), we cannot call
    // stripe.elements() because Stripe requires amount > 0. Instead we show a
    // prompt and mount the Payment Element the first time the total becomes > 0.
    var elements = null;
    var paymentElement = null;
    var mounted = false;

    // Placeholder shown while total is still 0.
    var placeholder = document.createElement('p');
    placeholder.className = 'wpzf-payment-placeholder';
    placeholder.style.cssText = 'margin:0;padding:12px 0;color:#555;font-size:14px;';
    placeholder.textContent = 'Please select a payment option to continue.';
    function mountPaymentElement() {
      if (mounted) return;
      mounted = true;
      if (placeholder.parentNode) placeholder.remove();
      paymentContainer.style.display = '';
      elements = stripe.elements({
        mode: mode,
        amount: totalCents,
        currency: currency,
        appearance: {
          theme: theme
        }
      });
      paymentElement = elements.create('payment');
      paymentElement.mount(paymentContainer);
    }
    if (totalCents > 0) {
      mountPaymentElement();
    } else {
      paymentContainer.style.display = 'none';
      paymentContainer.parentNode.insertBefore(placeholder, paymentContainer);
    }

    // Keep the element's amount in sync when payment inputs change.
    function onPaymentInputChange(e) {
      var t = e.target;
      if (t.classList.contains('wpzf-payment-item-qty') || t.classList.contains('wpzf-payment-option') || t.classList.contains('wpzf-payment-amount') || t.tagName === 'SELECT' && t.classList.contains('wpzf-payment-options')) {
        totalCents = calculateTotal(form);
        updateTotalDisplay(form, totalCents);
        if (totalCents > 0) {
          if (!mounted) {
            mountPaymentElement();
          } else {
            // Restore visibility if it was hidden.
            if (placeholder.parentNode) placeholder.remove();
            paymentContainer.style.display = '';
            elements.update({
              amount: totalCents
            });
          }
        } else if (mounted) {
          // Total dropped to 0 — hide the element and show the prompt again.
          paymentContainer.style.display = 'none';
          if (!placeholder.parentNode) {
            paymentContainer.parentNode.insertBefore(placeholder, paymentContainer);
          }
        }
      }
    }
    form.addEventListener('change', onPaymentInputChange);
    form.addEventListener('input', onPaymentInputChange);

    // Set initial display.
    updateTotalDisplay(form, totalCents);

    // Intercept form submission.
    var _handleSubmit = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_regenerator().m(function _callee(e) {
        var submitBtn, _yield$elements$submi, submitError, emailField, nameField, payload, intentResponse, intentData, client_secret, payment_intent_id, confirmFn, _yield$confirmFn, confirmError, intentInput, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              e.preventDefault();
              submitBtn = form.querySelector('[type="submit"]');
              if (submitBtn) submitBtn.disabled = true;
              setOverlay(form, true);
              totalCents = calculateTotal(form);
              updateTotalDisplay(form, totalCents);
              if (mounted && totalCents > 0) elements.update({
                amount: totalCents
              });
              if (!(totalCents < 50)) {
                _context.n = 1;
                break;
              }
              showError(form, 'Order total must be at least $0.60.');
              if (submitBtn) submitBtn.disabled = false;
              setOverlay(form, false);
              return _context.a(2);
            case 1:
              if (mounted) {
                _context.n = 2;
                break;
              }
              showError(form, 'Please select a payment option before submitting.');
              if (submitBtn) submitBtn.disabled = false;
              setOverlay(form, false);
              return _context.a(2);
            case 2:
              _context.n = 3;
              return elements.submit();
            case 3:
              _yield$elements$submi = _context.v;
              submitError = _yield$elements$submi.error;
              if (!submitError) {
                _context.n = 4;
                break;
              }
              showError(form, submitError.message);
              if (submitBtn) submitBtn.disabled = false;
              setOverlay(form, false);
              return _context.a(2);
            case 4:
              _context.p = 4;
              // Step 2 — create the PaymentIntent / Subscription on the server.
              emailField = form.querySelector('input[type="email"]');
              nameField = form.querySelector('input.wp-block-wpzoom-forms-text-name-field');
              payload = {
                amount: totalCents,
                form_id: parseInt(formIdInput.value, 10),
                customer_email: emailField ? emailField.value : '',
                customer_name: nameField ? nameField.value : ''
              };
              _context.n = 5;
              return fetch(wpzfStripeData.createIntentUrl, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
              });
            case 5:
              intentResponse = _context.v;
              _context.n = 6;
              return intentResponse.json();
            case 6:
              intentData = _context.v;
              if (!(!intentResponse.ok || intentData.code)) {
                _context.n = 7;
                break;
              }
              showError(form, intentData.message || 'Payment setup failed. Please try again.');
              if (submitBtn) submitBtn.disabled = false;
              setOverlay(form, false);
              return _context.a(2);
            case 7:
              client_secret = intentData.client_secret, payment_intent_id = intentData.payment_intent_id;
              if (client_secret) {
                _context.n = 8;
                break;
              }
              showError(form, 'Payment setup failed: no client secret returned.');
              if (submitBtn) submitBtn.disabled = false;
              setOverlay(form, false);
              return _context.a(2);
            case 8:
              // Step 3 — confirm the payment (or setup for free-trial subscriptions).
              confirmFn = intentData.setup_intent ? stripe.confirmSetup.bind(stripe) : stripe.confirmPayment.bind(stripe);
              _context.n = 9;
              return confirmFn({
                elements: elements,
                clientSecret: client_secret,
                confirmParams: {
                  return_url: window.location.href
                },
                redirect: 'if_required'
              });
            case 9:
              _yield$confirmFn = _context.v;
              confirmError = _yield$confirmFn.error;
              if (!confirmError) {
                _context.n = 10;
                break;
              }
              showError(form, confirmError.message);
              if (submitBtn) submitBtn.disabled = false;
              setOverlay(form, false);
              return _context.a(2);
            case 10:
              // Step 4 — payment confirmed: populate hidden fields then re-submit.
              intentInput = form.querySelector('input[name="wpzf_payment_intent_id"]');
              if (intentInput) {
                intentInput.value = payment_intent_id || intentData.subscription_id || '';
              }
              setHiddenInput(form, 'wpzf_payment_type', paymentType);
              setHiddenInput(form, 'wpzf_payment_method', 'Stripe');
              setHiddenInput(form, 'wpzf_payment_status', 'processing');
              setHiddenInput(form, 'wpzf_payment_items', JSON.stringify(collectPaymentItems(form)));
              form.removeEventListener('submit', _handleSubmit);
              form.submit();
              _context.n = 12;
              break;
            case 11:
              _context.p = 11;
              _t = _context.v;
              console.error('[wpzf-stripe] Unexpected error:', _t);
              showError(form, 'An unexpected error occurred. Please try again.');
              if (submitBtn) submitBtn.disabled = false;
              setOverlay(form, false);
            case 12:
              return _context.a(2);
          }
        }, _callee, null, [[4, 11]]);
      }));
      return function handleSubmit(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    form.addEventListener('submit', _handleSubmit);
  }

  // Initialise on DOM ready.
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.wpzf-stripe-card-wrapper').forEach(function (wrapper) {
      var form = wrapper.closest('form');
      if (form) {
        reformatPriceDisplay(form);
        initFormPayment(form, wrapper);
      }
    });
  });
})();
}();
/******/ })()
;
//# sourceMappingURL=view.js.map