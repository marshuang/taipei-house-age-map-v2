(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[e._m(0),a("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[a("div",{staticClass:"br b--light-gray overflow-auto shadow-4 z-1 bg-washed-blue",class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[e._m(1),a("AgeInfo",{attrs:{legend:e.legend}}),a("Legend",{staticClass:"pa2",attrs:{legend:e.legend}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br bg-light-gray b--gray shadow-4 z-1",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),a("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[a("Map",{attrs:{legend:e.legend}}),a("img",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"absolute loading",attrs:{src:"image/loading.gif"}}),a("div",{staticClass:"absolute bg-light-yellow f3 br bt bb br--right br-100 b--dark-gray bw1 mt3 magenta pointer grow pa1 z-1",attrs:{id:"sidebarToggle"},on:{click:function(t){e.sidebarOpen=!e.sidebarOpen}}},[e.sidebarOpen?e._e():a("span",[a("div",{staticClass:"icono-caretRight ml0"})]),e.sidebarOpen?a("span",[a("div",{staticClass:"icono-caretLeft ml0"})]):e._e()])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.sidebarOpen,expression:"sidebarOpen"}],staticClass:"bt b--light-gray flex-none lh-solid ph2 pt3 pb1 bg-near-white tc",attrs:{id:"bottom"}},[e._m(2),e._m(3)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bb b--gray bg-washed-green pa1",attrs:{id:"top"}},[a("img",{staticClass:"logo fl ma2",attrs:{src:"image/logo.jpg"}}),a("h1",{staticClass:"f1 ma2"},[e._v("台北屋齡地圖")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-washed-yellow ma0 pa1",attrs:{id:"mobile-header"}},[a("img",{staticClass:"logo f5 mh1 mv2 fl",attrs:{src:"image/logo.jpg"}}),a("h1",{staticClass:"f3 mv2"},[e._v("台北屋齡地圖")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"ma0"},[a("b",[e._v("資料來源: ")]),e._v("台北市開放資料網站，2017年1月")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("製作 "),a("a",{attrs:{href:"https://twitter.com/imandylin2"}},[e._v("林佳賢")]),e._v(".  "),a("a",{attrs:{href:"https://github.com/imdataman/taipei-house-age-map-v2"}},[e._v("Github.")])])}],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},s=[],l=(a("6762"),a("2fdb"),a("5df3"),a("1c4c"),a("96cf"),a("3b8d")),c=a("e192"),d=a.n(c),u=a("b2e9"),p=new n["a"],g=a("32ef"),f=a.n(g),b=a("409f"),m=a.n(b),h=a("8f76"),v=a.n(h),y=(a("ac6d"),{data:function(){return{}},props:{legend:Object},mounted:function(){var e=this,t={version:8,name:"Blank",center:[0,0],zoom:0,sources:{},layers:[{id:"background",type:"background",paint:{"background-color":"white"}}],id:"blank",glyphs:"http://fonts.openmaptiles.org/{fontstack}/{range}.pbf"},a=[121.5561,25.07337],n=.5,r={steps:36,units:"kilometers"},i=new d.a.Map({container:"map",style:t,center:a,zoom:11.5,maxZoom:15,minZoom:11.5});window.map=i,i.on("load",Object(l["a"])(regeneratorRuntime.mark((function t(){var a,o,s,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={type:"FeatureCollection"},t.next=3,u["a"]("data/housing_age.csv").then((function(e){a.features=e.map((function(e){return{type:"Feature",geometry:{type:"Point",coordinates:[+e.long,+e.lat]},properties:{age:+e.age}}}))}));case 3:i.addSource("road",{type:"geojson",data:"data/road.geojson"}),i.addLayer({id:"roadLine",source:"road",type:"line",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ccc","line-width":["case",["==",["get","highway"],"primary"],2,["==",["get","highway"],"secondary"],1,.5]}}),i.addSource("circle",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),i.addLayer({id:"circlePolygon",type:"line",source:"circle",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"black","line-width":2}}),i.addSource("points",{type:"geojson",data:{type:"FeatureCollection",features:[]},buffer:0}),i.addLayer({id:"allPoints",type:"circle",source:"points",paint:{"circle-radius":{stops:[[11.5,.8],[15,2.5]]},"circle-color":["step",["get","age"],e.legend.palette[0],e.legend.breaks[1],e.legend.palette[1],e.legend.breaks[2],e.legend.palette[2],e.legend.breaks[3],e.legend.palette[3],e.legend.breaks[4],e.legend.palette[4],e.legend.breaks[5],e.legend.palette[5],e.legend.breaks[6],e.legend.palette[6],e.legend.breaks[7],e.legend.palette[7]]}}),i.addSource("townLabel",{type:"geojson",data:"data/town-label.geojson"}),i.addLayer({id:"townText",source:"townLabel",type:"symbol",layout:{"symbol-placement":"point","text-field":"{TOWNNAME}","text-size":{stops:[[11.5,16],[15,48]]}},paint:{"text-opacity":{stops:[[11.5,.8],[15,0]]}}}),i.getSource("points").setData(a),i.once("styledata",(function(){p.$emit("loading-finished")})),o=Array.from({length:1e4},(function(){return Math.floor(Math.random()*a.features.length)})),s=a.features.filter((function(e,t){return o.includes(t)})),l=[],c=function(e,t){return e.filter((function(e){return v()(e,t,{units:"kilometers"})<n}))},i.on("mousemove",(function(e){var t=[e.lngLat.lng,e.lngLat.lat],a=f()(t,n,r);i.getSource("circle").setData(a);var o=m()(a);l=s.filter((function(e){return e.geometry.coordinates[0]>o[0]&&e.geometry.coordinates[0]<o[2]&&e.geometry.coordinates[1]>o[1]&&e.geometry.coordinates[1]<o[3]}));var d=c(l,t);p.$emit("select-feature",d)}));case 18:case"end":return t.stop()}}),t)}))))}}),w=y,_=a("2877"),x=Object(_["a"])(w,o,s,!1,null,"efe592e8",null),O=x.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pa2 mb3",attrs:{id:"Settings"}},[a("h2",{staticClass:"tc mb3 mt4 f2-l"},[e._v(e._s("平均屋齡："+(e.mean||" - ")+"年"))])])},k=[],j={name:"Settings",data:function(){return{selectedData:[]}},props:{legend:Object},computed:{mean:function(){var e=this.selectedData.reduce((function(e,t){return e+t.properties.age}),0),t=e/this.selectedData.length;return Math.round(t)}},created:function(){var e=this;p.$on("select-feature",(function(t){e.selectedData=t}))}},S=j,L=Object(_["a"])(S,C,k,!1,null,"e36f1344",null),$=L.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ph2 pt3 pb2 b--black ba pa2 bg-white ma2",attrs:{id:"Legend"}},[e._l(e.legend.palette,(function(t,n){return[a("div",{staticClass:"flex pl4-l"},[a("div",{staticClass:"ba br1 mb2",style:{backgroundColor:t,width:"30px",height:"30px"}}),a("p",{staticClass:"flex-auto mv2 tl ml3"},[e._v(e._s(e.legend.breaks[n].toString()+" - "+e.legend.breaks[n+1].toString()+"年"))])])]}))],2)},M=[],D={name:"Legend",data:function(){return{}},props:{legend:Object}},P=D,A=Object(_["a"])(P,E,M,!1,null,"2877b91c",null),F=A.exports,z={name:"app",components:{Map:O,AgeInfo:$,Legend:F},data:function(){return{sidebarOpen:!0,loading:!1,legend:{breaks:[0,10,20,25,30,35,40,50,""],palette:["#440154","#46337E","#365C8D","#277F8E","#1FA187","#4AC16D","#9FDA3A","#FDE725"]}}},watch:{sidebarOpen:function(){this.$nextTick((function(){return window.map.resize()}))}},created:function(){var e=this;p.$on("loading-finished",(function(){return e.loading=!0}))}};a("948e");var T=z,N=(a("034f"),Object(_["a"])(T,r,i,!1,null,null,null)),R=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(R)}}).$mount("#app")},"64a9":function(e,t,a){}});
//# sourceMappingURL=app.ad62fd8f.js.map