<script setup>
import { ref, computed } from 'vue'

const atividades = ref([
    {id: 1, nome_atv: "Dominó", materia: "ciências", conteudo: "rochas", salvamento: true},
    {id: 2, nome_atv: "Cartas", materia: "geografia", conteudo: "lua", salvamento: false},
    {id: 3, nome_atv: "Caça-palavras", materia: "história", conteudo: "iluminismo", salvamento: true},
    {id: 4, nome_atv: "Quebra-cabeça",  materia: "matemática", conteudo: "frações", salvamento: false},
    {id: 5, nome_atv: "Jogo da Memória", materia: "português", conteudo: "sinônimos", salvamento: true},
    {id: 6, nome_atv: "Palavras Cruzadas", materia: "inglês", conteudo: "animais", salvamento: false}
]

)
const filtro = ref('')
const pesquisado = ref(false)
const texto_confirmado = ref('')

function normaliza(texto){
     return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}



const sugestao = computed(() => {
    const texto = normaliza(filtro.value)

    if (!texto) return[]

    const encontrados = new Set()

    atividades.value.forEach(item => {
        const campos = [
            item.nome_atv, item.materia, item.conteudo
        ]

            campos.forEach(campo => {

                if (normaliza(campo).includes(texto)) {
                    encontrados.add(campo)
                }
            })
        })

    return Array.from(encontrados)
})



const result = computed(() => {
    const texto = normaliza(texto_confirmado.value)

    if (!texto) return[]

    return atividades.value.filter(item =>
        normaliza(item.nome_atv).includes(texto) ||
        normaliza(item.materia).includes(texto) ||
        normaliza(item.conteudo).includes(texto)
    )
})

function buscar(){
    texto_confirmado.value = filtro.value
    pesquisado.value = true
}

function digitar(){
    texto_confirmado.value = ''
    pesquisado.value = false
}

function escolha(termo) {
    filtro.value = termo
    buscar()
}

</script>

<template>
    <div class="pesquisa">
    <div class="campo">

        <div class="busca">
            <input type="text" v-model="filtro" @keyup.enter="buscar" @click="digitar">

            <ul v-if="filtro.trim() !== '' && !pesquisado" class="sugestoes">
                <li
                    v-for="termo in sugestao"
                    :key="termo"
                    @click="escolha(termo)"
                >
                    <strong>
                        {{termo}}
                    </strong>
                </li>
            </ul>
        </div>

        <button @click="buscar">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>

        <div class="resultados" v-if="pesquisado">
            <div class="atividade-card" v-for="atividade in result" :key="atividade.id">
                <strong>{{ atividade.nome_atv }}</strong>
                <p>{{ atividade.materia }} - {{ atividade.conteudo }}</p>
            </div>
        </div>





    </div>
</div>
</template>

<style scoped>
.busca{
    position: relative;
    width: 35vw;
}

ul{
    position: absolute;
    left: 0;
    width: 100%;
    box-sizing: border-box;

    list-style: none;
    background-color: #D7EFD5;
    padding: 15px 30px;
    border-radius: 6px;
    z-index: 100;
}
li{
    color: #333333;
    line-height: 1.5;
    font-family: 'Instrument Sans Variable', sans-serif;
}

input{
    padding: 6px 15px;
    border-radius: 15px;
    border: none;
    background-color: rgba(217, 217, 217, 0.500);
    width: 35vw;
    caret-color: rgba(30, 30, 30, 0.750);
    font-family: 'Instrument Sans Variable', sans-serif;
    box-sizing: border-box;
}
input:focus{
    outline: none;
}

button{
    border: none;
    cursor: pointer;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    background-color: rgba(217, 217, 217, 0.500);
    transition: 0.2s;
}
button:active{
    transform: scale(1.5);
}

div.campo{
    display: flex;
    justify-content: center;
    gap: 25px;
    position: relative;
}
div.pesquisa{
    position: relative;
    display: grid;
    justify-content: center;
}
</style>