import ExplorarView from '@/views/ExplorarView.vue'
import HomeView from '../views/HomeView.vue'
import VizuView from '@/views/VizuView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/explorar',
      name: 'explorar',
      component: ExplorarView,
    },
    {
      path: '/vizualizacao',
      name: 'vizualizacao',
      component: VizuView,
    },
    { path: '/atividade/:id', 
      name: 'VizuView', 
      component: () => import('@/views/VizuView.vue') 
    },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
