<script setup>

import BotaoPesquisa from '@/components/BotaoPesquisa.vue';
import { ref, computed, watch } from 'vue'

const limite = ref(20)

import FiltroExplorar from '@/components/FiltroExplorar.vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'
import { atividades } from '@/AtividadesCards.js'
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue'

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo'
})

const textoPesquisado = ref('')

function normaliza(texto){
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

watch(filtroEscolhido, () => {
  limite.value = 20
}, { deep: true })

const atividadesFiltradas = computed(() => {

  const texto = normaliza(textoPesquisado.value)

  return atividades.filter((item) => {

    const matchMateria =
      filtroEscolhido.value.materia === 'Tudo' || item.materia === filtroEscolhido.value.materia

    const matchConteudo =
      filtroEscolhido.value.conteudo === 'Tudo' || item.conteudo === filtroEscolhido.value.conteudo

    const matchTexto =
      !texto ||
      normaliza(item.titulo).includes(texto) ||
      normaliza(item.materia).includes(texto) ||
      normaliza(item.conteudo).includes(texto)

    return matchMateria && matchConteudo && matchTexto
  })
})

</script>

<template>
<div>
  <BotaoPesquisa @pesquisa="textoPesquisado = $event" />
  
  <FiltroExplorar
    @filtro="filtroEscolhido = $event"
  />

  <div class="cards">

<BotaoExplorar
  v-for="(item, index) in atividadesFiltradas.slice(0, limite)"
  :key="index"
  :titulo="item.titulo"
  :imagem="item.imagem"
  :materia="item.materia"
  :conteudo="item.conteudo"
/>
</div>
<BotaoMaisResultados 
      v-if="atividadesFiltradas.length > limite" 
      @carregar="limite += 20" 
    />
</div>
</template>


<style scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}

</style>