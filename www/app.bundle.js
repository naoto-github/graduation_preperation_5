(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e.default=i.a},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=a(14),s=(n=i)&&n.__esModule?n:{default:n};e.default={data:function(){return{ctx:null,myChart:null,title:"グラフアプリ",city_list:Object.keys(s.default.jinkou_list),selected_city:"市全体",label_data:Object.keys(s.default.jinkou_list["市全体"]),graph_data:Object.values(s.default.jinkou_list["市全体"])}},mounted:function(){this.ctx=document.getElementById("myChart").getContext("2d"),this.myChart=new Chart(this.ctx,{type:"bar",data:{labels:this.label_data,datasets:[{label:this.selected_city,data:this.graph_data}]}})},methods:{},watch:{selected_city:function(){var t=this;this.label_data=Object.keys(s.default.jinkou_list[this.selected_city]),this.graph_data=Object.values(s.default.jinkou_list[this.selected_city]),this.myChart.data.labels=this.label_data,this.myChart.data.datasets.label=this.selected_city,this.myChart.data.datasets.forEach((function(e){e.data=t.graph_data})),this.myChart.update()}}}},,,function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-ons-page",[a("v-ons-toolbar",[a("div",{staticClass:"center"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"right"},[a("v-ons-toolbar-button",[a("v-ons-icon",{attrs:{icon:"ion-navicon, material: md-menu"}})],1)],1)]),t._v(" "),a("h1",[t._v("人口の推移")]),t._v(" "),a("v-ons-select",{model:{value:t.selected_city,callback:function(e){t.selected_city=e},expression:"selected_city"}},t._l(t.city_list,(function(e){return a("option",[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),a("canvas",{attrs:{id:"myChart",height:"400"}})],1)},i=[];n._withStripped=!0},,,,function(t,e,a){t.exports=a(9)},function(t,e,a){"use strict";var n=u(a(5)),i=u(a(11)),s=u(a(12)),l=u(a(13));function u(t){return t&&t.__esModule?t:{default:t}}a(15),a(16),n.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),i.default.use(s.default),new i.default({el:"#app",template:"<app></app>",components:{App:l.default}})},,,,function(t,e,a){"use strict";a.r(e);var n=a(4),i=a(0);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var l=a(7),u=Object(l.a)(i.default,n.a,n.b,!1,null,null,null);u.options.__file="src/App.vue",e.default=u.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=Object.freeze({jinkou_list:{"市全体":{1999:63981,2e3:65553,2001:67521,2002:68741,2003:70181,2004:71722,2005:73750,2006:75583,2007:76963,2008:77888,2009:79184,2010:80680,2011:81568,2012:82701,2013:84317,2014:85365,2015:86099,2016:87084,2017:88256,2018:89202,2019:90154,2020:90974,2021:91652},"赤池町":{1999:2675,2e3:2785,2001:2854,2002:3001,2003:3149,2004:3250,2005:3383,2006:3508,2007:3783,2008:3917,2009:4e3,2010:2548,2011:2639,2012:2703,2013:2748,2014:2745,2015:2801,2016:2996,2017:3149,2018:3257,2019:3553,2020:3852,2021:4091},"浅田町":{1999:4927,2e3:4989,2001:5229,2002:5289,2003:5348,2004:5441,2005:5498,2006:5672,2007:5911,2008:6059,2009:6172,2010:6316,2011:6383,2012:6464,2013:4711,2014:4763,2015:4788,2016:4788,2017:4909,2018:4993,2019:5038,2020:5082,2021:5153}}})}],[[8,1,2]]]);