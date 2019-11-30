(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/home/children/vidoeview"],{"0c0a":function(e,t,n){"use strict";n.r(t);var u=n("c068"),i=n("8b75");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("2d19");var r=n("2877"),a=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,"27e23c02",null);t["default"]=a.exports},"0e09":function(e,t,n){},"2d19":function(e,t,n){"use strict";var u=n("0e09"),i=n.n(u);i.a},"672b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n("6f4a"),i={name:"vidwoview",props:{data:{type:Object,required:!0}},data:function(){return{vid:"",url:""}},methods:{VideoDetail:function(){var t=this;(0,u.getVideo)(this.vid).then(function(e){console.log(e)});var n=this.vid;e.request({url:"https://vv.video.qq.com/getinfo?vid="+n+"&platform=101001&charge=0&otype=json",method:"get",success:function(e){var n=e.data.replace(/QZOutputJson=/,"")+"qwe",u=n.replace(/;qwe/,""),i=JSON.parse(u),o=i.vl.vi[0].ul.ui[0].url,r=o.replace(/http/,"https"),a=i.vl.vi[0].fn,c=i.vl.vi[0].fvkey,l=r+a+"?vkey="+c;console.log(l),t.url=l}})}}};t.default=i}).call(this,n("543d")["default"])},"8b75":function(e,t,n){"use strict";n.r(t);var u=n("672b"),i=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=i.a},c068:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/home/children/vidoeview-create-component',
    {
        'components/home/children/vidoeview-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0c0a"))
        })
    },
    [['components/home/children/vidoeview-create-component']]
]);                
