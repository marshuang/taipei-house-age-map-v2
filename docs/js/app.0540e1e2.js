(function(e){function t(t){for(var a,l,i=t[0],o=t[1],c=t[2],u=0,p=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},s={app:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"4dac":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[n("div",{staticClass:"br b--light-gray overflow-auto shadow-4 z-1 bg-light-blue",class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[e._m(1),n("Settings"),n("FeatureInfo",{staticClass:"pa2",attrs:{selectedLegend:e.selectedLegend}}),n("Legend",{staticClass:"pa2",attrs:{selectedLegend:e.selectedLegend}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br bg-light-gray b--gray shadow-4 z-1",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),n("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[n("Map",{attrs:{selectedLegend:e.selectedLegend}}),n("img",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"absolute loading",attrs:{src:"image/loading.gif"}}),n("div",{staticClass:"absolute bg-light-gray f3 br bt bb br--right br-100 b--dark-gray bw1 mt3 magenta pointer grow pa1 z-1",attrs:{id:"sidebarToggle"},on:{click:function(t){e.sidebarOpen=!e.sidebarOpen}}},[e.sidebarOpen?e._e():n("span",[n("div",{staticClass:"icono-caretRight ml0"})]),e.sidebarOpen?n("span",[n("div",{staticClass:"icono-caretLeft ml0"})]):e._e()])],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.sidebarOpen,expression:"sidebarOpen"}],staticClass:"bt b--light-gray flex-none lh-solid ph2 pt3 pb1bg-washed-blue tc",attrs:{id:"bottom"}},[e._m(2),e._m(3)])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bb b--gray bg-lightest-blue pa1",attrs:{id:"top"}},[n("img",{staticClass:"logo fl ma2",attrs:{src:"image/logo.jpg"}}),n("h1",{staticClass:"f1 ma2"},[e._v("台灣人口指標地圖")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-lightest-blue ma0 pa1",attrs:{id:"mobile-header"}},[n("img",{staticClass:"logo f5 mh1 mv2 fl",attrs:{src:"image/logo.jpg"}}),n("h1",{staticClass:"f3 mv2"},[e._v("人口指標地圖")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"ma0"},[n("b",[e._v("資料來源: ")]),e._v("社會經濟資料庫，2019年10月")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("製作 "),n("a",{attrs:{href:"https://twitter.com/stevage1"}},[e._v("林佳賢")]),e._v(".  "),n("a",{attrs:{href:"https://github.com/imdataman/vue-mapbox-map"}},[e._v("Github.")])])}],l=(n("7514"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})}),i=[],o=(n("6b54"),n("ac6a"),n("96cf"),n("3b8d")),c=n("e192"),d=n.n(c),u=n("b2e9"),p=n("d217"),g=new a["a"],f=(n("ac6d"),{data:function(){return{selectedId:void 0,theme:"P_DEN",map:{}}},props:{selectedLegend:Object},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,a,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=[9,12],n={version:8,name:"Blank",center:[0,0],zoom:0,sources:{},layers:[{id:"background",type:"background",paint:{"background-color":"white"}}],id:"blank",glyphs:"http://fonts.openmaptiles.org/{fontstack}/{range}.pbf"},a=new d.a.Map({container:"map",center:[120.973882,23.57565],zoom:6.5,style:n}),window.map=a,this.map=a,a.on("load",Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,l,i,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"]("data/county.json");case 2:return n=e.sent,e.next=5,u["a"]("data/town.json");case 5:return r=e.sent,e.next=8,u["a"]("data/village.json");case 8:l=e.sent,i=p["a"](n,n.objects.county),o=p["a"](r,r.objects.town),c=p["a"](l,l.objects.village),c.features.forEach((function(e){e.id=e.properties.ID.substring(0,8)+e.properties.ID.substring(9)})),i.features.forEach((function(e){e.id=e.properties.ID})),o.features.forEach((function(e){e.id=e.properties.ID})),a.addSource("county",{type:"geojson",data:i}),a.addLayer({id:"countyPolygon",source:"county",maxzoom:t[0],type:"fill",paint:{"fill-color":["step",["get",s.theme],s.selectedLegend.palette[0],s.selectedLegend.breaks[1],s.selectedLegend.palette[1],s.selectedLegend.breaks[2],s.selectedLegend.palette[2],s.selectedLegend.breaks[3],s.selectedLegend.palette[3],s.selectedLegend.breaks[4],s.selectedLegend.palette[4],s.selectedLegend.breaks[5],s.selectedLegend.palette[5],s.selectedLegend.breaks[6],s.selectedLegend.palette[6],s.selectedLegend.breaks[7],s.selectedLegend.palette[7]],"fill-opacity":.8,"fill-outline-color":["case",["boolean",["feature-state","selected"],!1],"rgba(0, 0, 0, 1)","rgba(0, 0, 0, 0)"]}}),a.addLayer({id:"countyBorder",source:"county",minzoom:t[0],maxzoom:t[1],type:"line",paint:{"line-color":"#000","line-opacity":.8,"line-width":1}}),a.addLayer({id:"countySelected",source:"county",maxzoom:t[0],type:"line",paint:{"line-color":["case",["boolean",["feature-state","hover"],!1],"rgba(0, 0, 0, 1)","rgba(0, 0, 0, 0)"],"line-width":["interpolate",["linear"],["zoom"],6,2,t[0],3]}}),a.addSource("town",{type:"geojson",data:o}),a.addLayer({id:"townPolygon",source:"town",minzoom:t[0],maxzoom:t[1],type:"fill",paint:{"fill-color":["step",["get",s.theme],s.selectedLegend.palette[0],s.selectedLegend.breaks[1],s.selectedLegend.palette[1],s.selectedLegend.breaks[2],s.selectedLegend.palette[2],s.selectedLegend.breaks[3],s.selectedLegend.palette[3],s.selectedLegend.breaks[4],s.selectedLegend.palette[4],s.selectedLegend.breaks[5],s.selectedLegend.palette[5],s.selectedLegend.breaks[6],s.selectedLegend.palette[6],s.selectedLegend.breaks[7],s.selectedLegend.palette[7]],"fill-opacity":.8,"fill-outline-color":["case",["boolean",["feature-state","selected"],!1],"rgba(0, 0, 0, 1)","rgba(0, 0, 0, 0)"]}}),a.addLayer({id:"townBorder",source:"town",minzoom:t[1],type:"line",paint:{"line-color":"#000","line-opacity":.8,"line-width":1}}),a.addLayer({id:"townSelected",source:"town",minzoom:t[0],maxzoom:t[1],type:"line",paint:{"line-color":["case",["boolean",["feature-state","hover"],!1],"rgba(0, 0, 0, 1)","rgba(0, 0, 0, 0)"],"line-width":["interpolate",["linear"],["zoom"],t[0],3,t[1],6]}}),a.addSource("village",{type:"geojson",data:c}),a.addLayer({id:"villagePolygon",source:"village",minzoom:t[1],type:"fill",paint:{"fill-color":["step",["get",s.theme],s.selectedLegend.palette[0],s.selectedLegend.breaks[1],s.selectedLegend.palette[1],s.selectedLegend.breaks[2],s.selectedLegend.palette[2],s.selectedLegend.breaks[3],s.selectedLegend.palette[3],s.selectedLegend.breaks[4],s.selectedLegend.palette[4],s.selectedLegend.breaks[5],s.selectedLegend.palette[5],s.selectedLegend.breaks[6],s.selectedLegend.palette[6],s.selectedLegend.breaks[7],s.selectedLegend.palette[7]],"fill-opacity":.8,"fill-outline-color":["case",["boolean",["feature-state","selected"],!1],"rgba(0, 0, 0, 1)","rgba(0, 0, 0, 0)"]}}),a.addLayer({id:"villageSelected",source:"village",minzoom:t[1],type:"line",paint:{"line-color":["case",["boolean",["feature-state","hover"],!1],"rgba(0, 0, 0, 1)","rgba(0, 0, 0, 0)"],"line-width":["interpolate",["linear"],["zoom"],t[1],6,16,10]}}),g.$emit("loading-finished"),a.on("click","countyPolygon",(function(e){g.$emit("feature-clicked",e.features[0])})),a.on("click","townPolygon",(function(e){g.$emit("feature-clicked",e.features[0])})),a.on("click","villagePolygon",(function(e){g.$emit("feature-clicked",e.features[0])})),g.$on("change-theme",(function(e){s.theme=e.type})),g.$on("select-feature",(function(e){if(s.selectedId){var t=5==s.selectedId.toString().length?"county":8==s.selectedId.toString().length?"town":"village";a.setFeatureState({source:t,id:s.selectedId},{hover:!1})}s.selectedId=e.id;var n=5==s.selectedId.toString().length?"county":8==s.selectedId.toString().length?"town":"village";a.setFeatureState({source:n,id:s.selectedId},{hover:!0})})),a.on("mousemove","countyPolygon",(function(){return a.getCanvas().style.cursor="pointer"})),a.on("mousemove","townPolygon",(function(){return a.getCanvas().style.cursor="pointer"})),a.on("mousemove","villagePolygon",(function(){return a.getCanvas().style.cursor="pointer"})),a.on("mouseleave","countyPolygon",(function(){return a.getCanvas().style.cursor=""})),a.on("mouseleave","townPolygon",(function(){return a.getCanvas().style.cursor=""})),a.on("mouseleave","villagePolygon",(function(){return a.getCanvas().style.cursor=""}));case 38:case"end":return e.stop()}}),e)}))));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),watch:{selectedLegend:function(){this.map.setPaintProperty("countyPolygon","fill-color",["step",["get",this.selectedLegend.type],this.selectedLegend.palette[0],this.selectedLegend.breaks[1],this.selectedLegend.palette[1],this.selectedLegend.breaks[2],this.selectedLegend.palette[2],this.selectedLegend.breaks[3],this.selectedLegend.palette[3],this.selectedLegend.breaks[4],this.selectedLegend.palette[4],this.selectedLegend.breaks[5],this.selectedLegend.palette[5],this.selectedLegend.breaks[6],this.selectedLegend.palette[6],this.selectedLegend.breaks[7],this.selectedLegend.palette[7]]),this.map.setPaintProperty("townPolygon","fill-color",["step",["get",this.selectedLegend.type],this.selectedLegend.palette[0],this.selectedLegend.breaks[1],this.selectedLegend.palette[1],this.selectedLegend.breaks[2],this.selectedLegend.palette[2],this.selectedLegend.breaks[3],this.selectedLegend.palette[3],this.selectedLegend.breaks[4],this.selectedLegend.palette[4],this.selectedLegend.breaks[5],this.selectedLegend.palette[5],this.selectedLegend.breaks[6],this.selectedLegend.palette[6],this.selectedLegend.breaks[7],this.selectedLegend.palette[7]]),this.map.setPaintProperty("villagePolygon","fill-color",["step",["get",this.selectedLegend.type],this.selectedLegend.palette[0],this.selectedLegend.breaks[1],this.selectedLegend.palette[1],this.selectedLegend.breaks[2],this.selectedLegend.palette[2],this.selectedLegend.breaks[3],this.selectedLegend.palette[3],this.selectedLegend.breaks[4],this.selectedLegend.palette[4],this.selectedLegend.breaks[5],this.selectedLegend.palette[5],this.selectedLegend.breaks[6],this.selectedLegend.palette[6],this.selectedLegend.breaks[7],this.selectedLegend.palette[7]])}}}),b=f,h=n("2877"),m=Object(h["a"])(b,l,i,!1,null,"19a3ae2e",null),v=m.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.feature,expression:"feature"}],staticClass:"b--black ba pv2 ph3 bg-white ma2",attrs:{id:"FeatureInfo"}},[n("h3",{staticClass:"f4 ml4-l"},[e._v(e._s(e.p.NAME||"(Unnamed item)"))]),n("p",{staticClass:"f4 ml4-l"},[e._v(e._s(e.p[e.theme]+e.selectedLegend.unit))])])},y=[],k={name:"FeatureInfo",data:function(){return{feature:void 0,theme:"P_DEN"}},props:{selectedLegend:Object},computed:{p:function(){return this.feature&&this.feature.properties||{}}},created:function(){var e=this;g.$on("feature-clicked",(function(t){g.$emit("select-feature",t),e.feature=t})),g.$on("change-theme",(function(t){e.theme=t.type}))}},w=k,_=(n("8aba"),Object(h["a"])(w,L,y,!1,null,"b5958e0c",null)),C=_.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa2 mb3",attrs:{id:"Settings"}},[n("h4",{staticClass:"tc mv3 f3-l"},[e._v("請選擇資料")]),n("div",{staticClass:"list pl0 measure center"},[e._l(e.listItem,(function(t){return[n("a",{staticClass:"db link pv3 ba br1 bg-white mb1 tc pointer hover-orange f3-l",class:{active:t.name==e.choosed.name},on:{click:function(n){return e.chooseTheme(t)}}},[e._v(e._s(t.name))])]}))],2)])},P=[],O={name:"Settings",data:function(){return{listItem:[{name:"人口密度",type:"P_DEN"},{name:"性別比例",type:"M_F_RAT"},{name:"家戶平均人口",type:"P_H_CNT"},{name:"老化指數",type:"FLD4"}],choosed:{name:"人口密度",type:"P_DEN"}}},methods:{chooseTheme:function(e){e.type!=this.choosed.type&&(this.choosed=e,g.$emit("change-theme",e))}}},j=O,$=(n("9e7d"),Object(h["a"])(j,x,P,!1,null,"15a231be",null)),S=$.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.feature,expression:"feature"}],staticClass:"ph2 pt3 pb2 b--black ba pa2 bg-white ma2",attrs:{id:"Legend"}},[e._l(e.selectedLegend.palette,(function(t,a){return[n("div",{staticClass:"flex pl4-l"},[n("div",{staticClass:"ba br1 mb2",style:{backgroundColor:t,width:"30px",height:"30px"}}),n("p",{staticClass:"flex-auto mv2 tl ml3"},[e._v(e._s(e.selectedLegend.breaks[a].toString()+" - "+e.selectedLegend.breaks[a+1].toString()))])])]}))],2)},E=[],I={name:"Legend",data:function(){return{feature:void 0,theme:"P_DEN"}},props:{selectedLegend:Object},computed:{p:function(){return this.feature&&this.feature.properties||{}}},created:function(){var e=this;g.$on("feature-clicked",(function(t){e.feature=t})),g.$on("change-theme",(function(t){e.theme=t.type}))}},N=I,D=(n("8762"),Object(h["a"])(N,z,E,!1,null,"39be9e50",null)),T=D.exports,F={name:"app",components:{Map:v,FeatureInfo:C,Settings:S,Legend:T},data:function(){return{sidebarOpen:!0,loading:!1,theme:"P_DEN",legend:[{breaks:[0,100,250,500,1e3,2500,5e3,1e4,""],palette:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],type:"P_DEN",unit:"人／km²"},{breaks:[0,85,90,95,100,105,110,115,""],palette:["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],type:"M_F_RAT",unit:"男／100女"},{breaks:[0,2,2.2,2.4,2.6,2.8,3,3.2,""],palette:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],type:"P_H_CNT",unit:"人／家戶"},{breaks:[0,80,100,120,140,160,180,200,""],palette:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],type:"FLD4",unit:""}]}},computed:{selectedLegend:function(){var e=this;return this.legend.find((function(t){return t.type==e.theme}))}},watch:{sidebarOpen:function(){this.$nextTick((function(){return window.map.resize()}))}},created:function(){var e=this;g.$on("select-feature",(function(){return e.sidebarOpen=!0})),g.$on("change-theme",(function(t){return e.theme=t.type})),g.$on("loading-finished",(function(){return e.loading=!0}))}};n("948e");var M=F,R=(n("034f"),Object(h["a"])(M,s,r,!1,null,null,null)),A=R.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(A)}}).$mount("#app")},"64a9":function(e,t,n){},8762:function(e,t,n){"use strict";var a=n("8793"),s=n.n(a);s.a},8793:function(e,t,n){},"8aba":function(e,t,n){"use strict";var a=n("4dac"),s=n.n(a);s.a},"9e7d":function(e,t,n){"use strict";var a=n("ff87"),s=n.n(a);s.a},ff87:function(e,t,n){}});
//# sourceMappingURL=app.0540e1e2.js.map