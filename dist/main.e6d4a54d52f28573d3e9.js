"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[179,736],{714:(t,r,e)=>{e(426);var n=e(486),o=e.n(n),i=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return r.every((function(t){return"number"==typeof t&&!isNaN(t)}))},a=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return r.map((function(t){return parseInt(t)}))};function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,r){if(t){if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,r):void 0}}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function s(t,r,e){return r&&y(t.prototype,r),e&&y(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t,r,e){return(r=m(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function m(t){var r=function(t,r){if("object"!==f(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(r)?r:String(r)}var p=s((function t(){var r=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"tampilkanErrorPenjumlahan",(function(t,e){var n=t.reduce((function(t,r,n){return i(e[n])?t+"":t+"".concat(r," itu bukan angka! ")}),"Silahkan masukkan angka yang benar: ");r.error.classList.remove("d-none"),r.error.innerText=n})),b(this,"sembunyikanError",(function(){return r.error.classList.add("d-none")})),this.error=document.querySelector("#error")}));function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==v(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var h=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.operand1=document.querySelector("#operand1"),this.operand2=document.querySelector("#operand2"),this.tombolTambah=document.querySelector("#tombol-tambah"),this.hasil=document.querySelector("#hasil")}var r,e;return r=t,(e=[{key:"getInput",value:function(){return[this.operand1.value,this.operand2.value]}},{key:"setResult",value:function(t,r){this.hasil.innerText=t+r}},{key:"onClick",value:function(t){this.tombolTambah.addEventListener("click",t)}}])&&d(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==S(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}var w,g,j,E=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.tombolJokes=document.querySelector("#jokes-receh"),this.modalBody=document.querySelector(".modal-body")}var r,e;return r=t,(e=[{key:"setModal",value:function(t){this.modalBody.innerHTML=t}},{key:"onClick",value:function(t){this.tombolJokes.addEventListener("click",t)}}])&&k(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();w=new p,g=new h,j=new E,w.sembunyikanError(),g.onClick((function(){w.sembunyikanError();var t,r,e=g.getInput(),n=a.apply(void 0,u(e));if(i.apply(void 0,u(n))){var o=(r=2,function(t){if(Array.isArray(t))return t}(t=n)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,r)||l(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],f=o[1];g.setResult(c,f)}else g.setResult(""),w.tampilkanErrorPenjumlahan(e,n)})),j.onClick((function(){fetch("https://candaan-api.vercel.app/api/text/random").then((function(t){return t.json()})).then((function(t){j.setModal(t.data)}))})),console.log(o().toUpper("ini index.js"))},426:(t,r,e)=>{e(138),e(662)}},t=>{t.O(0,[242],(()=>(714,t(t.s=714)))),t.O()}]);