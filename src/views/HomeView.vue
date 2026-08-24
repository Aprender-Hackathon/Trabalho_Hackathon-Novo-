<script setup>
import { ref, computed } from 'vue'
import BannerSection from '@/components/BannerSection.vue'
import EducacaoSection from '@/components/EducacaoSection.vue'
import ProcesoSection from '@/components/ProcesoSection.vue'
import CategoriasSection from '@/components/CategoriasSection.vue'
import FaixaSobreNos from '@/components/FaixaSobreNos.vue'
import FiltroExplorar from '@/components/FiltroExplorar.vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'
import { estadoAtividades } from '@/AtividadesCards.js'

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo',
})

const atividadesFiltradas = computed(() => {
  return estadoAtividades.lista.filter((item) => {
    const matchMateria =
      filtroEscolhido.value.materia === 'Tudo' || item.materia === filtroEscolhido.value.materia
    const matchConteudo =
      filtroEscolhido.value.conteudo === 'Tudo' || item.conteudo === filtroEscolhido.value.conteudo
    return matchMateria && matchConteudo
  })
})

function alternarSalvar(id) {
  const item = estadoAtividades.lista.find(a => a.id === id)
  if (item) {
    item.salvo = !item.salvo 
  }
}
</script>

<template>
  <FiltroExplorar @filtro="filtroEscolhido = $event" />

  <div class="cards">
    <BotaoExplorar
      v-for="item in atividadesFiltradas"
      :key="item.id"
      :id="item.id"
      :titulo="item.titulo"
      :imagem="item.imagem"
      :materia="item.materia"
      :conteudo="item.conteudo"
      :isSalvo="item.salvo"
      @salvar="alternarSalvar(item.id)"
    />
  </div>

  <div>
    <BannerSection />
    <EducacaoSection />
    <ProcesoSection />
    <CategoriasSection />
    <ExplorarView/>
    <FaixaSobreNos/>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}
</style>
