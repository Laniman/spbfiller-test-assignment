(this["webpackJsonpspbfiller-test-assignment"]=this["webpackJsonpspbfiller-test-assignment"]||[]).push([[0],{16:function(e,t,n){e.exports={page:"page_page__2koG9"}},19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=(n(24),n(2)),u=n(4),l=Object(u.b)({name:"page",initialState:{width:400,height:400}}),d=function(e){return e.page},h=n(16),g=n.n(h);function m(e){var t=e.children,n=Object(c.c)(d);return a.a.createElement("div",{className:g.a.page,style:{width:"".concat(n.width,"px"),height:"".concat(n.height,"px")}},t)}var s=n(17),f=n.n(s),p=n(6),b=n.n(p),w=n(18),v=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},E=function(e,t){var n="000000000"+e;return n.substr(n.length-t)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.excludeColors,n=void 0===t?[]:t,r=function e(){var t=E(v(0,255).toString(16),2),r=E(v(0,255).toString(16),2),a=E(v(0,255).toString(16),2),o="#".concat(t).concat(r).concat(a);return n.includes((function(e){return e===o}))?e():o};return r()},x=function(e){var t=e.pageSize,n=v(40,100),r=v(40,100);return{id:Object(w.a)(),width:n,height:r,backgroundColor:y({excludeColors:["#d8d8d8"]}),x:v(0,t.width-n),y:v(0,t.height-r)}},k=Object(u.b)({name:"elements",initialState:[],reducers:{renew:function(e,t){return t.payload},updatePosition:function(e,t){var n=t.payload,r=e.find((function(e){return e.id===n.id}));r&&(r.x=n.x,r.y=n.y)}}}),S=k.actions,C=S.updatePosition,j=S.renew,O=function(e){return e.elements},_=a.a.memo((function(e){var t=e.width,n=e.height,r=e.backgroundColor;return a.a.createElement("div",{style:{width:t,height:n,backgroundColor:r}})})),N=a.a.memo((function(e){var t=e.id,n=e.width,r=e.height,o=e.backgroundColor,i=e.x,u=e.y,l=a.a.useRef(null),d=Object(c.b)(),h=a.a.useCallback((function(e,t){var n=t.node,r=t.x,a=t.y;d(C({id:Number(n.dataset.id),x:r,y:a}))}),[d]),g=a.a.createElement("div",{className:b.a["draggable-rectangle"],ref:l,"data-id":t},a.a.createElement(_,{width:n,height:r,backgroundColor:o}));return a.a.createElement(f.a,{bounds:"parent",defaultPosition:{x:i,y:u},nodeRef:l,onStop:h},g)}),(function(){return!0})),M=function(){return Object(c.c)(O).map((function(e){return a.a.createElement(N,{key:e.id,id:e.id,width:e.width,height:e.height,x:e.x,y:e.y,backgroundColor:e.backgroundColor})}))},z=function(){var e=Object(c.b)(),t=Object(c.c)(O);return a.a.createElement("form",{className:b.a.form,onSubmit:function(t){t.preventDefault();var n=new FormData(t.currentTarget),r=Number(n.get("count"));e(function(e){return function(t,n){var r=n().page,a=Array.from({length:e},(function(){return x({pageSize:{width:r.width,height:r.height}})}));t(j(a))}}(r))}},a.a.createElement("input",{defaultValue:t.length,name:"count",type:"text",inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off"}),a.a.createElement("button",null,"GENERATE"))};function A(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null,a.a.createElement(M,null)),a.a.createElement(z,null))}var J={width:400,height:400},P=Array.from({length:100},(function(){return x({pageSize:{width:J.width,height:J.height}})})),R=Object(u.a)({reducer:{page:l.reducer,elements:k.reducer},preloadedState:{page:J,elements:P}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:R},a.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports={"draggable-rectangle":"elements_draggable-rectangle__1IpQo",form:"elements_form__3Jw7j"}}},[[19,1,2]]]);
//# sourceMappingURL=main.b4f44867.chunk.js.map