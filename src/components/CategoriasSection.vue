<script setup>
</script>
<template>
  <section id="categorias" class="secao-categorias">
    <div class="container-categorias">

      <h2 class="titulo-secao">Ideal para cada momento</h2>
      <p class="subtitulo-secao">Encontre atividades de acordo com o que você precisa.</p>

      <div class="grid-categorias">
        <router-link to="/explorar?categoria=dia-das-maes" class="cartao-categoria cor-maes">
          <div class="caixa-imagem">
            <img src="@/assets/dia_das_maes.jpeg" alt="Dia das Mães" class="imagem-categoria" />
          </div>
          <span class="texto-categoria">Dia das Mães</span>
        </router-link>
        <router-link to="/explorar?categoria=pascoa" class="cartao-categoria cor-pascoa">
          <div class="caixa-imagem">
            <img src="@/assets/pascoa.jpg" alt="Páscoa" class="imagem-categoria" />
          </div>
          <span class="texto-categoria">Páscoa</span>
        </router-link>
        <router-link to="/explorar?categoria=dia-das-criancas" class="cartao-categoria cor-criancas">
          <div class="caixa-imagem">
            <img src="@/assets/dia_das_criancas.jpg" alt="Dia das Crianças" class="imagem-categoria" />
          </div>
          <span class="texto-categoria">Dia das Crianças</span>
        </router-link>
        <router-link to="/explorar?categoria=festa-junina" class="cartao-categoria cor-junina">
          <div class="caixa-imagem">
            <img src="@/assets/festa_junina.webp" alt="Festa Junina" class="imagem-categoria" />
          </div>
          <span class="texto-categoria">Festa Junina</span>
        </router-link>
        <router-link to="/explorar?categoria=dia-da-natureza" class="cartao-categoria cor-natureza">
          <div class="caixa-imagem">
            <img src="@/assets/dia_da_natureza.jpg" alt="Dia da Natureza" class="imagem-categoria" />
          </div>
          <span class="texto-categoria">Dia da Natureza</span>
        </router-link>
        <router-link to="/explorar?categoria=natal" class="cartao-categoria cor-natal">
          <div class="caixa-imagem">
            <img src="@/assets/natal.jpeg" alt="Natal" class="imagem-categoria" />
          </div>
          <span class="texto-categoria">Natal</span>
        </router-link>

      </div>

    </div>
  </section>
</template>

<style scoped>
.secao-categorias {
  background-color: #FAF6EE;
  padding: 50px 20px 60px;
  font-family: 'Fredoka', sans-serif;
}
.container-categorias {
  max-width: 1180px;
  margin: 0 auto;
}
.titulo-secao {
  font-size: 2.3rem;
  font-weight: 700;
  color: #183B3A;
  margin: 0 0 8px 0;
}
.subtitulo-secao {
  color: #2D4847;
  font-size: 1.1rem;
  margin: 0 0 35px 0;
  font-weight: 500;
}
.grid-categorias {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.cartao-categoria {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 16px;
  border: 3.5px solid #183B3A;
  text-decoration: none;
  gap: 16px;
  height: 110px;
  box-sizing: border-box;
  transition: transform 0.2s ease;
}
.cor-maes     { background-color: #F2C94C; }
.cor-pascoa   { background-color: #7BB3E8; }
.cor-criancas { background-color: #D48DF3; }
.cor-junina   { background-color: #FF944D; }
.cor-natureza { background-color: #6FCF97; }
.cor-natal    { background-color: #FF6B6B; }
.caixa-imagem {
  width: 90px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #DDD;
  flex-shrink: 0;
}
.imagem-categoria {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.texto-categoria {
  color: #FFFFFF;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.15;
  max-width: 160px;
}
@media (max-width: 960px) {
  .grid-categorias {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .grid-categorias {
    grid-template-columns: 1fr;
  }
}
</style>
