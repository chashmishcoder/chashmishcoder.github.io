// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const projectCards = document.querySelectorAll('.project-card');
let overlay;

// Create overlay for mobile menu
function createOverlay() {
    overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
        closeMenu();
    });
}

// Function to close the mobile menu
function closeMenu() {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// Function to open the mobile menu
function openMenu() {
    navLinks.classList.add('active');
    hamburger.classList.add('active');
    if (overlay) {
        overlay.classList.add('active');
    }
}

// Function to check if we're in mobile view
function isMobileView() {
    return window.getComputedStyle(hamburger).display !== 'none';
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 17, 24, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.backgroundColor = 'var(--navbar-bg)';
        navbar.style.boxShadow = 'none';
    }
});

// Add animation to project cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Animate skill progress bars when they come into view
function animateSkillBars() {
    const skillSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.skill-progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (skillSection) {
        observer.observe(skillSection);
    }
}

// Project Carousel Functionality
function setupProjectCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let currentIndex = 0;
    
    // Initialize the carousel
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Event listeners for navigation arrows
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
            showSlide(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
            showSlide(newIndex);
        });
    }
    
    // Event listeners for dot indicators
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Initialize to first slide
    showSlide(0);
}

// Initialize everything once DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu initialization
    createOverlay();
    
    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link ONLY in mobile view
                if (isMobileView()) {
                    closeMenu();
                }
            }
        });
    });

    // Tagline typing animation
    const tagline = document.querySelector('.tagline');
    
    if (tagline) {
        // Store the original text
        const originalText = tagline.textContent;
        
        // Clear the text
        tagline.textContent = '';
        
        // Add a blinking cursor element
        const cursor = document.createElement('span');
        cursor.classList.add('cursor');
        cursor.innerHTML = '|';
        cursor.style.animation = 'blink 1s infinite';
        
        // Create a style for the blinking cursor
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .cursor {
                color: var(--secondary-color);
                font-weight: bold;
                margin-left: 2px;
            }
        `;
        document.head.appendChild(style);
        
        // Function to simulate typing
        function typeText(text, element, i, callback) {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                setTimeout(function() {
                    typeText(text, element, i + 1, callback);
                }, 50); // typing speed
            } else if (callback) {
                callback();
            }
        }
        
        // Start typing after a short delay
        setTimeout(() => {
            typeText(originalText, tagline, 0, () => {
                tagline.appendChild(cursor);
            });
        }, 1000);
    }
    
    // Add subtle parallax effect to hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (hero) {
            hero.style.backgroundPosition = `center ${scroll * 0.5}px`;
        }
    });

    // Initialize skill bars animation
    animateSkillBars();
    
    // Initialize project carousel
    setupProjectCarousel();
}); 