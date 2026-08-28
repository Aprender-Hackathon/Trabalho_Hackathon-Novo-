<template>
  <div class="page-container">
    <button class="close-btn" aria-label="Fechar" @click="goHome">✖</button>

    <div class="register-wrapper">
      <h1 class="main-title">Cadastre-se</h1>

      <div class="card-box">
        <form @submit.prevent="handleRegister">
          <div class="field-group">
            <label>Nome:</label>
            <div class="input-wrapper">
              <img src="@/assets/img/user_cadastro.png" alt="Usuário" class="input-icon" />
              <input
                v-model="name"
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
                v-model="email"
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
                v-model="password"
                type="password"
                placeholder="Crie sua senha"
                required
              />
            </div>
          </div>

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

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  const userData = {
    name: name.value,
    email: email.value
  }

  localStorage.setItem('userData', JSON.stringify(userData))
  localStorage.setItem('isLoggedIn', 'true')

  window.dispatchEvent(new Event('auth-change'))
  router.push('/')
}

const goHome = () => {
  router.push('/')
}
</script>

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
