# Plano de Testes de Software Os requisitos para realização dos testes de software são:

<ul>
  <li>Aplicação publicada na web;</li>
  <li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul> Os testes funcionais a serem realizados na aplicação são descritos a seguir. <table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-01: Verificar o funcionamento da página Dashboard</td>
    <td>
      <ul>
        <li>RF-06: Os usuários devem receber notificações ou alertas quando o período de reflexão de um produto em sua lista de quarentena estiver próximo do fim, para que possam tomar uma decisão de compra informada.</li>
      </ul>
    </td>
    <td>Verificar se a página de Dashboard apesenta dados consolidados sobre as listas de desejos e alertas para produtos.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar login na plataforma.</li>
        <li>Visualizar a página inicial Início (dashboard).</li>
        <li>Validar elementos visuais de quadros quantitativos cadastrados e lista de notificações.</li>
      </ol>
    </td>
    <td>A tela deve apresentar dados quantitativos cadastrados nas listas e listagem de notificações para produtos em Quarentena de compras que tem data limite próxima de vencimento (3 dias ou menos).</td>
    <td>Gustavo</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-02: Gerenciamento de Produtos na Lista de desejos</td>
    <td>
      <ul>
        <li>RF-01</li>
        <li>RF-02</li>
        <li>RF-04</li>
        <li>RF-05</li>
      </ul>
    </td>
    <td>Verificar as funcionalidades de visualização, cadastro e remoção de produtos na Lista de desejos.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar login na plataforma.</li>
        <li>Clicar no menu lateral no item Lista de desejos.</li>
        <li>Cadastrar um novo produto.</li>
        <li>Visualizar os detalhes do produto cadastrado.</li>
        <li>Remover o produto da Lista de desejos.</li>
      </ol>
    </td>
    <td>O produto deve ser cadastrado, visualizado e removido com sucesso na Lista de desejos, mantendo a consistência das informações.</td>
    <td>Jozimar</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-03: Gerenciamento de Produtos na Quarentena de compras</td>
    <td>
      <ul>
        <li>RF-01</li>
        <li>RF-02</li>
        <li>RF-04</li>
        <li>RF-05</li>
      </ul>
    </td>
    <td>Verificar as funcionalidades de visualização, cadastro e remoção de produtos na Quarentena de compras.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar login na plataforma.</li>
        <li>Clicar no menu lateral no item Quarentena de compras.</li>
        <li>Cadastrar um novo produto.</li>
        <li>Visualizar os detalhes do produto cadastrado.</li>
        <li>Remover o produto da Quarentena de compras.</li>
      </ol>
    </td>
    <td>O produto deve ser cadastrado, visualizado e removido com sucesso na Quarentena de compras, mantendo a consistência das informações.</td>
    <td>Gabriela</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-04: Funcionalidade de Filtro/Pesquisa</td>
    <td>
      <ul>
        <li>RF-03</li>
      </ul>
    </td>
    <td>Verificar a funcionalidade de filtro/pesquisa na plataforma.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar login na plataforma.</li>
        <li>Clicar no menu lateral no item Lista de desejos ou Quarentena de compras.</li>
        <li>Utilizar a funcionalidade de filtro/pesquisa na seção de Lista de desejos ou Quarentena de compras.</li>
        <li>Verificar se os resultados são consistentes com os critérios de pesquisa.</li>
      </ol>
    </td>
    <td>A pesquisa deve retornar produtos que correspondam aos critérios informados pelo usuário.</td>
    <td>Rodolfo</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-05: Ordenação de Produtos</td>
    <td>
      <ul>
        <li>RF-07</li>
      </ul>
    </td>
    <td>Verificar a funcionalidade de ordenação de produtos nas wishlists e na Quarentena de Compras.</td>
    <td>
      <ol>
        <li>Acessar o navegador.</li>
        <li>Informar o endereço do site.</li>
        <li>Realizar login na plataforma.</li>
        <li>Clicar no menu lateral no item Lista de desejos ou Quarentena de compras.</li>
        <li>Utilizar a funcionalidade de ordenação por critérios como nome, preço ou categoria.</li>
        <li>Verificar se a ordenação está correta conforme o critério escolhido.</li>
      </ol>
    </td>
    <td>Os produtos devem ser ordenados corretamente de acordo com o critério selecionado pelo usuário.</td>
    <td>Leônidas</td>
  </tr>
</table>
