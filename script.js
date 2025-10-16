// ═══════════════════════════════════════════════════════════
// 🛸 UFO STORE - SISTEMA ULTRA OTIMIZADO V4
// ═══════════════════════════════════════════════════════════

// ┌─────────────────────────────────────────────────────────┐
// │ CONFIGURAÇÕES GLOBAIS                                   │
// └─────────────────────────────────────────────────────────┘
const CONFIG = {
  whatsapp: '5554999300593',
  instagram: 'https://www.instagram.com/ufo_store_rs?igsh=MWJlbnk2NG5vbTFuMg==',
  animacao: {
    cardDelay: 20, // Reduzido de 30 para 20
    scrollThreshold: 300,
    toastDuration: 3000,
    loadingDelay: 300 // Reduzido de 500 para 300
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ BASE DE DADOS - PRODUTOS                                │
// └─────────────────────────────────────────────────────────┘
const PRODUTOS = {
  prontaEntrega: [
    {
      nome: 'Arsenal',
      descricao: 'Arsenal Reserva 25-26',
      tamanhos: 'G',
      imagem: 'img/Arsenal.jpg',
      categoria: 'pronta',
      pais: 'europa'
    },
    {
      nome: 'Juventus',
      descricao: 'Juventus Third 25-26',
      tamanhos: 'G',
      imagem: 'img/juventus.jpg',
      categoria: 'pronta',
      pais: 'europa'
    },
    {
      nome: 'Grêmio',
      descricao: 'Grêmio Titular 25-26',
      tamanhos: 'G',
      imagem: 'img/gremio.jpg',
      categoria: 'pronta',
      pais: 'brasil'
    },
    {
      nome: 'Internacional',
      descricao: 'Internacional Titular 25-26',
      tamanhos: 'G',
      imagem: 'img/internacional.jpg',
      categoria: 'pronta',
      pais: 'brasil'
    },
    {
      nome: 'PSG',
      descricao: 'PSG Fourth 24-25',
      tamanhos: 'G',
      imagem: 'img/psg.jpg',
      categoria: 'pronta',
      pais: 'europa'
    },
    {
      nome: 'Barcelona',
      descricao: 'Barcelona Edição Especial 25-26',
      tamanhos: 'G',
      imagem: 'img/barcelona edição especial.jpeg',
      categoria: 'pronta',
      pais: 'europa'
    }
  ],
  
  maisProcuradas: [
    {
      nome: 'Barcelona',
      descricao: 'Barcelona Titular 25-26',
      tamanhos: 'P, M, G, GG',
      imagem: 'img/barcelona.jpeg',
      categoria: 'procurada',
      pais: 'europa'
    },
    {
      nome: 'Manchester City',
      descricao: 'Manchester City Reserva 25-26',
      tamanhos: 'P, M, G, GG',
      imagem: 'img/city.jpeg',
      categoria: 'procurada',
      pais: 'europa'
    },
    {
      nome: 'Real Madrid',
      descricao: 'Real Madrid Titular 25-26',
      tamanhos: 'P, M, G, GG',
      imagem: 'img/Real madrid.jpg',
      categoria: 'procurada',
      pais: 'europa'
    },
    {
      nome: 'Palmeiras',
      descricao: 'Palmeiras Titular 25-26',
      tamanhos: 'P, M, G, GG',
      imagem: 'img/palmeiras.jpg',
      categoria: 'procurada',
      pais: 'brasil'
    },
    {
      nome: 'Botafogo',
      descricao: 'Botafogo Titular 25-26',
      tamanhos: 'P, M, G, GG',
      imagem: 'img/botafogo.jpeg',
      categoria: 'procurada',
      pais: 'brasil'
    },
    {
      nome: 'Liverpool',
      descricao: 'Liverpool Titular 25-26',
      tamanhos: 'P, M, G, GG',
      imagem: 'img/liverpool.jpg',
      categoria: 'procurada',
      pais: 'europa'
    }
  ],

  // ✨ NOVA SEÇÃO: CAMISETAS RETRÔ
 retro: [
  {
    nome: 'Brasil 1998',
    descricao: 'Brasil Retrô Copa 1998',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Seleção Brasileira 1998 Retrô.jpg',
    categoria: 'retro',
    pais: 'brasil'
  },
  {
    nome: 'Milan 2007',
    descricao: 'Milan Retrô 2007',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Camisa Milan RETRO 2007.jpg',
    categoria: 'retro',
    pais: 'europa'
  },
  {
    nome: 'Arsenal 2006',
    descricao: 'Camisa Arsenal Retrô 2006',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\arsenal retro.jpg',
    categoria: 'retro',
    pais: 'europa'
  },
  {
    nome: 'Fiorentina 1998',
    descricao: 'Fiorentina Retrô 1998',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Camisa Fiorentina RETRO 1998.jpg',
    categoria: 'retro',
    pais: 'europa'
  },
  {
    nome: 'Parma 2002',
    descricao: 'Parma Retrô 2002',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Parma Retro 2002.jpg',
    categoria: 'retro',
    pais: 'europa'
  },
  {
    nome: 'Real Betis 2000',
    descricao: 'Real Betis Retrô 2000',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Real Bétis Retro 2000.jpg',
    categoria: 'retro',
    pais: 'europa'
  },
  {
    nome: 'Grêmio 2000',
    descricao: 'Camisa Grêmio Retrô 2000',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Camisa Grêmio RETRO 2000.jpg',
    categoria: 'retro',
    pais: 'brasil'
  },
  {
    nome: 'Internacional 1997',
    descricao: 'Internacional Retrô 1997',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Internacional Retro 1997.jpg',
    categoria: 'retro',
    pais: 'brasil'
  },
  {
    nome: 'Manchester United 1999',
    descricao: 'Manchester United Retrô 1999',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Camisa Manchester United RETRO 1999.jpg',
    categoria: 'retro',
    pais: 'europa'
  },
  {
    nome: 'Corinthians 1999',
    descricao: 'Corinthians Retrô 1999',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Corinthians Retro 1999.jpg',
    categoria: 'retro',
    pais: 'brasil'
  },
  {
    nome: 'Palmeiras 1992',
    descricao: 'Palmeiras Retrô 1992',
    tamanhos: 'P, M, G, GG',
    imagem: 'img\\retro\\Palmeiras Retrô 1992.jpg',
    categoria: 'retro',
    pais: 'brasil'
  }
]
};

// ┌─────────────────────────────────────────────────────────┐
// │ UTILITÁRIOS                                             │
// └─────────────────────────────────────────────────────────┘
const Utils = {
  debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  gerarWhatsAppLink(produto) {
    const imagemUrl = `${window.location.origin}/${produto.imagem}`;
    const mensagem = `Olá! Tenho interesse na camisa do *${produto.nome}*\n\n📸 Foto: ${imagemUrl}\n👕 Descrição: ${produto.descricao}\n📏 Tamanhos disponíveis: ${produto.tamanhos}`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ COMPONENTES - PRODUTO CARD (OTIMIZADO)                 │
// └─────────────────────────────────────────────────────────┘
const ProdutoCard = {
  badges: {
    pronta: '<span class="badge badge-pronta">✓ Pronta Entrega</span>',
    procurada: '<span class="badge badge-procurada">🔥 Mais Procuradas</span>',
    retro: '<span class="badge badge-retro">⏰ Clássica Retrô</span>'
  },

  // Template otimizado usando template literals
  criar(produto) {
    const badge = this.badges[produto.categoria] || '';
    const whatsappLink = Utils.gerarWhatsAppLink(produto);

    return `<div class="produto-card" data-nome="${produto.nome.toLowerCase()}" data-categoria="${produto.categoria}" data-pais="${produto.pais}">
        <div class="produto-imagem" onclick="Lightbox.abrir('${produto.imagem}')">
          ${badge}
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
          <div class="zoom-icon">🔍</div>
        </div>
        <div class="produto-info">
          <h3 class="produto-nome">${produto.nome}</h3>
          <p class="produto-descricao">${produto.descricao}</p>
          <p class="produto-tamanhos">📏 ${produto.tamanhos}</p>
          <div class="produto-footer">
            <a href="${whatsappLink}" class="btn-whatsapp" target="_blank" rel="noopener" onclick="Toast.mostrar('Abrindo WhatsApp... 💬')">💬 Pedir</a>
          </div>
        </div>
      </div>`;
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ RENDERIZAÇÃO DE PRODUTOS (SUPER OTIMIZADO)             │
// └─────────────────────────────────────────────────────────┘
const Renderizador = {
  // Cache dos wrappers
  wrappers: {},

  init() {
    this.wrappers = {
      pronta: document.getElementById('wrapperPronta'),
      procuradas: document.getElementById('wrapperProcuradas'),
      retro: document.getElementById('wrapper-retro')
    };
  },

  // Renderização usando DocumentFragment para melhor performance
  renderizarSecao(produtos, wrapper) {
    const fragment = document.createDocumentFragment();
    const tempDiv = document.createElement('div');
    
    tempDiv.innerHTML = produtos
      .map(p => `<div class="swiper-slide">${ProdutoCard.criar(p)}</div>`)
      .join('');
    
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    
    wrapper.appendChild(fragment);
  },

  animar() {
    const cards = document.querySelectorAll('.produto-card');
    let index = 0;
    
    const animarProximo = () => {
      if (index < cards.length) {
        cards[index].style.opacity = '1';
        cards[index].style.transform = 'translateY(0)';
        index++;
        setTimeout(animarProximo, CONFIG.animacao.cardDelay);
      }
    };
    
    requestAnimationFrame(animarProximo);
  },

  renderizar() {
    this.renderizarSecao(PRODUTOS.prontaEntrega, this.wrappers.pronta);
    this.renderizarSecao(PRODUTOS.maisProcuradas, this.wrappers.procuradas);
    this.renderizarSecao(PRODUTOS.retro, this.wrappers.retro);
    
    // Animar após renderizar
    requestAnimationFrame(() => {
      setTimeout(() => this.animar(), 50);
    });
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ SWIPER - CONFIGURAÇÃO OTIMIZADA                         │
// └─────────────────────────────────────────────────────────┘
const SwiperConfig = {
  base: {
    loop: false, // Desabilitado para melhor performance
    speed: 300, // Reduzido de 400 para 300
    slidesPerView: 1.2,
    spaceBetween: 15,
    watchSlidesProgress: false, // Desabilitado
    watchSlidesVisibility: false, // Desabilitado
    observer: false, // Desabilitado
    observeParents: false, // Desabilitado
    
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 1 // Reduzido de 2 para 1
    },
    
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2 // Reduzido de 3 para 2
    },
    
    breakpoints: {
      480: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 25 },
      1024: { slidesPerView: 4, spaceBetween: 30 }
    },
    
    resistanceRatio: 0.85,
    touchRatio: 1,
    threshold: 5,
    preventInteractionOnTransition: false // Melhor fluidez
  },

  criar(selector, paginationSelector, navPrefix) {
    return new Swiper(selector, {
      ...this.base,
      pagination: { 
        el: paginationSelector,
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2
      },
      navigation: {
        prevEl: `${navPrefix} .swiper-button-prev`,
        nextEl: `${navPrefix} .swiper-button-next`
      }
    });
  }
};

// Instâncias do Swiper
let swipers = {};

// ┌─────────────────────────────────────────────────────────┐
// │ SISTEMA DE FILTROS (OTIMIZADO)                         │
// └─────────────────────────────────────────────────────────┘
const Filtros = {
  elementos: {},
  secoes: {},

  init() {
    this.elementos = {
      busca: document.getElementById('busca'),
      categoria: document.getElementById('filtroCategoria'),
      pais: document.getElementById('filtroPais')
    };

    this.secoes = {
      pronta: document.getElementById('secaoPronta'),
      procuradas: document.getElementById('secaoProcuradas'),
      retro: document.getElementById('secao-retro')
    };

    // Adicionar opção de filtro para retrô
    const optRetro = document.createElement('option');
    optRetro.value = 'retro';
    optRetro.textContent = '⏰ Clássicas Retrô';
    this.elementos.categoria.appendChild(optRetro);

    this.elementos.busca.addEventListener('input', 
      Utils.debounce(() => this.aplicar(), 200) // Reduzido de 250 para 200
    );
    this.elementos.categoria.addEventListener('change', () => this.aplicar());
    this.elementos.pais.addEventListener('change', () => this.aplicar());
  },

  aplicar() {
    const termo = this.elementos.busca.value.toLowerCase();
    const categoria = this.elementos.categoria.value;
    const pais = this.elementos.pais.value;
    
    const contadores = { pronta: 0, procurada: 0, retro: 0 };
    const cards = document.querySelectorAll('.produto-card');

    // Batch DOM updates
    cards.forEach(card => {
      const match = {
        busca: card.dataset.nome.includes(termo),
        categoria: categoria === 'todos' || card.dataset.categoria === categoria,
        pais: pais === 'todos' || card.dataset.pais === pais
      };

      const mostrar = match.busca && match.categoria && match.pais;
      const slide = card.closest('.swiper-slide');
      
      slide.style.display = mostrar ? '' : 'none';
      
      if (mostrar) {
        contadores[card.dataset.categoria]++;
      }
    });

    this.atualizarSecoes(categoria, contadores);
    this.atualizarSwipers();
  },

  atualizarSecoes(categoria, contadores) {
    const mostrarPronta = (categoria === 'todos' || categoria === 'pronta') && contadores.pronta > 0;
    const mostrarProcuradas = (categoria === 'todos' || categoria === 'procurada') && contadores.procurada > 0;
    const mostrarRetro = (categoria === 'todos' || categoria === 'retro') && contadores.retro > 0;

    this.secoes.pronta.style.display = mostrarPronta ? '' : 'none';
    this.secoes.procuradas.style.display = mostrarProcuradas ? '' : 'none';
    this.secoes.retro.style.display = mostrarRetro ? '' : 'none';
  },

  atualizarSwipers() {
    requestAnimationFrame(() => {
      Object.values(swipers).forEach(swiper => swiper?.update());
    });
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ LIGHTBOX                                                │
// └─────────────────────────────────────────────────────────┘
const Lightbox = {
  elemento: null,
  imagem: null,

  init() {
    this.elemento = document.getElementById('lightbox');
    this.imagem = this.elemento.querySelector('img');

    this.elemento.addEventListener('click', (e) => {
      if (e.target === this.elemento || e.target.classList.contains('lightbox-close')) {
        this.fechar();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.fechar();
    });
  },

  abrir(src) {
    this.imagem.src = src;
    this.elemento.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  fechar() {
    this.elemento.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ TOAST DE NOTIFICAÇÕES                                   │
// └─────────────────────────────────────────────────────────┘
const Toast = {
  elemento: null,
  mensagem: null,

  init() {
    this.elemento = document.getElementById('toast');
    this.mensagem = this.elemento.querySelector('.toast-message');
  },

  mostrar(texto) {
    this.mensagem.textContent = texto;
    this.elemento.classList.add('mostrar');

    setTimeout(() => {
      this.elemento.classList.remove('mostrar');
    }, CONFIG.animacao.toastDuration);
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ BOTÃO VOLTAR AO TOPO                                    │
// └─────────────────────────────────────────────────────────┘
const BotaoTopo = {
  elemento: null,

  init() {
    this.elemento = document.getElementById('voltarTopo');

    window.addEventListener('scroll', 
      Utils.throttle(() => this.toggle(), 150), // Otimizado
      { passive: true }
    );

    this.elemento.addEventListener('click', () => this.scrollToTop());
  },

  toggle() {
    if (window.pageYOffset > CONFIG.animacao.scrollThreshold) {
      this.elemento.classList.add('mostrar');
    } else {
      this.elemento.classList.remove('mostrar');
    }
  },

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ LOADING SCREEN                                          │
// └─────────────────────────────────────────────────────────┘
const LoadingScreen = {
  init() {
    const loading = document.getElementById('loading-screen');
    
    const hideLoading = () => {
      setTimeout(() => {
        loading.classList.add('fade-out');
        setTimeout(() => {
          loading.style.display = 'none';
        }, 400);
      }, CONFIG.animacao.loadingDelay);
    };

    if (document.readyState === 'complete') {
      hideLoading();
    } else {
      window.addEventListener('load', hideLoading);
    }
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ GERENCIADOR DE REDIMENSIONAMENTO (OTIMIZADO)           │
// └─────────────────────────────────────────────────────────┘
const ResizeManager = {
  init() {
    let timer = null;
    
    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        Object.values(swipers).forEach(swiper => swiper?.update());
      }, 200); // Reduzido de 250 para 200
    }, { passive: true });
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ INICIALIZAÇÃO DO SISTEMA                                │
// └─────────────────────────────────────────────────────────┘
const App = {
  init() {
    // Inicializar renderizador
    Renderizador.init();
    Renderizador.renderizar();

    // Aguardar DOM estar pronto antes de inicializar Swipers
    requestAnimationFrame(() => {
      // Inicializar Swipers
      swipers.pronta = SwiperConfig.criar(
        '.swiper-pronta',
        '.swiper-pronta .swiper-pagination',
        '.swiper-pronta'
      );

      swipers.procuradas = SwiperConfig.criar(
        '.swiper-procuradas',
        '.swiper-procuradas .swiper-pagination',
        '.swiper-procuradas'
      );

      swipers.retro = SwiperConfig.criar(
        '.swiper-retro',
        '.swiper-retro .swiper-pagination',
        '.swiper-retro'
      );

      // Inicializar componentes
      Filtros.init();
      Lightbox.init();
      Toast.init();
      BotaoTopo.init();
      LoadingScreen.init();
      ResizeManager.init();

      console.log('🛸 UFO Store V4 carregado com sucesso!');
      console.log('📊 Produtos carregados:', {
        'Pronta Entrega': PRODUTOS.prontaEntrega.length,
        'Mais Procuradas': PRODUTOS.maisProcuradas.length,
        'Clássicas Retrô': PRODUTOS.retro.length,
        'Total': PRODUTOS.prontaEntrega.length + PRODUTOS.maisProcuradas.length + PRODUTOS.retro.length
      });
    });
  }
};

// ═══════════════════════════════════════════════════════════
// 🚀 INICIAR APLICAÇÃO
// ═══════════════════════════════════════════════════════════
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}