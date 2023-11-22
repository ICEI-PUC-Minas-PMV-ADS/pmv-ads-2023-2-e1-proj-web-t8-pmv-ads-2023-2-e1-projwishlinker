// @ts-nocheck

function verificarNotificacoes() {
  const produtos =
    JSON.parse(localStorage.getItem("quarentenaDeCompras")) || [];

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const notificacoesContainer = document.querySelector(
    ".notifications-container"
  );

  const iconesCategorias =
    JSON.parse(localStorage.getItem("iconesCategorias")) || [];
  const categoriasIcones = {};
  iconesCategorias.forEach((categoria) => {
    categoriasIcones[categoria.categoria] = categoria.icone;
  });

  produtos.sort((a, b) => {
    const partesDataA = a.fimQuarentena.split("/");
    const diaA = parseInt(partesDataA[0], 10);
    const mesA = parseInt(partesDataA[1], 10) - 1;
    const anoA = parseInt(partesDataA[2], 10);
    const dataFormatadaA = new Date(anoA, mesA, diaA);

    const partesDataB = b.fimQuarentena.split("/");
    const diaB = parseInt(partesDataB[0], 10);
    const mesB = parseInt(partesDataB[1], 10) - 1;
    const anoB = parseInt(partesDataB[2], 10);
    const dataFormatadaB = new Date(anoB, mesB, diaB);

    return dataFormatadaA - hoje - (dataFormatadaB - hoje);
  });

  let noticationsCount = 0;

  produtos.forEach((produto) => {
    if (!produto.adquirido) {
      const partesData = produto.fimQuarentena.split("/");
      const dia = parseInt(partesData[0], 10);
      const mes = parseInt(partesData[1], 10) - 1;
      const ano = parseInt(partesData[2], 10);
      const dataFormatada = new Date(ano, mes, dia);
      dataFormatada.setHours(0, 0, 0, 0);

      const diferencaMilissegundos = dataFormatada - hoje;
      const diferencaDias = Math.floor(
        diferencaMilissegundos / (1000 * 60 * 60 * 24)
      );

      if (diferencaDias >= 0 && diferencaDias <= 3) {
        const notificacao = document.createElement("div");
        notificacao.classList.add(
          "notifications-card",
          "notifications-card-new"
        );

        const categoria = produto.categoria;
        const iconeCategoria = categoriasIcones[categoria] || "fas fa-question";

        noticationsCount++;

        const mensagemAlerta = `Restam <b>${diferencaDias} ${
          diferencaDias === 1 ? "dia</b>" : "dias</b>"
        } para finalizar o período de quarentena de compra para <b>${
          produto.nome
        }</b>`;

        notificacao.innerHTML = `
            <i class="${iconeCategoria} fs-4 ms-2"></i>
            <div class="notifications-info w-100">
              <div class="notifications-texto">
                ${mensagemAlerta}
              </div>
            </div>
          `;

        notificacoesContainer.appendChild(notificacao);
      }
    }
  });

  $("#notifications-badge").html(noticationsCount);
}

$(document).ready(function () {
  verificarNotificacoes();
});
