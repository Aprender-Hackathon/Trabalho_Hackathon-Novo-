<script setup>
import BannerSection from '@/components/BannerSection.vue';
import EducacaoSection from '@/components/EducacaoSection.vue';
import ProcesoSection from '@/components/ProcesoSection.vue';
import CategoriasSection from '@/components/CategoriasSection.vue';
import FaixaSobreNos from '@/components/FaixaSobreNos.vue';

import { ref, computed } from 'vue'

import FiltroExplorar from '@/components/FiltroExplorar.vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'
import { atividades } from '@/AtividadesCards.js'

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo',
})


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
  <FiltroExplorar @filtro="filtroEscolhido = $event" />
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
  <div>
    
    <BannerSection />
    <EducacaoSection />
    <ProcesoSection />
    <CategoriasSection />
    <ExplorarView/>
    <FaixaSobreNos/>
  </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}
</style>
