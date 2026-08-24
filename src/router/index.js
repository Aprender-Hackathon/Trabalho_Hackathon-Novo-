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
      path: '/explorar',
      redirect: '/explorar-pag', // Corrige o aviso de rota não encontrada para /explorar e categorias
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sobre-nos',
      name: 'sobreNos',
      component: () => import('../views/AboutView.vue'),
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
