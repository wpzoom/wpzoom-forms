/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? Object(arguments[r]) : {},
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t).filter(function (e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), o.forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    });
  }
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./node_modules/array-move/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-move/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayMoveImmutable: function() { return /* binding */ arrayMoveImmutable; },
/* harmony export */   arrayMoveMutable: function() { return /* binding */ arrayMoveMutable; }
/* harmony export */ });
function arrayMoveMutable(array, fromIndex, toIndex) {
	const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

		const [item] = array.splice(fromIndex, 1);
		array.splice(endIndex, 0, item);
	}
}

function arrayMoveImmutable(array, fromIndex, toIndex) {
	array = [...array];
	arrayMoveMutable(array, fromIndex, toIndex);
	return array;
}


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else // removed by dead control flow
{}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortableContainer: function() { return /* binding */ sortableContainer; },
/* harmony export */   SortableElement: function() { return /* binding */ sortableElement; },
/* harmony export */   SortableHandle: function() { return /* binding */ sortableHandle; },
/* harmony export */   arrayMove: function() { return /* binding */ arrayMove; },
/* harmony export */   sortableContainer: function() { return /* binding */ sortableContainer; },
/* harmony export */   sortableElement: function() { return /* binding */ sortableElement; },
/* harmony export */   sortableHandle: function() { return /* binding */ sortableHandle; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
















var Manager = function () {
  function Manager() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Manager);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "refs", {});
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);

  return Manager;
}();

function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}

function arrayMove(array, from, to) {
  if (true) {
    if (typeof console !== 'undefined') {
      console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
    }
  }

  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
var events = {
  end: ['touchend', 'touchcancel', 'mouseup'],
  move: ['touchmove', 'mousemove'],
  start: ['touchstart', 'mousedown']
};
var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }

  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';

    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function (key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? '' : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? '' : "".concat(duration, "ms");
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}

function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }

  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    left: 0,
    top: 0
  };

  if (!node) {
    return undefined;
  }

  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop
  };

  if (node.parentNode === parent) {
    return nodeOffset;
  }

  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
      width = _ref.width,
      height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';

  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant__WEBPACK_IMPORTED_MODULE_12___default()(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }

  invariant__WEBPACK_IMPORTED_MODULE_12___default()(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);

  if (unit === '%') {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }

  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height,
      width = _ref2.width,
      lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  invariant__WEBPACK_IMPORTED_MODULE_12___default()(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);

  var _offsets = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(offsets, 2),
      minLockOffset = _offsets[0],
      maxLockOffset = _offsets[1];

  return [getLockPixelOffset({
    height: height,
    lockOffset: minLockOffset,
    width: width
  }), getLockPixelOffset({
    height: height,
    lockOffset: maxLockOffset,
    width: width
  })];
}

function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(function (property) {
    return overflowRegex.test(computedStyle[property]);
  });
}

function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);

  if (style.display === 'grid') {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: 'A',
  Button: 'BUTTON',
  Canvas: 'CANVAS',
  Input: 'INPUT',
  Option: 'OPTION',
  Textarea: 'TEXTAREA',
  Select: 'SELECT'
};
function cloneNode(node) {
  var selector = 'input, textarea, select, canvas, [contenteditable]';
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);

  var clonedFields = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__["default"])(clonedNode.querySelectorAll(selector));

  clonedFields.forEach(function (field, i) {
    if (field.type !== 'file') {
      field.value = fields[i].value;
    }

    if (field.type === 'radio' && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }

    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext('2d');
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}

function sortableHandle(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableHandle, _React$Component);

    function WithSortableHandle() {
      var _getPrototypeOf2;

      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableHandle);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableHandle)).call.apply(_getPrototypeOf2, [this].concat(args)));

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "wrappedInstance", (0,react__WEBPACK_IMPORTED_MODULE_10__.createRef)());

      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableHandle, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var node = (0,react_dom__WEBPACK_IMPORTED_MODULE_11__.findDOMNode)(this);
        node.sortableHandle = true;
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_12___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
        return this.wrappedInstance.current;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? this.wrappedInstance : null;
        return (0,react__WEBPACK_IMPORTED_MODULE_10__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, this.props));
      }
    }]);

    return WithSortableHandle;
  }(react__WEBPACK_IMPORTED_MODULE_10__.Component), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableHandle', WrappedComponent)), _temp;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}

var AutoScroller = function () {
  function AutoScroller(container, onScrollCallback) {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AutoScroller);

    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AutoScroller, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }

      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;

      var translate = _ref.translate,
          minTranslate = _ref.minTranslate,
          maxTranslate = _ref.maxTranslate,
          width = _ref.width,
          height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container,
          scrollTop = _this$container.scrollTop,
          scrollLeft = _this$container.scrollLeft,
          scrollHeight = _this$container.scrollHeight,
          scrollWidth = _this$container.scrollWidth,
          clientHeight = _this$container.clientHeight,
          clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;

      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }

      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }

      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function () {
          _this.isAutoScrolling = true;
          var offset = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset.top;
          _this.container.scrollLeft += offset.left;

          _this.onScrollCallback(offset);
        }, 5);
      }
    }
  }]);

  return AutoScroller;
}();

function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}

function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];

  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }

  if (closest(event.target, function (el) {
    return el.contentEditable === 'true';
  })) {
    return true;
  }

  return false;
}

var propTypes = {
  axis: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOf(['x', 'y', 'xy']),
  contentWindow: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().any),
  disableAutoscroll: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  distance: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  getContainer: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  getHelperDimensions: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  helperClass: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  helperContainer: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), typeof HTMLElement === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_14___default().any) : prop_types__WEBPACK_IMPORTED_MODULE_14___default().instanceOf(HTMLElement)]),
  hideSortableGhost: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  keyboardSortingTransitionDuration: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  lockAxis: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  lockOffset: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string), prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)]))]),
  lockToContainerEdges: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  onSortEnd: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  onSortMove: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  onSortOver: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  onSortStart: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  pressDelay: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  pressThreshold: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  keyCodes: prop_types__WEBPACK_IMPORTED_MODULE_14___default().shape({
    lift: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)),
    drop: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)),
    cancel: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)),
    up: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)),
    down: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().number))
  }),
  shouldCancelStart: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  transitionDuration: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number),
  updateBeforeSortStart: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func),
  useDragHandle: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool),
  useWindowAsScrollContainer: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  invariant__WEBPACK_IMPORTED_MODULE_12___default()(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, value);
}
var SortableContext = (0,react__WEBPACK_IMPORTED_MODULE_10__.createContext)({
  manager: {}
});
function sortableContainer(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableContainer, _React$Component);

    function WithSortableContainer(props) {
      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableContainer);

      _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableContainer).call(this, props));

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {});

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleStart", function (event) {
        var _this$props = _this.props,
            distance = _this$props.distance,
            shouldCancelStart = _this$props.shouldCancelStart;

        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }

        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function (el) {
          return el.sortableInfo != null;
        });

        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo,
              index = _node$sortableInfo.index,
              collection = _node$sortableInfo.collection,
              disabled = _node$sortableInfo.disabled;

          if (disabled) {
            return;
          }

          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }

          _this.manager.active = {
            collection: collection,
            index: index
          };

          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }

          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function () {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "nodeIsChild", function (node) {
        return node.sortableInfo.manager === _this.manager;
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleMove", function (event) {
        var _this$props2 = _this.props,
            distance = _this$props2.distance,
            pressThreshold = _this$props2.pressThreshold;

        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;

          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleEnd", function () {
        _this.touched = false;

        _this.cancel();
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "cancel", function () {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;

        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }

          _this.manager.active = null;
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handlePress", function (event) {
        try {
          var active = _this.manager.getActive();

          var _temp6 = function () {
            if (active) {
              var _temp7 = function _temp7() {
                var index = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);

                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();

                var dimensions = _getHelperDimensions({
                  index: index,
                  node: _node,
                  collection: _collection
                });

                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index;
                _this.newIndex = index;
                _this.axis = {
                  x: _axis.indexOf('x') >= 0,
                  y: _axis.indexOf('y') >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);

                if (_isKeySorting) {
                  _this.initialOffset = getPosition((0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }

                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: 'border-box',
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });

                if (_isKeySorting) {
                  _this.helper.focus();
                }

                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: 'hidden'
                  });
                }

                _this.minTranslate = {};
                _this.maxTranslate = {};

                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight
                  } : _this.containerBoundingRect,
                      containerTop = _ref.top,
                      containerLeft = _ref.left,
                      containerWidth = _ref.width,
                      containerHeight = _ref.height;

                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;

                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }

                if (_helperClass) {
                  _helperClass.split(' ').forEach(function (className) {
                    return _this.helper.classList.add(className);
                  });
                }

                _this.listenerNode = event.touches ? event.target : _this.contentWindow;

                if (_isKeySorting) {
                  _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
                } else {
                  events.move.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }

                _this.setState({
                  sorting: true,
                  sortingIndex: index
                });

                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }

                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };

              var _this$props3 = _this.props,
                  _axis = _this$props3.axis,
                  _getHelperDimensions = _this$props3.getHelperDimensions,
                  _helperClass = _this$props3.helperClass,
                  _hideSortableGhost = _this$props3.hideSortableGhost,
                  updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                  _onSortStart = _this$props3.onSortStart,
                  _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node,
                  _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;

              var _temp8 = function () {
                if (typeof updateBeforeSortStart === 'function') {
                  _this._awaitingUpdateBeforeSortStart = true;

                  var _temp9 = _finallyRethrows(function () {
                    var index = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function () {});
                  }, function (_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown) throw _result;
                    return _result;
                  });

                  if (_temp9 && _temp9.then) return _temp9.then(function () {});
                }
              }();

              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();

          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortMove", function (event) {
        var onSortMove = _this.props.onSortMove;

        if (typeof event.preventDefault === 'function' && event.cancelable) {
          event.preventDefault();
        }

        _this.updateHelperPosition(event);

        _this.animateNodes();

        _this.autoscroll();

        if (onSortMove) {
          onSortMove(event);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortEnd", function (event) {
        var _this$props4 = _this.props,
            hideSortableGhost = _this$props4.hideSortableGhost,
            onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager,
            collection = _this$manager.active.collection,
            isKeySorting = _this$manager.isKeySorting;

        var nodes = _this.manager.getOrderedRefs();

        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
          } else {
            events.move.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }

        _this.helper.parentNode.removeChild(_this.helper);

        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: '',
            visibility: ''
          });
        }

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }

        _this.autoScroller.clear();

        _this.manager.active = null;
        _this.manager.isKeySorting = false;

        _this.setState({
          sorting: false,
          sortingIndex: null
        });

        if (typeof onSortEnd === 'function') {
          onSortEnd({
            collection: collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting: isKeySorting,
            nodes: nodes
          }, event);
        }

        _this.touched = false;
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "autoscroll", function () {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;

        if (disableAutoscroll) {
          _this.autoScroller.clear();

          return;
        }

        if (isKeySorting) {
          var translate = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.translate);

          var scrollX = 0;
          var scrollY = 0;

          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }

          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }

          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }

        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "onAutoScroll", function (offset) {
        _this.translate.x += offset.left;
        _this.translate.y += offset.top;

        _this.animateNodes();
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyDown", function (event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props,
            shouldCancelStart = _this$props5.shouldCancelStart,
            _this$props5$keyCodes = _this$props5.keyCodes,
            customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;

        var keyCodes = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, defaultKeyCodes, customKeyCodes);

        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();

        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;

          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyLift", function (event) {
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo,
            index = _node$sortableInfo2.index,
            collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index,
          collection: collection
        };

        _this.handlePress(event);
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyMove", function (shift) {
        var nodes = _this.manager.getOrderedRefs();

        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;

        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }

        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function (_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };

        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyDrop", function (event) {
        _this.handleSortEnd(event);

        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyEnd", function (event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "isValidSortingTarget", function (event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });

      var manager = new Manager();
      validateProps(props);
      _this.manager = manager;
      _this.wrappedInstance = (0,react__WEBPACK_IMPORTED_MODULE_10__.createRef)();
      _this.sortableContextValue = {
        manager: manager
      };
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function (containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function (key) {
            return events[key].forEach(function (eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });

          _this2.container.addEventListener('keydown', _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;

        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }

        if (!this.container) {
          return;
        }

        Object.keys(this.events).forEach(function (key) {
          return events[key].forEach(function (eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener('keydown', this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props,
            lockAxis = _this$props6.lockAxis,
            lockOffset = _this$props6.lockOffset,
            lockToContainerEdges = _this$props6.lockToContainerEdges,
            transitionDuration = _this$props6.transitionDuration,
            _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
            keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset = getPosition(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;

        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
            height: this.height,
            lockOffset: lockOffset,
            width: this.width
          }),
              _getLockPixelOffsets2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getLockPixelOffsets, 2),
              minLockOffset = _getLockPixelOffsets2[0],
              maxLockOffset = _getLockPixelOffsets2[1];

          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }

        if (lockAxis === 'x') {
          translate.y = 0;
        } else if (lockAxis === 'y') {
          translate.x = 0;
        }

        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }

        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props,
            transitionDuration = _this$props7.transitionDuration,
            hideSortableGhost = _this$props7.hideSortableGhost,
            onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta,
            windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
          var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;

          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;

            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }

          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];

          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);

            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }

          if (index === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: 'hidden'
              });
            }

            continue;
          }

          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }

          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;

                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                if (this.newIndex === null) {
                  this.newIndex = index;
                }
              } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);

                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                this.newIndex = index;
              }
            } else {
              if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index;
              } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;

                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index;
            } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;

              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }

          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }

        if (this.newIndex == null) {
          this.newIndex = this.index;
        }

        if (isKeySorting) {
          this.newIndex = prevIndex;
        }

        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;

        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex: oldIndex,
            isKeySorting: isKeySorting,
            nodes: nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_12___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
        return this.wrappedInstance.current;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer = this.props.getContainer;

        if (typeof getContainer !== 'function') {
          return (0,react_dom__WEBPACK_IMPORTED_MODULE_11__.findDOMNode)(this);
        }

        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? this.wrappedInstance : null;
        return (0,react__WEBPACK_IMPORTED_MODULE_10__.createElement)(SortableContext.Provider, {
          value: this.sortableContextValue
        }, (0,react__WEBPACK_IMPORTED_MODULE_10__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps))));
      }
    }, {
      key: "helperContainer",
      get: function get() {
        var helperContainer = this.props.helperContainer;

        if (typeof helperContainer === 'function') {
          return helperContainer();
        }

        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;

        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }

        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);

    return WithSortableContainer;
  }(react__WEBPACK_IMPORTED_MODULE_10__.Component), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableList', WrappedComponent)), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", defaultProps), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes), _temp;
}

var propTypes$1 = {
  index: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number).isRequired,
  collection: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)]),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableElement, _React$Component);

    function WithSortableElement() {
      var _getPrototypeOf2;

      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableElement);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableElement)).call.apply(_getPrototypeOf2, [this].concat(args)));

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "wrappedInstance", (0,react__WEBPACK_IMPORTED_MODULE_10__.createRef)());

      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }

          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }

        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props,
            collection = _this$props.collection,
            disabled = _this$props.disabled,
            index = _this$props.index;
        var node = (0,react_dom__WEBPACK_IMPORTED_MODULE_11__.findDOMNode)(this);
        node.sortableInfo = {
          collection: collection,
          disabled: disabled,
          index: index,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node: node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_12___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
        return this.wrappedInstance.current;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? this.wrappedInstance : null;
        return (0,react__WEBPACK_IMPORTED_MODULE_10__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);

    return WithSortableElement;
  }(react__WEBPACK_IMPORTED_MODULE_10__.Component), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableElement', WrappedComponent)), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "contextType", SortableContext), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes$1), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", {
    collection: 0
  }), _temp;
}




/***/ }),

/***/ "./src/main/backend/icons.js":
/*!***********************************!*\
  !*** ./src/main/backend/icons.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Custom SVG icons for form fields
var FormIcons = {
  multiCheckbox: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 16.2503C6.96621 16.2503 7.75 17.0341 7.75 18.0003V20.0003C7.74985 20.9664 6.96612 21.7503 6 21.7503H4C3.03388 21.7503 2.25015 20.9664 2.25 20.0003V18.0003C2.25 17.0341 3.03379 16.2503 4 16.2503H6ZM4 17.7503C3.86221 17.7503 3.75 17.8626 3.75 18.0003V20.0003C3.75015 20.138 3.86231 20.2503 4 20.2503H6C6.13769 20.2503 6.24985 20.138 6.25 20.0003V18.0003C6.25 17.8626 6.13779 17.7503 6 17.7503H4Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 18.2503C21.4142 18.2503 21.75 18.5861 21.75 19.0003C21.7498 19.4144 21.4141 19.7503 21 19.7503H11C10.5859 19.7503 10.2502 19.4144 10.25 19.0003C10.25 18.5861 10.5858 18.2503 11 18.2503H21Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 9.25035C6.96621 9.25035 7.75 10.0341 7.75 11.0003V13.0003C7.74985 13.9664 6.96612 14.7503 6 14.7503H4C3.03388 14.7503 2.25015 13.9664 2.25 13.0003V11.0003C2.25 10.0341 3.03379 9.25035 4 9.25035H6ZM4 10.7503C3.86221 10.7503 3.75 10.8626 3.75 11.0003V13.0003C3.75015 13.138 3.86231 13.2503 4 13.2503H6C6.13769 13.2503 6.24985 13.138 6.25 13.0003V11.0003C6.25 10.8626 6.13779 10.7503 6 10.7503H4Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 11.2503C21.4142 11.2503 21.75 11.5861 21.75 12.0003C21.7498 12.4144 21.4141 12.7503 21 12.7503H11C10.5859 12.7503 10.2502 12.4144 10.25 12.0003C10.25 11.5861 10.5858 11.2503 11 11.2503H21Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.02539 3.47007C6.31823 3.17724 6.79303 3.17735 7.08594 3.47007C7.37869 3.76298 7.37878 4.23777 7.08594 4.53062L4.86426 6.7523C4.58965 7.02677 4.1549 7.04436 3.86035 6.80406L3.80371 6.75328L2.46973 5.42027L2.41797 5.36265C2.17794 5.06822 2.19549 4.63333 2.46973 4.35875C2.74427 4.08437 3.17909 4.06685 3.47363 4.30699L3.53027 4.35875L4.33301 5.16148L6.02539 3.47007Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 4.25035C21.4142 4.25035 21.75 4.58613 21.75 5.00035C21.7498 5.41443 21.4141 5.75035 21 5.75035H11C10.5859 5.75035 10.2502 5.41443 10.25 5.00035C10.25 4.58613 10.5858 4.25035 11 4.25035H21Z",
    fill: "black"
  })),
  checkbox: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.2188 9.38867C15.5132 9.14876 15.9481 9.16617 16.2227 9.44043C16.5152 9.73322 16.5151 10.2081 16.2227 10.501L11.4355 15.2891C11.295 15.4297 11.1041 15.5087 10.9053 15.5088C10.7065 15.5088 10.5156 15.4296 10.375 15.2891L8.18164 13.0957L8.12988 13.0391C7.8899 12.7445 7.90716 12.3096 8.18164 12.0352C8.4563 11.7607 8.89105 11.744 9.18555 11.9844L9.24219 12.0352L10.9043 13.6973L15.1611 9.44043L15.2188 9.38867Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19 2.25C20.5192 2.25 21.75 3.48079 21.75 5V19C21.75 20.5192 20.5192 21.75 19 21.75H5C3.48079 21.75 2.25 20.5192 2.25 19V5C2.25 3.48079 3.48079 2.25 5 2.25H19ZM5 3.75C4.30921 3.75 3.75 4.30921 3.75 5V19C3.75 19.6908 4.30921 20.25 5 20.25H19C19.6908 20.25 20.25 19.6908 20.25 19V5C20.25 4.30921 19.6908 3.75 19 3.75H5Z",
    fill: "black"
  })),
  emailInput: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M12 2.25C17.3852 2.25 21.75 6.61479 21.75 12V13.5C21.75 15.2952 20.2952 16.75 18.5 16.75C17.2652 16.75 16.1917 16.0617 15.6416 15.0479C14.7702 16.0878 13.4628 16.75 12 16.75C9.37679 16.75 7.25 14.6232 7.25 12C7.25 9.37679 9.37679 7.25 12 7.25C14.6232 7.25 16.75 9.37679 16.75 12V13.5C16.75 14.4668 17.5332 15.25 18.5 15.25C19.4668 15.25 20.25 14.4668 20.25 13.5V12C20.25 7.44321 16.5568 3.75 12 3.75C7.44321 3.75 3.75 7.44321 3.75 12C3.75 16.5568 7.44321 20.25 12 20.25C13.0536 20.25 14.1241 20.0502 15.1572 19.6221L15.5654 19.4395C15.9663 19.2457 16.3459 19.0203 16.7051 18.7705C17.0451 18.5341 17.5125 18.618 17.749 18.958C17.9852 19.298 17.9014 19.7655 17.5615 20.002C17.0723 20.3422 16.5444 20.6466 15.9766 20.9014L15.7314 21.0078C14.5106 21.5137 13.2444 21.75 12 21.75C6.61479 21.75 2.25 17.3852 2.25 12C2.25 6.61479 6.61479 2.25 12 2.25ZM12 8.75C10.2052 8.75 8.75 10.2052 8.75 12C8.75 13.7948 10.2052 15.25 12 15.25C13.7948 15.25 15.25 13.7948 15.25 12C15.25 10.2052 13.7948 8.75 12 8.75Z",
    fill: "black"
  })),
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.31934 7.15039C7.73681 6.81004 8.33936 6.81004 8.75684 7.15039L8.84375 7.22852L8.92188 7.31543C9.28647 7.76279 9.26065 8.42294 8.84375 8.83984C8.39898 9.28456 7.67723 9.2845 7.23242 8.83984C6.78763 8.39505 6.78766 7.67333 7.23242 7.22852L7.31934 7.15039Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10.3594 2.26172C10.902 2.31138 11.4169 2.52263 11.8379 2.86621L12.041 3.04883L20.9453 11.958L21.1338 12.167C21.9559 13.1752 21.9561 14.6306 21.1338 15.6387L20.9453 15.8477L15.8516 20.9443C14.7776 22.0194 13.0339 22.0196 11.96 20.9443L3.0498 12.0303C2.53815 11.5186 2.25002 10.8235 2.25 10.0986V7.28711C2.25 6.56225 2.53815 5.86714 3.0498 5.35547L5.3291 3.0752L5.52832 2.89551C6.00878 2.50097 6.61107 2.28141 7.2373 2.27637L10.0859 2.25L10.3594 2.26172ZM7.25098 3.77539C6.96915 3.77756 6.69636 3.87645 6.47949 4.05469L6.39062 4.13574L4.11035 6.41602C3.88006 6.64633 3.75 6.96001 3.75 7.28711V10.0986C3.75002 10.4257 3.88005 10.7394 4.11035 10.9697L13.0215 19.8838L13.1162 19.9697C13.6072 20.3708 14.3324 20.342 14.79 19.8838L19.8848 14.7871L19.9707 14.6914C20.3441 14.2332 20.3442 13.5714 19.9707 13.1133L19.8848 13.0186L10.9814 4.11133L10.8896 4.02832C10.6988 3.87257 10.4662 3.77719 10.2227 3.75488L10.0996 3.75L7.25098 3.77539Z",
    fill: "black"
  })),
  nameInput: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.4238 15.25C15.4257 15.25 16.3853 15.6291 17.1182 16.3086L17.2764 16.4639C17.5836 16.7819 17.8362 17.1488 18.0225 17.5508L18.1104 17.7539L18.1348 17.8271C18.2385 18.1928 18.0504 18.5853 17.6895 18.7285C17.3288 18.8715 16.9233 18.7149 16.748 18.3779L16.7158 18.3076L16.6611 18.1816C16.5264 17.891 16.3362 17.6283 16.0996 17.4092C15.6426 16.9852 15.0456 16.75 14.4238 16.75H9.57617C9.03239 16.75 8.50773 16.9297 8.07812 17.2588L7.89941 17.4092C7.62976 17.6589 7.41914 17.9656 7.28223 18.3086L7.25098 18.3789C7.07514 18.716 6.66831 18.8715 6.30762 18.7275C5.92315 18.5739 5.73617 18.1375 5.88965 17.7529L5.97656 17.5498C6.19385 17.0822 6.49996 16.6605 6.87988 16.3086L7.02051 16.1846C7.73408 15.5831 8.6366 15.25 9.57617 15.25H14.4238Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8.99512 6.91699C10.6548 5.25734 13.3452 5.25735 15.0049 6.91699L15.1562 7.0752C16.6635 8.74353 16.6127 11.3189 15.0049 12.9268C13.3451 14.5865 10.6549 14.5865 8.99512 12.9268C7.33546 11.267 7.33541 8.5767 8.99512 6.91699ZM13.7354 7.78809C12.6552 6.90756 11.0623 6.97092 10.0557 7.97754C8.98174 9.05146 8.98179 10.7923 10.0557 11.8662C11.1296 12.9402 12.8704 12.9402 13.9443 11.8662C14.951 10.8595 15.0144 9.26663 14.1338 8.18652L13.9443 7.97754L13.7354 7.78809Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19 2.25C20.5192 2.25 21.75 3.48079 21.75 5V19C21.75 20.5192 20.5192 21.75 19 21.75H5C3.48079 21.75 2.25 20.5192 2.25 19V5C2.25 3.48079 3.48079 2.25 5 2.25H19ZM5 3.75C4.30921 3.75 3.75 4.30921 3.75 5V19C3.75 19.6908 4.30921 20.25 5 20.25H19C19.6908 20.25 20.25 19.6908 20.25 19V5C20.25 4.30921 19.6908 3.75 19 3.75H5Z",
    fill: "black"
  })),
  phoneInput: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.95704 3.25C7.55364 3.2501 8.12599 3.48731 8.54786 3.90918L10.4648 5.82617L10.6533 6.03516C11.4758 7.0434 11.4759 8.49863 10.6533 9.50684L10.4648 9.71582L9.31543 10.8643C10.0742 12.5648 11.4344 13.9246 13.1348 14.6836L14.2842 13.5352L14.4863 13.3525C14.9757 12.9516 15.5913 12.7295 16.2295 12.7295C16.9587 12.7296 17.6582 13.0195 18.1738 13.5352L20.0908 15.4521L20.2451 15.623C20.9182 16.448 20.9183 17.6389 20.2451 18.4639L20.0908 18.6348L19.2324 19.4932C18.4788 20.2468 17.4735 20.6907 16.4141 20.7441L16.2012 20.75C12.7654 20.7529 9.4695 19.3894 7.04004 16.96C4.6106 14.5305 3.24706 11.2346 3.25 7.79883L3.25586 7.58594C3.30933 6.5265 3.75323 5.52125 4.50684 4.76758L5.36524 3.90918L5.53028 3.75977C5.93071 3.43153 6.43474 3.25 6.95704 3.25ZM6.95704 4.75C6.80799 4.75 6.66326 4.79456 6.54102 4.87598L6.42676 4.96973L5.56739 5.82812C5.04452 6.35106 4.7507 7.06031 4.75 7.7998L4.76368 8.36816C4.90187 11.1989 6.08704 13.8859 8.10059 15.8994C10.2484 18.0473 13.1627 19.2526 16.2002 19.25L16.4756 19.2363C17.1139 19.1725 17.7143 18.8902 18.1719 18.4326L19.0303 17.5732L19.082 17.5166C19.3061 17.2418 19.306 16.8452 19.082 16.5703L19.0303 16.5127L17.1133 14.5957C16.879 14.3614 16.5609 14.2296 16.2295 14.2295C15.9393 14.2295 15.659 14.3303 15.4365 14.5127L15.3447 14.5957L13.8418 16.0986C13.6342 16.3061 13.3248 16.374 13.0498 16.2715C10.5884 15.3535 8.64647 13.4116 7.72852 10.9502C7.62603 10.6752 7.69387 10.3658 7.90137 10.1582L9.4043 8.6543L9.49024 8.55957C9.8637 8.10146 9.86363 7.44057 9.49024 6.98242L9.4043 6.88672L7.48731 4.96973C7.34675 4.82917 7.15581 4.7501 6.95704 4.75Z",
    fill: "black"
  })),
  textInput: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 20.25C16.4142 20.25 16.75 20.5858 16.75 21C16.75 21.4142 16.4142 21.75 16 21.75H4C3.58579 21.75 3.25 21.4142 3.25 21C3.25 20.5858 3.58579 20.25 4 20.25H16Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 16.25C20.4142 16.25 20.75 16.5858 20.75 17C20.75 17.4142 20.4142 17.75 20 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H20Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.71484 13.3115C4.55067 13.6914 4.10961 13.8669 3.72949 13.7031C3.34915 13.5391 3.17384 13.0971 3.33789 12.7168L4.71484 13.3115Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7.95215 3.25294C7.98573 3.25469 8.01894 3.2575 8.05176 3.26368C8.08353 3.26964 8.11508 3.27781 8.14648 3.28809C8.1557 3.29111 8.16474 3.29449 8.17383 3.29786C8.18613 3.30241 8.19875 3.30628 8.21094 3.31153C8.23146 3.32038 8.25119 3.33041 8.27051 3.34083C8.27744 3.34457 8.2842 3.34858 8.29102 3.35254C8.31685 3.36754 8.34081 3.38473 8.36426 3.40235C8.38566 3.41844 8.40512 3.43665 8.4248 3.45508C8.44089 3.47014 8.4571 3.48469 8.47168 3.50098C8.48741 3.51857 8.50148 3.53742 8.51562 3.55665C8.53027 3.57652 8.54504 3.59607 8.55762 3.61719C8.56119 3.62322 8.56591 3.62862 8.56934 3.63477L8.60352 3.70411L11.7871 11.1094C11.7895 11.1152 11.7917 11.1211 11.7939 11.127L12.4785 12.7178C12.642 13.0983 12.4654 13.5395 12.085 13.7031C11.7045 13.8665 11.2632 13.6909 11.0996 13.3106L10.5996 12.1465H5.21777L4.71484 13.3115L4.02637 13.0137L3.33789 12.7168L4.0127 11.1514C4.02486 11.1163 4.03865 11.0823 4.05566 11.0498L7.22559 3.70313C7.24287 3.66307 7.2631 3.6252 7.28613 3.58985C7.34153 3.50484 7.41477 3.4308 7.50293 3.37305C7.51576 3.36466 7.52968 3.35817 7.54297 3.35059C7.56739 3.33666 7.59173 3.32191 7.61816 3.31055C7.62262 3.30864 7.62737 3.30749 7.63184 3.30567C7.64109 3.30191 7.65076 3.29929 7.66016 3.2959C7.69741 3.28244 7.73461 3.27098 7.77246 3.26368C7.77761 3.26268 7.78292 3.26261 7.78809 3.26172C7.82854 3.2548 7.86886 3.25121 7.90918 3.25098C7.92351 3.25088 7.93777 3.25221 7.95215 3.25294ZM5.86426 10.6465H9.9541L7.91211 5.89649L5.86426 10.6465Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M14.9326 7.69532C16.1478 6.5966 17.9515 6.50718 19.2627 7.42676C19.3264 7.07715 19.632 6.81153 20 6.81153C20.4141 6.81153 20.7497 7.14754 20.75 7.56153V13C20.7497 13.414 20.4141 13.75 20 13.75C19.6318 13.75 19.3262 13.4847 19.2627 13.1348C17.951 14.0553 16.1483 13.9676 14.9326 12.8682L14.8027 12.7451C13.4422 11.3844 13.4417 9.17843 14.8027 7.81837L14.9326 7.69532ZM18.5186 8.74317C17.74 8.10732 16.5901 8.15282 15.8643 8.87891L15.8633 8.87989C15.0889 9.65378 15.0882 10.9094 15.8633 11.6846L16.0146 11.8213C16.7931 12.4564 17.9423 12.4112 18.6689 11.6846L18.8057 11.5342C19.3987 10.8076 19.3982 9.75786 18.8047 9.03028L18.6689 8.87891L18.5186 8.74317Z",
    fill: "black"
  })),
  radio: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.26444 16.8661C4.32421 16.0022 5.87557 16.049 6.88456 17.0018L6.88749 17.0038L6.94413 17.0556L7.13358 17.2645C7.95522 18.2725 7.95526 19.7273 7.13358 20.7352L6.94413 20.9442C5.93749 21.9509 4.34456 22.0141 3.26444 21.1337L3.05546 20.9442C1.98151 19.8703 1.98151 18.1295 3.05546 17.0556L3.26444 16.8661ZM5.78885 18.0302C5.33063 17.6564 4.66898 17.6564 4.21073 18.0302L4.116 18.1161C3.62785 18.6043 3.62785 19.3955 4.116 19.8837L4.21073 19.9696C4.7017 20.37 5.42597 20.3413 5.88358 19.8837L5.96952 19.789C6.34322 19.3307 6.34319 18.6691 5.96952 18.2108L5.88358 18.1161L5.78885 18.0302Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.9998 18.2499C21.4139 18.25 21.7498 18.5857 21.7498 18.9999C21.7498 19.414 21.4139 19.7498 20.9998 19.7499H10.9998C10.5856 19.7499 10.2498 19.4141 10.2498 18.9999C10.2498 18.5857 10.5856 18.2499 10.9998 18.2499H20.9998Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.26444 9.8661C4.32421 9.00218 5.87557 9.04904 6.88456 10.0018L6.88749 10.0038L6.94413 10.0556L7.13358 10.2645C7.95522 11.2725 7.95526 12.7273 7.13358 13.7352L6.94413 13.9442C5.93749 14.9509 4.34456 15.0141 3.26444 14.1337L3.05546 13.9442C1.98151 12.8703 1.98151 11.1295 3.05546 10.0556L3.26444 9.8661ZM5.78885 11.0302C5.33063 10.6564 4.66898 10.6564 4.21073 11.0302L4.116 11.1161C3.62785 11.6043 3.62785 12.3955 4.116 12.8837L4.21073 12.9696C4.7017 13.37 5.42597 13.3413 5.88358 12.8837L5.96952 12.789C6.34322 12.3307 6.34319 11.6691 5.96952 11.2108L5.88358 11.1161L5.78885 11.0302Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.9998 11.2499C21.4139 11.25 21.7498 11.5857 21.7498 11.9999C21.7498 12.414 21.4139 12.7498 20.9998 12.7499H10.9998C10.5856 12.7499 10.2498 12.4141 10.2498 11.9999C10.2498 11.5857 10.5856 11.2499 10.9998 11.2499H20.9998Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.26444 2.8661C4.32421 2.00217 5.87557 2.04904 6.88456 3.00184L6.88749 3.0038L6.94413 3.05555L7.13358 3.26454C7.95522 4.27247 7.95526 5.72733 7.13358 6.73524L6.94413 6.94422C5.93749 7.95086 4.34456 8.01414 3.26444 7.13368L3.05546 6.94422C1.98151 5.87028 1.98151 4.1295 3.05546 3.05555L3.26444 2.8661ZM5.78885 4.03016C5.33063 3.65639 4.66898 3.65644 4.21073 4.03016L4.116 4.1161C3.62785 4.60426 3.62785 5.39552 4.116 5.88368L4.21073 5.96962C4.7017 6.36996 5.42597 6.34129 5.88358 5.88368L5.96952 5.78895C6.34323 5.33075 6.34318 4.66906 5.96952 4.21083L5.88358 4.1161L5.78885 4.03016Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.9998 4.24989C21.4139 4.25 21.7498 4.58575 21.7498 4.99989C21.7498 5.414 21.4139 5.74978 20.9998 5.74989H10.9998C10.5856 5.74989 10.2498 5.41407 10.2498 4.99989C10.2498 4.58568 10.5856 4.24989 10.9998 4.24989H20.9998Z",
    fill: "black"
  })),
  select: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M15.3223 14.8086C15.3223 13.424 16.9988 12.7245 17.9805 13.708L17.9795 13.709L23.293 19.0205C24.2426 19.9701 23.6215 21.5746 22.3193 21.6738L22.1914 21.6777H19.6084L17.9756 23.2969C16.9923 24.2704 15.3224 23.575 15.3223 22.1914V14.8086ZM16.8574 14.7559C16.8421 14.7622 16.833 14.7709 16.8291 14.7764C16.8275 14.7786 16.8262 14.7812 16.8252 14.7842C16.8243 14.7871 16.8223 14.7952 16.8223 14.8086V22.1914C16.8223 22.2045 16.8242 22.2117 16.8252 22.2148C16.8262 22.2179 16.8276 22.2204 16.8291 22.2227C16.8329 22.228 16.842 22.2377 16.8574 22.2441C16.8726 22.2504 16.8851 22.2501 16.8916 22.249C16.8945 22.2485 16.8973 22.2477 16.9004 22.2461C16.9033 22.2446 16.9096 22.2406 16.9189 22.2314L18.7715 20.3955L18.8848 20.3027C19.0066 20.222 19.1506 20.1778 19.2988 20.1777H22.1914C22.2052 20.1777 22.2127 20.1758 22.2158 20.1748C22.2191 20.1738 22.2213 20.1725 22.2236 20.1709C22.2289 20.1672 22.2378 20.1587 22.2441 20.1436C22.2504 20.1286 22.251 20.1159 22.25 20.1094C22.2495 20.1066 22.2486 20.1035 22.2471 20.1006C22.2456 20.0978 22.242 20.0906 22.2324 20.0811L16.918 14.7676C16.9086 14.7583 16.9021 14.7543 16.8994 14.7529C16.8967 14.7516 16.8942 14.7514 16.8916 14.751C16.8854 14.7499 16.873 14.7494 16.8574 14.7559Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.4756 1.25C18.8698 1.25 20 2.3802 20 3.77441V10.625C20 11.0392 19.6642 11.375 19.25 11.375C18.8358 11.375 18.5 11.0392 18.5 10.625V3.77441C18.5 3.20863 18.0414 2.75 17.4756 2.75H3.77441C3.20863 2.75 2.75 3.20863 2.75 3.77441V17.4756C2.75 18.0414 3.20863 18.5 3.77441 18.5H12C12.4142 18.5 12.75 18.8358 12.75 19.25C12.75 19.6642 12.4142 20 12 20H3.77441C2.3802 20 1.25 18.8698 1.25 17.4756V3.77441C1.25 2.3802 2.3802 1.25 3.77441 1.25H17.4756Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.58203 14.3525C5.95754 14.0463 6.49541 14.0593 6.85938 14.3682C6.86576 14.3733 6.87169 14.3794 6.87793 14.3848L6.91797 14.4189L6.96973 14.4756C7.3098 14.8687 7.29328 15.4625 6.91992 15.8359C6.52905 16.2267 5.89673 16.2267 5.50586 15.8359C5.11519 15.4451 5.11513 14.8127 5.50586 14.4219L5.58203 14.3525Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.0762 14.3789C12.4545 14.4172 12.75 14.7366 12.75 15.125C12.75 15.5134 12.4545 15.8328 12.0762 15.8711L12 15.875H10.3447C9.93051 15.875 9.59473 15.5392 9.59473 15.125C9.59473 14.7108 9.93051 14.375 10.3447 14.375H12L12.0762 14.3789Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M5.49609 9.84668C5.86949 9.54497 6.40882 9.55213 6.77539 9.86621C6.79408 9.88147 6.81259 9.89771 6.83008 9.91504L6.83203 9.91699L6.90137 9.99316C7.2219 10.3861 7.19829 10.9656 6.83203 11.332C6.44119 11.7227 5.80881 11.7227 5.41797 11.332C5.02726 10.9411 5.02714 10.3078 5.41797 9.91699L5.41992 9.91504L5.49609 9.84668ZM6.31543 10.4336L6.30176 10.4473L6.12598 10.625L6.44824 10.3008L6.47754 10.2705L6.47656 10.2695L6.31543 10.4336Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.5918 9.87891C15.9699 9.91742 16.2646 10.2368 16.2646 10.625C16.2646 11.0132 15.9699 11.3326 15.5918 11.3711L15.5146 11.375H10.2549C9.84072 11.3749 9.50488 11.0392 9.50488 10.625C9.50488 10.2108 9.84072 9.87506 10.2549 9.875H15.5146L15.5918 9.87891Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.49414 5.35156C5.86967 5.04531 6.40754 5.05828 6.77148 5.36719C6.77789 5.37235 6.78377 5.37837 6.79004 5.38379L6.83008 5.41797L6.88184 5.47461C7.2219 5.86773 7.20535 6.46151 6.83203 6.83496C6.44116 7.22573 5.80884 7.22573 5.41797 6.83496C5.02724 6.44409 5.02721 5.81176 5.41797 5.4209L5.49414 5.35156Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.5918 5.37891C15.9699 5.41742 16.2646 5.73675 16.2646 6.125C16.2646 6.51325 15.9699 6.83258 15.5918 6.87109L15.5146 6.875H10.2549C9.84072 6.87494 9.50488 6.53917 9.50488 6.125C9.50488 5.71083 9.84072 5.37506 10.2549 5.375H15.5146L15.5918 5.37891Z",
    fill: "black"
  })),
  submit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10.2012 9.97168C10.7781 9.73057 11.4437 9.85955 11.8887 10.2988L18.29 16.6182L18.3701 16.7041C18.7527 17.1437 18.8586 17.7653 18.6348 18.3105C18.4108 18.8559 17.8987 19.2238 17.3174 19.2676L17.2002 19.2715H13.9658L11.8838 21.3096C11.4658 21.7187 10.8561 21.8555 10.3076 21.6719L10.1982 21.6309C9.62319 21.389 9.24916 20.826 9.24902 20.2021V11.4023C9.24902 10.7772 9.6245 10.2129 10.2012 9.97168ZM10.7803 11.3555C10.7615 11.3633 10.749 11.3821 10.749 11.4023V20.2021C10.7492 20.2223 10.7617 20.2402 10.7803 20.248L10.8086 20.251C10.8182 20.2492 10.8277 20.2444 10.835 20.2373L13.1348 17.9863L13.249 17.8945C13.3703 17.8151 13.5132 17.7715 13.6602 17.7715H17.2002L17.2285 17.7637C17.2367 17.7582 17.2432 17.7497 17.2471 17.7402C17.2507 17.7311 17.2518 17.7212 17.25 17.7119L17.2354 17.6855L10.835 11.3662C10.8206 11.352 10.7989 11.3478 10.7803 11.3555Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.0029 2.24609C20.5221 2.24619 21.7539 3.47886 21.7539 4.99805V11C21.7536 12.519 20.5219 13.7509 19.0029 13.751H18.002C17.5881 13.7508 17.2522 13.4148 17.252 13.001C17.2521 12.587 17.588 12.2512 18.002 12.251H19.0029C19.6935 12.2509 20.2536 11.6905 20.2539 11V4.99805C20.2539 4.30729 19.6937 3.74716 19.0029 3.74707H4.99707C4.30625 3.74707 3.74609 4.30723 3.74609 4.99805V11C3.74636 11.6906 4.30642 12.251 4.99707 12.251H6.99805L7.07422 12.2549C7.45242 12.2932 7.74792 12.6127 7.74805 13.001C7.7478 13.3891 7.45234 13.7088 7.07422 13.7471L6.99805 13.751H4.99707C3.47799 13.751 2.24636 12.519 2.24609 11V4.99805C2.24609 3.4788 3.47783 2.24609 4.99707 2.24609H19.0029Z",
    fill: "black"
  })),
  textarea: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19 3.25C20.5192 3.25 21.75 4.48079 21.75 6V18C21.75 19.5192 20.5192 20.75 19 20.75H6C4.48079 20.75 3.25 19.5192 3.25 18V14C3.25 13.5858 3.58579 13.25 4 13.25C4.41421 13.25 4.75 13.5858 4.75 14V18C4.75 18.6908 5.30921 19.25 6 19.25H19C19.6908 19.25 20.25 18.6908 20.25 18V6C20.25 5.30921 19.6908 4.75 19 4.75H14C13.5858 4.75 13.25 4.41421 13.25 4C13.25 3.58579 13.5858 3.25 14 3.25H19Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 15.25C17.4142 15.25 17.75 15.5858 17.75 16C17.75 16.4142 17.4142 16.75 17 16.75H8C7.58579 16.75 7.25 16.4142 7.25 16C7.25 15.5858 7.58579 15.25 8 15.25H17Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 11.25C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.4142 17.4142 12.75 17 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H17Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.66699 3.25C10.2652 3.25 10.75 3.73479 10.75 4.33301V5.3584C10.7498 5.77243 10.4141 6.1084 10 6.1084C9.58592 6.1084 9.25022 5.77243 9.25 5.3584V4.75H7.75V9.25H8.5C8.91421 9.25 9.25 9.58579 9.25 10C9.25 10.4142 8.91421 10.75 8.5 10.75H5.5C5.08579 10.75 4.75 10.4142 4.75 10C4.75 9.58579 5.08579 9.25 5.5 9.25H6.25V4.75H4.75V5.3584C4.74978 5.77243 4.41408 6.1084 4 6.1084C3.58592 6.1084 3.25022 5.77243 3.25 5.3584V4.33301C3.25 3.73479 3.73479 3.25 4.33301 3.25H9.66699Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 7.25C17.4142 7.25 17.75 7.58579 17.75 8C17.75 8.41421 17.4142 8.75 17 8.75H13C12.5858 8.75 12.25 8.41421 12.25 8C12.25 7.58579 12.5858 7.25 13 7.25H17Z",
    fill: "black"
  })),
  websiteInput: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M12 9.75C14.6282 9.75 16.75 11.8718 16.75 14.5C16.75 17.1282 14.6282 19.25 12 19.25C9.37179 19.25 7.25 17.1282 7.25 14.5C7.25 11.8718 9.37179 9.75 12 9.75ZM14.2607 15.25C14.1818 15.9469 13.9922 16.6321 13.6924 17.2764C14.4225 16.8316 14.9618 16.1075 15.1631 15.25H14.2607ZM8.83691 15.25C9.03806 16.1068 9.57653 16.8305 10.3057 17.2754C10.0063 16.6315 9.81714 15.9465 9.73828 15.25H8.83691ZM11.252 15.25C11.3554 15.9526 11.604 16.6363 12 17.2461C12.3961 16.6363 12.6446 15.9527 12.748 15.25H11.252ZM10.3066 11.7227C9.57671 12.1675 9.0382 12.8926 8.83691 13.75H9.73828C9.81727 13.0528 10.0066 12.3671 10.3066 11.7227ZM12 11.7539C11.6038 12.3635 11.3554 13.0473 11.252 13.75H12.748C12.6446 13.0473 12.3962 12.3636 12 11.7539ZM13.6924 11.7227C13.9925 12.3671 14.1817 13.0528 14.2607 13.75H15.1631C14.9617 12.8923 14.4227 12.1674 13.6924 11.7227Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.85645 4.74414C4.87328 4.74586 4.88977 4.74914 4.90625 4.75195C4.90915 4.75245 4.91214 4.7524 4.91504 4.75293C4.93888 4.75729 4.96138 4.7659 4.98438 4.77246C5.0122 4.78032 5.04066 4.78739 5.06836 4.79883L5.07324 4.7998C5.15731 4.83517 5.23987 4.88733 5.31348 4.96094C5.47394 5.1214 5.53418 5.32318 5.53418 5.49512C5.53418 5.66705 5.47394 5.86884 5.31348 6.0293C5.15302 6.18976 4.95123 6.25 4.7793 6.25C4.60736 6.25 4.40558 6.18976 4.24512 6.0293C4.12488 5.90906 4.06074 5.76555 4.03613 5.62891L4.02441 5.49512L4.03613 5.36133C4.06074 5.22469 4.12488 5.08118 4.24512 4.96094C4.31872 4.88733 4.40128 4.83517 4.48535 4.7998L4.48926 4.79883C4.51693 4.78736 4.54544 4.78035 4.57324 4.77246C4.59622 4.76587 4.61875 4.75732 4.64258 4.75293C4.64548 4.7524 4.64847 4.75245 4.65137 4.75195C4.69299 4.74479 4.73563 4.74023 4.7793 4.74023L4.85645 4.74414Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.39941 4.74414C7.41625 4.74586 7.43274 4.74914 7.44922 4.75195C7.45211 4.75245 7.45511 4.7524 7.45801 4.75293C7.48185 4.75729 7.50435 4.7659 7.52734 4.77246C7.55517 4.78032 7.58363 4.78739 7.61133 4.79883L7.61621 4.7998C7.70028 4.83517 7.78284 4.88733 7.85645 4.96094C8.01691 5.1214 8.07715 5.32318 8.07715 5.49512C8.07715 5.66705 8.01691 5.86884 7.85645 6.0293C7.69599 6.18976 7.4942 6.25 7.32227 6.25C7.10372 6.25 6.93315 6.15787 6.8252 6.06348C6.7183 5.96995 6.60085 5.80964 6.57324 5.5918L6.56738 5.49512L6.5791 5.36133C6.60371 5.22469 6.66784 5.08118 6.78809 4.96094C6.86169 4.88733 6.94425 4.83517 7.02832 4.7998L7.03223 4.79883C7.0599 4.78736 7.08841 4.78035 7.11621 4.77246C7.13919 4.76587 7.16172 4.75732 7.18555 4.75293C7.18845 4.7524 7.19144 4.75245 7.19434 4.75195C7.23596 4.74479 7.2786 4.74023 7.32227 4.74023L7.39941 4.74414Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.93848 4.74414C9.95531 4.74586 9.9718 4.74914 9.98828 4.75195C9.99118 4.75245 9.99417 4.7524 9.99707 4.75293C10.0209 4.75729 10.0434 4.7659 10.0664 4.77246C10.0942 4.78032 10.1227 4.78739 10.1504 4.79883L10.1553 4.7998C10.2393 4.83517 10.3219 4.88733 10.3955 4.96094C10.556 5.1214 10.6162 5.32318 10.6162 5.49512C10.6162 5.66705 10.556 5.86884 10.3955 6.0293C10.235 6.18976 10.0333 6.25 9.86133 6.25C9.68939 6.25 9.48761 6.18976 9.32715 6.0293C9.20691 5.90906 9.14277 5.76555 9.11816 5.62891L9.10645 5.49512L9.11816 5.36133C9.14277 5.22469 9.20691 5.08118 9.32715 4.96094C9.40075 4.88733 9.48331 4.83517 9.56738 4.7998L9.57129 4.79883C9.59897 4.78736 9.62747 4.78035 9.65527 4.77246C9.67826 4.76587 9.70078 4.75732 9.72461 4.75293C9.72751 4.7524 9.7305 4.75245 9.7334 4.75195C9.77502 4.74479 9.81766 4.74023 9.86133 4.74023L9.93848 4.74414Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M20 2.25C21.5192 2.25 22.75 3.48079 22.75 5V19C22.75 20.5192 21.5192 21.75 20 21.75H4C2.48079 21.75 1.25 20.5192 1.25 19V5C1.25 3.48079 2.48079 2.25 4 2.25H20ZM2.75 19C2.75 19.6908 3.30921 20.25 4 20.25H20C20.6908 20.25 21.25 19.6908 21.25 19V8.75H2.75V19ZM4 3.75C3.30921 3.75 2.75 4.30921 2.75 5V7.25H21.25V5C21.25 4.30921 20.6908 3.75 20 3.75H4Z",
    fill: "black"
  })),
  date: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.11523 15.9844C7.61864 16.0356 8.01367 16.4601 8.01367 16.9795C8.01341 17.5315 7.56572 17.9795 7.01367 17.9795C6.49623 17.9795 6.07012 17.5859 6.01855 17.082L6.01367 16.9795C6.0126 16.4245 6.46333 15.9795 7.0127 15.9795L7.11523 15.9844Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.1152 15.9844C12.6186 16.0356 13.0137 16.4601 13.0137 16.9795C13.0134 17.5315 12.5657 17.9795 12.0137 17.9795C11.4962 17.9795 11.0701 17.5859 11.0186 17.082L11.0137 16.9795C11.0126 16.4245 11.4633 15.9795 12.0127 15.9795L12.1152 15.9844Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.1152 11.9844C12.6186 12.0356 13.0137 12.4601 13.0137 12.9795C13.0134 13.5315 12.5657 13.9795 12.0137 13.9795C11.4962 13.9795 11.0701 13.5859 11.0186 13.082L11.0137 12.9795C11.0126 12.4245 11.4633 11.9795 12.0127 11.9795L12.1152 11.9844Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.1152 11.9844C17.6186 12.0356 18.0137 12.4601 18.0137 12.9795C18.0134 13.5315 17.5657 13.9795 17.0137 13.9795C16.4962 13.9795 16.0701 13.5859 16.0186 13.082L16.0137 12.9795C16.0126 12.4245 16.4633 11.9795 17.0127 11.9795L17.1152 11.9844Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V3.25H19C20.5192 3.25 21.75 4.48079 21.75 6V19C21.75 20.5192 20.5192 21.75 19 21.75H5C3.48079 21.75 2.25 20.5192 2.25 19V6C2.25 4.48079 3.48079 3.25 5 3.25H7.25V2C7.25 1.58579 7.58579 1.25 8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V3.25H15.25V2C15.25 1.58579 15.5858 1.25 16 1.25ZM3.75 19C3.75 19.6908 4.30921 20.25 5 20.25H19C19.6908 20.25 20.25 19.6908 20.25 19V9.75H3.75V19ZM5 4.75C4.30921 4.75 3.75 5.30921 3.75 6V8.25H20.25V6C20.25 5.30921 19.6908 4.75 19 4.75H16.75V6C16.75 6.41421 16.4142 6.75 16 6.75C15.5858 6.75 15.25 6.41421 15.25 6V4.75H8.75V6C8.75 6.41421 8.41421 6.75 8 6.75C7.58579 6.75 7.25 6.41421 7.25 6V4.75H5Z",
    fill: "black"
  })),
  upload: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.68652 3.26367C10.1821 3.32522 10.632 3.59626 10.917 4.01465L12.3223 6.08008L12.3623 6.12695C12.4076 6.16735 12.4672 6.19043 12.5293 6.19043H19L19.2812 6.2041C20.6679 6.345 21.7499 7.51663 21.75 8.94043V18L21.7363 18.2715C21.674 18.9012 21.3957 19.493 20.9443 19.9443C20.493 20.3957 19.9012 20.674 19.2715 20.7363L19 20.75H16C15.5858 20.75 15.25 20.4142 15.25 20C15.25 19.5858 15.5858 19.25 16 19.25H19L19.124 19.2441C19.4101 19.2157 19.6787 19.0888 19.8838 18.8838C20.0888 18.6787 20.2157 18.4101 20.2441 18.124L20.25 18V8.94043C20.25 8.29326 19.7582 7.76039 19.1279 7.69629L19 7.69043H12.5293C12.0221 7.69041 11.5437 7.46991 11.2139 7.09375L11.082 6.92383L9.67676 4.85938C9.6419 4.80819 9.58998 4.77251 9.53125 4.75781L9.4707 4.75H5C4.66851 4.74991 4.35061 4.88181 4.11621 5.11621C3.88181 5.35061 3.74991 5.66851 3.75 6V18L3.75586 18.124C3.78425 18.4101 3.91117 18.6787 4.11621 18.8838C4.35061 19.1182 4.66851 19.2501 5 19.25H8C8.41421 19.25 8.75 19.5858 8.75 20C8.75 20.4142 8.41421 20.75 8 20.75H5C4.27061 20.7501 3.57142 20.4601 3.05566 19.9443C2.6043 19.493 2.32601 18.9012 2.26367 18.2715L2.25 18V6C2.24985 5.27061 2.53991 4.57142 3.05566 4.05566C3.57142 3.53991 4.27061 3.24985 5 3.25H9.4707L9.68652 3.26367Z",
    fill: "black"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.0254 13.251C12.0319 13.2512 12.0384 13.2516 12.0449 13.252C12.0839 13.2543 12.122 13.2595 12.1592 13.2676C12.1925 13.2748 12.2246 13.2861 12.2568 13.2979C12.2693 13.3024 12.2828 13.3044 12.2949 13.3096C12.314 13.3177 12.3311 13.33 12.3496 13.3398C12.3734 13.3525 12.3977 13.3639 12.4199 13.3789C12.4588 13.4052 12.4959 13.4353 12.5303 13.4697L14.5303 15.4697L14.582 15.5264C14.8223 15.8209 14.8049 16.2557 14.5303 16.5303C14.2557 16.8049 13.8209 16.8223 13.5264 16.582L13.4697 16.5303L12.75 15.8105V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V15.8105L10.5303 16.5303C10.2374 16.8232 9.76262 16.8232 9.46973 16.5303C9.17683 16.2374 9.17683 15.7626 9.46973 15.4697L11.4697 13.4697L11.5264 13.418C11.5366 13.4097 11.5481 13.4032 11.5586 13.3955C11.5741 13.3841 11.59 13.3734 11.6064 13.3633C11.6303 13.3485 11.6546 13.3351 11.6797 13.3232C11.6979 13.3146 11.7164 13.307 11.7354 13.2998C11.7629 13.2894 11.7909 13.2814 11.8193 13.2744C11.8394 13.2694 11.8592 13.2631 11.8799 13.2598C11.8909 13.258 11.902 13.2562 11.9131 13.2549C11.9416 13.2516 11.9706 13.25 12 13.25C12.0085 13.25 12.017 13.2507 12.0254 13.251Z",
    fill: "black"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (FormIcons);

/***/ }),

/***/ "./src/main/backend/welcome.js":
/*!*************************************!*\
  !*** ./src/main/backend/welcome.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);








function WelcomeGuide(props) {
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store),
    toggle = _useDispatch.toggle;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isFirstLoad = _useState2[0],
    setIsFirstLoad = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // Set default preference for welcome guide
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store).setDefaults('wpzoom-forms', {
      welcomeGuide: true
    });

    // Check if this is first time use
    if (isFirstLoad) {
      // Get the option value
      wp.apiFetch({
        path: '/wp/v2/settings'
      }).then(function (settings) {
        var hasSeenWelcomeGuide = settings.wpzoom_forms_welcome_guide_shown;
        if (!hasSeenWelcomeGuide) {
          // Show the guide
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store).set('wpzoom-forms', 'welcomeGuide', true);

          // Mark as shown in site options
          wp.apiFetch({
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
              wpzoom_forms_welcome_guide_shown: true
            }
          });
        }
      });
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__.PluginMoreMenuItem, {
    onClick: function onClick() {
      return toggle('wpzoom-forms', 'welcomeGuide');
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('WPZOOM Forms Welcome Guide', 'wpzoom-forms')), props.isActive && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Guide, {
    className: "edit-post-welcome-guide",
    onFinish: function onFinish() {
      return toggle('wpzoom-forms', 'welcomeGuide');
    },
    pages: [{
      image: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        width: "312",
        src: __webpack_require__(/*! ../images/step-1.png */ "./src/main/images/step-1.png")
      }),
      content: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "wpzoom-forms-welcome-guide-page"
      }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
        class: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Welcome to WPZOOM Forms', 'wpzoom-forms')), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
        class: "edit-post-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Easily build custom forms in WordPress using the intuitive block editor — no coding needed.', 'wpzoom-forms')))
    }, {
      image: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        width: "312",
        src: __webpack_require__(/*! ../images/step-2.png */ "./src/main/images/step-2.png")
      }),
      content: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "wpzoom-forms-welcome-guide-page"
      }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
        class: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Drag & Drop Fields', 'wpzoom-forms')), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
        class: "edit-post-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Edit your form visually. Add, remove, or rearrange fields directly in the editor with a simple drag-and-drop interface.', 'wpzoom-forms')))
    }, {
      image: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        width: "312",
        src: __webpack_require__(/*! ../images/step-3.png */ "./src/main/images/step-3.png")
      }),
      content: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "wpzoom-forms-welcome-guide-page"
      }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
        class: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Embed Forms Anywhere.', 'wpzoom-forms')), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
        class: "edit-post-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Insert your forms using a block or shortcode, on pages, posts, or inside page builders.', 'wpzoom-forms')))
    }, {
      image: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        width: "312",
        src: __webpack_require__(/*! ../images/step-4.png */ "./src/main/images/step-4.png")
      }),
      content: (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "wpzoom-forms-welcome-guide-page"
      }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
        class: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Customize Settings.', 'wpzoom-forms')), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
        class: "edit-post-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Fine-tune each form and field from the sidebar to match your style and needs.', 'wpzoom-forms')))
    }]
  }));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(function (select) {
  return {
    isActive: select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store).get('wpzoom-forms', 'welcomeGuide')
  };
})(WelcomeGuide));

/***/ }),

/***/ "./src/main/images/step-1.png":
/*!************************************!*\
  !*** ./src/main/images/step-1.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/step-1.e0a42e9f.png";

/***/ }),

/***/ "./src/main/images/step-2.png":
/*!************************************!*\
  !*** ./src/main/images/step-2.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/step-2.2be08c5f.png";

/***/ }),

/***/ "./src/main/images/step-3.png":
/*!************************************!*\
  !*** ./src/main/images/step-3.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/step-3.4282cce6.png";

/***/ }),

/***/ "./src/main/images/step-4.png":
/*!************************************!*\
  !*** ./src/main/images/step-4.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/step-4.efb01b41.png";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/preferences":
/*!*************************************!*\
  !*** external ["wp","preferences"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["preferences"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./src/main/backend/script.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./welcome */ "./src/main/backend/welcome.js");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons */ "./src/main/backend/icons.js");



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }













var insertFormField = function insertFormField(blockName, defaultAttributes, isDisabled, isPro) {
  console.log('insertFormField called with:', blockName, defaultAttributes, isDisabled, isPro);
  if (isDisabled && !isPro) {
    console.log('Field is disabled, showing notice');
    wp.data.dispatch('core/notices').createNotice('info', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('This field can only be used once per form', 'wpzoom-forms'), {
      type: 'snackbar',
      isDismissible: true
    });
    return;
  }
  if (isDisabled && isPro) {
    console.log('Field is pro, showing notice');
    wp.data.dispatch('core/notices').createNotice('info', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('This field is available in the PRO version', 'wpzoom-forms'), {
      type: 'snackbar',
      isDismissible: true
    });
    return;
  }
  var createBlock = wp.blocks.createBlock;
  var _wp$data$dispatch = wp.data.dispatch('core/block-editor'),
    insertBlock = _wp$data$dispatch.insertBlock,
    getBlocksByClientId = _wp$data$dispatch.getBlocksByClientId;
  var _wp$data$select = wp.data.select('core/block-editor'),
    getSelectedBlock = _wp$data$select.getSelectedBlock,
    getBlockSelectionStart = _wp$data$select.getBlockSelectionStart,
    getBlocks = _wp$data$select.getBlocks;
  console.log('Creating block:', "wpzoom-forms/".concat(blockName));
  var newBlock = createBlock("wpzoom-forms/".concat(blockName), defaultAttributes);
  var selectedBlock = getSelectedBlock();
  var focusedBlockClientId = getBlockSelectionStart();
  console.log('Selected block:', selectedBlock);
  console.log('Focused block client ID:', focusedBlockClientId);

  // Get all blocks to find the form block
  var allBlocks = getBlocks();
  console.log('All blocks:', allBlocks);

  // Find the form block
  var formBlock = allBlocks.find(function (block) {
    return block.name === 'wpzoom-forms/form';
  });
  console.log('Form block:', formBlock);
  if (selectedBlock) {
    console.log('Inserting after selected block');
    // Insert after the selected block
    insertBlock(newBlock, undefined, selectedBlock.clientId, false);
  } else if (focusedBlockClientId) {
    console.log('Inserting after focused block');
    // Insert after the focused block
    insertBlock(newBlock, undefined, focusedBlockClientId, false);
  } else if (formBlock) {
    console.log('Inserting at the end of the form block');
    // Find the innermost column block to insert into
    var targetBlock = formBlock;

    // Navigate through the inner blocks to find the column block
    if (formBlock.innerBlocks && formBlock.innerBlocks.length > 0) {
      // Find the group block
      var groupBlock = formBlock.innerBlocks.find(function (block) {
        return block.name === 'core/group';
      });
      if (groupBlock && groupBlock.innerBlocks && groupBlock.innerBlocks.length > 0) {
        // Find the columns block
        var columnsBlock = groupBlock.innerBlocks.find(function (block) {
          return block.name === 'core/columns';
        });
        if (columnsBlock && columnsBlock.innerBlocks && columnsBlock.innerBlocks.length > 0) {
          // Find the column block
          var columnBlock = columnsBlock.innerBlocks.find(function (block) {
            return block.name === 'core/column';
          });
          if (columnBlock) {
            targetBlock = columnBlock;
          }
        }
      }
    }
    console.log('Target block for insertion:', targetBlock);
    insertBlock(newBlock, undefined, targetBlock.clientId, false);
  } else {
    console.log('No form block found, inserting at root');
    insertBlock(newBlock);
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.updateCategory)('wpzoom-forms', {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
    d: "M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z",
    fill: "#164777"
  }), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
    d: "M5.276 12.084H6.032L8.156 7.224L10.268 12.084H11.024L13.148 5.316H13.988V4.104H10.628V5.316H11.708L10.508 9.468L8.552 4.872H7.832L5.876 9.468L4.592 5.316H5.636V4.104H2.276V5.316H3.116L5.276 12.084Z",
    fill: "white"
  }))
});
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__.registerPlugin)('wpzoom-forms-document-settings', {
  icon: '',
  render: function render(props) {
    var postID = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(function (select) {
      return select('core/editor').getCurrentPostId();
    }, []);
    var postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(function (select) {
      return select('core/editor').getCurrentPostType();
    }, []);
    var _useEntityProp = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.useEntityProp)('postType', postType, 'meta'),
      _useEntityProp2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useEntityProp, 2),
      meta = _useEntityProp2[0],
      setMeta = _useEntityProp2[1];
    var formMethod = meta['_form_method'] || 'email';
    var formEmail = meta['_form_email'] || (typeof wpzf_formblock !== 'undefined' && 'admin_email' in wpzf_formblock ? wpzf_formblock.admin_email : '');
    var formSubject = meta['_form_subject'] || '';
    var formSuccessMessage = meta['_form_success_message'] || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Thanks! We\'ve received your submission!', 'wpzoom-forms');
    var formFailureMessage = meta['_form_failure_message'] || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Submission failed!', 'wpzoom-forms');
    var formEmailSubject = meta['_form_email_subject'] || '';
    var formEmailMessage = meta['_form_email_message'] || '';
    var formRedirect = meta['_form_redirect'] || '';
    var formCustomAction = meta['_form_custom_action'] || '';
    var formCustomMethod = meta['_form_custom_method'] || 'POST';
    var formCustomEnctype = meta['_form_custom_enctype'] || 'application/x-www-form-urlencoded';
    var formCustomTarget = meta['_form_custom_target'] || '_self';
    var formCustomHideOnSuccess = meta['_form_custom_hide_on_success'] || false;
    var formCustomSuccessMessage = meta['_form_custom_success_message'] || '';
    var formCustomErrorMessage = meta['_form_custom_error_message'] || '';
    var formCustomSuccessRedirect = meta['_form_custom_success_redirect'] || '';
    var formCustomSuccessRedirectTimeout = meta['_form_custom_success_redirect_timeout'] || 5;
    var formCustomSuccessRedirectTimeoutMessage = meta['_form_custom_success_redirect_timeout_message'] || '';
    var formCustomSuccessRedirectTimeoutMessageShow = meta['_form_custom_success_redirect_timeout_message_show'] || false;
    var formCustomSuccessRedirectTimeoutMessageShowTime = meta['_form_custom_success_redirect_timeout_message_show_time'] || 0;
    var formCustomSuccessRedirectTimeoutMessageHideTime = meta['_form_custom_success_redirect_timeout_message_hide_time'] || 0;
    var formCustomSuccessRedirectTimeoutMessageHideEffect = meta['_form_custom_success_redirect_timeout_message_hide_effect'] || 'fade';
    var formCustomSuccessRedirectTimeoutMessageShowEffect = meta['_form_custom_success_redirect_timeout_message_show_effect'] || 'fade';

    // Use dispatch to open panels by default
    var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useDispatch)('core/edit-post'),
      toggleEditorPanelOpened = _useDispatch.toggleEditorPanelOpened;
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
      // Open the Form Settings panel by default
      toggleEditorPanelOpened('wpzoom-forms-document-settings/form-settings', true);
      // Open the Add Form Fields panel by default
      toggleEditorPanelOpened('wpzoom-forms-document-settings/add-form-fields', true);
      // Open the Form Details panel by default
      toggleEditorPanelOpened('wpzoom-forms-document-settings/form-details', true);
    }, []);
    var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      hasCopiedShortcode = _useState2[0],
      setHasCopiedShortcode = _useState2[1];
    var copyBtnStyle = {
      minHeight: '30px',
      height: 'auto',
      minWidth: 'fit-content',
      margin: '0px 0px 8px 0px'
    };
    var blockPatternsStyle = {};

    // Add styles to head
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
      // No need to add inline styles anymore as they will be in style.scss

      // Add drop handler to the editor
      var handleDrop = function handleDrop(event) {
        // Remove any existing drop indicators
        document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(function (el) {
          return el.remove();
        });

        // Check if we've already handled this drop
        if (event.handled) {
          return;
        }
        try {
          var data = event.dataTransfer.getData('text');
          if (!data) return;
          var _JSON$parse = JSON.parse(data),
            type = _JSON$parse.type,
            attributes = _JSON$parse.attributes;
          if (!type || !type.startsWith('wpzoom-forms/')) {
            // This is not a WPZOOM form field drag, let WordPress handle it
            return;
          }

          // Only prevent default and stop propagation for WPZOOM form fields
          event.preventDefault();
          event.stopPropagation();
          event.handled = true;
          var createBlock = wp.blocks.createBlock;
          var _wp$data$dispatch2 = wp.data.dispatch('core/block-editor'),
            insertBlock = _wp$data$dispatch2.insertBlock,
            getBlockInsertionPoint = _wp$data$dispatch2.getBlockInsertionPoint;
          var _wp$data$select2 = wp.data.select('core/block-editor'),
            getBlockRootClientId = _wp$data$select2.getBlockRootClientId,
            getBlockIndex = _wp$data$select2.getBlockIndex;
          var newBlock = createBlock(type, attributes);

          // Get the closest block element from the drop point
          var dropPoint = {
            x: event.clientX,
            y: event.clientY
          };

          // Find all block elements and get the closest one
          var blockElements = document.querySelectorAll('[data-block]');
          var closestBlock = null;
          var closestDistance = Infinity;
          var insertAfter = false;
          blockElements.forEach(function (block) {
            var rect = block.getBoundingClientRect();
            var blockCenter = {
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2
            };
            var distance = Math.sqrt(Math.pow(dropPoint.x - blockCenter.x, 2) + Math.pow(dropPoint.y - blockCenter.y, 2));
            if (distance < closestDistance) {
              closestDistance = distance;
              closestBlock = block;
              insertAfter = dropPoint.y > blockCenter.y;
            }
          });
          if (closestBlock) {
            var targetClientId = closestBlock.getAttribute('data-block');
            var rootClientId = getBlockRootClientId(targetClientId);
            var targetIndex = getBlockIndex(targetClientId);
            insertBlock(newBlock, insertAfter ? targetIndex + 1 : targetIndex, rootClientId, false);
          } else {
            // If no target found, insert at the end
            insertBlock(newBlock);
          }
        } catch (error) {
          console.error('Error handling block drop:', error);
        }
      };
      var _handleDragOver = function handleDragOver(event) {
        // Check if this is a WPZOOM form field drag first
        try {
          var data = event.dataTransfer.getData('text');
          if (data) {
            var _JSON$parse2 = JSON.parse(data),
              type = _JSON$parse2.type;
            if (!type || !type.startsWith('wpzoom-forms/')) {
              // This is not a WPZOOM form field drag, let WordPress handle it
              return;
            }
          }
        } catch (error) {
          // If we can't parse the data, let WordPress handle it
          return;
        }

        // Only prevent default and stop propagation for WPZOOM form fields
        event.preventDefault();
        event.stopPropagation();

        // Throttle the drag over handler
        if (_handleDragOver.timeout) {
          return;
        }
        _handleDragOver.timeout = setTimeout(function () {
          _handleDragOver.timeout = null;

          // Get all block elements
          var blockElements = document.querySelectorAll('[data-block]');
          var closestBlock = null;
          var closestDistance = Infinity;
          var insertAfter = false;
          var dropPoint = {
            x: event.clientX,
            y: event.clientY
          };
          blockElements.forEach(function (block) {
            var rect = block.getBoundingClientRect();
            var blockCenter = {
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2
            };
            var distance = Math.sqrt(Math.pow(dropPoint.x - blockCenter.x, 2) + Math.pow(dropPoint.y - blockCenter.y, 2));
            if (distance < closestDistance) {
              closestDistance = distance;
              closestBlock = block;
              insertAfter = dropPoint.y > rect.top + rect.height / 2;
            }
          });

          // Remove existing indicators
          document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(function (el) {
            return el.remove();
          });
          if (closestBlock) {
            var rect = closestBlock.getBoundingClientRect();
            var indicator = document.createElement('div');
            indicator.className = 'wpzoom-forms-drop-indicator';
            Object.assign(indicator.style, {
              position: 'absolute',
              left: rect.left + 'px',
              right: window.innerWidth - rect.right + 'px',
              height: '2px',
              background: '#007cba',
              pointerEvents: 'none',
              zIndex: '9999',
              transition: 'transform 0.1s ease',
              top: insertAfter ? rect.bottom + 'px' : rect.top + 'px'
            });
            document.body.appendChild(indicator);
          }
        }, 50);
      };
      var handleDragEnd = function handleDragEnd() {
        if (_handleDragOver.timeout) {
          clearTimeout(_handleDragOver.timeout);
          _handleDragOver.timeout = null;
        }
        document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(function (el) {
          return el.remove();
        });
      };

      // Add event listeners to the editor
      var editor = document.querySelector('.block-editor-block-list__layout');
      if (editor) {
        // Remove any existing event listeners first
        editor.removeEventListener('drop', handleDrop);
        editor.removeEventListener('dragover', _handleDragOver);
        editor.removeEventListener('dragleave', handleDragEnd);
        editor.removeEventListener('dragend', handleDragEnd);
        editor.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('blur', handleDragEnd);

        // Add new event listeners
        editor.addEventListener('drop', handleDrop);
        editor.addEventListener('dragover', _handleDragOver);
        editor.addEventListener('dragleave', handleDragEnd);
        editor.addEventListener('dragend', handleDragEnd);
        editor.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('blur', handleDragEnd);
      }

      // Add styles for drop indicator
      var style = document.createElement('style');
      style.textContent = "\n\t\t\t\t.wpzoom-forms-drop-indicator {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tright: 0;\n\t\t\t\t\theight: 2px;\n\t\t\t\t\tbackground: #007cba;\n\t\t\t\t\tpointer-events: none;\n\t\t\t\t\tz-index: 9999;\n\t\t\t\t\ttransition: transform 0.1s ease;\n\t\t\t\t}\n\t\t\t\t.wpzoom-forms-drop-indicator::before {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\ttop: -4px;\n\t\t\t\t\twidth: 8px;\n\t\t\t\t\theight: 8px;\n\t\t\t\t\tbackground: #007cba;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t}\n\t\t\t";
      document.head.appendChild(style);

      // Cleanup
      return function () {
        if (_handleDragOver.timeout) {
          clearTimeout(_handleDragOver.timeout);
        }
        var editor = document.querySelector('.block-editor-block-list__layout');
        if (editor) {
          editor.removeEventListener('drop', handleDrop);
          editor.removeEventListener('dragover', _handleDragOver);
          editor.removeEventListener('dragleave', handleDragEnd);
          editor.removeEventListener('dragend', handleDragEnd);
          editor.removeEventListener('mouseup', handleDragEnd);
          window.removeEventListener('blur', handleDragEnd);
        }
        document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(function (el) {
          return el.remove();
        });
      };
    }, []);
    if (hasCopiedShortcode) {
      copyBtnStyle.backgroundColor = 'green';
    }

    // Function to check if 'wpzoom-forms/text-plain-field' block with subject attribute is present
    var isTextPlainFieldWithSubject = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(function (select) {
      var blocks = select('core/block-editor').getBlocks();

      // Helper function to check if any inner block has the desired attributes
      var _hasDesiredInnerBlock = function hasDesiredInnerBlock(innerBlocks) {
        return innerBlocks.some(function (innerBlock) {
          if (innerBlock.name === 'wpzoom-forms/text-plain-field' && innerBlock.attributes.subject === true) {
            return true;
          }
          if (innerBlock.innerBlocks && innerBlock.innerBlocks.length > 0) {
            return _hasDesiredInnerBlock(innerBlock.innerBlocks);
          }
          return false;
        });
      };

      // Iterate through all blocks and their inner blocks
      return blocks.some(function (block) {
        if (block.name === 'wpzoom-forms/text-plain-field' && block.attributes.subject === true) {
          return true;
        }
        if (block.innerBlocks && block.innerBlocks.length > 0) {
          return _hasDesiredInnerBlock(block.innerBlocks);
        }
        return false;
      });
    }, []);

    // Add check for unique fields
    var uniqueFieldsExist = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(function (select) {
      var blocks = select('core/block-editor').getBlocks();

      // Helper function to check blocks recursively
      var _findBlockType = function findBlockType(blocks, type) {
        return blocks.some(function (block) {
          if (block.name === type) {
            return true;
          }
          if (block.innerBlocks && block.innerBlocks.length > 0) {
            return _findBlockType(block.innerBlocks, type);
          }
          return false;
        });
      };

      // Check for each unique field type
      var hasEmailField = _findBlockType(blocks, 'wpzoom-forms/text-email-field');
      var hasNameField = _findBlockType(blocks, 'wpzoom-forms/text-name-field');
      var hasSubmitField = _findBlockType(blocks, 'wpzoom-forms/submit-field');
      return {
        'text-email-field': hasEmailField,
        'text-name-field': hasNameField,
        'submit-field': hasSubmitField
      };
    }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_welcome__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_9__.PluginDocumentSettingPanel, {
      name: "wpzoom-forms-document-settings",
      className: "wpzoom-forms-document-settings",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Form Settings', 'wpzoom-forms')
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Form Method', 'wpzoom-forms'),
      value: formMethod,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Save to Database Only', 'wpzoom-forms'),
        value: 'db'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email Only', 'wpzoom-forms'),
        value: 'email'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Save to Database & Email', 'wpzoom-forms'),
        value: 'combined'
      }],
      onChange: function onChange(value) {
        return setMeta(_objectSpread(_objectSpread({}, meta), {}, {
          '_form_method': value
        }));
      },
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Choose how form submissions are handled.', 'wpzoom-forms')
    }), (formMethod == 'email' || formMethod == 'combined') && (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      type: "email",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Send To', 'wpzoom-forms'),
      value: formEmail,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('someone@somedomain.com', 'wpzoom-forms'),
      onChange: function onChange(value) {
        return setMeta(_objectSpread(_objectSpread({}, meta), {}, {
          '_form_email': value
        }));
      },
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email address where submissions will be sent.', 'wpzoom-forms')
    }), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      type: "text",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email Subject', 'wpzoom-forms'),
      value: formSubject,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('New Form Submission', 'wpzoom-forms'),
      onChange: function onChange(value) {
        return setMeta(_objectSpread(_objectSpread({}, meta), {}, {
          '_form_subject': value
        }));
      },
      disabled: isTextPlainFieldWithSubject // Disable the field if the conditions are met
    }), isTextPlainFieldWithSubject && (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
      class: "description"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Your form already includes a field that is marked as the Subject. Uncheck its "Is Subject" option if you want to set a custom subject here.', 'wpzoom-forms')), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      type: "text",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Success Message', 'wpzoom-forms'),
      value: formSuccessMessage,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Thank you! Your message has been sent.', 'wpzoom-forms'),
      onChange: function onChange(value) {
        return setMeta(_objectSpread(_objectSpread({}, meta), {}, {
          '_form_success_message': value
        }));
      },
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('This message is shown when the form is submitted successfully.', 'wpzoom-forms')
    }), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      type: "text",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Failure Message', 'wpzoom-forms'),
      value: formFailureMessage,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Oops! Something went wrong. Please try again.', 'wpzoom-forms'),
      onChange: function onChange(value) {
        return setMeta(_objectSpread(_objectSpread({}, meta), {}, {
          '_form_failure_message': value
        }));
      },
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('This message is shown if the form fails to submit.', 'wpzoom-forms')
    }), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      isPrimary: true,
      disabled: true,
      icon: (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
        d: "M21.3 10.8l-8.8-8.8c-.4-.4-.9-.6-1.4-.6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.5-.2-1-.7-1.4zM12 19H5V5h5v4h4v1l-4.4 4.4c-.1.1-.2.3-.2.4v3.5H12v-1.5L18.5 10H14V5.5l1.5 1.5H19v7.8L12 21v-2z"
      })),
      className: "wpzoom-forms-edit-template-button",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: '100%',
        padding: '10px',
        marginTop: '15px',
        position: 'relative'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Customize Notification Email', 'wpzoom-forms'), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("small", {
      class: "pro-only"
    }, "PRO")), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
      className: "description",
      style: {
        marginTop: 'calc(8px)',
        fontSize: '12px',
        color: 'rgb(117, 117, 117)'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Edit the template for emails sent to you when a new form entry is submitted.', 'wpzoom-forms'))), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_9__.PluginDocumentSettingPanel, {
      name: "wpzoom-forms-document-settings-fields",
      className: "wpzoom-forms-document-settings-fields",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Form Fields', 'wpzoom-forms')
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "wpzoom-forms-block-patterns"
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "wpzoom-forms-block-patterns-list"
    }, [{
      name: 'multi-checkbox-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Multichoice', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].multiCheckbox,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Multichoice', 'wpzoom-forms'),
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3']
      }
    }, {
      name: 'checkbox-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Checkbox', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].checkbox,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Checkbox', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'text-email-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].emailInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email', 'wpzoom-forms'),
        required: true
      }
    }, {
      name: 'label-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Label', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].label,
      defaultAttributes: {
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Label', 'wpzoom-forms')
      }
    }, {
      name: 'text-name-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Name', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].nameInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Name', 'wpzoom-forms'),
        required: true
      }
    }, {
      name: 'text-phone-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Phone', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].phoneInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Phone', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'text-plain-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Text', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].textInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Text', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'radio-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Radio', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].radio,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Radio', 'wpzoom-forms'),
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3']
      }
    }, {
      name: 'select-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Select', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].select,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Select', 'wpzoom-forms'),
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3']
      }
    }, {
      name: 'submit-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Submit', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].submit,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Submit', 'wpzoom-forms')
      }
    }, {
      name: 'textarea-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Message', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].textarea,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Message', 'wpzoom-forms'),
        required: false,
        rows: 5
      }
    }, {
      name: 'text-website-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Website', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].websiteInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Website', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'datepicker-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Date', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].date,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Date', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'upload-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Upload', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].upload,
      isPro: true,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Upload', 'wpzoom-forms'),
        required: false
      }
    }].map(function (block) {
      var isDisabled = uniqueFieldsExist[block.name] || false || block.isPro;
      var isPro = block.isPro;
      return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
        key: block.name,
        className: "wpzoom-forms-block-pattern-item".concat(isDisabled ? ' disabled' : ''),
        draggable: !isDisabled,
        onDragStart: function onDragStart(event) {
          if (isDisabled) {
            event.preventDefault();
            return;
          }
          event.dataTransfer.setData('text', JSON.stringify({
            type: "wpzoom-forms/".concat(block.name),
            attributes: block.defaultAttributes
          }));
        },
        onClick: function onClick(event) {
          console.log('Quick form field clicked:', block.name);
          event.preventDefault();
          event.stopPropagation();
          insertFormField(block.name, block.defaultAttributes, isDisabled, isPro);
        },
        title: isDisabled && !block.isPro ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('This field can only be used once per form', 'wpzoom-forms') : ''
      }, block.icon, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", null, block.title), isDisabled && !block.isPro && (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
        className: "dashicons dashicons-info"
      }), block.isPro && (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("small", {
        className: "pro-only"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('PRO', 'wpzoom-forms')));
    })), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
      className: "description",
      style: {
        marginTop: 'calc(8px)',
        fontSize: '12px',
        color: 'rgb(117, 117, 117)'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Click or drag a field to add it to your form.', 'wpzoom-forms')))), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_9__.PluginDocumentSettingPanel, {
      name: "wpzoom-forms-document-settings-details",
      className: "wpzoom-forms-document-settings-details",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Form Shortcode', 'wpzoom-forms')
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalHStack, {
      className: "wpzf-shortcode-container",
      style: {
        alignItems: 'center',
        justifyContent: 'flex-start'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      value: "[wpzf_form id=\"".concat(postID, "\"]"),
      readOnly: true,
      style: {
        margin: 0
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ClipboardButton, {
      className: "wpzf-copy-button",
      variant: "primary",
      style: {
        height: '30px',
        minWidth: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px 8px'
      },
      text: "[wpzf_form id=\"".concat(postID, "\"]"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Copy shortcode', 'wpzoom-forms'),
      showTooltip: true,
      onCopy: function onCopy() {
        return setHasCopiedShortcode(true);
      },
      onFinishCopy: function onFinishCopy() {
        return setHasCopiedShortcode(false);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
      icon: hasCopiedShortcode ? (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("svg", {
        viewBox: "0 0 24 24"
      }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
        d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
      })) : (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("svg", {
        viewBox: "0 0 24 24"
      }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
        d: "M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"
      })),
      size: 16
    })))));
  }
});
(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.setLocaleData)({
  'Publish': [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Save', 'wpzoom-forms')]
});
var DragHandle = (0,react_sortable_hoc__WEBPACK_IMPORTED_MODULE_13__.SortableHandle)(function () {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    icon: "move",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Re-arrange Item', 'wpzoom-forms'),
    className: "wpzoom-forms-move-button"
  });
});
var SortableItem = (0,react_sortable_hoc__WEBPACK_IMPORTED_MODULE_13__.SortableElement)(function (_ref) {
  var value = _ref.value,
    optsId = _ref.optsId,
    options = _ref.options,
    changeCallback = _ref.changeCallback,
    removeCallback = _ref.removeCallback;
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FlexBlock, null, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    value: value,
    onChange: function onChange(val) {
      return changeCallback(val, optsId);
    }
  })), options.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(DragHandle, null), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    icon: "no-alt",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Delete Item', 'wpzoom-forms'),
    onClick: function onClick() {
      return removeCallback(optsId);
    }
  }))));
});
var SortableList = (0,react_sortable_hoc__WEBPACK_IMPORTED_MODULE_13__.SortableContainer)(function (_ref2) {
  var items = _ref2.items,
    changeCallback = _ref2.changeCallback,
    removeCallback = _ref2.removeCallback;
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", null, items.map(function (value, index) {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(SortableItem, {
      index: index,
      optsId: index,
      value: value,
      options: items,
      changeCallback: changeCallback,
      removeCallback: removeCallback
    });
  }));
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)('wpzoom-forms/form', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Contact Form', 'wpzoom-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Add a simple contact form', 'wpzoom-blocks'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 250 300",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M250 0H50V50H0V300H250V0Z",
    fill: "#083EA7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M100 50H200V100H100V50ZM100 150V100H50V250H100V200H150V150H100Z",
    fill: "#1FDE91"
  })),
  category: 'wpzoom-forms',
  supports: {
    align: true,
    html: false,
    multiple: false
  },
  example: {},
  edit: function edit() {
    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
      className: 'wpzoom-forms_form'
    });

    // Add check for unique fields
    var uniqueFieldsExist = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(function (select) {
      var blocks = select('core/block-editor').getBlocks();

      // Helper function to check blocks recursively
      var _findBlockType2 = function findBlockType(blocks, type) {
        return blocks.some(function (block) {
          if (block.name === type) {
            return true;
          }
          if (block.innerBlocks && block.innerBlocks.length > 0) {
            return _findBlockType2(block.innerBlocks, type);
          }
          return false;
        });
      };

      // Check for each unique field type
      var hasEmailField = _findBlockType2(blocks, 'wpzoom-forms/text-email-field');
      var hasNameField = _findBlockType2(blocks, 'wpzoom-forms/text-name-field');
      var hasSubmitField = _findBlockType2(blocks, 'wpzoom-forms/submit-field');
      return {
        'text-email-field': hasEmailField,
        'text-name-field': hasNameField,
        'submit-field': hasSubmitField
      };
    }, []);
    var blockPatternsStyle = {};

    // Add styles to head
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
      // No need to add inline styles anymore as they will be in style.scss

      // Add drop handler to the editor
      var handleDrop = function handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();

        // Remove any existing drop indicators
        document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(function (el) {
          return el.remove();
        });

        // Check if we've already handled this drop
        if (event.handled) {
          return;
        }
        event.handled = true;
        try {
          var data = event.dataTransfer.getData('text');
          if (!data) return;
          var _JSON$parse3 = JSON.parse(data),
            type = _JSON$parse3.type,
            attributes = _JSON$parse3.attributes;
          if (!type || !type.startsWith('wpzoom-forms/')) return;
          var createBlock = wp.blocks.createBlock;
          var _wp$data$dispatch3 = wp.data.dispatch('core/block-editor'),
            insertBlock = _wp$data$dispatch3.insertBlock,
            getBlockInsertionPoint = _wp$data$dispatch3.getBlockInsertionPoint;
          var _wp$data$select3 = wp.data.select('core/block-editor'),
            getBlockRootClientId = _wp$data$select3.getBlockRootClientId,
            getBlockIndex = _wp$data$select3.getBlockIndex;
          var newBlock = createBlock(type, attributes);

          // Get the closest block element from the drop point
          var dropPoint = {
            x: event.clientX,
            y: event.clientY
          };

          // Find all block elements and get the closest one
          var blockElements = document.querySelectorAll('[data-block]');
          var closestBlock = null;
          var closestDistance = Infinity;
          var insertAfter = false;
          blockElements.forEach(function (block) {
            var rect = block.getBoundingClientRect();
            var blockCenter = {
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2
            };
            var distance = Math.sqrt(Math.pow(dropPoint.x - blockCenter.x, 2) + Math.pow(dropPoint.y - blockCenter.y, 2));
            if (distance < closestDistance) {
              closestDistance = distance;
              closestBlock = block;
              insertAfter = dropPoint.y > blockCenter.y;
            }
          });
          if (closestBlock) {
            var targetClientId = closestBlock.getAttribute('data-block');
            var rootClientId = getBlockRootClientId(targetClientId);
            var targetIndex = getBlockIndex(targetClientId);
            insertBlock(newBlock, insertAfter ? targetIndex + 1 : targetIndex, rootClientId, false);
          } else {
            // If no target found, insert at the end
            insertBlock(newBlock);
          }
        } catch (error) {
          console.error('Error handling block drop:', error);
        }
      };
      var _handleDragOver2 = function handleDragOver(event) {
        event.preventDefault();
        event.stopPropagation();

        // Throttle the drag over handler
        if (_handleDragOver2.timeout) {
          return;
        }
        _handleDragOver2.timeout = setTimeout(function () {
          _handleDragOver2.timeout = null;

          // Get all block elements
          var blockElements = document.querySelectorAll('[data-block]');
          var closestBlock = null;
          var closestDistance = Infinity;
          var insertAfter = false;
          var dropPoint = {
            x: event.clientX,
            y: event.clientY
          };
          blockElements.forEach(function (block) {
            var rect = block.getBoundingClientRect();
            var blockCenter = {
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2
            };
            var distance = Math.sqrt(Math.pow(dropPoint.x - blockCenter.x, 2) + Math.pow(dropPoint.y - blockCenter.y, 2));
            if (distance < closestDistance) {
              closestDistance = distance;
              closestBlock = block;
              insertAfter = dropPoint.y > rect.top + rect.height / 2;
            }
          });

          // Remove existing indicators
          document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(function (el) {
            return el.remove();
          });
          if (closestBlock) {
            var rect = closestBlock.getBoundingClientRect();
            var indicator = document.createElement('div');
            indicator.className = 'wpzoom-forms-drop-indicator';
            Object.assign(indicator.style, {
              position: 'absolute',
              left: rect.left + 'px',
              right: window.innerWidth - rect.right + 'px',
              height: '2px',
              background: '#007cba',
              pointerEvents: 'none',
              zIndex: '9999',
              transition: 'transform 0.1s ease',
              top: insertAfter ? rect.bottom + 'px' : rect.top + 'px'
            });
            document.body.appendChild(indicator);
          }
        }, 50);
      };
      var handleDragEnd = function handleDragEnd() {
        if (_handleDragOver2.timeout) {
          clearTimeout(_handleDragOver2.timeout);
          _handleDragOver2.timeout = null;
        }
        document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(function (el) {
          return el.remove();
        });
      };

      // Add event listeners to the editor
      var editor = document.querySelector('.block-editor-block-list__layout');
      if (editor) {
        // Remove any existing event listeners first
        editor.removeEventListener('drop', handleDrop);
        editor.removeEventListener('dragover', _handleDragOver2);
        editor.removeEventListener('dragleave', handleDragEnd);
        editor.removeEventListener('dragend', handleDragEnd);
        editor.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('blur', handleDragEnd);

        // Add new event listeners
        editor.addEventListener('drop', handleDrop);
        editor.addEventListener('dragover', _handleDragOver2);
        editor.addEventListener('dragleave', handleDragEnd);
        editor.addEventListener('dragend', handleDragEnd);
        editor.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('blur', handleDragEnd);
      }

      // Add styles for drop indicator
      var style = document.createElement('style');
      style.textContent = "\n\t\t\t\t.wpzoom-forms-drop-indicator {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tright: 0;\n\t\t\t\t\theight: 2px;\n\t\t\t\t\tbackground: #007cba;\n\t\t\t\t\tpointer-events: none;\n\t\t\t\t\tz-index: 9999;\n\t\t\t\t\ttransition: transform 0.1s ease;\n\t\t\t\t}\n\t\t\t\t.wpzoom-forms-drop-indicator::before {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\ttop: -4px;\n\t\t\t\t\twidth: 8px;\n\t\t\t\t\theight: 8px;\n\t\t\t\t\tbackground: #007cba;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t}\n\t\t\t";
      document.head.appendChild(style);

      // Cleanup
      return function () {
        if (_handleDragOver2.timeout) {
          clearTimeout(_handleDragOver2.timeout);
        }
        var editor = document.querySelector('.block-editor-block-list__layout');
        if (editor) {
          editor.removeEventListener('drop', handleDrop);
          editor.removeEventListener('dragover', _handleDragOver2);
          editor.removeEventListener('dragleave', handleDragEnd);
          editor.removeEventListener('dragend', handleDragEnd);
          editor.removeEventListener('mouseup', handleDragEnd);
          window.removeEventListener('blur', handleDragEnd);
        }
        document.querySelectorAll('.wpzoom-forms-drop-indicator').forEach(function (el) {
          return el.remove();
        });
      };
    }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", _objectSpread({}, blockProps), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Form Fields', 'wpzoom-forms'),
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "wpzoom-forms-block-patterns"
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "wpzoom-forms-block-patterns-list"
    }, [{
      name: 'multi-checkbox-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Multichoice', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].multiCheckbox,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Multichoice', 'wpzoom-forms'),
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3']
      }
    }, {
      name: 'checkbox-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Checkbox', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].checkbox,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Checkbox', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'text-email-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].emailInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email', 'wpzoom-forms'),
        required: true
      }
    }, {
      name: 'label-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Label', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].label,
      defaultAttributes: {
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Label', 'wpzoom-forms')
      }
    }, {
      name: 'text-name-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Name', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].nameInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Name', 'wpzoom-forms'),
        required: true
      }
    }, {
      name: 'text-phone-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Phone', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].phoneInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Phone', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'text-plain-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Text', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].textInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Text', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'radio-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Radio', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].radio,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Radio', 'wpzoom-forms'),
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3']
      }
    }, {
      name: 'select-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Select', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].select,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Select', 'wpzoom-forms'),
        required: false,
        options: ['Option 1', 'Option 2', 'Option 3']
      }
    }, {
      name: 'submit-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Submit', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].submit,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Submit', 'wpzoom-forms')
      }
    }, {
      name: 'textarea-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Message', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].textarea,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Message', 'wpzoom-forms'),
        required: false,
        rows: 5
      }
    }, {
      name: 'text-website-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Website', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].websiteInput,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Website', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'datepicker-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Date', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].date,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Date', 'wpzoom-forms'),
        required: false
      }
    }, {
      name: 'upload-field',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Upload', 'wpzoom-forms'),
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["default"].upload,
      isPro: true,
      defaultAttributes: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Upload', 'wpzoom-forms'),
        required: false
      }
    }].map(function (block) {
      var isDisabled = uniqueFieldsExist[block.name] || false || block.isPro;
      var isPro = block.isPro;
      return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
        key: block.name,
        className: "wpzoom-forms-block-pattern-item".concat(isDisabled ? ' disabled' : ''),
        draggable: !isDisabled,
        onDragStart: function onDragStart(event) {
          if (isDisabled) {
            event.preventDefault();
            return;
          }
          event.dataTransfer.setData('text', JSON.stringify({
            type: "wpzoom-forms/".concat(block.name),
            attributes: block.defaultAttributes
          }));
        },
        onClick: function onClick(event) {
          console.log('Quick form field clicked:', block.name);
          event.preventDefault();
          event.stopPropagation();
          insertFormField(block.name, block.defaultAttributes, isDisabled, isPro);
        },
        title: isDisabled && !block.isPro ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('This field can only be used once per form', 'wpzoom-forms') : ''
      }, block.icon, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", null, block.title), isDisabled && !block.isPro && (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
        className: "dashicons dashicons-info"
      }), block.isPro && (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("small", {
        className: "pro-only"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('PRO', 'wpzoom-forms')));
    })), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
      className: "description",
      style: {
        marginTop: 'calc(8px)',
        fontSize: '12px',
        color: 'rgb(117, 117, 117)'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Click or drag a field to add it to your form.', 'wpzoom-forms'))))), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      allowedBlocks: ['wpzoom-forms/text-plain-field', 'wpzoom-forms/text-name-field', 'wpzoom-forms/text-email-field', 'wpzoom-forms/text-website-field', 'wpzoom-forms/text-phone-field', 'wpzoom-forms/textarea-field', 'wpzoom-forms/select-field', 'wpzoom-forms/multi-checkbox-field', 'wpzoom-forms/checkbox-field', 'wpzoom-forms/radio-field', 'wpzoom-forms/label-field', 'wpzoom-forms/submit-field', 'wpzoom-forms/datepicker-field', 'core/group', 'core/columns', 'core/column', 'core/paragraph', 'core/heading', 'core/spacer', 'core/separator', 'core/html'],
      template: [['core/group', {
        'tagName': 'div'
      }, [['core/columns', {
        'isStackedOnMobile': true
      }, [['core/column', {
        'width': '100%'
      }, [['wpzoom-forms/text-name-field', {
        'id': 'input_name',
        'name': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Name', 'wpzoom-blocks'),
        'type': 'text',
        'showLabel': true,
        'label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Name', 'wpzoom-blocks'),
        'required': true,
        'replyto': true,
        'className': 'fullwidth'
      }], ['wpzoom-forms/text-email-field', {
        'id': 'input_email',
        'name': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email', 'wpzoom-blocks'),
        'type': 'email',
        'showLabel': true,
        'label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Email', 'wpzoom-blocks'),
        'required': true,
        'replyto': true,
        'className': 'fullwidth'
      }], ['wpzoom-forms/text-plain-field', {
        'id': 'input_subject',
        'name': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Subject', 'wpzoom-blocks'),
        'type': 'text',
        'showLabel': true,
        'label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Subject', 'wpzoom-blocks'),
        'required': true,
        'subject': true,
        'className': 'fullwidth'
      }], ['wpzoom-forms/textarea-field', {
        'id': 'input_message',
        'name': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Message', 'wpzoom-blocks'),
        'cols': '55',
        'rows': '10',
        'showLabel': true,
        'label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Message', 'wpzoom-blocks'),
        'required': true,
        'className': 'fullwidth'
      }]]]]], ['core/columns', {
        'isStackedOnMobile': true
      }, [['core/column', {
        'width': '30%'
      }, [['wpzoom-forms/submit-field', {
        'id': 'input_submit',
        'name': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Submit', 'wpzoom-blocks')
      }]]], ['core/column', {
        'width': '70%'
      }, [['core/paragraph', {
        'align': 'right',
        'content': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__.__)('Fields marked with <strong class="has-accent-color has-text-color">*</strong> are required.', 'wpzoom-blocks'),
        'dropCap': false,
        'style': {
          'typography': {
            'fontSize': 16
          }
        }
      }]]]]]]]]
    }));
  },
  save: function save() {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", _objectSpread({}, blockProps), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map