<script setup>
import { ref, computed } from 'vue'
import FiltroPratica from '@/components/FiltroPratica.vue'
import BotaoPratica from '@/components/BotaoPratica.vue'
import { estadoPratica } from '@/PraticaCards'
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue'
import BannerAtvPraticas from '@/components/BannerAtvPraticas.vue'

const limite = ref(20)

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo',
})

function alternarSalvar(id) {
  const item = estadoPratica.lista.find(a => a.id === id)
  if (item) {
    item.salvo = !item.salvo
  }
}

const atividadesFiltradas = computed(() => {
  return estadoPratica.lista.filter((item) => {
    const matchMateria =
      filtroEscolhido.value.materia === 'Tudo' || item.materia === filtroEscolhido.value.materia
    const matchConteudo =
      filtroEscolhido.value.conteudo === 'Tudo' || item.conteudo === filtroEscolhido.value.conteudo
    return matchMateria && matchConteudo
  })
})
</script>

<template>
  <div class="explorar-container">
        <BannerAtvPraticas />
    <FiltroPratica @filtro="filtroEscolhido = $event" />

    <div class="cards">
      <BotaoPratica
        v-for="item in atividadesFiltradas.slice(0, limite)"
        :key="item.id"
        :id="item.id"
        :titulo="item.titulo"
        :imagem="item.imagem"
        :data="item.data"
        :isSalvo="item.salvo"
        @salvar="alternarSalvar(item.id)"
      />
    </div>

    <BotaoMaisResultados v-if="atividadesFiltradas.length > limite" @carregar="limite += 20" />
  </div>
</template>

<style scoped>
.explorar-container {
  min-height: 100vh;
  padding-bottom: 4rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 70px;
}
</style>
