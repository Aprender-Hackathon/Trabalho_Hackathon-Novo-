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
  path: '/comunidade',
  name: 'comunidade',
component: () => import('../components/Comunidade.vue')
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
      component: () => import('../views/HistoricoView.vue'),
      meta: { requerProfessor: true }
    },
    {
      path: '/salvo-pag',
      redirect: '/salvos',
    },
     {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: { requerAdmin: true }
    },
        {
      path: '/admin/escolas',
      name: 'adminEscolas',
      component: () => import('../views/AdminEscolasView.vue'),
      meta: { requerAdmin: true }
    },
        {
      path: '/cadastro-escola',
      name: 'cadastroEscola',
      component: () => import('../views/CadastroEscolaView.vue')
    },
    {
      path: '/formulario',
      alias: '/formulario-add',
      name: 'formulario',
      component: () => import('../views/FormularioView.vue'),
      meta: { requerProfessor: true }
    },
    {
      path: '/admin/alunos',
      name: 'adminAlunos',
      component: () => import('../views/AdminUsuariosView.vue'),
      props: { tipo: 'alunos' }
    },
    {
      path: '/admin/visitantes',
      name: 'adminVisitantes',
      component: () => import('../views/AdminUsuariosView.vue'),
      meta: { requerAdmin: true }
    }
  ],
})
router.beforeEach((to) => {
  let usuario = null

  try {
    usuario = JSON.parse(
      localStorage.getItem('userData') || 'null'
    )
  } catch {
    usuario = null
  }

  const logado = localStorage.getItem('isLoggedIn') === 'true'

  if (to.meta.requerAdmin) {
    if (logado && usuario?.tipo_perfil === 'administrador') {
      return true
    }

    return { name: 'login' }
  }

  if (to.meta.requerProfessor) {
    if (logado && usuario?.tipo_perfil === 'professor') {
      return true
    }

    return { name: 'login' }
  }

  return true
})

export default router
