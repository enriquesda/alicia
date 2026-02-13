// ===========================
// CONFIGURACIÓN GSAP
// ===========================
gsap.registerPlugin(ScrollTrigger);

// ===========================
// HELPER PARA TRIGGERS RESPONSIVE
// ===========================
function getTriggerStart(desktopValue, mobileValue) {
    const isMobile = window.innerWidth <= 768;
    return isMobile ? mobileValue : desktopValue;
}

// ===========================
// NAVEGACIÓN CON SCROLL
// ===========================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===========================
// ANIMACIONES HERO
// ===========================
gsap.from('.hero-title', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.3
});

gsap.from('.hero-subtitle', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
});

// ===========================
// FUNCIONALIDAD CARRUSEL
// ===========================
class Carousel {
    constructor(element) {
        this.carousel = element;
        this.images = element.querySelectorAll('.carousel-images img');
        this.prevBtn = element.querySelector('.carousel-btn.prev');
        this.nextBtn = element.querySelector('.carousel-btn.next');
        this.indicatorsContainer = element.querySelector('.carousel-indicators');
        this.currentIndex = 0;
        this.totalImages = this.images.length;

        this.init();
    }

    init() {
        // Crear indicadores
        this.createIndicators();

        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Auto-play (opcional)
        this.startAutoPlay();

        // Pausar auto-play al hacer hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    createIndicators() {
        for (let i = 0; i < this.totalImages; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (i === 0) indicator.classList.add('active');

            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicatorsContainer.appendChild(indicator);
        }
        this.indicators = this.indicatorsContainer.querySelectorAll('.carousel-indicator');
    }

    goToSlide(index) {
        // Remover active de la imagen actual
        this.images[this.currentIndex].classList.remove('active');
        this.indicators[this.currentIndex].classList.remove('active');

        // Actualizar índice
        this.currentIndex = index;

        // Añadir active a la nueva imagen
        this.images[this.currentIndex].classList.add('active');
        this.indicators[this.currentIndex].classList.add('active');
    }

    next() {
        const nextIndex = (this.currentIndex + 1) % this.totalImages;
        this.goToSlide(nextIndex);
    }

    prev() {
        const prevIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
        this.goToSlide(prevIndex);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, 5000); // Cambiar cada 5 segundos
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Inicializar todos los carruseles
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
});

// ===========================
// ANIMACIONES DE TARJETAS DE VIAJE
// ===========================
const viajeCards = document.querySelectorAll('.viaje-card');

viajeCards.forEach((card, index) => {
    // Animación de entrada - ajustada para aparecer antes
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: getTriggerStart('top 85%', 'top 90%'), // Ajustado para aparecer antes
        },
        duration: 1.2,
        y: 100,
        opacity: 0,
        scale: 0.95,
        ease: 'power4.out',
        delay: index * 0.1
    });
});

// ===========================
// ANIMACIÓN FOOTER
// ===========================
gsap.from('footer .footer-content', {
    scrollTrigger: {
        trigger: 'footer',
        start: getTriggerStart('top 90%', 'top 95%'),
    },
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

// ===========================
// PARTÍCULAS FLOTANTES
// ===========================
function createFloatingHearts() {
    const container = document.body;
    const heartSymbols = ['✈️', '🌍', '🗺️', '📸', '❤️'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = '0';
        heart.style.zIndex = '999';
        heart.style.pointerEvents = 'none';

        container.appendChild(heart);

        gsap.to(heart, {
            y: -window.innerHeight - 100,
            x: (Math.random() - 0.5) * 100,
            opacity: 0.6,
            duration: Math.random() * 3 + 4,
            ease: 'none',
            onComplete: () => {
                heart.remove();
            }
        });

        gsap.to(heart, {
            opacity: 0,
            duration: 1,
            delay: Math.random() * 2 + 3
        });

    }, 4000);
}

// Iniciar partículas flotantes
createFloatingHearts();

// ===========================
// REFRESH EN CAMBIO DE TAMAÑO
// ===========================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ===========================
// ANIMACIÓN DE CARGA INICIAL
// ===========================
window.addEventListener('load', () => {
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
    ScrollTrigger.refresh();
});

console.log('✈️ Página de viajes cargada con amor ❤️');
