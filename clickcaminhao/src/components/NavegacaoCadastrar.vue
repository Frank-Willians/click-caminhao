<template>
  <nav>
    <div>
      <router-link to="/" class="logo"><img src=".././assets/Union.svg" alt="Click Caminhão" ref="Click Caminhão"/></router-link>
      <span class="textoBoasVindas">Olá Magner</span>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavegacaoCadastrar"
  }
</script>

<style>
   nav {
    height: 20vh;
    width: 100vw
  }

  div {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

   .logo {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .logo img {
    height: 60px;
    width: 120px;
  }

  .textoBoasVindas {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

</style>