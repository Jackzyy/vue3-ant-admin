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
      },
      {
        path: '/navtest',
        name: 'NavTest',
        component: () => import('@/views/nav-test/nav1')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
