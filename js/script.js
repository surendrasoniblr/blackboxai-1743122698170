document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const marriageForm = document.getElementById('marriageForm');
    
    if (marriageForm) {
        marriageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = marriageForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // Show success message
                alert('Form submitted successfully! We will contact you soon.');
                marriageForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('bg-light');
            } else {
                navbar.classList.add('bg-light');
                navbar.classList.remove('bg-white');
            }
        });
    }

    // Add fade-in animation to elements
    const animateElements = document.querySelectorAll('.card, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// File size validation
document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (file && file.size > maxSize) {
            alert('File size should not exceed 5MB');
            e.target.value = ''; // Clear the input
        }
    });
});