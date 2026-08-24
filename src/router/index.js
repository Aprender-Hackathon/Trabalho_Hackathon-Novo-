<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
=======
import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
>>>>>>> 8864de6d4b745863f80613d628e8d8ec600b7cde

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
<<<<<<< HEAD
      path: '/explorar-pag',
      name: 'explorar',
      component: () => import('../views/ExplorarView.vue'),
=======
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
>>>>>>> 8864de6d4b745863f80613d628e8d8ec600b7cde
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
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
