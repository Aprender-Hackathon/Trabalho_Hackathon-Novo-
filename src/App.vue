<script setup>

import { RouterView } from 'vue-router';
import TheFooter from './components/TheFooter.vue';
import BotaoMaisResultados from './components/BotaoMaisResultados.vue';

import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div>
    <TheHeader/>
    <div class="conteudo">
      <RouterView/>
    </div>
    <TheFooter/>
    <BotaoMaisResultados/>
  </div>

    <BotaoSalvar />
  </main>
</template>

<style scoped>
.conteudo {
  max-width: 1280px;
  margin: 0 auto;
}
</style>

