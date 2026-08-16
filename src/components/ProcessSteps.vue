<script setup>
const passos = [
  { icone: '🔍', titulo: 'Explore', cor: 'green', texto: 'Descubra atividades inclusivas por matéria, conteúdos e objetivos!' },
  { icone: '❤️', titulo: 'Inspire-se', cor: 'red', texto: 'Salve as melhores atividades para aplicar ou apenas se inspirar!' },
  { icone: '💡', titulo: 'Coloque em prática', cor: 'yellow', texto: 'Baixe suas atividades em PDF ou PNG e imprima-as para a aplicação.' },
  { icone: '👥', titulo: 'Transforme', cor: 'blue', texto: 'Então ensine com paciência e transforme o mundo!' },
]
</script>

<template>
  <section class="process">
    <h2 class="title">É Simples, Acolhedor e Transformador</h2>

    <div class="steps">
      <template v-for="(passo, index) in passos" :key="passo.titulo">
        <div class="step">
          <span class="icon">{{ passo.icone }}</span>
          <h3 :class="passo.cor">{{ passo.titulo }}</h3>
          <p>{{ passo.texto }}</p>
        </div>
        <span v-if="index < passos.length - 1" class="arrow">→</span>
      </template>
    </div>
  </section>
</template>

<style scoped>
.process {
  padding: 56px 64px;
  text-align: center;
  background-color: var(--color-cream-soft);
}

.title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 40px;
}

.steps {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.step {
  max-width: 200px;
}

.icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}

.step h3 {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.step h3.green { color: var(--color-green); }
.step h3.red { color: var(--color-primary); }
.step h3.yellow { color: #d9a441; }
.step h3.blue { color: #4c93b8; }

.step p {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.5;
}

.arrow {
  align-self: center;
  font-size: 1.4rem;
  color: #999;
  margin-top: 20px;
}

@media (max-width: 900px) {
  .process {
    padding: 40px 24px;
  }

  .arrow {
    display: none;
  }
}
</style>
