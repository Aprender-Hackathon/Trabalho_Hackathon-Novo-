import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/InicioView.vue'),
    },
   
    //     {
    //   path: '/', // url
    //   name: 'inicio', // nome do componente
    //   component: () => import('../views/InicioView.vue'), // importação do componente
    // },

    {
      path: '/explorar-pag',
      name: 'explorar',
      component: () => import('../views/ExplorarView.vue'),
    },
      {
      path: '/atividades-praticas',
      name: 'atividades',
      component: () => import('../views/AtividadepraView.vue'),
    },

    {
      path: '/sobre-nos',
      name: 'sobre',
      component: () => import('../views/SobrenosView.vue'),
    },
     {
      path: '/salvo-pag',
      name: 'salvo',
      component: () => import('../views/SalvosView.vue'),
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


  ],
})

export default router
