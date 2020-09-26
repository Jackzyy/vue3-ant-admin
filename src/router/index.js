import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/views/layout'
import NavTest from './modules/nav-test'

// 公有路由
export const commonRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: '' },
        component: () => import('@/views/dashboard')
      }
    ]
  },

  ...NavTest
]

// 私有路由
export const asyncRoutes = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: commonRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
