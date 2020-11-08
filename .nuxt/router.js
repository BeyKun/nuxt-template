import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d93439a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _584473f3 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _042d29c9 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _1a1fd202 = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _01e115b0 = () => interopDefault(import('..\\pages\\admin\\beranda.vue' /* webpackChunkName: "pages/admin/beranda" */))
const _8cffc880 = () => interopDefault(import('..\\pages\\admin\\berita.vue' /* webpackChunkName: "pages/admin/berita" */))
const _b2148136 = () => interopDefault(import('..\\pages\\admin\\informasi.vue' /* webpackChunkName: "pages/admin/informasi" */))
const _a454b696 = () => interopDefault(import('..\\pages\\admin\\kegiatan.vue' /* webpackChunkName: "pages/admin/kegiatan" */))
const _523afca6 = () => interopDefault(import('..\\pages\\admin\\lapor\\index.vue' /* webpackChunkName: "pages/admin/lapor/index" */))
const _28c6bd02 = () => interopDefault(import('..\\pages\\admin\\users.vue' /* webpackChunkName: "pages/admin/users" */))
const _c47e78f4 = () => interopDefault(import('..\\pages\\admin\\lapor\\detail.vue' /* webpackChunkName: "pages/admin/lapor/detail" */))
const _0a09d66a = () => interopDefault(import('..\\pages\\admin\\master\\pemda.vue' /* webpackChunkName: "pages/admin/master/pemda" */))
const _0d027c65 = () => interopDefault(import('..\\pages\\admin\\master\\setting.vue' /* webpackChunkName: "pages/admin/master/setting" */))
const _078ebb1c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

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
}

export function createRouter () {
  return new Router(routerOptions)
}
