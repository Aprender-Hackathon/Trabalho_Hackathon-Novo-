<script setup>
import BaixarPdf from './BaixarPdf.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function voltar() {
    router.back();
}

const props = defineProps({
    materia: String,
    titulo: String,
    conteudo: String,
    imagem: String,
    descricao: String,
    pdf: String
});
</script>

<template>
    <div class="all">

        <button class="voltar" @click="voltar">
            <img src="/public/images/back.svg" alt="Voltar">
        </button>

        <img
        :src="imagem"
        :alt="titulo"
        class="image"
      >
        <div class="lado">

        <div class="cima">
            <h3>
                {{ titulo }}
            </h3>

            <div class="mat_con">

                <p>
                    {{ materia }}
                </p>
                <p>
                    {{ conteudo }}
                </p>

            </div>
        </div>

    <div class="baixo">
        <p class="descricao">
        {{ descricao }}
    </p>

        <BaixarPdf :pdf="pdf"/>
    </div>

        </div>
    </div>
</template>

<style scoped>

/* --- Estilos base (desktop) --- */

.all {
    display: flex;
    align-items: stretch;
    gap: 5vw;

    width: 75%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2.5vw;

    border: #D1495B solid 5px;
    border-radius: 3px;
}

.voltar {
    border: none;
    background: none;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 20;
}

.image {
    width: 100%;
    max-width: 300px;
    height: auto;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.lado {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    min-width: 0;
}

.lado h3 {
    font-size: 3vw;
    padding: 0;
    margin: 0;
}

.mat_con {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: default;
}

.mat_con p {
    background-color: #73BD58;
    color: white;
    padding: 5px 15px;
    border-radius: 100px;
    font-family: 'Baloo 2';
    margin: 0;
}

.baixo {
    margin: 0 0 2vw 0;
}

.descricao {
    max-width: 500px;
    margin: 0 0 35px 0;
    text-align: justify;
}


.baixo button {
    padding: 0.6rem 1.5rem;
}


@media (max-width: 600px) {

    .voltar {
        top: 10px;
        left: 10px;
    }

    .voltar img {
        width: 24px;
    }

    .all {
        width: calc(100% - 50px); 
        flex-direction: column;
        gap: 20px;
        padding: 25px 20px;
        margin: 50px auto 0;
    }

    .image {
        width: 100%;
        max-width: 250px;
        align-self: center;
    }

    .lado {
        width: 100%;
        align-items: center;
    }
    .lado h3 {
        font-size: clamp(24px, 8vw, 32px);
        text-align: center;
        margin-bottom: 15px;
        padding: 0;
        max-width: 100%;
        pointer-events: auto;
    }

    .mat_con {
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }

    .mat_con p {
        font-size: 14px;
        padding: 5px 12px;
    }

    .baixo {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 0;
    }

    .descricao {
        width: 85%;
        max-width: 100%;
        font-size: 16px;
        text-align: justify;
        margin-bottom: 20px;
        padding: 0 5px;
    }
}
</style>