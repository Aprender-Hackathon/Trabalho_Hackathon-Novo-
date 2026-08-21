<template>
    <div class="form-panel">
        <button class="close-btn" aria-label="Fechar" @click="goHome">✖</button>

      <h2>Entrar com</h2>

  
        <form @submit.prevent="handleLogin">
            <h2>Digite seu e-mail que enviaremos <br>
                um link para definir uma nova senha.</h2>
          <div class="input-wrapper">
            <h2>E-mail</h2>
            <img class="icon" src="@/assets/img/envelope.png" alt="E-Mail" />
            <input 
              v-model="emailOrUser" 
              type="text" 
              placeholder="Digite seu e-mail" 
              required
            />
          </div>

         
          <button type="submit" class="submit-btn">Enviar</button>

          <button type="submit" class="submit-btn">Reenviar</button>
        </form>

       

      </div>

 
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emailOrUser = ref('')


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


.brand-panel {
  flex: 1;
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
  flex: 1;
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
  width: 32px;
  height: 32px;
  font-size: 14px;
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

.input-wrapper .icon {
  font-size: 1rem;
  margin-right: 8px;
  opacity: 0.7;
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

.forgot-link {
  color: #238b97;
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: 12px;
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