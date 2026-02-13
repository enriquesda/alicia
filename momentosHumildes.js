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
// ANIMACIONES DE TARJETAS DE MOMENTO
// ===========================
const momentoCards = document.querySelectorAll('.momento-card');

momentoCards.forEach((card, index) => {
    // Dirección de la animación dependiendo si es reverse o no
    const isReverse = card.classList.contains('reverse');
    const xValue = isReverse ? 100 : -100;

    // Animación de entrada de la tarjeta completa
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: getTriggerStart('top 85%', 'top 90%'),
        },
        duration: 1.2,
        x: xValue,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.1
    });

    // Animación de la imagen
    const imagen = card.querySelector('.momento-image img');
    gsap.from(imagen, {
        scrollTrigger: {
            trigger: card,
            start: getTriggerStart('top 85%', 'top 90%'),
        },
        duration: 1.5,
        scale: 1.3,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });

    // Animación del contenido
    const titulo = card.querySelector('.momento-content h3');
    const texto = card.querySelector('.momento-content p');

    gsap.from(titulo, {
        scrollTrigger: {
            trigger: card,
            start: getTriggerStart('top 85%', 'top 90%'),
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.4
    });

    gsap.from(texto, {
        scrollTrigger: {
            trigger: card,
            start: getTriggerStart('top 85%', 'top 90%'),
        },
        duration: 1,
        y: 20,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.5
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
function createFloatingEmojis() {
    const container = document.body;
    const emojis = ['😂', '🙈', '😅', '💕', '🤣', '😊'];

    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = '100vh';
        emoji.style.fontSize = (Math.random() * 20 + 15) + 'px';
        emoji.style.opacity = '0';
        emoji.style.zIndex = '999';
        emoji.style.pointerEvents = 'none';

        container.appendChild(emoji);

        gsap.to(emoji, {
            y: -window.innerHeight - 100,
            x: (Math.random() - 0.5) * 100,
            opacity: 0.6,
            duration: Math.random() * 3 + 4,
            ease: 'none',
            onComplete: () => {
                emoji.remove();
            }
        });

        gsap.to(emoji, {
            opacity: 0,
            duration: 1,
            delay: Math.random() * 2 + 3
        });

    }, 3500);
}

// Iniciar partículas flotantes
createFloatingEmojis();

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

console.log('😂 Página de momentos humildes cargada con amor y risas ❤️');
