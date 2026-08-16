<script setup>
const cards = [
  {
    title: 'Educadores',
    text: 'Encontre ideias e atividades para tornar suas aulas mais inclusivas.',
  },
  {
    title: 'Famílias',
    text: 'Descubra formas de apoiar uma educação mais acolhedora.',
  },
  {
    title: 'Voluntários',
    text: 'Participe e ajude a transformar experiências por meio da inclusão.',
  },
  {
    title: 'Todos',
    text: 'A inclusão é responsabilidade de todos nós.',
  },
]
</script>

<template>
  <section class="audience">
    <div class="title">
      <span>♡</span>
      <h2>Educação é para todos!</h2>
      <p>
        Cada pessoa tem um papel importante na construção de uma educação
        mais inclusiva.
      </p>
    </div>

    <div class="cards">
      <div
        v-for="card in cards"
        :key="card.title"
        class="card"
      >
        <div class="icon">♡</div>

        <h3>{{ card.title }}</h3>

        <p>{{ card.text }}</p>

        <button>Saiba mais →</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.audience {
  padding: 70px 60px;
  background-color: white;
}

.title {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 45px;
}

.title span {
  color: var(--color-primary);
  font-size: 30px;
}

.title h2 {
  margin: 10px 0;
  color: var(--color-teal);
  font-size: 38px;
}

.title p {
  color: #666;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 1200px;
  margin: auto;
}

.card {
  padding: 30px 22px;
  border-radius: 20px;
  text-align: center;
  background-color: var(--color-cream);
}

.card:nth-child(2) {
  background-color: #eef8ff;
}

.card:nth-child(3) {
  background-color: #eff9ed;
}

.card:nth-child(4) {
  background-color: #fff0f0;
}

.icon {
  font-size: 35px;
  color: var(--color-primary);
}

.card h3 {
  color: var(--color-teal);
  font-size: 22px;
}

.card p {
  color: #555;
  min-height: 80px;
}

.card button {
  border: none;
  background: transparent;
  color: var(--color-primary);
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
