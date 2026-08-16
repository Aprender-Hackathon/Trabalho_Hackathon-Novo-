<script setup>
import IconPinguim from './icons/IconPinguim.vue'
</script>

<template>
  <section class="hero">
    <div class="bolinha azul"></div>
    <div class="bolinha verde"></div>

    <div class="hero-text">
      <span class="heart">♡</span>

      <h1>
        <span>Inspiração</span><br />
        <span>para </span>
        <strong>incluir</strong>
        <span> ⭐</span><br />
        <span>e </span>
        <b>transformar</b>
      </h1>
    </div>

    <div class="mascot">
      <div class="mascot-circle">
        <IconPinguim />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 500px;
  padding: 60px 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-cream);
  position: relative;
  overflow: hidden;
}

.hero-text {
  position: relative;
  z-index: 2;
}

.heart {
  color: var(--color-primary);
  font-size: 35px;
}

h1 {
  margin: 10px 0;
  font-size: 55px;
  line-height: 1.15;
  font-weight: 800;
  color: var(--color-teal);
}

h1 strong {
  color: var(--color-primary);
}

h1 b {
  color: var(--color-yellow);
}

.mascot {
  position: relative;
  z-index: 2;
}

.mascot-circle {
  width: 300px;
  height: 300px;

  border-radius: 50%;
  background-color: var(--color-yellow);

  display: flex;
  align-items: center;
  justify-content: center;
}

.mascot-circle svg {
  width: 210px;
  height: 250px;
}

.bolinha {
  position: absolute;
  border-radius: 50%;
}

.azul {
  width: 130px;
  height: 130px;
  background-color: var(--color-blue);
  top: -50px;
  left: -40px;
}

.verde {
  width: 150px;
  height: 150px;
  background-color: var(--color-green);
  right: -50px;
  bottom: -60px;
}

@media (max-width: 900px) {
  .hero {
    padding: 50px 25px;
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  h1 {
    font-size: 40px;
  }

  .mascot-circle {
    width: 240px;
    height: 240px;
  }
}
</style>
