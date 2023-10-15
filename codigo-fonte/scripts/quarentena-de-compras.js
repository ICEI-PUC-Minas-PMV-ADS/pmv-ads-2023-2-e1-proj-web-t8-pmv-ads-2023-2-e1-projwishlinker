// @ts-nocheck

function abrirSiteProduto(url) {
    const confirmacao = confirm("Deseja abrir o site deste produto?");
    if (confirmacao) {
      window.open(url, "_blank");
    }
  }
  
  $(document).ready(function () {
    if (localStorage.getItem("quarentenaDeCompras")) {
      const produtos = JSON.parse(localStorage.getItem("quarentenaDeCompras"));
  
      if (produtos.length > 0) {
        preencherTabela(produtos);
      } else {
        exibirMensagemVazia();
      }
    } else {
      exibirMensagemVazia();
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
        cell4.textContent = `R$ ${produto.valor.toFixed(2).replace(".", ",")}`;
        cell5.textContent = produto.origem;
  
        const data = new Date(produto.fimQuarentena);
        const dataFormatada = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`;
  
        cell6.textContent = dataFormatada;
        cell7.innerHTML = produto.adquirido ? `<span class="bg-verde-claro-2 text-white py-1 px-2 rounded-2">Sim</span>` : `<span class="bg-vermelho text-white py-1 px-2 rounded-2">Não</span>`;
        cell8.innerHTML = `
            <i class="fa fa-eye verde-claro-2 pe-4 fs-4 cursor-pointer" onclick="abrirSiteProduto('${produto.url}')"></i>
            <i class="fa fa-pencil amarelo-claro pe-4 fs-4 editar-produto cursor-pointer "
                data-produto-id="${produto.id}"
                data-produto-categoria="${produto.categoria}"
                data-produto-nome="${produto.nome}"
                data-produto-valor="${produto.valor}"
                data-produto-origem="${produto.origem}"
                data-produto-fimquarentena="${produto.fimQuarentena}"
                data-produto-adquirido="${produto.adquirido}"></i>
            <i class="fa fa-trash vermelho me-3 fs-4 cursor-pointer"></i>
        `;
      });
  
      $(".editar-produto").click(function () {
        const produtoId = $(this).data("produto-id");
        const produtoCategoria = $(this).data("produto-categoria");
        const produtoNome = $(this).data("produto-nome");
        const produtoValor = $(this).data("produto-valor");
        const produtoOrigem = $(this).data("produto-origem");
        const produtoFimQuarentena = $(this).data("produto-fimquarentena");
        const produtoAdquirido = $(this).data("produto-adquirido");
  
        $("#editCategoria").val(produtoCategoria);
        $("#editNome").val(produtoNome);
        $("#editValor").val(produtoValor);
        $("#editOrigem").val(produtoOrigem);
        $("#editFimQuarentena").val(produtoFimQuarentena);
        $("#editAdquirido").prop("checked", produtoAdquirido);
  
        const editProductModal = new bootstrap.Modal(document.getElementById("editProductModal"));
        editProductModal.show();
  
        $("#saveEditButton").off("click").on("click", function () {
          $(this).data("produto-categoria", $("#editCategoria").val());
          $(this).data("produto-nome", $("#editNome").val());
          $(this).data("produto-valor", $("#editValor").val());
          $(this).data("produto-origem", $("#editOrigem").val());
          $(this).data("produto-fimquarentena", $("#editFimQuarentena").val());
          $(this).data("produto-adquirido", $("#editAdquirido").prop("checked"));
  
          editProductModal.hide();
          preencherTabela(produtos);
          localStorage.setItem("quarentenaDeCompras", JSON.stringify(produtos));
        });
      });
  
      $("#editCategoria").on("change", function () {
        produto.categoria = $(this).val();
      });
  
      $("#editOrigem").on("change", function () {
        produto.origem = $(this).val();
      });
    }
  
    function exibirMensagemVazia() {
      const tabela = $("table tbody");
      tabela.html(`<tr><td colspan="8" class="text-center">Você ainda não possui nenhum produto cadastrado.</td></tr>`);
    }
  });
  