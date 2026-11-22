<script setup>
import { ref, onMounted } from 'vue'

const logado = localStorage.getItem('isLoggedIn') === 'true'
const usuario = JSON.parse(localStorage.getItem('userData') || '{}')
const meuNome = usuario.name || 'Visitante'
const souProfessor = usuario.role === 'professor'

const mensagens = ref([])
const texto = ref('')
const arquivo = ref(null)
const menuAberto = ref(null)
const posicaoEditando = ref(null)
const textoEditado = ref('')

onMounted(() => {
  const salvo = localStorage.getItem('mensagensChat')
  if (salvo) {
    mensagens.value = JSON.parse(salvo)
  }
})

function salvar() {
  localStorage.setItem('mensagensChat', JSON.stringify(mensagens.value))
}

function escolherArquivo(evento) {
  const arq = evento.target.files[0]
  if (!arq) return

  if (arq.size > 1000000) {
    alert('Arquivo muito grande! O máximo é 1 MB.')
    evento.target.value = ''
    return
  }

  const leitor = new FileReader()
  leitor.onload = () => {
    arquivo.value = { nome: arq.name, dados: leitor.result }
  }
  leitor.readAsDataURL(arq)
}

function enviar() {
  if (texto.value.trim() === '' && arquivo.value === null) {
    return
  }

  mensagens.value.push({
    autor: meuNome,
    professor: souProfessor,
    texto: texto.value,
    arquivo: arquivo.value,
  })
  salvar()

  texto.value = ''
  arquivo.value = null
  document.getElementById('campoArquivo').value = ''
}

function abrirMenu(posicao) {
  if (menuAberto.value === posicao) {
    menuAberto.value = null
  } else {
    menuAberto.value = posicao
  }
}

function editar(posicao) {
  menuAberto.value = null
  posicaoEditando.value = posicao
  textoEditado.value = mensagens.value[posicao].texto
}

function salvarEdicao(posicao) {
  if (textoEditado.value.trim() === '') {
    return
  }
  mensagens.value[posicao].texto = textoEditado.value
  salvar()
  posicaoEditando.value = null
}

function excluir(posicao) {
  menuAberto.value = null
  if (confirm('Quer mesmo excluir esta mensagem?')) {
    mensagens.value.splice(posicao, 1)
    salvar()
  }
}
</script>

<template>
  <div class="pagina">
    <div v-if="!logado">
      <h1>Conversas</h1>
      <p>Entre na sua conta para usar o chat.</p>
      <RouterLink to="/login-pag">Entrar</RouterLink>
    </div>

    <div v-else class="chat">
      <div class="topo">
        <h1>Conversas</h1>
      </div>

      <div class="caixa">
        <p v-if="mensagens.length === 0">Nenhuma mensagem ainda.</p>

        <div
          v-for="(m, posicao) in mensagens"
          :key="posicao"
          class="linha"
          :class="{ minha: m.autor === meuNome }"
        >
          <div class="balao">
            <div class="menu">
              <button class="pontinhos" @click="abrirMenu(posicao)">⋮</button>

              <div v-if="menuAberto === posicao" class="menu-lista">
                <button @click="editar(posicao)">Editar</button>
                <button @click="excluir(posicao)">Excluir</button>
              </div>
            </div>

            <strong v-if="m.autor !== meuNome">
              {{ m.autor }}<span v-if="m.professor"> (professor)</span>
            </strong>

            <div v-if="posicaoEditando === posicao" class="editando">
              <input v-model="textoEditado" @keyup.enter="salvarEdicao(posicao)" />
              <button @click="salvarEdicao(posicao)">Salvar</button>
              <button @click="posicaoEditando = null">Cancelar</button>
            </div>

            <p v-else-if="m.texto">{{ m.texto }}</p>

            <a v-if="m.arquivo" :href="m.arquivo.dados" :download="m.arquivo.nome">
              {{ m.arquivo.nome }}
            </a>
          </div>
        </div>
      </div>

      <p v-if="arquivo" class="escolhido">Arquivo escolhido: {{ arquivo.nome }}</p>

      <div class="enviar">
        <label class="clipe" title="Enviar atividade">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
            <path d="M16.5 6v11.5a4 4 0 0 1-8 0V5a2.5 2.5 0 0 1 5 0v10.5a1 1 0 0 1-2 0V6H10v9.5a2.5 2.5 0 0 0 5 0V5a4 4 0 0 0-8 0v12.5a5.5 5.5 0 0 0 11 0V6h-1.5z" />
          </svg>
          <input id="campoArquivo" type="file" hidden @change="escolherArquivo" />
        </label>
        <input v-model="texto" @keyup.enter="enviar" placeholder="Escreva uma mensagem…" />
        <button @click="enviar" class="botao">Enviar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagina {
  max-width: 700px;
  margin: 20px auto 80px;
  padding: 0 16px;
}

.chat {
  border: 3px solid #e65261;
  border-radius: 20px;
  overflow: hidden;
}

.topo {
  background: #238b97;
  color: white;
  padding: 12px 18px;
}

.topo h1 {
  margin: 0;
}

.caixa {
  min-height: 300px;
  padding: 14px;
  background: #fdf6ec;
}

.linha {
  display: flex;
  margin-bottom: 8px;
}

.linha.minha {
  justify-content: flex-end;
}

.balao {
  position: relative;
  max-width: 75%;
  padding: 8px 32px 8px 12px;
  background: white;
  border-radius: 14px;
  overflow-wrap: anywhere;
}

.linha.minha .balao {
  background: #fce293;
}

.balao p {
  margin: 0;
}

.menu {
  position: absolute;
  top: 2px;
  right: 4px;
}

.pontinhos {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.menu-lista {
  position: absolute;
  right: 0;
  width: 120px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 5;
}

.menu-lista button {
  display: block;
  width: 100%;
  padding: 8px 14px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
}

.editando {
  display: flex;
  gap: 6px;
}

.editando input {
  flex: 1;
  min-width: 0;
}

.escolhido {
  margin: 0;
  padding: 6px 14px;
  background: #cfe9ee;
}

.enviar {
  display: flex;
  gap: 8px;
  padding: 10px;
  background: #fce293;
}

.enviar input {
  flex: 1;
  padding: 8px 14px;
  border: none;
  border-radius: 20px;
}

.clipe {
  display: flex;
  align-items: center;
  color: #238b97;
  cursor: pointer;
}

.botao {
  padding: 8px 18px;
  background: #e65261;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>