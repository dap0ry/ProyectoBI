document.addEventListener('DOMContentLoaded', () => {
    // Setting up the Intersection Observer to animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class when element enters viewport
                entry.target.classList.add('is-visible');
            } else {
                // Remove visible class when element leaves viewport
                // This makes it animate again when scrolling up and down
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Select all elements that need to be animated
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});
