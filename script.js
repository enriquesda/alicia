// ===========================
// CONFIGURACIÓN GSAP
// ===========================
gsap.registerPlugin(ScrollTrigger);

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
// ANIMACIÓN HERO
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

gsap.from('.scroll-indicator', {
    duration: 1,
    y: -30,
    opacity: 0,
    ease: 'power2.out',
    delay: 1.3
});

// ===========================
// ANIMACIÓN SECCIÓN NOSOTROS
// ===========================
gsap.from('.intro-text p', {
    scrollTrigger: {
        trigger: '.section-nosotros',
        start: 'top 80%',
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
});

// Animación de las tarjetas de personas
const personaCards = document.querySelectorAll('.persona-card');
personaCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        duration: 1.2,
        y: 100,
        opacity: 0,
        rotation: index % 2 === 0 ? -5 : 5,
        ease: 'power4.out',
        delay: index * 0.2
    });

    // Efecto parallax en las imágenes
    gsap.to(card.querySelector('.persona-image img'), {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -50,
        ease: 'none'
    });
});

gsap.from('.subtitle-intro', {
    scrollTrigger: {
        trigger: '.subtitle-intro',
        start: 'top 85%',
    },
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    ease: 'elastic.out(1, 0.5)'
});

// ===========================
// ANIMACIÓN SECCIÓN INICIO
// ===========================
gsap.from('.section-inicio .section-title', {
    scrollTrigger: {
        trigger: '.section-inicio',
        start: 'top 75%',
    },
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.inicio-image', {
    scrollTrigger: {
        trigger: '.inicio-image',
        start: 'top 80%',
    },
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.inicio-text', {
    scrollTrigger: {
        trigger: '.inicio-text',
        start: 'top 80%',
    },
    duration: 1.2,
    x: -80,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

gsap.from('.inicio-map', {
    scrollTrigger: {
        trigger: '.inicio-map',
        start: 'top 80%',
    },
    duration: 1.2,
    x: 80,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

// ===========================
// ANIMACIÓN HISTORIA - AÑOS
// ===========================

// Animación del título principal de Historia
gsap.from('.section-historia .main-title', {
    scrollTrigger: {
        trigger: '.section-historia',
        start: 'top 70%',
    },
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    y: 50,
    ease: 'power4.out'
});

const yearSections = document.querySelectorAll('.year-section');

yearSections.forEach((yearSection, index) => {

    // Animación del header del año
    const yearHeader = yearSection.querySelector('.year-header');
    const yearNumber = yearSection.querySelector('.year-number');
    const yearDescription = yearSection.querySelector('.year-description');

    // Número del año con efecto dramático
    gsap.from(yearNumber, {
        scrollTrigger: {
            trigger: yearHeader,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
        },
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        rotation: -10,
        ease: 'elastic.out(1, 0.6)'
    });

    // Descripción del año
    gsap.from(yearDescription, {
        scrollTrigger: {
            trigger: yearHeader,
            start: 'top 70%',
        },
        duration: 1.2,
        x: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });

    // Efecto de desaparición del header cuando aparecen las tarjetas
    const firstMonthCard = yearSection.querySelector('.month-card');
    if (firstMonthCard) {
        ScrollTrigger.create({
            trigger: firstMonthCard,
            start: 'top 35%', // Ajustado para que el header permanezca visible más tiempo
            end: 'top 15%',
            onEnter: () => {
                gsap.to(yearHeader, {
                    opacity: 0,
                    y: -50,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            },
            onLeaveBack: () => {
                gsap.to(yearHeader, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        });
    }

    // Efecto de pin en la sección del año
    ScrollTrigger.create({
        trigger: yearSection,
        start: 'top 100px',
        end: 'bottom 100px',
        pin: yearNumber,
        pinSpacing: false,
        onEnter: () => {
            gsap.to(yearNumber, {
                scale: 0.7,
                duration: 0.5,
                ease: 'power2.out'
            });
        },
        onLeave: () => {
            gsap.to(yearNumber, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        },
        onEnterBack: () => {
            gsap.to(yearNumber, {
                scale: 0.7,
                duration: 0.5,
                ease: 'power2.out'
            });
        },
        onLeaveBack: () => {
            gsap.to(yearNumber, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    });

    // Animación de las tarjetas de meses
    const monthCards = yearSection.querySelectorAll('.month-card');

    monthCards.forEach((card, cardIndex) => {
        // Animación de entrada con trigger ajustado
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 98%', // Ajustado a 98% para asegurar que la última tarjeta se vea
            },
            duration: 1,
            y: 80,
            opacity: 0,
            scale: 0.9,
            rotation: cardIndex % 2 === 0 ? -3 : 3,
            ease: 'back.out(1.7)',
            delay: (cardIndex % 3) * 0.15
        });

        // Efecto parallax en las imágenes
        const cardImage = card.querySelector('.month-image img');
        if (cardImage) {
            gsap.to(cardImage, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: -30,
                ease: 'none'
            });
        }

        // Animación del título del mes
        const monthTitle = card.querySelector('.month-content h3');
        gsap.from(monthTitle, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            },
            duration: 0.8,
            x: -30,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.3
        });

        // Animación del contenido
        const monthText = card.querySelector('.month-content p');
        gsap.from(monthText, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            },
            duration: 0.8,
            y: 20,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.5
        });

        // Eventos de mouse eliminados - solo se usa hover CSS
    });
});

// ===========================
// ANIMACIÓN ESPECIAL PARA LA TARJETA DESTACADA (2026)
// ===========================
const highlightCard = document.querySelector('.month-card.highlight');
if (highlightCard) {
    // Animación de entrada especial
    gsap.from(highlightCard, {
        scrollTrigger: {
            trigger: highlightCard,
            start: 'top 85%',
        },
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        rotation: 360,
        ease: 'elastic.out(1, 0.5)'
    });

    // Pulso continuo
    gsap.to(highlightCard, {
        scale: 1.03,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Animación del corazón
    const heartIcon = highlightCard.querySelector('.heart-icon');
    if (heartIcon) {
        gsap.to(heartIcon, {
            scale: 1.2,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }
}

// ===========================
// ANIMACIÓN DEL FOOTER
// ===========================
gsap.from('footer .footer-content', {
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
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
    const heartSymbols = ['❤', '💕', '💖', '💗', '💓', '💝'];

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

    }, 3000);
}

// Iniciar partículas flotantes
createFloatingHearts();

// ===========================
// NAVEGACIÓN SUAVE
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: target,
                    offsetY: 100
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// ===========================
// EFECTO CURSOR PERSONALIZADO (CORAZONES)
// ===========================
let cursorHearts = [];
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) { // Solo crear corazones ocasionalmente
        const heart = document.createElement('div');
        heart.textContent = '❤';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '12px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.color = '#ff6b9d';

        document.body.appendChild(heart);

        gsap.to(heart, {
            y: -50,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out',
            onComplete: () => {
                heart.remove();
            }
        });
    }
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
});

// ===========================
// REFRESH SCROLL TRIGGER
// ===========================
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// ===========================
// EFECTOS ADICIONALES EN TARJETAS
// ===========================
document.querySelectorAll('.month-card').forEach(card => {
    card.addEventListener('click', () => {
        // Efecto de "like" al hacer click
        const heart = document.createElement('div');
        heart.textContent = '❤';
        heart.style.position = 'absolute';
        heart.style.top = '50%';
        heart.style.left = '50%';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.fontSize = '80px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.color = '#ff6b9d';

        card.style.position = 'relative';
        card.appendChild(heart);

        gsap.to(heart, {
            y: -100,
            scale: 2,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
                heart.remove();
            }
        });
    });
});

// ===========================
// PARALLAX EN BACKGROUNDS
// ===========================
gsap.utils.toArray('.year-section').forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        backgroundPosition: '50% 100px',
        ease: 'none'
    });
});

console.log('💕 Animaciones GSAP cargadas con amor 💕');
