<script setup>

</script>

<template>
  <div class="container-banner">
    <div class="cartao-principal">

      <!-- MANCHAS ORGANICAS NOS CANTOS -->
      <div class="mancha-topo-esquerda"></div>
      <div class="mancha-baixo-esquerda"></div>
      <div class="mancha-baixo-direita"></div>

      <!-- LADO ESQUERDO: TEXTO E ICONES -->
      <div class="lado-texto">

        <!-- CORAÇÃO FLUTUANTE À ESQUERDA -->
        <div class="icone-coracao">
          <svg viewBox="0 0 24 24" class="svg-coracao">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        <!-- TÍTULO COM AS CORES DA IMAGEM -->
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

        <!-- ESTRELA FLUTUANTE À DIREITA -->
        <div class="icone-estrela">
          <svg viewBox="0 0 24 24" class="svg-estrela">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>

      </div>

      <!-- LADO DIREITO: CÍRCULO E PINGUIM -->
      <div class="lado-pinguim">

        <!-- TRÊS RISCOS VERMELHOS EM CIMA DO PINGUIM -->
        <div class="riscos-detalhe">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <!-- CÍRCULO AMARELO NO FUNDO -->
        <div class="circulo-amarelo"></div>

        <!-- SUA IMAGEM DO PINGUIM -->
        <!-- Substitua 'pinguim.png' pelo caminho correto no seu projeto -->
        <img src="@/assets/pinguim.png" alt="Pinguim de Cachecol" class="imagem-pinguim" />

      </div>

    </div>
  </div>
</template>

<style scoped>
/* IMPORTAÇÃO DA FONTE REDONDINHA IGUAL À DA FOTO */
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&display=swap');

.container-banner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.cartao-principal {
  position: relative;
  width: 100%;
  max-width: 980px;
  background-color: #FAF7F2; /* Fundo creme claro da imagem */
  border-radius: 24px;
  padding: 60px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  font-family: 'Fredoka', cursive, sans-serif;
  box-sizing: border-box;
}

/* --- MANCHAS ORGANICAS DOS CANTOS --- */
.mancha-topo-esquerda {
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 90px;
  background-color: #319be8; /* Azul */
  border-radius: 0 0 80% 0;
}

.mancha-baixo-esquerda {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90px;
  height: 90px;
  background-color: #ee4256; /* Vermelho/Rosa */
  border-radius: 0 80% 0 0;
}

.mancha-baixo-direita {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
  height: 100px;
  background-color: #5cb76e; /* Verde */
  border-radius: 80% 0 0 0;
}

/* --- SEÇÃO DO TEXTO --- */
.lado-texto {
  position: relative;
  flex: 1;
  z-index: 2;
  padding-left: 20px;
}

.titulo-principal {
  margin: 0;
  font-size: 3.4rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.bloco {
  display: block;
}

.linha-segunda, .linha-terceira {
  display: block;
}

/* PALETA DE CORES DAS LETRAS */
.cor-azul-escuro {
  color: #0e3e47;
}

.cor-rosa {
  color: #da4b59;
}

.cor-amarela {
  color: #f0ab1a;
}

/* --- ÍCONES FLUTUANTES (CORAÇÃO E ESTRELA) --- */
.icone-coracao {
  position: absolute;
  left: -25px;
  top: 42%;
  transform: translateY(-50%) rotate(-12deg);
}

.svg-coracao {
  width: 34px;
  height: 34px;
  fill: #ee4256;
}

.icone-estrela {
  position: absolute;
  right: 25px;
  top: 48%;
  transform: rotate(15deg);
}

.svg-estrela {
  width: 28px;
  height: 28px;
  fill: #f0ab1a;
}

/* --- SEÇÃO DO PINGUIM --- */
.lado-pinguim {
  position: relative;
  width: 420px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  flex-shrink: 0;
}

.circulo-amarelo {
  position: absolute;
  width: 360px;
  height: 360px;
  background-color: #f4cc44;
  border-radius: 50%;
  right: 10px;
  top: 10px;
  z-index: 1;
}

.imagem-pinguim {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  z-index: 2;
}

/* DETALHE DOS RISQUINHOS VERMELHOS EM CIMA DO PINGUIM */
.riscos-detalhe {
  position: absolute;
  top: 15px;
  left: 90px;
  display: flex;
  gap: 6px;
  z-index: 3;
}

.riscos-detalhe span {
  display: block;
  width: 5px;
  height: 18px;
  background-color: #ee4256;
  border-radius: 4px;
}

.riscos-detalhe span:nth-child(1) {
  transform: rotate(-25deg);
}

.riscos-detalhe span:nth-child(2) {
  transform: rotate(0deg);
  height: 22px;
  margin-top: -4px;
}

.riscos-detalhe span:nth-child(3) {
  transform: rotate(25deg);
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 850px) {
  .cartao-principal {
    flex-direction: column;
    padding: 50px 30px;
    text-align: center;
  }

  .lado-texto {
    padding-left: 0;
    margin-bottom: 30px;
  }

  .titulo-principal {
    font-size: 2.6rem;
  }

  .icone-coracao {
    left: 0;
    top: -10px;
  }

  .icone-estrela {
    right: 0;
    top: auto;
    bottom: -15px;
  }

  .lado-pinguim {
    width: 300px;
    height: 300px;
  }

  .circulo-amarelo {
    width: 270px;
    height: 270px;
    right: 15px;
  }

  .riscos-detalhe {
    left: 50px;
    top: 5px;
  }
}

@media (max-width: 480px) {
  .titulo-principal {
    font-size: 2.1rem;
  }

  .lado-pinguim {
    width: 240px;
    height: 240px;
  }

  .circulo-amarelo {
    width: 210px;
    height: 210px;
  }
}
</style>
