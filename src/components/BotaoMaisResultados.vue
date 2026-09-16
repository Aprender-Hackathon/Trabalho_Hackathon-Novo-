<script setup>
defineEmits(['carregar'])

</script>
<template>
  <div class="container-botao">
    <button class="MaisResultados" @click="$emit('carregar')">
      <span>Mais Resultados</span>
      <img src="/seta.png" alt="Seta" class="icone-seta" />
    </button>
  </div>
</template>

<style scoped>
.container-botao {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.MaisResultados {
  width: 100%;
  max-width: 280px;
  min-width: 180px;
  min-height: 44px;
  padding: 8px 16px;
  width: 240px;
  height: 42px;
  background: #fffaf5;
  border: 4px solid #d5485a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.icone-seta {
  max-height: 16px;
  width: auto;
}

.MaisResultados:hover {
  background-color: #ffe6d9;
  transform: translateY(-1px);
}

.MaisResultados:active {
  transform: translateY(0);
}

@media (max-width: 600px) {
  .MaisResultados {
    max-width: 90%;
    font-size: 15px;
    gap: 10px;
    border-width: 3px;
    margin: 0 auto;
  gap: 15px;
  cursor: pointer;
  }


}

.MaisResultados img {
  width: 12px;
}
</style>
