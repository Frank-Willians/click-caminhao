<template>
  <section>
    <span></span>
    <p>A Click Caminhão surgiu com o intuito de ajudar as empresas a medirem suas produções de maneira fácil e rápido, assim podendo tomar as melhores decisões.</p>
  </section>
</template>

<script>
export default {
  name: "TextoHome"
}
</script>

<style>
  section {
    height: 50vh;
    width: 100vw;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-family: roboto,sans-serif;
    font-size: 1.5rem;
    max-width: 800px;
    text-align: center;
  }

  span {
    width: 120px;
    height: 5px;
    background-color: #18a0fb;
    border-radius: 4px;
  }

</style>