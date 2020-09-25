import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/views/layout'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
