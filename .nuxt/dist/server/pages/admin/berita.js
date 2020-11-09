exports.ids = [2];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("db9c7808", content, true, context)
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_berita_vue_vue_type_style_index_0_id_24760085_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_berita_vue_vue_type_style_index_0_id_24760085_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_berita_vue_vue_type_style_index_0_id_24760085_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_berita_vue_vue_type_style_index_0_id_24760085_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_berita_vue_vue_type_style_index_0_id_24760085_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_berita_vue_vue_type_style_index_0_id_24760085_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".heading[data-v-24760085]{color:#fff;font-size:25px;font-weight:700}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/berita.vue?vue&type=template&id=24760085&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"header bg-primary pb-6\" style=\"z-index:-1\" data-v-24760085><div class=\"container-fluid\" data-v-24760085><div class=\"header-body\" data-v-24760085><h1 class=\"heading\" data-v-24760085>Berita</h1></div></div></div> "),_vm._ssrNode("<div class=\"container-fluid mt--5\" data-v-24760085>","</div>",[_c('el-card',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.getLoader),expression:"getLoader"}]},[_c('div',{staticClass:"row",staticStyle:{"margin-bottom":"20px"}},[_c('div',{staticClass:"col-md-3 offset-md-9"},[_c('el-input',{attrs:{"placeholder":"Cari","size":"mini"},on:{"change":function($event){return _vm.searchData()}},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}},[_c('i',{staticClass:"el-input__icon el-icon-search",attrs:{"slot":"prefix"},slot:"prefix"})])],1)]),_vm._v(" "),_c('vs-table',{attrs:{"striped":""},scopedSlots:_vm._u([{key:"thead",fn:function(){return [_c('vs-tr',[_c('vs-th',[_vm._v("Judul")]),_vm._v(" "),_c('vs-th',[_vm._v("Dilihat")]),_vm._v(" "),_c('vs-th',[_vm._v("Tanggal Posting")]),_vm._v(" "),_c('vs-th',[_vm._v("Aktif")]),_vm._v(" "),_c('vs-th',[_vm._v("Action")])],1)]},proxy:true},{key:"tbody",fn:function(){return _vm._l((_vm.getBeritas.data),function(tr,i){return _c('vs-tr',{key:i,attrs:{"data":tr}},[_c('vs-td',[_vm._v("\n                "+_vm._s(_vm.truncateString(tr.judul, 70))+"\n            ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.dilihat)+"\n            ")]),_vm._v(" "),_c('vs-td',[_vm._v("\n              "+_vm._s(tr.created_at)+"\n            ")]),_vm._v(" "),_c('vs-td',[(tr.aktif)?_c('span',{staticClass:"badge badge-success"},[_vm._v("Aktif")]):_c('span',{staticClass:"badge badge-warning"},[_vm._v("Non Aktif")])]),_vm._v(" "),_c('vs-td',[_c('el-tooltip',{attrs:{"content":"Edit","placement":"top-start","effect":"dark"}},[_c('el-button',{attrs:{"size":"mini","icon":"fa fa-edit"},on:{"click":function($event){return _vm.edit(tr)}}})],1),_vm._v(" "),_c('el-tooltip',{attrs:{"content":"Delete","placement":"top-start","effect":"dark"}},[_c('el-button',{attrs:{"size":"mini","type":"primary","icon":"fa fa-trash"},on:{"click":function($event){return _vm.deleteBerita(tr.id)}}})],1)],1)],1)})},proxy:true},{key:"footer",fn:function(){return [_c('vs-row',[_c('vs-col',{attrs:{"w":"2"}},[_c('small',[_vm._v("Total : "+_vm._s(_vm.getBeritas.total)+" Data")])]),_vm._v(" "),_c('vs-col',{attrs:{"w":"10"}},[_c('vs-pagination',{attrs:{"length":Math.ceil(_vm.getBeritas.total / _vm.table.max)},model:{value:(_vm.page),callback:function ($$v) {_vm.page=$$v},expression:"page"}})],1)],1)]},proxy:true}])})],1)],1),_vm._ssrNode(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":"Buat Berita Baru","placement":"top-start"}},[_c('a',{staticClass:"float",on:{"click":function($event){_vm.tambahDialog = true; _vm.titleDialog = 'Tambah Berita'}}},[_c('i',{staticClass:"el-icon-plus my-float"})])]),_vm._ssrNode(" "),_c('vs-dialog',{attrs:{"width":_vm.$store.state.drawer.mode === 'mobile' ? '80%' : '60%'},on:{"close":function($event){return _vm.resetForm()}},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h1',{staticClass:"not-margin"},[_vm._v("\n        "+_vm._s(_vm.titleDialog)+"\n      ")])]},proxy:true},{key:"footer",fn:function(){return [_c('div',{staticClass:"footer-dialog"},[_c('vs-row',[_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"w":"6"}},[(_vm.isUpdate)?_c('vs-button',{attrs:{"block":"","loading":_vm.btnLoader},on:{"click":function($event){return _vm.onSubmit('update')}}},[_vm._v("Update")]):_c('vs-button',{attrs:{"block":"","loading":_vm.btnLoader},on:{"click":function($event){return _vm.onSubmit('store')}}},[_vm._v("Simpan")])],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"w":"6"}},[_c('vs-button',{attrs:{"block":"","border":""},on:{"click":function($event){_vm.tambahDialog = false; _vm.resetForm()}}},[_vm._v("Batal")])],1)],1),_vm._v(" "),_c('div',[_vm._v(" ")])],1)]},proxy:true}]),model:{value:(_vm.tambahDialog),callback:function ($$v) {_vm.tambahDialog=$$v},expression:"tambahDialog"}},[_vm._v(" "),_c('div',{staticClass:"con-form"},[_c('vs-row',[_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('label',[_vm._v("Judul")]),_vm._v(" "),_c('vs-input',{attrs:{"type":"text","placeholder":"Judul"},model:{value:(_vm.form.judul),callback:function ($$v) {_vm.$set(_vm.form, "judul", $$v)},expression:"form.judul"}})],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"12"}},[_c('label',[_vm._v("Deskripsi")]),_vm._v(" "),_c('client-only',[_c('vue-editor',{model:{value:(_vm.form.deskripsi),callback:function ($$v) {_vm.$set(_vm.form, "deskripsi", $$v)},expression:"form.deskripsi"}})],1)],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"12"}},[_c('label',[_vm._v("Banner")]),_vm._v(" "),_c('el-upload',{attrs:{"action":_vm.api_url + '/fake-upload',"on-change":_vm.handleChangeFile,"list-type":"picture-card","accept":"image/*","file-list":_vm.files,"limit":1}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('vs-col',{staticStyle:{"padding":"5px"},attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","w":"6"}},[_c('vs-row',[_c('vs-col',{attrs:{"w":"2"}},[_c('label',[_vm._v("Aktif")])]),_vm._v(" "),_c('vs-col',{attrs:{"w":"10"}},[_c('vs-switch',{staticStyle:{"width":"20px"},model:{value:(_vm.form.aktif),callback:function ($$v) {_vm.$set(_vm.form, "aktif", $$v)},expression:"form.aktif"}})],1)],1)],1)],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/berita.vue?vue&type=template&id=24760085&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./global.config.js
var global_config = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/berita.vue?vue&type=script&lang=js&
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


/* harmony default export */ var beritavue_type_script_lang_js_ = ({
  layout: 'admin',
  components: {},

  data() {
    return {
      api_url: global_config["a" /* config */].baseApiUrl,
      table: {
        max: 10
      },
      page: 1,
      titleDialog: 'Tambah Berita',
      tambahDialog: false,
      search: '',
      isUpdate: false,
      btnLoader: false,
      files: [],
      form: {
        judul: '',
        deskripsi: '',
        aktif: true,
        banner: null
      }
    };
  },

  mounted() {
    this.$store.dispatch('berita/getAll', {});
  },

  methods: {
    searchData() {
      this.$store.dispatch('berita/getAll', {
        search: this.search
      });
    },

    edit(data) {
      this.form.judul = data.judul;
      this.form.id = data.id;
      this.form.aktif = data.aktif;
      this.form.deskripsi = data.deskripsi;
      this.files.push({
        name: '',
        url: data.banner_url
      });
      this.tambahDialog = true;
      this.titleDialog = 'Edit Berita';
      this.isUpdate = true;
    },

    resetForm() {
      this.form = {
        judul: '',
        banner: null,
        aktif: true,
        deskripsi: ''
      };
      this.files = [];
      this.isUpdate = false;
    },

    handleCurrentChange(val) {
      this.$store.commit('berita/setPage', val);
      this.$store.dispatch('berita/getAll', {});
    },

    onSubmit(type = 'store') {
      this.btnLoader = true;
      let formData = new FormData();
      formData.append("judul", this.form.judul);
      formData.append("deskripsi", this.form.deskripsi);
      formData.append("aktif", this.form.aktif ? 1 : 0);

      if (this.form.banner !== null) {
        formData.append("banner", this.form.banner);
      }

      let url = "/berita/store";

      if (type == 'update') {
        url = `/berita/${this.form.id}/update`;
      }

      this.$axios.post(url, formData).then(resp => {
        if (resp.data.success) {
          this.$notify.success({
            title: 'Success',
            message: `Berhasil ${type == 'store' ? 'Menambah' : 'Mengubah'} Berita`
          });
          this.tambahDialog = false;
          this.$store.dispatch('berita/getAll', {});
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

    handleChangeFile(file, fileList) {
      this.form.banner = file.raw;
    },

    deleteBerita(id) {
      console.log('delete');
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
          this.$axios.delete(`/berita/${id}/delete`).then(resp => {
            if (resp.data.success) {
              this.$notify.success({
                title: 'Success',
                message: 'Berhasil Menghapus Data'
              });
              this.tambahDialog = false;
              this.$store.dispatch('berita/getAll', {
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
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])("berita", ['getBeritas', 'getLoader'])
  },
  watch: {
    getBeritas(newValue, oldValue) {},

    search(newValue, oldValue) {// this.$store.dispatch('berita/getAll', {
      //   search: newValue
      // });
    },

    page(newValue, oldValue) {
      this.$store.commit('berita/setPage', newValue);
      this.$store.dispatch('berita/getAll', {});
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/berita.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_beritavue_type_script_lang_js_ = (beritavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin/berita.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_beritavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24760085",
  "78d91150"
  
)

/* harmony default export */ var berita = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
const config = {
  // base: '/',
  // baseUrl: 'http://simpulkendali-api.ckmindramayu.com',
  // baseApiUrl : 'http://simpulkendali-api.ckmindramayu.com'
  base: '/',
  baseUrl: 'http://simpulkendali-api.test:8080',
  baseApiUrl: 'http://simpulkendali-api.test:8080'
};


/***/ })

};;
//# sourceMappingURL=berita.js.map