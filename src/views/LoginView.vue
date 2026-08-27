<template>
  <div class="page-container">
    <div class="brand-panel">
      <h1>Bem vindo(a)<br>de volta!</h1>
    </div>

    <div class="form-panel">
      <button class="close-btn" aria-label="Fechar" @click="goHome">✖</button>

      <h2>Entrar com</h2>

      <div class="card-box">
        <button type="button" class="google-btn">
          <svg class="google-icon" viewBox="0 0 24 24">
            <image href="@/assets/img/google.png" width="24" height="24" />
          </svg>
          Google
        </button>

        <span class="divider">ou</span>

        <form @submit.prevent="handleLogin">
          <div class="input-wrapper">
         <img src="@/assets/img/usuario.png" alt="Usuário" class="input-icon" />
            <input 
              v-model="emailOrUser" 
              type="text" 
              placeholder="E-Mail/Nome do Usuário" 
              required
            />
          </div>

          <div class="input-wrapper">
          <img src="@/assets/img/cadeado.png" alt="Senha" class="input-icon" />
            <input 
              v-model="password" 
              type="password" 
              placeholder="Senha" 
              required
            />
          </div>

          <button type="submit" class="submit-btn">Entrar</button>
        </form>

        <a href="#" class="forgot-link"></a>
        <RouterLink  to="/esqueceu-senha">Esqueceu a senha?</RouterLink>

        <p class="signup-text">
          Ainda não tem uma conta? <br>
          <router-link to="/cadastro">Cadastre-se</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emailOrUser = ref('')
const password = ref('')

const handleLogin = () => {

  localStorage.setItem('isLoggedIn', 'true')

  window.dispatchEvent(new Event('storage'))

  router.push('/')
}

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.page-container {
  display: flex;
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.brand-panel {
  flex: 1.0;
  background-color: #238b97;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 0 120px 120px 0 / 0 180px 180px 0;
  box-shadow: inset -20px 0 0 #fbd87f;
}

.brand-panel h1 {
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  line-height: 1.2;
  margin: 0;
}

.form-panel {
  flex: 2.0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #ffffff;
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.form-panel h2 {
  color: #1e6d77;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.card-box {
  background-color: #fce293;
  padding: 35px 30px;
  border-radius: 30px;
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #fde8b3;
  border: 1px solid #f9d584;
  border-radius: 20px;
  width: 75%;
  padding: 8px 16px;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.google-icon {
  width: 18px;
  height: 18px;
}

.divider {
  margin: 14px 0;
  color: #238b97;
  font-weight: 800;
  font-size: 0.95rem;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #fff9eb;
  border-radius: 20px;
  padding: 8px 14px;
}

.input-icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

.input-wrapper input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 0.85rem;
  color: #555;
}

.input-wrapper input::placeholder {
  color: #a39578;
}

.submit-btn {
  background-color: #238b97;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 6px;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #1b6f79;
}

a {
  color: #238b97;
  font-weight: 600;
  text-decoration: none;
}

.signup-text {
  color: #2e2e2e;
  font-size: 0.85rem;
  font-weight: 700;
  margin-top: 18px;
  text-align: center;
  line-height: 1.4;
}

.signup-text a {
  color: #238b97;
  text-decoration: underline;
  font-weight: 800;
}
</style>