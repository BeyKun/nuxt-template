(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{439:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={base:"/",baseUrl:"http://simpulkendali-api.ckmindramayu.com",baseApiUrl:"http://simpulkendali-api.ckmindramayu.com"}},447:function(t,e,n){var content=n(472);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("d68e8424",content,!0,{sourceMap:!1})},471:function(t,e,n){"use strict";var o=n(447);n.n(o).a},472:function(t,e,n){(e=n(10)(!1)).push([t.i,".heading[data-v-7b4f25e5]{color:#fff;font-size:25px;font-weight:700}",""]),t.exports=e},492:function(t,e,n){"use strict";n.r(e);n(27),n(22),n(33),n(28),n(74),n(75),n(34),n(6),n(15),n(52),n(29);var o=n(30),l=n(35),r=n(439);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={layout:"admin",components:{},data:function(){return{api_url:"",headers:{},table:{max:10},page:1,titleDialog:"Tambah Kegiatan",tambahDialog:!1,search:"",isUpdate:!1,btnLoader:!1,files:[],datePicker:["",""],form:{judul:"",deskripsi:"",aktif:!0,evidences:[],tgl_mulai:"",tgl_selesai:""}}},mounted:function(){this.headers=this.$axios.defaults.headers.common,this.api_url=r.a.baseApiUrl,this.$store.dispatch("kegiatan/getAll",{})},methods:{searchData:function(){this.$store.dispatch("kegiatan/getAll",{search:this.search})},handleSuccess:function(t,e,n){this.$notify.success({title:"Success",message:"Berhasil Menambah Evidence"})},handleRemove:function(t,e){var n=this;t.id&&this.$axios.delete("/kegiatan/".concat(this.form.id,"/evidence/").concat(t.id,"/delete")).then((function(t){t.data.success&&n.$notify.success({title:"Success",message:"Berhasil Menghapus Evidence"})})).catch((function(t){n.$notify.error({title:"Error",message:t.response.data.message})})).finally((function(){}))},edit:function(data){var t=this,form=JSON.parse(JSON.stringify(data));this.form.judul=data.judul,this.form.id=data.id,this.form.aktif=data.aktif,this.form.deskripsi=data.deskripsi,this.form.tgl_mulai=this.$moment(form.tgl_mulai,"DD-MM-YYYY hh:mm:ss").format("YYYY-MM-DDTHH:mm:ss"),this.form.tgl_selesai=this.$moment(form.tgl_selesai,"DD-MM-YYYY hh:mm:ss").format("YYYY-MM-DDTHH:mm:ss"),data.evidence.forEach((function(element,e){t.files.push({name:"Evidence "+e,url:element.file_url,id:element.id_file})})),console.log(this.files),this.tambahDialog=!0,this.titleDialog="Edit Kegiatan",this.isUpdate=!0},resetForm:function(){this.form={judul:"",deskripsi:"",aktif:!0,evidences:[],tgl_mulai:"",tgl_selesai:""},this.datePicker=["",""],this.files=[],this.isUpdate=!1},handleCurrentChange:function(t){this.$store.commit("kegiatan/setPage",t),this.$store.dispatch("kegiatan/getAll",{})},onSubmit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store";this.btnLoader=!0;var n=new FormData;n.append("judul",this.form.judul),n.append("deskripsi",this.form.deskripsi),n.append("tgl_mulai",this.form.tgl_mulai),n.append("tgl_selesai",this.form.tgl_selesai),n.append("aktif",this.form.aktif?1:0),0!==this.form.evidences.length&&this.form.evidences.forEach((function(t,e){n.append("evidence[".concat(e,"]"),t.raw)}));var o="/kegiatan/store";"update"==e&&(o="/kegiatan/".concat(this.form.id,"/update")),this.$axios.post(o,n).then((function(n){n.data.success&&(t.$notify.success({title:"Success",message:"Berhasil ".concat("store"==e?"Menambah":"Mengubah"," Kegiatan")}),t.tambahDialog=!1,t.$store.dispatch("kegiatan/getAll",{}),t.resetForm())})).finally((function(){t.btnLoader=!1})).catch((function(e){var n=e.response.data.data;n?t.showErrorField(n):t.$notify.error({title:"Error",message:e.response.data.message})}))},handleChangeFile:function(t,e){this.form.evidences=e},deleteKegiatan:function(t){var e=this;this.$swal({title:"Perhatian!",text:"Apakah anda yakin ingin menghapus data ini?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya",cancelButtonText:"Batal"}).then((function(n){n.isConfirmed&&e.$axios.delete("/kegiatan/".concat(t,"/delete")).then((function(t){t.data.success&&(e.$notify.success({title:"Success",message:"Berhasil Menghapus Data"}),e.tambahDialog=!1,e.$store.dispatch("kegiatan/getAll",{defaultPage:!0}))})).finally((function(){})).catch((function(t){e.$notify.error({title:"Error",message:t.response.data.message})}))}))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("kegiatan",["getKegiatans","getLoader"])),watch:{getKegiatans:function(t,e){},search:function(t,e){},datePicker:function(t,e){console.log(t),null!==t&&0!==t.length&&(this.form.tgl_mulai=t[0],this.form.tgl_selesai=t[1])},page:function(t,e){this.$store.commit("kegiatan/setPage",t),this.$store.dispatch("kegiatan/getAll",{})}}},f=(n(471),n(14)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"container-fluid mt--7"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("vs-button",{staticStyle:{float:"right"},attrs:{warn:"",loading:t.globalLoader,gradient:""},on:{click:function(e){return t.downloadFile("/kegiatan/download/pdf")}}},[t._v("Download PDF")]),t._v("\n         \n        "),n("vs-button",{staticStyle:{float:"right"},attrs:{success:"",loading:t.globalLoader,gradient:""},on:{click:function(e){return t.downloadFile("/kegiatan/download/xlsx")}}},[t._v("Download Excel")])],1)]),t._v(" "),n("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.getLoader,expression:"getLoader"}]},[n("div",{staticClass:"row",staticStyle:{"margin-bottom":"20px"}},[n("div",{staticClass:"col-md-3 offset-md-9"},[n("el-input",{attrs:{placeholder:"Cari",size:"mini"},on:{change:function(e){return t.searchData()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)]),t._v(" "),n("vs-table",{attrs:{striped:""},scopedSlots:t._u([{key:"thead",fn:function(){return[n("vs-tr",[n("vs-th",[t._v("Judul")]),t._v(" "),n("vs-th",[t._v("Dilihat")]),t._v(" "),n("vs-th",[t._v("Tanggal Mulai")]),t._v(" "),n("vs-th",[t._v("Tanggal Selesai")]),t._v(" "),n("vs-th",[t._v("Aktif")]),t._v(" "),n("vs-th",[t._v("Action")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.getKegiatans.data,(function(tr,i){return n("vs-tr",{key:i,attrs:{data:tr}},[n("vs-td",[t._v("\n              "+t._s(t.truncateString(tr.judul,70))+"\n            ")]),t._v(" "),n("vs-td",[t._v("\n              "+t._s(tr.dilihat)+"\n            ")]),t._v(" "),n("vs-td",[t._v("\n              "+t._s(tr.tgl_mulai)+"\n            ")]),t._v(" "),n("vs-td",[t._v("\n              "+t._s(tr.tgl_selesai)+"\n            ")]),t._v(" "),n("vs-td",[tr.aktif?n("span",{staticClass:"badge badge-success"},[t._v("Aktif")]):n("span",{staticClass:"badge badge-warning"},[t._v("Non Aktif")])]),t._v(" "),n("vs-td",[n("el-tooltip",{attrs:{content:"Edit",placement:"top-start",effect:"dark"}},[n("el-button",{attrs:{size:"mini",icon:"fa fa-edit"},on:{click:function(e){return t.edit(tr)}}})],1),t._v(" "),n("el-tooltip",{attrs:{content:"Delete",placement:"top-start",effect:"dark"}},[n("el-button",{attrs:{size:"mini",type:"primary",icon:"fa fa-trash"},on:{click:function(e){return t.deleteKegiatan(tr.id)}}})],1)],1)],1)}))},proxy:!0},{key:"footer",fn:function(){return[n("vs-row",[n("vs-col",{attrs:{w:"2"}},[n("small",[t._v("Total : "+t._s(t.getKegiatans.total)+" Data")])]),t._v(" "),n("vs-col",{attrs:{w:"10"}},[n("vs-pagination",{attrs:{length:Math.ceil(t.getKegiatans.total/t.table.max)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)]},proxy:!0}])})],1)],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Buat Kegiatan Baru",placement:"top-start"}},[n("a",{staticClass:"float",on:{click:function(e){t.tambahDialog=!0,t.titleDialog="Tambah Kegiatan"}}},[n("i",{staticClass:"el-icon-plus my-float"})])]),t._v(" "),n("vs-dialog",{attrs:{width:"mobile"===t.$store.state.drawer.mode?"80%":"60%"},on:{close:function(e){return t.resetForm()}},scopedSlots:t._u([{key:"header",fn:function(){return[n("h1",{staticClass:"not-margin"},[t._v("\n        "+t._s(t.titleDialog)+"\n      ")])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"footer-dialog"},[n("vs-row",[n("vs-col",{staticStyle:{padding:"5px"},attrs:{w:"6"}},[t.isUpdate?n("vs-button",{attrs:{block:"",loading:t.btnLoader},on:{click:function(e){return t.onSubmit("update")}}},[t._v("Update")]):n("vs-button",{attrs:{block:"",loading:t.btnLoader},on:{click:function(e){return t.onSubmit("store")}}},[t._v("Simpan")])],1),t._v(" "),n("vs-col",{staticStyle:{padding:"5px"},attrs:{w:"6"}},[n("vs-button",{attrs:{block:"",border:""},on:{click:function(e){t.tambahDialog=!1,t.resetForm()}}},[t._v("Batal")])],1)],1),t._v(" "),n("div",[t._v(" ")])],1)]},proxy:!0}]),model:{value:t.tambahDialog,callback:function(e){t.tambahDialog=e},expression:"tambahDialog"}},[t._v(" "),n("div",{staticClass:"con-form"},[n("vs-row",[n("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[n("label",[t._v("Judul")]),t._v(" "),n("vs-input",{attrs:{type:"text",placeholder:"Judul"},model:{value:t.form.judul,callback:function(e){t.$set(t.form,"judul",e)},expression:"form.judul"}})],1),t._v(" "),n("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[n("label",[t._v("Deskripsi")]),t._v(" "),n("client-only",[n("vue-editor",{model:{value:t.form.deskripsi,callback:function(e){t.$set(t.form,"deskripsi",e)},expression:"form.deskripsi"}})],1)],1),t._v(" "),n("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[n("label",[t._v("Tanggal Mulai")]),t._v(" "),n("vs-input",{attrs:{type:"datetime-local"},model:{value:t.form.tgl_mulai,callback:function(e){t.$set(t.form,"tgl_mulai",e)},expression:"form.tgl_mulai"}})],1),t._v(" "),n("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[n("label",[t._v("Tanggal Selesai")]),t._v(" "),n("vs-input",{attrs:{type:"datetime-local"},model:{value:t.form.tgl_selesai,callback:function(e){t.$set(t.form,"tgl_selesai",e)},expression:"form.tgl_selesai"}})],1),t._v(" "),n("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[n("label",[t._v("Evidence")]),t._v(" "),t.isUpdate?n("el-upload",{staticClass:"upload-demo",attrs:{name:"evidence","list-type":"picture-card",action:t.api_url+"/kegiatan/"+t.form.id+"/evidence/store",headers:t.headers,"on-change":t.handleChangeFile,accept:"image/*","file-list":t.files,"on-remove":t.handleRemove}},[n("i",{staticClass:"el-icon-plus"})]):n("el-upload",{staticClass:"upload-demo",attrs:{"list-type":"picture-card",action:t.api_url+"/fake-upload","on-change":t.handleChangeFile,accept:"image/*","file-list":t.files}},[n("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),n("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[n("vs-row",[n("vs-col",{attrs:{w:"2"}},[n("label",[t._v("Aktif")])]),t._v(" "),n("vs-col",{attrs:{w:"10"}},[n("vs-switch",{staticStyle:{width:"20px"},model:{value:t.form.aktif,callback:function(e){t.$set(t.form,"aktif",e)},expression:"form.aktif"}})],1)],1)],1)],1)],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header bg-primary pb-6",staticStyle:{"z-index":"-1"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"header-body"},[e("h1",{staticClass:"heading"},[this._v("Kagiatan")])])])])}],!1,null,"7b4f25e5",null);e.default=component.exports}}]);