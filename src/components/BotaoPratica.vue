<script setup>
import BotaoSalvar from './BotaoSalvar.vue'

defineProps({
  id: [Number, String],
  titulo: String,
  imagem: String,
  data: String,
  isSalvo: Boolean,
})

defineEmits(['salvar'])
</script>

<template>
  <div class="card">

    <router-link :to="`/pratica/${id}`" class="link">
      <img :src="imagem" class="imagem" :alt="titulo" />
    </router-link>

    <div class="roxo">

      <div class="linhaDeCima">
        <router-link :to="`/pratica/${id}`" class="link">
          <h2>{{ titulo }}</h2>
        </router-link>

        <div class="botoes" @click.stop>
          <BotaoSalvar
            :isSalvo="isSalvo"
            @salvar="$emit('salvar', { id, titulo, imagem, data })"
          />
        </div>
      </div>

      <span v-if="data" class="data">
        {{ data }}
      </span>

    </div>

  </div>
</template>

<style scoped>
.link {
  text-decoration: none;
}

.card {
  width: 255px;
  height: 360px;
  border: 3.5px solid #5c49c8;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  background: white;
  margin: 8px;
}
@media (max-width: 480px) {
  .card {
    width: 47% !important;
    margin: 4% 1.5%;
    height: 250px;
  }

  .imagem {
    height: 140px;
  }

  h2 {
    font-size: 0.95rem;
  }
}

.imagem {
  width: 100%;
  height: 215px;
  object-fit: cover;
}
.roxo {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #5c49c8;
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
  cursor: default;
}
</style>
