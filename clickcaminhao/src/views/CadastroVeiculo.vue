<template>
  <main>
    <navegacao-cadastrar></navegacao-cadastrar>
    <formulario-cadastro-veiculo></formulario-cadastro-veiculo>
  </main>
</template>

<script>
    import NavegacaoCadastrar from "../components/NavegacaoCadastrar.vue";
    import FormularioCadastroVeiculo from "../components/FormularioCadastroVeiculo.vue";

  export default {
    name: "CadastroVeiculo",
    components: {
      NavegacaoCadastrar,
      FormularioCadastroVeiculo
    }
  }
</script>

<style>

</style>