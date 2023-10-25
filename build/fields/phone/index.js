!function(){"use strict";var e=window.wp.element,t=window.wp.blocks,l=JSON.parse('{"u2":"wpzoom-forms/text-phone-field"}');function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},o.apply(this,arguments)}var r=window.wp.blockEditor,n=window.wp.i18n,a=window.wp.components,h=l.u2;(0,t.registerBlockType)(h,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"},(0,e.createElement)("path",{d:"M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75 v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"}),(0,e.createElement)("path",{d:"M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35 C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"}),(0,e.createElement)("path",{d:"M51.061 59.577q.168.672.168 1.68 0 .966-.168 1.68h-10.08q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h3.36Zm17.804-11.76q0 .966-.168 1.68h-2.1q.168.672.168 1.68 0 .966-.168 1.68h-2.1q.168.672.168 1.68 0 .966-.168 1.68h-2.1q.168.672.168 1.68 0 .966-.168 1.68h6.3q.168.672.168 1.68 0 .966-.168 1.68h-11.76q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68h2.1q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-5.88q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h8.4q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68Zm16.797 0q0 .966-.168 1.68h-1.68q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.68q.168.672.168 1.68 0 .966-.168 1.68h-8.4q-.168-.714-.168-1.68 0-1.008.168-1.68h-1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68h5.04q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-4.2q-.168-.714-.168-1.68 0-1.008.168-1.68h4.2q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-5.04q.168.672.168 1.68 0 .966-.168 1.68h-3.36q-.168-.714-.168-1.68 0-1.008.168-1.68h1.68q-.168-.714-.168-1.68 0-1.008.168-1.68h8.4q.168.672.168 1.68 0 .966-.168 1.68h1.68q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68Z"})),edit:function(t){var l=(0,r.useBlockProps)(),h=t.attributes,c=t.setAttributes,m=t.clientId,s=h.id,i=h.name,u=h.placeholder,p=h.label,q=h.showLabel,w=h.required;return(0,e.useEffect)((function(){s||c({id:"input_"+m.substr(0,8)})}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(a.PanelBody,{title:(0,n.__)("Options","wpzoom-forms")},(0,e.createElement)(a.TextControl,{label:(0,n.__)("Name","wpzoom-forms"),value:i,placeholder:(0,n.__)("e.g. My Email Field","wpzoom-forms"),onChange:function(e){return c({name:e})}}),(0,e.createElement)(a.TextControl,{label:(0,n.__)("Placeholder","wpzoom-forms"),value:u,onChange:function(e){return c({placeholder:e})}}),(0,e.createElement)(a.ToggleControl,{label:(0,n.__)("Show Label","wpzoom-forms"),checked:!!q,onChange:function(e){return c({showLabel:!!e})}}),q&&(0,e.createElement)(a.TextControl,{label:(0,n.__)("Label","wpzoom-forms"),value:p,onChange:function(e){return c({label:e})}}),(0,e.createElement)(a.ToggleControl,{label:(0,n.__)("Required","wpzoom-forms"),checked:!!w,onChange:function(e){return c({required:!!e})}}))),(0,e.createElement)(e.Fragment,null,q&&(0,e.createElement)("label",{htmlFor:s},(0,e.createElement)(r.RichText,{tagName:"label",placeholder:(0,n.__)("Label","wpzoom-forms"),value:p,htmlFor:s,onChange:function(e){return c({label:e})}}),w&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,n.__)("*","wpzoom-forms"))),(0,e.createElement)("input",o({type:"tel",name:s,id:s,placeholder:u,required:!!w},l))))},save:function(t){var l=t.attributes,a=r.useBlockProps.save(),h=l.id,c=(l.name,l.placeholder),m=l.label,s=l.showLabel,i=l.required;return(0,e.createElement)(e.Fragment,null,s&&(0,e.createElement)("label",{htmlFor:h},(0,e.createElement)(r.RichText.Content,{tagName:"label",value:m,htmlFor:h}),i&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,n.__)("*","wpzoom-forms"))),(0,e.createElement)("input",o({type:"tel",name:h,id:h,placeholder:c,required:!!i},a)))}})}();