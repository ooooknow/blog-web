(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70c70d60"],{1811:function(t,e,n){"use strict";var r=n("8c61"),i=n.n(r);i.a},"3dfc":function(t,e,n){t.exports=n.p+"static/img/404.4abe2ac4.png"},"8c61":function(t,e,n){},"8cdb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-container"},[n("div",{staticClass:"error-con",style:{"min-height":t.minHeight+"px"}},[n("div",{staticClass:"error-tips"},[t._m(0),n("div",{staticClass:"error-tips-text"},[t._v("\n                出错啦,找不到您请求的页面...\n            ")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.replace("/login")}}},[t.isLogin?n("span",[t._v("\n                    前往首页\n                ")]):t._e(),t.isLogin?t._e():n("span",[t._v("前往登录页")])])],1)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-tips-img"},[r("img",{attrs:{src:n("3dfc"),alt:"404"}})])}],c=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"Page404",data:function(){return{homeURL:"/",minHeight:0}},computed:s({},Object(c["b"])(["isLogin"])),methods:{setMinHeight:function(){var t=this,e=document.getElementById("appFooter").clientHeight,n=64,r=document.documentElement.clientHeight-e-n;this.minHeight=r<=440?440:r,window.onresize=function(){var r=document.documentElement.clientHeight-e-n;t.minHeight=r<=440?440:r}}},mounted:function(){this.setMinHeight()}},l=u,p=(n("1811"),n("2877")),f=Object(p["a"])(l,r,i,!1,null,"33f9900d",null);e["default"]=f.exports}}]);