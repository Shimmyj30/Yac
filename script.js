// ==========================================
// Mobile Menu Toggle
// ==========================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navList.classList.remove('active');
    });
});

// ==========================================
// Active Navigation Link on Scroll
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ==========================================
// Header Background on Scroll
// ==========================================
const header = document.querySelector('.header');

function handleHeaderScroll() {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 30px rgba(91, 138, 114, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(91, 138, 114, 0.1)';
    }
}

window.addEventListener('scroll', handleHeaderScroll);

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Scroll Reveal Animation
// ==========================================
function revealOnScroll() {
    const elements = document.querySelectorAll('.card, .benefit, .approach-card, .credentials');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
document.querySelectorAll('.card, .benefit, .approach-card, .credentials').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==========================================
// Cards Hover Effect Enhancement
// ==========================================
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.card-icon').style.transform = 'scale(1.1)';
        this.querySelector('.card-icon').style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.card-icon').style.transform = 'scale(1)';
    });
});

// ==========================================
// WhatsApp Button Click Tracking (Optional)
// ==========================================
document.querySelector('.whatsapp-btn')?.addEventListener('click', function() {
    // You can add analytics tracking here
    console.log('WhatsApp button clicked');
});

// ==========================================
// Parallax Effect for Hero Section
// ==========================================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active state
    setActiveLink();
    
    // Trigger reveal animation for visible elements
    revealOnScroll();
    
    console.log('Website loaded successfully! 🌿');
});
