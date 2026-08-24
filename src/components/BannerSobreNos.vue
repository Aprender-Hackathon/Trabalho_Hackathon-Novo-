<script setup>
const pinguimUrl = new URL('./assets/pinguim.png', import.meta.url).href
</script>

<template>
  <section class="banner-referencia">

    <div class="mancha mancha-topo-azul"></div>
    <div class="mancha mancha-baixo-vermelha"></div>
    <div class="mancha mancha-baixo-verde"></div>

    <div class="conteudo">

      <div class="lado-esquerdo">

        <div class="decoracao-riscos-azuis">
          <svg viewBox="0 0 60 40" fill="none">
            <path d="M14 32L4 12M30 28L30 6M46 32L56 12" stroke="#319BE8" stroke-width="7" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="decoracao-estrela">
          <svg viewBox="0 0 100 100" fill="#F4CC44">
            <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36"/>
          </svg>
        </div>

        <h1 class="titulo-referencia">
          <span class="linha cor-azul">Conheça quem</span>
          <span class="linha cor-azul">tornou o/a</span>
          <span class="linha linha-destaque">
            <span class="cor-rosa">Aprender+</span>
            <span class="cor-azul"> real</span>
          </span>
        </h1>
      </div>

      <div class="lado-direito">

        <div class="fundo-amarelo-organico"></div>

        <img :src="pinguimUrl" alt="Pinguim de Cachecol" class="imagem-pinguim" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&display=swap');

.banner-referencia {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #FAF7F2;
  padding: 80px 6%;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Fredoka', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteudo {
  position: relative;
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

.mancha-topo-azul {
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 170px;
  background-color: #319BE8;
  border-radius: 0 0 85% 0;
  z-index: 1;
}

.mancha-baixo-vermelha {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 240px;
  height: 190px;
  background-color: #EE4256;
  border-radius: 0 85% 0 0;
  z-index: 1;
}

.mancha-baixo-verde {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 170px;
  background-color: #5CB76E;
  border-radius: 85% 0 0 0;
  z-index: 1;
}

.lado-esquerdo {
  position: relative;
  flex: 1;
  max-width: 620px;
  z-index: 2;
}

.titulo-referencia {
  margin: 0;
  font-size: 5rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.linha {
  display: block;
}

.linha-destaque {
  display: block;
}

.cor-azul {
  color: #0E3E47;
}

.cor-rosa {
  color: #DA4B59;
}

.decoracao-riscos-azuis {
  position: absolute;
  top: -42px;
  left: 15px;
  width: 45px;
  height: 30px;
}

.decoracao-estrela {
  position: absolute;
  top: -45px;
  left: 310px;
  width: 38px;
  height: 38px;
}

.lado-direito {
  position: relative;
  width: 540px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.fundo-amarelo-organico {
  position: absolute;
  width: 500px;
  height: 460px;
  background-color: #F4CC44;
  border-radius: 40% 60% 30% 70% / 50% 40% 60% 50%;
  right: -10px;
  top: 0;
  z-index: 1;
}

.imagem-pinguim {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
}

</style>
