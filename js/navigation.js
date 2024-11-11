export function initializeNavigation() {
    const allLinks = document.querySelectorAll('.navigation .left-links a, .logo');
    
    allLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Menu navigation functionality
    const menuLinks = document.querySelectorAll('.menu-nav a');
    const menuSections = document.querySelectorAll('.menu-section');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            menuLinks.forEach(l => l.classList.remove('active'));
            menuSections.forEach(section => section.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href').slice(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetId === '#home') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}