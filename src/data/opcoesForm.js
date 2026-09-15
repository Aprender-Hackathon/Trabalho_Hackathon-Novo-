import { estadoPratica } from "@/PraticaCards";
import { estadoAtividades } from "@/AtividadesCards";

export const materias = [...new Set(estadoAtividades.lista.map(item => item.materia))]

export const conteudos = [...new Set(estadoAtividades.lista.map(item => item.conteudo))]

export const datas = [...new Set(estadoPratica.lista.map(item => item.data))]

export const cuteudoMateria = {
  Artes: ['Artes Visuais', 
    'História da Arte', 
    'Música'],

  Biologia: [
    'Biotecnologia',
    'Botânica',
    'Células e seus processos',
    'Ecologia',
    'Genética e Evolução',
    'Zoologia',
  ],

  Ciências: [
    'Corpo Humano',
    'Ecologia e Ambiente',
    'Matéria e Energia',
    'Seres Vivos',
    'Terra e Espaço',
  ],

  'Educação Física': ['Corpo e Movimento',
     'Jogos e Esportes',
      'Saúde e Qualidade de Vida'
    ],

  'Ensino Religioso': ['Identidade e Diversidade', 
    'Religião e Cultura', 
    'Valores e Ética'
],

  Espanhol: ['Comunicação Básica', 
    'Leitura e Compreensão', 
    'Verbos e Uso da Língua'
],

  Filosofia: ['Conhecimento e Razão', 
    'Ética e Moral', 
    'Filosofia Clássica', 
    'Filosofia Medieval', 
    'Filosofia Política', 
    'Introdução e Origem'
],

  Física: ['Calor e Termodinâmica', 
    'Eletricidade e Magnetismo', 
    'Energia e Momento', 
    'Forças e Dinâmica', 
    'Gases', 'Movimento', 
    'Ondas e Óptica'],

  Geografia: [
    'Brasil e Mundo',
    'Cartografia e Orientação',
    'Economia e Globalização',
    'Espaço e Paisagem',
    'Natureza e Ambiente',
    'População e Espaço',
  ],

  História: [
    'Antiguidade',
    'Brasil Império e República',
    'Colonização',
    'Fontes e Memória',
    'Guerras e Conflitos',
    'Idade Média e Renascimento',
    'Revoluções e Transformações',
  ],

  Inglês: ['Base da Língua', 'Verbos e Tempos', 'Vocabulário e Leitura'],

  Matemática: [
    'Álgebra',
    'Combinatória e Probabilidade',
    'Conjuntos',
    'Equações e Sistemas',
    'Funções',
    'Geometria Espacial',
    'Geometria Plana',
    'Matrizes e Determinantes',
    'Números e Operações',
    'Razão, Proporção e Porcentagem',
    'Trigonometria',
  ],

  Português: [
    'Alfabetização e Leitura',
    'Classes de Palavras',
    'Coesão e Produção',
    'Concordância e Regência',
    'Gêneros Textuais',
    'Orações e Períodos',
    'Ortografia e Acentuação',
    'Semântica e Variação',
    'Sintaxse',
  ],

  Química: [
    'Átomo e Modelos Atômicos',
    'Eletroquímica',
    'Ligações e Funções',
    'Matéria e Misturas',
    'Química Orgânica',
    'Reações Químicas',
    'Soluções',
    'Termoquímica e Equilíbrio',
  ],

  Sociologia: [
    'Cultura e Sociedade',
    'Introdução e Surgimento',
    'Pensadores Clássicos',
    'Poder e Política',
    'Trabalho e Capitalismo',
  ],
}