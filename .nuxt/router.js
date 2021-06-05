import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a552e82 = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _c76100ac = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "" */))
const _44cce67c = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _9fcd537c = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "" */))
const _6c05ae66 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "" */))
const _600eca9c = () => interopDefault(import('..\\pages\\editor\\index.vue' /* webpackChunkName: "" */))
const _55c5f0d5 = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6a552e82,
    name: "layout",
    children: [{
      path: "",
      component: _c76100ac,
      name: "home"
    }, {
      path: "/login",
      component: _44cce67c,
      name: "login"
    }, {
      path: "/register",
      component: _44cce67c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _9fcd537c,
      name: "profile"
    }, {
      path: "/settings",
      component: _6c05ae66,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _600eca9c,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _55c5f0d5,
      name: "article"
    }]
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
