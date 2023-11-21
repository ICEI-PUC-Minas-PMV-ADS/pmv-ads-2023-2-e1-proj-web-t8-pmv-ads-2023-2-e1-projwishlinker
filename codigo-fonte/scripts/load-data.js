function loadInitialData() {
  if (!localStorage.getItem("users")) {
    const userPasswords = [
      {
        id: 1,
        user: "thiago",
        pass: "wish",
        firstname: "Thiago",
        lastname: "Pires",
      },
      {
        id: 2,
        user: "rodolfo",
        pass: "wish",
        firstname: "Rodolfo",
        lastname: "Iannazzo",
      },
      {
        id: 3,
        user: "jozimar",
        pass: "wish",
        firstname: "Jozimar",
        lastname: "Santos",
      },
      {
        id: 4,
        user: "gabriela",
        pass: "wish",
        firstname: "Gabriela",
        lastname: "Almeida",
      },
      {
        id: 5,
        user: "leonidas",
        pass: "wish",
        firstname: "Leonidas",
        lastname: "Oliveira",
      },
      {
        id: 6,
        user: "gustavo",
        pass: "wish",
        firstname: "Gustavo",
        lastname: "Maciel",
      },
      {
        id: 7,
        user: "marco",
        pass: "wish",
        firstname: "Marco",
        lastname: "Rodrigo",
      },
      { id: 8, user: "puc", pass: "wish", firstname: "PUC", lastname: "Minas" },
    ];

    localStorage.setItem("users", JSON.stringify(userPasswords));
  }

  function getCurrentDateFormatted() {
    return new Date().toLocaleDateString("pt-BR");
  }

  function getRandomFutureDateFormatted() {
    var date = new Date();
    var randomDays = Math.floor(Math.random() * 3) + 1;
    date.setDate(date.getDate() + randomDays);
    return date.toLocaleDateString("pt-BR");
  }

  if (!localStorage.getItem("listaDeDesejos")) {
    const produtosListaDeDesejos = [
      {
        id: 1,
        categoria: "Vestuário",
        nome: "Tênis Nike Air Max Impact 4",
        valor: "439,99",
        origem: "Netshoes",
        url: "https://www.netshoes.com.br/tenis-nike-air-max-impact-4-masculino-preto-JD8-3681-006",
      },
      {
        id: 2,
        categoria: "Eletrônicos",
        nome: "Placa Mãe Gigabyte B760M AORUS ELITE",
        valor: "1129,99",
        origem: "Kabum",
        url: "https://www.kabum.com.br/produto/419108/placa-mae-gigabyte-b760m-aorus-elite-rev-1-0-lga-1700-ddr5",
      },
      {
        id: 3,
        categoria: "Games",
        nome: "Cyberpunk 2077",
        valor: "199,90",
        origem: "Steam",
        url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
      },
      {
        id: 4,
        categoria: "Eletrônicos",
        nome: "Moto E13 64gb",
        valor: "589,00",
        origem: "Mercado Livre",
        url: "https://www.mercadolivre.com.br/moto-e13-64gb-4gb-ram-octa-core-tela-de-65-hd-cam-13mp-cor-off-white/p/MLB22412153#polycard_client=recommendations_home_navigation-recommendations&reco_backend=machinalis-homes-pdp-boos&reco_client=home_navigation-recommendations&reco_item_pos=0&reco_backend_type=function&reco_id=7d5f1b32-d07b-452b-ad1b-4283761ffe10&wid=MLB3280473645&sid=recos",
      },
      {
        id: 5,
        categoria: "Livros",
        nome: "Código limpo",
        valor: "71,92",
        origem: "Amazon Brasil",
        url: "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/?_encoding=UTF8&pd_rd_i=8576082675&pd_rd_w=PMc2n&content-id=amzn1.sym.ca171b73-930c-46b6-8e0f-c1ee823ddd5d&pf_rd_p=ca171b73-930c-46b6-8e0f-c1ee823ddd5d&pf_rd_r=KHQ3YHKD9M997NNJBVTW&pd_rd_wg=jr5RH&pd_rd_r=bd86de3c-2a10-4ad7-8329-81248919fe19&ref_=oct_dx_dotd",
      },
      {
        id: 6,
        categoria: "Cama, Mesa e Banho",
        nome: "Jogo de toalhas",
        valor: "189,99",
        origem: "Americanas",
        url: "https://www.americanas.com.br/produto/28064590/jogo-de-toalhas-banhao-gigante-karsten-lumina-5-pecas-fio-penteado-emcompre?pfm_carac=os%20mais%20vendidos%20da%20categoria&pfm_index=2&pfm_page=category&pfm_pos=category_page.rr1&pfm_type=vit_recommendation&DCSext.recom=RR_category_page.rr1-mars_TopSalesCategory%3AP%3A100%3A%3Aads%3Dtrue%3AorderAdsTest%3Dmotor_high_ads%3Atestab%3DsingleStrategy&nm_origem=rec_category_page.rr1-mars_TopSalesCategory%3AP%3A100%3A%3Aads%3Dtrue%3AorderAdsTest%3Dmotor_high_ads%3Atestab%3DsingleStrategy&nm_ranking_rec=2&chave=b2wads_5c5d64c662f9f20fa00c1e20_79124079000627_28064590_0ae7e4c9-bd82-4f1d-bed8-1a49692aefe0&sellerId=79124079000627&portfolio=rec&st=mars_TopSalesCategory&pl=category_page.rr1&offerId=606429cc0c0704426620945b&cor=Bege%20azul&condition=NEW",
      },
      {
        id: 7,
        categoria: "Móveis",
        nome: "Guarda-Roupa Casal",
        valor: "597,70",
        origem: "Magazine Luiza",
        url: "https://www.magazineluiza.com.br/guarda-roupa-casal-katherine-3-portas-2-gavetas-com-espelho-branco-panorama-moveis/p/je13gj3b6c/mo/guro/",
      },
      {
        id: 8,
        categoria: "Brinquedos",
        nome: "Mesa Infantil Colorida",
        valor: "121,90",
        origem: "Shopee",
        url: "https://shopee.com.br/Mesa-Infantil-Colorida-Com-2-Cadeira-Tritec-Menina-i.365257077.7573504202",
      },
      {
        id: 9,
        categoria: "Colchões",
        nome: "Colchão Casal Inflável",
        valor: "189,74",
        origem: "Casa Bahia",
        url: "https://www.casasbahia.com.br/colchao-casal-inflavel-bomba-de-ar-manual-vg-plus/p/1560954875?utm_source=Google&utm_medium=BuscaOrganica&utm_campaign=DescontoEspecial",
      },
      {
        id: 10,
        categoria: "Ferramentas",
        nome: "Parafusadeira e Furadeira",
        valor: "188,78",
        origem: "Ponto Frio",
        url: "https://www.pontofrio.com.br/parafusadeira-e-furadeira-wap-bpf-12k3-carregador-bivolt-12v-3-8-com-acessorios-e-maleta/p/55054261?utm_source=Google&utm_medium=BuscaOrganica&utm_campaign=DescontoEspecial",
      },
      {
        id: 11,
        categoria: "Moda",
        nome: "Maio Infantil Com Babadinho",
        valor: "130,30",
        origem: "Renner",
        url: "https://www.lojasrenner.com.br/p/maio-infantil-com-babadinho-ursinho-ted-ceci-moda-praia/-/A-7010701945804-br.lr?sku=7510704071680",
      },
      {
        id: 12,
        categoria: "Bebê",
        nome: "Bebezinha Impressão De Natal Bodysuit & Testeira",
        valor: "33,29",
        origem: "Shein",
        url: "https://m.shein.com/br/Baby-Girl-Christmas-Print-Bodysuit-Headband-p-21410167-cat-2838.html?mallCode=1&imgRatio=3-4&src_module=sidecat&src_identifier=fc%3DAll%60sc%3DBabyMaternity%60tc%3D0%60oc%3DBeb%C3%AAzinhas%20%280-3%20anos%29%60ps%3Dtab01navbar15menu01dir6%60jc%3Dreal_3225&src_tab_page_id=page_real_class1700366928178&showFeedbackRec=1",
      },
    ];

    produtosListaDeDesejos.forEach(function (produto) {
      produto.dataCadastro = getCurrentDateFormatted();
    });

    localStorage.setItem(
      "listaDeDesejos",
      JSON.stringify(produtosListaDeDesejos)
    );
  }

  if (!localStorage.getItem("quarentenaDeCompras")) {
    const produtosQuarentenaDeCompras = [
      {
        id: 1,
        categoria: "Vestuário",
        nome: "Camisa Cruzeiro I 23/24 Adidas",
        valor: "314,99",
        origem: "Netshoes",
        url: "https://www.netshoes.com.br/camisa-cruzeiro-i-2324-sn-torcedor-adidas-masculina-azul-FB8-4686-008",
        adquirido: false,
      },
      {
        id: 2,
        categoria: "Eletrônicos",
        nome: "Placa de Vídeo RTX 4070 Ti Asus NVIDIA GeForce",
        valor: "5.999,99",
        origem: "Kabum",
        url: "https://www.kabum.com.br/produto/419115/placa-de-video-rtx-4070-ti-asus-tuf-gaming-nvidia-geforce-12-gb-gddr6x-argb-dlss-ray-tracing-tuf-rtx4070ti-12g-gaming",
        adquirido: false,
      },
      {
        id: 3,
        categoria: "Games",
        nome: "Starfield",
        valor: "299,00",
        origem: "Steam",
        url: "https://store.steampowered.com/app/1716740/Starfield/",
        adquirido: false,
      },
      {
        id: 4,
        categoria: "Esporte e Lazer",
        nome: "Bike Spinning",
        valor: "1399,90",
        origem: "Extra",
        url: "https://www.extra.com.br/bike-spinning-e33-acte-sports-com-roda-de-inercia-de-6kg-monitor-multifuncoes-sensor-de-pulso-suporta-ate-100kg-preto-vermelho/p/55057346",
        adquirido: false,
      },
      {
        id: 5,
        categoria: "Automotivo",
        nome: "Hyundai HB20 1.0",
        valor: "53990,00",
        origem: "OLX",
        url: "https://mg.olx.com.br/belo-horizonte-e-regiao/autos-e-pecas/carros-vans-e-utilitarios/hyundai-hb20-1-0-unique-12v-flex-4p-manual-1245080082?lis=galeria_home_autos_feirao",
        adquirido: false,
      },
      {
        id: 6,
        categoria: "Saúde e Cuidados Pessoais",
        nome: "Termômetro Falante Infravermelho Digital",
        valor: "247,00",
        origem: "Mercado Livre",
        url: "https://produto.mercadolivre.com.br/MLB-1900116737-termmetro-falante-infravermelho-digital-voz-em-espanhol-_JM#position=4&search_layout=stack&type=item&tracking_id=5f96bf12-4286-451d-a148-a5e35684e8db",
        adquirido: false,
      },
      {
        id: 7,
        categoria: "Relógios",
        nome: "CURREN Relógio",
        valor: "84,99",
        origem: "Shopee",
        url: "https://shopee.com.br/CURREN-Rel%C3%B3gio-Original-Masculino-Casual-Couro-Simples-Esportivo-Quartzo-Imperme%C3%A1vel-CR91-X-i.392967703.23922393243?sp_atk=e9076f65-61e1-453b-8555-2654600b72a6&xptdk=e9076f65-61e1-453b-8555-2654600b72a6",
        adquirido: false,
      },
      {
        id: 8,
        categoria: "Pet Shop",
        nome: "Roupa Pet Personalizado",
        valor: "69,99",
        origem: "Elo7",
        url: "https://www.elo7.com.br/roupa-pet-personalizado-azul-marinho/dp/1731AEC?pp=13&pn=1&nav=sch_pd_sr_1_13&qrid=SGy3hwMzoJNu#dvbc=1&dwhc=1&dcc=0&lpfcm=1&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=0&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=o&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0",
        adquirido: false,
      },
      {
        id: 9,
        categoria: "Serviços",
        nome: "Montagem de Guarda-roupas",
        valor: "219,00",
        origem: "Magazine Luiza",
        url: "https://www.magazineluiza.com.br/montagem-de-guarda-roupas-6-a-8-portas-convencional-magalu-montagem/p/fbj0ej40jd/se/mmov/",
        adquirido: false,
      },
      {
        id: 10,
        categoria: "Artesanato",
        nome: "Peça Artesanato De Decoração Com Design De Água-Viva",
        valor: "60,95",
        origem: "Shein",
        url: "https://m.shein.com/br/1pc-Jellyfish-Design-Decoration-Craft-Modern-Crystal-Ball-Night-Light-Shaped-Decorative-Object-For-Home-p-26384726-cat-1958.html?mallCode=1&imgRatio=3-4&src_module=sidecat&src_identifier=fc%3DHome%60sc%3DHOMELIVING%60tc%3D0%60oc%3DDecora%C3%A7%C3%A3o%20de%20casa%60ps%3Dtab06navbar01menu01dir6%60jc%3DitemPicking_002112928&src_tab_page_id=page_select_class1700414246387&showFeedbackRec=1",
        adquirido: false,
      },
      {
        id: 11,
        categoria: "Áudio",
        nome: "Caixa De Som jbl",
        valor: "1799,10",
        origem: "Americanas",
        url: "https://www.americanas.com.br/produto/632953627/caixa-de-som-jbl-partybox-100-160w-bluetooth-luzes-de-led?pfm_carac=voc%C3%AA%20tamb%C3%A9m%20pode%20gostar%20disso&pfm_index=3&pfm_page=product&pfm_pos=item_page.rr1&pfm_type=vit_recommendation&DCSext.recom=RR_item_page.rr1-mars_ClickCP%3AP%3A95%3A%3Aads%3Dtrue%3AorderAdsTest%3Dmotor_high_ads%3Atestab%3DsingleStrategy&nm_origem=rec_item_page.rr1-mars_ClickCP%3AP%3A95%3A%3Aads%3Dtrue%3AorderAdsTest%3Dmotor_high_ads%3Atestab%3DsingleStrategy&nm_ranking_rec=3&offerId=6426dcd2579fbc8d91bcda38&cor=Preto&crossdocking=2&voltagem=Bvolt&condition=NEW",
        adquirido: false,
      },
      {
        id: 12,
        categoria: "Ar e Ventilação",
        nome: "Ventilador de Mesa",
        valor: "132,90",
        origem: "Ponto Frio",
        url: "https://www.pontofrio.com.br/ventilador-de-mesa-30cm-mondial-super-power-vsp-30-b-6-pas-3-velocidades-preto/p/55029986?utm_source=Google&utm_medium=BuscaOrganica&utm_campaign=DescontoEspecial",
        adquirido: false,
      },
    ];

    produtosQuarentenaDeCompras.forEach(function (produto) {
      produto.dataCadastro = getCurrentDateFormatted();
      produto.fimQuarentena = getRandomFutureDateFormatted();
    });

    localStorage.setItem(
      "quarentenaDeCompras",
      JSON.stringify(produtosQuarentenaDeCompras)
    );
  }

  if (!localStorage.getItem("iconesCategorias")) {
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
      {
        categoria: "Religião e Espiritualidade",
        icone: "fas fa-praying-hands",
      },
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
