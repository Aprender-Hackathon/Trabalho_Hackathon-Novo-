<script setup>
import BotaoSalvar from './BotaoSalvar.vue'

defineProps({
  id: [Number, String],
  materia: String,
  conteudo: String,
  titulo: String,
  imagem: String,
  isSalvo: Boolean
})

defineEmits(['salvar'])
</script>

<template>
  
    <div class="card">
      <router-link :to="`/atividade/${id}`" class="link">
        <img :src="imagem" class="imagem" :alt="titulo"/>
      </router-link>
    <div class="laranja">
      <div class="linhaDeCima">
        <router-link :to="`/atividade/${id}`" class="link">
          <h2>{{ titulo }}</h2>
        </router-link>
        <div class="botoes">
          <BotaoSalvar
            :isSalvo="isSalvo"
            @salvar="$emit('salvar', { id, titulo, imagem, materia, conteudo })"
          />
        </div>
      <span v-if="materia" class="materia">{{ materia }}</span>
    </div>
    </div>
    </div>
  
</template>

<style scoped>
.link {
  text-decoration: none;
}
.card {
  width: 240px;
  height: 300px;
  border: 3.5px solid #F5893C;
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
.laranja {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #F5893C;
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
.materia {
  font-size: 17px;
  color: #333;
  text-decoration: underline;
}
</style>
