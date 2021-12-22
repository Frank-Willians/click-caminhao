<template>
  <section class="secaoFooter">
    <div class="alinhaFooter">
      <img src=".././assets/Union.svg" alt="Click Caminhão" id="logo2"/>
      <span class="versao">Versão 1.0</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterHome"
}
</script>

<style>

  .secaoFooter {
    height: 20vh;
    width: 100vw;
    border-top: 1px solid #18a0fb;
  }

  .alinhaFooter {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #logo2 {
    height: 60px;
    width: 120px;
  }

  .versao {
    color: #242424;
    font-family: roboto,sans-serif;
  }

</style>