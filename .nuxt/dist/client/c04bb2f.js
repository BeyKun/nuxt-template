(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{437:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var r={base:"/simpulkendali/",baseUrl:"http://simpulkendali-api.ckmindramayu.com",baseApiUrl:"http://simpulkendali-api.ckmindramayu.com"}},439:function(t,e,o){var content=o(458);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("4e9595a3",content,!0,{sourceMap:!1})},457:function(t,e,o){"use strict";o(439)},458:function(t,e,o){(e=o(10)(!1)).push([t.i,".heading[data-v-644bc8a9]{color:#fff;font-size:25px;font-weight:700}.datadiri[data-v-644bc8a9]{width:60px!important}",""]),t.exports=e},484:function(t,e,o){"use strict";o.r(e);o(5);var r=o(18),n=o(29),l=o(437);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var f={layout:"admin",data:function(){return{api_url:l.a.baseApiUrl,tambahDialog:!1,btnLoader:!1,files:[],form:{email:"",jabatan:"",nama:"",nip:"",password:"",konfirmasi_password:"",foto_url:null}}},mounted:function(){this.form=JSON.parse(JSON.stringify(this.$auth.user)),this.form.foto_url&&this.files.push({name:"",url:this.form.foto_url}),this.form.password="",this.form.konfirmasi_password="",this.$store.dispatch("goverment/getAll",{showall:0}),console.log(this.form)},methods:Object(r.a)({onSubmit:function(){console.log("submit!")},handleChangeFile:function(t,e){console.log(t),this.form.foto=t.raw},handleChangeSelect:function(data){this.$store.dispatch("goverment/getAll",{search:data,showall:0})},confirmation:function(){this.form.konfirmasi_password==this.form.password?this.onSubmit():this.$notify.error({title:"Konfirmasi Password",message:"Password Tidak Sama"})}},"onSubmit",(function(){var t=this;this.btnLoader=!0;var e="/user/".concat(this.form.id,"/profile"),o=new FormData;o.append("nama",this.form.nama),o.append("email",this.form.email),o.append("jabatan",this.form.jabatan),o.append("nip",this.form.nip),""!==this.form.password&&o.append("password",this.form.password),this.form.foto&&o.append("foto",this.form.foto),this.$axios.post(e,o).then((function(e){e.data.success&&(t.$notify.success({title:"Success",message:"Berhasil Mengubah Profile"}),t.$auth.setUser(e.data.data),t.tambahDialog=!1,t.$store.dispatch("user/getAll",{}))})).finally((function(){t.btnLoader=!1})).catch((function(e){var o=e.response.data.data;o?t.showErrorField(o):t.$notify.error({title:"Error",message:e.response.data.message})}))})),computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)("goverment",["getGoverments"]))},d=(o(457),o(13)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"container-fluid mt--5"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("vs-button",{staticStyle:{float:"right","margin-left":"-30px","margin-top":"10px"},attrs:{icon:"",dark:"",shadow:""},on:{click:function(e){t.tambahDialog=!0}}},[o("i",{staticClass:"bx bx-edit"})]),t._v(" "),o("el-card",{staticStyle:{"margin-top":"20px"}},[o("div",{staticClass:"text-center"},[o("el-avatar",{staticStyle:{width:"100px",height:"100px"},attrs:{size:"large",src:t.form.foto_url}}),t._v(" "),o("br"),t._v(" "),o("h3",[t._v(t._s(t.form.nama)+" ("+t._s(t.form.nip)+")")]),t._v(" "),o("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.form.jabatan))])],1),t._v(" "),o("div",{staticStyle:{"margin-top":"20px"}},[o("vs-table",{attrs:{striped:""},scopedSlots:t._u([{key:"thead",fn:function(){return[o("vs-tr",[o("vs-th",{staticClass:"datadiri"},[t._v("\n                    Data Diri\n                  ")]),t._v(" "),o("vs-th")],1)]},proxy:!0},{key:"tbody",fn:function(){return[o("vs-tr",[o("vs-td",[o("b",[t._v("Email")])]),t._v(" "),o("vs-td",[t._v(t._s(t.form.email))])],1),t._v(" "),o("vs-tr",[o("vs-td",[o("b",[t._v("No HP")])]),t._v(" "),o("vs-td",[t._v(t._s(t.form.no_hp))])],1)]},proxy:!0}])})],1)])],1)])]),t._v(" "),o("vs-dialog",{attrs:{width:"mobile"===t.$store.state.drawer.mode?"80%":"60%"},scopedSlots:t._u([{key:"header",fn:function(){return[o("h1",{staticClass:"not-margin"},[t._v("\n        Ubah Profile\n      ")])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"footer-dialog"},[o("vs-row",[o("vs-col",{staticStyle:{padding:"5px"},attrs:{w:"6"}},[o("vs-button",{attrs:{block:"",loading:t.btnLoader},on:{click:function(e){return t.confirmation()}}},[t._v("Simpan")])],1),t._v(" "),o("vs-col",{staticStyle:{padding:"5px"},attrs:{w:"6"}},[o("vs-button",{attrs:{block:"",border:""},on:{click:function(e){t.tambahDialog=!1}}},[t._v("Batal")])],1)],1),t._v(" "),o("div",[t._v(" ")])],1)]},proxy:!0}]),model:{value:t.tambahDialog,callback:function(e){t.tambahDialog=e},expression:"tambahDialog"}},[t._v(" "),o("div",{staticClass:"con-form"},[o("vs-row",[o("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[o("label",[t._v("Foto")]),t._v(" "),o("el-upload",{attrs:{action:t.api_url+"/fake-upload","on-change":t.handleChangeFile,"list-type":"picture-card",accept:"image/*","file-list":t.files,limit:1}},[o("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),o("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[o("label",[t._v("Nama")]),t._v(" "),o("vs-input",{attrs:{type:"text",placeholder:"Nama"},model:{value:t.form.nama,callback:function(e){t.$set(t.form,"nama",e)},expression:"form.nama"}})],1),t._v(" "),o("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[o("label",[t._v("NIP")]),t._v(" "),o("vs-input",{attrs:{type:"number",placeholder:"NIP"},model:{value:t.form.nip,callback:function(e){t.$set(t.form,"nip",e)},expression:"form.nip"}})],1),t._v(" "),o("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[o("label",[t._v("Email")]),t._v(" "),o("vs-input",{attrs:{placeholder:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),o("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[o("label",[t._v("Jabatan")]),t._v(" "),o("vs-input",{attrs:{type:"text",placeholder:"Jabatan"},model:{value:t.form.jabatan,callback:function(e){t.$set(t.form,"jabatan",e)},expression:"form.jabatan"}})],1),t._v(" "),o("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[o("label",[t._v("Password")]),t._v(" "),o("vs-input",{attrs:{type:"password",placeholder:"Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),o("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[o("label",[t._v("Konfirmasi Password")]),t._v(" "),o("vs-input",{attrs:{type:"password",placeholder:"Konfirmasi Password"},model:{value:t.form.konfirmasi_password,callback:function(e){t.$set(t.form,"konfirmasi_password",e)},expression:"form.konfirmasi_password"}})],1)],1)],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header bg-primary pb-6",staticStyle:{"z-index":"-1"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"header-body"},[e("h1",{staticClass:"heading"},[this._v("Profil")])])])])}],!1,null,"644bc8a9",null);e.default=component.exports}}]);