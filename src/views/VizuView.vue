<script setup>
import VerAtv from '@/components/VerAtv.vue';
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue';
import atividades from '@/AtividadesCards';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const atividade = computed(() => atividades.find(item => item.id === Number(route.params.id)))
</script>

<template>
    <div v-if="atividades">
        <VerAtv
            :titulo="atividade.titulo"
            :materia="atividade.materia"
            :conteudo="atividade.conteudo"
            :descricao="atividade.descricao"
            :imagem="atividade.imagem"
            :pdf="atividade.arquivo"
        />
        <BotaoMaisResultados/>
    </div>
</template>

<style setup>
</style>