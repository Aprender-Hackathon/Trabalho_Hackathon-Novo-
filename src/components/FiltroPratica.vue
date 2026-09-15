<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  filtroInicial: {
    type: Object,
    default: () => ({ data: 'Tudo' })
  }
})

const emit = defineEmits(['filtro'])

const feriados = [
  'Tudo',
  'Ano Novo',
  'Carnaval',
  'Dia da Escola',
  'Dia da Árvore',
  'Dia das Crianças',
  'Dia das Mães',
  'Dia do Amigo',
  'Dia dos Animais',
  'Festa Junina',
  'Natal',
  'Páscoa',
]

const dataSelecionada = ref('Tudo')
const mostrarMais = ref(false)

watch(
  () => props.filtroInicial?.data,
  (novaData) => {
    if (novaData) {
      dataSelecionada.value = novaData

      const index = feriados.indexOf(novaData)
      if (index >= 6) {
        mostrarMais.value = true
      }
    }
  },
  { immediate: true }
)

function selecionarData(data) {
  dataSelecionada.value = data
  emit('filtro', {
    data: dataSelecionada.value,
  })
}
</script>

<template>
  <div class="filter-container">
    <div class="filter-row">
      <span class="label">Datas comemorativas:</span>
      <div class="tags-group">
        <button
          v-for="data in (mostrarMais ? feriados : feriados.slice(0, 5))"
          :key="data"
          class="tag-btn"
          :class="{ active: dataSelecionada === data }"
          @click="selecionarData(data)"
        >
          {{ data }}
        </button>
        <button
          v-if="feriados.length > 5"
          class="tag-btn btn-toggle"
          @click="mostrarMais = !mostrarMais"
        >
          {{ mostrarMais ? '-' : '+' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8EFE0;
  border: 1px solid #EADBBF;
  margin: 20px auto;
  padding: 16px 24px;
  font-family: Arial, sans-serif;
  border-radius: 18px;
  width: 900px;
  max-width: 100%;
  box-sizing: border-box;
}

.filter-row {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.label {
  font-weight: bold;
  font-size: 0.95rem;
  color: #1a1a1a;
  white-space: nowrap;
}

.tags-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.tag-btn {
  background-color: #FAF6EE;
  border: 1px solid #E5DAC9;
  color: #2b2b2b;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  outline: none;
}

.tag-btn:hover {
  background-color: #ffffff;
  border-color: #D6C7B2;
}

.tag-btn.active {
  background-color: #ff6b6b;
  border-color: #ff6b6b;
  color: #ffffff;
}
</style>
