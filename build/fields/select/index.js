!function(){var e={143:function(e){"use strict";e.exports=function(e,t,n,o,r,i,a,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,a,l],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},703:function(e,t,n){"use strict";var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.blocks,o=JSON.parse('{"u2":"wpzoom-forms/select-field"}');function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=window.wp.blockEditor,c=window.wp.i18n,u=window.wp.components;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,_x,i,a=[],_n=!0,l=!1;try{if(_x=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;_n=!1}else for(;!(_n=(o=_x.call(n)).done)&&(a.push(o.value),a.length!==t);_n=!0);}catch(e){l=!0,r=e}finally{try{if(!_n&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return a}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}function p(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach((function(t){p(e,t,n[t])}))}return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,h(o.key),o)}}function v(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}var E=window.React,O=window.ReactDOM,T=n(143),k=n.n(T),I=n(697),R=n.n(I),_=function(){function e(){g(this,e),p(this,"refs",{})}return v(e,[{key:"add",value:function(e,t){this.refs[e]||(this.refs[e]=[]),this.refs[e].push(t)}},{key:"remove",value:function(e,t){var n=this.getIndex(e,t);-1!==n&&this.refs[e].splice(n,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var e=this;return this.refs[this.active.collection].find((function(t){return t.node.sortableInfo.index==e.active.index}))}},{key:"getIndex",value:function(e,t){return this.refs[e].indexOf(t)}},{key:"getOrderedRefs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.active.collection;return this.refs[e].sort(D)}}]),e}();function D(e,t){return e.node.sortableInfo.index-t.node.sortableInfo.index}function N(e,t){return Object.keys(e).reduce((function(n,o){return-1===t.indexOf(o)&&(n[o]=e[o]),n}),{})}var A={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},P=function(){if("undefined"==typeof window||"undefined"==typeof document)return"";var e=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return"ms"===t?"ms":t&&t.length?t[0].toUpperCase()+t.substr(1):""}();function M(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}function j(e,t){e.style["".concat(P,"Transform")]=null==t?"":"translate3d(".concat(t.x,"px,").concat(t.y,"px,0)")}function L(e,t){e.style["".concat(P,"TransitionDuration")]=null==t?"":"".concat(t,"ms")}function W(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}function z(e,t,n){return Math.max(e,Math.min(n,t))}function H(e){return"px"===e.substr(-2)?parseFloat(e):0}function B(e){var t=window.getComputedStyle(e);return{bottom:H(t.marginBottom),left:H(t.marginLeft),right:H(t.marginRight),top:H(t.marginTop)}}function K(e,t){var n=t.displayName||t.name;return n?"".concat(e,"(").concat(n,")"):e}function F(e,t){var n=e.getBoundingClientRect();return{top:n.top+t.top,left:n.left+t.left}}function G(e){return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches.length?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}}function V(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length}function q(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,top:0};if(e){var o={left:n.left+e.offsetLeft,top:n.top+e.offsetTop};return e.parentNode===t?o:q(e.parentNode,t,o)}}function U(e,t,n){return e<n&&e>t?e-1:e>n&&e<t?e+1:e}function X(e){var t=e.lockOffset,n=e.width,o=e.height,r=t,i=t,a="px";if("string"==typeof t){var l=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);k()(null!==l,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',t),r=parseFloat(t),i=parseFloat(t),a=l[1]}return k()(isFinite(r)&&isFinite(i),"lockOffset value should be a finite. Given %s",t),"%"===a&&(r=r*n/100,i=i*o/100),{x:r,y:i}}function Y(e){var t=e.height,n=e.width,o=e.lockOffset,r=Array.isArray(o)?o:[o,o];k()(2===r.length,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",o);var i=d(r,2),a=i[0],l=i[1];return[X({height:t,lockOffset:a,width:n}),X({height:t,lockOffset:l,width:n})]}function $(e){return e instanceof HTMLElement?function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(e){return n.test(t[e])}))}(e)?e:$(e.parentNode):null}function J(e){var t=window.getComputedStyle(e);return"grid"===t.display?{x:H(t.gridColumnGap),y:H(t.gridRowGap)}:{x:0,y:0}}var Q="BUTTON",Z="INPUT",ee="OPTION",te="TEXTAREA",ne="SELECT";function oe(e){var t="input, textarea, select, canvas, [contenteditable]",n=e.querySelectorAll(t),o=e.cloneNode(!0);return l(o.querySelectorAll(t)).forEach((function(e,t){"file"!==e.type&&(e.value=n[t].value),"radio"===e.type&&e.name&&(e.name="__sortableClone__".concat(e.name)),"CANVAS"===e.tagName&&n[t].width>0&&n[t].height>0&&e.getContext("2d").drawImage(n[t],0,0)})),o}function re(e){return null!=e.sortableHandle}var ie=function(){function e(t,n){g(this,e),this.container=t,this.onScrollCallback=n}return v(e,[{key:"clear",value:function(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(e){var t=this,n=e.translate,o=e.minTranslate,r=e.maxTranslate,i=e.width,a=e.height,l={x:0,y:0},s={x:1,y:1},c=this.container,u=c.scrollTop,d=c.scrollLeft,f=c.scrollHeight,h=c.scrollWidth,p=0===u,m=f-u-c.clientHeight==0,g=0===d,y=h-d-c.clientWidth==0;n.y>=r.y-a/2&&!m?(l.y=1,s.y=10*Math.abs((r.y-a/2-n.y)/a)):n.x>=r.x-i/2&&!y?(l.x=1,s.x=10*Math.abs((r.x-i/2-n.x)/i)):n.y<=o.y+a/2&&!p?(l.y=-1,s.y=10*Math.abs((n.y-a/2-o.y)/a)):n.x<=o.x+i/2&&!g&&(l.x=-1,s.x=10*Math.abs((n.x-i/2-o.x)/i)),this.interval&&(this.clear(),this.isAutoScrolling=!1),0===l.x&&0===l.y||(this.interval=setInterval((function(){t.isAutoScrolling=!0;var e={left:s.x*l.x,top:s.y*l.y};t.container.scrollTop+=e.top,t.container.scrollLeft+=e.left,t.onScrollCallback(e)}),5))}}]),e}(),ae={axis:R().oneOf(["x","y","xy"]),contentWindow:R().any,disableAutoscroll:R().bool,distance:R().number,getContainer:R().func,getHelperDimensions:R().func,helperClass:R().string,helperContainer:R().oneOfType([R().func,"undefined"==typeof HTMLElement?R().any:R().instanceOf(HTMLElement)]),hideSortableGhost:R().bool,keyboardSortingTransitionDuration:R().number,lockAxis:R().string,lockOffset:R().oneOfType([R().number,R().string,R().arrayOf(R().oneOfType([R().number,R().string]))]),lockToContainerEdges:R().bool,onSortEnd:R().func,onSortMove:R().func,onSortOver:R().func,onSortStart:R().func,pressDelay:R().number,pressThreshold:R().number,keyCodes:R().shape({lift:R().arrayOf(R().number),drop:R().arrayOf(R().number),cancel:R().arrayOf(R().number),up:R().arrayOf(R().number),down:R().arrayOf(R().number)}),shouldCancelStart:R().func,transitionDuration:R().number,updateBeforeSortStart:R().func,useDragHandle:R().bool,useWindowAsScrollContainer:R().bool},le={lift:[32],drop:[32],cancel:[27],up:[38,37],down:[40,39]},se={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:function(e){var t=e.node;return{height:t.offsetHeight,width:t.offsetWidth}},hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:le,shouldCancelStart:function(e){return-1!==[Z,te,ne,ee,Q].indexOf(e.target.tagName)||!!W(e.target,(function(e){return"true"===e.contentEditable}))},transitionDuration:300,useWindowAsScrollContainer:!1},ce=Object.keys(ae);function ue(e){k()(!(e.distance&&e.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}function de(e,t){try{var n=e()}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,value)}var fe=(0,E.createContext)({manager:{}}),he={index:R().number.isRequired,collection:R().oneOfType([R().number,R().string]),disabled:R().bool},pe=Object.keys(he),me=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){var e,t;g(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return p(b(b(t=w(this,(e=x(n)).call.apply(e,[this].concat(r))))),"wrappedInstance",(0,E.createRef)()),t}return C(n,t),v(n,[{key:"componentDidMount",value:function(){(0,O.findDOMNode)(this).sortableHandle=!0}},{key:"getWrappedInstance",value:function(){return k()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"),this.wrappedInstance.current}},{key:"render",value:function(){var t=o.withRef?this.wrappedInstance:null;return(0,E.createElement)(e,r({ref:t},this.props))}}]),n}(E.Component),p(t,"displayName",K("sortableHandle",e)),n}((function(){return(0,e.createElement)(u.IconButton,{icon:"move",label:(0,c.__)("Re-arrange Item","wpzoom-forms"),className:"wpzoom-forms-move-button"})})),ge=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){var e,t;g(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return p(b(b(t=w(this,(e=x(n)).call.apply(e,[this].concat(r))))),"wrappedInstance",(0,E.createRef)()),t}return C(n,t),v(n,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(e){this.node&&(e.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),e.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),e.collection!==this.props.collection&&(this.unregister(e.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var e=this.props,t=e.collection,n=e.disabled,o=e.index,r=(0,O.findDOMNode)(this);r.sortableInfo={collection:t,disabled:n,index:o,manager:this.context.manager},this.node=r,this.ref={node:r},this.context.manager.add(t,this.ref)}},{key:"unregister",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.collection;this.context.manager.remove(e,this.ref)}},{key:"getWrappedInstance",value:function(){return k()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var t=o.withRef?this.wrappedInstance:null;return(0,E.createElement)(e,r({ref:t},N(this.props,pe)))}}]),n}(E.Component),p(t,"displayName",K("sortableElement",e)),p(t,"contextType",fe),p(t,"propTypes",he),p(t,"defaultProps",{collection:0}),n}((function(t){var n=t.value,o=t.optsId,r=t.options,i=t.changeCallback,a=t.removeCallback;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(u.Flex,null,(0,e.createElement)(u.FlexBlock,null,(0,e.createElement)(u.TextControl,{value:n,onChange:function(e){return i(e,o)}})),r.length>1&&(0,e.createElement)(u.FlexItem,null,(0,e.createElement)(me,null),(0,e.createElement)(u.IconButton,{icon:"no-alt",label:(0,c.__)("Delete Item","wpzoom-forms"),onClick:function(){return a(o)}}))))})),ye=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(e){var t;g(this,n),p(b(b(t=w(this,x(n).call(this,e)))),"state",{}),p(b(b(t)),"handleStart",(function(e){var n=t.props,o=n.distance,r=n.shouldCancelStart;if(2!==e.button&&!r(e)){t.touched=!0,t.position=G(e);var i=W(e.target,(function(e){return null!=e.sortableInfo}));if(i&&i.sortableInfo&&t.nodeIsChild(i)&&!t.state.sorting){var a=t.props.useDragHandle,l=i.sortableInfo,s=l.index,c=l.collection;if(l.disabled)return;if(a&&!W(e.target,re))return;t.manager.active={collection:c,index:s},V(e)||"A"!==e.target.tagName||e.preventDefault(),o||(0===t.props.pressDelay?t.handlePress(e):t.pressTimer=setTimeout((function(){return t.handlePress(e)}),t.props.pressDelay))}}})),p(b(b(t)),"nodeIsChild",(function(e){return e.sortableInfo.manager===t.manager})),p(b(b(t)),"handleMove",(function(e){var n=t.props,o=n.distance,r=n.pressThreshold;if(!t.state.sorting&&t.touched&&!t._awaitingUpdateBeforeSortStart){var i=G(e),a={x:t.position.x-i.x,y:t.position.y-i.y},l=Math.abs(a.x)+Math.abs(a.y);t.delta=a,o||r&&!(l>=r)?o&&l>=o&&t.manager.isActive()&&t.handlePress(e):(clearTimeout(t.cancelTimer),t.cancelTimer=setTimeout(t.cancel,0))}})),p(b(b(t)),"handleEnd",(function(){t.touched=!1,t.cancel()})),p(b(b(t)),"cancel",(function(){var e=t.props.distance;t.state.sorting||(e||clearTimeout(t.pressTimer),t.manager.active=null)})),p(b(b(t)),"handlePress",(function(e){try{var n=t.manager.getActive(),o=function(){if(n){var o=function(){var n=f.sortableInfo.index,o=B(f),r=J(t.container),c=t.scrollContainer.getBoundingClientRect(),g=a({index:n,node:f,collection:h});if(t.node=f,t.margin=o,t.gridGap=r,t.width=g.width,t.height=g.height,t.marginOffset={x:t.margin.left+t.margin.right+t.gridGap.x,y:Math.max(t.margin.top,t.margin.bottom,t.gridGap.y)},t.boundingClientRect=f.getBoundingClientRect(),t.containerBoundingRect=c,t.index=n,t.newIndex=n,t.axis={x:i.indexOf("x")>=0,y:i.indexOf("y")>=0},t.offsetEdge=q(f,t.container),t.initialOffset=G(p?m({},e,{pageX:t.boundingClientRect.left,pageY:t.boundingClientRect.top}):e),t.initialScroll={left:t.scrollContainer.scrollLeft,top:t.scrollContainer.scrollTop},t.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},t.helper=t.helperContainer.appendChild(oe(f)),M(t.helper,{boxSizing:"border-box",height:"".concat(t.height,"px"),left:"".concat(t.boundingClientRect.left-o.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(t.boundingClientRect.top-o.top,"px"),width:"".concat(t.width,"px")}),p&&t.helper.focus(),s&&(t.sortableGhost=f,M(f,{opacity:0,visibility:"hidden"})),t.minTranslate={},t.maxTranslate={},p){var y=d?{top:0,left:0,width:t.contentWindow.innerWidth,height:t.contentWindow.innerHeight}:t.containerBoundingRect,v=y.top,b=y.left,w=y.width,x=v+y.height,S=b+w;t.axis.x&&(t.minTranslate.x=b-t.boundingClientRect.left,t.maxTranslate.x=S-(t.boundingClientRect.left+t.width)),t.axis.y&&(t.minTranslate.y=v-t.boundingClientRect.top,t.maxTranslate.y=x-(t.boundingClientRect.top+t.height))}else t.axis.x&&(t.minTranslate.x=(d?0:c.left)-t.boundingClientRect.left-t.width/2,t.maxTranslate.x=(d?t.contentWindow.innerWidth:c.left+c.width)-t.boundingClientRect.left-t.width/2),t.axis.y&&(t.minTranslate.y=(d?0:c.top)-t.boundingClientRect.top-t.height/2,t.maxTranslate.y=(d?t.contentWindow.innerHeight:c.top+c.height)-t.boundingClientRect.top-t.height/2);l&&l.split(" ").forEach((function(e){return t.helper.classList.add(e)})),t.listenerNode=e.touches?e.target:t.contentWindow,p?(t.listenerNode.addEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.addEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.addEventListener("keydown",t.handleKeyDown)):(A.move.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortMove,!1)})),A.end.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortEnd,!1)}))),t.setState({sorting:!0,sortingIndex:n}),u&&u({node:f,index:n,collection:h,isKeySorting:p,nodes:t.manager.getOrderedRefs(),helper:t.helper},e),p&&t.keyMove(0)},r=t.props,i=r.axis,a=r.getHelperDimensions,l=r.helperClass,s=r.hideSortableGhost,c=r.updateBeforeSortStart,u=r.onSortStart,d=r.useWindowAsScrollContainer,f=n.node,h=n.collection,p=t.manager.isKeySorting,g=function(){if("function"==typeof c){t._awaitingUpdateBeforeSortStart=!0;var n=de((function(){var t=f.sortableInfo.index;return Promise.resolve(c({collection:h,index:t,node:f,isKeySorting:p},e)).then((function(){}))}),(function(e,n){if(t._awaitingUpdateBeforeSortStart=!1,e)throw n;return n}));if(n&&n.then)return n.then((function(){}))}}();return g&&g.then?g.then(o):o()}}();return Promise.resolve(o&&o.then?o.then((function(){})):void 0)}catch(e){return Promise.reject(e)}})),p(b(b(t)),"handleSortMove",(function(e){var n=t.props.onSortMove;"function"==typeof e.preventDefault&&e.cancelable&&e.preventDefault(),t.updateHelperPosition(e),t.animateNodes(),t.autoscroll(),n&&n(e)})),p(b(b(t)),"handleSortEnd",(function(e){var n=t.props,o=n.hideSortableGhost,r=n.onSortEnd,i=t.manager,a=i.active.collection,l=i.isKeySorting,s=t.manager.getOrderedRefs();t.listenerNode&&(l?(t.listenerNode.removeEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("keydown",t.handleKeyDown)):(A.move.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortMove)})),A.end.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortEnd)})))),t.helper.parentNode.removeChild(t.helper),o&&t.sortableGhost&&M(t.sortableGhost,{opacity:"",visibility:""});for(var c=0,u=s.length;c<u;c++){var d=s[c],f=d.node;d.edgeOffset=null,d.boundingClientRect=null,j(f,null),L(f,null),d.translate=null}t.autoScroller.clear(),t.manager.active=null,t.manager.isKeySorting=!1,t.setState({sorting:!1,sortingIndex:null}),"function"==typeof r&&r({collection:a,newIndex:t.newIndex,oldIndex:t.index,isKeySorting:l,nodes:s},e),t.touched=!1})),p(b(b(t)),"autoscroll",(function(){var e=t.props.disableAutoscroll,n=t.manager.isKeySorting;if(e)t.autoScroller.clear();else{if(n){var o=m({},t.translate),r=0,i=0;return t.axis.x&&(o.x=Math.min(t.maxTranslate.x,Math.max(t.minTranslate.x,t.translate.x)),r=t.translate.x-o.x),t.axis.y&&(o.y=Math.min(t.maxTranslate.y,Math.max(t.minTranslate.y,t.translate.y)),i=t.translate.y-o.y),t.translate=o,j(t.helper,t.translate),t.scrollContainer.scrollLeft+=r,void(t.scrollContainer.scrollTop+=i)}t.autoScroller.update({height:t.height,maxTranslate:t.maxTranslate,minTranslate:t.minTranslate,translate:t.translate,width:t.width})}})),p(b(b(t)),"onAutoScroll",(function(e){t.translate.x+=e.left,t.translate.y+=e.top,t.animateNodes()})),p(b(b(t)),"handleKeyDown",(function(e){var n=e.keyCode,o=t.props,r=o.shouldCancelStart,i=o.keyCodes,a=m({},le,void 0===i?{}:i);t.manager.active&&!t.manager.isKeySorting||!(t.manager.active||a.lift.includes(n)&&!r(e)&&t.isValidSortingTarget(e))||(e.stopPropagation(),e.preventDefault(),a.lift.includes(n)&&!t.manager.active?t.keyLift(e):a.drop.includes(n)&&t.manager.active?t.keyDrop(e):a.cancel.includes(n)?(t.newIndex=t.manager.active.index,t.keyDrop(e)):a.up.includes(n)?t.keyMove(-1):a.down.includes(n)&&t.keyMove(1))})),p(b(b(t)),"keyLift",(function(e){var n=e.target,o=W(n,(function(e){return null!=e.sortableInfo})).sortableInfo,r=o.index,i=o.collection;t.initialFocusedNode=n,t.manager.isKeySorting=!0,t.manager.active={index:r,collection:i},t.handlePress(e)})),p(b(b(t)),"keyMove",(function(e){var n=t.manager.getOrderedRefs(),o=n[n.length-1].node.sortableInfo.index,r=t.newIndex+e,i=t.newIndex;if(!(r<0||r>o)){t.prevIndex=i,t.newIndex=r;var a=U(t.newIndex,t.prevIndex,t.index),l=n.find((function(e){return e.node.sortableInfo.index===a})),s=l.node,c=t.containerScrollDelta,u=l.boundingClientRect||F(s,c),d=l.translate||{x:0,y:0},f=u.top+d.y-c.top,h=u.left+d.x-c.left,p=i<r,m=p&&t.axis.x?s.offsetWidth-t.width:0,g=p&&t.axis.y?s.offsetHeight-t.height:0;t.handleSortMove({pageX:h+m,pageY:f+g,ignoreTransition:0===e})}})),p(b(b(t)),"keyDrop",(function(e){t.handleSortEnd(e),t.initialFocusedNode&&t.initialFocusedNode.focus()})),p(b(b(t)),"handleKeyEnd",(function(e){t.manager.active&&t.keyDrop(e)})),p(b(b(t)),"isValidSortingTarget",(function(e){var n=t.props.useDragHandle,o=e.target,r=W(o,(function(e){return null!=e.sortableInfo}));return r&&r.sortableInfo&&!r.sortableInfo.disabled&&(n?re(o):o.sortableInfo)}));var o=new _;return ue(e),t.manager=o,t.wrappedInstance=(0,E.createRef)(),t.sortableContextValue={manager:o},t.events={end:t.handleEnd,move:t.handleMove,start:t.handleStart},t}return C(n,t),v(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.useWindowAsScrollContainer,n=this.getContainer();Promise.resolve(n).then((function(n){e.container=n,e.document=e.container.ownerDocument||document;var o=e.props.contentWindow||e.document.defaultView||window;e.contentWindow="function"==typeof o?o():o,e.scrollContainer=t?e.document.scrollingElement||e.document.documentElement:$(e.container)||e.container,e.autoScroller=new ie(e.scrollContainer,e.onAutoScroll),Object.keys(e.events).forEach((function(t){return A[t].forEach((function(n){return e.container.addEventListener(n,e.events[t],!1)}))})),e.container.addEventListener("keydown",e.handleKeyDown)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach((function(t){return A[t].forEach((function(n){return e.container.removeEventListener(n,e.events[t])}))})),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(e){var t=this.props,n=t.lockAxis,o=t.lockOffset,r=t.lockToContainerEdges,i=t.transitionDuration,a=t.keyboardSortingTransitionDuration,l=void 0===a?i:a,s=this.manager.isKeySorting,c=e.ignoreTransition,u=G(e),f={x:u.x-this.initialOffset.x,y:u.y-this.initialOffset.y};if(f.y-=window.pageYOffset-this.initialWindowScroll.top,f.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=f,r){var h=d(Y({height:this.height,lockOffset:o,width:this.width}),2),p=h[0],m=h[1],g={x:this.width/2-p.x,y:this.height/2-p.y},y={x:this.width/2-m.x,y:this.height/2-m.y};f.x=z(this.minTranslate.x+g.x,this.maxTranslate.x-y.x,f.x),f.y=z(this.minTranslate.y+g.y,this.maxTranslate.y-y.y,f.y)}"x"===n?f.y=0:"y"===n&&(f.x=0),s&&l&&!c&&L(this.helper,l),j(this.helper,f)}},{key:"animateNodes",value:function(){var e=this.props,t=e.transitionDuration,n=e.hideSortableGhost,o=e.onSortOver,r=this.containerScrollDelta,i=this.windowScrollDelta,a=this.manager.getOrderedRefs(),l=this.offsetEdge.left+this.translate.x+r.left,s=this.offsetEdge.top+this.translate.y+r.top,c=this.manager.isKeySorting,u=this.newIndex;this.newIndex=null;for(var d=0,f=a.length;d<f;d++){var h=a[d].node,p=h.sortableInfo.index,m=h.offsetWidth,g=h.offsetHeight,y={height:this.height>g?g/2:this.height/2,width:this.width>m?m/2:this.width/2},v=c&&p>this.index&&p<=u,b=c&&p<this.index&&p>=u,w={x:0,y:0},x=a[d].edgeOffset;x||(x=q(h,this.container),a[d].edgeOffset=x,c&&(a[d].boundingClientRect=F(h,r)));var S=d<a.length-1&&a[d+1],C=d>0&&a[d-1];S&&!S.edgeOffset&&(S.edgeOffset=q(S.node,this.container),c&&(S.boundingClientRect=F(S.node,r))),p!==this.index?(t&&L(h,t),this.axis.x?this.axis.y?b||p<this.index&&(l+i.left-y.width<=x.left&&s+i.top<=x.top+y.height||s+i.top+y.height<=x.top)?(w.x=this.width+this.marginOffset.x,x.left+w.x>this.containerBoundingRect.width-y.width&&S&&(w.x=S.edgeOffset.left-x.left,w.y=S.edgeOffset.top-x.top),null===this.newIndex&&(this.newIndex=p)):(v||p>this.index&&(l+i.left+y.width>=x.left&&s+i.top+y.height>=x.top||s+i.top+y.height>=x.top+g))&&(w.x=-(this.width+this.marginOffset.x),x.left+w.x<this.containerBoundingRect.left+y.width&&C&&(w.x=C.edgeOffset.left-x.left,w.y=C.edgeOffset.top-x.top),this.newIndex=p):v||p>this.index&&l+i.left+y.width>=x.left?(w.x=-(this.width+this.marginOffset.x),this.newIndex=p):(b||p<this.index&&l+i.left<=x.left+y.width)&&(w.x=this.width+this.marginOffset.x,null==this.newIndex&&(this.newIndex=p)):this.axis.y&&(v||p>this.index&&s+i.top+y.height>=x.top?(w.y=-(this.height+this.marginOffset.y),this.newIndex=p):(b||p<this.index&&s+i.top<=x.top+y.height)&&(w.y=this.height+this.marginOffset.y,null==this.newIndex&&(this.newIndex=p))),j(h,w),a[d].translate=w):n&&(this.sortableGhost=h,M(h,{opacity:0,visibility:"hidden"}))}null==this.newIndex&&(this.newIndex=this.index),c&&(this.newIndex=u);var E=c?this.prevIndex:u;o&&this.newIndex!==E&&o({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:E,isKeySorting:c,nodes:a,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return k()(o.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var e=this.props.getContainer;return"function"!=typeof e?(0,O.findDOMNode)(this):e(o.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var t=o.withRef?this.wrappedInstance:null;return(0,E.createElement)(fe.Provider,{value:this.sortableContextValue},(0,E.createElement)(e,r({ref:t},N(this.props,ce))))}},{key:"helperContainer",get:function(){var e=this.props.helperContainer;return"function"==typeof e?e():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){return this.props.useWindowAsScrollContainer?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),n}(E.Component),p(t,"displayName",K("sortableList",e)),p(t,"defaultProps",se),p(t,"propTypes",ae),n}((function(t){var n=t.items,o=t.changeCallback,r=t.removeCallback;return(0,e.createElement)("div",null,n.map((function(t,i){return(0,e.createElement)(ge,{index:i,optsId:i,value:t,options:n,changeCallback:o,removeCallback:r})})))})),ve=o.u2;(0,t.registerBlockType)(ve,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"},(0,e.createElement)("path",{d:"M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35 C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"}),(0,e.createElement)("path",{d:"M76.616,53.384c0.244,0.244,0.564,0.366,0.884,0.366s0.64-0.122,0.884-0.366l5-5c0.357-0.357,0.464-0.895,0.271-1.362 c-0.193-0.467-0.649-0.771-1.155-0.771h-10c-0.505,0-0.961,0.305-1.155,0.771c-0.193,0.467-0.086,1.005,0.271,1.362L76.616,53.384z"})),edit:function(t){var n=(0,s.useBlockProps)(),o=t.attributes,i=t.setAttributes,a=t.clientId,d=o.id,f=o.name,h=o.options,p=o.defaultValue,m=o.label,g=o.showLabel,y=o.multiple,v=o.required;return(0,e.useEffect)((function(){d||i({id:"input_"+a.substr(0,8)})}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.InspectorControls,null,(0,e.createElement)(u.PanelBody,{title:(0,c.__)("Options","wpzoom-forms")},(0,e.createElement)(u.TextControl,{label:(0,c.__)("Name","wpzoom-forms"),value:f,placeholder:(0,c.__)("e.g. My Dropdown Select Field","wpzoom-forms"),onChange:function(e){return i({name:e})}}),(0,e.createElement)(u.Card,{size:"small"},(0,e.createElement)(u.CardHeader,null,(0,c.__)("Items","wpzoom-forms"),(0,e.createElement)(u.IconButton,{icon:"insert",label:(0,c.__)("Add Item","wpzoom-forms"),onClick:function(){var e=l(h);e.push((0,c.sprintf)((0,c.__)("Item #%s","wpzoom-forms"),h.length+1)),i({options:e})}.bind(void 0)})),(0,e.createElement)(u.CardBody,null,(0,e.createElement)(ye,{items:h,changeCallback:function(e,t){var n=l(h);n[t]=e,i({options:n})},removeCallback:function(e){var t=l(h);t.splice(e,1),i({options:t})},lockAxis:"y",useDragHandle:!0,onSortEnd:function(e){return t=e.oldIndex,n=e.newIndex,o=h,r=t,a=n,function(e,t,n){const o=t<0?e.length+t:t;if(o>=0&&o<e.length){const o=n<0?e.length+n:n,[r]=e.splice(t,1);e.splice(o,0,r)}}(o=[...o],r,a),void i({options:o});var t,n,o,r,a}}))),(0,e.createElement)(u.SelectControl,{label:(0,c.__)("Default Value","wpzoom-forms"),value:p,options:h.map((function(e,t){return{label:e,value:e}})),onChange:function(e){return i({defaultValue:e})}}),(0,e.createElement)(u.ToggleControl,{label:(0,c.__)("Show Label","wpzoom-forms"),checked:!!g,onChange:function(e){return i({showLabel:!!e})}}),g&&(0,e.createElement)(u.TextControl,{label:(0,c.__)("Label","wpzoom-forms"),value:m,onChange:function(e){return i({label:e})}}),(0,e.createElement)(u.ToggleControl,{label:(0,c.__)("Allow Multiple Selections","wpzoom-forms"),checked:!!y,onChange:function(e){return i({multiple:!!e})}}),(0,e.createElement)(u.ToggleControl,{label:(0,c.__)("Required","wpzoom-forms"),checked:!!v,onChange:function(e){return i({required:!!e})}}))),(0,e.createElement)(e.Fragment,null,g&&(0,e.createElement)("label",{htmlFor:d},(0,e.createElement)(s.RichText,{tagName:"label",placeholder:(0,c.__)("Label","wpzoom-forms"),value:m,htmlFor:d,onChange:function(e){return i({label:e})}}),v&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,c.__)("*","wpzoom-forms"))),(0,e.createElement)("select",r({name:d,id:d,required:!!v,multiple:!!y,defaultValue:p},n),h.map((function(t,n){return(0,e.createElement)("option",{key:n,value:t},t)})))))},save:function(t){var n=t.attributes,o=s.useBlockProps.save(),i=n.id,a=(n.name,n.options),l=n.defaultValue,u=n.label,d=n.showLabel,f=n.multiple,h=n.required;return(0,e.createElement)(e.Fragment,null,d&&(0,e.createElement)("label",{htmlFor:i},(0,e.createElement)(s.RichText.Content,{tagName:"label",value:u,htmlFor:i}),h&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,c.__)("*","wpzoom-forms"))),(0,e.createElement)("select",r({name:i,id:i,required:!!h,multiple:!!f,defaultValue:l},o),a.map((function(t,n){return(0,e.createElement)("option",{key:n,value:t},t)}))))}})}()}();