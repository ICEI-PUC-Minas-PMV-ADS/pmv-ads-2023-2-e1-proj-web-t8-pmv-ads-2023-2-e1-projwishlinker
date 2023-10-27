# Especificações do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr>
<th colspan="2">Perfil 1: Consumidor Multiplataforma </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Indivíduo que realiza compras em diversas plataformas de e-commerce e mantém múltiplas wishlists, mas enfrenta dificuldades para encontrar produtos de interesse devido à dispersão das listas.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
 
1. Centralizar e organizar suas wishlists de diferentes plataformas para facilitar o acesso aos produtos marcados.
2. Localizar rapidamente os itens desejados, evitando a perda de oportunidades de compra.
3. Gerenciar eficientemente suas escolhas de compra online, permitindo um consumo mais focado e consciente.

</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 2: Consumidor Consciente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Pessoa que realiza compras frequentes em diversas plataformas online, sendo altamente exposta a estratégias de publicidade agressiva, e busca controlar seus gastos e impulsos de compra.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
 
1. Avaliar a real necessidade de compra antes de adquirir produtos, evitando gastos impulsivos.
2. Gerenciar e reduzir as compras motivadas por influência de publicidades em redes sociais, newsletters e influenciadores.
3. Adotar um padrão de consumo mais sustentável, alinhado com seu estilo de vida e capacidade financeira.

</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 3: Consumidor Econômico </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Pessoa que busca adquirir produtos com o menor preço disponível em plataformas de marketplace e e-commerce.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
 
1. Garantir que o produto comprado seja aquele com o melhor preço em relação aos demais.
2. Ser notificado quando houver alteração no preço. 
3. Economizar tempo, sem precisar ficar pesquisando e comparando em vários sites os preços.

</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                             |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------------------------------------------|----------------------------------------|
|Consumidor Multiplataforma | cadastrar itens e produtos de interesse em um único local | eliminar a necessidade de manter inúmeras listas de desejos em diferentes plataformas, para simplificar o acesso e gerenciamento das minhas preferências de compra |
|Consumidor Consciente | Visualizar os produtos cadastrados, categorizados por site e tipo  | Ter uma organização eficiente das minhas preferências, facilitando a tomada de decisões |
|Consumidor Consciente | definir um prazo para produtos na minha lista de quarentena  | refletir com calma sobre a real necessidade da aquisição antes de finalizá-la, promovendo um consumo mais alinhado com minhas reais necessidades  |
|Consumidor Ocupado | cadastrar rapidamente produtos que chamaram minha atenção | poder acessá-los facilmente mais tarde quando tiver tempo para avaliar se devo comprá-los ou não porque quero fazer compras conscientes sem perder oportunidades |
|Consumidor de Primeira Viagem | ter uma forma simples de acompanhar e gerenciar meus produtos desejados  | poder ganhar confiança ao comprar online e me sentir mais seguro com minhas escolhas |
|Consumidor Econômico | receber notificações sobre promoções e descontos nos produtos que estão na minha lista | aproveitar as melhores ofertas e fazer compras mais vantajosas |


## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| A plataforma deve permitir que os usuários cadastrem produtos em suas wishlists, fornecendo detalhes como nome do produto, categoria, preço e site onde está listado.   | ALTA | 
|RF-02| Os usuários devem ser capazes de visualizar as informações completas sobre cada produto em sua Lista de desejos e Quarentena de compras, incluindo detalhes como nome, categoria, preço e site de origem.   | ALTA | 
|RF-03| A plataforma deve oferecer funcionalidade de filtro/pesquisa para permitir que os usuários localizem produtos em suas wishlists com base em categorias, sites de origem ou outras informações relevantes.    | BAIXA |
|RF-04| Os usuários devem ser capazes de adicionar produtos à lista de quarentena pré-compra, fornecendo detalhes como nome, categoria, preço e período de reflexão.  | ALTA |
|RF-05| A plataforma deve permitir que os usuários removam produtos tanto de sua Lista de desejos quanto da Quarentena de compras, caso mudem de ideia ou decidam não prosseguir com a aquisição.    | ALTA |
|RF-06| Os usuários devem receber notificações ou alertas quando o período de reflexão de um produto em sua lista de quarentena estiver próximo do fim, para que possam tomar uma decisão de compra informada.    | BAIXA |
|RF-07| Os usuários devem ter a opção de ordenar os produtos em suas wishlists e na lista de quarentena pré-compra de acordo com critérios como nome, preço ou categoria, a fim de organizar suas preferências de maneira conveniente. | BAIXA |


**Prioridade: Alta / Média / Baixa.  

### Requisitos Não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| A plataforma deve ser desenvolvida como uma aplicação web estática, não necessitando de backend. Os dados serão persistidos no Local Storage do navegador. | ALTA | 
|RNF-02| A plataforma deve ser desenvolvida utilizando tecnologias em seu estado primitivo, como HTML, CSS e Javascript, para fins acadêmicos. Bibliotecas de manipulação do DOM poderão ser utilizadas, de acordo com a vontade do grupo.  | ALTA | 
|RNF-03| A plataforma deve ser otimizada para rodar em diferentes navegadores, incluindo Google Chrome, Firefox e Microsoft Edge, para garantir uma ampla compatibilidade de acesso.  | MÉDIA |
|RNF-04| A aplicação deverá ser responsiva, garantindo que os usuários possam visualizar e interagir com a plataforma de forma adequada em diferentes dispositivos, como smartphones, tablets e computadores.  | MÉDIA |  
|RNF-05| A plataforma deve ser desenvolvida com foco em acessibilidade, seguindo diretrizes que garantam uma experiência inclusiva para deficientes visuais. Isso inclui a presença de rótulos claros em campos de entrada, um esquema de cores de alto contraste para facilitar a leitura, links com textos descritivos e o uso de atributos ARIA para fornecer informações adicionais sobre elementos interativos, tornando a plataforma totalmente acessível a leitores de tela e pessoas com baixa visão.  | BAIXA | 
 



**Prioridade: Alta / Média / Baixa.
