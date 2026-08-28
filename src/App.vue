<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="conteudo-principal">
    <TheHeader />
    <div class="conteudo">
      <RouterView />
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
.conteudo-principal {
   background: #FCF4E8;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.conteudo {
  flex: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
