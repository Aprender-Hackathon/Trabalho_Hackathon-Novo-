<script setup>
import VerAtv from '@/components/VerAtv.vue';

const atividadeTeste = {
    id: 1,
    titulo: "Dominó",
    materia: "Ciências",
    conteudo: "Rochas",
    descricao: "Atividade de dominó desenvolvida para auxiliar os alunos no aprendizado sobre os diferentes tipos de rochas. Por meio do jogo, os estudantes podem identificar e relacionar as principais características de cada tipo de rocha, tornando o conteúdo mais interativo, divertido e fácil de compreender.",
    imagem: '/images/atividade_de_alfabetizacao.png',
    pdf: '/pdf/atividade_de_alfabetizacao.pdf'
};
</script>

<template>
  <main>
        <VerAtv
            :titulo="atividadeTeste.titulo"
            :materia="atividadeTeste.materia"
            :conteudo="atividadeTeste.conteudo"
            :descricao="atividadeTeste.descricao"
            :imagem="atividadeTeste.imagem"
            :pdf="atividadeTeste.pdf"
        />
    </main>
</template>

<style scoped>
</style>