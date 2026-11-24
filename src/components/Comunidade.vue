<script setup>
import { ref, computed, onMounted } from 'vue'

const URL_PROFESSORES = 'http://localhost:3000/professores'
const URL_USUARIOS = 'http://localhost:3000/usuarios'
const URL_MENSAGENS = 'http://localhost:3000/mensagensChat'

const logado = localStorage.getItem('isLoggedIn') === 'true'
const usuario = JSON.parse(localStorage.getItem('userData') || '{}')
const meuNome = usuario.name || usuario.nome || 'Visitante'
const souProfessor = usuario.role === 'professor' || usuario.materia !== undefined

const grupos = ref([])
const professores = ref([])
const alunos = ref([])
const erroContatos = ref(false)
const mensagensChat = ref([])
const aberto = ref(null)
const novoGrupo = ref('')
const texto = ref('')
const arquivo = ref(null)
const menuAberto = ref(null)
const posicaoEditando = ref(null)
const textoEditado = ref('')
const inputArquivo = ref(null)

const menuGrupoAberto = ref(false)
const editandoGrupo = ref(false)
const nomeGrupoEditado = ref('')

const grupoAtual = computed(() => {
  if (!aberto.value || aberto.value.tipo !== 'grupo') return null
  return grupos.value.find((g) => g.id === aberto.value.id)
})

const contatoAtual = computed(() => {
  if (!aberto.value || aberto.value.tipo !== 'contato') return null
  const lista = souProfessor ? alunos.value : professores.value
  return lista.find((p) => String(p.id) === String(aberto.value.id))
})

const mensagens = computed(() => {
  if (grupoAtual.value) return grupoAtual.value.mensagens
  if (contatoAtual.value) {
    return mensagensChat.value.filter(
      (m) => String(m.destinatarioId || m.professorId) === String(contatoAtual.value.id)
    )
  }
  return []
})

const souCriadorGrupo = computed(() => {
  if (!grupoAtual.value) return false
  return grupoAtual.value.criador === meuNome
})

async function carregarMensagensChat() {
  try {
    const resposta = await fetch(URL_MENSAGENS)
    if (!resposta.ok) throw new Error('Erro ao buscar mensagens')
    mensagensChat.value = await resposta.json()
  } catch (erro) {
    console.error(erro)
  }
}

onMounted(async () => {
  const salvoGrupos = localStorage.getItem('gruposComunidade')
  if (salvoGrupos) {
    grupos.value = JSON.parse(salvoGrupos)
  } else {
    grupos.value = [
      { id: 1, nome: 'Matemática', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 2, nome: 'Português', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 3, nome: 'Biologia', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 4, nome: 'História', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 5, nome: 'Geografia', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 6, nome: 'Física', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 7, nome: 'Química', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 8, nome: 'Sociologia', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 9, nome: 'Filosofia', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 10, nome: 'Inglês', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 11, nome: 'Educação Física', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 12, nome: 'Ciências', membros: [], mensagens: [], criador: 'Sistema' },
      { id: 13, nome: 'Artes', membros: [], mensagens: [], criador: 'Sistema' },
    ]
    localStorage.setItem('gruposComunidade', JSON.stringify(grupos.value))
  }

  await carregarMensagensChat()

  try {
    if (souProfessor) {
      const resposta = await fetch(URL_USUARIOS)
      if (!resposta.ok) throw new Error('Erro ao buscar usuários')
      const todosUsuarios = await resposta.json()
      alunos.value = todosUsuarios.filter(
        (u) => (u.tipo_perfil === 'visitante' || !u.materia) && u.nome !== meuNome
      )
    } else {
      const resposta = await fetch(URL_PROFESSORES)
      if (!resposta.ok) throw new Error('Erro ao buscar professores')
      const todos = await resposta.json()
      professores.value = todos.filter((p) => p.nome !== meuNome)
    }
  } catch (erro) {
    erroContatos.value = true
    console.error(erro)
  }
})

function salvarGrupos() {
  localStorage.setItem('gruposComunidade', JSON.stringify(grupos.value))
}

function souMembro(grupo) {
  return grupo.membros.includes(meuNome)
}

function abrirGrupo(grupo) {
  aberto.value = { tipo: 'grupo', id: grupo.id }
  fecharMenus()
}

async function abrirContato(contato) {
  aberto.value = { tipo: 'contato', id: String(contato.id) }
  fecharMenus()
  await carregarMensagensChat()
}

function fecharMenus() {
  menuAberto.value = null
  posicaoEditando.value = null
  arquivo.value = null
  menuGrupoAberto.value = false
  editandoGrupo.value = false
}

function entrar(grupo) {
  if (!souMembro(grupo)) {
    grupo.membros.push(meuNome)
    salvarGrupos()
  }
  abrirGrupo(grupo)
}

function sair(grupo) {
  grupo.membros = grupo.membros.filter((nome) => nome !== meuNome)
  salvarGrupos()
  aberto.value = null
}

function criarGrupo() {
  if (novoGrupo.value.trim() === '') return

  const grupo = {
    id: Date.now(),
    nome: novoGrupo.value,
    membros: [meuNome],
    mensagens: [],
    criador: meuNome,
  }
  grupos.value.push(grupo)
  salvarGrupos()

  novoGrupo.value = ''
  abrirGrupo(grupo)
}

function alternarMenuGrupo() {
  menuGrupoAberto.value = !menuGrupoAberto.value
}

function iniciarEdicaoGrupo() {
  menuGrupoAberto.value = false
  editandoGrupo.value = true
  nomeGrupoEditado.value = grupoAtual.value.nome
}

function salvarEdicaoGrupo() {
  if (nomeGrupoEditado.value.trim() === '') return
  grupoAtual.value.nome = nomeGrupoEditado.value
  salvarGrupos()
  editandoGrupo.value = false
}

function excluirGrupo() {
  menuGrupoAberto.value = false
  if (confirm('Quer mesmo excluir este grupo inteiro?')) {
    const idParaExcluir = grupoAtual.value.id
    grupos.value = grupos.value.filter((g) => g.id !== idParaExcluir)
    salvarGrupos()
    aberto.value = null
  }
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

async function enviar() {
  if (texto.value.trim() === '' && arquivo.value === null) return

  if (grupoAtual.value) {
    grupoAtual.value.mensagens.push({
      autor: meuNome,
      professor: souProfessor,
      texto: texto.value,
      arquivo: arquivo.value,
    })
    salvarGrupos()
  } else if (contatoAtual.value) {
    const novaMensagem = {
      professorId: String(contatoAtual.value.id),
      autor: meuNome,
      professor: souProfessor,
      texto: texto.value,
      arquivo: arquivo.value,
    }

    try {
      const resposta = await fetch(URL_MENSAGENS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaMensagem),
      })
      if (!resposta.ok) throw new Error('Erro ao enviar mensagem')
      await carregarMensagensChat()
    } catch (erro) {
      console.error(erro)
      alert('Não foi possível enviar a mensagem.')
      return
    }
  }

  texto.value = ''
  arquivo.value = null
  if (inputArquivo.value) {
    inputArquivo.value.value = ''
  }
}

function abrirMenu(posicao) {
  menuAberto.value = menuAberto.value === posicao ? null : posicao
}

function editar(posicao) {
  menuAberto.value = null
  posicaoEditando.value = posicao
  textoEditado.value = mensagens.value[posicao].texto
}

async function salvarEdicao(posicao) {
  if (textoEditado.value.trim() === '') return

  if (grupoAtual.value) {
    grupoAtual.value.mensagens[posicao].texto = textoEditado.value
    salvarGrupos()
  } else if (contatoAtual.value) {
    const msg = mensagens.value[posicao]
    try {
      const resposta = await fetch(`${URL_MENSAGENS}/${msg.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto: textoEditado.value }),
      })
      if (!resposta.ok) throw new Error('Erro ao editar mensagem')
      await carregarMensagensChat()
    } catch (erro) {
      console.error(erro)
      alert('Erro ao editar a mensagem na API.')
      return
    }
  }

  posicaoEditando.value = null
}

async function excluir(posicao) {
  menuAberto.value = null
  if (!confirm('Quer mesmo excluir esta mensagem?')) return

  if (grupoAtual.value) {
    grupoAtual.value.mensagens.splice(posicao, 1)
    salvarGrupos()
  } else if (contatoAtual.value) {
    const msg = mensagens.value[posicao]
    try {
      const resposta = await fetch(`${URL_MENSAGENS}/${msg.id}`, {
        method: 'DELETE',
      })
      if (!resposta.ok) throw new Error('Erro ao excluir mensagem')
      await carregarMensagensChat()
    } catch (erro) {
      console.error(erro)
      alert('Erro ao excluir a mensagem na API.')
    }
  }
}
</script>

<template>
  <div class="fundo">
    <div class="pagina">
      <div v-if="!logado">
        <h1>Comunidade</h1>
        <p>Entre na sua conta para participar dos grupos e conversar.</p>
        <RouterLink to="/login-pag">Entrar</RouterLink>
      </div>

      <div v-else>
        <h1 class="titulo">Comunidade</h1>
        <p class="subtitulo">Entre em um grupo de estudos ou converse com outros usuários.</p>

        <div class="layout">
          <div class="grupos">
            <div class="topo">
              <h2>{{ souProfessor ? 'Grupos e Alunos' : 'Grupos e Professores' }}</h2>
            </div>

            <div class="lista">
              <div
                v-for="grupo in grupos"
                :key="'g' + grupo.id"
                class="grupo"
                :class="{ aberto: aberto && aberto.tipo === 'grupo' && grupo.id === aberto.id }"
              >
                <div class="bolinha">{{ grupo.nome[0] }}</div>

                <div class="info">
                  <strong>{{ grupo.nome }}</strong>
                  <span>{{ grupo.membros.length }} membro(s)</span>
                </div>

                <button v-if="souMembro(grupo)" class="botao-claro" @click="abrirGrupo(grupo)">
                  Abrir
                </button>
                <button v-else class="botao" @click="entrar(grupo)">Entrar</button>
              </div>

              <p v-if="erroContatos" class="aviso">
                Não foi possível carregar os contatos. Rode <b>npm run api</b>.
              </p>

              <template v-if="souProfessor">
                <div
                  v-for="aluno in alunos"
                  :key="'a' + aluno.id"
                  class="grupo"
                  :class="{
                    aberto: aberto && aberto.tipo === 'contato' && String(aluno.id) === aberto.id,
                  }"
                >
                  <div class="bolinha bolinha-aluno">A</div>

                  <div class="info">
                    <strong>{{ aluno.nome }}</strong>
                    <span>{{ aluno.email || 'Aluno(a)' }}</span>
                  </div>

                  <button class="botao" @click="abrirContato(aluno)">Conversar</button>
                </div>
              </template>

              <template v-else>
                <div
                  v-for="prof in professores"
                  :key="'p' + prof.id"
                  class="grupo"
                  :class="{
                    aberto: aberto && aberto.tipo === 'contato' && String(prof.id) === aberto.id,
                  }"
                >
                  <div class="bolinha bolinha-prof">{{ prof.nome[0] }}</div>

                  <div class="info">
                    <strong>{{ prof.nome }}</strong>
                    <span>{{ prof.materia }}</span>
                  </div>

                  <button class="botao" @click="abrirContato(prof)">Conversar</button>
                </div>
              </template>
            </div>

            <div class="criar">
              <input v-model="novoGrupo" @keyup.enter="criarGrupo" placeholder="Nome do novo grupo" />
              <button class="botao" @click="criarGrupo">Criar</button>
            </div>
          </div>

          <div class="chat">
            <div v-if="!grupoAtual && !contatoAtual" class="vazio">
              <p>Escolha um grupo ou um contato ao lado para começar a conversar.</p>
            </div>

            <div v-else>
              <div class="topo topo-chat">
                <div v-if="grupoAtual" class="topo-info-grupo">
                  <div v-if="editandoGrupo" class="editando-grupo">
                    <input v-model="nomeGrupoEditado" @keyup.enter="salvarEdicaoGrupo" />
                    <button class="botao-salvar-grupo" @click="salvarEdicaoGrupo">Salvar</button>
                    <button class="botao-cancelar-grupo" @click="editandoGrupo = false">Cancelar</button>
                  </div>
                  <div v-else>
                    <h2>{{ grupoAtual.nome }}</h2>
                    <small>{{ grupoAtual.membros.length }} membro(s)</small>
                  </div>
                </div>

                <div v-else>
                  <h2>{{ contatoAtual.nome }} {{ souProfessor ? '(aluno)' : '(professor)' }}</h2>
                  <small>{{ souProfessor ? (contatoAtual.email || 'Aluno') : `${contatoAtual.materia} · ${contatoAtual.escola}` }}</small>
                </div>

                <div v-if="grupoAtual && souCriadorGrupo" class="container-menu-grupo">
                  <button class="pontinhos-grupo" @click="alternarMenuGrupo">⋮</button>
                  <div v-if="menuGrupoAberto" class="menu-lista menu-lista-grupo">
                    <button @click="iniciarEdicaoGrupo">Editar nome</button>
                    <button @click="excluirGrupo">Excluir grupo</button>
                  </div>
                </div>

                <button v-if="grupoAtual" class="sair" @click="sair(grupoAtual)">Sair do grupo</button>
                <button v-else class="sair" @click="aberto = null">Fechar conversa</button>
              </div>

              <div class="caixa">
                <p v-if="mensagens.length === 0">Nenhuma mensagem ainda. Diga olá!</p>

                <div
                  v-for="(m, posicao) in mensagens"
                  :key="m.id || posicao"
                  class="linha"
                  :class="{ minha: m.autor === meuNome }"
                >
                  <div class="balao">
                    <div v-if="m.autor === meuNome" class="menu">
                      <button class="pontinhos" @click="abrirMenu(posicao)">⋮</button>

                      <div v-if="menuAberto === posicao" class="menu-lista">
                        <button @click="editar(posicao)">Editar</button>
                        <button @click="excluir(posicao)">Excluir</button>
                      </div>
                    </div>

                    <strong v-if="m.autor !== meuNome">
                      {{ m.autor }}
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
                  <input ref="inputArquivo" type="file" hidden @change="escolherArquivo" />
                </label>
                <input v-model="texto" @keyup.enter="enviar" placeholder="Escreva uma mensagem…" />
                <button @click="enviar" class="botao">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fundo {
  background: #fdf6ec;
  padding: 20px 0 80px;
}
.pagina {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
}
.titulo {
  margin: 0;
  color: #238b97;
}
.subtitulo {
  margin: 0 0 16px;
}
.layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 16px;
  align-items: stretch;
}
.grupos,
.chat {
  display: flex;
  flex-direction: column;
  height: 540px;
  border: 3px solid #e65261;
  border-radius: 20px;
  overflow: hidden;
  background: white;
}
.chat > div {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}
.topo {
  background: #238b97;
  color: white;
  padding: 12px 18px;
}
.topo h2 {
  margin: 0;
  font-size: 1.4rem;
}
.topo-chat {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sair {
  padding: 6px 14px;
  background: white;
  color: #e65261;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.lista {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 10px;
  background: #f8ebd6;
}
.aviso {
  margin: 0;
  padding: 6px;
}
.grupo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 8px;
  background: white;
  border-radius: 14px;
}
.grupo.aberto {
  background: #fce293;
}
.bolinha {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #238b97;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
}
.bolinha-prof {
  background: #e65261;
}
.bolinha-aluno {
  background: #3b82f6;
}
.info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}
.info strong,
.info span {
  overflow-wrap: anywhere;
}
.info span {
  font-size: 0.85rem;
  color: #666;
}
.criar {
  display: flex;
  gap: 8px;
  padding: 10px;
  background: #fce293;
}
.criar input {
  flex: 1;
  min-width: 0;
  padding: 8px 14px;
  border: none;
  border-radius: 20px;
}
.vazio {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  background: #f8ebd6;
}
.caixa {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 14px;
  background: #f8ebd6;
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
  padding: 8px 12px;
  background: white;
  border-radius: 14px;
  overflow-wrap: anywhere;
}
.linha.minha .balao {
  padding-right: 32px;
  background: #fce293;
}
.balao p {
  margin: 0;
}
.balao a {
  display: block;
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
.container-menu-grupo {
  position: relative;
  margin-left: auto;
  margin-right: 10px;
}
.pontinhos-grupo {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0 6px;
}
.menu-lista-grupo {
  color: #333;
  top: 30px;
  left: -80
}
.editando-grupo {
  display: flex;
  gap: 6px;
  align-items: center;
}
.editando-grupo input {
  padding: 4px 10px;
  border-radius: 15px;
  border: none;
}
.botao-salvar-grupo {
  background: white;
  color: #238b97;
  border: none;
  padding: 4px 10px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
}
.botao-cancelar-grupo {
  background: #e65261;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 15px;
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
.botao-claro {
  padding: 8px 18px;
  background: #cfe9ee;
  color: #238b97;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
@media (max-width: 800px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
