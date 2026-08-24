<template>
  <div class="salvos-container">
    <header class="salvos-header">
      <h1>Salvos</h1>
      <p class="subtitle">Todos os materiais</p>
    </header>

    <main v-if="materiaisSalvos.length > 0" class="cards-grid">
      <div
        v-for="item in materiaisSalvos"
        :key="item.id"
        class="card-item"
      >
        <div class="card-image-wrapper">
          <img :src="item.imagem" :alt="item.titulo" class="card-image" />

          <BotaoSalvar
            :isSalvo="true"
            @salvar="removerDosSalvos(item.id)"
            class="card-heart-btn"
          />
        </div>
        <div class="card-info">
          <h3 class="card-title">{{ item.titulo }}</h3>
          <span class="card-category">{{ item.materia || item.categoria }}</span>
        </div>
      </div>
    </main>

    <div v-else class="empty-state">
      <p>Você ainda não tem materiais salvos.</p>
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BotaoSalvar from '@/components/BotaoSalvar.vue'
import TheFooter from '@/components/TheFooter.vue'
import { estadoAtividades } from '@/AtividadesCards.js'

// Filtra dinamicamente as atividades que possuem salvo === true
const materiaisSalvos = computed(() => {
  return estadoAtividades.lista.filter(item => item.salvo === true)
})

function removerDosSalvos(id) {
  const item = estadoAtividades.lista.find(a => a.id === id)
  if (item) {
    item.salvo = false
  }
}
</script>

<style scoped>
.salvos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0 1.5rem;
  background-color: #faf8f5;
  min-height: 100vh;
}

.salvos-header {
  margin-bottom: 2rem;
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

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 4rem;
}

.card-item {
  border: 2px solid #f28038;
  border-radius: 16px;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  background-color: #f0f0f0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-heart-btn {
  position: absolute;
  bottom: 12px;
  right: 12px;
}

.card-info {
  background-color: #f28038;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin: 0;
}

.card-category {
  font-size: 0.9rem;
  text-decoration: underline;
  color: #000;
}

.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  font-size: 1.2rem;
  color: #666;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
