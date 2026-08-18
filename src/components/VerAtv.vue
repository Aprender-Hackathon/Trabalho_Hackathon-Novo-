<script setup>
import { ref } from 'vue'

const atividades = ref([
    { id: 1, nome_atv: "Dominó", materia: "ciências", conteudo: "rochas", salvamento: true, image: '/public/images/atividade_de_alfabetizacao.png'},
    { id: 2, nome_atv: "Cartas", materia: "geografia", conteudo: "lua", salvamento: false, image: '/public/images/atividade_de_alfabetizacao.png' },
    { id: 3, nome_atv: "Caça-palavras", materia: "história", conteudo: "iluminismo", salvamento: true, image: '/public/images/atividade_de_alfabetizacao.png'},
    { id: 4, nome_atv: "Quebra-cabeça", materia: "matemática", conteudo: "frações", salvamento: false, image: '/public/images/atividade_de_alfabetizacao.png' },
    { id: 5, nome_atv: "Jogo da Memória", materia: "português", conteudo: "sinônimos", salvamento: true, image: '/public/images/atividade_de_alfabetizacao.png'},
    { id: 6, nome_atv: "Palavras Cruzadas", materia: "inglês", conteudo: "animais", salvamento: false, image: '/public/images/atividade_de_alfabetizacao.png'}
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