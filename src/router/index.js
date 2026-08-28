import ExplorarView from '@/views/ExplorarView.vue'
import HomeView from '../views/HomeView.vue'
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
      path: '/explorar-pag',
      name: 'explorar',
      component: () => import('../views/ExplorarView.vue'),
    },
    {
      path: '/explorar',
      name: 'explorarAlt',
      component: ExplorarView
    },
    {
      path: '/sobre-nos',
      name: 'sobre',
      component: () => import('../views/SobrenosView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    { path: '/atividade/:id', 
      name: 'VizuView', 
      component: () => import('@/views/VizuView.vue'),
    },
    { 
      path: '/pratica/:id', 
      name: 'VizuPratView', 
      component: () => import('@/views/VizuPratView.vue'),
    },
    {
      path: '/atividades-praticas',
      name: 'atividadesPraticas',
      component: () => import('../views/AtividadepraView.vue'),
    },
    {
      path: '/usuario-pag',
      name: 'usuario',
      component: () => import('../views/UsuarioView.vue'),
    },
    {
      path: '/login-pag',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/cadastro-pag',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue'),
    },
    {
      path: '/esqueceu-senha',
      name: 'esqueceu',
      component: () => import('../views/EsqueceusenhaView.vue'),
    },
    {
      path: '/salvos',
      name: 'salvos',
      component: () => import('../views/SalvosView.vue'),
    },
    {
      path: '/salvo-pag',
      redirect: '/salvos'
    }
  ],
})

export default router
