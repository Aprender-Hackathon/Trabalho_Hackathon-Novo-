<script setup>
import BaixarPdf from './BaixarPdf.vue';

defineProps ({
    materia: String,
    titulo: String,
    conteudo: String,
    imagem: String,
    descricao: String
})
</script>

<template>
    <div class="all">
        <img
        :src="imagem"
        :alt="titulo"
        class="image"
      >
        <div class="lado">

        <h3>
            {{titulo || 'Título'}}
        </h3>

        <div class="mat_con">

            <p>
                {{ materia || 'Matemática'}}
            </p>
            <p>
                {{ conteudo || 'Frações'}}
            </p>

        </div>

        <p>
            {{ descricao || 'Quebra-cabeça educativo para praticar a identificação e a representação de frações.'}}
        </p>

        <BaixarPdf/>

        </div>
    </div>
</template>

<style scoped>
.all{
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding: 5vw;
}
.mat_con {
    display: flex;
    justify-content: baseline;
    align-items: center;
    gap: 15px;
}
.mat_con p{
    background-color: #D1495B;
    color: #FFFBF6;
    padding: 5px 15px;
    border-radius: 100px;
    font-family: 'Bpmf Huninn';
}
.image{
    width: 100%;
    max-width: 300px;
    height: auto;
}
</style>