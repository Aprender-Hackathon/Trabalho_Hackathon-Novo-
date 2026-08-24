import { reactive } from 'vue'

export const estadoAtividades = reactive({
  lista: [
    {
      id: 1,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/atividadeAdicao1.png',
      arquivo: '/atividades/Matematica/Adicao/atividadeAdicao1.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false,
    },
    {
      id: 11,
      titulo: 'Análise combinatória',
      imagem: '/atividades/Matematica/Analise_combinatoria/atividadeAnalise1.png',
      arquivo: '/atividades/Matematica/Analise_combinatoria/atividadeAnalise1.pdf',
      materia: 'Matemática',
      conteudo: 'Análise combinatória',
      descricao: 'pipipipopopo',
      salvo: false,
    },
    {
      id: 34,
      titulo: 'Alfabetização',
      imagem: '/SemImagem.png',
      arquivo: '/atividades/Portugues/Alfabetizacao/Atividade_A.docx',
      materia: 'Português',
      conteudo: 'Alfabetização',
      descricao: 'pipipipopopo',
      salvo: false,
    }
  ]
})

export const atividades = estadoAtividades.lista
export default atividades
