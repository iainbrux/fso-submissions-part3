(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n.n(r),c=n(2),u=n.n(c),s=n(5),o=n(4),i=n(1),l=n(0),d=function(e){var t=e.text;return Object(l.jsx)("h2",{children:t})},b=function(e){var t=e.text,n=e.handleData,r=e.newData;return Object(l.jsxs)("div",{children:[t,Object(l.jsx)("input",{onChange:n,value:r})]})},j=function(e){var t=e.text,n=e.handleSubmit;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",onClick:n,children:t})})},f=function(e){var t=e.handleName,n=e.handleNumber,r=e.handleSubmit,a=e.newName,c=e.newNumber;return Object(l.jsxs)("form",{children:[Object(l.jsx)(b,{text:"name: ",handleData:t,newData:a}),Object(l.jsx)(b,{text:"number: ",handleData:n,newData:c}),Object(l.jsx)(j,{text:"add",handleSubmit:r})]})},h=function(e){var t=e.contact,n=e.deleteFromPhonebook,r=e.setFilterBy,a=Object(i.useState)(!1),c=Object(o.a)(a,2),u=c[0],s=c[1];return u?null:Object(l.jsxs)("li",{children:[t.name," ",t.number,Object(l.jsx)("button",{onClick:function(){n(t),s(!0),r("")},children:"delete"})]})},p=n(6),x=n.n(p),m="/api/persons",O={getContacts:function(){var e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(m);case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addContact:function(){var e=Object(s.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(m,t);case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateContact:function(){var e=Object(s.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.put("".concat(m,"/").concat(t.id),n);case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteContact:function(){var e=Object(s.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("".concat(m,"/").concat(t.id));case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){var t=e.successMessage;return null===t?null:Object(l.jsx)("div",{style:{border:"4px solid green",borderRadius:10,background:"lightgrey",color:"darkgreen",marginBottom:20},children:Object(l.jsx)("h3",{style:{marginLeft:20},children:t})})},g=function(e){var t=e.errorMessage;return null===t?null:Object(l.jsx)("div",{style:{border:"4px solid red",borderRadius:10,background:"lightgrey",color:"darkred",marginBottom:20},children:Object(l.jsx)("h3",{style:{marginLeft:20},children:t})})},w=function(e){var t=e.successMessage,n=e.errorMessage;return null!==t?Object(l.jsx)(v,{successMessage:t}):null!==n?Object(l.jsx)(g,{errorMessage:n}):null},k=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(""),c=Object(o.a)(a,2),j=c[0],p=c[1],x=Object(i.useState)(""),m=Object(o.a)(x,2),v=m[0],g=m[1],k=Object(i.useState)(""),y=Object(o.a)(k,2),C=y[0],S=y[1],D=Object(i.useState)(""),M=Object(o.a)(D,2),N=M[0],B=M[1],F=Object(i.useState)(null),L=Object(o.a)(F,2),E=L[0],J=L[1],P=Object(i.useState)(null),R=Object(o.a)(P,2),T=R[0],q=R[1];Object(i.useEffect)((function(){return O.getContacts().then((function(e){return B(e)}))}),[]);var A=function(){setTimeout((function(){J(null)}),5e3)},I=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=N.find((function(e){return e.name===t.name})))){e.next=14;break}if(!window.confirm("".concat(t.name," is already in the phonebook, replace old number with new one?"))){e.next=11;break}return e.next=5,O.updateContact(n,t).then((function(e){return B(N.map((function(t){return t.id!==n.id?t:e})))}));case 5:r(""),p(""),J("".concat(t.name," successfully updated in phonebook")),A(),e.next=12;break;case 11:alert("Cancelled change request.");case 12:e.next=15;break;case 14:return e.abrupt("return",O.addContact(t).then((function(e){p(""),r(""),B(N.concat(e)),J("".concat(t.name," successfully added to phonebook")),A()})));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.deleteContact(t).then((function(e){J("".concat(t.name," has been successfully deleted from the server")),A()})).catch((function(e){q("".concat(t.name," has already been deleted from the server")),setTimeout((function(){q(null)}),5e3)}));case 2:O.getContacts().then((function(e){return B(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{text:"Find a contact"}),Object(l.jsx)(w,{successMessage:E,errorMessage:T}),Object(l.jsx)(b,{text:"name: ",handleData:function(e){g(e.target.value);var t=N.filter((function(e){return e.name.toLowerCase().indexOf(v.toLowerCase())>=0})).map((function(e){return Object(l.jsx)(h,{contact:e,deleteFromPhonebook:z,setFilterBy:g},e.id)}));S(t)},newData:v}),Object(l.jsx)(d,{text:"Add a new contact"}),Object(l.jsx)(f,{handleName:function(e){r(e.target.value)},handleNumber:function(e){p(e.target.value)},handleSubmit:function(e){e.preventDefault(),I({name:n,number:j})},newName:n,newNumber:j}),Object(l.jsx)(d,{text:"numbers"}),Object(l.jsx)("div",{children:C})]})};a.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0e618258.chunk.js.map