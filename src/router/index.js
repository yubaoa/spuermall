import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/category',
    component: () => import('../views/category/Category.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
