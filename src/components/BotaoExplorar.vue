<script setup>
defineProps({
  materia: String,
  conteudo: String,
  titulo: String,
  imagem: String
})
</script>
<template>
  <div class="card">

    <img 
      :src="imagem" 
      class="imagem"
    >
    <div class="laranja">

      <h2>hgvcxz</h2>
<a class="materia">{{ materia }}</a>
<span class="conteudo">{{ conteudo }}</span>

    </div>

  </div>
</template>

<style scoped>

.card {
  width: 240px;
  height: 300px;
  border: 3.5px solid #F5893C;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  background: white;
}

.imagem {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.laranja {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: #F5893C;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
}

.materia {
  margin-top: 50px;
  font-size: 19px;
  color: #333;
  text-decoration: underline;
}

.conteudo {
  margin-top: 50px;
  font-size: 19px;
  color: #333;
  text-decoration: underline;
}
h2 {
color: #1a1a1a;
  font-size: 20px;
  margin: 5px;
}
</style>