exports.ids = [5];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("d8885072", content, true, context)
};

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_b51721f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_b51721f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_b51721f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_b51721f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_b51721f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".heading[data-v-b51721f0]{color:#fff!important;font-size:25px;font-weight:700}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/lapor/detail.vue?vue&type=template&id=b51721f0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"header bg-primary pb-6\" style=\"z-index:-1\" data-v-b51721f0>","</div>",[_vm._ssrNode("<div class=\"container-fluid\" data-v-b51721f0>","</div>",[_vm._ssrNode("<div class=\"header-body\" data-v-b51721f0>","</div>",[_vm._ssrNode("<h1 class=\"heading\" data-v-b51721f0>Detail Laporan</h1> "),_c('el-row',[_c('el-col',[_c('el-card',{staticStyle:{"max-height":"10%"}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"md":14,"lg":14}},[_c('h2',{staticStyle:{"color":"black"}},[_vm._v(_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.judul))]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.deskripsi)}})])],1)],1)],1)],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid mt--6\" data-v-b51721f0>","</div>",[_c('el-card',[_c('el-tabs',{on:{"tab-click":_vm.handleClick},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":"Detail","name":"detail"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Pelaksana Kegiatan")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "+_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.pelaksana_kegiatan)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Waktu Pelaksanaan")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "+_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.tgl_mulai)+" sd "+_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.tgl_selesai)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Tempat Kegiatan")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "+_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.tempat_kegiatan)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Sumber Pembiayaan")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "+_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.sumber_pembiayaan)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Segmen Kegiatan")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "+_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.segmen_kegiatan)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Kategori Kegiatan")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "+_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.kategori_kegiatan)+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Tautan")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "),_c('a',{attrs:{"href":!_vm.getLaporan ? '' : _vm.getLaporan.tautan,"target":"_blank"}},[_vm._v(_vm._s(!_vm.getLaporan ? '' : _vm.getLaporan.tautan))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Kandungan Nilai Pancasila")])]),_vm._v(" "),(_vm.getLaporan)?_c('div',{staticClass:"col-8"},[_vm._v("\n              : "),_vm._l((!_vm.getLaporan ? [] : _vm.getLaporan.kandungan_pancasila.split(',')),function(sila){return _c('span',{key:sila,staticClass:"badge badge-primary",staticStyle:{"margin-right":"10px"}},[_vm._v("Sila ke\n                "+_vm._s(sila))])})],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Pembuat")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "+_vm._s(_vm.getLaporan.user ? (_vm.getLaporan.user.nama+"  (" + (_vm.getLaporan.user.nip) + ")")  : '-')+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-4"},[_c('b',[_vm._v("Goverment")])]),_vm._v(" "),_c('div',{staticClass:"col-8"},[_vm._v("\n              : "+_vm._s(_vm.getLaporan.user ? (_vm.getLaporan.user.goverment ? _vm.getLaporan.user.goverment.nama : '-') : '-')+"\n            ")])])]),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"Evidence","name":"evidence"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn btn-primary btn-sm",on:{"click":function($event){return _vm.downloadFile(("lapor/" + (_vm.getLaporan.id) + "/evidence/download"), true)}}},[_vm._v("Download Evidence")])]),_vm._v(" "),_c('div',{staticClass:"col-md-12",staticStyle:{"margin-top":"20px"}},[_c('el-upload',{attrs:{"action":_vm.api_url + "/lapor/" + (_vm.getLaporan.id) + "/evidence/store","headers":_vm.headers,"name":"evidence","on-success":_vm.handleChangeFile,"on-remove":_vm.handleRemove,"list-type":"picture-card","accept":"image/*","file-list":_vm.files}},[_c('i',{staticClass:"el-icon-plus"})])],1)])])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/lapor/detail.vue?vue&type=template&id=b51721f0&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./global.config.js
var global_config = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/lapor/detail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var detailvue_type_script_lang_js_ = ({
  layout: 'admin',
  middleware: 'lapor',

  data() {
    return {
      activeName: 'detail',
      files: [],
      evidences: [],
      api_url: '',
      headers: {// 'Authorization': 'Bearer ' + this.$axios.g
      }
    };
  },

  mounted() {
    this.headers = this.$axios.defaults.headers.common;
    this.api_url = global_config["a" /* config */].baseApiUrl; // this.$store.dispatch('lapor/getEvidenceAll', {id:this.getLaporan.id});

    this.getEvidences();
  },

  methods: {
    handleClick(current) {
      console.log(current);
    },

    handleChangeFile(response, file, fileList) {
      // let formData = new FormData;
      // formData.append('evidence', file.raw)
      // this.$axios.post(`/lapor/${this.getLaporan.id}/evidence/store`, formData).then(resp => {
      //   if (resp.data.success) {
      this.$notify.success({
        title: 'Success',
        message: 'Berhasil Menambah Evidence'
      }); //   }
      // }).catch(e => {
      //   this.$notify.error({
      //       title: 'Error',
      //       message: e.response.data.message
      //     })
      // }).finally(() => {
      //   //
      // })
    },

    handleRemove(file, fileList) {
      if (file.id) {
        this.$axios.delete(`/lapor/${this.getLaporan.id}/evidence/${file.id}/delete`).then(resp => {
          if (resp.data.success) {
            this.$notify.success({
              title: 'Success',
              message: 'Berhasil Menghapus Evidence'
            });
          }
        }).catch(e => {
          this.$notify.error({
            title: 'Error',
            message: e.response.data.message
          });
        }).finally(() => {//
        });
      }
    },

    getEvidences() {
      this.$axios.get(`/lapor/${this.getLaporan.id}/evidences`).then(resp => {
        if (resp.data.success) {
          resp.data.data.multi_file.forEach(element => {
            this.files.push({
              name: element.file.file_name,
              url: element.file_url,
              id: element.id_file
            });
          });
          console.log(this.files);
        }
      }).catch(e => {
        console.log(e);
      }).finally(() => {//
      });
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])("lapor", ['getLaporan' // 'getEvidence'
    ])
  }
});
// CONCATENATED MODULE: ./pages/admin/lapor/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var lapor_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/admin/lapor/detail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lapor_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b51721f0",
  "1830f1fb"
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
const config = {
  base: '/simpulkendali/',
  baseUrl: 'http://223.27.146.172/simpulkendali-api',
  baseApiUrl: 'http://223.27.146.172/simpulkendali-api' // base: '/simpulkendali/',
  // baseUrl: 'http://simpulkendali-api.ckmindramayu.com',
  // baseApiUrl : 'http://simpulkendali-api.ckmindramayu.com'
  // base: '/',
  // baseUrl: 'http://simpulkendali-api.test:8080',
  // baseApiUrl : 'http://simpulkendali-api.test:8080'

};


/***/ })

};;
//# sourceMappingURL=detail.js.map