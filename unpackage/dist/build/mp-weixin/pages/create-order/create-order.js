(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/create-order/create-order"],{"15a2":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("2f62"),o=a("6f4a"),r=n(a("8e2b")),s=a("478a");function n(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),i.forEach(function(t){d(e,t,a[t])})}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{nodes1:"",send_type:0,is_virtual_shop:0,rcount:0,totalprice:0,pay_type:"",actionSheetHidden:!0,address:{id:"",name:""},isloaded:!1,password:"",passwordInputHidden:!0,sendData:"",inputPassword:"",isloading:!0,sendMoney:"",message:"",pidArr:"",conponData:"",couponKeyid:"",couponMoney:"",couponNeedMoney:"",ofCoupon:!1,pickup:"0",storeId:"",storeName:"",sendstyle:"",cart:[],cart_show:!1,baseURL:s.baseURL,remark:"",getExplain:"",groupState:!1,grouptype:"",group_id:"0",activitie_id:"",totalscore:"",remain_score:"",fullCut:"",offsetprice:{isOk:!0,isOpen:!1,offsetMoney:"",integral:0,is_default:0,is_nopassword:0,nopassword_max:"0",numprice:"0",user_currency:"0"},tolalMoney:"",requiredata:{},storageData:"",showCartcontainer:!1,renew_id:"",deductible_integral:0,is_pay:0}},onLoad:function(e){var t=this;(0,o.payType)().then(function(e){t.payType=e.data});var a=JSON.parse(e.cart);if(this.is_virtual_shop=a[0].is_virtual_shop,this.conponData=e.cart,this.Ddata=e,this.pay_type=e.pay_type?e.pay_type:"",(0,o.scoreSelect)({user_id:this.userInfo.id}).then(function(e){t.remain_score=e.data.data}),e.grouptype&&e.productid){if(e.group_id)var i=e.group_id;else i="0";(0,o.getExplain)({type:e.productType}).then(function(a){var o=a.data.data[0];t.nodes1=o.content,t.getExplain=o,t.grouptype=e.grouptype,t.activitie_id=e.activitie_id,t.group_id=i})}},onShow:function(){var t=this;(0,o.address)({uname:this.userInfo.uname||"",ticket:this.userInfo.ticket||"",user_id:this.userInfo.id||""}).then(function(e){if(t.isloading=!1,400017==e.data.code)t.address="";else if(e.data.data)for(var a=0;a<e.data.data.length;a++){if(e.data.data[a].is_default){var i=e.data.data[a];return void(t.address=i)}i=e.data.data[a];t.address=i}});var a=JSON.parse(this.conponData);(0,o.coupon)({user_id:this.userInfo.id,product_id:a[0].pid}).then(function(e){0==e.data.code?t.ofCoupon=!0:t.ofCoupon=!1}),(0,o.sendMoneya)({user_id:this.userInfo.id,product_info:JSON.stringify(a),address_id:""}).then(function(e){if(0==e.data.code){t.storeName&&(e.data.message.message="门店自提",e.data.message.sendMoney=0);var i=a,r=0,s=0,n=0;i.forEach(function(e,a){s+=e.totalprice,n+=e.need_score,r+=e.rcount,t.pidArr=0==a?e.pid:t.pidArr+","+e.pid}),(0,o.fullCutHandle)({product_info:JSON.stringify(a)}).then(function(e){if(0==e.data.code){s-=e.data.message;t.fullCut,e.data.message;t.totalprice=s,t.fullCut=e.data.message}else;}),t.totalpriceNow=s}t.Ddata.couponMoney?s=s+e.data.message.sendMoney-t.Ddata.couponMoney:s+=e.data.message.sendMoney,(0,o.Jurisdi)({user_id:t.userInfo.id,product_info:t.Ddata.cart}).then(function(a){console.log(a),t.pickup=a.data.data.pickup,t.offsetprice=a.data.offsetprice,t.requiredata=a.data.require,t.deductible_integral=a.data.offsetprice.integral,1==t.offsetprice.is_default&&(s=parseFloat(s)-t.offsetprice.numprice),0!=t.offsetprice.offsetMoney&&(s=parseFloat(s)-t.offsetprice.offsetMoney),s=s.toFixed(2),"虚拟产品包邮产品买不用费"==e.data.message.message&&(e.data.message.sendMoney=null),0==e.data.message.sendMoney&&(e.data.message.message="免邮"),t.rcount=r,t.cart=i,t.totalprice=s,t.sendMoney=e.data.message.sendMoney,t.message=e.data.message.message,t.couponKeyid=t.Ddata.couponKeyid?t.Ddata.couponKeyid:"",t.couponMoney=t.Ddata.couponMoney?t.Ddata.couponMoney:"",t.couponNeedMoney=t.Ddata.couponNeedMoney?t.Ddata.couponNeedMoney:"",t.totalscore=n,t.tolalMoney=s,parseFloat(t.offsetprice.user_currency)>=t.offsetprice.numprice&&(t.offsetprice.isOk=!1)})}),e.getStorage({key:"select_store",success:function(e){e.data&&(t.storeId=e.data.storeId,t.storeName=e.data.storeName,t.sendstyle="自提"),t.storeName&&wx.removeStorage({key:"select_store",success:function(e){}})}})},methods:{onCoupon:function(t){e.navigateTo({url:"coupon?pidArr="+this.pidArr+"&conponData="+this.conponData+"&couponKeyid="+this.couponKeyid+"&totalpriceNow="+this.totalpriceNow})},switchChange:function(e){var t=e.detail.value;1==t?parseFloat(this.offsetprice.user_currency)>=this.offsetprice.numprice&&(this.totalprice=(parseFloat(this.totalprice)-this.offsetprice.numprice).toFixed(2),this.pay_currency=this.offsetprice.numprice):(this.totalprice=(parseFloat(this.totalprice)+this.offsetprice.numprice).toFixed(2),this.ay_currency=0)},gotoAddress:function(){e.navigateTo({url:"/pages/address/index?create=true"})},handleInput:function(e){this.remark=e.detail.value},requiredValue:function(){e.navigateTo({url:"/packageA/required?requiredata="+JSON.stringify(this.requiredata.requiredata)})},selectStore:function(){e.navigateTo({url:"/pages/creat_store/creat_store?options="+this.options})},selectPayType:r.default.throttle(function(t){var a=this;if(1==this.is_virtual_shop||this.address.name){if(1==this.requiredata.status&&e.getStorage({key:"setrequired",success:function(e){a.storageData=e.data},fail:function(){e.showModal({title:"提示",content:"亲，请先填写必填信息",showCancel:!1,confirmText:"确定",success:function(t){e.navigateTo({url:"/packageA/required?requiredata="+JSON.stringify(this.requiredata.requiredata)})}})}}),(1!=this.requiredata.status||this.storageData)&&5==this.dianpuleibie){for(var i=[],r=0;r<this.cart.length;r++)i.push({pname:this.cart[r].pname,pid:this.cart[r].pid,rcount:this.cart[r].rcount});(0,o.TodayBuy)({user_id:this.userInfo.id,product:JSON.stringify(i)}).then(function(t){0==t.data.code?a.pay():e.showModal({title:"提示",content:t.data.msg,showCancel:!1})})}}else e.showModal({title:"提示",content:"您还没有添加收货地址",confirmText:"去添加",success:function(t){t.confirm&&e.navigateTo({url:"/pages/address/index"})}})},1e4),pay:function(){var t=this;this.actionSheetHidden=!0;var a="";1==this.grouptype&&(a=1),2==this.grouptype&&(a=2);var i=[];if("无配送方式"!=this.message)if(this.totalscore>0&&this.totalscore>this.remain_score)e.showModal({title:"提示",content:"您的积分不足",showCancel:!1});else{var o=[];if(5==this.dianpuleibie){for(var r=0;r<this.cart.length;r++)i.push({pid:this.cart[r].pid,supply_id:this.cart[r].supply_id,pname:this.cart[r].pname,property_id:this.cart[r].property_id,prope:this.cart[r].prope,rcount:this.cart[r].rcount,totalprice:this.cart[r].now_price*this.cart[r].rcount,price:this.cart[r].now_price,need_score:this.cart[r].need_score*this.cart[r].rcount,come_type:1,remark:this.remark,renew_id:this.renew_id,decrease_money:this.cart[r].decrease_money,is_virtual:this.cart[r].is_virtual_shop,extend_money:this.cart[r].extend_money}),o.push(this.cart[r].pid);if(1==this.requiredata.status&&this.storageData&&JSON.stringify(o)!=this.storageData.requiredata)return void e.showModal({title:"提示",content:"亲，请先填写必填信息^_^",showCancel:!1,confirmText:"确定",success:function(a){e.navigateTo({url:"/packageA/required?requiredata="+JSON.stringify(t.requiredata.requiredata)})}});var s={storageData:JSON.stringify(this.storageData.storageData),imgList:JSON.stringify(this.storageData.imgList)},n={address_id:this.address.id,user_id:this.userInfo.id||"",uname:this.userInfo.uname||"",ticket:this.userInfo.ticket||"",total_price:parseFloat(this.totalpriceNow),totalscore:this.totalscore,cart:JSON.stringify(i),deductible_money:this.offsetprice.offsetMoney,sendMoney:this.sendMoney,couponKeyid:this.couponKeyid,couponMoney:this.couponMoney,sendstyle:this.sendstyle,store_id:this.storeId,storeName:this.storeName,is_collage_product:a,activitie_id:this.activitie_id,group_id:this.group_id,openid:this.userInfo.openId||"",pay_currency:this.pay_currency||"",tolalMoney:this.tolalMoney,storageData:JSON.stringify(s),deductible_integral:this.deductible_integral};this.sendData=n,this.createOrder()}}else e.showModal({title:"提示",content:"产品没有没有您所在的配送方式",confirmText:"选择门店",success:function(a){a.confirm&&e.navigateTo({url:"/pages/creat_store?options="+t.options})}})},createOrder:function(){var t=this;e.showLoading({title:"正在提交订单",mask:!0});var a=this.sendData;5==this.dianpuleibie&&(0,o.Create)(a).then(function(a){e.hideLoading(),4e5==a.data.code?(t.clearCart(),setTimeout(function(i){e.redirectTo({url:"/pages/pay-order/pay-order?post_data="+JSON.stringify(t.cart)+"&pay_type="+t.pay_type+"&total_price="+t.totalprice+"&batchcode="+a.data.batchcode+"&offsetprice="+JSON.stringify(t.offsetprice)})},1500)):e.showModal({title:"提示",content:a.data.msg||"创建订单失败",showCancel:!1})})},clearCart:function(){var t=JSON.parse(this.sendData.cart);if(t.length>0){for(var a=e.getStorageSync(this.dianpuleibie+"shopping-cart"),i=0;i<a.length;i++)a[i].status&&a.splice(i,1);e.setStorageSync(this.dianpuleibie+"shopping-cart",a)}}},computed:c({},(0,i.mapState)(["dianpuleibie","userInfo"]))};t.default=u}).call(this,a("543d")["default"])},1838:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o})},"1aac":function(e,t,a){"use strict";(function(e){a("ad72"),a("921b");i(a("66fd"));var t=i(a("1fa3"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},"1fa3":function(e,t,a){"use strict";a.r(t);var i=a("1838"),o=a("7221");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("555f");var s=a("2877"),n=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"19832fb2",null);t["default"]=n.exports},4181:function(e,t,a){},"555f":function(e,t,a){"use strict";var i=a("4181"),o=a.n(i);o.a},7221:function(e,t,a){"use strict";a.r(t);var i=a("15a2"),o=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=o.a}},[["1aac","common/runtime","common/vendor"]]]);