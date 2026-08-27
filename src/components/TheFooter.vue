<script setup>

function subir(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


</script>


<template>
<footer>
    <div class="conteudo">
        <h2>
            <img src="/src/assets/logo.svg" alt="Logo"><p>Aprender+</p>
        </h2>
        <p>© 2026 - Aprender+ atividades inclusivas. Todos os direitos reservados</p>

        <div class="as">
            <a class="redes-icone" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/insta.svg" alt="Logo do Instagram">
            </a>
            <a class="redes-icone" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/face.svg" alt="Logo do Facebook">
            </a>
            <a class="redes-icone" href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src="/public/images/tiktok.svg" alt="Logo do Tiktok">
            </a>
    </div>
    </div>
    <button class="up" @click="subir">
        <font-awesome-icon :icon="['fas', 'angle-up']" style="color: rgb(0, 121, 140, 0.500); font-size: 45px;" />
    </button>
</footer>
</template>

<style scoped>
footer {
    margin: 0;
}
.conteudo {
    background-color: rgb(0, 121, 140, 0.500);
    padding: 2vw 5vw;
    color: #FFF7EE;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20vw;
}
.as{
    display: flex;
    gap: 10px;
}

p{
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    cursor: default;
}

.up{
display: flex;
justify-content: center;
padding: 0;
margin: 5px auto 0 auto;
border: none;
background: none;
line-height: 0;
align-items: center;
}

h2{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    cursor: default;
}

@media (max-width: 600px) {

    .conteudo {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 0;
        padding: 15px 20px;
    }

    h2 {
        gap: 12px;
    }

    h2 img {
        width: 45px;
        height: 45px;
    }

    h2 p {
        font-size: 26px;
    }

    .conteudo > p {
        font-size: 14px;
        max-width: 350px;
        line-height: 1.4;
        margin-top: 3px;
        margin-bottom: 25px;
    }

    .as {
        gap: 20px;
    }

    .redes-icone {
        width: 65px;
        height: 65px;
    }

    .redes-icone img {
        width: 40px;
        height: 40px;
    }
}
</style>
