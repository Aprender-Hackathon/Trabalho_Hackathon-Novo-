import { estadoPratica } from "@/PraticaCards";
import { estadoAtividades } from "@/AtividadesCards";

export const materias = [...new Set(estadoAtividades.lista.map(item => item.materia))]

export const conteudos = [...new Set(estadoAtividades.lista.map(item => item.conteudo))]

export const datas = [...new Set(estadoPratica.lista.map(item => item.data))]

export const conteudoMateria = {
  Artes: ['Artes Visuais', 
    'Hist├│ria da Arte', 
    'M├║sica'],

  Biologia: [
    'Biotecnologia',
    'Bot├ónica',
    'C├®lulas e seus processos',
    'Ecologia',
    'Gen├®tica e Evolu├º├úo',
    'Zoologia',
  ],

  Ci├¬ncias: [
    'Corpo Humano',
    'Ecologia e Ambiente',
    'Mat├®ria e Energia',
    'Seres Vivos',
    'Terra e Espa├ºo',
  ],

  'Educa├º├úo F├¡sica': ['Corpo e Movimento',
     'Jogos e Esportes',
      'Sa├║de e Qualidade de Vida'
    ],

  'Ensino Religioso': ['Identidade e Diversidade', 
    'Religi├úo e Cultura', 
    'Valores e ├ëtica'
],

  Espanhol: ['Comunica├º├úo B├ísica', 
    'Leitura e Compreens├úo', 
    'Verbos e Uso da L├¡ngua'
],

  Filosofia: ['Conhecimento e Raz├úo', 
    '├ëtica e Moral', 
    'Filosofia Cl├íssica', 
    'Filosofia Medieval', 
    'Filosofia Pol├¡tica', 
    'Introdu├º├úo e Origem'
],

  F├¡sica: ['Calor e Termodin├ómica', 
    'Eletricidade e Magnetismo', 
    'Energia e Momento', 
    'For├ºas e Din├ómica', 
    'Gases', 'Movimento', 
    'Ondas e ├ôptica'],

  Geografia: [
    'Brasil e Mundo',
    'Cartografia e Orienta├º├úo',
    'Economia e Globaliza├º├úo',
    'Espa├ºo e Paisagem',
    'Natureza e Ambiente',
    'Popula├º├úo e Espa├ºo',
  ],

  Hist├│ria: [
    'Antiguidade',
    'Brasil Imp├®rio e Rep├║blica',
    'Coloniza├º├úo',
    'Fontes e Mem├│ria',
    'Guerras e Conflitos',
    'Idade M├®dia e Renascimento',
    'Revolu├º├Áes e Transforma├º├Áes',
  ],

  Ingl├¬s: ['Base da L├¡ngua', 'Verbos e Tempos', 'Vocabul├írio e Leitura'],

  Matem├ítica: [
    '├ülgebra',
    'Combinat├│ria e Probabilidade',
    'Conjuntos',
    'Equa├º├Áes e Sistemas',
    'Fun├º├Áes',
    'Geometria Espacial',
    'Geometria Plana',
    'Matrizes e Determinantes',
    'N├║meros e Opera├º├Áes',
    'Raz├úo, Propor├º├úo e Porcentagem',
    'Trigonometria',
  ],

  Portugu├¬s: [
    'Alfabetiza├º├úo e Leitura',
    'Classes de Palavras',
    'Coes├úo e Produ├º├úo',
    'Concord├óncia e Reg├¬ncia',
    'G├¬neros Textuais',
    'Ora├º├Áes e Per├¡odos',
    'Ortografia e Acentua├º├úo',
    'Sem├óntica e Varia├º├úo',
    'Sintaxse',
  ],

  Qu├¡mica: [
    '├ütomo e Modelos At├┤micos',
    'Eletroqu├¡mica',
    'Liga├º├Áes e Fun├º├Áes',
    'Mat├®ria e Misturas',
    'Qu├¡mica Org├ónica',
    'Rea├º├Áes Qu├¡micas',
    'Solu├º├Áes',
    'Termoqu├¡mica e Equil├¡brio',
  ],

  Sociologia: [
    'Cultura e Sociedade',
    'Introdu├º├úo e Surgimento',
    'Pensadores Cl├íssicos',
    'Poder e Pol├¡tica',
    'Trabalho e Capitalismo',
  ],
}
