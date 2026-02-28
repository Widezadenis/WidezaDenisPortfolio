
// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon') || document.querySelector('.fa-bars'); // Try both
let navbar = document.querySelector('.navbar');

console.log('Menu icon found:', menuIcon); // Check console to verify
console.log('Navbar found:', navbar);

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        console.log('Menu clicked!'); // Check if this appears
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle('active');
        console.log('Navbar active class:', navbar.classList.contains('active')); // Check if class toggles
    }
} else {
    console.error('Could not find menu icon or navbar!');
}

// Scroll link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Make sure menuIcon and navbar exist before trying to modify them
    if (menuIcon && navbar) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

// Check if ScrollReveal is loaded
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({ 
        distance: '80px',
        duration: 2000, 
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .tools-container, .projects-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, about-content', { origin: 'right' });
}

// Check if Typed is loaded
if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: ['Data Analyst', 'Data Strategist', 'BI Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
}