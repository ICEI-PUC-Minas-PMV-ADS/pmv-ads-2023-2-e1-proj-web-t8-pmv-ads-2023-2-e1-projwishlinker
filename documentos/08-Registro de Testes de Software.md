# Registro de Testes de Software

Os testes funcionais realizados na aplicação web são descritos a seguir.

<ol>
  <li> CT-01: Verificar o funcionamento da página Dashboard.<br>
       Responsável: Gustavo.
       <p>Imagem, descrição do teste e resultados</p>
          <p><i>Imagens dos testes:</i></p>
              <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/119420834/e55adb6b-9cbc-45be-ab08-63921e496561" /> <br><br> 
              <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/119420834/490be50e-71ea-4846-b855-c8d34ddac626" /> <br><br> 
              <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/119420834/cc707cfd-8cfd-46dd-af86-387e0e095378" /> <br><br> 
              <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/119420834/ec668a7a-4676-4437-a350-f39dce5cd114" /> <br><br> 
              <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/119420834/41c9ce96-d7bb-4886-862b-1cc934c8b116" /> <br><br> 
          <p><i>Descrição dos testes:</i></p>
              <p>Foram realizados os testes para verificação do funcionameto da página Dashboard com o intuito de verificar a funcionalidade da mesma, afim de identificar possíveis falhas e observar se o                                    funcionamento está dentro do esperado e correto, de acordo com o Plano de Testes de Software</p>
          <p><i>Resultados dos testes:</i></p>
              <p>Após os testes foi possível observar que a aplicação apresenta o funcionamento correto e dentro do esperado. Na tela de exibição é apresentado os dados quantitativos dos itens cadastrados nas lista. Em                     caso de mais de 1 produto idêntico é feito a soma dos seus respectivos valores. Também é apresentado as listagens de notificações de produtos em quarentena, todas elas são de no máximo 3                                    dias ou menos para vencimento, conforme programado e esperado.</p>
  <hr>
  <li> CT-02: Gerenciamento de Produtos na Lista de desejos.<br>
       Responsável: Jozimar.
       <p><i>Imagens do teste de cadastro de novos produtos</i></p>
        <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144956029/7abd5e79-7d7f-4794-ac28-8efea8019d70" /> <br><br>
        <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144956029/3e550bf8-84d9-4b7d-8b53-a9f1f0201444" />  <br><br>
        <p><i>Descrição do teste de cadastro:</i></p>
          <p>Foram realizados os testes inserindo novos produtos na tabela, para identificar possíveis falhas e observar se o funcionamento está correto. </p>
       <p><i>Resultado do teste:</i></p> 
       <p>Após os testes foi observado que os dados estão sendo carregados corretamente conforme é preenchido na janela "Adicionar produto". Uma observação é que enquanto todos os campos não são preenchidos o usuário não consegue salvar o produto.</p>  
    <p><i>Imagens do teste de remoção de produtos.</i></p>
         <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144956029/2e552b96-46cf-44c6-ab02-f0245b32f953" /> <br><br>
         <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144956029/829a342b-6695-4693-9e4b-3750dc717ee2" /> <br><br>
       <p><i>Descrição do teste:</i></p> 
       <p>Se a opção desejada é remove-lo, aparecerá uma caixa de mensagem:<br> 
         "Tem certeza de deseja apagar este ítem."</p>
       <p>Em seguida, o ítem é apagado e não é mais possível vê-lo.</p>
       <p>Verifica se ao clicar no ícone da lixeira o funcionamento está correto.</p>  
      <p><i>Resultado do teste:</i></p>
        <p>Após o teste é possível observar que quando o usuário clica no ícone da lixeira, a mensagem de confirmação é exibida na tela imediatamente e após a confirmação, o produto é excluído, e o produto de baixo, assume a posição do produto exluído na tabela.</p>
        <p><i>Imagens do teste visualização de produtos</i></p>
        <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144956029/95b4ca43-edf5-47dc-a6dc-f1ca86f4a3f3" /> <br><br>
        <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144956029/12f6427a-032c-440b-bad4-1bde23b98e10" /> <br><br>
        <p><i>Descrição do teste:</i></p>
        <p>Esse teste é para verificar se o usuário está sendo redirecionado para o link informado no cadastro do produto. </p>
        <p><i>Resultado do teste:</i></p>
        <p>Após o teste foi observado que o botão de visualização está funcionando corretamente e o usuário sempre será redirecionado para o link informado. </p>  
    
  </li>
  <hr>
  <li> CT-03: Gerenciamento de Produtos na Quarentena de compras.<br>
       Responsável: Gabriela.
       <p><i>Imagens do teste de cadastro de novos produtos</i></p>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144072486/ea953c9a-b3f6-4d87-bbc5-cdfd5c08fd18" /> <br><br> 
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144072486/b8daee0d-255e-4b67-aead-4db1852f2cc1" /> <br><br> 
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144072486/5bcfd79d-a08d-4fec-9438-5eaf94218cbb" /> <br><br> 
       <p><i>Descrição do teste:</i></p>
          <p>Foram realizados os testes inserindo novos novos produtos na tabela, para identificar possíveis falhas e observar se o funcionamento está correto. </p>
        <p><i>Resultado do teste:</i></p>
          <p>Após os testes foi observado que os dados estão sendo carregados corretamente conforme é preenchido na janela "Adicionar produto". Uma observação é que enquanto todos os campos não são preenchidos o usuário não consegue salvar o produto.  </p>
      <p><i>Imagens do teste de remoção de produtos</i></p>
         <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144072486/828e82ae-48e0-4c29-99df-bb02c8637cf5" /> <br><br> 
         <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144072486/6b85abd4-2047-4b36-b313-c22509611d48" /> <br><br> 
       <p><i>Descrição do teste:</i></p>
          <p>Teste para verificar se ao clicar no ícone da lixeira o funcionamento está correto. </p>
        <p><i>Resultado do teste:</i></p>
          <p>Após o teste é possível observar que quando o usuário clica no ícone da lixeira, a mensagem de confirmação é exibida na tela imediatamente e após a confirmação, o produto é excluído, e o produto de baixo, assume a posição do produto exluído na tabela.  </p>
<p><i>Imagens do teste visualização de produtos</i></p>
      <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144072486/328b1788-ac89-4b23-880a-4c4d44c611ec" /> <br><br> 
      <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/144072486/96bab270-e2eb-42ba-9343-dd3c951d4eaf" /> <br><br> 
       <p><i>Descrição do teste:</i></p>
          <p>Esse teste é para verificar se o usuário está sendo redirecionado para o link informado no cadastro do produto </p>
        <p><i>Resultado do teste:</i></p>
          <p>Após o teste foi observado que o botão de visualização está funcionando corretamente e o usuário sempre será redirecionado para o link informado. </p>
    
      
  </li>
  <hr>
  <li> CT-04: Funcionalidade de Filtro/Pesquisa.<br>
       Responsável: Rodolfo.
        <p><i>Imagem do teste de filtros de pesquisa dos produtos</i></p>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/56805870/5b748f71-d463-4bea-a641-2d67f8600f17" />
        <p><i>Descrição do teste:</i></p>
          <p>Teste para validar o funcionamento dos filtros de pesquisa implementados</p>
        <p><i>Resultado do teste:</i></p>
          <p>Após informar o filtro 'Categoria' e executar o comando do botão [Pesquisar], os resultados são filtrados corretamente de acordo com a imagem abaixo:</p>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/56805870/080b39e1-c0b7-4183-9521-d6d3b22e88a6" />
          <p>Ao informar um valor adicional no filtro 'Item' e acionar novamente o botão [Pesquisar], os resultados são filtrados novamente de acordo com os filtros informados:</p>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/56805870/0b832a8b-d016-4481-9705-248a21754f56" />
  </li>
  <hr>
  <li> CT-05: Ordenação de Produtos.<br>
       Responsável: Leônidas.
       <p><i>Imagens dos testes</i></p>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/38402132/05050bc3-51fb-4c65-a653-11d5ba8b3054" /> <br><br> 
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/38402132/882a611e-b8af-445e-b555-85b496f44a69" /> <br><br> 
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/38402132/523647d3-3752-447a-ac8d-5ba4633e6e5e" /> <br><br> 
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/38402132/8eedb3a9-ece8-4b5b-95d3-02922dd3c85a" /> <br><br>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/38402132/35f431de-2292-43d4-9d6e-7202e5691b74" /> <br><br>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/38402132/9482c4ad-9d3a-4c7d-83a0-5dce98ecc4be" /> <br><br>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/38402132/a09f01f9-7fb5-4558-a2a3-13a8af599d83" /> <br><br>
          <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/38402132/823ca838-90c0-4e5a-9b43-5c179eca2c57" /> <br><br>
       <p><i>Descrição dos testes:</i></p>
          <p>Foram realizados os testes para verificar o funcionamento da ferramenta de ordenação dos produtos para as páginas quarentena de compras e lista de desejos, para as colunas das tabelas (Categoria, Item, Valor, Origem e a Data). Para que o funcionamento esteja correto ao clicar no título da coluna, a tabela irá ordernar de forma crescente (seta pra cima) ou de forma decrescente (seta para baixo). </p>
        <p><i>Resultado dos testes:</i></p>
          <p>Após os testes foi observado que os dados estão sendo carregados corretamente, conforme o usuário clica na coluna em que deseja ordenar, os dados são carregados de forma decrescente quando a seta está para baixo e de forma cresecente quando a seta está para cima. Ao clicar em outra coluna, os dados passam a ser reordenados conforme a coluna selecionada.  </p>
  </li>
</ol>

## Avaliação

Os testes de software mostraram que todos os requisitos da aplicação foram atendidos e estão funcionando como planejado.
