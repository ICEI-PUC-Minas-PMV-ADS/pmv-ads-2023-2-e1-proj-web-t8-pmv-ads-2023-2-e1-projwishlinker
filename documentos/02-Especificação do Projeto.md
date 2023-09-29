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
Consumidor que realiza compras em diversas plataformas de e-commerce e
mantém múltiplas wishlists.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Centralizar e organizar as listas de desejos de diferentes plataformas para facilitar o acesso aos produtos marcados;
2. Localizar rapidamente os itens desejados, evitando a perda de oportunidades de compra;
3. Gerenciar eficientemente suas escolhas de compra online, permitindo um consumo mais focado e consciente;
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
Consumidor que realiza compras frequentes em diversas plataformas online e busca controlar seus gastos e impulsos de compra.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Avaliar a real necessidade de compra antes de adquirir produtos,
evitando gastos impulsivos;
2. Gerenciar e reduzir as compras motivadas por influência de
publicidades em redes sociais, newsletters e influenciadores;
3. Adotar um padrão de consumo mais sustentável, alinhado com seu
estilo de vida e capacidade financeira.
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
Consumidor que busca adquirir produtos com o menor preço disponível em plataformas de marketplace e e-commerce.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Garantir que o produto comprado seja aquele com o melhor preço em
relação aos demais;
2. Ser notificado quando houver alteração no preço;
3. Economizar tempo, sem precisar ficar pesquisando e comparando em
vários sites os preços.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                             |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------------------------------------------|----------------------------------------|
|Consumidor Multiplataforma | cadastrar itens e produtos de interesse em um único local | eliminar a necessidade de manter inúmeras listas de desejos em diferentes plataformas |
|Consumidor Consciente | Visualizar os produtos cadastrados, categorizados por site e tipo.  | Ter uma organização eficiente das minhas preferências, facilitando a tomada de decisões. |
|Consumidor Consciente | cadastrar produtos em uma lista de quarentena pré-compra.  | evitar gastos impulsivos e
desnecessários.  |
|Consumidor Ocupado | cadastrar rapidamente produtos que chamaram minha atenção. | poder acessá-los facilmente mais tarde quando tiver tempo para avaliar se devo comprá-los ou não. |
|Consumidor de Primeira Viagem | ter uma forma simples de acompanhar e gerenciar meus produtos desejados.  | poder ganhar confiança ao comprar online e me sentir mais seguro com minhas escolhas. |
|Consumidor Econômico | receber notificações sobre promoções e descontos nos produtos que estão na minha lista. | aproveitar as melhores ofertas e fazer compras mais vantajosas. |


## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| A aplicação deve permitir que os usuários cadastrem produtos em suas wishlists, fornecendo detalhes como nome do produto, categoria, preço e site onde está listado.   | ALTA | 
|RF-02| A aplicação deve permitir a visualização de informações completas sobre cada produto nas wishlists (lista de desejos), incluindo detalhes como nome, categoria, preço e site de origem.   | ALTA | 
|RF-03| A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar os produtos na lista.    | ALTA |
|RF-04| A aplicação deve permitir ao usuário visualizar produtos presentes em sua lista de quarentena pré-compra, incluindo detalhes como nome, categoria, preço e período de reflexão   | ALTA |
|RF-05| A aplicação deve permitir ao usuário remova produtos tanto de suas wishlists quanto da lista de quarentena pré-compra, caso mude de ideia ou decida não prosseguir com a aquisição.   | ALTA |
|RF-06| A aplicação deve possibilitar que o usuário marque produtos como 'já adquiridos' tanto em suas wishlists quanto na lista de quarentena pré-compra.    | MÉDIA |
|RF-07| A aplicação deve permitir ao usuário receber notificações ou alertas quando o período de reflexão de um produto em sua lista de quarentena estiver próximo do fim.    | BAIXA |
|RF-08| A aplicação deve disponibilizar ao usuário a opção de ordenar os produtos em suas wishlists e na lista de quarentena pré-compra de acordo com critérios como nome, preço ou categoria, a fim de organizar suas preferências de maneira conveniente.   | BAIXA |
|RF-09| A aplicação deve oferecer uma funcionalidade de acessibilidade para deficientes visuais. | ALTA |


**Prioridade: Alta / Média / Baixa.  

### Requisitos Não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| A aplicação deve ser desenvolvida como web estática, não necessitando de backend. Os dados serão persistidos no Local Storage do navegador. | ALTA | 
|RNF-02| A aplicação deve ser desenvolvida utilizando tecnologias em seu estado primitivo, como HTML, CSS e Javascript, para fins acadêmicos.  | ALTA | 
|RNF-03| A aplicação deve ser otimizada para ser compatível com diferentes navegadores, incluindo Google Chrome, Firefox e Microsoft Edge.  | MÉDIA |
|RNF-04| A aplicação deve ser desenvolvida sem a nececidade de login ou autenticação do usuário  | MÉDIA |  
|RNF-05| A aplicação deve ser desenvolvida com esquema de cores de cores que garantam um bom contraste entre o texto e o plano de fundo para facilitar a leitura por pessoas com baixa visão.  | BAIXA | 
 



**Prioridade: Alta / Média / Baixa.
