<script setup>

function subir(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

</script>


<template>
<footer>
    <div class="conteudo">
        <h2>
            <p>Aprender+</p>
        </h2>
        <p>© 2026 - Aprender+ atividades anclusivas. Todos os direitos reservados</p>

        <div class="as">
            <a class="redes-icone" href="#">
                <font-awesome-icon :icon="['fab', 'instagram']" style="color: rgb(0, 121, 140, 0.500); font-size: 25px;" />
            </a>
            <a class="redes-icone" href="#">
                <font-awesome-icon :icon="['fab', 'tiktok']" style="color: rgb(0, 121, 140, 0.500); font-size: 25px;" />
            </a>
            <a class="redes-icone" href="#">
                <font-awesome-icon :icon="['fab', 'facebook-f']" style="color: rgb(0, 121, 140, 0.500); font-size: 25px;" />
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
    padding: 5vw 5vw;
    color: #FFF7EE;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20vw;
}
a.redes-icone{
    background-color: #FFF7EE;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 7.5px 4.5px;
    justify-content: center;
    align-items: center;
}
.as{
    display: flex;
    gap: 10px;
}

p{
    font-family: 'Inter', sans-serif;
    font-weight: bold;
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
</style>