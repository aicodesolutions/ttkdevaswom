document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            // Optional: Change hamburger to X icon
            if (isExpanded) {
                menuToggle.innerHTML = `
                    <span style="transform: rotate(45deg) translate(5px, 5px);"></span>
                    <span style="opacity: 0;"></span>
                    <span style="transform: rotate(-45deg) translate(5px, -5px);"></span>
                `;
            } else {
                menuToggle.innerHTML = `
                    <span></span>
                    <span></span>
                    <span></span>
                `;
            }
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});