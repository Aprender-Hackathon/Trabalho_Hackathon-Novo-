<script setup>
</script>

<template>
  <section class="banner-gigante">
    <div class="mancha mancha-topo-esquerda"></div>
    <div class="mancha mancha-baixo-esquerda"></div>
    <div class="mancha mancha-baixo-direita"></div>
    <div class="conteudo-banner">
      <div class="lado-texto">
        <div class="icone-coracao">
          <svg viewBox="0 0 24 24" class="svg-coracao">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <h1 class="titulo-principal">
          <span class="cor-azul-escuro bloco">Inspiração</span>
          <span class="linha-segunda">
            <span class="cor-azul-escuro">para </span>
            <span class="cor-rosa">incluir</span>
          </span>
          <span class="linha-terceira">
            <span class="cor-azul-escuro">e </span>
            <span class="cor-amarela">transformar</span>
          </span>
        </h1>
        <div class="icone-estrela">
          <svg viewBox="0 0 24 24" class="svg-estrela">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>

      </div>
      <div class="lado-pinguim">
        <div class="circulo-amarelo"></div>
        <img src="@/assets/pinguim.png" alt="Pinguim de Cachecol" class="imagem-pinguim" />

      </div>

    </div>

  </section>
    <div class="linha-divisoria"></div>
</template>
<style>
html, body, #app {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  overflow-x: hidden;
}
</style>
<style scoped>
.banner-gigante {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #FAF7F2;
  padding: 100px 6%;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Fredoka', cursive, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
.conteudo-banner {
  position: relative;
  width: 100%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  z-index: 2;
}
.mancha {
  position: absolute;
  z-index: 1;
}
.mancha-topo-esquerda {
  top: 0;
  left: 0;
  width: 220px;
  height: 180px;
  background-color: #319be8;
  border-radius: 0 0 100% 0;
}
.mancha-baixo-esquerda {
  bottom: 0;
  left: 0;
  width: 190px;
  height: 190px;
  background-color: #ee4256;
  border-radius: 0 100% 0 0;
}
.mancha-baixo-direita {
  bottom: 0;
  right: 0;
  width: 240px;
  height: 200px;
  background-color: #5cb76e;
  border-radius: 100% 0 0 0;
}
.lado-texto {
  position: relative;
  flex: 1;
  z-index: 2;
}
.titulo-principal {
  margin: 0;
  font-size: 6rem;
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -1.5px;
}
.bloco { display: block; }
.linha-segunda, .linha-terceira { display: block; }
.cor-azul-escuro { color: #0e3e47; }
.cor-rosa { color: #da4b59; }
.cor-amarela { color: #f0ab1a; }
.icone-coracao {
  position: absolute;
  left: -65px;
  top: 40%;
  transform: translateY(-50%) rotate(-12deg);
}
.svg-coracao {
  width: 60px;
  height: 60px;
  fill: #ee4256;
}
.icone-estrela {
  position: absolute;
  right: 30px;
  top: 45%;
  transform: rotate(15deg);
}
.svg-estrela {
  width: 50px;
  height: 50px;
  fill: #f0ab1a;
}
.lado-pinguim {
  position: relative;
  width: 680px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  flex-shrink: 0;
}
.circulo-amarelo {
  position: absolute;
  width: 580px;
  height: 580px;
  background-color: #f4cc44;
  border-radius: 50%;
  right: 0;
  top: 10px;
  z-index: 1;
}
.imagem-pinguim {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
}
.linha-divisoria {
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: rgb(238, 226, 205);;
  left: 0;

}

@media (max-width: 1300px) {
  .titulo-principal { font-size: 4.8rem; }
  .lado-pinguim { width: 520px; height: 480px; }
  .circulo-amarelo { width: 460px; height: 460px; }
}

@media (max-width: 950px) {
  .banner-gigante { padding: 60px 4%; }
  .conteudo-banner { flex-direction: column; text-align: center; }
  .titulo-principal { font-size: 3.5rem; }
  .icone-coracao { left: 0; top: -30px; }
  .icone-estrela { right: 0; bottom: -20px; top: auto; }
  .lado-pinguim { width: 380px; height: 340px; }
  .circulo-amarelo { width: 320px; height: 320px; right: auto; }

}

@media (max-width: 480px) {
  .titulo-principal { font-size: 2.5rem; }
  .lado-pinguim { width: 290px; height: 260px; }
  .circulo-amarelo { width: 250px; height: 250px; }
}
</style>
