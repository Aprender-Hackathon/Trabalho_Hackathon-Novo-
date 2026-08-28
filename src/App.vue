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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.conteudo {
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
