import React, { useState } from 'react';

const  Doc = () => {

  return (
    <div className="container w-100">

      <h1>Documentação</h1>
      <hr></hr>

      <span>Para acessar a documentação dessa extensão, clique no link abaixo:</span><br />

        <span ng-if="tab.tabHref">
          <a href="https://github.com/Wilkor/doc-plugin-redeem-customer/blob/main/README.md#como-utilizar-a-extens%C3%A3o-automensagem" class="tab-href" target="_blank" style={{ color: 'black', textDecoration: 'nome' }}>Clique aqui! <i class="icon-external-link icon icon-xss mb2"></i></a>
        </span>
    </div>
  );

}


export default Doc;