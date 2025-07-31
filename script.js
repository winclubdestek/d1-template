// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Logo Click Ripple Effect
    const logo = document.querySelector('.header .logo');
    const logoImg = document.querySelector('.header .logo .site-logo-img');
    
    if (logo) {
        logo.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('logo-ripple');
            
            const rect = logo.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            logo.appendChild(ripple);
            
            // Logo shake animation
            logoImg.style.animation = 'logoShake 0.6s ease-in-out';
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
                logoImg.style.animation = '';
            }, 600);
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Logo hover glow effect
        logo.addEventListener('mouseenter', function() {
            logoImg.style.filter = `
                drop-shadow(0 8px 25px rgba(255, 215, 0, 0.6))
                brightness(1.2) 
                contrast(1.2)
                saturate(1.3)
            `;
        });
        
        logo.addEventListener('mouseleave', function() {
            logoImg.style.filter = 'drop-shadow(0 4px 15px rgba(255, 215, 0, 0.3))';
        });
    }

    // Section Header Click Effect
    const sectionHeaders = document.querySelectorAll('.section-header h2');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Create sparkle effect
            const sparkles = document.createElement('div');
            sparkles.classList.add('header-sparkles');
            sparkles.innerHTML = '✨💫⭐';
            
            const rect = header.getBoundingClientRect();
            sparkles.style.position = 'fixed';
            sparkles.style.left = (rect.left + rect.width / 2 - 25) + 'px';
            sparkles.style.top = (rect.top - 20) + 'px';
            sparkles.style.fontSize = '20px';
            sparkles.style.pointerEvents = 'none';
            sparkles.style.zIndex = '1000';
            sparkles.style.animation = 'headerSparkle 1s ease-out forwards';
            
            document.body.appendChild(sparkles);
            
            // Remove sparkles after animation
            setTimeout(() => {
                sparkles.remove();
            }, 1000);
            
            // Header pulse effect
            header.style.animation = 'headerPulse 0.6s ease-out';
            setTimeout(() => {
                header.style.animation = '';
            }, 600);
        });
    });

    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    const cards = document.querySelectorAll('.site-card, .bonus-card, .feature');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #000000, #1a1a1a, #2a2a2a)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Counter animation for hero stats
    const counters = document.querySelectorAll('.stat-number');
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target') || counter.textContent.replace(/\D/g, ''));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (counter.textContent.includes('₺')) {
                        counter.textContent = `₺${Math.ceil(current)}M+`;
                    } else if (counter.textContent.includes('+')) {
                        counter.textContent = `${Math.ceil(current)}+`;
                    } else {
                        counter.textContent = Math.ceil(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = counter.textContent; // Keep original format
                }
            };
            updateCounter();
        });
    };

    // Start counter animation when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    });

    const heroSection = document.querySelector('.hero-stats');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Button click effects
    const buttons = document.querySelectorAll('.site-button, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-background');
        if (parallax) {
            const speed = scrolled * -0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Dynamic site cards hover effect
    const siteCards = document.querySelectorAll('.site-card');
    siteCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect to nearby cards
            siteCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove glow effect
            siteCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });

    // Loading screen (optional)
    const loadingScreen = document.createElement('div');
    loadingScreen.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #000000, #1a1a1a);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        ">
            <div style="text-align: center;">
                <div style="
                    width: 50px;
                    height: 50px;
                    border: 3px solid #FFD700;
                    border-top: 3px solid transparent;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 20px;
                "></div>
                <h2 style="color: #FFD700; font-family: 'Roboto', sans-serif;">WinClub Yükleniyor...</h2>
            </div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        </style>
    `;

    document.body.appendChild(loadingScreen);

    // Remove loading screen after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });

    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const header = document.querySelector('.header .container');
        const nav = document.querySelector('.nav');
        
        if (window.innerWidth <= 768) {
            const menuButton = document.createElement('button');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
            menuButton.style.cssText = `
                background: var(--primary-gold);
                border: none;
                color: var(--black);
                font-size: 1.2rem;
                padding: 0.5rem;
                border-radius: 5px;
                cursor: pointer;
            `;
            
            menuButton.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'rgba(0, 0, 0, 0.95)';
                nav.style.flexDirection = 'column';
                nav.style.padding = '1rem';
            });
            
            if (!document.querySelector('.mobile-menu-btn')) {
                menuButton.classList.add('mobile-menu-btn');
                header.appendChild(menuButton);
            }
        }
    };

    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();

    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-gold);
        border: none;
        border-radius: 50%;
        color: var(--black);
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
    `;

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.transform = 'scale(1)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.transform = 'scale(0.8)';
        }
    });

    // Console welcome message
    console.log(`
    %c🏆 WinClub - Premium Bahis Platformu 🏆
    %cGeliştirici: WinClub Team
    %cTema: Siyah & Altın Sarısı
    %cDurum: Aktif ve Hazır!
    `, 
    'color: #FFD700; font-size: 16px; font-weight: bold;',
    'color: #ffffff; font-size: 12px;',
    'color: #FFD700; font-size: 12px;',
    'color: #00ff00; font-size: 12px; font-weight: bold;'
    );
});
