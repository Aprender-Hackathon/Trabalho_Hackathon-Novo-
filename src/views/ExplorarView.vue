<script setup>

import { ref, computed } from 'vue'

import FiltroExplorar from '@/components/FiltroExplorar.vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'
import { atividades } from '@/AtividadesCards.js'
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue'

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo'
})

const atividadesFiltradas = computed(() => {
  return atividades.filter(item => {
    const matchMateria = filtroEscolhido.value.materia === 'Tudo' || item.materia === filtroEscolhido.value.materia
    const matchConteudo = filtroEscolhido.value.conteudo === 'Tudo' || item.conteudo === filtroEscolhido.value.conteudo
    return matchMateria && matchConteudo
  })
})

</script>

<template>

  <FiltroExplorar
    @filtro="filtroEscolhido = $event"
  />
<AtividadesCards/>
  <div class="cards">

<BotaoExplorar
  v-for="(item, index) in atividadesFiltradas"
  :key="index"
  :titulo="item.titulo"
  :imagem="item.imagem"
  :materia="item.materia"
  :conteudo="item.conteudo"
/>
</div>
<BotaoMaisResultados/>
</template>


<style scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}

</style>