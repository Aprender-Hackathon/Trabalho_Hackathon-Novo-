<script setup>
const categories = [
  { label: 'Dia das Mães', className: 'cat-maes' },
  { label: 'Páscoa', className: 'cat-pascoa' },
  { label: 'Dia das Crianças', className: 'cat-criancas' },
  { label: 'Festa Junina', className: 'cat-junina' },
  { label: 'Dia da Natureza', className: 'cat-natureza' },
  { label: 'Natal', className: 'cat-natal' },
]
</script>

<template>
  <section id="categorias" class="categories">
    <div class="container">
      <h2>Ideal para cada momento</h2>
      <p>Encontre atividades de acordo com o que você precisa.</p>

      <div class="category-grid">
        <router-link
          v-for="cat in categories"
          :key="cat.label"
          to="/explorar"
          class="category-card"
          :class="cat.className"
        >
          <span>{{ cat.label }}</span>
        </router-link>
      </div>

      <div class="about-strip">
        <div class="about-photo">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.6" aria-hidden="true">
            <circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.4"/>
            <path d="M3 21c0-3.6 2.7-6.5 6-6.5s6 2.9 6 6.5"/>
            <path d="M14 21c0-2.7 1.7-4.9 4-5.6"/>
          </svg>
        </div>
        <div>
          <h3>Inclusão transforma o mundo!</h3>
          <p>Veja quem tornou esse projeto possível, visando incentivar igualdade, acessibilidade e participação.</p>
          <router-link to="/sobre" class="link-arrow">
            Saiba mais sobre o projeto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories h2{
  font-size:clamp(1.7rem, 2.8vw, 2.1rem);
  margin-bottom:10px;
}
.categories > .container > p{
  color:#5A716F;
  margin-bottom:34px;
  font-size:1.05rem;
}
.category-grid{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:22px;
  margin-bottom:64px;
}
.category-card{
  position:relative;
  height:120px;
  border-radius:var(--radius-sm);
  border:2px solid var(--teal-deep);
  overflow:hidden;
  display:flex;
  align-items:center;
  padding:0 26px;
  color:var(--white);
  font-family:'Baloo 2', sans-serif;
  font-weight:700;
  font-size:1.3rem;
  box-shadow:var(--shadow-card);
  transition:transform .18s ease;
}
.category-card:hover{transform:translateY(-3px) scale(1.01);}
.category-card::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(120deg, rgba(0,0,0,0.34), rgba(0,0,0,0.05));
  z-index:1;
}
.category-card span{position:relative; z-index:2; max-width:60%;}

.cat-maes{background:linear-gradient(135deg, #F0637B, #D8465A);}
.cat-pascoa{background:linear-gradient(135deg, #6FC0E8, #3E93C4);}
.cat-criancas{background:linear-gradient(135deg, #B79BEE, #8C67D9);}
.cat-junina{background:linear-gradient(135deg, #F2A94E, #E0862B);}
.cat-natureza{background:linear-gradient(135deg, #7BCB8F, #4C9F62);}
.cat-natal{background:linear-gradient(135deg, #E2545C, #B22E36);}

.about-strip{
  display:grid;
  grid-template-columns:0.9fr 1.1fr;
  gap:36px;
  align-items:center;
  background:var(--white);
  border-radius:var(--radius-md);
  padding:26px;
  box-shadow:var(--shadow-card);
}
.about-photo{
  width:100%;
  height:180px;
  border-radius:var(--radius-sm);
  overflow:hidden;
  background:linear-gradient(135deg, var(--blue-soft), var(--purple-soft));
  display:flex;
  align-items:center;
  justify-content:center;
}
.about-strip h3{
  font-size:1.4rem;
  margin-bottom:10px;
}
.about-strip p{
  color:#5A716F;
  line-height:1.6;
  margin:0 0 20px;
}
.link-arrow{
  display:inline-flex;
  align-items:center;
  gap:8px;
  background:var(--yellow);
  color:var(--ink);
  font-weight:800;
  padding:12px 22px;
  border-radius:999px;
  font-size:0.95rem;
  transition:transform .15s ease;
}
.link-arrow:hover{transform:translateX(3px);}

@media (max-width: 980px){
  .category-grid{grid-template-columns:repeat(2, 1fr);}
  .about-strip{grid-template-columns:1fr;}
}
@media (max-width: 600px){
  .category-grid{grid-template-columns:1fr;}
}
</style>
