<script setup>
import BotaoSalvar from './BotaoSalvar.vue'

defineProps(['id', 'titulo', 'imagem', 'data', 'isSalvo'])
defineEmits(['salvar'])
</script>

<template>
  <div class="card">
        <img :src="imagem" class="imagem" :alt="titulo" />
    <div class="roxo">
    <div class="linhaDeCima">
    <h2>{{ titulo }}</h2>
      <div class="botoes">
          <BotaoSalvar
            :isSalvo="isSalvo"
            @salvar="$emit('salvar', { id, titulo, imagem, data })"
          />
      </div>
</div>
      <span v-if="data" class="data">{{ data }}</span>
</div>
  </div>
</template>


<style scoped>
.card {
  width: 240px;
  height: 300px;
  border: 3.5px solid #5C49C8;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  background: white;
  margin: 19px;
}
.imagem {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.roxo {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #5C49C8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 15px;
  box-sizing: border-box;
}
.linhaDeCima {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
h2 {
  color: #1a1a1a;
  font-size: 20px;
  margin: 0;
}
.data {
  font-size: 17px;
  color: #333;
  text-decoration: underline;
}
</style>