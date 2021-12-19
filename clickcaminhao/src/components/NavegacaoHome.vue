<template>
  <nav>
    <div>
      <a href="/" id="logo" ><img src=".././assets/Union.svg" alt="Click Caminhão" ref="Click Caminhão"></a>
      <ul>
        <a href="#" class="entrar btn">Entrar</a>
        <a href="#" class="cadastrar btn">Cadastrar</a>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavegacaoHome"
}
</script>

<style scope>
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

  #logo {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  #logo img {
    height: 60px;
    width: 120px;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .entrar {
    color: #18a0fb;
    margin-right: 10px;
  }

  .cadastrar {
    background-color: #18a0fb;
    color: #ffffff;
  }

  .btn {
    font-family: roboto,sans-serif;
    border-radius:4px;
    padding: 10px 20px;
    border: 1px solid #18a0fb;
    text-decoration: none;
  }

  .btn:hover {
    animation: pulse 1s linear infinite;
    box-shadow: 1px 1px 2px 1px #c4c4c4;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

</style>