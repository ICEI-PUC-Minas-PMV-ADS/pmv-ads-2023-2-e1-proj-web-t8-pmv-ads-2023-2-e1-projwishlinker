// @ts-nocheck

$(document).ready(function () {
  const listaDeDesejos =
    JSON.parse(localStorage.getItem("listaDeDesejos")) || [];
  const quarentenaDeCompras =
    JSON.parse(localStorage.getItem("quarentenaDeCompras")) || [];

  const quantidadeListaDesejos = listaDeDesejos.length;
  const quantidadeQuarentena = quarentenaDeCompras.length;

  $("#quantidadeListaDesejos").text(quantidadeListaDesejos);
  $("#quantidadeQuarentena").text(quantidadeQuarentena);

  renderizarCategorias();
});

function carregarDadosCategorias() {
  const listaDeDesejos =
    JSON.parse(localStorage.getItem("listaDeDesejos")) || [];
  const quarentenaDeCompras =
    JSON.parse(localStorage.getItem("quarentenaDeCompras")) || [];
  const iconesCategorias =
    JSON.parse(localStorage.getItem("iconesCategorias")) || [];

  const todosProdutos = [...listaDeDesejos, ...quarentenaDeCompras];

  const dadosCategorias = todosProdutos.reduce((acc, produto) => {
    if (!acc[produto.categoria]) {
      acc[produto.categoria] = { quantidade: 0, valorTotal: 0, icone: "" };
    }
    acc[produto.categoria].quantidade++;
    acc[produto.categoria].valorTotal += parseFloat(produto.valor);

    const iconeCategoria = iconesCategorias.find(
      (ic) => ic.categoria === produto.categoria
    );
    if (iconeCategoria) {
      acc[produto.categoria].icone = iconeCategoria.icone;
    }

    return acc;
  }, {});

  return dadosCategorias;
}

function renderizarCategorias() {
  const dadosCategorias = carregarDadosCategorias();
  const container = $("#categoriasContainer");
  container.empty();

  Object.entries(dadosCategorias).forEach(([categoria, dados]) => {
    const cardHtml = `
      <div class="card m-4 ms-0 flex-shrink-0" style="width: 12rem; border-radius: 15px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
          <div class="card-header bg-transparent border-0 text-center mt-4">
              <i class="${dados.icone} fa-2x""></i>
          </div>
          <div class="card-body text-center">
              <h6 class="card-title" style="height: 20px;">${categoria}</h6>
              <p class="card-text mt-5">
              <span style="font-size: 1.5em; font-weight: bold;">
              ${dados.quantidade}
              </span>${dados.quantidade === 1 ? "produto" : "produtos"}</p>
              <p class="card-text" style="font-size: 1.3em; font-weight: bold;">R$ ${dados.valorTotal
                .toFixed(2)
                .replace(".", ",")}</p>
          </div>
      </div>
    `;
    container.append(cardHtml);
  });
}
