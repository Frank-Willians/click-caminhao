<template>
  <main>
    <navegacao-cadastrar></navegacao-cadastrar>
    <formulario-cadastrar-usuario></formulario-cadastrar-Usuario>
  </main>
</template>

<script>
  
  import NavegacaoCadastrar from ".././components/NavegacaoCadastrar.vue";
  import FormularioCadastrarUsuario from "../components/FormularioCadastrarUsuario.vue";

  export default {
    name: "Cadastrar",
    components: {
      NavegacaoCadastrar,
      FormularioCadastrarUsuario
    }
  }
</script>

<style>

</style>