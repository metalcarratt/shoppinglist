(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var c=e(1),i=e.n(c),o=e(6),s=e.n(o),r=e(7),l=e(5),u=(e(12),e(0));function a(){var t=Object(c.useState)(""),n=Object(l.a)(t,2),e=n[0],i=n[1],o=Object(c.useState)(["Milk","Bread","Bottled Water"]),s=Object(l.a)(o,2),a=s[0],j=s[1];return Object(u.jsxs)("div",{className:"shoppingList",children:[Object(u.jsx)("h1",{children:"Shopping List"}),Object(u.jsx)("ul",{children:a.map((function(t,n){return Object(u.jsxs)("li",{onClick:function(){return function(t){window.console.log("remove item ".concat(t," called")),j((function(n){return n.filter((function(n){return n!==t}))}))}(t)},children:[Object(u.jsx)("span",{className:"ordinal",children:n+1+". "}),Object(u.jsx)("span",{className:"title",children:t})]},t)}))}),Object(u.jsxs)("div",{className:"newItem",children:[Object(u.jsx)("input",{type:"text",value:e,onChange:function(t){i(t.target.value)},placeholder:"New Item"}),Object(u.jsx)("button",{onClick:function(){j((function(t){return[].concat(Object(r.a)(t),[e])})),i(""),window.console.log(a)},children:"Add"}),Object(u.jsx)("button",{onClick:function(){j((function(t){return t.filter((function(n,e){return e!==t.length-1}))}))},children:"Undo"})]})]})}var j=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(a,{})})},d=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,s=n.getTTFB;e(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.0ebef802.chunk.js.map