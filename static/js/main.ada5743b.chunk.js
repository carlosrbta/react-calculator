(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{16:function(e,a,t){e.exports=t(27)},22:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(12),c=t.n(o),l=(t(21),t(8)),i=t(14),u=t(5),s=t(6),m=t(15);var p=function(e){var a=e.operator,t=e.label,r=e.variant,o=e.onClick;return n.a.createElement(s.a,null,n.a.createElement(m.a,{variant:r,block:!0,onClick:function(){return o(a)}},t||a))},v=t(7),E=[].concat(["1","2","3","4","5","6","7","8","9","0"],["(",")"],["+","-","*","/"],[".","=","Backspace","Escape","Enter"]),f=function e(a){if(/^[*+\/]/.test(a))throw new Error("Cannot start the expression with invalid operators");var t=a;return["*","/","+","-"].map((function(a){var r=k(t),n=r.findIndex((function(e){return e===a}));if(n>0){var o=r[n],c=r[n-1],l=r[n+1],i=d[o](c,l),u=c+""+o+l;t=t.replace(u,i),(n=r.findIndex((function(e){return e===a})))>=1&&(t=e(t))}return{}})),t},k=function(e){for(var a=e.split(""),t=["*","/","+","-"],r=[],n=0,o=0;o<a.length;o++){var c="0"===a[o],l="."===a[o],i="-"===a[o]&&0===o,u="-"===a[o]&&a[o-1]&&t.includes(a[o-1]);parseInt(a[o])||c||l||i||u?r[n]=(r[n]||"")+""+a[o]:(r[++n]=a[o],n++)}return r},h=function(e){var a=e.match(/([(])[^()]+[)]/);return a&&a[0]},d={"/":function(e,a){return parseFloat(e)/parseFloat(a)},"*":function(e,a){return parseFloat(e)*parseFloat(a)},"+":function(e,a){return parseFloat(e)+parseFloat(a)},"-":function(e,a){return parseFloat(e)-parseFloat(a)},"=":function(e,a){return a}};t(22);var g=function(){var e=Object(r.useState)(""),a=Object(l.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)(!1),m=Object(l.a)(c,2),k=m[0],d=m[1],g=Object(r.useState)(!1),C=Object(l.a)(g,2),b=C[0],w=C[1];Object(r.useEffect)((function(){return window.addEventListener("keydown",x),function(){return window.removeEventListener("keydown",x)}}));var y=function(e){return N(e)},j=function(){o(""),w(!1),d(!1)},F=function(){var e=t.substring(0,t.length-1);o(e),d(!1)},O=function(){try{var e=t;e=function(e){for(var a=!0,t=e,r=0;a;){var n=h(t);if(!n)return a=!1,t;n=n.replace("(","").replace(")","");var o=f(n);t=t.replace("("+n+")",o),3===r&&(a=!1,console.log("block")),r++}return t}(e=function(e){return e.replace(/[0-9]\(/g,(function(e){return e.replace("(","*(")}))}(e=function(e){return e.replace(new RegExp("%","g"),(function(e){return e.replace("%","/100")}))}(e))),e=f(e),o(e),w(!0)}catch(a){d(a.message)}},x=function(e){var a=e.key;E.includes(a)&&("Escape"!==a?"Backspace"!==a?"Enter"!==a?N(a):O():F():j())},N=function(e){var a="".concat(t).concat(e);o(a)},B=Object(r.useMemo)((function(){return b||!t}),[b,t]);return n.a.createElement(i.a,null,n.a.createElement(v.a,{className:"calculator"},n.a.createElement("h5",{className:"title"},"React Calculator"),n.a.createElement(u.a,null,n.a.createElement(s.a,{className:"col-form-control"},n.a.createElement(v.a.Control,{onChange:function(){},value:t}),k&&n.a.createElement(v.a.Text,{className:"text-muted"},k))),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"secondary",operator:"(",onClick:y}),n.a.createElement(p,{variant:"secondary",operator:")",onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"%",onClick:y}),B?n.a.createElement(p,{variant:"warning",operator:"AC",onClick:j}):n.a.createElement(p,{variant:"warning",operator:"C",onClick:F})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:7,onClick:y}),n.a.createElement(p,{variant:"light",operator:8,onClick:y}),n.a.createElement(p,{variant:"light",operator:9,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"/",label:"\xf7",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:4,onClick:y}),n.a.createElement(p,{variant:"light",operator:5,onClick:y}),n.a.createElement(p,{variant:"light",operator:6,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"*",label:"\xd7",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:1,onClick:y}),n.a.createElement(p,{variant:"light",operator:2,onClick:y}),n.a.createElement(p,{variant:"light",operator:3,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"-",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:"0",onClick:y}),n.a.createElement(p,{variant:"light",operator:".",onClick:y}),n.a.createElement(p,{variant:"primary",operator:"=",onClick:O}),n.a.createElement(p,{variant:"secondary",operator:"+",label:"+",onClick:y}))),n.a.createElement("div",{className:"footer"},n.a.createElement("a",{href:"https://github.com/carlosrbta/react-calculator",target:"_blank",rel:"noopener noreferrer"},"Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.ada5743b.chunk.js.map