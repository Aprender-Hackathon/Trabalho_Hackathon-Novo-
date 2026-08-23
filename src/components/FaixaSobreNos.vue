<script setup>
</script>
<template>
  <section class="secao-sobre">
    <div class="container-sobre">
      <div class="cartao-sobre">
        <div class="caixa-foto-equipe">
          <img src="@/assets/equipe.png" alt="Foto da Equipe do Projeto" class="foto-equipe"/></div>
        <div class="conteudo-sobre">
          <h3 class="titulo-sobre">Inclusão transforma o mundo!</h3>
          <p class="texto-sobre">
            Veja quem tornou esse projeto possível, visando incentivar igualdade, acessibilidade e participação.</p>
          <router-link to="/sobre-nos" class="botao-saiba-mais">Saiba mais sobre o projeto
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.secao-sobre {
  padding: 50px 20px;
  font-family: 'Fredoka', sans-serif;
  display: flex;
  justify-content: center;
}
.container-sobre {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
.cartao-sobre {
  background-color: #FFFFFF;
  border-radius: 24px;
  padding: 35px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
}
.caixa-foto-equipe {
  width: 380px;
  height: 250px;
}
.foto-equipe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.conteudo-sobre {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.titulo-sobre {
  font-size: 2rem;
  font-weight: 700;
  color: #183B3A;
  margin: 0 0 12px 0;
}
.texto-sobre {
  font-size: 1.05rem;
  color: #4A5D5C;
  line-height: 1.5;
  margin: 0 0 24px 0;
  max-width: 480px;
}
.botao-saiba-mais {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #FCD882;
  color: #183B3A;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 12px 26px;
  border-radius: 30px;
  text-decoration: none;
}
@media (max-width: 850px) {
  .cartao-sobre {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
    gap: 25px;
  }
  .caixa-foto-equipe {
    width: 100%;
    max-width: 320px;
    height: 210px;
  }
  .conteudo-sobre {
    align-items: center;
  }
  .texto-sobre {
    max-width: 100%;
  }
}
</style>
