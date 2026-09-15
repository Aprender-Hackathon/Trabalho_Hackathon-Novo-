<template>
  <div class="salvos-view">
    <h1>Itens Salvos</h1>

    <div v-if="itensSalvos.length === 0" class="vazio">
      Você ainda não salvou nenhum item.
    </div>

    <div v-else class="lista-salvos">
      <template v-for="item in itensSalvos" :key="item.id">
        <BotaoExplorar
          v-if="item.tipo === 'atividade'"
          :id="item.id"
          :materia="item.materia"
          :conteudo="item.conteudo"
          :titulo="item.titulo"
          :arquivo="item.arquivo"
          :previewTipo="item.previewTipo"
          :isSalvo="item.salvo"
          @salvar="alternarSalvar(item.id, item.tipo)"
        />
        <BotaoPratica
          v-else
          :id="item.id"
          :titulo="item.titulo"
          :imagem="item.imagem"
          :data="item.data"
          :isSalvo="item.salvo"
          @salvar="alternarSalvar(item.id, item.tipo)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { estadoAtividades } from '@/AtividadesCards'
import { estadoPratica } from '@/PraticaCards'
import BotaoExplorar from '@/components/BotaoExplorar.vue'
import BotaoPratica from '@/components/BotaoPratica.vue'


const itensSalvos = computed(() => {
  const ativ = estadoAtividades.lista
    .filter(i => i.salvo === true)
    .map(i => ({ ...i, tipo: 'atividade' }))

  const prat = estadoPratica.lista
    .filter(i => i.salvo === true)
    .map(i => ({ ...i, tipo: 'pratica' }))

  return [...ativ, ...prat]
})

function alternarSalvar(id, tipo) {

  const lista = tipo === 'atividade' ? estadoAtividades.lista : estadoPratica.lista
  const item = lista.find(a => String(a.id) === String(id))
  if (item) {
    item.salvo = false
  }
}
</script>

<style scoped>
.salvos-view {
  padding: 2rem;
}

.vazio {
  opacity: 0.7;
  margin-top: 1rem;
}

.lista-salvos {
  display: flex;
  flex-wrap: wrap;
}
</style>
