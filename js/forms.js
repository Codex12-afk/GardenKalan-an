export function initializeForms() {
    initializeContactForm();
    initializeRegisterForm();
}

function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function initializeRegisterForm() {
    const registerForm = document.querySelector('.form-box.register form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterSubmit);
    }
}

function handleContactSubmit(event) {
    event.preventDefault();
    const nameInput = document.querySelector('.contact-form input[name="name"]');
    const emailInput = document.querySelector('.contact-form input[name="email"]');
    const messageInput = document.querySelector('.contact-form textarea[name="message"]');

    // Validation
    if (!validateForm(nameInput, emailInput, messageInput)) {
        return;
    }

    // Success handling
    alert('Thank you for your message! We will get back to you soon.');
    clearForm(nameInput, emailInput, messageInput);
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    // ... rest of your register form handling code
}

function validateForm(...inputs) {
    // Add your validation logic here
    return true;
}

function clearForm(...inputs) {
    inputs.forEach(input => input.value = '');
}