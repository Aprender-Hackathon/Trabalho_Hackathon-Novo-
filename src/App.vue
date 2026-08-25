<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
 dev-beatriz
  <TheHeader />

  <RouterView />

  <TheFooter />
</template>

<style scoped>
</style>

  <div>
    <TheHeader />
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
main
