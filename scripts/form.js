// Get the current year
const currentYear = new Date().getFullYear();

// Update the first paragraph in the footer with the current year
document.getElementById("current-year").textContent = currentYear;

// Get the document's last modified date
const lastModified = document.lastModified;

// Update the second paragraph in the footer with the last modified date
document.getElementById("last-modified").textContent = `${lastModified}`;

// document.addEventListener('DOMContentLoaded', () => {
//     let reviewCount = localStorage.getItem('reviewCount') || 0;
//     reviewCount++;
//     localStorage.setItem('reviewCount', reviewCount);
//     document.getElementById('review-count').textContent = reviewCount;
// });

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the review.html page
    if (window.location.pathname.includes("review.html")) {
        // Get the current count from localStorage
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        
        // Increment the count
        reviewCount++;
        
        // Save the new count back to localStorage
        localStorage.setItem('reviewCount', reviewCount);
        
        // Display the count in the "thank you" container
        document.getElementById('review-count').textContent = reviewCount;
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const products = [
      { id: "fc-1888", name: "flux capacitor", averagerating:4.5 },
      { id: "fc-2050", name: "power laces", averagerating: 47 },
      { id: "fs-1987", name: "time circuits", averagerating:3.5 },
      { id: "ac-2000", name: "low voltage reactor",averagerating: 3.9 },
      { id: "jj-1969", name: "warp equalizer", averagerating:5.0 }
  ];

const selectElement = document.getElementById('product-name');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

const form = document.getElementById('review-form');
form.addEventListener('submit', () => {
    localStorage.setItem('formSubmitted', 'true');
    });
});

