import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71172850 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f9c9aa60 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _342d4e8c = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _62b744fc = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _44d5479a = () => interopDefault(import('..\\pages\\admin\\beranda.vue' /* webpackChunkName: "pages/admin/beranda" */))
const _44b778dd = () => interopDefault(import('..\\pages\\admin\\berita.vue' /* webpackChunkName: "pages/admin/berita" */))
const _66b27128 = () => interopDefault(import('..\\pages\\admin\\informasi.vue' /* webpackChunkName: "pages/admin/informasi" */))
const _48aa2e92 = () => interopDefault(import('..\\pages\\admin\\kegiatan.vue' /* webpackChunkName: "pages/admin/kegiatan" */))
const _7e74d50a = () => interopDefault(import('..\\pages\\admin\\lapor\\index.vue' /* webpackChunkName: "pages/admin/lapor/index" */))
const _21a6acc2 = () => interopDefault(import('..\\pages\\admin\\users.vue' /* webpackChunkName: "pages/admin/users" */))
const _2f0e486e = () => interopDefault(import('..\\pages\\admin\\lapor\\detail.vue' /* webpackChunkName: "pages/admin/lapor/detail" */))
const _54c1eead = () => interopDefault(import('..\\pages\\admin\\master\\pemda.vue' /* webpackChunkName: "pages/admin/master/pemda" */))
const _ebd4e030 = () => interopDefault(import('..\\pages\\admin\\master\\setting.vue' /* webpackChunkName: "pages/admin/master/setting" */))
const _b120f58e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/simpulkendali/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _71172850,
    name: "login"
  }, {
    path: "/profile",
    component: _f9c9aa60,
    name: "profile"
  }, {
    path: "/register",
    component: _342d4e8c,
    name: "register"
  }, {
    path: "/reset-password",
    component: _62b744fc,
    name: "reset-password"
  }, {
    path: "/admin/beranda",
    component: _44d5479a,
    name: "admin-beranda"
  }, {
    path: "/admin/berita",
    component: _44b778dd,
    name: "admin-berita"
  }, {
    path: "/admin/informasi",
    component: _66b27128,
    name: "admin-informasi"
  }, {
    path: "/admin/kegiatan",
    component: _48aa2e92,
    name: "admin-kegiatan"
  }, {
    path: "/admin/lapor",
    component: _7e74d50a,
    name: "admin-lapor"
  }, {
    path: "/admin/users",
    component: _21a6acc2,
    name: "admin-users"
  }, {
    path: "/admin/lapor/detail",
    component: _2f0e486e,
    name: "admin-lapor-detail"
  }, {
    path: "/admin/master/pemda",
    component: _54c1eead,
    name: "admin-master-pemda"
  }, {
    path: "/admin/master/setting",
    component: _ebd4e030,
    name: "admin-master-setting"
  }, {
    path: "/",
    component: _b120f58e,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
