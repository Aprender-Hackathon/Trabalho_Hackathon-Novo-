<script setup>
import { computed } from 'vue'
import { estadoAtividades } from '@/AtividadesCards'
import HistoricoItem from './HistoricoItem.vue'

const atividadesAdicionadas = computed(() => {
  return estadoAtividades.lista.filter(
    atividade => atividade.criadoPor === 1
  )
})
</script>

<template>
  <div class="historico-lista">

    <HistoricoItem
      v-for="atividade in atividadesAdicionadas"
      :key="atividade.id"
      :atividade="atividade"
    />

  </div>
</template>

<style scoped>

.historico-lista {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

</style>
