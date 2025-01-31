// Get the current year
const currentYear = new Date().getFullYear();

// Update the first paragraph in the footer with the current year
document.getElementById("currentyear").textContent = currentYear;

// Get the document's last modified date
const lastModified = document.lastModified;

// Update the second paragraph in the footer with the last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// Function to toggle the navigation menu in mobile view
function toggleMenu() {
    const navMenu = document.querySelector('header nav');
    const menuButton = document.getElementById('menu');
    const header = document.querySelector('header');
    navMenu.classList.toggle('show');
    menuButton.classList.toggle('show');
    header.classList.toggle('show');
}

// Event listener for the hamburger button
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('menu');
    hamburgerButton.addEventListener('click', toggleMenu);    
    
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 58000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-exterior-1.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 68000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-utah-temple-exterior-1.jpg"
  },
  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 10",
    area: 67000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-idaho-temple-exterior-1.jpg"
  }
];

// Helper function to create temple cards
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.classList.add('temple-card');

  const name = document.createElement('h3');
  name.textContent = temple.templeName;
  card.appendChild(name);

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  card.appendChild(location);

  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  card.appendChild(dedicated);

  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area} sq ft`;
  card.appendChild(area);

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy';
  card.appendChild(img);


  return card;
}

// Function to display temples based on navigation menu items
function displayTemples(filter) {
  const container = document.getElementById('temple-container');
  container.innerHTML = '';

  let filteredTemples;
  switch (filter) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    case 'home':
    default:
      filteredTemples = temples;
      break;
  }

  filteredTemples.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });

// populateTempleContainer();

}



// Add event listeners to navigation menu items
document.getElementById('home').addEventListener('click', () => displayTemples('home'));
document.getElementById('old').addEventListener('click', () => displayTemples('old'));
document.getElementById('new').addEventListener('click', () => displayTemples('new'));
document.getElementById('large').addEventListener('click', () => displayTemples('large'));
document.getElementById('small').addEventListener('click', () => displayTemples('small'));

displayTemples(temples);
