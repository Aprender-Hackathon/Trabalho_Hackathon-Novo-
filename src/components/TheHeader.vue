<template>
  <header class="custom-header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid px-4 align-items-center">

        <LogoSite />

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#headerNavbar"
          aria-controls="headerNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="headerNavbar">
          <ul class="navbar-nav mx-auto align-items-center gap-2 my-2 my-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link nav-link-highlight d-flex align-items-center gap-2">
                <img src="/src/assets/img/casa.png" alt="Início" class="nav-icon" />
                Início
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/explorar-pag" class="nav-link nav-link-highlight d-flex align-items-center gap-2">
                <img src="/src/assets/img/explorar.png" alt="Explorar" class="nav-icon" />
                Explorar
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/atividades-praticas" class="nav-link nav-link-highlight d-flex align-items-center gap-2">
                <img src="/src/assets/img/atividade.png" alt="Atividades" class="nav-icon" />
                Atividades Práticas
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/sobre-nos" class="nav-link nav-link-highlight d-flex align-items-center gap-2">
                <img src="/src/assets/img/sobre.png" alt="Sobre Nós" class="nav-icon" />
                Sobre Nós
              </RouterLink>
            </li>
          </ul>

          <div class="d-flex align-items-center gap-3 header-actions justify-content-center justify-content-lg-end mt-2 mt-lg-0">
            <template v-if="isLoggedIn">
              <button class="btn-icon" aria-label="Favoritos" @click="salvo">
                <img src="/src/assets/img/coracao.png" alt="Favoritos" class="action-icon" />
              </button>
              <button class="btn-icon" aria-label="Perfil" @click="perfil">
                <img src="/src/assets/img/pessoa.png" alt="Perfil" class="action-icon" />
              </button>
            </template>

            <template v-else>
              <RouterLink to="/login-pag" class="btn btn-outline-custom btn-sm fw-bold px-3">
                Entrar
              </RouterLink>
              <RouterLink to="/cadastro-pag" class="btn btn-custom btn-sm fw-bold px-3">
                Cadastrar
              </RouterLink>
            </template>
          </div>

        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import LogoSite from '@/components/LogoSite.vue'

const router = useRouter()

const salvo = () => {
  router.push('/salvos')
}

const perfil = () => {
  router.push('/usuario-pag')
}

const isLoggedIn = ref(true)

const checkAuth = () => {
  const storedAuth = localStorage.getItem('isLoggedIn')
  if (storedAuth !== null) {
    isLoggedIn.value = storedAuth === 'true'
  }
}

onMounted(() => {
  checkAuth()
  window.addEventListener('storage', checkAuth)
})
</script>

<style scoped>
.custom-header {
  background-color: #fdfbf7;
  border-bottom: 1px solid #f0eae1;
  padding: 0.4rem 0;
}

.nav-link {
  color: #2c2c2c !important;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.4rem 0.8rem !important;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
}

.nav-link:hover {
  color: #e65261 !important;
  border-radius: 50px;
}

.nav-link-highlight:hover {
  background-color: #fde8ea;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.btn-icon:hover {
  transform: scale(1.1);
}

.nav-icon,
.action-icon {
  width: 30px !important;
  height: 30px !important;
  object-fit: contain;
}

.btn-custom {
  background-color: #e65261;
  border-color: #c2858b;
  color: white !important;
}

.btn-custom:hover {
  background-color: #f8959f;
  border-color: #ff7280;
}

.btn-outline-custom {
  border-color: #e65261;
  color: #ff7280 !important;
}

.btn-outline-custom:hover {
  background-color: #f8959f;
  color: white !important;
}
</style>
