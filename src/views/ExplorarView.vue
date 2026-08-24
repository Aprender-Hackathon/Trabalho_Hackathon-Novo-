<script setup>

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

watch(filtroEscolhido, () => {
  limite.value = 20
}, { deep: true })

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
</template>


<style scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}

</style>