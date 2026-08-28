import { reactive } from 'vue'

export const estadoPratica = reactive({
  lista: [
    {
      id: 1,
      titulo: 'Atividade',
      imagem: '/Imagens feriados/Ano Novo/AnoNovo_1.png',
      arquivo: '',
      data: 'Ano Novo',
      descricao: 'Atividade temática para celebração de Ano Novo na educação infantil.',
      salvo: false,
    }
  ],
})

export default estadoPratica
