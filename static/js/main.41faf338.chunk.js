(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(21),a(8)),i=a(14),u=a(5),s=a(6),m=a(15);var p=function(e){var t=e.operator,a=e.label,n=e.variant,o=e.onClick;return r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:n,block:!0,onClick:function(){return o(t)}},a||t))},v=a(7),f=[].concat(["1","2","3","4","5","6","7","8","9","0"],["(",")"],["+","-","*","/"],[".","=","Backspace","Escape","Enter","%"]),E=function e(t){if(/^[%*+/]/.test(t))throw new Error("Cannot start the expression with invalid operators");if(function(e){return e.match(new RegExp("^(\\d+(\\.\\d+)?|\\.\\d+) ?%$","i"))}(t))return b["/"](t,100);var a=t;return["%","*","/","+","-"].map((function(t){var n=h(a),r=n.findIndex((function(e){return e===t}));if(r>0){var o=n[r],c=n[r-1],l=n[r+1],i=b[o](c,l),u=c+""+o+l;"%"===o&&(u=c+"%"),a=a.replace(u,i),(r=n.findIndex((function(e){return e===t})))>=1&&(a=e(a))}return{}})),a},h=function(e){for(var t=e.split(""),a=["*","/","+","-"],n=[],r=0,o=0;o<t.length;o++){var c="0"===t[o],l="."===t[o],i="-"===t[o]&&0===o,u="-"===t[o]&&t[o-1]&&a.includes(t[o-1]);parseInt(t[o])||c||l||i||u?n[r]=(n[r]||"")+""+t[o]:(n[++r]=t[o],r++)}return n.filter((function(e){return e}))},k=function(e){var t=e.match(/([(])[^()]+[)]/);return t&&t[0]},b={"/":function(e,t){return parseFloat(e)/parseFloat(t)},"*":function(e,t){return parseFloat(e)*parseFloat(t)},"+":function(e,t){return parseFloat(e)+parseFloat(t)},"-":function(e,t){return parseFloat(e)-parseFloat(t)},"%":function(e,t){return t?parseFloat(e)/100:100/parseFloat(e)},"=":function(e,t){return t}};a(22);var d=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),m=Object(l.a)(c,2),h=m[0],b=m[1],d=Object(n.useState)(!1),g=Object(l.a)(d,2),C=g[0],w=g[1];Object(n.useEffect)((function(){return window.addEventListener("keydown",x),function(){return window.removeEventListener("keydown",x)}}));var y=function(e){return N(e)},F=function(){o(""),w(!1),b(!1)},j=function(){var e=a.substring(0,a.length-1);o(e),b(!1)},O=function(){try{var e=a;e=function(e){for(var t=!0,a=e;t;){var n=k(a);if(!n)return t=!1,a;n=n.replace("(","").replace(")","");var r=E(n);a=a.replace("("+n+")",r)}return a}(e=function(e){return e.replace(/[0-9]\(/g,(function(e){return e.replace("(","*(")}))}(e)),e=E(e),o(e),w(!0)}catch(t){b(t.message)}},x=function(e){var t=e.key;f.includes(t)&&("Escape"!==t?"Backspace"!==t?"Enter"!==t?N(t):O():j():F())},N=function(e){var t="".concat(a).concat(e);o(t)},S=Object(n.useMemo)((function(){return C||!a}),[C,a]);return r.a.createElement(i.a,null,r.a.createElement(v.a,{className:"calculator"},r.a.createElement("h5",{className:"title"},"React Calculator"),r.a.createElement(u.a,null,r.a.createElement(s.a,{className:"col-form-control"},r.a.createElement(v.a.Control,{onChange:function(){},value:a}),h&&r.a.createElement(v.a.Text,{className:"text-muted"},h))),r.a.createElement(u.a,null,r.a.createElement(p,{variant:"secondary",operator:"(",onClick:y}),r.a.createElement(p,{variant:"secondary",operator:")",onClick:y}),r.a.createElement(p,{variant:"secondary",operator:"%",onClick:y}),S?r.a.createElement(p,{variant:"warning",operator:"AC",onClick:F}):r.a.createElement(p,{variant:"warning",operator:"C",onClick:j})),r.a.createElement(u.a,null,r.a.createElement(p,{variant:"light",operator:7,onClick:y}),r.a.createElement(p,{variant:"light",operator:8,onClick:y}),r.a.createElement(p,{variant:"light",operator:9,onClick:y}),r.a.createElement(p,{variant:"secondary",operator:"/",label:"\xf7",onClick:y})),r.a.createElement(u.a,null,r.a.createElement(p,{variant:"light",operator:4,onClick:y}),r.a.createElement(p,{variant:"light",operator:5,onClick:y}),r.a.createElement(p,{variant:"light",operator:6,onClick:y}),r.a.createElement(p,{variant:"secondary",operator:"*",label:"\xd7",onClick:y})),r.a.createElement(u.a,null,r.a.createElement(p,{variant:"light",operator:1,onClick:y}),r.a.createElement(p,{variant:"light",operator:2,onClick:y}),r.a.createElement(p,{variant:"light",operator:3,onClick:y}),r.a.createElement(p,{variant:"secondary",operator:"-",onClick:y})),r.a.createElement(u.a,null,r.a.createElement(p,{variant:"light",operator:"0",onClick:y}),r.a.createElement(p,{variant:"light",operator:".",onClick:y}),r.a.createElement(p,{variant:"primary",operator:"=",onClick:O}),r.a.createElement(p,{variant:"secondary",operator:"+",label:"+",onClick:y}))),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"github-button",href:"https://github.com/ntkme/github-buttons","data-icon":"octicon-star","aria-label":"Star ntkme/github-buttons on GitHub"},"Star"),r.a.createElement("a",{className:"github-button",href:"https://github.com/carlosrbta","aria-label":"Follow @carlosrbta on GitHub"},"Follow @carlosrbta")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.41faf338.chunk.js.map