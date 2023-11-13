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
});
