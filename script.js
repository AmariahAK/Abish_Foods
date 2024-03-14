document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling functionality for anchor links
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });

    // Function to handle click event on section headings
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop;
            scroll.animateScroll(offsetTop);
        }
    }

    // Add click event listeners to section headings
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach(heading => {
        heading.addEventListener("click", scrollToSection);
    });
});
