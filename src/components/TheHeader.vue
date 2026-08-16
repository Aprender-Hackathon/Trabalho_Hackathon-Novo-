<template>
  <header class="header">
    <div class="logo">
      <span>Aprender</span><strong>+</strong>
    </div>

    <nav class="menu">
      <router-link to="/">Início</router-link>
      <router-link to="/explorar">Explorar</router-link>
      <router-link to="/atividades">Atividades Práticas</router-link>
      <router-link to="/sobre">Sobre Nós</router-link>
    </nav>

    <div class="buttons">
      <router-link to="/entrar" class="login">
        Entrar
      </router-link>

      <router-link to="/cadastro" class="register">
        Cadastro
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  min-height: 80px;
  padding: 15px 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  color: var(--color-teal);
}

.logo strong {
  color: var(--color-primary);
}

.menu {
  display: flex;
  gap: 30px;
}

.menu a {
  color: #333;
  font-weight: 500;
}

.menu a:hover {
  color: var(--color-primary);
}

.buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.login,
.register {
  padding: 10px 18px;
  border-radius: 20px;
}

.login {
  color: var(--color-primary);
}

.register {
  background-color: var(--color-primary);
  color: white;
}

@media (max-width: 900px) {
  .header {
    padding: 15px 25px;
    flex-wrap: wrap;
    gap: 15px;
  }

  .menu {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
}
</style>
