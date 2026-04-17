import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/SandboxView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/citypulse-system/'),
  routes
})

export default router