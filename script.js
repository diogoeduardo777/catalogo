const produtosPronta = [
  {
    nome: 'Arsenal',
    descricao: 'Camisa Home 24/25',
    tamanhos:  'G',
    imagem: 'img/Arsenal.jpg',
    categoria: 'pronta',
    pais: 'europa',
    whatsapp: 'Arsenal'
  },
  {
    nome: 'Juventus',
    descricao: 'Camisa Home 24/25',
    tamanhos:  'G',
    imagem: 'img/juventus.jpg',
    categoria: 'pronta',
    pais: 'europa',
    whatsapp: 'Juventus'
  },
  {
    nome: 'Grêmio',
    descricao: 'Camisa Home 24/25',
    tamanhos:  'G',
    imagem: 'img/gremio.jpg',
    categoria: 'pronta',
    pais: 'brasil',
    whatsapp: 'Grêmio'
  },
  {
    nome: 'Internacional',
    descricao: 'Camisa Home 24/25',
    tamanhos:  'G',
    imagem: 'img/internacional.jpg',
    categoria: 'pronta',
    pais: 'brasil',
    whatsapp: 'Internacional'
  },
  {
    nome: 'PSG',
    descricao: 'Camisa Home 24/25',
    tamanhos:  'G',
    imagem: 'img/psg.jpg',
    categoria: 'pronta',
    pais: 'europa',
    whatsapp: 'PSG'
  },
  {
    nome: 'Barcelona',
    descricao: 'Edição Especial 24/25',
    tamanhos:  'G',
    imagem: 'img/barcelona edição especial.jpeg',
    categoria: 'pronta',
    pais: 'europa',
    whatsapp: 'Barcelona Edição Especial'
  }
];

const produtosVendidos = [
  {
    nome: 'Barcelona',
    descricao: 'Camisa Home 24/25',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/barcelona.jpeg',
    categoria: 'vendido',
    pais: 'europa',
    whatsapp: 'Barcelona'
  },
  {
    nome: 'Manchester City',
    descricao: 'Camisa Home 24/25',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/city.jpeg',
    categoria: 'vendido',
    pais: 'europa',
    whatsapp: 'Manchester City'
  },
  {
    nome: 'Real Madrid',
    descricao: 'Camisa Home 24/25',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/Real madrid.jpg',
    categoria: 'vendido',
    pais: 'europa',
    whatsapp: 'Real Madrid'
  },
  {
    nome: 'Palmeiras',
    descricao: 'Camisa Home 24/25',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/palmeiras.jpg',
    categoria: 'vendido',
    pais: 'brasil',
    whatsapp: 'Palmeiras'
  },
  {
    nome: 'Botafogo',
    descricao: 'Camisa Home 24/25',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/botafogo.jpeg',
    categoria: 'vendido',
    pais: 'brasil',
    whatsapp: 'Botafogo'
  }
];

function criarProdutoCard(produto) {
  const badge = produto.categoria === 'pronta' ? 
    '<span class="badge badge-pronta">✓ Pronta Entrega</span>' :
    '<span class="badge badge-vendido">🔥 Mais Vendido</span>';

  const whatsappLink = `https://wa.me/5554999999999?text=Olá!%20Tenho%20interesse%20na%20camisa%20do%20${encodeURIComponent(produto.whatsapp)}`;

  return `
    <div class="produto-card" data-nome="${produto.nome.toLowerCase()}" data-categoria="${produto.categoria}" data-pais="${produto.pais}">
      <div class="produto-imagem">
        ${badge}
        <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
      </div>
      <div class="produto-info">
        <h3 class="produto-nome">${produto.nome}</h3>
        <p class="produto-descricao">${produto.descricao}</p>
        <p class="produto-tamanhos">📏 ${produto.tamanhos}</p>
        <div class="produto-footer">
          <a href="${whatsappLink}" class="btn-whatsapp" target="_blank">
            💬 Pedir
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderizarProdutos() {
  const wrapperPronta = document.getElementById('wrapperPronta');
  const wrapperVendidos = document.getElementById('wrapperVendidos');

  wrapperPronta.innerHTML = produtosPronta.map(p => 
    `<div class="swiper-slide">${criarProdutoCard(p)}</div>`
  ).join('');

  wrapperVendidos.innerHTML = produtosVendidos.map(p => 
    `<div class="swiper-slide">${criarProdutoCard(p)}</div>`
  ).join('');
}

renderizarProdutos();

const swiperConfig = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    480: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 25 },
    1024: { slidesPerView: 4, spaceBetween: 30 }
  }
};

const swiperPronta = new Swiper('.swiper-pronta', swiperConfig);
const swiperVendidos = new Swiper('.swiper-vendidos', swiperConfig);

const inputBusca = document.getElementById('busca');
const filtroCategoria = document.getElementById('filtroCategoria');
const filtroPais = document.getElementById('filtroPais');

function filtrarProdutos() {
  const termoBusca = inputBusca.value.toLowerCase();
  const categoriaFiltro = filtroCategoria.value;
  const paisFiltro = filtroPais.value;

  const todosProdutos = document.querySelectorAll('.produto-card');
  let contadorPronta = 0;
  let contadorVendidos = 0;

  todosProdutos.forEach(card => {
    const nome = card.dataset.nome;
    const categoria = card.dataset.categoria;
    const pais = card.dataset.pais;

    const matchBusca = nome.includes(termoBusca);
    const matchCategoria = categoriaFiltro === 'todos' || categoria === categoriaFiltro;
    const matchPais = paisFiltro === 'todos' || pais === paisFiltro;

    const slide = card.closest('.swiper-slide');

    if (matchBusca && matchCategoria && matchPais) {
      slide.style.display = 'block';
      if (categoria === 'pronta') contadorPronta++;
      if (categoria === 'vendido') contadorVendidos++;
    } else {
      slide.style.display = 'none';
    }
  });

  document.getElementById('secaoPronta').style.display = 
    (categoriaFiltro === 'todos' || categoriaFiltro === 'pronta') && contadorPronta > 0 ? 'block' : 'none';
  document.getElementById('secaoVendidos').style.display = 
    (categoriaFiltro === 'todos' || categoriaFiltro === 'vendido') && contadorVendidos > 0 ? 'block' : 'none';

  swiperPronta.update();
  swiperVendidos.update();
}

inputBusca.addEventListener('input', filtrarProdutos);
filtroCategoria.addEventListener('change', filtrarProdutos);
filtroPais.addEventListener('change', filtrarProdutos);