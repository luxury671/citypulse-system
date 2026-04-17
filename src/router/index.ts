import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useUserStore } from '../stores/user'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sandbox',
    name: 'sandbox',
    component: () => import('../views/SandboxView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/workorder',
    name: 'workorder',
    component: () => import('../views/WorkOrderView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: () => import('../views/AnalysisView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('../views/SystemView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory('/citypulse-system/'),
  routes
})

// 路由守卫
router.beforeEach((to, _, next) => {
  const userStore = useUserStore()
  
  userStore.checkLogin()
  
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && userStore.isLoggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router