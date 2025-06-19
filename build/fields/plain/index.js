/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fields/plain/edit.js":
/*!**********************************!*\
  !*** ./src/fields/plain/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);







var Edit = function Edit(props) {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  var attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId;
  var id = attributes.id,
    name = attributes.name,
    type = attributes.type,
    placeholder = attributes.placeholder,
    label = attributes.label,
    showLabel = attributes.showLabel,
    required = attributes.required,
    subject = attributes.subject;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!id) {
      setAttributes({
        id: 'input_' + clientId.substr(0, 8)
      });
    }
  }, []);
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(id),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 1),
    uniqueId = _useState2[0];
  var handleNameChange = function handleNameChange(newValue) {
    var newId = newValue.replace(/\s/g, '_').toLowerCase();
    setAttributes({
      name: newValue,
      id: 'input_' + clientId.substr(0, 8)
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Options', 'wpzoom-forms')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Name', 'wpzoom-forms'),
    value: name,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('e.g. My Text Field', 'wpzoom-forms'),
    onChange: handleNameChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Type', 'wpzoom-forms'),
    value: type,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Text', 'wpzoom-forms'),
      value: 'text'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Number', 'wpzoom-forms'),
      value: 'number'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Email', 'wpzoom-forms'),
      value: 'email'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Button', 'wpzoom-forms'),
      value: 'button'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('URL', 'wpzoom-forms'),
      value: 'url'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Hidden', 'wpzoom-forms'),
      value: 'hidden'
    }],
    onChange: function onChange(value) {
      return setAttributes({
        type: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Placeholder', 'wpzoom-forms'),
    value: placeholder,
    onChange: function onChange(value) {
      return setAttributes({
        placeholder: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Show Label', 'wpzoom-forms'),
    checked: !!showLabel,
    onChange: function onChange(value) {
      return setAttributes({
        showLabel: !!value
      });
    }
  }), showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Label', 'wpzoom-forms'),
    value: label,
    onChange: function onChange(value) {
      return setAttributes({
        label: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Required', 'wpzoom-forms'),
    checked: !!required,
    onChange: function onChange(value) {
      return setAttributes({
        required: !!value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Is Subject', 'wpzoom-forms'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Whether this text field should be used as the subject field in the form (useful for contact forms).', 'wpzoom-forms'),
    checked: !!subject,
    onChange: function onChange(value) {
      return setAttributes({
        subject: !!value
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", {
    htmlFor: uniqueId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "label",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Label', 'wpzoom-forms'),
    value: label,
    htmlFor: uniqueId,
    onChange: function onChange(value) {
      return setAttributes({
        label: value
      });
    }
  }), required && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("sup", {
    className: "wp-block-wpzoom-forms-required"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('*', 'wpzoom-forms'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    name: uniqueId,
    id: uniqueId,
    placeholder: placeholder,
    required: !!required,
    "data-subject": !!subject
  }, blockProps))));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/fields/plain/save.js":
/*!**********************************!*\
  !*** ./src/fields/plain/save.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  var id = attributes.id,
    name = attributes.name,
    type = attributes.type,
    placeholder = attributes.placeholder,
    label = attributes.label,
    showLabel = attributes.showLabel,
    required = attributes.required,
    subject = attributes.subject;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
    htmlFor: id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "label",
    value: label,
    htmlFor: id
  }), required && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("sup", {
    className: "wp-block-wpzoom-forms-required"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('*', 'wpzoom-forms'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    name: id,
    id: id,
    placeholder: placeholder,
    required: !!required,
    "data-subject": !!subject
  }, blockProps)));
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./src/fields/plain/block.json":
/*!*************************************!*\
  !*** ./src/fields/plain/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wpzoom-forms/text-plain-field","title":"Text Input","category":"wpzoom-forms","ancestor":["wpzoom-forms/form"],"description":"A text input field for inputting plain text.","keywords":["wpzoom","form","input","plain","text"],"version":"1.1.0","textdomain":"wpzoom-forms","attributes":{"id":{"type":"string","default":""},"name":{"type":"string","default":""},"type":{"type":"string","source":"attribute","attribute":"type","selector":"input","default":"text"},"placeholder":{"type":"string","source":"attribute","attribute":"placeholder","selector":"input","default":""},"label":{"type":"string","default":"My Text Field"},"showLabel":{"type":"boolean","default":true},"required":{"type":"boolean","source":"attribute","attribute":"required","selector":"input","default":false},"subject":{"type":"boolean","default":false}},"supports":{"align":true,"html":false,"shadow":true,"color":{"background":true,"gradients":true,"text":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true},"dimensions":{"minHeight":true},"spacing":{"margin":true,"padding":true,"blockGap":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true}},"styles":[{"name":"modern","label":"Modern","isDefault":true},{"name":"classic","label":"Classic"}],"editorScript":"file:./index.js","editorStyle":"wpzoom-forms-css-backend-main","script":"wpzoom-forms-js-frontend-formblock","style":"wpzoom-forms-css-frontend-formblock"}');

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************!*\
  !*** ./src/fields/plain/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/fields/plain/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/fields/plain/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/fields/plain/save.js");





var name = _block_json__WEBPACK_IMPORTED_MODULE_2__.name;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 20.25C16.4142 20.25 16.75 20.5858 16.75 21C16.75 21.4142 16.4142 21.75 16 21.75H4C3.58579 21.75 3.25 21.4142 3.25 21C3.25 20.5858 3.58579 20.25 4 20.25H16Z",
    fill: "black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 16.25C20.4142 16.25 20.75 16.5858 20.75 17C20.75 17.4142 20.4142 17.75 20 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H20Z",
    fill: "black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.71484 13.3115C4.55067 13.6914 4.10961 13.8669 3.72949 13.7031C3.34915 13.5391 3.17384 13.0971 3.33789 12.7168L4.71484 13.3115Z",
    fill: "black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7.95215 3.25294C7.98573 3.25469 8.01894 3.2575 8.05176 3.26368C8.08353 3.26964 8.11508 3.27781 8.14648 3.28809C8.1557 3.29111 8.16474 3.29449 8.17383 3.29786C8.18613 3.30241 8.19875 3.30628 8.21094 3.31153C8.23146 3.32038 8.25119 3.33041 8.27051 3.34083C8.27744 3.34457 8.2842 3.34858 8.29102 3.35254C8.31685 3.36754 8.34081 3.38473 8.36426 3.40235C8.38566 3.41844 8.40512 3.43665 8.4248 3.45508C8.44089 3.47014 8.4571 3.48469 8.47168 3.50098C8.48741 3.51857 8.50148 3.53742 8.51562 3.55665C8.53027 3.57652 8.54504 3.59607 8.55762 3.61719C8.56119 3.62322 8.56591 3.62862 8.56934 3.63477L8.60352 3.70411L11.7871 11.1094C11.7895 11.1152 11.7917 11.1211 11.7939 11.127L12.4785 12.7178C12.642 13.0983 12.4654 13.5395 12.085 13.7031C11.7045 13.8665 11.2632 13.6909 11.0996 13.3106L10.5996 12.1465H5.21777L4.71484 13.3115L4.02637 13.0137L3.33789 12.7168L4.0127 11.1514C4.02486 11.1163 4.03865 11.0823 4.05566 11.0498L7.22559 3.70313C7.24287 3.66307 7.2631 3.6252 7.28613 3.58985C7.34153 3.50484 7.41477 3.4308 7.50293 3.37305C7.51576 3.36466 7.52968 3.35817 7.54297 3.35059C7.56739 3.33666 7.59173 3.32191 7.61816 3.31055C7.62262 3.30864 7.62737 3.30749 7.63184 3.30567C7.64109 3.30191 7.65076 3.29929 7.66016 3.2959C7.69741 3.28244 7.73461 3.27098 7.77246 3.26368C7.77761 3.26268 7.78292 3.26261 7.78809 3.26172C7.82854 3.2548 7.86886 3.25121 7.90918 3.25098C7.92351 3.25088 7.93777 3.25221 7.95215 3.25294ZM5.86426 10.6465H9.9541L7.91211 5.89649L5.86426 10.6465Z",
    fill: "black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M14.9326 7.69532C16.1478 6.5966 17.9515 6.50718 19.2627 7.42676C19.3264 7.07715 19.632 6.81153 20 6.81153C20.4141 6.81153 20.7497 7.14754 20.75 7.56153V13C20.7497 13.414 20.4141 13.75 20 13.75C19.6318 13.75 19.3262 13.4847 19.2627 13.1348C17.951 14.0553 16.1483 13.9676 14.9326 12.8682L14.8027 12.7451C13.4422 11.3844 13.4417 9.17843 14.8027 7.81837L14.9326 7.69532ZM18.5186 8.74317C17.74 8.10732 16.5901 8.15282 15.8643 8.87891L15.8633 8.87989C15.0889 9.65378 15.0882 10.9094 15.8633 11.6846L16.0146 11.8213C16.7931 12.4564 17.9423 12.4112 18.6689 11.6846L18.8057 11.5342C19.3987 10.8076 19.3982 9.75786 18.8047 9.03028L18.6689 8.87891L18.5186 8.74317Z",
    fill: "black"
  })),
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map