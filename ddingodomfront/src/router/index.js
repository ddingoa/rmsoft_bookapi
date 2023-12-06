// Composables
import { createRouter, createWebHistory } from 'vue-router'

const menuSetList = [{
  path : '/home',
  name : 'Home',
  component : () => import('@/views/Home.vue')
},{
  path : '/barchart',
  name : 'barchart',
  component : () => import('@/chart/def_barchart/BarChart.vue')
},
]


const routes = [
  {
    path: '/',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/api',
    component: () => import('@/layouts/default/Default.vue'),
    children: menuSetList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
