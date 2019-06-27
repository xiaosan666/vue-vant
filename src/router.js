import Vue from 'vue'
import Router from 'vue-router'
import main from './views/main/index'
import login from './views/core/login.vue'
import pageNotFound from './views/core/404.vue'
import aboutDetail from './views/about/detail.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
    }, {
      path: '/login',
      name: 'login',
      component: login,
    }, {
      path: '/about/detail',
      name: 'aboutDetail',
      component: aboutDetail
    }, {
      path: '*',
      name: 'pageNotFound',
      component: pageNotFound,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8
    return savedPosition || {x: 0, y: 0}
  }
})
