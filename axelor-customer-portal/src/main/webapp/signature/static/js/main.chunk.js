(this.webpackJsonpaxelor_signature=this.webpackJsonpaxelor_signature||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(5),i=n.n(c),s=(n(15),n(3)),u=n.n(s),l=n(1),d=n(6),f=n(2),p=n(7),h=n.n(p),v=(n(22),n(8)),b=n(9);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={};function O(e){var t=document.cookie||"";return t!==r&&(r=t,g=t.split("; ").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{})),g[e]}var y={Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest","X-CSRF-Token":O("CSRF-TOKEN")},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="".concat(e).lastIndexOf("/")===e.length-1?"":"/";return"".concat(e).concat(n).concat(t)},j=function(){function e(t){Object(v.a)(this,e);this.state={baseURL:"../",restURL:"".concat("../","ws/rest/"),actionURL:"".concat("../","ws/action/")}}return Object(b.a)(e,[{key:"request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";return fetch(e,w({method:n,headers:y,credentials:"include"},"GET"!==n&&{body:JSON.stringify(w({},t))})).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"doLogin",value:function(e,t){var n="".concat(this.state.baseURL,"login.jsp"),r={username:e,password:t};return fetch(n,{method:"POST",headers:y,credentials:"include",body:JSON.stringify(w({},r))})}},{key:"upload",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(o,c){var i=e.baseURL,s=new XMLHttpRequest,u=R(e.state.baseURL,"ws/files/upload"),l=function(){return n["X-File-Id"]?e.intercept((function(){return e.http.delete(R(e.baseURL,"ws/files/upload/"+n["X-File-Id"]))})):Promise.resolve(!0)};s.open("POST",u,!0),Object.keys(n).forEach((function(e){s.setRequestHeader(e,n[e])})),s.withCredentials=!0,s.overrideMimeType("application/octet-stream"),s.setRequestHeader("Content-Type","application/octet-stream"),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRF-Token",O("CSRF-TOKEN")),s.onload=function(){r(100)},a.abort=function(){return s.abort(),l()},s.onreadystatechange=function(){if(4===s.readyState)switch(s.status){case 401:throw this.callbackInterceptor(),new Error("Unauthorized");case 200:try{var e=JSON.parse(s.responseText);o({result:e,url:"".concat(i,"ws/rest/com.axelor.meta.db.MetaFile/").concat(e.id,"/content/download?v=0")})}catch(t){o(s.responseText)}break;default:l(),c({status:s.status})}},s.upload.onprogress=function(e){var t=n["X-File-Size"],o=parseFloat(n["X-File-Offset"])+e.loaded,c=Math.round(o/t*100);a.progress=c>95?"95%":c+"%",a.transfer=function(e,t){var n=function(e){return e>1e9?parseFloat(e/1e9).toFixed(2)+" GB":e>1e6?parseFloat(e/1e6).toFixed(2)+" MB":e>=1e3?parseFloat(e/1e3).toFixed(2)+" KB":e+" B"};return n(e||0)+"/"+n(t)}(o,t),a.loaded=o===t,e.lengthComputable&&r(e.loaded/e.total*100,a)},s.send(t)}))}},{key:"download",value:function(e){var t=R(this.state.baseURL,e);return fetch(t,{method:"GET",responseType:"blob",credentials:"include"})}},{key:"update",value:function(e,t){var n="".concat(this.state.restURL).concat(t),r={data:e};return this.request(n,r)}},{key:"delete",value:function(e,t){var n="".concat(this.state.restURL).concat(e,"/").concat(t);return this.request(n,{},"DELETE")}},{key:"get",value:function(e,t){var n="".concat(this.state.restURL).concat(e,"/").concat(t);return this.request(n,{},"GET")}},{key:"getAction",value:function(e,t,n){var r={model:e,action:t,data:n},a="".concat(this.state.actionURL);return this.request(a,r,"POST")}}]),e}(),E=function(e){return window._t&&"string"===typeof e?window._t(e):e};function k(e){return new Promise((function(t){e||t({status:0,message:"url must not be null"});var n=e.substring(e.lastIndexOf("/")+1),r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="blob",r.onload=function(){var e=r.response,a={name:n,type:e.type,size:e.size};t({status:1,file:a,blob:e})},r.send()}))}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"X-File-Name":"sign_".concat(Date.now()),"X-File-Offset":Math.min(0,e.size),"X-File-Size":e.size,"X-File-Type":e.type}}function x(e){return new Promise((function(t){k(e).then((function(e){if(1===e.status){var n=L(e.file);t({headers:n,blob:e.blob})}else t({status:0})}))}))}function F(e){return"ws/rest/com.axelor.meta.db.MetaFile/".concat(e,"/content/download?v=0")}function T(){return window.innerWidth<=800?window.innerWidth<=580?300:550:800}var S=function(){var e=new j,t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)(),c=Object(a.useState)(T()),i=Object(f.a)(c,2),s=i[0],p=i[1],v=Object(a.useState)(null),b=Object(f.a)(v,2),m=b[0],w=b[1],g=Object(a.useState)(T()),O=Object(f.a)(g,2),y=O[0],R=O[1];function k(){return(k=Object(d.a)(u.a.mark((function a(){var o,c,i,s,d,f,p,h,v,b;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=n.current.getCanvas().toDataURL(),a.next=3,x(o);case 3:return c=a.sent,i=c.blob,s=c.headers,a.next=8,e.upload(i,s);case 8:if(d=a.sent,!(f=d.result).id){a.next=20;break}return p=Object(l.a)({id:t.current.id,version:t.current.version},r.current.field,{id:f.id}),a.next=14,e.update(p,r.current.model);case 14:return(h=a.sent).data&&h.data[0]&&(t.current.version=h.data[0].version),a.next=18,e.getAction("com.axelor.apps.client.portal.db.PortalQuotation","action-client-portal-method-portal-quotation-confirm",{context:{id:m,signatureName:y}});case 18:for(v=window.top.document.getElementsByClassName("button-close"),b=0;b<v.length;b++)v[b]&&v[b].click();case 20:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return o.a.useEffect((function(){for(var a={},o=/[?&]([^=#]+)=([^&#]*)/g,c=window.location.href,i=o.exec(c);i;)a[i[1]]=i[2],i=o.exec(c);r.current=a,w(a.id),R(a.signatureName),e.get(a.model,a.id).then((function(r){if(r.data&&r.data[0]&&(t.current=r.data[0],t.current[a.field])){var o="".concat(t.current[a.field].id);e.download(F(o)).then((function(e){e.blob().then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result;n.current.fromDataURL(e)}}))}))}}))}),[e]),o.a.useEffect((function(){var e=function(){p(T())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),o.a.createElement("div",null,o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{ref:function(e){return n.current=e},canvasProps:{width:s,height:400,className:"sigCanvas"}})),o.a.createElement("div",{className:"action-buttons"},o.a.createElement("button",{type:"button",onClick:function(){return k.apply(this,arguments)},className:"save-button"},E("Save")),o.a.createElement("button",{type:"button",onClick:function(){return n.current.clear()},className:"clear-button"},E("Clear"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.chunk.js.map