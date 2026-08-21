<script setup>
import BotaoSalvar from './components/BotaoSalvar.vue'
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <main>
    <h1>Botão de Salvar</h1>

    <div class="main-container">
    <ProfileCard />
  </div>

    <BotaoSalvar />
  </main>
</template>


<style>

body {
  margin: 0;
  background-color: #f3efe6;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
