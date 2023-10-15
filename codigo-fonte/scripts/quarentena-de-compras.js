// @ts-nocheck
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
});

function preencherTabela(produtos) {
    const tabela = document.querySelector("table tbody");
    tabela.innerHTML = "";

    produtos.forEach((produto) => {
        const newRow = tabela.insertRow();
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
            <i class="fa fa-eye verde-claro-2 pe-4 fs-4"></i>
            <i class="fa fa-pencil amarelo-claro pe-4 fs-4"></i>
            <i class="fa fa-trash vermelho me-3 fs-4"></i>
        `;
    });
}

function exibirMensagemVazia() {
    const tabela = document.querySelector("table tbody");
    tabela.innerHTML = `<tr><td colspan="8" class="text-center">Você ainda não possui nenhum produto cadastrado.</td></tr>`;
}

// Objeto hardcoded que estou gravando no localStorage para testes
// [
//     {
//       "id": 1,
//       "categoria": "Vestuário",
//       "nome": "Camiseta Preta",
//       "valor": 29.99,
//       "origem": "Loja A",
//       "fimQuarentena": "2023-11-30",
//       "adquirido": false,
//       "dataCadastro": "2023-10-14"
//     },
//     {
//       "id": 2,
//       "categoria": "Eletrônicos",
//       "nome": "Smartphone",
//       "valor": 899.99,
//       "origem": "Loja B",
//       "fimQuarentena": "2023-12-15",
//       "adquirido": false,
//       "dataCadastro": "2023-10-14"
//     },
//     {
//       "id": 3,
//       "categoria": "Alimentos",
//       "nome": "Café",
//       "valor": 5.99,
//       "origem": "Supermercado C",
//       "fimQuarentena": "2023-11-20",
//       "adquirido": true,
//       "dataCadastro": "2023-10-14"
//     }
//   ]
  