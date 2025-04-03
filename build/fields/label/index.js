!function(){"use strict";var e=window.wp.element,t=window.wp.blocks,r=JSON.parse('{"u2":"wpzoom-forms/label-field"}');function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=window.wp.blockEditor,c=window.wp.data,u=window.wp.i18n,s=window.wp.components;function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=r.u2;(0,t.registerBlockType)(y,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 32 32"},(0,e.createElement)("path",{d:"M17.56,31a1,1,0,0,1-.71-.29L1.29,15.15A1,1,0,0,1,1,14.44V4.2A3.2,3.2,0,0,1,4.2,1H14.44a1,1,0,0,1,.71.29L30.71,16.85a1, 1,0,0,1,0,1.41L18.26,30.71A1,1,0,0,1,17.56,31ZM3,14,17.56,28.59l11-11L14,3H4.2A1.2,1.2,0,0,0,3,4.2ZM8.41,8.41A2,2,0,1, 0,7,9,2,2,0,0,0,8.41,8.41ZM22.36,19.54a1,1,0,0,0,0-1.41l-9.9-9.9A1,1,0,0,0,11,9.64l9.9,9.9a1,1,0,0,0,1.41,0Zm-4.95.71a1, 1,0,0,0,0-1.41L9.64,11a1,1,0,0,0-1.41,1.41L16,20.24a1,1,0,0,0,1.41,0Z"})),edit:function(t){var r,n=(0,a.useBlockProps)(),o=t.attributes,l=t.setAttributes,f=t.clientId,m=o.id,b=o.name,y=o.forInput,w=o.required;(0,e.useEffect)((function(){m||l({id:"input_"+f.substr(0,8)})}),[]);var d=(0,c.useSelect)((function(e){return e("core/block-editor").getBlocks()}),[]),g=d&&d.length>0?function e(t){var r=[];return t.forEach((function(t){t.name.startsWith("wpzoom-forms/")&&!t.name.endsWith("label-field")&&r.push({value:t.attributes.id,label:t.attributes.name}),t.innerBlocks&&(r=[].concat(i(r),i(e(t.innerBlocks))))})),r}(d):[],v=(null==g||null===(r=g.find((function(e){return e.value==y})))||void 0===r||r.label,(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.SelectControl,{label:(0,u.__)("For Input","wpzoom-forms"),value:y,options:g.length>0?g:[{value:"-1",label:(0,u.__)("No inputs found...","wpzoom-forms")}],onChange:function(e){return l({forInput:e})}}),(0,e.createElement)(s.ToggleControl,{label:(0,u.__)("Required","wpzoom-forms"),checked:!0===w,onChange:function(e){return l({required:e})}}))),O=p(p({},n),{},{tagName:"label",placeholder:(0,u.__)("Label","wpzoom-forms"),value:b,htmlFor:y||"",onChange:function(e){return l({name:e})}});return!0===w&&(O["data-required"]=!0),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(s.PanelBody,{title:(0,u.__)("Options","wpzoom-forms")},g.length>0?v:(0,e.createElement)(s.Disabled,null,v))),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.RichText,O),w&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,u.__)("*","wpzoom-forms"))))},save:function(t){var r=t.attributes,n=a.useBlockProps.save(),o=r.name,l=r.forInput,i=r.required,c=b(b({},n),{},{htmlFor:l||""});return!0===i&&(c["data-required"]=!0),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("label",c,o),i&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},"*"))}})}();