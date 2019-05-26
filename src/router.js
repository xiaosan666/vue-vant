import Vue from 'vue';
import Router from 'vue-router';
import login from './views/login.vue';
import home from './views/home.vue';
import about from './views/about.vue';
import test from './views/test.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    }, {
      path: '/',
      name: 'home',
      component: home,
    }, {
      path: '/about',
      name: 'about',
      component: about,
    }, {
      path: '/test',
      name: 'test',
      component: test,
    }
  ],
});
