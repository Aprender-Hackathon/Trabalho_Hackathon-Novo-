<template>
  <section class="about-section">
    <div class="content-container">
      <div class="text-content">
        <p>
          Este site foi criado com o propósito de promover a inclusão, acolher e transformar vidas através da educação, facilitando o acesso a informação.
        </p>
        <p>
          Sabemos que cada estudante é único e aprende de maneiras diferentes. Queremos que as famílias, educadores, alunos e voluntários consigam obter recursos de estudo mais facilmente, contribuindo para um aprendizado mais aberto.
        </p>
        <p>
          Percebendo a dificuldade ao acesso de atividades de estudo, alunas do Instituto Federal Catarinense projetaram e construíram esse projeto de modo acolhedor e descomplicado.
        </p>
      </div>

      <div class="image-container">
        
        <img src="" alt="Nossa equipe" />
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.about-section {
  background-color: #f7f2ed;
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: #1a1a1a;
  font-family: sans-serif;
  line-height: 1.5;
  font-size: 1rem;
  text-align: justify;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column-reverse;
  }
}
</style>