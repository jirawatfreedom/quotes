import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import(/* webpackChunkName: "about" */ './views/Form.vue'),
    },
    {
      path: '/directive',
      name: 'directive',
      component: () => import(/* webpackChunkName: "about" */ './views/Directive.vue'),
    },
    {
      path: '/filters-mixins',
      name: 'filters-mixins',
      component: () => import(/* webpackChunkName: "about" */ './views/FiltersMixins.vue'),
    },
    {
      path: '/animations',
      name: 'animations',
      component: () => import(/* webpackChunkName: "about" */ './views/Animations.vue'),
    },
    {
      path: '/monster-slayer',
      name: 'monster-slayer',
      component: () => import(/* webpackChunkName: "about" */ './views/MonsterSlayer.vue'),
    },
    {
      path: '/firebase',
      name: 'firebase',
      component: () => import(/* webpackChunkName: "about" */ './views/Firebase.vue'),
    },
  ],
});
