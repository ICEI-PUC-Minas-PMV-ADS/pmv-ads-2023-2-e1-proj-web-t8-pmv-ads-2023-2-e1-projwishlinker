function loadInitialData() {
  if (!localStorage.getItem("users")) {
    const userPasswords = [
      { id: 1, user: "thiago", pass: "wish", firstname: "Thiago", lastname: "Pires" },
      { id: 2, user: "rodolfo", pass: "wish", firstname: "Rodolfo", lastname: "Iannazzo" },
      { id: 3, user: "jozimar", pass: "wish", firstname: "Jozimar", lastname: "Santos" },
      { id: 4, user: "gabriela", pass: "wish", firstname: "Gabriela", lastname: "Almeida" },
      { id: 5, user: "leonidas", pass: "wish", firstname: "Leonidas", lastname: "Oliveira" },
      { id: 6, user: "gustavo", pass: "wish", firstname: "Gustavo", lastname: "Maciel" },
      { id: 7, user: "marco", pass: "wish", firstname: "Marco", lastname: "Rodrigo" },
      { id: 8, user: "puc", pass: "wish", firstname: "PUC", lastname: "Minas" },
    ];

    localStorage.setItem("users", JSON.stringify(userPasswords));
  }


  if(!localStorage.getItem("listaDeDesejos")){
    const produtosListaDeDesejos = [
      {
          "id": 4,
          "categoria": "Vestuário",
          "nome": "Tênis Nike Air Max Impact 4",
          "valor": "439,99",
          "origem": "Netshoes",
          "url": "https://www.netshoes.com.br/tenis-nike-air-max-impact-4-masculino-preto-JD8-3681-006",
          "dataCadastro": "16/10/2023"
      },
      {
          "id": 5,
          "categoria": "Eletrônicos",
          "nome": "Placa Mãe Gigabyte B760M AORUS ELITE",
          "valor": "1129,99",
          "origem": "Kabum",
          "url": "https://www.kabum.com.br/produto/419108/placa-mae-gigabyte-b760m-aorus-elite-rev-1-0-lga-1700-ddr5",
          "dataCadastro": "16/10/2023"
      },
      {
          "id": 6,
          "categoria": "Games",
          "nome": "Cyberpunk 2077",
          "valor": "199,90",
          "origem": "Steam",
          "url": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
          "dataCadastro": "16/10/2023"
      }
    ];

    localStorage.setItem("listaDeDesejos", JSON.stringify(produtosListaDeDesejos));
  }

  if(!localStorage.getItem("quarentenaDeCompras")){
    const produtosQuarentenaDeCompras = [
      {
        "id": 1,
        "categoria": "Vestuário",
        "nome": "Camisa Cruzeiro I 23/24 Adidas",
        "valor": "314,99",
        "origem": "Netshoes",
        "url": "https://www.netshoes.com.br/camisa-cruzeiro-i-2324-sn-torcedor-adidas-masculina-azul-FB8-4686-008",
        "fimQuarentena": "26/10/2023",
        "adquirido": false,
        "dataCadastro": "16/10/2023"
      },
      {
        "id": 2,
        "categoria": "Eletrônicos",
        "nome": "Placa de Vídeo RTX 4070 Ti Asus NVIDIA GeForce",
        "valor": "5.999,99",
        "origem": "Kabum",
        "url": "https://www.kabum.com.br/produto/419115/placa-de-video-rtx-4070-ti-asus-tuf-gaming-nvidia-geforce-12-gb-gddr6x-argb-dlss-ray-tracing-tuf-rtx4070ti-12g-gaming",
        "fimQuarentena": "22/10/2023",
        "adquirido": false,
        "dataCadastro": "16/10/2023"
      },
      {
        "id": 3,
        "categoria": "Games",
        "nome": "Starfield",
        "valor": "299,00",
        "origem": "Steam",
        "url": "https://store.steampowered.com/app/1716740/Starfield/",
        "fimQuarentena": "17/10/2023",
        "adquirido": true,
        "dataCadastro": "16/10/2023"
      }
    ];

    localStorage.setItem("quarentenaDeCompras", JSON.stringify(produtosQuarentenaDeCompras));
  }

  if(!localStorage.getItem("iconesCategorias")){
    const icones = [
      { categoria: "Ar e Ventilação", icone: "fas fa-fan" },
      { categoria: "Artesanato", icone: "fas fa-paint-brush" },
      { categoria: "Artigos para Festas", icone: "fas fa-birthday-cake" },
      { categoria: "Áudio", icone: "fas fa-volume-up" },
      { categoria: "Automotivo", icone: "fas fa-car" },
      { categoria: "Bebê", icone: "fas fa-baby" },
      { categoria: "Beleza & Perfumaria", icone: "fas fa-perfume" },
      { categoria: "Bem-estar Sexual", icone: "fas fa-venus-mars" },
      { categoria: "Brinquedos", icone: "fas fa-child" },
      { categoria: "Cama, Mesa e Banho", icone: "fas fa-bed" },
      { categoria: "Câmeras e Drones", icone: "fas fa-camera" },
      { categoria: "Casa e Construção", icone: "fas fa-home" },
      { categoria: "Casa Inteligente", icone: "fas fa-robot" },
      { categoria: "Celulares e Smartphones", icone: "fas fa-mobile-alt" },
      { categoria: "Colchões", icone: "fas fa-bed" },
      { categoria: "Comércio e Indústria", icone: "fas fa-industry" },
      { categoria: "Cursos", icone: "fas fa-graduation-cap" },
      { categoria: "Decoração", icone: "fas fa-home" },
      { categoria: "Eletrodomésticos", icone: "fas fa-tv" },
      { categoria: "Eletrônicos", icone: "fas fa-laptop" },
      { categoria: "Esporte e Lazer", icone: "fas fa-futbol" },
      { categoria: "Ferramentas", icone: "fas fa-tools" },
      { categoria: "Filmes e Séries", icone: "fas fa-film" },
      { categoria: "Flores e Jardim", icone: "fas fa-leaf" },
      { categoria: "Jogos", icone: "fas fa-gamepad" },
      { categoria: "Informática", icone: "fas fa-desktop" },
      { categoria: "Instrumentos Musicais", icone: "fas fa-music" },
      { categoria: "Livros", icone: "fas fa-book" },
      { categoria: "Mercado", icone: "fas fa-shopping-cart" },
      { categoria: "Moda", icone: "fas fa-tshirt" },
      { categoria: "Móveis", icone: "fas fa-couch" },
      { categoria: "Música e Shows", icone: "fas fa-music" },
      { categoria: "Natal", icone: "fas fa-tree" },
      { categoria: "Papelaria", icone: "fas fa-pen" },
      { categoria: "Pet Shop", icone: "fas fa-paw" },
      { categoria: "Religião e Espiritualidade", icone: "fas fa-praying-hands" },
      { categoria: "Relógios", icone: "fas fa-clock" },
      { categoria: "Saúde e Cuidados Pessoais", icone: "fas fa-heart" },
      { categoria: "Serviços", icone: "fas fa-cogs" },
      { categoria: "Suplementos Alimentares", icone: "fas fa-apple-alt" },
      { categoria: "Tablets, iPads e E-Reader", icone: "fas fa-tablet-alt" },
      { categoria: "Telefonia Fixa", icone: "fas fa-phone" },
      { categoria: "TV e Vídeo", icone: "fas fa-tv" },
      { categoria: "Utilidades Domésticas", icone: "fas fa-home" },
      { categoria: "Vestuário", icone: "fas fa-tshirt" },
    ];

    localStorage.setItem("iconesCategorias", JSON.stringify(icones));
  }
}

loadInitialData();
