<template>
  <section class="secao-processo">
    <div class="container-processo">
      <h2 class="titulo-processo">É Simples, Acolhedor e Transformador</h2>
      <div class="fluxo-processo">
        <div class="cartao-passo">
          <div class="caixa-icone">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5cb76e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <h3 class="cor-verde">Explore</h3>
          <p>Descubra atividades inclusivas por matéria, conteúdos e objetivos!</p>
        </div>
        <div class="caixa-seta" aria-hidden="true">
          <svg width="65" height="32" viewBox="0 0 36 24" fill="none" stroke="#b8b8b8" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12h30"/>
            <path d="M22 4l10 8-10 8"/>
          </svg>
        </div>
        <div class="cartao-passo">
          <div class="caixa-icone">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ee4256" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
            </svg>
          </div>
          <h3 class="cor-coral">Inspire-se</h3>
          <p>Salve as melhores atividades para aplicar ou apenas se inspirar!</p>
        </div>
        <div class="caixa-seta" aria-hidden="true">
          <svg width="65" height="32" viewBox="0 0 36 24" fill="none" stroke="#b8b8b8" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12h30"/>
            <path d="M22 4l10 8-10 8"/>
          </svg>
        </div>
        <div class="cartao-passo">
          <div class="caixa-icone">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#f0ab1a" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18h6"/>
              <path d="M10 22h4"/>
              <path d="M15 14.5A7 7 0 1 0 9 14.5a3 3 0 0 1 1 2.1v1.4h4v-1.4a3 3 0 0 1 1-2.1z"/>
            </svg>
          </div>
          <h3 class="cor-amarelo">Coloque em pratica</h3>
          <p>Baixe suas atividades em PDF ou PNG e imprima-as para a aplicação.</p>
        </div>
        <div class="caixa-seta" aria-hidden="true">
          <svg width="65" height="32" viewBox="0 0 36 24" fill="none" stroke="#b8b8b8" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12h30"/>
            <path d="M22 4l10 8-10 8"/>
          </svg>
        </div>
        <div class="cartao-passo">
          <div class="caixa-icone">
            <svg width="88" height="80" viewBox="0 0 24 24" fill="none" stroke="#319be8" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3 class="cor-azul">Transforme</h3>
          <p>Então ensine com paciência e transforme o mundo!</p>
        </div>
      </div>
    </div>
  </section>
 <div class="linha-divisoria"></div>
</template>
<style scoped>
.secao-processo {
  font-family: 'Fredoka', sans-serif;
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: #FCF4E8;
  padding: 60px 40px;
  color: #0e3e47;
  box-sizing: border-box;
}
.container-processo {
  max-width: 1280px;
  margin: 0 auto;
}
.titulo-processo {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: #183B3A;
  margin: 0 0 55px 0;
}
.fluxo-processo {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.cartao-passo {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.caixa-icone {
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.cartao-passo h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  white-space: nowrap;
}
.cor-verde   { color: #5CB76E; }
.cor-coral   { color: #EE4256; }
.cor-amarelo { color: #F0AB1A; }
.cor-azul    { color: #319BE8; }
.cartao-passo p {
  font-size: 0.95rem;
  color: #2D4847;
  line-height: 1.45;
  font-weight: 500;
  margin: 0;
  max-width: 210px;
}
.caixa-seta {
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.linha-divisoria {
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: rgb(238, 226, 205);
  left: 0;
}
@media (max-width: 600px) {
  .fluxo-processo {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .caixa-seta {
    height: auto;
    transform: rotate(90deg);
    margin: 5px 0;
  }
  .cartao-passo p {
    max-width: 280px;
  }
}
</style>
