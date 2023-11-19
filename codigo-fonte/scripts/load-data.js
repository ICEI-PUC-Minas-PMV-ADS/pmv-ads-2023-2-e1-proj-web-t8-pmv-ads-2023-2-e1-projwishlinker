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
          "id": 1,
          "categoria": "Vestuário",
          "nome": "Tênis Nike Air Max Impact 4",
          "valor": "439,99",
          "origem": "Netshoes",
          "url": "https://www.netshoes.com.br/tenis-nike-air-max-impact-4-masculino-preto-JD8-3681-006",
          "dataCadastro": "16/10/2023"
      },
      {
          "id": 2,
          "categoria": "Eletrônicos",
          "nome": "Placa Mãe Gigabyte B760M AORUS ELITE",
          "valor": "1129,99",
          "origem": "Kabum",
          "url": "https://www.kabum.com.br/produto/419108/placa-mae-gigabyte-b760m-aorus-elite-rev-1-0-lga-1700-ddr5",
          "dataCadastro": "16/10/2023"
      },
      {
          "id": 3,
          "categoria": "Games",
          "nome": "Cyberpunk 2077",
          "valor": "199,90",
          "origem": "Steam",
          "url": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
          "dataCadastro": "16/10/2023"
      },
      {
         "id": 4,
         "categoria": "Eletrônicos",
         "nome": "Moto E13 64gb",
         "valor": "589,00",
         "origem": "Mercado Livre",
         "url": "https://www.mercadolivre.com.br/moto-e13-64gb-4gb-ram-octa-core-tela-de-65-hd-cam-13mp-cor-off-white/p/MLB22412153#polycard_client=recommendations_home_navigation-recommendations&reco_backend=machinalis-homes-pdp-boos&reco_client=home_navigation-recommendations&reco_item_pos=0&reco_backend_type=function&reco_id=7d5f1b32-d07b-452b-ad1b-4283761ffe10&wid=MLB3280473645&sid=recos",
         "dataCadastro": "16/11/2023"
      },
      {
         "id": 5,
         "categoria": "Livros",
         "nome": "Código limpo",
         "valor": "71,92",
         "origem": "Amazon Brasil",
         "url": "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/?_encoding=UTF8&pd_rd_i=8576082675&pd_rd_w=PMc2n&content-id=amzn1.sym.ca171b73-930c-46b6-8e0f-c1ee823ddd5d&pf_rd_p=ca171b73-930c-46b6-8e0f-c1ee823ddd5d&pf_rd_r=KHQ3YHKD9M997NNJBVTW&pd_rd_wg=jr5RH&pd_rd_r=bd86de3c-2a10-4ad7-8329-81248919fe19&ref_=oct_dx_dotd",
         "dataCadastro": "18/11/2023"
      },
      {
         "id": 6,
         "categoria": "Cama, Mesa e Banho",
         "nome": "Jogo de toalhas",
         "valor": "189,99",
         "origem": "Americanas",
         "url": "https://www.americanas.com.br/produto/28064590/jogo-de-toalhas-banhao-gigante-karsten-lumina-5-pecas-fio-penteado-emcompre?pfm_carac=os%20mais%20vendidos%20da%20categoria&pfm_index=2&pfm_page=category&pfm_pos=category_page.rr1&pfm_type=vit_recommendation&DCSext.recom=RR_category_page.rr1-mars_TopSalesCategory%3AP%3A100%3A%3Aads%3Dtrue%3AorderAdsTest%3Dmotor_high_ads%3Atestab%3DsingleStrategy&nm_origem=rec_category_page.rr1-mars_TopSalesCategory%3AP%3A100%3A%3Aads%3Dtrue%3AorderAdsTest%3Dmotor_high_ads%3Atestab%3DsingleStrategy&nm_ranking_rec=2&chave=b2wads_5c5d64c662f9f20fa00c1e20_79124079000627_28064590_0ae7e4c9-bd82-4f1d-bed8-1a49692aefe0&sellerId=79124079000627&portfolio=rec&st=mars_TopSalesCategory&pl=category_page.rr1&offerId=606429cc0c0704426620945b&cor=Bege%20azul&condition=NEW",
         "dataCadastro": "18/10/2023"
      },
      {
         "id": 7,
         "categoria": "Móveis",
         "nome": "Guarda-Roupa Casal",
         "valor": "597,70",
         "origem": "Magazine Luiza",
         "url": "https://www.magazineluiza.com.br/guarda-roupa-casal-katherine-3-portas-2-gavetas-com-espelho-branco-panorama-moveis/p/je13gj3b6c/mo/guro/",
         "dataCadastro": "18/10/2023"
       },
       {
         "id": 8,
         "categoria": "Brinquedos",
         "nome": "Mesa Infantil Colorida",
         "valor": "121,90",
         "origem": "Shopee",
         "url": "https://shopee.com.br/Mesa-Infantil-Colorida-Com-2-Cadeira-Tritec-Menina-i.365257077.7573504202",
         "dataCadastro": "18/10/2023"
       },
       {
        "id": 9,
        "categoria": "Colchões",
        "nome": "Colchão Casal Inflável",
        "valor": "189,74",
        "origem": "Casa Bahia",
        "url": "https://www.casasbahia.com.br/colchao-casal-inflavel-bomba-de-ar-manual-vg-plus/p/1560954875?utm_source=Google&utm_medium=BuscaOrganica&utm_campaign=DescontoEspecial",
        "dataCadastro": "18/10/2023"
       },
       {
        "id": 10,
        "categoria": "Ferramentas",
        "nome": "Parafusadeira e Furadeira",
        "valor": "188,78",
        "origem": "Ponto Frio",
        "url": "https://www.pontofrio.com.br/parafusadeira-e-furadeira-wap-bpf-12k3-carregador-bivolt-12v-3-8-com-acessorios-e-maleta/p/55054261?utm_source=Google&utm_medium=BuscaOrganica&utm_campaign=DescontoEspecial",
        "dataCadastro": "18/10/2023"
       }, 
       {
        "id": 11,
        "categoria": "Beleza & Perfumaria",
        "nome": "Perfume Paco Rabanne",
        "valor": "539,90",
        "origem": "Renner",
        "url": "https://www.lojasrenner.com.br/p/perfume-paco-rabanne-invictus-victory-eau-de-parfum/-/A-572971881-br.lr?sku=572971902",
        "dataCadastro": "18/10/2023"
       },
       {
        "id": 12,
        "categoria": "Bebê",
        "nome": "Bebezinha Impressão De Natal Bodysuit & Testeira",
        "valor": "33,29",
        "origem": "Shein",
        "url": "https://m.shein.com/br/Baby-Girl-Christmas-Print-Bodysuit-Headband-p-21410167-cat-2838.html?mallCode=1&imgRatio=3-4&src_module=sidecat&src_identifier=fc%3DAll%60sc%3DBabyMaternity%60tc%3D0%60oc%3DBeb%C3%AAzinhas%20%280-3%20anos%29%60ps%3Dtab01navbar15menu01dir6%60jc%3Dreal_3225&src_tab_page_id=page_real_class1700366928178&showFeedbackRec=1",
        "dataCadastro": "18/10/2023"
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
        "adquirido": false,
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
      { categoria: "Games", icone: "fas fa-gamepad" },
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
