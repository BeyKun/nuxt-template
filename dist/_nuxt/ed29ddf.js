(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{442:function(t,e,r){var content=r(464);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("a7363d28",content,!0,{sourceMap:!1})},452:function(t,e,r){"use strict";r.r(e);r(41);var n=r(18),o=r(29);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={data:function(){return{beginZero:!0,labels:["-","-","-"],labels2:["-","-","-"],types:[{bgColor:"#de98ab",borderColor:"0c0306",data:[0,0,0],dataLabel:"Segmentasi"},{bgColor:"#98ddde",borderColor:"030c0c",data:[0,0,0],dataLabel:"Kagetori"}]}},mounted:function(){this.$store.dispatch("service/getChartLaporanMasuk",{type:"segmentasi"}),this.$store.dispatch("service/getChartLaporanMasuk",{type:"kategori"})},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("service",["getChart"])),watch:{getChart:{handler:function(t){this.labels=t.segmentasi.map((function(t){return t.text})),this.types[0].data=t.segmentasi.map((function(t){return t.data})),this.labels2=t.kategori.map((function(t){return t.text})),this.types[1].data=t.kategori.map((function(t){return t.data}))},deep:!0}}},d=r(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("chartjs-bar",{attrs:{backgroundcolor:t.types[0].bgColor,beginzero:t.beginZero,bind:!0,bordercolor:t.types[0].borderColor,data:t.types[0].data,datalabel:t.types[0].dataLabel,labels:t.labels}}),t._v(" "),r("chartjs-bar",{attrs:{backgroundcolor:t.types[1].bgColor,beginzero:t.beginZero,bind:!0,bordercolor:t.types[1].borderColor,data:t.types[1].data,datalabel:t.types[1].dataLabel,labels:t.labels2}})],1)}),[],!1,null,null,null);e.default=component.exports},453:function(t,e,r){"use strict";r.r(e);r(5),r(40);var n=r(3),o={data:function(){return{datasets:[{data:[0,0,0,0,0],backgroundColor:["#f36e60","#ffdb3b","#185190","#29f1c3","#be90d4"],hoverBackgroundColor:["#fbd2cd","#fef5c9","#d1e3f7","#7befb2","#9b59b6"]}],labels:["Sila Ke 1","Sila Ke 2","Sila Ke 3","Sila Ke 4","Sila Ke 5"],option:{}}},mounted:function(){this.getLaporan()},methods:{getLaporan:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/laporan-kandungan-pancasila").then((function(e){if(e.data.success){var data=e.data.data;t.datasets[0].data=[data.sila_ke_1,data.sila_ke_2,data.sila_ke_3,data.sila_ke_4,data.sila_ke_5]}})).finally((function(){t.loadingBeritaPopuler=!1}));case 2:case"end":return e.stop()}}),e)})))()}}},l=r(13),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("chartjs-doughnut",{attrs:{bind:!0,datasets:this.datasets,labels:this.labels,option:this.option}})],1)}),[],!1,null,null,null);e.default=component.exports},454:function(t,e,r){"use strict";r.r(e);r(41);var n=r(18),o=r(29);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={data:function(){return{bgColor:"#81894e",beginZero:!0,borderColor:"#81894e",btn:[{label:"Minggu ini",value:"week"},{label:"Per Bulan",value:"month"},{label:"Per Tahun",value:"year"}],data:{week:[0,0,0],month:[0,0,0],year:[0,0,0]},dataLabel:"Total Laporan Masuk",labels:{week:["-","-","-"],month:["-","-","-"],year:["-","-","-"]},radio:"week"}},mounted:function(){this.$store.dispatch("service/getChartLaporanMasuk",{type:"time"})},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("service",["getChart"])),watch:{getChart:{handler:function(t){this.data.week=t.time.week.map((function(t){return t.data})),this.labels.week=t.time.week.map((function(t){return t.text})),this.data.month=t.time.month.map((function(t){return t.data})),this.labels.month=t.time.month.map((function(t){return t.text})),this.data.year=t.time.year.map((function(t){return t.data})),this.labels.year=t.time.year.map((function(t){return t.text}))},deep:!0}}},d=r(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card-body"},[r("h2",{staticClass:"card-title"},[t._v("Laporan Masuk")]),t._v(" "),r("div",{staticClass:"btn-group btn-group-toggle"},t._l(t.btn,(function(e,n){return r("label",{key:n,staticClass:"btn btn-success",class:{active:e.value==t.radio}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.radio,expression:"radio"}],attrs:{name:t.dataLabel,type:"radio"},domProps:{value:e.value,checked:t._q(t.radio,e.value)},on:{change:function(r){t.radio=e.value}}}),t._v("\n        "+t._s(e.label)+"\n      ")])})),0)]),t._v(" "),r("div",{staticClass:"card-img-bottom"},[r("chartjs-line",{attrs:{backgroundcolor:t.bgColor,beginzero:t.beginZero,bind:!0,bordercolor:t.borderColor,data:t.data[t.radio],datalabel:t.dataLabel,labels:t.labels[t.radio]}})],1)])}),[],!1,null,null,null);e.default=component.exports},463:function(t,e,r){"use strict";r(442)},464:function(t,e,r){(e=r(10)(!1)).push([t.i,".text-precentage[data-v-c4e59aa2]{font-size:14px;font-weight:700}span.top-nama>a>span.el-link--inner[data-v-c4e59aa2]{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;width:150px!important}",""]),t.exports=e},487:function(t,e,r){"use strict";r.r(e);r(5);var n=r(18),o=(r(40),r(3)),l=r(452),c=r(453),d=r(454),m=r(29);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={components:{ChartBar:l.default,ChartDoughnut:c.default,ChartLine:d.default},layout:"admin",data:function(){return{searchGoverment:"",summary:{laporan:{type:"up",current:0,previous:0,precentage:0},kegiatan:{type:"up",current:0,previous:0,precentage:0},berita:{type:"up",current:0,previous:0,precentage:0}},beritaPopuler:[],loadingBeritaPopuler:!0}},mounted:function(){this.getSummary(),this.getBeritaPopuler(),this.$store.dispatch("goverment/getPlains",{showall:0})},methods:{searchData:function(){this.$store.dispatch("service/getChartLaporanMasuk",{type:"segmentasi",goverment:this.searchGoverment}),this.$store.dispatch("service/getChartLaporanMasuk",{type:"kategori",goverment:this.searchGoverment}),this.$store.dispatch("service/getChartLaporanMasuk",{type:"time",goverment:this.searchGoverment})},getSummary:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/summary").then((function(e){e.data.success&&(t.summary=e.data.data)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getBeritaPopuler:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/berita-populer").then((function(e){e.data.success&&(t.beritaPopuler=e.data.data)})).finally((function(){t.loadingBeritaPopuler=!1}));case 2:case"end":return e.stop()}}),e)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.b)("goverment",["getGovermentPlains"]))},f=(r(463),r(13)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header bg-primary pb-6"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"header-body"},[r("div",{staticClass:"row",staticStyle:{"padding-top":"20px"}},[r("div",{staticClass:"col-xl-4"},[r("div",{staticClass:"card card-stats"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[t._m(0),t._v(" "),r("span",{staticClass:"h2 font-weight-bold mb-0"},[t._v(t._s(t.numberWithCommas(t.summary.laporan.current))+"\n                    ")])])]),t._v(" "),r("p",{staticClass:"mt-3 mb-0 text-sm"},[r("span",{class:{"text-precentage":!0,"text-success":"up"==t.summary.laporan.type,"text-primary":"down"==t.summary.laporan.type,"mr-2":!0}},[r("i",{class:{las:!0,"la-angle-double-up":"up"==t.summary.laporan.type,"la-angle-double-down":"down"==t.summary.laporan.type}}),t._v(" "),r("b",[t._v(t._s(t.summary.laporan.precentage)+"%")])]),t._v(" "),r("span",{staticClass:"text-nowrap"},[t._v("Dari bulan lalu")])])])])]),t._v(" "),r("div",{staticClass:"col-xl-4"},[r("div",{staticClass:"card card-stats"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[t._m(1),t._v(" "),r("span",{staticClass:"h2 font-weight-bold mb-0"},[t._v(t._s(t.numberWithCommas(t.summary.kegiatan.current))+"\n                    ")])])]),t._v(" "),r("p",{staticClass:"mt-3 mb-0 text-sm"},[r("span",{class:{"text-precentage":!0,"text-success":"up"==t.summary.kegiatan.type,"text-primary":"down"==t.summary.kegiatan.type,"mr-2":!0}},[r("i",{class:{las:!0,"la-angle-double-up":"up"==t.summary.kegiatan.type,"la-angle-double-down":"down"==t.summary.kegiatan.type}}),t._v(" "),r("b",[t._v(t._s(t.summary.kegiatan.precentage)+"%")])]),t._v(" "),r("span",{staticClass:"text-nowrap"},[t._v("Dari bulan lalu")])])])])]),t._v(" "),r("div",{staticClass:"col-xl-4"},[r("div",{staticClass:"card card-stats"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[t._m(2),t._v(" "),r("span",{staticClass:"h2 font-weight-bold mb-0"},[t._v(t._s(t.numberWithCommas(t.summary.berita.current)))])])]),t._v(" "),r("p",{staticClass:"mt-3 mb-0 text-sm"},[r("span",{class:{"text-precentage":!0,"text-success":"up"==t.summary.berita.type,"text-primary":"down"==t.summary.berita.type,"mr-2":!0}},[r("i",{class:{las:!0,"la-angle-double-up":"up"==t.summary.berita.type,"la-angle-double-down":"down"==t.summary.berita.type}}),t._v(" "),r("b",[t._v(t._s(t.summary.berita.precentage)+"%")])]),t._v(" "),r("span",{staticClass:"text-nowrap"},[t._v("Dari bulan lalu")])])])])])])])])]),t._v(" "),r("div",{staticClass:"container-fluid mt--6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-6"},[r("el-card",{staticStyle:{"margin-top":"20px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("h5",{staticClass:"h3 mb-0"},[t._v("Berita Populer")])]),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingBeritaPopuler,expression:"loadingBeritaPopuler"}],attrs:{data:t.beritaPopuler,stripe:""}},[r("el-table-column",{attrs:{type:"index",width:"50",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"Judul Berita"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.judul,placement:"top"}},[r("el-link",{staticClass:"text-truncate",attrs:{type:"primary"}},[t._v(t._s(t.truncateString(e.row.judul,50)))])],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Dibaca",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.total)+"\n              ")]}}])})],1)],1)],1),t._v(" "),r("div",{staticClass:"col-xl-6"},[r("el-card",{staticClass:"mt-10",staticStyle:{"margin-top":"20px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("h5",{staticClass:"h3 mb-0"},[t._v("Laporan Per Kandungan Pancasila")])]),t._v(" "),r("client-only",[r("ChartDoughnut")],1)],1)],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 text-center",staticStyle:{"margin-top":"20px"}},[t._m(3),t._v(" "),r("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",clearable:"",filterable:"",placeholder:"Pilih Pemda"},on:{change:function(e){return t.searchData()}},model:{value:t.searchGoverment,callback:function(e){t.searchGoverment=e},expression:"searchGoverment"}},t._l(t.getGovermentPlains,(function(e){return r("el-option",{key:"gov-"+e.id,staticStyle:{height:"60px"},attrs:{label:e.nama,value:e.id}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-2"},[r("span",{staticStyle:{float:"left"}},[r("img",{attrs:{src:e.foto_url,height:"30",width:"auto",alt:""}})])]),t._v(" "),r("div",{staticClass:"col-10"},[r("span",[t._v(t._s(e.nama))])])])])})),1)],1),t._v(" "),r("div",{staticClass:"col-md-12"},[r("el-card",{staticStyle:{"margin-top":"20px"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("ChartLine")],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("ChartBar")],1)])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[e("i",{staticClass:"las la-book-reader"}),this._v(" Laporan\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[e("i",{staticClass:"las la-chalkboard-teacher"}),this._v("\n                      Kegiatan")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[e("i",{staticClass:"las la-coins"}),this._v(" Berita")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("b",[this._v("Pemerintah Daerah")])])}],!1,null,"c4e59aa2",null);e.default=component.exports;installComponents(component,{ChartDoughnut:r(453).default,ChartLine:r(454).default,ChartBar:r(452).default})}}]);