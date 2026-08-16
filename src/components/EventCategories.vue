<script setup>
const eventos = [
  { nome: 'Dia das Mães', cor: 'yellow', emoji: '💐' },
  { nome: 'Páscoa', cor: 'blue', emoji: '🐰' },
  { nome: 'Dia das Crianças', cor: 'purple', emoji: '🎈' },
  { nome: 'Festa Junina', cor: 'orange', emoji: '🌽' },
  { nome: 'Dia da Natureza', cor: 'green', emoji: '🌳' },
  { nome: 'Natal', cor: 'red', emoji: '🎅' },
]
</script>

<template>
  <section class="events">
    <h2 class="title">Ideal para cada momento</h2>
    <p class="subtitle">Encontre atividades de acordo com o que você precisa.</p>

    <div class="grid">
      <button v-for="evento in eventos" :key="evento.nome" class="event-btn" :class="evento.cor">
        <span class="emoji">{{ evento.emoji }}</span>
        <span class="nome">{{ evento.nome }}</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.events {
  padding: 56px 64px;
  background-color: var(--color-cream-soft);
}

.title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.subtitle {
  color: #555;
  margin-bottom: 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.event-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 24px;
  border-radius: 12px;
  border: 2px solid #1a1a1a;
  font-weight: 700;
  font-size: 1.05rem;
  color: #ffffff;
  cursor: pointer;
  text-align: left;
}

.emoji {
  font-size: 1.6rem;
}

.event-btn.yellow { background-color: #f0b93d; }
.event-btn.blue { background-color: #6fb7dd; }
.event-btn.purple { background-color: #b98ed8; }
.event-btn.orange { background-color: #e8963e; }
.event-btn.green { background-color: #6bbf6b; }
.event-btn.red { background-color: var(--color-primary); }

.event-btn:hover {
  filter: brightness(1.05);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .events {
    padding: 40px 24px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
