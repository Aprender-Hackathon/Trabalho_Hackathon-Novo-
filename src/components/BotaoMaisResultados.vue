<script setup>
defineEmits(['carregar'])
</script>    

<template>
  <div>
    <button class="MaisResultados" @click="$emit('carregar')">
      <span>Mais Resultados</span>
      <img src="/seta.png" />
    </button>
  </div>
</template>

<style scoped>
.MaisResultados {
  width: 240px; 
  height: 42px;
  background: #fffaf5;
  border: 4px solid #d5485a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bold;
  margin: 0 auto;
  gap: 15px;
  cursor: pointer;
}

.MaisResultados img {
  width: 12px;
}
</style>