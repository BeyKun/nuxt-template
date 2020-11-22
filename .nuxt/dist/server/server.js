module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/admin/beranda","2":"pages/admin/berita","3":"pages/admin/informasi","4":"pages/admin/kegiatan","5":"pages/admin/lapor/detail","6":"pages/admin/lapor/index","7":"pages/admin/master/pemda","8":"pages/admin/master/setting","9":"pages/admin/users","10":"pages/index","11":"pages/login","12":"pages/profile","13":"pages/register","14":"pages/reset-password"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("3e9984a2", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("0b8ced75", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("369775ff", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("56b15182", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("09ea9375", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sidebar.vue?vue&type=template&id=3e8c7d58&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white",attrs:{"id":"sidenav-main"}},[_vm._ssrNode("<div class=\"scrollbar-inner\" data-v-3e8c7d58>","</div>",[_vm._ssrNode("<div class=\"sidenav-header  d-flex  align-items-center\" data-v-3e8c7d58><a class=\"navbar-brand\" data-v-3e8c7d58><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt=\"...\" class=\"navbar-brand-img\" data-v-3e8c7d58></a> <div class=\" ml-auto \" data-v-3e8c7d58><div data-target=\"#sidenav-main\" class=\"sidenav-toggler2 d-xl-block\" style=\"margin-right: 16px;cursor: pointer\" data-v-3e8c7d58><div class=\"sidenav-toggler-inner\" data-v-3e8c7d58><i class=\"sidenav-toggler-line\" data-v-3e8c7d58></i> <i class=\"sidenav-toggler-line\" data-v-3e8c7d58></i> <i class=\"sidenav-toggler-line\" data-v-3e8c7d58></i></div></div></div></div> "),_vm._ssrNode("<div class=\"navbar-inner\" data-v-3e8c7d58>","</div>",[_vm._ssrNode("<div id=\"sidenav-collapse-main\" class=\"collapse navbar-collapse\" data-v-3e8c7d58>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav\" data-v-3e8c7d58>","</ul>",[_vm._l((_vm.menus),function(menu,idx){return _vm._ssrNode("<li class=\"nav-item\" data-v-3e8c7d58>","</li>",[(typeof menu.children == 'undefined')?_c('router-link',{attrs:{"to":menu.route}},[_c('a',{staticClass:"nav-link",attrs:{"role":"button"}},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":menu.text,"placement":"right"}},[_c('i',{class:_vm.bindString(menu.icon)})]),_vm._v(" "),_c('span',{staticClass:"nav-link-text"},[_vm._v(_vm._s(menu.text))])],1)]):_vm._e()],1)}),_vm._ssrNode(" "),_vm._l((_vm.menus),function(menu,idx){return _vm._ssrNode("<li class=\"nav-item\" data-v-3e8c7d58>","</li>",[(typeof menu.children != 'undefined')?_vm._ssrNode("<a"+(_vm._ssrAttr("href",'#navbar-' + idx))+" onclick=\"return false\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"navbar-components\" class=\"nav-link\" data-v-3e8c7d58>","</a>",[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":menu.text,"placement":"right"}},[_c('i',{class:_vm.bindString(menu.icon)})]),_vm._ssrNode(" <span class=\"nav-link-text\" data-v-3e8c7d58>"+_vm._ssrEscape(_vm._s(menu.text))+"</span>")],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrAttr("id",'navbar-' + idx))+" class=\"collapse\" data-v-3e8c7d58>","</div>",[_vm._ssrNode("<ul class=\"nav nav-sm flex-column\" data-v-3e8c7d58>","</ul>",_vm._l((menu.children),function(child,idc){return _vm._ssrNode("<li class=\"nav-item\" data-v-3e8c7d58>","</li>",[_c('router-link',{attrs:{"to":child.route}},[_c('a',{staticClass:"nav-link"},[_c('el-tooltip',{staticClass:"item",attrs:{"effect":"dark","content":child.text,"placement":"right"}},[_c('span',{staticClass:"sidenav-mini-icon"},[_c('i',{class:_vm.bindString(child.icon)})])]),_vm._v(" "),_c('span',{staticClass:"sidenav-normal"},[_vm._v(" "+_vm._s(child.text)+" ")])],1)])],1)}),0)])],2)})],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=template&id=3e8c7d58&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Menu.js
const menu = () => {
  return [{
    text: 'Dashboard',
    icon: 'ni ni-shop text-primary',
    route: '/admin/beranda'
  }, {
    text: 'Lapor',
    icon: 'el-icon-notebook-1 text-primary',
    route: '/admin/lapor'
  }, {
    text: 'Kegiatan',
    icon: 'el-icon-baseball text-primary',
    route: '/admin/kegiatan'
  }, {
    text: 'Berita',
    icon: 'el-icon-tickets text-primary',
    route: '/admin/berita'
  }, {
    text: 'Informasi',
    icon: 'el-icon-warning-outline text-primary',
    route: '/admin/informasi'
  }, {
    text: 'Users',
    icon: 'el-icon-user text-primary',
    route: '/admin/users'
  }, {
    text: 'Master',
    icon: 'el-icon-folder text-primary',
    children: [{
      text: "Pemda",
      icon: 'el-icon-postcard',
      route: '/admin/master/pemda'
    } // {
    //     text: "Setting",
    //     icon: 'el-icon-setting',
    //     route: '/admin/master/setting'
    // },
    // {
    //     text: "Bookstores",
    //     icon: 'el-icon-notebook-1',
    //     route: '/admin/master/bookstores'
    // },
    // {
    //     text: "Claim Category",
    //     icon: 'el-icon-tickets',
    //     route: '/admin/master/claim_category'
    // },
    // {
    //     text: "Skill",
    //     icon: 'el-icon-medal',
    //     route: '/admin/master/kemampuan'
    // },
    ]
  } // {
  //     text: 'Setting',
  //     icon: 'el-icon-setting text-primary',
  //     children: [
  //         {
  //             text: 'Point',
  //             icon: 'el-icon-coin',
  //             route: '/admin/settings/point'
  //         },
  //         {
  //             text: "User Admin",
  //             icon: 'el-icon-user',
  //             route: '/admin/master/admin'
  //         },
  //         {
  //             text: 'Agreement Claim Wallet',
  //             icon: 'el-icon-wallet',
  //             route: '/admin/settings/agreement-claim-wallet'
  //         },
  //         // {
  //         //     text: 'Rewards',
  //         //     icon: 'el-icon-trophy',
  //         //     route: '/admin/settings/rewards'
  //         // },
  //         // {
  //         //     text: 'Notification',
  //         //     icon: 'el-icon-bell',
  //         //     route: '/admin/settings/notification'
  //         // }
  //     ]
  // },
  ];
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  data() {
    return {
      collapse: true,
      menus: []
    };
  },

  mounted() {
    this.menus = menu();
  },

  methods: { ...Object(external_vuex_["mapMutations"])({
      toggle: "drawer/toggle"
    }),

    bindString(cls) {
      return cls;
    }

  }
});
// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Sidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e8c7d58",
  "343a08da"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("ex-table-column");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-login2.5f40854.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale/lang/en");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vuesax");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-simpulkendali.47f28f3.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
module.exports = __webpack_require__(97);


/***/ }),
/* 32 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  store,
  redirect
}) {
  // If the user is not authenticated
  if (!store.state.lapor.laporan) {
    return redirect('/admin/lapor');
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:4px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#e6a23c;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2).default("087156c5", content, true)

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(49);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(53);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(54);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#fontawesome" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___, { hash: "#fontawesome" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___, { hash: "#fontawesome" });
// Module
exports.push([module.i, "/*!\n * Font Awesome Free 5.3.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */.fa,.fab,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-feature-settings:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:\"\\f26e\"}.fa-accessible-icon:before{content:\"\\f368\"}.fa-accusoft:before{content:\"\\f369\"}.fa-ad:before{content:\"\\f641\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-card:before{content:\"\\f2bb\"}.fa-adjust:before{content:\"\\f042\"}.fa-adn:before{content:\"\\f170\"}.fa-adversal:before{content:\"\\f36a\"}.fa-affiliatetheme:before{content:\"\\f36b\"}.fa-air-freshener:before{content:\"\\f5d0\"}.fa-algolia:before{content:\"\\f36c\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-justify:before{content:\"\\f039\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-right:before{content:\"\\f038\"}.fa-alipay:before{content:\"\\f642\"}.fa-allergies:before{content:\"\\f461\"}.fa-amazon:before{content:\"\\f270\"}.fa-amazon-pay:before{content:\"\\f42c\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-amilia:before{content:\"\\f36d\"}.fa-anchor:before{content:\"\\f13d\"}.fa-android:before{content:\"\\f17b\"}.fa-angellist:before{content:\"\\f209\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-down:before{content:\"\\f107\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angry:before{content:\"\\f556\"}.fa-angrycreative:before{content:\"\\f36e\"}.fa-angular:before{content:\"\\f420\"}.fa-ankh:before{content:\"\\f644\"}.fa-app-store:before{content:\"\\f36f\"}.fa-app-store-ios:before{content:\"\\f370\"}.fa-apper:before{content:\"\\f371\"}.fa-apple:before{content:\"\\f179\"}.fa-apple-alt:before{content:\"\\f5d1\"}.fa-apple-pay:before{content:\"\\f415\"}.fa-archive:before{content:\"\\f187\"}.fa-archway:before{content:\"\\f557\"}.fa-arrow-alt-circle-down:before{content:\"\\f358\"}.fa-arrow-alt-circle-left:before{content:\"\\f359\"}.fa-arrow-alt-circle-right:before{content:\"\\f35a\"}.fa-arrow-alt-circle-up:before{content:\"\\f35b\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-arrows-alt-h:before{content:\"\\f337\"}.fa-arrows-alt-v:before{content:\"\\f338\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asterisk:before{content:\"\\f069\"}.fa-asymmetrik:before{content:\"\\f372\"}.fa-at:before{content:\"\\f1fa\"}.fa-atlas:before{content:\"\\f558\"}.fa-atom:before{content:\"\\f5d2\"}.fa-audible:before{content:\"\\f373\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-autoprefixer:before{content:\"\\f41c\"}.fa-avianex:before{content:\"\\f374\"}.fa-aviato:before{content:\"\\f421\"}.fa-award:before{content:\"\\f559\"}.fa-aws:before{content:\"\\f375\"}.fa-backspace:before{content:\"\\f55a\"}.fa-backward:before{content:\"\\f04a\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-ban:before{content:\"\\f05e\"}.fa-band-aid:before{content:\"\\f462\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-barcode:before{content:\"\\f02a\"}.fa-bars:before{content:\"\\f0c9\"}.fa-baseball-ball:before{content:\"\\f433\"}.fa-basketball-ball:before{content:\"\\f434\"}.fa-bath:before{content:\"\\f2cd\"}.fa-battery-empty:before{content:\"\\f244\"}.fa-battery-full:before{content:\"\\f240\"}.fa-battery-half:before{content:\"\\f242\"}.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-bed:before{content:\"\\f236\"}.fa-beer:before{content:\"\\f0fc\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-bell:before{content:\"\\f0f3\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bezier-curve:before{content:\"\\f55b\"}.fa-bible:before{content:\"\\f647\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bimobject:before{content:\"\\f378\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitcoin:before{content:\"\\f379\"}.fa-bity:before{content:\"\\f37a\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-blackberry:before{content:\"\\f37b\"}.fa-blender:before{content:\"\\f517\"}.fa-blind:before{content:\"\\f29d\"}.fa-blogger:before{content:\"\\f37c\"}.fa-blogger-b:before{content:\"\\f37d\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-bold:before{content:\"\\f032\"}.fa-bolt:before{content:\"\\f0e7\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-bone:before{content:\"\\f5d7\"}.fa-bong:before{content:\"\\f55c\"}.fa-book:before{content:\"\\f02d\"}.fa-book-open:before{content:\"\\f518\"}.fa-book-reader:before{content:\"\\f5da\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-bowling-ball:before{content:\"\\f436\"}.fa-box:before{content:\"\\f466\"}.fa-box-open:before{content:\"\\f49e\"}.fa-boxes:before{content:\"\\f468\"}.fa-braille:before{content:\"\\f2a1\"}.fa-brain:before{content:\"\\f5dc\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-briefcase-medical:before{content:\"\\f469\"}.fa-broadcast-tower:before{content:\"\\f519\"}.fa-broom:before{content:\"\\f51a\"}.fa-brush:before{content:\"\\f55d\"}.fa-btc:before{content:\"\\f15a\"}.fa-bug:before{content:\"\\f188\"}.fa-building:before{content:\"\\f1ad\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bullseye:before{content:\"\\f140\"}.fa-burn:before{content:\"\\f46a\"}.fa-buromobelexperte:before{content:\"\\f37f\"}.fa-bus:before{content:\"\\f207\"}.fa-bus-alt:before{content:\"\\f55e\"}.fa-business-time:before{content:\"\\f64a\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-calendar:before{content:\"\\f133\"}.fa-calendar-alt:before{content:\"\\f073\"}.fa-calendar-check:before{content:\"\\f274\"}.fa-calendar-minus:before{content:\"\\f272\"}.fa-calendar-plus:before{content:\"\\f271\"}.fa-calendar-times:before{content:\"\\f273\"}.fa-camera:before{content:\"\\f030\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-cannabis:before{content:\"\\f55f\"}.fa-capsules:before{content:\"\\f46b\"}.fa-car:before{content:\"\\f1b9\"}.fa-car-alt:before{content:\"\\f5de\"}.fa-car-battery:before{content:\"\\f5df\"}.fa-car-crash:before{content:\"\\f5e1\"}.fa-car-side:before{content:\"\\f5e4\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-caret-square-down:before{content:\"\\f150\"}.fa-caret-square-left:before{content:\"\\f191\"}.fa-caret-square-right:before{content:\"\\f152\"}.fa-caret-square-up:before{content:\"\\f151\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cc-amazon-pay:before{content:\"\\f42d\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-apple-pay:before{content:\"\\f416\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-centercode:before{content:\"\\f380\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-chalkboard:before{content:\"\\f51b\"}.fa-chalkboard-teacher:before{content:\"\\f51c\"}.fa-charging-station:before{content:\"\\f5e7\"}.fa-chart-area:before{content:\"\\f1fe\"}.fa-chart-bar:before{content:\"\\f080\"}.fa-chart-line:before{content:\"\\f201\"}.fa-chart-pie:before{content:\"\\f200\"}.fa-check:before{content:\"\\f00c\"}.fa-check-circle:before{content:\"\\f058\"}.fa-check-double:before{content:\"\\f560\"}.fa-check-square:before{content:\"\\f14a\"}.fa-chess:before{content:\"\\f439\"}.fa-chess-bishop:before{content:\"\\f43a\"}.fa-chess-board:before{content:\"\\f43c\"}.fa-chess-king:before{content:\"\\f43f\"}.fa-chess-knight:before{content:\"\\f441\"}.fa-chess-pawn:before{content:\"\\f443\"}.fa-chess-queen:before{content:\"\\f445\"}.fa-chess-rook:before{content:\"\\f447\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-child:before{content:\"\\f1ae\"}.fa-chrome:before{content:\"\\f268\"}.fa-church:before{content:\"\\f51d\"}.fa-circle:before{content:\"\\f111\"}.fa-circle-notch:before{content:\"\\f1ce\"}.fa-city:before{content:\"\\f64f\"}.fa-clipboard:before{content:\"\\f328\"}.fa-clipboard-check:before{content:\"\\f46c\"}.fa-clipboard-list:before{content:\"\\f46d\"}.fa-clock:before{content:\"\\f017\"}.fa-clone:before{content:\"\\f24d\"}.fa-closed-captioning:before{content:\"\\f20a\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-cloud-download-alt:before{content:\"\\f381\"}.fa-cloud-upload-alt:before{content:\"\\f382\"}.fa-cloudscale:before{content:\"\\f383\"}.fa-cloudsmith:before{content:\"\\f384\"}.fa-cloudversify:before{content:\"\\f385\"}.fa-cocktail:before{content:\"\\f561\"}.fa-code:before{content:\"\\f121\"}.fa-code-branch:before{content:\"\\f126\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-codiepie:before{content:\"\\f284\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cog:before{content:\"\\f013\"}.fa-cogs:before{content:\"\\f085\"}.fa-coins:before{content:\"\\f51e\"}.fa-columns:before{content:\"\\f0db\"}.fa-comment:before{content:\"\\f075\"}.fa-comment-alt:before{content:\"\\f27a\"}.fa-comment-dollar:before{content:\"\\f651\"}.fa-comment-dots:before{content:\"\\f4ad\"}.fa-comment-slash:before{content:\"\\f4b3\"}.fa-comments:before{content:\"\\f086\"}.fa-comments-dollar:before{content:\"\\f653\"}.fa-compact-disc:before{content:\"\\f51f\"}.fa-compass:before{content:\"\\f14e\"}.fa-compress:before{content:\"\\f066\"}.fa-concierge-bell:before{content:\"\\f562\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-contao:before{content:\"\\f26d\"}.fa-cookie:before{content:\"\\f563\"}.fa-cookie-bite:before{content:\"\\f564\"}.fa-copy:before{content:\"\\f0c5\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-couch:before{content:\"\\f4b8\"}.fa-cpanel:before{content:\"\\f388\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-creative-commons-by:before{content:\"\\f4e7\"}.fa-creative-commons-nc:before{content:\"\\f4e8\"}.fa-creative-commons-nc-eu:before{content:\"\\f4e9\"}.fa-creative-commons-nc-jp:before{content:\"\\f4ea\"}.fa-creative-commons-nd:before{content:\"\\f4eb\"}.fa-creative-commons-pd:before{content:\"\\f4ec\"}.fa-creative-commons-pd-alt:before{content:\"\\f4ed\"}.fa-creative-commons-remix:before{content:\"\\f4ee\"}.fa-creative-commons-sa:before{content:\"\\f4ef\"}.fa-creative-commons-sampling:before{content:\"\\f4f0\"}.fa-creative-commons-sampling-plus:before{content:\"\\f4f1\"}.fa-creative-commons-share:before{content:\"\\f4f2\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-crop:before{content:\"\\f125\"}.fa-crop-alt:before{content:\"\\f565\"}.fa-cross:before{content:\"\\f654\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-crow:before{content:\"\\f520\"}.fa-crown:before{content:\"\\f521\"}.fa-css3:before{content:\"\\f13c\"}.fa-css3-alt:before{content:\"\\f38b\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-cut:before{content:\"\\f0c4\"}.fa-cuttlefish:before{content:\"\\f38c\"}.fa-d-and-d:before{content:\"\\f38d\"}.fa-dashcube:before{content:\"\\f210\"}.fa-database:before{content:\"\\f1c0\"}.fa-deaf:before{content:\"\\f2a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-deploydog:before{content:\"\\f38e\"}.fa-deskpro:before{content:\"\\f38f\"}.fa-desktop:before{content:\"\\f108\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-dharmachakra:before{content:\"\\f655\"}.fa-diagnoses:before{content:\"\\f470\"}.fa-dice:before{content:\"\\f522\"}.fa-dice-five:before{content:\"\\f523\"}.fa-dice-four:before{content:\"\\f524\"}.fa-dice-one:before{content:\"\\f525\"}.fa-dice-six:before{content:\"\\f526\"}.fa-dice-three:before{content:\"\\f527\"}.fa-dice-two:before{content:\"\\f528\"}.fa-digg:before{content:\"\\f1a6\"}.fa-digital-ocean:before{content:\"\\f391\"}.fa-digital-tachograph:before{content:\"\\f566\"}.fa-directions:before{content:\"\\f5eb\"}.fa-discord:before{content:\"\\f392\"}.fa-discourse:before{content:\"\\f393\"}.fa-divide:before{content:\"\\f529\"}.fa-dizzy:before{content:\"\\f567\"}.fa-dna:before{content:\"\\f471\"}.fa-dochub:before{content:\"\\f394\"}.fa-docker:before{content:\"\\f395\"}.fa-dollar-sign:before{content:\"\\f155\"}.fa-dolly:before{content:\"\\f472\"}.fa-dolly-flatbed:before{content:\"\\f474\"}.fa-donate:before{content:\"\\f4b9\"}.fa-door-closed:before{content:\"\\f52a\"}.fa-door-open:before{content:\"\\f52b\"}.fa-dot-circle:before{content:\"\\f192\"}.fa-dove:before{content:\"\\f4ba\"}.fa-download:before{content:\"\\f019\"}.fa-draft2digital:before{content:\"\\f396\"}.fa-drafting-compass:before{content:\"\\f568\"}.fa-draw-polygon:before{content:\"\\f5ee\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-dribbble-square:before{content:\"\\f397\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-drum:before{content:\"\\f569\"}.fa-drum-steelpan:before{content:\"\\f56a\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-dumbbell:before{content:\"\\f44b\"}.fa-dyalog:before{content:\"\\f399\"}.fa-earlybirds:before{content:\"\\f39a\"}.fa-ebay:before{content:\"\\f4f4\"}.fa-edge:before{content:\"\\f282\"}.fa-edit:before{content:\"\\f044\"}.fa-eject:before{content:\"\\f052\"}.fa-elementor:before{content:\"\\f430\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-ello:before{content:\"\\f5f1\"}.fa-ember:before{content:\"\\f423\"}.fa-empire:before{content:\"\\f1d1\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-text:before{content:\"\\f658\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-envira:before{content:\"\\f299\"}.fa-equals:before{content:\"\\f52c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-erlang:before{content:\"\\f39d\"}.fa-ethereum:before{content:\"\\f42e\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-euro-sign:before{content:\"\\f153\"}.fa-exchange-alt:before{content:\"\\f362\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-expand:before{content:\"\\f065\"}.fa-expand-arrows-alt:before{content:\"\\f31e\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-external-link-alt:before{content:\"\\f35d\"}.fa-external-link-square-alt:before{content:\"\\f360\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-dropper:before{content:\"\\f1fb\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-facebook:before{content:\"\\f09a\"}.fa-facebook-f:before{content:\"\\f39e\"}.fa-facebook-messenger:before{content:\"\\f39f\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-fax:before{content:\"\\f1ac\"}.fa-feather:before{content:\"\\f52d\"}.fa-feather-alt:before{content:\"\\f56b\"}.fa-female:before{content:\"\\f182\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-file:before{content:\"\\f15b\"}.fa-file-alt:before{content:\"\\f15c\"}.fa-file-archive:before{content:\"\\f1c6\"}.fa-file-audio:before{content:\"\\f1c7\"}.fa-file-code:before{content:\"\\f1c9\"}.fa-file-contract:before{content:\"\\f56c\"}.fa-file-download:before{content:\"\\f56d\"}.fa-file-excel:before{content:\"\\f1c3\"}.fa-file-export:before{content:\"\\f56e\"}.fa-file-image:before{content:\"\\f1c5\"}.fa-file-import:before{content:\"\\f56f\"}.fa-file-invoice:before{content:\"\\f570\"}.fa-file-invoice-dollar:before{content:\"\\f571\"}.fa-file-medical:before{content:\"\\f477\"}.fa-file-medical-alt:before{content:\"\\f478\"}.fa-file-pdf:before{content:\"\\f1c1\"}.fa-file-powerpoint:before{content:\"\\f1c4\"}.fa-file-prescription:before{content:\"\\f572\"}.fa-file-signature:before{content:\"\\f573\"}.fa-file-upload:before{content:\"\\f574\"}.fa-file-video:before{content:\"\\f1c8\"}.fa-file-word:before{content:\"\\f1c2\"}.fa-fill:before{content:\"\\f575\"}.fa-fill-drip:before{content:\"\\f576\"}.fa-film:before{content:\"\\f008\"}.fa-filter:before{content:\"\\f0b0\"}.fa-fingerprint:before{content:\"\\f577\"}.fa-fire:before{content:\"\\f06d\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-firefox:before{content:\"\\f269\"}.fa-first-aid:before{content:\"\\f479\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-first-order-alt:before{content:\"\\f50a\"}.fa-firstdraft:before{content:\"\\f3a1\"}.fa-fish:before{content:\"\\f578\"}.fa-flag:before{content:\"\\f024\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-flask:before{content:\"\\f0c3\"}.fa-flickr:before{content:\"\\f16e\"}.fa-flipboard:before{content:\"\\f44d\"}.fa-flushed:before{content:\"\\f579\"}.fa-fly:before{content:\"\\f417\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-minus:before{content:\"\\f65d\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-folder-plus:before{content:\"\\f65e\"}.fa-font:before{content:\"\\f031\"}.fa-font-awesome:before{content:\"\\f2b4\"}.fa-font-awesome-alt:before{content:\"\\f35c\"}.fa-font-awesome-flag:before{content:\"\\f425\"}.fa-font-awesome-logo-full:before{content:\"\\f4e6\"}.fa-fonticons:before{content:\"\\f280\"}.fa-fonticons-fi:before{content:\"\\f3a2\"}.fa-football-ball:before{content:\"\\f44e\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-fort-awesome-alt:before{content:\"\\f3a3\"}.fa-forumbee:before{content:\"\\f211\"}.fa-forward:before{content:\"\\f04e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-freebsd:before{content:\"\\f3a4\"}.fa-frog:before{content:\"\\f52e\"}.fa-frown:before{content:\"\\f119\"}.fa-frown-open:before{content:\"\\f57a\"}.fa-fulcrum:before{content:\"\\f50b\"}.fa-funnel-dollar:before{content:\"\\f662\"}.fa-futbol:before{content:\"\\f1e3\"}.fa-galactic-republic:before{content:\"\\f50c\"}.fa-galactic-senate:before{content:\"\\f50d\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-gas-pump:before{content:\"\\f52f\"}.fa-gavel:before{content:\"\\f0e3\"}.fa-gem:before{content:\"\\f3a5\"}.fa-genderless:before{content:\"\\f22d\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-gift:before{content:\"\\f06b\"}.fa-git:before{content:\"\\f1d3\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-github:before{content:\"\\f09b\"}.fa-github-alt:before{content:\"\\f113\"}.fa-github-square:before{content:\"\\f092\"}.fa-gitkraken:before{content:\"\\f3a6\"}.fa-gitlab:before{content:\"\\f296\"}.fa-gitter:before{content:\"\\f426\"}.fa-glass-martini:before{content:\"\\f000\"}.fa-glass-martini-alt:before{content:\"\\f57b\"}.fa-glasses:before{content:\"\\f530\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-globe:before{content:\"\\f0ac\"}.fa-globe-africa:before{content:\"\\f57c\"}.fa-globe-americas:before{content:\"\\f57d\"}.fa-globe-asia:before{content:\"\\f57e\"}.fa-gofore:before{content:\"\\f3a7\"}.fa-golf-ball:before{content:\"\\f450\"}.fa-goodreads:before{content:\"\\f3a8\"}.fa-goodreads-g:before{content:\"\\f3a9\"}.fa-google:before{content:\"\\f1a0\"}.fa-google-drive:before{content:\"\\f3aa\"}.fa-google-play:before{content:\"\\f3ab\"}.fa-google-plus:before{content:\"\\f2b3\"}.fa-google-plus-g:before{content:\"\\f0d5\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-gopuram:before{content:\"\\f664\"}.fa-graduation-cap:before{content:\"\\f19d\"}.fa-gratipay:before{content:\"\\f184\"}.fa-grav:before{content:\"\\f2d6\"}.fa-greater-than:before{content:\"\\f531\"}.fa-greater-than-equal:before{content:\"\\f532\"}.fa-grimace:before{content:\"\\f57f\"}.fa-grin:before{content:\"\\f580\"}.fa-grin-alt:before{content:\"\\f581\"}.fa-grin-beam:before{content:\"\\f582\"}.fa-grin-beam-sweat:before{content:\"\\f583\"}.fa-grin-hearts:before{content:\"\\f584\"}.fa-grin-squint:before{content:\"\\f585\"}.fa-grin-squint-tears:before{content:\"\\f586\"}.fa-grin-stars:before{content:\"\\f587\"}.fa-grin-tears:before{content:\"\\f588\"}.fa-grin-tongue:before{content:\"\\f589\"}.fa-grin-tongue-squint:before{content:\"\\f58a\"}.fa-grin-tongue-wink:before{content:\"\\f58b\"}.fa-grin-wink:before{content:\"\\f58c\"}.fa-grip-horizontal:before{content:\"\\f58d\"}.fa-grip-vertical:before{content:\"\\f58e\"}.fa-gripfire:before{content:\"\\f3ac\"}.fa-grunt:before{content:\"\\f3ad\"}.fa-gulp:before{content:\"\\f3ae\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-hacker-news:before{content:\"\\f1d4\"}.fa-hacker-news-square:before{content:\"\\f3af\"}.fa-hackerrank:before{content:\"\\f5f7\"}.fa-hamsa:before{content:\"\\f665\"}.fa-hand-holding:before{content:\"\\f4bd\"}.fa-hand-holding-heart:before{content:\"\\f4be\"}.fa-hand-holding-usd:before{content:\"\\f4c0\"}.fa-hand-lizard:before{content:\"\\f258\"}.fa-hand-paper:before{content:\"\\f256\"}.fa-hand-peace:before{content:\"\\f25b\"}.fa-hand-point-down:before{content:\"\\f0a7\"}.fa-hand-point-left:before{content:\"\\f0a5\"}.fa-hand-point-right:before{content:\"\\f0a4\"}.fa-hand-point-up:before{content:\"\\f0a6\"}.fa-hand-pointer:before{content:\"\\f25a\"}.fa-hand-rock:before{content:\"\\f255\"}.fa-hand-scissors:before{content:\"\\f257\"}.fa-hand-spock:before{content:\"\\f259\"}.fa-hands:before{content:\"\\f4c2\"}.fa-hands-helping:before{content:\"\\f4c4\"}.fa-handshake:before{content:\"\\f2b5\"}.fa-hashtag:before{content:\"\\f292\"}.fa-haykal:before{content:\"\\f666\"}.fa-hdd:before{content:\"\\f0a0\"}.fa-heading:before{content:\"\\f1dc\"}.fa-headphones:before{content:\"\\f025\"}.fa-headphones-alt:before{content:\"\\f58f\"}.fa-headset:before{content:\"\\f590\"}.fa-heart:before{content:\"\\f004\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-helicopter:before{content:\"\\f533\"}.fa-highlighter:before{content:\"\\f591\"}.fa-hips:before{content:\"\\f452\"}.fa-hire-a-helper:before{content:\"\\f3b0\"}.fa-history:before{content:\"\\f1da\"}.fa-hockey-puck:before{content:\"\\f453\"}.fa-home:before{content:\"\\f015\"}.fa-hooli:before{content:\"\\f427\"}.fa-hornbill:before{content:\"\\f592\"}.fa-hospital:before{content:\"\\f0f8\"}.fa-hospital-alt:before{content:\"\\f47d\"}.fa-hospital-symbol:before{content:\"\\f47e\"}.fa-hot-tub:before{content:\"\\f593\"}.fa-hotel:before{content:\"\\f594\"}.fa-hotjar:before{content:\"\\f3b1\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-start:before{content:\"\\f251\"}.fa-houzz:before{content:\"\\f27c\"}.fa-html5:before{content:\"\\f13b\"}.fa-hubspot:before{content:\"\\f3b2\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-id-card:before{content:\"\\f2c2\"}.fa-id-card-alt:before{content:\"\\f47f\"}.fa-image:before{content:\"\\f03e\"}.fa-images:before{content:\"\\f302\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-inbox:before{content:\"\\f01c\"}.fa-indent:before{content:\"\\f03c\"}.fa-industry:before{content:\"\\f275\"}.fa-infinity:before{content:\"\\f534\"}.fa-info:before{content:\"\\f129\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-instagram:before{content:\"\\f16d\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-italic:before{content:\"\\f033\"}.fa-itunes:before{content:\"\\f3b4\"}.fa-itunes-note:before{content:\"\\f3b5\"}.fa-java:before{content:\"\\f4e4\"}.fa-jedi:before{content:\"\\f669\"}.fa-jedi-order:before{content:\"\\f50e\"}.fa-jenkins:before{content:\"\\f3b6\"}.fa-joget:before{content:\"\\f3b7\"}.fa-joint:before{content:\"\\f595\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-journal-whills:before{content:\"\\f66a\"}.fa-js:before{content:\"\\f3b8\"}.fa-js-square:before{content:\"\\f3b9\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-kaaba:before{content:\"\\f66b\"}.fa-kaggle:before{content:\"\\f5fa\"}.fa-key:before{content:\"\\f084\"}.fa-keybase:before{content:\"\\f4f5\"}.fa-keyboard:before{content:\"\\f11c\"}.fa-keycdn:before{content:\"\\f3ba\"}.fa-khanda:before{content:\"\\f66d\"}.fa-kickstarter:before{content:\"\\f3bb\"}.fa-kickstarter-k:before{content:\"\\f3bc\"}.fa-kiss:before{content:\"\\f596\"}.fa-kiss-beam:before{content:\"\\f597\"}.fa-kiss-wink-heart:before{content:\"\\f598\"}.fa-kiwi-bird:before{content:\"\\f535\"}.fa-korvue:before{content:\"\\f42f\"}.fa-landmark:before{content:\"\\f66f\"}.fa-language:before{content:\"\\f1ab\"}.fa-laptop:before{content:\"\\f109\"}.fa-laptop-code:before{content:\"\\f5fc\"}.fa-laravel:before{content:\"\\f3bd\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-laugh:before{content:\"\\f599\"}.fa-laugh-beam:before{content:\"\\f59a\"}.fa-laugh-squint:before{content:\"\\f59b\"}.fa-laugh-wink:before{content:\"\\f59c\"}.fa-layer-group:before{content:\"\\f5fd\"}.fa-leaf:before{content:\"\\f06c\"}.fa-leanpub:before{content:\"\\f212\"}.fa-lemon:before{content:\"\\f094\"}.fa-less:before{content:\"\\f41d\"}.fa-less-than:before{content:\"\\f536\"}.fa-less-than-equal:before{content:\"\\f537\"}.fa-level-down-alt:before{content:\"\\f3be\"}.fa-level-up-alt:before{content:\"\\f3bf\"}.fa-life-ring:before{content:\"\\f1cd\"}.fa-lightbulb:before{content:\"\\f0eb\"}.fa-line:before{content:\"\\f3c0\"}.fa-link:before{content:\"\\f0c1\"}.fa-linkedin:before{content:\"\\f08c\"}.fa-linkedin-in:before{content:\"\\f0e1\"}.fa-linode:before{content:\"\\f2b8\"}.fa-linux:before{content:\"\\f17c\"}.fa-lira-sign:before{content:\"\\f195\"}.fa-list:before{content:\"\\f03a\"}.fa-list-alt:before{content:\"\\f022\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-lock:before{content:\"\\f023\"}.fa-lock-open:before{content:\"\\f3c1\"}.fa-long-arrow-alt-down:before{content:\"\\f309\"}.fa-long-arrow-alt-left:before{content:\"\\f30a\"}.fa-long-arrow-alt-right:before{content:\"\\f30b\"}.fa-long-arrow-alt-up:before{content:\"\\f30c\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-luggage-cart:before{content:\"\\f59d\"}.fa-lyft:before{content:\"\\f3c3\"}.fa-magento:before{content:\"\\f3c4\"}.fa-magic:before{content:\"\\f0d0\"}.fa-magnet:before{content:\"\\f076\"}.fa-mail-bulk:before{content:\"\\f674\"}.fa-mailchimp:before{content:\"\\f59e\"}.fa-male:before{content:\"\\f183\"}.fa-mandalorian:before{content:\"\\f50f\"}.fa-map:before{content:\"\\f279\"}.fa-map-marked:before{content:\"\\f59f\"}.fa-map-marked-alt:before{content:\"\\f5a0\"}.fa-map-marker:before{content:\"\\f041\"}.fa-map-marker-alt:before{content:\"\\f3c5\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-markdown:before{content:\"\\f60f\"}.fa-marker:before{content:\"\\f5a1\"}.fa-mars:before{content:\"\\f222\"}.fa-mars-double:before{content:\"\\f227\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mastodon:before{content:\"\\f4f6\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-medal:before{content:\"\\f5a2\"}.fa-medapps:before{content:\"\\f3c6\"}.fa-medium:before{content:\"\\f23a\"}.fa-medium-m:before{content:\"\\f3c7\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-medrt:before{content:\"\\f3c8\"}.fa-meetup:before{content:\"\\f2e0\"}.fa-megaport:before{content:\"\\f5a3\"}.fa-meh:before{content:\"\\f11a\"}.fa-meh-blank:before{content:\"\\f5a4\"}.fa-meh-rolling-eyes:before{content:\"\\f5a5\"}.fa-memory:before{content:\"\\f538\"}.fa-menorah:before{content:\"\\f676\"}.fa-mercury:before{content:\"\\f223\"}.fa-microchip:before{content:\"\\f2db\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-alt:before{content:\"\\f3c9\"}.fa-microphone-alt-slash:before{content:\"\\f539\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-microscope:before{content:\"\\f610\"}.fa-microsoft:before{content:\"\\f3ca\"}.fa-minus:before{content:\"\\f068\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-minus-square:before{content:\"\\f146\"}.fa-mix:before{content:\"\\f3cb\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-mizuni:before{content:\"\\f3cc\"}.fa-mobile:before{content:\"\\f10b\"}.fa-mobile-alt:before{content:\"\\f3cd\"}.fa-modx:before{content:\"\\f285\"}.fa-monero:before{content:\"\\f3d0\"}.fa-money-bill:before{content:\"\\f0d6\"}.fa-money-bill-alt:before{content:\"\\f3d1\"}.fa-money-bill-wave:before{content:\"\\f53a\"}.fa-money-bill-wave-alt:before{content:\"\\f53b\"}.fa-money-check:before{content:\"\\f53c\"}.fa-money-check-alt:before{content:\"\\f53d\"}.fa-monument:before{content:\"\\f5a6\"}.fa-moon:before{content:\"\\f186\"}.fa-mortar-pestle:before{content:\"\\f5a7\"}.fa-mosque:before{content:\"\\f678\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-music:before{content:\"\\f001\"}.fa-napster:before{content:\"\\f3d2\"}.fa-neos:before{content:\"\\f612\"}.fa-neuter:before{content:\"\\f22c\"}.fa-newspaper:before{content:\"\\f1ea\"}.fa-nimblr:before{content:\"\\f5a8\"}.fa-nintendo-switch:before{content:\"\\f418\"}.fa-node:before{content:\"\\f419\"}.fa-node-js:before{content:\"\\f3d3\"}.fa-not-equal:before{content:\"\\f53e\"}.fa-notes-medical:before{content:\"\\f481\"}.fa-npm:before{content:\"\\f3d4\"}.fa-ns8:before{content:\"\\f3d5\"}.fa-nutritionix:before{content:\"\\f3d6\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-oil-can:before{content:\"\\f613\"}.fa-old-republic:before{content:\"\\f510\"}.fa-om:before{content:\"\\f679\"}.fa-opencart:before{content:\"\\f23d\"}.fa-openid:before{content:\"\\f19b\"}.fa-opera:before{content:\"\\f26a\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-osi:before{content:\"\\f41a\"}.fa-outdent:before{content:\"\\f03b\"}.fa-page4:before{content:\"\\f3d7\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-paint-roller:before{content:\"\\f5aa\"}.fa-palette:before{content:\"\\f53f\"}.fa-palfed:before{content:\"\\f3d8\"}.fa-pallet:before{content:\"\\f482\"}.fa-paper-plane:before{content:\"\\f1d8\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-parachute-box:before{content:\"\\f4cd\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-parking:before{content:\"\\f540\"}.fa-passport:before{content:\"\\f5ab\"}.fa-pastafarianism:before{content:\"\\f67b\"}.fa-paste:before{content:\"\\f0ea\"}.fa-patreon:before{content:\"\\f3d9\"}.fa-pause:before{content:\"\\f04c\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-paw:before{content:\"\\f1b0\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-peace:before{content:\"\\f67c\"}.fa-pen:before{content:\"\\f304\"}.fa-pen-alt:before{content:\"\\f305\"}.fa-pen-fancy:before{content:\"\\f5ac\"}.fa-pen-nib:before{content:\"\\f5ad\"}.fa-pen-square:before{content:\"\\f14b\"}.fa-pencil-alt:before{content:\"\\f303\"}.fa-pencil-ruler:before{content:\"\\f5ae\"}.fa-people-carry:before{content:\"\\f4ce\"}.fa-percent:before{content:\"\\f295\"}.fa-percentage:before{content:\"\\f541\"}.fa-periscope:before{content:\"\\f3da\"}.fa-phabricator:before{content:\"\\f3db\"}.fa-phoenix-framework:before{content:\"\\f3dc\"}.fa-phoenix-squadron:before{content:\"\\f511\"}.fa-phone:before{content:\"\\f095\"}.fa-phone-slash:before{content:\"\\f3dd\"}.fa-phone-square:before{content:\"\\f098\"}.fa-phone-volume:before{content:\"\\f2a0\"}.fa-php:before{content:\"\\f457\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-pied-piper-hat:before{content:\"\\f4e5\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-piggy-bank:before{content:\"\\f4d3\"}.fa-pills:before{content:\"\\f484\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-place-of-worship:before{content:\"\\f67f\"}.fa-plane:before{content:\"\\f072\"}.fa-plane-arrival:before{content:\"\\f5af\"}.fa-plane-departure:before{content:\"\\f5b0\"}.fa-play:before{content:\"\\f04b\"}.fa-play-circle:before{content:\"\\f144\"}.fa-playstation:before{content:\"\\f3df\"}.fa-plug:before{content:\"\\f1e6\"}.fa-plus:before{content:\"\\f067\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-poll:before{content:\"\\f681\"}.fa-poll-h:before{content:\"\\f682\"}.fa-poo:before{content:\"\\f2fe\"}.fa-poop:before{content:\"\\f619\"}.fa-portrait:before{content:\"\\f3e0\"}.fa-pound-sign:before{content:\"\\f154\"}.fa-power-off:before{content:\"\\f011\"}.fa-pray:before{content:\"\\f683\"}.fa-praying-hands:before{content:\"\\f684\"}.fa-prescription:before{content:\"\\f5b1\"}.fa-prescription-bottle:before{content:\"\\f485\"}.fa-prescription-bottle-alt:before{content:\"\\f486\"}.fa-print:before{content:\"\\f02f\"}.fa-procedures:before{content:\"\\f487\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-project-diagram:before{content:\"\\f542\"}.fa-pushed:before{content:\"\\f3e1\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-python:before{content:\"\\f3e2\"}.fa-qq:before{content:\"\\f1d6\"}.fa-qrcode:before{content:\"\\f029\"}.fa-question:before{content:\"\\f128\"}.fa-question-circle:before{content:\"\\f059\"}.fa-quidditch:before{content:\"\\f458\"}.fa-quinscape:before{content:\"\\f459\"}.fa-quora:before{content:\"\\f2c4\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-quran:before{content:\"\\f687\"}.fa-r-project:before{content:\"\\f4f7\"}.fa-random:before{content:\"\\f074\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-react:before{content:\"\\f41b\"}.fa-readme:before{content:\"\\f4d5\"}.fa-rebel:before{content:\"\\f1d0\"}.fa-receipt:before{content:\"\\f543\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-red-river:before{content:\"\\f3e3\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-redo:before{content:\"\\f01e\"}.fa-redo-alt:before{content:\"\\f2f9\"}.fa-registered:before{content:\"\\f25d\"}.fa-rendact:before{content:\"\\f3e4\"}.fa-renren:before{content:\"\\f18b\"}.fa-reply:before{content:\"\\f3e5\"}.fa-reply-all:before{content:\"\\f122\"}.fa-replyd:before{content:\"\\f3e6\"}.fa-researchgate:before{content:\"\\f4f8\"}.fa-resolving:before{content:\"\\f3e7\"}.fa-retweet:before{content:\"\\f079\"}.fa-rev:before{content:\"\\f5b2\"}.fa-ribbon:before{content:\"\\f4d6\"}.fa-road:before{content:\"\\f018\"}.fa-robot:before{content:\"\\f544\"}.fa-rocket:before{content:\"\\f135\"}.fa-rocketchat:before{content:\"\\f3e8\"}.fa-rockrms:before{content:\"\\f3e9\"}.fa-route:before{content:\"\\f4d7\"}.fa-rss:before{content:\"\\f09e\"}.fa-rss-square:before{content:\"\\f143\"}.fa-ruble-sign:before{content:\"\\f158\"}.fa-ruler:before{content:\"\\f545\"}.fa-ruler-combined:before{content:\"\\f546\"}.fa-ruler-horizontal:before{content:\"\\f547\"}.fa-ruler-vertical:before{content:\"\\f548\"}.fa-rupee-sign:before{content:\"\\f156\"}.fa-sad-cry:before{content:\"\\f5b3\"}.fa-sad-tear:before{content:\"\\f5b4\"}.fa-safari:before{content:\"\\f267\"}.fa-sass:before{content:\"\\f41e\"}.fa-save:before{content:\"\\f0c7\"}.fa-schlix:before{content:\"\\f3ea\"}.fa-school:before{content:\"\\f549\"}.fa-screwdriver:before{content:\"\\f54a\"}.fa-scribd:before{content:\"\\f28a\"}.fa-search:before{content:\"\\f002\"}.fa-search-dollar:before{content:\"\\f688\"}.fa-search-location:before{content:\"\\f689\"}.fa-search-minus:before{content:\"\\f010\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-searchengin:before{content:\"\\f3eb\"}.fa-seedling:before{content:\"\\f4d8\"}.fa-sellcast:before{content:\"\\f2da\"}.fa-sellsy:before{content:\"\\f213\"}.fa-server:before{content:\"\\f233\"}.fa-servicestack:before{content:\"\\f3ec\"}.fa-shapes:before{content:\"\\f61f\"}.fa-share:before{content:\"\\f064\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-share-square:before{content:\"\\f14d\"}.fa-shekel-sign:before{content:\"\\f20b\"}.fa-shield-alt:before{content:\"\\f3ed\"}.fa-ship:before{content:\"\\f21a\"}.fa-shipping-fast:before{content:\"\\f48b\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-shoe-prints:before{content:\"\\f54b\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-shopware:before{content:\"\\f5b5\"}.fa-shower:before{content:\"\\f2cc\"}.fa-shuttle-van:before{content:\"\\f5b6\"}.fa-sign:before{content:\"\\f4d9\"}.fa-sign-in-alt:before{content:\"\\f2f6\"}.fa-sign-language:before{content:\"\\f2a7\"}.fa-sign-out-alt:before{content:\"\\f2f5\"}.fa-signal:before{content:\"\\f012\"}.fa-signature:before{content:\"\\f5b7\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-sistrix:before{content:\"\\f3ee\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-sith:before{content:\"\\f512\"}.fa-skull:before{content:\"\\f54c\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-skype:before{content:\"\\f17e\"}.fa-slack:before{content:\"\\f198\"}.fa-slack-hash:before{content:\"\\f3ef\"}.fa-sliders-h:before{content:\"\\f1de\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-smile:before{content:\"\\f118\"}.fa-smile-beam:before{content:\"\\f5b8\"}.fa-smile-wink:before{content:\"\\f4da\"}.fa-smoking:before{content:\"\\f48d\"}.fa-smoking-ban:before{content:\"\\f54d\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-snowflake:before{content:\"\\f2dc\"}.fa-socks:before{content:\"\\f696\"}.fa-solar-panel:before{content:\"\\f5ba\"}.fa-sort:before{content:\"\\f0dc\"}.fa-sort-alpha-down:before{content:\"\\f15d\"}.fa-sort-alpha-up:before{content:\"\\f15e\"}.fa-sort-amount-down:before{content:\"\\f160\"}.fa-sort-amount-up:before{content:\"\\f161\"}.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-numeric-down:before{content:\"\\f162\"}.fa-sort-numeric-up:before{content:\"\\f163\"}.fa-sort-up:before{content:\"\\f0de\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-spa:before{content:\"\\f5bb\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-speakap:before{content:\"\\f3f3\"}.fa-spinner:before{content:\"\\f110\"}.fa-splotch:before{content:\"\\f5bc\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-spray-can:before{content:\"\\f5bd\"}.fa-square:before{content:\"\\f0c8\"}.fa-square-full:before{content:\"\\f45c\"}.fa-square-root-alt:before{content:\"\\f698\"}.fa-squarespace:before{content:\"\\f5be\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-stamp:before{content:\"\\f5bf\"}.fa-star:before{content:\"\\f005\"}.fa-star-and-crescent:before{content:\"\\f699\"}.fa-star-half:before{content:\"\\f089\"}.fa-star-half-alt:before{content:\"\\f5c0\"}.fa-star-of-david:before{content:\"\\f69a\"}.fa-star-of-life:before{content:\"\\f621\"}.fa-staylinked:before{content:\"\\f3f5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-steam-symbol:before{content:\"\\f3f6\"}.fa-step-backward:before{content:\"\\f048\"}.fa-step-forward:before{content:\"\\f051\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-sticker-mule:before{content:\"\\f3f7\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-stop:before{content:\"\\f04d\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stopwatch:before{content:\"\\f2f2\"}.fa-store:before{content:\"\\f54e\"}.fa-store-alt:before{content:\"\\f54f\"}.fa-strava:before{content:\"\\f428\"}.fa-stream:before{content:\"\\f550\"}.fa-street-view:before{content:\"\\f21d\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-stripe:before{content:\"\\f429\"}.fa-stripe-s:before{content:\"\\f42a\"}.fa-stroopwafel:before{content:\"\\f551\"}.fa-studiovinari:before{content:\"\\f3f8\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-subscript:before{content:\"\\f12c\"}.fa-subway:before{content:\"\\f239\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-suitcase-rolling:before{content:\"\\f5c1\"}.fa-sun:before{content:\"\\f185\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-superscript:before{content:\"\\f12b\"}.fa-supple:before{content:\"\\f3f9\"}.fa-surprise:before{content:\"\\f5c2\"}.fa-swatchbook:before{content:\"\\f5c3\"}.fa-swimmer:before{content:\"\\f5c4\"}.fa-swimming-pool:before{content:\"\\f5c5\"}.fa-synagogue:before{content:\"\\f69b\"}.fa-sync:before{content:\"\\f021\"}.fa-sync-alt:before{content:\"\\f2f1\"}.fa-syringe:before{content:\"\\f48e\"}.fa-table:before{content:\"\\f0ce\"}.fa-table-tennis:before{content:\"\\f45d\"}.fa-tablet:before{content:\"\\f10a\"}.fa-tablet-alt:before{content:\"\\f3fa\"}.fa-tablets:before{content:\"\\f490\"}.fa-tachometer-alt:before{content:\"\\f3fd\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-tape:before{content:\"\\f4db\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-taxi:before{content:\"\\f1ba\"}.fa-teamspeak:before{content:\"\\f4f9\"}.fa-teeth:before{content:\"\\f62e\"}.fa-teeth-open:before{content:\"\\f62f\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-telegram-plane:before{content:\"\\f3fe\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-terminal:before{content:\"\\f120\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-th:before{content:\"\\f00a\"}.fa-th-large:before{content:\"\\f009\"}.fa-th-list:before{content:\"\\f00b\"}.fa-the-red-yeti:before{content:\"\\f69d\"}.fa-theater-masks:before{content:\"\\f630\"}.fa-themeco:before{content:\"\\f5c6\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-thermometer:before{content:\"\\f491\"}.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbtack:before{content:\"\\f08d\"}.fa-ticket-alt:before{content:\"\\f3ff\"}.fa-times:before{content:\"\\f00d\"}.fa-times-circle:before{content:\"\\f057\"}.fa-tint:before{content:\"\\f043\"}.fa-tint-slash:before{content:\"\\f5c7\"}.fa-tired:before{content:\"\\f5c8\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-toolbox:before{content:\"\\f552\"}.fa-tooth:before{content:\"\\f5c9\"}.fa-torah:before{content:\"\\f6a0\"}.fa-torii-gate:before{content:\"\\f6a1\"}.fa-trade-federation:before{content:\"\\f513\"}.fa-trademark:before{content:\"\\f25c\"}.fa-traffic-light:before{content:\"\\f637\"}.fa-train:before{content:\"\\f238\"}.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-trash:before{content:\"\\f1f8\"}.fa-trash-alt:before{content:\"\\f2ed\"}.fa-tree:before{content:\"\\f1bb\"}.fa-trello:before{content:\"\\f181\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-trophy:before{content:\"\\f091\"}.fa-truck:before{content:\"\\f0d1\"}.fa-truck-loading:before{content:\"\\f4de\"}.fa-truck-monster:before{content:\"\\f63b\"}.fa-truck-moving:before{content:\"\\f4df\"}.fa-truck-pickup:before{content:\"\\f63c\"}.fa-tshirt:before{content:\"\\f553\"}.fa-tty:before{content:\"\\f1e4\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-tv:before{content:\"\\f26c\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-twitter:before{content:\"\\f099\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-typo3:before{content:\"\\f42b\"}.fa-uber:before{content:\"\\f402\"}.fa-uikit:before{content:\"\\f403\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-umbrella-beach:before{content:\"\\f5ca\"}.fa-underline:before{content:\"\\f0cd\"}.fa-undo:before{content:\"\\f0e2\"}.fa-undo-alt:before{content:\"\\f2ea\"}.fa-uniregistry:before{content:\"\\f404\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-university:before{content:\"\\f19c\"}.fa-unlink:before{content:\"\\f127\"}.fa-unlock:before{content:\"\\f09c\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-untappd:before{content:\"\\f405\"}.fa-upload:before{content:\"\\f093\"}.fa-usb:before{content:\"\\f287\"}.fa-user:before{content:\"\\f007\"}.fa-user-alt:before{content:\"\\f406\"}.fa-user-alt-slash:before{content:\"\\f4fa\"}.fa-user-astronaut:before{content:\"\\f4fb\"}.fa-user-check:before{content:\"\\f4fc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-clock:before{content:\"\\f4fd\"}.fa-user-cog:before{content:\"\\f4fe\"}.fa-user-edit:before{content:\"\\f4ff\"}.fa-user-friends:before{content:\"\\f500\"}.fa-user-graduate:before{content:\"\\f501\"}.fa-user-lock:before{content:\"\\f502\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-user-minus:before{content:\"\\f503\"}.fa-user-ninja:before{content:\"\\f504\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-user-shield:before{content:\"\\f505\"}.fa-user-slash:before{content:\"\\f506\"}.fa-user-tag:before{content:\"\\f507\"}.fa-user-tie:before{content:\"\\f508\"}.fa-user-times:before{content:\"\\f235\"}.fa-users:before{content:\"\\f0c0\"}.fa-users-cog:before{content:\"\\f509\"}.fa-ussunnah:before{content:\"\\f407\"}.fa-utensil-spoon:before{content:\"\\f2e5\"}.fa-utensils:before{content:\"\\f2e7\"}.fa-vaadin:before{content:\"\\f408\"}.fa-vector-square:before{content:\"\\f5cb\"}.fa-venus:before{content:\"\\f221\"}.fa-venus-double:before{content:\"\\f226\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-viacoin:before{content:\"\\f237\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-vial:before{content:\"\\f492\"}.fa-vials:before{content:\"\\f493\"}.fa-viber:before{content:\"\\f409\"}.fa-video:before{content:\"\\f03d\"}.fa-video-slash:before{content:\"\\f4e2\"}.fa-vihara:before{content:\"\\f6a7\"}.fa-vimeo:before{content:\"\\f40a\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-vimeo-v:before{content:\"\\f27d\"}.fa-vine:before{content:\"\\f1ca\"}.fa-vk:before{content:\"\\f189\"}.fa-vnv:before{content:\"\\f40b\"}.fa-volleyball-ball:before{content:\"\\f45f\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-up:before{content:\"\\f028\"}.fa-vuejs:before{content:\"\\f41f\"}.fa-walking:before{content:\"\\f554\"}.fa-wallet:before{content:\"\\f555\"}.fa-warehouse:before{content:\"\\f494\"}.fa-weebly:before{content:\"\\f5cc\"}.fa-weibo:before{content:\"\\f18a\"}.fa-weight:before{content:\"\\f496\"}.fa-weight-hanging:before{content:\"\\f5cd\"}.fa-weixin:before{content:\"\\f1d7\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-whatsapp-square:before{content:\"\\f40c\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-whmcs:before{content:\"\\f40d\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-window-close:before{content:\"\\f410\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-windows:before{content:\"\\f17a\"}.fa-wine-glass:before{content:\"\\f4e3\"}.fa-wine-glass-alt:before{content:\"\\f5ce\"}.fa-wix:before{content:\"\\f5cf\"}.fa-wolf-pack-battalion:before{content:\"\\f514\"}.fa-won-sign:before{content:\"\\f159\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-wordpress-simple:before{content:\"\\f411\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-wpforms:before{content:\"\\f298\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-x-ray:before{content:\"\\f497\"}.fa-xbox:before{content:\"\\f412\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-y-combinator:before{content:\"\\f23b\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-yandex:before{content:\"\\f413\"}.fa-yandex-international:before{content:\"\\f414\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-yen-sign:before{content:\"\\f157\"}.fa-yin-yang:before{content:\"\\f6ad\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-youtube:before{content:\"\\f167\"}.fa-youtube-square:before{content:\"\\f431\"}.fa-zhihu:before{content:\"\\f63f\"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:\"Font Awesome 5 Brands\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\")}.fab{font-family:\"Font Awesome 5 Brands\"}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"svg\")}.far{font-weight:400}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:900;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"svg\")}.fa,.far,.fas{font-family:\"Font Awesome 5 Free\"}.fa,.fas{font-weight:900}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.9b6c8da.eot";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.48461ea.woff2";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.7b464e2.woff";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.947b953.ttf";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fa-brands-400.b547263.svg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.7422060.eot";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.949a2b0.woff2";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.381af09.woff";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.73fe7f1.ttf";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fa-regular-400.b5a61b2.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.70e65a7.eot";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.14a0819.woff2";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.815694d.woff";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.0079a0a.ttf";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fa-solid-900.38508b2.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2).default("67338e25", content, true)

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(57);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(58);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(59);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(60);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, "@font-face{font-family:\"NucleoIcons\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");font-weight:400;font-style:normal}.ni{display:inline-block;font:normal normal normal 14px/1 NucleoIcons;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ni-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.ni-2x{font-size:2em}.ni-3x{font-size:3em}.ni-4x{font-size:4em}.ni-5x{font-size:5em}.ni.circle,.ni.square{padding:.33333333em;vertical-align:-16%;background-color:#eee}.ni.circle{border-radius:50%}.ni-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.ni-ul>li{position:relative}.ni-ul>li>.ni{position:absolute;left:-1.57142857em;top:.14285714em;text-align:center}.ni-ul>li>.ni.lg{top:0;left:-1.35714286em}.ni-ul>li>.ni.circle,.ni-ul>li>.ni.square{top:-.19047619em;left:-1.9047619em}.ni.spin{-webkit-animation:nc-spin 2s linear infinite;animation:nc-spin 2s linear infinite}@-webkit-keyframes nc-spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes nc-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ni.rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);transform:rotate(90deg)}.ni.rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);transform:rotate(180deg)}.ni.rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);transform:rotate(270deg)}.ni.flip-y{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0);transform:scaleX(-1)}.ni.flip-x{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);transform:scaleY(-1)}.ni-active-40:before{content:\"\\ea02\"}.ni-air-baloon:before{content:\"\\ea03\"}.ni-album-2:before{content:\"\\ea04\"}.ni-align-center:before{content:\"\\ea05\"}.ni-align-left-2:before{content:\"\\ea06\"}.ni-ambulance:before{content:\"\\ea07\"}.ni-app:before{content:\"\\ea08\"}.ni-archive-2:before{content:\"\\ea09\"}.ni-atom:before{content:\"\\ea0a\"}.ni-badge:before{content:\"\\ea0b\"}.ni-bag-17:before{content:\"\\ea0c\"}.ni-basket:before{content:\"\\ea0d\"}.ni-bell-55:before{content:\"\\ea0e\"}.ni-bold-down:before{content:\"\\ea0f\"}.ni-bold-left:before{content:\"\\ea10\"}.ni-bold-right:before{content:\"\\ea11\"}.ni-bold-up:before{content:\"\\ea12\"}.ni-bold:before{content:\"\\ea13\"}.ni-book-bookmark:before{content:\"\\ea14\"}.ni-books:before{content:\"\\ea15\"}.ni-box-2:before{content:\"\\ea16\"}.ni-briefcase-24:before{content:\"\\ea17\"}.ni-building:before{content:\"\\ea18\"}.ni-bulb-61:before{content:\"\\ea19\"}.ni-bullet-list-67:before{content:\"\\ea1a\"}.ni-bus-front-12:before{content:\"\\ea1b\"}.ni-button-pause:before{content:\"\\ea1c\"}.ni-button-play:before{content:\"\\ea1d\"}.ni-button-power:before{content:\"\\ea1e\"}.ni-calendar-grid-58:before{content:\"\\ea1f\"}.ni-camera-compact:before{content:\"\\ea20\"}.ni-caps-small:before{content:\"\\ea21\"}.ni-cart:before{content:\"\\ea22\"}.ni-chart-bar-32:before{content:\"\\ea23\"}.ni-chart-pie-35:before{content:\"\\ea24\"}.ni-chat-round:before{content:\"\\ea25\"}.ni-check-bold:before{content:\"\\ea26\"}.ni-circle-08:before{content:\"\\ea27\"}.ni-cloud-download-95:before{content:\"\\ea28\"}.ni-cloud-upload-96:before{content:\"\\ea29\"}.ni-compass-04:before{content:\"\\ea2a\"}.ni-controller:before{content:\"\\ea2b\"}.ni-credit-card:before{content:\"\\ea2c\"}.ni-curved-next:before{content:\"\\ea2d\"}.ni-delivery-fast:before{content:\"\\ea2e\"}.ni-diamond:before{content:\"\\ea2f\"}.ni-email-83:before{content:\"\\ea30\"}.ni-fat-add:before{content:\"\\ea31\"}.ni-fat-delete:before{content:\"\\ea32\"}.ni-fat-remove:before{content:\"\\ea33\"}.ni-favourite-28:before{content:\"\\ea34\"}.ni-folder-17:before{content:\"\\ea35\"}.ni-glasses-2:before{content:\"\\ea36\"}.ni-hat-3:before{content:\"\\ea37\"}.ni-headphones:before{content:\"\\ea38\"}.ni-html5:before{content:\"\\ea39\"}.ni-istanbul:before{content:\"\\ea3a\"}.ni-key-25:before{content:\"\\ea3b\"}.ni-laptop:before{content:\"\\ea3c\"}.ni-like-2:before{content:\"\\ea3d\"}.ni-lock-circle-open:before{content:\"\\ea3e\"}.ni-map-big:before{content:\"\\ea3f\"}.ni-mobile-button:before{content:\"\\ea40\"}.ni-money-coins:before{content:\"\\ea41\"}.ni-note-03:before{content:\"\\ea42\"}.ni-notification-70:before{content:\"\\ea43\"}.ni-palette:before{content:\"\\ea44\"}.ni-paper-diploma:before{content:\"\\ea45\"}.ni-pin-3:before{content:\"\\ea46\"}.ni-planet:before{content:\"\\ea47\"}.ni-ruler-pencil:before{content:\"\\ea48\"}.ni-satisfied:before{content:\"\\ea49\"}.ni-scissors:before{content:\"\\ea4a\"}.ni-send:before{content:\"\\ea4b\"}.ni-settings-gear-65:before{content:\"\\ea4c\"}.ni-settings:before{content:\"\\ea4d\"}.ni-single-02:before{content:\"\\ea4e\"}.ni-single-copy-04:before{content:\"\\ea4f\"}.ni-sound-wave:before{content:\"\\ea50\"}.ni-spaceship:before{content:\"\\ea51\"}.ni-square-pin:before{content:\"\\ea52\"}.ni-support-16:before{content:\"\\ea53\"}.ni-tablet-button:before{content:\"\\ea54\"}.ni-tag:before{content:\"\\ea55\"}.ni-tie-bow:before{content:\"\\ea56\"}.ni-time-alarm:before{content:\"\\ea57\"}.ni-trophy:before{content:\"\\ea58\"}.ni-tv-2:before{content:\"\\ea59\"}.ni-umbrella-13:before{content:\"\\ea5a\"}.ni-user-run:before{content:\"\\ea5b\"}.ni-vector:before{content:\"\\ea5c\"}.ni-watch-time:before{content:\"\\ea5d\"}.ni-world:before{content:\"\\ea5e\"}.ni-zoom-split-in:before{content:\"\\ea5f\"}.ni-collection:before{content:\"\\ea60\"}.ni-image:before{content:\"\\ea61\"}.ni-shop:before{content:\"\\ea62\"}.ni-ungroup:before{content:\"\\ea63\"}.ni-world-2:before{content:\"\\ea64\"}.ni-ui-04:before{content:\"\\ea65\"}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nucleo-icons.c173356.eot";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nucleo-icons.4264397.woff2";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nucleo-icons.2569aae.woff";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/nucleo-icons.f82ec6b.ttf";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nucleo-icons.0b8a30b.svg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2).default("4e2eb781", content, true)

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*!\n\n=========================================================\n* Argon Dashboard PRO - v1.2.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro\n* Copyright 2020 Creative Tim (https://www.creative-tim.com)\n\n* Coded by www.creative-tim.com\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n*/:root{--blue:#004689;--indigo:#5603ad;--purple:#8965e0;--pink:#f3a4b5;--red:#f5365c;--orange:#fb6340;--yellow:#ffd600;--green:#2dce89;--teal:#11cdef;--cyan:#2bffc6;--gray:#8898aa;--gray-dark:#32325d;--light:#ced4da;--lighter:#e9ecef;--primary:#004689;--secondary:#f7fafc;--success:#2dce89;--info:#11cdef;--warning:#fb6340;--danger:#f5365c;--light:#adb5bd;--dark:#212529;--default:#172b4d;--white:#fff;--neutral:#fff;--darker:#000;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:Open Sans,sans-serif;--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;margin:0;text-align:left;color:#525f7f;background-color:#f8f9fe}[tabindex=\"-1\"]:focus:not(.focus-visible),[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{overflow:visible;box-sizing:content-box;height:0}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{cursor:help;text-decoration:underline;text-decoration:underline dotted;border-bottom:0;-webkit-text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:600}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#004689;background-color:transparent}a,a:hover{text-decoration:none}a:hover{color:#233dd2}a:not([href]),a:not([href]):hover{text-decoration:none;color:inherit}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{overflow:auto;margin-top:0;margin-bottom:1rem}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:1rem;padding-bottom:1rem;caption-side:bottom;text-align:left;color:#8898aa}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;margin:0;padding:0;border:0}legend{font-size:1.5rem;line-height:inherit;display:block;width:100%;max-width:100%;margin-bottom:.5rem;padding:0;white-space:normal;color:inherit}@media (max-width:1200px){legend{font-size:calc(1.275rem + .3vw)}}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:600;line-height:1.5;margin-bottom:.5rem;color:#32325d}.h1,h1{font-size:1.625rem}@media (max-width:1200px){.h1,h1{font-size:calc(1.2875rem + .45vw)}}.h2,h2{font-size:1.25rem}.h3,h3{font-size:1.0625rem}.h4,h4{font-size:.9375rem}.h5,h5{font-size:.8125rem}.h6,h6{font-size:.625rem}.display-1{font-size:3.3rem;font-weight:600;line-height:1.5}@media (max-width:1200px){.display-1{font-size:calc(1.455rem + 2.46vw)}}.display-2{font-size:2.75rem;font-weight:600;line-height:1.5}@media (max-width:1200px){.display-2{font-size:calc(1.4rem + 1.8vw)}}.display-3{font-size:2.1875rem;font-weight:600;line-height:1.5}@media (max-width:1200px){.display-3{font-size:calc(1.34375rem + 1.125vw)}}.display-4{font-size:1.6275rem;font-weight:600;line-height:1.5}@media (max-width:1200px){.display-4{font-size:calc(1.28775rem + .453vw)}}hr{margin-top:2rem;margin-bottom:2rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{font-size:1.25rem;margin-bottom:1rem}.blockquote-footer{font-size:80%;display:block;color:#8898aa}.blockquote-footer:before{content:\"\\2014\\00A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;border:1px solid #dee2e6;border-radius:.375rem;background-color:#f8f9fe;box-shadow:0 1px 2px rgba(0,0,0,.075)}.figure{display:inline-block}.figure-img{line-height:1;margin-bottom:.5rem}.figure-caption{font-size:90%;color:#8898aa}code{font-size:87.5%;word-wrap:break-word;color:#f3a4b5}a>code{color:inherit}kbd{font-size:87.5%;padding:.2rem .4rem;color:#fff;border-radius:.25rem;background-color:#212529;box-shadow:inset 0 -.1rem 0 rgba(0,0,0,.25)}kbd kbd{font-size:100%;font-weight:600;padding:0;box-shadow:none}pre{font-size:87.5%;display:block;color:#212529}pre code{font-size:inherit;word-break:normal;color:inherit}.pre-scrollable{overflow-y:scroll;max-height:340px}.container{width:100%;margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;margin-right:-15px;margin-left:-15px;flex-wrap:wrap}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{max-width:100%;flex-basis:0;flex-grow:1}.row-cols-1>*{max-width:100%;flex:0 0 100%}.row-cols-2>*{max-width:50%;flex:0 0 50%}.row-cols-3>*{max-width:33.33333%;flex:0 0 33.33333%}.row-cols-4>*{max-width:25%;flex:0 0 25%}.row-cols-5>*{max-width:20%;flex:0 0 20%}.row-cols-6>*{max-width:16.66667%;flex:0 0 16.66667%}.col-auto{width:auto;max-width:100%;flex:0 0 auto}.col-1{max-width:8.33333%;flex:0 0 8.33333%}.col-2{max-width:16.66667%;flex:0 0 16.66667%}.col-3{max-width:25%;flex:0 0 25%}.col-4{max-width:33.33333%;flex:0 0 33.33333%}.col-5{max-width:41.66667%;flex:0 0 41.66667%}.col-6{max-width:50%;flex:0 0 50%}.col-7{max-width:58.33333%;flex:0 0 58.33333%}.col-8{max-width:66.66667%;flex:0 0 66.66667%}.col-9{max-width:75%;flex:0 0 75%}.col-10{max-width:83.33333%;flex:0 0 83.33333%}.col-11{max-width:91.66667%;flex:0 0 91.66667%}.col-12{max-width:100%;flex:0 0 100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}@media (min-width:576px){.col-sm{max-width:100%;flex-basis:0;flex-grow:1}.row-cols-sm-1>*{max-width:100%;flex:0 0 100%}.row-cols-sm-2>*{max-width:50%;flex:0 0 50%}.row-cols-sm-3>*{max-width:33.33333%;flex:0 0 33.33333%}.row-cols-sm-4>*{max-width:25%;flex:0 0 25%}.row-cols-sm-5>*{max-width:20%;flex:0 0 20%}.row-cols-sm-6>*{max-width:16.66667%;flex:0 0 16.66667%}.col-sm-auto{width:auto;max-width:100%;flex:0 0 auto}.col-sm-1{max-width:8.33333%;flex:0 0 8.33333%}.col-sm-2{max-width:16.66667%;flex:0 0 16.66667%}.col-sm-3{max-width:25%;flex:0 0 25%}.col-sm-4{max-width:33.33333%;flex:0 0 33.33333%}.col-sm-5{max-width:41.66667%;flex:0 0 41.66667%}.col-sm-6{max-width:50%;flex:0 0 50%}.col-sm-7{max-width:58.33333%;flex:0 0 58.33333%}.col-sm-8{max-width:66.66667%;flex:0 0 66.66667%}.col-sm-9{max-width:75%;flex:0 0 75%}.col-sm-10{max-width:83.33333%;flex:0 0 83.33333%}.col-sm-11{max-width:91.66667%;flex:0 0 91.66667%}.col-sm-12{max-width:100%;flex:0 0 100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}}@media (min-width:768px){.col-md{max-width:100%;flex-basis:0;flex-grow:1}.row-cols-md-1>*{max-width:100%;flex:0 0 100%}.row-cols-md-2>*{max-width:50%;flex:0 0 50%}.row-cols-md-3>*{max-width:33.33333%;flex:0 0 33.33333%}.row-cols-md-4>*{max-width:25%;flex:0 0 25%}.row-cols-md-5>*{max-width:20%;flex:0 0 20%}.row-cols-md-6>*{max-width:16.66667%;flex:0 0 16.66667%}.col-md-auto{width:auto;max-width:100%;flex:0 0 auto}.col-md-1{max-width:8.33333%;flex:0 0 8.33333%}.col-md-2{max-width:16.66667%;flex:0 0 16.66667%}.col-md-3{max-width:25%;flex:0 0 25%}.col-md-4{max-width:33.33333%;flex:0 0 33.33333%}.col-md-5{max-width:41.66667%;flex:0 0 41.66667%}.col-md-6{max-width:50%;flex:0 0 50%}.col-md-7{max-width:58.33333%;flex:0 0 58.33333%}.col-md-8{max-width:66.66667%;flex:0 0 66.66667%}.col-md-9{max-width:75%;flex:0 0 75%}.col-md-10{max-width:83.33333%;flex:0 0 83.33333%}.col-md-11{max-width:91.66667%;flex:0 0 91.66667%}.col-md-12{max-width:100%;flex:0 0 100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}}@media (min-width:992px){.col-lg{max-width:100%;flex-basis:0;flex-grow:1}.row-cols-lg-1>*{max-width:100%;flex:0 0 100%}.row-cols-lg-2>*{max-width:50%;flex:0 0 50%}.row-cols-lg-3>*{max-width:33.33333%;flex:0 0 33.33333%}.row-cols-lg-4>*{max-width:25%;flex:0 0 25%}.row-cols-lg-5>*{max-width:20%;flex:0 0 20%}.row-cols-lg-6>*{max-width:16.66667%;flex:0 0 16.66667%}.col-lg-auto{width:auto;max-width:100%;flex:0 0 auto}.col-lg-1{max-width:8.33333%;flex:0 0 8.33333%}.col-lg-2{max-width:16.66667%;flex:0 0 16.66667%}.col-lg-3{max-width:25%;flex:0 0 25%}.col-lg-4{max-width:33.33333%;flex:0 0 33.33333%}.col-lg-5{max-width:41.66667%;flex:0 0 41.66667%}.col-lg-6{max-width:50%;flex:0 0 50%}.col-lg-7{max-width:58.33333%;flex:0 0 58.33333%}.col-lg-8{max-width:66.66667%;flex:0 0 66.66667%}.col-lg-9{max-width:75%;flex:0 0 75%}.col-lg-10{max-width:83.33333%;flex:0 0 83.33333%}.col-lg-11{max-width:91.66667%;flex:0 0 91.66667%}.col-lg-12{max-width:100%;flex:0 0 100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}}@media (min-width:1200px){.col-xl{max-width:100%;flex-basis:0;flex-grow:1}.row-cols-xl-1>*{max-width:100%;flex:0 0 100%}.row-cols-xl-2>*{max-width:50%;flex:0 0 50%}.row-cols-xl-3>*{max-width:33.33333%;flex:0 0 33.33333%}.row-cols-xl-4>*{max-width:25%;flex:0 0 25%}.row-cols-xl-5>*{max-width:20%;flex:0 0 20%}.row-cols-xl-6>*{max-width:16.66667%;flex:0 0 16.66667%}.col-xl-auto{width:auto;max-width:100%;flex:0 0 auto}.col-xl-1{max-width:8.33333%;flex:0 0 8.33333%}.col-xl-2{max-width:16.66667%;flex:0 0 16.66667%}.col-xl-3{max-width:25%;flex:0 0 25%}.col-xl-4{max-width:33.33333%;flex:0 0 33.33333%}.col-xl-5{max-width:41.66667%;flex:0 0 41.66667%}.col-xl-6{max-width:50%;flex:0 0 50%}.col-xl-7{max-width:58.33333%;flex:0 0 58.33333%}.col-xl-8{max-width:66.66667%;flex:0 0 66.66667%}.col-xl-9{max-width:75%;flex:0 0 75%}.col-xl-10{max-width:83.33333%;flex:0 0 83.33333%}.col-xl-11{max-width:91.66667%;flex:0 0 91.66667%}.col-xl-12{max-width:100%;flex:0 0 100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}}.table{width:100%;margin-bottom:1rem;color:#525f7f;background-color:transparent}.table td,.table th{padding:1rem;vertical-align:top;border-top:1px solid #e9ecef}.table thead th{vertical-align:bottom;border-bottom:2px solid #e9ecef}.table tbody+tbody{border-top:2px solid #e9ecef}.table-sm td,.table-sm th{padding:.5rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #e9ecef}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(246,249,252,.3)}.table-hover tbody tr:hover{color:#525f7f;background-color:#f6f9fc}.table-primary,.table-primary>td,.table-primary>th{background-color:#d2d8f7}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#abb6f1}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#bcc5f3}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#fdfefe}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#fbfcfd}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#ecf6f6}.table-success,.table-success>td,.table-success>th{background-color:#c4f1de}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#92e6c2}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#afecd2}.table-info,.table-info>td,.table-info>th{background-color:#bcf1fb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#83e5f7}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#a4ecfa}.table-warning,.table-warning>td,.table-warning>th{background-color:#fed3ca}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#fdae9c}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#febeb1}.table-danger,.table-danger>td,.table-danger>th{background-color:#fcc7d1}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#fa96aa}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#fbafbd}.table-light,.table-light>td,.table-light>th{background-color:#e8eaed}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#d4d9dd}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#dadde2}.table-dark,.table-dark>td,.table-dark>th{background-color:#c1c2c3}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#8c8e90}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b4b5b6}.table-default,.table-default>td,.table-default>th{background-color:#bec4cd}.table-default tbody+tbody,.table-default td,.table-default th,.table-default thead th{border-color:#8691a2}.table-hover .table-default:hover,.table-hover .table-default:hover>td,.table-hover .table-default:hover>th{background-color:#b0b7c2}.table-white,.table-white>td,.table-white>th{background-color:#fff}.table-white tbody+tbody,.table-white td,.table-white th,.table-white thead th{border-color:#fff}.table-hover .table-white:hover,.table-hover .table-white:hover>td,.table-hover .table-white:hover>th{background-color:#f2f2f2}.table-neutral,.table-neutral>td,.table-neutral>th{background-color:#fff}.table-neutral tbody+tbody,.table-neutral td,.table-neutral th,.table-neutral thead th{border-color:#fff}.table-hover .table-neutral:hover,.table-hover .table-neutral:hover>td,.table-hover .table-neutral:hover>th{background-color:#f2f2f2}.table-darker,.table-darker>td,.table-darker>th{background-color:#b8b8b8}.table-darker tbody+tbody,.table-darker td,.table-darker th,.table-darker thead th{border-color:#7a7a7a}.table-hover .table-darker:hover,.table-hover .table-darker:hover>td,.table-hover .table-darker:hover>th{background-color:#ababab}.table-active,.table-active>td,.table-active>th{background-color:#f6f9fc}.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:#e3ecf6}.table .thead-dark th{color:#f8f9fe;border-color:#1f3a68;background-color:#172b4d}.table .thead-light th{border-color:#e9ecef}.table-dark{color:#f8f9fe;background-color:#172b4d}.table-dark td,.table-dark th,.table-dark thead th{border-color:#1f3a68}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{color:#f8f9fe;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{font-weight:400;line-height:1.5;display:block;width:100%;height:calc(1.5em + 1.25rem + 2px);padding:.625rem .75rem;transition:all .15s cubic-bezier(.68,-.55,.265,1.55);color:#8898aa;border:1px solid #dee2e6;border-radius:.25rem;background-color:#fff;background-clip:padding-box;box-shadow:0 3px 2px rgba(233,236,239,.05)}.form-control::-ms-expand{border:0;background-color:transparent}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #8898aa}.form-control:focus{color:#8898aa;border-color:#004689;outline:0;background-color:#fff;box-shadow:0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)}.form-control::-moz-placeholder{opacity:1;color:#adb5bd}.form-control:-ms-input-placeholder{opacity:1;color:#adb5bd}.form-control::placeholder{opacity:1;color:#adb5bd}.form-control:disabled,.form-control[readonly]{opacity:1;background-color:#e9ecef}select.form-control:focus::-ms-value{color:#8898aa;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{font-size:inherit;line-height:1.5;margin-bottom:0;padding-top:calc(.625rem + 1px);padding-bottom:calc(.625rem + 1px)}.col-form-label-lg{font-size:.875rem;line-height:1.5;padding-top:calc(.875rem + 1px);padding-bottom:calc(.875rem + 1px)}.col-form-label-sm{font-size:.75rem;line-height:1.5;padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px)}.form-control-plaintext{font-size:.875rem;line-height:1.5;display:block;width:100%;margin-bottom:0;padding:.625rem 0;color:#525f7f;border:solid transparent;border-width:1px 0;background-color:transparent}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{font-size:.75rem;line-height:1.5;height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;border-radius:.25rem}.form-control-lg{font-size:.875rem;line-height:1.5;height:calc(1.5em + 1.75rem + 2px);padding:.875rem 1rem;border-radius:.4375rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1.5rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;margin-right:-5px;margin-left:-5px;flex-wrap:wrap}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#8898aa}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;margin-right:.75rem;padding-left:0;align-items:center}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{font-size:80%;display:none;width:100%;margin-top:.25rem;color:#2dce89}.valid-tooltip{font-size:.875rem;line-height:1;position:absolute;z-index:5;top:100%;display:none;max-width:100%;margin-top:.1rem;padding:.5rem;color:#fff;border-radius:.2rem;background-color:rgba(45,206,137,.8)}.custom-select.is-valid,.custom-select.is-valid:focus,.form-control.is-valid,.form-control.is-valid:focus,.was-validated .custom-select:valid,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid,.was-validated .form-control:valid:focus{border-color:#2dce89}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#2dce89}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#2dce89}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#93e7c3;background-color:#93e7c3}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{border-color:#93e7c3;background-color:#54daa1}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 1px #f8f9fe,0 0 0 0 rgba(45,206,137,.25)}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#2dce89}.custom-file-input.is-valid~.custom-file-label:before,.was-validated .custom-file-input:valid~.custom-file-label:before{border-color:inherit}.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{box-shadow:0 0 0 0 rgba(45,206,137,.25)}.invalid-feedback{font-size:80%;display:none;width:100%;margin-top:.25rem;color:#fb6340}.invalid-tooltip{font-size:.875rem;line-height:1;position:absolute;z-index:5;top:100%;display:none;max-width:100%;margin-top:.1rem;padding:.5rem;color:#fff;border-radius:.2rem;background-color:rgba(251,99,64,.8)}.custom-select.is-invalid,.custom-select.is-invalid:focus,.form-control.is-invalid,.form-control.is-invalid:focus,.was-validated .custom-select:invalid,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid,.was-validated .form-control:invalid:focus{border-color:#fb6340}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#fb6340}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#fb6340}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#fec9bd;background-color:#fec9bd}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{border-color:#fec9bd;background-color:#fc8c72}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 1px #f8f9fe,0 0 0 0 rgba(251,99,64,.25)}.custom-file-input{width:60%!important;margin:8px!important;opacity:1!important}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#fb6340}.custom-file-input.is-invalid~.custom-file-label:before,.was-validated .custom-file-input:invalid~.custom-file-label:before{border-color:inherit}.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{box-shadow:0 0 0 0 rgba(251,99,64,.25)}.custom-file-input:focus{outline:0}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;margin-bottom:0;align-items:center}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;width:auto;padding-left:0;align-items:center;justify-content:center}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0;flex-shrink:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{font-weight:600;line-height:1.5;display:inline-block;padding:.625rem 1.25rem;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;text-align:center;vertical-align:middle;color:#525f7f;border:1px solid transparent;border-radius:.25rem;background-color:transparent}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{text-decoration:none;color:#525f7f}.btn.focus,.btn:focus{outline:0;box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.btn.disabled,.btn:disabled{opacity:.65;box-shadow:none}.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active{box-shadow:none}.btn:not(:disabled):not(.disabled).active:focus,.btn:not(:disabled):not(.disabled):active:focus{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-primary,.btn-primary:hover{color:#fff;border-color:#004689;background-color:#004689}.btn-primary.focus,.btn-primary:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(94,114,228,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;border-color:#004689;background-color:#004689}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;border-color:#004689;background-color:#324cdd}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(94,114,228,.5)}.btn-secondary{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-secondary,.btn-secondary:hover{color:#212529;border-color:#f7fafc;background-color:#f7fafc}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(247,250,252,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#212529;border-color:#f7fafc;background-color:#f7fafc}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#212529;border-color:#f7fafc;background-color:#d2e3ee}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(247,250,252,.5)}.btn-success{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-success,.btn-success:hover{color:#fff;border-color:#2dce89;background-color:#2dce89}.btn-success.focus,.btn-success:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(45,206,137,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;border-color:#2dce89;background-color:#2dce89}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;border-color:#2dce89;background-color:#24a46d}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(45,206,137,.5)}.btn-info{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-info,.btn-info:hover{color:#fff;border-color:#11cdef;background-color:#11cdef}.btn-info.focus,.btn-info:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(17,205,239,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;border-color:#11cdef;background-color:#11cdef}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;border-color:#11cdef;background-color:#0da5c0}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(17,205,239,.5)}.btn-warning{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-warning,.btn-warning:hover{color:#fff;border-color:#fb6340;background-color:#fb6340}.btn-warning.focus,.btn-warning:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(251,99,64,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#fff;border-color:#fb6340;background-color:#fb6340}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#fff;border-color:#fb6340;background-color:#fa3a0e}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(251,99,64,.5)}.btn-danger{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-danger,.btn-danger:hover{color:#fff;border-color:#f5365c;background-color:#f5365c}.btn-danger.focus,.btn-danger:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(245,54,92,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;border-color:#f5365c;background-color:#f5365c}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;border-color:#f5365c;background-color:#ec0c38}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(245,54,92,.5)}.btn-light{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-light,.btn-light:hover{color:#fff;border-color:#adb5bd;background-color:#adb5bd}.btn-light.focus,.btn-light:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(173,181,189,.5)}.btn-light.disabled,.btn-light:disabled{color:#fff;border-color:#adb5bd;background-color:#adb5bd}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#fff;border-color:#adb5bd;background-color:#919ca6}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(173,181,189,.5)}.btn-dark{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-dark,.btn-dark:hover{color:#fff;border-color:#212529;background-color:#212529}.btn-dark.focus,.btn-dark:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(33,37,41,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;border-color:#212529;background-color:#212529}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;border-color:#212529;background-color:#0a0c0d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(33,37,41,.5)}.btn-default{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-default,.btn-default:hover{color:#fff;border-color:#172b4d;background-color:#172b4d}.btn-default.focus,.btn-default:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(23,43,77,.5)}.btn-default.disabled,.btn-default:disabled{color:#fff;border-color:#172b4d;background-color:#172b4d}.btn-default:not(:disabled):not(.disabled).active,.btn-default:not(:disabled):not(.disabled):active,.show>.btn-default.dropdown-toggle{color:#fff;border-color:#172b4d;background-color:#0b1526}.btn-default:not(:disabled):not(.disabled).active:focus,.btn-default:not(:disabled):not(.disabled):active:focus,.show>.btn-default.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(23,43,77,.5)}.btn-white{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-white,.btn-white:hover{color:#212529;border-color:#fff;background-color:#fff}.btn-white.focus,.btn-white:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 hsla(0,0%,100%,.5)}.btn-white.disabled,.btn-white:disabled{color:#212529;border-color:#fff;background-color:#fff}.btn-white:not(:disabled):not(.disabled).active,.btn-white:not(:disabled):not(.disabled):active,.show>.btn-white.dropdown-toggle{color:#212529;border-color:#fff;background-color:#e6e6e6}.btn-white:not(:disabled):not(.disabled).active:focus,.btn-white:not(:disabled):not(.disabled):active:focus,.show>.btn-white.dropdown-toggle:focus{box-shadow:none,0 0 0 0 hsla(0,0%,100%,.5)}.btn-neutral{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-neutral,.btn-neutral:hover{color:#212529;border-color:#fff;background-color:#fff}.btn-neutral.focus,.btn-neutral:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 hsla(0,0%,100%,.5)}.btn-neutral.disabled,.btn-neutral:disabled{color:#212529;border-color:#fff;background-color:#fff}.btn-neutral:not(:disabled):not(.disabled).active,.btn-neutral:not(:disabled):not(.disabled):active,.show>.btn-neutral.dropdown-toggle{color:#212529;border-color:#fff;background-color:#e6e6e6}.btn-neutral:not(:disabled):not(.disabled).active:focus,.btn-neutral:not(:disabled):not(.disabled):active:focus,.show>.btn-neutral.dropdown-toggle:focus{box-shadow:none,0 0 0 0 hsla(0,0%,100%,.5)}.btn-darker{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-darker,.btn-darker:hover{color:#fff;border-color:#000;background-color:#000}.btn-darker.focus,.btn-darker:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(0,0,0,.5)}.btn-darker.disabled,.btn-darker:disabled,.btn-darker:not(:disabled):not(.disabled).active,.btn-darker:not(:disabled):not(.disabled):active,.show>.btn-darker.dropdown-toggle{color:#fff;border-color:#000;background-color:#000}.btn-darker:not(:disabled):not(.disabled).active:focus,.btn-darker:not(:disabled):not(.disabled):active:focus,.show>.btn-darker.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(0,0,0,.5)}.btn-outline-primary{color:#004689;border-color:#004689;background-color:transparent;background-image:none}.btn-outline-primary:hover{color:#fff;border-color:#004689;background-color:#004689}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 0 rgba(94,114,228,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#004689;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;border-color:#004689;background-color:#004689}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(94,114,228,.5)}.btn-outline-secondary{color:#f7fafc;border-color:#f7fafc;background-color:transparent;background-image:none}.btn-outline-secondary:hover{color:#212529;border-color:#f7fafc;background-color:#f7fafc}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 0 rgba(247,250,252,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#f7fafc;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#212529;border-color:#f7fafc;background-color:#f7fafc}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(247,250,252,.5)}.btn-outline-success{color:#2dce89;border-color:#2dce89;background-color:transparent;background-image:none}.btn-outline-success:hover{color:#fff;border-color:#2dce89;background-color:#2dce89}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 0 rgba(45,206,137,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#2dce89;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;border-color:#2dce89;background-color:#2dce89}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(45,206,137,.5)}.btn-outline-info{color:#11cdef;border-color:#11cdef;background-color:transparent;background-image:none}.btn-outline-info:hover{color:#fff;border-color:#11cdef;background-color:#11cdef}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 0 rgba(17,205,239,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#11cdef;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;border-color:#11cdef;background-color:#11cdef}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(17,205,239,.5)}.btn-outline-warning{color:#fb6340;border-color:#fb6340;background-color:transparent;background-image:none}.btn-outline-warning:hover{color:#fff;border-color:#fb6340;background-color:#fb6340}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 0 rgba(251,99,64,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#fb6340;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;border-color:#fb6340;background-color:#fb6340}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(251,99,64,.5)}.btn-outline-danger{color:#f5365c;border-color:#f5365c;background-color:transparent;background-image:none}.btn-outline-danger:hover{color:#fff;border-color:#f5365c;background-color:#f5365c}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 0 rgba(245,54,92,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#f5365c;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;border-color:#f5365c;background-color:#f5365c}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(245,54,92,.5)}.btn-outline-light{color:#adb5bd;border-color:#adb5bd;background-color:transparent;background-image:none}.btn-outline-light:hover{color:#fff;border-color:#adb5bd;background-color:#adb5bd}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 0 rgba(173,181,189,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#adb5bd;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#fff;border-color:#adb5bd;background-color:#adb5bd}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(173,181,189,.5)}.btn-outline-dark{color:#212529;border-color:#212529;background-color:transparent;background-image:none}.btn-outline-dark:hover{color:#fff;border-color:#212529;background-color:#212529}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 0 rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#212529;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;border-color:#212529;background-color:#212529}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(33,37,41,.5)}.btn-outline-default{color:#172b4d;border-color:#172b4d;background-color:transparent;background-image:none}.btn-outline-default:hover{color:#fff;border-color:#172b4d;background-color:#172b4d}.btn-outline-default.focus,.btn-outline-default:focus{box-shadow:0 0 0 0 rgba(23,43,77,.5)}.btn-outline-default.disabled,.btn-outline-default:disabled{color:#172b4d;background-color:transparent}.btn-outline-default:not(:disabled):not(.disabled).active,.btn-outline-default:not(:disabled):not(.disabled):active,.show>.btn-outline-default.dropdown-toggle{color:#fff;border-color:#172b4d;background-color:#172b4d}.btn-outline-default:not(:disabled):not(.disabled).active:focus,.btn-outline-default:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-default.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(23,43,77,.5)}.btn-outline-white{color:#fff;border-color:#fff;background-color:transparent;background-image:none}.btn-outline-white:hover{color:#212529;border-color:#fff;background-color:#fff}.btn-outline-white.focus,.btn-outline-white:focus{box-shadow:0 0 0 0 hsla(0,0%,100%,.5)}.btn-outline-white.disabled,.btn-outline-white:disabled{color:#fff;background-color:transparent}.btn-outline-white:not(:disabled):not(.disabled).active,.btn-outline-white:not(:disabled):not(.disabled):active,.show>.btn-outline-white.dropdown-toggle{color:#212529;border-color:#fff;background-color:#fff}.btn-outline-white:not(:disabled):not(.disabled).active:focus,.btn-outline-white:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-white.dropdown-toggle:focus{box-shadow:0 0 0 0 hsla(0,0%,100%,.5)}.btn-outline-neutral{color:#fff;border-color:#fff;background-color:transparent;background-image:none}.btn-outline-neutral:hover{color:#212529;border-color:#fff;background-color:#fff}.btn-outline-neutral.focus,.btn-outline-neutral:focus{box-shadow:0 0 0 0 hsla(0,0%,100%,.5)}.btn-outline-neutral.disabled,.btn-outline-neutral:disabled{color:#fff;background-color:transparent}.btn-outline-neutral:not(:disabled):not(.disabled).active,.btn-outline-neutral:not(:disabled):not(.disabled):active,.show>.btn-outline-neutral.dropdown-toggle{color:#212529;border-color:#fff;background-color:#fff}.btn-outline-neutral:not(:disabled):not(.disabled).active:focus,.btn-outline-neutral:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-neutral.dropdown-toggle:focus{box-shadow:0 0 0 0 hsla(0,0%,100%,.5)}.btn-outline-darker{color:#000;border-color:#000;background-color:transparent;background-image:none}.btn-outline-darker:hover{color:#fff;border-color:#000;background-color:#000}.btn-outline-darker.focus,.btn-outline-darker:focus{box-shadow:0 0 0 0 rgba(0,0,0,.5)}.btn-outline-darker.disabled,.btn-outline-darker:disabled{color:#000;background-color:transparent}.btn-outline-darker:not(:disabled):not(.disabled).active,.btn-outline-darker:not(:disabled):not(.disabled):active,.show>.btn-outline-darker.dropdown-toggle{color:#fff;border-color:#000;background-color:#000}.btn-outline-darker:not(:disabled):not(.disabled).active:focus,.btn-outline-darker:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-darker.dropdown-toggle:focus{box-shadow:0 0 0 0 rgba(0,0,0,.5)}.btn-link{font-weight:400;text-decoration:none;color:#004689}.btn-link:hover{text-decoration:none;color:#233dd2}.btn-link.focus,.btn-link:focus{text-decoration:none;box-shadow:none}.btn-link.disabled,.btn-link:disabled{pointer-events:none;color:#8898aa}.btn-group-lg>.btn,.btn-lg{line-height:1.5;padding:.875rem 1rem;border-radius:.4375rem}.btn-group-sm>.btn,.btn-sm{line-height:1.5;padding:.25rem .5rem;border-radius:.25rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;overflow:hidden;height:0;transition:height .3s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;content:\"\";vertical-align:.255em;border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{font-size:1rem;position:absolute;z-index:1000;top:100%;left:0;display:none;float:left;min-width:10rem;margin:.125rem 0 0;padding:.5rem 0;list-style:none;text-align:left;color:#525f7f;border:0 solid rgba(0,0,0,.15);border-radius:.4375rem;background-color:#fff;background-clip:padding-box;box-shadow:0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1)}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;content:\"\";vertical-align:.255em;border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;content:\"\";vertical-align:.255em;border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;content:\"\";vertical-align:.255em;display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;content:\"\";vertical-align:.255em;border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{overflow:hidden;height:0;margin:.5rem 0;border-top:1px solid #e9ecef}.dropdown-item{font-weight:400;display:block;clear:both;width:100%;padding:.5rem 1rem;text-align:inherit;white-space:nowrap;color:#212529;border:0;background-color:transparent}.dropdown-item:focus,.dropdown-item:hover{text-decoration:none;color:#16181b;background-color:#f6f9fc}.dropdown-item.active,.dropdown-item:active{text-decoration:none;color:#16181b;background-color:transparent}.dropdown-item.disabled,.dropdown-item:disabled{pointer-events:none;color:#8898aa;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{font-size:.875rem;display:block;margin-bottom:0;padding:.5rem 1rem;white-space:nowrap;color:#8898aa}.dropdown-item-text{display:block;padding:.5rem 1rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.9375rem;padding-left:.9375rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group.show .dropdown-toggle,.btn-group.show .dropdown-toggle.btn-link{box-shadow:none}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;width:100%;flex-wrap:wrap;align-items:stretch}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;min-width:0;margin-bottom:0;flex:1 1}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{font-size:.875rem;font-weight:400;line-height:1.5;display:flex;margin-bottom:0;padding:.625rem .75rem;text-align:center;white-space:nowrap;color:#adb5bd;border:1px solid #dee2e6;border-radius:.25rem;background-color:#fff;align-items:center}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1.75rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{font-size:.875rem;line-height:1.5;padding:.875rem 1rem;border-radius:.4375rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{font-size:.75rem;line-height:1.5;padding:.25rem .5rem;border-radius:.25rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:2.75rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;left:0;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#004689;background-color:#004689;box-shadow:0 3px 2px rgba(233,236,239,.05)}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 3px 2px rgba(233,236,239,.05),0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#004689}.custom-control-input:not(:disabled):active~.custom-control-label:before{color:#fff;border-color:#004689;background-color:#004689;box-shadow:0 3px 2px rgba(233,236,239,.05)}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#8898aa}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{position:relative;vertical-align:top}.custom-control-label:before{pointer-events:none;background-color:#fff;box-shadow:0 3px 2px rgba(233,236,239,.05)}.custom-control-label:after,.custom-control-label:before{position:absolute;left:-2.75rem;display:block;width:1rem;height:1rem;content:\"\"}.custom-control-label:after{background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{border-color:#004689;background-color:#004689;box-shadow:none}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(94,114,228,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(94,114,228,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(94,114,228,.5)}.custom-switch{padding-left:3.5rem}.custom-switch .custom-control-label:before{left:-3.5rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label:after{top:calc(.25rem + 2px);left:calc(-3.5rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-radius:.5rem;background-color:#dee2e6}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{transform:translateX(.75rem);background-color:#fff}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(94,114,228,.5)}.custom-select{font-size:.875rem;font-weight:400;line-height:1.5;display:inline-block;width:100%;height:calc(1.5em + 1.25rem + 2px);padding:.625rem 1.75rem .625rem .75rem;vertical-align:middle;color:#8898aa;border:1px solid #dee2e6;border-radius:.375rem;box-shadow:inset 0 1px 2px rgba(0,0,0,.075);-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#004689;outline:0;box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 0 0 #004689}.custom-select:focus::-ms-value{color:#8898aa;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#8898aa;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #8898aa}.custom-select-sm{font-size:.75rem;height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem}.custom-select-lg{font-size:.875rem;height:calc(1.5em + 1.75rem + 2px);padding-top:.875rem;padding-bottom:.875rem;padding-left:1rem}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(1.5em + 1.25rem + 2px)}.custom-file-input{z-index:2;margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#004689;box-shadow:0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{font-weight:400;z-index:1;left:0;height:calc(1.5em + 1.25rem + 2px);border:1px solid #dee2e6;border-radius:.25rem;box-shadow:0 3px 2px rgba(233,236,239,.05)}.custom-file-label,.custom-file-label:after{line-height:1.5;position:absolute;top:0;right:0;padding:.625rem .75rem;color:#8898aa;background-color:#fff}.custom-file-label:after{z-index:3;bottom:0;display:block;height:calc(1.5em + 1.25rem);content:\"Browse\";border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #f8f9fe,0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #f8f9fe,0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #f8f9fe,0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border:0;border-radius:1rem;background-color:#004689;box-shadow:0 .1rem .25rem rgba(0,0,0,.1);-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#f7f8fe}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;cursor:pointer;color:transparent;border-color:transparent;border-radius:1rem;background-color:#dee2e6;box-shadow:inset 0 .25rem .25rem rgba(0,0,0,.1)}.custom-range::-moz-range-thumb{width:1rem;height:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border:0;border-radius:1rem;background-color:#004689;box-shadow:0 .1rem .25rem rgba(0,0,0,.1);-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#f7f8fe}.custom-range::-moz-range-track{width:100%;height:.5rem;cursor:pointer;color:transparent;border-color:transparent;border-radius:1rem;background-color:#dee2e6;box-shadow:inset 0 .25rem .25rem rgba(0,0,0,.1)}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:0;margin-left:0;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border:0;border-radius:1rem;background-color:#004689;box-shadow:0 .1rem .25rem rgba(0,0,0,.1);appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#f7f8fe}.custom-range::-ms-track{width:100%;height:.5rem;cursor:pointer;color:transparent;border-width:.5rem;border-color:transparent;background-color:transparent;box-shadow:inset 0 .25rem .25rem rgba(0,0,0,.1)}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{border-radius:1rem;background-color:#dee2e6}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;margin-bottom:0;padding-left:0;list-style:none;flex-wrap:wrap}.nav-link{display:block;padding:.25rem .75rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{cursor:default;pointer-events:none;color:#8898aa}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.375rem;border-top-right-radius:.375rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#8898aa;border-color:transparent;background-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#525f7f;border-color:#dee2e6 #dee2e6 #f8f9fe;background-color:#f8f9fe}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.375rem}.nav-fill .nav-item{text-align:center;flex:1 1 auto}.nav-justified .nav-item{text-align:center;flex-basis:0;flex-grow:1}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:1rem}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{font-size:1.25rem;line-height:inherit;display:inline-block;margin-right:1rem;padding-top:.0625rem;padding-bottom:.0625rem;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;margin-bottom:0;padding-left:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.25rem;padding-bottom:.25rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{font-size:1.25rem;line-height:1;padding:.25rem .75rem;border:1px solid transparent;border-radius:.25rem;background-color:transparent}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;content:\"\";vertical-align:middle;background:no-repeat 50%;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:1rem;padding-left:1rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.6)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.6);border-color:transparent}.navbar-light .navbar-text{color:rgba(0,0,0,.6)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:hsla(0,0%,100%,.65)}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.95)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.65)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:hsla(0,0%,100%,.65)}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.95);border-color:transparent}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.95)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:hsla(0,0%,100%,.65)}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;background-color:#fff;background-clip:border-box}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem}.card-body{min-height:1px;padding:1.5rem;flex:1 1 auto}.card-title{margin-bottom:1.25rem}.card-subtitle{margin-top:-.625rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.5rem}.card-header{margin-bottom:0;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(0,0,0,.05);background-color:#fff}.card-header:first-child{border-radius:calc(.375rem - 1px) calc(.375rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:1.25rem 1.5rem;border-top:1px solid rgba(0,0,0,.05);background-color:#fff}.card-footer:last-child{border-radius:0 0 calc(.375rem - 1px) calc(.375rem - 1px)}.card-header-tabs{margin-bottom:-1.25rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.75rem;margin-left:-.75rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img,.card-img-bottom,.card-img-top{width:100%;flex-shrink:0}.card-img,.card-img-top{border-top-left-radius:calc(.375rem - 1px);border-top-right-radius:calc(.375rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.375rem - 1px);border-bottom-left-radius:calc(.375rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;margin-right:-15px;margin-left:-15px;flex-flow:row wrap}.card-deck .card{margin-right:15px;margin-bottom:0;margin-left:15px;flex:1 0}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{margin-bottom:0;flex:1 0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:1.25rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;grid-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{margin-bottom:-1px;border-radius:0}.breadcrumb{display:flex;margin-bottom:1rem;padding:.5rem 1rem;list-style:none;border-radius:.375rem;background-color:#f6f9fc;flex-wrap:wrap}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{display:inline-block;padding-right:.5rem;content:\"-\";color:#8898aa}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#8898aa}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.375rem}.page-link{line-height:1.25;position:relative;display:block;margin-left:-1px;padding:.5rem .75rem;color:#8898aa;border:1px solid #dee2e6;background-color:#fff}.page-link:hover{z-index:2;text-decoration:none;color:#8898aa;border-color:#dee2e6;background-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:none}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.page-item:last-child .page-link{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.page-item.active .page-link{z-index:3;color:#fff;border-color:#004689;background-color:#004689}.page-item.disabled .page-link{cursor:auto;pointer-events:none;color:#8898aa;border-color:#dee2e6;background-color:#fff}.pagination-lg .page-link{font-size:1.25rem;line-height:1.5;padding:.75rem 1.5rem}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.4375rem;border-bottom-left-radius:.4375rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.4375rem;border-bottom-right-radius:.4375rem}.pagination-sm .page-link{font-size:.875rem;line-height:1.5;padding:.25rem .5rem}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.badge{font-size:66%;font-weight:600;line-height:1;display:inline-block;padding:.35rem .375rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;text-align:center;vertical-align:baseline;white-space:nowrap;border-radius:.375rem}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.875em;padding-left:.875em;border-radius:10rem}.badge-primary{color:#2643e9;background-color:#eaecfb}.badge-primary[href]:focus,.badge-primary[href]:hover{text-decoration:none;color:#fff;background-color:#2a44db}.badge-secondary{color:#cfe3f1;background-color:#fff}.badge-secondary[href]:focus,.badge-secondary[href]:hover{text-decoration:none;color:#212529;background-color:#cadeeb}.badge-success{color:#1aae6f;background-color:#b0eed3}.badge-success[href]:focus,.badge-success[href]:hover{text-decoration:none;color:#fff;background-color:#229c68}.badge-info{color:#03acca;background-color:#aaedf9}.badge-info[href]:focus,.badge-info[href]:hover{text-decoration:none;color:#fff;background-color:#0c9cb7}.badge-warning{color:#ff3709;background-color:#fee6e0}.badge-warning[href]:focus,.badge-warning[href]:hover{text-decoration:none;color:#fff;background-color:#f93305}.badge-danger{color:#f80031;background-color:#fdd1da}.badge-danger[href]:focus,.badge-danger[href]:hover{text-decoration:none;color:#fff;background-color:#e30b36}.badge-light{color:#879cb0;background-color:#fff}.badge-light[href]:focus,.badge-light[href]:hover{text-decoration:none;color:#fff;background-color:#8b96a2}.badge-dark{color:#090c0e;background-color:#6a7783}.badge-dark[href]:focus,.badge-dark[href]:hover{text-decoration:none;color:#fff;background-color:#060607}.badge-default{color:#091428;background-color:#4172c6}.badge-default[href]:focus,.badge-default[href]:hover{text-decoration:none;color:#fff;background-color:#09111e}.badge-white{color:#e8e3e3;background-color:#fff}.badge-white[href]:focus,.badge-white[href]:hover{text-decoration:none;color:#212529;background-color:#e0e0e0}.badge-neutral{color:#e8e3e3;background-color:#fff}.badge-neutral[href]:focus,.badge-neutral[href]:hover{text-decoration:none;color:#212529;background-color:#e0e0e0}.badge-darker{color:#000;background-color:#525252}.badge-darker[href]:focus,.badge-darker[href]:hover{text-decoration:none;color:#fff;background-color:#000}.jumbotron{margin-bottom:2rem;padding:2rem 1rem;border-radius:.4375rem;background-color:#e9ecef}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;margin-bottom:1rem;padding:1rem 1.5rem;border:1px solid transparent;border-radius:.375rem}.alert-heading{color:inherit}.alert-link{font-weight:600}.alert-dismissible{padding-right:4.5rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:1rem 1.5rem;color:inherit}.alert-primary{color:#fff;border-color:#7889e8;background-color:#7889e8}.alert-primary a{font-weight:600;color:#1d32aa}.alert-primary a:hover{color:#fff}.alert-primary hr{border-top-color:#6276e4}.alert-primary .alert-link{color:#324cdd}.alert-secondary{color:#212529;border-color:#f8fbfc;background-color:#f8fbfc}.alert-secondary a{font-weight:600;color:#8dbece}.alert-secondary a:hover{color:#212529}.alert-secondary hr{border-top-color:#e6f1f4}.alert-secondary .alert-link{color:#d2e3ee}.alert-success{color:#fff;border-color:#4fd69c;background-color:#4fd69c}.alert-success a{font-weight:600;color:#1a724c}.alert-success a:hover{color:#fff}.alert-success hr{border-top-color:#3ad190}.alert-success .alert-link{color:#24a46d}.alert-info{color:#fff;border-color:#37d5f2;background-color:#37d5f2}.alert-info a{font-weight:600;color:#097487}.alert-info a:hover{color:#fff}.alert-info hr{border-top-color:#1fd0f0}.alert-info .alert-link{color:#0da5c0}.alert-warning{color:#fff;border-color:#fc7c5f;background-color:#fc7c5f}.alert-warning a{font-weight:600;color:#be2604}.alert-warning a:hover{color:#fff}.alert-warning hr{border-top-color:#fc6846}.alert-warning .alert-link{color:#fa3a0e}.alert-danger{color:#fff;border-color:#f75676;background-color:#f75676}.alert-danger a{font-weight:600;color:#ac0829}.alert-danger a:hover{color:#fff}.alert-danger hr{border-top-color:#f63e62}.alert-danger .alert-link{color:#ec0c38}.alert-light{color:#fff;border-color:#bac1c8;background-color:#bac1c8}.alert-light a{font-weight:600;color:#677582}.alert-light a:hover{color:#fff}.alert-light hr{border-top-color:#acb4bd}.alert-light .alert-link{color:#919ca6}.alert-dark{color:#fff;border-color:#45484b;background-color:#45484b}.alert-dark a{font-weight:600;color:#000}.alert-dark a:hover{color:#fff}.alert-dark hr{border-top-color:#393b3e}.alert-dark .alert-link{color:#0a0c0d}.alert-default{color:#fff;border-color:#3c4d69;background-color:#3c4d69}.alert-default a{font-weight:600;color:#040608}.alert-default a:hover{color:#fff}.alert-default hr{border-top-color:#334159}.alert-default .alert-link{color:#0b1526}.alert-white{color:#212529;border-color:#fff;background-color:#fff}.alert-white a{font-weight:600;color:#b3b3b3}.alert-white a:hover{color:#212529}.alert-white hr{border-top-color:#f2f2f2}.alert-white .alert-link{color:#e6e6e6}.alert-neutral{color:#212529;border-color:#fff;background-color:#fff}.alert-neutral a{font-weight:600;color:#b3b3b3}.alert-neutral a:hover{color:#212529}.alert-neutral hr{border-top-color:#f2f2f2}.alert-neutral .alert-link{color:#e6e6e6}.alert-darker{color:#fff;border-color:#292929;background-color:#292929}.alert-darker a{font-weight:600;color:#000}.alert-darker a:hover{color:#fff}.alert-darker hr{border-top-color:#1c1c1c}.alert-darker .alert-link{color:#000}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{font-size:.75rem;display:flex;height:1rem;border-radius:.375rem;box-shadow:inset 0 .1rem .1rem rgba(0,0,0,.1)}.progress-bar{display:flex;overflow:hidden;flex-direction:column;transition:width .6s ease;text-align:center;white-space:nowrap;color:#fff;background-color:#004689;justify-content:center}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1 1}.list-group{display:flex;flex-direction:column;margin-bottom:0;padding-left:0}.list-group-item-action{width:100%;text-align:inherit;color:#525f7f}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;text-decoration:none;color:#525f7f;background-color:#f6f9fc}.list-group-item-action:active{color:#525f7f;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:1rem;border:1px solid #e9ecef;background-color:#fff}.list-group-item:first-child{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.list-group-item:last-child{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem}.list-group-item.disabled,.list-group-item:disabled{pointer-events:none;color:#8898aa;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;border-color:#004689;background-color:#004689}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal .list-group-item:first-child{border-top-right-radius:0;border-bottom-left-radius:.375rem}.list-group-horizontal .list-group-item:last-child{border-top-right-radius:.375rem;border-bottom-left-radius:0}.list-group-horizontal .list-group-item.active{margin-top:0}.list-group-horizontal .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm .list-group-item:first-child{border-top-right-radius:0;border-bottom-left-radius:.375rem}.list-group-horizontal-sm .list-group-item:last-child{border-top-right-radius:.375rem;border-bottom-left-radius:0}.list-group-horizontal-sm .list-group-item.active{margin-top:0}.list-group-horizontal-sm .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md .list-group-item:first-child{border-top-right-radius:0;border-bottom-left-radius:.375rem}.list-group-horizontal-md .list-group-item:last-child{border-top-right-radius:.375rem;border-bottom-left-radius:0}.list-group-horizontal-md .list-group-item.active{margin-top:0}.list-group-horizontal-md .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg .list-group-item:first-child{border-top-right-radius:0;border-bottom-left-radius:.375rem}.list-group-horizontal-lg .list-group-item:last-child{border-top-right-radius:.375rem;border-bottom-left-radius:0}.list-group-horizontal-lg .list-group-item.active{margin-top:0}.list-group-horizontal-lg .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl .list-group-item:first-child{border-top-right-radius:0;border-bottom-left-radius:.375rem}.list-group-horizontal-xl .list-group-item:last-child{border-top-right-radius:.375rem;border-bottom-left-radius:0}.list-group-horizontal-xl .list-group-item.active{margin-top:0}.list-group-horizontal-xl .list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl .list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush .list-group-item{border-right-width:0;border-left-width:0;border-radius:0}.list-group-flush .list-group-item:first-child{border-top-width:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#313b77;background-color:#d2d8f7}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#313b77;background-color:#bcc5f3}.list-group-item-primary.list-group-item-action.active{color:#fff;border-color:#313b77;background-color:#313b77}.list-group-item-secondary{color:#808283;background-color:#fdfefe}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#808283;background-color:#ecf6f6}.list-group-item-secondary.list-group-item-action.active{color:#fff;border-color:#808283;background-color:#808283}.list-group-item-success{color:#176b47;background-color:#c4f1de}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#176b47;background-color:#afecd2}.list-group-item-success.list-group-item-action.active{color:#fff;border-color:#176b47;background-color:#176b47}.list-group-item-info{color:#096b7c;background-color:#bcf1fb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#096b7c;background-color:#a4ecfa}.list-group-item-info.list-group-item-action.active{color:#fff;border-color:#096b7c;background-color:#096b7c}.list-group-item-warning{color:#833321;background-color:#fed3ca}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#833321;background-color:#febeb1}.list-group-item-warning.list-group-item-action.active{color:#fff;border-color:#833321;background-color:#833321}.list-group-item-danger{color:#7f1c30;background-color:#fcc7d1}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#7f1c30;background-color:#fbafbd}.list-group-item-danger.list-group-item-action.active{color:#fff;border-color:#7f1c30;background-color:#7f1c30}.list-group-item-light{color:#5a5e62;background-color:#e8eaed}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#5a5e62;background-color:#dadde2}.list-group-item-light.list-group-item-action.active{color:#fff;border-color:#5a5e62;background-color:#5a5e62}.list-group-item-dark{color:#111315;background-color:#c1c2c3}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#111315;background-color:#b4b5b6}.list-group-item-dark.list-group-item-action.active{color:#fff;border-color:#111315;background-color:#111315}.list-group-item-default{color:#0c1628;background-color:#bec4cd}.list-group-item-default.list-group-item-action:focus,.list-group-item-default.list-group-item-action:hover{color:#0c1628;background-color:#b0b7c2}.list-group-item-default.list-group-item-action.active{color:#fff;border-color:#0c1628;background-color:#0c1628}.list-group-item-white{color:#858585;background-color:#fff}.list-group-item-white.list-group-item-action:focus,.list-group-item-white.list-group-item-action:hover{color:#858585;background-color:#f2f2f2}.list-group-item-white.list-group-item-action.active{color:#fff;border-color:#858585;background-color:#858585}.list-group-item-neutral{color:#858585;background-color:#fff}.list-group-item-neutral.list-group-item-action:focus,.list-group-item-neutral.list-group-item-action:hover{color:#858585;background-color:#f2f2f2}.list-group-item-neutral.list-group-item-action.active{color:#fff;border-color:#858585;background-color:#858585}.list-group-item-darker{color:#000;background-color:#b8b8b8}.list-group-item-darker.list-group-item-action:focus,.list-group-item-darker.list-group-item-action:hover{color:#000;background-color:#ababab}.list-group-item-darker.list-group-item-action.active{color:#fff;border-color:#000;background-color:#000}.close{font-size:1.5rem;font-weight:600;line-height:1;float:right;opacity:.5;color:rgba(0,0,0,.6);text-shadow:none}@media (max-width:1200px){.close{font-size:calc(1.275rem + .3vw)}}.close:hover{text-decoration:none;color:rgba(0,0,0,.6)}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;border:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;z-index:1050;top:0;left:0;display:none;overflow:hidden;width:100%;height:100%;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{overflow:hidden;max-height:calc(100vh - 1rem)}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;min-height:calc(100% - 1rem);align-items:center}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;height:100%;justify-content:center}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;border:0 solid rgba(0,0,0,.2);border-radius:.4375rem;outline:0;background-color:#fff;background-clip:padding-box;box-shadow:0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.17)}.modal-backdrop{position:fixed;z-index:1040;top:0;left:0;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.16}.modal-header{display:flex;padding:1.25rem;border-bottom:0 solid #e9ecef;border-top-left-radius:.4375rem;border-top-right-radius:.4375rem;align-items:flex-start;justify-content:space-between}.modal-header .close{margin:-1rem -1rem -1rem auto;padding:1.25rem}.modal-title{line-height:1.1;margin-bottom:0}.modal-body{position:relative;padding:1.5rem;flex:1 1 auto}.modal-footer{display:flex;padding:1.25rem;border-top:0 solid #e9ecef;border-bottom-right-radius:.4375rem;border-bottom-left-radius:.4375rem;flex-wrap:wrap;align-items:center;justify-content:flex-end}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;overflow:scroll;width:50px;height:50px}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem)}.modal-content{box-shadow:0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.17)}.modal-sm{max-width:380px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}[dir=ltr] .tooltip{text-align:left}[dir=rtl] .tooltip{text-align:right}.tooltip{font-family:Open Sans,sans-serif;font-size:.875rem;font-weight:400;font-style:normal;line-height:1.5;position:absolute;z-index:1070;display:block;margin:0;text-align:left;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:break-word;word-break:normal;opacity:0;text-shadow:none;line-break:auto}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-style:solid;border-color:transparent}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;text-align:center;color:#fff;border-radius:.375rem;background-color:#000}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{font-family:Open Sans,sans-serif;font-size:.875rem;font-weight:400;font-style:normal;line-height:1.5;z-index:1060;top:0;left:0;max-width:276px;text-align:left;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:break-word;word-break:normal;border:1px solid rgba(0,0,0,.05);border-radius:.4375rem;background-color:#fff;background-clip:padding-box;box-shadow:0 .5rem 2rem 0 rgba(0,0,0,.2);text-shadow:none;line-break:auto}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .4375rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-style:solid;border-color:transparent}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:transparent}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.4375rem 0}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:transparent}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:transparent}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #fff}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.4375rem 0}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:transparent}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{font-size:1rem;margin-bottom:0;padding:.5rem .95rem;color:#32325d;border-bottom:1px solid #f2f2f2;border-top-left-radius:calc(.4375rem - 1px);border-top-right-radius:calc(.4375rem - 1px);background-color:#fff}.popover-header:empty{display:none}.popover-body{padding:.5rem .95rem;color:#525f7f}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;overflow:hidden;width:100%}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{transition-property:opacity;transform:none;opacity:0}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;transition:opacity 0s .6s;opacity:0}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;z-index:1;top:0;bottom:0;display:flex;width:15%;transition:opacity .15s ease;text-align:center;opacity:.5;color:#fff;align-items:center;justify-content:center}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{text-decoration:none;opacity:.9;color:#fff;outline:0}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-indicators{position:absolute;z-index:15;right:0;bottom:0;left:0;display:flex;margin-right:15%;margin-left:15%;padding-left:0;list-style:none;justify-content:center}.carousel-indicators li{box-sizing:content-box;width:30px;height:3px;margin-right:3px;margin-left:3px;cursor:pointer;transition:opacity .6s ease;text-indent:-999px;opacity:.5;border-top:10px solid transparent;border-bottom:10px solid transparent;background-color:#fff;background-clip:padding-box;flex:0 1 auto}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;z-index:10;right:15%;bottom:20px;left:15%;padding-top:20px;padding-bottom:20px;text-align:center;color:#fff}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#004689!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#324cdd!important}.bg-secondary{background-color:#f7fafc!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#d2e3ee!important}.bg-success{background-color:#2dce89!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#24a46d!important}.bg-info{background-color:#11cdef!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#0da5c0!important}.bg-warning{background-color:#fb6340!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#fa3a0e!important}.bg-danger{background-color:#f5365c!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#ec0c38!important}.bg-light{background-color:#adb5bd!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#919ca6!important}.bg-dark{background-color:#212529!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#0a0c0d!important}.bg-default{background-color:#172b4d!important}a.bg-default:focus,a.bg-default:hover,button.bg-default:focus,button.bg-default:hover{background-color:#0b1526!important}.bg-neutral{background-color:#fff!important}a.bg-neutral:focus,a.bg-neutral:hover,button.bg-neutral:focus,button.bg-neutral:hover{background-color:#e6e6e6!important}.bg-darker,a.bg-darker:focus,a.bg-darker:hover,button.bg-darker:focus,button.bg-darker:hover{background-color:#000!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #e9ecef!important}.border-top{border-top:1px solid #e9ecef!important}.border-right{border-right:1px solid #e9ecef!important}.border-bottom{border-bottom:1px solid #e9ecef!important}.border-left{border-left:1px solid #e9ecef!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#004689!important}.border-secondary{border-color:#f7fafc!important}.border-success{border-color:#2dce89!important}.border-info{border-color:#11cdef!important}.border-warning{border-color:#fb6340!important}.border-danger{border-color:#f5365c!important}.border-light{border-color:#adb5bd!important}.border-dark{border-color:#212529!important}.border-default{border-color:#172b4d!important}.border-neutral{border-color:#fff!important}.border-darker{border-color:#000!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.25rem!important}.rounded{border-radius:.375rem!important}.rounded-top{border-top-left-radius:.375rem!important}.rounded-right,.rounded-top{border-top-right-radius:.375rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.375rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.375rem!important}.rounded-left{border-top-left-radius:.375rem!important}.rounded-lg{border-radius:.4375rem!important}.avatar.rounded-circle img,.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;overflow:hidden;width:100%;padding:0}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.85714%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.overflow-auto{overflow:auto!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;z-index:1030;right:0;left:0}.fixed-bottom{bottom:0}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;z-index:1020;top:0}}.sr-only{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;overflow:visible;clip:auto;width:auto;height:auto;white-space:normal}.shadow-sm{box-shadow:0 0 .5rem rgba(136,152,170,.075)!important}.shadow{box-shadow:0 0 2rem 0 rgba(136,152,170,.15)!important}.shadow-lg{box-shadow:0 0 3rem rgba(136,152,170,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.stretched-link:after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;content:\"\";pointer-events:auto;background-color:transparent}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.m--9{margin:-10rem!important}.mt--9,.my--9{margin-top:-10rem!important}.mr--9,.mx--9{margin-right:-10rem!important}.mb--9,.my--9{margin-bottom:-10rem!important}.ml--9,.mx--9{margin-left:-10rem!important}.m--8{margin:-8rem!important}.mt--8,.my--8{margin-top:-8rem!important}.mr--8,.mx--8{margin-right:-8rem!important}.mb--8,.my--8{margin-bottom:-8rem!important}.ml--8,.mx--8{margin-left:-8rem!important}.m--7{margin:-6rem!important}.mt--7,.my--7{margin-top:-6rem!important}.mr--7,.mx--7{margin-right:-6rem!important}.mb--7,.my--7{margin-bottom:-6rem!important}.ml--7,.mx--7{margin-left:-6rem!important}.m--6{margin:-4.5rem!important}.mt--6,.my--6{margin-top:-4.5rem!important}.mr--6,.mx--6{margin-right:-4.5rem!important}.mb--6,.my--6{margin-bottom:-4.5rem!important}.ml--6,.mx--6{margin-left:-4.5rem!important}.m--5{margin:-3rem!important}.mt--5,.my--5{margin-top:-3rem!important}.mr--5,.mx--5{margin-right:-3rem!important}.mb--5,.my--5{margin-bottom:-3rem!important}.ml--5,.mx--5{margin-left:-3rem!important}.m--4{margin:-1.5rem!important}.mt--4,.my--4{margin-top:-1.5rem!important}.mr--4,.mx--4{margin-right:-1.5rem!important}.mb--4,.my--4{margin-bottom:-1.5rem!important}.ml--4,.mx--4{margin-left:-1.5rem!important}.m--3{margin:-1rem!important}.mt--3,.my--3{margin-top:-1rem!important}.mr--3,.mx--3{margin-right:-1rem!important}.mb--3,.my--3{margin-bottom:-1rem!important}.ml--3,.mx--3{margin-left:-1rem!important}.m--2{margin:-.5rem!important}.mt--2,.my--2{margin-top:-.5rem!important}.mr--2,.mx--2{margin-right:-.5rem!important}.mb--2,.my--2{margin-bottom:-.5rem!important}.ml--2,.mx--2{margin-left:-.5rem!important}.m--1{margin:-.25rem!important}.mt--1,.my--1{margin-top:-.25rem!important}.mr--1,.mx--1{margin-right:-.25rem!important}.mb--1,.my--1{margin-bottom:-.25rem!important}.ml--1,.mx--1{margin-left:-.25rem!important}.m-6{margin:4.5rem!important}.mt-6,.my-6{margin-top:4.5rem!important}.mr-6,.mx-6{margin-right:4.5rem!important}.mb-6,.my-6{margin-bottom:4.5rem!important}.ml-6,.mx-6{margin-left:4.5rem!important}.m-7{margin:6rem!important}.mt-7,.my-7{margin-top:6rem!important}.mr-7,.mx-7{margin-right:6rem!important}.mb-7,.my-7{margin-bottom:6rem!important}.ml-7,.mx-7{margin-left:6rem!important}.m-8{margin:8rem!important}.mt-8,.my-8{margin-top:8rem!important}.mr-8,.mx-8{margin-right:8rem!important}.mb-8,.my-8{margin-bottom:8rem!important}.ml-8,.mx-8{margin-left:8rem!important}.m-9{margin:10rem!important}.mt-9,.my-9{margin-top:10rem!important}.mr-9,.mx-9{margin-right:10rem!important}.mb-9,.my-9{margin-bottom:10rem!important}.ml-9,.mx-9{margin-left:10rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.p-6{padding:4.5rem!important}.pt-6,.py-6{padding-top:4.5rem!important}.pr-6,.px-6{padding-right:4.5rem!important}.pb-6,.py-6{padding-bottom:4.5rem!important}.pl-6,.px-6{padding-left:4.5rem!important}.p-7{padding:6rem!important}.pt-7,.py-7{padding-top:6rem!important}.pr-7,.px-7{padding-right:6rem!important}.pb-7,.py-7{padding-bottom:6rem!important}.pl-7,.px-7{padding-left:6rem!important}.p-8{padding:8rem!important}.pt-8,.py-8{padding-top:8rem!important}.pr-8,.px-8{padding-right:8rem!important}.pb-8,.py-8{padding-bottom:8rem!important}.pl-8,.px-8{padding-left:8rem!important}.p-9{padding:10rem!important}.pt-9,.py-9{padding-top:10rem!important}.pr-9,.px-9{padding-right:10rem!important}.pb-9,.py-9{padding-bottom:10rem!important}.pl-9,.px-9{padding-left:10rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-n-9{margin:10rem!important}.mt-n-9,.my-n-9{margin-top:10rem!important}.mr-n-9,.mx-n-9{margin-right:10rem!important}.mb-n-9,.my-n-9{margin-bottom:10rem!important}.ml-n-9,.mx-n-9{margin-left:10rem!important}.m-n-8{margin:8rem!important}.mt-n-8,.my-n-8{margin-top:8rem!important}.mr-n-8,.mx-n-8{margin-right:8rem!important}.mb-n-8,.my-n-8{margin-bottom:8rem!important}.ml-n-8,.mx-n-8{margin-left:8rem!important}.m-n-7{margin:6rem!important}.mt-n-7,.my-n-7{margin-top:6rem!important}.mr-n-7,.mx-n-7{margin-right:6rem!important}.mb-n-7,.my-n-7{margin-bottom:6rem!important}.ml-n-7,.mx-n-7{margin-left:6rem!important}.m-n-6{margin:4.5rem!important}.mt-n-6,.my-n-6{margin-top:4.5rem!important}.mr-n-6,.mx-n-6{margin-right:4.5rem!important}.mb-n-6,.my-n-6{margin-bottom:4.5rem!important}.ml-n-6,.mx-n-6{margin-left:4.5rem!important}.m-n-5{margin:3rem!important}.mt-n-5,.my-n-5{margin-top:3rem!important}.mr-n-5,.mx-n-5{margin-right:3rem!important}.mb-n-5,.my-n-5{margin-bottom:3rem!important}.ml-n-5,.mx-n-5{margin-left:3rem!important}.m-n-4{margin:1.5rem!important}.mt-n-4,.my-n-4{margin-top:1.5rem!important}.mr-n-4,.mx-n-4{margin-right:1.5rem!important}.mb-n-4,.my-n-4{margin-bottom:1.5rem!important}.ml-n-4,.mx-n-4{margin-left:1.5rem!important}.m-n-3{margin:1rem!important}.mt-n-3,.my-n-3{margin-top:1rem!important}.mr-n-3,.mx-n-3{margin-right:1rem!important}.mb-n-3,.my-n-3{margin-bottom:1rem!important}.ml-n-3,.mx-n-3{margin-left:1rem!important}.m-n-2{margin:.5rem!important}.mt-n-2,.my-n-2{margin-top:.5rem!important}.mr-n-2,.mx-n-2{margin-right:.5rem!important}.mb-n-2,.my-n-2{margin-bottom:.5rem!important}.ml-n-2,.mx-n-2{margin-left:.5rem!important}.m-n-1{margin:.25rem!important}.mt-n-1,.my-n-1{margin-top:.25rem!important}.mr-n-1,.mx-n-1{margin-right:.25rem!important}.mb-n-1,.my-n-1{margin-bottom:.25rem!important}.ml-n-1,.mx-n-1{margin-left:.25rem!important}.m-n6{margin:-4.5rem!important}.mt-n6,.my-n6{margin-top:-4.5rem!important}.mr-n6,.mx-n6{margin-right:-4.5rem!important}.mb-n6,.my-n6{margin-bottom:-4.5rem!important}.ml-n6,.mx-n6{margin-left:-4.5rem!important}.m-n7{margin:-6rem!important}.mt-n7,.my-n7{margin-top:-6rem!important}.mr-n7,.mx-n7{margin-right:-6rem!important}.mb-n7,.my-n7{margin-bottom:-6rem!important}.ml-n7,.mx-n7{margin-left:-6rem!important}.m-n8{margin:-8rem!important}.mt-n8,.my-n8{margin-top:-8rem!important}.mr-n8,.mx-n8{margin-right:-8rem!important}.mb-n8,.my-n8{margin-bottom:-8rem!important}.ml-n8,.mx-n8{margin-left:-8rem!important}.m-n9{margin:-10rem!important}.mt-n9,.my-n9{margin-top:-10rem!important}.mr-n9,.mx-n9{margin-right:-10rem!important}.mb-n9,.my-n9{margin-bottom:-10rem!important}.ml-n9,.mx-n9{margin-left:-10rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.m-sm--9{margin:-10rem!important}.mt-sm--9,.my-sm--9{margin-top:-10rem!important}.mr-sm--9,.mx-sm--9{margin-right:-10rem!important}.mb-sm--9,.my-sm--9{margin-bottom:-10rem!important}.ml-sm--9,.mx-sm--9{margin-left:-10rem!important}.m-sm--8{margin:-8rem!important}.mt-sm--8,.my-sm--8{margin-top:-8rem!important}.mr-sm--8,.mx-sm--8{margin-right:-8rem!important}.mb-sm--8,.my-sm--8{margin-bottom:-8rem!important}.ml-sm--8,.mx-sm--8{margin-left:-8rem!important}.m-sm--7{margin:-6rem!important}.mt-sm--7,.my-sm--7{margin-top:-6rem!important}.mr-sm--7,.mx-sm--7{margin-right:-6rem!important}.mb-sm--7,.my-sm--7{margin-bottom:-6rem!important}.ml-sm--7,.mx-sm--7{margin-left:-6rem!important}.m-sm--6{margin:-4.5rem!important}.mt-sm--6,.my-sm--6{margin-top:-4.5rem!important}.mr-sm--6,.mx-sm--6{margin-right:-4.5rem!important}.mb-sm--6,.my-sm--6{margin-bottom:-4.5rem!important}.ml-sm--6,.mx-sm--6{margin-left:-4.5rem!important}.m-sm--5{margin:-3rem!important}.mt-sm--5,.my-sm--5{margin-top:-3rem!important}.mr-sm--5,.mx-sm--5{margin-right:-3rem!important}.mb-sm--5,.my-sm--5{margin-bottom:-3rem!important}.ml-sm--5,.mx-sm--5{margin-left:-3rem!important}.m-sm--4{margin:-1.5rem!important}.mt-sm--4,.my-sm--4{margin-top:-1.5rem!important}.mr-sm--4,.mx-sm--4{margin-right:-1.5rem!important}.mb-sm--4,.my-sm--4{margin-bottom:-1.5rem!important}.ml-sm--4,.mx-sm--4{margin-left:-1.5rem!important}.m-sm--3{margin:-1rem!important}.mt-sm--3,.my-sm--3{margin-top:-1rem!important}.mr-sm--3,.mx-sm--3{margin-right:-1rem!important}.mb-sm--3,.my-sm--3{margin-bottom:-1rem!important}.ml-sm--3,.mx-sm--3{margin-left:-1rem!important}.m-sm--2{margin:-.5rem!important}.mt-sm--2,.my-sm--2{margin-top:-.5rem!important}.mr-sm--2,.mx-sm--2{margin-right:-.5rem!important}.mb-sm--2,.my-sm--2{margin-bottom:-.5rem!important}.ml-sm--2,.mx-sm--2{margin-left:-.5rem!important}.m-sm--1{margin:-.25rem!important}.mt-sm--1,.my-sm--1{margin-top:-.25rem!important}.mr-sm--1,.mx-sm--1{margin-right:-.25rem!important}.mb-sm--1,.my-sm--1{margin-bottom:-.25rem!important}.ml-sm--1,.mx-sm--1{margin-left:-.25rem!important}.m-sm-6{margin:4.5rem!important}.mt-sm-6,.my-sm-6{margin-top:4.5rem!important}.mr-sm-6,.mx-sm-6{margin-right:4.5rem!important}.mb-sm-6,.my-sm-6{margin-bottom:4.5rem!important}.ml-sm-6,.mx-sm-6{margin-left:4.5rem!important}.m-sm-7{margin:6rem!important}.mt-sm-7,.my-sm-7{margin-top:6rem!important}.mr-sm-7,.mx-sm-7{margin-right:6rem!important}.mb-sm-7,.my-sm-7{margin-bottom:6rem!important}.ml-sm-7,.mx-sm-7{margin-left:6rem!important}.m-sm-8{margin:8rem!important}.mt-sm-8,.my-sm-8{margin-top:8rem!important}.mr-sm-8,.mx-sm-8{margin-right:8rem!important}.mb-sm-8,.my-sm-8{margin-bottom:8rem!important}.ml-sm-8,.mx-sm-8{margin-left:8rem!important}.m-sm-9{margin:10rem!important}.mt-sm-9,.my-sm-9{margin-top:10rem!important}.mr-sm-9,.mx-sm-9{margin-right:10rem!important}.mb-sm-9,.my-sm-9{margin-bottom:10rem!important}.ml-sm-9,.mx-sm-9{margin-left:10rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.p-sm-6{padding:4.5rem!important}.pt-sm-6,.py-sm-6{padding-top:4.5rem!important}.pr-sm-6,.px-sm-6{padding-right:4.5rem!important}.pb-sm-6,.py-sm-6{padding-bottom:4.5rem!important}.pl-sm-6,.px-sm-6{padding-left:4.5rem!important}.p-sm-7{padding:6rem!important}.pt-sm-7,.py-sm-7{padding-top:6rem!important}.pr-sm-7,.px-sm-7{padding-right:6rem!important}.pb-sm-7,.py-sm-7{padding-bottom:6rem!important}.pl-sm-7,.px-sm-7{padding-left:6rem!important}.p-sm-8{padding:8rem!important}.pt-sm-8,.py-sm-8{padding-top:8rem!important}.pr-sm-8,.px-sm-8{padding-right:8rem!important}.pb-sm-8,.py-sm-8{padding-bottom:8rem!important}.pl-sm-8,.px-sm-8{padding-left:8rem!important}.p-sm-9{padding:10rem!important}.pt-sm-9,.py-sm-9{padding-top:10rem!important}.pr-sm-9,.px-sm-9{padding-right:10rem!important}.pb-sm-9,.py-sm-9{padding-bottom:10rem!important}.pl-sm-9,.px-sm-9{padding-left:10rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-n-9{margin:10rem!important}.mt-sm-n-9,.my-sm-n-9{margin-top:10rem!important}.mr-sm-n-9,.mx-sm-n-9{margin-right:10rem!important}.mb-sm-n-9,.my-sm-n-9{margin-bottom:10rem!important}.ml-sm-n-9,.mx-sm-n-9{margin-left:10rem!important}.m-sm-n-8{margin:8rem!important}.mt-sm-n-8,.my-sm-n-8{margin-top:8rem!important}.mr-sm-n-8,.mx-sm-n-8{margin-right:8rem!important}.mb-sm-n-8,.my-sm-n-8{margin-bottom:8rem!important}.ml-sm-n-8,.mx-sm-n-8{margin-left:8rem!important}.m-sm-n-7{margin:6rem!important}.mt-sm-n-7,.my-sm-n-7{margin-top:6rem!important}.mr-sm-n-7,.mx-sm-n-7{margin-right:6rem!important}.mb-sm-n-7,.my-sm-n-7{margin-bottom:6rem!important}.ml-sm-n-7,.mx-sm-n-7{margin-left:6rem!important}.m-sm-n-6{margin:4.5rem!important}.mt-sm-n-6,.my-sm-n-6{margin-top:4.5rem!important}.mr-sm-n-6,.mx-sm-n-6{margin-right:4.5rem!important}.mb-sm-n-6,.my-sm-n-6{margin-bottom:4.5rem!important}.ml-sm-n-6,.mx-sm-n-6{margin-left:4.5rem!important}.m-sm-n-5{margin:3rem!important}.mt-sm-n-5,.my-sm-n-5{margin-top:3rem!important}.mr-sm-n-5,.mx-sm-n-5{margin-right:3rem!important}.mb-sm-n-5,.my-sm-n-5{margin-bottom:3rem!important}.ml-sm-n-5,.mx-sm-n-5{margin-left:3rem!important}.m-sm-n-4{margin:1.5rem!important}.mt-sm-n-4,.my-sm-n-4{margin-top:1.5rem!important}.mr-sm-n-4,.mx-sm-n-4{margin-right:1.5rem!important}.mb-sm-n-4,.my-sm-n-4{margin-bottom:1.5rem!important}.ml-sm-n-4,.mx-sm-n-4{margin-left:1.5rem!important}.m-sm-n-3{margin:1rem!important}.mt-sm-n-3,.my-sm-n-3{margin-top:1rem!important}.mr-sm-n-3,.mx-sm-n-3{margin-right:1rem!important}.mb-sm-n-3,.my-sm-n-3{margin-bottom:1rem!important}.ml-sm-n-3,.mx-sm-n-3{margin-left:1rem!important}.m-sm-n-2{margin:.5rem!important}.mt-sm-n-2,.my-sm-n-2{margin-top:.5rem!important}.mr-sm-n-2,.mx-sm-n-2{margin-right:.5rem!important}.mb-sm-n-2,.my-sm-n-2{margin-bottom:.5rem!important}.ml-sm-n-2,.mx-sm-n-2{margin-left:.5rem!important}.m-sm-n-1{margin:.25rem!important}.mt-sm-n-1,.my-sm-n-1{margin-top:.25rem!important}.mr-sm-n-1,.mx-sm-n-1{margin-right:.25rem!important}.mb-sm-n-1,.my-sm-n-1{margin-bottom:.25rem!important}.ml-sm-n-1,.mx-sm-n-1{margin-left:.25rem!important}.m-sm-n6{margin:-4.5rem!important}.mt-sm-n6,.my-sm-n6{margin-top:-4.5rem!important}.mr-sm-n6,.mx-sm-n6{margin-right:-4.5rem!important}.mb-sm-n6,.my-sm-n6{margin-bottom:-4.5rem!important}.ml-sm-n6,.mx-sm-n6{margin-left:-4.5rem!important}.m-sm-n7{margin:-6rem!important}.mt-sm-n7,.my-sm-n7{margin-top:-6rem!important}.mr-sm-n7,.mx-sm-n7{margin-right:-6rem!important}.mb-sm-n7,.my-sm-n7{margin-bottom:-6rem!important}.ml-sm-n7,.mx-sm-n7{margin-left:-6rem!important}.m-sm-n8{margin:-8rem!important}.mt-sm-n8,.my-sm-n8{margin-top:-8rem!important}.mr-sm-n8,.mx-sm-n8{margin-right:-8rem!important}.mb-sm-n8,.my-sm-n8{margin-bottom:-8rem!important}.ml-sm-n8,.mx-sm-n8{margin-left:-8rem!important}.m-sm-n9{margin:-10rem!important}.mt-sm-n9,.my-sm-n9{margin-top:-10rem!important}.mr-sm-n9,.mx-sm-n9{margin-right:-10rem!important}.mb-sm-n9,.my-sm-n9{margin-bottom:-10rem!important}.ml-sm-n9,.mx-sm-n9{margin-left:-10rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.m-md--9{margin:-10rem!important}.mt-md--9,.my-md--9{margin-top:-10rem!important}.mr-md--9,.mx-md--9{margin-right:-10rem!important}.mb-md--9,.my-md--9{margin-bottom:-10rem!important}.ml-md--9,.mx-md--9{margin-left:-10rem!important}.m-md--8{margin:-8rem!important}.mt-md--8,.my-md--8{margin-top:-8rem!important}.mr-md--8,.mx-md--8{margin-right:-8rem!important}.mb-md--8,.my-md--8{margin-bottom:-8rem!important}.ml-md--8,.mx-md--8{margin-left:-8rem!important}.m-md--7{margin:-6rem!important}.mt-md--7,.my-md--7{margin-top:-6rem!important}.mr-md--7,.mx-md--7{margin-right:-6rem!important}.mb-md--7,.my-md--7{margin-bottom:-6rem!important}.ml-md--7,.mx-md--7{margin-left:-6rem!important}.m-md--6{margin:-4.5rem!important}.mt-md--6,.my-md--6{margin-top:-4.5rem!important}.mr-md--6,.mx-md--6{margin-right:-4.5rem!important}.mb-md--6,.my-md--6{margin-bottom:-4.5rem!important}.ml-md--6,.mx-md--6{margin-left:-4.5rem!important}.m-md--5{margin:-3rem!important}.mt-md--5,.my-md--5{margin-top:-3rem!important}.mr-md--5,.mx-md--5{margin-right:-3rem!important}.mb-md--5,.my-md--5{margin-bottom:-3rem!important}.ml-md--5,.mx-md--5{margin-left:-3rem!important}.m-md--4{margin:-1.5rem!important}.mt-md--4,.my-md--4{margin-top:-1.5rem!important}.mr-md--4,.mx-md--4{margin-right:-1.5rem!important}.mb-md--4,.my-md--4{margin-bottom:-1.5rem!important}.ml-md--4,.mx-md--4{margin-left:-1.5rem!important}.m-md--3{margin:-1rem!important}.mt-md--3,.my-md--3{margin-top:-1rem!important}.mr-md--3,.mx-md--3{margin-right:-1rem!important}.mb-md--3,.my-md--3{margin-bottom:-1rem!important}.ml-md--3,.mx-md--3{margin-left:-1rem!important}.m-md--2{margin:-.5rem!important}.mt-md--2,.my-md--2{margin-top:-.5rem!important}.mr-md--2,.mx-md--2{margin-right:-.5rem!important}.mb-md--2,.my-md--2{margin-bottom:-.5rem!important}.ml-md--2,.mx-md--2{margin-left:-.5rem!important}.m-md--1{margin:-.25rem!important}.mt-md--1,.my-md--1{margin-top:-.25rem!important}.mr-md--1,.mx-md--1{margin-right:-.25rem!important}.mb-md--1,.my-md--1{margin-bottom:-.25rem!important}.ml-md--1,.mx-md--1{margin-left:-.25rem!important}.m-md-6{margin:4.5rem!important}.mt-md-6,.my-md-6{margin-top:4.5rem!important}.mr-md-6,.mx-md-6{margin-right:4.5rem!important}.mb-md-6,.my-md-6{margin-bottom:4.5rem!important}.ml-md-6,.mx-md-6{margin-left:4.5rem!important}.m-md-7{margin:6rem!important}.mt-md-7,.my-md-7{margin-top:6rem!important}.mr-md-7,.mx-md-7{margin-right:6rem!important}.mb-md-7,.my-md-7{margin-bottom:6rem!important}.ml-md-7,.mx-md-7{margin-left:6rem!important}.m-md-8{margin:8rem!important}.mt-md-8,.my-md-8{margin-top:8rem!important}.mr-md-8,.mx-md-8{margin-right:8rem!important}.mb-md-8,.my-md-8{margin-bottom:8rem!important}.ml-md-8,.mx-md-8{margin-left:8rem!important}.m-md-9{margin:10rem!important}.mt-md-9,.my-md-9{margin-top:10rem!important}.mr-md-9,.mx-md-9{margin-right:10rem!important}.mb-md-9,.my-md-9{margin-bottom:10rem!important}.ml-md-9,.mx-md-9{margin-left:10rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.p-md-6{padding:4.5rem!important}.pt-md-6,.py-md-6{padding-top:4.5rem!important}.pr-md-6,.px-md-6{padding-right:4.5rem!important}.pb-md-6,.py-md-6{padding-bottom:4.5rem!important}.pl-md-6,.px-md-6{padding-left:4.5rem!important}.p-md-7{padding:6rem!important}.pt-md-7,.py-md-7{padding-top:6rem!important}.pr-md-7,.px-md-7{padding-right:6rem!important}.pb-md-7,.py-md-7{padding-bottom:6rem!important}.pl-md-7,.px-md-7{padding-left:6rem!important}.p-md-8{padding:8rem!important}.pt-md-8,.py-md-8{padding-top:8rem!important}.pr-md-8,.px-md-8{padding-right:8rem!important}.pb-md-8,.py-md-8{padding-bottom:8rem!important}.pl-md-8,.px-md-8{padding-left:8rem!important}.p-md-9{padding:10rem!important}.pt-md-9,.py-md-9{padding-top:10rem!important}.pr-md-9,.px-md-9{padding-right:10rem!important}.pb-md-9,.py-md-9{padding-bottom:10rem!important}.pl-md-9,.px-md-9{padding-left:10rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-n-9{margin:10rem!important}.mt-md-n-9,.my-md-n-9{margin-top:10rem!important}.mr-md-n-9,.mx-md-n-9{margin-right:10rem!important}.mb-md-n-9,.my-md-n-9{margin-bottom:10rem!important}.ml-md-n-9,.mx-md-n-9{margin-left:10rem!important}.m-md-n-8{margin:8rem!important}.mt-md-n-8,.my-md-n-8{margin-top:8rem!important}.mr-md-n-8,.mx-md-n-8{margin-right:8rem!important}.mb-md-n-8,.my-md-n-8{margin-bottom:8rem!important}.ml-md-n-8,.mx-md-n-8{margin-left:8rem!important}.m-md-n-7{margin:6rem!important}.mt-md-n-7,.my-md-n-7{margin-top:6rem!important}.mr-md-n-7,.mx-md-n-7{margin-right:6rem!important}.mb-md-n-7,.my-md-n-7{margin-bottom:6rem!important}.ml-md-n-7,.mx-md-n-7{margin-left:6rem!important}.m-md-n-6{margin:4.5rem!important}.mt-md-n-6,.my-md-n-6{margin-top:4.5rem!important}.mr-md-n-6,.mx-md-n-6{margin-right:4.5rem!important}.mb-md-n-6,.my-md-n-6{margin-bottom:4.5rem!important}.ml-md-n-6,.mx-md-n-6{margin-left:4.5rem!important}.m-md-n-5{margin:3rem!important}.mt-md-n-5,.my-md-n-5{margin-top:3rem!important}.mr-md-n-5,.mx-md-n-5{margin-right:3rem!important}.mb-md-n-5,.my-md-n-5{margin-bottom:3rem!important}.ml-md-n-5,.mx-md-n-5{margin-left:3rem!important}.m-md-n-4{margin:1.5rem!important}.mt-md-n-4,.my-md-n-4{margin-top:1.5rem!important}.mr-md-n-4,.mx-md-n-4{margin-right:1.5rem!important}.mb-md-n-4,.my-md-n-4{margin-bottom:1.5rem!important}.ml-md-n-4,.mx-md-n-4{margin-left:1.5rem!important}.m-md-n-3{margin:1rem!important}.mt-md-n-3,.my-md-n-3{margin-top:1rem!important}.mr-md-n-3,.mx-md-n-3{margin-right:1rem!important}.mb-md-n-3,.my-md-n-3{margin-bottom:1rem!important}.ml-md-n-3,.mx-md-n-3{margin-left:1rem!important}.m-md-n-2{margin:.5rem!important}.mt-md-n-2,.my-md-n-2{margin-top:.5rem!important}.mr-md-n-2,.mx-md-n-2{margin-right:.5rem!important}.mb-md-n-2,.my-md-n-2{margin-bottom:.5rem!important}.ml-md-n-2,.mx-md-n-2{margin-left:.5rem!important}.m-md-n-1{margin:.25rem!important}.mt-md-n-1,.my-md-n-1{margin-top:.25rem!important}.mr-md-n-1,.mx-md-n-1{margin-right:.25rem!important}.mb-md-n-1,.my-md-n-1{margin-bottom:.25rem!important}.ml-md-n-1,.mx-md-n-1{margin-left:.25rem!important}.m-md-n6{margin:-4.5rem!important}.mt-md-n6,.my-md-n6{margin-top:-4.5rem!important}.mr-md-n6,.mx-md-n6{margin-right:-4.5rem!important}.mb-md-n6,.my-md-n6{margin-bottom:-4.5rem!important}.ml-md-n6,.mx-md-n6{margin-left:-4.5rem!important}.m-md-n7{margin:-6rem!important}.mt-md-n7,.my-md-n7{margin-top:-6rem!important}.mr-md-n7,.mx-md-n7{margin-right:-6rem!important}.mb-md-n7,.my-md-n7{margin-bottom:-6rem!important}.ml-md-n7,.mx-md-n7{margin-left:-6rem!important}.m-md-n8{margin:-8rem!important}.mt-md-n8,.my-md-n8{margin-top:-8rem!important}.mr-md-n8,.mx-md-n8{margin-right:-8rem!important}.mb-md-n8,.my-md-n8{margin-bottom:-8rem!important}.ml-md-n8,.mx-md-n8{margin-left:-8rem!important}.m-md-n9{margin:-10rem!important}.mt-md-n9,.my-md-n9{margin-top:-10rem!important}.mr-md-n9,.mx-md-n9{margin-right:-10rem!important}.mb-md-n9,.my-md-n9{margin-bottom:-10rem!important}.ml-md-n9,.mx-md-n9{margin-left:-10rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.m-lg--9{margin:-10rem!important}.mt-lg--9,.my-lg--9{margin-top:-10rem!important}.mr-lg--9,.mx-lg--9{margin-right:-10rem!important}.mb-lg--9,.my-lg--9{margin-bottom:-10rem!important}.ml-lg--9,.mx-lg--9{margin-left:-10rem!important}.m-lg--8{margin:-8rem!important}.mt-lg--8,.my-lg--8{margin-top:-8rem!important}.mr-lg--8,.mx-lg--8{margin-right:-8rem!important}.mb-lg--8,.my-lg--8{margin-bottom:-8rem!important}.ml-lg--8,.mx-lg--8{margin-left:-8rem!important}.m-lg--7{margin:-6rem!important}.mt-lg--7,.my-lg--7{margin-top:-6rem!important}.mr-lg--7,.mx-lg--7{margin-right:-6rem!important}.mb-lg--7,.my-lg--7{margin-bottom:-6rem!important}.ml-lg--7,.mx-lg--7{margin-left:-6rem!important}.m-lg--6{margin:-4.5rem!important}.mt-lg--6,.my-lg--6{margin-top:-4.5rem!important}.mr-lg--6,.mx-lg--6{margin-right:-4.5rem!important}.mb-lg--6,.my-lg--6{margin-bottom:-4.5rem!important}.ml-lg--6,.mx-lg--6{margin-left:-4.5rem!important}.m-lg--5{margin:-3rem!important}.mt-lg--5,.my-lg--5{margin-top:-3rem!important}.mr-lg--5,.mx-lg--5{margin-right:-3rem!important}.mb-lg--5,.my-lg--5{margin-bottom:-3rem!important}.ml-lg--5,.mx-lg--5{margin-left:-3rem!important}.m-lg--4{margin:-1.5rem!important}.mt-lg--4,.my-lg--4{margin-top:-1.5rem!important}.mr-lg--4,.mx-lg--4{margin-right:-1.5rem!important}.mb-lg--4,.my-lg--4{margin-bottom:-1.5rem!important}.ml-lg--4,.mx-lg--4{margin-left:-1.5rem!important}.m-lg--3{margin:-1rem!important}.mt-lg--3,.my-lg--3{margin-top:-1rem!important}.mr-lg--3,.mx-lg--3{margin-right:-1rem!important}.mb-lg--3,.my-lg--3{margin-bottom:-1rem!important}.ml-lg--3,.mx-lg--3{margin-left:-1rem!important}.m-lg--2{margin:-.5rem!important}.mt-lg--2,.my-lg--2{margin-top:-.5rem!important}.mr-lg--2,.mx-lg--2{margin-right:-.5rem!important}.mb-lg--2,.my-lg--2{margin-bottom:-.5rem!important}.ml-lg--2,.mx-lg--2{margin-left:-.5rem!important}.m-lg--1{margin:-.25rem!important}.mt-lg--1,.my-lg--1{margin-top:-.25rem!important}.mr-lg--1,.mx-lg--1{margin-right:-.25rem!important}.mb-lg--1,.my-lg--1{margin-bottom:-.25rem!important}.ml-lg--1,.mx-lg--1{margin-left:-.25rem!important}.m-lg-6{margin:4.5rem!important}.mt-lg-6,.my-lg-6{margin-top:4.5rem!important}.mr-lg-6,.mx-lg-6{margin-right:4.5rem!important}.mb-lg-6,.my-lg-6{margin-bottom:4.5rem!important}.ml-lg-6,.mx-lg-6{margin-left:4.5rem!important}.m-lg-7{margin:6rem!important}.mt-lg-7,.my-lg-7{margin-top:6rem!important}.mr-lg-7,.mx-lg-7{margin-right:6rem!important}.mb-lg-7,.my-lg-7{margin-bottom:6rem!important}.ml-lg-7,.mx-lg-7{margin-left:6rem!important}.m-lg-8{margin:8rem!important}.mt-lg-8,.my-lg-8{margin-top:8rem!important}.mr-lg-8,.mx-lg-8{margin-right:8rem!important}.mb-lg-8,.my-lg-8{margin-bottom:8rem!important}.ml-lg-8,.mx-lg-8{margin-left:8rem!important}.m-lg-9{margin:10rem!important}.mt-lg-9,.my-lg-9{margin-top:10rem!important}.mr-lg-9,.mx-lg-9{margin-right:10rem!important}.mb-lg-9,.my-lg-9{margin-bottom:10rem!important}.ml-lg-9,.mx-lg-9{margin-left:10rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.p-lg-6{padding:4.5rem!important}.pt-lg-6,.py-lg-6{padding-top:4.5rem!important}.pr-lg-6,.px-lg-6{padding-right:4.5rem!important}.pb-lg-6,.py-lg-6{padding-bottom:4.5rem!important}.pl-lg-6,.px-lg-6{padding-left:4.5rem!important}.p-lg-7{padding:6rem!important}.pt-lg-7,.py-lg-7{padding-top:6rem!important}.pr-lg-7,.px-lg-7{padding-right:6rem!important}.pb-lg-7,.py-lg-7{padding-bottom:6rem!important}.pl-lg-7,.px-lg-7{padding-left:6rem!important}.p-lg-8{padding:8rem!important}.pt-lg-8,.py-lg-8{padding-top:8rem!important}.pr-lg-8,.px-lg-8{padding-right:8rem!important}.pb-lg-8,.py-lg-8{padding-bottom:8rem!important}.pl-lg-8,.px-lg-8{padding-left:8rem!important}.p-lg-9{padding:10rem!important}.pt-lg-9,.py-lg-9{padding-top:10rem!important}.pr-lg-9,.px-lg-9{padding-right:10rem!important}.pb-lg-9,.py-lg-9{padding-bottom:10rem!important}.pl-lg-9,.px-lg-9{padding-left:10rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-n-9{margin:10rem!important}.mt-lg-n-9,.my-lg-n-9{margin-top:10rem!important}.mr-lg-n-9,.mx-lg-n-9{margin-right:10rem!important}.mb-lg-n-9,.my-lg-n-9{margin-bottom:10rem!important}.ml-lg-n-9,.mx-lg-n-9{margin-left:10rem!important}.m-lg-n-8{margin:8rem!important}.mt-lg-n-8,.my-lg-n-8{margin-top:8rem!important}.mr-lg-n-8,.mx-lg-n-8{margin-right:8rem!important}.mb-lg-n-8,.my-lg-n-8{margin-bottom:8rem!important}.ml-lg-n-8,.mx-lg-n-8{margin-left:8rem!important}.m-lg-n-7{margin:6rem!important}.mt-lg-n-7,.my-lg-n-7{margin-top:6rem!important}.mr-lg-n-7,.mx-lg-n-7{margin-right:6rem!important}.mb-lg-n-7,.my-lg-n-7{margin-bottom:6rem!important}.ml-lg-n-7,.mx-lg-n-7{margin-left:6rem!important}.m-lg-n-6{margin:4.5rem!important}.mt-lg-n-6,.my-lg-n-6{margin-top:4.5rem!important}.mr-lg-n-6,.mx-lg-n-6{margin-right:4.5rem!important}.mb-lg-n-6,.my-lg-n-6{margin-bottom:4.5rem!important}.ml-lg-n-6,.mx-lg-n-6{margin-left:4.5rem!important}.m-lg-n-5{margin:3rem!important}.mt-lg-n-5,.my-lg-n-5{margin-top:3rem!important}.mr-lg-n-5,.mx-lg-n-5{margin-right:3rem!important}.mb-lg-n-5,.my-lg-n-5{margin-bottom:3rem!important}.ml-lg-n-5,.mx-lg-n-5{margin-left:3rem!important}.m-lg-n-4{margin:1.5rem!important}.mt-lg-n-4,.my-lg-n-4{margin-top:1.5rem!important}.mr-lg-n-4,.mx-lg-n-4{margin-right:1.5rem!important}.mb-lg-n-4,.my-lg-n-4{margin-bottom:1.5rem!important}.ml-lg-n-4,.mx-lg-n-4{margin-left:1.5rem!important}.m-lg-n-3{margin:1rem!important}.mt-lg-n-3,.my-lg-n-3{margin-top:1rem!important}.mr-lg-n-3,.mx-lg-n-3{margin-right:1rem!important}.mb-lg-n-3,.my-lg-n-3{margin-bottom:1rem!important}.ml-lg-n-3,.mx-lg-n-3{margin-left:1rem!important}.m-lg-n-2{margin:.5rem!important}.mt-lg-n-2,.my-lg-n-2{margin-top:.5rem!important}.mr-lg-n-2,.mx-lg-n-2{margin-right:.5rem!important}.mb-lg-n-2,.my-lg-n-2{margin-bottom:.5rem!important}.ml-lg-n-2,.mx-lg-n-2{margin-left:.5rem!important}.m-lg-n-1{margin:.25rem!important}.mt-lg-n-1,.my-lg-n-1{margin-top:.25rem!important}.mr-lg-n-1,.mx-lg-n-1{margin-right:.25rem!important}.mb-lg-n-1,.my-lg-n-1{margin-bottom:.25rem!important}.ml-lg-n-1,.mx-lg-n-1{margin-left:.25rem!important}.m-lg-n6{margin:-4.5rem!important}.mt-lg-n6,.my-lg-n6{margin-top:-4.5rem!important}.mr-lg-n6,.mx-lg-n6{margin-right:-4.5rem!important}.mb-lg-n6,.my-lg-n6{margin-bottom:-4.5rem!important}.ml-lg-n6,.mx-lg-n6{margin-left:-4.5rem!important}.m-lg-n7{margin:-6rem!important}.mt-lg-n7,.my-lg-n7{margin-top:-6rem!important}.mr-lg-n7,.mx-lg-n7{margin-right:-6rem!important}.mb-lg-n7,.my-lg-n7{margin-bottom:-6rem!important}.ml-lg-n7,.mx-lg-n7{margin-left:-6rem!important}.m-lg-n8{margin:-8rem!important}.mt-lg-n8,.my-lg-n8{margin-top:-8rem!important}.mr-lg-n8,.mx-lg-n8{margin-right:-8rem!important}.mb-lg-n8,.my-lg-n8{margin-bottom:-8rem!important}.ml-lg-n8,.mx-lg-n8{margin-left:-8rem!important}.m-lg-n9{margin:-10rem!important}.mt-lg-n9,.my-lg-n9{margin-top:-10rem!important}.mr-lg-n9,.mx-lg-n9{margin-right:-10rem!important}.mb-lg-n9,.my-lg-n9{margin-bottom:-10rem!important}.ml-lg-n9,.mx-lg-n9{margin-left:-10rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.m-xl--9{margin:-10rem!important}.mt-xl--9,.my-xl--9{margin-top:-10rem!important}.mr-xl--9,.mx-xl--9{margin-right:-10rem!important}.mb-xl--9,.my-xl--9{margin-bottom:-10rem!important}.ml-xl--9,.mx-xl--9{margin-left:-10rem!important}.m-xl--8{margin:-8rem!important}.mt-xl--8,.my-xl--8{margin-top:-8rem!important}.mr-xl--8,.mx-xl--8{margin-right:-8rem!important}.mb-xl--8,.my-xl--8{margin-bottom:-8rem!important}.ml-xl--8,.mx-xl--8{margin-left:-8rem!important}.m-xl--7{margin:-6rem!important}.mt-xl--7,.my-xl--7{margin-top:-6rem!important}.mr-xl--7,.mx-xl--7{margin-right:-6rem!important}.mb-xl--7,.my-xl--7{margin-bottom:-6rem!important}.ml-xl--7,.mx-xl--7{margin-left:-6rem!important}.m-xl--6{margin:-4.5rem!important}.mt-xl--6,.my-xl--6{margin-top:-4.5rem!important}.mr-xl--6,.mx-xl--6{margin-right:-4.5rem!important}.mb-xl--6,.my-xl--6{margin-bottom:-4.5rem!important}.ml-xl--6,.mx-xl--6{margin-left:-4.5rem!important}.m-xl--5{margin:-3rem!important}.mt-xl--5,.my-xl--5{margin-top:-3rem!important}.mr-xl--5,.mx-xl--5{margin-right:-3rem!important}.mb-xl--5,.my-xl--5{margin-bottom:-3rem!important}.ml-xl--5,.mx-xl--5{margin-left:-3rem!important}.m-xl--4{margin:-1.5rem!important}.mt-xl--4,.my-xl--4{margin-top:-1.5rem!important}.mr-xl--4,.mx-xl--4{margin-right:-1.5rem!important}.mb-xl--4,.my-xl--4{margin-bottom:-1.5rem!important}.ml-xl--4,.mx-xl--4{margin-left:-1.5rem!important}.m-xl--3{margin:-1rem!important}.mt-xl--3,.my-xl--3{margin-top:-1rem!important}.mr-xl--3,.mx-xl--3{margin-right:-1rem!important}.mb-xl--3,.my-xl--3{margin-bottom:-1rem!important}.ml-xl--3,.mx-xl--3{margin-left:-1rem!important}.m-xl--2{margin:-.5rem!important}.mt-xl--2,.my-xl--2{margin-top:-.5rem!important}.mr-xl--2,.mx-xl--2{margin-right:-.5rem!important}.mb-xl--2,.my-xl--2{margin-bottom:-.5rem!important}.ml-xl--2,.mx-xl--2{margin-left:-.5rem!important}.m-xl--1{margin:-.25rem!important}.mt-xl--1,.my-xl--1{margin-top:-.25rem!important}.mr-xl--1,.mx-xl--1{margin-right:-.25rem!important}.mb-xl--1,.my-xl--1{margin-bottom:-.25rem!important}.ml-xl--1,.mx-xl--1{margin-left:-.25rem!important}.m-xl-6{margin:4.5rem!important}.mt-xl-6,.my-xl-6{margin-top:4.5rem!important}.mr-xl-6,.mx-xl-6{margin-right:4.5rem!important}.mb-xl-6,.my-xl-6{margin-bottom:4.5rem!important}.ml-xl-6,.mx-xl-6{margin-left:4.5rem!important}.m-xl-7{margin:6rem!important}.mt-xl-7,.my-xl-7{margin-top:6rem!important}.mr-xl-7,.mx-xl-7{margin-right:6rem!important}.mb-xl-7,.my-xl-7{margin-bottom:6rem!important}.ml-xl-7,.mx-xl-7{margin-left:6rem!important}.m-xl-8{margin:8rem!important}.mt-xl-8,.my-xl-8{margin-top:8rem!important}.mr-xl-8,.mx-xl-8{margin-right:8rem!important}.mb-xl-8,.my-xl-8{margin-bottom:8rem!important}.ml-xl-8,.mx-xl-8{margin-left:8rem!important}.m-xl-9{margin:10rem!important}.mt-xl-9,.my-xl-9{margin-top:10rem!important}.mr-xl-9,.mx-xl-9{margin-right:10rem!important}.mb-xl-9,.my-xl-9{margin-bottom:10rem!important}.ml-xl-9,.mx-xl-9{margin-left:10rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.p-xl-6{padding:4.5rem!important}.pt-xl-6,.py-xl-6{padding-top:4.5rem!important}.pr-xl-6,.px-xl-6{padding-right:4.5rem!important}.pb-xl-6,.py-xl-6{padding-bottom:4.5rem!important}.pl-xl-6,.px-xl-6{padding-left:4.5rem!important}.p-xl-7{padding:6rem!important}.pt-xl-7,.py-xl-7{padding-top:6rem!important}.pr-xl-7,.px-xl-7{padding-right:6rem!important}.pb-xl-7,.py-xl-7{padding-bottom:6rem!important}.pl-xl-7,.px-xl-7{padding-left:6rem!important}.p-xl-8{padding:8rem!important}.pt-xl-8,.py-xl-8{padding-top:8rem!important}.pr-xl-8,.px-xl-8{padding-right:8rem!important}.pb-xl-8,.py-xl-8{padding-bottom:8rem!important}.pl-xl-8,.px-xl-8{padding-left:8rem!important}.p-xl-9{padding:10rem!important}.pt-xl-9,.py-xl-9{padding-top:10rem!important}.pr-xl-9,.px-xl-9{padding-right:10rem!important}.pb-xl-9,.py-xl-9{padding-bottom:10rem!important}.pl-xl-9,.px-xl-9{padding-left:10rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-n-9{margin:10rem!important}.mt-xl-n-9,.my-xl-n-9{margin-top:10rem!important}.mr-xl-n-9,.mx-xl-n-9{margin-right:10rem!important}.mb-xl-n-9,.my-xl-n-9{margin-bottom:10rem!important}.ml-xl-n-9,.mx-xl-n-9{margin-left:10rem!important}.m-xl-n-8{margin:8rem!important}.mt-xl-n-8,.my-xl-n-8{margin-top:8rem!important}.mr-xl-n-8,.mx-xl-n-8{margin-right:8rem!important}.mb-xl-n-8,.my-xl-n-8{margin-bottom:8rem!important}.ml-xl-n-8,.mx-xl-n-8{margin-left:8rem!important}.m-xl-n-7{margin:6rem!important}.mt-xl-n-7,.my-xl-n-7{margin-top:6rem!important}.mr-xl-n-7,.mx-xl-n-7{margin-right:6rem!important}.mb-xl-n-7,.my-xl-n-7{margin-bottom:6rem!important}.ml-xl-n-7,.mx-xl-n-7{margin-left:6rem!important}.m-xl-n-6{margin:4.5rem!important}.mt-xl-n-6,.my-xl-n-6{margin-top:4.5rem!important}.mr-xl-n-6,.mx-xl-n-6{margin-right:4.5rem!important}.mb-xl-n-6,.my-xl-n-6{margin-bottom:4.5rem!important}.ml-xl-n-6,.mx-xl-n-6{margin-left:4.5rem!important}.m-xl-n-5{margin:3rem!important}.mt-xl-n-5,.my-xl-n-5{margin-top:3rem!important}.mr-xl-n-5,.mx-xl-n-5{margin-right:3rem!important}.mb-xl-n-5,.my-xl-n-5{margin-bottom:3rem!important}.ml-xl-n-5,.mx-xl-n-5{margin-left:3rem!important}.m-xl-n-4{margin:1.5rem!important}.mt-xl-n-4,.my-xl-n-4{margin-top:1.5rem!important}.mr-xl-n-4,.mx-xl-n-4{margin-right:1.5rem!important}.mb-xl-n-4,.my-xl-n-4{margin-bottom:1.5rem!important}.ml-xl-n-4,.mx-xl-n-4{margin-left:1.5rem!important}.m-xl-n-3{margin:1rem!important}.mt-xl-n-3,.my-xl-n-3{margin-top:1rem!important}.mr-xl-n-3,.mx-xl-n-3{margin-right:1rem!important}.mb-xl-n-3,.my-xl-n-3{margin-bottom:1rem!important}.ml-xl-n-3,.mx-xl-n-3{margin-left:1rem!important}.m-xl-n-2{margin:.5rem!important}.mt-xl-n-2,.my-xl-n-2{margin-top:.5rem!important}.mr-xl-n-2,.mx-xl-n-2{margin-right:.5rem!important}.mb-xl-n-2,.my-xl-n-2{margin-bottom:.5rem!important}.ml-xl-n-2,.mx-xl-n-2{margin-left:.5rem!important}.m-xl-n-1{margin:.25rem!important}.mt-xl-n-1,.my-xl-n-1{margin-top:.25rem!important}.mr-xl-n-1,.mx-xl-n-1{margin-right:.25rem!important}.mb-xl-n-1,.my-xl-n-1{margin-bottom:.25rem!important}.ml-xl-n-1,.mx-xl-n-1{margin-left:.25rem!important}.m-xl-n6{margin:-4.5rem!important}.mt-xl-n6,.my-xl-n6{margin-top:-4.5rem!important}.mr-xl-n6,.mx-xl-n6{margin-right:-4.5rem!important}.mb-xl-n6,.my-xl-n6{margin-bottom:-4.5rem!important}.ml-xl-n6,.mx-xl-n6{margin-left:-4.5rem!important}.m-xl-n7{margin:-6rem!important}.mt-xl-n7,.my-xl-n7{margin-top:-6rem!important}.mr-xl-n7,.mx-xl-n7{margin-right:-6rem!important}.mb-xl-n7,.my-xl-n7{margin-bottom:-6rem!important}.ml-xl-n7,.mx-xl-n7{margin-left:-6rem!important}.m-xl-n8{margin:-8rem!important}.mt-xl-n8,.my-xl-n8{margin-top:-8rem!important}.mr-xl-n8,.mx-xl-n8{margin-right:-8rem!important}.mb-xl-n8,.my-xl-n8{margin-bottom:-8rem!important}.ml-xl-n8,.mx-xl-n8{margin-left:-8rem!important}.m-xl-n9{margin:-10rem!important}.mt-xl-n9,.my-xl-n9{margin-top:-10rem!important}.mr-xl-n9,.mx-xl-n9{margin-right:-10rem!important}.mb-xl-n9,.my-xl-n9{margin-bottom:-10rem!important}.ml-xl-n9,.mx-xl-n9{margin-left:-10rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:600!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-primary{color:#004689!important}a.text-primary:focus,a.text-primary:hover{color:#233dd2!important}.text-secondary{color:#f7fafc!important}a.text-secondary:focus,a.text-secondary:hover{color:#bfd7e7!important}.text-success{color:#2dce89!important}a.text-success:focus,a.text-success:hover{color:#1f8f5f!important}.text-info{color:#11cdef!important}a.text-info:focus,a.text-info:hover{color:#0b90a8!important}.text-warning{color:#fb6340!important}a.text-warning:focus,a.text-warning:hover{color:#ea3005!important}.text-danger{color:#f5365c!important}a.text-danger:focus,a.text-danger:hover{color:#d40b33!important}.text-light{color:#adb5bd!important}a.text-light:focus,a.text-light:hover{color:#838f9b!important}.text-dark{color:#212529!important}a.text-dark:focus,a.text-dark:hover{color:#000!important}.text-default{color:#172b4d!important}a.text-default:focus,a.text-default:hover{color:#050a12!important}.text-neutral{color:#fff!important}a.text-neutral:focus,a.text-neutral:hover{color:#d9d9d9!important}.text-darker,a.text-darker:focus,a.text-darker:hover{color:#000!important}.text-body{color:#525f7f!important}.text-muted{color:#8898aa!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{font:0/0 a;color:transparent;border:0;background-color:transparent;text-shadow:none}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{box-shadow:none!important;text-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\"attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#e9ecef}.table .thead-dark th{color:inherit;border-color:#e9ecef}}.alert{font-size:.875rem}.alert-heading{font-size:.9375rem;font-weight:600;margin-top:.15rem}.alert-icon{font-size:1.25rem;display:inline-block;margin-right:1.25rem;vertical-align:middle}.alert-icon i.ni{position:relative;top:2px}.alert-text{display:inline-block;vertical-align:middle}[class*=alert-] .alert-link{color:#fff;border-bottom:1px dotted hsla(0,0%,100%,.5)}.alert-dismissible .close{top:50%;right:1.5rem;padding:0;transform:translateY(-50%);opacity:1}@media (max-width:575.98px){.alert-dismissible .close{top:1rem;right:.5rem}}.alert-dismissible .close>span:not(.sr-only){font-size:1.5rem;color:hsla(0,0%,100%,.6);background-color:transparent}.alert-dismissible .close:focus>span:not(.sr-only),.alert-dismissible .close:hover>span:not(.sr-only){color:#fff;background-color:transparent}.alert-secondary .close>span:not(.sr-only){color:rgba(23,43,77,.6)}.alert-secondary .close:focus>span:not(.sr-only),.alert-secondary .close:hover>span:not(.sr-only){color:#172b4d}.alert-notify{display:flex!important;width:calc(100% - 30px);max-width:600px;padding-right:80px;color:hsla(0,0%,100%,.85);box-shadow:0 3px 10px rgba(0,0,0,.15)}.alert-notify:hover{z-index:1081!important}.alert-notify:not(.alert-info):not(.alert-success):not(.alert-warning):not(.alert-danger){background-color:rgba(0,0,0,.95)}.alert-notify:not(.alert-info):not(.alert-success):not(.alert-warning):not(.alert-danger) .alert-notify-close{color:#ffd600}.alert-notify:not(.alert-info):not(.alert-success):not(.alert-warning):not(.alert-danger) .alert-notify-close:hover{opacity:.8}.alert-notify .alert-icon.ni{position:relative;top:4px}.alert-notify .alert-title{font-size:1rem;font-weight:600;display:block}.alert-notify .close{top:1rem!important;right:1.5rem!important;transform:translateY(0)}.avatar{font-size:1rem;display:inline-flex;width:48px;height:48px;color:#fff;background-color:#adb5bd;align-items:center;justify-content:center}.avatar,.avatar img{border-radius:.375rem}.avatar img{width:100%}.avatar+.avatar-content{display:inline-block;margin-left:.75rem}.avatar-xl{width:74px;height:74px}.avatar-lg{font-size:.875rem;width:58px;height:58px}.avatar-sm{font-size:.875rem;width:36px;height:36px}.avatar-xs{font-size:.75rem;width:24px;height:24px}.avatar-group .avatar{position:relative;z-index:2;border:2px solid #fff}.avatar-group .avatar:hover{z-index:3}.avatar-group .avatar+.avatar{margin-left:-1rem}.badge{text-transform:uppercase}.badge a{color:#fff}.badge-md{padding:.65em 1em}.badge-lg{padding:.85em 1.375em}.badge-inline{margin-right:.625rem}.badge-inline+span{position:relative;top:2px}.badge-inline+span>a{text-decoration:underline}.badge-default{color:#fff}.badge-secondary{color:#212529;background-color:#7d8db6}.btn .badge:not(:first-child){margin-left:.5rem}.btn .badge:not(:last-child){margin-right:.5rem}.badge-circle{font-size:.75rem;font-weight:600;display:inline-flex;width:1.25rem;height:1.25rem;padding:0!important;text-align:center;border-radius:50%;align-items:center;justify-content:center}.badge-circle.badge-md{width:1.5rem;height:1.5rem}.badge-circle.badge-lg{width:2rem;height:2rem}.badge-dot{font-size:.875rem;font-weight:400;padding-right:0;padding-left:0;text-transform:none;background:0 0}.badge-dot strong{color:#32325d}.badge-dot i{display:inline-block;width:.375rem;height:.375rem;margin-right:.375rem;vertical-align:middle;border-radius:50%}.badge-dot.badge-md i{width:.5rem;height:.5rem}.badge-dot.badge-lg i{width:.625rem;height:.625rem}.btn .badge-floating{position:absolute;top:-50%;transform:translateY(50%);border:3px solid}.btn .badge-floating.badge:not(.badge-circle){transform:translate(147%,50%)}.breadcrumb-item{font-size:.875rem}.breadcrumb-dark{background-color:#172b4d}.breadcrumb-dark .breadcrumb-item{font-weight:600}.breadcrumb-dark .breadcrumb-item a{color:#f6f9fc}.breadcrumb-dark .breadcrumb-item a:hover{color:#fff}.breadcrumb-dark .breadcrumb-item+.breadcrumb-item:before{color:#adb5bd}.breadcrumb-dark .breadcrumb-item.active{color:#dee2e6}.breadcrumb-links{margin:0;padding:0;background:0 0}.btn{font-size:.875rem;position:relative;transition:all .15s ease;letter-spacing:.025em;text-transform:none;will-change:transform}.btn:hover{transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.btn:not(:last-child){margin-right:.5rem}.btn i:not(:first-child),.btn svg:not(:first-child){margin-left:.5rem}.btn i:not(:last-child),.btn svg:not(:last-child){margin-right:.5rem}.btn-group .btn,.input-group .btn{margin-right:0;transform:translateY(0)}.btn-group-sm>.btn,.btn-sm{font-size:.75rem}.btn-group-lg>.btn,.btn-lg{font-size:.875rem}[class*=btn-outline-]{border-width:1px}.btn-outline-secondary{color:#4385b1}.btn-inner--icon i:not(.fas):not(.fab){position:relative;top:2px}.btn-link{font-weight:600;box-shadow:none}.btn-link:hover{transform:none;box-shadow:none}.btn-neutral{color:#004689}.btn-facebook{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-facebook,.btn-facebook:hover{color:#fff;border-color:#3b5999;background-color:#3b5999}.btn-facebook.focus,.btn-facebook:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(59,89,153,.5)}.btn-facebook.disabled,.btn-facebook:disabled{color:#fff;border-color:#3b5999;background-color:#3b5999}.btn-facebook:not(:disabled):not(.disabled).active,.btn-facebook:not(:disabled):not(.disabled):active,.show>.btn-facebook.dropdown-toggle{color:#fff;border-color:#3b5999;background-color:#2d4474}.btn-facebook:not(:disabled):not(.disabled).active:focus,.btn-facebook:not(:disabled):not(.disabled):active:focus,.show>.btn-facebook.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(59,89,153,.5)}.btn-twitter{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-twitter,.btn-twitter:hover{color:#fff;border-color:#1da1f2;background-color:#1da1f2}.btn-twitter.focus,.btn-twitter:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(29,161,242,.5)}.btn-twitter.disabled,.btn-twitter:disabled{color:#fff;border-color:#1da1f2;background-color:#1da1f2}.btn-twitter:not(:disabled):not(.disabled).active,.btn-twitter:not(:disabled):not(.disabled):active,.show>.btn-twitter.dropdown-toggle{color:#fff;border-color:#1da1f2;background-color:#0c85d0}.btn-twitter:not(:disabled):not(.disabled).active:focus,.btn-twitter:not(:disabled):not(.disabled):active:focus,.show>.btn-twitter.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(29,161,242,.5)}.btn-google-plus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-google-plus,.btn-google-plus:hover{color:#fff;border-color:#dd4b39;background-color:#dd4b39}.btn-google-plus.focus,.btn-google-plus:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(221,75,57,.5)}.btn-google-plus.disabled,.btn-google-plus:disabled{color:#fff;border-color:#dd4b39;background-color:#dd4b39}.btn-google-plus:not(:disabled):not(.disabled).active,.btn-google-plus:not(:disabled):not(.disabled):active,.show>.btn-google-plus.dropdown-toggle{color:#fff;border-color:#dd4b39;background-color:#c23321}.btn-google-plus:not(:disabled):not(.disabled).active:focus,.btn-google-plus:not(:disabled):not(.disabled):active:focus,.show>.btn-google-plus.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(221,75,57,.5)}.btn-instagram{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-instagram,.btn-instagram:hover{color:#fff;border-color:#e4405f;background-color:#e4405f}.btn-instagram.focus,.btn-instagram:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(228,64,95,.5)}.btn-instagram.disabled,.btn-instagram:disabled{color:#fff;border-color:#e4405f;background-color:#e4405f}.btn-instagram:not(:disabled):not(.disabled).active,.btn-instagram:not(:disabled):not(.disabled):active,.show>.btn-instagram.dropdown-toggle{color:#fff;border-color:#e4405f;background-color:#d31e40}.btn-instagram:not(:disabled):not(.disabled).active:focus,.btn-instagram:not(:disabled):not(.disabled):active:focus,.show>.btn-instagram.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(228,64,95,.5)}.btn-pinterest{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-pinterest,.btn-pinterest:hover{color:#fff;border-color:#bd081c;background-color:#bd081c}.btn-pinterest.focus,.btn-pinterest:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(189,8,28,.5)}.btn-pinterest.disabled,.btn-pinterest:disabled{color:#fff;border-color:#bd081c;background-color:#bd081c}.btn-pinterest:not(:disabled):not(.disabled).active,.btn-pinterest:not(:disabled):not(.disabled):active,.show>.btn-pinterest.dropdown-toggle{color:#fff;border-color:#bd081c;background-color:#8c0615}.btn-pinterest:not(:disabled):not(.disabled).active:focus,.btn-pinterest:not(:disabled):not(.disabled):active:focus,.show>.btn-pinterest.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(189,8,28,.5)}.btn-youtube{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-youtube,.btn-youtube:hover{color:#fff;border-color:#cd201f;background-color:#cd201f}.btn-youtube.focus,.btn-youtube:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(205,32,31,.5)}.btn-youtube.disabled,.btn-youtube:disabled{color:#fff;border-color:#cd201f;background-color:#cd201f}.btn-youtube:not(:disabled):not(.disabled).active,.btn-youtube:not(:disabled):not(.disabled):active,.show>.btn-youtube.dropdown-toggle{color:#fff;border-color:#cd201f;background-color:#a11918}.btn-youtube:not(:disabled):not(.disabled).active:focus,.btn-youtube:not(:disabled):not(.disabled):active:focus,.show>.btn-youtube.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(205,32,31,.5)}.btn-slack{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-slack,.btn-slack:hover{color:#fff;border-color:#3aaf85;background-color:#3aaf85}.btn-slack.focus,.btn-slack:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(58,175,133,.5)}.btn-slack.disabled,.btn-slack:disabled{color:#fff;border-color:#3aaf85;background-color:#3aaf85}.btn-slack:not(:disabled):not(.disabled).active,.btn-slack:not(:disabled):not(.disabled):active,.show>.btn-slack.dropdown-toggle{color:#fff;border-color:#3aaf85;background-color:#2d8968}.btn-slack:not(:disabled):not(.disabled).active:focus,.btn-slack:not(:disabled):not(.disabled):active:focus,.show>.btn-slack.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(58,175,133,.5)}.btn-dribbble{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-dribbble,.btn-dribbble:hover{color:#fff;border-color:#ea4c89;background-color:#ea4c89}.btn-dribbble.focus,.btn-dribbble:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(234,76,137,.5)}.btn-dribbble.disabled,.btn-dribbble:disabled{color:#fff;border-color:#ea4c89;background-color:#ea4c89}.btn-dribbble:not(:disabled):not(.disabled).active,.btn-dribbble:not(:disabled):not(.disabled):active,.show>.btn-dribbble.dropdown-toggle{color:#fff;border-color:#ea4c89;background-color:#e51e6b}.btn-dribbble:not(:disabled):not(.disabled).active:focus,.btn-dribbble:not(:disabled):not(.disabled):active:focus,.show>.btn-dribbble.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(234,76,137,.5)}.btn-github{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-github,.btn-github:hover{color:#fff;border-color:#222;background-color:#222}.btn-github.focus,.btn-github:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(34,34,34,.5)}.btn-github.disabled,.btn-github:disabled{color:#fff;border-color:#222;background-color:#222}.btn-github:not(:disabled):not(.disabled).active,.btn-github:not(:disabled):not(.disabled):active,.show>.btn-github.dropdown-toggle{color:#fff;border-color:#222;background-color:#090909}.btn-github:not(:disabled):not(.disabled).active:focus,.btn-github:not(:disabled):not(.disabled):active:focus,.show>.btn-github.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(34,34,34,.5)}.btn-vimeo{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.btn-vimeo,.btn-vimeo:hover{color:#fff;border-color:#04a0f0;background-color:#04a0f0}.btn-vimeo.focus,.btn-vimeo:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(4,160,240,.5)}.btn-vimeo.disabled,.btn-vimeo:disabled{color:#fff;border-color:#04a0f0;background-color:#04a0f0}.btn-vimeo:not(:disabled):not(.disabled).active,.btn-vimeo:not(:disabled):not(.disabled):active,.show>.btn-vimeo.dropdown-toggle{color:#fff;border-color:#04a0f0;background-color:#037fbe}.btn-vimeo:not(:disabled):not(.disabled).active:focus,.btn-vimeo:not(:disabled):not(.disabled):active:focus,.show>.btn-vimeo.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(4,160,240,.5)}.btn-group .btn{box-shadow:none}[data-toggle=buttons]:not(.btn-group-colors)>.btn{margin:0;cursor:pointer;border:0;background-color:#f6f9fc;box-shadow:none}[data-toggle=buttons]:not(.btn-group-colors)>.btn:not(.active){color:#525f7f}[data-toggle=buttons]:not(.btn-group-colors)>.btn.active{color:#fff;background-color:#004689}.btn-group-colors>.btn{position:relative;width:30px;height:30px;margin-right:.5rem;margin-bottom:.25rem;padding:0;border-radius:50%!important;box-shadow:none}.btn-group-colors>.btn:not([class*=bg-]){border-color:#f6f9fc!important}.btn-group-colors>.btn:before{font-family:NucleoIcons,sans-serif;font-size:14px;line-height:28px;position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";transition:transform .2s,opacity .2s;transform:scale(0);opacity:0;color:#fff}@media (prefers-reduced-motion:reduce){.btn-group-colors>.btn:before{transition:none}}.btn-group-colors>.btn.btn:not([class*=bg-]){border:1px solid #cfd5db}.btn-group-colors>.btn.btn:not([class*=bg-]):before{color:#525f7f}.btn-group-colors>.btn.active:before{transform:scale(1);opacity:1}.btn-icon .btn-inner--icon img{width:20px}.btn-icon .btn-inner--text:not(:first-child){margin-left:.75em}.btn-icon .btn-inner--text:not(:last-child){margin-right:.75em}.btn-icon-only{width:2.375rem;height:2.375rem;padding:0}a.btn-icon-only{line-height:2.5}.btn-group-sm>.btn-icon-only.btn,.btn-icon-only.btn-sm{width:2rem;height:2rem}.btn-icon-clipboard{font-size:1rem;padding:1.5rem;color:#32325d;border-radius:.375rem;background-color:#f6f9fc}.btn-icon-clipboard i{color:#004689}.card{margin-bottom:30px;border:0;box-shadow:0 0 2rem 0 rgba(136,152,170,.15)}.card-translucent{background-color:rgba(18,91,152,.08)}.card-deck .card{margin-bottom:30px}.card.shadow{border:0!important}@media (min-width:576px){.card-columns{-moz-column-count:1;column-count:1}}@media (min-width:768px){.card-columns{-moz-column-count:2;column-count:2}}@media (min-width:1200px){.card-columns{-moz-column-count:3;column-count:3;grid-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem}}.card-lift--hover:hover{transition:all .15s ease;transform:translateY(-20px)}@media (prefers-reduced-motion:reduce){.card-lift--hover:hover{transition:none}}.card-blockquote{position:relative;padding:2rem}.card-blockquote .svg-bg{position:absolute;top:-94px;left:0;display:block;width:100%;height:95px}.card-serial-number{font-size:1.625rem;display:flex;justify-content:space-between}.card-serial-number>div:not(:last-child){display:flex;flex:1 1 auto}.card-serial-number>div:not(:last-child):after{position:relative;left:-2px;content:\"-\";text-align:center;flex:1 1 auto}@media (max-width:575.98px){.card-serial-number{font-size:1.0625rem}}.card-pricing .card-header{padding-top:1.25rem;padding-bottom:1.25rem}.card-pricing .list-unstyled li{padding:.5rem 0;color:#8898aa}.card-pricing.popular{z-index:1;border:3px solid #004689!important}@media (min-width:768px){.card-pricing.zoom-in{z-index:1;transform:scale(1.1)}}.card-profile-image{position:relative}.card-profile-image img{position:absolute;left:50%;max-width:140px;transition:all .15s ease;transform:translate(-50%,-50%) scale(1);border:3px solid #fff;border-radius:.375rem}.card-profile-image img:hover{transform:translate(-50%,-50%) scale(1.03)}.card-profile-stats{padding:1rem 0}.card-profile-stats>div{margin-right:1rem;padding:.875rem;text-align:center}.card-profile-stats>div:last-child{margin-right:0}.card-profile-stats>div .heading{font-size:1.1rem;font-weight:700;display:block}.card-profile-stats>div .description{font-size:.875rem;color:#adb5bd}.card-profile-actions{padding:.875rem}.card-stats .card-body{padding:1rem 1.5rem}.card-stats .card-status-bullet{position:absolute;top:0;right:0;transform:translate(50%,-50%)}.chart{position:relative;height:350px}.chart-sm{height:230px}.chart-legend{font-size:.875rem;display:flex;margin-top:2.5rem;text-align:center;color:#8898aa;justify-content:center}.chart-legend-item{display:inline-flex;align-items:center}.chart-legend-item+.chart-legend-item{margin-left:1rem}.chart-legend-indicator{display:inline-block;width:.5rem;height:.5rem;margin-right:.375rem;border-radius:50%}#chart-tooltip{z-index:0}#chart-tooltip .arrow{top:100%;left:50%;transform:translateX(-50%) translateX(-.5rem)}.chart-info-overlay{position:absolute;z-index:1;top:0;left:5%;max-width:350px;padding:20px}.close{transition:all .15s ease}.close>span:not(.sr-only){font-size:1.25rem;line-height:17px;display:block;width:1.25rem;height:1.25rem;transition:all .15s ease;color:rgba(0,0,0,.6);border-radius:50%;background-color:transparent}.close:focus,.close:hover{color:rgba(0,0,0,.9);outline:0}.close:focus,.close:focus span:not(.sr-only),.close:hover,.close:hover span:not(.sr-only){background-color:transparent}.close-dark>span:not(.sr-only){color:hsla(0,0%,100%,.8)}.close-dark:focus>span:not(.sr-only),.close-dark:hover>span:not(.sr-only){color:#fff}.accordion .card-header{position:relative;cursor:pointer}.accordion .card-header:after{font:normal normal normal 14px/1 NucleoIcons;line-height:0;position:absolute;top:50%;right:1.5rem;content:\"\\ea0f\";transition:all .15s cubic-bezier(.68,-.55,.265,1.55);transform:translateY(-50%)}@media (prefers-reduced-motion:reduce){.accordion .card-header:after{transition:none}}.accordion .card-header[aria-expanded=false]:after{content:\"\\ea0f\"}.accordion .card-header[aria-expanded=true]:after{transform:rotate(180deg)}.accordion .card-header[aria-expanded=true] .heading{color:#004689}.main-content{position:relative}.main-content .navbar-top{padding-right:0!important;padding-left:0!important}@media (min-width:768px){.main-content .container-fluid,.main-content .container-lg,.main-content .container-md,.main-content .container-sm,.main-content .container-xl{padding-right:30px!important;padding-left:30px!important}}.custom-control-label:before{top:.25rem;left:-1.75rem;transition:all .15s cubic-bezier(.68,-.55,.265,1.55);border:1px solid #dee2e6}@media (prefers-reduced-motion:reduce){.custom-control-label:before{transition:none}}.custom-control-label:after{top:.25rem;left:-1.75rem}.custom-control-label span{position:relative;top:2px}.custom-control-label{margin-bottom:0}.custom-control-alternative .custom-control-label:before{border:0;box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.custom-control-alternative .custom-control-input:checked~.custom-control-label:before{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.custom-control-alternative .custom-control-input:active~.custom-control-label:before,.custom-control-alternative .custom-control-input:focus~.custom-control-label:before{box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.custom-checkbox .custom-control-input~.custom-control-label{font-size:.875rem;height:1rem;cursor:pointer}.custom-checkbox .custom-control-input:checked~.custom-control-label:before{border-color:#004689}.custom-checkbox .custom-control-input:disabled~.custom-control-label:before{border-color:#e9ecef}.custom-checkbox .custom-control-input:disabled:checked:before{border-color:rgba(94,114,228,.5)}.custom-checkbox-primary .custom-control-input:checked~.custom-control-label:before{border-color:#004689;background-color:#004689}.custom-checkbox-primary .custom-control-input:checked~.custom-control-label:after{background-image:#004689}.custom-checkbox-secondary .custom-control-input:checked~.custom-control-label:before{border-color:#f7fafc;background-color:#f7fafc}.custom-checkbox-secondary .custom-control-input:checked~.custom-control-label:after{background-image:#f7fafc}.custom-checkbox-success .custom-control-input:checked~.custom-control-label:before{border-color:#2dce89;background-color:#2dce89}.custom-checkbox-success .custom-control-input:checked~.custom-control-label:after{background-image:#2dce89}.custom-checkbox-info .custom-control-input:checked~.custom-control-label:before{border-color:#11cdef;background-color:#11cdef}.custom-checkbox-info .custom-control-input:checked~.custom-control-label:after{background-image:#11cdef}.custom-checkbox-warning .custom-control-input:checked~.custom-control-label:before{border-color:#fb6340;background-color:#fb6340}.custom-checkbox-warning .custom-control-input:checked~.custom-control-label:after{background-image:#fb6340}.custom-checkbox-danger .custom-control-input:checked~.custom-control-label:before{border-color:#f5365c;background-color:#f5365c}.custom-checkbox-danger .custom-control-input:checked~.custom-control-label:after{background-image:#f5365c}.custom-checkbox-light .custom-control-input:checked~.custom-control-label:before{border-color:#adb5bd;background-color:#adb5bd}.custom-checkbox-light .custom-control-input:checked~.custom-control-label:after{background-image:#adb5bd}.custom-checkbox-dark .custom-control-input:checked~.custom-control-label:before{border-color:#212529;background-color:#212529}.custom-checkbox-dark .custom-control-input:checked~.custom-control-label:after{background-image:#212529}.custom-checkbox-default .custom-control-input:checked~.custom-control-label:before{border-color:#172b4d;background-color:#172b4d}.custom-checkbox-default .custom-control-input:checked~.custom-control-label:after{background-image:#172b4d}.custom-checkbox-white .custom-control-input:checked~.custom-control-label:before{border-color:#fff;background-color:#fff}.custom-checkbox-white .custom-control-input:checked~.custom-control-label:after{background-image:#fff}.custom-checkbox-neutral .custom-control-input:checked~.custom-control-label:before{border-color:#fff;background-color:#fff}.custom-checkbox-neutral .custom-control-input:checked~.custom-control-label:after{background-image:#fff}.custom-checkbox-darker .custom-control-input:checked~.custom-control-label:before{border-color:#000;background-color:#000}.custom-checkbox-darker .custom-control-input:checked~.custom-control-label:after{background-image:#000}.custom-radio .custom-control-input~.custom-control-label{font-size:.875rem;height:1rem;cursor:pointer}.custom-radio .custom-control-input:checked~.custom-control-label:before{border-color:#004689}.custom-radio .custom-control-input:disabled~.custom-control-label:before{border-color:#e9ecef}.custom-radio .custom-control-input:disabled:checked:before{border-color:rgba(94,114,228,.5)}.custom-toggle{position:relative;display:inherit;display:inline-block;width:52px;height:1.5rem;margin:0}.custom-toggle input{display:none}.custom-toggle input:checked+.custom-toggle-slider{border:1px solid #004689}.custom-toggle input:checked+.custom-toggle-slider:before{transform:translateX(28px);background:#004689}.custom-toggle input:disabled+.custom-toggle-slider,.custom-toggle input:disabled:checked+.custom-toggle-slider{border:1px solid #e9ecef}.custom-toggle input:disabled:checked+.custom-toggle-slider:before{background-color:#8a98eb}.custom-toggle-slider{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;border:1px solid #ced4da;border-radius:34px!important;background-color:transparent}.custom-toggle-slider:before{position:absolute;bottom:2px;left:2px;width:18px;height:18px;content:\"\";transition:all .15s cubic-bezier(.68,-.55,.265,1.55);border-radius:50%!important;background-color:#e9ecef}.custom-toggle-wrapper .custom-toggle+.custom-toggle{margin-left:1rem!important}.custom-toggle input:checked+.custom-toggle-slider:after{right:auto;left:0;content:attr(data-label-on);color:#004689}.custom-toggle-slider:after{font-family:inherit;font-size:.75rem;font-weight:600;line-height:24px;position:absolute;top:0;right:0;display:block;overflow:hidden;min-width:1.66667rem;margin:0 .21667rem;content:attr(data-label-off);transition:all .15s ease;text-align:center;color:#ced4da}@media (prefers-reduced-motion:reduce){.custom-toggle-slider:after{transition:none}}.custom-toggle-primary input:checked+.custom-toggle-slider{border-color:#004689}.custom-toggle-primary input:checked+.custom-toggle-slider:before{background:#004689}.custom-toggle-primary input:checked+.custom-toggle-slider:after{color:#004689}.custom-toggle-primary input:disabled:checked+.custom-toggle-slider{border-color:#004689}.custom-toggle-primary input:disabled:checked+.custom-toggle-slider:before{background-color:#8a98eb}.custom-toggle-secondary input:checked+.custom-toggle-slider{border-color:#f7fafc}.custom-toggle-secondary input:checked+.custom-toggle-slider:before{background:#f7fafc}.custom-toggle-secondary input:checked+.custom-toggle-slider:after{color:#f7fafc}.custom-toggle-secondary input:disabled:checked+.custom-toggle-slider{border-color:#f7fafc}.custom-toggle-secondary input:disabled:checked+.custom-toggle-slider:before{background-color:#fff}.custom-toggle-success input:checked+.custom-toggle-slider{border-color:#2dce89}.custom-toggle-success input:checked+.custom-toggle-slider:before{background:#2dce89}.custom-toggle-success input:checked+.custom-toggle-slider:after{color:#2dce89}.custom-toggle-success input:disabled:checked+.custom-toggle-slider{border-color:#2dce89}.custom-toggle-success input:disabled:checked+.custom-toggle-slider:before{background-color:#54daa1}.custom-toggle-info input:checked+.custom-toggle-slider{border-color:#11cdef}.custom-toggle-info input:checked+.custom-toggle-slider:before{background:#11cdef}.custom-toggle-info input:checked+.custom-toggle-slider:after{color:#11cdef}.custom-toggle-info input:disabled:checked+.custom-toggle-slider{border-color:#11cdef}.custom-toggle-info input:disabled:checked+.custom-toggle-slider:before{background-color:#41d7f2}.custom-toggle-warning input:checked+.custom-toggle-slider{border-color:#fb6340}.custom-toggle-warning input:checked+.custom-toggle-slider:before{background:#fb6340}.custom-toggle-warning input:checked+.custom-toggle-slider:after{color:#fb6340}.custom-toggle-warning input:disabled:checked+.custom-toggle-slider{border-color:#fb6340}.custom-toggle-warning input:disabled:checked+.custom-toggle-slider:before{background-color:#fc8c72}.custom-toggle-danger input:checked+.custom-toggle-slider{border-color:#f5365c}.custom-toggle-danger input:checked+.custom-toggle-slider:before{background:#f5365c}.custom-toggle-danger input:checked+.custom-toggle-slider:after{color:#f5365c}.custom-toggle-danger input:disabled:checked+.custom-toggle-slider{border-color:#f5365c}.custom-toggle-danger input:disabled:checked+.custom-toggle-slider:before{background-color:#f76783}.custom-toggle-light input:checked+.custom-toggle-slider{border-color:#adb5bd}.custom-toggle-light input:checked+.custom-toggle-slider:before{background:#adb5bd}.custom-toggle-light input:checked+.custom-toggle-slider:after{color:#adb5bd}.custom-toggle-light input:disabled:checked+.custom-toggle-slider{border-color:#adb5bd}.custom-toggle-light input:disabled:checked+.custom-toggle-slider:before{background-color:#c9cfd4}.custom-toggle-dark input:checked+.custom-toggle-slider{border-color:#212529}.custom-toggle-dark input:checked+.custom-toggle-slider:before{background:#212529}.custom-toggle-dark input:checked+.custom-toggle-slider:after{color:#212529}.custom-toggle-dark input:disabled:checked+.custom-toggle-slider{border-color:#212529}.custom-toggle-dark input:disabled:checked+.custom-toggle-slider:before{background-color:#383f45}.custom-toggle-default input:checked+.custom-toggle-slider{border-color:#172b4d}.custom-toggle-default input:checked+.custom-toggle-slider:before{background:#172b4d}.custom-toggle-default input:checked+.custom-toggle-slider:after{color:#172b4d}.custom-toggle-default input:disabled:checked+.custom-toggle-slider{border-color:#172b4d}.custom-toggle-default input:disabled:checked+.custom-toggle-slider:before{background-color:#234174}.custom-toggle-white input:checked+.custom-toggle-slider{border-color:#fff}.custom-toggle-white input:checked+.custom-toggle-slider:before{background:#fff}.custom-toggle-white input:checked+.custom-toggle-slider:after{color:#fff}.custom-toggle-white input:disabled:checked+.custom-toggle-slider{border-color:#fff}.custom-toggle-white input:disabled:checked+.custom-toggle-slider:before{background-color:#fff}.custom-toggle-neutral input:checked+.custom-toggle-slider{border-color:#fff}.custom-toggle-neutral input:checked+.custom-toggle-slider:before{background:#fff}.custom-toggle-neutral input:checked+.custom-toggle-slider:after{color:#fff}.custom-toggle-neutral input:disabled:checked+.custom-toggle-slider{border-color:#fff}.custom-toggle-neutral input:disabled:checked+.custom-toggle-slider:before{background-color:#fff}.custom-toggle-darker input:checked+.custom-toggle-slider{border-color:#000}.custom-toggle-darker input:checked+.custom-toggle-slider:before{background:#000}.custom-toggle-darker input:checked+.custom-toggle-slider:after{color:#000}.custom-toggle-darker input:disabled:checked+.custom-toggle-slider{border-color:#000}.custom-toggle-darker input:disabled:checked+.custom-toggle-slider:before{background-color:#1a1a1a}.dropdown,.dropleft,.dropright,.dropup{display:inline-block}.dropdown-menu{min-width:12rem}.dropdown-menu .dropdown-item{font-size:.875rem;padding:.5rem 1rem}.dropdown-menu .dropdown-item>i,.dropdown-menu .dropdown-item>svg{font-size:1rem;margin-right:1rem;vertical-align:-17%}.dropdown-menu .dropdown-item img{margin-right:.5rem}.dropdown-header{font-size:.625rem;font-weight:700;padding-right:1rem;padding-left:1rem;text-transform:uppercase}.dropdown-menu a.media>div:first-child{line-height:1}.dropdown-menu a.media p{color:#8898aa}.dropdown-menu a.media:hover .heading,.dropdown-menu a.media:hover p{color:#172b4d!important}.dropdown-menu-dark .h1,.dropdown-menu-dark .h2,.dropdown-menu-dark .h3,.dropdown-menu-dark .h4,.dropdown-menu-dark .h5,.dropdown-menu-dark .h6,.dropdown-menu-dark a{color:#fff}.dropdown-menu-sm{min-width:100px;border:.4375rem}.dropdown-menu-lg{min-width:320px;border-radius:.4375rem}.dropdown-menu-xl{min-width:420px;border-radius:.4375rem}.footer{padding:30px 0;background:#f8f9fe}.footer .col-footer .heading{font-size:.875rem;font-weight:600;margin-bottom:1rem;letter-spacing:0;text-transform:uppercase;color:#8898aa}.footer .footer-link,.footer .nav .nav-item .nav-link{color:#8898aa!important}.footer .footer-link:hover,.footer .nav .nav-item .nav-link:hover{color:#525f7f!important}.footer .list-unstyled li a{font-size:.85rem;display:inline-block;padding:.125rem 0;color:#8898aa}.footer .list-unstyled li a:hover{color:#525f7f}.footer .copyright{font-size:.875rem}.footer-dark .col-footer .heading{color:#fff}.nav-footer .nav-link{font-size:.875rem}.nav-footer .nav-item:last-child .nav-link{padding-right:0}.footer.has-cards{position:relative;overflow:hidden;margin-top:-420px;padding-top:500px;pointer-events:none;background:0 0}.footer.has-cards:before{position:absolute;top:600px;right:0;left:0;height:2000px;content:\"\";transform:skew(0,-8deg);background:#f7fafc}.footer.has-cards .container{position:relative;pointer-events:auto}.footer-auto-bottom{position:absolute;bottom:0;width:100%}.form-control-label{font-size:.875rem;font-weight:600;color:#525f7f}.form-control{font-size:.875rem;height:calc(1.5em + 1.25rem + 5px);transition:all .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control:focus::-moz-placeholder{color:#adb5bd}.form-control:focus:-ms-input-placeholder{color:#adb5bd}.form-control:focus::placeholder{color:#adb5bd}.form-control-lg{height:calc(2.25em + 1.25rem + 5px)}.form-control-sm{height:calc(.45em + 1.25rem + 5px)}.form-control-flush{padding:0}.form-control-flush,.form-control-flush:focus{border-width:0;background-color:transparent;box-shadow:none}textarea[resize=none]{resize:none!important}textarea[resize=both]{resize:both!important}textarea[resize=vertical]{resize:vertical!important}textarea[resize=horizontal]{resize:horizontal!important}.form-control-muted{border-color:#f7fafe;background-color:#f7fafe;box-shadow:none}.form-control-muted:focus{background-color:#fcfdff}.form-control-alternative{transition:box-shadow .15s ease;border:0;box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.form-control-alternative:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.form-control-lg,.input-group-lg .form-control,.input-group-text{font-size:1rem!important}.custom-control{padding-left:1.75rem}.input-group{transition:all .15s ease-in-out;border-radius:.25rem;box-shadow:0 3px 2px rgba(233,236,239,.05)}@media (prefers-reduced-motion:reduce){.input-group{transition:none}}.input-group .form-control,.input-group .form-control:focus{box-shadow:none}.input-group-text{transition:all .15s cubic-bezier(.68,-.55,.265,1.55)}@media (prefers-reduced-motion:reduce){.input-group-text{transition:none}}.input-group-text i{font-size:.875rem}.input-group-text .custom-control{line-height:1}.input-group-prepend .input-group-text{border-right:0}.input-group-append .input-group-text{border-left:0}.input-group-merge .form-control:not(:first-child){padding-left:0;border-left:0}.input-group-merge .form-control:not(:last-child){padding-right:0;border-right:0}.input-group-alternative{transition:box-shadow .15s ease;border:0;box-shadow:0 1px 3px rgba(50,50,93,.15),0 1px 0 rgba(0,0,0,.02)}.input-group-alternative .form-control,.input-group-alternative .input-group-text{border:0;box-shadow:none}.focused .input-group-alternative{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)!important}.input-group-flush{box-shadow:none}.input-group-flush>.form-control{padding:0;border-width:0;background-color:transparent}.input-group-flush>.input-group-append>.input-group-text,.input-group-flush>.input-group-prepend>.input-group-text{padding:0 1rem 0 0;border-width:0;background-color:transparent}.focused .input-group{box-shadow:0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)}.focused .input-group-text{color:#8898aa;border-color:#004689;background-color:#fff}.focused .form-control{border-color:#004689}.focused .input-group-flush{box-shadow:none}.form-primary .form-control{color:#fff;border-color:#324cdd;background-color:rgba(50,76,221,.5)}.form-primary .form-control:focus{border:1px solid #2a44db;background-color:rgba(42,68,219,.7)}.form-primary .form-control::-moz-placeholder{color:hsla(0,0%,100%,.8)}.form-primary .form-control:-ms-input-placeholder{color:hsla(0,0%,100%,.8)}.form-primary .form-control::placeholder{color:hsla(0,0%,100%,.8)}.form-primary .input-group-text{color:#fff;border-color:#324cdd;background-color:rgba(50,76,221,.5)}.form-primary .focused .input-group-text{color:#fff;border-color:#2a44db;background-color:rgba(42,68,219,.7)}.has-danger,.has-success{position:relative}.has-danger:after,.has-success:after{font-family:NucleoIcons;font-size:9px;line-height:19px;position:absolute;top:50%;right:15px;display:none;width:19px;height:19px;transform:translateY(-50%);text-align:center;opacity:1;border-radius:50%}.has-danger .input-group-prepend .input-group-text,.has-success .input-group-prepend .input-group-text{border-color:red}.has-success:after{content:\"\\ea26\";color:#1d8357;background-color:#69deac}.has-success .form-control{background-color:#fff}.has-success .form-control::-moz-placeholder{color:#2dce89}.has-success .form-control:-ms-input-placeholder{color:#2dce89}.has-success .form-control::placeholder{color:#2dce89}.has-danger:after{content:\"\\ea53\";color:#db2d05;background-color:#fda08b}.has-danger .form-control{background-color:#fff}.has-danger .form-control::-moz-placeholder{color:#fb6340}.has-danger .form-control:-ms-input-placeholder{color:#fb6340}.has-danger .form-control::placeholder{color:#fb6340}.row-example>.col span,.row-example>[class^=col-] span{font-size:.875rem;display:block;margin:1rem 0;padding:.75rem;color:#393f49;border-radius:.25rem;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 4px 16px rgba(0,0,0,.1)}.no-gutters>.col span,.no-gutters>[class^=col-] span{border-radius:0}.header{position:relative}.icon{width:3rem;height:3rem}.icon i,.icon svg{font-size:2.25rem}.icon+.icon-text{width:calc(100% - 3rem - 1);padding-left:1rem}.icon-xl{width:5rem;height:5rem}.icon-xl i,.icon-xl svg{font-size:4.25rem}.icon-xl+.icon-text{width:calc(100% - 5rem - 1)}.icon-lg{width:4rem;height:4rem}.icon-lg i,.icon-lg svg{font-size:3.25rem}.icon-sm{width:2rem;height:2rem}.icon-sm i,.icon-sm svg{font-size:1.25rem}.icon-xs{width:1.25rem;height:1.25rem}.icon-xs i,.icon-xs svg{font-size:.5rem}.icon-actions>a{font-size:.875rem;display:inline-block;margin-right:.75rem;color:#8898aa}.icon-actions>a:last-of-type{margin-right:0}.icon-actions>a span{font-weight:600;margin-left:.1875rem;color:#8898aa}.icon-actions>a:hover span{color:#6a7e95}.icon-actions>a,.icon-actions>a.active,.icon-actions>a:hover{color:#32325d}.icon-actions>.favorite.active,.icon-actions>.favorite:hover{color:#ffd600}.icon-actions>.love.active,.icon-actions>.love:hover{color:#f5365c}.icon-actions>.like.active,.icon-actions>.like:hover{color:#004689}.icon-actions-lg a{font-size:1.25rem;margin-right:.875rem}.icon-shape{display:inline-flex;padding:12px;text-align:center;border-radius:50%;align-items:center;justify-content:center}.icon-shape i,.icon-shape svg{font-size:1.25rem}.icon-shape.icon-lg i,.icon-shape.icon-lg svg{font-size:1.625rem}.icon-shape.icon-sm i,.icon-shape.icon-sm svg{font-size:.875rem}.icon-shape.icon-xs i,.icon-shape.icon-xs svg{font-size:.6rem}.icon-shape svg{width:30px;height:30px}.icon-shape-primary{color:#2643e9;background-color:rgba(138,152,235,.5)}.icon-shape-secondary{color:#cfe3f1;background-color:hsla(0,0%,100%,.5)}.icon-shape-success{color:#1aae6f;background-color:rgba(84,218,161,.5)}.icon-shape-info{color:#03acca;background-color:rgba(65,215,242,.5)}.icon-shape-warning{color:#ff3709;background-color:rgba(252,140,114,.5)}.icon-shape-danger{color:#f80031;background-color:rgba(247,103,131,.5)}.icon-shape-light{color:#879cb0;background-color:rgba(201,207,212,.5)}.icon-shape-dark{color:#090c0e;background-color:rgba(56,63,69,.5)}.icon-shape-default{color:#091428;background-color:rgba(35,65,116,.5)}.icon-shape-neutral,.icon-shape-white{color:#e8e3e3;background-color:hsla(0,0%,100%,.5)}.icon-shape-darker{color:#000;background-color:rgba(26,26,26,.5)}.list-group-space .list-group-item{margin-bottom:1.5rem;border-radius:.375rem}.list-group-img{width:3rem;height:3rem;margin:-.1rem 1.2rem 0 -.2rem;vertical-align:top;border-radius:50%}.list-group-content{min-width:0;flex:1 1}.list-group-content>p{line-height:1.5;margin:.2rem 0 0;color:#adb5bd}.list-group-heading{font-size:1rem;color:#32325d}.list-group-heading>small{font-weight:500;float:right;color:#adb5bd}.checklist-item{position:relative;display:flex;padding-left:.75rem;justify-content:space-between;align-items:center}.checklist-item:before{position:absolute;top:0;left:0;width:3px;height:100%;content:\"\";border-radius:8px;background-color:#004689}.checklist-item-checked .checklist-info *{text-decoration:line-through}.checklist-item-primary:before{background-color:#004689}.checklist-item-secondary:before{background-color:#f7fafc}.checklist-item-success:before{background-color:#2dce89}.checklist-item-info:before{background-color:#11cdef}.checklist-item-warning:before{background-color:#fb6340}.checklist-item-danger:before{background-color:#f5365c}.checklist-item-light:before{background-color:#adb5bd}.checklist-item-dark:before{background-color:#212529}.checklist-item-default:before{background-color:#172b4d}.checklist-item-neutral:before,.checklist-item-white:before{background-color:#fff}.checklist-item-darker:before{background-color:#000}.map-canvas{position:relative;width:100%;height:500px;border-radius:.375rem}.mask{position:absolute;top:0;left:0;width:100%;height:100%;transition:all .15s ease}@media (prefers-reduced-motion:reduce){.mask{transition:none}}.backdrop{position:fixed;z-index:1040;top:0;left:0;width:100%;height:100%;cursor:pointer}.backdrop-dark{background:rgba(0,0,0,.3)}.backdrop-light{background:hsla(0,0%,100%,.3)}.media-comment{margin-top:2rem}.media-comment-avatar{position:relative;z-index:1;margin-top:-1rem;margin-right:-2rem;transition:all .15s ease;border:4px solid #fff}@media (prefers-reduced-motion:reduce){.media-comment-avatar{transition:none}}.media-comment-text{position:relative;padding:1rem 1.25rem 1rem 2.5rem;border-radius:.4375rem;border-top-left-radius:0;background-color:#f6f9fc}.media-comment:hover .media-comment-avatar{transform:scale(1.1)}.modal-title{font-size:1.0625rem}.modal-fluid .modal-dialog{margin-top:0;margin-bottom:0}.modal-fluid .modal-content{border-radius:0}.modal-primary .modal-title{color:#fff}.modal-primary .modal-footer,.modal-primary .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-primary .modal-content{color:#fff;background-color:#004689}.modal-primary .close>span:not(.sr-only),.modal-primary .modal-content .heading{color:#fff}.modal-secondary .modal-title{color:#212529}.modal-secondary .modal-footer,.modal-secondary .modal-header{border-color:rgba(33,37,41,.075)}.modal-secondary .modal-content{color:#212529;background-color:#f7fafc}.modal-secondary .modal-content .heading{color:#212529}.modal-secondary .close>span:not(.sr-only),.modal-success .modal-title{color:#fff}.modal-success .modal-footer,.modal-success .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-success .modal-content{color:#fff;background-color:#2dce89}.modal-info .modal-title,.modal-success .close>span:not(.sr-only),.modal-success .modal-content .heading{color:#fff}.modal-info .modal-footer,.modal-info .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-info .modal-content{color:#fff;background-color:#11cdef}.modal-info .close>span:not(.sr-only),.modal-info .modal-content .heading,.modal-warning .modal-title{color:#fff}.modal-warning .modal-footer,.modal-warning .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-warning .modal-content{color:#fff;background-color:#fb6340}.modal-danger .modal-title,.modal-warning .close>span:not(.sr-only),.modal-warning .modal-content .heading{color:#fff}.modal-danger .modal-footer,.modal-danger .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-danger .modal-content{color:#fff;background-color:#f5365c}.modal-danger .close>span:not(.sr-only),.modal-danger .modal-content .heading,.modal-light .modal-title{color:#fff}.modal-light .modal-footer,.modal-light .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-light .modal-content{color:#fff;background-color:#adb5bd}.modal-dark .modal-title,.modal-light .close>span:not(.sr-only),.modal-light .modal-content .heading{color:#fff}.modal-dark .modal-footer,.modal-dark .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-dark .modal-content{color:#fff;background-color:#212529}.modal-dark .close>span:not(.sr-only),.modal-dark .modal-content .heading,.modal-default .modal-title{color:#fff}.modal-default .modal-footer,.modal-default .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-default .modal-content{color:#fff;background-color:#172b4d}.modal-default .close>span:not(.sr-only),.modal-default .modal-content .heading{color:#fff}.modal-white .modal-title{color:#212529}.modal-white .modal-footer,.modal-white .modal-header{border-color:rgba(33,37,41,.075)}.modal-white .modal-content{color:#212529;background-color:#fff}.modal-white .modal-content .heading{color:#212529}.modal-white .close>span:not(.sr-only){color:#fff}.modal-neutral .modal-title{color:#212529}.modal-neutral .modal-footer,.modal-neutral .modal-header{border-color:rgba(33,37,41,.075)}.modal-neutral .modal-content{color:#212529;background-color:#fff}.modal-neutral .modal-content .heading{color:#212529}.modal-darker .modal-title,.modal-neutral .close>span:not(.sr-only){color:#fff}.modal-darker .modal-footer,.modal-darker .modal-header{border-color:hsla(0,0%,100%,.075)}.modal-darker .modal-content{color:#fff;background-color:#000}.modal-darker .close>span:not(.sr-only),.modal-darker .modal-content .heading{color:#fff}.navbar-horizontal .navbar-nav .nav-link{font-size:.875rem;font-weight:500;letter-spacing:0;text-transform:normal}.navbar-horizontal .navbar-nav .nav-link .nav-link-inner--text{margin-left:.25rem}.navbar-horizontal .navbar-brand{font-size:.875rem;font-weight:600;letter-spacing:.05px;text-transform:uppercase}.navbar-horizontal .navbar-brand img{height:30px}.navbar-horizontal .navbar-dark .navbar-brand{color:#fff}.navbar-horizontal .navbar-light .navbar-brand{color:#32325d}.navbar-horizontal .navbar-nav .nav-item .media:not(:last-child){margin-bottom:1.5rem}@media (min-width:992px){.navbar-horizontal .navbar-nav .nav-item{margin-right:.5rem}.navbar-horizontal .navbar-nav .nav-item [data-toggle=dropdown]:after{transition:all .15s ease}.navbar-horizontal .navbar-nav .nav-item.show [data-toggle=dropdown]:after{transform:rotate(180deg)}.navbar-horizontal .navbar-nav .nav-link{padding-top:1rem;padding-bottom:1rem;border-radius:.375rem}.navbar-horizontal .navbar-nav .nav-link i{margin-right:.625rem}.navbar-horizontal .navbar-nav .nav-link-icon{font-size:1rem;padding-right:.5rem!important;padding-left:.5rem!important;border-radius:.375rem}.navbar-horizontal .navbar-nav .nav-link-icon i{margin-right:0}.navbar-horizontal .navbar-nav .dropdown-menu{margin:0;pointer-events:none;opacity:0}.navbar-horizontal .navbar-nav .dropdown-menu:before{position:absolute;z-index:-5;bottom:100%;left:20px;display:block;width:16px;height:16px;content:\"\";transform:rotate(-45deg) translateY(1rem);border-radius:.25rem;background:#fff;box-shadow:none}.navbar-horizontal .navbar-nav .dropdown-menu-right:before{right:20px;left:auto}.navbar-horizontal .navbar-nav:not(.navbar-nav-hover) .dropdown-menu.show{-webkit-animation:show-navbar-dropdown .25s ease forwards;animation:show-navbar-dropdown .25s ease forwards;pointer-events:auto;opacity:1}.navbar-horizontal .navbar-nav:not(.navbar-nav-hover) .dropdown-menu.close{display:block;-webkit-animation:hide-navbar-dropdown .15s ease backwards;animation:hide-navbar-dropdown .15s ease backwards}.navbar-horizontal .navbar-nav.navbar-nav-hover .dropdown-menu{display:block;transition:visibility .25s,opacity .25s,transform .25s;transform:translateY(10px) perspective(200px) rotateX(-2deg);pointer-events:none;opacity:0}.navbar-horizontal .navbar-nav.navbar-nav-hover .nav-item.dropdown:hover>.dropdown-menu{display:block;visibility:visible;transform:translate(0);-webkit-animation:none;animation:none;pointer-events:auto;opacity:1}.navbar-horizontal .navbar-nav .dropdown-menu-inner{position:relative;padding:1rem}}.navbar-horizontal.navbar-transparent{position:absolute;z-index:100;top:0;width:100%;border:0;background-color:transparent;box-shadow:none}.navbar-horizontal.navbar-transparent .navbar-brand,.navbar-horizontal.navbar-transparent .navbar-toggler{color:#fff}@media (min-width:768px){.navbar-horizontal.navbar-transparent .navbar-nav .nav-link{color:hsla(0,0%,100%,.95)}.navbar-horizontal.navbar-transparent .navbar-nav .nav-link:focus,.navbar-horizontal.navbar-transparent .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.65)}.navbar-horizontal.navbar-transparent .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-horizontal.navbar-transparent .navbar-nav .active>.nav-link,.navbar-horizontal.navbar-transparent .navbar-nav .nav-link.active,.navbar-horizontal.navbar-transparent .navbar-nav .nav-link.show,.navbar-horizontal.navbar-transparent .navbar-nav .show>.nav-link{color:hsla(0,0%,100%,.65)}.navbar-horizontal.navbar-transparent .navbar-brand,.navbar-horizontal.navbar-transparent .navbar-brand:focus,.navbar-horizontal.navbar-transparent .navbar-brand:hover{color:hsla(0,0%,100%,.95)}}.navbar-horizontal .navbar-collapse-header{display:none}@media (max-width:991.98px){.navbar-horizontal .navbar-nav .nav-link{padding:.625rem 0;color:#172b4d!important}.navbar-horizontal .navbar-nav .dropdown-menu{min-width:auto;box-shadow:none}.navbar-horizontal .navbar-nav .dropdown-menu .media svg{width:30px}.navbar-horizontal .navbar-collapse{position:absolute;z-index:1050;top:0;right:0;left:0;overflow-y:auto;width:calc(100% - 1.4rem);height:auto!important;margin:.7rem;opacity:0}.navbar-horizontal .navbar-collapse .navbar-toggler{position:relative;display:inline-block;width:20px;height:20px;padding:0;cursor:pointer}.navbar-horizontal .navbar-collapse .navbar-toggler span{position:absolute;display:block;width:100%;height:2px;opacity:1;border-radius:2px;background:#283448}.navbar-horizontal .navbar-collapse .navbar-toggler :first-child{transform:rotate(135deg)}.navbar-horizontal .navbar-collapse .navbar-toggler :nth-child(2){transform:rotate(-135deg)}.navbar-horizontal .navbar-collapse .navbar-collapse-header{display:block;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid rgba(0,0,0,.1)}.navbar-horizontal .navbar-collapse .collapse-brand img{height:36px}.navbar-horizontal .navbar-collapse .collapse-close{text-align:right}.navbar-horizontal .navbar-collapse.collapsing,.navbar-horizontal .navbar-collapse.show{padding:1.5rem;-webkit-animation:show-navbar-collapse .2s ease forwards;animation:show-navbar-collapse .2s ease forwards;border-radius:.375rem;background:#fff;box-shadow:0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1)}.navbar-horizontal .navbar-collapse.collapsing-out{-webkit-animation:hide-navbar-collapse .2s ease forwards;animation:hide-navbar-collapse .2s ease forwards}}@-webkit-keyframes show-navbar-collapse{0%{transform:scale(.95);transform-origin:100% 0;opacity:0}to{transform:scale(1);opacity:1}}@-webkit-keyframes hide-navbar-collapse{0%{transform:scale(1);transform-origin:100% 0;opacity:1}to{transform:scale(.95);opacity:0}}@-webkit-keyframes show-navbar-dropdown{0%{transition:visibility .25s,opacity .25s,transform .25s;transform:translateY(10px) perspective(200px) rotateX(-2deg);opacity:0}to{transform:translate(0);opacity:1}}@-webkit-keyframes hide-navbar-dropdown{0%{opacity:1}to{transform:translateY(10px);opacity:0}}.navbar-floating-wrapper{position:absolute;z-index:1;top:0;left:0;width:100%;padding-top:1rem;padding-bottom:1rem}.navbar-floating-wrapper .navbar{border-radius:.375rem}.navbar-vertical{padding-top:0;border-width:0 0 1px;border-style:solid;box-shadow:0 0 2rem 0 rgba(136,152,170,.15)}.navbar-vertical.navbar-light{border-color:rgba(0,0,0,.05);background-color:#f6f9fc}.navbar-vertical.navbar-dark{border-color:hsla(0,0%,100%,.1);background-color:transparent}.navbar-vertical .navbar-brand{margin-right:0}.navbar-vertical .navbar-brand-img,.navbar-vertical .navbar-brand>img{max-width:100%;max-height:2rem}@media (min-width:768px){.navbar-vertical .navbar-collapse{margin-right:-1rem;margin-left:-1rem}.navbar-vertical .navbar-collapse:before{display:block;margin:.5rem;content:\"\"}}.navbar-vertical .navbar-nav{margin-right:-1rem;margin-left:-1rem}.navbar-vertical .navbar-nav .nav-link{font-size:.875rem;font-weight:500;padding-right:1rem;padding-left:1rem}.navbar-vertical .navbar-nav .nav-link.active{position:relative}.navbar-vertical .navbar-nav .nav-link>i{font-size:.9375rem;line-height:1.5rem;min-width:2rem}.navbar-vertical .navbar-nav .nav-link .dropdown-menu{border:none}.navbar-vertical .navbar-nav .nav-link .dropdown-menu .dropdown-menu{margin-left:.5rem}.navbar-vertical .navbar-nav .nav-sm .nav-link{font-size:.8125rem}.navbar-vertical .navbar-nav .nav-link{display:flex;white-space:nowrap;align-items:center}.navbar-vertical .navbar-nav .nav-link[data-toggle=collapse]:after{font-family:\"Font Awesome 5 Free\";font-weight:700;font-style:normal;font-feature-settings:normal;font-variant:normal;display:inline-block;margin-left:auto;content:\"\\f105\";transition:all .15s ease;color:#ced4da;text-rendering:auto;-webkit-font-smoothing:antialiased}@media (prefers-reduced-motion:reduce){.navbar-vertical .navbar-nav .nav-link[data-toggle=collapse]:after{transition:none}}.navbar-vertical .navbar-nav .nav-link[data-toggle=collapse][aria-expanded=true]:after{transform:rotate(90deg);color:#004689}.navbar-vertical .navbar-nav .nav .nav-link{padding-left:3rem}.navbar-vertical .navbar-nav .nav .nav .nav-link{padding-left:3.5rem}.navbar-vertical .navbar-heading{font-size:.75rem;padding-top:.25rem;padding-bottom:.25rem;letter-spacing:.04em;text-transform:uppercase}.navbar-vertical.navbar-expand-xs{position:fixed;top:0;bottom:0;display:block;overflow-y:auto;width:100%;max-width:62px;padding-right:0;padding-left:0}.navbar-vertical.navbar-expand-xs .navbar-inner{padding-right:1.5rem;padding-left:1.5rem}.navbar-vertical.navbar-expand-xs>[class*=container]{flex-direction:column;min-height:100%;padding-right:0;padding-left:0;align-items:stretch}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.navbar-vertical.navbar-expand-xs>[class*=container]{height:100%;min-height:none}}.navbar-vertical.navbar-expand-xs.fixed-left{left:0;border-width:0 1px 0 0}.navbar-vertical.navbar-expand-xs.fixed-right{right:0;border-width:0 0 0 1px}.navbar-vertical.navbar-expand-xs .navbar-collapse{display:flex;flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem;padding-right:1.5rem;padding-left:1.5rem;flex:1 1;align-items:stretch}.navbar-vertical.navbar-expand-xs .navbar-collapse>*{min-width:100%}.navbar-vertical.navbar-expand-xs .navbar-nav{flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem}.navbar-vertical.navbar-expand-xs .navbar-nav .nav-link{padding:.675rem 1.5rem}.navbar-vertical.navbar-expand-xs .navbar-nav>.nav-item{margin-top:2px}.navbar-vertical.navbar-expand-xs .navbar-nav>.nav-item>.nav-link.active{margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;border-radius:.375rem;background:#f6f9fc}.navbar-vertical.navbar-expand-xs .lavalamp-object{width:calc(100% - 1rem)!important;margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;color:#fff;border-radius:.375rem;background:#004689}.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link{padding-top:.45rem;padding-bottom:.45rem;padding-left:15px}.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link span.sidenav-normal{padding-left:8px;transition:all .1s ease 0s}.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link span.sidenav-mini-icon{width:34px;transition:all .1s ease 0s;text-align:center}.navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav .nav-link{padding-left:4.25rem}@media (min-width:576px){.navbar-vertical.navbar-expand-sm{position:fixed;top:0;bottom:0;display:block;overflow-y:auto;width:100%;max-width:62px;padding-right:0;padding-left:0}.navbar-vertical.navbar-expand-sm .navbar-inner{padding-right:1.5rem;padding-left:1.5rem}.navbar-vertical.navbar-expand-sm>[class*=container]{flex-direction:column;min-height:100%;padding-right:0;padding-left:0;align-items:stretch}}@media (min-width:576px) and (-ms-high-contrast:active),(min-width:576px) and (-ms-high-contrast:none){.navbar-vertical.navbar-expand-sm>[class*=container]{height:100%;min-height:none}}@media (min-width:576px){.navbar-vertical.navbar-expand-sm.fixed-left{left:0;border-width:0 1px 0 0}.navbar-vertical.navbar-expand-sm.fixed-right{right:0;border-width:0 0 0 1px}.navbar-vertical.navbar-expand-sm .navbar-collapse{display:flex;flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem;padding-right:1.5rem;padding-left:1.5rem;flex:1 1;align-items:stretch}.navbar-vertical.navbar-expand-sm .navbar-collapse>*{min-width:100%}.navbar-vertical.navbar-expand-sm .navbar-nav{flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem}.navbar-vertical.navbar-expand-sm .navbar-nav .nav-link{padding:.675rem 1.5rem}.navbar-vertical.navbar-expand-sm .navbar-nav>.nav-item{margin-top:2px}.navbar-vertical.navbar-expand-sm .navbar-nav>.nav-item>.nav-link.active{margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;border-radius:.375rem;background:#f6f9fc}.navbar-vertical.navbar-expand-sm .lavalamp-object{width:calc(100% - 1rem)!important;margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;color:#fff;border-radius:.375rem;background:#004689}.navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav-link{padding-top:.45rem;padding-bottom:.45rem;padding-left:15px}.navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav-link span.sidenav-normal{padding-left:8px;transition:all .1s ease 0s}.navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav-link span.sidenav-mini-icon{width:34px;transition:all .1s ease 0s;text-align:center}.navbar-vertical.navbar-expand-sm .navbar-nav .nav .nav .nav-link{padding-left:4.25rem}}@media (min-width:768px){.navbar-vertical.navbar-expand-md{position:fixed;top:0;bottom:0;display:block;overflow-y:auto;width:100%;max-width:62px;padding-right:0;padding-left:0}.navbar-vertical.navbar-expand-md .navbar-inner{padding-right:1.5rem;padding-left:1.5rem}.navbar-vertical.navbar-expand-md>[class*=container]{flex-direction:column;min-height:100%;padding-right:0;padding-left:0;align-items:stretch}}@media (min-width:768px) and (-ms-high-contrast:active),(min-width:768px) and (-ms-high-contrast:none){.navbar-vertical.navbar-expand-md>[class*=container]{height:100%;min-height:none}}@media (min-width:768px){.navbar-vertical.navbar-expand-md.fixed-left{left:0;border-width:0 1px 0 0}.navbar-vertical.navbar-expand-md.fixed-right{right:0;border-width:0 0 0 1px}.navbar-vertical.navbar-expand-md .navbar-collapse{display:flex;flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem;padding-right:1.5rem;padding-left:1.5rem;flex:1 1;align-items:stretch}.navbar-vertical.navbar-expand-md .navbar-collapse>*{min-width:100%}.navbar-vertical.navbar-expand-md .navbar-nav{flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem}.navbar-vertical.navbar-expand-md .navbar-nav .nav-link{padding:.675rem 1.5rem}.navbar-vertical.navbar-expand-md .navbar-nav>.nav-item{margin-top:2px}.navbar-vertical.navbar-expand-md .navbar-nav>.nav-item>.nav-link.active{margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;border-radius:.375rem;background:#f6f9fc}.navbar-vertical.navbar-expand-md .lavalamp-object{width:calc(100% - 1rem)!important;margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;color:#fff;border-radius:.375rem;background:#004689}.navbar-vertical.navbar-expand-md .navbar-nav .nav .nav-link{padding-top:.45rem;padding-bottom:.45rem;padding-left:15px}.navbar-vertical.navbar-expand-md .navbar-nav .nav .nav-link span.sidenav-normal{padding-left:8px;transition:all .1s ease 0s}.navbar-vertical.navbar-expand-md .navbar-nav .nav .nav-link span.sidenav-mini-icon{width:34px;transition:all .1s ease 0s;text-align:center}.navbar-vertical.navbar-expand-md .navbar-nav .nav .nav .nav-link{padding-left:4.25rem}}@media (min-width:992px){.navbar-vertical.navbar-expand-lg{position:fixed;top:0;bottom:0;display:block;overflow-y:auto;width:100%;max-width:62px;padding-right:0;padding-left:0}.navbar-vertical.navbar-expand-lg .navbar-inner{padding-right:1.5rem;padding-left:1.5rem}.navbar-vertical.navbar-expand-lg>[class*=container]{flex-direction:column;min-height:100%;padding-right:0;padding-left:0;align-items:stretch}}@media (min-width:992px) and (-ms-high-contrast:active),(min-width:992px) and (-ms-high-contrast:none){.navbar-vertical.navbar-expand-lg>[class*=container]{height:100%;min-height:none}}@media (min-width:992px){.navbar-vertical.navbar-expand-lg.fixed-left{left:0;border-width:0 1px 0 0}.navbar-vertical.navbar-expand-lg.fixed-right{right:0;border-width:0 0 0 1px}.navbar-vertical.navbar-expand-lg .navbar-collapse{display:flex;flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem;padding-right:1.5rem;padding-left:1.5rem;flex:1 1;align-items:stretch}.navbar-vertical.navbar-expand-lg .navbar-collapse>*{min-width:100%}.navbar-vertical.navbar-expand-lg .navbar-nav{flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem}.navbar-vertical.navbar-expand-lg .navbar-nav .nav-link{padding:.675rem 1.5rem}.navbar-vertical.navbar-expand-lg .navbar-nav>.nav-item{margin-top:2px}.navbar-vertical.navbar-expand-lg .navbar-nav>.nav-item>.nav-link.active{margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;border-radius:.375rem;background:#f6f9fc}.navbar-vertical.navbar-expand-lg .lavalamp-object{width:calc(100% - 1rem)!important;margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;color:#fff;border-radius:.375rem;background:#004689}.navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav-link{padding-top:.45rem;padding-bottom:.45rem;padding-left:15px}.navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav-link span.sidenav-normal{padding-left:8px;transition:all .1s ease 0s}.navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav-link span.sidenav-mini-icon{width:34px;transition:all .1s ease 0s;text-align:center}.navbar-vertical.navbar-expand-lg .navbar-nav .nav .nav .nav-link{padding-left:4.25rem}}@media (min-width:1200px){.navbar-vertical.navbar-expand-xl{position:fixed;top:0;bottom:0;display:block;overflow-y:auto;width:100%;max-width:62px;padding-right:0;padding-left:0}.navbar-vertical.navbar-expand-xl .navbar-inner{padding-right:1.5rem;padding-left:1.5rem}.navbar-vertical.navbar-expand-xl>[class*=container]{flex-direction:column;min-height:100%;padding-right:0;padding-left:0;align-items:stretch}}@media (min-width:1200px) and (-ms-high-contrast:active),(min-width:1200px) and (-ms-high-contrast:none){.navbar-vertical.navbar-expand-xl>[class*=container]{height:100%;min-height:none}}@media (min-width:1200px){.navbar-vertical.navbar-expand-xl.fixed-left{left:0;border-width:0 1px 0 0}.navbar-vertical.navbar-expand-xl.fixed-right{right:0;border-width:0 0 0 1px}.navbar-vertical.navbar-expand-xl .navbar-collapse{display:flex;flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem;padding-right:1.5rem;padding-left:1.5rem;flex:1 1;align-items:stretch}.navbar-vertical.navbar-expand-xl .navbar-collapse>*{min-width:100%}.navbar-vertical.navbar-expand-xl .navbar-nav{flex-direction:column;margin-right:-1.5rem;margin-left:-1.5rem}.navbar-vertical.navbar-expand-xl .navbar-nav .nav-link{padding:.675rem 1.5rem}.navbar-vertical.navbar-expand-xl .navbar-nav>.nav-item{margin-top:2px}.navbar-vertical.navbar-expand-xl .navbar-nav>.nav-item>.nav-link.active{margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;border-radius:.375rem;background:#f6f9fc}.navbar-vertical.navbar-expand-xl .lavalamp-object{width:calc(100% - 1rem)!important;margin-right:.5rem;margin-left:.5rem;padding-right:1rem;padding-left:1rem;color:#fff;border-radius:.375rem;background:#004689}.navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav-link{padding-top:.45rem;padding-bottom:.45rem;padding-left:15px}.navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav-link span.sidenav-normal{padding-left:8px;transition:all .1s ease 0s}.navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav-link span.sidenav-mini-icon{width:34px;transition:all .1s ease 0s;text-align:center}.navbar-vertical.navbar-expand-xl .navbar-nav .nav .nav .nav-link{padding-left:4.25rem}}.navbar-vertical.navbar-expand-xs.fixed-left+.main-content{margin-left:62px}.navbar-vertical.navbar-expand-xs.fixed-right+.main-content{margin-right:62px}@media (min-width:576px){.navbar-vertical.navbar-expand-sm.fixed-left+.main-content{margin-left:62px}.navbar-vertical.navbar-expand-sm.fixed-right+.main-content{margin-right:62px}}@media (min-width:768px){.navbar-vertical.navbar-expand-md.fixed-left+.main-content{margin-left:62px}.navbar-vertical.navbar-expand-md.fixed-right+.main-content{margin-right:62px}}@media (min-width:992px){.navbar-vertical.navbar-expand-lg.fixed-left+.main-content{margin-left:62px}.navbar-vertical.navbar-expand-lg.fixed-right+.main-content{margin-right:62px}}@media (min-width:1200px){.navbar-vertical.navbar-expand-xl.fixed-left+.main-content{margin-left:62px}.navbar-vertical.navbar-expand-xl.fixed-right+.main-content{margin-right:62px}}.sidenav.fixed-left+.main-content{margin-left:62px;transition:all .15s ease}@media (prefers-reduced-motion:reduce){.sidenav.fixed-left+.main-content{transition:none}}.sidenav.fixed-right+.main-content{margin-right:62px;transition:all .15s ease}@media (prefers-reduced-motion:reduce){.sidenav.fixed-right+.main-content{transition:none}}@media (min-width:1200px){.g-sidenav-pinned .sidenav.fixed-left+.main-content{margin-left:250px}.g-sidenav-pinned .sidenav.fixed-right+.main-content{margin-right:250px}}.sidenav{z-index:1050;transition:all .4s ease}@media (min-width:1200px){.sidenav:hover{max-width:250px}.sidenav .sidenav-toggler{padding:1.5rem}}.sidenav .navbar-brand,.sidenav .navbar-heading .docs-normal{display:none}.sidenav .navbar-heading .docs-mini{padding-left:3px}.sidenav .navbar-heading{transition:all .1s ease}.sidenav .navbar-brand{padding:1.5rem}.sidenav-header{height:78px}.g-sidenav-show .sidenav .navbar-brand,.g-sidenav-show .sidenav .navbar-heading .docs-normal{display:block}.g-sidenav-show .sidenav .navbar-heading .docs-mini{display:none}.g-sidenav-show .sidenav .nav-item .collapse{height:auto;transition:all .15s ease}@media (prefers-reduced-motion:reduce){.g-sidenav-show .sidenav .nav-item .collapse{transition:none}}.g-sidenav-show .sidenav .nav-link-text{transition:.3s ease;opacity:1}.g-sidenav-show .sidenav .nav-item .sidenav-mini-icon{opacity:0}.g-sidenav-pinned .sidenav{max-width:250px!important}.g-sidenav-pinned .sidenav .navbar-brand,.g-sidenav-pinned .sidenav .navbar-heading{display:block}.g-sidenav-hidden:not(.g-sidenav-show) .sidenav .navbar-nav>.nav-item>.nav-link:after{content:\"\"}.g-sidenav-hidden:not(.g-sidenav-show) .sidenav .nav-item .collapse .sidenav-normal{display:none!important}.g-sidenav-hidden:not(.g-sidenav-show) .sidenav .nav-link-text{opacity:0}.g-sidenav-hide .sidenav .navbar-nav>.nav-item>.nav-link:after{content:\"\"}.g-sidenav-hide .sidenav .nav-item .collapse .sidenav-normal{display:none!important}.g-sidenav-hide .sidenav .nav-link-text{opacity:0}@media (max-width:1199.98px){.sidenav{transform:translateX(-62px)}.sidenav.fixed-left+.main-content{margin-left:0!important}.g-sidenav-pinned .sidenav{transform:translateX(0)}}.sidenav-toggler-inner,.sidenav-toggler-line{width:18px;transition:all .15s ease}@media (prefers-reduced-motion:reduce){.sidenav-toggler-inner,.sidenav-toggler-line{transition:none}}.sidenav-toggler-inner{position:relative}.sidenav-toggler-inner:before{position:absolute;top:-14px;left:-11px;width:40px;height:40px;content:\"\";transition:all .15s cubic-bezier(.68,-.55,.265,1.55);transform:scale(0);border-radius:50%}@media (prefers-reduced-motion:reduce){.sidenav-toggler-inner:before{transition:none}}.sidenav-toggler-line{position:relative;display:block;height:2px;background-color:#172b4d}.sidenav-toggler-line:not(:last-child){margin-bottom:3px}.sidenav-toggler-dark .sidenav-toggler-line{background-color:#fff}.sidenav-toggler{cursor:pointer}.sidenav-toggler.active .sidenav-toggler-inner:before{transform:scale(1)}.sidenav-toggler.active .sidenav-toggler-line:first-child,.sidenav-toggler.active .sidenav-toggler-line:last-child{width:13px;transform:translateX(5px)}.navbar-search .input-group{transition:background-color .3s linear;transition-delay:.15s;border:0 solid;border-radius:2rem}@media (prefers-reduced-motion:reduce){.navbar-search .input-group{transition:none}}.navbar-search .input-group .input-group-text{padding-left:1rem;border:0;background-color:transparent}.navbar-search .form-control{width:250px;transition:all .15s cubic-bezier(.68,-.55,.265,1.55);border:0;background-color:transparent}@media (prefers-reduced-motion:reduce){.navbar-search .form-control{transition:none}}.navbar-search .focused .input-group .form-control{width:380px}.navbar-search .close{display:none}.navbar-search-dark .input-group{border-color:hsla(0,0%,100%,.6);background-color:rgba(23,43,77,.8)}.navbar-search-dark .input-group-text{color:hsla(0,0%,100%,.6)}.navbar-search-dark .form-control{color:hsla(0,0%,100%,.9)}.navbar-search-dark .form-control::-moz-placeholder{color:hsla(0,0%,100%,.6)}.navbar-search-dark .form-control:-ms-input-placeholder{color:hsla(0,0%,100%,.6)}.navbar-search-dark .form-control::placeholder{color:hsla(0,0%,100%,.6)}.navbar-search-dark .focused .input-group{border-color:hsla(0,0%,100%,.9);background-color:rgba(23,43,77,.9)}.navbar-search-light .input-group{border-color:rgba(0,0,0,.6);background-color:hsla(0,0%,100%,.9)}.navbar-search-light .input-group-text{color:rgba(0,0,0,.6)}.navbar-search-light .form-control{color:rgba(0,0,0,.9)}.navbar-search-light .form-control::-moz-placeholder{color:rgba(0,0,0,.6)}.navbar-search-light .form-control:-ms-input-placeholder{color:rgba(0,0,0,.6)}.navbar-search-light .form-control::placeholder{color:rgba(0,0,0,.6)}.navbar-search-light .focused .input-group{border-color:rgba(0,0,0,.9);background-color:#fff}@media (max-width:575.98px){.navbar-search{display:none;width:100%;transition:all .15s cubic-bezier(.68,-.55,.265,1.55);transform:translateX(-150%)}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.navbar-search{transition:none}}@media (max-width:575.98px){.navbar-search .form-group{width:100%}.navbar-search .focused .input-group .form-control,.navbar-search .form-control{width:auto}.navbar-search .close{display:none;opacity:0}.navbar-search .close span{width:auto;height:auto}.navbar-top .navbar-nav{transition:all .15s ease}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.navbar-top .navbar-nav{transition:none}}@media (max-width:575.98px){.g-navbar-search-showing .navbar-search .close{display:block}.g-navbar-search-showing .navbar-top .navbar-nav{display:flex;transform:translateX(150%);opacity:1}.g-navbar-search-show .navbar-search{display:block}.g-navbar-search-show .navbar-search .form-control{width:auto}.g-navbar-search-show .navbar-search .close{line-height:46px;position:absolute;top:0;right:0;width:46px;height:46px;cursor:pointer;text-align:center;color:#fff}.g-navbar-search-show .navbar-top .navbar-nav{display:none}.g-navbar-search-show .navbar-top .navbar-collapse{width:100%}.g-navbar-search-shown .navbar-search{transform:translateX(0)}.g-navbar-search-shown .navbar-search .close{display:block;opacity:1}.g-navbar-search-hiding .navbar-top .navbar-nav{display:flex;transform:translateX(150%);opacity:0}.g-navbar-search-hidden .navbar-top .navbar-nav{transform:translateX(0);opacity:1}}.navbar .dropdown-menu{margin:0;pointer-events:none;opacity:0}.navbar .dropdown-menu-arrow:before{position:absolute;z-index:-5;bottom:100%;left:20px;display:block;width:12px;height:12px;content:\"\";transform:rotate(-45deg) translateY(12px);border-radius:2px;background:#fff;box-shadow:none}.navbar .dropdown-menu-right:before{right:20px;left:auto}.navbar:not(.navbar-nav-hover) .dropdown-menu.show{-webkit-animation:show-navbar-dropdown .25s ease forwards;animation:show-navbar-dropdown .25s ease forwards;pointer-events:auto;opacity:1}.navbar:not(.navbar-nav-hover) .dropdown-menu.close{display:block;-webkit-animation:hide-navbar-dropdown .15s ease backwards;animation:hide-navbar-dropdown .15s ease backwards}.navbar.navbar-nav-hover .dropdown-menu{display:block;transition:visibility .25s,opacity .25s,transform .25s;transform:translateY(10px) perspective(200px) rotateX(-2deg);pointer-events:none;opacity:0}.navbar.navbar-nav-hover .nav-item.dropdown:hover>.dropdown-menu{display:block;visibility:visible;transform:translate(0);-webkit-animation:none;animation:none;pointer-events:auto;opacity:1}.navbar .dropdown-menu-inner{position:relative;padding:1rem}@keyframes show-navbar-dropdown{0%{transition:visibility .25s,opacity .25s,transform .25s;transform:translateY(10px) perspective(200px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes hide-navbar-dropdown{0%{opacity:1}to{transform:translateY(10px);opacity:0}}.navbar-collapse-header{display:none}@keyframes show-navbar-collapse{0%{transform:scale(.95);transform-origin:100% 0;opacity:0}to{transform:scale(1);opacity:1}}@keyframes hide-navbar-collapse{0%{transform:scale(1);transform-origin:100% 0;opacity:1}to{transform:scale(.95);opacity:0}}.navbar-top{padding-right:1rem;padding-left:1rem;border:0}.navbar-top .container,.navbar-top .container-fluid,.navbar-top .container-lg,.navbar-top .container-md,.navbar-top .container-sm,.navbar-top .container-xl{padding-right:15px;padding-left:15px}@media (min-width:576px){.navbar-top .navbar-brand{display:none}}@media (max-width:575.98px){.navbar-top .navbar-collapse{width:100%}.navbar-top .nav-item{position:static}.navbar-top .nav-item .dropdown-menu{position:absolute;right:auto;left:3%;width:94%;min-width:auto}}.navbar-top.border-bottom.navbar-dark{border-color:hsla(0,0%,100%,.08)!important}.navbar-top.border-bottom.navbar-light{border-color:rgba(0,0,0,.04)!important}.sidenav-pinned .navbar-top .navbar-brand{display:none}.nav-wrapper{padding:1rem 0;border-top-left-radius:.375rem;border-top-right-radius:.375rem}.nav-wrapper+.card{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem}.nav-link{color:#525f7f}.nav-link:hover{color:#004689}.nav-link i.ni{position:relative;top:2px}.nav-pills .nav-item:not(:last-child){padding-right:1rem}.nav-pills .nav-link{font-size:.875rem;font-weight:500;padding:.75rem 1rem;transition:all .15s ease;color:#004689;background-color:#fff;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.nav-pills .nav-link:hover{color:#485fe0}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#004689}@media (max-width:575.98px){.nav-pills .nav-item{margin-bottom:1rem}}@media (max-width:767.98px){.nav-pills:not(.nav-pills-circle) .nav-item{padding-right:0}}.nav-pills-circle .nav-link{line-height:60px;width:60px;height:60px;padding:0;text-align:center;border-radius:50%}.nav-pills-circle .nav-link-icon i,.nav-pills-circle .nav-link-icon svg{font-size:1rem}.page-item.active .page-link{box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.page-item .page-link,.page-item span{font-size:.875rem;display:flex;width:36px;height:36px;margin:0 3px;padding:0;border-radius:50%!important;align-items:center;justify-content:center}.pagination-lg .page-item .page-link,.pagination-lg .page-item span{line-height:46px;width:46px;height:46px}.pagination-sm .page-item .page-link,.pagination-sm .page-item span{line-height:30px;width:30px;height:30px}.popover{border:0}.popover-header{font-weight:600}.popover-primary{background-color:#004689}.popover-primary .popover-header{color:#fff;background-color:#004689}.popover-primary .popover-body{color:#fff}.popover-primary .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-primary.bs-popover-auto[x-placement^=top] .arrow:after,.popover-primary.bs-popover-top .arrow:after{border-top-color:#004689}.popover-primary.bs-popover-auto[x-placement^=right] .arrow:after,.popover-primary.bs-popover-right .arrow:after{border-right-color:#004689}.popover-primary.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-primary.bs-popover-bottom .arrow:after{border-bottom-color:#004689}.popover-primary.bs-popover-auto[x-placement^=left] .arrow:after,.popover-primary.bs-popover-left .arrow:after{border-left-color:#004689}.popover-secondary{background-color:#f7fafc}.popover-secondary .popover-header{color:#212529;background-color:#f7fafc}.popover-secondary .popover-body{color:#212529}.popover-secondary .popover-header{border-color:rgba(33,37,41,.2)}.popover-secondary.bs-popover-auto[x-placement^=top] .arrow:after,.popover-secondary.bs-popover-top .arrow:after{border-top-color:#f7fafc}.popover-secondary.bs-popover-auto[x-placement^=right] .arrow:after,.popover-secondary.bs-popover-right .arrow:after{border-right-color:#f7fafc}.popover-secondary.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-secondary.bs-popover-bottom .arrow:after{border-bottom-color:#f7fafc}.popover-secondary.bs-popover-auto[x-placement^=left] .arrow:after,.popover-secondary.bs-popover-left .arrow:after{border-left-color:#f7fafc}.popover-success{background-color:#2dce89}.popover-success .popover-header{color:#fff;background-color:#2dce89}.popover-success .popover-body{color:#fff}.popover-success .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-success.bs-popover-auto[x-placement^=top] .arrow:after,.popover-success.bs-popover-top .arrow:after{border-top-color:#2dce89}.popover-success.bs-popover-auto[x-placement^=right] .arrow:after,.popover-success.bs-popover-right .arrow:after{border-right-color:#2dce89}.popover-success.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-success.bs-popover-bottom .arrow:after{border-bottom-color:#2dce89}.popover-success.bs-popover-auto[x-placement^=left] .arrow:after,.popover-success.bs-popover-left .arrow:after{border-left-color:#2dce89}.popover-info{background-color:#11cdef}.popover-info .popover-header{color:#fff;background-color:#11cdef}.popover-info .popover-body{color:#fff}.popover-info .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-info.bs-popover-auto[x-placement^=top] .arrow:after,.popover-info.bs-popover-top .arrow:after{border-top-color:#11cdef}.popover-info.bs-popover-auto[x-placement^=right] .arrow:after,.popover-info.bs-popover-right .arrow:after{border-right-color:#11cdef}.popover-info.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-info.bs-popover-bottom .arrow:after{border-bottom-color:#11cdef}.popover-info.bs-popover-auto[x-placement^=left] .arrow:after,.popover-info.bs-popover-left .arrow:after{border-left-color:#11cdef}.popover-warning{background-color:#fb6340}.popover-warning .popover-header{color:#fff;background-color:#fb6340}.popover-warning .popover-body{color:#fff}.popover-warning .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-warning.bs-popover-auto[x-placement^=top] .arrow:after,.popover-warning.bs-popover-top .arrow:after{border-top-color:#fb6340}.popover-warning.bs-popover-auto[x-placement^=right] .arrow:after,.popover-warning.bs-popover-right .arrow:after{border-right-color:#fb6340}.popover-warning.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-warning.bs-popover-bottom .arrow:after{border-bottom-color:#fb6340}.popover-warning.bs-popover-auto[x-placement^=left] .arrow:after,.popover-warning.bs-popover-left .arrow:after{border-left-color:#fb6340}.popover-danger{background-color:#f5365c}.popover-danger .popover-header{color:#fff;background-color:#f5365c}.popover-danger .popover-body{color:#fff}.popover-danger .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-danger.bs-popover-auto[x-placement^=top] .arrow:after,.popover-danger.bs-popover-top .arrow:after{border-top-color:#f5365c}.popover-danger.bs-popover-auto[x-placement^=right] .arrow:after,.popover-danger.bs-popover-right .arrow:after{border-right-color:#f5365c}.popover-danger.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-danger.bs-popover-bottom .arrow:after{border-bottom-color:#f5365c}.popover-danger.bs-popover-auto[x-placement^=left] .arrow:after,.popover-danger.bs-popover-left .arrow:after{border-left-color:#f5365c}.popover-light{background-color:#adb5bd}.popover-light .popover-header{color:#fff;background-color:#adb5bd}.popover-light .popover-body{color:#fff}.popover-light .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-light.bs-popover-auto[x-placement^=top] .arrow:after,.popover-light.bs-popover-top .arrow:after{border-top-color:#adb5bd}.popover-light.bs-popover-auto[x-placement^=right] .arrow:after,.popover-light.bs-popover-right .arrow:after{border-right-color:#adb5bd}.popover-light.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-light.bs-popover-bottom .arrow:after{border-bottom-color:#adb5bd}.popover-light.bs-popover-auto[x-placement^=left] .arrow:after,.popover-light.bs-popover-left .arrow:after{border-left-color:#adb5bd}.popover-dark{background-color:#212529}.popover-dark .popover-header{color:#fff;background-color:#212529}.popover-dark .popover-body{color:#fff}.popover-dark .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-dark.bs-popover-auto[x-placement^=top] .arrow:after,.popover-dark.bs-popover-top .arrow:after{border-top-color:#212529}.popover-dark.bs-popover-auto[x-placement^=right] .arrow:after,.popover-dark.bs-popover-right .arrow:after{border-right-color:#212529}.popover-dark.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-dark.bs-popover-bottom .arrow:after{border-bottom-color:#212529}.popover-dark.bs-popover-auto[x-placement^=left] .arrow:after,.popover-dark.bs-popover-left .arrow:after{border-left-color:#212529}.popover-default{background-color:#172b4d}.popover-default .popover-header{color:#fff;background-color:#172b4d}.popover-default .popover-body{color:#fff}.popover-default .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-default.bs-popover-auto[x-placement^=top] .arrow:after,.popover-default.bs-popover-top .arrow:after{border-top-color:#172b4d}.popover-default.bs-popover-auto[x-placement^=right] .arrow:after,.popover-default.bs-popover-right .arrow:after{border-right-color:#172b4d}.popover-default.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-default.bs-popover-bottom .arrow:after{border-bottom-color:#172b4d}.popover-default.bs-popover-auto[x-placement^=left] .arrow:after,.popover-default.bs-popover-left .arrow:after{border-left-color:#172b4d}.popover-white{background-color:#fff}.popover-white .popover-header{color:#212529;background-color:#fff}.popover-white .popover-body{color:#212529}.popover-white .popover-header{border-color:rgba(33,37,41,.2)}.popover-white.bs-popover-auto[x-placement^=top] .arrow:after,.popover-white.bs-popover-top .arrow:after{border-top-color:#fff}.popover-white.bs-popover-auto[x-placement^=right] .arrow:after,.popover-white.bs-popover-right .arrow:after{border-right-color:#fff}.popover-white.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-white.bs-popover-bottom .arrow:after{border-bottom-color:#fff}.popover-white.bs-popover-auto[x-placement^=left] .arrow:after,.popover-white.bs-popover-left .arrow:after{border-left-color:#fff}.popover-neutral{background-color:#fff}.popover-neutral .popover-header{color:#212529;background-color:#fff}.popover-neutral .popover-body{color:#212529}.popover-neutral .popover-header{border-color:rgba(33,37,41,.2)}.popover-neutral.bs-popover-auto[x-placement^=top] .arrow:after,.popover-neutral.bs-popover-top .arrow:after{border-top-color:#fff}.popover-neutral.bs-popover-auto[x-placement^=right] .arrow:after,.popover-neutral.bs-popover-right .arrow:after{border-right-color:#fff}.popover-neutral.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-neutral.bs-popover-bottom .arrow:after{border-bottom-color:#fff}.popover-neutral.bs-popover-auto[x-placement^=left] .arrow:after,.popover-neutral.bs-popover-left .arrow:after{border-left-color:#fff}.popover-darker{background-color:#000}.popover-darker .popover-header{color:#fff;background-color:#000}.popover-darker .popover-body{color:#fff}.popover-darker .popover-header{border-color:hsla(0,0%,100%,.2)}.popover-darker.bs-popover-auto[x-placement^=top] .arrow:after,.popover-darker.bs-popover-top .arrow:after{border-top-color:#000}.popover-darker.bs-popover-auto[x-placement^=right] .arrow:after,.popover-darker.bs-popover-right .arrow:after{border-right-color:#000}.popover-darker.bs-popover-auto[x-placement^=bottom] .arrow:after,.popover-darker.bs-popover-bottom .arrow:after{border-bottom-color:#000}.popover-darker.bs-popover-auto[x-placement^=left] .arrow:after,.popover-darker.bs-popover-left .arrow:after{border-left-color:#000}.progress-wrapper{position:relative;padding-top:1.5rem}.progress{overflow:hidden;height:8px;margin-bottom:1rem;border-radius:.25rem;background-color:#e9ecef;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress .sr-only{font-size:13px;line-height:20px;left:0;clip:auto;width:auto;height:20px;margin:0 0 0 30px}.progress-sm{height:5px}.progress-xs{height:3px}.progress-heading{font-size:14px;font-weight:500;margin:0 0 2px;padding:0}.progress-bar{height:auto;border-radius:0;box-shadow:none}.progress-info{display:flex;margin-bottom:.5rem;align-items:center;justify-content:space-between}.progress-label span{font-size:.625rem;font-weight:600;display:inline-block;padding:.25rem 1rem;text-transform:uppercase;color:#004689;border-radius:30px;background:rgba(94,114,228,.1)}.progress-percentage{text-align:right}.progress-percentage span{font-size:.875rem;font-weight:600;display:inline-block;color:#8898aa}.rtl.g-sidenav-pinned .sidenav+.main-content{margin-right:250px}.rtl .sidenav+.main-content{margin-right:62px}.rtl .sidenav .navbar-nav{padding-right:0}.rtl .sidenav .navbar-nav .nav-link>i{min-width:auto;margin-left:1rem}.rtl .sidenav .navbar-nav .nav-link[data-toggle=collapse]:after{margin-right:auto;margin-left:0;transform:rotate(180deg)}.rtl .sidenav .navbar-nav .nav-link[data-toggle=collapse][aria-expanded=true]:after{transform:rotate(90deg)!important}.rtl .sidenav .navbar-nav .nav .nav-link{padding-right:15px}.rtl .sidenav .sidenav-toggler.active .sidenav-toggler-line:first-child,.rtl .sidenav .sidenav-toggler.active .sidenav-toggler-line:last-child{transform:translateX(0)}.rtl .sidenav .navbar-heading{text-align:right}.rtl .sidenav .scrollbar-inner{direction:ltr}.rtl .sidenav .scrollbar-inner .navbar-nav{direction:rtl}.rtl .sidenav .navbar-heading .docs-mini{padding-right:3px;padding-left:0}.rtl .navbar-vertical.navbar-expand-xs .navbar-nav .nav .nav-link span.sidenav-normal{padding-right:8px}.rtl .card .card-body,.rtl .dropdown-menu-left{text-align:right}@media (max-width:1199.98px){.rtl .sidenav{transform:translateX(62px)}.rtl .sidenav+.main-content{margin-right:0!important}.rtl .sidenav-toggler.active .sidenav-toggler-line:first-child,.rtl .sidenav-toggler.active .sidenav-toggler-line:last-child{transform:translateX(0)}.rtl.g-sidenav-pinned .sidenav{transform:translateX(0)!important}}@media (max-width:576px){.rtl .navbar-expand .navbar-nav .nav-link{padding-left:0}.rtl.g-navbar-search-show .navbar-search .close{right:auto;left:0}.rtl .navbar-search{transform:translateX(150%)}.rtl.g-navbar-search-shown .navbar-search{transform:translateX(0)}}.separator{top:auto;right:0;left:0;overflow:hidden;width:100%;height:150px;transform:translateZ(0)}.separator,.separator svg{position:absolute;pointer-events:none}.separator-top{top:0;bottom:auto}.separator-top svg{top:0}.separator-bottom{top:auto;bottom:0}.separator-bottom svg{bottom:0}.separator-inverse{transform:rotate(180deg)}.separator-skew{height:60px}@media (min-width:1200px){.separator-skew{height:70px}}.section-nucleo-icons{--icon-size:5rem;--icon-sm-size:3.75rem;--gutter:7rem}.section-nucleo-icons .icons-container{position:relative;z-index:1;max-width:100%;height:360px;margin:0 auto}.section-nucleo-icons .icons-container i{position:absolute;z-index:1;display:inline-flex;transition:all .2s cubic-bezier(.25,.65,.9,.75);transform:translate(-50%,-50%);border-radius:50%;background:#fff;box-shadow:0 0 2rem 0 rgba(136,152,170,.15);align-items:center;justify-content:center}.section-nucleo-icons .icons-container i.icon{font-size:1.7em;width:var(--icon-size);height:var(--icon-size)}.section-nucleo-icons .icons-container i.icon-sm{font-size:1.5em;width:var(--icon-sm-size);height:var(--icon-sm-size)}.section-nucleo-icons .icons-container i:first-child{z-index:2}.section-nucleo-icons .icons-container i{opacity:1}.section-nucleo-icons .icons-container i:first-child{font-size:42px;top:50%;left:50%;color:#fb6340}.section-nucleo-icons .icons-container i:nth-child(2){top:50%;left:calc(50% + var(--gutter)*1.7)}.section-nucleo-icons .icons-container i:nth-child(3){top:calc(50% + var(--gutter));left:calc(50% + var(--gutter))}.section-nucleo-icons .icons-container i:nth-child(4){top:calc(50% - var(--gutter));left:calc(50% + var(--gutter))}.section-nucleo-icons .icons-container i:nth-child(5){top:50%;left:calc(50% + var(--gutter)*4)}.section-nucleo-icons .icons-container i:nth-child(6){top:calc(50% + var(--gutter)*1.5);left:calc(50% + var(--gutter)*2.7)}.section-nucleo-icons .icons-container i:nth-child(7){top:calc(50% - var(--gutter)*1.5);left:calc(50% + var(--gutter)*2.7)}.section-nucleo-icons .icons-container i:nth-child(8){top:50%;left:calc(50% - var(--gutter)*1.7)}.section-nucleo-icons .icons-container i:nth-child(9){top:calc(50% + var(--gutter));left:calc(50% - var(--gutter))}.section-nucleo-icons .icons-container i:nth-child(10){top:calc(50% - var(--gutter));left:calc(50% - var(--gutter))}.section-nucleo-icons .icons-container i:nth-child(11){top:50%;left:calc(50% - var(--gutter)*4)}.section-nucleo-icons .icons-container i:nth-child(12){top:calc(50% + var(--gutter)*1.5);left:calc(50% - var(--gutter)*2.7)}.section-nucleo-icons .icons-container i:nth-child(13){top:calc(50% - var(--gutter)*1.5);left:calc(50% - var(--gutter)*2.7)}.shortcut-media{transition:all .15s cubic-bezier(.68,-.55,.265,1.55)}@media (prefers-reduced-motion:reduce){.shortcut-media{transition:none}}.shortcut-item{padding-top:1rem;padding-bottom:1rem;text-align:center}.shortcut-item small{font-size:.8125rem;font-weight:600;display:block;margin-top:.75rem}.shortcut-item:hover .shortcut-media{transform:scale(1.1)}.table thead th{font-size:.65rem;padding-top:.75rem;padding-bottom:.75rem;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #e9ecef}.table th{font-weight:600}.table td .progress{width:120px;height:3px;margin:0}.table td,.table th{font-size:.8125rem;white-space:nowrap}.table.align-items-center td,.table.align-items-center th{vertical-align:middle}.table .thead-dark th{color:#4d7bca;background-color:#1c345d}.table .thead-dark th a{color:#4d7bca}.table .thead-light th{color:#8898aa;background-color:#f6f9fc}.table .thead-light th a{color:#8898aa}.table-hover tr{transition:all .15s ease}@media (prefers-reduced-motion:reduce){.table-hover tr{transition:none}}.table-flush td,.table-flush th{border-right:0;border-left:0}.table-flush tbody tr:first-child td,.table-flush tbody tr:first-child th{border-top:0}.table-flush tbody tr:last-child td,.table-flush tbody tr:last-child th{border-bottom:0}.card .table{margin-bottom:0}.card .table td,.card .table th{padding-right:1.5rem;padding-left:1.5rem}.table .custom-toggle{display:block}.table-action{font-size:.875rem;margin:0 .25rem;color:#adb5bd}.table-action:hover{color:#919ca6}.table-action-delete:hover{color:#f5365c}.table-dark .table-action{color:#4d7bca}.table [data-sort]{cursor:pointer}.table .thead-dark [data-sort]:after,.table .thead-light [data-sort]:after{margin-left:.25rem}.timeline{position:relative}.timeline:before{position:absolute;top:0;left:1rem;height:100%;content:\"\";border-right:2px solid #e9ecef}[data-timeline-axis-style=dashed]:before{border-right-style:dashed!important}[data-timeline-axis-style=dotted]:before{border-right-style:dotted!important}.timeline-block{position:relative;margin:2em 0}.timeline-block:after{display:table;clear:both;content:\"\"}.timeline-block:first-child{margin-top:0}.timeline-block:last-child{margin-bottom:0}.timeline-step{font-size:1rem;font-weight:600;position:absolute;z-index:1;left:0;display:inline-flex;width:33px;height:33px;transform:translateX(-50%);text-align:center;border-radius:50%;align-items:center;justify-content:center}.timeline-step i,.timeline-step svg{line-height:1.4}.timeline-step-icon{border:2px solid #e9ecef;background:#fff}.timeline-step-xs{font-size:.75rem;width:17px;height:17px}.timeline-step-sm{font-size:.75rem;width:23px;height:23px}.timeline-step-lg{font-size:1.75rem;width:47px;height:47px}.timeline-content{position:relative;top:-6px;margin-left:60px;padding-top:.5rem}.timeline-content:after{display:table;clear:both;content:\"\"}.timeline-body{padding:1.5rem}@media (min-width:992px){.timeline:before{left:50%;margin-left:-2px}.timeline-step{left:50%}.timeline-content{width:38%}.timeline-body{padding:1.5rem}.timeline-block:nth-child(2n) .timeline-content{float:right}[data-timeline-axis-color=primary]:before{border-color:#004689}[data-timeline-axis-color=secondary]:before{border-color:#f7fafc}[data-timeline-axis-color=success]:before{border-color:#2dce89}[data-timeline-axis-color=info]:before{border-color:#11cdef}[data-timeline-axis-color=warning]:before{border-color:#fb6340}[data-timeline-axis-color=danger]:before{border-color:#f5365c}[data-timeline-axis-color=light]:before{border-color:#adb5bd}[data-timeline-axis-color=dark]:before{border-color:#212529}[data-timeline-axis-color=default]:before{border-color:#172b4d}[data-timeline-axis-color=neutral]:before,[data-timeline-axis-color=white]:before{border-color:#fff}[data-timeline-axis-color=darker]:before{border-color:#000}}.timeline-one-side .timeline-step,.timeline-one-side:before{left:1rem}.timeline-one-side .timeline-content{width:auto}@media (min-width:992px){.timeline-one-side .timeline-content{max-width:30rem}}.timeline-one-side .timeline-block:nth-child(2n) .timeline-content{float:none}p{font-size:1rem}.lead,p{font-weight:300;line-height:1.7}.lead{font-size:1.25rem;margin-top:1.5rem}.lead+.btn-wrapper{margin-top:3rem}.description{font-size:.875rem}article h4:not(:first-child),article h5:not(:first-child){margin-top:3rem}article h4,article h5{margin-bottom:1.5rem}article figure{margin:3rem 0}article h5+figure{margin-top:0}.display-1 span,.display-2 span,.display-3 span,.display-4 span{font-weight:300;display:block}h1>a,h2>a,h3>a,h4>a,h5>a,h6>a{color:inherit}.heading{font-size:.95rem;font-weight:600;letter-spacing:.025em}.heading,.heading-small{text-transform:uppercase}.heading-small{font-size:.75rem;padding-top:.25rem;padding-bottom:.25rem;letter-spacing:.04em}.heading-section,.heading-title{font-size:1.375rem;font-weight:600;letter-spacing:.025em;text-transform:uppercase}.heading-section img{display:block;width:72px;height:72px;margin-bottom:1.5rem}.heading-section.text-center img{margin-right:auto;margin-left:auto}.surtitle{margin-bottom:0;letter-spacing:2px;text-transform:uppercase;color:#8898aa}.bg-blue{background-color:#004689!important}a.bg-blue:focus,a.bg-blue:hover,button.bg-blue:focus,button.bg-blue:hover{background-color:#324cdd!important}.bg-indigo{background-color:#5603ad!important}a.bg-indigo:focus,a.bg-indigo:hover,button.bg-indigo:focus,button.bg-indigo:hover{background-color:#3d027b!important}.bg-purple{background-color:#8965e0!important}a.bg-purple:focus,a.bg-purple:hover,button.bg-purple:focus,button.bg-purple:hover{background-color:#683bd7!important}.bg-pink{background-color:#f3a4b5!important}a.bg-pink:focus,a.bg-pink:hover,button.bg-pink:focus,button.bg-pink:hover{background-color:#ed7790!important}.bg-red{background-color:#f5365c!important}a.bg-red:focus,a.bg-red:hover,button.bg-red:focus,button.bg-red:hover{background-color:#ec0c38!important}.bg-orange{background-color:#fb6340!important}a.bg-orange:focus,a.bg-orange:hover,button.bg-orange:focus,button.bg-orange:hover{background-color:#fa3a0e!important}.bg-yellow{background-color:#ffd600!important}a.bg-yellow:focus,a.bg-yellow:hover,button.bg-yellow:focus,button.bg-yellow:hover{background-color:#ccab00!important}.bg-green{background-color:#2dce89!important}a.bg-green:focus,a.bg-green:hover,button.bg-green:focus,button.bg-green:hover{background-color:#24a46d!important}.bg-teal{background-color:#11cdef!important}a.bg-teal:focus,a.bg-teal:hover,button.bg-teal:focus,button.bg-teal:hover{background-color:#0da5c0!important}.bg-cyan{background-color:#2bffc6!important}a.bg-cyan:focus,a.bg-cyan:hover,button.bg-cyan:focus,button.bg-cyan:hover{background-color:#00f7b5!important}.bg-white{background-color:#fff!important}a.bg-white:focus,a.bg-white:hover,button.bg-white:focus,button.bg-white:hover{background-color:#e6e6e6!important}.bg-gray{background-color:#8898aa!important}a.bg-gray:focus,a.bg-gray:hover,button.bg-gray:focus,button.bg-gray:hover{background-color:#6a7e95!important}.bg-gray-dark{background-color:#32325d!important}a.bg-gray-dark:focus,a.bg-gray-dark:hover,button.bg-gray-dark:focus,button.bg-gray-dark:hover{background-color:#20203c!important}.bg-light{background-color:#ced4da!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#b1bbc4!important}.bg-lighter{background-color:#e9ecef!important}a.bg-lighter:focus,a.bg-lighter:hover,button.bg-lighter:focus,button.bg-lighter:hover{background-color:#cbd3da!important}.bg-gradient-blue{background:linear-gradient(87deg,#004689,#825ee4)!important}.bg-gradient-indigo{background:linear-gradient(87deg,#5603ad,#9d03ad)!important}.bg-gradient-purple{background:linear-gradient(87deg,#8965e0,#bc65e0)!important}.bg-gradient-pink{background:linear-gradient(87deg,#f3a4b5,#f3b4a4)!important}.bg-gradient-red{background:linear-gradient(87deg,#f5365c,#f56036)!important}.bg-gradient-orange{background:linear-gradient(87deg,#fb6340,#fbb140)!important}.bg-gradient-yellow{background:linear-gradient(87deg,#ffd600,#beff00)!important}.bg-gradient-green{background:linear-gradient(87deg,#2dce89,#2dcecc)!important}.bg-gradient-teal{background:linear-gradient(87deg,#11cdef,#1171ef)!important}.bg-gradient-cyan{background:linear-gradient(87deg,#2bffc6,#2be0ff)!important}.bg-gradient-gray{background:linear-gradient(87deg,#8898aa,#888aaa)!important}.bg-gradient-gray-dark{background:linear-gradient(87deg,#32325d,#44325d)!important}.bg-gradient-light{background:linear-gradient(87deg,#ced4da,#cecfda)!important}.bg-gradient-lighter{background:linear-gradient(87deg,#e9ecef,#e9eaef)!important}.bg-translucent-primary{background-color:rgba(63,87,223,.6)!important}a.bg-translucent-primary:focus,a.bg-translucent-primary:hover,button.bg-translucent-primary:focus,button.bg-translucent-primary:hover{background-color:rgba(42,68,219,.6)!important}.bg-translucent-secondary{background-color:rgba(221,234,242,.6)!important}a.bg-translucent-secondary:focus,a.bg-translucent-secondary:hover,button.bg-translucent-secondary:focus,button.bg-translucent-secondary:hover{background-color:rgba(202,222,235,.6)!important}.bg-translucent-success{background-color:rgba(39,177,118,.6)!important}a.bg-translucent-success:focus,a.bg-translucent-success:hover,button.bg-translucent-success:focus,button.bg-translucent-success:hover{background-color:rgba(34,156,104,.6)!important}.bg-translucent-info{background-color:rgba(14,177,206,.6)!important}a.bg-translucent-info:focus,a.bg-translucent-info:hover,button.bg-translucent-info:focus,button.bg-translucent-info:hover{background-color:rgba(12,156,183,.6)!important}.bg-translucent-warning{background-color:rgba(250,70,29,.6)!important}a.bg-translucent-warning:focus,a.bg-translucent-warning:hover,button.bg-translucent-warning:focus,button.bg-translucent-warning:hover{background-color:rgba(249,51,5,.6)!important}.bg-translucent-danger{background-color:rgba(243,20,64,.6)!important}a.bg-translucent-danger:focus,a.bg-translucent-danger:hover,button.bg-translucent-danger:focus,button.bg-translucent-danger:hover{background-color:rgba(227,11,54,.6)!important}.bg-translucent-light{background-color:rgba(153,163,173,.6)!important}a.bg-translucent-light:focus,a.bg-translucent-light:hover,button.bg-translucent-light:focus,button.bg-translucent-light:hover{background-color:rgba(139,150,162,.6)!important}.bg-translucent-dark{background-color:rgba(17,19,21,.6)!important}a.bg-translucent-dark:focus,a.bg-translucent-dark:hover,button.bg-translucent-dark:focus,button.bg-translucent-dark:hover{background-color:rgba(6,6,7,.6)!important}.bg-translucent-default{background-color:rgba(15,28,50,.6)!important}a.bg-translucent-default:focus,a.bg-translucent-default:hover,button.bg-translucent-default:focus,button.bg-translucent-default:hover{background-color:rgba(9,17,30,.6)!important}.bg-translucent-white{background-color:hsla(0,0%,92.9%,.6)!important}a.bg-translucent-white:focus,a.bg-translucent-white:hover,button.bg-translucent-white:focus,button.bg-translucent-white:hover{background-color:hsla(0,0%,87.8%,.6)!important}.bg-translucent-neutral{background-color:hsla(0,0%,92.9%,.6)!important}a.bg-translucent-neutral:focus,a.bg-translucent-neutral:hover,button.bg-translucent-neutral:focus,button.bg-translucent-neutral:hover{background-color:hsla(0,0%,87.8%,.6)!important}.bg-translucent-darker,a.bg-translucent-darker:focus,a.bg-translucent-darker:hover,button.bg-translucent-darker:focus,button.bg-translucent-darker:hover{background-color:rgba(0,0,0,.6)!important}.section-primary{background-color:#f8f9fe!important}a.section-primary:focus,a.section-primary:hover,button.section-primary:focus,button.section-primary:hover{background-color:#cbd3f8!important}.section-secondary{background-color:#f7fafc!important}a.section-secondary:focus,a.section-secondary:hover,button.section-secondary:focus,button.section-secondary:hover{background-color:#d2e3ee!important}.section-light{background-color:#ced4da!important}a.section-light:focus,a.section-light:hover,button.section-light:focus,button.section-light:hover{background-color:#b1bbc4!important}.section-dark{background-color:#212529!important}a.section-dark:focus,a.section-dark:hover,button.section-dark:focus,button.section-dark:hover{background-color:#0a0c0d!important}.section-darker,a.section-darker:focus,a.section-darker:hover,button.section-darker:focus,button.section-darker:hover{background-color:#000!important}.bg-gradient-primary{background:linear-gradient(87deg,#004689,#825ee4)!important}.bg-gradient-secondary{background:linear-gradient(87deg,#f7fafc,#f7f8fc)!important}.bg-gradient-success{background:linear-gradient(87deg,#2dce89,#2dcecc)!important}.bg-gradient-info{background:linear-gradient(87deg,#11cdef,#1171ef)!important}.bg-gradient-warning{background:linear-gradient(87deg,#fb6340,#fbb140)!important}.bg-gradient-danger{background:linear-gradient(87deg,#f5365c,#f56036)!important}.bg-gradient-light{background:linear-gradient(87deg,#adb5bd,#adaebd)!important}.bg-gradient-dark{background:linear-gradient(87deg,#212529,#212229)!important}.bg-gradient-default{background:linear-gradient(87deg,#172b4d,#1a174d)!important}.bg-gradient-neutral,.bg-gradient-white{background:linear-gradient(87deg,#fff,#fff)!important}.bg-gradient-darker{background:linear-gradient(87deg,#000,#000)!important}.fill-primary{fill:#004689}.stroke-primary{stroke:#004689}.fill-secondary{fill:#f7fafc}.stroke-secondary{stroke:#f7fafc}.fill-success{fill:#2dce89}.stroke-success{stroke:#2dce89}.fill-info{fill:#11cdef}.stroke-info{stroke:#11cdef}.fill-warning{fill:#fb6340}.stroke-warning{stroke:#fb6340}.fill-danger{fill:#f5365c}.stroke-danger{stroke:#f5365c}.fill-light{fill:#adb5bd}.stroke-light{stroke:#adb5bd}.fill-dark{fill:#212529}.stroke-dark{stroke:#212529}.fill-default{fill:#172b4d}.stroke-default{stroke:#172b4d}.fill-white{fill:#fff}.stroke-white{stroke:#fff}.fill-neutral{fill:#fff}.stroke-neutral{stroke:#fff}.fill-darker{fill:#000}.stroke-darker{stroke:#000}.fill-opacity-8{fill-opacity:.8}.blur--hover{position:relative}.blur--hover .blur-item{transition:1s cubic-bezier(.19,1,.22,1);opacity:1;will-change:transform;filter:blur(0)}.blur--hover .blur-hidden{position:absolute;z-index:100;top:calc(50% + 7px);left:50%;transition:all .15s ease;transform:translate(-50%,-50%);opacity:0}.blur--hover:hover .blur-item{z-index:1;transform:scale(.95);opacity:.8;filter:blur(10px)}.blur--hover:hover .blur-hidden{top:50%;opacity:1}.floating{-webkit-animation:floating 3s ease infinite;animation:floating 3s ease infinite;will-change:transform}.floating:hover{-webkit-animation-play-state:paused;animation-play-state:paused}.floating-lg{-webkit-animation:floating-lg 3s ease infinite;animation:floating-lg 3s ease infinite}.floating-sm{-webkit-animation:floating-sm 3s ease infinite;animation:floating-sm 3s ease infinite}@-webkit-keyframes floating-lg{0%{transform:translateY(0)}50%{transform:translateY(15px)}to{transform:translateY(0)}}@keyframes floating-lg{0%{transform:translateY(0)}50%{transform:translateY(15px)}to{transform:translateY(0)}}@-webkit-keyframes floating{0%{transform:translateY(0)}50%{transform:translateY(10px)}to{transform:translateY(0)}}@keyframes floating{0%{transform:translateY(0)}50%{transform:translateY(10px)}to{transform:translateY(0)}}@-webkit-keyframes floating-sm{0%{transform:translateY(0)}50%{transform:translateY(5px)}to{transform:translateY(0)}}@keyframes floating-sm{0%{transform:translateY(0)}50%{transform:translateY(5px)}to{transform:translateY(0)}}.floatfix:after,.floatfix:before{display:table;content:\"\"}.floatfix:after{clear:both}.img-center{display:block;margin-right:auto;margin-left:auto}.opacity-1{opacity:.1!important}.opacity-2{opacity:.2!important}.opacity-3{opacity:.3!important}.opacity-4{opacity:.4!important}.opacity-5{opacity:.5!important}.opacity-6{opacity:.6!important}.opacity-7{opacity:.7!important}.opacity-8{opacity:.8!important;opacity:.9!important}.opacity-10{opacity:1!important}.overflow-visible{overflow:visible!important}.overflow-hidden{overflow:hidden!important}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.top-1{top:.25rem}.right-1{right:.25rem}.bottom-1{bottom:.25rem}.left-1{left:.25rem}.top-2{top:.5rem}.right-2{right:.5rem}.bottom-2{bottom:.5rem}.left-2{left:.5rem}.top-3{top:1rem}.right-3{right:1rem}.bottom-3{bottom:1rem}.left-3{left:1rem}.top-4{top:1.5rem}.right-4{right:1.5rem}.bottom-4{bottom:1.5rem}.left-4{left:1.5rem}.top-5{top:3rem}.right-5{right:3rem}.bottom-5{bottom:3rem}.left-5{left:3rem}.top--9{top:-10rem}.right--9{right:-10rem}.bottom--9{bottom:-10rem}.left--9{left:-10rem}.top--8{top:-8rem}.right--8{right:-8rem}.bottom--8{bottom:-8rem}.left--8{left:-8rem}.top--7{top:-6rem}.right--7{right:-6rem}.bottom--7{bottom:-6rem}.left--7{left:-6rem}.top--6{top:-4.5rem}.right--6{right:-4.5rem}.bottom--6{bottom:-4.5rem}.left--6{left:-4.5rem}.top--5{top:-3rem}.right--5{right:-3rem}.bottom--5{bottom:-3rem}.left--5{left:-3rem}.top--4{top:-1.5rem}.right--4{right:-1.5rem}.bottom--4{bottom:-1.5rem}.left--4{left:-1.5rem}.top--3{top:-1rem}.right--3{right:-1rem}.bottom--3{bottom:-1rem}.left--3{left:-1rem}.top--2{top:-.5rem}.right--2{right:-.5rem}.bottom--2{bottom:-.5rem}.left--2{left:-.5rem}.top--1{top:-.25rem}.right--1{right:-.25rem}.bottom--1{bottom:-.25rem}.left--1{left:-.25rem}.top-6{top:4.5rem}.right-6{right:4.5rem}.bottom-6{bottom:4.5rem}.left-6{left:4.5rem}.top-7{top:6rem}.right-7{right:6rem}.bottom-7{bottom:6rem}.left-7{left:6rem}.top-8{top:8rem}.right-8{right:8rem}.bottom-8{bottom:8rem}.left-8{left:8rem}.top-9{top:10rem}.right-9{right:10rem}.bottom-9{bottom:10rem}.left-9{left:10rem}.center{left:50%;transform:translateX(-50%)}[class*=shadow]{transition:all .15s ease}.shadow-sm--hover:hover{box-shadow:0 0 .5rem rgba(136,152,170,.075)!important}.shadow--hover:hover{box-shadow:0 0 2rem 0 rgba(136,152,170,.15)!important}.shadow-lg--hover:hover{box-shadow:0 0 3rem rgba(136,152,170,.175)!important}.shadow-none--hover:hover{box-shadow:none!important}.h-100vh{height:100vh!important}.row.row-grid>[class*=col-]+[class*=col-]{margin-top:3rem}@media (min-width:992px){.row.row-grid>[class*=col-lg-]+[class*=col-lg-]{margin-top:0}}@media (min-width:768px){.row.row-grid>[class*=col-md-]+[class*=col-md-]{margin-top:0}}@media (min-width:576px){.row.row-grid>[class*=col-sm-]+[class*=col-sm-]{margin-top:0}}.row-grid+.row-grid{margin-top:3rem}@media (min-width:992px){.mt--100{margin-top:-100px!important}.mr--100{margin-right:-100px!important}.mb--100{margin-bottom:-100px!important}.ml--100{margin-left:-100px!important}.mt--150{margin-top:-150px!important}.mb--150{margin-bottom:-150px!important}.mt--200{margin-top:-200px!important}.mb--200{margin-bottom:-200px!important}.mt--300{margin-top:-300px!important}.mb--300{margin-bottom:-300px!important}.pt-100{padding-top:100px!important}.pb-100{padding-bottom:100px!important}.pt-150{padding-top:150px!important}.pb-150{padding-bottom:150px!important}.pt-200{padding-top:200px!important}.pb-200{padding-bottom:200px!important}.pt-250{padding-top:250px!important}.pb-250{padding-bottom:250px!important}.pt-300{padding-top:300px!important}.pb-300{padding-bottom:300px!important}}.font-weight-300{font-weight:300!important}.font-weight-400{font-weight:400!important}.font-weight-500{font-weight:500!important}.font-weight-600{font-weight:600!important}.font-weight-700{font-weight:700!important}.font-weight-800{font-weight:800!important}.font-weight-900{font-weight:900!important}.text-underline{text-decoration:underline}.text-through{text-decoration:line-through}.text-xs{font-size:.75rem!important}.text-sm{font-size:.875rem!important}.text-lg{font-size:1.25rem!important}.text-xl{font-size:1.5rem!important}.lh-100{line-height:1}.lh-110{line-height:1.1}.lh-120{line-height:1.2}.lh-130{line-height:1.3}.lh-140{line-height:1.4}.lh-150{line-height:1.5}.lh-160{line-height:1.6}.lh-170{line-height:1.7}.lh-180{line-height:1.8}.ls-1{letter-spacing:.0625rem}.ls-15{letter-spacing:.09375rem}.ls-2{letter-spacing:.125rem}.text-blue{color:#004689!important}a.text-blue:focus,a.text-blue:hover{color:#233dd2!important}.text-indigo{color:#5603ad!important}a.text-indigo:focus,a.text-indigo:hover{color:#310262!important}.text-purple{color:#8965e0!important}a.text-purple:focus,a.text-purple:hover{color:#5a2acf!important}.text-pink{color:#f3a4b5!important}a.text-pink:focus,a.text-pink:hover{color:#ea607e!important}.text-red{color:#f5365c!important}a.text-red:focus,a.text-red:hover{color:#d40b33!important}.text-orange{color:#fb6340!important}a.text-orange:focus,a.text-orange:hover{color:#ea3005!important}.text-yellow{color:#ffd600!important}a.text-yellow:focus,a.text-yellow:hover{color:#b39600!important}.text-green{color:#2dce89!important}a.text-green:focus,a.text-green:hover{color:#1f8f5f!important}.text-teal{color:#11cdef!important}a.text-teal:focus,a.text-teal:hover{color:#0b90a8!important}.text-cyan{color:#2bffc6!important}a.text-cyan:focus,a.text-cyan:hover{color:#00dea2!important}.text-white{color:#fff!important}a.text-white:focus,a.text-white:hover{color:#d9d9d9!important}.text-gray{color:#8898aa!important}a.text-gray:focus,a.text-gray:hover{color:#607286!important}.text-gray-dark{color:#32325d!important}a.text-gray-dark:focus,a.text-gray-dark:hover{color:#17172b!important}.text-light{color:#ced4da!important}a.text-light:focus,a.text-light:hover{color:#a2aeb9!important}.text-lighter{color:#e9ecef!important}a.text-lighter:focus,a.text-lighter:hover{color:#bdc6cf!important}@media (min-width:992px){.transform-perspective-right{transform:scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)}.transform-perspective-left{transform:scale(1) perspective(2000px) rotateY(11deg) rotateX(2deg) rotate(-2deg)}}.datepicker{border-radius:.375rem;direction:ltr}.datepicker-inline{width:220px}.datepicker-rtl{direction:rtl}.datepicker-rtl.dropdown-menu{left:auto}.datepicker-rtl table tr td span{float:right}.datepicker-dropdown{top:0;left:0;padding:20px 22px;box-shadow:0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1)}.datepicker-dropdown.datepicker-orient-left:before{left:6px}.datepicker-dropdown.datepicker-orient-left:after{left:7px}.datepicker-dropdown.datepicker-orient-right:before{right:6px}.datepicker-dropdown.datepicker-orient-right:after{right:7px}.datepicker-dropdown.datepicker-orient-bottom:before{top:-7px}.datepicker-dropdown.datepicker-orient-bottom:after{top:-6px}.datepicker-dropdown.datepicker-orient-top:before{bottom:-7px;border-top:7px solid #fff;border-bottom:0}.datepicker-dropdown.datepicker-orient-top:after{bottom:-6px;border-top:6px solid #fff;border-bottom:0}.datepicker table{margin:0;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-touch-callout:none}.datepicker table tr td{border-radius:50%}.datepicker table tr th{font-weight:500;border-radius:.375rem}.datepicker table tr td,.datepicker table tr th{font-size:.875rem;width:36px;height:36px;transition:all .15s ease;text-align:center;border:none}.table-striped .datepicker table tr td,.table-striped .datepicker table tr th{background-color:transparent}.datepicker table tr td.new,.datepicker table tr td.old{color:#adb5bd}.datepicker table tr td.day:hover,.datepicker table tr td.focused{cursor:pointer;background:#fff}.datepicker table tr td.disabled,.datepicker table tr td.disabled:hover{cursor:default;color:#dee2e6;background:0 0}.datepicker table tr td.highlighted{border-radius:0}.datepicker table tr td.highlighted.focused{background:#004689}.datepicker table tr td.highlighted.disabled,.datepicker table tr td.highlighted.disabled:active{color:#ced4da;background:#004689}.datepicker table tr td.today,.datepicker table tr td.today.focused{background:#fff}.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:active{color:#8898aa;background:#fff}.datepicker table tr td.range{color:#fff;border-radius:0;background:#004689}.datepicker table tr td.range.focused{background:#3b53de}.datepicker table tr td.range.day.disabled:hover,.datepicker table tr td.range.disabled,.datepicker table tr td.range.disabled:active{color:#8a98eb;background:#324cdd}.datepicker table tr td.range.highlighted.focused{background:#cbd3da}.datepicker table tr td.range.highlighted.disabled,.datepicker table tr td.range.highlighted.disabled:active{color:#dee2e6;background:#e9ecef}.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled:active{color:#fff;background:#004689}.datepicker table tr td.day.range-start{border-top-right-radius:0;border-bottom-right-radius:0}.datepicker table tr td.day.range-end{border-top-left-radius:0;border-bottom-left-radius:0}.datepicker table tr td.day.range-start.range-end{border-radius:50%}.datepicker table tr td.day.range:hover,.datepicker table tr td.selected,.datepicker table tr td.selected.highlighted,.datepicker table tr td.selected.highlighted:hover,.datepicker table tr td.selected:hover{color:#fff;background:#004689}.datepicker table tr td.active,.datepicker table tr td.active.highlighted,.datepicker table tr td.active.highlighted:hover,.datepicker table tr td.active:hover{color:#fff;background:#004689;box-shadow:none}.datepicker table tr td span{line-height:54px;display:block;float:left;width:23%;height:54px;margin:1%;cursor:pointer;border-radius:4px}.datepicker table tr td span.focused,.datepicker table tr td span:hover{background:#e9ecef}.datepicker table tr td span.disabled,.datepicker table tr td span.disabled:hover{cursor:default;color:#dee2e6;background:0 0}.datepicker table tr td span.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active:hover{text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td span.new,.datepicker table tr td span.old{color:#8898aa}.datepicker .datepicker-switch{width:145px}.datepicker .datepicker-switch,.datepicker .next,.datepicker .prev,.datepicker tfoot tr th{cursor:pointer}.datepicker .datepicker-switch:hover,.datepicker .next:hover,.datepicker .prev:hover,.datepicker tfoot tr th:hover{background:#e9ecef}.datepicker .next.disabled,.datepicker .prev.disabled{visibility:hidden}.datepicker .cw{font-size:10px;width:12px;padding:0 2px 0 5px;vertical-align:middle}.bootstrap-tagsinput{display:inline-block;max-width:100%;padding:.25rem;cursor:text;vertical-align:middle;color:#8898aa;border:0 solid transparent;border-radius:.25rem;background-color:#fff}.bootstrap-tagsinput input{width:auto;max-width:inherit;margin:0;padding:0 6px;border:none;outline:0;background-color:transparent;box-shadow:none}.bootstrap-tagsinput input::-moz-placeholder{opacity:1;color:#adb5bd}.bootstrap-tagsinput input:-ms-input-placeholder{opacity:1;color:#adb5bd}.bootstrap-tagsinput input::placeholder{opacity:1;color:#adb5bd}.bootstrap-tagsinput input:focus{border:none;box-shadow:none}.bootstrap-tagsinput .badge{line-height:1.5;position:relative;margin:.125rem;padding:.625rem .625rem .5rem;transition:all .15s ease;color:#fff;border-radius:.25rem;background:#172b4d;box-shadow:0 1px 2px rgba(68,68,68,.25)}@media (prefers-reduced-motion:reduce){.bootstrap-tagsinput .badge{transition:none}}.bootstrap-tagsinput .badge:hover{padding-right:1.5rem}.bootstrap-tagsinput [data-role=remove]{position:absolute;top:50%;margin-left:10px;cursor:pointer;transform:translateY(-50%);color:#fff}.bootstrap-tagsinput [data-role=remove]:after{font-size:16px;content:\"×\"}#chartjs-tooltip{position:absolute;transition:all .1s ease;transform:translate(-50%);pointer-events:none;opacity:1;color:#fff;border-radius:3px;background:rgba(0,0,0,.7)}.chartjs-tooltip-key{display:inline-block;width:10px;height:10px;margin-right:10px}.dataTables_wrapper{font-size:.875rem}table.dataTable{margin-bottom:1.25rem!important;border-bottom:1px solid #e9ecef}table.dataTable tbody>tr.selected{background-color:#004689}.dataTables_info,.dataTables_length,.dt-buttons{padding-left:1.5rem}.dataTables_length .form-control{margin:0 .375rem}.dataTables_filter{display:inline-block;float:right}.dataTables_filter,.dataTables_paginate{padding-right:1.5rem}.dropzone{position:relative;display:flex;flex-direction:column}.dz-message{z-index:999;padding:5rem 1rem;cursor:pointer;transition:all .15s ease;text-align:center;color:#8898aa;border:1px dashed #dee2e6;border-radius:.375rem;background-color:#fff;order:-1}.dz-message:hover{color:#525f7f;border-color:#8898aa}.dz-drag-hover .dz-message{color:#004689;border-color:#004689}.dropzone-multiple .dz-message{padding-top:2rem;padding-bottom:2rem}.dropzone-single.dz-max-files-reached .dz-message{opacity:0;color:#fff;background-color:rgba(0,0,0,.9)}.dropzone-single.dz-max-files-reached .dz-message:hover{opacity:1}.dz-preview-cover,.dz-preview-single{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:.375rem}.dz-preview-img{width:100%;height:100%;border-radius:.375rem;-o-object-fit:cover;object-fit:cover}.dz-preview-multiple .list-group-item:last-child{padding-bottom:0;border-bottom:0}[data-dz-size] strong{font-weight:400}.fc-header-toolbar{display:none}.fc-scroller{height:auto!important}.fc th{font-size:.75rem;font-weight:600;padding:.75rem 1rem;text-transform:uppercase;color:#8898aa}.fc div.fc-row{margin-right:0;border:0}.fc button .fc-icon{top:-5px}.fc-unthemed td.fc-today{background-color:transparent}.fc-unthemed td.fc-today span{color:#fb6340}.fc-event{font-size:.75rem;padding:0;border:0;border-radius:.25rem}.fc-event .fc-title{font-weight:600;display:block;overflow:hidden;padding:.4rem .5rem;white-space:nowrap;text-overflow:ellipsis;color:#fff}.fc-event .fc-time{float:left;margin:0 0 0 -1px;padding:2px 6px;background:rgba(0,0,0,.2)}.fc-view,.fc-view>table{overflow:hidden;border:0}.fc-view>table>tbody>tr .ui-widget-content{border-top:0}.fc-body{border:0}.fc-icon{font-family:NucleoIcons,sans-serif;font-size:1rem;line-height:35px;width:35px;height:35px;border-radius:50%}.fc-icon:hover{color:#004689}.fc-button{border:0;background:0 0;box-shadow:none}.fc-button:active,.fc-button:focus{outline:0}.calendar{z-index:0}.calendar td,.calendar th{border-color:#eff1f3}.calendar .fc-toolbar{position:relative;z-index:2;height:250px;margin-bottom:-2px;border-radius:.375rem .375rem 0 0;background-color:#fff}@media (max-width:575.98px){.calendar .fc-toolbar{height:135px}}.calendar .fc-day-number{box-sizing:border-box;width:100%;padding:.5rem 1rem}@media (min-width:576px){.calendar .fc-day-number{font-size:.875rem;font-weight:600;color:#67779d}}.calendar .fc-day-header{text-align:left}.calendar .fc-day-grid-event{margin:1px 9px}[data-calendar-month]{transition:background-image .3s;background-size:contain}@media (prefers-reduced-motion:reduce){[data-calendar-month]{transition:none}}.card-calendar .card-header{border-bottom:0}.card-calendar table{background:0 0}.card-calendar table tr>td:first-child{border-left-width:0}.card-calendar table tr>td:last-child{border-right-width:0}.widget-calendar{position:relative;z-index:0}.widget-calendar td,.widget-calendar th{text-align:center;border-color:transparent}.widget-calendar .fc-toolbar{margin-top:1.25rem}.widget-calendar .fc-toolbar h2{font-size:1rem}.widget-calendar .fc-day-number{width:100%;padding:0;text-align:center}.widget-calendar .fc table{font-size:.875rem}.widget-calendar .fc th{font-size:.75rem;padding:.75rem .5rem}.vector-map{position:relative;height:600px}.vector-map-sm{height:280px}.jvectormap-container{width:100%;height:100%}.jvectormap-zoomin,.jvectormap-zoomout{position:absolute;bottom:0;left:0}.jvectormap-zoomin{bottom:4.25rem}.jvectormap-zoomout{bottom:2rem}\n\n/*!\n * Lavalamp\n * http://lavalamp.magicmediamuse.com/\n */.lavalamp,.lavalamp-item{position:relative}.lavalamp-item{z-index:5}.lavalamp-object{position:absolute;top:0;left:0}.lavalamp .lavalamp-object{transition-property:transform,width,height}.lavalamp .lavalamp-object.ease{transition-timing-function:ease}.lavalamp .lavalamp-object.ease-in{transition-timing-function:ease-in}.lavalamp .lavalamp-object.ease-out{transition-timing-function:ease-out}.lavalamp .lavalamp-object.ease-in-out{transition-timing-function:ease-in-out}.lavalamp .lavalamp-object.linear{transition-timing-function:linear}.lavalamp .lavalamp-object.easeInQuad{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}.lavalamp .lavalamp-object.easeInCubic{transition-timing-function:cubic-bezier(.55,.055,.675,.19)}.lavalamp .lavalamp-object.easeInQuart{transition-timing-function:cubic-bezier(.895,.03,.685,.22)}.lavalamp .lavalamp-object.easeInQuint{transition-timing-function:cubic-bezier(.755,.05,.855,.06)}.lavalamp .lavalamp-object.easeInSine{transition-timing-function:cubic-bezier(.47,0,.745,.715)}.lavalamp .lavalamp-object.easeInExpo{transition-timing-function:cubic-bezier(.95,.05,.795,.035)}.lavalamp .lavalamp-object.easeInCirc{transition-timing-function:cubic-bezier(.6,.04,.98,.335)}.lavalamp .lavalamp-object.easeInBack{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}.lavalamp .lavalamp-object.easeOutQuad{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}.lavalamp .lavalamp-object.easeOutCubic{transition-timing-function:cubic-bezier(.215,.61,.355,1)}.lavalamp .lavalamp-object.easeOutQuart{transition-timing-function:cubic-bezier(.165,.84,.44,1)}.lavalamp .lavalamp-object.easeOutQuint{transition-timing-function:cubic-bezier(.23,1,.32,1)}.lavalamp .lavalamp-object.easeOutSine{transition-timing-function:cubic-bezier(.39,.575,.565,1)}.lavalamp .lavalamp-object.easeOutExpo{transition-timing-function:cubic-bezier(.19,1,.22,1)}.lavalamp .lavalamp-object.easeOutCirc{transition-timing-function:cubic-bezier(.075,.82,.165,1)}.lavalamp .lavalamp-object.easeOutBack{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.lavalamp .lavalamp-object.easeInOutQuad{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}.lavalamp .lavalamp-object.easeInOutCubic,.lavalamp .lavalamp-object.easeInOutQuart{transition-timing-function:cubic-bezier(.645,.045,.355,1)}.lavalamp .lavalamp-object.easeInOutQuint{transition-timing-function:cubic-bezier(.86,0,.07,1)}.lavalamp .lavalamp-object.easeInOutSine{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}.lavalamp .lavalamp-object.easeInOutExpo{transition-timing-function:cubic-bezier(1,0,0,1)}.lavalamp .lavalamp-object.easeInOutCirc{transition-timing-function:cubic-bezier(.785,.135,.15,.86)}.lavalamp .lavalamp-object.easeInOutBack{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}.noUi-target,.noUi-target *{box-sizing:border-box;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;touch-action:none}.noUi-target{position:relative;direction:ltr}.noUi-base,.noUi-connects{position:relative;z-index:1;width:100%;height:100%}.noUi-connects{z-index:0;overflow:hidden}.noUi-connect,.noUi-origin{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;transform-origin:0 0;will-change:transform}html:not([dir=rtl]) .noUi-horizontal .noUi-origin{right:0;left:auto}.noUi-vertical .noUi-origin{width:0}.noUi-horizontal .noUi-origin{height:0}.noUi-handle{position:absolute}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{transition:transform .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-horizontal .noUi-handle{top:-6px;left:-17px;width:34px;height:28px}.noUi-vertical .noUi-handle{top:-17px;left:-6px;width:28px;height:34px}html:not([dir=rtl]) .noUi-horizontal .noUi-handle{right:-17px;left:auto}.noUi-connects{border-radius:3px}.noUi-draggable{cursor:ew-resize}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-handle{cursor:default;border:1px solid #d9d9d9;border-radius:3px;outline:0;background:#fff;box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ebebeb,0 3px 6px -3px #bbb}.noUi-active{outline:0}[disabled] .noUi-connect{background:#b8b8b8}[disabled].noUi-handle,[disabled] .noUi-handle,[disabled].noUi-target{cursor:not-allowed}.noUi-pips,.noUi-pips *{box-sizing:border-box}.noUi-pips{position:absolute;color:#999}.noUi-value{position:absolute;text-align:center;white-space:nowrap}.noUi-value-sub{font-size:10px;color:#ccc}.noUi-marker{position:absolute;background:#ccc}.noUi-marker-large,.noUi-marker-sub{background:#aaa}.noUi-pips-horizontal{top:100%;left:0;width:100%;height:80px;padding:10px 0}.noUi-value-horizontal{transform:translate(-50%,50%)}.noUi-rtl .noUi-value-horizontal{transform:translate(50%,50%)}.noUi-marker-horizontal.noUi-marker{width:2px;height:5px;margin-left:-1px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:15px}.noUi-pips-vertical{top:0;left:100%;height:100%;padding:0 10px}.noUi-value-vertical{padding-left:25px;transform:translateY(-50%)}.noUi-rtl .noUi-value-vertical{transform:translateY(50%)}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{position:absolute;display:block;padding:5px;text-align:center;white-space:nowrap;color:#000;border:1px solid #d9d9d9;border-radius:3px;background:#fff}.noUi-horizontal .noUi-tooltip{bottom:120%;left:50%;transform:translate(-50%)}.noUi-vertical .noUi-tooltip{top:50%;right:120%;transform:translateY(-50%)}.noUi-target{margin:15px 0;cursor:pointer;border:0;border-radius:5px;background:#eceeef;box-shadow:inset 0 1px 2px rgba(90,97,105,.1)}.noUi-horizontal{height:5px}html:not([dir=rtl]) .noUi-horizontal .noUi-handle{right:-10px}.noUi-vertical{width:5px}.noUi-connect{background:#004689;box-shadow:none}.noUi-horizontal .noUi-handle,.noUi-vertical .noUi-handle{top:-5px;width:15px;height:15px;cursor:pointer;transition:box-shadow .15s,transform .15s;border:0;border-radius:100%;background-color:#004689;box-shadow:none}.noUi-horizontal .noUi-handle.noUi-active,.noUi-vertical .noUi-handle.noUi-active{box-shadow:0 0 0 2px #004689}.input-slider--cyan .noUi-connect{background:#2bffc6}[disabled].noUi-connect,[disabled] .noUi-connect{background:#b2b2b2}[disabled] .noUi-handle,[disabled].noUi-origin{cursor:not-allowed}.range-slider-value{font-size:.75rem;font-weight:500;padding:.4em .8em .3em .85em;color:#fff;border-radius:10px;background-color:rgba(33,37,41,.7)}.range-slider-wrapper .upper-info{font-weight:400;margin-bottom:5px}.input-slider-value-output{font-size:11px;position:relative;top:12px;padding:4px 8px;color:#fff;border-radius:2px;background:#333}.input-slider-value-output:after{position:absolute;bottom:100%;left:10px;width:0;height:0;margin-left:-4px;content:\" \";pointer-events:none;border:4px solid rgba(136,183,213,0);border-bottom-color:#333}.input-slider-value-output.left:after{right:auto;left:10px}.input-slider-value-output.right:after{right:10px;left:auto}.ql-container{font-family:Open Sans,sans-serif}.ql-toolbar{position:relative;padding:.625rem .75rem;color:#8898aa;border:1px solid #dee2e6;border-radius:.25rem .25rem 0 0;background-color:#fff}.ql-toolbar+.ql-container{margin-top:-1px}.ql-toolbar+.ql-container .ql-editor{border-top-left-radius:0;border-top-right-radius:0}.ql-editor{font-size:1rem;line-height:1.5;display:block;width:100%;min-height:6rem;padding:.625rem .75rem;transition:all .15s cubic-bezier(.68,-.55,.265,1.55);color:#8898aa;border:1px solid #dee2e6;border-radius:.25rem;background-color:#fff;background-clip:padding-box;box-shadow:0 3px 2px rgba(233,236,239,.05)}@media (prefers-reduced-motion:reduce){.ql-editor{transition:none}}.ql-editor::-ms-expand{border:0;background-color:transparent}.ql-editor:focus{color:#8898aa;border-color:#004689;outline:0;background-color:#fff;box-shadow:0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1);border-color:#dee2e6}.ql-hidden{position:absolute;transform:scale(0)}.ql-editor.ql-blank:before{font-style:normal;top:.625rem;left:.75rem;color:#adb5bd}.ql-editor:focus:before{display:none}.ql-formats{padding-right:.5rem;padding-left:.5rem}.ql-formats:first-child{padding-left:0}.ql-formats:last-child{padding-right:0}.ql-toolbar button{padding:0 .25rem;cursor:pointer;transition:all .15s ease;color:#525f7f;border:none;background:0 0}.ql-toolbar button:hover{color:#004689}.ql-toolbar button:first-child{margin-left:-.25rem}.ql-toolbar .ql-active{color:#004689}.ql-toolbar button svg{width:1.25rem;height:1.25rem}.ql-toolbar .ql-stroke{stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}.ql-toolbar .ql-thin{stroke-width:1}.ql-toolbar .ql-fill{fill:currentColor}.ql-toolbar input.ql-image{position:absolute;transform:scale(0)}.ql-tooltip{position:absolute;display:flex;width:18.5rem;margin-top:.6rem;padding:.625rem .75rem;border:1px solid rgba(0,0,0,.05);border-radius:.4375rem;background-color:#fff;box-shadow:0 .5rem 2rem 0 rgba(0,0,0,.2);flex-wrap:nowrap}.ql-tooltip:after,.ql-tooltip:before{position:absolute;bottom:100%;left:50%;content:\"\";transform:translateX(-50%)}.ql-tooltip:before{border-right:.6rem solid transparent;border-bottom:.6rem solid rgba(0,0,0,.05);border-left:.6rem solid transparent}.ql-tooltip:after{border-right:.5rem solid transparent;border-bottom:.5rem solid #fff;border-left:.5rem solid transparent}.ql-container .ql-tooltip:hover{display:flex!important}.ql-tooltip .ql-preview{font-size:.875rem;line-height:1.5;width:100%;padding:.25rem .5rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;border-radius:.25rem}@media (prefers-reduced-motion:reduce){.ql-tooltip .ql-preview{transition:none}}.ql-tooltip.ql-editing .ql-preview{display:none}.ql-tooltip input{font-size:.875rem;line-height:1.5;display:none;width:100%;padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);color:#8898aa;border:none;background-color:transparent}.ql-tooltip input:focus{outline:0}.ql-tooltip.ql-editing input{display:block}.ql-tooltip .ql-action,.ql-tooltip .ql-remove{margin-left:.25rem}.ql-tooltip .ql-action:before,.ql-tooltip .ql-remove:before{font-size:.875rem;font-weight:600;line-height:1.5;display:inline-block;padding:.25rem .5rem;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;text-align:center;vertical-align:middle;white-space:nowrap;border:1px solid transparent;border-radius:.25rem}@media (prefers-reduced-motion:reduce){.ql-tooltip .ql-action:before,.ql-tooltip .ql-remove:before{transition:none}}.ql-tooltip .ql-action:before:focus,.ql-tooltip .ql-action:before:hover,.ql-tooltip .ql-remove:before:focus,.ql-tooltip .ql-remove:before:hover{text-decoration:none}.ql-tooltip .ql-action:before.focus,.ql-tooltip .ql-action:before:focus,.ql-tooltip .ql-remove:before.focus,.ql-tooltip .ql-remove:before:focus{outline:0;box-shadow:0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)}.ql-tooltip .ql-action:before,.ql-tooltip.ql-editing .ql-action:before{color:#fff;border-color:#004689;background-color:#004689;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.ql-tooltip .ql-action:before:hover,.ql-tooltip.ql-editing .ql-action:before:hover{color:#fff;border-color:#004689;background-color:#004689}.ql-tooltip .ql-action:before.focus,.ql-tooltip .ql-action:before:focus,.ql-tooltip.ql-editing .ql-action:before.focus,.ql-tooltip.ql-editing .ql-action:before:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 rgba(94,114,228,.5)}.ql-tooltip .ql-action:before.disabled,.ql-tooltip .ql-action:before:disabled,.ql-tooltip.ql-editing .ql-action:before.disabled,.ql-tooltip.ql-editing .ql-action:before:disabled{color:#fff;border-color:#004689;background-color:#004689}.ql-tooltip .ql-action:before:not(:disabled):not(.disabled).active,.ql-tooltip .ql-action:before:not(:disabled):not(.disabled):active,.ql-tooltip.ql-editing .ql-action:before:not(:disabled):not(.disabled).active,.ql-tooltip.ql-editing .ql-action:before:not(:disabled):not(.disabled):active,.show>.ql-tooltip .ql-action:before.dropdown-toggle,.show>.ql-tooltip.ql-editing .ql-action:before.dropdown-toggle{color:#fff;border-color:#004689;background-color:#324cdd}.ql-tooltip .ql-action:before:not(:disabled):not(.disabled).active:focus,.ql-tooltip .ql-action:before:not(:disabled):not(.disabled):active:focus,.ql-tooltip.ql-editing .ql-action:before:not(:disabled):not(.disabled).active:focus,.ql-tooltip.ql-editing .ql-action:before:not(:disabled):not(.disabled):active:focus,.show>.ql-tooltip .ql-action:before.dropdown-toggle:focus,.show>.ql-tooltip.ql-editing .ql-action:before.dropdown-toggle:focus{box-shadow:none,0 0 0 0 rgba(94,114,228,.5)}.ql-tooltip .ql-action:before{content:\"Edit\"}.ql-tooltip.ql-editing .ql-action:before{content:\"Save\"}.ql-tooltip .ql-remove:before{content:\"Remove\";color:#212529;border-color:#dee2e6;background-color:#fff;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08)}.ql-tooltip .ql-remove:before:hover{color:#212529;border-color:#fff;background-color:#fff}.ql-tooltip .ql-remove:before.focus,.ql-tooltip .ql-remove:before:focus{box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08),0 0 0 0 hsla(0,0%,100%,.5)}.ql-tooltip .ql-remove:before.disabled,.ql-tooltip .ql-remove:before:disabled{color:#212529;border-color:#fff;background-color:#fff}.ql-tooltip .ql-remove:before:not(:disabled):not(.disabled).active,.ql-tooltip .ql-remove:before:not(:disabled):not(.disabled):active,.show>.ql-tooltip .ql-remove:before.dropdown-toggle{color:#212529;border-color:#fff;background-color:#e6e6e6}.ql-tooltip .ql-remove:before:not(:disabled):not(.disabled).active:focus,.ql-tooltip .ql-remove:before:not(:disabled):not(.disabled):active:focus,.show>.ql-tooltip .ql-remove:before.dropdown-toggle:focus{box-shadow:none,0 0 0 0 hsla(0,0%,100%,.5)}.ql-tooltip.ql-editing .ql-remove:before{display:none}.ql-editor blockquote{font-size:1.25rem;margin-bottom:1rem}.ql-editor img{max-width:100%;height:auto}.scroll-wrapper{position:relative;overflow:hidden!important;padding:0!important}.scroll-wrapper>.scroll-content{position:relative!important;top:0;left:0;overflow:scroll!important;box-sizing:content-box!important;width:auto!important;max-width:none!important;height:auto;max-height:none;margin:0;padding:0;border:none!important}.scroll-wrapper>.scroll-content::-webkit-scrollbar{width:0;height:0}.scroll-wrapper.scroll--rtl{direction:rtl}.scroll-element{display:none}.scroll-element,.scroll-element div{box-sizing:content-box}.scroll-element .scroll-arrow,.scroll-element .scroll-bar{cursor:default}.scroll-element.scroll-x.scroll-scrollx_visible,.scroll-element.scroll-y.scroll-scrolly_visible{display:block}.scroll-textarea{border:1px solid #ccc;border-top-color:#999}.scroll-textarea>.scroll-content{overflow:hidden!important}.scroll-textarea>.scroll-content>textarea{position:relative!important;top:0;overflow:scroll!important;box-sizing:border-box;width:100%!important;max-width:none!important;height:100%!important;max-height:none!important;margin:0;padding:2px;border:none!important;outline:0}.scroll-textarea>.scroll-content>textarea::-webkit-scrollbar{width:0;height:0}.scrollbar-inner>.scroll-element,.scrollbar-inner>.scroll-element div{position:absolute;z-index:10;margin:0;padding:0;border:none}.scrollbar-inner>.scroll-element div{top:0;left:0;display:block;width:100%;height:100%}.scrollbar-inner>.scroll-element.scroll-x{bottom:2px;left:0;width:100%;height:8px}.scrollbar-inner>.scroll-element.scroll-y{top:0;right:2px;width:8px;height:100%}.scrollbar-inner>.scroll-element .scroll-element_outer{overflow:hidden}.scrollbar-inner>.scroll-element .scroll-bar,.scrollbar-inner>.scroll-element .scroll-element_outer,.scrollbar-inner>.scroll-element .scroll-element_track{border-radius:8px}.scrollbar-inner>.scroll-element .scroll-bar,.scrollbar-inner>.scroll-element .scroll-element_track{opacity:.4}.scrollbar-inner>.scroll-element .scroll-element_track{background-color:#e0e0e0}.scrollbar-inner>.scroll-element .scroll-bar{background-color:#c2c2c2}.scrollbar-inner>.scroll-element.scroll-draggable .scroll-bar,.scrollbar-inner>.scroll-element:hover .scroll-bar{background-color:#919191}.scrollbar-inner>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_track{left:-12px}.scrollbar-inner>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_track{top:-12px}.scrollbar-inner>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_size{left:-12px}.scrollbar-inner>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_size{top:-12px}.scrollbar-outer>.scroll-element,.scrollbar-outer>.scroll-element div{position:absolute;z-index:10;margin:0;padding:0;border:none}.scrollbar-outer>.scroll-element{background-color:#fff}.scrollbar-outer>.scroll-element div{top:0;left:0;display:block;width:100%;height:100%}.scrollbar-outer>.scroll-element.scroll-x{bottom:0;left:0;width:100%;height:12px}.scrollbar-outer>.scroll-element.scroll-y{top:0;right:0;width:12px;height:100%}.scrollbar-outer>.scroll-element.scroll-x .scroll-element_outer{top:2px;height:8px}.scrollbar-outer>.scroll-element.scroll-y .scroll-element_outer{left:2px;width:8px}.scrollbar-outer>.scroll-element .scroll-element_outer{overflow:hidden}.scrollbar-outer>.scroll-element .scroll-element_track{background-color:#eee}.scrollbar-outer>.scroll-element .scroll-bar,.scrollbar-outer>.scroll-element .scroll-element_outer,.scrollbar-outer>.scroll-element .scroll-element_track{border-radius:8px}.scrollbar-outer>.scroll-element .scroll-bar{background-color:#d9d9d9}.scrollbar-outer>.scroll-element .scroll-bar:hover{background-color:#c2c2c2}.scrollbar-outer>.scroll-element.scroll-draggable .scroll-bar{background-color:#919191}.scrollbar-outer>.scroll-content.scroll-scrolly_visible{left:-12px;margin-left:12px}.scrollbar-outer>.scroll-content.scroll-scrollx_visible{top:-12px;margin-top:12px}.scrollbar-outer>.scroll-element.scroll-x .scroll-bar{min-width:10px}.scrollbar-outer>.scroll-element.scroll-y .scroll-bar{min-height:10px}.scrollbar-outer>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_track{left:-14px}.scrollbar-outer>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_track{top:-14px}.scrollbar-outer>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_size{left:-14px}.scrollbar-outer>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_size{top:-14px}.scrollbar-macosx>.scroll-element,.scrollbar-macosx>.scroll-element div{position:absolute;z-index:10;margin:0;padding:0;border:none;background:0 0}.scrollbar-macosx>.scroll-element div{top:0;left:0;display:block;width:100%;height:100%}.scrollbar-macosx>.scroll-element .scroll-element_track{display:none}.scrollbar-macosx>.scroll-element .scroll-bar{display:block;transition:opacity .2s linear;opacity:0;border-radius:7px;background-color:#6c6e71}.scrollbar-macosx:hover>.scroll-element .scroll-bar,.scrollbar-macosx>.scroll-element.scroll-draggable .scroll-bar{opacity:.7}.scrollbar-macosx>.scroll-element.scroll-x{bottom:0;left:0;overflow:visible;width:100%;min-width:100%;height:0}.scrollbar-macosx>.scroll-element.scroll-y{top:0;right:0;width:0;height:100%;min-height:100%}.scrollbar-macosx>.scroll-element.scroll-x .scroll-bar{top:-9px;min-width:10px;height:7px}.scrollbar-macosx>.scroll-element.scroll-y .scroll-bar{left:-9px;width:7px;min-height:10px}.scrollbar-macosx>.scroll-element.scroll-x .scroll-element_outer{left:2px}.scrollbar-macosx>.scroll-element.scroll-x .scroll-element_size{left:-4px}.scrollbar-macosx>.scroll-element.scroll-y .scroll-element_outer{top:2px}.scrollbar-macosx>.scroll-element.scroll-y .scroll-element_size{top:-4px}.scrollbar-macosx>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_size{left:-11px}.scrollbar-macosx>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_size{top:-11px}.scrollbar-light>.scroll-element,.scrollbar-light>.scroll-element div{position:absolute;z-index:10;overflow:hidden;margin:0;padding:0;border:none}.scrollbar-light>.scroll-element{background-color:#fff}.scrollbar-light>.scroll-element div{top:0;left:0;display:block;width:100%;height:100%}.scrollbar-light>.scroll-element .scroll-element_outer{border-radius:10px}.scrollbar-light>.scroll-element .scroll-element_size{border-radius:10px;background:#dbdbdb;background:linear-gradient(90deg,#dbdbdb 0,#e8e8e8)}.scrollbar-light>.scroll-element.scroll-x{bottom:0;left:0;width:100%;min-width:100%;height:17px}.scrollbar-light>.scroll-element.scroll-y{top:0;right:0;width:17px;height:100%;min-height:100%}.scrollbar-light>.scroll-element .scroll-bar{border:1px solid #dbdbdb;border-radius:10px;background:#fefefe;background:linear-gradient(90deg,#fefefe 0,#f5f5f5)}.scrollbar-light>.scroll-content.scroll-scrolly_visible{left:-17px;margin-left:17px}.scrollbar-light>.scroll-content.scroll-scrollx_visible{top:-17px;margin-top:17px}.scrollbar-light>.scroll-element.scroll-x .scroll-bar{top:0;min-width:10px;height:10px}.scrollbar-light>.scroll-element.scroll-y .scroll-bar{left:0;width:10px;min-height:10px}.scrollbar-light>.scroll-element.scroll-x .scroll-element_outer{top:2px;left:2px;height:12px}.scrollbar-light>.scroll-element.scroll-x .scroll-element_size{left:-4px}.scrollbar-light>.scroll-element.scroll-y .scroll-element_outer{top:2px;left:2px;width:12px}.scrollbar-light>.scroll-element.scroll-y .scroll-element_size{top:-4px}.scrollbar-light>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_size{left:-19px}.scrollbar-light>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_size{top:-19px}.scrollbar-light>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_track{left:-19px}.scrollbar-light>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_track{top:-19px}.scrollbar-rail>.scroll-element,.scrollbar-rail>.scroll-element div{position:absolute;z-index:10;overflow:hidden;margin:0;padding:0;border:none}.scrollbar-rail>.scroll-element{background-color:#fff}.scrollbar-rail>.scroll-element div{top:0;left:0;display:block;width:100%;height:100%}.scrollbar-rail>.scroll-element .scroll-element_size{background-color:#999;background-color:rgba(0,0,0,.3)}.scrollbar-rail>.scroll-element .scroll-element_outer:hover .scroll-element_size{background-color:#666;background-color:rgba(0,0,0,.5)}.scrollbar-rail>.scroll-element.scroll-x{bottom:0;left:0;width:100%;min-width:100%;height:12px;padding:3px 0 2px}.scrollbar-rail>.scroll-element.scroll-y{top:0;right:0;width:12px;height:100%;min-height:100%;padding:0 2px 0 3px}.scrollbar-rail>.scroll-element .scroll-bar{border-radius:2px;background-color:#d0b9a0;box-shadow:1px 1px 3px rgba(0,0,0,.5)}.scrollbar-rail>.scroll-element .scroll-element_outer:hover .scroll-bar{box-shadow:1px 1px 3px rgba(0,0,0,.6)}.scrollbar-rail>.scroll-content.scroll-scrolly_visible{left:-17px;margin-left:17px}.scrollbar-rail>.scroll-content.scroll-scrollx_visible{top:-17px;margin-top:17px}.scrollbar-rail>.scroll-element.scroll-x .scroll-bar{top:1px;min-width:10px;height:10px}.scrollbar-rail>.scroll-element.scroll-y .scroll-bar{left:1px;width:10px;min-height:10px}.scrollbar-rail>.scroll-element.scroll-x .scroll-element_outer{left:5px;height:15px}.scrollbar-rail>.scroll-element.scroll-x .scroll-element_size{top:5px;left:-10px;height:2px}.scrollbar-rail>.scroll-element.scroll-y .scroll-element_outer{top:5px;width:15px}.scrollbar-rail>.scroll-element.scroll-y .scroll-element_size{top:-10px;left:5px;width:2px}.scrollbar-rail>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_size{left:-25px}.scrollbar-rail>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_size{top:-25px}.scrollbar-rail>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_track{left:-25px}.scrollbar-rail>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_track{top:-25px}.scrollbar-dynamic>.scroll-element,.scrollbar-dynamic>.scroll-element div{position:absolute;z-index:10;margin:0;padding:0;border:none;background:0 0}.scrollbar-dynamic>.scroll-element div{top:0;left:0;display:block;width:100%;height:100%}.scrollbar-dynamic>.scroll-element.scroll-x{bottom:2px;left:0;width:100%;min-width:100%;height:7px}.scrollbar-dynamic>.scroll-element.scroll-y{top:0;right:2px;width:7px;height:100%;min-height:100%}.scrollbar-dynamic>.scroll-element .scroll-element_outer{opacity:.3;border-radius:12px}.scrollbar-dynamic>.scroll-element .scroll-element_size{transition:opacity .2s;opacity:0;border-radius:12px;background-color:#ccc}.scrollbar-dynamic>.scroll-element .scroll-bar{border-radius:7px;background-color:#6c6e71}.scrollbar-dynamic>.scroll-element.scroll-x .scroll-bar{top:auto;bottom:0;min-width:24px;height:7px}.scrollbar-dynamic>.scroll-element.scroll-y .scroll-bar{right:0;left:auto;width:7px;min-height:24px}.scrollbar-dynamic>.scroll-element.scroll-x .scroll-element_outer{top:auto;bottom:0;left:2px;transition:height .2s}.scrollbar-dynamic>.scroll-element.scroll-y .scroll-element_outer{top:2px;right:0;left:auto;transition:width .2s}.scrollbar-dynamic>.scroll-element.scroll-x .scroll-element_size{left:-4px}.scrollbar-dynamic>.scroll-element.scroll-y .scroll-element_size{top:-4px}.scrollbar-dynamic>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_size{left:-11px}.scrollbar-dynamic>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_size{top:-11px}.scrollbar-dynamic>.scroll-element.scroll-draggable .scroll-element_outer,.scrollbar-dynamic>.scroll-element:hover .scroll-element_outer{overflow:hidden;opacity:.7}.scrollbar-dynamic>.scroll-element.scroll-draggable .scroll-element_outer .scroll-element_size,.scrollbar-dynamic>.scroll-element:hover .scroll-element_outer .scroll-element_size{opacity:1}.scrollbar-dynamic>.scroll-element.scroll-draggable .scroll-element_outer .scroll-bar,.scrollbar-dynamic>.scroll-element:hover .scroll-element_outer .scroll-bar{width:100%;height:100%;border-radius:12px}.scrollbar-dynamic>.scroll-element.scroll-x.scroll-draggable .scroll-element_outer,.scrollbar-dynamic>.scroll-element.scroll-x:hover .scroll-element_outer{height:20px;min-height:7px}.scrollbar-dynamic>.scroll-element.scroll-y.scroll-draggable .scroll-element_outer,.scrollbar-dynamic>.scroll-element.scroll-y:hover .scroll-element_outer{width:20px;min-width:7px}.scrollbar-chrome>.scroll-element,.scrollbar-chrome>.scroll-element div{position:absolute;z-index:10;overflow:hidden;margin:0;padding:0;border:none}.scrollbar-chrome>.scroll-element{background-color:#fff}.scrollbar-chrome>.scroll-element div{top:0;left:0;display:block;width:100%;height:100%}.scrollbar-chrome>.scroll-element .scroll-element_track{border:1px solid #dbdbdb;background:#f1f1f1}.scrollbar-chrome>.scroll-element.scroll-x{bottom:0;left:0;width:100%;min-width:100%;height:16px}.scrollbar-chrome>.scroll-element.scroll-y{top:0;right:0;width:16px;height:100%;min-height:100%}.scrollbar-chrome>.scroll-element .scroll-bar{cursor:default;border:1px solid #bdbdbd;border-radius:2px;background-color:#d9d9d9}.scrollbar-chrome>.scroll-element .scroll-bar:hover{border-color:#a9a9a9;background-color:#c2c2c2}.scrollbar-chrome>.scroll-element.scroll-draggable .scroll-bar{border-color:#7e7e7e;background-color:#919191}.scrollbar-chrome>.scroll-content.scroll-scrolly_visible{left:-16px;margin-left:16px}.scrollbar-chrome>.scroll-content.scroll-scrollx_visible{top:-16px;margin-top:16px}.scrollbar-chrome>.scroll-element.scroll-x .scroll-bar{top:3px;min-width:10px;height:8px}.scrollbar-chrome>.scroll-element.scroll-y .scroll-bar{left:3px;width:8px;min-height:10px}.scrollbar-chrome>.scroll-element.scroll-x .scroll-element_outer{border-left:1px solid #dbdbdb}.scrollbar-chrome>.scroll-element.scroll-x .scroll-element_track{left:-3px;height:14px}.scrollbar-chrome>.scroll-element.scroll-x .scroll-element_size{left:-4px;height:14px}.scrollbar-chrome>.scroll-element.scroll-y .scroll-element_outer{border-top:1px solid #dbdbdb}.scrollbar-chrome>.scroll-element.scroll-y .scroll-element_track{top:-3px;width:14px}.scrollbar-chrome>.scroll-element.scroll-y .scroll-element_size{top:-4px;width:14px}.scrollbar-chrome>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_size{left:-19px}.scrollbar-chrome>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_size{top:-19px}.scrollbar-chrome>.scroll-element.scroll-x.scroll-scrolly_visible .scroll-element_track{left:-19px}.scrollbar-chrome>.scroll-element.scroll-y.scroll-scrollx_visible .scroll-element_track{top:-19px}.scrollbar-inner .scroll-element:hover{width:4px}.select2-selection__arrow{display:none}.select2.select2-container{width:100%!important}.select2-container--default.select2-container--focus .select2-selection--multiple,.select2-container--default .select2-search--dropdown .select2-search__field,.select2-container--default .select2-selection--multiple,.select2-container .select2-selection--single{font-size:1rem;line-height:1.5;display:block;width:100%;height:calc(1.5em + 1.25rem + 2px);padding:.625rem .75rem;transition:all .15s cubic-bezier(.68,-.55,.265,1.55);color:#8898aa;border:1px solid #dee2e6;border-radius:.25rem;background-color:#fff;background-clip:padding-box;box-shadow:0 3px 2px rgba(233,236,239,.05)}@media (prefers-reduced-motion:reduce){.select2-container--default.select2-container--focus .select2-selection--multiple,.select2-container--default .select2-search--dropdown .select2-search__field,.select2-container--default .select2-selection--multiple,.select2-container .select2-selection--single{transition:none}}.select2-container--default.select2-container--focus .select2-selection--multiple::-ms-expand,.select2-container--default .select2-search--dropdown .select2-search__field::-ms-expand,.select2-container--default .select2-selection--multiple::-ms-expand,.select2-container .select2-selection--single::-ms-expand{border:0;background-color:transparent}.select2-container--default.select2-container--focus .select2-selection--multiple:focus,.select2-container--default .select2-search--dropdown .select2-search__field:focus,.select2-container--default .select2-selection--multiple:focus,.select2-container .select2-selection--single:focus{color:#8898aa;border-color:#004689;outline:0;background-color:#fff;box-shadow:0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)}.select2-container--default.select2-container--focus .select2-selection--multiple::-moz-placeholder,.select2-container--default .select2-search--dropdown .select2-search__field::-moz-placeholder,.select2-container--default .select2-selection--multiple::-moz-placeholder,.select2-container .select2-selection--single::-moz-placeholder{opacity:1;color:#adb5bd}.select2-container--default.select2-container--focus .select2-selection--multiple:-ms-input-placeholder,.select2-container--default .select2-search--dropdown .select2-search__field:-ms-input-placeholder,.select2-container--default .select2-selection--multiple:-ms-input-placeholder,.select2-container .select2-selection--single:-ms-input-placeholder{opacity:1;color:#adb5bd}.select2-container--default.select2-container--focus .select2-selection--multiple::placeholder,.select2-container--default .select2-search--dropdown .select2-search__field::placeholder,.select2-container--default .select2-selection--multiple::placeholder,.select2-container .select2-selection--single::placeholder{opacity:1;color:#adb5bd}.select2-container--default.select2-container--focus .select2-selection--multiple:disabled,.select2-container--default.select2-container--focus .select2-selection--multiple[readonly],.select2-container--default .select2-search--dropdown .select2-search__field:disabled,.select2-container--default .select2-search--dropdown .select2-search__field[readonly],.select2-container--default .select2-selection--multiple:disabled,.select2-container--default .select2-selection--multiple[readonly],.select2-container .select2-selection--single:disabled,.select2-container .select2-selection--single[readonly]{opacity:1;background-color:#e9ecef}.select2-container .select2-selection--single .select2-selection__rendered{overflow:inherit;padding:0;white-space:inherit;text-overflow:inherit}.select2-container--default .select2-selection--single .select2-selection__rendered{line-height:inherit;color:inherit}.select2-dropdown{padding:.5rem 0;border:1px solid #dee2e6;border-radius:.4375rem;background-color:#fff}.select2-results__option{font-size:.875rem;padding:.5rem .75rem;color:#212529;background-color:#fff}.select2-results__option:focus,.select2-results__option:hover{text-decoration:none;color:#16181b;background-color:#f6f9fc}.select2-container--default .select2-results__option--highlighted[aria-selected],.select2-container--default .select2-results__option[aria-selected=true]{color:#16181b;background-color:transparent}.select2-container--default .select2-results__option[aria-disabled=true]{color:#8898aa}.select2-container--default.select2-container--focus .select2-selection--multiple,.select2-container--default .select2-selection--multiple{height:auto;min-height:calc(1.5em + 1.25rem + 2px)}.select2-container--default .select2-selection--multiple .select2-selection__rendered{display:block;margin:0 0 -.25rem -.25rem;padding:0}.select2-container--default .select2-selection--multiple .select2-selection__choice{font-size:.875rem;line-height:1.5rem;display:inline-flex;margin:0 0 .25rem .25rem;padding:0 .5rem;color:#8898aa;border:none;border-radius:.25rem;background-color:#adb5bd}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove{margin-left:.5rem;color:#8898aa;order:2}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#525f7f}.select2-container .select2-search--inline{display:none}.select2-selection[aria-expanded=true]{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.select2-search--dropdown{padding:.5rem .75rem}.select2-container--default .select2-search--dropdown .select2-search__field{font-size:.875rem;line-height:1.5;padding:.25rem .5rem;border-radius:.25rem}.form-control-sm+.select2-container--default.select2-container--focus .select2-selection--multiple,.form-control-sm+.select2-container--default .select2-selection--multiple,.form-control-sm+.select2-container .select2-selection--single{font-size:.875rem;line-height:1.5;height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;border-radius:.25rem}.form-control-sm+.select2-container--default.select2-container--focus .select2-selection--multiple,.form-control-sm+.select2-container--default .select2-selection--multiple{min-height:calc(1.5em + .5rem + 2px)}.form-control-sm+.select2-container--default .select2-selection--multiple .select2-selection__choice{line-height:1.3125rem}.form-control-lg+.select2-container--default.select2-container--focus .select2-selection--multiple,.form-control-lg+.select2-container--default .select2-selection--multiple,.form-control-lg+.select2-container .select2-selection--single{font-size:1.25rem;line-height:1.5;height:calc(1.5em + 1.75rem + 2px);padding:.875rem 1rem;border-radius:.4375rem}.form-control-lg+.select2-container--default.select2-container--focus .select2-selection--multiple,.form-control-lg+.select2-container--default .select2-selection--multiple{min-height:calc(1.5em + 1.75rem + 2px)}.form-control-lg+.select2-container--default .select2-selection--multiple .select2-selection__choice{line-height:1.875rem}.swal2-popup{padding:1.5rem}.swal2-popup .swal2-title{font-size:1.5rem}.swal2-popup .swal2-content{font-size:.875rem}.swal2-popup .swal2-image{max-width:200px}.bootstrap-datetimepicker-widget .btn[data-action=clear]:after,.bootstrap-datetimepicker-widget .btn[data-action=decrementHours]:after,.bootstrap-datetimepicker-widget .btn[data-action=decrementMinutes]:after,.bootstrap-datetimepicker-widget .btn[data-action=incrementHours]:after,.bootstrap-datetimepicker-widget .btn[data-action=incrementMinutes]:after,.bootstrap-datetimepicker-widget .btn[data-action=showHours]:after,.bootstrap-datetimepicker-widget .btn[data-action=showMinutes]:after,.bootstrap-datetimepicker-widget .btn[data-action=today]:after,.bootstrap-datetimepicker-widget .btn[data-action=togglePeriod]:after,.bootstrap-datetimepicker-widget .picker-switch:after,.bootstrap-datetimepicker-widget table th.next:after,.bootstrap-datetimepicker-widget table th.prev:after,.sr-only{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;margin:-1px;padding:0;border:0}.bootstrap-datetimepicker-widget{list-style:none}.bootstrap-datetimepicker-widget a .btn:hover{background-color:transparent}.bootstrap-datetimepicker-widget.dropdown-menu{width:254px;max-width:254px;padding:8px 6px}.bootstrap-datetimepicker-widget.dropdown-menu .tim-icons{opacity:1}.bootstrap-datetimepicker-widget.dropdown-menu .picker-switch .table-condensed:hover{border-radius:3px;background:#eee}.bootstrap-datetimepicker-widget.dropdown-menu .timepicker-picker .table-condensed{margin-top:10px;margin-bottom:5px}.bootstrap-datetimepicker-widget.dropdown-menu .timepicker-picker .table-condensed .btn[data-action=togglePeriod]:hover,.bootstrap-datetimepicker-widget.dropdown-menu .timepicker-picker .table-condensed .separator{color:#9a9a9a!important}.bootstrap-datetimepicker-widget.dropdown-menu .table-condensed .decade,.bootstrap-datetimepicker-widget.dropdown-menu .table-condensed .month,.bootstrap-datetimepicker-widget.dropdown-menu .table-condensed .year{color:#9a9a9a}.bootstrap-datetimepicker-widget.dropdown-menu .table-condensed .decade.active,.bootstrap-datetimepicker-widget.dropdown-menu .table-condensed .month.active,.bootstrap-datetimepicker-widget.dropdown-menu .table-condensed .year.active{color:#fff}@media (min-width:768px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}@media (min-width:992px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}@media (min-width:1200px){.bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs{width:38em}}.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before{position:absolute;right:auto;display:inline-block;width:0;height:0;content:\"\";vertical-align:middle;border-right:.4em solid transparent;border-bottom:.4em solid;border-left:.4em solid transparent}.bootstrap-datetimepicker-widget.dropdown-menu.top:before{display:none}.bootstrap-datetimepicker-widget.dropdown-menu.top:after{position:absolute;top:auto;right:auto;bottom:-6px;left:10px;display:inline-block;width:0;height:0;content:\"\";vertical-align:middle;color:#fff;border-top:.4em solid;border-right:.4em solid transparent;border-left:.4em solid transparent}.bootstrap-datetimepicker-widget.dropdown-menu.top,.bootstrap-datetimepicker-widget.dropdown-menu.top.open{margin-top:auto}.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:before{right:6px;left:auto}.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:after{right:7px;left:auto}.bootstrap-datetimepicker-widget .list-unstyled{margin:0}.bootstrap-datetimepicker-widget a[data-action]{padding:0;color:#fff;border-width:0}.bootstrap-datetimepicker-widget a[data-action=togglePicker],.bootstrap-datetimepicker-widget a[data-action=togglePicker]:hover{color:#004689}.bootstrap-datetimepicker-widget a[data-action]:active{box-shadow:none}.bootstrap-datetimepicker-widget .timepicker-hour,.bootstrap-datetimepicker-widget .timepicker-minute,.bootstrap-datetimepicker-widget .timepicker-second{font-size:1.5em;font-weight:300;line-height:40px;width:40px;height:40px;margin:3px;color:#9a9a9a;border-radius:50%}.bootstrap-datetimepicker-widget button[data-action]{width:38px;height:38px;padding:0;box-shadow:0 1px 10px 0 rgba(0,0,0,.2)}.bootstrap-datetimepicker-widget .btn{margin:0!important}.bootstrap-datetimepicker-widget .btn[data-action=incrementHours]:after{content:\"Increment Hours\"}.bootstrap-datetimepicker-widget .btn[data-action=incrementMinutes]:after{content:\"Increment Minutes\"}.bootstrap-datetimepicker-widget .btn[data-action=decrementHours]:after{content:\"Decrement Hours\"}.bootstrap-datetimepicker-widget .btn[data-action=decrementMinutes]:after{content:\"Decrement Minutes\"}.bootstrap-datetimepicker-widget .btn[data-action=showHours]:after{content:\"Show Hours\"}.bootstrap-datetimepicker-widget .btn[data-action=showMinutes]:after{content:\"Show Minutes\"}.bootstrap-datetimepicker-widget .btn[data-action=togglePeriod]:after{content:\"Toggle AM/PM\"}.bootstrap-datetimepicker-widget .btn[data-action=clear]:after{content:\"Clear the picker\"}.bootstrap-datetimepicker-widget .btn[data-action=today]:after{content:\"Set the date to today\"}.bootstrap-datetimepicker-widget .picker-switch{text-align:center;color:#004689;border-radius:3px}.bootstrap-datetimepicker-widget .picker-switch:after{content:\"Toggle Date and Time Screens\"}.bootstrap-datetimepicker-widget .picker-switch td{line-height:inherit;width:auto;height:auto;margin:0;padding:0}.bootstrap-datetimepicker-widget .picker-switch td span{line-height:2.5;width:100%;height:2.5em;margin:2px 0!important;border-radius:3px}.bootstrap-datetimepicker-widget table{width:100%;margin:0;text-align:center}.bootstrap-datetimepicker-widget table td>div,.bootstrap-datetimepicker-widget table th>div{text-align:center}.bootstrap-datetimepicker-widget table th{font-weight:300;line-height:20px;width:20px;height:20px}.bootstrap-datetimepicker-widget table th.picker-switch{width:145px}.bootstrap-datetimepicker-widget table th.disabled,.bootstrap-datetimepicker-widget table th.disabled:hover{cursor:not-allowed;color:#cfcfca;background:0 0}.bootstrap-datetimepicker-widget table th.next span,.bootstrap-datetimepicker-widget table th.prev span{font-size:12px;line-height:28px;width:27px;height:27px;text-align:center;color:#004689;border-radius:4px;border-radius:50%}.bootstrap-datetimepicker-widget table th.prev:after{content:\"Previous Month\"}.bootstrap-datetimepicker-widget table th.next:after{content:\"Next Month\"}.bootstrap-datetimepicker-widget table th.dow{padding-top:10px;padding-bottom:5px;text-align:center;color:#004689}.bootstrap-datetimepicker-widget table thead tr:first-child th{cursor:pointer}.bootstrap-datetimepicker-widget table thead tr:first-child th.picker-switch:hover,.bootstrap-datetimepicker-widget table thead tr:first-child th:hover span{background:#eee}.bootstrap-datetimepicker-widget table td.cw>div{font-size:.8em;line-height:20px;height:20px;color:#cfcfca}.bootstrap-datetimepicker-widget table td.day>div,.bootstrap-datetimepicker-widget table td.hour>div,.bootstrap-datetimepicker-widget table td.minute>div{font-size:14px;font-weight:300;line-height:2.2;position:relative;z-index:-1;width:30px;height:30px;margin:0 auto;padding:0;cursor:pointer;transition:all .3s ease 0s;text-align:center;color:#9a9a9a;border:none;border-radius:50%}.bootstrap-datetimepicker-widget table td.day:hover>div,.bootstrap-datetimepicker-widget table td.hour:hover>div,.bootstrap-datetimepicker-widget table td.minute:hover>div,.bootstrap-datetimepicker-widget table td.second:hover>div{cursor:pointer;background:#eee}.bootstrap-datetimepicker-widget table td.new>div,.bootstrap-datetimepicker-widget table td.old>div{color:#172b4d}.bootstrap-datetimepicker-widget table td.day,.bootstrap-datetimepicker-widget table td.today{background:0 0!important}.bootstrap-datetimepicker-widget table td.today>div:before{position:absolute;right:4px;bottom:4px;display:inline-block;content:\"\";border-color:rgba(0,0,0,.2) transparent #68b3c8;border-style:solid;border-width:7px}.bootstrap-datetimepicker-widget table td.active:hover>div,.bootstrap-datetimepicker-widget table td.active>div{color:#fff;background-color:#004689;box-shadow:0 1px 10px 0 rgba(0,0,0,.2)}.bootstrap-datetimepicker-widget table td.active.today:before>div{border-bottom-color:#fff}.bootstrap-datetimepicker-widget table td.disabled:hover>div,.bootstrap-datetimepicker-widget table td.disabled>div{cursor:not-allowed;color:#cfcfca;background:0 0}.bootstrap-datetimepicker-widget table td span{line-height:40px;display:inline-block;width:40px;height:40px;margin:0 3px;cursor:pointer;text-align:center;border-radius:50%}.bootstrap-datetimepicker-widget table td span.active{color:#fff;background-color:#004689}.bootstrap-datetimepicker-widget table td span.old{color:#cfcfca}.bootstrap-datetimepicker-widget table td span.disabled,.bootstrap-datetimepicker-widget table td span.disabled:hover{cursor:not-allowed;color:#cfcfca;background:0 0}.bootstrap-datetimepicker-widget .timepicker-hours span,.bootstrap-datetimepicker-widget .timepicker-minutes span,.bootstrap-datetimepicker-widget .timepicker-picker span{border-radius:50%!important}.bootstrap-datetimepicker-widget.usetwentyfour td.hour{line-height:27px;height:27px}.input-group.date .input-group-addon{cursor:pointer}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{z-index:1;padding:1px;cursor:pointer;text-align:center}.bootstrap-datetimepicker-widget .separator{position:relative;width:auto;height:auto;color:red}input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget .picker-switch,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget .separator,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget .timepicker-hours span,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget .timepicker-minutes span,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget a[data-action=togglePicker],input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget a[data-action=togglePicker]:hover,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget span,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.day>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.hour>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.minute>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table th.next span,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table th.prev span{color:#9a9a9a}input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table th.dow{color:hsla(0,0%,100%,.8)}input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.new>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.old>div{color:hsla(0,0%,100%,.4)}input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget button[data-action],input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.active:hover>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.active>div{background-color:#fff}input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.hour:hover>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.minute:hover>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td.second:hover>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td:not(.active).day:hover>div,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table td span:hover{background:hsla(0,0%,100%,.2)}input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table thead tr:first-child th.picker-switch:hover,input.datetimepicker[data-color]+.bootstrap-datetimepicker-widget table thead tr:first-child th:hover span{background-color:hsla(0,0%,100%,.2)}input.datetimepicker[data-color=orange]+.bootstrap-datetimepicker-widget{background-color:#004689}input.datetimepicker[data-color=orange]+.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before,input.datetimepicker[data-color=orange]+.bootstrap-datetimepicker-widget.dropdown-menu.top:after,input.datetimepicker[data-color=orange]+.bootstrap-datetimepicker-widget button[data-action],input.datetimepicker[data-color=orange]+.bootstrap-datetimepicker-widget table td.active:hover>div,input.datetimepicker[data-color=orange]+.bootstrap-datetimepicker-widget table td.active>div{color:#004689}input.datetimepicker[data-color=blue]+.bootstrap-datetimepicker-widget{background-color:#11cdef}input.datetimepicker[data-color=blue]+.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before,input.datetimepicker[data-color=blue]+.bootstrap-datetimepicker-widget.dropdown-menu.top:after,input.datetimepicker[data-color=blue]+.bootstrap-datetimepicker-widget button[data-action],input.datetimepicker[data-color=blue]+.bootstrap-datetimepicker-widget table td.active:hover>div,input.datetimepicker[data-color=blue]+.bootstrap-datetimepicker-widget table td.active>div{color:#11cdef}input.datetimepicker[data-color=green]+.bootstrap-datetimepicker-widget{background-color:#2dce89}input.datetimepicker[data-color=green]+.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before,input.datetimepicker[data-color=green]+.bootstrap-datetimepicker-widget.dropdown-menu.top:after,input.datetimepicker[data-color=green]+.bootstrap-datetimepicker-widget button[data-action],input.datetimepicker[data-color=green]+.bootstrap-datetimepicker-widget table td.active:hover>div,input.datetimepicker[data-color=green]+.bootstrap-datetimepicker-widget table td.active>div{color:#2dce89}input.datetimepicker[data-color=red]+.bootstrap-datetimepicker-widget{background-color:#f5365c}input.datetimepicker[data-color=red]+.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before,input.datetimepicker[data-color=red]+.bootstrap-datetimepicker-widget.dropdown-menu.top:after,input.datetimepicker[data-color=red]+.bootstrap-datetimepicker-widget button[data-action],input.datetimepicker[data-color=red]+.bootstrap-datetimepicker-widget table td.active:hover>div,input.datetimepicker[data-color=red]+.bootstrap-datetimepicker-widget table td.active>div{color:#f5365c}input.datetimepicker[data-color=yellow]+.bootstrap-datetimepicker-widget{background-color:#fb6340}input.datetimepicker[data-color=yellow]+.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before,input.datetimepicker[data-color=yellow]+.bootstrap-datetimepicker-widget.dropdown-menu.top:after,input.datetimepicker[data-color=yellow]+.bootstrap-datetimepicker-widget button[data-action],input.datetimepicker[data-color=yellow]+.bootstrap-datetimepicker-widget table td.active:hover>div,input.datetimepicker[data-color=yellow]+.bootstrap-datetimepicker-widget table td.active>div{color:#fb6340}.bootstrap-datetimepicker-widget.dropdown-black .datepicker-days .day,.bootstrap-datetimepicker-widget.dropdown-black .datepicker-days .minute{color:hsla(0,0%,100%,.7)}.bootstrap-datetimepicker-widget.dropdown-black .datepicker-days .day:hover,.bootstrap-datetimepicker-widget.dropdown-black .datepicker-days .minute:hover{color:#212529}.bootstrap-datetimepicker-widget.dropdown-black table td.hour,.bootstrap-datetimepicker-widget.dropdown-black table td.minute,.bootstrap-datetimepicker-widget.dropdown-black table td span{color:hsla(0,0%,100%,.7)}.bootstrap-datetimepicker-widget.dropdown-black table td.hour:hover,.bootstrap-datetimepicker-widget.dropdown-black table td.minute:hover,.bootstrap-datetimepicker-widget.dropdown-black table td span:hover{color:hsla(0,0%,100%,.4);background:0 0}.bootstrap-datetimepicker-widget.dropdown-black table td.hour:hover div,.bootstrap-datetimepicker-widget.dropdown-black table td.minute:hover div,.bootstrap-datetimepicker-widget.dropdown-black table td span:hover div{background:0 0}.bootstrap-datetimepicker-widget.dropdown-black table td .btn[data-action]{color:#fff}.bootstrap-datetimepicker-widget.dropdown-black table td .btn[data-action=togglePeriod]{background:0 0}.ct-navbar{padding-top:.5rem;padding-bottom:.5rem;background-color:#004689;box-shadow:0 1px 1px 0 rgba(116,129,141,.1)}@media (max-width:991.98px){.ct-navbar{padding-right:.5rem;padding-left:.5rem}.ct-navbar .navbar-nav-scroll{font-size:.875rem;overflow:hidden;max-width:100%;height:2.5rem;margin-top:.25rem}.ct-navbar .navbar-nav-scroll .navbar-nav{overflow-x:auto;padding-bottom:2rem;white-space:nowrap;-webkit-overflow-scrolling:touch}}@media (min-width:768px){@supports ((position:-webkit-sticky) or (position:sticky)){.ct-navbar{position:-webkit-sticky;position:sticky;z-index:1071;top:0}}}.ct-navbar .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem;color:hsla(0,0%,100%,.9)!important}.ct-navbar .navbar-nav .nav-link.active,.ct-navbar .navbar-nav .nav-link:hover{color:#fff!important;background-color:transparent!important}.ct-navbar .navbar-nav .nav-link.active{font-weight:500}.ct-navbar .navbar-nav-svg{display:inline-block;width:1rem;height:1rem;vertical-align:text-top}.ct-navbar .dropdown-menu{font-size:.875rem}.ct-navbar .dropdown-item.active{font-weight:500;padding-left:25px;color:#212529;background-color:transparent;background-repeat:no-repeat;background-position:.4rem .87rem;background-size:.75rem .75rem}.github-corner{position:fixed;z-index:1080;right:0}.github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}.github-corner svg{color:#004689;fill:#fff}@-webkit-keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}.ct-clipboard{position:relative;display:none;float:right}.ct-clipboard+.highlight{margin-top:0}.btn-clipboard{font-size:75%;position:absolute;z-index:10;top:1rem;right:1rem;display:block;padding:.25rem .5rem;cursor:pointer;color:#fff;border:0;border-radius:.25rem;background-color:transparent;background-color:#004689}.btn-clipboard:hover{color:#fff;background-color:#324cdd}@media (min-width:768px){.ct-clipboard{display:block}}.ct-example-row .row>.col span,.ct-example-row .row>[class^=col-] span{font-size:.875rem;display:block;margin:1rem 0;padding:.75rem;color:#393f49;border-radius:.25rem;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 4px 16px rgba(0,0,0,.1)}.ct-example-row .no-gutters>.col span,.ct-example-row .no-gutters>[class^=col-] span{border-radius:0}.ct-example-row .flex-items-bottom,.ct-example-row .flex-items-middle,.ct-example-row .flex-items-top{min-height:6rem;background-color:rgba(255,0,0,.1)}.ct-example-row-flex-cols .row{min-height:10rem;background-color:rgba(255,0,0,.1)}.ct-example-row-flex-cols .row+.row{margin-top:1rem}.ct-highlight{border:1px solid rgba(94,114,228,.15);background-color:rgba(94,114,228,.15)}.example-container{width:800px;width:100%;margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px}.example-row{display:flex;margin-right:-15px;margin-left:-15px;flex-wrap:wrap}.example-content-main{position:relative;width:100%;padding-right:15px;padding-left:15px}@media (min-width:576px){.example-content-main{max-width:50%;flex:0 0 50%}}@media (min-width:992px){.example-content-main{max-width:66.66667%;flex:0 0 66.66667%}}.example-content-secondary{position:relative;width:100%;padding-right:15px;padding-left:15px}@media (min-width:576px){.example-content-secondary{max-width:50%;flex:0 0 50%}}@media (min-width:992px){.example-content-secondary{max-width:33.33333%;flex:0 0 33.33333%}}.ct-example-container{min-width:16rem;max-width:25rem;margin-right:auto;margin-left:auto}.ct-example-container-header{height:3rem;margin-bottom:.5rem;border-radius:.25rem;background-color:#fff}.ct-example-container-sidebar{float:right;width:4rem}.ct-example-container-body,.ct-example-container-sidebar{height:8rem;border-radius:.25rem;background-color:#cbd2f6}.ct-example-container-body{margin-right:4.5rem}.ct-example-container-fluid{max-width:none}.ct-example{position:relative;margin:1rem -15px 0}.ct-example:after{display:block;clear:both;content:\"\"}@media (min-width:576px){.ct-example{margin-right:0;margin-left:0}}.ct-example+.clipboard+.highlight,.ct-example+.highlight{margin-top:0}.ct-example+p{margin-top:2rem}.ct-example .pos-f-t{position:relative;margin:-1rem}@media (min-width:576px){.ct-example .pos-f-t{margin:-1.5rem}}.ct-example .custom-file-input:lang(es)~.custom-file-label:after{content:\"Elegir\"}.ct-example>.form-control+.form-control{margin-top:.5rem}.ct-example .badge,.ct-example .btn,.ct-example .form-control,.ct-example>.alert+.alert,.ct-example>.nav+.nav,.ct-example>.navbar+.navbar,.ct-example>.progress+.btn,.ct-example>.progress+.progress{margin-top:.5rem;margin-bottom:.5rem}.ct-example .btn .badge,.ct-example .input-group .btn,.ct-example .input-group .form-control{margin-top:0;margin-bottom:0}.ct-example .btn-group{margin-top:.5rem;margin-bottom:.5rem}.ct-example .alert,.ct-example .btn-group .btn{margin:0}.ct-example .alert+.alert{margin-top:1.25rem}.ct-example>.dropdown-menu:first-child{position:static;display:block}.ct-example>.form-group:last-child{margin-bottom:0}.ct-example>.close{float:none}.ct-example-type .table .type-info{vertical-align:middle;color:#999}.ct-example-type .table td{padding:1rem 0;border-color:#eee}.ct-example-type .table tr:first-child td{border-top:0}.ct-example-type h1,.ct-example-type h2,.ct-example-type h3,.ct-example-type h4,.ct-example-type h5,.ct-example-type h6{margin-top:0;margin-bottom:0}.ct-example-bg-classes p{padding:1rem}.ct-example>img+img{margin-left:.5rem}.ct-example>.btn-group{margin-top:.25rem;margin-bottom:.25rem}.ct-example-control-sizing input[type=text]+input[type=text],.ct-example-control-sizing select,.ct-example>.btn-toolbar+.btn-toolbar{margin-top:.5rem}.ct-example-form .input-group{margin-bottom:.5rem}.ct-example>textarea.form-control{resize:vertical}.ct-example>.list-group{max-width:400px}.ct-example .fixed-top,.ct-example .sticky-top{position:static;margin:-1rem -1rem 1rem}.ct-example .fixed-bottom{position:static;margin:1rem -1rem -1rem}@media (min-width:576px){.ct-example .fixed-top,.ct-example .sticky-top{margin:-1.5rem -1.5rem 1rem}.ct-example .fixed-bottom{margin:1rem -1.5rem -1.5rem}}.ct-example .pagination{margin-top:.5rem;margin-bottom:.5rem}.modal{z-index:1072}.modal .popover,.modal .tooltip{z-index:1073}.modal-backdrop{z-index:1071}.ct-example-modal{background-color:#fafafa}.ct-example-modal .modal{position:relative;z-index:1;top:auto;right:auto;bottom:auto;left:auto;display:block}.ct-example-modal .modal-dialog{left:auto;margin-right:auto;margin-left:auto}.ct-example-tabs .nav-tabs{margin-bottom:1rem}.ct-example-popover-static{padding-bottom:1.5rem;background-color:#f9f9f9}.ct-example-popover-static .popover{position:relative;display:block;float:left;width:260px;margin:1.25rem}.tooltip-demo a{white-space:nowrap}.ct-example-tooltip-static .tooltip{position:relative;display:inline-block;margin:10px 20px;opacity:1}.scrollspy-example{position:relative;overflow:auto;height:200px;margin-top:.5rem}.scrollspy-example-2{position:relative;overflow:auto;height:350px}.ct-example-border-utils [class^=border]{display:inline-block;width:5rem;height:5rem;margin:.25rem;background-color:#f5f5f5}.ct-example-border-utils-0 [class^=border]{border:1px solid #e9ecef}.highlight{margin-top:1rem;padding:0;-ms-overflow-style:-ms-autohiding-scrollbar}@media (min-width:576px){.highlight{padding:0}}.ct-content .highlight{margin-right:-15px;margin-left:-15px}@media (min-width:576px){.ct-content .highlight{margin-right:0;margin-left:0}}.ct-example:not(:last-child){margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid #e9ecef}.ct-example .tab-content .tab-example-result{padding:1.25rem;border:1px solid #e6ecf1;border-radius:.25rem;background-color:#fff}.ct-example .nav-tabs-code{margin-bottom:.375rem}.ct-example .nav-tabs-code .nav-link{font-size:.875rem}.ct-example .nav-tabs-code .nav-link.active,.ct-example .nav-tabs-code .nav-link:active{color:#004689}.icon-examples{margin-top:1rem}.btn-icon-clipboard{font-family:inherit;font-size:16px;font-weight:400;line-height:1.25;display:inline-block;width:100%;margin:.5rem 0;padding:24px;cursor:pointer;text-align:left;vertical-align:middle;text-decoration:none;color:#393f49;border:0;border-radius:4px;background-color:#f8f9fa;-moz-appearance:none}.btn-icon-clipboard:hover{background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 4px 16px rgba(0,0,0,.1)}.btn-icon-clipboard>div{display:flex;align-items:center}.btn-icon-clipboard i{font-size:1.5rem;box-sizing:content-box;vertical-align:middle;color:#393f49}.btn-icon-clipboard span{font-size:.875rem;line-height:1.5;display:inline-block;overflow:hidden;margin-left:16px;vertical-align:middle;white-space:nowrap;text-overflow:ellipsis;color:#393f49}code[class*=language-],pre[class*=language-]{font-family:Consolas,Menlo,Monaco,\"Andale Mono WT\",\"Andale Mono\",\"Lucida Console\",\"Lucida Sans Typewriter\",\"DejaVu Sans Mono\",\"Bitstream Vera Sans Mono\",\"Liberation Mono\",\"Nimbus Mono L\",\"Courier New\",Courier,monospace;font-size:14px;line-height:1.375;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none;color:#5e6687;border-radius:.25rem;background:#f5f7ff;direction:ltr;-ms-hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:#dfe2f1;text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:#dfe2f1;text-shadow:none}pre[class*=language-]{overflow:auto;margin:0;padding:1.25rem}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#898ea4}.token.punctuation{color:#5e6687}.token.namespace{opacity:.7}.token.boolean,.token.number,.token.operator{color:#c76b29}.token.property{color:#c08b30}.token.tag{color:#3d8fd1}.token.string{color:#22a2c9}.token.selector{color:#6679cc}.token.attr-name{color:#c76b29}.language-css .token.string,.style .token.string,.token.entity,.token.url{color:#22a2c9}.token.attr-value,.token.control,.token.directive,.token.keyword,.token.unit{color:#ac9739}.token.atrule,.token.regex,.token.statement{color:#22a2c9}.token.placeholder,.token.variable{color:#3d8fd1}.token.deleted{text-decoration:line-through}.token.inserted{text-decoration:none;border-bottom:1px dotted #202746}.token.italic{font-style:italic}.token.bold,.token.important{font-weight:700}.token.important{color:#c94922}.token.entity{cursor:help}pre>code.highlight{outline:.4em solid #c94922;outline-offset:.4em}.line-numbers .line-numbers-rows{border-right-color:#dfe2f1}.line-numbers-rows>span:before{color:#979db4}.line-highlight{background:rgba(107,115,148,.2);background:linear-gradient(90deg,rgba(107,115,148,.2) 70%,rgba(107,115,148,0))}.docs{background:#fff}.docs h6{font-size:1rem;font-weight:600}.ct-content{order:1}.ct-content>h2[id],.ct-content>h3[id],.ct-content>h4[id]{pointer-events:none}.ct-content>h2[id]>a,.ct-content>h2[id]>div,.ct-content>h3[id]>a,.ct-content>h3[id]>div,.ct-content>h4[id]>a,.ct-content>h4[id]>div{pointer-events:auto}.ct-content>h2[id]:before,.ct-content>h3[id]:before,.ct-content>h4[id]:before{display:block;visibility:hidden;height:6rem;margin-top:-6rem;content:\"\"}.ct-content>table{width:100%;max-width:100%;margin-bottom:1rem}@media (max-width:991.98px){.ct-content>table{display:block;overflow-x:auto;-ms-overflow-style:-ms-autohiding-scrollbar}.ct-content>table.table-bordered{border:0}}.ct-content>table>tbody>tr>td,.ct-content>table>tbody>tr>th,.ct-content>table>tfoot>tr>td,.ct-content>table>tfoot>tr>th,.ct-content>table>thead>tr>td,.ct-content>table>thead>tr>th{padding:1rem;vertical-align:top;border:1px solid #e9ecef}.ct-content>table>tbody>tr>td>p:last-child,.ct-content>table>tbody>tr>th>p:last-child,.ct-content>table>tfoot>tr>td>p:last-child,.ct-content>table>tfoot>tr>th>p:last-child,.ct-content>table>thead>tr>td>p:last-child,.ct-content>table>thead>tr>th>p:last-child{margin-bottom:0}.ct-content>table td:first-child>code{white-space:nowrap}.ct-content>h2:not(:first-child){font-size:1.5rem;font-weight:600;margin-top:3rem}.ct-content>h3{font-size:1.25rem;font-weight:600;margin-top:2.5rem}.ct-content>ol li,.ct-content>ul li{margin-bottom:.25rem}@media (min-width:992px){.ct-content>ol,.ct-content>p,.ct-content>ul{max-width:80%}}.ct-page-title{margin-bottom:1.5rem;padding-left:1.25rem;border-left:2px solid #004689}.ct-title{font-weight:300;margin-top:1rem;margin-bottom:.5rem}@media (min-width:576px){.ct-title{font-size:1.5rem;font-weight:600}}.ct-lead{font-weight:500;color:#3b454e}@media (min-width:576px){.ct-lead{font-size:.875rem;max-width:80%;margin-bottom:1rem}}.ct-text-purple{color:#004689}.ct-text-purple-bright{color:#9da9f2}.ct-tabs-example .nav-link i{margin-right:5px}.color-swatch{margin:1rem 0;border-radius:.25rem;background-color:#f4f5f7}.color-swatch:after{display:table;clear:both;content:\" \"}.color-swatch-header{position:relative;height:0;padding-bottom:50%;border:1px solid transparent;border-radius:.25rem .25rem 0 0}.color-swatch-header.is-light{border-color:#c1c7d0}.color-swatch-header .pass-fail{position:absolute;bottom:0;width:100%}.color-swatch-header .pass-fail-item-wrap{position:relative;left:50%;float:left;transform:translateX(-50%)}.color-swatch-header .pass-fail-item-group{display:inline-block;padding:0 5px}.color-swatch-header .pass-fail-item{display:inline-block;float:left;padding:2px;text-align:center}.color-swatch-header .pass-fail-item.white .example{color:#fff}.color-swatch-header .pass-fail-item.small .example{font-size:10px}.color-swatch-header .pass-fail-item .lozenge{font-size:11px;font-weight:600;line-height:10px;padding:2px 4px;letter-spacing:.05em;text-transform:uppercase;color:#fff;border-radius:4px;background:#000}.color-swatch-body{position:relative;left:50%;float:left;padding:10px 0;transform:translateX(-50%)}.color-swatch-body .prop-item-wrap{float:left;min-width:65px;padding:0 15px}.color-swatch-body .prop-item{padding:15px 0}.color-swatch-body .prop-item .label{font-size:11px;line-height:16px;text-transform:uppercase;color:#62748c}.color-swatch-body .prop-item .value{font-size:14px}.table-colors{font-size:16px;font-weight:600;width:100%}.table-colors:first-child td,.table-colors:first-child td:first-child,.table-colors:first-child td:last-child,.table-colors td,.table-colors td:first-child,.table-colors td:last-child{padding:10px;border-bottom:1px solid rgba(0,0,0,.1);background:hsla(0,0%,100%,.9)}.table-colors:first-child tr:last-child td,.table-colors tr:last-child td{border-bottom:none}.table-colors:first-child td:first-child,.table-colors td:first-child{line-height:40px}.table-colors .swatch,.table-colors:first-child .swatch{display:inline-block;float:left;width:40px;height:40px;margin-right:20px;border:1px solid transparent;border-radius:4px}.table-colors .swatch.is-light,.table-colors:first-child .swatch.is-light{border-color:#c1c7d0}.table-colors .lozenge,.table-colors:first-child .lozenge{font-size:10px;font-weight:600;line-height:10px;display:inline-block;float:left;margin:5px 10px 0 0;padding:2px 4px;letter-spacing:.05em;text-transform:uppercase;color:#042a53;border-radius:4px;background:#97a0af}.ct-toc{font-size:.875rem;padding-top:2rem;padding-bottom:1.5rem;order:2}@supports ((position:-webkit-sticky) or (position:sticky)){.ct-toc{position:-webkit-sticky;position:sticky;top:4rem;overflow-y:auto;height:calc(100vh - 4rem)}}.section-nav{padding-left:0;border-left:1px solid #eee}.section-nav ul{padding-left:1rem}.section-nav ul ul{display:none}.toc-entry{font-size:1rem;display:block}.toc-entry a{font-size:90%;display:block;padding:.125rem 1.5rem;color:#99979c}.toc-entry a:hover{text-decoration:none;color:#004689}.ct-sidebar{border-bottom:1px solid #e6ecf1;background-color:#f5f7f9;order:0}@media (min-width:768px){.ct-sidebar{border-right:1px solid #e6ecf1}@supports ((position:-webkit-sticky) or (position:sticky)){.ct-sidebar{position:-webkit-sticky;position:sticky;z-index:1000;top:4rem;height:calc(100vh - 4rem)}}}@media (min-width:1200px){.ct-sidebar{flex:0 1 320px}}.ct-links{margin-right:-15px;margin-left:-15px;padding-top:2rem;padding-bottom:1rem}@media (min-width:768px){@supports ((position:-webkit-sticky) or (position:sticky)){.ct-links{overflow-y:auto;max-height:calc(100vh - 5rem)}}}@media (min-width:768px){.ct-links{display:block!important}}.ct-search{position:relative;margin-right:-15px;margin-left:-15px;padding:1rem 15px;border-bottom:1px solid rgba(0,0,0,.05)}.ct-search .form-control:focus{border-color:#9da9f2;box-shadow:0 0 0 3px rgba(157,169,242,.25)}.ct-search-docs-toggle{line-height:1;color:#212529}.ct-sidenav{display:none}.ct-toc-link{font-size:.875rem;font-weight:600;display:block;padding:.25rem 1.5rem;color:#0d2b3e}.ct-toc-link:hover{text-decoration:none;color:rgba(0,0,0,.85)}.ct-toc-item.active{margin-bottom:1rem}.ct-toc-item.active:not(:first-child){margin-top:1rem}.ct-toc-item.active>.ct-toc-link{color:rgba(0,0,0,.85)}.ct-toc-item.active>.ct-toc-link:hover{background-color:transparent}.ct-toc-item.active>.ct-sidenav{display:block}.ct-sidebar .nav>li>a{font-size:84%;display:block;padding:.25rem 1.5rem;color:#4c555a}.ct-sidebar .nav>li>a:hover{text-decoration:none;color:rgba(0,0,0,.85);background-color:transparent}.ct-sidebar .nav>.active>a{font-weight:500;position:relative;padding-left:2rem;color:#0099e5;background-color:transparent}.ct-sidebar .nav>.active>a:before{position:absolute;top:50%;left:1.5rem;width:2px;height:16px;content:\"\";transform:translateY(-50%);background-color:#0099e5}.ct-sidebar .nav>.active:hover>a{color:#0099e5}.scrollbar-inner{height:100%}.scrollbar-inner:not(:hover) .scroll-element{opacity:0}.scrollbar-inner .scroll-element{margin-right:2px;transition:opacity .3s}.scrollbar-inner .scroll-element .scroll-bar,.scrollbar-inner .scroll-element .scroll-element_track{transition:background-color .3s}.scrollbar-inner .scroll-element .scroll-element_track{background-color:transparent}.scrollbar-inner .scroll-element.scroll-y{right:0;width:3px}.scrollbar-inner .scroll-element.scroll-x{bottom:0;height:3px}.ct-footer{font-size:85%;text-align:center;background-color:#f7f7f7}.ct-footer a{font-weight:500;color:#525f7f}.ct-footer a:focus,.ct-footer a:hover{color:#004689}.ct-footer p{margin-bottom:0}@media (min-width:576px){.ct-footer{text-align:left}}.ct-footer-links{margin-bottom:1rem;padding-left:0}.ct-footer-links li{display:inline-block}.ct-footer-links li+li{margin-left:1rem}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2).default("5f6f5cec", content, true)

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{font-family:\"Poppins\",sans-serif!important}.breadcump{margin-bottom:10px}.el-card{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.el-card,.el-dialog{border-radius:10px}.bg-gradient-primary{background:linear-gradient(90deg,#1d74fd 16%,#45f2fc)}.bg-gradient-success{background:linear-gradient(90deg,#1dfd91 16%,#c7fc45)}.bg-gradient-danger{background:linear-gradient(90deg,#fd2f1d 16%,#fcc945)}.bg-gradient-secondarya{background:linear-gradient(90deg,#5c1dfd 16%,#cc45fc)}.card-panel{border:none;color:#fff}.card-panel .el-card__header{border:none}.card-panel .info{font-size:30px}.el-col{margin-bottom:20px}.color-primary{color:#1771c5!important}.color-success{color:#67c23a!important}.color-danger{color:#f56c6c!important}.color-warning{color:#e6a23c!important}.color-info{color:#909399!important}.float{position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#1771c5;color:#fff!important;border-radius:50px;text-align:center;z-index:99;box-shadow:2px 2px 3px #999;cursor:pointer}.my-float{margin-top:23px}.cropper{height:100%;width:100%;background:#ddd}.content{padding:20px}label{font-size:13px!important}.header{border-radius:0 0 50px 50px}.avatar{vertical-align:middle;width:50px;height:50px;border-radius:50%}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(78,53,53,.05)}.shadow-xl{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)}.shadow-2xl{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}.shadow-inner{box-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06)}.shadow-outline{box-shadow:0 0 0 3px rgba(66,153,225,.5)}.shadow-none{box-shadow:none}.dialog-custom .el-dialog__body{background-color:#e8e8e8!important}.btn-primary{color:#fff!important}.el-collapse{border-top:none}.collapse-item-section .el-collapse-item__wrap{border:none!important}.collapse-item-section .el-collapse-item__header{border:none}.collapse-item-section{border:1px solid grey;border-radius:10px;padding:10px}.title-section{width:100%}.title-section h3{margin-top:35px}.title-section h1{margin-top:30px}hr{margin-top:5px;margin-bottom:5px}.card-lesson{background-color:#f8f8f8;border-radius:10px;padding:20px}.fullheight{height:100%}.ohide{overflow:hidden!important}.bg-putih{background-color:#fff!important}.el-button--primary,.el-pagination.is-background .el-pager li:not(.disabled).active{background-color:#1771c5;border-color:#1771c5}.el-table td,.el-table th{padding:5px}.el-tabs__active-bar{background-color:#1771c5}.el-link.el-link--primary,.el-tabs__item.is-active{color:#1771c5!important}.el-tabs__item:hover{color:#1771c5}:focus{outline:none!important}.vs-card__group .vs-card__group-cards{overflow-x:hidden!important}.navbar-vertical .navbar-brand-img,.navbar-vertical .navbar-brand>img{max-height:4rem;margin-left:40px;margin-top:15px}td,th{width:1px;white-space:nowrap}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2).default("72119c29", content, true)

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".not-margin{margin:0;font-weight:400;padding:10px}.con-form{width:100%}.con-form .flex{display:flex;align-items:center;justify-content:space-between}.con-form .flex a{font-size:.8rem;opacity:.7}.con-form .flex a:hover{opacity:1}.con-form .vs-checkbox-label{font-size:.8rem}.con-form .vs-input-content{margin:0;width:100%}.con-form .vs-input-content .vs-input{width:100%}.con-form .vs-select-content{margin:0;width:100%}.con-form .vs-select-content .vs-select__input{width:100%}.footer-dialog{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.footer-dialog .new{margin:20px 0 0;padding:0;font-size:.7rem}.footer-dialog .new a{color:rgba(var(--vs-primary),1)!important;margin-left:6px}.footer-dialog .new a:hover{text-decoration:underline}.footer-dialog .vs-button{margin:0}.vs-select-content{max-width:100%!important}.vs-input-content{margin:0;width:100%}.vs-input-content .vs-input{width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2).default("54b3487d", content, true)

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(70);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(71);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(72);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(73);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(74);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "?#boxicons" });
// Module
exports.push([module.i, "@font-face{font-family:\"boxicons\";font-weight:400;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\")}.bx{font-family:\"boxicons\"!important;font-weight:400;font-style:normal;font-feature-settings:normal;font-variant:normal;line-height:1;display:inline-block;text-transform:none;speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bx-ul{margin-left:2em;padding-left:0;list-style:none}.bx-ul>li{position:relative}.bx-ul .bx{font-size:inherit;line-height:inherit;position:absolute;left:-2em;width:2em;text-align:center}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@-webkit-keyframes burst{0%{transform:scale(1);opacity:1}90%{transform:scale(1.5);opacity:0}}@keyframes burst{0%{transform:scale(1);opacity:1}90%{transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{transform:translateX(0);opacity:1}75%{transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{transform:translateX(0);opacity:1}75%{transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{transform:translateX(0);opacity:1}75%{transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{transform:translateX(0);opacity:1}75%{transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{transform:translateY(0);opacity:1}75%{transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{transform:translateY(0);opacity:1}75%{transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{transform:translateY(0);opacity:1}75%{transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{transform:translateY(0);opacity:1}75%{transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{transform:scaleX(1) rotate(10deg)}40%,60%,80%{transform:scaleX(1) rotate(-10deg)}to{transform:scaleX(1)}}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{transform:scaleX(1) rotate(10deg)}40%,60%,80%{transform:rotate(-10deg)}to{transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s linear infinite;animation:flashing 1.5s linear infinite}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s linear infinite;animation:burst 1.5s linear infinite}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s linear infinite;animation:fade-up 1.5s linear infinite}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s linear infinite;animation:fade-down 1.5s linear infinite}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s linear infinite;animation:fade-left 1.5s linear infinite}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s linear infinite;animation:fade-right 1.5s linear infinite}.bx-xs{font-size:1rem!important}.bx-sm{font-size:1.55rem!important}.bx-md{font-size:2.25rem!important}.bx-fw{font-size:1.2857142857em;line-height:.8em;width:1.2857142857em;height:.8em;margin-top:-.2em!important;vertical-align:middle}.bx-lg{font-size:3!important}.bx-pull-left{float:left;margin-right:.3em!important}.bx-pull-right{float:right;margin-left:.3em!important}.bx-rotate-90{transform:rotate(90deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0,mirror=1)\"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2,mirror=1)\"}.bx-border{padding:.25em;border:.07em solid rgba(0,0,0,.1);border-radius:.25em}.bx-border-circle{padding:.25em;border:.07em solid rgba(0,0,0,.1);border-radius:50%}.bx-abacus:before{content:\"\\e900\"}.bx-accessibility:before{content:\"\\e901\"}.bx-add-to-queue:before{content:\"\\e902\"}.bx-adjust:before{content:\"\\e903\"}.bx-alarm:before{content:\"\\e904\"}.bx-alarm-add:before{content:\"\\e905\"}.bx-alarm-exclamation:before{content:\"\\e906\"}.bx-alarm-off:before{content:\"\\e907\"}.bx-alarm-snooze:before{content:\"\\e908\"}.bx-album:before{content:\"\\e909\"}.bx-align-justify:before{content:\"\\e90a\"}.bx-align-left:before{content:\"\\e90b\"}.bx-align-middle:before{content:\"\\e90c\"}.bx-align-right:before{content:\"\\e90d\"}.bx-analyse:before{content:\"\\e90e\"}.bx-anchor:before{content:\"\\e90f\"}.bx-angry:before{content:\"\\e910\"}.bx-aperture:before{content:\"\\e911\"}.bx-arch:before{content:\"\\e912\"}.bx-archive:before{content:\"\\e913\"}.bx-archive-in:before{content:\"\\e914\"}.bx-archive-out:before{content:\"\\e915\"}.bx-area:before{content:\"\\e916\"}.bx-arrow-back:before{content:\"\\e917\"}.bx-arrow-from-bottom:before{content:\"\\e918\"}.bx-arrow-from-left:before{content:\"\\e919\"}.bx-arrow-from-right:before{content:\"\\e91a\"}.bx-arrow-from-top:before{content:\"\\e91b\"}.bx-arrow-to-bottom:before{content:\"\\e91c\"}.bx-arrow-to-left:before{content:\"\\e91d\"}.bx-arrow-to-right:before{content:\"\\e91e\"}.bx-arrow-to-top:before{content:\"\\e91f\"}.bx-at:before{content:\"\\e920\"}.bx-atom:before{content:\"\\e921\"}.bx-award:before{content:\"\\e922\"}.bx-badge:before{content:\"\\e923\"}.bx-badge-check:before{content:\"\\e924\"}.bx-ball:before{content:\"\\e925\"}.bx-band-aid:before{content:\"\\e926\"}.bx-bar-chart:before{content:\"\\e927\"}.bx-bar-chart-alt:before{content:\"\\e928\"}.bx-bar-chart-alt-2:before{content:\"\\e929\"}.bx-bar-chart-square:before{content:\"\\e92a\"}.bx-barcode:before{content:\"\\e92b\"}.bx-barcode-reader:before{content:\"\\e92c\"}.bx-baseball:before{content:\"\\e92d\"}.bx-basket:before{content:\"\\e92e\"}.bx-basketball:before{content:\"\\e92f\"}.bx-bath:before{content:\"\\e930\"}.bx-battery:before{content:\"\\e931\"}.bx-bed:before{content:\"\\e932\"}.bx-been-here:before{content:\"\\e933\"}.bx-beer:before{content:\"\\e934\"}.bx-bell:before{content:\"\\e935\"}.bx-bell-minus:before{content:\"\\e936\"}.bx-bell-off:before{content:\"\\e937\"}.bx-bell-plus:before{content:\"\\e938\"}.bx-bible:before{content:\"\\e939\"}.bx-bitcoin:before{content:\"\\e93a\"}.bx-blanket:before{content:\"\\e93b\"}.bx-block:before{content:\"\\e93c\"}.bx-bluetooth:before{content:\"\\e93d\"}.bx-body:before{content:\"\\e93e\"}.bx-bold:before{content:\"\\e93f\"}.bx-bolt-circle:before{content:\"\\e940\"}.bx-bomb:before{content:\"\\e941\"}.bx-bone:before{content:\"\\e942\"}.bx-bong:before{content:\"\\e943\"}.bx-book:before{content:\"\\e944\"}.bx-book-add:before{content:\"\\e945\"}.bx-book-alt:before{content:\"\\e946\"}.bx-book-bookmark:before{content:\"\\e947\"}.bx-book-content:before{content:\"\\e948\"}.bx-book-heart:before{content:\"\\e949\"}.bx-bookmark:before{content:\"\\e94a\"}.bx-bookmark-alt:before{content:\"\\e94b\"}.bx-bookmark-alt-minus:before{content:\"\\e94c\"}.bx-bookmark-alt-plus:before{content:\"\\e94d\"}.bx-bookmark-heart:before{content:\"\\e94e\"}.bx-bookmark-minus:before{content:\"\\e94f\"}.bx-bookmark-plus:before{content:\"\\e950\"}.bx-bookmarks:before{content:\"\\e951\"}.bx-book-open:before{content:\"\\e952\"}.bx-book-reader:before{content:\"\\e953\"}.bx-border-all:before{content:\"\\e954\"}.bx-border-bottom:before{content:\"\\e955\"}.bx-border-inner:before{content:\"\\e956\"}.bx-border-left:before{content:\"\\e957\"}.bx-border-none:before{content:\"\\e958\"}.bx-border-outer:before{content:\"\\e959\"}.bx-border-radius:before{content:\"\\e95a\"}.bx-border-right:before{content:\"\\e95b\"}.bx-border-top:before{content:\"\\e95c\"}.bx-bot:before{content:\"\\e95d\"}.bx-bowling-ball:before{content:\"\\e95e\"}.bx-box:before{content:\"\\e95f\"}.bx-bracket:before{content:\"\\e960\"}.bx-braille:before{content:\"\\e961\"}.bx-brain:before{content:\"\\e962\"}.bx-briefcase:before{content:\"\\e963\"}.bx-briefcase-alt:before{content:\"\\e964\"}.bx-briefcase-alt-2:before{content:\"\\e965\"}.bx-brightness:before{content:\"\\e966\"}.bx-brightness-half:before{content:\"\\e967\"}.bx-broadcast:before{content:\"\\e968\"}.bx-brush:before{content:\"\\e969\"}.bx-brush-alt:before{content:\"\\e96a\"}.bx-bug:before{content:\"\\e96b\"}.bx-bug-alt:before{content:\"\\e96c\"}.bx-building:before{content:\"\\e96d\"}.bx-building-house:before{content:\"\\e96e\"}.bx-buildings:before{content:\"\\e96f\"}.bx-bulb:before{content:\"\\e970\"}.bx-bullseye:before{content:\"\\e971\"}.bx-buoy:before{content:\"\\e972\"}.bx-bus:before{content:\"\\e973\"}.bx-bus-school:before{content:\"\\e974\"}.bx-cabinet:before{content:\"\\e975\"}.bx-cake:before{content:\"\\e976\"}.bx-calculator:before{content:\"\\e977\"}.bx-calendar:before{content:\"\\e978\"}.bx-calendar-alt:before{content:\"\\e979\"}.bx-calendar-check:before{content:\"\\e97a\"}.bx-calendar-edit:before{content:\"\\e97b\"}.bx-calendar-event:before{content:\"\\e97c\"}.bx-calendar-exclamation:before{content:\"\\e97d\"}.bx-calendar-heart:before{content:\"\\e97e\"}.bx-calendar-minus:before{content:\"\\e97f\"}.bx-calendar-plus:before{content:\"\\e980\"}.bx-calendar-star:before{content:\"\\e981\"}.bx-calendar-week:before{content:\"\\e982\"}.bx-calendar-x:before{content:\"\\e983\"}.bx-camera:before{content:\"\\e984\"}.bx-camera-home:before{content:\"\\e985\"}.bx-camera-movie:before{content:\"\\e986\"}.bx-camera-off:before{content:\"\\e987\"}.bx-capsule:before{content:\"\\e988\"}.bx-captions:before{content:\"\\e989\"}.bx-car:before{content:\"\\e98a\"}.bx-card:before{content:\"\\e98b\"}.bx-caret-down:before{content:\"\\e98c\"}.bx-caret-down-circle:before{content:\"\\e98d\"}.bx-caret-down-square:before{content:\"\\e98e\"}.bx-caret-left:before{content:\"\\e98f\"}.bx-caret-left-circle:before{content:\"\\e990\"}.bx-caret-left-square:before{content:\"\\e991\"}.bx-caret-right:before{content:\"\\e992\"}.bx-caret-right-circle:before{content:\"\\e993\"}.bx-caret-right-square:before{content:\"\\e994\"}.bx-caret-up:before{content:\"\\e995\"}.bx-caret-up-circle:before{content:\"\\e996\"}.bx-caret-up-square:before{content:\"\\e997\"}.bx-carousel:before{content:\"\\e998\"}.bx-cart:before{content:\"\\e999\"}.bx-cart-alt:before{content:\"\\e99a\"}.bx-cast:before{content:\"\\e99b\"}.bx-category:before{content:\"\\e99c\"}.bx-category-alt:before{content:\"\\e99d\"}.bx-cctv:before{content:\"\\e99e\"}.bx-certification:before{content:\"\\e99f\"}.bx-chair:before{content:\"\\e9a0\"}.bx-chalkboard:before{content:\"\\e9a1\"}.bx-chart:before{content:\"\\e9a2\"}.bx-chat:before{content:\"\\e9a3\"}.bx-check:before{content:\"\\e9a4\"}.bx-checkbox:before{content:\"\\e9a5\"}.bx-checkbox-checked:before{content:\"\\e9a6\"}.bx-checkbox-square:before{content:\"\\e9a7\"}.bx-check-circle:before{content:\"\\e9a8\"}.bx-check-double:before{content:\"\\e9a9\"}.bx-check-shield:before{content:\"\\e9aa\"}.bx-check-square:before{content:\"\\e9ab\"}.bx-chevron-down:before{content:\"\\e9ac\"}.bx-chevron-down-circle:before{content:\"\\e9ad\"}.bx-chevron-down-square:before{content:\"\\e9ae\"}.bx-chevron-left:before{content:\"\\e9af\"}.bx-chevron-left-circle:before{content:\"\\e9b0\"}.bx-chevron-left-square:before{content:\"\\e9b1\"}.bx-chevron-right:before{content:\"\\e9b2\"}.bx-chevron-right-circle:before{content:\"\\e9b3\"}.bx-chevron-right-square:before{content:\"\\e9b4\"}.bx-chevrons-down:before{content:\"\\e9b5\"}.bx-chevrons-left:before{content:\"\\e9b6\"}.bx-chevrons-right:before{content:\"\\e9b7\"}.bx-chevrons-up:before{content:\"\\e9b8\"}.bx-chevron-up:before{content:\"\\e9b9\"}.bx-chevron-up-circle:before{content:\"\\e9ba\"}.bx-chevron-up-square:before{content:\"\\e9bb\"}.bx-chip:before{content:\"\\e9bc\"}.bx-church:before{content:\"\\e9bd\"}.bx-circle:before{content:\"\\e9be\"}.bx-clinic:before{content:\"\\e9bf\"}.bx-clipboard:before{content:\"\\e9c0\"}.bx-closet:before{content:\"\\e9c1\"}.bx-cloud:before{content:\"\\e9c2\"}.bx-cloud-download:before{content:\"\\e9c3\"}.bx-cloud-drizzle:before{content:\"\\e9c4\"}.bx-cloud-lightning:before{content:\"\\e9c5\"}.bx-cloud-light-rain:before{content:\"\\e9c6\"}.bx-cloud-rain:before{content:\"\\e9c7\"}.bx-cloud-snow:before{content:\"\\e9c8\"}.bx-cloud-upload:before{content:\"\\e9c9\"}.bx-code:before{content:\"\\e9ca\"}.bx-code-alt:before{content:\"\\e9cb\"}.bx-code-block:before{content:\"\\e9cc\"}.bx-code-curly:before{content:\"\\e9cd\"}.bx-coffee:before{content:\"\\e9ce\"}.bx-coffee-togo:before{content:\"\\e9cf\"}.bx-cog:before{content:\"\\e9d0\"}.bx-coin:before{content:\"\\e9d1\"}.bx-coin-stack:before{content:\"\\e9d2\"}.bx-collapse:before{content:\"\\e9d3\"}.bx-collection:before{content:\"\\e9d4\"}.bx-color-fill:before{content:\"\\e9d5\"}.bx-columns:before{content:\"\\e9d6\"}.bx-command:before{content:\"\\e9d7\"}.bx-comment:before{content:\"\\e9d8\"}.bx-comment-add:before{content:\"\\e9d9\"}.bx-comment-check:before{content:\"\\e9da\"}.bx-comment-detail:before{content:\"\\e9db\"}.bx-comment-dots:before{content:\"\\e9dc\"}.bx-comment-edit:before{content:\"\\e9dd\"}.bx-comment-error:before{content:\"\\e9de\"}.bx-comment-minus:before{content:\"\\e9df\"}.bx-comment-x:before{content:\"\\e9e0\"}.bx-compass:before{content:\"\\e9e1\"}.bx-confused:before{content:\"\\e9e2\"}.bx-conversation:before{content:\"\\e9e3\"}.bx-cookie:before{content:\"\\e9e4\"}.bx-cool:before{content:\"\\e9e5\"}.bx-copy:before{content:\"\\e9e6\"}.bx-copy-alt:before{content:\"\\e9e7\"}.bx-copyright:before{content:\"\\e9e8\"}.bx-credit-card:before{content:\"\\e9e9\"}.bx-credit-card-alt:before{content:\"\\e9ea\"}.bx-credit-card-front:before{content:\"\\e9eb\"}.bx-crop:before{content:\"\\e9ec\"}.bx-crosshair:before{content:\"\\e9ed\"}.bx-crown:before{content:\"\\e9ee\"}.bx-cube:before{content:\"\\e9ef\"}.bx-cube-alt:before{content:\"\\e9f0\"}.bx-cuboid:before{content:\"\\e9f1\"}.bx-current-location:before{content:\"\\e9f2\"}.bx-customize:before{content:\"\\e9f3\"}.bx-cut:before{content:\"\\e9f4\"}.bx-cycling:before{content:\"\\e9f5\"}.bx-cylinder:before{content:\"\\e9f6\"}.bx-data:before{content:\"\\e9f7\"}.bx-desktop:before{content:\"\\e9f8\"}.bx-detail:before{content:\"\\e9f9\"}.bx-devices:before{content:\"\\e9fa\"}.bx-dialpad:before{content:\"\\e9fb\"}.bx-dialpad-alt:before{content:\"\\e9fc\"}.bx-diamond:before{content:\"\\e9fd\"}.bx-dice-1:before{content:\"\\e9fe\"}.bx-dice-2:before{content:\"\\e9ff\"}.bx-dice-3:before{content:\"\\ea00\"}.bx-dice-4:before{content:\"\\ea01\"}.bx-dice-5:before{content:\"\\ea02\"}.bx-dice-6:before{content:\"\\ea03\"}.bx-directions:before{content:\"\\ea04\"}.bx-disc:before{content:\"\\ea05\"}.bx-dish:before{content:\"\\ea06\"}.bx-dislike:before{content:\"\\ea07\"}.bx-dizzy:before{content:\"\\ea08\"}.bx-dna:before{content:\"\\ea09\"}.bx-dock-bottom:before{content:\"\\ea0a\"}.bx-dock-left:before{content:\"\\ea0b\"}.bx-dock-right:before{content:\"\\ea0c\"}.bx-dock-top:before{content:\"\\ea0d\"}.bx-dollar:before{content:\"\\ea0e\"}.bx-dollar-circle:before{content:\"\\ea0f\"}.bx-donate-blood:before{content:\"\\ea10\"}.bx-donate-heart:before{content:\"\\ea11\"}.bx-door-open:before{content:\"\\ea12\"}.bx-dots-horizontal:before{content:\"\\ea13\"}.bx-dots-horizontal-rounded:before{content:\"\\ea14\"}.bx-dots-vertical:before{content:\"\\ea15\"}.bx-dots-vertical-rounded:before{content:\"\\ea16\"}.bx-doughnut-chart:before{content:\"\\ea17\"}.bx-down-arrow:before{content:\"\\ea18\"}.bx-down-arrow-alt:before{content:\"\\ea19\"}.bx-down-arrow-circle:before{content:\"\\ea1a\"}.bx-download:before{content:\"\\ea1b\"}.bx-downvote:before{content:\"\\ea1c\"}.bx-drink:before{content:\"\\ea1d\"}.bx-droplet:before{content:\"\\ea1e\"}.bx-dumbbell:before{content:\"\\ea1f\"}.bx-duplicate:before{content:\"\\ea20\"}.bx-edit:before{content:\"\\ea21\"}.bx-edit-alt:before{content:\"\\ea22\"}.bx-envelope:before{content:\"\\ea23\"}.bx-envelope-open:before{content:\"\\ea24\"}.bx-equalizer:before{content:\"\\ea25\"}.bx-eraser:before{content:\"\\ea26\"}.bx-error:before{content:\"\\ea27\"}.bx-error-alt:before{content:\"\\ea28\"}.bx-error-circle:before{content:\"\\ea29\"}.bx-euro:before{content:\"\\ea2a\"}.bx-exclude:before{content:\"\\ea2b\"}.bx-exit:before{content:\"\\ea2c\"}.bx-exit-fullscreen:before{content:\"\\ea2d\"}.bx-expand:before{content:\"\\ea2e\"}.bx-expand-alt:before{content:\"\\ea2f\"}.bx-export:before{content:\"\\ea30\"}.bx-extension:before{content:\"\\ea31\"}.bx-face:before{content:\"\\ea32\"}.bx-fast-forward:before{content:\"\\ea33\"}.bx-fast-forward-circle:before{content:\"\\ea34\"}.bx-female:before{content:\"\\ea35\"}.bx-female-sign:before{content:\"\\ea36\"}.bx-file:before{content:\"\\ea37\"}.bx-file-blank:before{content:\"\\ea38\"}.bx-file-find:before{content:\"\\ea39\"}.bx-film:before{content:\"\\ea3a\"}.bx-filter:before{content:\"\\ea3b\"}.bx-filter-alt:before{content:\"\\ea3c\"}.bx-fingerprint:before{content:\"\\ea3d\"}.bx-first-aid:before{content:\"\\ea3e\"}.bx-first-page:before{content:\"\\ea3f\"}.bx-flag:before{content:\"\\ea40\"}.bx-folder:before{content:\"\\ea41\"}.bx-folder-minus:before{content:\"\\ea42\"}.bx-folder-open:before{content:\"\\ea43\"}.bx-folder-plus:before{content:\"\\ea44\"}.bx-font:before{content:\"\\ea45\"}.bx-font-color:before{content:\"\\ea46\"}.bx-font-family:before{content:\"\\ea47\"}.bx-font-size:before{content:\"\\ea48\"}.bx-food-menu:before{content:\"\\ea49\"}.bx-food-tag:before{content:\"\\ea4a\"}.bx-football:before{content:\"\\ea4b\"}.bx-fridge:before{content:\"\\ea4c\"}.bx-fullscreen:before{content:\"\\ea4d\"}.bx-game:before{content:\"\\ea4e\"}.bx-gas-pump:before{content:\"\\ea4f\"}.bx-ghost:before{content:\"\\ea50\"}.bx-gift:before{content:\"\\ea51\"}.bx-git-branch:before{content:\"\\ea52\"}.bx-git-commit:before{content:\"\\ea53\"}.bx-git-compare:before{content:\"\\ea54\"}.bx-git-merge:before{content:\"\\ea55\"}.bx-git-pull-request:before{content:\"\\ea56\"}.bx-git-repo-forked:before{content:\"\\ea57\"}.bx-glasses:before{content:\"\\ea58\"}.bx-glasses-alt:before{content:\"\\ea59\"}.bx-globe:before{content:\"\\ea5a\"}.bx-globe-alt:before{content:\"\\ea5b\"}.bx-grid:before{content:\"\\ea5c\"}.bx-grid-alt:before{content:\"\\ea5d\"}.bx-grid-horizontal:before{content:\"\\ea5e\"}.bx-grid-small:before{content:\"\\ea5f\"}.bx-grid-vertical:before{content:\"\\ea60\"}.bx-group:before{content:\"\\ea61\"}.bx-handicap:before{content:\"\\ea62\"}.bx-happy:before{content:\"\\ea63\"}.bx-happy-alt:before{content:\"\\ea64\"}.bx-happy-beaming:before{content:\"\\ea65\"}.bx-happy-heart-eyes:before{content:\"\\ea66\"}.bx-hash:before{content:\"\\ea67\"}.bx-hdd:before{content:\"\\ea68\"}.bx-heading:before{content:\"\\ea69\"}.bx-headphone:before{content:\"\\ea6a\"}.bx-health:before{content:\"\\ea6b\"}.bx-heart:before{content:\"\\ea6c\"}.bx-heart-circle:before{content:\"\\ea6d\"}.bx-heart-square:before{content:\"\\ea6e\"}.bx-help-circle:before{content:\"\\ea6f\"}.bx-hide:before{content:\"\\ea70\"}.bx-highlight:before{content:\"\\ea71\"}.bx-history:before{content:\"\\ea72\"}.bx-hive:before{content:\"\\ea73\"}.bx-home:before{content:\"\\ea74\"}.bx-home-alt:before{content:\"\\ea75\"}.bx-home-circle:before{content:\"\\ea76\"}.bx-home-heart:before{content:\"\\ea77\"}.bx-home-smile:before{content:\"\\ea78\"}.bx-horizontal-center:before{content:\"\\ea79\"}.bx-hotel:before{content:\"\\ea7a\"}.bx-hourglass:before{content:\"\\ea7b\"}.bx-id-card:before{content:\"\\ea7c\"}.bx-image:before{content:\"\\ea7d\"}.bx-image-add:before{content:\"\\ea7e\"}.bx-image-alt:before{content:\"\\ea7f\"}.bx-images:before{content:\"\\ea80\"}.bx-import:before{content:\"\\ea81\"}.bx-infinite:before{content:\"\\ea82\"}.bx-info-circle:before{content:\"\\ea83\"}.bx-info-square:before{content:\"\\ea84\"}.bx-intersect:before{content:\"\\ea85\"}.bx-italic:before{content:\"\\ea86\"}.bx-joystick:before{content:\"\\ea87\"}.bx-joystick-alt:before{content:\"\\ea88\"}.bx-joystick-button:before{content:\"\\ea89\"}.bx-key:before{content:\"\\ea8a\"}.bx-label:before{content:\"\\ea8b\"}.bx-landscape:before{content:\"\\ea8c\"}.bx-laptop:before{content:\"\\ea8d\"}.bx-last-page:before{content:\"\\ea8e\"}.bx-laugh:before{content:\"\\ea8f\"}.bx-layer:before{content:\"\\ea90\"}.bx-layer-minus:before{content:\"\\ea91\"}.bx-layer-plus:before{content:\"\\ea92\"}.bx-layout:before{content:\"\\ea93\"}.bx-left-arrow:before{content:\"\\ea94\"}.bx-left-arrow-alt:before{content:\"\\ea95\"}.bx-left-arrow-circle:before{content:\"\\ea96\"}.bx-left-down-arrow-circle:before{content:\"\\ea97\"}.bx-left-indent:before{content:\"\\ea98\"}.bx-left-top-arrow-circle:before{content:\"\\ea99\"}.bx-library:before{content:\"\\ea9a\"}.bx-like:before{content:\"\\ea9b\"}.bx-line-chart:before{content:\"\\ea9c\"}.bx-line-chart-down:before{content:\"\\ea9d\"}.bx-link:before{content:\"\\ea9e\"}.bx-link-alt:before{content:\"\\ea9f\"}.bx-link-external:before{content:\"\\eaa0\"}.bx-lira:before{content:\"\\eaa1\"}.bx-list-check:before{content:\"\\eaa2\"}.bx-list-minus:before{content:\"\\eaa3\"}.bx-list-ol:before{content:\"\\eaa4\"}.bx-list-plus:before{content:\"\\eaa5\"}.bx-list-ul:before{content:\"\\eaa6\"}.bx-loader:before{content:\"\\eaa7\"}.bx-loader-alt:before{content:\"\\eaa8\"}.bx-loader-circle:before{content:\"\\eaa9\"}.bx-location-plus:before{content:\"\\eaaa\"}.bx-lock:before{content:\"\\eaab\"}.bx-lock-alt:before{content:\"\\eaac\"}.bx-lock-open:before{content:\"\\eaad\"}.bx-lock-open-alt:before{content:\"\\eaae\"}.bx-log-in:before{content:\"\\eaaf\"}.bx-log-in-circle:before{content:\"\\eab0\"}.bx-log-out:before{content:\"\\eab1\"}.bx-log-out-circle:before{content:\"\\eab2\"}.bx-low-vision:before{content:\"\\eab3\"}.bx-magnet:before{content:\"\\eab4\"}.bx-mail-send:before{content:\"\\eab5\"}.bx-male:before{content:\"\\eab6\"}.bx-male-sign:before{content:\"\\eab7\"}.bx-map:before{content:\"\\eab8\"}.bx-map-alt:before{content:\"\\eab9\"}.bx-map-pin:before{content:\"\\eaba\"}.bx-mask:before{content:\"\\eabb\"}.bx-medal:before{content:\"\\eabc\"}.bx-meh:before{content:\"\\eabd\"}.bx-meh-alt:before{content:\"\\eabe\"}.bx-meh-blank:before{content:\"\\eabf\"}.bx-memory-card:before{content:\"\\eac0\"}.bx-menu:before{content:\"\\eac1\"}.bx-menu-alt-left:before{content:\"\\eac2\"}.bx-menu-alt-right:before{content:\"\\eac3\"}.bx-merge:before{content:\"\\eac4\"}.bx-message:before{content:\"\\eac5\"}.bx-message-add:before{content:\"\\eac6\"}.bx-message-alt:before{content:\"\\eac7\"}.bx-message-alt-add:before{content:\"\\eac8\"}.bx-message-alt-check:before{content:\"\\eac9\"}.bx-message-alt-detail:before{content:\"\\eaca\"}.bx-message-alt-dots:before{content:\"\\eacb\"}.bx-message-alt-edit:before{content:\"\\eacc\"}.bx-message-alt-error:before{content:\"\\eacd\"}.bx-message-alt-minus:before{content:\"\\eace\"}.bx-message-alt-x:before{content:\"\\eacf\"}.bx-message-check:before{content:\"\\ead0\"}.bx-message-detail:before{content:\"\\ead1\"}.bx-message-dots:before{content:\"\\ead2\"}.bx-message-edit:before{content:\"\\ead3\"}.bx-message-error:before{content:\"\\ead4\"}.bx-message-minus:before{content:\"\\ead5\"}.bx-message-rounded:before{content:\"\\ead6\"}.bx-message-rounded-add:before{content:\"\\ead7\"}.bx-message-rounded-check:before{content:\"\\ead8\"}.bx-message-rounded-detail:before{content:\"\\ead9\"}.bx-message-rounded-dots:before{content:\"\\eada\"}.bx-message-rounded-edit:before{content:\"\\eadb\"}.bx-message-rounded-error:before{content:\"\\eadc\"}.bx-message-rounded-minus:before{content:\"\\eadd\"}.bx-message-rounded-x:before{content:\"\\eade\"}.bx-message-square:before{content:\"\\eadf\"}.bx-message-square-add:before{content:\"\\eae0\"}.bx-message-square-check:before{content:\"\\eae1\"}.bx-message-square-detail:before{content:\"\\eae2\"}.bx-message-square-dots:before{content:\"\\eae3\"}.bx-message-square-edit:before{content:\"\\eae4\"}.bx-message-square-error:before{content:\"\\eae5\"}.bx-message-square-minus:before{content:\"\\eae6\"}.bx-message-square-x:before{content:\"\\eae7\"}.bx-message-x:before{content:\"\\eae8\"}.bx-meteor:before{content:\"\\eae9\"}.bx-microchip:before{content:\"\\eaea\"}.bx-microphone:before{content:\"\\eaeb\"}.bx-microphone-off:before{content:\"\\eaec\"}.bx-minus:before{content:\"\\eaed\"}.bx-minus-back:before{content:\"\\eaee\"}.bx-minus-circle:before{content:\"\\eaef\"}.bx-minus-front:before{content:\"\\eaf0\"}.bx-mobile:before{content:\"\\eaf1\"}.bx-mobile-alt:before{content:\"\\eaf2\"}.bx-mobile-landscape:before{content:\"\\eaf3\"}.bx-mobile-vibration:before{content:\"\\eaf4\"}.bx-money:before{content:\"\\eaf5\"}.bx-moon:before{content:\"\\eaf6\"}.bx-mouse:before{content:\"\\eaf7\"}.bx-mouse-alt:before{content:\"\\eaf8\"}.bx-move:before{content:\"\\eaf9\"}.bx-move-horizontal:before{content:\"\\eafa\"}.bx-move-vertical:before{content:\"\\eafb\"}.bx-movie:before{content:\"\\eafc\"}.bx-movie-play:before{content:\"\\eafd\"}.bx-music:before{content:\"\\eafe\"}.bx-navigation:before{content:\"\\eaff\"}.bx-network-chart:before{content:\"\\eb00\"}.bx-news:before{content:\"\\eb01\"}.bx-no-entry:before{content:\"\\eb02\"}.bx-note:before{content:\"\\eb03\"}.bx-notepad:before{content:\"\\eb04\"}.bx-notification:before{content:\"\\eb05\"}.bx-notification-off:before{content:\"\\eb06\"}.bx-outline:before{content:\"\\eb07\"}.bx-package:before{content:\"\\eb08\"}.bx-paint:before{content:\"\\eb09\"}.bx-paint-roll:before{content:\"\\eb0a\"}.bx-palette:before{content:\"\\eb0b\"}.bx-paperclip:before{content:\"\\eb0c\"}.bx-paper-plane:before{content:\"\\eb0d\"}.bx-paragraph:before{content:\"\\eb0e\"}.bx-paste:before{content:\"\\eb0f\"}.bx-pause:before{content:\"\\eb10\"}.bx-pause-circle:before{content:\"\\eb11\"}.bx-pen:before{content:\"\\eb12\"}.bx-pencil:before{content:\"\\eb13\"}.bx-phone:before{content:\"\\eb14\"}.bx-phone-call:before{content:\"\\eb15\"}.bx-phone-incoming:before{content:\"\\eb16\"}.bx-phone-outgoing:before{content:\"\\eb17\"}.bx-photo-album:before{content:\"\\eb18\"}.bx-pie-chart:before{content:\"\\eb19\"}.bx-pie-chart-alt:before{content:\"\\eb1a\"}.bx-pie-chart-alt-2:before{content:\"\\eb1b\"}.bx-pin:before{content:\"\\eb1c\"}.bx-planet:before{content:\"\\eb1d\"}.bx-play:before{content:\"\\eb1e\"}.bx-play-circle:before{content:\"\\eb1f\"}.bx-plug:before{content:\"\\eb20\"}.bx-plus:before{content:\"\\eb21\"}.bx-plus-circle:before{content:\"\\eb22\"}.bx-plus-medical:before{content:\"\\eb23\"}.bx-pointer:before{content:\"\\eb24\"}.bx-poll:before{content:\"\\eb25\"}.bx-polygon:before{content:\"\\eb26\"}.bx-pound:before{content:\"\\eb27\"}.bx-power-off:before{content:\"\\eb28\"}.bx-printer:before{content:\"\\eb29\"}.bx-pulse:before{content:\"\\eb2a\"}.bx-purchase-tag:before{content:\"\\eb2b\"}.bx-purchase-tag-alt:before{content:\"\\eb2c\"}.bx-pyramid:before{content:\"\\eb2d\"}.bx-question-mark:before{content:\"\\eb2e\"}.bx-radar:before{content:\"\\eb2f\"}.bx-radio:before{content:\"\\eb30\"}.bx-radio-circle:before{content:\"\\eb31\"}.bx-radio-circle-marked:before{content:\"\\eb32\"}.bx-receipt:before{content:\"\\eb33\"}.bx-rectangle:before{content:\"\\eb34\"}.bx-recycle:before{content:\"\\eb35\"}.bx-redo:before{content:\"\\eb36\"}.bx-refresh:before{content:\"\\eb37\"}.bx-rename:before{content:\"\\eb38\"}.bx-repeat:before{content:\"\\eb39\"}.bx-reply:before{content:\"\\eb3a\"}.bx-reply-all:before{content:\"\\eb3b\"}.bx-repost:before{content:\"\\eb3c\"}.bx-reset:before{content:\"\\eb3d\"}.bx-restaurant:before{content:\"\\eb3e\"}.bx-revision:before{content:\"\\eb3f\"}.bx-rewind:before{content:\"\\eb40\"}.bx-rewind-circle:before{content:\"\\eb41\"}.bx-right-arrow:before{content:\"\\eb42\"}.bx-right-arrow-alt:before{content:\"\\eb43\"}.bx-right-arrow-circle:before{content:\"\\eb44\"}.bx-right-down-arrow-circle:before{content:\"\\eb45\"}.bx-right-indent:before{content:\"\\eb46\"}.bx-right-top-arrow-circle:before{content:\"\\eb47\"}.bx-rocket:before{content:\"\\eb48\"}.bx-rotate-left:before{content:\"\\eb49\"}.bx-rotate-right:before{content:\"\\eb4a\"}.bx-rss:before{content:\"\\eb4b\"}.bx-ruble:before{content:\"\\eb4c\"}.bx-ruler:before{content:\"\\eb4d\"}.bx-run:before{content:\"\\eb4e\"}.bx-rupee:before{content:\"\\eb4f\"}.bx-sad:before{content:\"\\eb50\"}.bx-save:before{content:\"\\eb51\"}.bx-scan:before{content:\"\\eb52\"}.bx-screenshot:before{content:\"\\eb53\"}.bx-search:before{content:\"\\eb54\"}.bx-search-alt:before{content:\"\\eb55\"}.bx-search-alt-2:before{content:\"\\eb56\"}.bx-selection:before{content:\"\\eb57\"}.bx-select-multiple:before{content:\"\\eb58\"}.bx-send:before{content:\"\\eb59\"}.bx-server:before{content:\"\\eb5a\"}.bx-shape-circle:before{content:\"\\eb5b\"}.bx-shape-polygon:before{content:\"\\eb5c\"}.bx-shape-square:before{content:\"\\eb5d\"}.bx-shape-triangle:before{content:\"\\eb5e\"}.bx-share:before{content:\"\\eb5f\"}.bx-share-alt:before{content:\"\\eb60\"}.bx-shekel:before{content:\"\\eb61\"}.bx-shield:before{content:\"\\eb62\"}.bx-shield-alt:before{content:\"\\eb63\"}.bx-shield-alt-2:before{content:\"\\eb64\"}.bx-shield-quarter:before{content:\"\\eb65\"}.bx-shield-x:before{content:\"\\eb66\"}.bx-shocked:before{content:\"\\eb67\"}.bx-shopping-bag:before{content:\"\\eb68\"}.bx-show:before{content:\"\\eb69\"}.bx-show-alt:before{content:\"\\eb6a\"}.bx-shuffle:before{content:\"\\eb6b\"}.bx-sidebar:before{content:\"\\eb6c\"}.bx-sitemap:before{content:\"\\eb6d\"}.bx-skip-next:before{content:\"\\eb6e\"}.bx-skip-next-circle:before{content:\"\\eb6f\"}.bx-skip-previous:before{content:\"\\eb70\"}.bx-skip-previous-circle:before{content:\"\\eb71\"}.bx-sleepy:before{content:\"\\eb72\"}.bx-slider:before{content:\"\\eb73\"}.bx-slider-alt:before{content:\"\\eb74\"}.bx-slideshow:before{content:\"\\eb75\"}.bx-smile:before{content:\"\\eb76\"}.bx-sort:before{content:\"\\eb77\"}.bx-sort-alt-2:before{content:\"\\eb78\"}.bx-sort-a-z:before{content:\"\\eb79\"}.bx-sort-down:before{content:\"\\eb7a\"}.bx-sort-up:before{content:\"\\eb7b\"}.bx-sort-z-a:before{content:\"\\eb7c\"}.bx-spa:before{content:\"\\eb7d\"}.bx-space-bar:before{content:\"\\eb7e\"}.bx-spray-can:before{content:\"\\eb7f\"}.bx-spreadsheet:before{content:\"\\eb80\"}.bx-square:before{content:\"\\eb81\"}.bx-square-rounded:before{content:\"\\eb82\"}.bx-star:before{content:\"\\eb83\"}.bx-station:before{content:\"\\eb84\"}.bx-stats:before{content:\"\\eb85\"}.bx-sticker:before{content:\"\\eb86\"}.bx-stop:before{content:\"\\eb87\"}.bx-stop-circle:before{content:\"\\eb88\"}.bx-stopwatch:before{content:\"\\eb89\"}.bx-store:before{content:\"\\eb8a\"}.bx-store-alt:before{content:\"\\eb8b\"}.bx-street-view:before{content:\"\\eb8c\"}.bx-strikethrough:before{content:\"\\eb8d\"}.bx-subdirectory-left:before{content:\"\\eb8e\"}.bx-subdirectory-right:before{content:\"\\eb8f\"}.bx-sun:before{content:\"\\eb90\"}.bx-support:before{content:\"\\eb91\"}.bx-swim:before{content:\"\\eb92\"}.bx-sync:before{content:\"\\eb93\"}.bx-tab:before{content:\"\\eb94\"}.bx-table:before{content:\"\\eb95\"}.bx-tachometer:before{content:\"\\eb96\"}.bx-tag:before{content:\"\\eb97\"}.bx-tag-alt:before{content:\"\\eb98\"}.bx-target-lock:before{content:\"\\eb99\"}.bx-task:before{content:\"\\eb9a\"}.bx-task-x:before{content:\"\\eb9b\"}.bx-taxi:before{content:\"\\eb9c\"}.bx-tennis-ball:before{content:\"\\eb9d\"}.bx-terminal:before{content:\"\\eb9e\"}.bx-test-tube:before{content:\"\\eb9f\"}.bx-text:before{content:\"\\eba0\"}.bx-time:before{content:\"\\eba1\"}.bx-time-five:before{content:\"\\eba2\"}.bx-timer:before{content:\"\\eba3\"}.bx-tired:before{content:\"\\eba4\"}.bx-toggle-left:before{content:\"\\eba5\"}.bx-toggle-right:before{content:\"\\eba6\"}.bx-tone:before{content:\"\\eba7\"}.bx-traffic-cone:before{content:\"\\eba8\"}.bx-train:before{content:\"\\eba9\"}.bx-transfer:before{content:\"\\ebaa\"}.bx-transfer-alt:before{content:\"\\ebab\"}.bx-trash:before{content:\"\\ebac\"}.bx-trash-alt:before{content:\"\\ebad\"}.bx-trending-down:before{content:\"\\ebae\"}.bx-trending-up:before{content:\"\\ebaf\"}.bx-trim:before{content:\"\\ebb0\"}.bx-trip:before{content:\"\\ebb1\"}.bx-trophy:before{content:\"\\ebb2\"}.bx-tv:before{content:\"\\ebb3\"}.bx-underline:before{content:\"\\ebb4\"}.bx-undo:before{content:\"\\ebb5\"}.bx-unite:before{content:\"\\ebb6\"}.bx-unlink:before{content:\"\\ebb7\"}.bx-up-arrow:before{content:\"\\ebb8\"}.bx-up-arrow-alt:before{content:\"\\ebb9\"}.bx-up-arrow-circle:before{content:\"\\ebba\"}.bx-upload:before{content:\"\\ebbb\"}.bx-upside-down:before{content:\"\\ebbc\"}.bx-upvote:before{content:\"\\ebbd\"}.bx-usb:before{content:\"\\ebbe\"}.bx-user:before{content:\"\\ebbf\"}.bx-user-check:before{content:\"\\ebc0\"}.bx-user-circle:before{content:\"\\ebc1\"}.bx-user-minus:before{content:\"\\ebc2\"}.bx-user-pin:before{content:\"\\ebc3\"}.bx-user-plus:before{content:\"\\ebc4\"}.bx-user-voice:before{content:\"\\ebc5\"}.bx-user-x:before{content:\"\\ebc6\"}.bx-vector:before{content:\"\\ebc7\"}.bx-vertical-center:before{content:\"\\ebc8\"}.bx-vial:before{content:\"\\ebc9\"}.bx-video:before{content:\"\\ebca\"}.bx-video-off:before{content:\"\\ebcb\"}.bx-video-plus:before{content:\"\\ebcc\"}.bx-video-recording:before{content:\"\\ebcd\"}.bx-voicemail:before{content:\"\\ebce\"}.bx-volume:before{content:\"\\ebcf\"}.bx-volume-full:before{content:\"\\ebd0\"}.bx-volume-low:before{content:\"\\ebd1\"}.bx-volume-mute:before{content:\"\\ebd2\"}.bx-walk:before{content:\"\\ebd3\"}.bx-wallet:before{content:\"\\ebd4\"}.bx-wallet-alt:before{content:\"\\ebd5\"}.bx-water:before{content:\"\\ebd6\"}.bx-webcam:before{content:\"\\ebd7\"}.bx-wifi:before{content:\"\\ebd8\"}.bx-wifi-0:before{content:\"\\ebd9\"}.bx-wifi-1:before{content:\"\\ebda\"}.bx-wifi-2:before{content:\"\\ebdb\"}.bx-wifi-off:before{content:\"\\ebdc\"}.bx-wind:before{content:\"\\ebdd\"}.bx-window:before{content:\"\\ebde\"}.bx-window-alt:before{content:\"\\ebdf\"}.bx-window-close:before{content:\"\\ebe0\"}.bx-window-open:before{content:\"\\ebe1\"}.bx-windows:before{content:\"\\ebe2\"}.bx-wine:before{content:\"\\ebe3\"}.bx-wink-smile:before{content:\"\\ebe4\"}.bx-wink-tongue:before{content:\"\\ebe5\"}.bx-won:before{content:\"\\ebe6\"}.bx-world:before{content:\"\\ebe7\"}.bx-wrench:before{content:\"\\ebe8\"}.bx-x:before{content:\"\\ebe9\"}.bx-x-circle:before{content:\"\\ebea\"}.bx-yen:before{content:\"\\ebeb\"}.bx-zoom-in:before{content:\"\\ebec\"}.bx-zoom-out:before{content:\"\\ebed\"}.bxs-add-to-queue:before{content:\"\\ebee\"}.bxs-adjust:before{content:\"\\ebef\"}.bxs-adjust-alt:before{content:\"\\ebf0\"}.bxs-alarm:before{content:\"\\ebf1\"}.bxs-alarm-add:before{content:\"\\ebf2\"}.bxs-alarm-exclamation:before{content:\"\\ebf3\"}.bxs-alarm-off:before{content:\"\\ebf4\"}.bxs-alarm-snooze:before{content:\"\\ebf5\"}.bxs-album:before{content:\"\\ebf6\"}.bxs-ambulance:before{content:\"\\ebf7\"}.bxs-analyse:before{content:\"\\ebf8\"}.bxs-angry:before{content:\"\\ebf9\"}.bxs-arch:before{content:\"\\ebfa\"}.bxs-archive:before{content:\"\\ebfb\"}.bxs-archive-in:before{content:\"\\ebfc\"}.bxs-archive-out:before{content:\"\\ebfd\"}.bxs-area:before{content:\"\\ebfe\"}.bxs-arrow-from-bottom:before{content:\"\\ebff\"}.bxs-arrow-from-left:before{content:\"\\ec00\"}.bxs-arrow-from-right:before{content:\"\\ec01\"}.bxs-arrow-from-top:before{content:\"\\ec02\"}.bxs-arrow-to-bottom:before{content:\"\\ec03\"}.bxs-arrow-to-left:before{content:\"\\ec04\"}.bxs-arrow-to-right:before{content:\"\\ec05\"}.bxs-arrow-to-top:before{content:\"\\ec06\"}.bxs-award:before{content:\"\\ec07\"}.bxs-baby-carriage:before{content:\"\\ec08\"}.bxs-backpack:before{content:\"\\ec09\"}.bxs-badge:before{content:\"\\ec0a\"}.bxs-badge-check:before{content:\"\\ec0b\"}.bxs-badge-dollar:before{content:\"\\ec0c\"}.bxs-ball:before{content:\"\\ec0d\"}.bxs-band-aid:before{content:\"\\ec0e\"}.bxs-bank:before{content:\"\\ec0f\"}.bxs-bar-chart-alt-2:before{content:\"\\ec10\"}.bxs-bar-chart-square:before{content:\"\\ec11\"}.bxs-barcode:before{content:\"\\ec12\"}.bxs-baseball:before{content:\"\\ec13\"}.bxs-basket:before{content:\"\\ec14\"}.bxs-basketball:before{content:\"\\ec15\"}.bxs-bath:before{content:\"\\ec16\"}.bxs-battery:before{content:\"\\ec17\"}.bxs-battery-charging:before{content:\"\\ec18\"}.bxs-battery-full:before{content:\"\\ec19\"}.bxs-battery-low:before{content:\"\\ec1a\"}.bxs-bed:before{content:\"\\ec1b\"}.bxs-been-here:before{content:\"\\ec1c\"}.bxs-beer:before{content:\"\\ec1d\"}.bxs-bell:before{content:\"\\ec1e\"}.bxs-bell-minus:before{content:\"\\ec1f\"}.bxs-bell-off:before{content:\"\\ec20\"}.bxs-bell-plus:before{content:\"\\ec21\"}.bxs-bell-ring:before{content:\"\\ec22\"}.bxs-bible:before{content:\"\\ec23\"}.bxs-binoculars:before{content:\"\\ec24\"}.bxs-blanket:before{content:\"\\ec25\"}.bxs-bolt:before{content:\"\\ec26\"}.bxs-bolt-circle:before{content:\"\\ec27\"}.bxs-bomb:before{content:\"\\ec28\"}.bxs-bone:before{content:\"\\ec29\"}.bxs-bong:before{content:\"\\ec2a\"}.bxs-book:before{content:\"\\ec2b\"}.bxs-book-add:before{content:\"\\ec2c\"}.bxs-book-alt:before{content:\"\\ec2d\"}.bxs-book-bookmark:before{content:\"\\ec2e\"}.bxs-book-content:before{content:\"\\ec2f\"}.bxs-book-heart:before{content:\"\\ec30\"}.bxs-bookmark:before{content:\"\\ec31\"}.bxs-bookmark-alt:before{content:\"\\ec32\"}.bxs-bookmark-alt-minus:before{content:\"\\ec33\"}.bxs-bookmark-alt-plus:before{content:\"\\ec34\"}.bxs-bookmark-heart:before{content:\"\\ec35\"}.bxs-bookmark-minus:before{content:\"\\ec36\"}.bxs-bookmark-plus:before{content:\"\\ec37\"}.bxs-bookmarks:before{content:\"\\ec38\"}.bxs-bookmark-star:before{content:\"\\ec39\"}.bxs-book-open:before{content:\"\\ec3a\"}.bxs-book-reader:before{content:\"\\ec3b\"}.bxs-bot:before{content:\"\\ec3c\"}.bxs-bowling-ball:before{content:\"\\ec3d\"}.bxs-box:before{content:\"\\ec3e\"}.bxs-brain:before{content:\"\\ec3f\"}.bxs-briefcase:before{content:\"\\ec40\"}.bxs-briefcase-alt:before{content:\"\\ec41\"}.bxs-briefcase-alt-2:before{content:\"\\ec42\"}.bxs-brightness:before{content:\"\\ec43\"}.bxs-brightness-half:before{content:\"\\ec44\"}.bxs-brush:before{content:\"\\ec45\"}.bxs-brush-alt:before{content:\"\\ec46\"}.bxs-bug:before{content:\"\\ec47\"}.bxs-bug-alt:before{content:\"\\ec48\"}.bxs-building:before{content:\"\\ec49\"}.bxs-building-house:before{content:\"\\ec4a\"}.bxs-buildings:before{content:\"\\ec4b\"}.bxs-bulb:before{content:\"\\ec4c\"}.bxs-bullseye:before{content:\"\\ec4d\"}.bxs-buoy:before{content:\"\\ec4e\"}.bxs-bus:before{content:\"\\ec4f\"}.bxs-business:before{content:\"\\ec50\"}.bxs-bus-school:before{content:\"\\ec51\"}.bxs-cabinet:before{content:\"\\ec52\"}.bxs-cake:before{content:\"\\ec53\"}.bxs-calculator:before{content:\"\\ec54\"}.bxs-calendar:before{content:\"\\ec55\"}.bxs-calendar-alt:before{content:\"\\ec56\"}.bxs-calendar-check:before{content:\"\\ec57\"}.bxs-calendar-edit:before{content:\"\\ec58\"}.bxs-calendar-event:before{content:\"\\ec59\"}.bxs-calendar-exclamation:before{content:\"\\ec5a\"}.bxs-calendar-heart:before{content:\"\\ec5b\"}.bxs-calendar-minus:before{content:\"\\ec5c\"}.bxs-calendar-plus:before{content:\"\\ec5d\"}.bxs-calendar-star:before{content:\"\\ec5e\"}.bxs-calendar-week:before{content:\"\\ec5f\"}.bxs-calendar-x:before{content:\"\\ec60\"}.bxs-camera:before{content:\"\\ec61\"}.bxs-camera-home:before{content:\"\\ec62\"}.bxs-camera-movie:before{content:\"\\ec63\"}.bxs-camera-off:before{content:\"\\ec64\"}.bxs-camera-plus:before{content:\"\\ec65\"}.bxs-capsule:before{content:\"\\ec66\"}.bxs-captions:before{content:\"\\ec67\"}.bxs-car:before{content:\"\\ec68\"}.bxs-car-battery:before{content:\"\\ec69\"}.bxs-car-crash:before{content:\"\\ec6a\"}.bxs-card:before{content:\"\\ec6b\"}.bxs-caret-down-circle:before{content:\"\\ec6c\"}.bxs-caret-down-square:before{content:\"\\ec6d\"}.bxs-caret-left-circle:before{content:\"\\ec6e\"}.bxs-caret-left-square:before{content:\"\\ec6f\"}.bxs-caret-right-circle:before{content:\"\\ec70\"}.bxs-caret-right-square:before{content:\"\\ec71\"}.bxs-caret-up-circle:before{content:\"\\ec72\"}.bxs-caret-up-square:before{content:\"\\ec73\"}.bxs-car-garage:before{content:\"\\ec74\"}.bxs-car-mechanic:before{content:\"\\ec75\"}.bxs-carousel:before{content:\"\\ec76\"}.bxs-cart:before{content:\"\\ec77\"}.bxs-cart-add:before{content:\"\\ec78\"}.bxs-cart-alt:before{content:\"\\ec79\"}.bxs-cart-download:before{content:\"\\ec7a\"}.bxs-car-wash:before{content:\"\\ec7b\"}.bxs-category:before{content:\"\\ec7c\"}.bxs-category-alt:before{content:\"\\ec7d\"}.bxs-cctv:before{content:\"\\ec7e\"}.bxs-certification:before{content:\"\\ec7f\"}.bxs-chalkboard:before{content:\"\\ec80\"}.bxs-chart:before{content:\"\\ec81\"}.bxs-chat:before{content:\"\\ec82\"}.bxs-checkbox:before{content:\"\\ec83\"}.bxs-checkbox-checked:before{content:\"\\ec84\"}.bxs-check-circle:before{content:\"\\ec85\"}.bxs-check-shield:before{content:\"\\ec86\"}.bxs-check-square:before{content:\"\\ec87\"}.bxs-chess:before{content:\"\\ec88\"}.bxs-chevron-down:before{content:\"\\ec89\"}.bxs-chevron-down-circle:before{content:\"\\ec8a\"}.bxs-chevron-down-square:before{content:\"\\ec8b\"}.bxs-chevron-left:before{content:\"\\ec8c\"}.bxs-chevron-left-circle:before{content:\"\\ec8d\"}.bxs-chevron-left-square:before{content:\"\\ec8e\"}.bxs-chevron-right:before{content:\"\\ec8f\"}.bxs-chevron-right-circle:before{content:\"\\ec90\"}.bxs-chevron-right-square:before{content:\"\\ec91\"}.bxs-chevrons-down:before{content:\"\\ec92\"}.bxs-chevrons-left:before{content:\"\\ec93\"}.bxs-chevrons-right:before{content:\"\\ec94\"}.bxs-chevrons-up:before{content:\"\\ec95\"}.bxs-chevron-up:before{content:\"\\ec96\"}.bxs-chevron-up-circle:before{content:\"\\ec97\"}.bxs-chevron-up-square:before{content:\"\\ec98\"}.bxs-chip:before{content:\"\\ec99\"}.bxs-church:before{content:\"\\ec9a\"}.bxs-circle:before{content:\"\\ec9b\"}.bxs-city:before{content:\"\\ec9c\"}.bxs-clinic:before{content:\"\\ec9d\"}.bxs-cloud:before{content:\"\\ec9e\"}.bxs-cloud-download:before{content:\"\\ec9f\"}.bxs-cloud-lightning:before{content:\"\\eca0\"}.bxs-cloud-rain:before{content:\"\\eca1\"}.bxs-cloud-upload:before{content:\"\\eca2\"}.bxs-coffee:before{content:\"\\eca3\"}.bxs-coffee-alt:before{content:\"\\eca4\"}.bxs-coffee-togo:before{content:\"\\eca5\"}.bxs-cog:before{content:\"\\eca6\"}.bxs-coin:before{content:\"\\eca7\"}.bxs-coin-stack:before{content:\"\\eca8\"}.bxs-collection:before{content:\"\\eca9\"}.bxs-color-fill:before{content:\"\\ecaa\"}.bxs-comment:before{content:\"\\ecab\"}.bxs-comment-add:before{content:\"\\ecac\"}.bxs-comment-check:before{content:\"\\ecad\"}.bxs-comment-detail:before{content:\"\\ecae\"}.bxs-comment-dots:before{content:\"\\ecaf\"}.bxs-comment-edit:before{content:\"\\ecb0\"}.bxs-comment-error:before{content:\"\\ecb1\"}.bxs-comment-minus:before{content:\"\\ecb2\"}.bxs-comment-x:before{content:\"\\ecb3\"}.bxs-compass:before{content:\"\\ecb4\"}.bxs-component:before{content:\"\\ecb5\"}.bxs-confused:before{content:\"\\ecb6\"}.bxs-contact:before{content:\"\\ecb7\"}.bxs-conversation:before{content:\"\\ecb8\"}.bxs-cookie:before{content:\"\\ecb9\"}.bxs-cool:before{content:\"\\ecba\"}.bxs-copy:before{content:\"\\ecbb\"}.bxs-copy-alt:before{content:\"\\ecbc\"}.bxs-copyright:before{content:\"\\ecbd\"}.bxs-coupon:before{content:\"\\ecbe\"}.bxs-credit-card:before{content:\"\\ecbf\"}.bxs-credit-card-alt:before{content:\"\\ecc0\"}.bxs-credit-card-front:before{content:\"\\ecc1\"}.bxs-crop:before{content:\"\\ecc2\"}.bxs-crown:before{content:\"\\ecc3\"}.bxs-cube:before{content:\"\\ecc4\"}.bxs-cube-alt:before{content:\"\\ecc5\"}.bxs-cuboid:before{content:\"\\ecc6\"}.bxs-customize:before{content:\"\\ecc7\"}.bxs-cylinder:before{content:\"\\ecc8\"}.bxs-dashboard:before{content:\"\\ecc9\"}.bxs-data:before{content:\"\\ecca\"}.bxs-detail:before{content:\"\\eccb\"}.bxs-devices:before{content:\"\\eccc\"}.bxs-diamond:before{content:\"\\eccd\"}.bxs-dice-1:before{content:\"\\ecce\"}.bxs-dice-2:before{content:\"\\eccf\"}.bxs-dice-3:before{content:\"\\ecd0\"}.bxs-dice-4:before{content:\"\\ecd1\"}.bxs-dice-5:before{content:\"\\ecd2\"}.bxs-dice-6:before{content:\"\\ecd3\"}.bxs-direction-left:before{content:\"\\ecd4\"}.bxs-direction-right:before{content:\"\\ecd5\"}.bxs-directions:before{content:\"\\ecd6\"}.bxs-disc:before{content:\"\\ecd7\"}.bxs-discount:before{content:\"\\ecd8\"}.bxs-dish:before{content:\"\\ecd9\"}.bxs-dislike:before{content:\"\\ecda\"}.bxs-dizzy:before{content:\"\\ecdb\"}.bxs-dock-bottom:before{content:\"\\ecdc\"}.bxs-dock-left:before{content:\"\\ecdd\"}.bxs-dock-right:before{content:\"\\ecde\"}.bxs-dock-top:before{content:\"\\ecdf\"}.bxs-dollar-circle:before{content:\"\\ece0\"}.bxs-donate-blood:before{content:\"\\ece1\"}.bxs-donate-heart:before{content:\"\\ece2\"}.bxs-door-open:before{content:\"\\ece3\"}.bxs-doughnut-chart:before{content:\"\\ece4\"}.bxs-down-arrow:before{content:\"\\ece5\"}.bxs-down-arrow-alt:before{content:\"\\ece6\"}.bxs-down-arrow-circle:before{content:\"\\ece7\"}.bxs-down-arrow-square:before{content:\"\\ece8\"}.bxs-download:before{content:\"\\ece9\"}.bxs-downvote:before{content:\"\\ecea\"}.bxs-drink:before{content:\"\\eceb\"}.bxs-droplet:before{content:\"\\ecec\"}.bxs-droplet-half:before{content:\"\\eced\"}.bxs-dryer:before{content:\"\\ecee\"}.bxs-duplicate:before{content:\"\\ecef\"}.bxs-edit:before{content:\"\\ecf0\"}.bxs-edit-alt:before{content:\"\\ecf1\"}.bxs-edit-location:before{content:\"\\ecf2\"}.bxs-eject:before{content:\"\\ecf3\"}.bxs-envelope:before{content:\"\\ecf4\"}.bxs-envelope-open:before{content:\"\\ecf5\"}.bxs-eraser:before{content:\"\\ecf6\"}.bxs-error:before{content:\"\\ecf7\"}.bxs-error-alt:before{content:\"\\ecf8\"}.bxs-error-circle:before{content:\"\\ecf9\"}.bxs-ev-station:before{content:\"\\ecfa\"}.bxs-exit:before{content:\"\\ecfb\"}.bxs-extension:before{content:\"\\ecfc\"}.bxs-eyedropper:before{content:\"\\ecfd\"}.bxs-face:before{content:\"\\ecfe\"}.bxs-face-mask:before{content:\"\\ecff\"}.bxs-factory:before{content:\"\\ed00\"}.bxs-fast-forward-circle:before{content:\"\\ed01\"}.bxs-file:before{content:\"\\ed02\"}.bxs-file-archive:before{content:\"\\ed03\"}.bxs-file-blank:before{content:\"\\ed04\"}.bxs-file-css:before{content:\"\\ed05\"}.bxs-file-doc:before{content:\"\\ed06\"}.bxs-file-export:before{content:\"\\ed07\"}.bxs-file-find:before{content:\"\\ed08\"}.bxs-file-gif:before{content:\"\\ed09\"}.bxs-file-html:before{content:\"\\ed0a\"}.bxs-file-image:before{content:\"\\ed0b\"}.bxs-file-import:before{content:\"\\ed0c\"}.bxs-file-jpg:before{content:\"\\ed0d\"}.bxs-file-js:before{content:\"\\ed0e\"}.bxs-file-json:before{content:\"\\ed0f\"}.bxs-file-md:before{content:\"\\ed10\"}.bxs-file-pdf:before{content:\"\\ed11\"}.bxs-file-plus:before{content:\"\\ed12\"}.bxs-file-png:before{content:\"\\ed13\"}.bxs-file-txt:before{content:\"\\ed14\"}.bxs-film:before{content:\"\\ed15\"}.bxs-filter-alt:before{content:\"\\ed16\"}.bxs-first-aid:before{content:\"\\ed17\"}.bxs-flag:before{content:\"\\ed18\"}.bxs-flag-alt:before{content:\"\\ed19\"}.bxs-flag-checkered:before{content:\"\\ed1a\"}.bxs-flame:before{content:\"\\ed1b\"}.bxs-flask:before{content:\"\\ed1c\"}.bxs-florist:before{content:\"\\ed1d\"}.bxs-folder:before{content:\"\\ed1e\"}.bxs-folder-minus:before{content:\"\\ed1f\"}.bxs-folder-open:before{content:\"\\ed20\"}.bxs-folder-plus:before{content:\"\\ed21\"}.bxs-food-menu:before{content:\"\\ed22\"}.bxs-fridge:before{content:\"\\ed23\"}.bxs-game:before{content:\"\\ed24\"}.bxs-gas-pump:before{content:\"\\ed25\"}.bxs-ghost:before{content:\"\\ed26\"}.bxs-gift:before{content:\"\\ed27\"}.bxs-graduation:before{content:\"\\ed28\"}.bxs-grid:before{content:\"\\ed29\"}.bxs-grid-alt:before{content:\"\\ed2a\"}.bxs-group:before{content:\"\\ed2b\"}.bxs-guitar-amp:before{content:\"\\ed2c\"}.bxs-hand-down:before{content:\"\\ed2d\"}.bxs-hand-left:before{content:\"\\ed2e\"}.bxs-hand-right:before{content:\"\\ed2f\"}.bxs-hand-up:before{content:\"\\ed30\"}.bxs-happy:before{content:\"\\ed31\"}.bxs-happy-alt:before{content:\"\\ed32\"}.bxs-happy-beaming:before{content:\"\\ed33\"}.bxs-happy-heart-eyes:before{content:\"\\ed34\"}.bxs-hdd:before{content:\"\\ed35\"}.bxs-heart:before{content:\"\\ed36\"}.bxs-heart-circle:before{content:\"\\ed37\"}.bxs-heart-square:before{content:\"\\ed38\"}.bxs-help-circle:before{content:\"\\ed39\"}.bxs-hide:before{content:\"\\ed3a\"}.bxs-home:before{content:\"\\ed3b\"}.bxs-home-circle:before{content:\"\\ed3c\"}.bxs-home-heart:before{content:\"\\ed3d\"}.bxs-home-smile:before{content:\"\\ed3e\"}.bxs-hot:before{content:\"\\ed3f\"}.bxs-hotel:before{content:\"\\ed40\"}.bxs-hourglass:before{content:\"\\ed41\"}.bxs-hourglass-bottom:before{content:\"\\ed42\"}.bxs-hourglass-top:before{content:\"\\ed43\"}.bxs-id-card:before{content:\"\\ed44\"}.bxs-image:before{content:\"\\ed45\"}.bxs-image-add:before{content:\"\\ed46\"}.bxs-image-alt:before{content:\"\\ed47\"}.bxs-inbox:before{content:\"\\ed48\"}.bxs-info-circle:before{content:\"\\ed49\"}.bxs-info-square:before{content:\"\\ed4a\"}.bxs-institution:before{content:\"\\ed4b\"}.bxs-joystick:before{content:\"\\ed4c\"}.bxs-joystick-alt:before{content:\"\\ed4d\"}.bxs-joystick-button:before{content:\"\\ed4e\"}.bxs-key:before{content:\"\\ed4f\"}.bxs-keyboard:before{content:\"\\ed50\"}.bxs-label:before{content:\"\\ed51\"}.bxs-landmark:before{content:\"\\ed52\"}.bxs-landscape:before{content:\"\\ed53\"}.bxs-laugh:before{content:\"\\ed54\"}.bxs-layer:before{content:\"\\ed55\"}.bxs-layer-minus:before{content:\"\\ed56\"}.bxs-layer-plus:before{content:\"\\ed57\"}.bxs-layout:before{content:\"\\ed58\"}.bxs-left-arrow:before{content:\"\\ed59\"}.bxs-left-arrow-alt:before{content:\"\\ed5a\"}.bxs-left-arrow-circle:before{content:\"\\ed5b\"}.bxs-left-arrow-square:before{content:\"\\ed5c\"}.bxs-left-down-arrow-circle:before{content:\"\\ed5d\"}.bxs-left-top-arrow-circle:before{content:\"\\ed5e\"}.bxs-like:before{content:\"\\ed5f\"}.bxs-location-plus:before{content:\"\\ed60\"}.bxs-lock:before{content:\"\\ed61\"}.bxs-lock-alt:before{content:\"\\ed62\"}.bxs-lock-open:before{content:\"\\ed63\"}.bxs-lock-open-alt:before{content:\"\\ed64\"}.bxs-log-in:before{content:\"\\ed65\"}.bxs-log-in-circle:before{content:\"\\ed66\"}.bxs-log-out:before{content:\"\\ed67\"}.bxs-log-out-circle:before{content:\"\\ed68\"}.bxs-low-vision:before{content:\"\\ed69\"}.bxs-magic-wand:before{content:\"\\ed6a\"}.bxs-magnet:before{content:\"\\ed6b\"}.bxs-map:before{content:\"\\ed6c\"}.bxs-map-alt:before{content:\"\\ed6d\"}.bxs-map-pin:before{content:\"\\ed6e\"}.bxs-mask:before{content:\"\\ed6f\"}.bxs-medal:before{content:\"\\ed70\"}.bxs-megaphone:before{content:\"\\ed71\"}.bxs-meh:before{content:\"\\ed72\"}.bxs-meh-alt:before{content:\"\\ed73\"}.bxs-meh-blank:before{content:\"\\ed74\"}.bxs-memory-card:before{content:\"\\ed75\"}.bxs-message:before{content:\"\\ed76\"}.bxs-message-add:before{content:\"\\ed77\"}.bxs-message-alt:before{content:\"\\ed78\"}.bxs-message-alt-add:before{content:\"\\ed79\"}.bxs-message-alt-check:before{content:\"\\ed7a\"}.bxs-message-alt-detail:before{content:\"\\ed7b\"}.bxs-message-alt-dots:before{content:\"\\ed7c\"}.bxs-message-alt-edit:before{content:\"\\ed7d\"}.bxs-message-alt-error:before{content:\"\\ed7e\"}.bxs-message-alt-minus:before{content:\"\\ed7f\"}.bxs-message-alt-x:before{content:\"\\ed80\"}.bxs-message-check:before{content:\"\\ed81\"}.bxs-message-detail:before{content:\"\\ed82\"}.bxs-message-dots:before{content:\"\\ed83\"}.bxs-message-edit:before{content:\"\\ed84\"}.bxs-message-error:before{content:\"\\ed85\"}.bxs-message-minus:before{content:\"\\ed86\"}.bxs-message-rounded:before{content:\"\\ed87\"}.bxs-message-rounded-add:before{content:\"\\ed88\"}.bxs-message-rounded-check:before{content:\"\\ed89\"}.bxs-message-rounded-detail:before{content:\"\\ed8a\"}.bxs-message-rounded-dots:before{content:\"\\ed8b\"}.bxs-message-rounded-edit:before{content:\"\\ed8c\"}.bxs-message-rounded-error:before{content:\"\\ed8d\"}.bxs-message-rounded-minus:before{content:\"\\ed8e\"}.bxs-message-rounded-x:before{content:\"\\ed8f\"}.bxs-message-square:before{content:\"\\ed90\"}.bxs-message-square-add:before{content:\"\\ed91\"}.bxs-message-square-check:before{content:\"\\ed92\"}.bxs-message-square-detail:before{content:\"\\ed93\"}.bxs-message-square-dots:before{content:\"\\ed94\"}.bxs-message-square-edit:before{content:\"\\ed95\"}.bxs-message-square-error:before{content:\"\\ed96\"}.bxs-message-square-minus:before{content:\"\\ed97\"}.bxs-message-square-x:before{content:\"\\ed98\"}.bxs-message-x:before{content:\"\\ed99\"}.bxs-meteor:before{content:\"\\ed9a\"}.bxs-microchip:before{content:\"\\ed9b\"}.bxs-microphone:before{content:\"\\ed9c\"}.bxs-microphone-alt:before{content:\"\\ed9d\"}.bxs-microphone-off:before{content:\"\\ed9e\"}.bxs-minus-circle:before{content:\"\\ed9f\"}.bxs-minus-square:before{content:\"\\eda0\"}.bxs-mobile:before{content:\"\\eda1\"}.bxs-mobile-vibration:before{content:\"\\eda2\"}.bxs-moon:before{content:\"\\eda3\"}.bxs-mouse:before{content:\"\\eda4\"}.bxs-mouse-alt:before{content:\"\\eda5\"}.bxs-movie:before{content:\"\\eda6\"}.bxs-movie-play:before{content:\"\\eda7\"}.bxs-music:before{content:\"\\eda8\"}.bxs-navigation:before{content:\"\\eda9\"}.bxs-network-chart:before{content:\"\\edaa\"}.bxs-news:before{content:\"\\edab\"}.bxs-no-entry:before{content:\"\\edac\"}.bxs-note:before{content:\"\\edad\"}.bxs-notepad:before{content:\"\\edae\"}.bxs-notification:before{content:\"\\edaf\"}.bxs-notification-off:before{content:\"\\edb0\"}.bxs-offer:before{content:\"\\edb1\"}.bxs-package:before{content:\"\\edb2\"}.bxs-paint:before{content:\"\\edb3\"}.bxs-paint-roll:before{content:\"\\edb4\"}.bxs-palette:before{content:\"\\edb5\"}.bxs-paper-plane:before{content:\"\\edb6\"}.bxs-parking:before{content:\"\\edb7\"}.bxs-paste:before{content:\"\\edb8\"}.bxs-pen:before{content:\"\\edb9\"}.bxs-pencil:before{content:\"\\edba\"}.bxs-phone:before{content:\"\\edbb\"}.bxs-phone-call:before{content:\"\\edbc\"}.bxs-phone-incoming:before{content:\"\\edbd\"}.bxs-phone-outgoing:before{content:\"\\edbe\"}.bxs-photo-album:before{content:\"\\edbf\"}.bxs-piano:before{content:\"\\edc0\"}.bxs-pie-chart:before{content:\"\\edc1\"}.bxs-pie-chart-alt:before{content:\"\\edc2\"}.bxs-pie-chart-alt-2:before{content:\"\\edc3\"}.bxs-pin:before{content:\"\\edc4\"}.bxs-pizza:before{content:\"\\edc5\"}.bxs-plane:before{content:\"\\edc6\"}.bxs-plane-alt:before{content:\"\\edc7\"}.bxs-plane-land:before{content:\"\\edc8\"}.bxs-planet:before{content:\"\\edc9\"}.bxs-plane-take-off:before{content:\"\\edca\"}.bxs-playlist:before{content:\"\\edcb\"}.bxs-plug:before{content:\"\\edcc\"}.bxs-plus-circle:before{content:\"\\edcd\"}.bxs-plus-square:before{content:\"\\edce\"}.bxs-pointer:before{content:\"\\edcf\"}.bxs-polygon:before{content:\"\\edd0\"}.bxs-printer:before{content:\"\\edd1\"}.bxs-purchase-tag:before{content:\"\\edd2\"}.bxs-purchase-tag-alt:before{content:\"\\edd3\"}.bxs-pyramid:before{content:\"\\edd4\"}.bxs-quote-alt-left:before{content:\"\\edd5\"}.bxs-quote-alt-right:before{content:\"\\edd6\"}.bxs-quote-left:before{content:\"\\edd7\"}.bxs-quote-right:before{content:\"\\edd8\"}.bxs-quote-single-left:before{content:\"\\edd9\"}.bxs-quote-single-right:before{content:\"\\edda\"}.bxs-radiation:before{content:\"\\eddb\"}.bxs-radio:before{content:\"\\eddc\"}.bxs-receipt:before{content:\"\\eddd\"}.bxs-rectangle:before{content:\"\\edde\"}.bxs-rename:before{content:\"\\eddf\"}.bxs-report:before{content:\"\\ede0\"}.bxs-rewind-circle:before{content:\"\\ede1\"}.bxs-right-arrow:before{content:\"\\ede2\"}.bxs-right-arrow-alt:before{content:\"\\ede3\"}.bxs-right-arrow-circle:before{content:\"\\ede4\"}.bxs-right-arrow-square:before{content:\"\\ede5\"}.bxs-right-down-arrow-circle:before{content:\"\\ede6\"}.bxs-right-top-arrow-circle:before{content:\"\\ede7\"}.bxs-rocket:before{content:\"\\ede8\"}.bxs-ruler:before{content:\"\\ede9\"}.bxs-sad:before{content:\"\\edea\"}.bxs-save:before{content:\"\\edeb\"}.bxs-school:before{content:\"\\edec\"}.bxs-search:before{content:\"\\eded\"}.bxs-search-alt-2:before{content:\"\\edee\"}.bxs-select-multiple:before{content:\"\\edef\"}.bxs-send:before{content:\"\\edf0\"}.bxs-server:before{content:\"\\edf1\"}.bxs-shapes:before{content:\"\\edf2\"}.bxs-share:before{content:\"\\edf3\"}.bxs-share-alt:before{content:\"\\edf4\"}.bxs-shield:before{content:\"\\edf5\"}.bxs-shield-alt-2:before{content:\"\\edf6\"}.bxs-shield-x:before{content:\"\\edf7\"}.bxs-ship:before{content:\"\\edf8\"}.bxs-shocked:before{content:\"\\edf9\"}.bxs-shopping-bag:before{content:\"\\edfa\"}.bxs-shopping-bag-alt:before{content:\"\\edfb\"}.bxs-shopping-bags:before{content:\"\\edfc\"}.bxs-show:before{content:\"\\edfd\"}.bxs-skip-next-circle:before{content:\"\\edfe\"}.bxs-skip-previous-circle:before{content:\"\\edff\"}.bxs-skull:before{content:\"\\ee00\"}.bxs-sleepy:before{content:\"\\ee01\"}.bxs-slideshow:before{content:\"\\ee02\"}.bxs-smile:before{content:\"\\ee03\"}.bxs-sort-alt:before{content:\"\\ee04\"}.bxs-spa:before{content:\"\\ee05\"}.bxs-spray-can:before{content:\"\\ee06\"}.bxs-spreadsheet:before{content:\"\\ee07\"}.bxs-square:before{content:\"\\ee08\"}.bxs-square-rounded:before{content:\"\\ee09\"}.bxs-star:before{content:\"\\ee0a\"}.bxs-star-half:before{content:\"\\ee0b\"}.bxs-sticker:before{content:\"\\ee0c\"}.bxs-stopwatch:before{content:\"\\ee0d\"}.bxs-store:before{content:\"\\ee0e\"}.bxs-store-alt:before{content:\"\\ee0f\"}.bxs-sun:before{content:\"\\ee10\"}.bxs-tachometer:before{content:\"\\ee11\"}.bxs-tag:before{content:\"\\ee12\"}.bxs-tag-alt:before{content:\"\\ee13\"}.bxs-tag-x:before{content:\"\\ee14\"}.bxs-taxi:before{content:\"\\ee15\"}.bxs-tennis-ball:before{content:\"\\ee16\"}.bxs-terminal:before{content:\"\\ee17\"}.bxs-thermometer:before{content:\"\\ee18\"}.bxs-time:before{content:\"\\ee19\"}.bxs-time-five:before{content:\"\\ee1a\"}.bxs-timer:before{content:\"\\ee1b\"}.bxs-tired:before{content:\"\\ee1c\"}.bxs-toggle-left:before{content:\"\\ee1d\"}.bxs-toggle-right:before{content:\"\\ee1e\"}.bxs-tone:before{content:\"\\ee1f\"}.bxs-torch:before{content:\"\\ee20\"}.bxs-to-top:before{content:\"\\ee21\"}.bxs-traffic:before{content:\"\\ee22\"}.bxs-traffic-barrier:before{content:\"\\ee23\"}.bxs-traffic-cone:before{content:\"\\ee24\"}.bxs-train:before{content:\"\\ee25\"}.bxs-trash:before{content:\"\\ee26\"}.bxs-trash-alt:before{content:\"\\ee27\"}.bxs-tree:before{content:\"\\ee28\"}.bxs-trophy:before{content:\"\\ee29\"}.bxs-truck:before{content:\"\\ee2a\"}.bxs-t-shirt:before{content:\"\\ee2b\"}.bxs-tv:before{content:\"\\ee2c\"}.bxs-up-arrow:before{content:\"\\ee2d\"}.bxs-up-arrow-alt:before{content:\"\\ee2e\"}.bxs-up-arrow-circle:before{content:\"\\ee2f\"}.bxs-up-arrow-square:before{content:\"\\ee30\"}.bxs-upside-down:before{content:\"\\ee31\"}.bxs-upvote:before{content:\"\\ee32\"}.bxs-user:before{content:\"\\ee33\"}.bxs-user-account:before{content:\"\\ee34\"}.bxs-user-badge:before{content:\"\\ee35\"}.bxs-user-check:before{content:\"\\ee36\"}.bxs-user-circle:before{content:\"\\ee37\"}.bxs-user-detail:before{content:\"\\ee38\"}.bxs-user-minus:before{content:\"\\ee39\"}.bxs-user-pin:before{content:\"\\ee3a\"}.bxs-user-plus:before{content:\"\\ee3b\"}.bxs-user-rectangle:before{content:\"\\ee3c\"}.bxs-user-voice:before{content:\"\\ee3d\"}.bxs-user-x:before{content:\"\\ee3e\"}.bxs-vector:before{content:\"\\ee3f\"}.bxs-vial:before{content:\"\\ee40\"}.bxs-video:before{content:\"\\ee41\"}.bxs-video-off:before{content:\"\\ee42\"}.bxs-video-plus:before{content:\"\\ee43\"}.bxs-video-recording:before{content:\"\\ee44\"}.bxs-videos:before{content:\"\\ee45\"}.bxs-virus:before{content:\"\\ee46\"}.bxs-virus-block:before{content:\"\\ee47\"}.bxs-volume:before{content:\"\\ee48\"}.bxs-volume-full:before{content:\"\\ee49\"}.bxs-volume-low:before{content:\"\\ee4a\"}.bxs-volume-mute:before{content:\"\\ee4b\"}.bxs-wallet:before{content:\"\\ee4c\"}.bxs-wallet-alt:before{content:\"\\ee4d\"}.bxs-washer:before{content:\"\\ee4e\"}.bxs-watch:before{content:\"\\ee4f\"}.bxs-watch-alt:before{content:\"\\ee50\"}.bxs-webcam:before{content:\"\\ee51\"}.bxs-widget:before{content:\"\\ee52\"}.bxs-window-alt:before{content:\"\\ee53\"}.bxs-wine:before{content:\"\\ee54\"}.bxs-wink-smile:before{content:\"\\ee55\"}.bxs-wink-tongue:before{content:\"\\ee56\"}.bxs-wrench:before{content:\"\\ee57\"}.bxs-x-circle:before{content:\"\\ee58\"}.bxs-x-square:before{content:\"\\ee59\"}.bxs-yin-yang:before{content:\"\\ee5a\"}.bxs-zap:before{content:\"\\ee5b\"}.bxs-zoom-in:before{content:\"\\ee5c\"}.bxs-zoom-out:before{content:\"\\ee5d\"}.bxl-500px:before{content:\"\\ee5e\"}.bxl-adobe:before{content:\"\\ee5f\"}.bxl-airbnb:before{content:\"\\ee60\"}.bxl-algolia:before{content:\"\\ee61\"}.bxl-amazon:before{content:\"\\ee62\"}.bxl-android:before{content:\"\\ee63\"}.bxl-angular:before{content:\"\\ee64\"}.bxl-apple:before{content:\"\\ee65\"}.bxl-audible:before{content:\"\\ee66\"}.bxl-baidu:before{content:\"\\ee67\"}.bxl-behance:before{content:\"\\ee68\"}.bxl-bing:before{content:\"\\ee69\"}.bxl-bitcoin:before{content:\"\\ee6a\"}.bxl-blender:before{content:\"\\ee6b\"}.bxl-blogger:before{content:\"\\ee6c\"}.bxl-bootstrap:before{content:\"\\ee6d\"}.bxl-chrome:before{content:\"\\ee6e\"}.bxl-codepen:before{content:\"\\ee6f\"}.bxl-c-plus-plus:before{content:\"\\ee70\"}.bxl-creative-commons:before{content:\"\\ee71\"}.bxl-css3:before{content:\"\\ee72\"}.bxl-dailymotion:before{content:\"\\ee73\"}.bxl-deviantart:before{content:\"\\ee74\"}.bxl-dev-to:before{content:\"\\ee75\"}.bxl-digg:before{content:\"\\ee76\"}.bxl-digitalocean:before{content:\"\\ee77\"}.bxl-discord:before{content:\"\\ee78\"}.bxl-discourse:before{content:\"\\ee79\"}.bxl-django:before{content:\"\\ee7a\"}.bxl-dribbble:before{content:\"\\ee7b\"}.bxl-dropbox:before{content:\"\\ee7c\"}.bxl-drupal:before{content:\"\\ee7d\"}.bxl-ebay:before{content:\"\\ee7e\"}.bxl-edge:before{content:\"\\ee7f\"}.bxl-etsy:before{content:\"\\ee80\"}.bxl-facebook:before{content:\"\\ee81\"}.bxl-facebook-circle:before{content:\"\\ee82\"}.bxl-facebook-square:before{content:\"\\ee83\"}.bxl-figma:before{content:\"\\ee84\"}.bxl-firebase:before{content:\"\\ee85\"}.bxl-firefox:before{content:\"\\ee86\"}.bxl-flickr:before{content:\"\\ee87\"}.bxl-flickr-square:before{content:\"\\ee88\"}.bxl-foursquare:before{content:\"\\ee89\"}.bxl-git:before{content:\"\\ee8a\"}.bxl-github:before{content:\"\\ee8b\"}.bxl-gitlab:before{content:\"\\ee8c\"}.bxl-google:before{content:\"\\ee8d\"}.bxl-google-cloud:before{content:\"\\ee8e\"}.bxl-google-plus:before{content:\"\\ee8f\"}.bxl-google-plus-circle:before{content:\"\\ee90\"}.bxl-html5:before{content:\"\\ee91\"}.bxl-imdb:before{content:\"\\ee92\"}.bxl-instagram:before{content:\"\\ee93\"}.bxl-instagram-alt:before{content:\"\\ee94\"}.bxl-internet-explorer:before{content:\"\\ee95\"}.bxl-invision:before{content:\"\\ee96\"}.bxl-javascript:before{content:\"\\ee97\"}.bxl-joomla:before{content:\"\\ee98\"}.bxl-jquery:before{content:\"\\ee99\"}.bxl-jsfiddle:before{content:\"\\ee9a\"}.bxl-kickstarter:before{content:\"\\ee9b\"}.bxl-kubernetes:before{content:\"\\ee9c\"}.bxl-less:before{content:\"\\ee9d\"}.bxl-linkedin:before{content:\"\\ee9e\"}.bxl-linkedin-square:before{content:\"\\ee9f\"}.bxl-magento:before{content:\"\\eea0\"}.bxl-mailchimp:before{content:\"\\eea1\"}.bxl-markdown:before{content:\"\\eea2\"}.bxl-mastercard:before{content:\"\\eea3\"}.bxl-medium:before{content:\"\\eea4\"}.bxl-medium-old:before{content:\"\\eea5\"}.bxl-medium-square:before{content:\"\\eea6\"}.bxl-messenger:before{content:\"\\eea7\"}.bxl-microsoft:before{content:\"\\eea8\"}.bxl-microsoft-teams:before{content:\"\\eea9\"}.bxl-nodejs:before{content:\"\\eeaa\"}.bxl-ok-ru:before{content:\"\\eeab\"}.bxl-opera:before{content:\"\\eeac\"}.bxl-patreon:before{content:\"\\eead\"}.bxl-paypal:before{content:\"\\eeae\"}.bxl-periscope:before{content:\"\\eeaf\"}.bxl-pinterest:before{content:\"\\eeb0\"}.bxl-pinterest-alt:before{content:\"\\eeb1\"}.bxl-play-store:before{content:\"\\eeb2\"}.bxl-pocket:before{content:\"\\eeb3\"}.bxl-product-hunt:before{content:\"\\eeb4\"}.bxl-python:before{content:\"\\eeb5\"}.bxl-quora:before{content:\"\\eeb6\"}.bxl-react:before{content:\"\\eeb7\"}.bxl-redbubble:before{content:\"\\eeb8\"}.bxl-reddit:before{content:\"\\eeb9\"}.bxl-redux:before{content:\"\\eeba\"}.bxl-sass:before{content:\"\\eebb\"}.bxl-shopify:before{content:\"\\eebc\"}.bxl-skype:before{content:\"\\eebd\"}.bxl-slack:before{content:\"\\eebe\"}.bxl-slack-old:before{content:\"\\eebf\"}.bxl-snapchat:before{content:\"\\eec0\"}.bxl-soundcloud:before{content:\"\\eec1\"}.bxl-spotify:before{content:\"\\eec2\"}.bxl-spring-boot:before{content:\"\\eec3\"}.bxl-squarespace:before{content:\"\\eec4\"}.bxl-stack-overflow:before{content:\"\\eec5\"}.bxl-stripe:before{content:\"\\eec6\"}.bxl-telegram:before{content:\"\\eec7\"}.bxl-trello:before{content:\"\\eec8\"}.bxl-tumblr:before{content:\"\\eec9\"}.bxl-tux:before{content:\"\\eeca\"}.bxl-twitch:before{content:\"\\eecb\"}.bxl-twitter:before{content:\"\\eecc\"}.bxl-unsplash:before{content:\"\\eecd\"}.bxl-vimeo:before{content:\"\\eece\"}.bxl-visa:before{content:\"\\eecf\"}.bxl-vk:before{content:\"\\eed0\"}.bxl-vuejs:before{content:\"\\eed1\"}.bxl-whatsapp:before{content:\"\\eed2\"}.bxl-whatsapp-square:before{content:\"\\eed3\"}.bxl-wikipedia:before{content:\"\\eed4\"}.bxl-windows:before{content:\"\\eed5\"}.bxl-wix:before{content:\"\\eed6\"}.bxl-wordpress:before{content:\"\\eed7\"}.bxl-yahoo:before{content:\"\\eed8\"}.bxl-yelp:before{content:\"\\eed9\"}.bxl-youtube:before{content:\"\\eeda\"}.bxl-zoom:before{content:\"\\eedb\"}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/boxicons.342c527.eot";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/boxicons.b5e3cc0.woff2";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/boxicons.86708f2.woff";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/boxicons.8829e87.ttf";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/boxicons.dad92ba.svg";

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_3e8c7d58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_3e8c7d58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_3e8c7d58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_3e8c7d58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_3e8c7d58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_3e8c7d58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-device-width:640px),screen and (max-width:640px){.sidenav-toggler-inner[data-v-3e8c7d58]{margin-right:30px}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_3390e85c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_3390e85c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_3390e85c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_3390e85c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_3390e85c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_style_index_0_id_3390e85c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-leave-active[data-v-3390e85c],page-enter-active[data-v-3390e85c]{transition:all .3s ease-out}.page-enter[data-v-3390e85c],.page-leave-active[data-v-3390e85c]{opacity:0;transform-origin:50% 50%}.sidenav[data-v-3390e85c]{overflow-y:auto;overflow-x:hidden!important}.navbar-vertical.navbar-expand-xs[data-v-3390e85c]{max-width:58px}.footer[data-v-3390e85c]{padding-left:30px;width:90%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".bg-login{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 100% 0/cover}.hideovy{overflow-x:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{font-family:\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".bg-login{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 100% 0/cover}.hideovy{overflow-x:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  }

};

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  beritas: {
    data: [],
    total: 0,
    current_page: 1
  },
  brtLoader: false
});
const mutations = {
  setBeritas(state, data) {
    state.beritas = data;
  },

  setLoader(state) {
    state.brtLoader = !state.brtLoader;
  },

  setPage(state, data) {
    state.beritas.current_page = data;
  }

};
const getters = {
  getBeritas(state) {
    return state.beritas;
  },

  getLoader(state) {
    return state.brtLoader;
  },

  setPage(state, data) {
    state.beritas.current_page = data;
  }

};
const actions = {
  getAll(context, {
    showall = 1,
    search = '',
    defaultPage = false
  }) {
    context.commit("setLoader");
    let page = defaultPage ? 1 : context.state.beritas.current_page;
    this.$axios.get(`/beritas?showall=${showall}&page=${page}&search=${search}`).then(resp => {
      context.commit('setBeritas', resp.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      context.commit("setLoader");
    });
  }

};

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
const state = () => ({
  drawer: true,
  mode: 'web'
});
const mutations = {
  toggle(state) {
    state.drawer = !state.drawer;
  },

  changeMode(state, mode) {
    state.drawer = mode === 'web';
    state.mode = mode;
    console.log(state.mode);
  }

};
const getters = {
  getDrawerState(state) {
    return state.drawer;
  },

  getModeState(state) {
    return state.mode;
  }

};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  goverments: {
    data: [],
    total: 0,
    current_page: 1
  },
  govLoader: false,
  govermentPlains: []
});
const mutations = {
  setGoverments(state, data) {
    state.goverments = data;
  },

  setLoader(state) {
    state.govLoader = !state.govLoader;
  },

  setPage(state, data) {
    state.goverments.current_page = data;
  },

  setGovermentPlains(state, data) {
    state.govermentPlains = data;
  }

};
const getters = {
  getGoverments(state) {
    return state.goverments;
  },

  getLoader(state) {
    return state.govLoader;
  },

  getGovermentPlains(state) {
    return state.govermentPlains;
  }

};
const actions = {
  getAll(context, {
    showall = 1,
    search = '',
    defaultPage = false
  }) {
    context.commit("setLoader");
    let page = defaultPage ? 1 : context.state.goverments.current_page;
    this.$axios.get(`/goverments?showall=${showall}&page=${page}&search=${search}`).then(resp => {
      context.commit('setGoverments', resp.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      context.commit("setLoader");
    });
  },

  getPlains(context, {
    showall = 0,
    search = ''
  }) {
    this.$axios.get(`/goverments?showall=${showall}&plain=1&search=${search}`).then(resp => {
      context.commit('setGovermentPlains', resp.data.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {//
    });
  }

};

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  informations: {
    data: [],
    total: 0,
    current_page: 1
  },
  infLoader: false
});
const mutations = {
  setInformations(state, data) {
    state.informations = data;
  },

  setLoader(state) {
    state.infLoader = !state.infLoader;
  },

  setPage(state, data) {
    state.informations.current_page = data;
  }

};
const getters = {
  getInformations(state) {
    return state.informations;
  },

  getLoader(state) {
    return state.infLoader;
  },

  setPage(state, data) {
    state.informations.current_page = data;
  }

};
const actions = {
  getAll(context, {
    showall = 1,
    search = '',
    defaultPage = false
  }) {
    context.commit("setLoader");
    let page = defaultPage ? 1 : context.state.informations.current_page;
    this.$axios.get(`/informations?showall=${showall}&page=${page}&search=${search}`).then(resp => {
      context.commit('setInformations', resp.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      context.commit("setLoader");
    });
  }

};

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  kegiatans: {
    data: [],
    total: 0,
    current_page: 1
  },
  kegLoader: false
});
const mutations = {
  setKegiatans(state, data) {
    state.kegiatans = data;
  },

  setLoader(state) {
    state.kegLoader = !state.kegLoader;
  },

  setPage(state, data) {
    state.kegiatans.current_page = data;
  }

};
const getters = {
  getKegiatans(state) {
    return state.kegiatans;
  },

  getLoader(state) {
    return state.kegLoader;
  },

  setPage(state, data) {
    state.kegiatans.current_page = data;
  }

};
const actions = {
  getAll(context, {
    showall = 1,
    search = '',
    defaultPage = false
  }) {
    context.commit("setLoader");
    let page = defaultPage ? 1 : context.state.kegiatans.current_page;
    this.$axios.get(`/kegiatans?showall=${showall}&page=${page}&search=${search}`).then(resp => {
      context.commit('setKegiatans', resp.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      context.commit("setLoader");
    });
  }

};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  lapors: {
    data: [],
    total: 0,
    current_page: 1
  },
  laporLoader: false,
  laporan: null,
  evidence: []
});
const mutations = {
  setLapors(state, data) {
    state.lapors = data;
  },

  setLoader(state) {
    state.laporLoader = !state.laporLoader;
  },

  setPage(state, data) {
    state.lapors.current_page = data;
  },

  setLaporan(state, data) {
    state.laporan = data;
  },

  setEvidence(state, data) {
    state.evidence = data;
  }

};
const getters = {
  getLapors(state) {
    return state.lapors;
  },

  getLoader(state) {
    return state.laporLoader;
  },

  getLaporan(state) {
    return state.laporan;
  },

  getEvidence(state) {
    return state.evidence;
  }

};
const actions = {
  getAll(context, {
    showall = 1,
    search = '',
    defaultPage = false,
    start_date = '',
    end_date = '',
    goverment = ''
  }) {
    context.commit("setLoader");
    let page = defaultPage ? 1 : context.state.lapors.current_page;
    this.$axios.get(`/lapors?showall=${showall}&page=${page}&search=${search}&start_date=${start_date}&end_date=${end_date}&goverment=${goverment}`).then(resp => {
      context.commit('setLapors', resp.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      context.commit("setLoader");
    });
  },

  getEvidenceAll(context, {
    id = 1
  }) {
    context.commit("setLoader");
    this.$axios.get(`/lapor/${id}/evidences`).then(resp => {
      context.commit('setEvidence', resp.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      context.commit("setLoader");
    });
  }

};

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  chart: {
    segmentasi: [],
    time: {
      week: [],
      month: [],
      year: []
    },
    kategori: []
  }
});
const mutations = {
  setChart(state, data) {
    state.chart[data.type] = data.data;
  }

};
const getters = {
  getChart(state) {
    return state.chart;
  }

};
const actions = {
  getChartLaporanMasuk(context, {
    type,
    goverment = ''
  }) {
    this.$axios.get(`/laporan-masuk/${type}?goverment=${goverment}`).then(resp => {
      context.commit('setChart', {
        type: type,
        data: resp.data.data
      });
    }).catch(e => {
      console.log(e);
    }).finally(() => {//
    });
  }

};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  setting: {
    pelaksana_kegiatan: [],
    sumber_pembiayaan: [],
    segmen_kegiatan: [],
    kategori_kegiatan: []
  }
});
const mutations = {
  setSetting(state, data) {
    state.setting[data.type] = data.value;
  }

};
const getters = {
  getSetting(state) {
    return state.setting;
  }

};
const actions = {
  getAll(context) {
    let setting = context.state.setting;
    Object.keys(setting).forEach(key => {
      this.$axios.get(`/settings/${key}`).then(resp => {
        context.commit('setSetting', {
          type: key,
          value: resp.data.data
        });
      }).catch(e => {
        console.log(e);
      }).finally(() => {//
      });
    });
  }

};

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  users: {
    data: [],
    total: 0,
    current_page: 1
  },
  userLoader: false,
  summary: {
    aktif: 0,
    non_aktif: 0
  }
});
const mutations = {
  setUsers(state, data) {
    state.users = data;
  },

  setLoader(state) {
    state.userLoader = !state.userLoader;
  },

  setPage(state, data) {
    state.users.current_page = data;
  },

  setSummary(state, data) {
    state.summary = data;
  }

};
const getters = {
  getUsers(state) {
    return state.users;
  },

  getLoader(state) {
    return state.userLoader;
  },

  getSummary(state) {
    return state.summary;
  }

};
const actions = {
  getAll(context, {
    showall = 1,
    search = '',
    defaultPage = false
  }) {
    context.commit("setLoader");
    let page = defaultPage ? 1 : context.state.users.current_page;
    this.$axios.get(`/users?showall=${showall}&page=${page}&search=${search}`).then(resp => {
      context.commit('setUsers', resp.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {
      context.commit("setLoader");
    });
  },

  getUserSummary(context) {
    this.$axios.get(`/user-summary`).then(resp => {
      context.commit('setSummary', resp.data.data);
    }).catch(e => {
      console.log(e);
    }).finally(() => {// context.commit("setLoader")
    });
  }

};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(2).default("e8e18342", content, true)

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n  * Vuesax v4.0.1-alpha.24 🖖 (https://lusaxweb.github.io/vuesax/)\n  * Forged by Luis Daniel Rovira\n  * Released under the MIT License.\n  * Donate: https://www.patreon.com/bePatron?c=1567892\n  * © 2019, Lusaxweb. (https://lusaxweb.net)\n  */.vs-button{--vs-color:\"\";--vs-color-rotate:var(--vs-primary);--vs-color-darken:var(--vs-primary);--vs-button-padding:8px 12px;--vs-button-margin:5px;--vs-button-border-radius:12px;--vs-button-text-color:#fff;border:0;margin:var(--vs-button-margin);border-radius:var(--vs-button-border-radius);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0;outline:none;font-size:.8rem;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}.vs-button--fff:focus{color:#1e1e1e!important}.vs-button__content{padding:var(--vs-button-padding);width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--active-disabled{pointer-events:none;opacity:.6}.vs-button:disabled{pointer-events:none;opacity:.35}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content i{font-size:1.15rem}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__content{-webkit-transform:translate(-100%);transform:translate(-100%)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive):hover .vs-button__animate{-webkit-transform:translate(0);transform:translate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__content{-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-vertical:hover .vs-button__animate{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__content{-webkit-transform:scale(1.4)!important;transform:scale(1.4)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-scale:hover .vs-button__animate{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__content{-webkit-transform:rotate(180deg)!important;transform:rotate(180deg)!important;opacity:0}.vs-button.vs-button--animate:not(.vs-button--animate-inactive).vs-button--animate-rotate:hover .vs-button__animate{opacity:1;-webkit-transform:rotate(0);transform:rotate(0)}.vs-button.vs-button--animate:not(.vs-button--animate-inactive) .vs-button__content,.vs-button__animate{-webkit-transition:-webkit-transform .25s ease;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease,-webkit-transform .25s ease}.vs-button__animate{position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:0;left:0;-webkit-transform:translate(100%);transform:translate(100%);pointer-events:none}.vs-button__animate--vertical{-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-button__animate--scale{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.vs-button__animate--rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);opacity:0}.vs-button--block{width:100%;display:block}.vs-button--upload:after{content:\"\";position:absolute;width:100%;height:100%;background:rgba(17,18,20,.4);background:rgba(var(--vs-color),.4);top:0;left:0;z-index:1200;-webkit-animation:btnupload .7s ease infinite;animation:btnupload .7s ease infinite;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-button .vs-button__loading{width:100%;height:100%;position:absolute;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(17,18,20,.8);background:rgba(var(--vs-color),.8);border-radius:inherit}.vs-button .vs-button__loading:after{border:2px solid hsla(0,0%,100%,0);border-left:2px dotted hsla(0,0%,100%,.6);border-radius:50%;-webkit-animation:btnload .6s linear infinite;animation:btnload .6s linear infinite}.vs-button .vs-button__loading:after,.vs-button .vs-button__loading:before{content:\"\";width:17px;height:17px;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button .vs-button__loading:before{border:2px solid hsla(0,0%,100%,0);border-left-color:#fff;border-radius:50%;-webkit-animation:btnload .6s ease infinite;animation:btnload .6s ease infinite}.vs-button--size-xl{border-radius:20px}.vs-button--size-xl .vs-button__content{padding:15px 20px;font-size:1.1rem}.vs-button--size-large{font-size:1rem;border-radius:15px}.vs-button--size-large .vs-button__content{padding:10px 15px}.vs-button--size-small{font-size:.75rem;border-radius:9px}.vs-button--size-small .vs-button__content{padding:5px 10px}.vs-button--size-mini{font-size:.6rem;border-radius:7px}.vs-button--size-mini .vs-button__content{padding:3px 8px}.vs-button--circle{border-radius:25px}.vs-button--square{border-radius:0}.vs-button--icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button--icon .vs-button__content{padding:8px}.vs-button--icon i{font-size:1.15rem}.vs-button--default{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-button--default.vs-button--active,.vs-button--default:hover{-webkit-box-shadow:0 10px 20px -10px #111214;-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);box-shadow:0 10px 20px -10px #111214;box-shadow:0 10px 20px -10px rgba(var(--vs-color),1);-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--flat{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--flat.vs-button--dark{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-button--flat:hover{background:rgba(17,18,20,.25);background:rgba(var(--vs-color),.25)}.vs-button--flat:focus{-webkit-transition:all .25s ease,background .25s ease .25s;transition:all .25s ease,background .25s ease .25s}.vs-button--flat.vs-button--active,.vs-button--flat:focus{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--floating{background:#111214;background:rgba(var(--vs-color),1);color:#fff;-webkit-transform:translateY(-3px);transform:translateY(-3px)}.vs-button--floating,.vs-button--floating:hover{-webkit-box-shadow:0 8px 20px -6px #111214;-webkit-box-shadow:0 8px 20px -6px rgba(var(--vs-color),1);box-shadow:0 8px 20px -6px #111214;box-shadow:0 8px 20px -6px rgba(var(--vs-color),1)}.vs-button--floating:hover{-webkit-transform:translateY(-6px);transform:translateY(-6px)}.vs-button--floating.vs-button--active,.vs-button--floating:focus{-webkit-transform:translate(0);transform:translate(0);-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-button--border{background:rgba(17,18,20,0);background:rgba(var(--vs-color),0);color:#111214;color:rgba(var(--vs-color),1)}.vs-button--border:before{content:\"\";border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background:transparent;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--border:hover:before{border:2px solid rgba(17,18,20,.5);border:2px solid rgba(var(--vs-color),.5)}.vs-button--border.vs-button--active,.vs-button--border:focus,.vs-button--gradient{color:#fff;background:#111214;background:rgba(var(--vs-color),1)}.vs-button--gradient{overflow:hidden}.vs-button--gradient.vs-button--primary:before,.vs-button--gradient.vs-button--success:before{-webkit-filter:hue-rotate(40deg);filter:hue-rotate(40deg)}.vs-button--gradient:before{content:\"\";background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:hue-rotate(-40deg);filter:hue-rotate(-40deg);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--gradient:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(17,18,20,.7);-webkit-box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7);box-shadow:0 10px 20px -10px rgba(17,18,20,.7);box-shadow:0 10px 20px -10px rgba(var(--vs-color),.7)}.vs-button--gradient:hover:before{opacity:0}.vs-button--gradient.vs-button--active{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 10px 20px -10px rgba(0,0,0,.35);box-shadow:0 10px 20px -10px rgba(0,0,0,.35)}.vs-button--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}.vs-button--relief .vs-button__content{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-button--relief.vs-button--icon.vs-button--active{height:auto}.vs-button--relief:before{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:calc(100% - 3px);border-radius:inherit;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;-webkit-filter:contrast(2) grayscale(.4);filter:contrast(2) grayscale(.4);border-bottom:3px solid #111214;border-bottom:3px solid rgba(var(--vs-color),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--relief:active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief:active .vs-button__content{padding-bottom:6px}.vs-button--relief:active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--relief.vs-button--active{-webkit-transform:translateY(1px);transform:translateY(1px)}.vs-button--relief.vs-button--active .vs-button__content{padding-bottom:6px}.vs-button--relief.vs-button--active:before{border-bottom:0 solid #111214;border-bottom:0 solid rgba(var(--vs-color),1)}.vs-button--transparent{background:transparent;color:#111214;color:rgba(var(--vs-color),1);overflow:hidden}.vs-button--transparent:before{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);position:absolute;bottom:0;left:0;width:100%;height:100%;border-radius:inherit;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:-1;-webkit-transform:scale(.5);transform:scale(.5);opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box}.vs-button--transparent:active:not(.vs-button--active):before{-webkit-transform:scale(.9)!important;transform:scale(.9)!important}.vs-button--transparent.vs-button--active:before,.vs-button--transparent:hover:before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-button--shadow{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);overflow:hidden;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-button--shadow:active:not(.vs-button--active){-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;-webkit-box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 5px 15px 0 rgba(0,0,0,.05)!important;box-shadow:0 5px 15px 0 rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-button--shadow.vs-button--active,.vs-button--shadow:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 8px 25px 0 rgba(0,0,0,.05);box-shadow:0 8px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes btnload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}@keyframes btnupload{0%{-webkit-transform:translateY(110%);transform:translateY(110%)}to{-webkit-transform:translateY(-110%);transform:translateY(-110%)}}.vs-button-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-button-group .vs-button{margin:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type){border-radius:0;border:0}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border:before{border-left:0;width:100%}.vs-button-group .vs-button:not(:last-of-type):not(:first-of-type).vs-button--border+.vs-button--border:not(:last-of-type):before{border-right:0;width:100%}.vs-button-group .vs-button:last-of-type{border-radius:0 12px 12px 0}.vs-button-group .vs-button:first-of-type{border-radius:12px 0 0 12px}.vs-alert{--vs-color:var(--vs-primary);background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);color:#111214;color:rgba(var(--vs-color),1);width:100%;padding:0 20px;border-radius:0 12px 12px 0;position:relative;font-size:.9rem;z-index:10;-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::-moz-selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert ::selection{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-alert b{font-weight:600}.vs-alert a{color:inherit!important;text-decoration:underline}.vs-alert a:hover{opacity:.6}.vs-alert:after{content:\"\";left:0;top:0;width:2px;height:100%;position:absolute}.vs-alert--solid,.vs-alert:after{background:#111214;background:rgba(var(--vs-color),1)}.vs-alert--solid,.vs-alert--solid .vs-alert__icon i{color:#fff}.vs-alert--solid .vs-alert__icon svg{fill:#fff}.vs-alert--solid .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--solid .vs-alert__close svg{fill:#fff}.vs-alert--solid:after{background:hsla(0,0%,100%,.4)}.vs-alert--border{background:transparent}.vs-alert--border:before{border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-left:0;width:calc(100% - 2px);content:\"\";position:absolute;height:calc(100% - 2px);top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--shadow{background:transparent;-webkit-box-shadow:0 4px 15px 0 rgba(17,18,20,.12);-webkit-box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12);box-shadow:0 4px 15px 0 rgba(17,18,20,.12);box-shadow:0 4px 15px 0 rgba(var(--vs-color),.12)}.vs-alert--gradient{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px}.vs-alert--gradient .vs-alert__icon i{color:#fff}.vs-alert--gradient .vs-alert__icon svg{fill:#fff}.vs-alert--gradient .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--gradient .vs-alert__close svg{fill:#fff}.vs-alert--gradient:after{display:none}.vs-alert--gradient:before{background:linear-gradient(30deg,rgba(17,18,20,0) 33%,#111214);background:linear-gradient(30deg,rgba(var(--vs-color),0) 33%,rgba(var(--vs-color),1));-webkit-filter:hue-rotate(-50deg);filter:hue-rotate(-50deg);width:100%;content:\"\";position:absolute;height:100%;top:0;left:0;z-index:-1;border-radius:inherit}.vs-alert--flat{background:rgba(0,0,0,.03)}.vs-alert--relief{background:#111214;background:rgba(var(--vs-color),1);color:#fff;border-radius:12px;-webkit-box-shadow:6px 6px 0 0 rgba(17,18,20,.3);-webkit-box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3);box-shadow:6px 6px 0 0 rgba(17,18,20,.3);box-shadow:6px 6px 0 0 rgba(var(--vs-color),.3)}.vs-alert--relief .vs-alert__icon i{color:#fff}.vs-alert--relief .vs-alert__icon svg{fill:#fff}.vs-alert--relief .vs-alert__close{color:#fff;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.15);box-shadow:0 0 0 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);background:rgba(0,0,0,.2);-webkit-box-shadow:0 5px 18px 0 rgba(0,0,0,.15);box-shadow:0 5px 18px 0 rgba(0,0,0,.15)}.vs-alert--relief .vs-alert__close svg{fill:#fff}.vs-alert--relief:after{display:none}.vs-alert__title{font-weight:600;font-size:1rem;padding:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vs-alert__title--clickHidden{cursor:pointer;padding-right:0}.vs-alert__title~.vs-alert__content .vs-alert__content__text{padding-top:0}.vs-alert__content{-webkit-transition:height .25s ease;transition:height .25s ease;overflow:hidden}.vs-alert__content__text{padding:20px 15px}.vs-alert__close{position:absolute;top:9px;right:6px;background:transparent;border:0;color:#111214;color:rgba(var(--vs-color),1);width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.3);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.3);box-shadow:0 0 0 0 rgba(17,18,20,.3);box-shadow:0 0 0 0 rgba(var(--vs-color),.3);border-radius:10px;padding:0}.vs-alert__close:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 5px 18px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 18px 0 rgba(17,18,20,.3);box-shadow:0 5px 18px 0 rgba(var(--vs-color),.3)}.vs-alert__close svg{fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__footer{position:relative;width:100%;padding:0 15px 10px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-alert__footer,.vs-alert__icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-alert__icon{position:absolute;width:50px;height:100%;left:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:2px}.vs-alert__icon i{font-size:1.3rem;color:#111214;color:rgba(var(--vs-color),1)}.vs-alert__icon svg{width:24px;height:24px;fill:#111214;fill:rgba(var(--vs-color),1)}.vs-alert__icon~.vs-alert__footer{padding-left:35px}.vs-alert__icon~.vs-alert__content{padding-left:20px}.vs-alert__icon~.vs-alert__title{padding-left:35px}.vs-alert__progress{width:100%;position:absolute;bottom:0;left:0;height:2px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-alert__progress__bar{width:30%;left:0;position:relative;height:100%;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination{position:relative;padding:0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:10px}.vs-alert__pagination span{font-size:.8rem;margin:0 8px;min-width:28px;text-align:center}.vs-alert__pagination button{border:0;background:transparent;color:#111214;color:rgba(var(--vs-color),1);padding:0 7px;font-size:1rem;background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);border-radius:8px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-alert__pagination button:hover{background:#111214;background:rgba(var(--vs-color),1);color:#fff}.vs-icon-close{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-icon-close:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-icon-close:after,.vs-icon-close:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:16px;height:2px;border-radius:2px;-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-close:after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-icon-close.vs-icon-hover-less:hover:after,.vs-icon-close.vs-icon-hover-less:hover:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-plus{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer}.vs-icon-plus:before{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:all .3s ease;transition:all .3s ease}.vs-icon-plus:after,.vs-icon-plus:before{background:#111214;background:rgba(var(--vs-color),1);content:\"\";position:absolute;width:14px;height:2px;border-radius:2px}.vs-icon-plus:after{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .4s ease;transition:all .4s ease}.vs-icon-plus:hover:not(.less){-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vs-icon-plus.less:hover{-webkit-transform:scale(.75);transform:scale(.75)}.vs-icon-plus.less:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-icon-check{width:23px;height:23px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-icon-check span{-webkit-transform:rotate(45deg);transform:rotate(45deg);display:block;position:relative;width:8px;height:13px;margin-top:-4px}.vs-icon-check span .line1{background:transparent;content:\"\";position:absolute;height:2px;border-radius:2px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px;z-index:100;width:8px;bottom:0}.vs-icon-check span .line1:after{content:\"\";position:absolute;width:0;height:2px;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px 0 0 5px}.vs-icon-check span .line2{bottom:0;right:0;z-index:100;background:transparent;content:\"\";position:absolute;height:13px;border-radius:5px;-webkit-transition:all .2s ease;transition:all .2s ease;width:2px}.vs-icon-check span .line2:after{content:\"\";position:absolute;width:2px;height:0%;background:#fff;-webkit-transition:all .25s ease;transition:all .25s ease;bottom:0;border-radius:5px 5px 0 0}.vs-icon-check.active:before{width:8px}.vs-icon-check.active:after{width:4px}.vs-icon-check.indeterminate span{-webkit-transform:rotate(0);transform:rotate(0);height:auto;margin:0;width:auto}.vs-icon-check.indeterminate span:after{position:relative;content:\"\";width:10px;height:2px;background:#fff;display:block}.vs-icon-check.indeterminate span .line1{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);bottom:0;right:-1px;opacity:0;display:none}.vs-icon-check.indeterminate span .line2{right:0!important;bottom:-.14rem!important;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important;-webkit-transition:all .25s ease!important;transition:all .25s ease!important;height:11px!important;display:none}.vs-icon-arrow{pointer-events:none;width:7px;height:7px;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform-origin:center;transform-origin:center}.vs-icon-arrow:after{width:100%;height:1px}.vs-icon-arrow:after,.vs-icon-arrow:before{content:\"\";background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;display:block;top:0}.vs-icon-arrow:before{width:1px;height:100%}.vs-input-parent{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}.vs-input-parent.square .vs-input-content{border-radius:0!important}.vs-input-parent.textWhite .vs-input{color:#fff}.vs-input-parent.transparent .vs-input{background:transparent!important}.vs-input-parent.block,.vs-input-parent.block .vs-input{width:100%}.vs-input-parent--has-label{margin-top:20px!important}.vs-input-parent--state-success .vs-input{background:rgba(70,201,58,.1)!important;background:rgba(var(--vs-success),.1)!important}.vs-input-parent--state-success .vs-input,.vs-input-parent--state-success .vs-input__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input-parent--state-success .vs-input__icon{color:#46c93a;color:rgba(var(--vs-success),1);background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-input-parent--state-danger .vs-input{background:rgba(255,71,87,.1)!important;background:rgba(var(--vs-danger),.1)!important}.vs-input-parent--state-danger .vs-input,.vs-input-parent--state-danger .vs-input__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input-parent--state-danger .vs-input__icon{color:#ff4757;color:rgba(var(--vs-danger),1);background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-input-parent--state-warn .vs-input{background:rgba(255,186,0,.1)!important;background:rgba(var(--vs-warn),.1)!important}.vs-input-parent--state-warn .vs-input,.vs-input-parent--state-warn .vs-input__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input-parent--state-warn .vs-input__icon{color:#ffba00;color:rgba(var(--vs-warn),1);background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-input-parent--state-dark .vs-input{background:rgba(30,30,30,.1)!important;background:rgba(var(--vs-dark),.1)!important}.vs-input-parent--state-dark .vs-input,.vs-input-parent--state-dark .vs-input__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input-parent--state-dark .vs-input__icon{color:#1e1e1e;color:rgba(var(--vs-dark),1);background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-input-parent--state-primary .vs-input{background:rgba(25,91,255,.1)!important;background:rgba(var(--vs-primary),.1)!important}.vs-input-parent--state-primary .vs-input,.vs-input-parent--state-primary .vs-input__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input-parent--state-primary .vs-input__icon{color:#195bff;color:rgba(var(--vs-primary),1);background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-input-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;border-radius:12px}.vs-input-content+.vs-input__message{padding-top:2px}.vs-input-content--has-color .vs-input:focus{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1)}.vs-input-content--has-color .vs-input:focus~.vs-input__icon,.vs-input-content--has-color .vs-input:focus~.vs-input__label,.vs-input-content--has-color .vs-input:focus~.vs-input__label--placeholder{color:#111214;color:rgba(var(--vs-color),1)}.vs-input{border:2px solid transparent;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;padding:7px 13px 7px 10px;width:200px}.vs-input:focus{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);padding-left:15px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after){padding-left:40px}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__icon{-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input:focus.vs-input--has-icon:not(.vs-input--has-icon--after)~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){left:44px}.vs-input:focus~.vs-input__icon{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input:focus~.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input:focus~.vs-input__label:not(.vs-input__label--placeholder):not(.vs-input__label--label){opacity:0;left:20px}.vs-input:focus~.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-77%);transform:translate(-3%,-77%);font-size:.75rem}.vs-input__label{position:absolute;left:13px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4}.vs-input__label--hidden{opacity:0;visibility:hidden}.vs-input__label--hidden.vs-input__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3px,-80%);transform:translate(-3px,-80%);font-size:.75rem}.vs-input__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-2px,-77%);transform:translate(-2px,-77%);font-size:.75rem}.vs-input--has-icon{padding-left:38px}.vs-input--has-icon~.vs-input__label{left:44px}.vs-input--has-icon--after{padding-left:7px;padding-right:38px}.vs-input--has-icon--after~.vs-input__label{left:13px}.vs-input--has-icon--after.vs-input__label--label,.vs-input--has-icon:focus--has-icon--after~.vs-input__label--placeholder{-webkit-transform:translate(-25px,-80%)!important;transform:translate(-25px,-80%)!important}.vs-input--has-icon:focus--has-icon--after~.vs-input__label{left:44px}.vs-input__icon{position:absolute;right:auto;width:36px;height:36px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:12px 0 10px -10px rgba(0,0,0,.05);box-shadow:12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);pointer-events:none;left:0}.vs-input__icon--after{left:auto;right:0;-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-12px 0 10px -10px rgba(0,0,0,.05);box-shadow:-12px 0 10px -10px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-input__icon--click{pointer-events:auto!important;cursor:pointer}.vs-input__icon--click:hover{-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);-webkit-box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:-15px 10px 10px -10px rgba(0,0,0,.05);box-shadow:-15px 10px 10px -10px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-6px,-6px);transform:translate(-6px,-6px);background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-input__icon--click:hover.vs-input__icon--after{-webkit-transform:translate(6px,-6px);transform:translate(6px,-6px)}.vs-input__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-input__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-input__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-input__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-input__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-input__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-input__progress{width:95%;left:2.5%;position:relative;height:2px;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);margin-top:5px;overflow:hidden;border-radius:5px}.vs-input__progress--danger .vs-input__progress__bar{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-input__progress--warn .vs-input__progress__bar{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-input__progress--success .vs-input__progress__bar{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-input__progress__bar{width:32%;height:2px;max-width:100%;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:5px}.vs-input__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default}.vs-input__loading:after{border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-input__loading:after,.vs-input__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-input__loading:before{border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-input-parent--border .vs-input__icon{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-input-parent--border .vs-input-content{border-radius:0}.vs-input-parent--border .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;pointer-events:none}.vs-input-parent--border .vs-input-content .vs-input__affects__1{border-bottom:2px solid #f0f3f4;border-bottom:2px solid rgba(var(--vs-gray-3),1);width:100%;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-input-parent--border .vs-input-content .vs-input__affects__2{border-bottom:2px solid #111214;border-bottom:2px solid rgba(var(--vs-color),1);width:0;height:2px;position:absolute;bottom:0;-webkit-transition:all .25s ease;transition:all .25s ease;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-input-parent--border .vs-input-content .vs-input{background:transparent;border-radius:0}.vs-input-parent--border .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__2{width:100%}.vs-input-parent--shadow .vs-input__icon{background:transparent;z-index:100}.vs-input-parent--shadow .vs-input-content .vs-input__affects{width:100%;height:100%;position:absolute;top:0;left:0;border-radius:inherit;pointer-events:none;z-index:10}.vs-input-parent--shadow .vs-input-content .vs-input__affects__1{-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,.05);-webkit-box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 6px 25px -6px rgba(0,0,0,.05);box-shadow:0 6px 25px -6px rgba(0,0,0,var(--vs-shadow-opacity));width:100%;height:100%;position:absolute;top:0;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border-radius:inherit}.vs-input-parent--shadow .vs-input-content .vs-input{background:transparent;border-radius:0;border:2px solid transparent}.vs-input-parent--shadow .vs-input-content .vs-input:focus{-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__icon{background:#fff!important;background:rgba(var(--vs-background),1)!important;opacity:1;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 10px 20px -5px rgba(0,0,0,.05)!important;box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-input-parent--shadow .vs-input-content .vs-input:focus~.vs-input__affects .vs-input__affects__1{-webkit-transform:translateY(3px);transform:translateY(3px);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 3px 0 rgba(0,0,0,.05);box-shadow:0 0 3px 0 rgba(0,0,0,var(--vs-shadow-opacity))}@-webkit-keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateInputLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox-content{--vs-color:var(--vs-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-checkbox-con{width:23px;height:23px;border-radius:9px;position:relative;z-index:1}.vs-checkbox-mask{border-radius:32%;width:100%;height:100%;position:absolute;z-index:50;cursor:pointer;pointer-events:none;-webkit-box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:-1;box-sizing:border-box}.vs-checkbox-mask i:not(.vs-icon-check){color:#fff;font-size:1.1em}.vs-checkbox-mask:after,.vs-checkbox-mask i:not(.vs-icon-check){opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox-mask:after{background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit}.vs-checkbox-mask:after,.vs-checkbox-mask:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.vs-checkbox-mask:before{border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;border:2px solid #e6e9ea;border:2px solid rgba(var(--vs-gray-4),1);-webkit-box-sizing:border-box;box-sizing:border-box}.vs-checkbox-mask .vs-icon-check{opacity:0;z-index:200}.vs-checkbox{position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:0;opacity:0;z-index:100;cursor:pointer}.vs-checkbox:disabled{opacity:0;pointer-events:none}.vs-checkbox:active~.vs-checkbox-mask{background:#e6e9ea!important;background:rgba(var(--vs-gray-4),1)!important}.vs-checkbox:hover~.vs-checkbox-mask{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-checkbox:hover~.vs-checkbox-mask:before{border:2px solid rgba(230,233,234,0);border:2px solid rgba(var(--vs-gray-4),0)}.vs-checkbox:checked:hover~.vs-checkbox-mask{-webkit-box-shadow:0 3px 15px 0 rgba(17,18,20,.35);-webkit-box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35);box-shadow:0 3px 15px 0 rgba(17,18,20,.35);box-shadow:0 3px 15px 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask{-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.35);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.35);box-shadow:0 0 0 0 rgba(17,18,20,.35);box-shadow:0 0 0 0 rgba(var(--vs-color),.35)}.vs-checkbox:checked~.vs-checkbox-mask i:not(.vs-icon-check){opacity:1;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease .15s;transition:all .25s ease .15s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check{opacity:1}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line1:after{width:100%;-webkit-transition:all .25s ease .1s;transition:all .25s ease .1s}.vs-checkbox:checked~.vs-checkbox-mask .vs-icon-check span .line2:after{-webkit-transition:all .2s ease .3s;transition:all .2s ease .3s;height:100%}.vs-checkbox:checked~.vs-checkbox-mask:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.vs-checkbox:checked~.vs-checkbox-mask:before{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-checkbox-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:7px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem}.vs-checkbox-label,.vs-checkbox-label:before{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-checkbox-label:before{position:absolute;width:0;height:2px;background:rgba(44,62,80,.6);background:rgba(var(--vs-text),.6);content:\"\"}.vs-checkbox--disabled{pointer-events:none}.vs-checkbox--disabled .vs-checkbox-label{opacity:.5}.vs-checkbox--disabled .vs-checkbox-mask{opacity:.6;background:transparent!important}.vs-checkbox--checked .lineThrough{opacity:.4}.vs-checkbox--checked .lineThrough:before{width:calc(100% - 10px)}.vs-checkbox--loading{pointer-events:none}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:before{border-radius:50%;border:2px solid #111214!important;border:2px solid rgba(var(--vs-color),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite;opacity:1!important}.vs-checkbox--loading.vs-checkbox--checked .vs-checkbox-mask:after{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}.vs-checkbox--loading .vs-checkbox-mask{background:transparent!important}.vs-checkbox--loading .vs-checkbox-mask:before{border-radius:50%;border:2px solid #e6e9ea!important;border:2px solid rgba(var(--vs-gray-4),1)!important;border-top:2px solid transparent!important;-webkit-animation:rotateCheckboxLoading .6s linear infinite;animation:rotateCheckboxLoading .6s linear infinite}@-webkit-keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateCheckboxLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-checkbox--label-before .vs-checkbox-label{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.vs-switch{--vs-color:var(--vs-primary)}@-webkit-keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateSwitch{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-switch{color:#fff;padding:5px;border-radius:20px;min-width:48px;height:28px;border:0;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-switch--icon .vs-switch__input:checked~.vs-switch__circle{color:#fff!important}.vs-switch--icon .vs-switch__circle{background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}.vs-switch--icon .vs-switch__circle i{opacity:1;font-size:1.3rem}.vs-switch--indeterminate .vs-switch__input{pointer-events:none}.vs-switch--indeterminate .vs-switch__circle{left:50%!important;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-switch--square{border-radius:5px}.vs-switch--square .vs-switch__background,.vs-switch--square .vs-switch__circle{border-radius:5px!important}.vs-switch:after{border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s linear .25s infinite;animation:rotateSwitch .6s linear .25s infinite}.vs-switch:after,.vs-switch:before{-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;opacity:0;visibility:hidden;content:\"\";position:absolute;width:calc(100% - 8px);height:calc(100% - 8px);z-index:200;pointer-events:none}.vs-switch:before{border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:50%;border-top:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotateSwitch .6s ease .25s infinite;animation:rotateSwitch .6s ease .25s infinite}.vs-switch--loading{width:28px!important;min-width:28px!important;pointer-events:none;border-radius:20px!important}.vs-switch--loading .vs-switch__circle{border-radius:50%!important}.vs-switch--loading .vs-switch__background{opacity:0!important}.vs-switch--loading:after,.vs-switch--loading:before{opacity:1;visibility:visible;-webkit-transition:all .25s ease .3s;transition:all .25s ease .3s}.vs-switch:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-switch:active{-webkit-transform:scale(.9);transform:scale(.9)}.vs-switch__background{width:100%;height:auto;position:absolute;background:#111214;background:rgba(var(--vs-color),1);border-radius:inherit;z-index:2;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;-webkit-transform:scale(1);transform:scale(1);left:-100%;border-radius:50%;padding-bottom:100%}.vs-switch__text{font-size:.7rem;padding:5px 5px 5px 25px;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;color:#2c3e50;color:rgba(var(--vs-text),1);z-index:9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;overflow:hidden;white-space:nowrap}.vs-switch__text.on{-webkit-transform:translate(-100%);transform:translate(-100%);position:absolute;opacity:0}.vs-switch__text i{font-size:1rem;opacity:.7}.vs-switch__circle{width:20px;height:20px;background:#fff;background:rgba(var(--vs-background),1);border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;position:absolute;z-index:10;left:4px;color:#2c3e50;color:rgba(var(--vs-text),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-switch__circle i{font-size:.8rem}.vs-switch__input{position:absolute;width:100%;opacity:0!important;height:100%;border-radius:inherit;z-index:100;top:0;left:0;margin:0;cursor:pointer}.vs-switch__input:active:checked~.vs-switch__circle{left:calc(100% - 30px)}.vs-switch__input:active~.vs-switch__circle{width:25px}.vs-switch__input:checked~.vs-switch__background{opacity:1;-webkit-transform:scale(1);transform:scale(1);width:100%;padding-bottom:100%;left:0;border-radius:50%;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-switch__input:checked~.vs-switch__text{padding-left:5px;padding-right:25px;color:#fff}.vs-switch__input:checked~.vs-switch__text i{opacity:1}.vs-switch__input:checked~.vs-switch__text.on{-webkit-transform:translate(0);transform:translate(0);position:relative;opacity:1}.vs-switch__input:checked~.vs-switch__text.off{-webkit-transform:translate(100%);transform:translate(100%);position:absolute;opacity:0}.vs-switch__input:checked~.vs-switch__circle{left:calc(100% - 24px);-webkit-box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);-webkit-box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);box-shadow:-5px 0 25px 0 hsla(0,0%,100%,.6);box-shadow:-5px 0 25px 0 rgba(var(--vs-background),.6);color:#111214;color:rgba(var(--vs-color),1)}.vs-select{--vs-color:var(--vs-primary)}.vs-select__options .vs-checkbox-content{--vs-color:inherit}.vs-select-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-enter{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-enter,.vs-select-enter:after{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-enter:after{opacity:0!important}.vs-select-leave-active,.vs-select-leave-to{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select-leave-to{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-leave-to.top{-webkit-transform:translateY(10px)!important;transform:translateY(10px)!important}.vs-select-leave-to:after{opacity:0!important;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select-content{width:100%;max-width:200px}.vs-select-content.block.block{max-width:100%}.vs-select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:38px;width:100%}.vs-select--state-success .vs-select__input{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-success .vs-select__chips{background:rgba(70,201,58,.05);background:rgba(var(--vs-success),.05);color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__chips:hover:after{opacity:0}.vs-select--state-success .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(70,201,58,.5);border:2px solid rgba(var(--vs-success),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-success .vs-select__icon,.vs-select--state-success .vs-select__label{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select--state-success .vs-select__icon{background:rgba(70,201,58,.1);background:rgba(var(--vs-success),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1);box-shadow:-15px 10px 10px -10px rgba(70,201,58,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-success),.1)}.vs-select--state-success .vs-icon-arrow:after,.vs-select--state-success .vs-icon-arrow:before{background:#46c93a;background:rgba(var(--vs-success),1)}.vs-select--state-danger .vs-select__input{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-danger .vs-select__chips{background:rgba(255,71,87,.05);background:rgba(var(--vs-danger),.05);color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__chips:hover:after{opacity:0}.vs-select--state-danger .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,71,87,.5);border:2px solid rgba(var(--vs-danger),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-danger .vs-select__icon,.vs-select--state-danger .vs-select__label{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select--state-danger .vs-select__icon{background:rgba(255,71,87,.1);background:rgba(var(--vs-danger),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1);box-shadow:-15px 10px 10px -10px rgba(255,71,87,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-danger),.1)}.vs-select--state-danger .vs-icon-arrow:after,.vs-select--state-danger .vs-icon-arrow:before{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select--state-warn .vs-select__input{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-warn .vs-select__chips{background:rgba(255,186,0,.05);background:rgba(var(--vs-warn),.05);color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__chips:hover:after{opacity:0}.vs-select--state-warn .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(255,186,0,.5);border:2px solid rgba(var(--vs-warn),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-warn .vs-select__icon,.vs-select--state-warn .vs-select__label{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select--state-warn .vs-select__icon{background:rgba(255,186,0,.1);background:rgba(var(--vs-warn),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1);box-shadow:-15px 10px 10px -10px rgba(255,186,0,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-warn),.1)}.vs-select--state-warn .vs-icon-arrow:after,.vs-select--state-warn .vs-icon-arrow:before{background:#ffba00;background:rgba(var(--vs-warn),1)}.vs-select--state-dark .vs-select__input{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-dark .vs-select__chips{background:rgba(30,30,30,.05);background:rgba(var(--vs-dark),.05);color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__chips:hover:after{opacity:0}.vs-select--state-dark .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(30,30,30,.5);border:2px solid rgba(var(--vs-dark),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-dark .vs-select__icon,.vs-select--state-dark .vs-select__label{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select--state-dark .vs-select__icon{background:rgba(30,30,30,.1);background:rgba(var(--vs-dark),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1);box-shadow:-15px 10px 10px -10px rgba(30,30,30,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-dark),.1)}.vs-select--state-dark .vs-icon-arrow:after,.vs-select--state-dark .vs-icon-arrow:before{background:#1e1e1e;background:rgba(var(--vs-dark),1)}.vs-select--state-primary .vs-select__input{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__input:hover{color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select--state-primary .vs-select__chips{background:rgba(25,91,255,.05);background:rgba(var(--vs-primary),.05);color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__chips:hover:after{opacity:0}.vs-select--state-primary .vs-select__chips:after{width:calc(100% - 4px);height:calc(100% - 4px);content:\"\";position:absolute;top:0;left:0;border:2px solid rgba(25,91,255,.5);border:2px solid rgba(var(--vs-primary),.5);border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select--state-primary .vs-select__icon,.vs-select--state-primary .vs-select__label{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-select--state-primary .vs-select__icon{background:rgba(25,91,255,.1);background:rgba(var(--vs-primary),.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);-webkit-box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1);box-shadow:-15px 10px 10px -10px rgba(25,91,255,.1);box-shadow:-15px 10px 10px -10px rgba(var(--vs-primary),.1)}.vs-select--state-primary .vs-icon-arrow:after,.vs-select--state-primary .vs-icon-arrow:before{background:#195bff;background:rgba(var(--vs-primary),1)}.vs-select.loading{pointer-events:none}.vs-select.loading :not(.vs-select__loading):not(.vs-select__label){opacity:.6}.vs-select.loading .vs-select__label{pointer-events:none!important}.vs-select.top.activeOptions .vs-select__chips,.vs-select.top.activeOptions .vs-select__input{border-radius:0 0 12px 12px!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;-webkit-box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,.05)!important;box-shadow:0 -5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity))!important}.vs-select--disabled{opacity:.6;pointer-events:none}.vs-select--disabled label{pointer-events:none}.vs-select .vs-icon-arrow{z-index:600;position:absolute;right:15px;margin-top:-2px;-webkit-transition:all .25s ease;transition:all .25s ease;pointer-events:auto;cursor:pointer}.vs-select.activeOptions .vs-icon-arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-top:-2px!important}.vs-select.activeOptions .vs-select__input{border-radius:12px 12px 0 0;border:2px solid transparent;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select.activeOptions .vs-select__chips,.vs-select.activeOptions .vs-select__input{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s}.vs-select.activeOptions .vs-select__chips{border-radius:12px 12px 0 0}.vs-select.activeOptions .vs-select__chips:after{opacity:0}.vs-select.activeOptions .vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select.activeOptions .vs-select__label{margin-top:-4px}.vs-select__input{opacity:1;background:transparent;border:2px solid transparent;border-radius:12px;cursor:pointer;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);color:#2c3e50;color:rgba(var(--vs-text),1);min-height:38px;padding:7px 30px 7px 13px;width:100%}.vs-select__input.multiple{color:transparent;background:transparent;pointer-events:none}.vs-select__input.simple{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-select__input:focus{border-radius:12px 12px 0 0;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__input:focus~.vs-select__label--placeholder{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__input:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px)}.vs-select__input:hover~.vs-select__label{margin-top:-4px}.vs-select__input:hover~.vs-icon-arrow{margin-top:-6px}.vs-select__chips{width:100%;height:auto;position:absolute;left:0;background:#f4f7f8;background:rgba(var(--vs-gray-2),1);z-index:300;border-radius:12px;display:-webkit-box;display:-ms-flexbox;border:0;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:38px;-webkit-transition:all .25s ease,height 0s;transition:all .25s ease,height 0s;padding:5px 26px 5px 5px}.vs-select__chips:focus{border-radius:12px 12px 0 0}.vs-select__chips:focus,.vs-select__chips:hover{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px -4px rgba(0,0,0,.05);box-shadow:0 5px 25px -4px rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(-4px);transform:translateY(-4px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips:hover~.vs-icon-arrow{margin-top:-6px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__input{width:auto;-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:100%;position:relative;min-width:0;border:0 solid transparent;background:transparent;margin:2px 3px;min-width:30px}.vs-select__chips__input::-webkit-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-moz-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input:-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::-ms-input-placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__input::placeholder{color:rgba(44,62,80,.4);color:rgba(var(--vs-text),.4)}.vs-select__chips__chip{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;background:#fff;background:rgba(var(--vs-background),1);border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2px 3px;padding:0 10px 0 6px;font-size:.84rem;border:2px solid #f4f7f8;border:2px solid rgba(var(--vs-gray-2),1);-webkit-box-sizing:border-box;box-sizing:border-box;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-select__chips__chip.isCollapse{padding-right:6px!important}.vs-select__chips__chip__close{position:absolute;top:-4px;right:-4px;width:15px;height:15px;background:#e6e9ea;background:rgba(var(--vs-gray-4),1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;font-size:.75rem;cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__chips__chip__close:hover{background:#ff4757;background:rgba(var(--vs-danger),1)}.vs-select__chips__chip__close:hover .vs-icon-close{--vs-color:var(--vs-background)}.vs-select__chips__chip__close:hover .vs-icon-close:after,.vs-select__chips__chip__close:hover .vs-icon-close:before{width:12px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vs-select__chips__chip__close .vs-icon-close{--vs-color:var(--vs-text);-webkit-transform:scale(.5);transform:scale(.5)}.vs-select__options{--vs-color:var(--vs-primary);position:absolute;z-index:99999;background:#fff;background:rgba(var(--vs-background),1);padding:5px;border-radius:0 0 12px 12px;overflow:hidden;-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 20px -5px rgba(0,0,0,.05);box-shadow:0 10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top{border-radius:12px 12px 0 0;-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 -10px 20px -5px rgba(0,0,0,.05);box-shadow:0 -10px 20px -5px rgba(0,0,0,var(--vs-shadow-opacity))}.vs-select__options.top:after{top:auto;bottom:-10px}.vs-select__options:after{content:\"\";position:absolute;top:-10px;width:80%;margin-left:10%;left:0;height:10px;background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 20px 0 rgba(0,0,0,.05);box-shadow:0 0 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));z-index:200;-webkit-transition:all .25s ease .05s;transition:all .25s ease .05s;opacity:1}.vs-select__options__content{max-height:200px;overflow:auto;height:auto;z-index:100;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:all .25s ease;transition:all .25s ease;position:relative;scroll-behavior:smooth}.vs-select__options__content__not-data{font-size:.8rem;text-align:center;padding:6px 10px}.vs-select__options__content::-webkit-scrollbar{width:5px;height:5px;display:block;background:transparent}.vs-select__options__content::-webkit-scrollbar-thumb{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);border-radius:5px}.vs-select__label{position:absolute;left:14px;font-size:.8rem;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;opacity:.4;z-index:500}.vs-select__label--hidden{opacity:0;visibility:hidden}.vs-select__label--hidden.vs-select__label--placeholder,.vs-select__label--label{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:translate(-3%,-28px)!important;transform:translate(-3%,-28px)!important;font-size:.75rem;margin-top:0!important}.vs-select__loading{position:absolute;width:22px;height:22px;right:7px;pointer-events:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background:inherit;cursor:default;z-index:600}.vs-select__loading:after{border:2px solid #195bff;border:2px solid rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-select__loading:after,.vs-select__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-select__loading:before{border:2px dashed #195bff;border:2px dashed rgba(var(--vs-primary),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-select__loading~.vs-icon-arrow{opacity:0!important}.vs-select__message{font-size:.7rem;position:relative;padding:0 7px;-webkit-transition:all .25s ease;transition:all .25s ease;overflow:hidden}.vs-select__message--success{color:#46c93a;color:rgba(var(--vs-success),1)}.vs-select__message--danger{color:#ff4757;color:rgba(var(--vs-danger),1)}.vs-select__message--warn{color:#ffba00;color:rgba(var(--vs-warn),1)}.vs-select__message--dark{color:#1e1e1e;color:rgba(var(--vs-dark),1)}.vs-select__message--primary{color:#195bff;color:rgba(var(--vs-primary),1)}.vs-darken .vs-select__options.isColorDark{--vs-color:0,0,0!important}.vs-darken .vs-select__options.isColorDark .vs-select__option:hover{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2);color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-darken .vs-select__options.isColorDark .activeOption{color:#2c3e50;color:rgba(var(--vs-text),1);background:rgba(17,18,20,.6);background:rgba(var(--vs-color),.6)}.vs-select__option{border:0;width:100%;padding:6px 10px;text-align:left;background:transparent;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:5px;-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));margin:2px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;opacity:1;visibility:visible;max-height:40px}.vs-select__option.hiddenOption{opacity:0;visibility:hidden;max-height:0;padding-top:0;padding-bottom:0;border:0;margin:0}.vs-select__option.isMultiple{padding:0 0 0 5px}.vs-select__option.isMultiple .vs-select__option-group{padding-left:0}.vs-select__option.isMultiple.isHover{background:#f4f7f8!important;background:rgba(var(--vs-gray-2),1)!important}.vs-select__option.isMultiple:disabled .vs-checkbox-content{pointer-events:none}.vs-select__option.isMultiple:hover{padding-left:5px!important}.vs-select__option.isMultiple .vs-checkbox-content{width:100%;pointer-events:none}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-con{-webkit-transform:scale(.85);transform:scale(.85)}.vs-select__option.isMultiple .vs-checkbox-content .vs-checkbox-label{width:calc(100% - 23px);text-align:left;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-select__option.isMultiple.activeOption{pointer-events:auto!important}.vs-select__option.isHover{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-select__option.activeOption{background:rgba(17,18,20,.05);background:rgba(var(--vs-color),.05);color:#111214;color:rgba(var(--vs-color),1);pointer-events:none}.vs-select__option:hover:not(:disabled){color:#111214;color:rgba(var(--vs-color),1);padding-left:14px}.vs-select__option-group{padding-left:10px;border-bottom:2px solid #f9fcfd;border-bottom:2px solid rgba(var(--vs-gray-1),1);position:relative;overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-select__option-group:last-child{border:0}.vs-select__option-group.hiddenOptionGroup{border-bottom:0 solid #f9fcfd;border-bottom:0 solid rgba(var(--vs-gray-1),1)}.vs-select__option-group.hiddenOptionGroup h5{padding:0;max-height:0}.vs-select__option-group h5{max-height:28px;-webkit-transition:all .25s ease;transition:all .25s ease;opacity:.5;margin:0;padding:7px 0;font-size:.7rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.vs-select__option-group h5 *{pointer-events:none}.vs-avatar-content{--vs-color:var(--vs-gray-2);--vs-badge:var(--vs-primary);border-radius:35%;z-index:1;width:44px;height:44px;position:relative;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar-content.vs-change-color-badge .vs-avatar__badge .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar-content.vs-change-color:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.1)}.vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04);box-shadow:inset 0 0 40px 0 rgba(0,0,0,.04)}.vs-avatar-content:hover img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-avatar-content--size.history:after{top:-2px!important}.vs-avatar-content--hasIcons{margin-right:20px}.vs-avatar-content--hidden{display:none}.vs-avatar-content--circle{border-radius:50%!important}.vs-avatar-content--circle .vs-avatar__badge{right:-2px;bottom:-2px}.vs-avatar-content--circle .vs-avatar__badge.top-right{top:-2px;bottom:auto}.vs-avatar-content--circle .vs-avatar__badge.top-left{top:-2px;left:-2px;bottom:auto;right:auto}.vs-avatar-content--circle .vs-avatar__badge.bottom-left{left:-2px;right:auto}.vs-avatar-content--square{border-radius:0!important}.vs-avatar-content.history--gradient:after{background-image:linear-gradient(40deg,#f99b4a,#df376b 74%,#c52d91 0)!important}.vs-avatar-content.history .vs-avatar{width:calc(100% - 4px);height:calc(100% - 4px);border:2px solid #fff;border:2px solid rgba(var(--vs-background),1);margin:2px}.vs-avatar-content.history:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;background-color:#ffe53b;z-index:-1;background:#111214;background:rgba(var(--vs-color),1)}.vs-avatar-content.vs-component--is-color .vs-avatar{color:#fff;color:rgba(var(--vs-background),1)}.vs-avatar-content.vs-component--is-color .vs-avatar__points .vs-avatar__points__point{background:#fff;background:rgba(var(--vs-background),1)}.vs-avatar{background:#111214;background:rgba(var(--vs-color),1);color:#fff;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#2c3e50;color:rgba(var(--vs-text),1);border-radius:inherit;width:100%;height:100%;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.05);box-shadow:inset 0 0 0 0 rgba(0,0,0,.05)}.vs-avatar i{font-size:1.4rem}.vs-avatar img{width:100%;height:auto;display:block;-webkit-transition:all .25s ease;transition:all .25s ease;border-radius:inherit}.vs-avatar__loading{position:absolute;width:100%;top:0;left:0;background:rgba(0,0,0,.5);z-index:100;height:100%;border-radius:inherit}.vs-avatar__loading,.vs-avatar__loading__animate{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__loading__animate{height:60%;width:60%;border-radius:50%;position:relative}.vs-avatar__loading__animate:after{border-radius:inherit;border:2px solid transparent;border-bottom-color:#fff;-webkit-animation:rotateInputLoading .8s ease infinite;animation:rotateInputLoading .8s ease infinite}.vs-avatar__loading__animate:after,.vs-avatar__loading__animate:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-avatar__loading__animate:before{border-radius:inherit;border:2px solid transparent;border-bottom:2px dashed #fff;-webkit-animation:rotateInputLoading .8s linear infinite;animation:rotateInputLoading .8s linear infinite;opacity:.2}.vs-avatar--letter--3{font-size:.9rem}.vs-avatar--letter--4{font-size:.8rem}.vs-avatar--letter--5{font-size:.7rem}.vs-avatar--letter--6{font-size:.6rem}.vs-avatar__badge{position:absolute;width:13px;height:13px;background:rgba(var(--vs-badge),1);border-radius:50%;border:2px solid #fff!important;border:2px solid rgba(var(--vs-background),1)!important;right:-4px;bottom:-4px;font-size:.6rem;font-weight:700;z-index:200;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-avatar__badge.isSlot,.vs-avatar__badge.writing{width:auto;height:auto;border-radius:7px;min-width:18px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;color:rgba(var(--vs-background),1);line-height:.9rem;padding:0 3px;min-height:18px}.vs-avatar__badge.top-right{top:-4px;bottom:auto}.vs-avatar__badge.top-left{top:-4px;left:-4px;bottom:auto;right:auto}.vs-avatar__badge.bottom-left{left:-4px;right:auto}.vs-avatar__points{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__points__point{width:5px;height:5px;background:#2c3e50;background:rgba(var(--vs-text),1);margin:0 2px;border-radius:50%}.vs-avatar__points__point:first-child{-webkit-animation:point 1.2s ease infinite;animation:point 1.2s ease infinite}.vs-avatar__points__point:nth-child(2){-webkit-animation:point 1.2s ease .4s infinite;animation:point 1.2s ease .4s infinite}.vs-avatar__points__point:nth-child(3){-webkit-animation:point 1.2s ease .8s infinite;animation:point 1.2s ease .8s infinite}.vs-avatar__latest{background:rgba(0,0,0,.5);top:0;left:0;width:100%;height:100%;z-index:300;border-radius:inherit;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-avatar__icons,.vs-avatar__latest{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-avatar__icons{width:auto;height:auto;min-height:90%;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:-20px;padding:3px 3px 3px 5px;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:-1;border-radius:5px 5px 5px 5px;font-size:1rem}.vs-avatar__icons i{cursor:pointer;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-avatar__icons i:hover{opacity:.7}@-webkit-keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}@keyframes point{0%{opacity:1}50%{opacity:.4;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1}}.vs-avatar__group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:18px}.vs-avatar__group.float{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding-left:0}.vs-avatar__group.float .vs-avatar-content{position:relative;z-index:2;border:3px solid vs-color(\"background\");margin:0}.vs-avatar__group:not(.float) .vs-avatar-content{margin-left:-18px;position:relative;z-index:2}.vs-avatar__group:not(.float) .vs-avatar-content:hover .vs-avatar{-webkit-box-shadow:inset 0 0 0 0 rgba(0,0,0,.1);box-shadow:inset 0 0 0 0 rgba(0,0,0,.1)}.vs-avatar__group:not(.float) .vs-avatar-content:hover img{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content .vs-avatar__latest{width:calc(100% - 6px);height:calc(100% - 6px);margin:3px}.vs-avatar__group:not(.float) .vs-avatar-content:not(.vs-change-color) .vs-avatar{background:vs-color(\"background\")}.vs-avatar__group:not(.float) .vs-avatar-content img{width:calc(100% - 6px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons){-webkit-transform:translate(-10px);transform:translate(-10px)}.vs-avatar__group:not(.float) .vs-avatar-content:hover:not(.vs-avatar-content--hasIcons) .vs-avatar{-webkit-transform:scale(1);transform:scale(1)}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons{margin-right:0}.vs-avatar__group:not(.float) .vs-avatar-content--hasIcons:hover{-webkit-transform:translate(-34px)!important;transform:translate(-34px)!important}.vs-radio-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-radio-content.active .vs-radio__effect__icon{opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:scale(1.3);transform:scale(1.3)}.vs-radio-content.active .vs-radio__effect:after{border:7px solid #111214;border:7px solid rgba(var(--vs-color),1);-webkit-box-shadow:0 3px 12px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3);box-shadow:0 3px 12px 0 rgba(17,18,20,.3);box-shadow:0 3px 12px 0 rgba(var(--vs-color),.3)}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect .vs-radio__effect__icon{opacity:.7}.vs-radio-content:not(.active) .vs-radio input:hover~.vs-radio__effect:after{border:2px solid rgba(44,62,80,.2);border:2px solid rgba(var(--vs-text),.2)}.vs-radio-content.loading{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-radio-content.loading .vs-radio__effect:after{opacity:.1}.vs-radio-content.loading .vs-radio__effect__loading{position:absolute;width:100%;height:100%;border-radius:inherit}.vs-radio-content.loading .vs-radio__effect__loading:after{border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right-color:rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right-color:rgba(var(--vs-text),.4);-webkit-animation:loadingRadio .6s ease infinite;animation:loadingRadio .6s ease infinite}.vs-radio-content.loading .vs-radio__effect__loading:after,.vs-radio-content.loading .vs-radio__effect__loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio-content.loading .vs-radio__effect__loading:before{border-radius:inherit;border:2px solid rgba(44,62,80,0);border-right:2px dashed rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),0);border-right:2px dashed rgba(var(--vs-text),.4);-webkit-animation:loadingRadio .6s linear infinite;animation:loadingRadio .6s linear infinite}.vs-radio-content label{cursor:pointer}.vs-radio-content.disabled{opacity:.5;pointer-events:none}.vs-radio-content.disabled .vs-radio__effect{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-radio-content.disabled label{pointer-events:none}.vs-radio{width:20px;height:20px;min-width:20px;min-height:20px;margin:0;padding:0;border-radius:50%;position:relative;z-index:10}.vs-radio__label{margin:0 6px}.vs-radio__effect{position:absolute;width:100%;height:100%;border-radius:inherit;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:10}.vs-radio__effect,.vs-radio__effect__icon{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-radio__effect__icon i{font-size:.75rem}.vs-radio__effect:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:inherit;border:2px solid rgba(44,62,80,.4);border:2px solid rgba(var(--vs-text),.4);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 rgba(17,18,20,.4);-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),.4);box-shadow:0 0 0 0 rgba(17,18,20,.4);box-shadow:0 0 0 0 rgba(var(--vs-color),.4)}.vs-radio input{margin:0;padding:0;width:100%;height:100%;position:relative;z-index:100;opacity:0;cursor:pointer}.vs-radio input:active~.vs-radio__effect:after{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRadio{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-tooltip{--vs-color:var(--vs-text)}.vs-tooltip-enter-active,.vs-tooltip-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-tooltip-enter,.vs-tooltip-leave-to{opacity:0}.vs-tooltip-enter.top,.vs-tooltip-leave-to.top{-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-tooltip-enter.bottom,.vs-tooltip-leave-to.bottom{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-tooltip-enter.left,.vs-tooltip-leave-to.left{-webkit-transform:translate(5px);transform:translate(5px)}.vs-tooltip-enter.right,.vs-tooltip-leave-to.right{-webkit-transform:translate(-5px);transform:translate(-5px)}.darken .vs-tooltip{--vs-color:var(--vs-gray-3);color:#fff}.darken .vs-tooltip:not(.vs-change-color){color:#fff!important}.vs-tooltip{background:#111214;background:rgba(var(--vs-color),1);color:#fff;color:rgba(var(--vs-background),1);position:absolute;z-index:1000000;text-align:center;padding:5px 10px;border-radius:12px;font-size:.85rem;max-width:350px;min-width:30px;min-height:30px}.vs-tooltip.loading{color:hsla(0,0%,100%,.2);color:rgba(var(--vs-background),.2)}.vs-tooltip.loading *{opacity:.5;pointer-events:none}.vs-tooltip__loading{width:22px;height:22px;position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;opacity:1!important}.vs-tooltip__loading:after{border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right-color:#fff;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-background),1);-webkit-animation:loadingTooltip .6s ease infinite;animation:loadingTooltip .6s ease infinite}.vs-tooltip__loading:after,.vs-tooltip__loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-tooltip__loading:before{border-radius:inherit;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #fff;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-background),1);-webkit-animation:loadingTooltip .6s linear infinite;animation:loadingTooltip .6s linear infinite}.vs-tooltip.borderThick{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.borderThick.top{border-bottom:4px solid #111214;border-bottom:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.top:after{bottom:-7px}.vs-tooltip.borderThick.left{border-right:4px solid #111214;border-right:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.left:after{right:-7px}.vs-tooltip.borderThick.right{border-left:4px solid #111214;border-left:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.right:after{left:-7px}.vs-tooltip.borderThick.bottom{border-top:4px solid #111214;border-top:4px solid rgba(var(--vs-color),1)}.vs-tooltip.borderThick.bottom:after{top:-7px}.vs-tooltip.borderThick:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.borderThick:after{background:#111214!important;background:rgba(var(--vs-color),1)!important}.vs-tooltip.border{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-tooltip.border:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.border:after{border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);width:12px!important;height:12px!important}.vs-tooltip.circle{border-radius:20px}.vs-tooltip.square{border-radius:0}.vs-tooltip.notArrow:after{display:none}.vs-tooltip.shadow{background:#fff;background:rgba(var(--vs-background),1);color:#111214;color:rgba(var(--vs-color),1);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.shadow:before{width:100%;height:100%;z-index:-1;background:inherit;border-radius:inherit;top:0;left:0;content:\"\";position:absolute}.vs-tooltip.shadow:after{-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 2px 10px 0 rgba(0,0,0,.05);box-shadow:0 2px 10px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-tooltip.isDark{--vs-color:var(--vs-gray-3);color:#fff}.vs-tooltip.top:after{bottom:-3px;border-radius:0 0 2px 0}.vs-tooltip.bottom:after,.vs-tooltip.top:after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;left:50%;-webkit-transform:translate(-50%) rotate(45deg);transform:translate(-50%) rotate(45deg);z-index:-2}.vs-tooltip.bottom:after{top:-3px;border-radius:2px 0 0 0}.vs-tooltip.left:after{right:-3px;border-radius:0 2px 0 0}.vs-tooltip.left:after,.vs-tooltip.right:after{content:\"\";position:absolute;background:inherit;width:10px;height:10px;top:50%;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);z-index:-2}.vs-tooltip.right:after{left:-3px;border-radius:0 0 0 2px}@-webkit-keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingTooltip{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-dialog-content{--vs-color:var(--vs-primary)}.vs-dialog-enter-active{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-dialog-enter-active .vs-dialog:not(.vs-dialog--fullScreen){-webkit-animation:rebound .4s;animation:rebound .4s}.vs-dialog-leave-active,.vs-dialog-leave-active .vs-dialog{-webkit-transition:all .15s ease;transition:all .15s ease}.vs-dialog-enter,.vs-dialog-leave-to{opacity:0}.vs-dialog-enter .vs-dialog,.vs-dialog-leave-to .vs-dialog{-webkit-transform:scale(.7);transform:scale(.7);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-dialog-enter .vs-dialog--fullScreen,.vs-dialog-leave-to .vs-dialog--fullScreen{-webkit-transform:translateY(8%)!important;transform:translateY(8%)!important}@-webkit-keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes rebound{0%{-webkit-transform:scale(.8);transform:scale(.8)}40%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.98);transform:scale(.98)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes reboundClick{0%{-webkit-transform:scale(1);transform:scale(1)}40%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}.vs-dialog-content{background:rgba(0,0,0,.2);background:rgba(0,0,0,var(--vs-background-opacity));position:fixed;left:0;top:0;z-index:99000;z-index:var(--vs-zindex-2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;max-height:100vh;overflow-y:auto;overflow-x:hidden;padding-top:80px;padding-bottom:80px}.vs-dialog-content.fullScreen{padding:0;overflow:hidden}.vs-dialog-content.blur{-webkit-backdrop-filter:saturate(180%) blur(15px);backdrop-filter:saturate(180%) blur(15px)}.vs-dialog{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;min-width:400px;border-radius:20px;border-radius:var(--vs-radius);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 30px 0 rgba(0,0,0,.05);box-shadow:0 5px 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));max-width:800px;margin:auto}.vs-dialog--notCenter .vs-dialog__header{display:block}.vs-dialog__loading{width:100%;position:absolute;top:0;left:0;height:100%;border-radius:inherit;background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-dialog__loading:after{border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right-color:#111214;border:2px solid rgba(var(--vs-color),0);border-right-color:rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s ease infinite;animation:loadingDialog .6s ease infinite}.vs-dialog__loading:after,.vs-dialog__loading:before{content:\"\";position:absolute;width:30px;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-dialog__loading:before{border-radius:inherit;border:2px solid rgba(17,18,20,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-color),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-animation:loadingDialog .6s linear infinite;animation:loadingDialog .6s linear infinite}.vs-dialog--scroll .vs-dialog__content{max-height:calc(80vh - 200px);overflow:auto}.vs-dialog--autoWidth{width:auto!important;min-width:auto!important;max-width:auto!important}.vs-dialog--square,.vs-dialog--square .vs-dialog__close{border-radius:0}.vs-dialog--notPadding .vs-dialog__footer{padding:0}.vs-dialog--notPadding .vs-dialog__content{padding:0;margin-bottom:0!important}.vs-dialog--notPadding .vs-dialog__header{padding:0}.vs-dialog--rebound{-webkit-animation:reboundClick .3s!important;animation:reboundClick .3s!important}.vs-dialog--fullScreen{width:calc(100% - 30px)!important;height:calc(100% - 30px)!important;max-width:none!important;max-height:none!important}.vs-dialog__footer{padding:0 16px 10px}.vs-dialog__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px 16px}.vs-dialog__content{padding:10px 16px;width:100%;position:relative;border-radius:inherit}.vs-dialog__content.notFooter{margin-bottom:20px}.vs-dialog__close{--vs-color:var(--vs-text);position:absolute;top:-6px;right:-6px;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:inherit;border-radius:12px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;z-index:200;border:0}.vs-dialog__close i{width:34px;height:34px;opacity:.7}.vs-dialog__close i:after,.vs-dialog__close i:before{width:14px}.vs-dialog__close:hover{-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 4px 0 rgba(0,0,0,.05);box-shadow:0 0 4px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}.vs-dialog__close:hover i{opacity:1}@-webkit-keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingDialog{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@media (max-width:600px){.vs-dialog{min-width:calc(100vw - 20px);max-width:calc(100vw - 20px);margin:auto 10px}}.vs-pagination-content{--vs-color:var(--vs-primary);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination-content.notMargin .vs-pagination__dotted{background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0}.vs-pagination-content.notMargin .vs-pagination__arrow{margin:0!important;border-radius:0}.vs-pagination-content.notMargin .vs-pagination__arrow:first-of-type{border-radius:12px 0 0 12px}.vs-pagination-content.notMargin .vs-pagination__arrow:last-of-type{border-radius:0 12px 12px 0}.vs-pagination-content.notMargin .vs-pagination__button{border-radius:0;margin:0!important}.vs-pagination-content.disabled{opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination-content.square .vs-pagination__active,.vs-pagination-content.square .vs-pagination__arrow,.vs-pagination-content.square .vs-pagination__button{border-radius:0}.vs-pagination-content.circle .vs-pagination__active,.vs-pagination-content.circle .vs-pagination__arrow,.vs-pagination-content.circle .vs-pagination__button{border-radius:50%}.vs-pagination-content.buttonsDotted .vs-pagination__arrow{width:15px;height:12px;min-width:15px;padding:0;background:transparent}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i{width:6px;height:6px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:before{width:1px}.vs-pagination-content.buttonsDotted .vs-pagination__arrow i:after{height:1px}.vs-pagination-content.buttonsDotted .vs-pagination__dotted{width:12px;height:12px;font-size:.9rem;letter-spacing:1px}.vs-pagination-content.buttonsDotted .vs-pagination__button{width:12px;height:12px}.vs-pagination-content.buttonsDotted .vs-pagination__button.active{-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active{width:12px;height:12px;-webkit-box-shadow:0 2px 10px 0 rgba(17,18,20,.4);-webkit-box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);box-shadow:0 2px 10px 0 rgba(17,18,20,.4);box-shadow:0 2px 10px 0 rgba(var(--vs-color),.4);-webkit-transform:scale(1);transform:scale(1)}.vs-pagination-content.buttonsDotted .vs-pagination__active.move{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative}.vs-pagination__progress{width:calc(100% - 16px);height:3px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);position:absolute;bottom:-8px;border-radius:10px}.vs-pagination__progress .progress{width:0;background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:inherit;-webkit-transition:all .25s ease;transition:all .25s ease;max-width:100%}.vs-pagination__slot{min-height:36px;display:block;display:-webkit-box;display:-ms-flexbox;display:flex}.vs-pagination__arrow,.vs-pagination__slot{min-width:36px;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-pagination__arrow{width:auto;height:36px;border-radius:12px;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 2px;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);-webkit-transition:all .25s ease;transition:all .25s ease;border:0}.vs-pagination__arrow:disabled{opacity:.4;pointer-events:none}.vs-pagination__arrow:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__arrow i{width:10px;height:10px;position:relative;display:block;margin-left:4px;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__arrow i:before{width:2px}.vs-pagination__arrow i:after{height:2px}.vs-pagination__arrow.next i{margin-left:-4px;-webkit-transform:rotate(135deg) scale(.8);transform:rotate(135deg) scale(.8)}.vs-pagination__active{position:absolute;left:50%;top:0;width:36px;height:36px;background:#111214;background:rgba(var(--vs-color),1);border-radius:12px;z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#fff;-webkit-box-shadow:0 5px 20px 0 rgba(17,18,20,.3);-webkit-box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);box-shadow:0 5px 20px 0 rgba(17,18,20,.3);box-shadow:0 5px 20px 0 rgba(var(--vs-color),.3);cursor:default}.vs-pagination__active.move{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-pagination__dotted{width:36px;height:36px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.4rem;letter-spacing:2px;margin:0 2px;cursor:pointer}.vs-pagination__dotted:hover span.dotted{opacity:0;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted:hover .con-arrows{opacity:1;margin-left:-1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover span.dotted{opacity:0;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted.next:hover .con-arrows{opacity:1;margin-left:1px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-pagination__dotted span.dotted{margin-right:-2px;text-align:center}.vs-pagination__dotted.next .con-arrows{-webkit-transform:rotate(180deg);transform:rotate(180deg);margin-left:-5px}.vs-pagination__dotted .con-arrows{width:10px;height:10px;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:5px;opacity:0;-webkit-transition:all .1s ease;transition:all .1s ease}.vs-pagination__dotted .con-arrows i{width:10px;height:10px;position:relative;display:block;-webkit-transform:rotate(-45deg) scale(.8);transform:rotate(-45deg) scale(.8)}.vs-pagination__dotted .con-arrows i:before{width:2px}.vs-pagination__dotted .con-arrows i:after{height:2px}.vs-pagination__dotted .con-arrows i:last-child{position:absolute;top:0;margin-left:6px}.vs-pagination__button{width:36px;height:36px;border-radius:12px;padding:0;background:#f0f3f4;background:rgba(var(--vs-gray-3),1);margin:0 2px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:.9rem;-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1);position:relative;border:0}.vs-pagination__button.loading{border-radius:50%;opacity:.5;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button.loading:after{border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right-color:#111214;border:2px solid rgba(var(--vs-background),0);border-right-color:rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s ease infinite;animation:loadingPagination .6s ease infinite}.vs-pagination__button.loading:after,.vs-pagination__button.loading:before{content:\"\";position:absolute;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .25s ease;transition:all .25s ease;display:block;-webkit-box-shadow:0 0 0 0 #111214;-webkit-box-shadow:0 0 0 0 rgba(var(--vs-color),1);box-shadow:0 0 0 0 #111214;box-shadow:0 0 0 0 rgba(var(--vs-color),1)}.vs-pagination__button.loading:before{border-radius:50%;border:2px solid hsla(0,0%,100%,0);border-right:2px dashed #111214;border:2px solid rgba(var(--vs-background),0);border-right:2px dashed rgba(var(--vs-color),1);-webkit-animation:loadingPagination .6s linear infinite;animation:loadingPagination .6s linear infinite}.vs-pagination__button.disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vs-pagination__button:hover{background:#e6e9ea;background:rgba(var(--vs-gray-4),1)}.vs-pagination__button:active{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingPagination{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-table-content{--vs-color:var(--vs-primary);width:100%;border-radius:16px}.vs-table{width:100%;font-size:.9rem;margin:0;overflow:auto}.vs-table table{margin:0;border-collapse:collapse;width:100%;min-width:500px;border:0}.vs-table.striped .vs-table__tr:nth-child(2n){background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table_not-found{display:none;padding:20px;text-align:center;width:100%}.vs-table_not-found tr{text-align:center}.vs-table_not-found tr td{padding:20px;border:0}.vs-table__tbody:empty{display:none;background:#000}.vs-table__tbody:empty~.vs-table_not-found{display:table-row-group}.vs-table.isSelectedValue tr{cursor:pointer}.vs-table__footer{padding:8px 10px;border-radius:0 0 14px 14px}.vs-table__footer,.vs-table__header{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__header{width:100%;padding:10px;border-radius:14px 14px 0 0}.vs-table__header~.vs-table .vs-table__th:first-child,.vs-table__header~.vs-table .vs-table__th:last-child{border-radius:0}.vs-table__thead{width:100%}.vs-table__thead .vs-table__th{background:#f4f7f8;background:rgba(var(--vs-gray-2),1)}.vs-table__thead .vs-table__th:first-child{border-radius:14px 0 0 0}.vs-table__thead .vs-table__th:last-child{border-radius:0 14px 0 0}.isMultipleSelected .vs-table__tr .vs-table__td{border-radius:0!important}.vs-table__tr{padding:5px;border:0}.vs-table__tr.expand{cursor:pointer}.vs-table__tr.vs-change-color .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr.vs-change-color .vs-table__td:hover{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:first-of-type .vs-table__td:last-child{border-radius:0 0 15px 0}.vs-table__tr:first-of-type .vs-table__td:first-child{border-radius:0 0 0 15px}.vs-table__tr.isExpand:first-of-type .vs-table__td{border-radius:0}.vs-table__tr.isExpand:first-of-type .vs-table__td,.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td{background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:last-child{border-radius:0 15px 0 0}.vs-table__tr.isExpand:not(:first-of-type) .vs-table__td:first-child{border-radius:15px 0 0 0}.vs-table__tr.isExpand:not(:first-of-type)+.vs-table__tr__expand td{border-radius:0 0 15px 15px!important}.vs-table__tr.selected .vs-table__td{background:rgba(17,18,20,.1)!important;background:rgba(var(--vs-color),.1)!important;color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-table__tr .vs-table__td{background:rgba(var(--vs-bg),.1);color:rgba(var(--vs-bg),1)}.vs-table__tr.vs-change-color:hover .vs-table__td{background:rgba(17,18,20,.2)!important;background:rgba(var(--vs-color),.2)!important}.vs-table__tr:hover .vs-table__td{background:#f9fcfd;background:rgba(var(--vs-gray-1),1)}.vs-table__tr__expand,.vs-table__tr__expand td{-webkit-transition:all .25s ease;transition:all .25s ease;border:0}.vs-table__tr__expand td{padding:0;background:#f9fcfd!important;background:rgba(var(--vs-gray-1),1)!important}.vs-table__tr__expand td .vs-table__expand__td__content{overflow:hidden;display:block;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__tr__expand td .vs-table__expand__td__content__sub{padding:10px 15px;z-index:1;position:relative}.fade-expand-enter-active,.fade-expand-leave-active{-webkit-transition:all .25s ease;transition:all .25s ease}.fade-expand-enter,.fade-expand-leave-to{opacity:0}.fade-expand-enter td .vs-table__expand__td__content,.fade-expand-leave-to td .vs-table__expand__td__content{height:0!important}.vs-table__th{padding:10px 12px;text-align:left;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem;border:0}.vs-table__th.sort .vs-table__th__content{pointer-events:none}.vs-table__th.sort:hover{background:#f0f3f4;background:rgba(var(--vs-gray-3),1)}.vs-table__th[data-sort-type=asc] .icon-sort-2{margin-top:-7px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=asc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-table__th[data-sort-type=desc] .icon-sort-2{margin-top:-7px}.vs-table__th[data-sort-type=desc] .icon-sort-1{margin-top:-1px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important}.vs-table__th__content{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-table__th__content,.vs-table__th__content__icons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-table__th__content__icons{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:7px;-webkit-transform:scale(.8);transform:scale(.8)}.vs-table__th__content .vs-icon-arrow{position:relative;display:block}.vs-table__th__content .vs-icon-arrow.icon-sort-1{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.vs-table__th__content .vs-icon-arrow.icon-sort-2{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.vs-table__td{padding:10px 12px;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.8rem;border:0}.vs-table__td:last-child{border-radius:0 15px 15px 0}.vs-table__td:first-child{border-radius:15px 0 0 15px}.vs-table__td.isCheckbox{width:23px}.vs-table__td.isEdit{text-decoration:underline;cursor:pointer}.vs-navbar-content{--vs-color:var(--vs-background);position:absolute;z-index:9000;top:0;left:0;width:100%;border-radius:0 0 15px 15px;background:#111214;background:rgba(var(--vs-color),1);-webkit-transition:all .25s ease;transition:all .25s ease;color:#2c3e50;color:rgba(var(--vs-text),1)}.vs-navbar-content.paddingScroll:not(.paddingScrollActive){padding-top:20px;padding-bottom:20px}.vs-navbar-content.paddingScroll:not(.paddingScrollActive) .vs-navbar__group__items{margin-bottom:-30px}.vs-navbar-content.vsNavbarSquare{border-radius:0}.vs-navbar-content.textWhite{color:#fff}.vs-navbar-content.textWhite .vs-navbar__item:before,.vs-navbar-content.textWhite .vs-navbar__line{background:#fff}.vs-navbar-content.fixed{position:fixed!important}.vs-navbar-content.shadow,.vs-navbar-content.shadowActive{-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 25px 0 rgba(0,0,0,.05);box-shadow:0 5px 25px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-navbar-content.hidden{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.vs-navbar{width:100%;position:relative;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:44px}.vs-navbar,.vs-navbar__left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.vs-navbar__right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-navbar__center,.vs-navbar__right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-navbar__center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-navbar__line{position:absolute;left:0;bottom:0;width:100px;background:#2c3e50;background:rgba(var(--vs-text),1);height:3px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__line.notTransition{-webkit-transition:none!important;transition:none!important}.vs-navbar__item{padding:10px 15px;margin:0;border:0;background:transparent;font-size:.85rem;opacity:.7;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;font-weight:700;color:inherit}.vs-navbar__item.active,.vs-navbar__item:hover{opacity:1}.vs-navbar__group{position:relative}.vs-navbar__group:hover .vs-navbar__group__item{opacity:1}.vs-navbar__group:hover .vs-navbar__group__items{opacity:1;visibility:visible;-webkit-transform:translateY(100%);transform:translateY(100%)}.vs-navbar__group__item{padding:10px 15px;background:transparent;color:inherit;font-weight:700;-webkit-transition:all .25s ease,color 0s;transition:all .25s ease,color 0s;opacity:.7;border:0}.vs-navbar__group__items{position:absolute;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:-12px;-webkit-transform:translateY(90%);transform:translateY(90%);background:#111214;background:rgba(var(--vs-color),1);border-radius:5px 18px 18px 18px;padding:10px;min-width:160px;opacity:0;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;color:inherit;visibility:hidden}.vs-navbar__group__items:after{content:\"\";left:0;top:-13px;background:transparent;width:100%;height:14px;position:absolute;z-index:-1}.vs-navbar__group__items .vs-navbar__item{text-align:left;width:100%;position:relative;padding:5px 10px}.vs-navbar__group__items .vs-navbar__item:before{content:\"\";left:0;top:0;width:4px;height:4px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;border-radius:50%;top:calc(50% - 2px);opacity:0;-webkit-transform:translate(-10px);transform:translate(-10px);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-navbar__group__items .vs-navbar__item.active:before{opacity:1;-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content{--vs-color:var(--vs-primary)}@-webkit-keyframes delayOpacity{0%{opacity:0}to{opacity:1}}@keyframes delayOpacity{0%{opacity:0}to{opacity:1}}.vs-sidebar-content{position:fixed;left:0;top:0;width:calc(100% - 50px);max-width:260px;height:100vh;border-radius:0 30px 30px 0;color:#2c3e50;color:rgba(var(--vs-text),1);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 25px 0 rgba(0,0,0,.05);box-shadow:0 0 25px 0 rgba(0,0,0,var(--vs-shadow-opacity));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:21000;background:#fff;background:rgba(var(--vs-background),1);-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-110%);transform:translate(-110%)}.vs-sidebar-content.right{left:auto;right:0;-webkit-transform:translate(110%);transform:translate(110%)}.vs-sidebar-content.right.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.right.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:auto!important;right:60px!important}.vs-sidebar-content.absolute{position:absolute!important;z-index:9001;height:100%}.vs-sidebar-content.relative{position:relative!important;z-index:9001;height:100%}.vs-sidebar-content.textWhite .vs-sidebar__group__content:after{background:hsla(0,0%,100%,.4)}.vs-sidebar-content.textWhite .vs-sidebar__item:after{background:#fff!important}.vs-sidebar-content.textWhite .vs-sidebar__item.active{color:#fff!important}.vs-sidebar-content.notShadow{-webkit-box-shadow:none!important;box-shadow:none!important}.vs-sidebar-content.square{border-radius:0}.vs-sidebar-content.notLineActive .vs-sidebar .vs-sidebar__item:after{display:none}.vs-sidebar-content.open{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar-content.reduce .vs-sidebar__footer{padding:10px 0}.vs-sidebar-content.reduce .vs-sidebar__header .vs-avatar-content{width:44px!important;height:44px!important}.vs-sidebar-content.reduce .vs-sidebar__logo img{width:80%}.vs-sidebar-content.reduce .vs-sidebar__item{padding-left:16px!important;min-height:47px}.vs-sidebar-content.reduce .vs-sidebar__item:not(.hasIcon) .vs-sidebar__item__text{font-size:.5rem}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon .vs-sidebar__item__text{-webkit-transform:translate(-10px);transform:translate(-10px);margin-left:-50px}.vs-sidebar-content.reduce .vs-sidebar__item__arrow{position:absolute;left:36px;top:10px;-webkit-animation:delayOpacity .6s ease;animation:delayOpacity .6s ease;width:5px;height:5px}.vs-sidebar-content.reduce .vs-sidebar__item:hover .vs-sidebar__item__text-tooltip{opacity:1;left:60px}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon{padding:0!important}.vs-sidebar-content.reduce .vs-sidebar__item.hasIcon:after{left:-6px}.vs-sidebar-content .vs-sidebar__logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:25px 0;min-height:80px}.vs-sidebar-content .vs-sidebar__logo img{max-width:120px;max-height:35px}.vs-sidebar-content .vs-sidebar{overflow-x:hidden;width:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-sidebar-content .vs-sidebar::-webkit-scrollbar{width:0}.vs-sidebar-content .vs-sidebar__header{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar-content .vs-sidebar__footer,.vs-sidebar-content .vs-sidebar__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:10px}.vs-sidebar-content .vs-sidebar__footer{justify-self:flex-start}.vs-sidebar__item{width:100%;padding:15px 16px 14px;text-align:left;background:transparent;font-size:1rem;font-weight:700;opacity:.7;-webkit-transition:all .25s ease;transition:all .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;color:#2c3e50;color:rgba(var(--vs-text),1);border:0}.vs-sidebar__item.hasIcon{padding:0}.vs-sidebar__item.hasIcon.active{padding-left:8px}.vs-sidebar__item.hasIcon:hover{padding-left:8px;opacity:1}.vs-sidebar__item:after{content:\"\";position:absolute;left:-4px;top:0;width:10px;height:100%;background:#111214;background:rgba(var(--vs-color),1);border-radius:0 20px 20px 0;-webkit-transform:translate(-6px);transform:translate(-6px);-webkit-transition:all .25s ease;transition:all .25s ease;z-index:60}.vs-sidebar__item.active:not(.hasIcon){padding-left:25px}.vs-sidebar__item.active{opacity:1;color:#111214;color:rgba(var(--vs-color),1)}.vs-sidebar__item.active:after{-webkit-transform:translate(0);transform:translate(0)}.vs-sidebar__item__icon{min-width:50px;height:47px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.2rem;z-index:50;background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__item:hover:not(.hasIcon){opacity:1;padding-left:25px}.vs-sidebar__item__text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;z-index:10;font-size:.9rem}.vs-sidebar__item__arrow,.vs-sidebar__item__text{-webkit-transition:all .25s ease;transition:all .25s ease}.vs-sidebar__item__arrow{width:7px;height:7px;position:relative;justify-self:flex-end;margin-left:auto;margin-right:15px;-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important;z-index:80}.vs-sidebar__item__arrow .vs-icon-arrow:before{width:2px}.vs-sidebar__item__arrow .vs-icon-arrow:after{height:2px}.vs-sidebar__item__text-tooltip{position:fixed;left:50px;opacity:0;pointer-events:none;-webkit-transition:all .25s ease;transition:all .25s ease;font-size:.85rem;white-space:nowrap}.vs-sidebar__group{padding:0;width:100%;min-width:260px;position:relative}.vs-sidebar__group.open .vs-sidebar__group__content:after{-webkit-transform:translate(0);transform:translate(0);opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item{opacity:1}.vs-sidebar__group.open>.vs-sidebar__group__header .vs-sidebar__item__arrow{-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.vs-sidebar__group__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-sidebar__group__content{overflow:hidden;-webkit-transition:all .25s ease;transition:all .25s ease;position:relative}.vs-sidebar__group__content:after{content:\"\";position:absolute;left:0;top:0;background:rgba(17,18,20,.3);background:rgba(var(--vs-color),.3);width:4px;height:100%;opacity:0;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translate(-100%);transform:translate(-100%);border-radius:0 10px 10px 0;z-index:60}.vs-sidebar__group__content .vs-sidebar__item{background:#fff;background:rgba(var(--vs-background),1)}.vs-sidebar__group>.vs-sidebar__group__header .vs-sidebar__item:hover{padding-left:0}.vs-card-content{--vs-color:var(--vs-primary)}.vs-card-content.type-5 .vs-card{-webkit-box-shadow:none;box-shadow:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-card-content.type-5 .vs-card:hover .vs-card__interactions{bottom:50px}.vs-card-content.type-5 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 30px 0 rgba(0,0,0,.05);box-shadow:0 0 30px 0 rgba(0,0,0,var(--vs-shadow-opacity))}.vs-card-content.type-5 .vs-card:hover .vs-card__img{border-radius:6px 40px 6px 40px}.vs-card-content.type-5 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.1);transform:scale(1.1)}.vs-card-content.type-5 .vs-card__img{border-radius:6px 20px 6px 20px}.vs-card-content.type-5 .vs-card__interactions{bottom:6px;-webkit-transition:all .25s ease;transition:all .25s ease;z-index:20}.vs-card-content.type-5 .vs-card__text{background:#fff;background:rgba(var(--vs-background),1);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:6px 20px 6px 20px;margin-top:-50px;z-index:10;position:relative;width:calc(100% - 30px);padding-top:10px;-webkit-transition:all .25s ease;transition:all .25s ease;-webkit-transform:translateY(25px);transform:translateY(25px);opacity:0}.vs-card-content.type-4 .vs-card{-webkit-box-shadow:none;box-shadow:none;max-width:300px}.vs-card-content.type-4 .vs-card:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.vs-card-content.type-4 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1);transform:scale(1)}.vs-card-content.type-4 .vs-card:hover .vs-card__text{padding-top:15px;padding-bottom:25px}.vs-card-content.type-4 .vs-card__img{-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:600px}.vs-card-content.type-4 .vs-card__img img{-webkit-transform:scale(1.2);transform:scale(1.2)}.vs-card-content.type-4 .vs-card__interactions{top:0;bottom:auto}.vs-card-content.type-4 .vs-card__text{background:hsla(0,0%,100%,.8);background:rgba(var(--vs-background),.8);position:absolute;bottom:0;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border-radius:0 0 20px 20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-4 .vs-card__text p{opacity:1}.vs-card-content.type-3 .vs-card{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:400px}.vs-card-content.type-3 .vs-card:hover{-webkit-transform:scale(1.04);transform:scale(1.04)}.vs-card-content.type-3 .vs-card__img img{min-width:200px}.vs-card-content.type-3 .vs-card__text{padding-top:15px}.vs-card-content.type-3 .vs-card__title h2,.vs-card-content.type-3 .vs-card__title h3,.vs-card-content.type-3 .vs-card__title h4,.vs-card-content.type-3 .vs-card__title h5,.vs-card-content.type-3 .vs-card__title h6{padding:0}.vs-card-content.type-2 .vs-card{-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.vs-card-content.type-2 .vs-card:hover{-webkit-transform:scale(.95);transform:scale(.95)}.vs-card-content.type-2 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card-content.type-2 .vs-card:hover .vs-card__text{-webkit-transform:translate(0);transform:translate(0);opacity:1;color:#fff}.vs-card-content.type-2 .vs-card__interactions{right:0;top:0;left:auto;bottom:auto;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.vs-card-content.type-2 .vs-card__title{position:relative;color:inherit;padding:0}.vs-card-content.type-2 .vs-card__title h2,.vs-card-content.type-2 .vs-card__title h3,.vs-card-content.type-2 .vs-card__title h4,.vs-card-content.type-2 .vs-card__title h5,.vs-card-content.type-2 .vs-card__title h6{padding:0 0 5px}.vs-card-content.type-2 .vs-card__text{position:absolute;bottom:0;background:hsla(0,0%,100%,.9);background:rgba(var(--vs-background),.9);padding-top:30px;border-radiu:0 0 20px 20px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5)));background:linear-gradient(180deg,transparent,rgba(0,0,0,.5));color:transparent;font-size:.9rem;-webkit-transform:translateY(45%);transform:translateY(45%);-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card-content.type-2 .vs-card__text p{opacity:1}.vs-card-content.type-1 .vs-card:hover{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(5px);transform:translateY(5px)}.vs-card-content.type-1 .vs-card:hover .vs-card__img img{-webkit-transform:scale(1.15);transform:scale(1.15)}.vs-card{background:#fff;background:rgba(var(--vs-background),1);color:#2c3e50;color:rgba(var(--vs-text),1);width:100%;max-width:350px;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.05);-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 5px 20px 0 rgba(0,0,0,.05);box-shadow:0 5px 20px 0 rgba(0,0,0,var(--vs-shadow-opacity));border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer;position:relative}.vs-card__text{font-size:.85rem;padding:0 15px 15px}.vs-card__text p{font-size:inherit;margin:0;opacity:.8}.vs-card__title{padding-top:10px;padding-bottom:5px}.vs-card__title h2,.vs-card__title h3,.vs-card__title h4,.vs-card__title h5,.vs-card__title h6{padding:0;margin:0;font-size:1.1rem}.vs-card__interactions{position:absolute;bottom:0;padding:5px 10px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;left:0}.vs-card__img,.vs-card__interactions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__img{position:relative;max-height:250px;overflow:hidden;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-card__img,.vs-card__img img{border-radius:20px;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-card__img img{width:100%;display:block}.vs-card__group{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vs-card__group-space{min-width:20px;position:relative;height:20px}.vs-card__group .vs-card__group-cards{position:relative;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;overflow-x:auto;scroll-behavior:smooth;padding-top:20px;padding-bottom:20px;border-radius:20px}.vs-card__group .vs-card__group-cards .vs-card-content{min-width:350px;margin-left:20px}.vs-card__group .vs-card__group-prev{z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent;border:0}.vs-card__group .vs-card__group-prev .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.vs-card__group .vs-card__group-prev .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-prev .vs-icon-arrow:after{height:2px}.vs-card__group .vs-card__group-next{border:0;z-index:2;position:relative;left:0;width:50px;height:50px;min-width:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:transparent}.vs-card__group .vs-card__group-next .vs-icon-arrow{width:15px;height:15px;display:block;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.vs-card__group .vs-card__group-next .vs-icon-arrow:before{width:2px}.vs-card__group .vs-card__group-next .vs-icon-arrow:after{height:2px}.loading-enter-active,.loading-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.loading-enter,.loading-leave-to{opacity:0}.vs-loading{--vs-color:var(--vs-primary);--vs-background:255,255,255;--vs-opacity:.6;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(255,255,255,var(--vs-opacity));background:rgba(var(--vs-background),var(--vs-opacity));-webkit-transition:all .25s ease;transition:all .25s ease;padding:20px;border-radius:inherit}.vs-loading--target{position:absolute}.vs-loading__load{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vs-loading__load__text{font-size:.75em;margin:7px}.vs-loading__load__percent,.vs-loading__load__text{font-weight:700;color:#111214;color:rgba(var(--vs-color),1)}.vs-loading__load__percent{position:relative;font-size:.65rem;margin-top:1px;z-index:200}.vs-loading__load__animation{width:40px;height:40px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading__progress{width:100%;position:absolute;top:0;left:0;height:4px;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading__progress__bar{background:#111214;background:rgba(var(--vs-color),1);height:100%;position:relative;border-radius:0 10px 10px 0}.vs-loading--default .vs-loading__load__animation{border-radius:50%}.vs-loading--default .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:3px solid #111214;border:3px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s ease infinite;animation:rotate .8s ease infinite;top:0}.vs-loading--default .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:3px dashed #111214;border:3px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent;-webkit-animation:rotate .8s linear infinite;animation:rotate .8s linear infinite;opacity:.2}.vs-loading--default .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs-loading--waves .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--waves .vs-loading__load__animation__1{-webkit-animation:waves .7s ease infinite;animation:waves .7s ease infinite}.vs-loading--waves .vs-loading__load__animation__1,.vs-loading--waves .vs-loading__load__animation__2{width:0;background:transparent;height:0;position:absolute;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}.vs-loading--waves .vs-loading__load__animation__2{-webkit-animation:waves 1.4s linear infinite;animation:waves 1.4s linear infinite}.vs-loading--waves .vs-loading__load__animation__3{width:0;background:transparent;height:0;position:absolute;-webkit-animation:waves 1.75s ease infinite;animation:waves 1.75s ease infinite;-webkit-box-shadow:0 0 10px 0 rgba(17,18,20,.5);-webkit-box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);box-shadow:0 0 10px 0 rgba(17,18,20,.5);box-shadow:0 0 10px 0 rgba(var(--vs-color),.5);border-radius:50%}@-webkit-keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}@keyframes waves{0%{width:0;height:0}to{height:50px;width:50px;opacity:0}}.vs-loading--corners .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--corners .vs-loading__load__animation__1{width:100%;background:transparent;height:100%;position:absolute;-webkit-animation:corners 1s ease infinite;animation:corners 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1)}.vs-loading--corners .vs-loading__load__animation__2,.vs-loading--corners .vs-loading__load__animation__3{display:none}@-webkit-keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}@keyframes corners{0%{border-radius:50%;-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{border-radius:50% 50% 50% 15%}50%{border-radius:50% 50% 15% 30%}75%{border-radius:50% 15% 30% 30%}to{border-radius:50%;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}}.vs-loading--border .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.vs-loading--border .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:1px solid #111214;border:1px solid rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0}.vs-loading--border .vs-loading__load__animation__2{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;-webkit-animation:rotate 1s linear .2s infinite;animation:rotate 1s linear .2s infinite}.vs-loading--border .vs-loading__load__animation__3{top:0;position:absolute;width:100%;height:100%;border:1px dashed #111214;border:1px dashed rgba(var(--vs-color),1);border-radius:inherit;-webkit-animation:rotate 1s linear .4s infinite;animation:rotate 1s linear .4s infinite;opacity:.2}.vs-loading--points .vs-loading__load__percent{position:absolute;top:-10px}.vs-loading--points .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto}.vs-loading--points .vs-loading__load__animation__1{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease infinite;animation:points .75s ease infinite}.vs-loading--points .vs-loading__load__animation__2{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .25s infinite;animation:points .75s ease .25s infinite}.vs-loading--points .vs-loading__load__animation__3{width:8px;height:8px;background:#111214;background:rgba(var(--vs-color),1);border-radius:50%;margin:3px;-webkit-animation:points .75s ease .5s infinite;animation:points .75s ease .5s infinite}@-webkit-keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes points{0%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}to{-webkit-transform:translate(0);transform:translate(0)}}.vs-loading--square .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--square .vs-loading__load__animation__1{-webkit-animation:rotateSquare 4s ease infinite;animation:rotateSquare 4s ease infinite}.vs-loading--square .vs-loading__load__animation__1,.vs-loading--square .vs-loading__load__animation__2{position:absolute;width:100%;height:100%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-radius:inherit;top:0}.vs-loading--square .vs-loading__load__animation__2{animation:rotateSquare 4s ease infinite reverse;background:#fff;background:rgba(var(--vs-background),1)}.vs-loading--square .vs-loading__load__animation__3{display:none}@-webkit-keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes rotateSquare{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.vs-loading--gradient .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--gradient .vs-loading__load__animation__1{position:absolute;width:100%;height:100%;border:0;border-radius:inherit;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;top:0;background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,hsla(0,0%,100%,0)),to(#111214));background:linear-gradient(0deg,hsla(0,0%,100%,0) 33%,#111214);background:-webkit-gradient(linear,left bottom,left top,color-stop(33%,rgba(var(--vs-background),0)),to(rgba(var(--vs-color),1)));background:linear-gradient(0deg,rgba(var(--vs-background),0) 33%,rgba(var(--vs-color),1));border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__2{top:2px;position:absolute;width:calc(100% - 4px);height:calc(100% - 4px);border:0;border-radius:inherit;background:#fff;background:rgba(var(--vs-background),1);border-radius:50%}.vs-loading--gradient .vs-loading__load__animation__3{display:none}.vs-loading--rectangle .vs-loading__load__percent{position:absolute;bottom:-2px}.vs-loading--rectangle .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-loading--rectangle .vs-loading__load__animation__1{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease infinite;animation:rectangle 1s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--rectangle .vs-loading__load__animation__2{position:absolute;width:15px;height:15px;border:0;border-radius:inherit;-webkit-animation:rectangle 1s ease-out infinite;animation:rectangle 1s ease-out infinite;background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}.vs-loading--rectangle .vs-loading__load__animation__3{display:none}@-webkit-keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}@keyframes rectangle{0%{-webkit-transform:translate(-50px);transform:translate(-50px)}50%{-webkit-transform:translate(50px);transform:translate(50px)}to{-webkit-transform:translate(-50px);transform:translate(-50px)}}.vs-loading--circles .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--circles .vs-loading__load__animation__1{position:absolute;width:40px;height:40px;-webkit-animation:rotate 1s ease infinite;animation:rotate 1s ease infinite;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__2{position:absolute;width:50px;height:50px;-webkit-animation:rotate 1s ease-in-out infinite;animation:rotate 1s ease-in-out infinite;border-radius:50%;border:2px dashed #111214;border:2px dashed rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--circles .vs-loading__load__animation__3{position:absolute;width:60px;height:60px;animation:rotate 1s linear infinite reverse;border-radius:50%;border:2px solid #111214;border:2px solid rgba(var(--vs-color),1);border-top:3px solid transparent;border-left:3px solid transparent;border-right:3px solid transparent}.vs-loading--square-rotate .vs-loading__load__percent{position:absolute;bottom:30px}.vs-loading--square-rotate .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:60px;height:60px}.vs-loading--square-rotate .vs-loading__load__animation__1{position:absolute;width:25px;height:25px;-webkit-animation:squareRotate 3s ease infinite;animation:squareRotate 3s ease infinite;background:#111214;background:rgba(var(--vs-color),1)}.vs-loading--square-rotate .vs-loading__load__animation__2,.vs-loading--square-rotate .vs-loading__load__animation__3{display:none}@-webkit-keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@keyframes squareRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}25%{-webkit-transform:rotateX(180deg) rotateY(0deg);transform:rotateX(180deg) rotateY(0deg)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0deg) rotateY(180deg);transform:rotateX(0deg) rotateY(180deg)}to{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}.vs-loading--scale .vs-loading__load__percent{position:absolute;bottom:40px}.vs-loading--scale .vs-loading__load__animation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:cneter;-ms-flex-align:cneter;align-items:cneter;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px;height:40px}.vs-loading--scale .vs-loading__load__animation__1{-webkit-animation:scale .8s ease infinite;animation:scale .8s ease infinite}.vs-loading--scale .vs-loading__load__animation__1,.vs-loading--scale .vs-loading__load__animation__2{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;border-radius:5px}.vs-loading--scale .vs-loading__load__animation__2{-webkit-animation:scale .8s ease .2s infinite;animation:scale .8s ease .2s infinite}.vs-loading--scale .vs-loading__load__animation__3{position:relative;width:5px;height:5px;background:#111214;background:rgba(var(--vs-color),1);margin:3px;-webkit-animation:scale .8s ease .4s infinite;animation:scale .8s ease .4s infinite;border-radius:5px}@-webkit-keyframes scale{50%{height:25px}0%{height:5px}}@keyframes scale{50%{height:25px}0%{height:5px}}.notification-enter-active{-webkit-transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,margin .25s ease,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s;transition:all .3s ease .05s,transform .3s ease,margin .25s ease,clip-path 8s ease .8s,-webkit-transform .3s ease,-webkit-clip-path 8s ease .8s}.notification-leave-to{max-height:0!important;padding-top:0!important;padding-bottom:0!important;margin-top:0!important;margin-bottom:0!important;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;opacity:0!important}.notification-enter,.notification-leave-to{-webkit-clip-path:circle(0 at 80% 35%)!important;clip-path:circle(0 at 80% 35%)!important}.notification-enter{-webkit-transform:translate(25%);transform:translate(25%)}.notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(10%);transform:translate(10%)}.vs-notification-parent{position:fixed;right:0;bottom:0;z-index:200000;-webkit-transition:all 25s ease;transition:all 25s ease;padding:10px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-center,.vs-notification-parent--top-right{bottom:auto;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.vs-notification-parent--top-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--top-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--top-center .vs-notification--sticky:last-child{border-radius:0 0 20px 20px;margin-top:-10px}.vs-notification-parent--top-center .vs-notification{-webkit-clip-path:circle(120% at 50% 0);clip-path:circle(120% at 50% 0);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--top-center .vs-notification.vs-notification--border{border:3px solid transparent;border-top:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-center .notification-enter{-webkit-transform:translateY(-25%);transform:translateY(-25%);-webkit-clip-path:circle(0 at 50% 0)!important;clip-path:circle(0 at 50% 0)!important}.vs-notification-parent--top-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}.vs-notification-parent--bottom-center{left:50%;right:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}.vs-notification-parent--bottom-center .vs-notification--sticky{margin:3px 20px;border-radius:20px}.vs-notification-parent--bottom-center .vs-notification--sticky:last-child{border-radius:20px 20px 0 0;margin-bottom:-10px}.vs-notification-parent--bottom-center .vs-notification{-webkit-clip-path:circle(120% at 50% 100%);clip-path:circle(120% at 50% 100%);-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease,-webkit-clip-path .5s ease .1s}.vs-notification-parent--bottom-center .vs-notification.vs-notification--border{border:3px solid transparent;border-bottom:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-center .notification-enter{-webkit-transform:translateY(25%);transform:translateY(25%);-webkit-clip-path:circle(0 at 50% 100%)!important;clip-path:circle(0 at 50% 100%)!important}.vs-notification-parent--bottom-center .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translateY(10%);transform:translateY(10%)}.vs-notification-parent--top-left{bottom:auto;top:0;left:0;right:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.vs-notification-parent--top-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--top-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--top-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--top-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--top-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification-parent--bottom-left{left:0;right:auto}.vs-notification-parent--bottom-left .vs-notification--sticky{margin-left:0;border-radius:0 20px 20px 0}.vs-notification-parent--bottom-left .vs-notification{-webkit-clip-path:circle(145% at 0 50%);clip-path:circle(145% at 0 50%)}.vs-notification-parent--bottom-left .vs-notification.vs-notification--border{border:3px solid transparent;border-left:3px solid rgba(var(--vs-border),1)}.vs-notification-parent--bottom-left .notification-enter{-webkit-transform:translate(-25%);transform:translate(-25%);-webkit-clip-path:circle(0 at 20% 35%)!important;clip-path:circle(0 at 20% 35%)!important}.vs-notification-parent--bottom-left .notification-enter .vs-notification__content{opacity:0;-webkit-transform:translate(-10%);transform:translate(-10%)}.vs-notification{--vs-color:var(--vs-background);--vs-border:var(--vs-background);--vs-opacity:.6;position:relative;max-width:340px;width:100%;height:auto;border-radius:20px;-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,.05);-webkit-box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 10px 30px -5px rgba(0,0,0,.05);box-shadow:0 10px 30px -5px rgba(0,0,0,var(--vs-shadow-opacity));overflow:hidden;-webkit-clip-path:circle(145% at 100% 50%);clip-path:circle(145% at 100% 50%);background:#111214;background:rgba(var(--vs-color),1);color:#2c3e50;color:rgba(var(--vs-text),1);margin:3px 10px;-webkit-transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,max-height .25s ease,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s;transition:all .25s ease,transform .3s ease .1s,max-height .25s ease,clip-path .5s ease .1s,-webkit-transform .3s ease .1s,-webkit-clip-path .5s ease .1s}.vs-notification:hover:not(.vs-notification--flat){-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));-webkit-transform:translateY(3px);transform:translateY(3px)}.vs-notification--notPadding{padding:0!important}.vs-notification.vs-notification--icon{padding-left:50px!important}.vs-notification.vs-notification--loading{width:100px!important;max-height:100px!important;min-height:100px!important;padding:0!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification--width-auto{width:auto;max-width:none}.vs-notification--width-all{max-width:calc(100vw - 50px);width:calc(100vw - 50px)}.vs-notification--square{border-radius:0!important}.vs-notification--sticky{margin-right:0;margin-bottom:0;border-radius:20px 0 0 20px}.vs-notification--flat{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.05);-webkit-box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));box-shadow:0 0 0 0 rgba(0,0,0,.05);box-shadow:0 0 0 0 rgba(0,0,0,var(--vs-shadow-opacity));background:#fff;background:rgba(var(--vs-background),1);color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat:hover:after{background:rgba(17,18,20,.15);background:rgba(var(--vs-color),.15)}.vs-notification--flat .vs-notification__progress{background:#111214;background:rgba(var(--vs-color),1)}.vs-notification--flat .vs-notification__close{--vs-color:inherit}.vs-notification--flat .vs-notification__content{color:#111214!important;color:rgba(var(--vs-color),1)!important}.vs-notification--flat.vs-notification--border{border:0 solid transparent!important;border-right:3px solid rgba(var(--vs-border),1)!important}.vs-notification--flat:after{content:\"\";background:rgba(17,18,20,.1);background:rgba(var(--vs-color),.1);width:100%;height:100%;border-radius:inherit;position:absolute;top:0;left:0;z-index:-1;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification.vs-notification--onClick{cursor:pointer}.vs-notification.vs-notification--color:not(.vs-notification--flat){color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__progress{background:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__close{--vs-color:255,255,255}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:after{border:2px solid transparent;border-bottom-color:#fff}.vs-notification.vs-notification--color:not(.vs-notification--flat) .vs-notification__loading:before{border:2px solid transparent;border-bottom:2px dashed #fff}.vs-notification.vs-notification--border{border:3px solid transparent;border-right:3px solid rgba(var(--vs-border),1)}.vs-notification__progress{width:0;height:3px;background:#2c3e50;background:rgba(var(--vs-text),1);position:absolute;bottom:0;left:0;-webkit-transition:all .25s ease;transition:all .25s ease}.vs-notification__loading{width:50px;height:50px;border-radius:50%;position:absolute}.vs-notification__loading:after{border:2px solid #2c3e50;border:2px solid rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s ease infinite;animation:loadingNoti .8s ease infinite}.vs-notification__loading:after,.vs-notification__loading:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:100%;height:100%;top:0;content:\"\"}.vs-notification__loading:before{border:2px dashed #2c3e50;border:2px dashed rgba(var(--vs-text),1);border-radius:inherit;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid transparent;-webkit-animation:loadingNoti .8s linear infinite;animation:loadingNoti .8s linear infinite;opacity:.2}.vs-notification__close{--vs-color:var(--vs-text);position:absolute;border:0;background:transparent;top:2px;right:2px;-webkit-transform:scale(.75);transform:scale(.75);padding:0}.vs-notification__icon{position:absolute;top:calc(50% - 22px);background:transparent;width:45px;height:45px;left:2px;border-radius:0 35% 35% 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vs-notification__icon i{font-size:1.2rem}.vs-notification__content{position:relative;width:auto;height:auto;-webkit-transition:all .25s ease .2s;transition:all .25s ease .2s;opacity:1}.vs-notification__content__text{width:100%}.vs-notification__content__text p{margin:0;padding:0;font-size:.75rem;line-height:1rem}.vs-notification__content__header{width:100%;margin:0;padding:0 0 6px}.vs-notification__content__header h4{width:100%;margin:0;padding:0;font-size:.9rem}.darken .vs-notification--dark{color:#fff!important}.darken .vs-notification--dark .vs-notification__close{--vs-color:255,255,255!important}.darken .vs-notification--dark h4,.darken .vs-notification--dark p{color:#fff!important}@-webkit-keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingNoti{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes progressNoti{0%{width:0}to{width:100%}}@keyframes progressNoti{0%{width:0}to{width:100%}}@media (max-width:600px){.vs-notification{margin:3px 0!important;border-radius:0!important;width:100%!important;max-width:100%!important;min-width:100%!important}.vs-notification:hover{-webkit-transform:translate(0)!important;transform:translate(0)!important}.vs-notification:last-child{margin-bottom:0!important}.vs-notification-parent{padding:0;width:100%!important;max-width:100%!important}.vs-notification-parent .vs-notification--sticky{margin-bottom:0!important}.vs-notification-parent.vs-notification-parent--top-center .vs-notification:last-child{margin-bottom:3px;margin-top:0!important}}.vs-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.vs-col,.vs-row{width:100%;position:relative}.vs-col--w-1{width:8.33%}.vs-col--w-2{width:16.66%}.vs-col--w-3{width:25%}.vs-col--w-4{width:33.33%}.vs-col--w-5{width:41.66%}.vs-col--w-6{width:50%}.vs-col--w-7{width:58.33%}.vs-col--w-8{width:66.66%}.vs-col--w-9{width:75%}.vs-col--w-10{width:83.33%}.vs-col--w-11{width:91.66%}.vs-col--w-12{width:100%}.vs-col--offset-1{margin-left:8.33%}.vs-col--offset-2{margin-left:16.66%}.vs-col--offset-3{margin-left:25%}.vs-col--offset-4{margin-left:33.33%}.vs-col--offset-5{margin-left:41.66%}.vs-col--offset-6{margin-left:50%}.vs-col--offset-7{margin-left:58.33%}.vs-col--offset-8{margin-left:66.66%}.vs-col--offset-9{margin-left:75%}.vs-col--offset-10{margin-left:83.33%}.vs-col--offset-11{margin-left:91.66%}.vs-col--offset-12{margin-left:100%}.vs-col--lg-1{width:8.33%}.vs-col--lg-2{width:16.66%}.vs-col--lg-3{width:25%}.vs-col--lg-4{width:33.33%}.vs-col--lg-5{width:41.66%}.vs-col--lg-6{width:50%}.vs-col--lg-7{width:58.33%}.vs-col--lg-8{width:66.66%}.vs-col--lg-9{width:75%}.vs-col--lg-10{width:83.33%}.vs-col--lg-11{width:91.66%}.vs-col--lg-12{width:100%}@media (max-width:900px){.vs-col--sm-1{width:8.33%}.vs-col--sm-2{width:16.66%}.vs-col--sm-3{width:25%}.vs-col--sm-4{width:33.33%}.vs-col--sm-5{width:41.66%}.vs-col--sm-6{width:50%}.vs-col--sm-7{width:58.33%}.vs-col--sm-8{width:66.66%}.vs-col--sm-9{width:75%}.vs-col--sm-10{width:83.33%}.vs-col--sm-11{width:91.66%}.vs-col--sm-12{width:100%}}@media (max-width:600px){.vs-col--xs-1{width:8.33%}.vs-col--xs-2{width:16.66%}.vs-col--xs-3{width:25%}.vs-col--xs-4{width:33.33%}.vs-col--xs-5{width:41.66%}.vs-col--xs-6{width:50%}.vs-col--xs-7{width:58.33%}.vs-col--xs-8{width:66.66%}.vs-col--xs-9{width:75%}.vs-col--xs-10{width:83.33%}.vs-col--xs-11{width:91.66%}.vs-col--xs-12{width:100%}}:root{--vs-primary:25,91,255;--vs-warn:255,186,0;--vs-danger:255,71,87;--vs-success:70,201,58;--vs-dark:30,30,30;--vs-light:244,247,248;--vs-color:17,18,20;--vs-facebook:59,89,153;--vs-twitter:29,161,242;--vs-youtube:255,0,0;--vs-pinterest:189,8,28;--vs-linkedin:0,119,181;--vs-snapchat:255,252,0;--vs-whatsapp:37,211,102;--vs-tumblr:54,70,93;--vs-reddit:255,69,0;--vs-spotify:30,215,96;--vs-amazon:255,153,0;--vs-medium:2,184,117;--vs-vimeo:26,183,234;--vs-skype:0,175,240;--vs-dribbble:234,76,137;--vs-slack:74,21,75;--vs-yahoo:67,2,151;--vs-twitch:100,65,164;--vs-discord:114,137,218;--vs-telegram:0,136,204;--vs-google-plus:219,68,55;--vs-messenger:0,132,255;--vs-background:255,255,255;--vs-text:44,62,80;--vs-gray-1:249,252,253;--vs-gray-2:244,247,248;--vs-gray-3:240,243,244;--vs-gray-4:230,233,234}[class*=\"--default\"],[class*=\"--primary\"]{--vs-color:var(--vs-primary)}[class*=\"--danger\"]{--vs-color:var(--vs-danger)}[class*=\"--success\"]{--vs-color:var(--vs-success)}[class*=\"--dark\"]{--vs-color:var(--vs-dark)}[class*=\"--warn\"]{--vs-color:var(--vs-warn)}:root{--vs-shadow-opacity:.05;--vs-radius:20px;--vs-zindex-1:100000;--vs-zindex-2:99000;--vs-zindex-3:98000;--vs-zindex-4:97000;--vs-background-opacity:.2}[vs-theme=dark]{--vs-background:30,32,35;--vs-text:255,255,255;--vs-gray-1:24,25,28;--vs-gray-2:20,20,23;--vs-gray-3:15,16,19;--vs-gray-4:10,11,14;--vs-shadow-opacity:.3;--vs-dark:0,0,0;--vs-background-opacity:.6}[vs-theme=dark] .vs-pagination-content.vs-component-dark .vs-pagination__active{--vs-color:255,255,255;color:#f0f3f4;color:rgba(var(--vs-gray-3),1)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent{color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent:hover:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),.2)}[vs-theme=dark] .vs-button.vs-component-dark.vs-button--transparent.vs-button--active:before{background:rgba(17,18,20,.2);background:rgba(var(--vs-color),var(--vs-background-opacity))}[vs-theme=dark] .vs-ripple,[vs-theme=dark] .vs-ripple-content,[vs-theme=dark] .vs-ripple-invert{--vs-color:0,0,0}[vs-theme=dark] .vs-loading{--vs-background:0,0,0}[vs-theme=dark] .vs-input-parent--state-dark{--vs-dark:255,255,255!important}[vs-theme=dark] .vs-input-parent--state-dark .vs-input{background:#000!important}[vs-theme=dark] .vs-component-dark{--vs-color:0,0,0!important}[vs-theme=dark] .vs-component-dark .vs-avatar{color:#fff!important}[vs-theme=dark] .vs-component-dark.vs-alert{--vs-color:0,0,0!important;background:#111214!important;background:rgba(var(--vs-color),1)!important;color:#2c3e50!important;color:rgba(var(--vs-text),1)!important}button{cursor:pointer;outline:none}[disabled]{opacity:.6}input{outline:none}a,button,input,select,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}[class*=vs-]{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;list-style:none}.vs-ripple-content{--vs-color:inherit;width:100px;height:100px;position:absolute;width:100%;pointer-events:none;overflow:hidden;height:100%;top:0;right:0;border-radius:inherit;z-index:-1}.vs-ripple-content .vs-ripple{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background:radial-gradient(circle,rgba(17,18,20,.05),rgba(17,18,20,.6));background:radial-gradient(circle,rgba(var(--vs-color),.05),rgba(var(--vs-color),.6))}.vs-ripple-content .vs-ripple--solid{background:#111214;background:rgba(var(--vs-color),1);opacity:1}.vs-ripple-content .vs-ripple-invert{width:0;height:0;border-radius:50%;opacity:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .5s ease;transition:all .5s ease;background-image:radial-gradient(circle,rgba(17,18,20,.5),rgba(17,18,20,0));background-image:radial-gradient(circle,rgba(var(--vs-color),.5),rgba(var(--vs-color),0))}.vs-ripple-content .vs-ripple-cut-1{-webkit-transform:translate(-100%,-50%) skew(20deg);transform:translate(-100%,-50%) skew(20deg);background-image:-webkit-gradient(linear,right top,left top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(270deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-ripple-content .vs-ripple-cut-1,.vs-ripple-content .vs-ripple-cut-2{width:0;height:0;opacity:0;position:absolute;-webkit-transition:all .6s ease;transition:all .6s ease}.vs-ripple-content .vs-ripple-cut-2{-webkit-transform:translateY(-50%) skew(20deg);transform:translateY(-50%) skew(20deg);background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.25)),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,hsla(0,0%,100%,.25),hsla(0,0%,100%,0))}.vs-remove-transition *,.vs-remove-transition :after,.vs-remove-transition :before{-webkit-transition:all 0s!important;transition:all 0s!important}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(24);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['lapor'] = __webpack_require__(33);
middleware['lapor'] = middleware['lapor'].default || middleware['lapor'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(25);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(18);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(15);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(6);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _5d93439a = () => interopDefault(__webpack_require__.e(/* import() | pages/login */ 11).then(__webpack_require__.bind(null, 144)));

const _584473f3 = () => interopDefault(__webpack_require__.e(/* import() | pages/profile */ 12).then(__webpack_require__.bind(null, 145)));

const _042d29c9 = () => interopDefault(__webpack_require__.e(/* import() | pages/register */ 13).then(__webpack_require__.bind(null, 146)));

const _1a1fd202 = () => interopDefault(__webpack_require__.e(/* import() | pages/reset-password */ 14).then(__webpack_require__.bind(null, 147)));

const _01e115b0 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/beranda */ 1).then(__webpack_require__.bind(null, 148)));

const _8cffc880 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/berita */ 2).then(__webpack_require__.bind(null, 149)));

const _b2148136 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/informasi */ 3).then(__webpack_require__.bind(null, 150)));

const _a454b696 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/kegiatan */ 4).then(__webpack_require__.bind(null, 151)));

const _523afca6 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/lapor/index */ 6).then(__webpack_require__.bind(null, 152)));

const _28c6bd02 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/users */ 9).then(__webpack_require__.bind(null, 153)));

const _c47e78f4 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/lapor/detail */ 5).then(__webpack_require__.bind(null, 154)));

const _0a09d66a = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/master/pemda */ 7).then(__webpack_require__.bind(null, 155)));

const _0d027c65 = () => interopDefault(__webpack_require__.e(/* import() | pages/admin/master/setting */ 8).then(__webpack_require__.bind(null, 156)));

const _078ebb1c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 10).then(__webpack_require__.bind(null, 157))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/login",
    component: _5d93439a,
    name: "login"
  }, {
    path: "/profile",
    component: _584473f3,
    name: "profile"
  }, {
    path: "/register",
    component: _042d29c9,
    name: "register"
  }, {
    path: "/reset-password",
    component: _1a1fd202,
    name: "reset-password"
  }, {
    path: "/admin/beranda",
    component: _01e115b0,
    name: "admin-beranda"
  }, {
    path: "/admin/berita",
    component: _8cffc880,
    name: "admin-berita"
  }, {
    path: "/admin/informasi",
    component: _b2148136,
    name: "admin-informasi"
  }, {
    path: "/admin/kegiatan",
    component: _a454b696,
    name: "admin-kegiatan"
  }, {
    path: "/admin/lapor",
    component: _523afca6,
    name: "admin-lapor"
  }, {
    path: "/admin/users",
    component: _28c6bd02,
    name: "admin-users"
  }, {
    path: "/admin/lapor/detail",
    component: _c47e78f4,
    name: "admin-lapor-detail"
  }, {
    path: "/admin/master/pemda",
    component: _0a09d66a,
    name: "admin-master-pemda"
  }, {
    path: "/admin/master/setting",
    component: _0d027c65,
    name: "admin-master-setting"
  }, {
    path: "/",
    component: _078ebb1c,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d415aeb6"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "63a49099"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./static/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css
var all_min = __webpack_require__(38);

// EXTERNAL MODULE: ./static/assets/vendor/nucleo/css/nucleo.css
var nucleo = __webpack_require__(55);

// EXTERNAL MODULE: ./static/assets/css/argon.min.css
var argon_min = __webpack_require__(62);

// EXTERNAL MODULE: ./static/assets/scss/jmli.scss
var jmli = __webpack_require__(64);

// EXTERNAL MODULE: ./static/assets/scss/ckm.styl
var ckm = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/boxicons/css/boxicons.min.css
var boxicons_min = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/admin.vue?vue&type=template&id=3390e85c&scoped=true&
var adminvue_type_template_id_3390e85c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'g-sidenav-show': _vm.$store.state.drawer.drawer, 'g-sidenav-pinned': _vm.$store.state.drawer.drawer}},[_c('sidebar'),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"panel\" class=\"main-content\" data-v-3390e85c>","</div>",[_vm._ssrNode("<nav class=\"navbar navbar-top navbar-expand navbar-dark bg-primary\" data-v-3390e85c><div class=\"container-fluid\" data-v-3390e85c><div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-3390e85c><ul class=\"navbar-nav align-items-center  ml-md-auto \" data-v-3390e85c><li class=\"nav-item d-xl-none\" data-v-3390e85c><div data-target=\"#sidenav-main\" class=\"pr-3 sidenav-toggler2 sidenav-toggler-dark\" style=\"cursor: pointer\" data-v-3390e85c><div class=\"sidenav-toggler-inner\" data-v-3390e85c><i class=\"sidenav-toggler-line\" data-v-3390e85c></i> <i class=\"sidenav-toggler-line\" data-v-3390e85c></i> <i class=\"sidenav-toggler-line\" data-v-3390e85c></i></div></div></li> <li class=\"nav-item d-md-none\" data-v-3390e85c><h3 style=\"color: #fff; font-weight: bold; margin-top:10px\" data-v-3390e85c>SIMPUL KENDALI</h3></li></ul> <ul class=\"navbar-nav align-items-center  ml-auto ml-md-0 \" data-v-3390e85c><li class=\"nav-item dropdown\" data-v-3390e85c><a href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link pr-0\" data-v-3390e85c><div class=\"media align-items-center\" data-v-3390e85c><div class=\"avatar avatar-sm rounded-circle\""+(_vm._ssrStyle(null,'background: #f3f3f3 url(' + _vm.$auth.user.foto_url + ') no-repeat top center / cover; width:25px; height:25px', null))+" data-v-3390e85c></div> <div class=\"media-body  ml-2  d-none d-lg-block\" data-v-3390e85c><span class=\"mb-0 text-sm  font-weight-bold\" data-v-3390e85c>"+_vm._ssrEscape(_vm._s(_vm.user.nama)+" ")+"<i class=\"fas fa-angle-down\" style=\"margin-left: 5px\" data-v-3390e85c></i></span></div></div></a> <div class=\"dropdown-menu dropdown-menu-right\" data-v-3390e85c><a class=\"dropdown-item text-primary\" style=\"cursor:pointer\" data-v-3390e85c><i class=\"ni ni-single-02\" data-v-3390e85c></i> <span data-v-3390e85c>Profile</span></a> <a class=\"dropdown-item text-primary\" style=\"cursor:pointer\" data-v-3390e85c><i class=\"ni ni-user-run\" data-v-3390e85c></i> <span data-v-3390e85c>Logout</span></a></div></li></ul></div></div></nav> "),_vm._ssrNode("<div style=\"min-height: 600px\" data-v-3390e85c>","</div>",[_c('nuxt')],1),_vm._ssrNode(" <footer class=\"footer pt-20\" data-v-3390e85c><div class=\"row align-items-center justify-content-lg-between\" data-v-3390e85c><div class=\"col-lg-6\" data-v-3390e85c><div class=\"copyright text-center  text-lg-left  text-muted\" data-v-3390e85c>\n            © 2020 <a href=\"#\" class=\"font-weight-bold ml-1 text-primary\" data-v-3390e85c>\n              Badan Pembinaan Ideologi Pancasila</a></div></div></div></footer>")],2)],2)}
var adminvue_type_template_id_3390e85c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/admin.vue?vue&type=template&id=3390e85c&scoped=true&

// EXTERNAL MODULE: ./components/Sidebar.vue + 5 modules
var Sidebar = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/admin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  middleware: 'auth',
  components: {
    'sidebar': Sidebar["default"]
  },

  data() {
    return {
      showSideBar: false,
      collapse: true,
      user: {
        nama: '',
        photo_url: ''
      }
    };
  },

  mounted() {
    window.onresize = () => {
      this.changeDrawer();
    };

    window.onload = () => {
      this.changeDrawer();
    };
  },

  methods: {
    changeDrawer() {
      if (window.innerWidth <= 1200) {
        this.$store.commit('drawer/changeMode', 'mobile');
      } else {
        this.$store.commit('drawer/changeMode', 'web');
      }
    },

    showMenu() {
      this.showSidebar = !this.showSidebar;
      console.log(this.showSidebar);
    },

    ...Object(external_vuex_["mapMutations"])({
      toggle: "drawer/toggle"
    }),

    logout() {
      this.$auth.logout();
    }

  }
});
// CONCATENATED MODULE: ./layouts/admin.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/admin.vue



function admin_injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var admin_component = Object(componentNormalizer["a" /* default */])(
  layouts_adminvue_type_script_lang_js_,
  adminvue_type_template_id_3390e85c_scoped_true_render,
  adminvue_type_template_id_3390e85c_scoped_true_staticRenderFns,
  false,
  admin_injectStyles,
  "3390e85c",
  "853c9ef0"
  
)

/* harmony default export */ var admin = (admin_component.exports);

/* nuxt-component-imports */
installComponents(admin_component, {Sidebar: __webpack_require__(17).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/auth.vue?vue&type=template&id=26fcf31e&
var authvue_type_template_id_26fcf31e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-1\"></div> <div class=\"col-md-6 bg-login\"></div> "),_vm._ssrNode("<div class=\"col-md-5\">","</div>",[_vm._ssrNode("<div style=\"text-align: center\">","</div>",[_vm._ssrNode("<div style=\"width: 80%; margin-left: auto; margin-right: auto; margin-top: 15%\">","</div>",[_c('nuxt')],1)])])],2)])}
var authvue_type_template_id_26fcf31e_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/auth.vue?vue&type=template&id=26fcf31e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/auth.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var authvue_type_script_lang_js_ = ({
  head: {
    bodyAttrs: {
      class: 'hideovy bg-putih'
    }
  },

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./layouts/auth.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_authvue_type_script_lang_js_ = (authvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/auth.vue



function auth_injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var auth_component = Object(componentNormalizer["a" /* default */])(
  layouts_authvue_type_script_lang_js_,
  authvue_type_template_id_26fcf31e_render,
  authvue_type_template_id_26fcf31e_staticRenderFns,
  false,
  auth_injectStyles,
  null,
  "83100c02"
  
)

/* harmony default export */ var auth = (auth_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=97e65fba&
var defaultvue_type_template_id_97e65fba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Nuxt')],1)}
var defaultvue_type_template_id_97e65fba_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=97e65fba&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_97e65fba_render,
  defaultvue_type_template_id_97e65fba_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "2da2b63a"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/register.vue?vue&type=template&id=b39f4428&
var registervue_type_template_id_b39f4428_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 bg-login\"></div> "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div style=\"text-align: center\">","</div>",[_vm._ssrNode("<div style=\"margin-left: auto; margin-right: auto;\">","</div>",[_c('nuxt')],1)])])],2)])}
var registervue_type_template_id_b39f4428_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/register.vue?vue&type=template&id=b39f4428&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var registervue_type_script_lang_js_ = ({
  head: {
    bodyAttrs: {
      class: 'hideovy bg-putih'
    }
  },

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./layouts/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/register.vue



function register_injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var register_component = Object(componentNormalizer["a" /* default */])(
  layouts_registervue_type_script_lang_js_,
  registervue_type_template_id_b39f4428_render,
  registervue_type_template_id_b39f4428_staticRenderFns,
  false,
  register_injectStyles,
  null,
  "4a4c5dfa"
  
)

/* harmony default export */ var register = (register_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js














const layouts = {
  "_admin": sanitizeComponent(admin),
  "_auth": sanitizeComponent(auth),
  "_default": sanitizeComponent(layouts_default),
  "_register": sanitizeComponent(register)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(85), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(86), 'berita.js');
  resolveStoreModules(__webpack_require__(87), 'drawer.js');
  resolveStoreModules(__webpack_require__(88), 'goverment.js');
  resolveStoreModules(__webpack_require__(89), 'informasi.js');
  resolveStoreModules(__webpack_require__(90), 'kegiatan.js');
  resolveStoreModules(__webpack_require__(91), 'lapor.js');
  resolveStoreModules(__webpack_require__(92), 'service.js');
  resolveStoreModules(__webpack_require__(93), 'setting.js');
  resolveStoreModules(__webpack_require__(94), 'user.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(19);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./.nuxt/moment.js

/* harmony default export */ var moment = ((ctx, inject) => {
  ctx.$moment = external_moment_default.a;
  inject('moment', external_moment_default.a);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(26);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://simpulkendali-api.ckmindramayu.com'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {},
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "element-ui/lib/locale/lang/en"
var en_ = __webpack_require__(27);
var en_default = /*#__PURE__*/__webpack_require__.n(en_);

// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(28);
var external_element_ui_default = /*#__PURE__*/__webpack_require__.n(external_element_ui_);

// CONCATENATED MODULE: ./.nuxt/templates.plugin.3065ebce.js



external_vue_default.a.use(external_element_ui_default.a, {
  locale: en_default.a
});
// CONCATENATED MODULE: ./plugins/helper.js

external_vue_default.a.mixin({
  data() {
    return {
      globalLoader: false
    };
  },

  methods: {
    humanize(str) {
      let frags = str.split('_');

      for (let i = 0; i < frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
      }

      return frags.join(' ');
    },

    showErrorField(data) {
      Object.keys(data).forEach((v, k) => {
        setTimeout(() => {
          // this.$notify.error({
          //     title: this.humanize(v),
          //     message: data[v]
          // });
          this.openNotification('top-right', 'danger', `<i class='bx bxs-error-circle'></i>`, this.humanize(v), data[v]);
        }, 500);
      });
    },

    isEmptyObj(obj) {
      return !Object.keys(obj).length;
    },

    changeDateFormat(string) {
      //dd-mm-yyyy
      let arr = string.toString().split('-'); //0,1,2

      if (arr.length > 2) {
        return arr[2] + '-' + arr[1] + '-' + arr[0];
      }

      return null;
    },

    changeDateTimeFormat(string) {
      let arr = string.toString().split(' ');

      if (arr.length > 0) {
        return this.changeDateFormat(arr[0]) + " " + arr[1];
      }

      return null;
    },

    numberWithCommas(x) {
      return x.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    currentDate() {
      let today = new Date();
      let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      return date;
    },

    openNotification(position = null, color, icon, title, message) {
      const noti = this.$vs.notification({
        icon,
        color,
        position,
        title: title,
        text: message
      });
    },

    truncateString(str, num) {
      if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    },

    downloadFile(url) {
      this.globalLoader = true;
      this.$axios.get(url, {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        let filename = response.headers['content-disposition'].replace("attachment; filename=", '');
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename); //or any other extension

        document.body.appendChild(link);
        link.click();
      }).catch(error => console.log(error)).finally(() => {
        this.globalLoader = false;
      });
    }

  }
});
// EXTERNAL MODULE: external "vuesax"
var external_vuesax_ = __webpack_require__(29);
var external_vuesax_default = /*#__PURE__*/__webpack_require__.n(external_vuesax_);

// EXTERNAL MODULE: ./node_modules/vuesax/dist/vuesax.css
var vuesax = __webpack_require__(95);

// CONCATENATED MODULE: ./plugins/vuesax.js


 //Vuesax styles

external_vue_default.a.use(external_vuesax_default.a, {// options here
});
// EXTERNAL MODULE: external "ex-table-column"
var external_ex_table_column_ = __webpack_require__(20);
var external_ex_table_column_default = /*#__PURE__*/__webpack_require__.n(external_ex_table_column_);

// CONCATENATED MODULE: ./plugins/extablecolumn.js


external_vue_default.a.component(external_ex_table_column_default.a.name, external_ex_table_column_default.a);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(16);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(21);

// CONCATENATED MODULE: ./.nuxt/auth/utilities.js
const isUnset = o => typeof o === 'undefined' || o === null;
const isSet = o => !isUnset(o);
const isSameURL = (a, b) => a.split('?')[0].replace(/\/+$/, '') === b.split('?')[0].replace(/\/+$/, '');
const isRelativeURL = u => u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u);
const parseQuery = queryString => {
  const query = {};
  const pairs = queryString.split('&');

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
};
const encodeQuery = queryObject => {
  return Object.entries(queryObject).filter(([key, value]) => typeof value !== 'undefined').map(([key, value]) => encodeURIComponent(key) + (value != null ? '=' + encodeURIComponent(value) : '')).join('&');
};
const routeOption = (route, key, value) => {
  return route.matched.some(m => {
    if (false) {} else {
      // SSR
      return Object.values(m.components).some(component => Object.values(component._Ctor).some(ctor => ctor.options && ctor.options[key] === value));
    }
  });
};
const utilities_getMatchedComponents = (route, matches = false) => {
  return [].concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
};
function normalizePath(path = '') {
  // Remove query string
  let result = path.split('?')[0]; // Remove redundant / from the end of path

  if (result.charAt(result.length - 1) === '/') {
    result = result.slice(0, -1);
  }

  return result;
}
function encodeValue(val) {
  if (typeof val === 'string') {
    return val;
  }

  return JSON.stringify(val);
}
function decodeValue(val) {
  // Try to parse as json
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch (_) {}
  } // Return as is


  return val;
}
/**
 * Get property defined by dot notation in string.
 * Based on  https://github.com/dy/dotprop (MIT)
 *
 * @param  {Object} holder   Target object where to look property up
 * @param  {string} propName Dot notation, like 'this.a.b.c'
 * @return {*}          A property value
 */

function getProp(holder, propName) {
  if (!propName || !holder) {
    return holder;
  }

  if (propName in holder) {
    return holder[propName];
  }

  const propParts = Array.isArray(propName) ? propName : (propName + '').split('.');
  let result = holder;

  while (propParts.length && result) {
    result = result[propParts.shift()];
  }

  return result;
}
// CONCATENATED MODULE: ./.nuxt/auth/storage.js



class storage_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;

    this._initState();
  } // ------------------------------------
  // Universal
  // ------------------------------------


  setUniversal(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeUniversal(key);
    } // Local state


    this.setState(key, value); // Cookies

    this.setCookie(key, value); // Local Storage

    this.setLocalStorage(key, value);
    return value;
  }

  getUniversal(key) {
    // Local state
    let value = this.getState(key); // Cookies

    if (isUnset(value)) {
      value = this.getCookie(key);
    } // Local Storage


    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }

    return value;
  }

  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);

    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }

    if (isSet(value)) {
      this.setUniversal(key, value);
    }

    return value;
  }

  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  } // ------------------------------------
  // Local state (reactive)
  // ------------------------------------


  _initState() {
    // Private state is suitable to keep information not being exposed to Vuex store
    // This helps prevent stealing token from SSR response HTML
    external_vue_default.a.set(this, '_state', {}); // Use vuex for local state's if possible

    this._useVuex = this.options.vuex && this.ctx.store;

    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_default.a.set(state, payload.key, payload.value);
          }

        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_default.a.set(this, 'state', {});
    }
  }

  setState(key, value) {
    if (key[0] === '_') {
      external_vue_default.a.set(this._state, key, value);
    } else {
      if (this._useVuex) {
        this.ctx.store.commit(this.options.vuex.namespace + '/SET', {
          key,
          value
        });
      } else {
        external_vue_default.a.set(this.state, key, value);
      }
    }

    return value;
  }

  getState(key) {
    if (key[0] !== '_') {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }

  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch(state => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }

  removeState(key) {
    this.setState(key, undefined);
  } // ------------------------------------
  // Local storage
  // ------------------------------------


  setLocalStorage(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }

    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }

    return value;
  }

  getLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }

  removeLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    localStorage.removeItem(_key);
  } // ------------------------------------
  // Cookies
  // ------------------------------------


  getCookies() {
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return Object(external_cookie_["parse"])(cookieStr || '') || {};
  }

  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const _options = Object.assign({}, this.options.cookie.options, options);

    const _value = encodeValue(value); // Unset null, undefined


    if (isUnset(value)) {
      _options.maxAge = -1;
    } // Accept expires as a number for js-cookie compatiblity


    if (typeof _options.expires === 'number') {
      _options.expires = new Date(new Date() * 1 + _options.expires * 864e+5);
    }

    const serializedCookie = Object(external_cookie_["serialize"])(_key, _value, _options);

    if (false) {} else if ( true && this.ctx.res) {
      // Send Set-Cookie header from server side
      const prevCookies = this.ctx.res.getHeader('Set-Cookie');
      this.ctx.res.setHeader('Set-Cookie', [].concat(prevCookies, serializedCookie).filter(v => v));
    }

    return value;
  }

  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : undefined;
    return decodeValue(value);
  }

  removeCookie(key, options) {
    this.setCookie(key, undefined, options);
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/auth.js


class auth_Auth {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options; // Strategies

    this.strategies = {}; // Error listeners

    this._errorListeners = []; // Redirect listeners

    this._redirectListeners = []; // Storage & State

    options.initialState = {
      user: null,
      loggedIn: false
    };
    const storage = new storage_Storage(ctx, options);
    this.$storage = storage;
    this.$state = storage.state;
  }

  async init() {
    // Reset on error
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== 'function' || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    } // Restore strategy


    this.$storage.syncUniversal('strategy', this.options.defaultStrategy); // Set default strategy if current one is invalid

    if (!this.strategy) {
      this.$storage.setUniversal('strategy', this.options.defaultStrategy); // Give up if still invalid

      if (!this.strategy) {
        return Promise.resolve();
      }
    }

    try {
      // Call mounted for active strategy on initial load
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      // Watch for loggedIn changes only in client side
      if (false) {}
    }
  } // Backward compatibility


  get state() {
    if (!this._state_warn_shown) {
      this._state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn');
    }

    return this.$state;
  }

  getState(key) {
    if (!this._get_state_warn_shown) {
      this._get_state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn');
    }

    return this.$storage.getState(key);
  } // ---------------------------------------------------------------
  // Strategy and Scheme
  // ---------------------------------------------------------------


  get strategy() {
    return this.strategies[this.$state.strategy];
  }

  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }

  setStrategy(name) {
    if (name === this.$storage.getUniversal('strategy')) {
      return Promise.resolve();
    } // Set strategy


    this.$storage.setUniversal('strategy', name); // Call mounted hook on active strategy

    return this.mounted();
  }

  mounted() {
    if (!this.strategy.mounted) {
      return this.fetchUserOnce();
    }

    return Promise.resolve(this.strategy.mounted(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'mounted'
      });
      return Promise.reject(error);
    });
  }

  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }

  login() {
    if (!this.strategy.login) {
      return Promise.resolve();
    }

    return this.wrapLogin(this.strategy.login(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'login'
      });
      return Promise.reject(error);
    });
  }

  fetchUser() {
    if (!this.strategy.fetchUser) {
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.fetchUser(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'fetchUser'
      });
      return Promise.reject(error);
    });
  }

  logout() {
    if (!this.strategy.logout) {
      this.reset();
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.logout(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'logout'
      });
      return Promise.reject(error);
    });
  }

  setUserToken(token) {
    if (!this.strategy.setUserToken) {
      this.setToken(this.strategy.name, token);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.setUserToken(token)).catch(error => {
      this.callOnError(error, {
        method: 'setUserToken'
      });
      return Promise.reject(error);
    });
  }

  reset() {
    if (!this.strategy.reset) {
      this.setUser(false);
      this.setToken(this.$state.strategy, false);
      this.setRefreshToken(this.$state.strategy, false);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.reset(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'reset'
      });
      return Promise.reject(error);
    });
  } // ---------------------------------------------------------------
  // Token helpers
  // ---------------------------------------------------------------


  getToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setToken(strategy, token) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.setUniversal(_key, token);
  }

  syncToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // Refresh token helpers
  // ---------------------------------------------------------------


  getRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setRefreshToken(strategy, refreshToken) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.setUniversal(_key, refreshToken);
  }

  syncRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // User helpers
  // ---------------------------------------------------------------


  get user() {
    return this.$state.user;
  }

  get loggedIn() {
    return this.$state.loggedIn;
  }

  fetchUserOnce() {
    if (!this.$state.user) {
      return this.fetchUser(...arguments);
    }

    return Promise.resolve();
  }

  setUser(user) {
    this.$storage.setState('user', user);
    this.$storage.setState('loggedIn', Boolean(user));
  } // ---------------------------------------------------------------
  // Utils
  // ---------------------------------------------------------------


  get busy() {
    return this.$storage.getState('busy');
  }

  request(endpoint, defaults, withResponse) {
    const _endpoint = typeof defaults === 'object' ? Object.assign({}, defaults, endpoint) : endpoint;

    if (!this.ctx.app.$axios) {
      // eslint-disable-next-line no-console
      console.error('[AUTH] add the @nuxtjs/axios module to nuxt.config file');
      return;
    }

    return this.ctx.app.$axios.request(_endpoint).then(response => {
      const result = _endpoint.propertyName ? getProp(response.data, _endpoint.propertyName) : response.data;

      if (withResponse) {
        return {
          response,
          result
        };
      } else {
        return result;
      }
    }).catch(error => {
      // Call all error handlers
      this.callOnError(error, {
        method: 'request'
      }); // Throw error

      return Promise.reject(error);
    });
  }

  requestWith(strategy, endpoint, defaults, withResponse) {
    const token = this.getToken(strategy);

    const _endpoint = Object.assign({}, defaults, endpoint);

    const tokenName = this.strategies[strategy].options.tokenName || 'Authorization';

    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }

    if (!_endpoint.headers[tokenName] && isSet(token) && token) {
      _endpoint.headers[tokenName] = token;
    }

    return this.request(_endpoint, false, withResponse);
  }

  wrapLogin(promise) {
    this.$storage.setState('busy', true);
    this.error = null;
    return Promise.resolve(promise).then(response => {
      this.$storage.setState('busy', false);
      return response;
    }).catch(error => {
      this.$storage.setState('busy', false);
      return Promise.reject(error);
    });
  }

  onError(listener) {
    this._errorListeners.push(listener);
  }

  callOnError(error, payload = {}) {
    this.error = error;

    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }

  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }

    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];

    if (!to) {
      return;
    } // Apply rewrites


    if (this.options.rewriteRedirects) {
      if (name === 'login' && isRelativeURL(from) && !isSameURL(to, from)) {
        this.$storage.setUniversal('redirect', from);
      }

      if (name === 'home') {
        const redirect = this.$storage.getUniversal('redirect');
        this.$storage.setUniversal('redirect', null);

        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    } // Call onRedirect hook


    to = this.callOnRedirect(to, from) || to; // Prevent infinity redirects

    if (isSameURL(to, from)) {
      return;
    }

    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }

  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }

  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }

    return to;
  }

  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);

    if (!userScopes) {
      return false;
    }

    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }

    return Boolean(getProp(userScopes, scope));
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/middleware.js



_nuxt_middleware.auth = function (ctx) {
  // Disable middleware if options: { auth: false } is set on the route
  if (routeOption(ctx.route, 'auth', false)) {
    return;
  } // Disable middleware if no route was matched to allow 404/error page


  const matches = [];
  const Components = utilities_getMatchedComponents(ctx.route, matches);

  if (!Components.length) {
    return;
  }

  const {
    login,
    callback
  } = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, 'auth', 'guest');

  const insidePage = page => normalizePath(ctx.route.path) === normalizePath(page);

  if (ctx.$auth.$state.loggedIn) {
    // -- Authorized --
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect('home');
    }
  } else {
    // -- Guest --
    // (Those passing `callback` at runtime need to mark their callback component
    // with `auth: false` to avoid an unnecessary redirect from callback to login)
    if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
      ctx.$auth.redirect('login');
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/auth/schemes/local.js
class LocalScheme {
  constructor(auth, options) {
    this.$auth = auth;
    this.name = options._name;
    this.options = Object.assign({}, DEFAULTS, options);
  }

  _setToken(token) {
    if (this.options.globalToken) {
      // Set Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, token);
    }
  }

  _clearToken() {
    if (this.options.globalToken) {
      // Clear Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, false);
    }
  }

  mounted() {
    if (this.options.tokenRequired) {
      const token = this.$auth.syncToken(this.name);

      this._setToken(token);
    }

    return this.$auth.fetchUserOnce();
  }

  async login(endpoint) {
    if (!this.options.endpoints.login) {
      return;
    } // Ditch any leftover local tokens before attempting to log in


    await this.$auth.reset();
    const {
      response,
      result
    } = await this.$auth.request(endpoint, this.options.endpoints.login, true);

    if (this.options.tokenRequired) {
      const token = this.options.tokenType ? this.options.tokenType + ' ' + result : result;
      this.$auth.setToken(this.name, token);

      this._setToken(token);
    }

    if (this.options.autoFetchUser) {
      await this.fetchUser();
    }

    return response;
  }

  async setUserToken(tokenValue) {
    const token = this.options.tokenType ? this.options.tokenType + ' ' + tokenValue : tokenValue;
    this.$auth.setToken(this.name, token);

    this._setToken(token);

    return this.fetchUser();
  }

  async fetchUser(endpoint) {
    // Token is required but not available
    if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
      return;
    } // User endpoint is disabled.


    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return;
    } // Try to fetch user and then set


    const user = await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user);
    this.$auth.setUser(user);
  }

  async logout(endpoint) {
    // Only connect to logout endpoint if it's configured
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {});
    } // But reset regardless


    return this.$auth.reset();
  }

  async reset() {
    if (this.options.tokenRequired) {
      this._clearToken();
    }

    this.$auth.setUser(false);
    this.$auth.setToken(this.name, false);
    this.$auth.setRefreshToken(this.name, false);
    return Promise.resolve();
  }

}
const DEFAULTS = {
  tokenRequired: true,
  tokenType: 'Bearer',
  globalToken: true,
  tokenName: 'Authorization',
  autoFetchUser: true
};
// CONCATENATED MODULE: ./.nuxt/auth/plugin.js

 // Active schemes


/* harmony default export */ var auth_plugin = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/login",
      "logout": "/login",
      "home": "/",
      "callback": "/",
      "user": "/profile"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/"
      }
    },
    "localStorage": {
      "prefix": "auth."
    },
    "token": {
      "prefix": "_token."
    },
    "refresh_token": {
      "prefix": "_refresh_token."
    },
    "defaultStrategy": "local",
    "busy": false,
    "loggedIn": true
  }; // Create a new Auth instance

  const $auth = new auth_Auth(ctx, options); // Register strategies
  // local

  $auth.registerStrategy('local', new LocalScheme($auth, {
    "endpoints": {
      "login": {
        "url": "/login",
        "method": "post",
        "propertyName": "data.token"
      },
      "logout": false,
      "user": {
        "url": "/user",
        "method": "get",
        "propertyName": "data"
      }
    },
    "tokenRequired": true,
    "tokenType": "Bearer",
    "_name": "local"
  })); // Inject it to nuxt context as $auth

  inject('auth', $auth);
  ctx.$auth = $auth; // Initialize auth

  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\moment.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: .\\templates.plugin.3065ebce.js (mode: 'all')

 // Source: ..\\plugins\\helper (mode: 'all')

 // Source: ..\\plugins\\vuesax (mode: 'all')

 // Source: ..\\plugins\\extablecolumn (mode: 'all')

 // Source: ..\\plugins\\swal (mode: 'client')

 // Source: ..\\plugins\\vue2editor (mode: 'client')

 // Source: ..\\plugins\\chart (mode: 'client')

 // Source: .\\auth\\plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "SIMPUL KENDALI - BPIP",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "stylesheet",
        "href": "\u002Fassets\u002Fvendor\u002Felement-ui\u002Findex.css"
      }, {
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Flogo-simpulkendali.png"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fmaxst.icons8.com\u002Fvue-static\u002Flandings\u002Fline-awesome\u002Fline-awesome\u002F1.3.0\u002Fcss\u002Fline-awesome.min.css"
      }],
      "script": [{
        "src": "\u002Fassets\u002Fvendor\u002Fjquery\u002Fdist\u002Fjquery.min.js"
      }, {
        "src": "\u002Fassets\u002Fvendor\u002Fbootstrap\u002Fdist\u002Fjs\u002Fbootstrap.bundle.min.js"
      }, {
        "src": "\u002Fassets\u002Fvendor\u002Fjs-cookie\u002Fjs.cookie.js"
      }, {
        "src": "\u002Fassets\u002Fvendor\u002Fjquery.scrollbar\u002Fjquery.scrollbar.min.js"
      }, {
        "src": "\u002Fassets\u002Fvendor\u002Fjquery-scroll-lock\u002Fdist\u002Fjquery-scrollLock.min.js"
      }, {
        "src": "\u002Fassets\u002Fvendor\u002Fchart.js\u002Fdist\u002FChart.min.js"
      }, {
        "src": "\u002Fassets\u002Fvendor\u002Fchart.js\u002Fdist\u002FChart.extension.js"
      }, {
        "src": "\u002Fassets\u002Fjs\u002Fargon.min001.js"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof moment === 'function') {
    await moment(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/templates.plugin.3065ebce.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/templates.plugin.3065ebce.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/helper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/helper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vuesax.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vuesax.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/extablecolumn.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/extablecolumn.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (false) {}

  if (typeof auth_plugin === 'function') {
    await auth_plugin(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map