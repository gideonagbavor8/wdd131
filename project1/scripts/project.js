// Function to open the login form modal
function openLoginForm() {
    document.getElementById("login-form-modal").style.display = "block";
}

// Function to close the login form modal
function closeLoginForm() {
    document.getElementById("login-form-modal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("login-form-modal")) {
        closeLoginForm();
    }
}

// Function to toggle the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-content");
    dropdown.classList.toggle("show");

    // Display the profile summary when the profile image is clicked in tablet mode
    const profileSummary = document.querySelector('.profile-summary');
    if (profileSummary) {
        profileSummary.classList.toggle("show");
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile img')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        const profileSummary = document.querySelector('.profile-summary');
        if (profileSummary && profileSummary.classList.contains('show')) {
            profileSummary.classList.remove('show');
        }
    }
}

// Function to update date, time, and greeting
function updateDateTimeGreeting() {
    const dateTimeContainer = document.getElementById('date-time-container');
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();

    dateTimeContainer.innerHTML = `${dateString} || ${timeString}`;
}

// Update the date, time, and greeting every second
setInterval(updateDateTimeGreeting, 1000);

// Initial call to set the date, time, and greeting immediately
updateDateTimeGreeting();

// Sample student data
const students = [
    { name: "John Doe", grade: 10, courses: 6, image: "images/student-2.jpg" },
    { name: "Jane Smith", grade: 11, courses: 5, image: "images/student-1.jpg" },
    { name: "Alice Johnson", grade: 12, courses: 7, image: "images/student-3.jpg" },
    { name: "Bob Brown", grade: 9, courses: 4, image: "images/student-4.jpg" },
    { name: "Charlie Davis", grade: 10, courses: 6, image: "images/student-5.jpg" },
    { name: "Diana Evans", grade: 11, courses: 5, image: "images/student-6.jpg" },
    { name: "Ethan Foster", grade: 12, courses: 7, image: "images/student-7.jpg" },
    { name: "Fiona Green", grade: 9, courses: 4, image: "images/student-8.jpg" },
    { name: "George Harris", grade: 10, courses: 6, image: "images/student-9.jpg" },
    { name: "Hannah Irving", grade: 11, courses: 5, image: "images/student-10.jpg" },
    { name: "Ian Jackson", grade: 12, courses: 7, image: "images/student-11.jpg" },
    { name: "Julia King", grade: 9, courses: 4, image: "images/student-12.jpg" }
];

// Function to handle search
function handleSearch(event) {
    event.preventDefault();
    const query = document.querySelector('.search-bar input[name="query"]').value.toLowerCase();
    const results = students.filter(student => student.name.toLowerCase().includes(query));
    displayResults(results);
    if (results.length > 0) {
        updateProfileImage(results[0].image, results[0].name);
        updateProfileSummary(results[0]);
    }
}

// Function to display search results
function displayResults(results) {
    const profileSummary = document.querySelector('.profile-summary');
    profileSummary.innerHTML = results.map(student => `
        <div class="student-result">
            <img src="${student.image}" alt="${student.name}" class="student-image">
            <p><strong>Student:</strong> ${student.name}</p>
            <p><strong>Grade:</strong> ${student.grade}</p>
            <p><strong>Enrolled Courses:</strong> ${student.courses}</p>
        </div>
    `).join('');
    profileSummary.classList.add('show'); // Show the profile summary
}

// Function to update profile image in the header
function updateProfileImage(imageUrl, studentName) {
    const profileImage = document.querySelector('.profile img');
    profileImage.src = imageUrl;
    profileImage.alt = studentName;
}

// Function to update profile summary in the Quick Links section
function updateProfileSummary(student) {
    const profileSummary = document.querySelector('.profile-summary');
    profileSummary.innerHTML = `
        <div class="student-result">
            <img src="${student.image}" alt="${student.name}" class="student-image">
            <p><strong>Student:</strong> ${student.name}</p>
            <p><strong>Grade:</strong> ${student.grade}</p>
            <p><strong>Enrolled Courses:</strong> ${student.courses}</p>
        </div>
    `;
    profileSummary.classList.add('show'); // Show the profile summary
}

// Add event listener to the search form
document.querySelector('.search-bar').addEventListener('submit', handleSearch);

// Function to toggle the mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('open');
}

// Add event listener to the menu icon
document.querySelector('.menu-icon').addEventListener('click', toggleMobileMenu);

// Function to close the mobile menu
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('open');
}

// Add event listener to the close icon
document.querySelector('.close-icon').addEventListener('click', closeMobileMenu);

function openSlidePane() {
    document.getElementById("slide-pane").style.width = "250px";
}

function closeSlidePane() {
    document.getElementById("slide-pane").style.width = "0";
}


// Add an event listener to the button
document.getElementById('toggle-profile-summary').addEventListener('click', function() {
    // Select the element with the ID 'profile-summary'
    const profileSummary = document.getElementById('profile-summary');
    // Toggle the display property of the selected element
    if (profileSummary.style.display === 'none') {
        profileSummary.style.display = 'block';
    } else {
        profileSummary.style.display = 'none';
    }
});
