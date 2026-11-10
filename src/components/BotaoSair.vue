<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaHome() {
  localStorage.removeItem('isLoggedIn')

  window.dispatchEvent(new Event('auth-change'))

  router.push('/')
}
</script>

<template>
  <button class="btn-sair" @click="irParaHome">Sair</button>
</template>
