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
 * WPZOOM Forms — Stripe Card Frontend Handler
 *
 * Initialises Stripe Elements for every form on the page that contains a
 * .wpzf-stripe-card-element container, intercepts the form submit to:
 *   1. Create a PaymentIntent via the WP REST API.
 *   2. Confirm the card payment client-side with Stripe.
 *   3. Populate hidden inputs and re-submit the form to admin-post.php.
 */
(function () {
  'use strict';

  // --- DEBUG ---
  console.log('[wpzf-stripe] view.js loaded');
  console.log('[wpzf-stripe] wpzfStripeData:', typeof wpzfStripeData !== 'undefined' ? wpzfStripeData : 'UNDEFINED — script not localized or not enqueued via the correct handle');
  console.log('[wpzf-stripe] Stripe global:', typeof Stripe !== 'undefined' ? 'present' : 'UNDEFINED — stripe-js CDN not loaded');
  console.log('[wpzf-stripe] .wpzf-stripe-card-wrapper elements on page:', document.querySelectorAll('.wpzf-stripe-card-wrapper').length);
  // --- END DEBUG ---

  if (typeof wpzfStripeData === 'undefined' || typeof Stripe === 'undefined') {
    console.warn('[wpzf-stripe] Early exit — missing wpzfStripeData or Stripe. Card will NOT mount.');
    return;
  }
  var stripe = Stripe(wpzfStripeData.publishableKey);

  /**
   * Calculates the order total by reading all .wpzf-payment-item elements
   * inside the given form, multiplying price × quantity.
   *
   * @param {HTMLElement} form The form element.
   * @returns {number} Total in cents.
   */
  function calculateTotal(form) {
    var total = 0;
    var items = form.querySelectorAll('.wpzf-payment-item');
    items.forEach(function (item) {
      var price = parseFloat(item.dataset.price) || 0;
      var qtyInput = item.querySelector('.wpzf-payment-item-qty, input[name$="_qty"]');
      var qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
      total += price * qty;
    });

    // Return cents (integer).
    return Math.round(total * 100);
  }

  /**
   * Updates the .wpzf-payment-total display and hidden input in the form.
   *
   * @param {HTMLElement} form     The form element.
   * @param {number}      totalCents Total in cents.
   */
  function updateTotalDisplay(form, totalCents) {
    var amountEl = form.querySelector('.wpzf-payment-total-amount');
    var hiddenEl = form.querySelector('input[name="wpzf_payment_total"]');
    var dollars = (totalCents / 100).toFixed(2);
    if (amountEl) {
      amountEl.textContent = '$' + dollars;
    }
    if (hiddenEl) {
      hiddenEl.value = String(totalCents);
    }
  }

  /**
   * Shows an error message in the card errors container.
   *
   * @param {HTMLElement} form    The form element.
   * @param {string}      message Error text.
   */
  function showCardError(form, message) {
    var errorEl = form.querySelector('#wpzf-card-errors');
    if (errorEl) {
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
  function initFormPayment(form) {
    var _arguments = arguments;
    var cardContainer = form.querySelector('#wpzf-card-element');
    if (!cardContainer) {
      return;
    }
    var formId = form.querySelector('input[name="form_id"]');
    if (!formId) {
      return;
    }
    var elements = stripe.elements();
    var cardElement = elements.create('card', {
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#cf222e'
        }
      }
    });
    cardElement.mount(cardContainer);

    // Live validation feedback.
    cardElement.on('change', function (event) {
      if (event.error) {
        showCardError(form, event.error.message);
      } else {
        showCardError(form, '');
      }
    });

    // Update totals whenever quantities change.
    form.addEventListener('change', function (e) {
      if (e.target.classList.contains('wpzf-payment-item-qty')) {
        var total = calculateTotal(form);
        updateTotalDisplay(form, total);
      }
    });

    // Set initial total.
    updateTotalDisplay(form, calculateTotal(form));

    // Intercept form submission.
    form.addEventListener('submit', /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_regenerator().m(function _callee(e) {
        var submitBtn, totalCents, payload, intentResponse, intentData, client_secret, payment_intent_id, _yield$stripe$confirm, confirmError, intentInput, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              e.preventDefault();
              submitBtn = form.querySelector('[type="submit"]');
              if (submitBtn) {
                submitBtn.disabled = true;
              }
              totalCents = calculateTotal(form);
              updateTotalDisplay(form, totalCents);
              if (!(totalCents < 50)) {
                _context.n = 1;
                break;
              }
              showCardError(form, 'Order total must be at least $0.50.');
              if (submitBtn) submitBtn.disabled = false;
              return _context.a(2);
            case 1:
              _context.p = 1;
              // 1. Create a PaymentIntent on the server.
              payload = {
                amount: totalCents,
                form_id: parseInt(formId.value, 10)
              };
              console.log('[wpzf-stripe] Sending to create-intent:', payload);
              _context.n = 2;
              return fetch(wpzfStripeData.createIntentUrl, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
              });
            case 2:
              intentResponse = _context.v;
              _context.n = 3;
              return intentResponse.json();
            case 3:
              intentData = _context.v;
              console.log('[wpzf-stripe] create-intent response status:', intentResponse.status, intentData);
              if (!(!intentResponse.ok || intentData.code)) {
                _context.n = 4;
                break;
              }
              showCardError(form, intentData.message || 'Payment setup failed. Please try again.');
              if (submitBtn) submitBtn.disabled = false;
              return _context.a(2);
            case 4:
              client_secret = intentData.client_secret, payment_intent_id = intentData.payment_intent_id; // 2. Confirm the card payment client-side.
              _context.n = 5;
              return stripe.confirmCardPayment(client_secret, {
                payment_method: {
                  card: cardElement
                }
              });
            case 5:
              _yield$stripe$confirm = _context.v;
              confirmError = _yield$stripe$confirm.error;
              if (!confirmError) {
                _context.n = 6;
                break;
              }
              showCardError(form, confirmError.message);
              if (submitBtn) submitBtn.disabled = false;
              return _context.a(2);
            case 6:
              // 3. Populate hidden input and re-submit the form.
              intentInput = form.querySelector('input[name="wpzf_payment_intent_id"]');
              if (intentInput) {
                intentInput.value = payment_intent_id;
              }

              // Re-submit without triggering our listener again.
              form.removeEventListener('submit', _arguments.callee);
              form.submit();
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              showCardError(form, 'An unexpected error occurred. Please try again.');
              if (submitBtn) submitBtn.disabled = false;
            case 8:
              return _context.a(2);
          }
        }, _callee, null, [[1, 7]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  // Initialise on DOM ready.
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.wpzf-stripe-card-wrapper').forEach(function (wrapper) {
      var form = wrapper.closest('form');
      if (form) {
        initFormPayment(form);
      }
    });
  });
})();
}();
/******/ })()
;
//# sourceMappingURL=view.js.map