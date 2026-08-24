<script setup>
import { RouterView } from 'vue-router';
import TheFooter from './components/TheFooter.vue';
import BotaoMaisResultados from './components/BotaoMaisResultados.vue';

import BotaoSalvar from './components/BotaoSalvar.vue';
</script>

<template>
  <div>
    <div class="conteudo">
      <RouterView/>
    </div>
    <TheFooter/>
    <BotaoMaisResultados/>
    <BotaoSalvar />
  </div>
</template>

<style scoped>
.conteudo {
  max-width: 1280px;
  margin: 0 auto;
}
</style>

