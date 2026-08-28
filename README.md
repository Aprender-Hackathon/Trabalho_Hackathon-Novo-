# Aprender+

Plataforma web voltada à educação inclusiva, desenvolvida em **Vue 3 + Vite** como projeto do Hackathon.

🔗 **Protótipo Figma:** https://www.figma.com/design/cLwrtktWOB4q0F1IaCPSvb/Hackathon?node-id=104-278&t=U3mzhtInGyToMx7p-1
🔗 **Deploy:** [ADICIONAR LINK - Fabroku ou Surge]

---

## 1. Qual é o tema e o objetivo do projeto?

O tema do projeto é **educação inclusiva e acessível**. O Aprender+ é uma plataforma que reúne atividades pedagógicas adaptadas, com o objetivo de conectar educadores, famílias, voluntários e alunos em um espaço único que facilita o acesso a materiais de estudo adaptados, incentivando a diversidade, o respeito e o desenvolvimento de todas as pessoas principalmente aquelas com necessidades educacionais especiais.

## 2. Quais funcionalidades foram planejadas?

- Cadastro e login de usuários;
- Recuperação de senha;
- Página "Explorar" com busca e filtros de atividades por matéria e conteúdo;
- Página "Atividades Práticas" com busca e filtros de atividades por Datas Comemorativas;
- Visualização e download de atividades em PDF/DOCX;
- Funcionalidade de salvar atividades favoritas;
- Página de perfil do usuário;
- Página "Sobre Nós" com nossa apresentação.

## 3. Quais funcionalidades foram efetivamente desenvolvidas?

- **Página inicial (Home)**, com banner, seção de informações,seção de processo e categorias;
- **Página "Sobre Nós"**, com apresentação do projeto e da equipe;
- **Página "Explorar"**, com busca por texto e filtros (matéria/conteúdo), listando atividades teóricas e práticas a partir de uma base de dados local (`AtividadesCards.js`);
- **Página "Explorar"**, com busca por texto e filtros (Datas Comemorativas), listando atividades teóricas e práticas a partir de uma base de dados local (`PraticaCards.js`);
- **Visualização de atividades individuais** (`/atividade/:id` e `/pratica/:id`), com pré-visualização de arquivos `.docx` (via `docx-preview`) e botões de download em PDF e DOCX;
- **Página "Atividades Práticas"**, com listagem própria;
- **Recuperação de senha** (tela de fluxo, sem envio real de e-mail);
- **Página de usuário/perfil**;
- **Página "Salvos"**, para marcar e revisitar atividades favoritas.

## 4. Quais dificuldades foram encontradas pelo grupo?

O grupo teve pouco tempo para aprender as tecnologias utilizadas no projeto, o que se tornou uma das principais dificuldades. Havia também um nível de conhecimento desigual entre os integrantes: algumas pessoas já tinham mais familiaridade com CSS por terem estudado o assunto durante o ano anterior, enquanto outras encontraram mais dificuldade na parte de lógica/JavaScript, especialmente na hora de rodar o projeto e depurar erros que apareciam no terminal.

Outro ponto de dificuldade foi em relação ao prazo: o cronograma inicial foi estabelecido e, posteriormente, a data foi alterada, o que impactou a organização do grupo. De forma geral, as dificuldades não estiveram tanto na parte de programar em si, mas sim em lidar com erros técnicos no momento de execução (erros no terminal) e em administrar o tempo disponível.

## 5. Como as atividades foram divididas entre os integrantes?

Alana - Atividades Práticas e Sobre Nós;
Anna Clara - Atividades Práticas e Sobre Nós;
Beatriz - Header, entrar/cadastro/rec.senha;
Eduarda - Ínicio, Salvos e Usuários;
Larissa - Footer, Visu.atividades;
Paola - Ínicio, Salvos e Usuários;

## 6. Qual nota, de [0 a 10], o grupo atribui ao resultado apresentado?

9

## 7. Qual é a justificativa para essa avaliação?

O nosso grupo atribui nota 9 ao resultado apresentado por considerar que o projeto ficou bastante completo em relação ao nível do nosso conhecimento da equipe. E o figma continuou igual até o final do projeto.

A nota não foi máxima porque ainda existem muitas melhorias a serem feitas. Mesmo assim, ficamos muito felizes pelo resultado.

---

## Sobre o projeto (técnico)

- **Stack:** Vue 3, Vite, Vue Router, Bootstrap 5, Font Awesome, docx-preview, html2canvas.
- **Instalação:**
  ```sh
  npm install
  ```
- **Desenvolvimento:**
  ```sh
  npm run dev
  ```
- **Build de produção:**
  ```sh
  npm run build
  ```

## Equipe

Alana, Anna Clara, Beatriz, Eduarda, Larissa e Paola — Instituto Federal Catarinense.
