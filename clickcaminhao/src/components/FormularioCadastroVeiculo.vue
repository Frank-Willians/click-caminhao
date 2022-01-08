<template>
  <main  class="l-FormularioCadastroVeiculo">
    <form action="" class="c-FormularioCadastroVeiculo__form">
    <!--Formulario do veiculo-->
      <div class="c-FormularioCadastroVeiculo__veiculo">
        <div class="c-FormularioCadastroVeiculo__DadosVeiculo">

          <p>Dados do Caminhão</p>

          <div class="c-FormularioCadastroVeiculo__Placa">
            
            <label for="placa">Placa do Veiculo</label>
            <div class="c-FormularioCdastroVeiculo__TodasAsPlacas">
              <input type="text" id="placa" placeholder="Cavalo" /><input type="text" placeholder="Carreta 1" /><input type="text" placeholder="Carreta 2" /><input type="text" placeholder="Carreta 3" />
            </div>

          </div>
          <div class="c-FormularioCadastroVeiculo__Peso">

            <label for="">Peso</label>
            <div class="c-FormularioCdastroVeiculo__TodosOsPesos">
              <input type="text" placeholder="Tara" /><input type="text" placeholder="Peso Bruto" /><input type="text" placeholder="Peso Liquído" />
            </div>

          </div>
          <div class="c-FormularioCadastroVeiculo__OrigemDestino">

            <div class="c-FormularioCadastroVeiculo__Origem">
              <label for="">Origem</label>
              <input type="text" class="c-FormularioCadastroVeiculo__OrigemInput" placeholder="Origem" />
            </div>
            <div class="c-FormularioCadastroVeiculo__Destino">
              <label for="">Destino</label>
              <input type="text" class="c-FormularioCadastroVeiculo__DestinoInput" placeholder="Destino" />
            </div>

          </div>
          <div class="c-FormularioCadastroVeiculo__ClienteOrigemDestino">
            <div class="c-FormularioCadastroVeiculo__ClienteOrigem">
              <label for="">Cliente Origem</label>
              <input type="text" class="c-FormularioCadastroVeiculo__ClienteOrigemInput" placeholder="Cliente Origem"/>
            </div>
            <div class="c-FormularioCadastroVeiculo__ClienteDestino">
              <label for="">Cliente Destino</label>
              <input type="text" class="c-FormularioCadastroVeiculo__ClienteDestinoInput" placeholder="Cliente Destino"/>
            </div> 
          </div>
        </div>


        <div  class="c-FormularioCadastroVeiculo__DadosMotorista">
        
          <p>Dados do Motorista</p>

          <div class="c-FormularioCadastroVeiculo__NomeMotorista">
            <label for="">Nome Motorista</label>
            <input type="text" class="c-FormularioCadastroVeiculo__NomeMotoristaInput" placeholder="Nome Motorista" />
          </div>
          <div class="c-FormularioCadastroVeiculo__CpfMotorista">
            <label for="">CPF</label>
            <input type="text" class="c-FormularioCadastroVeiculo__CpfMotoristaInput" placeholder="CPF Motorista" />
          </div>
          <div class="c-FormularioCadastroVeiculo__ContatoMotorista">
            <label for="">Contato</label>
            <input type="text" class="c-FormularioCadastroVeiculo__ContatoMotoristaInput" placeholder="Contato Motorista" />
          </div>
        
        </div>
      </div>

    <!--Formulario de Classificacao-->
      <div class="c-FormularioCadastroVeiculo__Classificacao">
        <div class="c-FormularioCadastroVeiculo__DadosClassificacao">

          <p>Dados da classificação</p>

          <div class="c-FormularioCadastroVeiculo__UmidadeImpureza">
            <div class="c-FormularioCadastroVeiculo__Umidade">
              <label for="">Umidade</label>
              <input type="text" placeholder="Umidade" />
            </div>
            <div class="c-FormularioCadastroVeiculo__Impureza">
              <label for="">Impureza</label>
              <input type="text" placeholder="Impureza" />
            </div>
          </div>

          <div class="c-FormularioCadastroVeiculo__AvariadosQuebrados">
            <div class="c-FormularioCadastroVeiculo__Avariados">
              <label for="">Avariados</label>
              <input type="text" placeholder="Avariados" />
            </div>
            <div class="c-FormularioCadastroVeiculo__Quebrados">
              <label for="">Quebrados</label>
              <input type="text" placeholder="Quebrados" />
            </div>
          </div>

          <div class="c-FormularioCadastroVeiculo__QueimadosPicados">
            <div class="c-FormularioCadastroVeiculo__Queimados">
              <label for="">Queimados</label>
              <input type="text" placeholder="Queimados" />
            </div>
            <div class="c-FormularioCadastroVeiculo__Picados">
              <label for="">Picados</label>
              <input type="text" placeholder="Picados" />
            </div>
          </div>

        </div>

        <div class="c-FormularioCadastroVeiculo__DadosClassificador">

          <p>Dados do classificador</p>

          <div class="c-FormularioCadastroVeiculo__NomeClassificador">
            <label for="">Nome Classificador</label>
            <input type="text" class="c-FormularioCadastroVeiculo__NomeClassificadorInput" placeholder="Nome Classificador"/>
          </div>

          <div class="c-FormularioCadastroVeiculo__ContatoClassificador">
             <label for="">Contato Classificador</label>
            <input type="text" class="c-FormularioCadastroVeiculo__ContatoClassificadorInput" placeholder="Contato Classificador"/>
          </div>
          
          <div class="c-FormularioCadastroVeiculo__EmpresaClassificador">
             <label for="">Empresa Classificador</label>
            <input type="text" class="c-FormularioCadastroVeiculo__EmpresaClassificadorInput" placeholder="Empresa Classificador"/>
          </div>

        </div>
      </div>

     <!--Formulario de envio-->
      <div class="c-FormularioCadastroVeiculo__Enviar">

        <div class="c-FormularioCadastroVeiculo__Observacao">
          <label for="">Observação</label>
          <input type="text" class="c-FormularioCadastroVeiculo__ObservacaoInput" placeholder="Observação" />
        </div>

        <input type="submit" class="c-FormularioCadastroVeiculo__ObservacaoEnviar" />

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
    height: 130vh;
    width: 100vw;
  }

  .c-FormularioCadastroVeiculo__form {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    background-color: #F4F6F6;
  }

  .c-FormularioCadastroVeiculo__veiculo {
    height: 50%;
    width: 100%;
    display: flex;
  }

  .c-FormularioCadastroVeiculo__veiculo label {
    font-family: roboto,sans-serif;
  }

  .c-FormularioCadastroVeiculo__DadosVeiculo {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__Placa {
    width: 550px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .c-FormularioCadastroVeiculo__Placa label {
    margin-left: 6px;
  }

  .c-FormularioCdastroVeiculo__TodasAsPlacas {
    display: flex;
    width: 550px;
  }

  .c-FormularioCdastroVeiculo__TodasAsPlacas input {
    height: 20px;
    width: 100px;
    margin: 5px;
  }

  .c-FormularioCadastroVeiculo__Peso {
    width: 550px;
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__Peso label {
    margin-left: 6px;
  }

  .c-FormularioCdastroVeiculo__TodosOsPesos {
    width: 550px;
    display: flex;
  }

  .c-FormularioCdastroVeiculo__TodosOsPesos input {
    height: 20px;
    width: 100px;
    margin: 5px;
  }

  .c-FormularioCadastroVeiculo__OrigemDestino {
    width: 550px;
  }

  .c-FormularioCadastroVeiculo__Origem {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .c-FormularioCadastroVeiculo__Origem input {
    height: 20px;
    width: 100px;
  }

  .c-FormularioCadastroVeiculo__Destino {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .c-FormularioCadastroVeiculo__Destino input {
    height: 20px;
    width: 100px;
  }

  .c-FormularioCadastroVeiculo__ClienteOrigemDestino {
    width: 550px;
  }

  .c-FormularioCadastroVeiculo__ClienteOrigem {
    display: flex;
    flex-direction: column;
    height: 50px;
    width: 100%;
  }

  .c-FormularioCadastroVeiculo__ClienteOrigem input {
    padding: 2px 0px;
    width: 100px;
  }

  .c-FormularioCadastroVeiculo__ClienteDestino {
    display: flex;
    flex-direction: column;
    height: 50px;
    width: 100%;
  }

  .c-FormularioCadastroVeiculo__ClienteDestino input {
    padding: 2px;
    width: 100px;
  }

  .c-FormularioCadastroVeiculo__DadosMotorista {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__NomeMotorista {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__NomeMotorista input {
    padding: 2px;
  }

  .c-FormularioCadastroVeiculo__CpfMotorista {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__CpfMotorista input {
    padding: 2px;
  }

  .c-FormularioCadastroVeiculo__ContatoMotorista {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__ContatoMotorista input {
    padding: 2px;
  }


  .c-FormularioCadastroVeiculo__Classificacao {
    height: 40%;
    width: 100%;
    display: flex;
  }

  .c-FormularioCadastroVeiculo__Classificacao input {
    padding: 2px;
  }

  .c-FormularioCadastroVeiculo__Classificacao label {
    font-family: roboto,sans-serif;
  }

  .c-FormularioCadastroVeiculo__DadosClassificacao {
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__UmidadeImpureza {
    width: 100%;
  }

  .c-FormularioCadastroVeiculo__Umidade {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__Impureza {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__AvariadosQuebrados {
    width: 100%;
  }

  .c-FormularioCadastroVeiculo__Avariados {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__Quebrados {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__QueimadosPicados {
    width: 100%;
  }

  .c-FormularioCadastroVeiculo__Queimados {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__Picados {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__DadosClassificador {
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__NomeClassificador {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__ContatoClassificador {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__EmpresaClassificador {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .c-FormularioCadastroVeiculo__Enviar {
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .c-FormularioCadastroVeiculo__Observacao {
    display: flex;
    flex-direction: column;
    height: 50px;
    width: 100%;
  }

  .c-FormularioCadastroVeiculo__Observacao label {
    margin-left: 25px;
  }

  .c-FormularioCadastroVeiculo__ObservacaoInput {
    padding: 2px;
    width: 92%;
    margin-left: 25px;
  }

  .c-FormularioCadastroVeiculo__ObservacaoEnviar {
    width: 100px;
    margin-left: 27px;
    padding: 4px;
    border: 2px solid #18a0fb;
    background: #18a0fb;
    color: white;
    outline: none;
  }


</style>