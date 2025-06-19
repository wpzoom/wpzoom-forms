/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form-block/backend/searchable-select.js":
/*!*****************************************************!*\
  !*** ./src/form-block/backend/searchable-select.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchableSelectControl; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");







var itemToString = function itemToString(item) {
  return item && item.name;
};
var stateReducer = function stateReducer(_ref, _ref2) {
  var selectedItem = _ref.selectedItem;
  var type = _ref2.type,
    changes = _ref2.changes,
    items = _ref2.props.items;
  switch (type) {
    case downshift__WEBPACK_IMPORTED_MODULE_5__.useSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown:
      return {
        selectedItem: items[selectedItem ? Math.min(items.indexOf(selectedItem) + 1, items.length - 1) : 0]
      };
    case downshift__WEBPACK_IMPORTED_MODULE_5__.useSelect.stateChangeTypes.ToggleButtonKeyDownArrowUp:
      return {
        selectedItem: items[selectedItem ? Math.max(items.indexOf(selectedItem) - 1, 0) : items.length - 1]
      };
    default:
      return changes;
  }
};
function SearchableSelectControl(_ref3) {
  var className = _ref3.className,
    hideLabelFromVision = _ref3.hideLabelFromVision,
    label = _ref3.label,
    selectPlaceholder = _ref3.selectPlaceholder,
    searchPlaceholder = _ref3.searchPlaceholder,
    noResultsLabel = _ref3.noResultsLabel,
    items = _ref3.options,
    onSelectedItemChange = _ref3.onChange,
    _selectedItem = _ref3.value;
  var _useSelect = (0,downshift__WEBPACK_IMPORTED_MODULE_5__.useSelect)({
      initialSelectedItem: items[0],
      items: items,
      itemToString: itemToString,
      onSelectedItemChange: onSelectedItemChange,
      selectedItem: _selectedItem,
      stateReducer: stateReducer
    }),
    getLabelProps = _useSelect.getLabelProps,
    getToggleButtonProps = _useSelect.getToggleButtonProps,
    getMenuProps = _useSelect.getMenuProps,
    getItemProps = _useSelect.getItemProps,
    isOpen = _useSelect.isOpen,
    highlightedIndex = _useSelect.highlightedIndex,
    selectedItem = _useSelect.selectedItem;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(items),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    filteredItems = _useState2[0],
    setFilteredItems = _useState2[1];
  var menuProps = getMenuProps({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control__menu', 'components-searchable-select-control__menu'),
    'aria-hidden': !isOpen
  });
  if (menuProps['aria-activedescendant'] && menuProps['aria-activedescendant'].slice(0, 'downshift-null'.length) === 'downshift-null') {
    delete menuProps['aria-activedescendant'];
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control', 'components-searchable-select-control', className)
  }, hideLabelFromVision ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.VisuallyHidden, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "label"
  }, getLabelProps()), label) : /* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", getLabelProps({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control__label', 'components-searchable-select-control__label')
  }), label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, getToggleButtonProps({
    'aria-label': label,
    'aria-labelledby': undefined,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control__button', 'components-searchable-select-control__button'),
    isSmall: false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "components-searchable-select-control__button-text",
    title: itemToString(selectedItem)
  }, itemToString(selectedItem) || selectPlaceholder), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("svg", {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
      d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
    })),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control__button-icon', 'components-searchable-select-control__button-icon')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", menuProps, isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control__menu-inner', 'components-searchable-select-control__menu-inner')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    placeholder: searchPlaceholder,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control__search', 'components-searchable-select-control__search'),
    onChange: function onChange(value) {
      if (items.length > 0) {
        var filtered = items.filter(function (x) {
          return x.name.toLowerCase().search(value.toLowerCase().trim()) != -1;
        });
        if (filtered.length < 1) {
          filtered.push({
            key: '-2',
            name: noResultsLabel,
            style: {
              opacity: '0.7',
              pointerEvents: 'none'
            }
          });
        }
        setFilteredItems(filtered);
      }
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control__items', 'components-searchable-select-control__items')
  }, filteredItems.map(function (item, index) {
    return (
      // eslint-disable-next-line react/jsx-key
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("li", getItemProps({
        item: item,
        index: index,
        key: item.key,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(item.className, 'components-custom-select-control__item', 'components-searchable-select-control__item', {
          'is-highlighted': index === highlightedIndex
        }, {
          'is-selected': item && selectedItem && item.key == selectedItem.key
        }),
        style: item.style
      }), item && selectedItem && item.key == selectedItem.key && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("path", {
          d: "M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"
        })),
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-custom-select-control__item-icon', 'components-searchable-select-control__item-icon')
      }), item.name)
    );
  })))));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/downshift/dist/downshift.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/downshift/dist/downshift.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Downshift$1; },
/* harmony export */   "resetIdCounter": function() { return /* binding */ resetIdCounter; },
/* harmony export */   "useCombobox": function() { return /* binding */ useCombobox; },
/* harmony export */   "useMultipleSelection": function() { return /* binding */ useMultipleSelection; },
/* harmony export */   "useSelect": function() { return /* binding */ useSelect; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/downshift/node_modules/react-is/index.js");
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compute-scroll-into-view */ "./node_modules/compute-scroll-into-view/dist/index.mjs");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");






let idCounter = 0;

/**
 * Accepts a parameter and returns it if it's a function
 * or a noop function if it's not. This allows us to
 * accept a callback, but not worry about it if it's not
 * passed.
 * @param {Function} cb the callback
 * @return {Function} a function
 */
function cbToCb(cb) {
  return typeof cb === 'function' ? cb : noop;
}
function noop() {}

/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} menuNode the menu element of the component
 */
function scrollIntoView(node, menuNode) {
  if (!node) {
    return;
  }
  const actions = (0,compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_2__["default"])(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(_ref => {
    let {
      el,
      top,
      left
    } = _ref;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}

/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @param {Window} environment The window context where downshift renders.
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */
function isOrContainsNode(parent, child, environment) {
  const result = parent === child || child instanceof environment.Node && parent.contains && parent.contains(child);
  return result;
}

/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */
function debounce(fn, time) {
  let timeoutId;
  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel();
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, time);
  }
  wrapper.cancel = cancel;
  return wrapper;
}

/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {...Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */
function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return fns.some(fn => {
      if (fn) {
        fn(event, ...args);
      }
      return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
    });
  };
}
function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }
  return node => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}

/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */
function generateId() {
  return String(idCounter++);
}

/**
 * Resets idCounter to 0. Used for SSR.
 */
function resetIdCounter() {
  idCounter = 0;
}

/**
 * Default implementation for status message. Only added when menu is open.
 * Will specify if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */
function getA11yStatusMessage$1(_ref2) {
  let {
    isOpen,
    resultCount,
    previousResultCount
  } = _ref2;
  if (!isOpen) {
    return '';
  }
  if (!resultCount) {
    return 'No results are available.';
  }
  if (resultCount !== previousResultCount) {
    return `${resultCount} result${resultCount === 1 ? ' is' : 's are'} available, use up and down arrow keys to navigate. Press Enter key to select.`;
  }
  return '';
}

/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @param {*} defaultValue the value if arg is falsey not defined
 * @return {*} the arg or it's first item
 */
function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? /* istanbul ignore next (preact) */arg[0] : arg;
  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}

/**
 * @param {Object} element (P)react element
 * @return {Boolean} whether it's a DOM element
 */
function isDOMElement(element) {

  // then we assume this is react
  return typeof element.type === 'string';
}

/**
 * @param {Object} element (P)react element
 * @return {Object} the props
 */
function getElementProps(element) {
  return element.props;
}

/**
 * Throws a helpful error message for required properties. Useful
 * to be used as a default in destructuring or object params.
 * @param {String} fnName the function name
 * @param {String} propName the prop name
 */
function requiredProp(fnName, propName) {
  // eslint-disable-next-line no-console
  console.error(`The property "${propName}" is required in "${fnName}"`);
}
const stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
/**
 * @param {Object} state the state object
 * @return {Object} state that is relevant to downshift
 */
function pickState(state) {
  if (state === void 0) {
    state = {};
  }
  const result = {};
  stateKeys.forEach(k => {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}

/**
 * This will perform a shallow merge of the given state object
 * with the state coming from props
 * (for the controlled component scenario)
 * This is used in state updater functions so they're referencing
 * the right state regardless of where it comes from.
 *
 * @param {Object} state The state of the component/hook.
 * @param {Object} props The props that may contain controlled values.
 * @returns {Object} The merged controlled state.
 */
function getState(state, props) {
  return Object.keys(state).reduce((prevState, key) => {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}

/**
 * This determines whether a prop is a "controlled prop" meaning it is
 * state which is controlled by the outside of this component rather
 * than within this component.
 *
 * @param {Object} props The props that may contain controlled values.
 * @param {String} key the key to check
 * @return {Boolean} whether it is a controlled controlled prop
 */
function isControlledProp(props, key) {
  return props[key] !== undefined;
}

/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */
function normalizeArrowKey(event) {
  const {
    key,
    keyCode
  } = event;
  /* istanbul ignore next (ie) */
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return `Arrow${key}`;
  }
  return key;
}

/**
 * Simple check if the value passed is object literal
 * @param {*} obj any things
 * @return {Boolean} whether it's object literal
 */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * Returns the new index in the list, in a circular way. If next value is out of bonds from the total,
 * it will wrap to either 0 or itemCount - 1.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index after the move.
 */
function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }
  if (itemCount === 0) {
    return -1;
  }
  const itemsLastIndex = itemCount - 1;
  if (typeof baseIndex !== 'number' || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }
  let newIndex = baseIndex + moveAmount;
  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }
  const nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);
  if (nonDisabledNewIndex === -1) {
    return baseIndex >= itemCount ? -1 : baseIndex;
  }
  return nonDisabledNewIndex;
}

/**
 * Returns the next index in the list of an item that is not disabled.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index. Returns baseIndex if item is not disabled. Returns next non-disabled item otherwise. If no non-disabled found it will return -1.
 */
function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  const currentElementNode = getItemNodeFromIndex(baseIndex);
  if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
    return baseIndex;
  }
  if (moveAmount > 0) {
    for (let index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) {
        return index;
      }
    }
  } else {
    for (let index = baseIndex - 1; index >= 0; index--) {
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) {
        return index;
      }
    }
  }
  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }
  return -1;
}

/**
 * Checks if event target is within the downshift elements.
 *
 * @param {EventTarget} target Target to check.
 * @param {HTMLElement[]} downshiftElements The elements that form downshift (list, toggle button etc).
 * @param {Window} environment The window context where downshift renders.
 * @param {boolean} checkActiveElement Whether to also check activeElement.
 *
 * @returns {boolean} Whether or not the target is within downshift elements.
 */
function targetWithinDownshift(target, downshiftElements, environment, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }
  return downshiftElements.some(contextNode => contextNode && (isOrContainsNode(contextNode, target, environment) || checkActiveElement && isOrContainsNode(contextNode, environment.document.activeElement, environment)));
}

// eslint-disable-next-line import/no-mutable-exports
let validateControlledUnchanged = noop;
/* istanbul ignore next */
if (true) {
  validateControlledUnchanged = (state, prevProps, nextProps) => {
    const warningDescription = `This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props`;
    Object.keys(state).forEach(propKey => {
      if (prevProps[propKey] !== undefined && nextProps[propKey] === undefined) {
        // eslint-disable-next-line no-console
        console.error(`downshift: A component has changed the controlled prop "${propKey}" to be uncontrolled. ${warningDescription}`);
      } else if (prevProps[propKey] === undefined && nextProps[propKey] !== undefined) {
        // eslint-disable-next-line no-console
        console.error(`downshift: A component has changed the uncontrolled prop "${propKey}" to be controlled. ${warningDescription}`);
      }
    });
  };
}

const cleanupStatus = debounce(documentProp => {
  getStatusDiv(documentProp).textContent = '';
}, 500);

/**
 * @param {String} status the status message
 * @param {Object} documentProp document passed by the user.
 */
function setStatus(status, documentProp) {
  const div = getStatusDiv(documentProp);
  if (!status) {
    return;
  }
  div.textContent = status;
  cleanupStatus(documentProp);
}

/**
 * Get the status node or create it if it does not already exist.
 * @param {Object} documentProp document passed by the user.
 * @return {HTMLElement} the status node.
 */
function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }
  let statusDiv = documentProp.getElementById('a11y-status-message');
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = documentProp.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'polite');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}

const unknown =  true ? '__autocomplete_unknown__' : 0;
const mouseUp =  true ? '__autocomplete_mouseup__' : 0;
const itemMouseEnter =  true ? '__autocomplete_item_mouseenter__' : 0;
const keyDownArrowUp =  true ? '__autocomplete_keydown_arrow_up__' : 0;
const keyDownArrowDown =  true ? '__autocomplete_keydown_arrow_down__' : 0;
const keyDownEscape =  true ? '__autocomplete_keydown_escape__' : 0;
const keyDownEnter =  true ? '__autocomplete_keydown_enter__' : 0;
const keyDownHome =  true ? '__autocomplete_keydown_home__' : 0;
const keyDownEnd =  true ? '__autocomplete_keydown_end__' : 0;
const clickItem =  true ? '__autocomplete_click_item__' : 0;
const blurInput =  true ? '__autocomplete_blur_input__' : 0;
const changeInput =  true ? '__autocomplete_change_input__' : 0;
const keyDownSpaceButton =  true ? '__autocomplete_keydown_space_button__' : 0;
const clickButton =  true ? '__autocomplete_click_button__' : 0;
const blurButton =  true ? '__autocomplete_blur_button__' : 0;
const controlledPropUpdatedSelectedItem =  true ? '__autocomplete_controlled_prop_updated_selected_item__' : 0;
const touchEnd =  true ? '__autocomplete_touchend__' : 0;

var stateChangeTypes$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  unknown: unknown,
  mouseUp: mouseUp,
  itemMouseEnter: itemMouseEnter,
  keyDownArrowUp: keyDownArrowUp,
  keyDownArrowDown: keyDownArrowDown,
  keyDownEscape: keyDownEscape,
  keyDownEnter: keyDownEnter,
  keyDownHome: keyDownHome,
  keyDownEnd: keyDownEnd,
  clickItem: clickItem,
  blurInput: blurInput,
  changeInput: changeInput,
  keyDownSpaceButton: keyDownSpaceButton,
  clickButton: clickButton,
  blurButton: blurButton,
  controlledPropUpdatedSelectedItem: controlledPropUpdatedSelectedItem,
  touchEnd: touchEnd
});

/* eslint camelcase:0 */
const Downshift = /*#__PURE__*/(() => {
  class Downshift extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(_props) {
      var _this;
      super(_props);
      _this = this;
      this.id = this.props.id || `downshift-${generateId()}`;
      this.menuId = this.props.menuId || `${this.id}-menu`;
      this.labelId = this.props.labelId || `${this.id}-label`;
      this.inputId = this.props.inputId || `${this.id}-input`;
      this.getItemId = this.props.getItemId || (index => `${this.id}-item-${index}`);
      this.input = null;
      this.items = [];
      this.itemCount = null;
      this.previousResultCount = 0;
      this.timeoutIds = [];
      this.internalSetTimeout = (fn, time) => {
        const id = setTimeout(() => {
          this.timeoutIds = this.timeoutIds.filter(i => i !== id);
          fn();
        }, time);
        this.timeoutIds.push(id);
      };
      this.setItemCount = count => {
        this.itemCount = count;
      };
      this.unsetItemCount = () => {
        this.itemCount = null;
      };
      this.setHighlightedIndex = function (highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState({
          highlightedIndex,
          ...otherStateToSet
        });
      };
      this.clearSelection = cb => {
        this.internalSetState({
          selectedItem: null,
          inputValue: '',
          highlightedIndex: this.props.defaultHighlightedIndex,
          isOpen: this.props.defaultIsOpen
        }, cb);
      };
      this.selectItem = (item, otherStateToSet, cb) => {
        otherStateToSet = pickState(otherStateToSet);
        this.internalSetState({
          isOpen: this.props.defaultIsOpen,
          highlightedIndex: this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: this.props.itemToString(item),
          ...otherStateToSet
        }, cb);
      };
      this.selectItemAtIndex = (itemIndex, otherStateToSet, cb) => {
        const item = this.items[itemIndex];
        if (item == null) {
          return;
        }
        this.selectItem(item, otherStateToSet, cb);
      };
      this.selectHighlightedItem = (otherStateToSet, cb) => {
        return this.selectItemAtIndex(this.getState().highlightedIndex, otherStateToSet, cb);
      };
      this.internalSetState = (stateToSet, cb) => {
        let isItemSelected, onChangeArg;
        const onStateChangeArg = {};
        const isStateToSetFunction = typeof stateToSet === 'function';

        // we want to call `onInputValueChange` before the `setState` call
        // so someone controlling the `inputValue` state gets notified of
        // the input change as soon as possible. This avoids issues with
        // preserving the cursor position.
        // See https://github.com/downshift-js/downshift/issues/217 for more info.
        if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
          this.props.onInputValueChange(stateToSet.inputValue, {
            ...this.getStateAndHelpers(),
            ...stateToSet
          });
        }
        return this.setState(state => {
          state = this.getState(state);
          let newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;

          // Your own function that could modify the state that will be set.
          newStateToSet = this.props.stateReducer(state, newStateToSet);

          // checks if an item is selected, regardless of if it's different from
          // what was selected before
          // used to determine if onSelect and onChange callbacks should be called
          isItemSelected = newStateToSet.hasOwnProperty('selectedItem');
          // this keeps track of the object we want to call with setState
          const nextState = {};
          // we need to call on change if the outside world is controlling any of our state
          // and we're trying to update that state. OR if the selection has changed and we're
          // trying to update the selection
          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }
          newStateToSet.type = newStateToSet.type || unknown;
          Object.keys(newStateToSet).forEach(key => {
            // onStateChangeArg should only have the state that is
            // actually changing
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            }
            // the type is useful for the onStateChangeArg
            // but we don't actually want to set it in internal state.
            // this is an undocumented feature for now... Not all internalSetState
            // calls support it and I'm not certain we want them to yet.
            // But it enables users controlling the isOpen state to know when
            // the isOpen state changes due to mouseup events which is quite handy.
            if (key === 'type') {
              return;
            }
            newStateToSet[key];
            // if it's coming from props, then we don't care to set it internally
            if (!isControlledProp(this.props, key)) {
              nextState[key] = newStateToSet[key];
            }
          });

          // if stateToSet is a function, then we weren't able to call onInputValueChange
          // earlier, so we'll call it now that we know what the inputValue state will be.
          if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
            this.props.onInputValueChange(newStateToSet.inputValue, {
              ...this.getStateAndHelpers(),
              ...newStateToSet
            });
          }
          return nextState;
        }, () => {
          // call the provided callback if it's a function
          cbToCb(cb)();

          // only call the onStateChange and onChange callbacks if
          // we have relevant information to pass them.
          const hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
          if (hasMoreStateThanType) {
            this.props.onStateChange(onStateChangeArg, this.getStateAndHelpers());
          }
          if (isItemSelected) {
            this.props.onSelect(stateToSet.selectedItem, this.getStateAndHelpers());
          }
          if (onChangeArg !== undefined) {
            this.props.onChange(onChangeArg, this.getStateAndHelpers());
          }
          // this is currently undocumented and therefore subject to change
          // We'll try to not break it, but just be warned.
          this.props.onUserAction(onStateChangeArg, this.getStateAndHelpers());
        });
      };
      this.rootRef = node => this._rootNode = node;
      this.getRootProps = function (_temp, _temp2) {
        let {
          refKey = 'ref',
          ref,
          ...rest
        } = _temp === void 0 ? {} : _temp;
        let {
          suppressRefError = false
        } = _temp2 === void 0 ? {} : _temp2;
        // this is used in the render to know whether the user has called getRootProps.
        // It uses that to know whether to apply the props automatically
        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;
        const {
          isOpen
        } = _this.getState();
        return {
          [refKey]: handleRefs(ref, _this.rootRef),
          role: 'combobox',
          'aria-expanded': isOpen,
          'aria-haspopup': 'listbox',
          'aria-owns': isOpen ? _this.menuId : null,
          'aria-labelledby': _this.labelId,
          ...rest
        };
      };
      this.keyDownHandlers = {
        ArrowDown(event) {
          event.preventDefault();
          if (this.getState().isOpen) {
            const amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, () => {
              const itemCount = this.getItemCount();
              if (itemCount > 0) {
                const {
                  highlightedIndex
                } = this.getState();
                const nextHighlightedIndex = getNextWrappingIndex(1, highlightedIndex, itemCount, index => this.getItemNodeFromIndex(index));
                this.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        ArrowUp(event) {
          event.preventDefault();
          if (this.getState().isOpen) {
            const amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, () => {
              const itemCount = this.getItemCount();
              if (itemCount > 0) {
                const {
                  highlightedIndex
                } = this.getState();
                const nextHighlightedIndex = getNextWrappingIndex(-1, highlightedIndex, itemCount, index => this.getItemNodeFromIndex(index));
                this.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowUp
                });
              }
            });
          }
        },
        Enter(event) {
          if (event.which === 229) {
            return;
          }
          const {
            isOpen,
            highlightedIndex
          } = this.getState();
          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            const item = this.items[highlightedIndex];
            const itemNode = this.getItemNodeFromIndex(highlightedIndex);
            if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
              return;
            }
            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        },
        Escape(event) {
          event.preventDefault();
          this.reset({
            type: keyDownEscape,
            ...(!this.state.isOpen && {
              selectedItem: null,
              inputValue: ''
            })
          });
        }
      };
      this.buttonKeyDownHandlers = {
        ...this.keyDownHandlers,
        ' '(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }
      };
      this.inputKeyDownHandlers = {
        ...this.keyDownHandlers,
        Home(event) {
          const {
            isOpen
          } = this.getState();
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          const itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }

          // get next non-disabled starting downwards from 0 if that's disabled.
          const newHighlightedIndex = getNextNonDisabledIndex(1, 0, itemCount, index => this.getItemNodeFromIndex(index), false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownHome
          });
        },
        End(event) {
          const {
            isOpen
          } = this.getState();
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          const itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }

          // get next non-disabled starting upwards from last index if that's disabled.
          const newHighlightedIndex = getNextNonDisabledIndex(-1, itemCount - 1, itemCount, index => this.getItemNodeFromIndex(index), false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownEnd
          });
        }
      };
      this.getToggleButtonProps = function (_temp3) {
        let {
          onClick,
          onPress,
          onKeyDown,
          onKeyUp,
          onBlur,
          ...rest
        } = _temp3 === void 0 ? {} : _temp3;
        const {
          isOpen
        } = _this.getState();
        const enabledEventHandlers = {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        const eventHandlers = rest.disabled ? {} : enabledEventHandlers;
        return {
          type: 'button',
          role: 'button',
          'aria-label': isOpen ? 'close menu' : 'open menu',
          'aria-haspopup': true,
          'data-toggle': true,
          ...eventHandlers,
          ...rest
        };
      };
      this.buttonHandleKeyUp = event => {
        // Prevent click event from emitting in Firefox
        event.preventDefault();
      };
      this.buttonHandleKeyDown = event => {
        const key = normalizeArrowKey(event);
        if (this.buttonKeyDownHandlers[key]) {
          this.buttonKeyDownHandlers[key].call(this, event);
        }
      };
      this.buttonHandleClick = event => {
        event.preventDefault();
        // handle odd case for Safari and Firefox which
        // don't give the button the focus properly.
        /* istanbul ignore if (can't reasonably test this) */
        if (this.props.environment.document.activeElement === this.props.environment.document.body) {
          event.target.focus();
        }
        // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
        // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
        // when building for production and should therefore have no impact on production code.
        if (false) {} else {
          // Ensure that toggle of menu occurs after the potential blur event in iOS
          this.internalSetTimeout(() => this.toggleMenu({
            type: clickButton
          }));
        }
      };
      this.buttonHandleBlur = event => {
        const blurTarget = event.target; // Save blur target for comparison with activeElement later
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element
        this.internalSetTimeout(() => {
          if (!this.isMouseDown && (this.props.environment.document.activeElement == null || this.props.environment.document.activeElement.id !== this.inputId) && this.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
          ) {
            this.reset({
              type: blurButton
            });
          }
        });
      };
      this.getLabelProps = props => {
        return {
          htmlFor: this.inputId,
          id: this.labelId,
          ...props
        };
      };
      this.getInputProps = function (_temp4) {
        let {
          onKeyDown,
          onBlur,
          onChange,
          onInput,
          onChangeText,
          ...rest
        } = _temp4 === void 0 ? {} : _temp4;
        let onChangeKey;
        let eventHandlers = {};

        /* istanbul ignore next (preact) */
        {
          onChangeKey = 'onChange';
        }
        const {
          inputValue,
          isOpen,
          highlightedIndex
        } = _this.getState();
        if (!rest.disabled) {
          eventHandlers = {
            [onChangeKey]: callAllEventHandlers(onChange, onInput, _this.inputHandleChange),
            onKeyDown: callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown),
            onBlur: callAllEventHandlers(onBlur, _this.inputHandleBlur)
          };
        }
        return {
          'aria-autocomplete': 'list',
          'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
          'aria-controls': isOpen ? _this.menuId : null,
          'aria-labelledby': _this.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: 'off',
          value: inputValue,
          id: _this.inputId,
          ...eventHandlers,
          ...rest
        };
      };
      this.inputHandleKeyDown = event => {
        const key = normalizeArrowKey(event);
        if (key && this.inputKeyDownHandlers[key]) {
          this.inputKeyDownHandlers[key].call(this, event);
        }
      };
      this.inputHandleChange = event => {
        this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue: event.target.value,
          highlightedIndex: this.props.defaultHighlightedIndex
        });
      };
      this.inputHandleBlur = () => {
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
        this.internalSetTimeout(() => {
          const downshiftButtonIsActive = this.props.environment.document && !!this.props.environment.document.activeElement && !!this.props.environment.document.activeElement.dataset && this.props.environment.document.activeElement.dataset.toggle && this._rootNode && this._rootNode.contains(this.props.environment.document.activeElement);
          if (!this.isMouseDown && !downshiftButtonIsActive) {
            this.reset({
              type: blurInput
            });
          }
        });
      };
      this.menuRef = node => {
        this._menuNode = node;
      };
      this.getMenuProps = function (_temp5, _temp6) {
        let {
          refKey = 'ref',
          ref,
          ...props
        } = _temp5 === void 0 ? {} : _temp5;
        let {
          suppressRefError = false
        } = _temp6 === void 0 ? {} : _temp6;
        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return {
          [refKey]: handleRefs(ref, _this.menuRef),
          role: 'listbox',
          'aria-labelledby': props && props['aria-label'] ? null : _this.labelId,
          id: _this.menuId,
          ...props
        };
      };
      this.getItemProps = function (_temp7) {
        let {
          onMouseMove,
          onMouseDown,
          onClick,
          onPress,
          index,
          item =  false ? /* istanbul ignore next */0 : requiredProp('getItemProps', 'item'),
          ...rest
        } = _temp7 === void 0 ? {} : _temp7;
        if (index === undefined) {
          _this.items.push(item);
          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }
        const onSelectKey = 'onClick';
        const customClickHandler = onClick;
        const enabledEventHandlers = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: callAllEventHandlers(onMouseMove, () => {
            if (index === _this.getState().highlightedIndex) {
              return;
            }
            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            });

            // We never want to manually scroll when changing state based
            // on `onMouseMove` because we will be moving the element out
            // from under the user which is currently scrolling/moving the
            // cursor
            _this.avoidScrolling = true;
            _this.internalSetTimeout(() => _this.avoidScrolling = false, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, event => {
            // This prevents the activeElement from being changed
            // to the item so it can remain with the current activeElement
            // which is a more common use case.
            event.preventDefault();
          }),
          [onSelectKey]: callAllEventHandlers(customClickHandler, () => {
            _this.selectItemAtIndex(index, {
              type: clickItem
            });
          })
        };

        // Passing down the onMouseDown handler to prevent redirect
        // of the activeElement if clicking on disabled items
        const eventHandlers = rest.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return {
          id: _this.getItemId(index),
          role: 'option',
          'aria-selected': _this.getState().highlightedIndex === index,
          ...eventHandlers,
          ...rest
        };
      };
      this.clearItems = () => {
        this.items = [];
      };
      this.reset = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(_ref => {
          let {
            selectedItem
          } = _ref;
          return {
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem),
            ...otherStateToSet
          };
        }, cb);
      };
      this.toggleMenu = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(_ref2 => {
          let {
            isOpen
          } = _ref2;
          return {
            isOpen: !isOpen,
            ...(isOpen && {
              highlightedIndex: _this.props.defaultHighlightedIndex
            }),
            ...otherStateToSet
          };
        }, () => {
          const {
            isOpen,
            highlightedIndex
          } = _this.getState();
          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === 'number') {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }
          cbToCb(cb)();
        });
      };
      this.openMenu = cb => {
        this.internalSetState({
          isOpen: true
        }, cb);
      };
      this.closeMenu = cb => {
        this.internalSetState({
          isOpen: false
        }, cb);
      };
      this.updateStatus = debounce(() => {
        const state = this.getState();
        const item = this.items[state.highlightedIndex];
        const resultCount = this.getItemCount();
        const status = this.props.getA11yStatusMessage({
          itemToString: this.props.itemToString,
          previousResultCount: this.previousResultCount,
          resultCount,
          highlightedItem: item,
          ...state
        });
        this.previousResultCount = resultCount;
        setStatus(status, this.props.environment.document);
      }, 200);
      // fancy destructuring + defaults + aliases
      // this basically says each value of state should either be set to
      // the initial value or the default value if the initial value is not provided
      const {
        defaultHighlightedIndex,
        initialHighlightedIndex: _highlightedIndex = defaultHighlightedIndex,
        defaultIsOpen,
        initialIsOpen: _isOpen = defaultIsOpen,
        initialInputValue: _inputValue = '',
        initialSelectedItem: _selectedItem = null
      } = this.props;
      const _state = this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });
      if (_state.selectedItem != null && this.props.initialInputValue === undefined) {
        _state.inputValue = this.props.itemToString(_state.selectedItem);
      }
      this.state = _state;
    }
    /**
     * Clear all running timeouts
     */
    internalClearTimeouts() {
      this.timeoutIds.forEach(id => {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    }

    /**
     * Gets the state based on internal state or props
     * If a state value is passed via props, then that
     * is the value given, otherwise it's retrieved from
     * stateToMerge
     *
     * @param {Object} stateToMerge defaults to this.state
     * @return {Object} the state
     */
    getState(stateToMerge) {
      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }
      return getState(stateToMerge, this.props);
    }
    getItemCount() {
      // things read better this way. They're in priority order:
      // 1. `this.itemCount`
      // 2. `this.props.itemCount`
      // 3. `this.items.length`
      let itemCount = this.items.length;
      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== undefined) {
        itemCount = this.props.itemCount;
      }
      return itemCount;
    }
    getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    }
    scrollHighlightedItemIntoView() {
      /* istanbul ignore else (react-native) */
      {
        const node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    }
    moveHighlightedIndex(amount, otherStateToSet) {
      const itemCount = this.getItemCount();
      const {
        highlightedIndex
      } = this.getState();
      if (itemCount > 0) {
        const nextHighlightedIndex = getNextWrappingIndex(amount, highlightedIndex, itemCount, index => this.getItemNodeFromIndex(index));
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    }
    getStateAndHelpers() {
      const {
        highlightedIndex,
        inputValue,
        selectedItem,
        isOpen
      } = this.getState();
      const {
        itemToString
      } = this.props;
      const {
        id
      } = this;
      const {
        getRootProps,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        openMenu,
        closeMenu,
        toggleMenu,
        selectItem,
        selectItemAtIndex,
        selectHighlightedItem,
        setHighlightedIndex,
        clearSelection,
        clearItems,
        reset,
        setItemCount,
        unsetItemCount,
        internalSetState: setState
      } = this;
      return {
        // prop getters
        getRootProps,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        // actions
        reset,
        openMenu,
        closeMenu,
        toggleMenu,
        selectItem,
        selectItemAtIndex,
        selectHighlightedItem,
        setHighlightedIndex,
        clearSelection,
        clearItems,
        setItemCount,
        unsetItemCount,
        setState,
        // props
        itemToString,
        // derived
        id,
        // state
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      };
    }

    //////////////////////////// ROOT

    componentDidMount() {
      /* istanbul ignore if (react-native) */
      if ( true && this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }

      /* istanbul ignore if (react-native) */
      {
        // this.isMouseDown helps us track whether the mouse is currently held down.
        // This is useful when the user clicks on an item in the list, but holds the mouse
        // down long enough for the list to disappear (because the blur event fires on the input)
        // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
        // trigger hiding the menu.
        const onMouseDown = () => {
          this.isMouseDown = true;
        };
        const onMouseUp = event => {
          this.isMouseDown = false;
          // if the target element or the activeElement is within a downshift node
          // then we don't want to reset downshift
          const contextWithinDownshift = targetWithinDownshift(event.target, [this._rootNode, this._menuNode], this.props.environment);
          if (!contextWithinDownshift && this.getState().isOpen) {
            this.reset({
              type: mouseUp
            }, () => this.props.onOuterClick(this.getStateAndHelpers()));
          }
        };
        // Touching an element in iOS gives focus and hover states, but touching out of
        // the element will remove hover, and persist the focus state, resulting in the
        // blur event not being triggered.
        // this.isTouchMove helps us track whether the user is tapping or swiping on a touch screen.
        // If the user taps outside of Downshift, the component should be reset,
        // but not if the user is swiping
        const onTouchStart = () => {
          this.isTouchMove = false;
        };
        const onTouchMove = () => {
          this.isTouchMove = true;
        };
        const onTouchEnd = event => {
          const contextWithinDownshift = targetWithinDownshift(event.target, [this._rootNode, this._menuNode], this.props.environment, false);
          if (!this.isTouchMove && !contextWithinDownshift && this.getState().isOpen) {
            this.reset({
              type: touchEnd
            }, () => this.props.onOuterClick(this.getStateAndHelpers()));
          }
        };
        const {
          environment
        } = this.props;
        environment.addEventListener('mousedown', onMouseDown);
        environment.addEventListener('mouseup', onMouseUp);
        environment.addEventListener('touchstart', onTouchStart);
        environment.addEventListener('touchmove', onTouchMove);
        environment.addEventListener('touchend', onTouchEnd);
        this.cleanup = () => {
          this.internalClearTimeouts();
          this.updateStatus.cancel();
          environment.removeEventListener('mousedown', onMouseDown);
          environment.removeEventListener('mouseup', onMouseUp);
          environment.removeEventListener('touchstart', onTouchStart);
          environment.removeEventListener('touchmove', onTouchMove);
          environment.removeEventListener('touchend', onTouchEnd);
        };
      }
    }
    shouldScroll(prevState, prevProps) {
      const {
        highlightedIndex: currentHighlightedIndex
      } = this.props.highlightedIndex === undefined ? this.getState() : this.props;
      const {
        highlightedIndex: prevHighlightedIndex
      } = prevProps.highlightedIndex === undefined ? prevState : prevProps;
      const scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      const scrollWhenNavigating = currentHighlightedIndex !== prevHighlightedIndex;
      return scrollWhenOpen || scrollWhenNavigating;
    }
    componentDidUpdate(prevProps, prevState) {
      if (true) {
        validateControlledUnchanged(this.state, prevProps, this.props);
        /* istanbul ignore if (react-native) */
        if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
      }
      if (isControlledProp(this.props, 'selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }
      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }

      /* istanbul ignore else (react-native) */
      {
        this.updateStatus();
      }
    }
    componentWillUnmount() {
      this.cleanup(); // avoids memory leak
    }

    render() {
      const children = unwrapArray(this.props.children, noop);
      // because the items are rerendered every time we call the children
      // we clear this out each render and it will be populated again as
      // getItemProps is called.
      this.clearItems();
      // we reset this so we know whether the user calls getRootProps during
      // this render. If they do then we don't need to do anything,
      // if they don't then we need to clone the element they return and
      // apply the props for them.
      this.getRootProps.called = false;
      this.getRootProps.refKey = undefined;
      this.getRootProps.suppressRefError = undefined;
      // we do something similar for getMenuProps
      this.getMenuProps.called = false;
      this.getMenuProps.refKey = undefined;
      this.getMenuProps.suppressRefError = undefined;
      // we do something similar for getLabelProps
      this.getLabelProps.called = false;
      // and something similar for getInputProps
      this.getInputProps.called = false;
      const element = unwrapArray(children(this.getStateAndHelpers()));
      if (!element) {
        return null;
      }
      if (this.getRootProps.called || this.props.suppressRefError) {
        if ( true && !this.getRootProps.suppressRefError && !this.props.suppressRefError) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }
        return element;
      } else if (isDOMElement(element)) {
        // they didn't apply the root props, but we can clone
        // this and apply the props ourselves
        return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, this.getRootProps(getElementProps(element)));
      }

      /* istanbul ignore else */
      if (true) {
        // they didn't apply the root props, but they need to
        // otherwise we can't query around the autocomplete

        throw new Error('downshift: If you return a non-DOM element, you must apply the getRootProps function');
      }

      /* istanbul ignore next */
      return undefined;
    }
  }
  Downshift.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage$1,
    itemToString: i => {
      if (i == null) {
        return '';
      }
      if ( true && isPlainObject(i) && !i.hasOwnProperty('toString')) {
        // eslint-disable-next-line no-console
        console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
      }
      return String(i);
    },
    onStateChange: noop,
    onInputValueChange: noop,
    onUserAction: noop,
    onChange: noop,
    onSelect: noop,
    onOuterClick: noop,
    selectedItemChanged: (prevItem, item) => prevItem !== item,
    environment: /* istanbul ignore next (ssr) */
    typeof window === 'undefined' ? {} : window,
    stateReducer: (state, stateToSet) => stateToSet,
    suppressRefError: false,
    scrollIntoView
  };
  Downshift.stateChangeTypes = stateChangeTypes$3;
  return Downshift;
})();
 true ? Downshift.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  defaultHighlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  defaultIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  initialHighlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  initialSelectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  initialInputValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  initialIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  getA11yStatusMessage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  itemToString: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onStateChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onInputValueChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onUserAction: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onOuterClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  selectedItemChanged: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  stateReducer: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  itemCount: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  environment: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    addEventListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    removeEventListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    document: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
      getElementById: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
      activeElement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
      body: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
    })
  }),
  suppressRefError: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  scrollIntoView: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components
  /* eslint-disable react/no-unused-prop-types */
  selectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  inputValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  highlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  labelId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  inputId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  menuId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  getItemId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
  /* eslint-enable react/no-unused-prop-types */
} : 0;
var Downshift$1 = Downshift;
function validateGetMenuPropsCalledCorrectly(node, _ref3) {
  let {
    refKey
  } = _ref3;
  if (!node) {
    // eslint-disable-next-line no-console
    console.error(`downshift: The ref prop "${refKey}" from getMenuProps was not applied correctly on your menu element.`);
  }
}
function validateGetRootPropsCalledCorrectly(element, _ref4) {
  let {
    refKey
  } = _ref4;
  const refKeySpecified = refKey !== 'ref';
  const isComposite = !isDOMElement(element);
  if (isComposite && !refKeySpecified && !(0,react_is__WEBPACK_IMPORTED_MODULE_1__.isForwardRef)(element)) {
    // eslint-disable-next-line no-console
    console.error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
  } else if (!isComposite && refKeySpecified) {
    // eslint-disable-next-line no-console
    console.error(`downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "${refKey}"`);
  }
  if (!(0,react_is__WEBPACK_IMPORTED_MODULE_1__.isForwardRef)(element) && !getElementProps(element)[refKey]) {
    // eslint-disable-next-line no-console
    console.error(`downshift: You must apply the ref prop "${refKey}" from getRootProps onto your root element.`);
  }
}

const dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ''
};
function callOnChangeProps(action, state, newState) {
  const {
    props,
    type
  } = action;
  const changes = {};
  Object.keys(state).forEach(key => {
    invokeOnChangeHandler(key, action, state, newState);
    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });
  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange({
      type,
      ...changes
    });
  }
}
function invokeOnChangeHandler(key, action, state, newState) {
  const {
    props,
    type
  } = action;
  const handler = `on${capitalizeString(key)}Change`;
  if (props[handler] && newState[key] !== undefined && newState[key] !== state[key]) {
    props[handler]({
      type,
      ...newState
    });
  }
}

/**
 * Default state reducer that returns the changes.
 *
 * @param {Object} s state.
 * @param {Object} a action with changes.
 * @returns {Object} changes.
 */
function stateReducer(s, a) {
  return a.changes;
}

/**
 * Returns a message to be added to aria-live region when item is selected.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */
function getA11ySelectionMessage(selectionParameters) {
  const {
    selectedItem,
    itemToString: itemToStringLocal
  } = selectionParameters;
  return selectedItem ? `${itemToStringLocal(selectedItem)} has been selected.` : '';
}

/**
 * Debounced call for updating the a11y message.
 */
const updateA11yStatus = debounce((getA11yMessage, document) => {
  setStatus(getA11yMessage(), document);
}, 200);

// istanbul ignore next
const useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
function useElementIds(_ref) {
  let {
    id = `downshift-${generateId()}`,
    labelId,
    menuId,
    getItemId,
    toggleButtonId,
    inputId
  } = _ref;
  const elementIdsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    labelId: labelId || `${id}-label`,
    menuId: menuId || `${id}-menu`,
    getItemId: getItemId || (index => `${id}-item-${index}`),
    toggleButtonId: toggleButtonId || `${id}-toggle-button`,
    inputId: inputId || `${id}-input`
  });
  return elementIdsRef.current;
}
function getItemIndex(index, item, items) {
  if (index !== undefined) {
    return index;
  }
  if (items.length === 0) {
    return -1;
  }
  return items.indexOf(item);
}
function itemToString(item) {
  return item ? String(item) : '';
}
function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}
function capitalizeString(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}
function useLatestRef(val) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(val);
  // technically this is not "concurrent mode safe" because we're manipulating
  // the value during render (so it's not idempotent). However, the places this
  // hook is used is to support memoizing callbacks which will be called
  // *during* render, so we need the latest values *during* render.
  // If not for this, then we'd probably want to use useLayoutEffect instead.
  ref.current = val;
  return ref;
}

/**
 * Computes the controlled state using a the previous state, props,
 * two reducers, one from downshift and an optional one from the user.
 * Also calls the onChange handlers for state values that have changed.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */
function useEnhancedReducer(reducer, initialState, props) {
  const prevStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const actionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const enhancedReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((state, action) => {
    actionRef.current = action;
    state = getState(state, action.props);
    const changes = reducer(state, action);
    const newState = action.props.stateReducer(state, {
      ...action,
      changes
    });
    return newState;
  }, [reducer]);
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(enhancedReducer, initialState);
  const propsRef = useLatestRef(props);
  const dispatchWithProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(action => dispatch({
    props: propsRef.current,
    ...action
  }), [propsRef]);
  const action = actionRef.current;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (action && prevStateRef.current && prevStateRef.current !== state) {
      callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
    }
    prevStateRef.current = state;
  }, [state, props, action]);
  return [state, dispatchWithProps];
}

/**
 * Wraps the useEnhancedReducer and applies the controlled prop values before
 * returning the new state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */
function useControlledReducer$1(reducer, initialState, props) {
  const [state, dispatch] = useEnhancedReducer(reducer, initialState, props);
  return [getState(state, props), dispatch];
}
const defaultProps$3 = {
  itemToString,
  stateReducer,
  getA11ySelectionMessage,
  scrollIntoView,
  environment: /* istanbul ignore next (ssr) */
  typeof window === 'undefined' ? {} : window
};
function getDefaultValue$1(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }
  const defaultValue = props[`default${capitalizeString(propKey)}`];
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  return defaultStateValues[propKey];
}
function getInitialValue$1(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }
  const value = props[propKey];
  if (value !== undefined) {
    return value;
  }
  const initialValue = props[`initial${capitalizeString(propKey)}`];
  if (initialValue !== undefined) {
    return initialValue;
  }
  return getDefaultValue$1(props, propKey, defaultStateValues);
}
function getInitialState$2(props) {
  const selectedItem = getInitialValue$1(props, 'selectedItem');
  const isOpen = getInitialValue$1(props, 'isOpen');
  const highlightedIndex = getInitialValue$1(props, 'highlightedIndex');
  const inputValue = getInitialValue$1(props, 'inputValue');
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
function getHighlightedIndexOnOpen(props, state, offset) {
  const {
    items,
    initialHighlightedIndex,
    defaultHighlightedIndex
  } = props;
  const {
    selectedItem,
    highlightedIndex
  } = state;
  if (items.length === 0) {
    return -1;
  }

  // initialHighlightedIndex will give value to highlightedIndex on initial state only.
  if (initialHighlightedIndex !== undefined && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }
  if (defaultHighlightedIndex !== undefined) {
    return defaultHighlightedIndex;
  }
  if (selectedItem) {
    return items.indexOf(selectedItem);
  }
  if (offset === 0) {
    return -1;
  }
  return offset < 0 ? items.length - 1 : 0;
}

/**
 * Reuse the movement tracking of mouse and touch events.
 *
 * @param {boolean} isOpen Whether the dropdown is open or not.
 * @param {Array<Object>} downshiftElementRefs Downshift element refs to track movement (toggleButton, menu etc.)
 * @param {Object} environment Environment where component/hook exists.
 * @param {Function} handleBlur Handler on blur from mouse or touch.
 * @returns {Object} Ref containing whether mouseDown or touchMove event is happening
 */
function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
  const mouseAndTouchTrackersRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    isMouseDown: false,
    isTouchMove: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // The same strategy for checking if a click occurred inside or outside downsift
    // as in downshift.js.
    const onMouseDown = () => {
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    };
    const onMouseUp = event => {
      mouseAndTouchTrackersRef.current.isMouseDown = false;
      if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map(ref => ref.current), environment)) {
        handleBlur();
      }
    };
    const onTouchStart = () => {
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    };
    const onTouchMove = () => {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    };
    const onTouchEnd = event => {
      if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map(ref => ref.current), environment, false)) {
        handleBlur();
      }
    };
    environment.addEventListener('mousedown', onMouseDown);
    environment.addEventListener('mouseup', onMouseUp);
    environment.addEventListener('touchstart', onTouchStart);
    environment.addEventListener('touchmove', onTouchMove);
    environment.addEventListener('touchend', onTouchEnd);
    return function cleanup() {
      environment.removeEventListener('mousedown', onMouseDown);
      environment.removeEventListener('mouseup', onMouseUp);
      environment.removeEventListener('touchstart', onTouchStart);
      environment.removeEventListener('touchmove', onTouchMove);
      environment.removeEventListener('touchend', onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, environment]);
  return mouseAndTouchTrackersRef;
}

/* istanbul ignore next */
// eslint-disable-next-line import/no-mutable-exports
let useGetterPropsCalledChecker = () => noop;
/**
 * Custom hook that checks if getter props are called correctly.
 *
 * @param  {...any} propKeys Getter prop names to be handled.
 * @returns {Function} Setter function called inside getter props to set call information.
 */
/* istanbul ignore next */
if (true) {
  useGetterPropsCalledChecker = function () {
    const isInitialMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
      propKeys[_key] = arguments[_key];
    }
    const getterPropsCalledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(propKeys.reduce((acc, propKey) => {
      acc[propKey] = {};
      return acc;
    }, {}));
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      Object.keys(getterPropsCalledRef.current).forEach(propKey => {
        const propCallInfo = getterPropsCalledRef.current[propKey];
        if (isInitialMountRef.current) {
          if (!Object.keys(propCallInfo).length) {
            // eslint-disable-next-line no-console
            console.error(`downshift: You forgot to call the ${propKey} getter function on your component / element.`);
            return;
          }
        }
        const {
          suppressRefError,
          refKey,
          elementRef
        } = propCallInfo;
        if ((!elementRef || !elementRef.current) && !suppressRefError) {
          // eslint-disable-next-line no-console
          console.error(`downshift: The ref prop "${refKey}" from ${propKey} was not applied correctly on your element.`);
        }
      });
      isInitialMountRef.current = false;
    });
    const setGetterPropCallInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((propKey, suppressRefError, refKey, elementRef) => {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError,
        refKey,
        elementRef
      };
    }, []);
    return setGetterPropCallInfo;
  };
}
function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  let {
    isInitialMount,
    highlightedIndex,
    items,
    environment,
    ...rest
  } = _ref2;
  // Sets a11y status message on changes in state.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInitialMount || false) {
      return;
    }
    updateA11yStatus(() => getA11yMessage({
      highlightedIndex,
      highlightedItem: items[highlightedIndex],
      resultCount: items.length,
      ...rest
    }), environment.document);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyArray);
}
function useScrollIntoView(_ref3) {
  let {
    highlightedIndex,
    isOpen,
    itemRefs,
    getItemNodeFromIndex,
    menuElement,
    scrollIntoView: scrollIntoViewProp
  } = _ref3;
  // used not to scroll on highlight by mouse.
  const shouldScrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  // Scroll on highlighted item if change comes from keyboard.
  useIsomorphicLayoutEffect(() => {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }
    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightedIndex]);
  return shouldScrollRef;
}

// eslint-disable-next-line import/no-mutable-exports
let useControlPropsValidator = noop;
/* istanbul ignore next */
if (true) {
  useControlPropsValidator = _ref4 => {
    let {
      isInitialMount,
      props,
      state
    } = _ref4;
    // used for checking when props are moving from controlled to uncontrolled.
    const prevPropsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (isInitialMount) {
        return;
      }
      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props, isInitialMount]);
  };
}

function downshiftCommonReducer(state, action, stateChangeTypes) {
  const {
    type,
    props
  } = action;
  let changes;
  switch (type) {
    case stateChangeTypes.ItemMouseMove:
      changes = {
        highlightedIndex: action.disabled ? -1 : action.index
      };
      break;
    case stateChangeTypes.MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;
    case stateChangeTypes.ToggleButtonClick:
    case stateChangeTypes.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes.FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes.FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;
    case stateChangeTypes.FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;
    case stateChangeTypes.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;
    case stateChangeTypes.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        isOpen: getDefaultValue$1(props, 'isOpen'),
        selectedItem: getDefaultValue$1(props, 'selectedItem'),
        inputValue: getDefaultValue$1(props, 'inputValue')
      };
      break;
    default:
      throw new Error('Reducer called without proper action type.');
  }
  return {
    ...state,
    ...changes
  };
}
/* eslint-enable complexity */

function getItemIndexByCharacterKey(_a) {
    var keysSoFar = _a.keysSoFar, highlightedIndex = _a.highlightedIndex, items = _a.items, itemToString = _a.itemToString, getItemNodeFromIndex = _a.getItemNodeFromIndex;
    var lowerCasedKeysSoFar = keysSoFar.toLowerCase();
    for (var index = 0; index < items.length; index++) {
        var offsetIndex = (index + highlightedIndex + 1) % items.length;
        var item = items[offsetIndex];
        if (item !== undefined &&
            itemToString(item)
                .toLowerCase()
                .startsWith(lowerCasedKeysSoFar)) {
            var element = getItemNodeFromIndex(offsetIndex);
            if (!(element === null || element === void 0 ? void 0 : element.hasAttribute('disabled'))) {
                return offsetIndex;
            }
        }
    }
    return highlightedIndex;
}
var propTypes$2 = {
    items: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
    itemToString: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    getA11yStatusMessage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    getA11ySelectionMessage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    highlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    defaultHighlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    initialHighlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    defaultIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    initialIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    selectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
    initialSelectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
    defaultSelectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    labelId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    menuId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    getItemId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    toggleButtonId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    stateReducer: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    onSelectedItemChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    onHighlightedIndexChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    onStateChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    onIsOpenChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    environment: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
        addEventListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
        removeEventListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
        document: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
            getElementById: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
            activeElement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
            body: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
        })
    })
};
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */
function getA11yStatusMessage(_a) {
    var isOpen = _a.isOpen, resultCount = _a.resultCount, previousResultCount = _a.previousResultCount;
    if (!isOpen) {
        return '';
    }
    if (!resultCount) {
        return 'No results are available.';
    }
    if (resultCount !== previousResultCount) {
        return "".concat(resultCount, " result").concat(resultCount === 1 ? ' is' : 's are', " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.");
    }
    return '';
}
var defaultProps$2 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, defaultProps$3), { getA11yStatusMessage: getA11yStatusMessage });
// eslint-disable-next-line import/no-mutable-exports
var validatePropTypes$2 = noop;
/* istanbul ignore next */
if (true) {
    validatePropTypes$2 = function (options, caller) {
        prop_types__WEBPACK_IMPORTED_MODULE_3___default().checkPropTypes(propTypes$2, options, 'prop', caller.name);
    };
}

const ToggleButtonClick$1 =  true ? '__togglebutton_click__' : 0;
const ToggleButtonKeyDownArrowDown =  true ? '__togglebutton_keydown_arrow_down__' : 0;
const ToggleButtonKeyDownArrowUp =  true ? '__togglebutton_keydown_arrow_up__' : 0;
const ToggleButtonKeyDownCharacter =  true ? '__togglebutton_keydown_character__' : 0;
const ToggleButtonKeyDownEscape =  true ? '__togglebutton_keydown_escape__' : 0;
const ToggleButtonKeyDownHome =  true ? '__togglebutton_keydown_home__' : 0;
const ToggleButtonKeyDownEnd =  true ? '__togglebutton_keydown_end__' : 0;
const ToggleButtonKeyDownEnter =  true ? '__togglebutton_keydown_enter__' : 0;
const ToggleButtonKeyDownSpaceButton =  true ? '__togglebutton_keydown_space_button__' : 0;
const ToggleButtonKeyDownPageUp =  true ? '__togglebutton_keydown_page_up__' : 0;
const ToggleButtonKeyDownPageDown =  true ? '__togglebutton_keydown_page_down__' : 0;
const ToggleButtonBlur =  true ? '__togglebutton_blur__' : 0;
const MenuMouseLeave$1 =  true ? '__menu_mouse_leave__' : 0;
const ItemMouseMove$1 =  true ? '__item_mouse_move__' : 0;
const ItemClick$1 =  true ? '__item_click__' : 0;
const FunctionToggleMenu$1 =  true ? '__function_toggle_menu__' : 0;
const FunctionOpenMenu$1 =  true ? '__function_open_menu__' : 0;
const FunctionCloseMenu$1 =  true ? '__function_close_menu__' : 0;
const FunctionSetHighlightedIndex$1 =  true ? '__function_set_highlighted_index__' : 0;
const FunctionSelectItem$1 =  true ? '__function_select_item__' : 0;
const FunctionSetInputValue$1 =  true ? '__function_set_input_value__' : 0;
const FunctionReset$2 =  true ? '__function_reset__' : 0;

var stateChangeTypes$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ToggleButtonClick: ToggleButtonClick$1,
  ToggleButtonKeyDownArrowDown: ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp: ToggleButtonKeyDownArrowUp,
  ToggleButtonKeyDownCharacter: ToggleButtonKeyDownCharacter,
  ToggleButtonKeyDownEscape: ToggleButtonKeyDownEscape,
  ToggleButtonKeyDownHome: ToggleButtonKeyDownHome,
  ToggleButtonKeyDownEnd: ToggleButtonKeyDownEnd,
  ToggleButtonKeyDownEnter: ToggleButtonKeyDownEnter,
  ToggleButtonKeyDownSpaceButton: ToggleButtonKeyDownSpaceButton,
  ToggleButtonKeyDownPageUp: ToggleButtonKeyDownPageUp,
  ToggleButtonKeyDownPageDown: ToggleButtonKeyDownPageDown,
  ToggleButtonBlur: ToggleButtonBlur,
  MenuMouseLeave: MenuMouseLeave$1,
  ItemMouseMove: ItemMouseMove$1,
  ItemClick: ItemClick$1,
  FunctionToggleMenu: FunctionToggleMenu$1,
  FunctionOpenMenu: FunctionOpenMenu$1,
  FunctionCloseMenu: FunctionCloseMenu$1,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
  FunctionSelectItem: FunctionSelectItem$1,
  FunctionSetInputValue: FunctionSetInputValue$1,
  FunctionReset: FunctionReset$2
});

/* eslint-disable complexity */
function downshiftSelectReducer(state, action) {
  const {
    type,
    props,
    altKey
  } = action;
  let changes;
  switch (type) {
    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        selectedItem: props.items[action.index]
      };
      break;
    case ToggleButtonKeyDownCharacter:
      {
        const lowercasedKey = action.key;
        const inputValue = `${state.inputValue}${lowercasedKey}`;
        const prevHighlightedIndex = !state.isOpen && state.selectedItem ? props.items.indexOf(state.selectedItem) : state.highlightedIndex;
        const highlightedIndex = getItemIndexByCharacterKey({
          keysSoFar: inputValue,
          highlightedIndex: prevHighlightedIndex,
          items: props.items,
          itemToString: props.itemToString,
          getItemNodeFromIndex: action.getItemNodeFromIndex
        });
        changes = {
          inputValue,
          highlightedIndex,
          isOpen: true
        };
      }
      break;
    case ToggleButtonKeyDownArrowDown:
      {
        const highlightedIndex = state.isOpen ? getNextWrappingIndex(1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, false) : altKey && state.selectedItem == null ? -1 : getHighlightedIndexOnOpen(props, state, 1);
        changes = {
          highlightedIndex,
          isOpen: true
        };
      }
      break;
    case ToggleButtonKeyDownArrowUp:
      if (state.isOpen && altKey) {
        changes = {
          isOpen: getDefaultValue$1(props, 'isOpen'),
          highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
          ...(state.highlightedIndex >= 0 && {
            selectedItem: props.items[state.highlightedIndex]
          })
        };
      } else {
        const highlightedIndex = state.isOpen ? getNextWrappingIndex(-1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, false) : getHighlightedIndexOnOpen(props, state, -1);
        changes = {
          highlightedIndex,
          isOpen: true
        };
      }
      break;
    // only triggered when menu is open.
    case ToggleButtonKeyDownEnter:
    case ToggleButtonKeyDownSpaceButton:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        ...(state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex]
        })
      };
      break;
    case ToggleButtonKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false),
        isOpen: true
      };
      break;
    case ToggleButtonKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false),
        isOpen: true
      };
      break;
    case ToggleButtonKeyDownPageUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(-10, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case ToggleButtonKeyDownPageDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(10, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case ToggleButtonKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;
    case ToggleButtonBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1,
        ...(state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex]
        })
      };
      break;
    case FunctionSelectItem$1:
      changes = {
        selectedItem: action.selectedItem
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$2);
  }
  return {
    ...state,
    ...changes
  };
}
/* eslint-enable complexity */

useSelect.stateChangeTypes = stateChangeTypes$2;
function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$2(userProps, useSelect);
  // Props defaults and destructuring.
  const props = {
    ...defaultProps$2,
    ...userProps
  };
  const {
    items,
    scrollIntoView,
    environment,
    itemToString,
    getA11ySelectionMessage,
    getA11yStatusMessage
  } = props;
  // Initial state depending on controlled props.
  const initialState = getInitialState$2(props);
  const [state, dispatch] = useControlledReducer$1(downshiftSelectReducer, initialState, props);
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    inputValue
  } = state;

  // Element efs.
  const toggleButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const itemRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  // used to keep the inputValue clearTimeout object between renders.
  const clearTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // prevent id re-generation between renders.
  const elementIds = useElementIds(props);
  // used to keep track of how many items we had on previous cycle.
  const previousResultCountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isInitialMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  // utility callback to get item element.
  const latest = useLatestRef({
    state,
    props
  });

  // Some utils.
  const getItemNodeFromIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => itemRefs.current[elementIds.getItemId(index)], [elementIds]);

  // Effects.
  // Sets a11y status message on changes in state.
  useA11yMessageSetter(getA11yStatusMessage, [isOpen, highlightedIndex, inputValue, items], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString,
    ...state
  });
  // Sets a11y status message on changes in selectedItem.
  useA11yMessageSetter(getA11ySelectionMessage, [selectedItem], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString,
    ...state
  });
  // Scroll on highlighted item if change comes from keyboard.
  const shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView,
    getItemNodeFromIndex
  });

  // Sets cleanup for the keysSoFar callback, debounded after 500ms.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // init the clean function here as we need access to dispatch.
    clearTimeoutRef.current = debounce(outerDispatch => {
      outerDispatch({
        type: FunctionSetInputValue$1,
        inputValue: ''
      });
    }, 500);

    // Cancel any pending debounced calls on mount
    return () => {
      clearTimeoutRef.current.cancel();
    };
  }, []);

  // Invokes the keysSoFar callback set up above.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!inputValue) {
      return;
    }
    clearTimeoutRef.current(dispatch);
  }, [dispatch, inputValue]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  // Add mouse/touch events to document.
  const mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [menuRef, toggleButtonRef], environment, () => {
    dispatch({
      type: ToggleButtonBlur
    });
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker('getMenuProps', 'getToggleButtonProps');
  // Make initial ref false.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isInitialMountRef.current = false;
  }, []);
  // Reset itemRefs on close.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);

  // Event handler functions.
  const toggleButtonKeyDownHandlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowDown,
        getItemNodeFromIndex,
        altKey: event.altKey
      });
    },
    ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowUp,
        getItemNodeFromIndex,
        altKey: event.altKey
      });
    },
    Home(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownHome,
        getItemNodeFromIndex
      });
    },
    End(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownEnd,
        getItemNodeFromIndex
      });
    },
    Escape() {
      if (latest.current.state.isOpen) {
        dispatch({
          type: ToggleButtonKeyDownEscape
        });
      }
    },
    Enter(event) {
      event.preventDefault();
      dispatch({
        type: latest.current.state.isOpen ? ToggleButtonKeyDownEnter : ToggleButtonClick$1
      });
    },
    PageUp(event) {
      if (latest.current.state.isOpen) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownPageUp,
          getItemNodeFromIndex
        });
      }
    },
    PageDown(event) {
      if (latest.current.state.isOpen) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownPageDown,
          getItemNodeFromIndex
        });
      }
    },
    ' '(event) {
      event.preventDefault();
      dispatch({
        type: latest.current.state.isOpen ? ToggleButtonKeyDownSpaceButton : ToggleButtonClick$1
      });
    }
  }), [dispatch, getItemNodeFromIndex, latest]);

  // Action functions.
  const toggleMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionToggleMenu$1
    });
  }, [dispatch]);
  const closeMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionCloseMenu$1
    });
  }, [dispatch]);
  const openMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionOpenMenu$1
    });
  }, [dispatch]);
  const setHighlightedIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newHighlightedIndex => {
    dispatch({
      type: FunctionSetHighlightedIndex$1,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  const selectItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newSelectedItem => {
    dispatch({
      type: FunctionSelectItem$1,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  const reset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionReset$2
    });
  }, [dispatch]);
  const setInputValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newInputValue => {
    dispatch({
      type: FunctionSetInputValue$1,
      inputValue: newInputValue
    });
  }, [dispatch]);
  // Getter functions.
  const getLabelProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(labelProps => ({
    id: elementIds.labelId,
    htmlFor: elementIds.toggleButtonId,
    ...labelProps
  }), [elementIds]);
  const getMenuProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp, _temp2) {
    let {
      onMouseLeave,
      refKey = 'ref',
      onKeyDown,
      onBlur,
      ref,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    let {
      suppressRefError = false
    } = _temp2 === void 0 ? {} : _temp2;
    const menuHandleMouseLeave = () => {
      dispatch({
        type: MenuMouseLeave$1
      });
    };
    setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
    return {
      [refKey]: handleRefs(ref, menuNode => {
        menuRef.current = menuNode;
      }),
      id: elementIds.menuId,
      role: 'listbox',
      'aria-labelledby': elementIds.labelId,
      tabIndex: -1,
      onMouseLeave: callAllEventHandlers(onMouseLeave, menuHandleMouseLeave),
      ...rest
    };
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  const getToggleButtonProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp3, _temp4) {
    let {
      onBlur,
      onClick,
      onKeyDown,
      refKey = 'ref',
      ref,
      ...rest
    } = _temp3 === void 0 ? {} : _temp3;
    let {
      suppressRefError = false
    } = _temp4 === void 0 ? {} : _temp4;
    const latestState = latest.current.state;
    const toggleButtonHandleClick = () => {
      dispatch({
        type: ToggleButtonClick$1
      });
    };
    const toggleButtonHandleBlur = () => {
      if (latestState.isOpen && !mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: ToggleButtonBlur
        });
      }
    };
    const toggleButtonHandleKeyDown = event => {
      const key = normalizeArrowKey(event);
      if (key && toggleButtonKeyDownHandlers[key]) {
        toggleButtonKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: ToggleButtonKeyDownCharacter,
          key,
          getItemNodeFromIndex
        });
      }
    };
    const toggleProps = {
      [refKey]: handleRefs(ref, toggleButtonNode => {
        toggleButtonRef.current = toggleButtonNode;
      }),
      'aria-activedescendant': latestState.isOpen && latestState.highlightedIndex > -1 ? elementIds.getItemId(latestState.highlightedIndex) : '',
      'aria-controls': elementIds.menuId,
      'aria-expanded': latest.current.state.isOpen,
      'aria-haspopup': 'listbox',
      'aria-labelledby': `${elementIds.labelId}`,
      id: elementIds.toggleButtonId,
      role: 'combobox',
      tabIndex: 0,
      onBlur: callAllEventHandlers(onBlur, toggleButtonHandleBlur),
      ...rest
    };
    if (!rest.disabled) {
      toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
      toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
    }
    setGetterPropCallInfo('getToggleButtonProps', suppressRefError, refKey, toggleButtonRef);
    return toggleProps;
  }, [latest, elementIds, setGetterPropCallInfo, dispatch, mouseAndTouchTrackersRef, toggleButtonKeyDownHandlers, getItemNodeFromIndex]);
  const getItemProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp5) {
    let {
      item: itemProp,
      index: indexProp,
      onMouseMove,
      onClick,
      refKey = 'ref',
      ref,
      disabled,
      ...rest
    } = _temp5 === void 0 ? {} : _temp5;
    const {
      state: latestState,
      props: latestProps
    } = latest.current;
    const item = itemProp ?? items[indexProp];
    const index = getItemIndex(indexProp, item, latestProps.items);
    const itemHandleMouseMove = () => {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove$1,
        index,
        disabled
      });
    };
    const itemHandleClick = () => {
      dispatch({
        type: ItemClick$1,
        index
      });
    };
    const itemIndex = getItemIndex(index, item, latestProps.items);
    if (itemIndex < 0) {
      throw new Error('Pass either item or item index in getItemProps!');
    }
    const itemProps = {
      disabled,
      role: 'option',
      'aria-selected': `${item === selectedItem}`,
      id: elementIds.getItemId(itemIndex),
      [refKey]: handleRefs(ref, itemNode => {
        if (itemNode) {
          itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
        }
      }),
      ...rest
    };
    if (!disabled) {
      itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
    }
    itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
    return itemProps;
  }, [latest, items, selectedItem, elementIds, shouldScrollRef, dispatch]);
  return {
    // prop getters.
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    // actions.
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    selectItem,
    reset,
    setInputValue,
    // state.
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}

const InputKeyDownArrowDown =  true ? '__input_keydown_arrow_down__' : 0;
const InputKeyDownArrowUp =  true ? '__input_keydown_arrow_up__' : 0;
const InputKeyDownEscape =  true ? '__input_keydown_escape__' : 0;
const InputKeyDownHome =  true ? '__input_keydown_home__' : 0;
const InputKeyDownEnd =  true ? '__input_keydown_end__' : 0;
const InputKeyDownPageUp =  true ? '__input_keydown_page_up__' : 0;
const InputKeyDownPageDown =  true ? '__input_keydown_page_down__' : 0;
const InputKeyDownEnter =  true ? '__input_keydown_enter__' : 0;
const InputChange =  true ? '__input_change__' : 0;
const InputBlur =  true ? '__input_blur__' : 0;
const InputFocus =  true ? '__input_focus__' : 0;
const MenuMouseLeave =  true ? '__menu_mouse_leave__' : 0;
const ItemMouseMove =  true ? '__item_mouse_move__' : 0;
const ItemClick =  true ? '__item_click__' : 0;
const ToggleButtonClick =  true ? '__togglebutton_click__' : 0;
const FunctionToggleMenu =  true ? '__function_toggle_menu__' : 0;
const FunctionOpenMenu =  true ? '__function_open_menu__' : 0;
const FunctionCloseMenu =  true ? '__function_close_menu__' : 0;
const FunctionSetHighlightedIndex =  true ? '__function_set_highlighted_index__' : 0;
const FunctionSelectItem =  true ? '__function_select_item__' : 0;
const FunctionSetInputValue =  true ? '__function_set_input_value__' : 0;
const FunctionReset$1 =  true ? '__function_reset__' : 0;
const ControlledPropUpdatedSelectedItem =  true ? '__controlled_prop_updated_selected_item__' : 0;

var stateChangeTypes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: InputKeyDownArrowDown,
  InputKeyDownArrowUp: InputKeyDownArrowUp,
  InputKeyDownEscape: InputKeyDownEscape,
  InputKeyDownHome: InputKeyDownHome,
  InputKeyDownEnd: InputKeyDownEnd,
  InputKeyDownPageUp: InputKeyDownPageUp,
  InputKeyDownPageDown: InputKeyDownPageDown,
  InputKeyDownEnter: InputKeyDownEnter,
  InputChange: InputChange,
  InputBlur: InputBlur,
  InputFocus: InputFocus,
  MenuMouseLeave: MenuMouseLeave,
  ItemMouseMove: ItemMouseMove,
  ItemClick: ItemClick,
  ToggleButtonClick: ToggleButtonClick,
  FunctionToggleMenu: FunctionToggleMenu,
  FunctionOpenMenu: FunctionOpenMenu,
  FunctionCloseMenu: FunctionCloseMenu,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex,
  FunctionSelectItem: FunctionSelectItem,
  FunctionSetInputValue: FunctionSetInputValue,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem: ControlledPropUpdatedSelectedItem
});

function getInitialState$1(props) {
  const initialState = getInitialState$2(props);
  const {
    selectedItem
  } = initialState;
  let {
    inputValue
  } = initialState;
  if (inputValue === '' && selectedItem && props.defaultInputValue === undefined && props.initialInputValue === undefined && props.inputValue === undefined) {
    inputValue = props.itemToString(selectedItem);
  }
  return {
    ...initialState,
    inputValue
  };
}
const propTypes$1 = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
  itemToString: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  getA11yStatusMessage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  getA11ySelectionMessage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  highlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  defaultHighlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  initialHighlightedIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  defaultIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  initialIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  selectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  initialSelectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  defaultSelectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  inputValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  defaultInputValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  initialInputValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  labelId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  menuId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  getItemId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  inputId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  toggleButtonId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  stateReducer: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onSelectedItemChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onHighlightedIndexChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onStateChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onIsOpenChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onInputValueChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  environment: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    addEventListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    removeEventListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    document: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
      getElementById: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
      activeElement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
      body: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
    })
  })
};

/**
 * The useCombobox version of useControlledReducer, which also
 * checks if the controlled prop selectedItem changed between
 * renders. If so, it will also update inputValue with its
 * string equivalent. It uses the common useEnhancedReducer to
 * compute the rest of the state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */
function useControlledReducer(reducer, initialState, props) {
  const previousSelectedItemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [state, dispatch] = useEnhancedReducer(reducer, initialState, props);

  // ToDo: if needed, make same approach as selectedItemChanged from Downshift.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isControlledProp(props, 'selectedItem')) {
      if (previousSelectedItemRef.current !== props.selectedItem) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }
      previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    }
  });
  return [getState(state, props), dispatch];
}

// eslint-disable-next-line import/no-mutable-exports
let validatePropTypes$1 = noop;
/* istanbul ignore next */
if (true) {
  validatePropTypes$1 = (options, caller) => {
    prop_types__WEBPACK_IMPORTED_MODULE_3___default().checkPropTypes(propTypes$1, options, 'prop', caller.name);
  };
}
const defaultProps$1 = {
  ...defaultProps$3,
  getA11yStatusMessage: getA11yStatusMessage$1
};

/* eslint-disable complexity */
function downshiftUseComboboxReducer(state, action) {
  const {
    type,
    props,
    altKey
  } = action;
  let changes;
  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;
    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, true)
        };
      } else {
        changes = {
          highlightedIndex: altKey && state.selectedItem == null ? -1 : getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownArrowUp:
      if (state.isOpen) {
        if (altKey) {
          changes = {
            isOpen: getDefaultValue$1(props, 'isOpen'),
            highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
            ...(state.highlightedIndex >= 0 && {
              selectedItem: props.items[state.highlightedIndex],
              inputValue: props.itemToString(props.items[state.highlightedIndex])
            })
          };
        } else {
          changes = {
            highlightedIndex: getNextWrappingIndex(-1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, true)
          };
        }
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownEnter:
      changes = {
        isOpen: getDefaultValue$1(props, 'isOpen'),
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        ...(state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex],
          inputValue: props.itemToString(props.items[state.highlightedIndex])
        })
      };
      break;
    case InputKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1,
        ...(!state.isOpen && {
          selectedItem: null,
          inputValue: ''
        })
      };
      break;
    case InputKeyDownPageUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(-10, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownPageDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(10, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1,
        ...(state.highlightedIndex >= 0 && action.selectItem && {
          selectedItem: props.items[state.highlightedIndex],
          inputValue: props.itemToString(props.items[state.highlightedIndex])
        })
      };
      break;
    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
        inputValue: action.inputValue
      };
      break;
    case InputFocus:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;
    case ControlledPropUpdatedSelectedItem:
      changes = {
        inputValue: action.inputValue
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }
  return {
    ...state,
    ...changes
  };
}
/* eslint-enable complexity */

/* eslint-disable max-statements */
useCombobox.stateChangeTypes = stateChangeTypes$1;
function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$1(userProps, useCombobox);
  // Props defaults and destructuring.
  const props = {
    ...defaultProps$1,
    ...userProps
  };
  const {
    initialIsOpen,
    defaultIsOpen,
    items,
    scrollIntoView,
    environment,
    getA11yStatusMessage,
    getA11ySelectionMessage,
    itemToString
  } = props;
  // Initial state depending on controlled props.
  const initialState = getInitialState$1(props);
  const [state, dispatch] = useControlledReducer(downshiftUseComboboxReducer, initialState, props);
  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    inputValue
  } = state;

  // Element refs.
  const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const itemRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const toggleButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isInitialMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  // prevent id re-generation between renders.
  const elementIds = useElementIds(props);
  // used to keep track of how many items we had on previous cycle.
  const previousResultCountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  // utility callback to get item element.
  const latest = useLatestRef({
    state,
    props
  });
  const getItemNodeFromIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => itemRefs.current[elementIds.getItemId(index)], [elementIds]);

  // Effects.
  // Sets a11y status message on changes in state.
  useA11yMessageSetter(getA11yStatusMessage, [isOpen, highlightedIndex, inputValue, items], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString,
    ...state
  });
  // Sets a11y status message on changes in selectedItem.
  useA11yMessageSetter(getA11ySelectionMessage, [selectedItem], {
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString,
    ...state
  });
  // Scroll on highlighted item if change comes from keyboard.
  const shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView,
    getItemNodeFromIndex
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  // Focus the input on first render if required.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const focusOnOpen = initialIsOpen || defaultIsOpen || isOpen;
    if (focusOnOpen && inputRef.current) {
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  // Add mouse/touch events to document.
  const mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [inputRef, menuRef, toggleButtonRef], environment, () => {
    dispatch({
      type: InputBlur,
      selectItem: false
    });
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker('getInputProps', 'getMenuProps');
  // Make initial ref false.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isInitialMountRef.current = false;
  }, []);
  // Reset itemRefs on close.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) {
      itemRefs.current = {};
    } else if (document.activeElement !== inputRef.current) {
      var _inputRef$current;
      inputRef == null ? void 0 : (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.focus();
    }
  }, [isOpen]);

  /* Event handler functions */
  const inputKeyDownHandlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownArrowDown,
        altKey: event.altKey,
        getItemNodeFromIndex
      });
    },
    ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownArrowUp,
        altKey: event.altKey,
        getItemNodeFromIndex
      });
    },
    Home(event) {
      if (!latest.current.state.isOpen) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownHome,
        getItemNodeFromIndex
      });
    },
    End(event) {
      if (!latest.current.state.isOpen) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownEnd,
        getItemNodeFromIndex
      });
    },
    Escape(event) {
      const latestState = latest.current.state;
      if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownEscape
        });
      }
    },
    Enter(event) {
      const latestState = latest.current.state;
      // if closed or no highlighted index, do nothing.
      if (!latestState.isOpen || event.which === 229 // if IME composing, wait for next Enter keydown event.
      ) {
        return;
      }
      event.preventDefault();
      dispatch({
        type: InputKeyDownEnter,
        getItemNodeFromIndex
      });
    },
    PageUp(event) {
      if (latest.current.state.isOpen) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownPageUp,
          getItemNodeFromIndex
        });
      }
    },
    PageDown(event) {
      if (latest.current.state.isOpen) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownPageDown,
          getItemNodeFromIndex
        });
      }
    }
  }), [dispatch, latest, getItemNodeFromIndex]);

  // Getter props.
  const getLabelProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(labelProps => ({
    id: elementIds.labelId,
    htmlFor: elementIds.inputId,
    ...labelProps
  }), [elementIds]);
  const getMenuProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp, _temp2) {
    let {
      onMouseLeave,
      refKey = 'ref',
      ref,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    let {
      suppressRefError = false
    } = _temp2 === void 0 ? {} : _temp2;
    setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
    return {
      [refKey]: handleRefs(ref, menuNode => {
        menuRef.current = menuNode;
      }),
      id: elementIds.menuId,
      role: 'listbox',
      'aria-labelledby': elementIds.labelId,
      onMouseLeave: callAllEventHandlers(onMouseLeave, () => {
        dispatch({
          type: MenuMouseLeave
        });
      }),
      ...rest
    };
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  const getItemProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp3) {
    let {
      item,
      index,
      refKey = 'ref',
      ref,
      onMouseMove,
      onMouseDown,
      onClick,
      onPress,
      disabled,
      ...rest
    } = _temp3 === void 0 ? {} : _temp3;
    const {
      props: latestProps,
      state: latestState
    } = latest.current;
    const itemIndex = getItemIndex(index, item, latestProps.items);
    if (itemIndex < 0) {
      throw new Error('Pass either item or item index in getItemProps!');
    }
    const onSelectKey = 'onClick';
    const customClickHandler = onClick;
    const itemHandleMouseMove = () => {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index,
        disabled
      });
    };
    const itemHandleClick = () => {
      dispatch({
        type: ItemClick,
        index
      });
    };
    const itemHandleMouseDown = e => e.preventDefault();
    return {
      [refKey]: handleRefs(ref, itemNode => {
        if (itemNode) {
          itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
        }
      }),
      disabled,
      role: 'option',
      'aria-selected': `${itemIndex === latestState.highlightedIndex}`,
      id: elementIds.getItemId(itemIndex),
      ...(!disabled && {
        [onSelectKey]: callAllEventHandlers(customClickHandler, itemHandleClick)
      }),
      onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove),
      onMouseDown: callAllEventHandlers(onMouseDown, itemHandleMouseDown),
      ...rest
    };
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  const getToggleButtonProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp4) {
    let {
      onClick,
      onPress,
      refKey = 'ref',
      ref,
      ...rest
    } = _temp4 === void 0 ? {} : _temp4;
    const latestState = latest.current.state;
    const toggleButtonHandleClick = () => {
      dispatch({
        type: ToggleButtonClick
      });
    };
    return {
      [refKey]: handleRefs(ref, toggleButtonNode => {
        toggleButtonRef.current = toggleButtonNode;
      }),
      'aria-controls': elementIds.menuId,
      'aria-expanded': latestState.isOpen,
      id: elementIds.toggleButtonId,
      tabIndex: -1,
      ...(!rest.disabled && {
        ...({
          onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
        })
      }),
      ...rest
    };
  }, [dispatch, latest, elementIds]);
  const getInputProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp5, _temp6) {
    let {
      onKeyDown,
      onChange,
      onInput,
      onFocus,
      onBlur,
      onChangeText,
      refKey = 'ref',
      ref,
      ...rest
    } = _temp5 === void 0 ? {} : _temp5;
    let {
      suppressRefError = false
    } = _temp6 === void 0 ? {} : _temp6;
    setGetterPropCallInfo('getInputProps', suppressRefError, refKey, inputRef);
    const latestState = latest.current.state;
    const inputHandleKeyDown = event => {
      const key = normalizeArrowKey(event);
      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    };
    const inputHandleChange = event => {
      dispatch({
        type: InputChange,
        inputValue: event.target.value
      });
    };
    const inputHandleBlur = () => {
      /* istanbul ignore else */
      if (latestState.isOpen && !mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: InputBlur,
          selectItem: true
        });
      }
    };
    const inputHandleFocus = () => {
      if (!latestState.isOpen) {
        dispatch({
          type: InputFocus
        });
      }
    };

    /* istanbul ignore next (preact) */
    const onChangeKey = 'onChange';
    let eventHandlers = {};
    if (!rest.disabled) {
      eventHandlers = {
        [onChangeKey]: callAllEventHandlers(onChange, onInput, inputHandleChange),
        onKeyDown: callAllEventHandlers(onKeyDown, inputHandleKeyDown),
        onBlur: callAllEventHandlers(onBlur, inputHandleBlur),
        onFocus: callAllEventHandlers(onFocus, inputHandleFocus)
      };
    }
    return {
      [refKey]: handleRefs(ref, inputNode => {
        inputRef.current = inputNode;
      }),
      'aria-activedescendant': latestState.isOpen && latestState.highlightedIndex > -1 ? elementIds.getItemId(latestState.highlightedIndex) : '',
      'aria-autocomplete': 'list',
      'aria-controls': elementIds.menuId,
      'aria-expanded': latestState.isOpen,
      'aria-labelledby': elementIds.labelId,
      // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
      // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
      autoComplete: 'off',
      id: elementIds.inputId,
      role: 'combobox',
      value: latestState.inputValue,
      ...eventHandlers,
      ...rest
    };
  }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds]);

  // returns
  const toggleMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  const closeMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  const openMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  const setHighlightedIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newHighlightedIndex => {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  const selectItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newSelectedItem => {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  const setInputValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newInputValue => {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]);
  const reset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    // prop getters.
    getItemProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    // actions.
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    setInputValue,
    selectItem,
    reset,
    // state.
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}

const defaultStateValues = {
  activeIndex: -1,
  selectedItems: []
};

/**
 * Returns the initial value for a state key in the following order:
 * 1. controlled prop, 2. initial prop, 3. default prop, 4. default
 * value from Downshift.
 *
 * @param {Object} props Props passed to the hook.
 * @param {string} propKey Props key to generate the value for.
 * @returns {any} The initial value for that prop.
 */
function getInitialValue(props, propKey) {
  return getInitialValue$1(props, propKey, defaultStateValues);
}

/**
 * Returns the default value for a state key in the following order:
 * 1. controlled prop, 2. default prop, 3. default value from Downshift.
 *
 * @param {Object} props Props passed to the hook.
 * @param {string} propKey Props key to generate the value for.
 * @returns {any} The initial value for that prop.
 */
function getDefaultValue(props, propKey) {
  return getDefaultValue$1(props, propKey, defaultStateValues);
}

/**
 * Gets the initial state based on the provided props. It uses initial, default
 * and controlled props related to state in order to compute the initial value.
 *
 * @param {Object} props Props passed to the hook.
 * @returns {Object} The initial state.
 */
function getInitialState(props) {
  const activeIndex = getInitialValue(props, 'activeIndex');
  const selectedItems = getInitialValue(props, 'selectedItems');
  return {
    activeIndex,
    selectedItems
  };
}

/**
 * Returns true if dropdown keydown operation is permitted. Should not be
 * allowed on keydown with modifier keys (ctrl, alt, shift, meta), on
 * input element with text content that is either highlighted or selection
 * cursor is not at the starting position.
 *
 * @param {KeyboardEvent} event The event from keydown.
 * @returns {boolean} Whether the operation is allowed.
 */
function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }
  const element = event.target;
  if (element instanceof HTMLInputElement &&
  // if element is a text input
  element.value !== '' && (
  // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  element.selectionStart !== 0 || element.selectionEnd !== 0)) {
    return false;
  }
  return true;
}

/**
 * Returns a message to be added to aria-live region when item is removed.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */
function getA11yRemovalMessage(selectionParameters) {
  const {
    removedSelectedItem,
    itemToString: itemToStringLocal
  } = selectionParameters;
  return `${itemToStringLocal(removedSelectedItem)} has been removed.`;
}
const propTypes = {
  selectedItems: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  initialSelectedItems: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  defaultSelectedItems: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  itemToString: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  getA11yRemovalMessage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  stateReducer: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  activeIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  initialActiveIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  defaultActiveIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  onActiveIndexChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onSelectedItemsChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  keyNavigationNext: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  keyNavigationPrevious: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  environment: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    addEventListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    removeEventListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    document: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
      getElementById: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
      activeElement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
      body: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
    })
  })
};
const defaultProps = {
  itemToString: defaultProps$3.itemToString,
  stateReducer: defaultProps$3.stateReducer,
  environment: defaultProps$3.environment,
  getA11yRemovalMessage,
  keyNavigationNext: 'ArrowRight',
  keyNavigationPrevious: 'ArrowLeft'
};

// eslint-disable-next-line import/no-mutable-exports
let validatePropTypes = noop;
/* istanbul ignore next */
if (true) {
  validatePropTypes = (options, caller) => {
    prop_types__WEBPACK_IMPORTED_MODULE_3___default().checkPropTypes(propTypes, options, 'prop', caller.name);
  };
}

const SelectedItemClick =  true ? '__selected_item_click__' : 0;
const SelectedItemKeyDownDelete =  true ? '__selected_item_keydown_delete__' : 0;
const SelectedItemKeyDownBackspace =  true ? '__selected_item_keydown_backspace__' : 0;
const SelectedItemKeyDownNavigationNext =  true ? '__selected_item_keydown_navigation_next__' : 0;
const SelectedItemKeyDownNavigationPrevious =  true ? '__selected_item_keydown_navigation_previous__' : 0;
const DropdownKeyDownNavigationPrevious =  true ? '__dropdown_keydown_navigation_previous__' : 0;
const DropdownKeyDownBackspace =  true ? '__dropdown_keydown_backspace__' : 0;
const DropdownClick =  true ? '__dropdown_click__' : 0;
const FunctionAddSelectedItem =  true ? '__function_add_selected_item__' : 0;
const FunctionRemoveSelectedItem =  true ? '__function_remove_selected_item__' : 0;
const FunctionSetSelectedItems =  true ? '__function_set_selected_items__' : 0;
const FunctionSetActiveIndex =  true ? '__function_set_active_index__' : 0;
const FunctionReset =  true ? '__function_reset__' : 0;

var stateChangeTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SelectedItemClick: SelectedItemClick,
  SelectedItemKeyDownDelete: SelectedItemKeyDownDelete,
  SelectedItemKeyDownBackspace: SelectedItemKeyDownBackspace,
  SelectedItemKeyDownNavigationNext: SelectedItemKeyDownNavigationNext,
  SelectedItemKeyDownNavigationPrevious: SelectedItemKeyDownNavigationPrevious,
  DropdownKeyDownNavigationPrevious: DropdownKeyDownNavigationPrevious,
  DropdownKeyDownBackspace: DropdownKeyDownBackspace,
  DropdownClick: DropdownClick,
  FunctionAddSelectedItem: FunctionAddSelectedItem,
  FunctionRemoveSelectedItem: FunctionRemoveSelectedItem,
  FunctionSetSelectedItems: FunctionSetSelectedItems,
  FunctionSetActiveIndex: FunctionSetActiveIndex,
  FunctionReset: FunctionReset
});

/* eslint-disable complexity */
function downshiftMultipleSelectionReducer(state, action) {
  const {
    type,
    index,
    props,
    selectedItem
  } = action;
  const {
    activeIndex,
    selectedItems
  } = state;
  let changes;
  switch (type) {
    case SelectedItemClick:
      changes = {
        activeIndex: index
      };
      break;
    case SelectedItemKeyDownNavigationPrevious:
      changes = {
        activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
      };
      break;
    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
      };
      break;
    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete:
      {
        let newActiveIndex = activeIndex;
        if (selectedItems.length === 1) {
          newActiveIndex = -1;
        } else if (activeIndex === selectedItems.length - 1) {
          newActiveIndex = selectedItems.length - 2;
        }
        changes = {
          selectedItems: [...selectedItems.slice(0, activeIndex), ...selectedItems.slice(activeIndex + 1)],
          ...{
            activeIndex: newActiveIndex
          }
        };
        break;
      }
    case DropdownKeyDownNavigationPrevious:
      changes = {
        activeIndex: selectedItems.length - 1
      };
      break;
    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1)
      };
      break;
    case FunctionAddSelectedItem:
      changes = {
        selectedItems: [...selectedItems, selectedItem]
      };
      break;
    case DropdownClick:
      changes = {
        activeIndex: -1
      };
      break;
    case FunctionRemoveSelectedItem:
      {
        let newActiveIndex = activeIndex;
        const selectedItemIndex = selectedItems.indexOf(selectedItem);
        if (selectedItemIndex >= 0) {
          if (selectedItems.length === 1) {
            newActiveIndex = -1;
          } else if (selectedItemIndex === selectedItems.length - 1) {
            newActiveIndex = selectedItems.length - 2;
          }
          changes = {
            selectedItems: [...selectedItems.slice(0, selectedItemIndex), ...selectedItems.slice(selectedItemIndex + 1)],
            activeIndex: newActiveIndex
          };
        }
        break;
      }
    case FunctionSetSelectedItems:
      {
        const {
          selectedItems: newSelectedItems
        } = action;
        changes = {
          selectedItems: newSelectedItems
        };
        break;
      }
    case FunctionSetActiveIndex:
      {
        const {
          activeIndex: newActiveIndex
        } = action;
        changes = {
          activeIndex: newActiveIndex
        };
        break;
      }
    case FunctionReset:
      changes = {
        activeIndex: getDefaultValue(props, 'activeIndex'),
        selectedItems: getDefaultValue(props, 'selectedItems')
      };
      break;
    default:
      throw new Error('Reducer called without proper action type.');
  }
  return {
    ...state,
    ...changes
  };
}

useMultipleSelection.stateChangeTypes = stateChangeTypes;
function useMultipleSelection(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes(userProps, useMultipleSelection);
  // Props defaults and destructuring.
  const props = {
    ...defaultProps,
    ...userProps
  };
  const {
    getA11yRemovalMessage,
    itemToString,
    environment,
    keyNavigationNext,
    keyNavigationPrevious
  } = props;

  // Reducer init.
  const [state, dispatch] = useControlledReducer$1(downshiftMultipleSelectionReducer, getInitialState(props), props);
  const {
    activeIndex,
    selectedItems
  } = state;

  // Refs.
  const isInitialMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const previousSelectedItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selectedItems);
  const selectedItemRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  selectedItemRefs.current = [];
  const latest = useLatestRef({
    state,
    props
  });

  // Effects.
  /* Sets a11y status message on changes in selectedItem. */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInitialMountRef.current) {
      return;
    }
    if (selectedItems.length < previousSelectedItemsRef.current.length) {
      const removedSelectedItem = previousSelectedItemsRef.current.find(item => selectedItems.indexOf(item) < 0);
      setStatus(getA11yRemovalMessage({
        itemToString,
        resultCount: selectedItems.length,
        removedSelectedItem,
        activeIndex,
        activeSelectedItem: selectedItems[activeIndex]
      }), environment.document);
    }
    previousSelectedItemsRef.current = selectedItems;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems.length]);
  // Sets focus on active item.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInitialMountRef.current) {
      return;
    }
    if (activeIndex === -1 && dropdownRef.current) {
      dropdownRef.current.focus();
    } else if (selectedItemRefs.current[activeIndex]) {
      selectedItemRefs.current[activeIndex].focus();
    }
  }, [activeIndex]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  const setGetterPropCallInfo = useGetterPropsCalledChecker('getDropdownProps');
  // Make initial ref false.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isInitialMountRef.current = false;
  }, []);

  // Event handler functions.
  const selectedItemKeyDownHandlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    [keyNavigationPrevious]() {
      dispatch({
        type: SelectedItemKeyDownNavigationPrevious
      });
    },
    [keyNavigationNext]() {
      dispatch({
        type: SelectedItemKeyDownNavigationNext
      });
    },
    Delete() {
      dispatch({
        type: SelectedItemKeyDownDelete
      });
    },
    Backspace() {
      dispatch({
        type: SelectedItemKeyDownBackspace
      });
    }
  }), [dispatch, keyNavigationNext, keyNavigationPrevious]);
  const dropdownKeyDownHandlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    [keyNavigationPrevious](event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownNavigationPrevious
        });
      }
    },
    Backspace(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownBackspace
        });
      }
    }
  }), [dispatch, keyNavigationPrevious]);

  // Getter props.
  const getSelectedItemProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp) {
    let {
      refKey = 'ref',
      ref,
      onClick,
      onKeyDown,
      selectedItem,
      index,
      ...rest
    } = _temp === void 0 ? {} : _temp;
    const {
      state: latestState
    } = latest.current;
    const itemIndex = getItemIndex(index, selectedItem, latestState.selectedItems);
    if (itemIndex < 0) {
      throw new Error('Pass either selectedItem or index in getSelectedItemProps!');
    }
    const selectedItemHandleClick = () => {
      dispatch({
        type: SelectedItemClick,
        index
      });
    };
    const selectedItemHandleKeyDown = event => {
      const key = normalizeArrowKey(event);
      if (key && selectedItemKeyDownHandlers[key]) {
        selectedItemKeyDownHandlers[key](event);
      }
    };
    return {
      [refKey]: handleRefs(ref, selectedItemNode => {
        if (selectedItemNode) {
          selectedItemRefs.current.push(selectedItemNode);
        }
      }),
      tabIndex: index === latestState.activeIndex ? 0 : -1,
      onClick: callAllEventHandlers(onClick, selectedItemHandleClick),
      onKeyDown: callAllEventHandlers(onKeyDown, selectedItemHandleKeyDown),
      ...rest
    };
  }, [dispatch, latest, selectedItemKeyDownHandlers]);
  const getDropdownProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_temp2, _temp3) {
    let {
      refKey = 'ref',
      ref,
      onKeyDown,
      onClick,
      preventKeyAction = false,
      ...rest
    } = _temp2 === void 0 ? {} : _temp2;
    let {
      suppressRefError = false
    } = _temp3 === void 0 ? {} : _temp3;
    setGetterPropCallInfo('getDropdownProps', suppressRefError, refKey, dropdownRef);
    const dropdownHandleKeyDown = event => {
      const key = normalizeArrowKey(event);
      if (key && dropdownKeyDownHandlers[key]) {
        dropdownKeyDownHandlers[key](event);
      }
    };
    const dropdownHandleClick = () => {
      dispatch({
        type: DropdownClick
      });
    };
    return {
      [refKey]: handleRefs(ref, dropdownNode => {
        if (dropdownNode) {
          dropdownRef.current = dropdownNode;
        }
      }),
      ...(!preventKeyAction && {
        onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
        onClick: callAllEventHandlers(onClick, dropdownHandleClick)
      }),
      ...rest
    };
  }, [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo]);

  // returns
  const addSelectedItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(selectedItem => {
    dispatch({
      type: FunctionAddSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  const removeSelectedItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(selectedItem => {
    dispatch({
      type: FunctionRemoveSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  const setSelectedItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newSelectedItems => {
    dispatch({
      type: FunctionSetSelectedItems,
      selectedItems: newSelectedItems
    });
  }, [dispatch]);
  const setActiveIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newActiveIndex => {
    dispatch({
      type: FunctionSetActiveIndex,
      activeIndex: newActiveIndex
    });
  }, [dispatch]);
  const reset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: FunctionReset
    });
  }, [dispatch]);
  return {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    setSelectedItems,
    setActiveIndex,
    reset,
    selectedItems,
    activeIndex
  };
}




/***/ }),

/***/ "./node_modules/downshift/node_modules/react-is/cjs/react-is.development.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/downshift/node_modules/react-is/cjs/react-is.development.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
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

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
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
}
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
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
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

/***/ "./node_modules/downshift/node_modules/react-is/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/downshift/node_modules/react-is/index.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/downshift/node_modules/react-is/cjs/react-is.development.js");
}


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



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
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
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


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

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
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

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldIn": function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__values": function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

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

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["serverSideRender"];

/***/ }),

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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/compute-scroll-into-view/dist/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.mjs ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ i; }
/* harmony export */ });
function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}var i=function(e,i){var o=window,l=i.scrollMode,d=i.block,f=i.inline,h=i.boundary,u=i.skipOverflowHiddenElements,s="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var a,c,g=document.scrollingElement||document.documentElement,p=[],m=e;t(m)&&s(m);){if((m=null==(c=(a=m).parentElement)?a.getRootNode().host||null:c)===g){p.push(m);break}null!=m&&m===document.body&&n(m)&&!n(document.documentElement)||null!=m&&n(m,u)&&p.push(m)}for(var w=o.visualViewport?o.visualViewport.width:innerWidth,v=o.visualViewport?o.visualViewport.height:innerHeight,W=window.scrollX||pageXOffset,H=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),y=b.height,E=b.width,M=b.top,V=b.right,x=b.bottom,I=b.left,C="start"===d||"nearest"===d?M:"end"===d?x:M+y/2,R="center"===f?I+E/2:"end"===f?V:I,T=[],k=0;k<p.length;k++){var B=p[k],D=B.getBoundingClientRect(),O=D.height,X=D.width,Y=D.top,L=D.right,S=D.bottom,j=D.left;if("if-needed"===l&&M>=0&&I>=0&&x<=v&&V<=w&&M>=Y&&x<=S&&I>=j&&V<=L)return T;var N=getComputedStyle(B),q=parseInt(N.borderLeftWidth,10),z=parseInt(N.borderTopWidth,10),A=parseInt(N.borderRightWidth,10),F=parseInt(N.borderBottomWidth,10),G=0,J=0,K="offsetWidth"in B?B.offsetWidth-B.clientWidth-q-A:0,P="offsetHeight"in B?B.offsetHeight-B.clientHeight-z-F:0,Q="offsetWidth"in B?0===B.offsetWidth?0:X/B.offsetWidth:0,U="offsetHeight"in B?0===B.offsetHeight?0:O/B.offsetHeight:0;if(g===B)G="start"===d?C:"end"===d?C-v:"nearest"===d?r(H,H+v,v,z,F,H+C,H+C+y,y):C-v/2,J="start"===f?R:"center"===f?R-w/2:"end"===f?R-w:r(W,W+w,w,q,A,W+R,W+R+E,E),G=Math.max(0,G+H),J=Math.max(0,J+W);else{G="start"===d?C-Y-z:"end"===d?C-S+F+P:"nearest"===d?r(Y,S,O,z,F+P,C,C+y,y):C-(Y+O/2)+P/2,J="start"===f?R-j-q:"center"===f?R-(j+X/2)+K/2:"end"===f?R-L+A+K:r(j,L,X,q,A+K,R,R+E,E);var Z=B.scrollLeft,$=B.scrollTop;C+=$-(G=Math.max(0,Math.min($+G/U,B.scrollHeight-O/U+P))),R+=Z-(J=Math.max(0,Math.min(Z+J/Q,B.scrollWidth-X/Q+K)))}T.push({el:B,top:G,left:J})}return T};
//# sourceMappingURL=index.mjs.map


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************************!*\
  !*** ./src/form-block/backend/script.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _searchable_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchable-select */ "./src/form-block/backend/searchable-select.js");









var wpzoomFormsIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "40",
  height: "40",
  viewBox: "0 0 250 300",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M250 0H50V50H0V300H250V0Z",
  fill: "#083EA7"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M100 50H200V100H100V50ZM100 150V100H50V250H100V200H150V150H100Z",
  fill: "#1FDE91"
}));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.updateCategory)('wpzoom-blocks', {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z",
    fill: "#164777"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.276 12.084H6.032L8.156 7.224L10.268 12.084H11.024L13.148 5.316H13.988V4.104H10.628V5.316H11.708L10.508 9.468L8.552 4.872H7.832L5.876 9.468L4.592 5.316H5.636V4.104H2.276V5.316H3.116L5.276 12.084Z",
    fill: "white"
  }))
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('wpzoom-forms/form-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Contact Form by WPZOOM', 'wpzoom-blocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('A contact form block for accepting submissions from users.', 'wpzoom-blocks'),
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('contact', 'wpzoom-blocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('form', 'wpzoom-blocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('survey', 'wpzoom-blocks')],
  icon: wpzoomFormsIcon,
  category: 'wpzoom-blocks',
  supports: {
    align: true,
    html: false
  },
  example: {},
  edit: function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes;
    var formId = attributes.formId,
      align = attributes.align,
      formBgColor = attributes.formBgColor,
      formBrdWidth = attributes.formBrdWidth,
      formBrdStyle = attributes.formBrdStyle,
      formBrdRadius = attributes.formBrdRadius,
      formBrdColor = attributes.formBrdColor,
      fieldBgColor = attributes.fieldBgColor,
      fieldBrdStyle = attributes.fieldBrdStyle,
      fieldBrdWidth = attributes.fieldBrdWidth,
      fieldBrdRadius = attributes.fieldBrdRadius,
      fieldBrdColor = attributes.fieldBrdColor,
      fieldTextColor = attributes.fieldTextColor,
      labelTextColor = attributes.labelTextColor,
      btnBrdRadius = attributes.btnBrdRadius,
      btnBrdStyle = attributes.btnBrdStyle,
      btnTextColor = attributes.btnTextColor,
      btnBrdWidth = attributes.btnBrdWidth,
      btnBrdColor = attributes.btnBrdColor,
      btnBgColor = attributes.btnBgColor;
    var _formId = formId && String(formId).trim() != '' ? String(formId) : '-1';
    var posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(function (select) {
      return select('core').getEntityRecords('postType', 'wpzf-form', {
        order: 'asc',
        orderby: 'title',
        per_page: -1
      });
    }, []);
    var forms = posts && posts.length > 0 ? posts.map(function (x) {
      return {
        key: String(x.id),
        name: x.title.raw
      };
    }) : [];
    var theForm = forms.find(function (x) {
      return x.key == _formId;
    });
    var formSelect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_searchable_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Form', 'wpzoom-forms'),
      selectPlaceholder: forms.length < 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('No forms exist...', 'wpzoom-forms') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select a form...', 'wpzoom-forms'),
      searchPlaceholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Search...', 'wpzoom-forms'),
      noResultsLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Nothing found...', 'wpzoom-forms'),
      options: forms,
      value: typeof theForm !== 'undefined' ? theForm : '',
      onChange: function onChange(value) {
        return setAttributes({
          formId: String(value.selectedItem.key)
        });
      }
    });
    var formEditLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
      expanded: true,
      alignment: "right"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "link",
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit form', 'wpzoom-forms'),
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        viewBox: "0 0 24 24"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
      })),
      iconSize: 20,
      href: wpzf_formblock.admin_url + 'post.php?post=' + _formId + '&action=edit',
      style: {
        textDecoration: 'none'
      }
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Options', 'wpzoom-forms')
    }, forms.length > 0 ? formSelect : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, formSelect), '-1' !== _formId && formEditLink)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "styles"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Fields', 'wpzoom-forms')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Border Style', 'wpzoom-forms'),
      value: fieldBrdStyle,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Default', 'wpzoom-forms'),
        value: 'default'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Solid', 'wpzoom-forms'),
        value: 'solid'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Dashed', 'wpzoom-forms'),
        value: 'dashed'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Dotted', 'wpzoom-forms'),
        value: 'dotted'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('None', 'wpzoom-forms'),
        value: 'none'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          fieldBrdStyle: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      disabled: fieldBrdStyle == 'default',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Border Width', 'wpzoom-forms'),
      value: fieldBrdWidth,
      onChange: function onChange(value) {
        return setAttributes({
          fieldBrdWidth: value
        });
      },
      min: 0,
      max: 20
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      disabled: fieldBrdStyle == 'default',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Border Radius', 'wpzoom-forms'),
      value: fieldBrdRadius,
      onChange: function onChange(value) {
        return setAttributes({
          fieldBrdRadius: value
        });
      },
      min: 0,
      max: 50
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Color Settings', 'wpzoom-formsn'),
      initialOpen: false,
      colorSettings: [{
        value: fieldTextColor,
        onChange: function onChange(value) {
          return setAttributes({
            fieldTextColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Color', 'wpzoom-forms')
      }, {
        value: fieldBrdColor,
        onChange: function onChange(value) {
          return setAttributes({
            fieldBrdColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Border Color', 'wpzoom-forms')
      }, {
        value: fieldBgColor,
        onChange: function onChange(value) {
          return setAttributes({
            fieldBgColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Background Color', 'wpzoom-forms')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Labels', 'wpzoom-forms')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Color Settings', 'wpzoom-formsn'),
      initialOpen: false,
      colorSettings: [{
        value: labelTextColor,
        onChange: function onChange(value) {
          return setAttributes({
            labelTextColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Color', 'wpzoom-forms')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Button', 'wpzoom-forms')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Border Style', 'wpzoom-forms'),
      value: btnBrdStyle,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Default', 'wpzoom-forms'),
        value: 'default'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Solid', 'wpzoom-forms'),
        value: 'solid'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Dashed', 'wpzoom-forms'),
        value: 'dashed'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Dotted', 'wpzoom-forms'),
        value: 'dotted'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('None', 'wpzoom-forms'),
        value: 'none'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          btnBrdStyle: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      disabled: btnBrdStyle == 'default',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Border Width', 'wpzoom-forms'),
      value: btnBrdWidth,
      onChange: function onChange(value) {
        return setAttributes({
          btnBrdWidth: value
        });
      },
      min: 0,
      max: 20
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      disabled: btnBrdStyle == 'default',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Border Radius', 'wpzoom-forms'),
      value: btnBrdRadius,
      onChange: function onChange(value) {
        return setAttributes({
          btnBrdRadius: value
        });
      },
      min: 0,
      max: 50
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Color Settings', 'wpzoom-formsn'),
      initialOpen: false,
      colorSettings: [{
        value: btnTextColor,
        onChange: function onChange(value) {
          return setAttributes({
            btnTextColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text Color', 'wpzoom-forms')
      }, {
        value: btnBrdColor,
        onChange: function onChange(value) {
          return setAttributes({
            btnBrdColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Border Color', 'wpzoom-forms')
      }, {
        value: btnBgColor,
        onChange: function onChange(value) {
          return setAttributes({
            btnBgColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Background Color', 'wpzoom-forms')
      }]
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, '-1' != _formId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_6___default()), {
      block: "wpzoom-forms/form-block",
      attributes: attributes
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
      icon: wpzoomFormsIcon,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Contact Form by WPZOOM', 'wpzoom-forms')
    }, forms.length > 0 ? formSelect : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, formSelect))));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map