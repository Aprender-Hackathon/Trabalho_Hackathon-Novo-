<script setup>
import { RouterView } from 'vue-router';
import TheFooter from './components/TheFooter.vue';
import BotaoMaisResultados from './components/BotaoMaisResultados.vue';
import BotaoExplorar from './components/BotaoExplorar.vue';
import FiltroExplorar from './components/FiltroExplorar.vue';
</script>

<template>
  <div>
    <RouterView/>
    <TheFooter/>
    <BotaoMaisResultados/>
    <BotaoExplorar/>
    <FiltroExplorar/>
  </div>
</template>

<style scoped>
</style>
