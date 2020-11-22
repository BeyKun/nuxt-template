exports.ids = [9];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("055041d4", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_4e5cf764_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_4e5cf764_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_4e5cf764_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_4e5cf764_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_4e5cf764_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_style_index_0_id_4e5cf764_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".heading[data-v-4e5cf764]{color:#fff;font-size:25px;font-weight:700}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/users.vue?vue&type=template&id=4e5cf764&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"header bg-primary pb-6\" style=\"z-index:-1\" data-v-4e5cf764><div class=\"container-fluid\" data-v-4e5cf764><div class=\"header-body\" data-v-4e5cf764><h1 class=\"heading\" data-v-4e5cf764>Users</h1></div></div></div> "),_vm._ssrNode("<div class=\"container-fluid mt--7\" data-v-4e5cf764>","</div>",[_vm._ssrNode("<div class=\"row\" style=\"padding-top:40px\" data-v-4e5cf764>","</div>",[_vm._ssrNode("<div class=\"col-xl-3\" data-v-4e5cf764><div class=\"card card-stats\" data-v-4e5cf764><div class=\"card-body\" data-v-4e5cf764><div class=\"row\" data-v-4e5cf764><div class=\"col\" data-v-4e5cf764><h5 class=\"card-title text-uppercase text-muted mb-0\" data-v-4e5cf764>\n                                          User Aktif</h5> <span class=\"h2 font-weight-bold mb-0\" data-v-4e5cf764>"+_vm._ssrEscape(_vm._s(_vm.numberWithCommas(_vm.getSummary.aktif)))+"</span></div></div></div></div></div> <div class=\"col-xl-3\" data-v-4e5cf764><div class=\"card card-stats\" data-v-4e5cf764><div class=\"card-body\" data-v-4e5cf764><div class=\"row\" data-v-4e5cf764><div class=\"col\" data-v-4e5cf764><h5 class=\"card-title text-uppercase text-muted mb-0\" data-v-4e5cf764>\n                                          User Non Aktif</h5> <span class=\"h2 font-weight-bold mb-0\" data-v-4e5cf764>"+_vm._ssrEscape(_vm._s(_vm.numberWithCommas(_vm.getSummary.non_aktif)))+"</span></div></div></div></div></div> "),_vm._ssrNode("<div class=\"col-md-4 offset-md-2\" data-v-4e5cf764>","</div>",[_c('vs-button',{staticStyle:{"float":"right"},attrs:{"warn":"","loading":_vm.globalLoader,"gradient":""},on:{"click":function($event){return _vm.downloadFile("/user/download/pdf")}}},[_vm._v("Download PDF")]),_vm._ssrNode("\n         \n        "),_c('vs-button',{staticStyle:{"float":"right"},attrs:{"success":"","loading":_vm.globalLoader,"gradient":""},on:{"click":function($event){return _vm.downloadFile("/user/download/xlsx")}}},[_vm._v("Download Excel")])],2)],2),_vm._ssrNode(" "),_c('el-card',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.getLoader),expression:"getLoader"}]},[_c('div',{staticClass:"row",staticStyle:{"margin-bottom":"20px"}},[_c('div',{staticClass:"col-md-3 offset-md-9"},[_c('el-input',{attrs:{"placeholder":"Cari","size":"mini"},on:{"change":function($event){return _vm.searchData()}},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}},[_c('i',{staticClass:"el-input__icon el-icon-search",attrs:{"slot":"prefix"},slot:"prefix"})])],1)]),_vm._v(" "),_c('vs-table',{attrs:{"striped":""},scopedSlots:_vm._u([{key:"thead",fn:function(){return [_c('vs-tr',[_c('vs-th',[_vm._v("Action")]),_vm._v(" "),_c('vs-th',[_vm._v("Aktif")]),_vm._v(" "),_c('vs-th',[_vm._v("Name")]),_vm._v(" "),_c('vs-th',[_vm._v("NIP")]),_vm._v(" "),_c('vs-th',[_vm._v("Email")]),_vm._v(" "),_c('vs-th',[_vm._v("Jabatan")]),_vm._v(" "),_c('vs-th',[_vm._v("Pemda Prov/Kab/Kota")]),_vm._v(" "),_c('vs-th',[_vm._v("Organisasi Daerah")]),_vm._v(" "),_c('vs-th',[_vm._v("Unit Kerja")]),_vm._v(" "),_c('vs-th',[_vm._v("No HP/WA")])],1)]},proxy:true},{key:"tbody",fn:function(){return _vm._l((_vm.getUsers.data),function(tr,i){return _c('vs-tr',{key:i,attrs:{"data":tr}},[_c('vs-td',[_c('el-tooltip',{attrs:{"content":"Edit","placement":"top-start","effect":"dark"}},[_c('el-button',{attrs:{"size":"mini","icon":"fa fa-edit"},on:{"click":function($event){return _vm.edit(tr)}}})],1),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"Delete","placement":"top-start","effect":"dark"}},[_c('el-button',{attrs:{"size":"mini","type":"primary","icon":"fa fa-trash"},on:{"click":function($event){return _vm.deleteUser(tr.id)}}})],1)],1),_vm._v(" "),_c('vs-td',[(tr.aktif)?_c('span',{staticClass:"badge badge-success"},[_vm._v("Aktif")]):_c('span',{staticClass:"badge badge-warning"},[_vm._v("Non Aktif")])]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.nama)+"\n            ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.nip)+"\n            ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.email)+"\n            ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.jabatan)+"\n            ")]),_vm._v(" "),_c('vs-td',[(tr.goverment)?_c('img',{attrs:{"src":tr.goverment.foto_url,"height":"20","width":"auto"}}):_vm._e(),_vm._v("\n              "+_vm._s(tr.goverment ? tr.goverment.nama : '-')+"\n            ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.organisasi)+"\n            ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.unit_kerja)+"\n            ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.no_hp)+"\n            ")])],1)})},proxy:true},{key:"footer",fn:function(){return [_c('vs-row',[_c('vs-col',{attrs:{"w":"2"}},[_c('small',[_vm._v("Total : "+_vm._s(_vm.getUsers.total)+" Data")])]),_vm._v(" "),_c('vs-col',{attrs:{"w":"10"}},[_c('vs-pagination',{attrs:{"length":Math.ceil(_vm.getUsers.total / _vm.table.max)},model:{value:(_vm.page),callback:function ($$v) {_vm.page=$$v},expression:"page"}})],1)],1)]},proxy:true}])})],1)],2),_vm._ssrNode(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"Buat User Baru","placement":"top-start"}},[_c('a',{staticClass:"float",on:{"click":function($event){_vm.tambahDialog = true; _vm.titleDialog = 'Tambah User'}}},[_c('i',{staticClass:"el-icon-plus my-float"})])]),_vm._ssrNode(" "),_c('vs-dialog',{attrs:{"width":_vm.$store.state.drawer.mode === 'mobile' ? '80%' : '60%'},on:{"close":function($event){return _vm.resetForm()}},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h1',{staticClass:"not-margin"},[_vm._v("\n        "+_vm._s(_vm.titleDialog)+"\n      ")])]},proxy:true},{key:"footer",fn:function(){return [_c('div',{staticClass:"footer-dialog"},[_c('vs-row',[_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"w":"6"}},[(_vm.isUpdate)?_c('vs-button',{attrs:{"block":"","loading":_vm.btnLoader},on:{"click":function($event){return _vm.confirmation('update')}}},[_vm._v("Update")]):_c('vs-button',{attrs:{"block":"","loading":_vm.btnLoader},on:{"click":function($event){return _vm.confirmation('store')}}},[_vm._v("Simpan")])],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"w":"6"}},[_c('vs-button',{attrs:{"block":"","border":""},on:{"click":function($event){_vm.tambahDialog = false; _vm.resetForm()}}},[_vm._v("Batal")])],1)],1),_vm._v(" "),_c('div',[_vm._v(" ")])],1)]},proxy:true}]),model:{value:(_vm.tambahDialog),callback:function ($$v) {_vm.tambahDialog=$$v},expression:"tambahDialog"}},[_vm._v(" "),_c('div',{staticClass:"con-form"},[_c('vs-row',[_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Nama")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"text","placeholder":"Nama"},model:{value:(_vm.form.nama),callback:function ($$v) {_vm.$set(_vm.form, "nama", $$v)},expression:"form.nama"}})],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("NIP")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"number","placeholder":"NIP"},model:{value:(_vm.form.nip),callback:function ($$v) {_vm.$set(_vm.form, "nip", $$v)},expression:"form.nip"}})],1),_vm._v(" "),(_vm.form.level == 2)?_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("No HP")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"number","placeholder":"No HP"},model:{value:(_vm.form.no_hp),callback:function ($$v) {_vm.$set(_vm.form, "no_hp", $$v)},expression:"form.no_hp"}})],1):_vm._e(),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Email")]),_vm._v(" "),_c('vs-input',{attrs:{"placeholder":"Email"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Jabatan")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"text","placeholder":"Jabatan"},model:{value:(_vm.form.jabatan),callback:function ($$v) {_vm.$set(_vm.form, "jabatan", $$v)},expression:"form.jabatan"}})],1),_vm._v(" "),(_vm.form.level == 2)?_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Pemda Prov/Kab/Kota")]),_vm._v(" "),_c('vs-select',{attrs:{"filter":"","placeholder":"Pemda Prov/Kab/Kota"},model:{value:(_vm.form.id_goverment),callback:function ($$v) {_vm.$set(_vm.form, "id_goverment", $$v)},expression:"form.id_goverment"}},_vm._l((_vm.getGovermentPlains),function(item){return _c('vs-option',{key:item.id,attrs:{"label":item.nama,"value":item.id}},[_vm._v("\n              "+_vm._s(item.nama)+"\n            ")])}),1)],1):_vm._e(),_vm._v(" "),(_vm.form.level == 2)?_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Organisasi")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"text","placeholder":"Organisasi Daerah"},model:{value:(_vm.form.organisasi),callback:function ($$v) {_vm.$set(_vm.form, "organisasi", $$v)},expression:"form.organisasi"}})],1):_vm._e(),_vm._v(" "),(_vm.form.level == 2)?_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Unit Kerja")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"text","placeholder":"Unit Kerja"},model:{value:(_vm.form.unit_kerja),callback:function ($$v) {_vm.$set(_vm.form, "unit_kerja", $$v)},expression:"form.unit_kerja"}})],1):_vm._e(),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Password")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"password","placeholder":"Password"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Konfirmasi Password")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"password","placeholder":"Konfirmasi Password"},model:{value:(_vm.form.konfirmasi_password),callback:function ($$v) {_vm.$set(_vm.form, "konfirmasi_password", $$v)},expression:"form.konfirmasi_password"}})],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("User Level")]),_vm._v(" "),_c('vs-select',{attrs:{"placeholder":"Level"},model:{value:(_vm.form.level),callback:function ($$v) {_vm.$set(_vm.form, "level", $$v)},expression:"form.level"}},[_c('vs-option',{attrs:{"value":"1","label":"1"}},[_vm._v("1")]),_vm._v(" "),_c('vs-option',{attrs:{"value":"2","label":"2"}},[_vm._v("2")])],1)],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('vs-row',[_c('vs-col',{attrs:{"w":"2"}},[_c('label',[_vm._v("Aktif")])]),_vm._v(" "),_c('vs-col',{attrs:{"w":"10"}},[_c('vs-switch',{staticStyle:{"width":"20px"},model:{value:(_vm.form.aktif),callback:function ($$v) {_vm.$set(_vm.form, "aktif", $$v)},expression:"form.aktif"}})],1)],1)],1)],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/users.vue?vue&type=template&id=4e5cf764&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/users.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  layout: 'admin',
  components: {},

  data() {
    return {
      table: {
        max: 10
      },
      page: 1,
      titleDialog: 'Tambah User',
      tambahDialog: false,
      search: '',
      isUpdate: false,
      btnLoader: false,
      form: {
        nama: "",
        email: "",
        nip: "",
        unit_kerja: "",
        jabatan: "",
        no_hp: "",
        id_goverment: '',
        konfirmasi_password: '',
        password: '',
        organisasi: "",
        aktif: true,
        level: 2,
        foto: null
      }
    };
  },

  mounted() {
    this.$store.dispatch('user/getAll', {
      showall: 1
    });
    this.$store.dispatch('goverment/getPlains', {
      showall: 0
    });
    this.$store.dispatch('user/getUserSummary');
  },

  methods: {
    searchData() {
      this.$store.dispatch('user/getAll', {
        search: this.search
      });
    },

    edit(data) {
      let form = JSON.parse(JSON.stringify(data));
      let searchGov = form.goverment ? form.goverment.nama : ''; // this.$store.dispatch('goverment/getAll', {
      //   search: searchGov,
      //   showall: 0
      // });

      this.tambahDialog = true;
      this.titleDialog = 'Edit User';
      this.isUpdate = true; // setTimeout(() => {

      this.form = form; // }, 1000)
    },

    resetForm() {
      this.form = {
        nama: "",
        email: "",
        nip: "",
        unit_kerja: "",
        jabatan: "",
        no_hp: "",
        id_goverment: '',
        organisasi: "",
        aktif: true,
        level: 2,
        foto: null,
        konfirmasi_password: '',
        password: ''
      };
      this.isUpdate = false;
    },

    confirmation(type) {
      if (this.form.konfirmasi_password == this.form.password) {
        this.onSubmit(type);
      } else {
        // this.$notify.error({
        //   title: 'Konfirmasi Password',
        //   message: `Password Tidak Sama`
        // })
        this.openNotification('top-right', 'danger', `<i class='bx bxs-error-circle'></i>`, 'Konfirmasi Password', 'Password Tidak Sama');
      }
    },

    onSubmit(type = 'store') {
      this.btnLoader = true;
      let url = "/user/store";

      if (type == 'update') {
        url = `/user/${this.form.id}/update`;
      }

      this.$axios.post(url, this.form).then(resp => {
        if (resp.data.success) {
          this.$notify.success({
            title: 'Success',
            message: `Berhasil ${type == 'store' ? 'Menambah' : 'Mengubah'} User`
          });
          this.tambahDialog = false;
          this.resetForm();
          this.$store.dispatch('user/getAll', {});
        }
      }).finally(() => {
        this.btnLoader = false;
      }).catch(err => {
        let error = err.response.data.data;

        if (error) {
          this.showErrorField(error);
        } else {
          this.$notify.error({
            title: 'Error',
            message: err.response.data.message
          });
        }
      });
    },

    deleteUser(id) {
      this.$swal({
        title: 'Perhatian!',
        text: "Apakah anda yakin ingin menghapus data ini?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Batal'
      }).then(result => {
        if (result.isConfirmed) {
          this.$axios.delete(`/user/${id}/delete`).then(resp => {
            if (resp.data.success) {
              this.$notify.success({
                title: 'Success',
                message: 'Berhasil Menghapus Data'
              });
              this.tambahDialog = false;
              this.$store.dispatch('user/getAll', {
                defaultPage: true
              });
            }
          }).finally(() => {//
          }).catch(err => {
            this.$notify.error({
              title: 'Error',
              message: err.response.data.message
            });
          });
        }
      });
    },

    handleChangeSelect(data) {
      this.$store.dispatch('goverment/getAll', {
        search: data,
        showall: 0
      });
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])("user", ['getUsers', 'getLoader', 'getSummary']),
    ...Object(external_vuex_["mapGetters"])("goverment", ['getGovermentPlains'])
  },
  watch: {
    form: {
      handler(val) {
        if (val.level == 1) {
          this.form.id_goverment = '';
          this.form.unit_kerja = '-'; // this.form.jabatan = '-'

          this.form.no_hp = "-";
          this.form.organisasi = "-";
        }
      },

      deep: true
    },

    page(newValue, oldValue) {
      this.$store.commit('user/setPage', newValue);
      this.$store.dispatch('user/getAll', {});
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/users.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin/users.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4e5cf764",
  "2cf28c22"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=users.js.map