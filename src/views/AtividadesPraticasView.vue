<script setup>
import { ref, computed } from 'vue'
import FiltroPratica from '@/components/FiltroPratica.vue'
import BotaoPratica from '@/components/BotaoPratica.vue'
import { estadoPratica } from '@/PraticaCards'
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue'

const limite = ref(20)

const filtroEscolhido = ref({
  data: 'Tudo',
})

function alternarSalvar(id) {
  const item = estadoPratica.lista.find(a => a.id === id)
  if (item) {
    item.salvo = !item.salvo
  }
}

const atividadesFiltradas = computed(() => {
  const lista = estadoPratica?.lista || []
  return lista.filter((item) => {
    return (
      filtroEscolhido.value.data === 'Tudo' ||
      item.data === filtroEscolhido.value.data
    )
  })
})
</script>

<template>
  <div class="explorar-container">
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
  width: 100%;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 16px 12px;
}

.cards :deep(> *) {
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px;
    padding: 20px 70px;
  }
}
</style>
