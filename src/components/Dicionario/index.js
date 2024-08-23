import React, { useState } from 'react';

function DicionarioDeDados() {


  return (

    <>
      <bds-typo variant="fs-16">
        <strong>Explicando os campos do passo 1</strong>

      </bds-typo>
  
      <br></br>

      <bds-accordion-group collapse='single'>
        <bds-accordion>
          <bds-accordion-header accordion-title="Nome do fluxo" icon="" avatar-name=""
            avatar-thumb="">
          </bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">
              Todo fluxo precisa ter um nome.
            </bds-typo>
          </bds-accordion-body>

        </bds-accordion>

        <bds-accordion>
          <bds-accordion-header accordion-title="Tags" icon="" avatar-name=""
            avatar-thumb="">
          </bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">
              Com base na tag que o assistente finalizar, automaticamente será criado uma mensagem ativa conforme sua configuração/régua de disparo.
            </bds-typo>
          </bds-accordion-body>

        </bds-accordion>


        <bds-accordion>
          <bds-accordion-header accordion-title="Template" icon="" avatar-name=""
            avatar-thumb="">
          </bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">
              Você deve selecionar um template que tenha apenas uma variável. Essa automação já pega o nome do cliente como padrão.
            </bds-typo>
          </bds-accordion-body>

        </bds-accordion>



        <bds-accordion>
          <bds-accordion-header accordion-title="Bloco de retorno" icon="" avatar-name=""
            avatar-thumb="">
          </bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">
              Você deve selecionar o bloco de retorno, ou seja, quando o cliente responder, ele vai cair nesse ponto do seu fluxo.
            </bds-typo>
          </bds-accordion-body>

        </bds-accordion>

        <bds-accordion>
          <bds-accordion-header accordion-title="Bloco de gatilho" icon="" avatar-name=""
            avatar-thumb="">
          </bds-accordion-header>
          <bds-accordion-body>
            <bds-typo variant="fs-16">
              Esse bloco é fundamental para o funcionamento da extensão, ou seja, quando você escolher o bloco de gatilho, a automação vai entender que,  ao chegar nessa etapa o sistema precisa fazer as validações necessarias para que sua <strong>configuração/Campanha</strong> funcione corretamente.
              é recomendado que você selecione o bloco que vem depois do Atendimento humano.
            </bds-typo>
          </bds-accordion-body>

        </bds-accordion>



      </bds-accordion-group>

    </>
  );

}


export default DicionarioDeDados;