<script setup>

</script>

<template>
  <section class="hero">
    <div class="hero-blob blue"></div>
    <div class="hero-blob coral"></div>
    <div class="hero-blob green"></div>

    <svg class="hero-heart" width="30" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-10-9.3C0.4 8 2 4.5 5.4 4a4.9 4.9 0 016.6 2 4.9 4.9 0 016.6-2C22 4.5 23.6 8 22 11.7 19.5 16.4 12 21 12 21z"/>
    </svg>

    <div class="hero-inner">
      <div>
        <h1 class="hero-title">
          Inspiração<br>
          para <span class="accent-coral">incluir</span><br>
          e <span class="accent-yellow">transformar</span>
        </h1>
        <p class="hero-copy">
          Atividades práticas e acessíveis para educadores, famílias e voluntários ensinarem com mais autonomia, carinho e inclusão.
        </p>
        <div class="hero-cta">
          <button class="btn btn-primary btn-lg">Explorar atividades</button>
          <button class="btn btn-lg">Como funciona</button>
        </div>
      </div>

      <div class="hero-art">
        <svg class="hero-sparkle one" width="22" height="30" viewBox="0 0 22 30" fill="none" aria-hidden="true">
          <path d="M11 0v10M11 20v10M0 15h9M13 15h9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <svg class="hero-sparkle two" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.2 6.8H21l-5.6 4.1 2.2 6.9L12 15.7 6.4 19.8l2.2-6.9L3 8.8h6.8z"/>
        </svg>


      </div>
    </div>
  </section>
</template>

<style scoped>
.hero{
  position:relative;
  overflow:hidden;
  padding:0;
}
.hero-blob{
  position:absolute;
  z-index:0;
}
.hero-blob.blue{
  top:0; left:0;
  width:170px; height:170px;
  background:var(--blue-soft);
  border-radius:0 0 100% 0;
}
.hero-blob.coral{
  bottom:0; left:0;
  width:130px; height:130px;
  background:#FBD9DC;
  border-radius:0 100% 0 0;
}
.hero-blob.green{
  bottom:0; right:0;
  width:220px; height:170px;
  background:var(--green-soft);
  border-radius:100% 0 0 0;
}
.hero-inner{
  position:relative;
  z-index:1;
  display:grid;
  grid-template-columns:1.1fr 1fr;
  align-items:center;
  gap:40px;
  padding:88px 32px 96px;
  max-width:1180px;
  margin:0 auto;
}
.hero-heart{
  position:absolute;
  left:22px;
  top:46%;
  color:var(--coral);
}
.hero-title{
  font-size:clamp(2.4rem, 4.4vw, 3.6rem);
  font-weight:800;
  color:var(--teal-deep);
}
.hero-title .accent-coral{color:var(--coral);}
.hero-title .accent-yellow{color:var(--yellow);}
.hero-copy{
  margin:22px 0 34px;
  font-size:1.15rem;
  max-width:480px;
  color:#3A5453;
}
.hero-cta{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
}
.hero-art{
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}

.hero-sparkle{
  position:absolute;
  color:var(--coral);
}
.hero-sparkle.one{top:2%; left:8%;}
.hero-sparkle.two{top:38%; left:-2%; color:var(--yellow);}

@media (max-width: 980px){
  .hero-inner{grid-template-columns:1fr; text-align:center; padding-top:56px;}
  .hero-copy{margin-left:auto; margin-right:auto;}
  .hero-cta{justify-content:center;}
  .hero-art{order:-1;}
}
</style>
