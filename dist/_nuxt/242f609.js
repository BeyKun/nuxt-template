(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{435:function(t,e,r){var content=r(453);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("85f3a33a",content,!0,{sourceMap:!1})},452:function(t,e,r){"use strict";var o=r(435);r.n(o).a},453:function(t,e,r){(e=r(9)(!1)).push([t.i,".heading[data-v-1f420248]{color:#fff;font-size:25px;font-weight:700}.datadiri[data-v-1f420248]{width:60px!important}",""]),t.exports=e},480:function(t,e,r){"use strict";r.r(e);r(25),r(33),r(26),r(72),r(73),r(34),r(6),r(27);var o=r(28),n=r(35);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={layout:"admin",data:function(){return{tambahDialog:!1,btnLoader:!1,files:[],form:{email:"",id_goverment:null,jabatan:"",nama:"",nip:"",no_hp:"",organisasi:"",unit_kerja:"",foto_url:null}}},mounted:function(){this.form=JSON.parse(JSON.stringify(this.$auth.user)),this.form.foto_url&&this.files.push({name:"",url:this.form.foto_url}),this.$store.dispatch("goverment/getAll",{showall:0}),console.log(this.form)},methods:Object(o.a)({onSubmit:function(){console.log("submit!")},handleChangeFile:function(t,e){console.log(t),this.form.foto=t.raw},handleChangeSelect:function(data){this.$store.dispatch("goverment/getAll",{search:data,showall:0})},confirmation:function(){this.form.konfirmasi_password==this.form.password?this.onSubmit():this.$notify.error({title:"Konfirmasi Password",message:"Password Tidak Sama"})}},"onSubmit",(function(){var t=this;this.btnLoader=!0;var e="/user/".concat(this.form.id,"/profile"),r=new FormData;r.append("nama",this.form.nama),r.append("email",this.form.email),r.append("jabatan",this.form.jabatan),r.append("id_goverment",this.form.id_goverment),r.append("organisasi",this.form.organisasi),r.append("unit_kerja",this.form.unit_kerja),r.append("nip",this.form.nip),r.append("no_hp",this.form.no_hp),this.form.foto&&(console.log(this.form),r.append("foto",this.form.foto)),this.$axios.post(e,r).then((function(e){e.data.success&&(t.$notify.success({title:"Success",message:"Berhasil Mengubah Profile"}),t.$auth.setUser(e.data.data),t.tambahDialog=!1,t.$store.dispatch("user/getAll",{}))})).finally((function(){t.btnLoader=!1})).catch((function(e){var r=e.response.data.data;r?t.showErrorField(r):t.$notify.error({title:"Error",message:e.response.data.message})}))})),computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)("goverment",["getGoverments"]))},v=(r(452),r(12)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"container-fluid mt--5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("vs-button",{staticStyle:{float:"right","margin-left":"-30px","margin-top":"10px"},attrs:{icon:"",dark:"",shadow:""},on:{click:function(e){t.tambahDialog=!0}}},[r("i",{staticClass:"bx bx-edit"})]),t._v(" "),r("el-card",{staticStyle:{"margin-top":"20px"}},[r("div",{staticClass:"text-center"},[r("el-avatar",{staticStyle:{width:"100px",height:"100px"},attrs:{size:"large",src:t.form.foto_url}}),t._v(" "),r("br"),t._v(" "),r("h3",[t._v(t._s(t.form.nama)+" ("+t._s(t.form.nip)+")")]),t._v(" "),r("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.form.jabatan))])],1),t._v(" "),r("div",{staticStyle:{"margin-top":"20px"}},[r("vs-table",{attrs:{striped:""},scopedSlots:t._u([{key:"thead",fn:function(){return[r("vs-tr",[r("vs-th",{staticClass:"datadiri"},[t._v("\n                    Data Diri\n                  ")]),t._v(" "),r("vs-th")],1)]},proxy:!0},{key:"tbody",fn:function(){return[r("vs-tr",[r("vs-td",[r("b",[t._v("Email")])]),t._v(" "),r("vs-td",[t._v(t._s(t.form.email))])],1),t._v(" "),r("vs-tr",[r("vs-td",[r("b",[t._v("No HP")])]),t._v(" "),r("vs-td",[t._v(t._s(t.form.no_hp))])],1),t._v(" "),r("vs-tr",[r("vs-td",[r("b",[t._v("Pemda Prov / Kab / Kota")])]),t._v(" "),r("vs-td",[t._v(t._s(t.form.goverment?t.form.goverment.nama:"-"))])],1),t._v(" "),r("vs-tr",[r("vs-td",[r("b",[t._v("Unit Kerja")])]),t._v(" "),r("vs-td",[t._v(t._s(t.form.unit_kerja))])],1),t._v(" "),r("vs-tr",[r("vs-td",[r("b",[t._v("Organisasi")])]),t._v(" "),r("vs-td",[t._v(t._s(t.form.unit_kerja))])],1)]},proxy:!0}])})],1)])],1)])]),t._v(" "),r("vs-dialog",{attrs:{width:"mobile"===t.$store.state.drawer.mode?"80%":"60%"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h1",{staticClass:"not-margin"},[t._v("\n        Ubah Profile\n      ")])]},proxy:!0},{key:"footer",fn:function(){return[r("div",{staticClass:"footer-dialog"},[r("vs-row",[r("vs-col",{staticStyle:{padding:"5px"},attrs:{w:"6"}},[r("vs-button",{attrs:{block:"",loading:t.btnLoader},on:{click:function(e){return t.confirmation()}}},[t._v("Simpan")])],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{w:"6"}},[r("vs-button",{attrs:{block:"",border:""},on:{click:function(e){t.tambahDialog=!1,t.resetForm()}}},[t._v("Batal")])],1)],1),t._v(" "),r("div",[t._v(" ")])],1)]},proxy:!0}]),model:{value:t.tambahDialog,callback:function(e){t.tambahDialog=e},expression:"tambahDialog"}},[t._v(" "),r("div",{staticClass:"con-form"},[r("vs-row",[r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"12"}},[r("label",[t._v("Foto")]),t._v(" "),r("el-upload",{attrs:{action:"/","on-change":t.handleChangeFile,"list-type":"picture-card",accept:"image/*","file-list":t.files,limit:1}},[r("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("Nama")]),t._v(" "),r("vs-input",{attrs:{type:"text",placeholder:"Nama"},model:{value:t.form.nama,callback:function(e){t.$set(t.form,"nama",e)},expression:"form.nama"}})],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("NIP")]),t._v(" "),r("vs-input",{attrs:{type:"number",placeholder:"NIP"},model:{value:t.form.nip,callback:function(e){t.$set(t.form,"nip",e)},expression:"form.nip"}})],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("No HP")]),t._v(" "),r("vs-input",{attrs:{type:"number",placeholder:"No HP"},model:{value:t.form.no_hp,callback:function(e){t.$set(t.form,"no_hp",e)},expression:"form.no_hp"}})],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("Email")]),t._v(" "),r("vs-input",{attrs:{placeholder:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("Jabatan")]),t._v(" "),r("vs-input",{attrs:{type:"text",placeholder:"Jabatan"},model:{value:t.form.jabatan,callback:function(e){t.$set(t.form,"jabatan",e)},expression:"form.jabatan"}})],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("Pemda Prov/Kab/Kota")]),t._v(" "),r("vs-select",{attrs:{filter:"",placeholder:"Pemda Prov/Kab/Kota"},model:{value:t.form.id_goverment,callback:function(e){t.$set(t.form,"id_goverment",e)},expression:"form.id_goverment"}},t._l(t.getGoverments.data,(function(e){return r("vs-option",{key:e.id,attrs:{label:e.nama,value:e.id}},[t._v("\n              "+t._s(e.nama)+"\n            ")])})),1)],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("Organisasi")]),t._v(" "),r("vs-input",{attrs:{type:"text",placeholder:"Organisasi Daerah"},model:{value:t.form.organisasi,callback:function(e){t.$set(t.form,"organisasi",e)},expression:"form.organisasi"}})],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("Unit Kerja")]),t._v(" "),r("vs-input",{attrs:{type:"text",placeholder:"Unit Kerja"},model:{value:t.form.unit_kerja,callback:function(e){t.$set(t.form,"unit_kerja",e)},expression:"form.unit_kerja"}})],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("Password")]),t._v(" "),r("vs-input",{attrs:{type:"password",placeholder:"Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("vs-col",{staticStyle:{padding:"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center",w:"6"}},[r("label",[t._v("Konfirmasi Password")]),t._v(" "),r("vs-input",{attrs:{type:"password",placeholder:"Konfirmasi Password"},model:{value:t.form.konfirmasi_password,callback:function(e){t.$set(t.form,"konfirmasi_password",e)},expression:"form.konfirmasi_password"}})],1)],1)],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header bg-primary pb-6",staticStyle:{"z-index":"-1"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"header-body"},[e("h1",{staticClass:"heading"},[this._v("Profil")])])])])}],!1,null,"1f420248",null);e.default=component.exports}}]);