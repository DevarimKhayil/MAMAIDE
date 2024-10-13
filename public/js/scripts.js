document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');

        clearErrors();

        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        }
        if (!validateEmail(email.value)) {
            showError(email, 'Invalid email address');
            isValid = false;
        }
        if (!validatePhone(phone.value)) {
            showError(phone, 'Invalid phone number');
            isValid = false;
        }
        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid =

