(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bindPhone/index"],{"048b":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t("6f4a"),a={name:"bindphone",data:function(){return{disabled:!0,getCode:!1,time:0,code:"",params:{phone:"",code:""}}},methods:{GetCodes:function(){var e=this;this.isPhone({phone:this.params.phone,action:1},function(t){(0,o.sendPhoneMsg)(t).then(function(t){if(!t.data.code){e.getCode=!0,e.time=60;var o=setInterval(function(){e.time--,e.time||(clearInterval(o),e.time=0,e.getCode=!1)},1e3);e.code=t.data.mcode,n.showToast({icon:"none",title:t.data.msg})}})})},BindPhone:function(){var e=this;this.isPhone({},function(){e.code&&e.code===e.params.code?n.redirectTo({url:"/packageB/pages/dataEdition/index?phone="+e.params.phone}):n.showToast({icon:"none",title:"请输入正确的验证码"})})},isPhone:function(e,t){var o=/^[1][3,4,5,7,8][0-9]{9}$/;o.test(this.params.phone)?t(e):n.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1})}}};e.default=a}).call(this,t("543d")["default"])},7774:function(n,e,t){},"7c1c":function(n,e,t){"use strict";var o=t("7774"),a=t.n(o);a.a},a634:function(n,e,t){"use strict";t.r(e);var o=t("b180"),a=t("fa21");for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);t("7c1c");var c=t("2877"),u=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},a908:function(n,e,t){"use strict";(function(n){t("ad72"),t("921b");o(t("66fd"));var e=o(t("a634"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},b180:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},fa21:function(n,e,t){"use strict";t.r(e);var o=t("048b"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);e["default"]=a.a}},[["a908","common/runtime","common/vendor"]]]);