<script setup>
import { ref, computed } from 'vue'
import FiltroExplorar from '@/components/FiltroExplorar.vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'
import { estadoAtividades } from '@/AtividadesCards'
import { estadoPratica } from '@/PraticaCards'
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue'

const limite = ref(20)

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo',
})


function alternarSalvar(id) {
  let item = estadoAtividades.lista.find(a => a.id === id)
  if (item) {
    item.salvo = !item.salvo
    return
  }

  item = estadoPratica.lista.find(a => a.id === id)
  if (item) {
    item.salvo = !item.salvo
  }
}


const atividadesFiltradas = computed(() => {
  const todasAsAtividades = [...estadoAtividades.lista, ...estadoPratica.lista]

  return todasAsAtividades.filter((item) => {
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
    <FiltroExplorar @filtro="filtroEscolhido = $event" />

    <div class="cards">
      <BotaoExplorar
        v-for="item in atividadesFiltradas.slice(0, limite)"
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
