(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{13:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(3),r=n.n(s),o=n(8),a=(n(13),n(2)),d=n(4),l=Object(d.b)({name:"items",initialState:["Milk","Bread","Bottled Water"],reducers:{addItem:function(e,t){e.push(t.payload)},undo:function(e){e.pop()},removeItem:function(e,t){e.splice(e.indexOf(t.payload),1)}}}),u=l.actions,j=u.addItem,b=u.undo,p=u.removeItem,h=l.reducer,O=n(1);function m(){var e=Object(a.c)((function(e){return e.items})),t=Object(a.b)(),n=Object(c.useState)(""),i=Object(o.a)(n,2),s=i[0],r=i[1];return Object(O.jsxs)("div",{className:"shoppingList",children:[Object(O.jsx)("h1",{children:"Shopping List"}),Object(O.jsx)("ul",{children:e.map((function(e,n){return Object(O.jsxs)("li",{onClick:function(){return t(p(e))},children:[Object(O.jsx)("span",{className:"ordinal",children:n+1+". "}),Object(O.jsx)("span",{className:"title",children:e})]},e)}))}),Object(O.jsxs)("div",{className:"newItem",children:[Object(O.jsx)("input",{type:"text",value:s,onChange:function(e){r(e.target.value)},placeholder:"New Item"}),Object(O.jsx)("button",{onClick:function(){t(j(s)),r("")},children:"Add"}),Object(O.jsx)("button",{onClick:function(){return t(b())},children:"Undo"})]})]})}var f=Object(d.a)({reducer:{items:h}});var x=function(){return Object(O.jsx)(a.a,{store:f,children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(m,{})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.31e69dae.chunk.js.map