(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"3fad":function(e,t,r){"use strict";var a=r("922e"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[e._m(0),r("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[r("div",{staticClass:"br b--light-gray overflow-auto shadow-4 z-1 bg-light-gray",class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[e._m(1),r("Settings"),r("FeatureInfo",{staticClass:"pa2"}),r("NewFeature",{staticClass:"pa2"})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br bg-light-gray b--gray shadow-4 z-1",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),r("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[r("Map"),r("div",{staticClass:"absolute bg-light-gray f3 br bt bb br--right br-100 b--dark-gray bw1 mt3 magenta pointer grow pa1 z-1",attrs:{id:"sidebarToggle"},on:{click:function(t){e.sidebarOpen=!e.sidebarOpen}}},[e.sidebarOpen?e._e():r("span",[r("div",{staticClass:"icono-caretRight ml0"})]),e.sidebarOpen?r("span",[r("div",{staticClass:"icono-caretLeft ml0"})]):e._e()]),r("div",{staticClass:"absolute",attrs:{id:"overlay"}})],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.sidebarOpen,expression:"sidebarOpen"}],staticClass:"bt b--light-gray flex-none lh-solid pa1 bg-washed-blue",attrs:{id:"bottom"}},[e._m(2),e._m(3)])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bb b--gray bg-lightest-blue pa1",attrs:{id:"top"}},[r("img",{staticClass:"logo fl mh2",attrs:{src:"butterfly.svg"}}),r("h1",{staticClass:"f1 ma1"},[e._v(" TinyMap")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-lightest-blue ma0 pa1",attrs:{id:"mobile-header"}},[r("img",{staticClass:"logo f5 mh1 fl",attrs:{src:"butterfly.svg"}}),r("h1",{staticClass:"f3 ma0"},[e._v("TinyMap")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"ma0"},[r("b",[e._v("Disclaimer: ")]),e._v("Do not use this site for anything private or important. There is no security. Your data may be deleted without warning. Absolutely no warranty of any kind.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Created by "),r("a",{attrs:{href:"https://twitter.com/stevage1"}},[e._v("Steve Bennett")]),e._v(".  "),r("a",{attrs:{href:"https://github.com/stevage/tinymap"}},[e._v("Source code on Github.")])])}],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},o=[],c=(r("7514"),r("96cf"),r("3b8d")),l=r("e192"),u=r.n(l),p=new a["a"],d=(r("386d"),r("4917"),r("bc3a")),f=r.n(d),m=(window.location.search.match(/layer=([a-zA-Z0-9_-]+)/)||[])[1],h=(window.location.search.match(/secretkey=([a-zA-Z0-9_-]+)/)||[])[1],v=function(){return!!h},b=h?"?key=".concat(h):"",y="https://shared-map-api.glitch.me/layer/".concat(m).concat(b),g="https://shared-map-api.glitch.me/layer/".concat(m,".geojson"),w="https://shared-map-api.glitch.me/layer/".concat(m,".csv"),k="https://shared-map-api.glitch.me/layer/".concat(m).concat(b),_=function(e){return"https://shared-map-api.glitch.me/layer/".concat(m,"/").concat(e).concat(b)},C=function(e){return"https://shared-map-api.glitch.me/layer/".concat(m,"/").concat(e).concat(b)};function x(e){return O.apply(this,arguments)}function O(){return O=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(k,t);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function S(e){return N.apply(this,arguments)}function N(){return N=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.put(_(t._id),t);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function $(){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(y);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function F(e){return E.apply(this,arguments)}function E(){return E=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(C(t.id)));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}var R=r("8030"),L=r.n(R),M=(r("ac6d"),{data:function(){return{points:void 0,selectedId:void 0,mode:""}},mounted:function(){var e=this;u.a.accessToken="pk.eyJ1IjoiaW1hbmR5bGluMiIsImEiOiJhYzg1YzcyNDNiYWE3MTFiY2QxN2JmNTg1ODQzOTIyZCJ9.5ZxE4iFh-Myp-eKwHk0qwg";var t=new u.a.Map({container:"map",center:[144.96,-37.81],zoom:14,style:"mapbox://styles/mapbox/light-v9"});window.map=t,t.on("load",Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.addSource("points",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),t.addLayer({id:"points-circles",type:"circle",source:"points",paint:{"circle-stroke-color":"hsl(330,100%,40%)","circle-stroke-width":["case",["to-boolean",["feature-state","selected"]],8,3],"circle-radius":{stops:[[10,3],[12,10]]},"circle-color":"hsl(330,100%,70%)"}}),t.addLayer({id:"points-labels",type:"symbol",source:"points",layout:{"text-field":["get","name"],"text-anchor":"left","text-offset":[1,0]},paint:{"text-color":"hsl(330,100%,30%)"}}),t.addSource("new-point",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),t.addLayer({id:"new-point-circle",type:"circle",source:"new-point",paint:{"circle-stroke-color":"hsl(120,80%,30%)","circle-stroke-width":5,"circle-radius":{stops:[[10,3],[12,10]]},"circle-color":"transparent"}}),t.on("mouseenter","points-circles",(function(){return t.getCanvas().style.cursor="pointer"})),t.on("mouseleave","points-circles",(function(){return t.getCanvas().style.cursor=""})),t.on("click","points-circles",(function(t){""===e.mode&&p.$emit("circle-clicked",t.features[0])})),t.on("click",(function(r){"locating"===e.mode&&(p.$emit("Map-clickLocate",r.lngLat),t.getSource("new-point").setData({type:"Point",coordinates:[r.lngLat.lng,r.lngLat.lat]}))})),p.$on("NewFeature-mode",(function(r){e.mode=r,"locating"===r?t.getCanvas().style.cursor="crosshair":""===r?(t.getCanvas().style.cursor="",t.getSource("new-point").setData({type:"FeatureCollection",features:[]})):t.getCanvas().style.cursor=""})),p.$on("NewFeature-saved",(function(r){e.points.features.push(r),t.getSource("points").setData(e.points)})),p.$on("delete-feature",(function(r){e.points.features=e.points.features.filter((function(e){return e.id!==r})),t.getSource("points").setData(e.points)})),p.$on("update-feature",(function(r){Object.assign(e.points.features.find((function(e){return e.id===r._id})),r),t.getSource("points").setData(e.points)})),p.$on("select-feature",(function(r){e.selectedId&&t.setFeatureState({source:"points",id:e.selectedId},{selected:!1}),e.selectedId=r.id,t.setFeatureState({source:"points",id:r.id},{selected:!0})})),!m){r.next=20;break}return r.next=17,$();case 17:e.points=r.sent,e.points&&t.fitBounds(L()(e.points),{padding:60}),t.getSource("points").setData(e.points);case 20:case"end":return r.stop()}}),r)}))))}}),U=M,D=r("2877"),P=Object(D["a"])(U,s,o,!1,null,"02c9a0d4",null),T=P.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.feature,expression:"feature"}],staticClass:"ph2 pb3 b--black ba pa2 bg-white ma2",attrs:{id:"FeatureInfo"}},[r("h3",{staticClass:"f4"},[e._v(e._s(e.p.name||"(Unnamed item)"))]),r("p",[e._v(e._s(e.p.description||"(No description)"))]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.canEdit(),expression:"canEdit()"}],staticClass:"tr mv2 mr2 f7 link dim ph3 pv2 mb2 white bg-purple ml-auto",on:{click:e.clickEdit}},[e._v("Edit")]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.canEdit(),expression:"canEdit()"}],staticClass:"tr mv2 mr2 f7 link dim ph3 pv2 mb2 white bg-blue ml-auto",on:{click:e.clickDelete}},[e._v("Delete")])])},J=[],z={name:"FeatureInfo",data:function(){return{feature:void 0}},computed:{p:function(){return this.feature&&this.feature.properties||{}}},created:function(){var e=this;p.$on("NewFeature-mode",(function(){e.feature=void 0})),p.$on("circle-clicked",(function(t){p.$emit("select-feature",t),e.feature=t}))},methods:{canEdit:v,clickEdit:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:p.$emit("edit-feature",this.feature);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),clickDelete:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F(this.feature);case 2:p.$emit("delete-feature",this.feature.id),this.feature=void 0;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},A=z,K=(r("cb8c"),Object(D["a"])(A,I,J,!1,null,"5656f5a0",null)),Y=K.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mt5",attrs:{id:"NewFeature"}},["locating"===e.mode?r("p",[e._v("Click to locate the new item on the map.")]):e._e(),""===e.mode?r("button",{staticClass:"f6 link dim ph3 pv2 mb2 dib white bg-purple",on:{click:e.clickAdd}},[e._v("New item")]):e._e(),"confirming"===e.mode?r("div",{staticClass:"ba pa2 b--mid-gray bg-white"},[e._l(e.fields,(function(t){return[r("label",{staticClass:"f5 mb1 db"},[e._v(e._s(t.title))]),"text"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.feature.properties[t.property],expression:"feature.properties[field.property]"}],staticClass:"input-reset mb3",domProps:{value:e.feature.properties[t.property]},on:{input:function(r){r.target.composing||e.$set(e.feature.properties,t.property,r.target.value)}}}):e._e(),"textarea"===t.type?r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.feature.properties[t.property],expression:"feature.properties[field.property]"}],staticClass:"input-reset mb3",domProps:{value:e.feature.properties[t.property]},on:{input:function(r){r.target.composing||e.$set(e.feature.properties,t.property,r.target.value)}}}):e._e()]})),r("br"),r("button",{staticClass:"mv2 mr2 f6 link dim ph3 pv2 mb2 dib white bg-purple",on:{click:e.clickSave}},[e._v("Save")]),r("button",{staticClass:"f6 link dim ph3 pv2 mb2 dib white bg-gray",on:{click:e.clickCancel}},[e._v("Cancel")])],2):e._e(),"locating"===e.mode?r("button",{staticClass:"f6 link dim ph3 pv2 mb2 dib white bg-gray",on:{click:e.clickCancel}},[e._v("Cancel")]):e._e()])},G=[],Q=(r("ac4d"),r("8a81"),r("ac6a"),{name:"NewFeature",data:function(){return{mode:"",feature:{},fields:[{title:"Name",property:"name",type:"text"},{title:"Description",property:"description",type:"textarea"}]}},created:function(){var e=this;p.$on("Map-clickLocate",(function(t){var r={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[t.lng,t.lat]}},a=!0,n=!1,i=void 0;try{for(var s,o=e.fields[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var c=s.value;r.properties[c.property]=""}}catch(l){n=!0,i=l}finally{try{a||null==o.return||o.return()}finally{if(n)throw i}}e.feature=r,e.mode="confirming"})),p.$on("edit-feature",(function(t){var r=JSON.parse(JSON.stringify(t));e.feature={type:r.type,properties:r.properties,geometry:r.geometry,id:r.id},e.mode="confirming"}))},computed:{show:function(){return v()}},methods:{clickAdd:function(){this.mode="locating"},clickCancel:function(){this.mode=""},clickSave:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.mode="",p.$emit("NewFeature-save",this.feature),!this.feature.id){e.next=11;break}return this.feature._id=this.feature.id,delete this.feature.id,e.next=7,S(this.feature);case 7:if(!e.sent){e.next=9;break}p.$emit("update-feature",this.feature);case 9:e.next=15;break;case 11:return e.next=13,x(this.feature);case 13:t=e.sent,p.$emit("NewFeature-saved",t);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},watch:{mode:function(){p.$emit("NewFeature-mode",this.mode)}}}),W=Q,q=(r("c518"),Object(D["a"])(W,Z,G,!1,null,"5de5888e",null)),B=q.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pa2 mb3 bg-light-blue",attrs:{id:"Settings"}},[e.layer?[r("p",{staticClass:"mb1"},[e._v("Anyone can view this map with this URL:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.readOnlyUrl,expression:"readOnlyUrl"}],staticClass:"db f7 gray",attrs:{readonly:""},domProps:{value:e.readOnlyUrl},on:{input:function(t){t.target.composing||(e.readOnlyUrl=t.target.value)}}})]:e._e(),e.secretkey?[r("p",{staticClass:"mb1"},[e._v("Anyone can edit this map with this URL: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.collaborationUrl,expression:"collaborationUrl"}],staticClass:"f7 gray",attrs:{readonly:""},domProps:{value:e.collaborationUrl},on:{input:function(t){t.target.composing||(e.collaborationUrl=t.target.value)}}})]:e._e(),e.layer||e.secretkey?[r("p",{staticClass:"lh-copy f7 dark-gray"},[e._v("Download as "),r("a",{staticClass:"underline link dim black",attrs:{href:e.geoJSONUrl}},[e._v("GeoJSON")]),e._v(" or "),r("a",{staticClass:"underline link dim black",attrs:{href:e.csvUrl}},[e._v("CSV")]),e._v(".")]),r("button",{staticClass:"mt4 mb2 mr2 f6 link dim ph3 pv2 dib white bg-blue",on:{click:e.clickNew}},[e._v("Start over with new map")])]:[r("h4",[e._v("Welcome to TinyMap. ")]),r("p",[e._v("To create your own map, just choose these two parameters.")]),r("label",{staticClass:"b f5 mb0"},[e._v("Layer")]),r("p",{staticClass:"dark-gray f7 i mv0"},[e._v("A unique string identifying your map.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newLayer,expression:"newLayer"}],staticClass:"f6 gray",attrs:{id:"newlayer",placeholder:"awesome-cafes"},domProps:{value:e.newLayer},on:{input:function(t){t.target.composing||(e.newLayer=t.target.value)}}}),r("label",{staticClass:"b f5 mt3 db"},[e._v("SecretKey")]),r("p",{staticClass:"dark-gray f7 i mv0"},[e._v("Share this with anyone who should be able to edit.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newSecretKey,expression:"newSecretKey"}],staticClass:"f7 gray",attrs:{id:"newkey",placeholder:"l4ttesNbr0wn1es"},domProps:{value:e.newSecretKey},on:{input:function(t){t.target.composing||(e.newSecretKey=t.target.value)}}}),r("button",{staticClass:"mv2 mr2 f6 link dim ph3 pv2 mb2 dib white bg-purple",on:{click:e.clickCreate}},[e._v("Create My Map")])]],2)},V=[],X=(r("6b54"),r("c909")),ee=r.n(X),te={name:"Settings",data:function(){return{newLayer:"",newSecretKey:"",layer:m,secretkey:h}},computed:{readOnlyUrl:function(){return new ee.a(window.location).removeQuery("secretkey").toString()},collaborationUrl:function(){return new ee.a(window.location).toString()},csvUrl:function(){return w},geoJSONUrl:function(){return g}},methods:{clickCreate:function(){window.location.search="?layer=".concat(this.newLayer,"&secretkey=").concat(this.newSecretKey)},clickNew:function(){window.location.search=""}}},re=te,ae=(r("3fad"),Object(D["a"])(re,H,V,!1,null,"5601030c",null)),ne=ae.exports,ie={name:"app",components:{Map:T,FeatureInfo:Y,NewFeature:B,Settings:ne},data:function(){return{sidebarOpen:!0}},watch:{sidebarOpen:function(){this.$nextTick((function(){return window.map.resize()}))}},created:function(){var e=this;p.$on("select-feature",(function(){return e.sidebarOpen=!0}))}};r("948e");var se=ie,oe=(r("034f"),Object(D["a"])(se,n,i,!1,null,null,null)),ce=oe.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ce)}}).$mount("#app")},"64a9":function(e,t,r){},"922e":function(e,t,r){},b6cf:function(e,t,r){},c518:function(e,t,r){"use strict";var a=r("cf7c"),n=r.n(a);n.a},cb8c:function(e,t,r){"use strict";var a=r("b6cf"),n=r.n(a);n.a},cf7c:function(e,t,r){}});
//# sourceMappingURL=app.9ff7701b.js.map