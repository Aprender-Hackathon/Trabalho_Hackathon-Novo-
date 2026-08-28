<script setup>
import BotaoSalvar from './BotaoSalvar.vue'

defineProps({
  id: [Number, String],
  titulo: String,
  imagem: String,
  data: String,
  isSalvo: Boolean
})

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
            @salvar="$emit('salvar', id)"
          />
        </div>
      </div>
      <span v-if="data" class="data">{{ data }}</span>
    </div>
  </div>
</template>
