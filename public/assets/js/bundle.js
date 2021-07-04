(()=>{"use strict";var r,n,e,t,o,a,i,c,A,s,u,p,l,d,f,m,h,C,g,b,y={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(15),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([r.id,":root {\r\n    --primary-color: rgb(11, 136, 158);\r\n    --primary-color-darker: rgb(3, 45, 53);\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n.generated-password {\r\n    font-size: 2em;\r\n    margin: 40px 0;\r\n}\r\ninput[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 20px;\r\n}\r\nbutton {\r\n    display: block;\r\n    margin: 20px 0;\r\n    font-size: 1em;\r\n}\r\n.container h1 {\r\n    text-align: center;\r\n}\r\n.footer {\r\n    text-align: center;\r\n    color: white;\r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,kCAAkC;IAClC,sCAAsC;AAC1C;AACA;IACI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;AACA;IACI,uCAAuC;AAC3C;AACA;IACI,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,uCAAuC;AAC3C;AACA;IACI,cAAc;IACd,cAAc;AAClB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,cAAc;IACd,cAAc;IACd,cAAc;AAClB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,YAAY;AAChB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n\r\n:root {\r\n    --primary-color: rgb(11, 136, 158);\r\n    --primary-color-darker: rgb(3, 45, 53);\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n.generated-password {\r\n    font-size: 2em;\r\n    margin: 40px 0;\r\n}\r\ninput[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 20px;\r\n}\r\nbutton {\r\n    display: block;\r\n    margin: 20px 0;\r\n    font-size: 1em;\r\n}\r\n.container h1 {\r\n    text-align: center;\r\n}\r\n.footer {\r\n    text-align: center;\r\n    color: white;\r\n}"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<r.length;c++){var A=[].concat(r[c]);t&&o[A[0]]||(e&&(A[2]?A[2]="".concat(e," and ").concat(A[2]):A[2]=e),n.push(A))}},n}},15:r=>{function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var e,t,o=(t=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){var e=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=e){var t,o,a=[],i=!0,c=!1;try{for(e=e.call(r);!(i=(t=e.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(r){c=!0,o=r}finally{try{i||null==e.return||e.return()}finally{if(c)throw o}}return a}}(e,t)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),s="/*# ".concat(A," */"),u=i.sources.map((function(r){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(r," */")}));return[a].concat(u).concat([s]).join("\n")}return[a].join("\n")}},695:r=>{var n={};r.exports=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var A=r[c],s=t.base?A[0]+t.base:A[0],u=a[s]||0,p="".concat(s," ").concat(u);a[s]=u+1;var l=e(p),d={css:A[1],media:A[2],sourceMap:A[3]};-1!==l?(n[l].references++,n[l].updater(d)):n.push({identifier:p,updater:o(d,t),references:1}),i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var A=t(r,o),s=0;s<a.length;s++){var u=e(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=A}}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n),n}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t=e.css,o=e.media,a=e.sourceMap;o?r.setAttribute("media",o):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}}},v={};function I(r){var n=v[r];if(void 0!==n)return n.exports;var e=v[r]={id:r,exports:{}};return y[r](e,e.exports,I),e.exports}I.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return I.d(n,{a:n}),n},I.d=(r,n)=>{for(var e in n)I.o(n,e)&&!I.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},I.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=function(r,n){return Math.floor(Math.random()*(n-r)+r)},n=',.;/~]´[<>:?^}`{=+-_)(*&¨%$#@!"',e=function(){return n[r(0,n.length)]},t=document.querySelector(".generated-password"),o=document.querySelector(".amount-characters"),a=document.querySelector(".checkbox-capital"),i=document.querySelector(".checkbox-tiny"),c=document.querySelector(".checkbox-number"),A=document.querySelector(".checkbox-symbol"),s=document.querySelector(".generate-password"),u=I(379),p=I.n(u),l=I(795),d=I.n(l),f=I(695),m=I.n(f),h=I(216),C=I.n(h),g=I(122),(b={styleTagTransform:function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}},setAttributes:function(r){var n=I.nc;n&&r.setAttribute("nonce",n)},insert:function(r){var n=m()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}}).domAPI=d(),b.insertStyleElement=C(),p()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,s.addEventListener("click",(function(){t.innerHTML=function(n,t,o,a,i){var c=[];n=Number(n);for(var A=0;A<n;A++)t&&c.push(String.fromCharCode(r(65,91))),o&&c.push(String.fromCharCode(r(97,123))),a&&c.push(String.fromCharCode(r(48,58))),i&&c.push(e());return c.join("").slice(0,n)}(o.value,a.checked,i.checked,c.checked,A.checked)||"Nada selecionado!".fontcolor("red")}))})();
//# sourceMappingURL=bundle.js.map