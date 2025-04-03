!function(){"use strict";var e=window.wp.element,t=window.wp.blocks,r=JSON.parse('{"u2":"wpzoom-forms/text-website-field"}');function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=window.wp.blockEditor,a=window.wp.i18n,h=window.wp.components,c=r.u2;(0,t.registerBlockType)(c,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"},(0,e.createElement)("path",{d:"M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75 v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"}),(0,e.createElement)("path",{d:"M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35 C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"}),(0,e.createElement)("path",{d:"M51.364 45.243q0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68Zm16.796 0q0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68Zm16.797 0q0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68Z"})),edit:function(t){var r=(0,l.useBlockProps)(),c=t.attributes,i=t.setAttributes,u=t.clientId,m=c.id,s=c.name,p=c.placeholder,q=c.label,f=c.showLabel,d=c.required;(0,e.useEffect)((function(){m||i({id:"input_"+u.substr(0,8)})}),[]);var w,b,v=(w=(0,e.useState)(m),b=1,function(e){if(Array.isArray(e))return e}(w)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,_x,l,a=[],_n=!0,h=!1;try{if(_x=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;_n=!1}else for(;!(_n=(n=_x.call(r)).done)&&(a.push(n.value),a.length!==t);_n=!0);}catch(e){h=!0,o=e}finally{try{if(!_n&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(h)throw o}}return a}}(w,b)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(w,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(h.PanelBody,{title:(0,a.__)("Options","wpzoom-forms")},(0,e.createElement)(h.TextControl,{label:(0,a.__)("Name","wpzoom-forms"),value:s,placeholder:(0,a.__)("e.g. My Website Field","wpzoom-forms"),onChange:function(e){e.replace(/\s/g,"_").toLowerCase(),i({name:e,id:"input_"+u.substr(0,8)})}}),(0,e.createElement)(h.TextControl,{label:(0,a.__)("Placeholder","wpzoom-forms"),value:p,onChange:function(e){return i({placeholder:e})}}),(0,e.createElement)(h.ToggleControl,{label:(0,a.__)("Show Label","wpzoom-forms"),checked:!!f,onChange:function(e){return i({showLabel:!!e})}}),f&&(0,e.createElement)(h.TextControl,{label:(0,a.__)("Label","wpzoom-forms"),value:q,onChange:function(e){return i({label:e})}}),(0,e.createElement)(h.ToggleControl,{label:(0,a.__)("Required","wpzoom-forms"),checked:!!d,onChange:function(e){return i({required:!!e})}}))),(0,e.createElement)(e.Fragment,null,f&&(0,e.createElement)("label",{htmlFor:v},(0,e.createElement)(l.RichText,{tagName:"label",placeholder:(0,a.__)("Label","wpzoom-forms"),value:q,htmlFor:v,onChange:function(e){return i({label:e})}}),d&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,a.__)("*","wpzoom-forms"))),(0,e.createElement)("input",n({type:"url",name:v,id:v,placeholder:p,required:!!d},r))))},save:function(t){var r=t.attributes,o=l.useBlockProps.save(),h=r.id,c=(r.name,r.placeholder),i=r.label,u=r.showLabel,m=r.required;return(0,e.createElement)(e.Fragment,null,u&&(0,e.createElement)("label",{htmlFor:h},(0,e.createElement)(l.RichText.Content,{tagName:"label",value:i,htmlFor:h}),m&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,a.__)("*","wpzoom-forms"))),(0,e.createElement)("input",n({type:"url",name:h,id:h,placeholder:c,required:!!m},o)))}})}();