// @ts-nocheck

function abrirSiteProduto(url) {
  const confirmacao = confirm("Deseja abrir o site deste produto?");
  if (confirmacao) {
      window.open(url, "_blank");
  }
}

function confirmarExclusao(produtoId, preencherTabelaFunction) {
  const confirmacao = confirm("Tem certeza de que deseja apagar este item?");
  if (confirmacao) {
      const produtos = JSON.parse(localStorage.getItem("quarentenaDeCompras")) || [];
      const index = produtos.findIndex((produto) => produto.id === produtoId);
      if (index !== -1) {
          produtos.splice(index, 1);
          localStorage.setItem("quarentenaDeCompras", JSON.stringify(produtos));
          preencherTabelaFunction(produtos);
      }
  }
}

function preencherTabela(produtos) {
  const tabela = $("table tbody");
  tabela.empty();

  produtos.forEach((produto) => {
      const newRow = tabela[0].insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
      const cell5 = newRow.insertCell(4);
      const cell6 = newRow.insertCell(5);
      const cell7 = newRow.insertCell(6);
      const cell8 = newRow.insertCell(7);

      newRow.classList.add("bg-branco", "my-3");
      cell1.classList.add("rounded-start-3", "p-4");
      cell2.classList.add("p-4", "fw-light");
      cell3.classList.add("p-4", "fw-light");
      cell4.classList.add("p-4", "fw-light");
      cell5.classList.add("p-4", "fw-light");
      cell6.classList.add("p-4", "fw-light");
      cell7.classList.add("p-4");
      cell8.classList.add("rounded-end-3", "p-4", "text-end");

      cell1.innerHTML = `<i class="fa-solid fa-shirt fs-4 ms-2"></i>`;
      cell2.textContent = produto.categoria;
      cell3.textContent = produto.nome;
      cell4.textContent = `R$ ${produto.valor}`;
      cell5.textContent = produto.origem;

      const dataParts = produto.fimQuarentena.split("/");
      const dataFormatada = `${dataParts[0].padStart(2, '0')}/${dataParts[1].padStart(2, '0')}/${dataParts[2]}`;

      const estadoDoProduto = calcularEstadoDoProduto(produto);
      cell6.textContent = dataFormatada;
      cell7.innerHTML = estadoDoProduto;
      cell8.innerHTML = `
          <i class="fa fa-eye verde-claro-2 pe-4 fs-4 cursor-pointer" onclick="abrirSiteProduto('${produto.url}')"></i>
          <i class="fa fa-pencil amarelo-claro pe-4 fs-4 editar-produto cursor-pointer "
              data-produto-id="${produto.id}"
              data-produto-categoria="${produto.categoria}"
              data-produto-nome="${produto.nome}"
              data-produto-url="${produto.url}"
              data-produto-valor="${produto.valor}"
              data-produto-origem="${produto.origem}"
              data-produto-fimquarentena="${produto.fimQuarentena}"
              data-produto-adquirido="${produto.adquirido}"></i>
          <i class="fa fa-trash vermelho me-3 fs-4 cursor-pointer" onclick="confirmarExclusao(${produto.id}, preencherTabela)"></i>
      `;
  });

  $(".editar-produto").click(function () {
      $("#modalActionText").text("Editar Produto");

      const produtoId = $(this).data("produto-id");
      const produtoEditando = produtos.find((produto) => produto.id === produtoId);
      $("#editCategoria").val(produtoEditando.categoria);
      $("#editNome").val(produtoEditando.nome);
      $("#editUrl").val(produtoEditando.url);
      $("#editValor").val(produtoEditando.valor);
      $("#editOrigem").val(produtoEditando.origem);
      $("#editFimQuarentena").val(produtoEditando.fimQuarentena);
      $("#editAdquirido").prop("checked", produtoEditando.adquirido);
      const editProductModal = new bootstrap.Modal(document.getElementById("editProductModal"));
      editProductModal.show();
      $("#saveEditButton").off("click").on("click", function () {
          produtoEditando.categoria = $("#editCategoria").val();
          produtoEditando.nome = $("#editNome").val();
          produtoEditando.url = $("#editUrl").val();
          produtoEditando.valor = $("#editValor").val();
          produtoEditando.origem = $("#editOrigem").val();
          produtoEditando.fimQuarentena = $("#editFimQuarentena").val();
          produtoEditando.adquirido = $("#editAdquirido").prop("checked");
          const index = produtos.findIndex((produto) => produto.id === produtoId);
          if (index !== -1) {
              produtos[index] = produtoEditando;
          }
          localStorage.setItem("quarentenaDeCompras", JSON.stringify(produtos));
          preencherTabela(produtos);
          editProductModal.hide();
      });
  });

  $("#adicionarItemButton").click(function () {
    $("#modalActionText").text("Adicionar Produto");

      const produtosCadastrados = JSON.parse(localStorage.getItem("quarentenaDeCompras"));
      let nextItemId = 1;
      if (produtosCadastrados.length > 0) {
          const maxId = Math.max(...produtosCadastrados.map((produto) => produto.id));
          nextItemId = maxId + 1;
      }
      $("#editCategoria").val("");
      $("#editNome").val("");
      $("#editUrl").val("");
      $("#editValor").val("");
      $("#editOrigem").val("");
      $("#editFimQuarentena").val("");
      $("#editAdquirido").prop("checked", false);
      const novoItemId = nextItemId;
      nextItemId++;
      const novoItem = {
          id: novoItemId,
          categoria: "",
          nome: "",
          url: "",
          valor: 0,
          origem: "",
          fimQuarentena: "",
          adquirido: false,
      };
      const editProductModal = new bootstrap.Modal(document.getElementById("editProductModal"));
      editProductModal.show();
      $("#saveEditButton").off("click").on("click", function () {
          const categoria = $("#editCategoria").val();
          const nome = $("#editNome").val();
          const url = $("#editUrl").val();
          const valor = $("#editValor").val();
          const origem = $("#editOrigem").val();
          const fimQuarentena = $("#editFimQuarentena").val();
          const adquirido = $("#editAdquirido").prop("checked");
          novoItem.categoria = categoria;
          novoItem.nome = nome;
          novoItem.url = url;
          novoItem.valor = valor;
          novoItem.origem = origem;
          novoItem.fimQuarentena = fimQuarentena;
          novoItem.adquirido = adquirido;
          const produtos = JSON.parse(localStorage.getItem("quarentenaDeCompras")) || [];
          produtos.push(novoItem);
          localStorage.setItem("quarentenaDeCompras", JSON.stringify(produtos));
          preencherTabela(produtos);
          editProductModal.hide();
      });
  });
}

function calcularEstadoDoProduto(produto) {
  const hoje = new Date();
  const partesData = produto.fimQuarentena.split("/");
  const dataFormatada = new Date(
      partesData[2],
      partesData[1] - 1,
      partesData[0]
  );
  let elementoHTML = "";
  if (produto.adquirido) {
      elementoHTML = `<span class="bg-verde-claro-2 text-white py-1 px-2 rounded-4 fs-7">Sim</span>`;
  } else if (hoje < dataFormatada) {
      elementoHTML = `<span class="bg-amarelo-claro text-white py-1 px-2 rounded-4 fs-7">Em análise</span>`;
  } else {
      elementoHTML = `<span class="bg-vermelho text-white py-1 px-2 rounded-4 fs-7">Não</span>`;
  }
  return elementoHTML;
}

function exibirMensagemVazia() {
  const tabela = $("table tbody");
  tabela.html(`<tr><td colspan="8" class="text-center">Você ainda não possui nenhum produto cadastrado.</td></tr>`);
}

$(document).ready(function () {
  $('#editValor').inputmask('currency', { alias: 'numeric', rightAlign: false, radixPoint: ',', digits: 2 });
  $('#editFimQuarentena').inputmask('99/99/9999');

  if (localStorage.getItem("quarentenaDeCompras")) {
      const produtos = JSON.parse(localStorage.getItem("quarentenaDeCompras"));
      let nextItemId = 1;
      if (produtos.length > 0) {
          const maxId = Math.max(...produtos.map((produto) => produto.id));
          nextItemId = maxId + 1;
      }
      if (produtos.length > 0) {
          preencherTabela(produtos);
      } else {
          exibirMensagemVazia();
      }
  } else {
      exibirMensagemVazia();
  }
});

//TODO: deixar botão salvar desativado até que todos os campos required sejam preenchidos

// array que estou utilizando para testar o código
// [
//   {
//     "id": 1,
//     "categoria": "Vestuário",
//     "nome": "Camiseta Preta",
//     "valor": 29.99,
//     "origem": "Netshoes",
//     "url": "https://www.lojaa.com/camiseta-preta",
//     "fimQuarentena": "20/10/2023",
//     "adquirido": false,
//     "dataCadastro": "15/10/2023"
//   },
//   {
//     "id": 2,
//     "categoria": "Eletrônicos",
//     "nome": "Smartphone",
//     "valor": 899.99,
//     "origem": "Kabum",
//     "url": "https://www.lojab.com/smartphone",
//     "fimQuarentena": "14/10/2023",
//     "adquirido": false,
//     "dataCadastro": "10/10/2023"
//   },
//   {
//     "id": 3,
//     "categoria": "Jogos",
//     "nome": "Starfield",
//     "valor": 349.49,
//     "origem": "Steam",
//     "url": "https://www.steampowered.com/jogo",
//     "fimQuarentena": "20/10/2023",
//     "adquirido": true,
//     "dataCadastro": "15/10/2023"
//   }
// ]