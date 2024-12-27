document.addEventListener('DOMContentLoaded', function() {
    // Select both navigation links and logo
    const allLinks = document.querySelectorAll('.navbar .nav-links a, .logo');
    
    allLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetId === '#home') {
            // For home section, scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // For other sections
            window.scrollTo({
                top: targetSection.offsetTop - 100, // Adjust this value based on your header height
                behavior: 'smooth'
            });
        }
    }
});



  function login() {
            var email = document.querySelector('.login input[type="email"]').value;
            var password = document.querySelector('.login input[type="password"]').value;

            var correctEmail = "group6@presentation.com";
            var correctPassword = "123";

            if (email === correctEmail && password === correctPassword) {
                alert("You have logged in successfully!");
                document.querySelector('.wrapper').classList.add('hidden');
                document.getElementById('logoutBtn').classList.remove('hidden');
                document.getElementById('logoutBtnHeader').classList.remove('hidden'); // Show logout button in header
                document.getElementById('loginBtnHeader').classList.add('hidden'); // Hide login button in header
            } else {
                alert("Incorrect email or password. Please try again.");
            }
        }

        function logout() {
            document.querySelector('.wrapper').classList.remove('hidden');
            document.getElementById('logoutBtn').classList.add('hidden');
            document.getElementById('logoutBtnHeader').classList.add('hidden'); // Hide logout button in header
            document.getElementById('loginBtnHeader').classList.remove('hidden'); // Show login button in header
        }

        document.addEventListener('DOMContentLoaded', function() {
            const registerForm = document.querySelector('.form-box.register form');
            const usernameInput = document.querySelector('.form-box.register input[type="text"]');
            const emailInput = document.querySelector('.form-box.register input[type="email"]');
            const passwordInput = document.querySelector('.form-box.register input[type="password"]');
            const termsCheckbox = document.querySelector('.form-box.register input[type="checkbox"]');
        
            // Function to handle form submission
            registerForm.addEventListener('submit', function(event) {
              event.preventDefault(); // Prevent form submission
        
              // Check if all fields are filled and terms are accepted
              if (usernameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '' || !termsCheckbox.checked) {
                alert("Please fill in all fields and accept the terms & conditions.");
                return;
              }
        
              // Here you can handle the registration
              // For simplicity, just showing an alert with the entered data
              alert("Registration Successful!\nUsername: " + usernameInput.value + "\nEmail: " + emailInput.value);
              // You can also send the registration data to a backend server for processing
        
              // Clear the form fields
              usernameInput.value = "";
              emailInput.value = "";
              passwordInput.value = "";
              termsCheckbox.checked = false;
            });
          });



          document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.querySelector('.contact-form');
            const nameInput = document.querySelector('.contact-form input[name="name"]');
            const emailInput = document.querySelector('.contact-form input[name="email"]');
            const messageInput = document.querySelector('.contact-form textarea[name="message"]');
        
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission
        
                // Basic validation
                if (nameInput.value.trim() === '') {
                    alert('Please enter your name');
                    nameInput.focus();
                    return;
                }
        
                if (emailInput.value.trim() === '') {
                    alert('Please enter your email');
                    emailInput.focus();
                    return;
                }
        
                // Basic email validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value)) {
                    alert('Please enter a valid email address');
                    emailInput.focus();
                    return;
                }
        
                if (messageInput.value.trim() === '') {
                    alert('Please enter your message');
                    messageInput.focus();
                    return;
                }
        
                // If validation passes, you can handle the form submission
                // For this example, we'll just show a success message
                alert('Thank you for your message! We will get back to you soon.');
        
                // Clear the form
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            });
        });


        // Add this to your script.js
let slideIndex = 1;

// Call this when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    
    // Auto advance slides every 5 seconds
    setInterval(function() {
        changeSlide(1);
    }, 5000);

    // Menu navigation functionality
    const menuLinks = document.querySelectorAll('.menu-nav a');
    const menuSections = document.querySelectorAll('.menu-section');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links and sections
            menuLinks.forEach(l => l.classList.remove('active'));
            menuSections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Show corresponding section
            const targetId = this.getAttribute('href').slice(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
});

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    // Show the current slide and activate the corresponding dot
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
}



document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        testimonials[currentIndex].classList.remove('active');
        dotsContainer.children[currentIndex].classList.remove('active');
        currentIndex = index;
        testimonials[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % testimonials.length);
    }

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Show the first slide
    testimonials[0].classList.add('active');
});




// Back to Top Button
function initializeBackToTopButton() {
    const backToTopButton = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
        if (window.pageYOffset > 300) { // Show button after 300px of scrolling
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    }

    backToTopButton.addEventListener("click", backToTop);

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

// Call this function when the document is loaded
document.addEventListener('DOMContentLoaded', initializeBackToTopButton);



const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    // Toggle sidebar visibility
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-150px'; // Hide sidebar
        menuToggle.classList.remove('open'); // Remove open class
        menuToggle.querySelector('.icon').textContent = '☰'; // Change icon back to hamburger
    } else {
        sidebar.style.right = '0px'; // Show sidebar
        menuToggle.classList.add('open'); // Add open class
        menuToggle.querySelector('.icon').textContent = '✖'; // Change icon to "X"
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.menu-image');
    const popup = document.createElement('div');
    const overlay = document.createElement('div');

    // Set up the popup and overlay
    popup.classList.add('popup');
    overlay.classList.add('popup-overlay');
    document.body.appendChild(popup);
    document.body.appendChild(overlay);

    images.forEach(image => {
        image.addEventListener('click', () => {
            popup.innerHTML = `<img src="${image.src}" alt="Popup Image">`;
            popup.classList.add('active');
            overlay.classList.add('active');
        });
    });

    // Close the popup when clicking on the overlay
    overlay.addEventListener('click', () => {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    });
});