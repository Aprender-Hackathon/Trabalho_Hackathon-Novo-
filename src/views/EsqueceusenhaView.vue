<template>
  <div class="page-container">
    <div class="form-panel">
      <button class="close-btn" aria-label="Fechar" @click="goHome">✖</button>

      <div class="card-box">
        <p class="description">
          Digite seu e-mail que enviaremos um link para definir uma nova senha.
        </p>

        <form @submit.prevent="handleResetPassword">
          <label class="input-label">E-Mail:</label>

          <div class="input-wrapper">
            <img class="icon" src="@/assets/img/envelope.png" alt="E-Mail" />
            <input
              v-model="email"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <button type="submit" class="submit-btn">Enviar</button>
          <button type="button" class="resend-btn" @click="handleResend">Reenviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')

const handleResetPassword = () => {
  console.log('Enviando e-mail para:', email.value)
}

const handleResend = () => {
  console.log('Reenviando e-mail para:', email.value)
}

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  padding: 20px 0;
  box-sizing: border-box;
}

.form-panel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 460px;
  padding: 0 15px;
  box-sizing: border-box;
}

.close-btn {
  position: absolute;
  top: -15px;
  right: 0px;
  background-color: #e54d53;
  color: white;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.card-box {
  background-color: #fdd888;
  padding: 50px 35px 40px 35px;
  border-radius: 28px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.description {
  color: #3b2c1a;
  font-weight: 900;
  font-size: 1.2rem;
  line-height: 1.35;
  margin: 0 0 24px 0;
}

form {
  display: flex;
  flex-direction: column;
}

.input-label {
  color: #3b2c1a;
  font-weight: 800;
  font-size: 1.0rem;
  margin-bottom: 6px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #fdf5e6;
  border-radius: 20px;
  padding: 10px 14px;
  margin-bottom: 24px;
}

.input-wrapper .icon {
  width: 20px;
  height: 16px;
  margin-right: 10px;
  object-fit: contain;
}

.input-wrapper input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 1.0rem;
  color: #555;
  font-weight: 500;
}

.input-wrapper input::placeholder {
  color: #7a6e5d;
}

.submit-btn {
  background-color: #2e8b9a;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 12px;
  transition: opacity 0.2s;
}

.submit-btn:hover {
  opacity: 0.9;
}

.resend-btn {
  background-color: #fdf5e6;
  color: #4a3e2e;
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}

.resend-btn:hover {
  opacity: 0.9;
}

@media (max-width: 600px) {
  .page-container {
    min-height: calc(100vh - 60px);
    padding: 10px 0;
  }

  .close-btn {
    top: -10px;
    right: 10px;
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  .card-box {
    padding: 35px 20px 25px 20px;
    border-radius: 20px;
  }

  .description {
    font-size: 1.05rem;
    margin-bottom: 18px;
  }

  .input-wrapper {
    margin-bottom: 18px;
  }

  .submit-btn,
  .resend-btn {
    padding: 14px;
    font-size: 0.95rem;
  }
}
</style>
