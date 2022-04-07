(function(){"use strict";var e={474:function(e,t,r){var s=r(144),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"sort_search"}},[e._m(0),r("div",{directives:[{name:"show",rawName:"v-show",value:e.show_products||!this.len,expression:"show_products || !this.len"}],attrs:{id:"sort_panel"}},[r("Strong",[e._v("SORTING OPTIONS")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.sorty.type,expression:"sorty.type"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.sorty,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Default")]),r("option",{attrs:{value:"P"}},[e._v("Price")]),r("option",{attrs:{value:"A"}},[e._v("Availability ")])]),r("br"),r("br"),r("br"),r("Strong",[e._v("ORDER BY")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.sorty.order_by,expression:"sorty.order_by"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.sorty,"order_by",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Default")]),r("option",{attrs:{value:"HL"}},[e._v("High to Low")]),r("option",{attrs:{value:"LH"}},[e._v("Low to High")])]),r("br"),r("br"),r("br"),r("input",{attrs:{type:"button",value:"SORT"},on:{click:e.sort_array}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.hideit,expression:"hideit"}],attrs:{id:"search_bar"}},[r("strong",[e._v("Search")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.search_term,expression:"search_term"}],attrs:{type:"text"},domProps:{value:e.search_term},on:{input:function(t){t.target.composing||(e.search_term=t.target.value)}}}),r("br")]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.len,expression:"len"}],on:{click:e.show_cart}},[e._v(e._s(this.cart.length)+" Shopping Cart")]),r("br")]),r("div",{attrs:{id:"prods"}},[r("displayProducts",{directives:[{name:"show",rawName:"v-show",value:e.show_products,expression:"show_products"}],attrs:{courses:e.courses},on:{addproduct:e.add_to_cart}})],1),r("checkout",{directives:[{name:"show",rawName:"v-show",value:!e.show_products,expression:"!show_products"}],attrs:{cart:e.cart},on:{removefromcart:e.remove_from_cart,placeOrder:e.place_my_order}})],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v(" Lesson store ")])])}],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.cart,(function(t){return r("div",{key:t.id},[r("div",{attrs:{id:"v_cart"}},[r("h2",[e._v(e._s(t.subject))]),r("p",[e._v(e._s(t.campus))]),r("p",[e._v(e._s(t.price))]),r("input",{attrs:{type:"button",value:"Remove"},on:{click:function(r){return e.remove_from_cart(t._id)}}})])])})),r("p",[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.first_name,expression:"order.first_name"}],attrs:{type:"text",id:"fname"},domProps:{value:e.order.first_name},on:{input:function(t){t.target.composing||e.$set(e.order,"first_name",t.target.value)}}}),r("br"),r("br"),r("p",[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.last_name,expression:"order.last_name"}],attrs:{type:"text",id:"lname"},domProps:{value:e.order.last_name},on:{input:function(t){t.target.composing||e.$set(e.order,"last_name",t.target.value)}}}),r("br"),r("br"),r("p",[e._v("Phone Number")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.phone_number,expression:"order.phone_number"}],attrs:{type:"text",id:"phone"},domProps:{value:e.order.phone_number},on:{input:function(t){t.target.composing||e.$set(e.order,"phone_number",t.target.value)}}}),r("br"),r("br"),r("p",[e._v("Post Code")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.postcode,expression:"order.postcode"}],attrs:{type:"text",id:"postcode"},domProps:{value:e.order.postcode},on:{input:function(t){t.target.composing||e.$set(e.order,"postcode",t.target.value)}}}),r("br"),r("br"),r("p",[e._v("Address Line")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.address,expression:"order.address"}],attrs:{type:"text",id:"address"},domProps:{value:e.order.address},on:{input:function(t){t.target.composing||e.$set(e.order,"address",t.target.value)}}}),r("br"),r("br"),r("input",{directives:[{name:"show",rawName:"v-show",value:e.all_info,expression:"all_info"}],attrs:{type:"button",value:"Place Order"},on:{click:e.place_my_order}})],2)},i=[],c=/^\d+\d*$/,u=/^[a-z]+[a-z]*$/,p={name:"checkOut",props:["cart"],data(){return{s_p:!this.show_products,order:{first_name:"",last_name:"",phone_number:"",postcode:"",address:"",items:[]}}},computed:{all_info(){return!!(c.test(this.order.phone_number)&&u.test(this.order.first_name)&&u.test(this.order.last_name))}},methods:{remove_from_cart(e){this.$emit("removefromcart",e)},place_my_order(){this.order.items=this.cart,this.$emit("placeOrder",this.order)}}},h=p,d=r(1),l=(0,d.Z)(h,n,i,!1,null,null,null),m=l.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.courses,(function(t){return r("div",{key:t.id},[r("div",{attrs:{id:"show_products"}},[r("img",{staticStyle:{width:"250px",height:"250px"},attrs:{src:t.image}}),r("h2",[e._v("Subject : "+e._s(t.subject))]),r("p",[e._v("Campus : "+e._s(t.campus))]),r("p",[e._v("Price : "+e._s(t.price))]),r("p",[e._v("Available Spaces : "+e._s(t.spaces))]),r("input",{attrs:{type:"button",value:"Add To Cart",disabled:t.A_D},on:{click:function(r){return e.addtocart(t._id)}}})])])})),0)},v=[],f={name:"displayProducts",props:["courses"],data(){return{coursesL:this.courses}},computed:{filtered_courses(){return this.courses.filter((e=>e.subject.match(this.search_term)||e.campus.match(this.search_term)))}},methods:{addtocart(e){this.$emit("addproduct",e)}}},y=f,w=(0,d.Z)(y,_,v,!1,null,null,null),g=w.exports,b={name:"app",components:{displayProducts:g,checkout:m},data(){return{hideit:!0,search_term:"",courses:[],show_products:!0,ref:!0,cart:[],len:!1,sorty:{type:"",order_by:""}}},created:function(){fetch("https://cw3-main.herokuapp.com/collection/products").then((e=>e.json())).then((e=>this.courses=e)).catch((e=>console.log(e.message)))},watch:{search_term(){fetch("https://cw3-main.herokuapp.com/collection/products"+this.search_term).then((e=>e.json())).then((e=>this.courses=e)).catch((e=>console.log(e.message)))}},computed:{filtered_courses(){return this.courses.filter((e=>e.subject.match(this.search_term)||e.campus.match(this.search_term)))},search_only(){return!0}},methods:{place_my_order(e){fetch("https://cw3-main.herokuapp.com/collection/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{console.log(e),alert("Order Placed Successfully")})),this.cart=[],this.len=!1,this.show_product=!0,this.hideit=!0},show_cart(){!0===this.show_products?(this.show_products=!1,this.hideit=!1):(this.show_products=!0,this.hideit=!0)},sort_array(){"P"==this.sorty.type&&"HL"==this.sorty.order_by?fetch("https://cw3-main.herokuapp.com/collection/products/price/-1").then((e=>e.json())).then((e=>this.courses=e)).catch((e=>console.log(e.message))):"P"==this.sorty.type&&"LH"==this.sorty.order_by?fetch("https://cw3-main.herokuapp.com/collection/products/price/1").then((e=>e.json())).then((e=>this.courses=e)).catch((e=>console.log(e.message))):"A"==this.sorty.type&&"HL"==this.sorty.order_by?fetch("https://cw3-main.herokuapp.com/collection/products/price/-1").then((e=>e.json())).then((e=>this.courses=e)).catch((e=>console.log(e.message))):"A"==this.sorty.type&&"LH"==this.sorty.order_by&&fetch("https://cw3-main.herokuapp.com/collection/products/price/1").then((e=>e.json())).then((e=>this.courses=e)).catch((e=>console.log(e.message))),this.show_product=!1,this.show_product=!0},remove_from_cart(e){for(var t,r,s=0;s<this.cart.length;s++)this.cart[s]._id===e&&(t=this.cart.splice(s,1));for(0===this.cart.length&&(this.len=!1,this.show_products=!0,this.hideit=!0),s=0;s<this.courses.length;s++)this.courses[s]._id===t[0]._id&&(this.courses[s].spaces=this.courses[s].spaces+1,this.courses[s].A_D=!1,r=this.courses[s]);const o={spaces:r.spaces,A_D:r.A_D};fetch("https://cw3-main.herokuapp.com/collection/products/"+r._id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>{console.log(e)}))},add_to_cart(e){for(var t=0;t<this.courses.length;t++)if(this.courses[t]._id===e&&(this.cart.push(this.courses[t]),this.len=!0,this.courses[t].spaces>0)){this.courses[t].spaces=this.courses[t].spaces-1,0===this.courses[t].spaces&&(this.courses[t].A_D=!0);const e={spaces:this.courses[t].spaces,A_D:this.courses[t].A_D};fetch("https://cw3-main.herokuapp.com/collection/products/"+this.courses[t]._id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{console.log(e)}))}}}},x=b,O=(0,d.Z)(x,o,a,!1,null,null,null),k=O.exports;s.Z.config.productionTip=!1,new s.Z({render:e=>e(k)}).$mount("#app")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,s,o,a){if(!s){var n=1/0;for(p=0;p<e.length;p++){s=e[p][0],o=e[p][1],a=e[p][2];for(var i=!0,c=0;c<s.length;c++)(!1&a||n>=a)&&Object.keys(r.O).every((function(e){return r.O[e](s[c])}))?s.splice(c--,1):(i=!1,a<n&&(n=a));if(i){e.splice(p--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[s,o,a]}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,a,n=s[0],i=s[1],c=s[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var p=c(r)}for(t&&t(s);u<n.length;u++)a=n[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},s=self["webpackChunklessonstrore"]=self["webpackChunklessonstrore"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(474)}));s=r.O(s)})();
//# sourceMappingURL=app.f189515a.js.map