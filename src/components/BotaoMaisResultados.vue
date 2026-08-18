<script setup>
import { ref } from 'vue'

const mais = ref(false)
</script>    
<template>
  <div>
    <button class="MaisResultados" @click="mais = !mais">
      <span>Mais Resultados</span>
    </button>
    <div v-if="mais" class="atividades">
Colocar atividades
    </div>
  </div>
</template>

<style scoped></style>