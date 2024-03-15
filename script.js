// script.js

// Function to load HTML files dynamically
function loadPage(page) {
    window.location.href = page;
  }
  
  // Function to convert links to buttons
  function convertLinksToButtons() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
      var button = document.createElement('button');
      button.textContent = link.textContent.trim();
      button.addEventListener('click', function() {
        var href = link.getAttribute('href');
        loadPage(href);
      });
      link.parentNode.replaceChild(button, link);
    });
  }
  
  // Function to add interactivity to the page
  function addInteractivity() {
    // Add hover effects to titles
    var titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    titles.forEach(function(title) {
      title.addEventListener('mouseenter', function() {
        title.style.color = 'blue'; // Change color on hover (you can customize this)
      });
      title.addEventListener('mouseleave', function() {
        title.style.color = ''; // Reset color on mouse leave
      });
    });
  
    // Add hover effects to images
    var images = document.querySelectorAll('img');
    images.forEach(function(image) {
      image.addEventListener('mouseenter', function() {
        image.style.opacity = '0.7'; // Reduce opacity on hover (you can customize this)
      });
      image.addEventListener('mouseleave', function() {
        image.style.opacity = ''; // Reset opacity on mouse leave
      });
    });
  }
  
  // Call functions when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    convertLinksToButtons();
    addInteractivity();
  });
  