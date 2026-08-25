<script setup>
import { computed } from 'vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'
import { estadoAtividades } from '@/AtividadesCards'

// Filtra dinamicamente todas as atividades que possuem salvo: true
const materiaisSalvos = computed(() => {
  return estadoAtividades.lista.filter(item => item.salvo)
})

function removerDosSalvos(id) {
  const item = estadoAtividades.lista.find(a => a.id === id)
  if (item) {
    item.salvo = false
  }
}
</script>

<template>
  <div class="salvos-container">
    <header class="salvos-header">
      <h1>Salvos</h1>
      <p class="subtitle">Todos os materiais</p>
    </header>

    <main v-if="materiaisSalvos.length > 0" class="cards">
      <BotaoExplorar
        v-for="item in materiaisSalvos"
        :key="item.id"
        :id="item.id"
        :titulo="item.titulo"
        :imagem="item.imagem"
        :materia="item.materia"
        :conteudo="item.conteudo"
        :isSalvo="item.salvo"
        @salvar="removerDosSalvos(item.id)"
      />
    </main>

    <div v-else class="empty-state">
      <p>Você ainda não tem materiais salvos.</p>
    </div>
  </div>
</template>

<style scoped>
.salvos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0 1.5rem;
  min-height: 100vh;
}

.salvos-header {
  margin-bottom: 2rem;
  padding: 0 70px;
}

.salvos-header h1 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
}

.subtitle {
  font-size: 1.1rem;
  color: #333;
  margin-top: 0.5rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
  margin-bottom: 4rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  font-size: 1.2rem;
  color: #666;
  min-height: 40vh;
}
</style>
