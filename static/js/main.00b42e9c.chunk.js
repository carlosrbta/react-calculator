(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),c=a.n(o),l=(a(21),a(8)),i=a(14),u=a(5),s=a(6),m=a(15);var p=function(e){var t=e.operator,a=e.label,r=e.variant,o=e.onClick;return n.a.createElement(s.a,null,n.a.createElement(m.a,{variant:r,block:!0,onClick:function(){return o(t)}},a||t))},v=a(7),f=[].concat(["1","2","3","4","5","6","7","8","9","0"],["(",")"],["+","-","*","/"],[".","=","Backspace","Escape","Enter","%"]),E=function e(t){if(/^[%*+/]/.test(t))throw new Error("Cannot start the expression with invalid operators");if(function(e){return e.match(new RegExp("^(\\d+(\\.\\d+)?|\\.\\d+) ?%$","i"))}(t))return d["/"](t,100);var a=t;return["%","*","/","+","-"].map((function(t){var r=h(a),n=r.findIndex((function(e){return e===t}));if(n>0){var o=r[n],c=r[n-1],l=r[n+1],i=d[o](c,l),u=c+""+o+l;"%"===o&&(u=c+"%"),a=a.replace(u,i),(n=r.findIndex((function(e){return e===t})))>=1&&(a=e(a))}return{}})),a},h=function(e){for(var t=e.split(""),a=["*","/","+","-"],r=[],n=0,o=0;o<t.length;o++){var c="0"===t[o],l="."===t[o],i="-"===t[o]&&0===o,u="-"===t[o]&&t[o-1]&&a.includes(t[o-1]);parseInt(t[o])||c||l||i||u?r[n]=(r[n]||"")+""+t[o]:(r[++n]=t[o],n++)}return r.filter((function(e){return e}))},k=function(e){var t=e.match(/([(])[^()]+[)]/);return t&&t[0]},d={"/":function(e,t){return parseFloat(e)/parseFloat(t)},"*":function(e,t){return parseFloat(e)*parseFloat(t)},"+":function(e,t){return parseFloat(e)+parseFloat(t)},"-":function(e,t){return parseFloat(e)-parseFloat(t)},"%":function(e,t){return t?parseFloat(e)/100:100/parseFloat(e)},"=":function(e,t){return t}};a(22);var C=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(!1),m=Object(l.a)(c,2),h=m[0],d=m[1],C=Object(r.useState)(!1),g=Object(l.a)(C,2),b=g[0],w=g[1];Object(r.useEffect)((function(){return window.addEventListener("keydown",x),function(){return window.removeEventListener("keydown",x)}}));var y=function(e){return N(e)},F=function(){o(""),w(!1),d(!1)},j=function(){var e=a.substring(0,a.length-1);o(e),d(!1)},O=function(){try{var e=a;e=function(e){for(var t=!0,a=e;t;){var r=k(a);if(!r)return t=!1,a;r=r.replace("(","").replace(")","");var n=E(r);a=a.replace("("+r+")",n)}return a}(e=function(e){return e.replace(/[0-9]\(/g,(function(e){return e.replace("(","*(")}))}(e)),e=E(e),o(e),w(!0)}catch(t){d(t.message)}},x=function(e){var t=e.key;f.includes(t)&&("Escape"!==t?"Backspace"!==t?"Enter"!==t?N(t):O():j():F())},N=function(e){var t="".concat(a).concat(e);o(t)},B=Object(r.useMemo)((function(){return b||!a}),[b,a]);return n.a.createElement(i.a,null,n.a.createElement(v.a,{className:"calculator"},n.a.createElement("h5",{className:"title"},"React Calculator"),n.a.createElement(u.a,null,n.a.createElement(s.a,{className:"col-form-control"},n.a.createElement(v.a.Control,{onChange:function(){},value:a}),h&&n.a.createElement(v.a.Text,{className:"text-muted"},h))),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"secondary",operator:"(",onClick:y}),n.a.createElement(p,{variant:"secondary",operator:")",onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"%",onClick:y}),B?n.a.createElement(p,{variant:"warning",operator:"AC",onClick:F}):n.a.createElement(p,{variant:"warning",operator:"C",onClick:j})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:7,onClick:y}),n.a.createElement(p,{variant:"light",operator:8,onClick:y}),n.a.createElement(p,{variant:"light",operator:9,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"/",label:"\xf7",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:4,onClick:y}),n.a.createElement(p,{variant:"light",operator:5,onClick:y}),n.a.createElement(p,{variant:"light",operator:6,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"*",label:"\xd7",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:1,onClick:y}),n.a.createElement(p,{variant:"light",operator:2,onClick:y}),n.a.createElement(p,{variant:"light",operator:3,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"-",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:"0",onClick:y}),n.a.createElement(p,{variant:"light",operator:".",onClick:y}),n.a.createElement(p,{variant:"primary",operator:"=",onClick:O}),n.a.createElement(p,{variant:"secondary",operator:"+",label:"+",onClick:y}))),n.a.createElement("div",{className:"footer"},n.a.createElement("a",{href:"https://github.com/carlosrbta/react-calculator",target:"_blank",rel:"noopener noreferrer"},"Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.00b42e9c.chunk.js.map