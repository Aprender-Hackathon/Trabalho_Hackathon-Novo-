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
 @click="selecionarMateria(materia)">
          {{ materia }}
        </button>
      </div>
    </div>

    <div class="filter-row">
      <span class="label">Conteúdo(s):</span>
      <div class="tags-group">
        <button
          v-for="conteudo in (mostrarMais ? conteudosAtuais : conteudosAtuais.slice(0, 6))"
          :key="conteudo"
          class="tag-btn"
          :class="{ active: conteudoSelecionado === conteudo }"
          @click="selecionarConteudo(conteudo)">
          {{ conteudo }}
        </button>
        <button
          v-if="conteudosAtuais.length > 6"
          class="tag-btn"
          @click="mostrarMais = !mostrarMais">
          {{ mostrarMais ? '-' : '+' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits (['filtro'])

const materias = [
  'Tudo', 'Artes', 'Biologia', 'Ciências', 'Educação Física', 'Ensino Religioso', 'Espanhol', 'Filosofia', 'Física', 'Geografia', 'História', 'Inglês', 'Matemática', 'Português', 'Química', 'Sociologia'
]

const conteudosPorMateria = {
  'Artes': ['Artes Visuais','História da Arte', 'Música' ],

  'Biologia': ['Biotecnologia', 'Botânica', 'Celulas e seus processos', 'Ecologia','Genética e Evolução', 'Zoologia'],

  'Ciências': ['Corpo Humano', 'Ecologia e Ambiente', 'Matéria e Energia', 'Seres Vivos', 'Terra e Espaço'],

  'Educação Física': ['Corpo e Movimento', 'Jogos e Esportes', 'Saúde e Qualidade de Vida'],

  'Ensino Religioso': ['Identidade e Diversidade', 'Religião e Cultura', 'Valores e Ética'],

  'Espanhol': ['Comunicação Básica', 'Leitura e Compreensão', 'Verbos e Uso da Língua'],

  'Filosofia': ['Conhecimento e Razão', 'Ética e Moral', 'Filosofia Clássica', 'Filosofia Medieval', 'Filosofia Política', 'Introdução e Origem'],

  'Física': ['Calor e Termodinâmica', 'Eletricidade e Magnetismo', 'Energia e Momento', 'Forças e Dinâmica', 'Gases', 'Movimento', 'Ondas e Óptica'],

  'Geografia': ['Brasil e Mundo', 'Cartografia e Orientação', 'Economia e Globalização', 'Espaço e Paisagem', 'Natureza e Ambiente', 'População e Espaço'],

  'História': ['Antiguidade', 'Brasil Imperio e República', 'Colonização', 'Fontes e Mémorias', 'Guerras e Conflitos', 'Idade Média e Renascimento', 'Revoluções e Tranformações'],

  'Inglês': ['Base da Língua', 'Verbos e Tempos', 'Vocabulário e Leitura'],

  'Matemática': ['Algébra', 'Combinatória e Probabilidade', 'Conjuntos', 'Equações e Sistemas', 'Funções', 'Geometria espacial', 'Geometria plana', 'Matrizes e Determinantes', 'Números e Operações', 'Razões, Proporções e Porcentagens', 'Trigonometria'],

  'Português': ['Alfabetização e Leitura', 'Classes de Palavras', 'Coesão e Produção', 'Concordância e Regência', 'Gêneros Textuais', 'Orações e Períodos', 'Ortografia e Acentuação', 'Semântica e Variação', 'Síntaxse'],

  'Química': ['Átomo e modelos atômicos', 'Eletroquímica', 'Ligações e Funções', 'Matérias e Misturas', 'Química orgânica', 'Reações químicas', 'Soluções','Termoquímica e Equilíbrio'],

  'Sociologia': ['Cultura e Estado','Introdução à Sociologia', 'Pensadores Clássicos', 'Poder e Política', 'Trabalho e Capitalismo']

}

const materiaSelecionada = ref('Português')
const conteudoSelecionado = ref('Tudo')
const mostrarMais = ref(false)

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
  mostrarMais.value = false
})

function selecionarMateria(materia) {
  materiaSelecionada.value = materia
  conteudoSelecionado.value = 'Tudo'
  emit('filtro', {
    materia: materiaSelecionada.value,
    conteudo: conteudoSelecionado.value
  })
}
function selecionarConteudo(conteudo) {
  conteudoSelecionado.value = conteudo
  emit('filtro', {
    materia: materiaSelecionada.value,
    conteudo: conteudoSelecionado.value
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

.close-icon {
  font-size: 1.1rem;
  line-height: 1;
  margin-left: 2px;
}
</style>
