import React, { useState } from 'react';

function DicionarioDeDados() {


    return (

        <>
           <br></br><br></br>
            <bds-typo variant="fs-16">
               <strong>Você terá 3 tipos de relatórios, são eles:</strong>

            </bds-typo>
            <bds-typo variant="fs-12">
               Para acessar os relatórios, você precisa ir em:  Análise - Relatóriso personalizados. Clicar em Criar. Lembrando que você precisa estar no chabot Router.

            </bds-typo>


            <hr></hr>
            <bds-accordion-group collapse='single'>
                <bds-accordion>
                    <bds-accordion-header accordion-title="Log-automacao-flowbytags-detalhado" icon="" avatar-name=""
                        avatar-thumb="">
                    </bds-accordion-header>
                    <bds-accordion-body>
                        <bds-typo variant="fs-16">
                            Esse relatório vai te entregar os seguintes dados:
                            Telefone|Template|Tag|Agendamento|ResourceId
                        </bds-typo>
                    </bds-accordion-body>

                </bds-accordion>

                <bds-accordion>
                    <bds-accordion-header accordion-title="Log-automacao-flowbytags-template" icon="" avatar-name=""
                        avatar-thumb="">
                    </bds-accordion-header>
                    <bds-accordion-body>
                        <bds-typo variant="fs-16">
                            Com esse relatório, você conseguirá criar graficos com os templates mais usados.
                        </bds-typo>
                    </bds-accordion-body>

                </bds-accordion>


                <bds-accordion>
                    <bds-accordion-header accordion-title="Log-automacao-flowbytags-tag" icon="" avatar-name=""
                        avatar-thumb="">
                    </bds-accordion-header>
                    <bds-accordion-body>
                        <bds-typo variant="fs-16">
                        Com esse relatório, você conseguirá criar graficos com as tags mais usados.
                        </bds-typo>
                    </bds-accordion-body>

                </bds-accordion>


            </bds-accordion-group>

        </>
    );

}


export default DicionarioDeDados;