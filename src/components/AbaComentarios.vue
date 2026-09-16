<script setup>
import { ref } from 'vue'
import BotaoMaisResultados from './BotaoMaisResultados.vue';

const usuarioAtual = ref('Maria')
const comentariosAbertos = ref(true)

const comentarios = ref([
  { id: 1, autor: 'Maria', texto: 'Gostei muito dessa atividade!' },
  { id: 2, autor: 'João', texto: 'Foi fácil de entender e aplicar.' }
])

const novoComentarioTexto = ref('')

const alternarComentarios = () => {
  comentariosAbertos.value = !comentariosAbertos.value
}

const adicionarComentario = () => {
  if (novoComentarioTexto.value.trim() === '') return

  comentarios.value.push({
    id: Date.now(),
    autor: usuarioAtual.value,
    texto: novoComentarioTexto.value
  })

  novoComentarioTexto.value = ''
}
</script>

<template>
  <div class="container-geral">

    <div class="secao-comentarios-expansivel">
      <div class="linha-comentarios-toggle" @click="alternarComentarios">
        <span>Comentários ({{ comentarios.length }})</span>
        <span class="icone-flecha" :class="{ aberto: comentariosAbertos }">▼</span>
      </div>

      <div v-if="comentariosAbertos" class="gaveta-comentarios">
        <div 
          v-for="comentario in comentarios" 
          :key="comentario.id" 
          class="comentario"
          :class="{ 'meu-comentario': comentario.autor === usuarioAtual }"
        >
          <div class="cabecalho-comentario">
            <strong>{{ comentario.autor }}</strong>
            <span v-if="comentario.autor === usuarioAtual" class="tag-voce">(Você)</span>
          </div>
          <p>{{ comentario.texto }}</p>
        </div>

        <div class="form-comentario">
          <input
            type="text"
            v-model="novoComentarioTexto"
            placeholder="Escreva um comentário..."
            @keyup.enter="adicionarComentario"
          >
          <button class="enviar" @click="adicionarComentario">Enviar</button>
        </div>
      </div>
    </div>

    <div class="container-mais-resultados">
      <BotaoMaisResultados @carregar="lidarCarregarMais" />
    </div>

  </div>
</template>

<style scoped>
.container-geral {
  width: 90%;
  max-width: 700px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
}

.secao-comentarios-expansivel {
  border: 4px solid #d5485a;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fffaf5;
}

.linha-comentarios-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background-color: #fffaf5;
  color: #333;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  user-select: none;
}

.linha-comentarios-toggle:hover {
  background-color: #f7f1eb;
}

.icone-flecha {
  font-size: 14px;
  transition: transform 0.3s ease;
  color: #d5485a;
}

.icone-flecha.aberto {
  transform: rotate(180deg);
}

.gaveta-comentarios {
  padding: 15px 20px 20px 20px;
  border-top: 2px solid #d5485a;
  background-color: #fffaf5;
}

.comentario {
  background: #ffffff;
  padding: 12px 15px;
  margin: 10px 0;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}

.comentario.meu-comentario {
  background: #fffaf5;
  border: 2px solid #d5485a;
}

.cabecalho-comentario {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tag-voce {
  font-size: 11px;
  color: #d5485a;
  font-weight: bold;
  background: #fce8eb;
  padding: 2px 6px;
  border-radius: 4px;
}

.comentario p {
  margin: 5px 0 0 0;
  color: #333;
  font-size: 15px;
}

.form-comentario {
  display: flex;
  align-items: center;
  margin-top: 15px;
  gap: 8px;
}

input {
  flex: 1;
  padding: 10px 14px;
  background: #ffffff;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
}

input:focus {
  border-color: #d5485a;
}

.enviar {
  padding: 10px 18px;
  background: #fffaf5;
  color: #d5485a;
  border: 2px solid #d5485a;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}

.enviar:hover {
  background: #d5485a;
  color: white;
}

.container-mais-resultados {
  margin-top: 25px;
  width: 100%;
}
</style>