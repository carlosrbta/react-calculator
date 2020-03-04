(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{16:function(e,a,t){e.exports=t(27)},22:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(12),c=t.n(o),l=(t(21),t(8)),i=t(14),u=t(5),s=t(6),m=t(15);var p=function(e){var a=e.operator,t=e.label,r=e.variant,o=e.onClick;return n.a.createElement(s.a,null,n.a.createElement(m.a,{variant:r,block:!0,onClick:function(){return o(a)}},t||a))},v=t(7),f=[].concat(["1","2","3","4","5","6","7","8","9","0"],["(",")"],["+","-","*","/"],[".","=","Backspace","Escape","Enter","%"]),E=function e(a){if(/^[%*+/]/.test(a))throw new Error("Cannot start the expression with invalid operators");if(function(e){return e.match(new RegExp("^(\\d+(\\.\\d+)?|\\.\\d+) ?%$","i"))}(a))return k["/"](a,100);var t=a;return["%","*","/","+","-"].map((function(a){var r=h(t),n=r.findIndex((function(e){return e===a}));if(n>0){var o=r[n],c=r[n-1],l=r[n+1],i=k[o](c,l),u=c+""+o+l;"%"===o&&(u=c+"%"),t=t.replace(u,i),(n=r.findIndex((function(e){return e===a})))>=1&&(t=e(t))}return{}})),t},h=function(e){for(var a=e.split(""),t=["*","/","+","-"],r=[],n=0,o=0;o<a.length;o++){var c="0"===a[o],l="."===a[o],i="-"===a[o]&&0===o,u="-"===a[o]&&a[o-1]&&t.includes(a[o-1]);parseInt(a[o])||c||l||i||u?r[n]=(r[n]||"")+""+a[o]:(r[++n]=a[o],n++)}return r.filter((function(e){return e}))},d=function(e){var a=e.match(/([(])[^()]+[)]/);return a&&a[0]},k={"/":function(e,a){return parseFloat(e)/parseFloat(a)},"*":function(e,a){return parseFloat(e)*parseFloat(a)},"+":function(e,a){return parseFloat(e)+parseFloat(a)},"-":function(e,a){return parseFloat(e)-parseFloat(a)},"%":function(e,a){return a?parseFloat(e)/100:100/parseFloat(e)},"=":function(e,a){return a}};t(22);var b=function(){var e=Object(r.useState)(""),a=Object(l.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)(!1),m=Object(l.a)(c,2),h=m[0],k=m[1],b=Object(r.useState)(!1),g=Object(l.a)(b,2),C=g[0],w=g[1];Object(r.useEffect)((function(){return window.addEventListener("keydown",x),function(){return window.removeEventListener("keydown",x)}}));var y=function(e){return N(e)},F=function(){o(""),w(!1),k(!1)},j=function(){var e=t.substring(0,t.length-1);o(e),k(!1)},O=function(){try{var e=t;e=function(e){for(var a=!0,t=e;a;){var r=d(t);if(!r)return a=!1,t;r=r.replace("(","").replace(")","");var n=E(r);t=t.replace("("+r+")",n)}return t}(e=function(e){return e.replace(/[0-9]\(/g,(function(e){return e.replace("(","*(")}))}(e)),e=E(e),o(e),w(!0)}catch(a){k(a.message)}},x=function(e){var a=e.key;f.includes(a)&&("Escape"!==a?"Backspace"!==a?"Enter"!==a?N(a):O():j():F())},N=function(e){var a="".concat(t).concat(e);o(a)},S=Object(r.useMemo)((function(){return C||!t}),[C,t]);return n.a.createElement(i.a,null,n.a.createElement(v.a,{className:"calculator"},n.a.createElement("h5",{className:"title"},"React Calculator"),n.a.createElement(u.a,null,n.a.createElement(s.a,{className:"col-form-control"},n.a.createElement(v.a.Control,{onChange:function(){},value:t}),h&&n.a.createElement(v.a.Text,{className:"text-muted"},h))),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"secondary",operator:"(",onClick:y}),n.a.createElement(p,{variant:"secondary",operator:")",onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"%",onClick:y}),S?n.a.createElement(p,{variant:"warning",operator:"AC",onClick:F}):n.a.createElement(p,{variant:"warning",operator:"C",onClick:j})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:7,onClick:y}),n.a.createElement(p,{variant:"light",operator:8,onClick:y}),n.a.createElement(p,{variant:"light",operator:9,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"/",label:"\xf7",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:4,onClick:y}),n.a.createElement(p,{variant:"light",operator:5,onClick:y}),n.a.createElement(p,{variant:"light",operator:6,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"*",label:"\xd7",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:1,onClick:y}),n.a.createElement(p,{variant:"light",operator:2,onClick:y}),n.a.createElement(p,{variant:"light",operator:3,onClick:y}),n.a.createElement(p,{variant:"secondary",operator:"-",onClick:y})),n.a.createElement(u.a,null,n.a.createElement(p,{variant:"light",operator:"0",onClick:y}),n.a.createElement(p,{variant:"light",operator:".",onClick:y}),n.a.createElement(p,{variant:"primary",operator:"=",onClick:O}),n.a.createElement(p,{variant:"secondary",operator:"+",label:"+",onClick:y}))),n.a.createElement("div",{className:"footer"},n.a.createElement("a",{className:"github-button",href:"https://github.com/carlosrbta/react-calculator","data-icon":"octicon-star","aria-label":"Star carlosrbta/react-calculator on GitHub"},"Star"),n.a.createElement("a",{className:"github-button",href:"https://github.com/carlosrbta","aria-label":"Follow @carlosrbta on GitHub"},"Follow @carlosrbta")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0bf5ac8d.chunk.js.map