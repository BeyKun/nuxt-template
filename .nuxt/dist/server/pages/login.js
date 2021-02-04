exports.ids = [11];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("495e08f4", content, true, context)
};

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_600175df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_600175df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_600175df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_600175df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_600175df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header[data-v-600175df]{border-radius:0}.input-group[data-v-600175df]{box-shadow:none}.form-control[data-v-600175df],.input-group-text[data-v-600175df]{background-color:#eee}.input-group-text[data-v-600175df]{border-bottom-left-radius:40px;border-top-left-radius:40px}.form-control[data-v-600175df]{border-bottom-right-radius:40px;border-top-right-radius:40px}.card[data-v-600175df]{box-shadow:none!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=600175df&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card border-0"},[_vm._ssrNode("<div class=\"card-header bg-transparent logo\" style=\"border: none\" data-v-600175df><a class=\"navbar-brand\" style=\"margin-bottom: 20px\" data-v-600175df><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" width=\"auto\" height=\"100\" data-v-600175df></a> <div class=\"text-center text-muted mb-4\" data-v-600175df><small data-v-600175df>Sistem Pemantauan Bulanan Kegiatan Pengendailan </small> <small data-v-600175df><b data-v-600175df>Pembinaan Ideologi Pancasila</b></small></div></div> "),_vm._ssrNode("<div class=\"card-body\" data-v-600175df>","</div>",[(_vm.errorMessage !== '')?_c('el-alert',{staticClass:"mb-3",attrs:{"title":_vm.errorMessage,"type":"error","show-icon":""}}):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<form role=\"form\" data-v-600175df>","</form>",[_vm._ssrNode("<div class=\"form-group mb-3\" data-v-600175df><div class=\"input-group input-group-alternative\" data-v-600175df><div class=\"input-group-prepend\" data-v-600175df><span class=\"input-group-text\" data-v-600175df><i class=\"ni ni-email-83\" data-v-600175df></i></span></div> <input name=\"username\" required=\"required\" placeholder=\"Email\" type=\"text\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"form-control\" data-v-600175df></div></div> <div class=\"form-group\" data-v-600175df><div class=\"input-group input-group-alternative\" data-v-600175df><div class=\"input-group-prepend\" data-v-600175df><span class=\"input-group-text\" data-v-600175df><i class=\"ni ni-lock-circle-open\" data-v-600175df></i></span></div> <input name=\"password\" required=\"required\" placeholder=\"Password\" type=\"password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"form-control\" data-v-600175df></div></div> "),_vm._ssrNode("<div class=\"text-center\" data-v-600175df>","</div>",[_c('el-button',{staticClass:"my-4",attrs:{"type":"primary","loading":_vm.showLoading,"round":"","native-type":"submit"}},[_vm._v("Login\n        ")])],1)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=600175df&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  layout: 'auth',

  data() {
    return {
      username: '',
      password: '',
      showLoading: false,
      errorMessage: ''
    };
  },

  mounted() {// this.getCompany()
  },

  created() {
    if (this.$auth.loggedIn) {
      if (this.$auth.$storage.getUniversal('redirect')) {
        this.$router.replace(this.$auth.$storage.getUniversal('redirect'));
        this.$auth.$storage.removeUniversal('redirect');
        return;
      }

      this.$router.replace('/');
      return;
    }

    ;
  },

  methods: {
    async login() {
      this.showLoading = true;

      try {
        await this.$auth.loginWith('local', {
          data: {
            "email": this.username,
            "password": this.password,
            "is_admin": 1
          }
        }).catch(e => {
          console.log(e);
          this.$notify.error({
            title: 'Error',
            message: e.response.data.message
          });
        });
        this.showLoading = false;

        if (this.$auth.loggedIn) {
          this.$notify.success({
            title: 'Berhasil Login',
            message: 'Selamat Datang! :)'
          });
          this.$router.push('/');
        }
      } catch (e) {
        console.log(e);
        this.showLoading = false;
      }
    }

  },
  watch: {
    username(newValue, oldValue) {
      this.errorMessage = '';
    },

    password(newValue, oldValue) {
      this.errorMessage = '';
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(117)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "600175df",
  "ddb6ed4c"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map