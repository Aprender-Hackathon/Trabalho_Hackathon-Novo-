<script setup>
import { ref } from 'vue'

const atividades = ref([

    { 
        id: 1, 
        nome_atv: "Dominó", 
        materia: "ciências", 
        conteudo: "rochas",
        descricao: "Atividade de dominó para aprender sobre os diferentes tipos de rochas e suas características.",
        salvamento: true, 
        image: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 2, 
        nome_atv: "Cartas", 
        materia: "geografia", 
        conteudo: "lua",
        descricao: "Jogo de cartas para conhecer as fases da Lua e compreender suas principais características.",
        salvamento: false, 
        image: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 3, 
        nome_atv: "Caça-palavras", 
        materia: "história", 
        conteudo: "iluminismo",
        descricao: "Caça-palavras com conceitos e personagens importantes relacionados ao Iluminismo.",
        salvamento: true, 
        image: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 4, 
        nome_atv: "Quebra-cabeça", 
        materia: "matemática", 
        conteudo: "frações",
        descricao: "Quebra-cabeça educativo para praticar a identificação e a representação de frações.",
        salvamento: false, 
        image: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 5, 
        nome_atv: "Jogo da Memória", 
        materia: "português", 
        conteudo: "sinônimos",
        descricao: "Jogo da memória para relacionar palavras que possuem significados semelhantes.",
        salvamento: true, 
        image: '/public/images/atividade_de_alfabetizacao.png'
    },

    { 
        id: 6, 
        nome_atv: "Palavras Cruzadas", 
        materia: "inglês", 
        conteudo: "animais",
        descricao: "Palavras cruzadas para aprender e praticar o vocabulário de animais em inglês.",
        salvamento: false, 
        image: '/public/images/atividade_de_alfabetizacao.png'
    }

])
</script>

<template>
    <div v-for="atividade in atividades" :key="atividade.id">
        <img
        :src="atividade.image"
        :alt="atividade.nome_atv"
        class="image"
      >
        <h3>
            {{ atividade.nome_atv }}
        </h3>

        <p>
            {{ atividade.materia }}
        </p>
        <p>
            {{ atividade.conteudo }}
        </p>

        <p>
            {{ atividade.descricao }}
        </p>
    </div>
</template>

<style scoped>
.estrela {
    color: #ccc;
}

.estrela.ativa {
    color: #ffd700;
}
</style>