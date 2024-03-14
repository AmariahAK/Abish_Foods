document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to section titles
    var sectionTitles = document.querySelectorAll('h2');
    sectionTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            // Get the link associated with the section title
            var link = title.dataset.link;
            if (link) {
                // Navigate to the linked page
                window.location.href = link;
            }
        });
    });

    // Add hover effect to menu options
    var menuOptions = document.querySelectorAll('.menu-options a');
    menuOptions.forEach(function (option) {
        option.addEventListener('mouseover', function () {
            option.style.color = 'rgb(255, 165, 0)'; // Change color on hover
        });
        option.addEventListener('mouseout', function () {
            option.style.color = ''; // Revert color on mouseout
        });
    });
});
