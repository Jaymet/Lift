// Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Login Modal
    const loginBtn = document.querySelector('.login-btn');
    const loginModal = document.querySelector('.login-modal');
    const closeBtn = document.querySelector('.close');

    loginBtn?.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeBtn?.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
