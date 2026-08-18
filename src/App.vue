<script setup>
import { RouterView } from 'vue-router';
import TheFooter from './components/TheFooter.vue';
import BotaoMaisResultados from './components/BotaoMaisResultados.vue';
import BotaoExplorar from './components/BotaoExplorar.vue';
</script>

<template>
  <div>
    <RouterView/>
    <TheFooter/>
    <BotaoMaisResultados/>
    <BotaoExplorar/>
  </div>
</template>

<style scoped>
</style>
