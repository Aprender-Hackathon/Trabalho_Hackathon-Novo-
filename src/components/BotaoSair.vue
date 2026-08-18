<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaHome() {
  router.push('/')
}
</script>

<template>
  <button class="btn-sair" @click="irParaHome">Sair</button>
</template>

<style scoped>
.btn-sair {
  background-color: #d98880;
  color: #222222;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  padding: 10px 30px;
  cursor: pointer;
}

.btn-sair:hover {
  background-color: #cb766e;
}
</style>
