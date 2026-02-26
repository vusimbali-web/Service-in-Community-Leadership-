// JavaScript for navigation menu toggle, smooth scrolling, and form validation

// Navigation Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
}

// Form Validation
const form = document.querySelector('.my-form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    let valid = true;
    
    // Simple email validation
    if (!emailInput.value.includes('@')) {
        valid = false;
        alert('Please enter a valid email address.');
    }
    
    // Message validation
    if (messageInput.value.trim() === '') {
        valid = false;
        alert('Please enter a message.');
    }
    
    if (!valid) {
        e.preventDefault();
    }
});

// Other interactive features can be added below...