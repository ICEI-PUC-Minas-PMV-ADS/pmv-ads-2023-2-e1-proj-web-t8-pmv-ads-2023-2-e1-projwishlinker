# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/tree/main/documentos/03-Metodologia.md"> Metodologia</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>


### Cadastro de produtos na Lista de desejos (RF-001 - PRIORIDADE ALTA)

Responsáveis: Rodolfo, Leonidas e Gabriela

O cadastro de produtos acontece por meio da tela de Lista de desejos.
Os itens cadastrados ficam guardados no Local Storage do navegador, utilizando o objeto json com chave listaDeDesejos

Tela de cadastro de produto na Lista de Desejos:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/3586967/195a4aca-97b3-4b57-bfe1-80f2102a8649)


#### Requisito atendido

RF-001: A plataforma deve permitir que os usuários cadastrem produtos em suas listas, fornecendo detalhes como nome do produto, categoria, preço e site onde está listado.


#### Artefatos da funcionalidade

lista-de-desejos.html

● lista-de-desejos.js

● load-data.js

● style.css


#### Estrutura de Dados

● [lista-de-desejos.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/blob/main/codigo-fonte/lista-de-desejos.html)


#### Instruções de acesso

1.  Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/codigo-fonte/login.html

2.  Entre com o usuário "puc" e a senha "wish" e clique no botão ENTRAR.

3.  Utilizando o menu lateral esquerdo, clique em Lista de desejos.

4.  Na tela de listagem de produtos, ao clicar em “ADICIONAR ITEM” no canto superior direito da tela, um modal para cadastro de produtos será exibido.

<hr>

### Listagem de produtos da Lista de desejos (RF-002 - PRIORIDADE ALTA)

Responsáveis: Thiago, Rodolfo e Gustavo

Listagem de produtos previamente cadastrados na Lista de desejos. O objeto listaDeDesejos é carregado e a montagem das células da tabela é feita utilizando jQuery.

Exemplo da tela de Lista de desejos: 


![lista-de-desejos.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/3586967/10ad435a-617f-4428-97fd-a3467b3578c8)


#### Requisito atendido

RF-002: Os usuários devem ser capazes de visualizar as informações completas sobre cada produto em sua Lista de desejos e Quarentena de compras, incluindo detalhes como nome, categoria, preço e site de origem.

#### Artefatos da funcionalidade

lista-de-desejos.html

● lista-de-desejos.js

● style.css


#### Estrutura de Dados

● 	[lista-de-desejos.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/blob/main/codigo-fonte/lista-de-desejos.html)


#### Instruções de acesso

1.  Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/codigo-fonte/login.html

2.  Entre com o usuário "puc" e a senha "wish" e clique no botão ENTRAR.

3.  Utilizando o menu lateral esquerdo, clique em Lista de desejos.

4.  A tabela com produtos cadastrados será carregada com as seguintes colunas: Categoria, Item, Valor, Origem e Adicionado Em.

<hr>

### Filtro de pesquisa e ordenação da lista (RF-003 e RF-007 - PRIORIDADE BAIXA)

Responsáveis: Thiago e Rodolfo

Filtro para pesquisar por palavras contidas nos produtos cadastrados na Lista de desejos. Tabela com ordenação de registros baseado nos dados da coluna desejada. As As funcionalidades serão incluídas na esteira de desenvolvimento na próxima etapa.

#### Requisitos atendidos

RF-003	A plataforma deve oferecer funcionalidade de filtro/pesquisa para permitir que os usuários localizem produtos em suas listas com base em categorias, sites de origem ou outras informações relevantes.

RF-007  Os usuários devem ter a opção de ordenar os produtos em sua Lista de desejos e na Quarentena de compras de acordo com critérios como nome, preço ou categoria, a fim de organizar suas preferências de maneira conveniente.

Funcionalidades ainda não desenvolvidas por se tratarem de funcionalidades complementares, de baixa prioridade. Sprint definida para atender os requisitos que envolvem as funcionalidades principais da aplicação, que foram classificadas como de alta prioridade.

<hr>

### Cadastro de produtos na Quarentena de compras (RF-004 - PRIORIDADE ALTA)

Responsáveis: Thiago, Leonidas e Gabriela

O cadastro de produtos na Quarentena de Compras é realizado através da respectiva tela.
Os itens cadastrados ficam guardados no Local Storage do navegador, utilizando o objeto json com chave quarentenaDeCompras

Tela de cadastro de produto na Quarentena de compras:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/3586967/faf49b04-ad8f-4f2f-9cb6-f71498c91083)


#### Requisito atendido

RF-004: Os usuários devem ser capazes de adicionar produtos à lista de quarentena pré-compra, fornecendo detalhes como nome, categoria, preço e período de reflexão.


#### Artefatos da funcionalidade

quarentena-de-compras.html

● quarentena-de-compras.js

● load-data.js

● style.css


#### Estrutura de Dados

● [quarentena-de-compras.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/blob/main/codigo-fonte/quarentena-de-compras.html)


#### Instruções de acesso

1.  Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/codigo-fonte/login.html

2.  Entre com o usuário "puc" e a senha "wish" e clique no botão ENTRAR.

3.  Utilizando o menu lateral esquerdo, clique em Quarentena de compras.

4.  Na tela de listagem de produtos, ao clicar em “ADICIONAR ITEM” no canto superior direito da tela, um modal para cadastro de produtos será exibido.

<hr>

### Remoção de itens das listas (RF-005 - PRIORIDADE ALTA)

Responsáveis: Thiago e Rodolfo

As tabelas da Lista de Desejos e da Quarentena de Compras devem possuir funcionalidade para remoção de itens, o que equivale a uma exclusão física. Não haverá modo de desfazer a deleção, então a mesma deverá acontecer após confirmação por parte do usuário, para prevenção de remoção acidental.

Exemplo da tela de Remoção de item:

![lista-de-desejos.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/3586967/50e977c3-6ebb-4979-8627-232a862faa13)


#### Requisitos atendidos
 
RF-005	A plataforma deve permitir que os usuários removam produtos tanto de sua Lista de desejos quanto da Quarentena de compras, caso mudem de ideia ou decidam não prosseguir com a aquisição.

#### Artefatos da funcionalidade

lista-de-desejos.html

● lista-de-desejos.js

quarentena-de-compras.html

● quarentena-de-compras.js

#### Estrutura de Dados

● [lista-de-desejos.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/blob/main/codigo-fonte/scripts/lista-de-desejos.js)

● [quarentena-de-compras.js](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/blob/main/codigo-fonte/scripts/quarentena-de-compras.js)


#### Instruções de acesso

1.  Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/codigo-fonte/login.html

2.  Entre com o usuário "puc" e a senha "wish" e clique no botão ENTRAR.

3.  Utilizando o menu lateral esquerdo, clique em Lista de desejos.

4.  Na lista de produtos, existe uma coluna de ações com ícones correspondentes a cada ação disponível. Ao clicar no ícone vermelho com a figura de uma lixeira, será exibido uma caixa de diálogo com a confirmação "Tem certeza de que deseja apagar este item?" e dois botões, Cancelar e OK, para desistir ou prosseguir com a deleção, respectivamente.

<hr>

### Alertas e notificações de itens cadastrados (RF-006 - PRIORIDADE BAIXA)

Responsáveis: Jozimar e Thiago

O acesso a tela se dará na tela de Início, após login na aplicação.

Exemplo da tela de Início (Dashboard):

![dashboard.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/assets/3586967/0974d0ca-082d-4d18-b082-24b43b1cb3ed)


#### Requisitos atendidos
 
 RF-006 Os usuários devem receber notificações ou alertas quando o período de reflexão de um produto em sua lista de quarentena estiver próximo do fim, para que possam tomar uma decisão de compra informada.

 Funcionalidade parcialmente desenvolvida. O template da funcionalidade já está disponível, mas não há ainda integração com os dados que estão sendo gerados pelo usuário. Funcionalidade de prioridade baixa, que será entregue no próximo ciclo de desenvolvimento.


#### Artefatos da funcionalidade

● 	dashboard.html 

● 	style.css

● 	dashboard.js

#### Estrutura de Dados

● [dashboard.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/blob/main/codigo-fonte/quarentena-de-compras.html)


#### Instruções de acesso

1.  Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-2-e1-proj-web-t8-pmv-ads-2023-2-e1-projwishlinker/codigo-fonte/login.html

2.  Entre com o usuário "puc" e a senha "wish" e clique no botão ENTRAR.

3.  A tela de dashboard é a tela inicial da aplicação, mas para acessar esta tela a qualquer momento, utilize o menu lateral esquerdo e clique em Início.

4.  A listagem de alertas e notificações será apresentada, juntamente com dados consolidados sobre os produtos que estão nas listas do usuário.
