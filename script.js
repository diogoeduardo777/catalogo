// ═══════════════════════════════════════════════════════════
// 🛸 UFO STORE - SISTEMA OTIMIZADO V3
// ═══════════════════════════════════════════════════════════

// ┌─────────────────────────────────────────────────────────┐
// │ CONFIGURAÇÕES GLOBAIS                                   │
// └─────────────────────────────────────────────────────────┘
const CONFIG = {
  whatsapp: '5554999300593',
  instagram: 'https://www.instagram.com/ufo_store_rs?igsh=MWJlbnk2NG5vbTFuMg==',
  animacao: {
    cardDelay: 30,
    scrollThreshold: 300,
    toastDuration: 3000,
    loadingDelay: 500
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
  ]
};

// ┌─────────────────────────────────────────────────────────┐
// │ UTILITÁRIOS                                             │
// └─────────────────────────────────────────────────────────┘
const Utils = {
  // Debounce para otimizar eventos
  debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle para scroll
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

  // Gerar link do WhatsApp
  gerarWhatsAppLink(produto) {
    const imagemUrl = `${window.location.origin}/${produto.imagem}`;
    const mensagem = `Olá! Tenho interesse na camisa do *${produto.nome}*\n\n📸 Foto: ${imagemUrl}\n👕 Descrição: ${produto.descricao}\n📏 Tamanhos disponíveis: ${produto.tamanhos}`;
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ COMPONENTES - PRODUTO CARD                              │
// └─────────────────────────────────────────────────────────┘
const ProdutoCard = {
  // Criar badge baseado na categoria
  criarBadge(categoria) {
    const badges = {
      pronta: '<span class="badge badge-pronta">✓ Pronta Entrega</span>',
      procurada: '<span class="badge badge-procurada">🔥 Mais Procuradas</span>'
    };
    return badges[categoria] || '';
  },

  // Criar HTML do card
  criar(produto) {
    const badge = this.criarBadge(produto.categoria);
    const whatsappLink = Utils.gerarWhatsAppLink(produto);

    return `
      <div class="produto-card"
           data-nome="${produto.nome.toLowerCase()}"
           data-categoria="${produto.categoria}"
           data-pais="${produto.pais}">
        <div class="produto-imagem" onclick="Lightbox.abrir('${produto.imagem}')">
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
               onclick="Toast.mostrar('Abrindo WhatsApp... 💬')">
              💬 Pedir
            </a>
          </div>
        </div>
      </div>
    `;
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ RENDERIZAÇÃO DE PRODUTOS                                │
// └─────────────────────────────────────────────────────────┘
const Renderizador = {
  animar() {
    requestAnimationFrame(() => {
      document.querySelectorAll('.produto-card').forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * CONFIG.animacao.cardDelay);
      });
    });
  },

  renderizar() {
    const wrapperPronta = document.getElementById('wrapperPronta');
    const wrapperProcuradas = document.getElementById('wrapperProcuradas');

    wrapperPronta.innerHTML = PRODUTOS.prontaEntrega
      .map(p => `<div class="swiper-slide">${ProdutoCard.criar(p)}</div>`)
      .join('');

    wrapperProcuradas.innerHTML = PRODUTOS.maisProcuradas
      .map(p => `<div class="swiper-slide">${ProdutoCard.criar(p)}</div>`)
      .join('');

    setTimeout(() => this.animar(), 100);
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ SWIPER - CONFIGURAÇÃO E INICIALIZAÇÃO                   │
// └─────────────────────────────────────────────────────────┘
const SwiperConfig = {
  base: {
    loop: true,
    speed: 400,
    loopAdditionalSlides: 2,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    observer: true,
    observeParents: true,
    
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2
    },
    
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 15, centeredSlides: false },
      480: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 25 },
      1024: { slidesPerView: 4, spaceBetween: 30 }
    },
    
    resistanceRatio: 0.85,
    touchRatio: 1,
    threshold: 5,
    preventInteractionOnTransition: true,
    
    on: {
      init() { this.update(); },
      resize() { this.update(); }
    }
  },

  criar(selector, paginationSelector, navPrefix) {
    return new Swiper(selector, {
      ...this.base,
      pagination: { 
        el: paginationSelector,
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
      },
      navigation: {
        prevEl: `${navPrefix} .swiper-button-prev`,
        nextEl: `${navPrefix} .swiper-button-next`
      }
    });
  }
};

// Instâncias do Swiper
let swiperPronta, swiperProcuradas;

// ┌─────────────────────────────────────────────────────────┐
// │ SISTEMA DE FILTROS                                      │
// └─────────────────────────────────────────────────────────┘
const Filtros = {
  elementos: {
    busca: null,
    categoria: null,
    pais: null
  },

  init() {
    this.elementos.busca = document.getElementById('busca');
    this.elementos.categoria = document.getElementById('filtroCategoria');
    this.elementos.pais = document.getElementById('filtroPais');

    this.elementos.busca.addEventListener('input', 
      Utils.debounce(() => this.aplicar(), 250)
    );
    this.elementos.categoria.addEventListener('change', () => this.aplicar());
    this.elementos.pais.addEventListener('change', () => this.aplicar());
  },

  aplicar() {
    const termo = this.elementos.busca.value.toLowerCase();
    const categoria = this.elementos.categoria.value;
    const pais = this.elementos.pais.value;
    
    let contadores = { pronta: 0, procurada: 0 };

    document.querySelectorAll('.produto-card').forEach(card => {
      const match = {
        busca: card.dataset.nome.includes(termo),
        categoria: categoria === 'todos' || card.dataset.categoria === categoria,
        pais: pais === 'todos' || card.dataset.pais === pais
      };

      const mostrar = match.busca && match.categoria && match.pais;
      const slide = card.closest('.swiper-slide');
      
      slide.style.display = mostrar ? 'block' : 'none';
      
      if (mostrar) {
        contadores[card.dataset.categoria]++;
      }
    });

    this.atualizarSecoes(categoria, contadores);
    this.atualizarSwipers();
  },

  atualizarSecoes(categoria, contadores) {
    document.getElementById('secaoPronta').style.display =
      (categoria === 'todos' || categoria === 'pronta') && contadores.pronta > 0
        ? 'block' : 'none';

    document.getElementById('secaoProcuradas').style.display =
      (categoria === 'todos' || categoria === 'procurada') && contadores.procurada > 0
        ? 'block' : 'none';
  },

  atualizarSwipers() {
    requestAnimationFrame(() => {
      setTimeout(() => {
        swiperPronta?.update();
        swiperProcuradas?.update();
      }, 50);
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
    document.body.style.overflow = 'auto';
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
      Utils.throttle(() => this.toggle(), 100)
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ LAZY LOADING DE IMAGENS                                 │
// └─────────────────────────────────────────────────────────┘
const LazyLoad = {
  init() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
          }
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });

    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ LOADING SCREEN                                          │
// └─────────────────────────────────────────────────────────┘
const LoadingScreen = {
  init() {
    window.addEventListener('load', () => {
      const loading = document.getElementById('loading-screen');
      
      setTimeout(() => {
        loading.classList.add('fade-out');
        setTimeout(() => {
          loading.style.display = 'none';
        }, 500);
      }, CONFIG.animacao.loadingDelay);
    });
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ GERENCIADOR DE REDIMENSIONAMENTO                        │
// └─────────────────────────────────────────────────────────┘
const ResizeManager = {
  timer: null,

  init() {
    window.addEventListener('resize', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        swiperPronta?.update();
        swiperProcuradas?.update();
      }, 250);
    });
  }
};

// ┌─────────────────────────────────────────────────────────┐
// │ INICIALIZAÇÃO DO SISTEMA                                │
// └─────────────────────────────────────────────────────────┘
const App = {
  init() {
    // Renderizar produtos
    Renderizador.renderizar();

    // Inicializar Swipers
    swiperPronta = SwiperConfig.criar(
      '.swiper-pronta',
      '.swiper-pronta .swiper-pagination',
      '.swiper-pronta'
    );

    swiperProcuradas = SwiperConfig.criar(
      '.swiper-procuradas',
      '.swiper-procuradas .swiper-pagination',
      '.swiper-procuradas'
    );

    // Inicializar componentes
    Filtros.init();
    Lightbox.init();
    Toast.init();
    BotaoTopo.init();
    LazyLoad.init();
    LoadingScreen.init();
    ResizeManager.init();

    console.log('🛸 UFO Store carregado com sucesso!');
  }
};

// ═══════════════════════════════════════════════════════════
// 🚀 INICIAR APLICAÇÃO
// ═══════════════════════════════════════════════════════════
App.init();