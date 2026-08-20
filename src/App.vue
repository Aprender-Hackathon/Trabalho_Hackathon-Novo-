<script setup>
import { RouterView } from 'vue-router';
import TheFooter from './components/TheFooter.vue';
import BotaoMaisResultados from './components/BotaoMaisResultados.vue';
</script>

<template>
  <div>
    <RouterView/>
    <TheFooter/>
    <BotaoMaisResultados/>
  </div>
</template>

<style scoped>
</style>
