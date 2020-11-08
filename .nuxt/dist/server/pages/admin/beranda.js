exports.ids = [1];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("be2e8e3a", content, true, context)
};

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chart/chart-doughnut.vue?vue&type=template&id=2e6cccbd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('chartjs-doughnut',{attrs:{"bind":true,"datasets":_vm.datasets,"labels":_vm.labels,"option":_vm.option}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chart/chart-doughnut.vue?vue&type=template&id=2e6cccbd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chart/chart-doughnut.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var chart_doughnutvue_type_script_lang_js_ = ({
  data() {
    return {
      datasets: [{
        data: [0, 0, 0, 0, 0],
        backgroundColor: ["#f36e60", "#ffdb3b", "#185190", "#29f1c3", '#be90d4'],
        hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7", '#7befb2', '#9b59b6']
      }],
      labels: ["Sila Ke 1", "Sila Ke 2", "Sila Ke 3", "Sila Ke 4", "Sila Ke 5"],
      option: {}
    };
  },

  mounted() {
    this.getLaporan();
  },

  methods: {
    async getLaporan() {
      await this.$axios.get('/laporan-kandungan-pancasila').then(response => {
        if (response.data.success) {
          let data = response.data.data;
          this.datasets[0].data = [data.sila_ke_1, data.sila_ke_2, data.sila_ke_3, data.sila_ke_4, data.sila_ke_5];
        }
      }).finally(() => {
        this.loadingBeritaPopuler = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/chart/chart-doughnut.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_chart_doughnutvue_type_script_lang_js_ = (chart_doughnutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/chart/chart-doughnut.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chart_chart_doughnutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00f580a1"
  
)

/* harmony default export */ var chart_doughnut = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_beranda_vue_vue_type_style_index_0_id_fac98170_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_beranda_vue_vue_type_style_index_0_id_fac98170_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_beranda_vue_vue_type_style_index_0_id_fac98170_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_beranda_vue_vue_type_style_index_0_id_fac98170_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_beranda_vue_vue_type_style_index_0_id_fac98170_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_beranda_vue_vue_type_style_index_0_id_fac98170_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-precentage[data-v-fac98170]{font-size:14px;font-weight:700}span.top-nama>a>span.el-link--inner[data-v-fac98170]{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;width:150px!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/beranda.vue?vue&type=template&id=fac98170&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"header bg-primary pb-6\" data-v-fac98170><div class=\"container-fluid\" data-v-fac98170><div class=\"header-body\" data-v-fac98170><div class=\"row\" style=\"padding-top:20px\" data-v-fac98170><div class=\"col-xl-4\" data-v-fac98170><div class=\"card card-stats\" data-v-fac98170><div class=\"card-body\" data-v-fac98170><div class=\"row\" data-v-fac98170><div class=\"col\" data-v-fac98170><h5 class=\"card-title text-uppercase text-muted mb-0\" data-v-fac98170><i class=\"las la-book-reader\" data-v-fac98170></i> Laporan\n                    </h5> <span class=\"h2 font-weight-bold mb-0\" data-v-fac98170>"+_vm._ssrEscape(_vm._s(_vm.numberWithCommas(_vm.summary.laporan.current))+"\n                    ")+"</span></div></div> <p class=\"mt-3 mb-0 text-sm\" data-v-fac98170><span"+(_vm._ssrClass(null,{'text-precentage': true, 'text-success': _vm.summary.laporan.type == 'up', 'text-primary': _vm.summary.laporan.type == 'down', 'mr-2': true}))+" data-v-fac98170><i"+(_vm._ssrClass(null,{'las': true, 'la-angle-double-up': _vm.summary.laporan.type == 'up', 'la-angle-double-down': _vm.summary.laporan.type == 'down'}))+" data-v-fac98170></i> <b data-v-fac98170>"+_vm._ssrEscape(_vm._s(_vm.summary.laporan.precentage)+"%")+"</b></span> <span class=\"text-nowrap\" data-v-fac98170>Dari bulan lalu</span></p></div></div></div> <div class=\"col-xl-4\" data-v-fac98170><div class=\"card card-stats\" data-v-fac98170><div class=\"card-body\" data-v-fac98170><div class=\"row\" data-v-fac98170><div class=\"col\" data-v-fac98170><h5 class=\"card-title text-uppercase text-muted mb-0\" data-v-fac98170><i class=\"las la-chalkboard-teacher\" data-v-fac98170></i>\n                      Kegiatan</h5> <span class=\"h2 font-weight-bold mb-0\" data-v-fac98170>"+_vm._ssrEscape(_vm._s(_vm.numberWithCommas(_vm.summary.kegiatan.current))+"\n                    ")+"</span></div></div> <p class=\"mt-3 mb-0 text-sm\" data-v-fac98170><span"+(_vm._ssrClass(null,{'text-precentage': true, 'text-success': _vm.summary.kegiatan.type == 'up', 'text-primary': _vm.summary.kegiatan.type == 'down', 'mr-2': true}))+" data-v-fac98170><i"+(_vm._ssrClass(null,{'las': true, 'la-angle-double-up': _vm.summary.kegiatan.type == 'up', 'la-angle-double-down': _vm.summary.kegiatan.type == 'down'}))+" data-v-fac98170></i> <b data-v-fac98170>"+_vm._ssrEscape(_vm._s(_vm.summary.kegiatan.precentage)+"%")+"</b></span> <span class=\"text-nowrap\" data-v-fac98170>Dari bulan lalu</span></p></div></div></div> <div class=\"col-xl-4\" data-v-fac98170><div class=\"card card-stats\" data-v-fac98170><div class=\"card-body\" data-v-fac98170><div class=\"row\" data-v-fac98170><div class=\"col\" data-v-fac98170><h5 class=\"card-title text-uppercase text-muted mb-0\" data-v-fac98170><i class=\"las la-coins\" data-v-fac98170></i> Berita</h5> <span class=\"h2 font-weight-bold mb-0\" data-v-fac98170>"+_vm._ssrEscape(_vm._s(_vm.numberWithCommas(_vm.summary.berita.current)))+"</span></div></div> <p class=\"mt-3 mb-0 text-sm\" data-v-fac98170><span"+(_vm._ssrClass(null,{'text-precentage': true, 'text-success': _vm.summary.berita.type == 'up', 'text-primary': _vm.summary.berita.type == 'down', 'mr-2': true}))+" data-v-fac98170><i"+(_vm._ssrClass(null,{'las': true, 'la-angle-double-up': _vm.summary.berita.type == 'up', 'la-angle-double-down': _vm.summary.berita.type == 'down'}))+" data-v-fac98170></i> <b data-v-fac98170>"+_vm._ssrEscape(_vm._s(_vm.summary.berita.precentage)+"%")+"</b></span> <span class=\"text-nowrap\" data-v-fac98170>Dari bulan lalu</span></p></div></div></div></div></div></div></div> "),_vm._ssrNode("<div class=\"container-fluid mt--6\" data-v-fac98170>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-fac98170>","</div>",[_vm._ssrNode("<div class=\"col-xl-6\" data-v-fac98170>","</div>",[_c('el-card',{staticStyle:{"margin-top":"20px"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('h5',{staticClass:"h3 mb-0"},[_vm._v("Berita Populer")])]),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loadingBeritaPopuler),expression:"loadingBeritaPopuler"}],attrs:{"data":_vm.beritaPopuler,"stripe":""}},[_c('el-table-column',{attrs:{"type":"index","width":"50","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Judul Berita"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":scope.row.judul,"placement":"top"}},[_c('el-link',{staticClass:"text-truncate",attrs:{"type":"primary"}},[_vm._v(_vm._s(_vm.truncateString(scope.row.judul, 50)))])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Dibaca","width":"130","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n                "+_vm._s(scope.row.total)+"\n              ")]}}])})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-xl-6\" data-v-fac98170>","</div>",[_c('el-card',{staticClass:"mt-10",staticStyle:{"margin-top":"20px"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('h5',{staticClass:"h3 mb-0"},[_vm._v("Laporan Per Kandungan Pancasila")])]),_vm._v(" "),_c('client-only',[_c('ChartDoughnut')],1)],1)],1)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/beranda.vue?vue&type=template&id=fac98170&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chart/chart-bar.vue?vue&type=template&id=3b066108&
var chart_barvue_type_template_id_3b066108_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('chartjs-bar',{attrs:{"backgroundcolor":_vm.types[0].bgColor,"beginzero":_vm.beginZero,"bind":true,"bordercolor":_vm.types[0].borderColor,"data":_vm.types[0].data,"datalabel":_vm.types[0].dataLabel,"labels":_vm.labels}}),_vm._ssrNode(" "),_c('chartjs-bar',{attrs:{"backgroundcolor":_vm.types[1].bgColor,"beginzero":_vm.beginZero,"bind":true,"bordercolor":_vm.types[1].borderColor,"data":_vm.types[1].data,"datalabel":_vm.types[1].dataLabel,"labels":_vm.labels2}})],2)}
var chart_barvue_type_template_id_3b066108_staticRenderFns = []


// CONCATENATED MODULE: ./components/chart/chart-bar.vue?vue&type=template&id=3b066108&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chart/chart-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var chart_barvue_type_script_lang_js_ = ({
  data() {
    return {
      beginZero: true,
      labels: ["Umum", "Aparatur Negara", "Pemuda", "Perempuan", "Ormas", "Media", "Pendidikan", "Lainya"],
      labels2: ["Sosialiasasi", "Pembudayaan", "Institusionalis Nilai Pancasila", "Internailasasi Nilai Pancasila", "Pengkajian", "Pendidikan", "Pelatihan", "Pengendailan", 'Evaliasi', 'Lainya'],
      types: [{
        bgColor: "#de98ab",
        borderColor: "0c0306",
        data: [31, 23, 15, 23, 52, 34, 46, 34, 24],
        dataLabel: "Segmentasi"
      }, {
        bgColor: "#98ddde",
        borderColor: "030c0c",
        data: [12, 25, 22, 46, 53, 27, 34, 42, 23, 53, 62, 23, 12],
        dataLabel: "Kagetori"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/chart/chart-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_chart_barvue_type_script_lang_js_ = (chart_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/chart/chart-bar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chart_chart_barvue_type_script_lang_js_,
  chart_barvue_type_template_id_3b066108_render,
  chart_barvue_type_template_id_3b066108_staticRenderFns,
  false,
  null,
  null,
  "5fbf3478"
  
)

/* harmony default export */ var chart_bar = (component.exports);
// EXTERNAL MODULE: ./components/chart/chart-doughnut.vue + 4 modules
var chart_doughnut = __webpack_require__(113);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chart/chart-line.vue?vue&type=template&id=31ec4252&
var chart_linevue_type_template_id_31ec4252_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"card-body\"><h2 class=\"card-title\">Laporan Masuk</h2> <div class=\"btn-group btn-group-toggle\">"+(_vm._ssrList((_vm.btn),function(item,index){return ("<label"+(_vm._ssrClass("btn btn-success",{ active: item.value == _vm.radio }))+"><input"+(_vm._ssrAttr("name",_vm.dataLabel))+" type=\"radio\""+(_vm._ssrAttr("value",item.value))+(_vm._ssrAttr("checked",_vm._q(_vm.radio,item.value)))+">"+_vm._ssrEscape("\n        "+_vm._s(item.label)+"\n      ")+"</label>")}))+"</div></div> "),_vm._ssrNode("<div class=\"card-img-bottom\">","</div>",[_c('chartjs-line',{attrs:{"backgroundcolor":_vm.bgColor,"beginzero":_vm.beginZero,"bind":true,"bordercolor":_vm.borderColor,"data":_vm.data[_vm.radio],"datalabel":_vm.dataLabel,"labels":_vm.labels[_vm.radio]}})],1)],2)}
var chart_linevue_type_template_id_31ec4252_staticRenderFns = []


// CONCATENATED MODULE: ./components/chart/chart-line.vue?vue&type=template&id=31ec4252&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chart/chart-line.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var chart_linevue_type_script_lang_js_ = ({
  data() {
    return {
      bgColor: "#81894e",
      beginZero: true,
      borderColor: "#81894e",
      btn: [// { label: "Hari ini", value: "day" },
      {
        label: "Minggu ini",
        value: "week"
      }, {
        label: "Per Bulan",
        value: "month"
      }, {
        label: "Per Tahun",
        value: "year"
      }],
      data: {
        // day: [1, 3, 5, 3, 1],
        week: [0, 0, 0],
        month: [0, 0, 0],
        year: [0, 0, 0]
      },
      dataLabel: "Total Laporan Masuk",
      labels: {
        // day: [8, 10, 12, 14, 16],
        week: ["-", "-", "-"],
        month: ["-", "-", "-"],
        year: ["-", "-", "-"]
      },
      radio: "week"
    };
  },

  mounted() {
    this.getLaporan();
  },

  methods: {
    async getLaporan() {
      await this.$axios.get('/laporan-masuk').then(response => {
        if (response.data.success) {
          let data = response.data.data; //week

          this.data.week = data.week.map(el => {
            return el.data;
          });
          this.labels.week = data.week.map(el => {
            return el.text;
          }); //month

          this.data.month = data.month.map(el => {
            return el.data;
          });
          this.labels.month = data.month.map(el => {
            return el.text;
          }); //week

          this.data.year = data.year.map(el => {
            return el.data;
          });
          this.labels.year = data.year.map(el => {
            return el.text;
          });
        }
      }).finally(() => {
        this.loadingBeritaPopuler = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/chart/chart-line.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_chart_linevue_type_script_lang_js_ = (chart_linevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/chart/chart-line.vue





/* normalize component */

var chart_line_component = Object(componentNormalizer["a" /* default */])(
  chart_chart_linevue_type_script_lang_js_,
  chart_linevue_type_template_id_31ec4252_render,
  chart_linevue_type_template_id_31ec4252_staticRenderFns,
  false,
  null,
  null,
  "340639da"
  
)

/* harmony default export */ var chart_line = (chart_line_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/beranda.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var berandavue_type_script_lang_js_ = ({
  components: {
    ChartBar: chart_bar,
    ChartDoughnut: chart_doughnut["default"],
    ChartLine: chart_line
  },
  layout: 'admin',

  data() {
    return {
      selectKementrian: '',
      kemementrian: [],
      summary: {
        laporan: {
          type: "up",
          current: 0,
          previous: 0,
          precentage: 0
        },
        kegiatan: {
          type: "up",
          current: 0,
          previous: 0,
          precentage: 0
        },
        berita: {
          type: "up",
          current: 0,
          previous: 0,
          precentage: 0
        }
      },
      beritaPopuler: [],
      loadingBeritaPopuler: true
    };
  },

  mounted() {
    this.getSummary();
    this.getBeritaPopuler(); // this.getPopularCourses()
  },

  methods: {
    async getSummary() {
      await this.$axios.get('/summary').then(response => {
        if (response.data.success) {
          this.summary = response.data.data;
        }
      }).catch(e => {
        console.log(e);
      });
    },

    async getBeritaPopuler() {
      await this.$axios.get('/berita-populer').then(response => {
        if (response.data.success) {
          this.beritaPopuler = response.data.data;
        }
      }).finally(() => {
        this.loadingBeritaPopuler = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/beranda.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_berandavue_type_script_lang_js_ = (berandavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/admin/beranda.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var beranda_component = Object(componentNormalizer["a" /* default */])(
  admin_berandavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fac98170",
  "2da6d220"
  
)

/* harmony default export */ var beranda = __webpack_exports__["default"] = (beranda_component.exports);

/* nuxt-component-imports */
installComponents(beranda_component, {ChartDoughnut: __webpack_require__(113).default})


/***/ })

};;
//# sourceMappingURL=beranda.js.map