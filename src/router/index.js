import { createRouter, createWebHistory } from 'vue-router'
import ExplorarView from '@/views/ExplorarView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/explorar-pag',
      alias: '/explorar',
      name: 'explorar',
      component: () => import('../views/ExplorarView.vue')
    },
    {
      path: '/explorar',
      name: 'explorarAlt',
      component: ExplorarView
    },
    {
      path: '/sobre-nos',
      name: 'sobre',
      component: () => import('../views/SobrenosView.vue')
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
      component: () => import('../views/AtividadepraView.vue')
    },
    {
      path: '/usuario-pag',
      name: 'usuario',
      component: () => import('../views/UsuarioView.vue')
    },
    {
      path: '/usuario-professor',
      name: 'usuarioProfessor',
      component: () => import('../views/ProfessorUsuarioView.vue')
    },
    {
      path: '/login-pag',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastro-pag',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue')
    },
    {
      path: '/esqueceu-senha',
      name: 'esqueceu',
      component: () => import('../views/EsqueceusenhaView.vue')
    },
    {
      path: '/salvos',
      name: 'salvos',
      component: () => import('../views/SalvosView.vue')
    },
    {
      path: '/cadastro-professor',
      name: 'cadastroProfessor',
      component: () => import('../views/CadastroProfessorView.vue')
    },
    {
      path: '/escolhe-cadastro',
      name: 'escolheCadastro',
      component: () => import('../views/PaginaescolhecadastroView.vue')
    },
     {
      path: '/historico-pag',
      name: 'historico',
      component: () => import('../views/HistoricoView.vue')
    },
    {
      path: '/salvo-pag',
      redirect: '/salvos',
    },
    {
      path: '/formulario',
      alias: '/formulario-add',
      name: 'formulario',
      component: () => import('../views/FormularioView.vue')
    },
  ],
})

export default router
