(this["webpackJsonpnew-project"]=this["webpackJsonpnew-project"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,o=n(0),r=n(1),a=n.n(r),i=n(4),s=n.n(i),l=(n(10),n(2));n(11),n(12);var u=function(){return new Promise((function(e,t){c.transaction(["heroes"],"readonly").objectStore("heroes").getAll().onsuccess=function(t){var n=t.target.result;n?e(n):console.log("note 1 not found")}}))},d=function(e){var t=e.target.dataset.name,n=c.transaction(["heroes"],"readwrite").objectStore("heroes"),o=n.index("name").getKey(t);o.onsuccess=function(e){var t=o.result;n.delete(t).onsuccess=function(){console.log("item has been deleted")}}},m=function(){var e=c.transaction(["heroes"],"readwrite").objectStore("heroes"),t=document.getElementById("fileImg");e.put(t.files[0],"img"),e.get("img").onsuccess=function(e){var t=e.target.result,n=(window.URL||window.webkitURL).createObjectURL(t);document.getElementById("temp_img").setAttribute("src",n)}};!function(e,t){var n=new XMLHttpRequest;n.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(n.response)},n.open("GET",e),n.responseType="blob",n.send()}("https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0",(function(e){console.log("RESULT:",e)}));var b=function(e){e.db;var t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(""),d=Object(l.a)(s,2),b=d[0],j=d[1],f=Object(r.useState)(""),p=Object(l.a)(f,2),g=p[0],h=p[1],O={name:a,email:b,pass:g};return Object(o.jsx)("div",{className:"temp_form_container",children:Object(o.jsxs)("form",{className:"temp_form_block",children:[Object(o.jsx)("img",{id:"temp_img",className:"temp_img",src:"",alt:""}),Object(o.jsx)("input",{onChange:m,id:"fileImg",type:"file",multiple:"multiple",placeholder:"file",name:"file"}),Object(o.jsx)("input",{onChange:function(e){return i(e.target.value)},type:"text",placeholder:"name",name:"name"}),Object(o.jsx)("input",{onChange:function(e){return j(e.target.value)},type:"text",placeholder:"email",name:"email"}),Object(o.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"text",placeholder:"password",name:"password"}),Object(o.jsxs)("div",{className:"temp_btn_block",children:[Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),function(e){var t=c.transaction(["heroes"],"readwrite");t.objectStore("heroes").add(e),t.oncomplete=function(){console.log("heroes has been added...!")},t.onerror=function(e){alert("already exist "+e.target.errorCode)}}(O)},id:"temp_btn_add",children:"ADD"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),u()},id:"temp_btn_remove",children:"REMOVE"}),Object(o.jsx)("button",{onClick:function(){var e="base64",t=btoa(e),n=atob(t);console.log(e),console.log(t),console.log(n)},id:"temp_btn_change",children:"CHANGE"})]})]})})},j=(n(13),function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){u().then((function(e){return c(e)}))}),[]),Object(o.jsx)("div",{className:"item_container",children:n.slice(0,n.length-1).map((function(e){return Object(o.jsxs)("div",{className:"item_box",children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("p",{children:e.email}),Object(o.jsx)("button",{onClick:d,"data-name":e.name,children:"remove"})]},e.email)}))})});var f=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){new Promise((function(e,t){var n=indexedDB.open("myDB",1);n.onupgradeneeded=function(e){if(!(c=e.target.result).objectStoreNames.contains("heroes")){var t=c.createObjectStore("heroes",{autoIncrement:!0});t.createIndex("name","name",{unique:!1}),t.createIndex("email","email",{unique:!0})}},n.onsuccess=function(t){c=t.target.result,e(c)},n.onerror=function(e){alert("error opening database "+e.target.errorCode)}})).then((function(e){a(!0)}))})),Object(o.jsx)("div",{className:"App",children:1==n?Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(b,{}),Object(o.jsx)(j,{})]}):Object(o.jsx)("h5",{children:"Waiting..."})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),p()}],[[14,1,2]]]);
//# sourceMappingURL=main.96036016.chunk.js.map