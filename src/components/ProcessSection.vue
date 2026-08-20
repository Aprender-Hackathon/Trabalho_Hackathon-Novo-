<script setup>
const steps = [
  {
    title: 'Explore',
    text: 'Descubra atividades inclusivas por matéria, conteúdos e objetivos!',
    color: 'var(--green)',
    icon: 'search',
  },
  {
    title: 'Inspire-se',
    text: 'Salve as melhores atividades para aplicar ou apenas se inspirar!',
    color: 'var(--coral)',
    icon: 'heart',
  },
  {
    title: 'Coloque em prática',
    text: 'Baixe suas atividades em PDF ou PNG e imprima-as para a aplicação.',
    color: '#D8A927',
    icon: 'bulb',
  },
  {
    title: 'Transforme',
    text: 'Então ensine com paciência e transforme o mundo!',
    color: 'var(--blue)',
    icon: 'people',
  },
]
</script>

<template>
  <section class="process">
    <div class="container">
      <h2>É Simples, Acolhedor e Transformador</h2>

      <div class="process-grid-wrap">
        <template v-for="(step, index) in steps" :key="step.title">
          <div class="process-step">
            <div class="process-icon">
              <svg v-if="step.icon === 'search'" width="28" height="28" viewBox="0 0 24 24" fill="none" :stroke="step.color" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
              <svg v-else-if="step.icon === 'heart'" width="26" height="26" viewBox="0 0 24 24" fill="none" :stroke="step.color" stroke-width="2.2"><path d="M12 21s-7.5-4.6-10-9.3C0.4 8 2 4.5 5.4 4a4.9 4.9 0 016.6 2 4.9 4.9 0 016.6-2C22 4.5 23.6 8 22 11.7 19.5 16.4 12 21 12 21z"/></svg>
              <svg v-else-if="step.icon === 'bulb'" width="26" height="26" viewBox="0 0 24 24" fill="none" :stroke="step.color" stroke-width="2.2"><path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.7.6 1 1.4 1 2.3h6c0-.9.3-1.7 1-2.3A7 7 0 0012 2z"/></svg>
              <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" :stroke="step.color" stroke-width="2.2"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6"/><circle cx="18" cy="9" r="2.6"/><path d="M15.5 20c0-2.6 1.9-4.7 4.5-5.2"/></svg>
            </div>
            <h3 :style="{ color: step.color }">{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>

          <div v-if="index < steps.length - 1" class="process-arrow" aria-hidden="true">
            <svg width="26" height="16" viewBox="0 0 26 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 8h22M17 2l7 6-7 6"/></svg>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process{
  background:var(--cream-soft);
  border-top:1px solid rgba(24,59,58,0.06);
  border-bottom:1px solid rgba(24,59,58,0.06);
}
.process h2{
  text-align:center;
  font-size:clamp(1.7rem, 2.8vw, 2.1rem);
  margin-bottom:48px;
}
.process-grid-wrap{
  display:grid;
  grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;
  align-items:start;
  gap:6px;
}
.process-step{
  text-align:center;
  padding:0 12px;
}
.process-icon{
  width:64px;height:64px;
  margin:0 auto 18px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:var(--white);
  box-shadow:var(--shadow-card);
}
.process-step h3{
  font-size:1.1rem;
  margin-bottom:8px;
}
.process-step p{
  font-size:0.92rem;
  color:#5A716F;
  line-height:1.55;
  margin:0;
}
.process-arrow{
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:22px;
  color:#C9BFAE;
}

@media (max-width: 980px){
  .process-grid-wrap{grid-template-columns:1fr; text-align:center;}
  .process-arrow{transform:rotate(90deg); padding:6px 0;}
}
</style>
