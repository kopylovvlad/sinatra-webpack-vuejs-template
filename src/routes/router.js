import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import ItemPage from '../pages/ItemPage.vue'
import ErrorPage from '../pages/ErrorPage.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main_page',
      component: MainPage
    },
    {
      path: '/show/:id',
      name: 'show_item',
      component: ItemPage
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPage
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
});
