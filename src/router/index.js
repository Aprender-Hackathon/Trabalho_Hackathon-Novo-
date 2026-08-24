import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: InicioView,
    },
    {
      path: '/explorar-pag',
      name: 'explorar',
      component: () => import('../views/ExplorarView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
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
  ],
})

export default router