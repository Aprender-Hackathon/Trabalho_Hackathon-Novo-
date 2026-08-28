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
          v-for="data in mostrarMais ? feriados : feriados.slice(0, 6)"
          :key="data"
          class="tag-btn"
          :class="{ active: dataSelecionada === data }"
          @click="selecionarData(data)"
        >
          {{ data }}
        </button>
        <button
          v-if="feriados.length > 6"
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
  flex-direction: column;
  gap: 16px;
  background-color: #fdfbf7;
  padding: 24px 20px;
  font-family: Arial, sans-serif;
  justify-content: center;
}

.filter-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}

.label {
  font-weight: bold;
  font-size: 1.1rem;
  color: #1a1a1a;
  min-width: 120px;
  padding-top: 6px;
}

.tags-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 900px;
}

.tag-btn {
  background-color: #ffffff;
  border: 1.5px solid #8ecae6;
  color: #1a1a1a;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  outline: none;
}

.tag-btn:hover {
  background-color: #f0f8ff;
}

.tag-btn.active {
  background-color: #ff6b6b;
  border-color: #ff6b6b;
  color: #ffffff;
}
</style>