<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import VerAtv from '@/components/VerAtv.vue';
import AbaComentarios from '@/components/AbaComentarios.vue';
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue';
import BotaoExplorar from '@/components/BotaoExplorar.vue';

const route = useRoute();
const listaAtividades = ref([]);
const mostrarAtvs = ref(false);

async function carregarDetalhesRegulares() {
  try {
    const resposta = await fetch('http://localhost:3000/atividades');
    if (resposta.ok) {
      listaAtividades.value = await resposta.json();
    }
  } catch (erro) {
    console.error('Erro ao buscar detalhes da atividade regular:', erro);
  }
}

onMounted(() => {
  carregarDetalhesRegulares();
});

const atividade = computed(() => 
  listaAtividades.value.find(item => String(item.id) === String(route.params.id))
);

const atvsRelacionadas = computed(() => {
  if (!atividade.value) return [];
  return listaAtividades.value.filter(
    item => item.materia === atividade.value.materia && String(item.id) !== String(atividade.value.id)
  );
});

async function alternarSalvar(id) {
  const item = listaAtividades.value.find(a => String(a.id) === String(id));
  if (item) {
    const novoStatus = !item.salvo;
    item.salvo = novoStatus;
    try {
      await fetch(`http://localhost:3000/atividades/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ salvo: novoStatus })
      });
    } catch (e) {
      console.error('Erro ao atualizar status de salvo:', e);
    }
  }
}

function alternarMostrarAtvs() {
  mostrarAtvs.value = !mostrarAtvs.value;
}
</script>

<template>
    <div v-if="atividade" class="pagina-detalhe">
        <VerAtv
            :id="atividade.id"
            :titulo="atividade.titulo"
            :materia="atividade.materia"
            :conteudo="atividade.conteudo"
            :descricao="atividade.descricao"
            :imagem="atividade.imagem"
            :docx="atividade.arquivo"
            :isSalvo="atividade.salvo"
        />
        
        <AbaComentarios/>

        <div class="container-botao">
            <BotaoMaisResultados 
                @carregar="alternarMostrarAtvs" 
                class="mais"
                :text="mostrarAtvs ? 'Mostrar Menos' : 'Mostrar Mais'"
            />
        </div>

        <div v-if="mostrarAtvs" class="cards">
            <BotaoExplorar
              v-for="item in atvsRelacionadas"
              :key="item.id"
              :id="item.id"
              :titulo="item.titulo"
              :imagem="item.imagem"
              :arquivo="item.arquivo"
              :previewTipo="item.previewTipo"
              :materia="item.materia"
              :conteudo="item.conteudo"
              :isSalvo="item.salvo"
              @salvar="alternarSalvar(item.id)"
              @click="mostrarAtvs = false"
            />
        </div>
    </div>
    <div v-else style="text-align: center; padding: 4rem;">
        <p>A carregar detalhes da atividade...</p>
    </div>
</template>

<style scoped>
.pagina-detalhe {
  width: 100%;
}

.container-botao {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  text-align: center;
}

.mais {
  margin: 0 auto;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 70px;
}
</style>