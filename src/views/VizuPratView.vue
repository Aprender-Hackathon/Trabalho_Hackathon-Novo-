<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import VerAtvPrat from '@/components/VerAtvPrat.vue';
import AbaComentarios from '@/components/AbaComentarios.vue';
import BotaoMaisResultados from '@/components/BotaoMaisResultados.vue';
import BotaoPratica from '@/components/BotaoPratica.vue';

const route = useRoute();
const listaPratica = ref([]);
const mostrarAtvs = ref(false);

async function carregarDetalhesPraticos() {
  try {
    const resposta = await fetch('http://localhost:3000/atividades_praticas');
    if (resposta.ok) {
      listaPratica.value = await resposta.json();
    }
  } catch (erro) {
    console.error('Erro ao buscar detalhes da atividade prática:', erro);
  }
}

onMounted(() => {
  carregarDetalhesPraticos();
});

const atividade = computed(() => 
  listaPratica.value.find(item => String(item.id) === String(route.params.id))
);

const atvsRelacionadas = computed(() => {
  if (!atividade.value) return [];
  return listaPratica.value.filter(
    item => item.data === atividade.value.data && String(item.id) !== String(atividade.value.id)
  );
});

async function alternarSalvar(id) {
  const item = listaPratica.value.find(a => String(a.id) === String(id));
  if (item) {
    const novoStatus = !item.salvo;
    item.salvo = novoStatus;
    try {
      await fetch(`http://localhost:3000/atividades_praticas/${id}`, {
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
        <VerAtvPrat
            :id="atividade.id"
            :titulo="atividade.titulo"
            :data="atividade.data"
            :descricao="atividade.descricao"
            :imagem="atividade.imagem"
            :arquivo="atividade.arquivo"
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
          <BotaoPratica
            v-for="item in atvsRelacionadas"
            :key="item.id"
            :id="item.id"
            :titulo="item.titulo"
            :imagem="item.imagem"
            :data="item.data"
            :isSalvo="item.isSalvo"
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