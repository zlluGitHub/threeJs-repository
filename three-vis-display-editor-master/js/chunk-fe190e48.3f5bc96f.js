(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe190e48"],{"59b8":function(t,e,i){"use strict";i("f749")},be17:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"texture-container"},[i("div",{staticClass:"box-header"},[i("el-input",{attrs:{size:"mini","prefix-icon":"el-icon-search",placeholder:"贴图筛选"}}),i("el-dropdown",{attrs:{trigger:"click"},on:{command:t.addtexture}},[i("el-button",{attrs:{size:"mini",icon:"el-icon-circle-plus-outline",type:"primary"}},[t._v(" 添加贴图 ")]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.texture,(function(e,n){return i("el-dropdown-item",{key:n,attrs:{command:e},domProps:{textContent:t._s(e.label)}})})),1)],1)],1),i("div",{staticClass:"box-container"},[i("div",{staticClass:"texture-main"},t._l(t.textureList,(function(e,n){return i("div",{key:n,staticClass:"texture-elem"},[i("div",{ref:"renderBox"+n,refInFor:!0,staticClass:"render-box",class:{active:t.active.vid===e.vid},attrs:{id:e.vid},on:{click:function(){t.$store.commit("texture/active",e.vid)}}}),i("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"删除",expression:"'删除'",modifiers:{top:!0}}],staticClass:"operate-box"},[i("vis-icon",{attrs:{code:"#iconshanchu"}})],1),i("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:e.name,expression:"item.name",modifiers:{bottom:!0}}],staticClass:"element-title",domProps:{textContent:t._s(e.name)}})])})),0)])])},o=[],r=(i("b0c0"),i("159b"),i("d9e7")),a=i("a734"),c=i("9b8a"),s=[{icon:"#icontexture",label:"图片贴图",loader:r["c"],fun:function(t){Object(c["a"])({request:{method:"get",url:"api/picture"},multiple:!0,type:["jpg","jpeg","png"],confirm:function(e){e.forEach((function(e){t(e)}))}})},getConfig:function(){return JSON.parse(JSON.stringify(r["b"]))}},{icon:"#icontexture",label:"盒子贴图",loader:a["c"],fun:function(t){Object(c["a"])({request:{method:"get",url:"api/picture"},multiple:!0,type:["dir"],confirm:function(e){e.forEach((function(e){t(e)}))}})},getConfig:function(){return JSON.parse(JSON.stringify(a["b"]))}}],u=i("ec26"),l={data:function(){return{texture:s}},computed:{textureList:function(){return this.$store.getters["texture/get"]},active:function(){return this.$store.getters["texture/active"]}},methods:{addtexture:function(t){var e=this;t.fun((function(i){e.$store.commit("loadingManager/load",{url:i.url,loader:t.loader,callBackFun:function(){var n=t.getConfig();n.vid=Object(u["a"])(),n.label=t.label,n.name="".concat(i.name),n.url=i.url,e.$store.commit("texture/add",n)}})}))}}},d=l,f=(i("59b8"),i("2877")),m=Object(f["a"])(d,n,o,!1,null,"6f8e1498",null);e["default"]=m.exports},f749:function(t,e,i){}}]);