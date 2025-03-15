// Neural Network Visualization for Entire Site

document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js for neural network background with optimized site-wide configuration
    particlesJS('neural-network-viz', {
        "particles": {
            "number": {
                "value": 90, // Slightly increased for more connections
                "density": {
                    "enable": true,
                    "value_area": 1200
                }
            },
            "color": {
                "value": ["#4683F7", "#00E4FF", "#7122FA", "#01B8A6"] // Multi-color particles for futuristic look
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.8,
                    "opacity_min": 0.3,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1.5,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 180,
                "color": "#00E4FF", // Bright cyan color for connections
                "opacity": 0.5,
                "width": 1.2
            },
            "move": {
                "enable": true,
                "speed": 1.5, // Slightly faster for more dynamic movement
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true, // Enable hover effect for interactivity
                    "mode": "repulse" // Particles move away from cursor
                },
                "onclick": {
                    "enable": true, // Enable click effect
                    "mode": "push" // Add particles on click
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 180,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 150,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Add section transition animations with optimized handling
    const sections = document.querySelectorAll('section');
    
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Slightly adjust the trigger point
    };
    
    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('page-transition', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.classList.add('page-transition');
            sectionObserver.observe(section);
        }
    });

    // Interactive Photo Effect
    const profilePhoto = document.querySelector('.profile-photo');
    
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', () => {
            profilePhoto.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        profilePhoto.addEventListener('mouseleave', () => {
            profilePhoto.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Enhanced parallax effect to the neural network when scrolling
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const networkBg = document.querySelector('.neural-network-bg');
        
        if (networkBg) {
            // Apply enhanced parallax movement to the particles canvas
            networkBg.style.transform = `translateY(${scrollPosition * 0.05}px) translateX(${scrollPosition * 0.01}px)`;
        }
    });
}); 