import { reactive } from 'vue'

export const estadoAtividades = reactive({
  lista: [
    //#region MATEMÁTICA

    //#region ADIÇÃO
    {
      id: 1,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/atividadeAdicao1.png',
      arquivo: '/atividades/Matematica/Adicao/atividadeAdicao1.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 2,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma1.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 3,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma2.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 4,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma3.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 5,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma4.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 6,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma5.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 7,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma6.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 8,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma7.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 9,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma8.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    {
      id: 10,
      titulo: 'Adição',
      imagem: '/atividades/Matematica/Adicao/Soma9.jpeg',
      arquivo: '/atividades/Matematica/Adicao/semPDFporEnquanto.pdf',
      materia: 'Matemática',
      conteudo: 'Adição',
      descricao: 'pipipipopopo',
      salvo: false
    },
    //#endregion

    //#region ANÁLISE COMBINATÓRIA
    {
      id: 11,
      titulo: 'Análise combinatória',
      imagem: '/atividades/Matematica/Analise_combinatoria/atividadeAnalise1.png',
      arquivo: '/atividades/Matematica/Analise_combinatoria/atividadeAnalise1.pdf',
      materia: 'Matemática',
      conteudo: 'Análise combinatória',
      descricao: 'pipipipopopo',
      salvo: false
    }
    //#endregion

    //#endregion
  ]
})

// Exporta também com o nome antigo apontando para a lista reativa
export const atividades = estadoAtividades.lista
