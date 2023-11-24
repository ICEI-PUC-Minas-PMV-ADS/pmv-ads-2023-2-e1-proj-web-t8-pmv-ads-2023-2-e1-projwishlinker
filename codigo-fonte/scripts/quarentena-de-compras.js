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
    const produtos =
      JSON.parse(localStorage.getItem("quarentenaDeCompras")) || [];
    const index = produtos.findIndex((produto) => produto.id === produtoId);
    if (index !== -1) {
      produtos.splice(index, 1);
      localStorage.setItem("quarentenaDeCompras", JSON.stringify(produtos));
      refresh();
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
    cell8.classList.add(
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

    const dataParts = produto.fimQuarentena.split("/");
    const dataFormatada = `${dataParts[0].padStart(
      2,
      "0"
    )}/${dataParts[1].padStart(2, "0")}/${dataParts[2]}`;

    const estadoDoProduto = calcularEstadoDoProduto(produto);
    cell6.textContent = dataFormatada;
    cell7.innerHTML = estadoDoProduto;
    cell8.innerHTML = `
          <i class="p-2 fa fa-eye verde-claro-2 pe-4 fs-4 cursor-pointer" onclick="abrirSiteProduto('${produto.url}')"></i>
          <i class="p-2 fa fa-pencil amarelo-claro pe-4 fs-4 editar-produto cursor-pointer "
              data-produto-id="${produto.id}"
              data-produto-categoria="${produto.categoria}"
              data-produto-nome="${produto.nome}"
              data-produto-url="${produto.url}"
              data-produto-valor="${produto.valor}"
              data-produto-origem="${produto.origem}"
              data-produto-fimquarentena="${produto.fimQuarentena}"
              data-produto-adquirido="${produto.adquirido}"></i>
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
    $("#editFimQuarentena").val(produtoEditando.fimQuarentena);
    $("#editAdquirido").prop("checked", produtoEditando.adquirido);
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
        produtoEditando.fimQuarentena = $("#editFimQuarentena").val();
        produtoEditando.adquirido = $("#editAdquirido").prop("checked");
        const index = produtos.findIndex((produto) => produto.id === produtoId);
        if (index !== -1) {
          produtos[index] = produtoEditando;
        }
        localStorage.setItem("quarentenaDeCompras", JSON.stringify(produtos));
        editProductModal.hide();
        refresh();
      });
  });

  $("#adicionarItemButton").click(function () {
    $("#modalActionText").text("Adicionar Produto");

    const produtosCadastrados = JSON.parse(
      localStorage.getItem("quarentenaDeCompras")
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
        const fimQuarentena = $("#editFimQuarentena").val();
        const adquirido = $("#editAdquirido").prop("checked");
        novoItem.categoria = categoria;
        novoItem.nome = nome;
        novoItem.url = url;
        novoItem.valor = valor;
        novoItem.origem = origem;
        novoItem.fimQuarentena = fimQuarentena;
        novoItem.adquirido = adquirido;
        const produtos =
          JSON.parse(localStorage.getItem("quarentenaDeCompras")) || [];
        produtos.push(novoItem);
        localStorage.setItem("quarentenaDeCompras", JSON.stringify(produtos));
        editProductModal.hide();
        refresh();
      });
  });

  if (!$.fn.DataTable.isDataTable("table")) {
    $.extend($.fn.dataTable.ext.oSort, {
      "string-pre": function (a) {
        return removeAcentuacao(a.toLowerCase());
      },
      "string-asc": function (x, y) {
        return x.localeCompare(y);
      },
      "string-desc": function (x, y) {
        return y.localeCompare(x);
      }
    });
  
    $("table").DataTable({
      "language": {
        "url": "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Portuguese-Brasil.json"
      },
      "columnDefs": [
        { "targets": [0, -1], "orderable": false },
        { "type": "string", "targets": "_all" } 
      ],
      "lengthChange": false,
      "searching": false,
      "paging": true,
      "info": true,
      "order": [[1, "asc"]] 
    });
  }
  

}

function removeAcentuacao(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function calcularEstadoDoProduto(produto) {
  const ontem = new Date(new Date().setDate(new Date().getDate() - 1));
  const partesData = produto.fimQuarentena.split("/");
  const dataFormatada = new Date(
    partesData[2],
    partesData[1] - 1,
    partesData[0]
  );

  let elementoHTML = "";
  if (produto.adquirido) {
    elementoHTML = `<span class="bg-verde-claro-2 text-white py-1 px-2 rounded-4 fs-7">Sim</span>`;
  } else if (ontem < dataFormatada) {
    elementoHTML = `<span class="bg-amarelo-claro text-white py-1 px-2 rounded-4 fs-7 text-nowrap">Em análise</span>`;
  } else {
    elementoHTML = `<span class="bg-vermelho text-white py-1 px-2 rounded-4 fs-7">Não</span>`;
  }
  return elementoHTML;
}

function exibirMensagemTabela(mensagem) {
  const tabela = $("table tbody");
  tabela.html(
    `<tr><td colspan="8" class="text-center">` + mensagem + `</td></tr>`
  );
}

function associaCategoriaProdutoIcone(produtos) {
  const icones = JSON.parse(localStorage.getItem("iconesCategorias"));
  const resultado = produtos.map((elemento1) => {
    const elemento2 = icones.find(
      (elemento) => elemento.categoria === elemento1.categoria
    );

    if (elemento2) {
      return {
        adquirido: elemento1.adquirido,
        categoria: elemento1.categoria,
        dataCadastro: elemento1.dataCadastro,
        fimQuarentena: elemento1.fimQuarentena,
        id: elemento1.id,
        nome: elemento1.nome,
        origem: elemento1.origem,
        url: elemento1.url,
        valor: elemento1.valor,
        icone: elemento2.icone,
      };
    }

    return {
      adquirido: elemento1.adquirido,
      categoria: elemento1.categoria,
      dataCadastro: elemento1.dataCadastro,
      fimQuarentena: elemento1.fimQuarentena,
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
  inicializaFuncionalidades();
  $("#editValor").inputmask("currency", {
    alias: "numeric",
    rightAlign: false,
    radixPoint: ",",
    digits: 2,
  });
  $("#editFimQuarentena").inputmask("99/99/9999");

  $("#editProductForm .form-control").addClass("required");
  $("#editProductForm .required").change(verificarCamposPreenchidos);
  $("#editProductModal").on("show.bs.modal", verificarCamposPreenchidos);

  if (localStorage.getItem("quarentenaDeCompras")) {
    const produtos = JSON.parse(
      localStorage.getItem("quarentenaDeCompras")
    ).sort(function (a, b) {
      return b.id - a.id;
    });

    if (localStorage.getItem("iconesCategorias")) {
      const produtosIconeCategoria = associaCategoriaProdutoIcone(produtos);

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
        exibirMensagemTabela(
          "Você ainda não possui nenhum produto cadastrado."
        );
      }
    }
  } else {
    exibirMensagemTabela("Você ainda não possui nenhum produto cadastrado.");
  }
});

function refresh() {
  window.location.reload();
}

function pesquisaItens() {
  $("#pesquisarItemButton").click(function () {
    //recupera os valores dos campos
    let categoria = $("#pesquisaCategoria").val()
      ? $("#pesquisaCategoria").val().trim().toLowerCase()
      : "";
    let origem = $("#pesquisaOrigem").val()
      ? $("#pesquisaOrigem").val().trim().toLowerCase()
      : "";
    let nomeItem = $("#pesquisaNome").val()
      ? $("#pesquisaNome").val().trim().toLowerCase()
      : "";

    //recupera a quarentena de compras do localStorage
    let listaQuarentenaCompras =
      JSON.parse(localStorage.getItem("quarentenaDeCompras")) || [];

    //filtra a lista de quarentena de compras de acordo com os filtros informados (caso o filtro nao seja informado, nao sera aplicado)
    let resultadosFiltrados = listaQuarentenaCompras.filter(function (item) {
      let filtroCategoria =
        categoria === "" || item.categoria.toLowerCase() === categoria;
      let filtroOrigem = origem === "" || item.origem.toLowerCase() === origem;
      let filtroNome =
        nomeItem === "" || item.nome.toLowerCase().includes(nomeItem);

      return filtroCategoria && filtroOrigem && filtroNome;
    });

    //caso nenhum registro seja encontrado exibe uma mensagem na tabela
    if (resultadosFiltrados.length === 0) {
      exibirMensagemTabela(
        "Nenhum produto foi localizado para os filtros informados."
      );
      return;
    } else {
      //associa a categoria do produto com o icone correspondente e faz a chamada de preencherTabela para exibir os resultados
      resultadosFiltrados = associaCategoriaProdutoIcone(resultadosFiltrados);
      preencherTabela(resultadosFiltrados);
    }
  });
}

function inicializaFuncionalidades() {
  pesquisaItens();
  preencheSelects();
  limparFiltros();
}

function limparFiltros() {
  $("#limparFiltros").click(function () {
    $("#pesquisaCategoria").val("");
    $("#pesquisaOrigem").val("");
    $("#pesquisaNome").val("");
    refresh();
  });
}

function preencheSelects() {
  //le as categorias cadastradas no localstorage
  let opcoesCategoria = JSON.parse(localStorage.getItem("opcoesCategoria"));

  //recupera os elementos selects que precisam ser preenchidos
  var selectCategoria = document.getElementById("pesquisaCategoria");
  var editCategoria = document.getElementById("editCategoria");

  //preenche ambos os selects com as opcoes de categoria
  opcoesCategoria.forEach(function (opcao) {
    var optionSelect = new Option(opcao.text, opcao.value);
    selectCategoria.add(optionSelect);

    var optionEdit = new Option(opcao.text, opcao.value);
    editCategoria.add(optionEdit);
  });

  //le as origens cadastradas no localstorage
  let opcoesOrigem = JSON.parse(localStorage.getItem("opcoesOrigem"));

  //recupera os elementos selects que precisam ser preenchidos
  var selectOrigem = document.getElementById("pesquisaOrigem");
  var editOrigem = document.getElementById("editOrigem");

  //preenche ambos os selects com as opcoes de origem
  opcoesOrigem.forEach(function (opcao) {
    var optionSelect = new Option(opcao.text, opcao.value);
    selectOrigem.add(optionSelect);

    var optionEdit = new Option(opcao.text, opcao.value);
    editOrigem.add(optionEdit);
  });
}
