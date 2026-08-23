<script setup>
import { ref } from 'vue'

const mais = ref(false)
</script>    
<template>
  <div>
    <button class="MaisResultados" @click="mais = !mais">
      <span>Mais Resultados </span>
    </button>
    <div v-if="mais" class="aparecerMaisAtividades">
Colocar atividades
    </div>
  </div>
</template>

<style scoped>
.MaisResultados {
  width: 23%;
  height: 39px;
  background: #fffaf5;
  border: 4px solid #d5485a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 auto;
}
</style>