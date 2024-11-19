(()=>{"use strict";var n={220:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'\nbody {\n    background-color: #f0f0f0;\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n\n.container {\n    width: 100%;\n    margin: 0 auto;\n    padding: 0 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n\n#addtask {\n    display: block;\n    width: 100%;\n    max-width: 440px;\n    margin: 20px 0;\n    padding: 20px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 0.5em;\n    font-weight: 700;\n}\n\n\n.project_container {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    margin: 20px 0;\n    padding: 20px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 0.5em;\n    font-weight: 700;\n}\n\n.project_title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.projectcollapse {\n    display: block;\n    height: 1.5em;\n}\n\n#input-container {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    align-items: center;\n    justify-content: center;\n}\n\n\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin: 15% auto;\n    padding: 20px;\n    background-color: #f0f0f0;\n    border: 1px solid #757575;\n    border-radius: 0.5em;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    max-width: 600px;\n    width: 50%;\n    text-align: center;\n}\n\n\n.tasks_container_show {\n    display: block;\n    max-height: 60vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n    width: 100%;\n    margin: 1vw auto;\n    scrollbar-width: thin;\n    scrollbar-color: transparent transparent;\n    box-sizing: border-box;\n}\n\n.tasks_container_show::-webkit-scrollbar {\n    width: 8px;\n}\n\n.tasks_container_show::-webkit-scrollbar-thumb {\n    background-color: transparent;\n}\n\n.tasks_container_show:hover::-webkit-scrollbar-thumb {\n    background-color: #292727;\n}\n\n\nselect, input[type="text"], input[type="date"] {\n    padding: 10px;\n    margin: 10px 0;\n    border: 1px solid #ccc;\n    border-radius: 0.5em;\n}\n\nlabel {\n    font-size: 1.2em;\n    margin: 10px 0;\n    align-self: flex-end;\n}\n\nbutton[type="submit"] {\n    padding: 10px;\n    margin: 10px 0;\n    border: 1px solid #ccc;\n    border-radius: 0.5em;\n    background-color: #f0f0f0;\n    cursor: pointer;\n    grid-column: span 2;\n}\n\n\ntable {\n    display: flex;\n    flex-direction: column;\n    width: 95%;\n    margin: 10px auto;\n    padding: 20px;\n    background-color: #fff;\n    border-radius: 0.5em;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    font-weight: 700;\n    outline: 1px solid #ccc;\n}\n\ntr {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 0.25fr 0.3fr;\n    border: 1px solid #ccc;\n}\n\nth, td {\n    padding: 10px;\n    border: 1px solid #ccc;\n    text-align: center;\n}\n\nth {\n    background-color: #f0f0f0;\n}\n\n#cancel-button {\n    background-color: #f44336;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n}',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),d=t.n(c),s=t(56),l=t.n(s),u=t(540),p=t.n(u),f=t(113),m=t.n(f),g=t(220),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(g.A,b),g.A&&g.A.locals&&g.A.locals;const h=document.getElementById("addtask"),v=document.getElementById("input-container"),x=document.getElementById("submit-button"),y=document.getElementById("tasks"),w=document.getElementById("task"),k=document.getElementById("description"),E=document.getElementById("dueDate"),I=document.getElementById("priority");let A=[];function _(){v.style.display="none"}class j{constructor(n,e,t,r){this.task=n,this.description=e,this.dueDate=t,this.priority=r}}function B(){w.value="",k.value="",E.value="",I.value="Low"}y.addEventListener("click",(n=>{if(n.target.classList.contains("remove-button")){const t=n.target.parentElement.parentElement;e=Array.from(y.children).indexOf(t),A.splice(e,1),document.getElementById(`task${e}`).remove(),document.querySelectorAll("#tasks tr").forEach(((n,e)=>{n.id=`task${e}`}))}var e})),h.addEventListener("click",(function(){v.style.display="flex"})),x.addEventListener("click",(n=>{n.preventDefault(),function(){const n=new j(w.value,k.value,E.value,I.value);A.push(n),function(n,e){const t=document.createElement("tr");t.id=`task${e}`,t.innerHTML=`\n        <td>${n.task}</td>\n        <td>${n.dueDate}</td>\n        <td>${n.description}</td>\n        <td>${n.priority}</td>\n        <td><input type="checkbox"></td>\n        <td><button class="remove-button">X</button></td>\n    `,y.appendChild(t)}(n,A.length-1),B(),_()}()})),document.getElementById("cancel-button").addEventListener("click",(n=>{n.preventDefault(),B(),_()}))})();