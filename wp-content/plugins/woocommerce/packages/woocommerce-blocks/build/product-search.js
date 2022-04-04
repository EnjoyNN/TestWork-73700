this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-search"]=function(e){function t(t){for(var o,n,a=t[0],s=t[1],b=t[2],u=0,d=[];u<a.length;u++)n=a[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(i&&i(t);d.length;)d.shift()();return l.push.apply(l,b||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],o=!0,a=1;a<c.length;a++){var s=c[a];0!==r[s]&&(o=!1)}o&&(l.splice(t--,1),e=n(n.s=c[0]))}return e}var o={},r={35:0},l=[];function n(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=o,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var b=0;b<a.length;b++)t(a[b]);var i=s;return l.push([348,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},12:function(e,t){e.exports=window.wp.blocks},18:function(e,t){e.exports=window.wp.primitives},2:function(e,t){e.exports=window.wc.wcSettings},207:function(e,t){},208:function(e,t){},3:function(e,t){e.exports=window.wp.components},348:function(e,t,c){e.exports=c(464)},349:function(e,t,c){"use strict";var o=c(0),r=c(18);const l=Object(o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(o.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}));t.a=l},43:function(e,t,c){"use strict";var o=c(0);t.a=function(e){let{srcElement:t,size:c=24,...r}=e;return Object(o.isValidElement)(t)?Object(o.cloneElement)(t,{width:c,height:c,...r}):null}},464:function(e,t,c){"use strict";c.r(t);var o=c(0),r=c(1),l=c(12),n=c(43),a=c(349),s=(c(207),c(208),c(4)),b=c.n(s),i=(c(10),c(2)),u=e=>{let{attributes:{label:t,placeholder:c,formId:l,className:n,hasLabel:a,align:s}}=e;const u=b()("wc-block-product-search",s?"align"+s:"",n);return Object(o.createElement)("div",{className:u},Object(o.createElement)("form",{role:"search",method:"get",action:i.HOME_URL},Object(o.createElement)("label",{htmlFor:l,className:a?"wc-block-product-search__label":"wc-block-product-search__label screen-reader-text"},t),Object(o.createElement)("div",{className:"wc-block-product-search__fields"},Object(o.createElement)("input",{type:"search",id:l,className:"wc-block-product-search__field",placeholder:c,name:"s"}),Object(o.createElement)("input",{type:"hidden",name:"post_type",value:"product"}),Object(o.createElement)("button",{type:"submit",className:"wc-block-product-search__button",label:Object(r.__)("Search",'woocommerce')},Object(o.createElement)("svg",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicon dashicons-arrow-right-alt2",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},Object(o.createElement)("path",{d:"M6 15l5-5-5-5 1-2 7 7-7 7z"}))))))},d=c(7),p=c(3),w=c(9),h=Object(w.withInstanceId)(e=>{let{attributes:{label:t,placeholder:c,formId:l,className:n,hasLabel:a,align:s},instanceId:i,setAttributes:u}=e;const w=b()("wc-block-product-search",s?"align"+s:"",n);return Object(o.useEffect)(()=>{l||u({formId:"wc-block-product-search-"+i})},[l,u,i]),Object(o.createElement)(o.Fragment,null,Object(o.createElement)(d.InspectorControls,{key:"inspector"},Object(o.createElement)(p.PanelBody,{title:Object(r.__)("Content",'woocommerce'),initialOpen:!0},Object(o.createElement)(p.ToggleControl,{label:Object(r.__)("Show search field label",'woocommerce'),help:a?Object(r.__)("Label is visible.",'woocommerce'):Object(r.__)("Label is hidden.",'woocommerce'),checked:a,onChange:()=>u({hasLabel:!a})}))),Object(o.createElement)("div",{className:w},!!a&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)("label",{className:"screen-reader-text",htmlFor:"wc-block-product-search__label"},Object(r.__)("Search Label",'woocommerce')),Object(o.createElement)(d.PlainText,{className:"wc-block-product-search__label",id:"wc-block-product-search__label",value:t,onChange:e=>u({label:e})})),Object(o.createElement)("div",{className:"wc-block-product-search__fields"},Object(o.createElement)(p.TextControl,{className:"wc-block-product-search__field input-control",value:c,placeholder:Object(r.__)("Enter search placeholder text",'woocommerce'),onChange:e=>u({placeholder:e})}),Object(o.createElement)("button",{type:"submit",className:"wc-block-product-search__button",label:Object(r.__)("Search",'woocommerce'),onClick:e=>e.preventDefault(),tabIndex:"-1"},Object(o.createElement)("svg",{"aria-hidden":"true",role:"img",focusable:"false",className:"dashicon dashicons-arrow-right-alt2",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},Object(o.createElement)("path",{d:"M6 15l5-5-5-5 1-2 7 7-7 7z"}))))))});const m={hasLabel:{type:"boolean",default:!0},label:{type:"string",default:Object(r.__)("Search",'woocommerce')},placeholder:{type:"string",default:Object(r.__)("Search products…",'woocommerce')},formId:{type:"string",default:""}};Object(l.registerBlockType)("woocommerce/product-search",{title:Object(r.__)("Product Search",'woocommerce'),icon:{src:Object(o.createElement)(n.a,{srcElement:a.a,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(r.__)("WooCommerce",'woocommerce')],description:Object(r.__)("A search box to allow customers to search for products by keyword.",'woocommerce'),supports:{align:["wide","full"]},example:{attributes:{hasLabel:!0}},attributes:m,transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:c}=e;return"woocommerce_product_search"===t&&!(null==c||!c.raw)},transform:e=>{let{instance:t}=e;return Object(l.createBlock)("woocommerce/product-search",{label:""===t.raw.title?Object(r.__)("Search",'woocommerce'):t.raw.title})}}]},deprecated:[{attributes:m,save:e=>Object(o.createElement)("div",null,Object(o.createElement)(u,e))}],edit:h,save:()=>null})},7:function(e,t){e.exports=window.wp.blockEditor},9:function(e,t){e.exports=window.wp.compose}});