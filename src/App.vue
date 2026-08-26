<script setup>
import { RouterView, RouterLink } from 'vue-router';
import TheFooter from './components/TheFooter.vue';


</script>

<template>
  <div>
    <div class="conteudo">
      <RouterView/>
      <RouterLink to="/vizualizacao">vizualiza</RouterLink>
      <RouterLink to="/explorar">Explore</RouterLink>
    </div>
    <TheFooter/>
  </div>
</template>

<style scoped>
.conteudo {
  max-width: 1280px;
  margin: 0 auto;
}
</style>

