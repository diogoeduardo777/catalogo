// script.js - UFO STORE OTIMIZADO

// ========== CONFIGURAÇÕES ==========
const MY_WHATSAPP = '5554999300593';
const INSTAGRAM_URL = 'https://www.instagram.com/ufo_store_rs?igsh=MWJlbnk2NG5vbTFuMg==';

// ========== DADOS DOS PRODUTOS ==========
const produtosPronta = [
  {
    nome: 'Arsenal',
    descricao: 'Arsenal Reserva 25-26',
    tamanhos: 'G',
    imagem: 'img/arsenal.jpg',
    categoria: 'pronta',
    pais: 'europa',
    whatsapp: 'Arsenal'
  },
  {
    nome: 'Juventus',
    descricao: 'Juventus Third 25-26',
    tamanhos: 'G',
    imagem: 'img/juventus.jpg',
    categoria: 'pronta',
    pais: 'europa',
    whatsapp: 'Juventus'
  },
  {
    nome: 'Grêmio',
    descricao: 'Grêmio Titular 25-26',
    tamanhos: 'G',
    imagem: 'img/gremio.jpg',
    categoria: 'pronta',
    pais: 'brasil',
    whatsapp: 'Grêmio'
  },
  {
    nome: 'Internacional',
    descricao: 'Internacional Titular 25-26',
    tamanhos: 'G',
    imagem: 'img/internacional.jpg',
    categoria: 'pronta',
    pais: 'brasil',
    whatsapp: 'Internacional'
  },
  {
    nome: 'PSG',
    descricao: 'PSG Fourth 24-25',
    tamanhos: 'G',
    imagem: 'img/psg.jpg',
    categoria: 'pronta',
    pais: 'europa',
    whatsapp: 'PSG'
  },
  {
    nome: 'Barcelona',
    descricao: 'Barcelona Edição Especial 25-26',
    tamanhos: 'G',
    imagem: 'img/barcelona edição especial.jpeg',
    categoria: 'pronta',
    pais: 'europa',
    whatsapp: 'Barcelona Edição Especial'
  }
];

const produtosProcuradas = [
  {
    nome: 'Barcelona',
    descricao: 'Barcelona Titular 25-26',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/barcelona.jpeg',
    categoria: 'procurada',
    pais: 'europa',
    whatsapp: 'Barcelona'
  },
  {
    nome: 'Manchester City',
    descricao: 'Manchester City Reserva 25-26',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/city.jpeg',
    categoria: 'procurada',
    pais: 'europa',
    whatsapp: 'Manchester City'
  },
  {
    nome: 'Real Madrid',
    descricao: 'Real Madrid Titular 25-26',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/Real madrid.jpg',
    categoria: 'procurada',
    pais: 'europa',
    whatsapp: 'Real Madrid'
  },
  {
    nome: 'Palmeiras',
    descricao: 'Palmeiras Titular 25-26',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/palmeiras.jpg',
    categoria: 'procurada',
    pais: 'brasil',
    whatsapp: 'Palmeiras'
  },
  {
    nome: 'Botafogo',
    descricao: 'Botafogo Titular 25-26',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/botafogo.jpeg',
    categoria: 'procurada',
    pais: 'brasil',
    whatsapp: 'Botafogo'
  },
  {
    nome: 'Liverpool',
    descricao: 'Liverpool Titular 25-26',
    tamanhos: 'P, M, G, GG',
    imagem: 'img/liverpool.jpg',
    categoria: 'procurada',
    pais: 'europa',
    whatsapp: 'Liverpool'
  }
];

// ========== CRIAR CARD DO PRODUTO ==========
function criarProdutoCard(produto) {
  let badge;
  if (produto.categoria === 'pronta') {
    badge = '<span class="badge badge-pronta">✓ Pronta Entrega</span>';
  } else if (produto.categoria === 'procurada') {
    badge = '<span class="badge badge-procurada">🔥 Mais Procuradas</span>';
  } else {
    badge = '';
  }

  // Criar link do WhatsApp com FOTO da camisa
  const imagemUrl = window.location.origin + '/' + produto.imagem;
  const msg = `Olá! Tenho interesse na camisa do *${produto.whatsapp}*\n\n📸 Foto: ${imagemUrl}\n👕 Descrição: ${produto.descricao}\n📏 Tamanhos disponíveis: ${produto.tamanhos}`;
  const whatsappLink = `https://wa.me/${MY_WHATSAPP}?text=${encodeURIComponent(msg)}`;

  return `
    <div class="produto-card"
         data-nome="${produto.nome.toLowerCase()}"
         data-categoria="${produto.categoria}"
         data-pais="${produto.pais}">
      <div class="produto-imagem" onclick="abrirLightbox('${produto.imagem}')">
        ${badge}
        <img src="${produto.imagem}"
             alt="${produto.nome}"
             loading="lazy">
        <div class="zoom-icon">🔍</div>
      </div>
      <div class="produto-info">
        <h3 class="produto-nome">${produto.nome}</h3>
        <p class="produto-descricao">${produto.descricao}</p>
        <p class="produto-tamanhos">📏 ${produto.tamanhos}</p>
        <div class="produto-footer">
          <a href="${whatsappLink}"
             class="btn-whatsapp"
             target="_blank"
             rel="noopener"
             onclick="mostrarToast('Abrindo WhatsApp... 💬')">
            💬 Pedir
          </a>
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAR PRODUTOS COM ANIMAÇÃO ==========
function renderizarProdutos() {
  const wrapperPronta = document.getElementById('wrapperPronta');
  const wrapperProcuradas = document.getElementById('wrapperProcuradas');

  wrapperPronta.innerHTML = produtosPronta
    .map(p => `<div class="swiper-slide">${criarProdutoCard(p)}</div>`)
    .join('');

  wrapperProcuradas.innerHTML = produtosProcuradas
    .map(p => `<div class="swiper-slide">${criarProdutoCard(p)}</div>`)
    .join('');

  // Adicionar animação de entrada nos cards
  setTimeout(() => {
    document.querySelectorAll('.produto-card').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 50);
    });
  }, 100);
}

renderizarProdutos();

// ========== CONFIGURAÇÃO DO SWIPER (OTIMIZADO) ==========
const swiperConfig = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    480: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 25 },
    1024: { slidesPerView: 4, spaceBetween: 30 }
  }
};

const swiperPronta = new Swiper('.swiper-pronta', swiperConfig);
const swiperProcuradas = new Swiper('.swiper-procuradas', swiperConfig);

// ========== FILTROS OTIMIZADOS (DEBOUNCE) ==========
const inputBusca = document.getElementById('busca');
const filtroCategoria = document.getElementById('filtroCategoria');
const filtroPais = document.getElementById('filtroPais');

// Debounce para melhorar performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function filtrarProdutos() {
  const termoBusca = inputBusca.value.toLowerCase();
  const categoriaFiltro = filtroCategoria.value;
  const paisFiltro = filtroPais.value;
  const todosProdutos = document.querySelectorAll('.produto-card');
  let contadorPronta = 0;
  let contadorProcuradas = 0;

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
      if (categoria === 'procurada') contadorProcuradas++;
    } else {
      slide.style.display = 'none';
    }
  });

  document.getElementById('secaoPronta').style.display =
    (categoriaFiltro === 'todos' || categoriaFiltro === 'pronta') && contadorPronta > 0
      ? 'block'
      : 'none';

  document.getElementById('secaoProcuradas').style.display =
    (categoriaFiltro === 'todos' || categoriaFiltro === 'procurada') && contadorProcuradas > 0
      ? 'block'
      : 'none';

  swiperPronta.update();
  swiperProcuradas.update();
}

inputBusca.addEventListener('input', debounce(filtrarProdutos, 300));
filtroCategoria.addEventListener('change', filtrarProdutos);
filtroPais.addEventListener('change', filtrarProdutos);

// ========== LIGHTBOX MELHORADO ==========
function abrirLightbox(imagemSrc) {
  const lightbox = document.getElementById('lightbox');
  const img = lightbox.querySelector('img');
  img.src = imagemSrc;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function fecharLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this || e.target.classList.contains('lightbox-close')) {
    fecharLightbox();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    fecharLightbox();
  }
});

// ========== BOTÃO VOLTAR AO TOPO ==========
const voltarTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    voltarTopo.classList.add('mostrar');
  } else {
    voltarTopo.classList.remove('mostrar');
  }
});

voltarTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ========== TOAST DE NOTIFICAÇÃO ==========
function mostrarToast(mensagem) {
  const toast = document.getElementById('toast');
  const toastMessage = toast.querySelector('.toast-message');
  toastMessage.textContent = mensagem;
  toast.classList.add('mostrar');

  setTimeout(() => {
    toast.classList.remove('mostrar');
  }, 3000);
}

// ========== LOADING SCREEN ==========
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 800);
});

// ========== OTIMIZAÇÃO: LAZY LOADING DE IMAGENS ==========
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========== PERFORMANCE: THROTTLE PARA SCROLL ==========
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Aplicar throttle no scroll para melhor performance
window.addEventListener('scroll', throttle(() => {
  // Adicionar efeitos de scroll aqui se necessário
}, 100));