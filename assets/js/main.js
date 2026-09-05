// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    // Hamburger Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth Scrolling für Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Resize Handler
window.addEventListener('resize', function() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
    }
});
