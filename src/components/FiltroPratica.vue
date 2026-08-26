<template>
  <div class="filter-container">
    <div class="filter-row">
      <span class="label">Datas comemorativas:</span>
      <div class="tags-group">
        <button
          v-for="data in (mostrarMais ? feriados : feriados.slice(0, 6))"
          :key="data"
          class="tag-btn"
          :class="{ active: dataSelecionada === data }"
          @click="selecionarData(data)">
          {{ data }}
        </button>
        <button
          v-if="feriados.length > 6"
          class="tag-btn btn-toggle"
          @click="mostrarMais = !mostrarMais">
          {{ mostrarMais ? '-' : '+' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filtro'])

const feriados = [
  'Dia das crianças',
  'Dia das mães',
  'Festa Junina',
  'Natal',
  'Páscoa'
]

const dataSelecionada = ref(feriados[0])
const mostrarMais = ref(false)

function selecionarData(data) {
  dataSelecionada.value = data
  emit('filtro', {
    feriados: dataSelecionada.value
  })
}
</script>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fdfbf7;
  padding: 24px 70px;
  font-family: Arial, sans-serif;
  justify-content: center

}

.filter-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100vw;
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