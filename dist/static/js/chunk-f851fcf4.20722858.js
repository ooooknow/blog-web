(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f851fcf4"],{a122:function(t,e,n){"use strict";var s=n("a559"),o=n.n(s);o.a},a559:function(t,e,n){t.exports={menuText:"#333",menuActiveText:"#333",subMenuActiveText:"#333",menuBg:"#fff",menuHover:"#fff3ec",subMenuBg:"#fff",subMenuHover:"#fff3ec",sideBarWidth:"200px",colorPrimary:"#ff8e42"}},d9c9:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-container-introduce"},[n("div",{staticClass:"introduce-desc"},[t._v("\n                hello\n            ")]),n("div",{staticClass:"introduce-foot"},[n("el-button",{staticClass:"to-supplier-btn"},[n("router-link",{attrs:{to:"/register/supplier"}},[t._v("hello")])],1)],1)]),n("el-form",{ref:"loginForm",staticClass:"login-container-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"login-form-img"}),n("el-form-item",{attrs:{prop:"userName"}},[n("span",{staticClass:"svg-container"},[n("i",{staticClass:"iconfont icon-yonghu"})]),n("el-input",{attrs:{"auto-complete":"on",name:"userName",placeholder:"请输入用户名",type:"text"},model:{value:t.loginForm.userName,callback:function(e){t.$set(t.loginForm,"userName",e)},expression:"loginForm.userName"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("i",{staticClass:"iconfont icon-mima"})]),n("el-input",{attrs:{type:t.pwdType,"auto-complete":"on",name:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin("loginForm")}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("i",{staticClass:"iconfont",class:"password"===t.pwdType?"icon-yanjing":"icon-chakanyanjingshishifenxi"})])],1),n("el-button",{staticClass:"login-btn",attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin("loginForm")}}},[t._v("登录 ")]),n("el-button",{staticClass:"login-btn",attrs:{type:"text"}},[n("router-link",{attrs:{to:"/register/index"}},[t._v("我要开店")])],1)],1)],1)])},o=[],i={name:"Login",data:function(){return{loginForm:{userName:"",password:""},loginRules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},loading:!1,pwdType:"password"}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="text":this.pwdType="password"},handleLogin:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.loading=!0,e.$store.dispatch("user/Login",e.loginForm).then((function(t){e.loading=!1,t.result?e.$router.push({path:"/dashboard"}):e.$message.error(t.msg||"登录失败，请重试！")})).catch((function(t){e.loading=!1}))}))}},mounted:function(){this.$store.commit("app/SET_HEAD_TITLE","欢迎登陆")}},a=i,r=(n("a122"),n("2877")),l=Object(r["a"])(a,s,o,!1,null,null,null);e["default"]=l.exports}}]);