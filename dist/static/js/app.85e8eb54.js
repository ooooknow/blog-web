(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)i=u[l],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o={app:0},a=[];function u(e){return s.p+"static/js/"+({}[e]||e)+"."+{"chunk-1605a8ba":"1cf459cb","chunk-70c70d60":"5d2ed36f","chunk-f851fcf4":"20722858"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1605a8ba":1,"chunk-70c70d60":1,"chunk-f851fcf4":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-1605a8ba":"cc834681","chunk-70c70d60":"5b8ccf8a","chunk-f851fcf4":"4af6c431"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e),c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f6b":function(e,t,n){},1405:function(e,t,n){},"19bb":function(e,t,n){"use strict";var r=n("3392"),i=n.n(r);i.a},"19cc":function(e,t,n){},"321d":function(e,t,n){},3392:function(e,t,n){},"3d95":function(e,t,n){"use strict";var r=n("0f6b"),i=n.n(r);i.a},"49a2":function(e,t,n){"use strict";var r=n("19cc"),i=n.n(r);i.a},"529c":function(e,t,n){"use strict";var r=n("1405"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),i=(n("f5df"),n("a83d"),n("5c96")),o=n.n(i),a=(n("b20f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("router-view")],1)}),u=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showHeader?r("div",{staticClass:"header",attrs:{text:e.showHeader}},[r("div",{staticClass:"header-logo"},[r("router-link",{attrs:{to:"/login"}},[r("img",{attrs:{src:n("9d64"),alt:""}})])],1),e.isLogin?[r("breadcrumb",{staticClass:"header-breadcrumb"}),r("div",{staticClass:"header-menu"},[r("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[r("div",{staticClass:"avatar-wrapper"},[r("span",{staticClass:"user-name"},[e._v("你好 "+e._s(e.name)+" ")]),e.logo?r("img",{staticClass:"user-avatar",attrs:{src:e.logo,alt:""}}):e._e(),r("i",{staticClass:"el-icon-caret-bottom"})]),r("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[r("router-link",{staticClass:"inlineBlock",attrs:{to:e.homeUrl}},[r("el-dropdown-item",[e._v("首页")])],1),r("a",{attrs:{href:"JavaScript:;"},on:{click:e.logout}},[r("el-dropdown-item",{attrs:{divided:""}},[e._v("退出")])],1)],1)],1)],1)]:e._e(),e.isLogin?e._e():[r("div",{staticClass:"header-welcome"},[e._v("\n            "+e._s(e.headTitle)+"\n        ")]),r("div",{staticClass:"header-introduce"},[r("div",{staticClass:"introduce-item introduce-item__btn "},[r("div",{staticClass:"item-con"},[r("router-link",{attrs:{to:"/login"}},[e._v("\n                        管理店铺\n                    ")])],1)]),e._m(0),e._m(1)])]],2):e._e()},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"introduce-item introduce-item__text"},[n("div",{staticClass:"item-con"},[e._v("\n                    联系我们 020-31360569\n                ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"introduce-item introduce-item__text"},[n("div",{staticClass:"item-con"},[n("a",{attrs:{href:"//platform.maiduocbd.com"}},[e._v("\n                        了解麦垛麦\n                    ")])])])}],l=n("a34a"),d=n.n(l),f=n("2f62"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.levelList,(function(t,r){return n("el-breadcrumb-item",{key:t.path},["noRedirect"===t.redirect||r==e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v(e._s(t.meta.title))]):n("a",{on:{click:function(n){return n.preventDefault(),e.handleLink(t)}}},[e._v(e._s(t.meta.title))])])})),1)],1)},m=[],h=n("bd11"),v=n.n(h),b={data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){var e=this.$route.matched.filter((function(e){return e.meta&&e.meta.title}));this.levelList=e.filter((function(e){return e.meta&&e.meta.title&&!1!==e.meta.breadcrumb}))},isDashboard:function(e){var t=e&&e.name;return!!t&&t.trim().toLocaleLowerCase()==="dashboard".toLocaleLowerCase()},pathCompile:function(e){var t=this.$route.params,n=v.a.compile(e);return n(t)},handleLink:function(e){var t=e.redirect,n=e.path;t?this.$route.path!==t&&this.$router.push(t):this.$router.push(this.pathCompile(n))}}},g=b,S=(n("6f2b"),n("2877")),E=Object(S["a"])(g,p,m,!1,null,"2a1e8cb0",null),O=E.exports;function _(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,i)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){_(o,r,i,a,u,"next",e)}function u(e){_(o,r,i,a,u,"throw",e)}a(void 0)}))}}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I={components:{Breadcrumb:O},data:function(){return{homeUrl:"/"}},computed:A({},Object(f["b"])(["name","isLogin","headTitle","logo","roles","showHeader"])),methods:{logout:function(){var e=y(d.a.mark((function e(){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("user/LogOut");case 2:this.$router.push("/login?redirect=".concat(this.$route.fullPath));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},C=I,P=(n("9df9"),Object(S["a"])(C,s,c,!1,null,"5e6e1a06",null)),D=P.exports,k={name:"App",components:{AppHeader:D}},x=k,j=Object(S["a"])(x,a,u,!1,null,null,null),U=j.exports,L={headTitle:function(e){return e.app.headTitle},sidebar:function(e){return e.app.sidebar},device:function(e){return e.app.device},token:function(e){return e.user.token},isLogin:function(e){return e.user.isLogin},name:function(e){return e.user.name},userSiteId:function(e){return e.user.userSiteId},uid:function(e){return e.user.uid},codeUid:function(e){return e.user.codeUid},maiduoSiteId:function(e){return e.user.maiduoSiteId},maiduoUid:function(e){return e.user.maiduoUid},sourceUrlPrefix:function(e){return e.user.sourceUrlPrefix},packageEndTime:function(e){return e.user.packageEndTime},isExpire:function(e){return e.user.isExpire},roles:function(e){return e.user.roles},routers:function(e){return e.permission.routers},addRouters:function(e){return e.permission.addRouters},needActive:function(e){return e.user.needActive},logo:function(e){return e.user.logo},showHeader:function(e){return e.user.showHeader},freightDetail:function(e){return e.freight.freightDetail}},M=L,B=n("a78e"),R=n.n(B),N={sidebar:{opened:!R.a.get("sidebarStatus")||!!+R.a.get("sidebarStatus"),withoutAnimation:!1},headTitle:"",device:"desktop"},G={TOGGLE_SIDEBAR:function(e){e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1,e.sidebar.opened?R.a.set("sidebarStatus",1):R.a.set("sidebarStatus",0)},CLOSE_SIDEBAR:function(e,t){R.a.set("sidebarStatus",0),e.sidebar.opened=!1,e.sidebar.withoutAnimation=t},TOGGLE_DEVICE:function(e,t){e.device=t},SET_HEAD_TITLE:function(e,t){e.headTitle=t}},$={toggleSideBar:function(e){var t=e.commit;t("TOGGLE_SIDEBAR")},closeSideBar:function(e,t){var n=e.commit,r=t.withoutAnimation;n("CLOSE_SIDEBAR",r)},toggleDevice:function(e,t){var n=e.commit;n("TOGGLE_DEVICE",t)}},H={namespaced:!0,state:N,mutations:G,actions:$},q=n("bc3a"),K=n.n(q),F=K.a.create({baseURL:"//supply-uat.maiduocbd.com/api/"});F.defaults.withCredentials=!0,F.interceptors.request.use((function(e){return ot.getters.token&&(e.headers["Authorization"]=ot.getters.token),e}),(function(e){return Promise.reject(e)})),F.interceptors.response.use((function(e){return e.headers["content-type"]&&-1!==e.headers["content-type"].indexOf("text/html")?Promise.reject("登录失效，请重新登录！"):e.data}),(function(e){return e.response}));var J=F;function V(e){return J({url:"user/login",method:"post",data:e})}n("4328");function W(e){return J({url:"/admin/multstore/findRelation",method:"GET",params:e})}function z(e){return R.a.get(e)}function Q(e,t){return R.a.set(e,t)}function X(){var e=R.a.getJSON();for(var t in e)e.hasOwnProperty(t)&&R.a.remove(t);return R.a.getJSON()}var Z=n("8c4f"),Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:e.classObj},["mobile"===e.device&&e.sidebar.opened?n("div",{staticClass:"drawer-bg",on:{click:e.handleClickOutside}}):e._e(),n("sidebar",{staticClass:"sidebar-container"}),n("div",{staticClass:"main-container"},[n("app-main")],1)],1)},ee=[],te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[r("el-menu",{attrs:{"default-active":e.activeMenu,collapse:e.isCollapse,"background-color":e.variables.menuBg,"text-color":e.variables.menuText,"unique-opened":!1,"active-text-color":e.variables.menuActiveText,"collapse-transition":!1,mode:"vertical"}},e._l(e.routers,(function(e){return r("sidebar-item",{key:e.path,attrs:{item:e,"base-path":e.path}})})),1)],1),r("div",{staticClass:"submenu-sidebar",on:{click:e.toggleSideBar}},[r("div",{staticClass:"hamburger",staticStyle:{padding:"0 15px"}},[e.sidebar.opened?e._e():r("img",{attrs:{src:n("b93d"),alt:"open"}}),e.sidebar.opened?r("img",{attrs:{src:n("f801"),alt:"draw"}}):e._e(),r("span",[e._v("收起侧边栏")])])])],1)},ne=[],re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item.hidden?e._e():n("div",{staticClass:"menu-wrapper"},[!e.hasOneShowingChild(e.item.children,e.item)||e.onlyOneChild.children&&!e.onlyOneChild.noShowingChildren||e.item.alwaysShow?n("el-submenu",{ref:"subMenu",attrs:{index:e.resolvePath(e.item.path),"popper-append-to-body":""}},[n("template",{slot:"title"},[e.item.meta.icon?n("i",{staticClass:"iconfont svg-icon",class:e.item.meta.icon}):e._e(),e.item.meta.title?n("span",[e._v(e._s(e.item.meta.title))]):e._e()]),e._l(e.item.children,(function(t){return n("sidebar-item",{key:t.path,staticClass:"nest-menu",attrs:{"is-nest":!0,item:t,"base-path":e.resolvePath(t.path)}})}))],2):[e.onlyOneChild.meta?n("app-link",{attrs:{to:e.resolvePath(e.onlyOneChild.path)}},[n("el-menu-item",{class:{"submenu-title-noDropdown":!e.isNest},attrs:{index:e.resolvePath(e.onlyOneChild.path)}},[Object.assign({},e.item.meta,e.onlyOneChild.meta).icon?n("i",{staticClass:"iconfont svg-icon",class:Object.assign({},e.item.meta,e.onlyOneChild.meta).icon}):e._e(),Object.assign({},e.item.meta,e.onlyOneChild.meta).title?n("span",[e._v(e._s(Object.assign({},e.item.meta,e.onlyOneChild.meta).title)+" ")]):e._e()])],1):e._e()]],2)},ie=[],oe=n("df7c"),ae=n.n(oe);function ue(e){return/^(https?:|mailto:|tel:)/.test(e)}var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("component",e._b({},"component",e.linkProps(e.to),!1),[e._t("default")],2)},ce=[],le={props:{to:{type:String,required:!0}},methods:{linkProps:function(e){return ue(e)?{is:"a",href:e,target:"_blank",rel:"noopener"}:{is:"router-link",to:e}}}},de=le,fe=Object(S["a"])(de,se,ce,!1,null,null,null),pe=fe.exports,me={computed:{device:function(){return this.$store.state.app.device}},mounted:function(){this.fixBugIniOS()},methods:{fixBugIniOS:function(){var e=this,t=this.$refs.subMenu;if(t){var n=t.handleMouseleave;t.handleMouseleave=function(t){"mobile"!==e.device&&n(t)}}}}};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){be(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ge={name:"SidebarItem",components:{AppLink:pe},mixins:[me],props:{item:{type:Object,required:!0},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},data:function(){return this.onlyOneChild=null,{}},methods:{hasOneShowingChild:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,r=t.filter((function(t){return!t.hidden&&(e.onlyOneChild=t,!0)}));return 1===r.length||0===r.length&&(this.onlyOneChild=ve({},n,{path:"",noShowingChildren:!0}),!0)},resolvePath:function(e){return ue(e)?e:ue(this.basePath)?this.basePath:ae.a.resolve(this.basePath,e)}}},Se=ge,Ee=(n("49a2"),Object(S["a"])(Se,re,ie,!1,null,"5a776261",null)),Oe=Ee.exports,_e=n("cf1e"),ye=n.n(_e);function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(n,!0).forEach((function(t){Te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ie={components:{SidebarItem:Oe},computed:Ae({},Object(f["b"])(["sidebar","routers"]),{activeMenu:function(){var e=this.$route,t=e.meta,n=e.path;return t.activeMenu?t.activeMenu:n},variables:function(){return ye.a},isCollapse:function(){return!this.sidebar.opened}}),methods:{toggleSideBar:function(){this.$store.dispatch("app/toggleSideBar")}}},Ce=Ie,Pe=(n("3d95"),Object(S["a"])(Ce,te,ne,!1,null,"016ab04f",null)),De=Pe.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-scrollbar",{attrs:{"wrap-class":"app-main"}},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view",{key:e.key})],1)],1)},xe=[],je={name:"AppMain",computed:{key:function(){return this.$route.path}}},Ue=je,Le=(n("529c"),Object(S["a"])(Ue,ke,xe,!1,null,"f83bb42e",null)),Me=Le.exports,Be={name:"Layout",components:{Sidebar:De,AppMain:Me},computed:{sidebar:function(){return this.$store.state.app.sidebar},device:function(){return this.$store.state.app.device},classObj:function(){return{hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation}}},methods:{handleClickOutside:function(){this.$store.dispatch("app/closeSideBar",{withoutAnimation:!1})}}},Re=Be,Ne=(n("19bb"),Object(S["a"])(Re,Y,ee,!1,null,"b2891ad8",null)),Ge=Ne.exports;r["default"].use(Z["a"]);var $e=[{path:"/login",component:function(){return n.e("chunk-f851fcf4").then(n.bind(null,"d9c9"))},hidden:!0,meta:{roles:["noLogin"]}},{path:"/",component:Ge,redirect:"/dashboard",children:[{path:"dashboard",name:"Dashboard",component:function(){return n.e("chunk-1605a8ba").then(n.bind(null,"c937"))},meta:{title:"概览",icon:"preview"}}]},{path:"/404",component:function(){return n.e("chunk-70c70d60").then(n.bind(null,"8cdb"))},hidden:!0}],He=function(){return new Z["a"]({scrollBehavior:function(){return{y:0}},routes:$e})},qe=He();function Ke(){var e=He();qe.matcher=e.matcher}var Fe=qe;function Je(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,i)}function Ve(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){Je(o,r,i,a,u,"next",e)}function u(e){Je(o,r,i,a,u,"throw",e)}a(void 0)}))}}var We={isLogin:z("isLogin"),token:z("accountToken"),name:z("userName"),uid:z("uid"),codeUid:z("codeUid"),userSiteId:z("userSiteId"),maiduoSiteId:z("maiduoSiteId"),maiduoUid:z("maiduoUid"),sourceUrlPrefix:z("sourceUrlPrefix")||"http://profile.maiduocbd.com/",packageEndTime:z("packageEndTime"),isExpire:z("isExpire")||!1,roles:"",needActive:!1,logo:null,showHeader:!0},ze={SET_TOKEN:function(e,t){e.token=t,Q("accountToken",t)},SET_IS_LOGIN:function(e,t){e.isLogin=t,Q("isLogin",t)},SET_NAME:function(e,t){e.name=t,Q("userName",t)},SET_UID:function(e,t){e.uid=t,Q("uid",t)},SET_CODE_UID:function(e,t){e.codeUid=t,Q("codeUid",t)},SET_USERSITEID:function(e,t){e.userSiteId=t,Q("userSiteId",t)},SET_MAIDUOSITEID:function(e,t){e.maiduoSiteId=t,Q("maiduoSiteId",t)},SET_MAIDUOUID:function(e,t){e.maiduoUid=t,Q("maiduoUid",t)},SET_SOURCEURLPREFIX:function(e,t){e.sourceUrlPrefix=t,Q("sourceUrlPrefix",t)},SET_PACKAGE_ENDTIME:function(e,t){e.packageEndTime=t,Q("packageEndTime",t)},SET_IS_EXPIRE:function(e,t){e.isExpire=t,Q("isExpire",t)},SET_ROLES:function(e,t){e.roles=t},SET_NAAD_ACTIVE:function(e,t){e.needActive=t},SET_LOGO:function(e,t){e.logo=t},SET_SHOW_HEADER:function(e,t){e.showHeader=t}},Qe={Login:function(e,t){var n=e.commit,r=t.userName,i=t.password;return new Promise((function(e,t){V({UserName:r.trim(),Password:i}).then((function(t){if(t.result){var i=t.data.token;n("SET_TOKEN",i),n("SET_IS_LOGIN",!0),n("SET_NAME",r)}e(t)})).catch((function(e){t(e)}))}))},GetInfo:function(e){var t=e.commit;return new Promise((function(e,n){(void 0)().then((function(n){var r=n.model,i=r.siteId,o=r.account,a=r.maiduoSiteId,u=r.maiduoUid,s=r.needActive,c=r.expire,l=r.accountPackageEndTime,d=r.sourceUrlPrefix,f=r.accountGene,p=f.isMaiduoChidStore,m=f.isMaiduoSubStore,h=f.isMaiduoFlagship,v=f.supplier,b="flagship",g=o.unionId,S="";p&&m&&(b="branch",S=o.unionId),h&&m&&(b="flagship",S=r.uid),v&&m&&(b="supplier",S=o.unionId),t("SET_UID",g),t("SET_CODE_UID",S),t("SET_USERSITEID",i),t("SET_MAIDUOSITEID",a),t("SET_MAIDUOUID",u),t("SET_SOURCEURLPREFIX",d),t("SET_PACKAGE_ENDTIME",l),t("SET_IS_EXPIRE",c),t("SET_NAAD_ACTIVE",s),t("SET_ROLES",b),ot.dispatch("user/getShopInfo",g),e(r)})).catch((function(e){n(e)}))}))},getShopInfo:function(){var e=Ve(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.abrupt("return",new Promise((function(e,t){W({uid:n}).then((function(t){var n=t.model.result;null!==n&&r("SET_LOGO",We.sourceUrlPrefix+n.image),e(t)})).catch((function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),changHeader:function(){var e=Ve(d.a.mark((function e(t){var n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("SET_SHOW_HEADER",!We.showHeader);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),LogOut:function(e){var t=e.commit;t("SET_UID",""),t("SET_CODE_UID",""),t("SET_USERSITEID",""),t("SET_MAIDUOSITEID",""),t("SET_MAIDUOUID",""),t("SET_PACKAGE_ENDTIME",""),t("SET_IS_EXPIRE",!1),t("SET_NAAD_ACTIVE",""),t("SET_TOKEN",""),t("SET_LOGO",""),t("SET_NAME",""),t("SET_IS_LOGIN",""),t("SET_ROLES",[]),ot.commit("SET_ROUTERS",[]),X(),Ke()},ResetIsLogin:function(e){var t=e.commit;return new Promise((function(e){t("SET_NAME",""),t("SET_IS_LOGIN",""),t("SET_ROLES",[]),ot.commit("SET_ROUTERS",[]),X(),e()}))}},Xe={namespaced:!0,state:We,mutations:ze,actions:Qe};function Ze(e){var t={supplier:[],branch:[],flagship:[]};return t[e]}var Ye={state:{routers:$e,addRouters:[]},mutations:{SET_ROUTERS:function(e,t){e.addRouters=t,e.routers=$e.concat(t)}},actions:{GenerateRoutes:function(e,t){var n=e.commit;return new Promise((function(e){var r="";r=Ze(t),n("SET_ROUTERS",r),e()}))}}},et=Ye,tt={freightDetail:JSON.parse(sessionStorage.getItem("freightDetail"))||null},nt={SET_FREIGHT_DETAIL:function(e,t){e.freightDetail=t,sessionStorage.setItem("freightDetail",JSON.stringify(t))}},rt={state:tt,mutations:nt};r["default"].use(f["a"]);var it=new f["a"].Store({modules:{app:H,user:Xe,permission:et,freight:rt},getters:M}),ot=it,at=n("323e"),ut=n.n(at),st=(n("a5d8"),"隆赋药业管理后台");function ct(e){return e?"".concat(e," - ").concat(st):"".concat(st)}ut.a.configure({showSpinner:!1});var lt=["/login","/register/index","/register/supplier","/register/branchOffice","/register/store","/register/protocol","/register/supply","/approval/index","/404"];function dt(e){return dt="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(e)}function ft(e,t){if(0===arguments.length)return null;var n,r=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===dt(e)?n=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),n=new Date(e));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},o=r.replace(/{(y|m|d|h|i|s|a)+}/g,(function(e,t){var n=i[t];return"a"===t?["日","一","二","三","四","五","六"][n]:(e.length>0&&n<10&&(n="0"+n),n||0)}));return o}function pt(e,t){e=10===(""+e).length?1e3*parseInt(e):+e;var n=new Date(e),r=Date.now(),i=(r-n)/1e3;return t?ft(e,t):i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":void 0}function mt(e){var t=e/100,n=parseFloat(t);if(isNaN(n))return!1;var r=n.toString(),i=r.indexOf(".");i<0&&(i=r.length,r+=".");while(r.length<=i+2)r+="0";return r}function ht(e){var t=.7*e,n=t/100,r=Math.floor(100*n)/100;if(0===r)return r=.01,r;if(isNaN(r))return!1;var i=r.toString(),o=i.indexOf(".");o<0&&(o=i.length,i+=".");while(i.length<=o+2)i+="0";return i}Fe.beforeEach((function(e,t,n){-1===e.path.indexOf("/register/")&&(sessionStorage.removeItem("supplier"),sessionStorage.removeItem("branchOffice"),sessionStorage.removeItem("store")),ut.a.start(),document.title=ct(e.meta.title);var r=z("isLogin"),i=ot.getters.token;r&&i?"/login"===e.path?(n({path:"/"}),ut.a.done()):n():-1!==lt.indexOf(e.path)?n():(n("/login?redirect=".concat(e.path)),ut.a.done())})),Fe.afterEach((function(){ut.a.done()})),r["default"].use(o.a),r["default"].config.productionTip=!1,r["default"].prototype.$moneyFormat=mt,r["default"].prototype.$formatTime=pt,r["default"].prototype.$costPriceFormat=ht,r["default"].prototype.$currentDomain="//supply-uat.maiduocbd.com/api/",r["default"].prototype.userImagePath="http://profile.maiduocbd.com/",r["default"].prototype.currentImagePath="http://static.maiduocbd.com/",new r["default"]({el:"#app",router:Fe,store:ot,render:function(e){return e(U)}})},"62dc":function(e,t,n){},"6f2b":function(e,t,n){"use strict";var r=n("321d"),i=n.n(r);i.a},"9d64":function(e,t,n){e.exports=n.p+"static/img/logo.e2f072c2.png"},"9df9":function(e,t,n){"use strict";var r=n("62dc"),i=n.n(r);i.a},a83d:function(e,t,n){},b20f:function(e,t,n){e.exports={menuText:"#333",menuActiveText:"#333",subMenuActiveText:"#333",menuBg:"#fff",menuHover:"#fff3ec",subMenuBg:"#fff",subMenuHover:"#fff3ec",sideBarWidth:"200px",colorPrimary:"#ff8e42"}},b93d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAyklEQVQoU2NMS0vbycjIWDhz5sxrDGigoaGB6dmzZ9uxyTOmp6eH////v+Pfv3+2c+bMeYKuGZc8I0hhampqCSMjY8KvX79sFixY8AFdMzZ5sEao5j4GBgbDJ0+eeGzfvv0nFs0o8nCNDAwMjGlpactAGqSkpKIbGhr+oWlGkUfWyODp6ckuIyOzg4GB4fLs2bPz0G1FlqeKRphTGKWkpKLwOBUsjxw4vQwMDEZ4AgdFnvzogEXw79+/7ebPn/8YVwJAlwf5i6wkBwCNoqSTe7OwKQAAAABJRU5ErkJggg=="},cf1e:function(e,t,n){e.exports={menuText:"#333",menuActiveText:"#333",subMenuActiveText:"#333",menuBg:"#fff",menuHover:"#fff3ec",subMenuBg:"#fff",subMenuHover:"#fff3ec",sideBarWidth:"200px",colorPrimary:"#ff8e42"}},f801:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAABD0lEQVQoU52SvUrEUBCFzwhCglVQLC2tFGvfQEGxSiMkVrlJt8WCdRDWBxBBmZtCbFOoWKQR/EF9D9mQNrWCM7JixL0orDvt4Zs5M3MITqVpuqaqA2beBqC/6Osi0qefgjFmCcCjqvastRculCTJMhHdicjeNxjH8bznefcATpn52IWyLFsUkWcROSiK4vwTDMPQD4LgBsATM++7UBRFc77v3wK4YubBSKc8z2eapikBvDHzrruXMWZWVS+JqGbmtGtKSZIcAVit63qjqqpXd5ox5gzAQtu2O2VZvo+BRLQyHA43/wVOYpWIrlX1Zczq1MfpPH+94wHAycTv6OCpAtDBo8iJyKG1duuvyKlq/wMgOaqoMFjm8gAAAABJRU5ErkJggg=="}});