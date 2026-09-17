<script setup>
import { ref, computed, watch } from 'vue';
import { materias, datas,  conteudoMateria } from '@/data/opcoesForm';
import { useRouter } from 'vue-router';
import { estadoAtividades } from '@/AtividadesCards.js';
import { estadoPratica } from '@/PraticaCards.js';

const router = useRouter();

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
 materiaSelecionada.value = '';
 conteudoSelecionado.value = '';
}

const arquivosAceitos = computed(() => {
 if (tipoAtv.value === 'pratica') return '.pdf';
  if (tipoAtv.value === 'regular') return '.docx';
  return '';
});

function salvarAtividade(event) {
  const form = event.target;
  const dados = new FormData(form);
  const arquivo = dados.get('arquivoAtv');
  const nomeArquivo = arquivo && arquivo.name ? arquivo.name : '';
  const extensao = nomeArquivo.split('.').pop()?.toLowerCase();

  const novaAtividade = {
    id: Date.now(),
    titulo: dados.get('titulo'),
    descricao: dados.get('desc'),
    arquivo: nomeArquivo,
    previewTipo: extensao === 'docx' ? 'docx' : extensao === 'pdf' ? 'pdf' : '',
    criadoPor: true,
    salvo: false,
  };

  if (tipoAtv.value === 'regular') {
    novaAtividade.materia = materiaSelecionada.value;
    novaAtividade.conteudo = conteudoSelecionado.value;
    estadoAtividades.lista.push(novaAtividade);
  } else if (tipoAtv.value === 'pratica') {
    novaAtividade.data = dados.get('data');
    estadoPratica.lista.push(novaAtividade);
  }

  form.reset();
  resetForm();
  router.push('/historico');
}
</script>

<template>
    <div class="formulario">
    <form action="" @submit.prevent="salvarAtividade" @reset="resetForm">

    <div class="choose">
        <p class="pergunta">A atividade é regular (tem uma disciplina em objetivo, ex.: matemática, português, etc.) ou comemorativa (correspondente a um dia comemorativo, ex.: páscoa, natal, etc)?</p>

        <div>
            <input class="a" type="radio" id="regular" name="atividade" value="regular" v-model="tipoAtv" required>
        <label for="regular">Atividade Regular</label><br>

        <input class="a" type="radio" id="pratica" name="atividade" value="pratica" v-model="tipoAtv" required>
        <label for="pratica">Atividade Comemorativa</label><br>
        </div>
    </div>

    <div class="espaco">
        <label for="inputArquivo" class="pergunta">Insira o arquivo da atividade: <br> <strong v-if="arquivosAceitos">( sendo aceitos apenas arquivos em: {{ arquivosAceitos }} )</strong></label>
        <input class="atividade" id="inputArquivo" name="arquivoAtv" type="file" required :accept="arquivosAceitos" />
    </div>

    <div class="espaco">
        <label for="titulo">Título:</label>
        <input class="texto" type="text" id="titulo" name="titulo" placeholder="Título da atividade" required>
    </div>

    <div class="atvs-prat" v-show="tipoAtv === 'pratica'">
        <div class="espaco">
            <label for="data" class="pergunta">Data comemorativa:</label>
            <select class="escolhe" id="data" name="data" required>
            <option value="" selected disabled>Selecione a data</option>
            <option v-for="(d, i) in datas" :key="i" :value="d">{{ d }}</option>
            </select>
        </div>
    </div>


    <div class="atvs-exp" v-show="tipoAtv === 'regular'">
        <div class="espaco">
            <label for="materia" class="pergunta">Matéria:</label>
            <select class="escolhe" id="materia" name="materia" v-model="materiaSelecionada" required>
            <option value="" selected disabled>Selecione a matéria</option>
            <option v-for="(m, i) in materias" :key="i" :value="m">{{ m }}</option>
            </select>
        </div>
        <div class="espaco">
            <label for="conteudo" class="pergunta">Conteúdo:</label>
            <select class="escolhe" id="conteudo" name="conteudo" v-model="conteudoSelecionado" :disabled="!materiaSelecionada" required>
            <option value="" selected disabled>Selecione o conteúdo</option>
            <option v-for="(c, i) in conteudoPraMateria" :key="i" :value="c">{{ c }}</option>
            </select>
        </div>
    </div>

    <div class="espaco">
        <label for="desc" class="pergunta">Descrição:</label>
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
strong{
    font-size: 1.2vw;
    color: #D1495B;
}

.pergunta{
    font-size: 1.5vw;
}

.choose {
    margin: 2vw auto;
}

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
    margin: 5vw auto;
    padding: 0 2.5vw;
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
