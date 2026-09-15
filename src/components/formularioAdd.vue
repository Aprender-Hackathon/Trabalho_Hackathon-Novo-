<script setup>
import { materias, datas, conteudos } from '@/data/opcoesForm';

</script>

<template>
    <div>
    <form action="">

<p>A atividade é regular (tem uma disciplina em objetivo, ex.: matemática, português, etc.) ou comemorativa (correspondente a um dia comemorativo, ex.: páscoa, natal, etc)?</p>
  
  <input type="radio" id="regular" name="atividade" value="regular" checked>
  <label for="apple">Atividade Regular</label><br>

  <input type="radio" id="pratica" name="atividade" value="pratica">
  <label for="banana">Atividade Comemorativa</label><br>


    <div class="espaco">
        <label for="input-arquivo">Insira o arquivo da atividade:</label>
        <input 
        class="atividade"
        id="input-arquivo" 
        type="file" 
        />
    </div>


    <div class="atvs-prat">
        <div class="espaco">
            <label for="data">Data comemorativa:</label>
            <select class="escolhe" id="data" name="data">
            <option value="" selected disabled>Selecione a data</option>
            <option v-for="(d, i) in datas" :key="i" :value="i + 1">{{ d }}</option>
            </select>
        </div>
    </div>
    

    <div class="atvs-exp">
        <div class="espaco">
            <label for="materia">Matéria:</label>
            <select class="escolhe" id="materia" name="materia">
            <option value="" selected disabled>Selecione a matéria</option>
            <option v-for="(m, i) in materias" :key="i" :value="i + 1">{{ m }}</option>
            </select>
        </div>
        <div class="espaco">
            <label for="conteudo">Conteúdo:</label>
            <select class="escolhe" id="conteudo" name="conteudo">
            <option value="" selected disabled>Selecione o conteúdo</option>
            <option v-for="(c, i) in conteudos" :key="i" :value="i + 1">{{ c }}</option>
            </select>
        </div>
    </div>

    <div class="espaco">
        <label for="nome">Descrição:</label>
        <textarea class="texto" name="desc" id="desc" placeholder="Descreva a atividade"></textarea>
    </div>

    </form>
    </div>
</template>

<style scoped>
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
    margin: 1vw 0;
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