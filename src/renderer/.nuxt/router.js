import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c03a66c = () => interopDefault(import('../pages/pagenotfound/index.vue' /* webpackChunkName: "pages/pagenotfound/index" */))
const _f2516214 = () => interopDefault(import('../pages/realm.vue' /* webpackChunkName: "pages/realm" */))
const _097e6d7b = () => interopDefault(import('../pages/authentication/login.vue' /* webpackChunkName: "pages/authentication/login" */))
const _c3f42840 = () => interopDefault(import('../pages/authentication/login-2.vue' /* webpackChunkName: "pages/authentication/login-2" */))
const _72a92ef6 = () => interopDefault(import('../pages/authentication/signup.vue' /* webpackChunkName: "pages/authentication/signup" */))
const _67863a9b = () => interopDefault(import('../pages/authentication/signup-2.vue' /* webpackChunkName: "pages/authentication/signup-2" */))
const _1a31c48f = () => interopDefault(import('../pages/blogs/blog_details/index.vue' /* webpackChunkName: "pages/blogs/blog_details/index" */))
const _4a94e4bf = () => interopDefault(import('../pages/blogs/blog_left-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_left-sidebar/index" */))
const _a455b90e = () => interopDefault(import('../pages/blogs/blog_no-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_no-sidebar/index" */))
const _17e5ea38 = () => interopDefault(import('../pages/blogs/blog_right-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_right-sidebar/index" */))
const _65a80878 = () => interopDefault(import('../pages/bonus/about.vue' /* webpackChunkName: "pages/bonus/about" */))
const _1849f8e0 = () => interopDefault(import('../pages/bonus/elements.vue' /* webpackChunkName: "pages/bonus/elements" */))
const _ce981ae6 = () => interopDefault(import('../pages/bonus/faq.vue' /* webpackChunkName: "pages/bonus/faq" */))
const _c35d6900 = () => interopDefault(import('../pages/bonus/price.vue' /* webpackChunkName: "pages/bonus/price" */))
const _ea94788e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/pagenotfound",
    component: _2c03a66c,
    name: "pagenotfound"
  }, {
    path: "/realm",
    component: _f2516214,
    name: "realm"
  }, {
    path: "/authentication/login",
    component: _097e6d7b,
    name: "authentication-login"
  }, {
    path: "/authentication/login-2",
    component: _c3f42840,
    name: "authentication-login-2"
  }, {
    path: "/authentication/signup",
    component: _72a92ef6,
    name: "authentication-signup"
  }, {
    path: "/authentication/signup-2",
    component: _67863a9b,
    name: "authentication-signup-2"
  }, {
    path: "/blogs/blog_details",
    component: _1a31c48f,
    name: "blogs-blog_details"
  }, {
    path: "/blogs/blog_left-sidebar",
    component: _4a94e4bf,
    name: "blogs-blog_left-sidebar"
  }, {
    path: "/blogs/blog_no-sidebar",
    component: _a455b90e,
    name: "blogs-blog_no-sidebar"
  }, {
    path: "/blogs/blog_right-sidebar",
    component: _17e5ea38,
    name: "blogs-blog_right-sidebar"
  }, {
    path: "/bonus/about",
    component: _65a80878,
    name: "bonus-about"
  }, {
    path: "/bonus/elements",
    component: _1849f8e0,
    name: "bonus-elements"
  }, {
    path: "/bonus/faq",
    component: _ce981ae6,
    name: "bonus-faq"
  }, {
    path: "/bonus/price",
    component: _c35d6900,
    name: "bonus-price"
  }, {
    path: "/",
    component: _ea94788e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
