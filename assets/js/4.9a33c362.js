(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8,15],{160:function(t,l,e){},184:function(t,l,e){"use strict";var r=e(160);e.n(r).a},197:function(t,l,e){"use strict";e.r(l);var r={name:"SvgBadge",props:{label:String,value:String,color:String},computed:{ll:function(){return this.label.length-1},lv:function(){return this.value.length-1}},methods:{imageWidth:function(t){return 8*t+18},d1:function(){return"M0 0h"+(8*this.ll+9)+"v20H0z"},d2:function(){return"M"+(8*this.ll+9)+" 0h"+(8*Math.max(this.ll,this.lv)+1)+"v20H"+(8*this.ll+9)+"z"},d3:function(){return"M0 0h"+(8*(this.ll+this.lv)+18)+"v20H0z"}}},a=e(11),s=Object(a.a)(r,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.imageWidth(t.ll+t.lv),height:"20"}},[e("linearGradient",{attrs:{id:"b",x2:"0",y2:"100%"}},[e("stop",{attrs:{offset:"0","stop-color":"#bbb","stop-opacity":".1"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-opacity":".1"}})],1),t._v(" "),e("clipPath",{attrs:{id:"a"}},[e("rect",{attrs:{width:t.imageWidth(t.ll+t.lv),height:"20",rx:"3",fill:"#fff"}})]),t._v(" "),e("g",{attrs:{"clip-path":"url(#a)"}},[e("path",{attrs:{fill:"#555",d:t.d1()}}),t._v(" "),e("path",{attrs:{fill:"#ff69b4",d:t.d2()}}),t._v(" "),e("path",{attrs:{fill:"url(#b)",d:t.d3()}})]),t._v(" "),e("g",{attrs:{fill:"#fff","text-anchor":"middle","font-family":"DejaVu Sans,Verdana,Geneva,sans-serif","font-size":"110"}},[e("text",{attrs:{x:40*t.ll+55,y:"150",fill:"#010101","fill-opacity":".3",transform:"scale(.1)",textLength:80*t.ll-10}},[t._v(t._s(t.label)+"\n        ")]),t._v(" "),e("text",{attrs:{x:40*t.ll+55,y:"140",transform:"scale(.1)",textLength:80*t.ll-10}},[t._v("\n            "+t._s(t.label)+"\n        ")]),t._v(" "),e("text",{attrs:{x:80*t.ll+40*t.lv+125,y:"150",fill:"#010101","fill-opacity":".3",transform:"scale(.1)",textLength:80*t.lv-10}},[t._v(t._s(t.value)+"\n        ")]),t._v(" "),e("text",{attrs:{x:80*t.ll+40*t.lv+125,y:"140",transform:"scale(.1)",textLength:80*t.lv-10}},[t._v(t._s(t.value)+"\n        ")])])],1)}),[],!1,null,"af9fb754",null);l.default=s.exports},199:function(t,l,e){"use strict";e.r(l);var r={functional:!0,props:{type:{type:String,default:"tip"},text:String,vertical:{type:String,default:"top"}},render:function(t,l){var e=l.props,r=l.slots;return t("span",{class:["badge",e.type],style:{verticalAlign:e.vertical}},e.text||r().default)}},a=(e(184),e(11)),s=Object(a.a)(r,void 0,void 0,!1,null,"15b7b770",null);l.default=s.exports},292:function(t,l,e){"use strict";e.r(l);e(72),e(199),e(197);var r={name:"words",props:{chapter:String,type:String},computed:{globalWords:function(){var t=this.$page.readingTime.globalWords,l=0;for(var e in t)e.startsWith(this.chapter)&&(l+=t[e]);return l.toLocaleString()},globalWordsText:function(){return"字数: "+this.globalWords+" 字"},globalWordsBadge:function(){return"https://img.shields.io/badge/Doc%20Words-"+this.globalWords+"-ff69b4"}}},a=e(11),s=Object(a.a)(r,(function(){var t=this.$createElement,l=this._self._c||t;return"span"===this.type?l("span",[this._v(this._s(this.globalWords))]):"badge"===this.type?l("SvgBadge",{attrs:{label:"Doc Words",value:this.globalWords,color:"#ff69b4"}}):l("Badge",{attrs:{text:this.globalWordsText}})}),[],!1,null,"53464dc8",null);l.default=s.exports}}]);