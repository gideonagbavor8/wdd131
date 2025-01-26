document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date and update the footer
var lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
// lastModifiedElement.style.color = "#90E0EF";
// lastModifiedElement.style.fontSize = "1.2em";



function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        return Math.round(13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

let temperature = 25;
let windSpeed = 15;

let windChill = calculateWindChill(temperature, windSpeed);

document.getElementById('windChill').textContent = windChill === "N/A" ? windChill : `${windChill}°C`;
Explain