document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Reveal Animations ---
    // Using Intersection Observer to trigger the .active class on .scroll-reveal elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    // --- Navbar Scroll Effect ---
    // Change background of navbar when scrolling down
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-slate-900/90', 'backdrop-blur-md', 'border-b', 'border-slate-800', 'py-4');
            navbar.classList.remove('py-6');
        } else {
            navbar.classList.remove('bg-slate-900/90', 'backdrop-blur-md', 'border-b', 'border-slate-800', 'py-4');
            navbar.classList.add('py-6');
        }
    });

    // --- Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        // Small timeout to allow display:block to apply before opacity transition
        if (!menu.classList.contains('hidden')) {
            setTimeout(() => {
                menu.classList.add('open');
            }, 10);
        } else {
            menu.classList.remove('open');
        }
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            setTimeout(() => {
                menu.classList.add('hidden');
            }, 300);
        });
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});