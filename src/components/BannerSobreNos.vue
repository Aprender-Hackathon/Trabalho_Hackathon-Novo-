<script setup>
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
          <span class="linha cor-azul">tornou o</span>
          <span class="linha linha-destaque">
            <span class="cor-rosa">Aprender+</span>
            <span class="cor-azul"> real</span>
          </span>
        </h1>
      </div>

      <div class="lado-direito">

        <div class="fundo-amarelo-organico"></div>

        <img src="@/assets/pinguim.png" alt="Pinguim de Cachecol" class="imagem-pinguim" />
      </div>
    </div>
  </section>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&display=swap');

.banner-referencia {
  position: relative;
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  min-height: 100vh;
  background-color: #f4ebdc;
  padding: 60px 7%;
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
  max-width: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  z-index: 2;
}
.mancha-topo-azul {
  position: absolute;
  top: 0;
  left: 0;
  width: 260px;
  height: 200px;
  background-color: #319BE8;
  border-radius: 0 0 85% 0;
  z-index: 1;
}
.mancha-baixo-vermelha {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 280px;
  height: 220px;
  background-color: #EE4256;
  border-radius: 0 85% 0 0;
  z-index: 1;
}
.mancha-baixo-verde {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 240px;
  height: 200px;
  background-color: #5CB76E;
  border-radius: 85% 0 0 0;
  z-index: 1;
}
.lado-esquerdo {
  position: relative;
  flex: 1;
  max-width: 700px;
  z-index: 2;
  padding-left: 40px;
}
.titulo-referencia {
  margin: 0;
  font-size: clamp(3rem, 5vw, 5.5rem);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -1px;
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
  width: 48%;
  max-width: 620px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  flex-shrink: 0;
}
.fundo-amarelo-organico {
  position: absolute;
  width: 90%;
  height: 90%;
  background-color: #F4CC44;
  border-radius: 40% 60% 30% 70% / 50% 40% 60% 50%;
  right: 0;
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
@media (max-width: 600px) {

  .banner-referencia {
    min-height: auto;
    padding: 50px 20px;
  }
  .conteudo {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
  .lado-esquerdo {
    padding-left: 0;
    max-width: 100%;
  }
  .lado-direito {
    width: 100%;
    max-width: 320px;
  }
  .decoracao-riscos-azuis,
  .decoracao-estrela {
    display: none;
  }
  .mancha-topo-azul {
    width: 120px;
    height: 90px;
  }

  .mancha-baixo-vermelha {
    width: 110px;
    height: 90px;
  }

  .mancha-baixo-verde {
    width: 120px;
    height: 100px;
  }

}

</style>
