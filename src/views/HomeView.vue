<script setup>
</script>

<template>

  <FiltroExplorar
    @filtro="filtroEscolhido = $event"
  />

  <div class="cards">

   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Adição')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Análise combinatória')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Ângulos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Área')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Divisão')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Equações do 1º grau')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Estatística')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Fatoração')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Fatoração')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Função afim')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Função exponencial')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Função quadrática')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Geometria analítica')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Geometria espacial')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Inequações')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Matemática financeira')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Multiplicação')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Números')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Polinômios')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Perímetro')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Potenciação')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Problemas matemáticos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Produtos notáveis')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Progressão aritmética')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Progressão geométrica')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Radiciação')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Razões e proporções')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Regra de três')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Sistema monetário')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Sistemas de equações')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Sólidos geométricos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Teorema de Pitágoras')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Tabelass e gráficos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Triângulos')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Tempo e calendário')
  "
  materia="Matemática"
/>






   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>
   <BotaoExplorar
  v-if="
    (filtroEscolhido.materia === 'Tudo' || filtroEscolhido.materia === 'Matemática') &&
    (filtroEscolhido.conteudo === 'Tudo' || filtroEscolhido.conteudo === 'Contas')
  "
  materia="Matemática"
/>


'Área', 'Divisão', 'Equações do 1º grau', 'Estatística', 'Expressões algébricas', 'Fatoração', 'Frações', 'Função afim', 'Função exponencial', 'Função quadrática', 'Geometria analítica', 'Geometria espacial', 'Geometria plana', 'Inequações', 'Matemática financeira', 'Multiplicação', 'Números decimais', 'Números inteiros', 'Números naturais', 'Números racionais', 'Perímetro', 'Polinômios', 'Potenciação', 'Problemas matemáticos', 'Produtos notáveis', 'Progressão aritmética', 'Progressão geométrica', 'Radiciação', 'Razões e proporções', 'Regra de três', 'Sistema monetário', 'Sistemas de equações', 'Sólidos geométricos', 'Subtração', 'Teorema de Pitágoras', 'Tabelass e gráficos', 'Triângulos', 'Tempo e calendário'],

    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Artes'"
      materia="Artes"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Ciências'"
      materia="Ciências"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Geografia'"
      materia="Geografia"
    />
        <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'História'"
      materia="História"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Língua Inglesa'"
      materia="Língua Inglesa"
    />
    <BotaoExplorar
      v-if="materiaEscolhida === 'Tudo' || materiaEscolhida === 'Língua Portuguesa'"
      materia="Língua Portuguesa"
    />

  </div>

</template>


<script setup>

import { ref } from 'vue'

import FiltroExplorar from '@/components/FiltroExplorar.vue'
import BotaoExplorar from '@/components/BotaoExplorar.vue'

const filtroEscolhido = ref({
  materia: 'Tudo',
  conteudo: 'Tudo'
})

</script>


<style scoped>

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 30px;
}

</style>