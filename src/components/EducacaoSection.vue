<script setup>
const audiences = [
  {
    title: 'Para Educadores',
    text: 'Atividades prontas, adaptadas e organizadas para facilitar o planejamento e tornar o ensino mais acessível.',
    color: 'var(--coral)',
  },
  {
    title: 'Para Famílias',
    text: 'Materiais simples e práticos para acompanhar o aprendizado das crianças em casa com mais confiança.',
    color: 'var(--yellow)',
  },
  {
    title: 'Para Voluntários',
    text: 'Recursos educativos para apoiar projetos sociais, reforço escolar e ações de inclusão na comunidade.',
    color: 'var(--green)',
  },
  {
    title: 'Para Todos',
    text: 'Conteúdos acessíveis e acolhedores que incentivam o aprendizado, a criatividade e o desenvolvimento de cada pessoa.',
    color: 'var(--blue)',
  },
]
</script>

<template>
  <section id="sobre" class="mission">
    <div class="container">
      <div class="mission-header">
        <h2>Educação é para todos!</h2>
        <p>
          Acreditamos que cada pessoa possui talentos, potencial e formas únicas de aprender e participar do mundo.
          Nosso objetivo é conectar famílias, educadores, voluntários e a comunidade em um espaço que incentiva a diversidade,
          o respeito e o desenvolvimento de todos.
        </p>
      </div>

      <div class="audience-grid">
        <article
          v-for="item in audiences"
          :key="item.title"
          class="audience-card"
          :style="{ '--card-color': item.color }"
        >
          <div class="audience-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" :stroke="item.color" stroke-width="2">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
            </svg>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission-header{
  text-align:center;
  max-width:760px;
  margin:0 auto 44px;
}
.mission-header h2{
  font-size:clamp(1.8rem, 3vw, 2.3rem);
  color:var(--ink);
  margin-bottom:16px;
}
.mission-header p{
  font-size:1.08rem;
  color:#4B6362;
  line-height:1.6;
}
.audience-grid{
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  gap:22px;
}
.audience-card{
  background:var(--white);
  border:2px solid var(--card-color, var(--coral));
  border-radius:var(--radius-md);
  padding:30px 24px;
  text-align:center;
  box-shadow:var(--shadow-card);
  transition:transform .18s ease;
}
.audience-card:hover{transform:translateY(-4px);}
.audience-icon{
  width:64px;height:64px;
  border-radius:50%;
  margin:0 auto 18px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:color-mix(in srgb, var(--card-color, var(--coral)) 16%, white);
}
.audience-card h3{
  font-size:1.15rem;
  margin-bottom:10px;
  color:var(--ink);
}
.audience-card p{
  font-size:0.94rem;
  color:#5A716F;
  line-height:1.55;
  margin:0;
}

@media (max-width: 980px){
  .audience-grid{grid-template-columns:repeat(2, 1fr);}
}
@media (max-width: 600px){
  .audience-grid{grid-template-columns:1fr;}
}
</style>
