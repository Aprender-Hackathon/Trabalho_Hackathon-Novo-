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
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ee4256" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4.5"/><path d="M4 20c0-4.2 3.6-7.5 8-7.5s8 3.3 8 7.5"/>
            </svg>
          </div>
          <h3 class="titulo-cartao">Para Educadores</h3>
          <p class="texto-cartao">
            Atividades prontas, adaptadas e organizadas para facilitar o planejamento e tornar o ensino mais acessível.
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

<style scoped>
.secao-missao {
  background-color: #FAF7F2;
  padding: 60px 20px;
  font-family: 'Fredoka', sans-serif;
  color: #0e3e47;
}
.container-principal {
  max-width: 1200px;
  margin: 0 auto;
}
.cabecalho-missao {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
}
.titulo-secao {
  font-size: 2.5rem;
  margin-bottom: 15px;
}
.descricao-secao {
  font-size: 1.1rem;
  line-height: 1.5;
}
.grid-publicos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.cartao-publico {
  background: #FAF7F2;
  border-radius: 20px;
  padding: 40px 20px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-educadores  { border: 3px solid #ee4256; }
.card-familias    { border: 3px solid #f0ab1a; }
.card-voluntarios { border: 3px solid #5cb76e; }
.card-todos       { border: 3px solid #319be8; }
.circulo-icone {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}
.icone-educadores  { background: #efc5cb; }
.icone-familias    { background: #fff9c7; }
.icone-voluntarios { background: #d1f5da; }
.icone-todos       { background: #d0edfd; }
.titulo-cartao {
  font-size: 1.4rem;
  margin-bottom: 10px;
}
.texto-cartao {
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
}
.linha-divisoria {
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: rgb(238, 226, 205);;
  left: 0;
}
@media (max-width: 900px) {
  .grid-publicos {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .grid-publicos {
    grid-template-columns: 1fr;
  }
}
</style>
