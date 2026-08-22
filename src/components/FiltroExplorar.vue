<template>
  <div class="filter-container">
    <div class="filter-row">
      <span class="label">Matéria(s):</span>
      <div class="tags-group">
        <button
          v-for="materia in materias"
          :key="materia"
          class="tag-btn"
          :class="{ active: materiaSelecionada === materia }"
          @click="materiaSelecionada = materia"
        >
          {{ materia }}
          <span v-if="materiaSelecionada === materia && materia !== 'Tudo'" class="close-icon">×</span>
        </button>
      </div>
    </div>

    <div class="filter-row">
      <span class="label">Conteúdo(s):</span>
      <div class="tags-group">
        <button
          v-for="conteudo in conteudosAtuais"
          :key="conteudo"
          class="tag-btn"
          :class="{ active: conteudoSelecionado === conteudo }"
          @click="conteudoSelecionado = conteudo"
        >
          {{ conteudo }}
          <span v-if="conteudoSelecionado === conteudo && conteudo !== 'Tudo'" class="close-icon">×</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const materias = [
  'Tudo', 'Artes', 'Ciências', 'Geografia', 
  'História', 'Língua Inglesa', 'Língua Portuguesa', 'Matemática'
]

const conteudosPorMateria = {
  'Artes': ['Artes Contemporâneas', 'Cores', 'Artes Visuais', 'Música' ],
  'Biologia': ['Botânica', 'Divisão Celular', 'Evolução Natural', 'Seleção Natural', 'Fotossíntese', 'Genética', 'Membrana Plasmática'],
  'Ciências': ['Estados da Água', 'Alimentação Saudável', 'Sistema Solar', 'Célula', 'Evolução', 'Higiene', 'Genética Básica', 'Matéria e Energia', 'Relações Ecológicas', 'Sistema Digestório', 'Sistema Respiratório', 'Sistema Circulatório'],
  'Educação Física': ['Capacidades Físicas', 'Esporte de Presição'],
  'Geografia': ['Bandeiras', 'Cidades'],
  'Espanhol': ['Vocabulário Básico', 'Cidades'],
  'História': ['Dia da bandeira', 'Dia da independência'],
  'Língua Inglesa': ['Números', 'Cores'],
  'Língua Portuguesa': [
    'Alfabetização', 'Interpretação de Texto', 'Ortografia', 
    'Produção de Texto', 'Leitura', 'Gramática', 'Gêneros Textuais', 'Vocabulário e Linguagem'
  ],
  'Matemática': ['Contas', 'Formas geométricas']
}

const materiaSelecionada = ref('Língua Portuguesa')
const conteudoSelecionado = ref('Tudo')

const conteudosAtuais = computed(() => {
  if (materiaSelecionada.value === 'Tudo') {
    const todos = Object.values(conteudosPorMateria).flat()
    return ['Tudo', ...new Set(todos)]
  }
  
  const conteudos = conteudosPorMateria[materiaSelecionada.value] || []
  return ['Tudo', ...conteudos]
})

watch(materiaSelecionada, () => {
  conteudoSelecionado.value = 'Tudo'
})
</script>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fdfbf7;
  padding: 24px;
  font-family: Arial, sans-serif;
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

.close-icon {
  font-size: 1.1rem;
  line-height: 1;
  margin-left: 2px;
}
</style>