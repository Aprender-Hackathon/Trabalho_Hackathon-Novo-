<script setup>
</script>

<template>
  <section class="banner-gigante">
    <div class="mancha mancha-topo-esquerda"></div>
    <div class="mancha mancha-baixo-esquerda"></div>
    <div class="mancha mancha-baixo-direita"></div>

    <div class="conteudo-banner">
      <div class="lado-texto">
        <h1 class="titulo-principal">
          <span class="bloco cor-escuro">Encontre os</span>
          <span class="bloco cor-rosa">Materiais</span>
          <span class="bloco cor-escuro">que você</span>
          <span class="bloco cor-escuro">precisa!</span>
        </h1>
      </div>

      <div class="lado-pinguim">
        <div class="mancha-amarela-fundo"></div>
        <img src="@/assets/pinguim.png" alt="Pinguim" class="imagem-pinguim" />
      </div>
    </div>
  </section>
  <div class="linha-divisoria"></div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap');

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
  width: 100%;
  background-color: #FAF8F5;
  padding: 60px 5%;
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
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  z-index: 2;
}

.mancha {
  position: absolute;
  z-index: 1;
}

.mancha-topo-esquerda {
  top: 0;
  left: 0;
  width: 250px;
  height: 190px;
  background-color: #3897f0;
  border-radius: 0 0 100% 0;
}

.mancha-baixo-esquerda {
  bottom: 0;
  left: 0;
  width: 240px;
  height: 200px;
  background-color: #e04f62;
  border-radius: 0 100% 0 0;
}

.mancha-baixo-direita {
  bottom: 0;
  right: 0;
  width: 250px;
  height: 190px;
  background-color: #7bc043;
  border-radius: 100% 0 0 0;
}

.lado-texto {
  position: relative;
  flex: 1;
  z-index: 2;
  padding-left: 40px;
}

.titulo-principal {
  margin: 0;
  font-size: clamp(2.5rem, 5vw + 1rem, 5.8rem);
  line-height: 1.08;
  font-weight: 700;
  letter-spacing: -1px;
}

.bloco { display: block; }

.cor-escuro { color: #1c3d44; }
.cor-rosa { color: #e04f62; }

.lado-pinguim {
  position: relative;
  width: 100%;
  max-width: 580px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  flex-shrink: 0;
}

.mancha-amarela-fundo {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #f7d348;
  border-radius: 50% 0 50% 50%;
  transform: rotate(-15deg);
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
  width: 100%;
  height: 3px;
  background-color: #eae0d0;
}

@media (max-width: 600px) {
  .banner-gigante {
    padding: 50px 20px;
  }

  .conteudo-banner {
    flex-direction: column;
    text-align: center;
  }

  .lado-texto {
    padding-left: 0;
  }

  .lado-pinguim {
    max-width: 280px;
  }

  .mancha-topo-esquerda {
    width: 100px;
    height: 80px;
  }

  .mancha-baixo-esquerda {
    width: 90px;
    height: 80px;
  }

  .mancha-baixo-direita {
    width: 100px;
    height: 90px;
  }
}
</style>
