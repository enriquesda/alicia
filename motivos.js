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
// ANIMACIONES DE TARJETAS DE MOTIVO
// ===========================
const motivoCards = document.querySelectorAll('.motivo-card');

motivoCards.forEach((card, index) => {
    // Animación de entrada de la tarjeta
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: getTriggerStart('top 85%', 'top 90%'),
        },
        duration: 1.2,
        y: 100,
        opacity: 0,
        scale: 0.9,
        ease: 'power4.out',
        delay: index * 0.1
    });

    // Animación del número
    const numero = card.querySelector('.motivo-numero');
    gsap.from(numero, {
        scrollTrigger: {
            trigger: card,
            start: getTriggerStart('top 85%', 'top 90%'),
        },
        duration: 1,
        scale: 0,
        rotation: 360,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.2
    });

    // Animación del contenido
    const titulo = card.querySelector('.motivo-content h3');
    const texto = card.querySelector('.motivo-content p');

    gsap.from(titulo, {
        scrollTrigger: {
            trigger: card,
            start: getTriggerStart('top 85%', 'top 90%'),
        },
        duration: 1,
        x: -50,
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
        x: -30,
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
// PARTÍCULAS FLOTANTES ROMÁNTICAS
// ===========================
function createFloatingHearts() {
    const container = document.body;
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 25 + 20) + 'px';
        heart.style.opacity = '0';
        heart.style.zIndex = '999';
        heart.style.pointerEvents = 'none';

        container.appendChild(heart);

        gsap.to(heart, {
            y: -window.innerHeight - 100,
            x: (Math.random() - 0.5) * 150,
            opacity: 0.8,
            duration: Math.random() * 3 + 5,
            ease: 'none',
            onComplete: () => {
                heart.remove();
            }
        });

        // Rotación sutil
        gsap.to(heart, {
            rotation: (Math.random() - 0.5) * 360,
            duration: Math.random() * 2 + 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        gsap.to(heart, {
            opacity: 0,
            duration: 1,
            delay: Math.random() * 2 + 4
        });

    }, 2500);
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

console.log('❤️ Página de motivos cargada con todo mi amor 💕');
