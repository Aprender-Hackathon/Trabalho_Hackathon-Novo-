<script setup>
</script>
<template>
  <section id="sobre" class="secao-missao">
    <div class="container-principal">
      <div class="cabecalho-missao">
        <h2 class="titulo-secao">Educação é para todos!</h2>
        <p class="descricao-secao">
          Acreditamos que cada pessoa possui talentos, potencial e formas únicas de aprender e participar do
          mundo. Nosso objetivo é conectar famílias, educadores, voluntários e a comunidade em um
          espaço que incentiva a diversidade, o respeito e o desenvolvimento de todos.
        </p>
      </div>
      <div class="grid-publicos">
        <article class="cartao-publico card-educadores">
          <div class="circulo-icone icone-educadores">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ee4256" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="4.5"/>
              <path d="M4 20c0-4.2 3.6-7.5 8-7.5s8 3.3 8 7.5"/>
            </svg>
          </div>
          <h3 class="titulo-cartao">Para Educadores</h3>
          <p class="texto-cartao">Atividades prontas, adaptadas e organizadas para facilitar o planejamento e tornar o ensino mais acessível.
          </p>
        </article>
        <article class="cartao-publico card-familias">
          <div class="circulo-icone icone-familias">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#f0ab1a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="4.5"/>
              <path d="M4 20c0-4.2 3.6-7.5 8-7.5s8 3.3 8 7.5"/>
            </svg>
          </div>
          <h3 class="titulo-cartao">Para Famílias</h3>
          <p class="texto-cartao">
            Materiais simples e práticos para acompanhar o aprendizado das crianças em casa com mais confiança.
          </p>
        </article>

        <!-- Voluntários -->
        <article class="cartao-publico card-voluntarios">
          <div class="circulo-icone icone-voluntarios">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#5cb76e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="4.5"/>
              <path d="M4 20c0-4.2 3.6-7.5 8-7.5s8 3.3 8 7.5"/>
            </svg>
          </div>
          <h3 class="titulo-cartao">Para Voluntários</h3>
          <p class="texto-cartao">
            Recursos educativos para apoiar projetos sociais, reforço escolar e ações de inclusão na comunidade.
          </p>
        </article>
        <article class="cartao-publico card-todos">
          <div class="circulo-icone icone-todos">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#319be8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="4.5"/>
              <path d="M4 20c0-4.2 3.6-7.5 8-7.5s8 3.3 8 7.5"/>
            </svg>
          </div>
          <h3 class="titulo-cartao">Para Todos</h3>
          <p class="texto-cartao">
            Conteúdos acessíveis e acolhedores que incentivam o aprendizado, a criatividade e o desenvolvimento de cada pessoa.
          </p>
        </article>
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
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Nunito:wght@700&display=swap');
.secao-missao {
  width: 100%;
  background: #FAF7F2;
  padding: 60px 20px 60px;
  color: #0e3e47;
}
.container-principal {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}
.cabecalho-missao {
  width: 100%;
  max-width: 950px;
  margin: 0 auto 50px;
  text-align: center;
}
.titulo-secao {
  margin: 0 0 18px;
  font-family: 'Fredoka', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.15;
  color: #0e3e47;
}
.descricao-secao {
  margin: 0 auto;
  font-family: 'Nunito', sans-serif;
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.55;
  color: #0e3e47;
}
.grid-publicos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.cartao-publico {
  background: #FFFFFF;
  border-radius: 25px;
  padding: 45px 24px 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.cartao-publico:hover {
  transform: translateY(-3px);
}
.card-educadores { border: 3px solid #ee4256; }
.card-familias   { border: 3px solid #f0ab1a; }
.card-voluntarios { border: 3px solid #5cb76e; }
.card-todos      { border: 3px solid #319be8; }
.circulo-icone {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  flex-shrink: 0;
}
.icone-educadores  { background: #fce8eb; }
.icone-familias    { background: #fef5e4; }
.icone-voluntarios { background: #eaf6ed; }
.icone-todos       { background: #e6f4fc; }
.titulo-cartao {
  margin: 0 0 14px;
  font-family: 'Fredoka', sans-serif;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.2;
  color: #0e3e47;
}
.texto-cartao {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1.5;
  color: #0e3e47;
}
.linha-divisoria {
  width: 100%;
  height: 1px;
  background: #e8dfd3;
}
@media (max-width: 600px) {
  .secao-missao {
    padding: 45px 16px 30px;
  }
  .cabecalho-missao {
    margin-bottom: 35px;
  }
  .titulo-secao {
    font-size: 2rem;
  }
  .descricao-secao {
    font-size: 0.98rem;
  }
  .grid-publicos {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .cartao-publico {
    padding: 35px 20px 30px;
  }
  .circulo-icone {
    width: 100px;
    height: 100px;
    margin-bottom: 22px;
  }
  .circulo-icone svg {
    width: 38px;
    height: 38px;
  }
  .titulo-cartao {
    font-size: 1.35rem;
  }
  .texto-cartao {
    font-size: 0.95rem;
  }
}
</style>
