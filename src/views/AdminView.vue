<template>
  <div class="admin">
    <h1>Administrador</h1>

    <div class="botoes">
      <RouterLink to="/admin/escolas" class="botao">Visualizar escolas</RouterLink>
      <button class="botao" @click="emBreve">Visualizar professores</button>
      <button class="botao" @click="emBreve">Visualizar alunos</button>
      <button class="botao" @click="emBreve">Visualizar pais</button>
    </div>

    <button class="sair" @click="sair">Sair</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function emBreve() {
  alert('Em breve!')
}

function sair() {
  localStorage.removeItem('userData')
  localStorage.removeItem('isLoggedIn')
  window.dispatchEvent(new Event('auth-change'))
  router.push('/')
}
</script>

<style scoped>
.admin {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 1rem;
  color: #1e6d77;
}

.botoes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fde896;
  border-radius: 36px;
  padding: 2rem;
  width: 100%;
  max-width: 380px;
}

.botao {
  background-color: #e65261;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.8rem 1.2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.botao:hover {
  background-color: #f8959f;
}

.sair {
  background-color: #238b97;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.6rem 2rem;
  font-weight: bold;
}
</style>
