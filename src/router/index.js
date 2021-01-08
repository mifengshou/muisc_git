import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Recommend",
    component: () => import('../views/Recommend.vue')
  },
  {
    path: '/hot',
    name: "Notice",
    component: () => import('../views/Notice')
  },
]

const router = new VueRouter({
  mods: "hash",
  routes
})

export default router
