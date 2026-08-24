<script setup>
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div>
    <div class="conteudo">
      <RouterView />
    </div>

    <TheFooter />
  </div>
</template>

<style scoped>
.conteudo {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
