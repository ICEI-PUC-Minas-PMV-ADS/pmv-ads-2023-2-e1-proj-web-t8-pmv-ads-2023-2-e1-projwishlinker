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
    const produtos = JSON.parse(localStorage.getItem("listaDeDesejos")) || [];
    const index = produtos.findIndex((produto) => produto.id === produtoId);
    if (index !== -1) {
      produtos.splice(index, 1);
      localStorage.setItem("listaDeDesejos", JSON.stringify(produtos));
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

    newRow.classList.add("bg-branco", "my-3");
    cell1.classList.add("rounded-start-3", "p-4");
    cell2.classList.add("p-4", "fw-light");
    cell3.classList.add("p-4", "fw-light");
    cell4.classList.add("p-4", "fw-light");
    cell5.classList.add("p-4", "fw-light");
    cell6.classList.add("p-4", "fw-light");
    cell7.classList.add(
      "rounded-end-3",
      "p-4",
      "text-last-justify",
      "text-nowrap"
    );

    cell1.innerHTML =
      `<i class="fa-solid ` + produto.icone + ` fs-4 ms-2"></i>`;
    cell2.textContent = produto.categoria;
    cell3.textContent = produto.nome;
    cell4.textContent = `R$ ${produto.valor}`;
    cell5.textContent = produto.origem;

    const dataParts = produto.dataCadastro.split("/");
    const dataFormatada = `${dataParts[0].padStart(
      2,
      "0"
    )}/${dataParts[1].padStart(2, "0")}/${dataParts[2]}`;

    cell6.textContent = dataFormatada;
    cell7.innerHTML = `
            <i class="p-2 fa fa-eye verde-claro-2 pe-4 fs-4 cursor-pointer" onclick="abrirSiteProduto('${produto.url}')"></i>
            <i class="p-2 fa fa-pencil amarelo-claro pe-4 fs-4 editar-produto cursor-pointer "
                data-produto-id="${produto.id}"
                data-produto-categoria="${produto.categoria}"
                data-produto-nome="${produto.nome}"
                data-produto-url="${produto.url}"
                data-produto-valor="${produto.valor}"
                data-produto-origem="${produto.origem}"></i>
            <i class="p-2 fa fa-trash vermelho me-3 fs-4 cursor-pointer" onclick="confirmarExclusao(${produto.id}, preencherTabela)"></i>
        `;
  });

  $(".editar-produto").click(function () {
    $("#modalActionText").text("Editar Produto");

    const produtoId = $(this).data("produto-id");
    const produtoEditando = produtos.find(
      (produto) => produto.id === produtoId
    );
    $("#editCategoria").val(produtoEditando.categoria);
    $("#editNome").val(produtoEditando.nome);
    $("#editUrl").val(produtoEditando.url);
    $("#editValor").val(produtoEditando.valor);
    $("#editOrigem").val(produtoEditando.origem);
    const editProductModal = new bootstrap.Modal(
      document.getElementById("editProductModal")
    );
    editProductModal.show();
    $("#saveEditButton")
      .off("click")
      .on("click", function () {
        produtoEditando.categoria = $("#editCategoria").val();
        produtoEditando.nome = $("#editNome").val();
        produtoEditando.url = $("#editUrl").val();
        produtoEditando.valor = $("#editValor").val();
        produtoEditando.origem = $("#editOrigem").val();
        const index = produtos.findIndex((produto) => produto.id === produtoId);
        if (index !== -1) {
          produtos[index] = produtoEditando;
        }
        localStorage.setItem("listaDeDesejos", JSON.stringify(produtos));
        preencherTabela(produtos);
        editProductModal.hide();
      });
  });

  $("#adicionarItemButton").click(function () {
    $("#modalActionText").text("Adicionar Produto");

    const produtosCadastrados = JSON.parse(
      localStorage.getItem("listaDeDesejos")
    );
    let nextItemId = 1;
    if (produtosCadastrados.length > 0) {
      const maxId = Math.max(
        ...produtosCadastrados.map((produto) => produto.id)
      );
      nextItemId = maxId + 1;
    }
    $("#editCategoria").val("");
    $("#editNome").val("");
    $("#editUrl").val("");
    $("#editValor").val("");
    $("#editOrigem").val("");
    const novoItemId = nextItemId;
    nextItemId++;
    const novoItem = {
      id: novoItemId,
      categoria: "",
      nome: "",
      url: "",
      valor: 0,
      origem: "",
    };
    const editProductModal = new bootstrap.Modal(
      document.getElementById("editProductModal")
    );
    editProductModal.show();
    $("#saveEditButton")
      .off("click")
      .on("click", function () {
        const categoria = $("#editCategoria").val();
        const nome = $("#editNome").val();
        const url = $("#editUrl").val();
        const valor = $("#editValor").val();
        const origem = $("#editOrigem").val();
        const dataCadastro = new Date();
        novoItem.categoria = categoria;
        novoItem.nome = nome;
        novoItem.url = url;
        novoItem.valor = valor;
        novoItem.origem = origem;
        novoItem.dataCadastro = dataCadastro.toLocaleDateString("pt-BR");
        const produtos =
          JSON.parse(localStorage.getItem("listaDeDesejos")) || [];
        produtos.push(novoItem);
        localStorage.setItem("listaDeDesejos", JSON.stringify(produtos));
        preencherTabela(produtos);
        editProductModal.hide();
      });
  });
}

function exibirMensagemVazia() {
  const tabela = $("table tbody");
  tabela.html(
    `<tr><td colspan="8" class="text-center">Você ainda não possui nenhum produto cadastrado.</td></tr>`
  );
}

function associaCategoriaProdutoIcone(produtos, icones) {
  const resultado = produtos.map((elemento1) => {
    const elemento2 = icones.find(
      (elemento) => elemento.categoria === elemento1.categoria
    );

    if (elemento2) {
      return {
        categoria: elemento1.categoria,
        dataCadastro: elemento1.dataCadastro,
        id: elemento1.id,
        nome: elemento1.nome,
        origem: elemento1.origem,
        url: elemento1.url,
        valor: elemento1.valor,
        icone: elemento2.icone,
      };
    }

    return {
      categoria: elemento1.categoria,
      dataCadastro: elemento1.dataCadastro,
      id: elemento1.id,
      nome: elemento1.nome,
      origem: elemento1.origem,
      url: elemento1.url,
      valor: elemento1.valor,
      icone: null,
    };
  });
  return resultado;
}

function verificarCamposPreenchidos() {
  let todosPreenchidos = true;

  $("#editProductForm .required").each(function () {
    if ($(this).val() === "") {
      todosPreenchidos = false;
      return false;
    }
  });

  $("#saveEditButton").prop("disabled", !todosPreenchidos);
}

$(document).ready(function () {
  $("#editValor").inputmask("currency", {
    alias: "numeric",
    rightAlign: false,
    radixPoint: ",",
    digits: 2,
  });

  $("#editProductForm .form-control").addClass("required");
  $("#editProductForm .required").change(verificarCamposPreenchidos);
  $("#editProductModal").on("show.bs.modal", verificarCamposPreenchidos);

  if (localStorage.getItem("listaDeDesejos")) {
    const produtos = JSON.parse(localStorage.getItem("listaDeDesejos"));

    if (localStorage.getItem("iconesCategorias")) {
      const icones = JSON.parse(localStorage.getItem("iconesCategorias"));

      const produtosIconeCategoria = associaCategoriaProdutoIcone(
        produtos,
        icones
      );

      let nextItemId = 1;
      if (produtosIconeCategoria.length > 0) {
        const maxId = Math.max(
          ...produtosIconeCategoria.map((produto) => produto.id)
        );
        nextItemId = maxId + 1;
      }
      if (produtosIconeCategoria.length > 0) {
        preencherTabela(produtosIconeCategoria);
      } else {
        exibirMensagemVazia();
      }
    }
  } else {
    exibirMensagemVazia();
  }
});
