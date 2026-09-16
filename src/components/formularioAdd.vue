<script setup>
import { ref, computed, watch } from 'vue';
import { materias, datas, conteudos, conteudoMateria } from '@/data/opcoesForm';

const materiaSelecionada = ref('');
const conteudoSelecionado = ref('');
const conteudoPraMateria = computed(() => {
    return conteudoMateria[materiaSelecionada.value] ?? [];
})

watch(materiaSelecionada, () => {
  conteudoSelecionado.value = '';
});

const tipoAtv = ref('');

function resetForm(){
 tipoAtv.value = '';
}
</script>

<template>
    <div class="formulario">
    <form action="" @reset="resetForm">

<p>A atividade é regular (tem uma disciplina em objetivo, ex.: matemática, português, etc.) ou comemorativa (correspondente a um dia comemorativo, ex.: páscoa, natal, etc)?</p>
  
  <input class="a" type="radio" id="regular" name="atividade" value="regular" v-model="tipoAtv" required>
  <label for="regular">Atividade Regular</label><br>

  <input class="a" type="radio" id="pratica" name="atividade" value="pratica" v-model="tipoAtv" required>
  <label for="pratica">Atividade Comemorativa</label><br>


    <div class="espaco">
        <label for="inputArquivo">Insira o arquivo da atividade:</label>
        <input 
        class="atividade"
        id="inputArquivo" 
        type="file" 
        required
        />
    </div>


    <div class="atvs-prat" v-show="tipoAtv === 'pratica'">
        <div class="espaco">
            <label for="data">Data comemorativa:</label>
            <select class="escolhe" id="data" name="data" required>
            <option value="" selected disabled>Selecione a data</option>
            <option v-for="(d, i) in datas" :key="i" :value="d">{{ d }}</option>
            </select>
        </div>
    </div>
    

    <div class="atvs-exp" v-show="tipoAtv === 'regular'">
        <div class="espaco">
            <label for="materia">Matéria:</label>
            <select class="escolhe" id="materia" name="materia" v-model="materiaSelecionada" required>
            <option value="" selected disabled>Selecione a matéria</option>
            <option v-for="(m, i) in materias" :key="i" :value="m">{{ m }}</option>
            </select>
        </div>
        <div class="espaco">
            <label for="conteudo">Conteúdo:</label>
            <select class="escolhe" id="conteudo" name="conteudo" v-model="conteudoSelecionado" :disabled="!materiaSelecionada" required>
            <option value="" selected disabled>Selecione o conteúdo</option>
            <option v-for="(c, i) in conteudoPraMateria" :key="i" :value="c">{{ c }}</option>
            </select>
        </div>
    </div>

    <div class="espaco">
        <label for="desc">Descrição:</label>
        <textarea class="texto" name="desc" id="desc" placeholder="Descreva a atividade" required></textarea>
    </div>

    <div class="botoes">
        <button type="reset">Limpar formulário</button>
        <button type="submit">Salvar</button>
    </div>
    </form>
    </div>
</template>

<style scoped>
.a{
    accent-color: #B73042;
    margin-right: 8px;
}

 .botoes{
    display: flex;
    justify-content: center;
    gap: 5vw;
    margin: 2vw auto;
 }
.formulario{
    margin: 2vw auto;
    padding: 2.5vw;
    max-width: 1100px;
}

button {
    background-color: #D1495B;
  color: #FFFBF6;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  padding: 10px 28px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  outline: none;

  transition: transform 0.1s ease;
}

button:hover {
  transform: scale(1.05);
}

button:active {
    transform: scale(1.08);
}

.texto{
    max-width: 800px;
    border: 3px solid #D1495B;
    padding: 5px 10px;
    border-radius: 5px;
}
.escolhe{
    max-width: 600px;
    border-radius: 50px;
    padding: 5px 10px;
    border: 3px solid #D1495B;
}

.espaco{
    margin: 2vw auto;
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

.atividade::file-selector-button{
    background-color: #FEDB82;
    padding: 10px 20px;
    border: none;
    margin: 0 1vw 0 0;
}

</style>