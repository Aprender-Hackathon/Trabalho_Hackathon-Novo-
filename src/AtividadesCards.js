import { reactive } from 'vue'

export const estadoAtividades = reactive({
  lista: [
    {
      id: 1,
      titulo: 'Adição',
      imagem: '/SemImagem.png',
      arquivo: '/atividades/Matematica/Algebra/atividade_adaptada_01.docx',
      materia: 'Matemática',
      conteudo: 'Álgebra',
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
      materia: 'Língua Portuguesa',
      conteudo: 'Alfabetização',
      descricao: 'pipipipopopo',
      salvo: false,
    },
    {
      id: 35,
      titulo: 'Alfabetização',
      imagem: '/SemImagem.png',
      arquivo: '/atividades/Portugues/Alfabetizacao/Atividade_B.docx',
      materia: 'Língua Portuguesa',
      conteudo: 'Alfabetização',
      descricao: 'pipipipopopo',
      salvo: false,
    }

  ]
})

export const atividades = estadoAtividades.lista
export default atividades
