(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"38b6":function(t,e,a){"use strict";a("3a79")},"3a79":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),n("img",{attrs:{src:a("cf05"),width:"250",alt:"logo",id:"logo"}}),n("Main"),t._m(0),t._m(1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"caption"}},[t._v("このアプリはブラウザの機能のみで動作するため、"),a("br"),t._v("画像がサーバにアップロードされることはありません。"),a("br"),t._v(" This app works on only your browser then it will not upload the chosen image uploaded to any servers.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"copyright"}},[t._v("Gakubuchi v1.0, Created by "),a("a",{attrs:{href:"https://twitter.com/VienosNotes"}},[t._v("@VienosNotes")]),t._v(", "),a("a",{attrs:{href:"https://github.com/VienosNotes/Gakubuchi"}},[t._v("Documents in Github")])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-frame"},[t._m(0),a("div",{attrs:{id:"buttons-container"}},[a("label",{staticClass:"label-button",attrs:{id:"open-button"}},[a("span",{staticClass:"material-icons button-icon"},[t._v(" add_photo_alternate ")]),a("span",[t._v("Open")]),a("input",{attrs:{type:"file",id:"orig-image-selector",name:"Choose",accept:"image/*"},on:{input:t.initImages}})]),a("label",{staticClass:"label-button",attrs:{id:"save-button"},on:{click:t.save}},[a("span",{staticClass:"material-icons button-icon"},[t._v(" save_alt ")]),a("span",[t._v("Save")])])]),a("div",{attrs:{id:"palette-container"}},[a("div",{staticClass:"palette"},[a("compact-picker",{attrs:{id:"picker"},model:{value:t.background,callback:function(e){t.background=e},expression:"background"}})],1),a("div",[a("Checkbox",{attrs:{color:t.primaryColor},model:{value:t.shadow,callback:function(e){t.shadow=e},expression:"shadow"}},[t._v("Drop shadow")])],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-container",attrs:{id:"orig-image-container"}},[a("canvas",{attrs:{id:"square-canvas",width:"500",height:"500"}})])}],l=a("724e"),c=a.n(l),h=a("c345"),u=a("73ae"),d=a.n(u);const p=1500,g=.04,f=1080,m="#00000066",v=.01,b=.02;var w={name:"Main",components:{"compact-picker":h["Compact"],Checkbox:d.a},props:{msg:String},data(){return{image:Image,background:{hex:"#ffffff"},shadow:!0,primaryColor:"#880000"}},watch:{background(){let t=this.origCanvas;this.drawImage(this.origCtx,this.image,t.width,t.height)},shadow(){let t=this.origCanvas;this.drawImage(this.origCtx,this.image,t.width,t.height)}},mounted(){let t=window.visualViewport.width;t<=p&&this.applySpStyle(t);let e=this.origCtx,a=new Image;a.addEventListener("load",()=>{this.image=a,this.drawImage(e,a,this.origCanvas.width,this.origCanvas.height)}),a.src=c.a},methods:{initImages(t){let e=t.currentTarget.files[0],a=new FileReader;a.addEventListener("load",t=>{let e=t.target.result,a=new Image;a.addEventListener("load",()=>{this.image=a,this.drawImage(this.origCtx,a,this.origCanvas.width,this.origCanvas.height)}),a.src=e}),a.readAsDataURL(e)},drawImage(t,e,a,n){if(t.shadowColor="#00000000",t.clearRect(0,0,a,n),t.fillStyle=this.background.hex,t.fillRect(0,0,a,n),this.shadow&&(t.shadowColor=m,t.shadowOffsetX=v*a,t.shadowOffsetY=v*n,t.shadowBlur=b*a),e.width>e.height){let i=a*(1-2*g),r=i*(e.height/e.width),o=(n-r)/2;t.drawImage(e,a*g,o,i,r)}else{let i=n*(1-2*g),r=i*(e.width/e.height),o=(a-r)/2;t.drawImage(e,o,n*g,r,i)}},applySpStyle(t){let e=Math.min(.7*t,500);this.origCanvas.width=e,this.origCanvas.height=e},save(){let t=f;setTimeout(()=>{let e=document.createElement("canvas");e.width=t,e.height=t;let a=e.getContext("2d");this.drawImage(a,this.image,e.width,e.height),e.toBlob(t=>{let e=URL.createObjectURL(t),a=document.createElement("a");a.href=e;let n=new Date(Date.now());a.download=`gakubuchi_${n.getFullYear()}${n.getMonth()}${n.getDate()}_${n.getHours()}${n.getMinutes()}${n.getSeconds()}.png`,a.click(),URL.revokeObjectURL(e)})},500)}},computed:{origCtx(){let t=this.origCanvas;return t.getContext("2d")},origCanvas(){return document.getElementById("square-canvas")}}},_=w,y=(a("38b6"),a("2877")),C=Object(y["a"])(_,o,s,!1,null,null,null),k=C.exports,x={name:"App",components:{Main:k}},O=x,I=(a("7faf"),Object(y["a"])(O,i,r,!1,null,null,null)),j=I.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(j)}).$mount("#app")},"724e":function(t,e,a){t.exports=a.p+"img/test.2daf1ebb.jpg"},"7faf":function(t,e,a){"use strict";a("b8ff")},b8ff:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.7db6836c.png"}});
//# sourceMappingURL=app.a19ba801.js.map