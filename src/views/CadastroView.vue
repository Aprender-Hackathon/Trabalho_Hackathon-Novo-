<script setup>
import { onMounted, ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const API_URL = 'http://localhost:3000';
const router = useRouter()

const usuarios = ref([]);


async function carregar() {
  const resposta = await fetch(`${API_URL}/usuarios`);

  usuarios.value = await resposta.json();
}

function calcularIdade(dataNascimento){
  const hoje = new Date();
  const nascimento = new Date(`${dataNascimento}T00:00:00`);

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const naoFezAniversario = nascimento.getMonth() > hoje.getMonth() || (nascimento.getMonth() === hoje.getMonth() && nascimento.getDate() > hoje.getDate());

  if (naoFezAniversario) {
    idade--;
  }

  return idade;
}

const novoUsuario = ref({
  nome: '',
  data_nasc: '',
  id_responsavel: '',
  senha:'',
  email: '',
  id: '',
});

const categoria = computed(() => {
  if (!novoUsuario.value.data_nasc) return '';

  const idade = calcularIdade(novoUsuario.value.data_nasc);

  if (idade < 0) return 'Data inválida';

  return idade < 18 ? 'Aluno' : 'Visitante';
});

const aluno = computed(() => 
  usuarios.value.filter( usuario =>
    calcularIdade(usuario.data_nasc) < 18
  )
);

const visitante = computed(() => 
  usuarios.value.filter( usuario =>
    calcularIdade(usuario.data_nasc) >= 18
  )
);

async function salvarUsuario() {
  
  if (categoria.value === 'Data inválida') {
    alert('Informe uma data de nascimento válida.');
    return;
  }

  try {
    // tira o id vazio para o servidor gerar um id novo
    const { id, ...dados } = novoUsuario.value;

    const resposta = await fetch(`${API_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  });

  if (!resposta.ok) {
      throw new Error('Erro ao cadastrar usuário');
    }

  // usuário criado pelo servidor (já com id)
  const usuarioCriado = await resposta.json();

  // deixa o usuário logado, igual ao login faz
  localStorage.setItem('userData', JSON.stringify({
    id: usuarioCriado.id,
    name: usuarioCriado.nome,
    email: usuarioCriado.email
  }));
  localStorage.setItem('isLoggedIn', 'true');
  window.dispatchEvent(new Event('auth-change'));

  alert('Cadastro realizado com sucesso!');

  router.push('/usuario-pag');

  } catch (erro) {
    console.error(erro);
    alert('Não foi possível realizar o cadastro.');
  }

}

function goHome() {
  router.push('/');
}

onMounted(carregar);
</script>

<template>
  <div class="page-container">
    <button class="close-btn" aria-label="Fechar" @click="goHome">✖</button>

    <div class="register-wrapper">
      <h1 class="main-title">Cadastre-se</h1>

      <div class="card-box">

        <form @submit.prevent="salvarUsuario">
          <div class="field-group">

            <label>Nome:</label>
            <div class="input-wrapper">
              <img src="@/assets/img/user_cadastro.png" alt="Usuário" class="input-icon" />

              <input
                v-model="novoUsuario.nome"
                type="text"
                placeholder="Digite seu nome"
                required
              />
            </div>
          </div>

          <div class="field-group">

            <label>E-Mail:</label>
            <div class="input-wrapper">
              <img src="@/assets/img/envelope_cadastro.png" alt="E-mail" class="input-icon" />

              <input
                v-model="novoUsuario.email"
                type="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
          </div>

          <div class="field-group">

            <label>Senha:</label>
            <div class="input-wrapper">
              <img src="@/assets/img/cadeado_cadastro.png" alt="Senha" class="input-icon" />

              <input
                v-model="novoUsuario.senha"
                type="password"
                placeholder="Crie sua senha"
                required
              />
            </div>
          </div>

          <div class="field-group">
            <label>Data de nascimento:</label>

            <div class="input-wrapper">
              <input
                v-model="novoUsuario.data_nasc"
                type="date"
                required
              />
            </div>
          </div>

          <p v-if="categoria">
            Categoria: {{ categoria }}
          </p>

          <div class="btn-container">
            <button type="submit" class="submit-btn">Criar Conta</button>
          </div>

          </form>

        <div class="card-footer">
          <p>Já tem uma conta?</p>
          <RouterLink to="/login-pag" class="login-link">Entre aqui</RouterLink>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #fefefe;
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: #e65252;
  color: white;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.register-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 520px;
  padding: 20px;
}

.main-title {
  color: #1a5660;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 15px;
  text-align: center;
}

.card-box {
  background-color: #fcd581;
  border-radius: 24px;
  padding: 40px 35px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-group label {
  color: #2c2c2c;
  font-weight: 700;
  font-size: 0.95rem;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #fef6e4;
  border-radius: 20px;
  padding: 10px 16px;
}

.input-icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

.input-wrapper input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 0.9rem;
  color: #444;
}

.input-wrapper input::placeholder {
  color: #9e8e6c;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.submit-btn {
  background-color: #2b8b97;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 45px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-btn:hover {
  background-color: #216d77;
}

.card-footer {
  margin-top: 20px;
  text-align: center;
}

.card-footer p {
  margin: 0;
  color: #2c2c2c;
  font-weight: 700;
  font-size: 1rem;
}

.login-link {
  color: #2b8b97;
  font-weight: 700;
  font-size: 0.90rem;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .close-btn {
    top: 15px;
    right: 15px;
    width: 36px;
    height: 36px;
    font-size: 18px;
  }

  .register-wrapper {
    padding: 15px;
    margin-top: 40px;
  }

  .main-title {
    font-size: 1.8rem;
  }

  .card-box {
    padding: 25px 20px;
    border-radius: 20px;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
  }
}
</style>
