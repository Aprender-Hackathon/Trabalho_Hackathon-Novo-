<script setup>
<<<<<<< HEAD
// preciso importar as paginas e colocar as rotas quando as paginas existirem
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />


    <div class="wrapper">

      <nav>
       

      </nav>
    </div>


  <RouterView />
</template>

<style scoped>

=======
import { RouterView } from 'vue-router';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div>
    <div class="conteudo">
      <RouterView />
    </div>
    <TheFooter/>
  </div>
</template>

<style scoped>
.conteudo {
  max-width: 1280px;
  margin: 0 auto;
}
>>>>>>> 8864de6d4b745863f80613d628e8d8ec600b7cde
</style>
