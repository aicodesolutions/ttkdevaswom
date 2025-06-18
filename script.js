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

    // Add data-label attributes to table cells for responsive tables
    const tables = document.querySelectorAll('.schedule-table');
    tables.forEach(table => {
        const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent);
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            cells.forEach((cell, index) => {
                if (headers[index]) { // Check if header exists
                    cell.setAttribute('data-label', headers[index]);
                }
            });
        });
    });

    // Smooth scroll for anchor links (if any on the same page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            // Ensure it's not just a hash (href="#") and that an element with that ID exists
            if (hrefAttribute.length > 1 && document.querySelector(hrefAttribute)) {
                e.preventDefault();
                document.querySelector(hrefAttribute).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});