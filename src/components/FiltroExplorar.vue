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
  'História', 'Língua Inglesa', 'Língua Portuguesa', 'Matemática', 'Filosofia', 'Educação Física', 'Espanhol', 'Biologia', 'Física', 'Sociologia', 'Química'
]

const conteudosPorMateria = {
  'Artes': ['Artes Contemporâneas', 'Cores', 'Artes Visuais', 'Música' ],

  'Física': ['Eletrodinâmica', 'Força de Atrito', 'Eletrostática', 'Gravidade', 'Óptica Geométrica', 'Termodinâmica', 'Cinemática'],

  'Biologia': ['Botânica', 'Divisão Celular', 'Evolução Natural', 'Seleção Natural', 'Fotossíntese', 'Genética', 'Membrana Plasmática'],

  'Ciências': ['Estados da Água', 'Alimentação Saudável', 'Sistema Solar', 'Célula', 'Evolução', 'Higiene', 'Genética Básica', 'Matéria e Energia', 'Relações Ecológicas', 'Sistema Digestório', 'Sistema Respiratório', 'Sistema Circulatório'],

  'Educação Física': ['Capacidades Físicas', 'Esporte de Presição'],

  'Geografia': ['Espaço Rural', 'Globalização', 'Geopolítica', 'Paisagem', 'População', 'Relevo', 'Clima e Vegetação', 'Comercio Internacional', 'Industrialização','Urbanização', 'Matriz Energética', 'Meio Ambiente', 'Municipios e Estados'],

  'Espanhol': ['Vocabulário Básico', 'Cidades'],

  'Matemática': ['Adição', 'Análise combinatória', 'Ângulos', 'Área', 'Divisão', 'Equações do 1º grau', 'Estatística', 'Expressões algébricas', 'Fatoração', 'Frações', 'Função afim', 'Função exponencial', 'Função quadrática', 'Geometria analítica', 'Geometria espacial', 'Geometria plana', 'Inequações', 'Matemática financeira', 'Multiplicação', 'Números', 'Perímetro', 'Polinômios', 'Potenciação', 'Problemas matemáticos', 'Produtos notáveis', 'Progressão aritmética', 'Progressão geométrica', 'Radiciação', 'Razões e proporções', 'Regra de três', 'Sistema monetário', 'Sistemas de equações', 'Sólidos geométricos', 'Subtração', 'Teorema de Pitágoras', 'Tabelass e gráficos', 'Triângulos', 'Tempo e calendário'],

  'Filosofia': ['Aristóteles', 'Platão', 'Sócrates', 'Mito e Razão', 'Ética', 'Política', 'Sofistas', 'Pre-socráticos'],

  'História': ['Brasil Imperio', 'Colonização', 'Escravidão', 'Idade Média', 'Revolução Industrial', 'Revolução Francesa', 'Egito Antigo', 'Grécia Antiga', 'Familia e comunidade', 'Independência do Brasil', 'Povos Indígenas', 'Proclamação da República', 'Redemocratização','Simbolos Nacionais'],

  'Língua Inglesa': ['Números', 'Cores'],

  'Língua Portuguesa': ['Acentuação', 'Alfabetização', 'Coesão e coerência', 'Concordância', 'Concordância nominal', 'Concordância verbal', 'Contos e fábulas', 'Crônica', 'Formação de palavras', 'Frase, oração e período', 'Funções da linguagem', 'Gêneros discursivos', 'Gêneros jornalísticos', 'Gêneros textuais', 'Leitura e interpretação', 'Orações coordenadas', 'Orações subordinadas', 'Período composto', 'Pontuação e sentido', 'Pontuação', 'Produção de frases', 'Produção de texto', 'Redação dissertativa', 'Regência básica', 'Regência', 'Semântica', 'Sílabas', 'Sinônimos e antônimos', 'Substantivo e adjetivo', 'Termos da oração', 'Variação linguística'], 

  'Química': ['Átomo e modelos atômicos', 'Cinética química', 'Eletroquímica', 'Equilíbrio químico', 'Estados físicos da matéria', 'Funções inorgânicas', 'Ligações químicas', 'Misturas e separação', 'Química orgânica', 'Reações químicas', 'Soluções e concentrados', 'Tabela periódica', 'Termoquímica'],

  'Sociologia': ['Introdução à Sociologia', 'Poder Estado e política', 'Socialização e Instituições']

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