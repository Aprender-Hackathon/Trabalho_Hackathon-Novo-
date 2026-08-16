<script setup>
</script>

<template>
  <section class="team">
    <div class="team-photo">
      <span class="placeholder">📷</span>
      <!-- Troque por: <img src="@/assets/equipe.jpg" alt="Equipe Aprender+" /> -->
    </div>

    <div class="team-text">
      <h2>Inclusão transforma o mundo!</h2>
      <p>
        Veja quem tornou esse projeto possível, visando incentivar igualdade, acessibilidade e
        participação.
      </p>
      <router-link to="/sobre" class="btn-saiba-mais">
        Saiba mais sobre o projeto <span>→</span>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.team {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px 64px 64px;
  background-color: var(--color-cream-soft);
  flex-wrap: wrap;
}

.team-photo {
  width: 280px;
  height: 180px;
  border-radius: 12px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.placeholder {
  font-size: 2.5rem;
  opacity: 0.5;
}

.team-text {
  max-width: 460px;
}

.team-text h2 {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.team-text p {
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-saiba-mais {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-yellow);
  color: #1a1a1a;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 24px;
}

.btn-saiba-mais:hover {
  filter: brightness(1.05);
}

@media (max-width: 900px) {
  .team {
    padding: 32px 24px 48px;
    justify-content: center;
    text-align: center;
  }
}
</style>
