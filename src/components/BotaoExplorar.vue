<script setup>
defineProps({
  materia: String,
})
</script>
<template>
  <div class="card">

    <img 
      src="@/assets/google_foto-2120x848.webp" 
      class="imagem"
    >
    <div class="laranja">

<a class="materia">{{ materia }}</a>


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
}

</style>