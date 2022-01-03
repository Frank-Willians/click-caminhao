<template>
  <main  class="l-FormularioCadastroVeiculo">
    <form action="" class="c-FormularioCadastroVeiculo__form">

      <div class="c-FormularioCadastroVeiculo__veiculo">

        <div class="c-FormularioCadastroVeiculo__caminhao">
          <p class="c-FormularioCadastroVeiculo__tituloCaminhao">Dados do Caminhão</p>
          
          <label for="placa">Placa</label>
          <div class="c-FormularioCadastroVeiculo__caminhaoPlaca"><input type="text" id="placa" class="c-FormularioCadastroVeiculo__caminhaoPlacaInput" /><input type="text" class="c-FormularioCadastroVeiculo__caminhaoPlacaInput" /><input type="text" class="c-FormularioCadastroVeiculo__caminhaoPlacaInput" /><input type="text" class="c-FormularioCadastroVeiculo__caminhaoPlacaInput" /></div>
          <span></span>

          <label for="">Peso</label>
          <input type="text"/>

          <div>
            <label for="">Origem</label>
            <input type="text" />
            <label for="">Destino</label>
            <input type="text" />
          </div>

          <div>
            <label for="">Cliente Origem</label>
            <input type="text" />
            <label for="">Cliente Destino</label>
            <input type="text" />
          </div>

        </div>

        <div class="c-FormularioCadastroVeiculo__motorista">
          <p class="c-FormularioCadastroVeiculo__tituloMotorista">Dados do Motorista</p>

          <label for="">Nome Completo</label>
          <input type="text">

          <label for="">CPF</label>
          <input type="text">

          <label for="">Contato</label>
          <input type="text">
        </div>

      </div>
      <div class="c-FormularioCadastroVeiculo__classificacao">

        <div>
        
          <p>Dados da Classificação</p>

          <div>
            
            <label for="">Umidade</label>
            <input type="text">

            <label for="">Impureza</label>
            <input type="text">

          </div>

          <div>

            <label for="">Avariados</label>
            <input type="text">

            <label for="">Quebrados</label>
            <input type="text">

          </div>

          <div>

            <label for="">Queimados</label>
            <input type="text">

            <label for="">Picados</label>
            <input type="text">

          </div>

        </div>
        <div>
        
          <p>Dados do Classificador</p>

          <label for="">Nome Completo</label>
          <input type="text">

          <label for="">Contato</label>
          <input type="text">

           <label for="">Empresa</label>
           <input type="text">

        </div>

        <label for="">Observação</label>
        <input type="text">

        <input type="submit" />

      </div>
    </form>
  </main>
</template>

<script>
  export default {
    name: "FormularioCadastroVeiculo"
  }
</script>

<style>

  .l-FormularioCadastroVeiculo {
    height: 100vh;
    width: 100vw;
  }

  .c-FormularioCadastroVeiculo__form {
    height: 100%;
    width: 80%;
    background-color: #F4F6F6;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__veiculo {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .c-FormularioCadastroVeiculo__caminhao {
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__motorista {
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__caminhaoPlaca {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .c-FormularioCadastroVeiculo__caminhaoPlacaInput {
    height: 20px;
    width: 120px;
    margin: 0px 2px;
    transform: translateX(-55px);
  }

</style>