import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('../views/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'empty' },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'main' },
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: { layout: 'main' },
      component: () => import('../views/Record.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'main' },
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: { layout: 'main' },
      component: () => import('../views/Planning.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta: { layout: 'main' },
      component: () => import('../views/History.vue')
    },
    {
      path: '/detailrecord',
      name: 'detailrecord',
      meta: { layout: 'main' },
      component: () => import('../views/DetailRecord.vue')
    }
  ]
})

export default router
