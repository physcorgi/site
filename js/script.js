/**
 * CorgPhish Website Scripts
 * Author: CorgPhish Team
 * Version: 1.0.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initSmoothScroll();
    initAnimations();
    initMobileMenu();
});

/**
 * Initialize navigation
 */
function initNavigation() {
    // Highlight current page in navigation
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== '#') {
            link.classList.add('active');
        } else if (currentLocation === '/' && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });

    // Scroll event to change header style
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize animations on scroll
 */
function initAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in');
    
    function checkVisibility() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // Add animation classes
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.classList.add('slide-up');
        step.style.animationDelay = `${index * 0.2}s`;
    });
    
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.classList.add('fade-in');
        member.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Check visibility on page load and scroll
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);
}

/**
 * Mobile navigation menu
 */
function initMobileMenu() {
    // Используем существующую кнопку .nav-toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('nav').classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
}

// Удаляем функцию addMobileMenuStyles, так как эти стили уже добавлены в style.css 