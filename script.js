import { initializeAuth, login, logout } from './auth.js';
import { initializeCarousel } from './carousel.js';
import { initializeNavigation } from './navigation.js';
import { initializeForms } from './forms.js';
import { initializeTestimonials } from './testimonials.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAuth();
    initializeCarousel();
    initializeNavigation();
    initializeForms();
    initializeTestimonials();
    initializeBackToTopButton();
});