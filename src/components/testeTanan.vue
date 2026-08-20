<script setup>
import { ref } from 'vue';

const atividades = ref([

    { 
        id: 1, 
        titulo: "Dominó", 
        materia: "Ciências", 
        conteudo: "Rochas",
        descricao: "Atividade de dominó para aprender sobre os diferentes tipos de rochas e suas características.",
        salvamento: true, 
        imagem: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 2, 
        nome_atv: "Cartas", 
        materia: "Geografia", 
        conteudo: "Lua",
        descricao: "Jogo de cartas para conhecer as fases da Lua e compreender suas principais características.",
        salvamento: false, 
        imagem: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 3, 
        titulo: "Caça-palavras", 
        materia: "História", 
        conteudo: "Iluminismo",
        descricao: "Caça-palavras com conceitos e personagens importantes relacionados ao Iluminismo.",
        salvamento: true, 
        imagem: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 4, 
        titulo: "Quebra-cabeça", 
        materia: "Matemática", 
        conteudo: "Frações",
        descricao: "Quebra-cabeça educativo para praticar a identificação e a representação de frações.",
        salvamento: false, 
        imagem: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 5, 
        titulo: "Jogo da Memória", 
        materia: "Português", 
        conteudo: "Sinônimos",
        descricao: "Jogo da memória para relacionar palavras que possuem significados semelhantes.",
        salvamento: true, 
        imagem: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 6, 
        titulo: "Palavras Cruzadas", 
        materia: "Inglês", 
        conteudo: "Animais",
        descricao: "Palavras cruzadas para aprender e praticar o vocabulário de animais em inglês.",
        salvamento: false, 
        imagem: '/public/images/atividade_de_alfabetizacao.png'
    }

])
</script>

<template>
    <div></div>
</template>

<style scoped>
</style>