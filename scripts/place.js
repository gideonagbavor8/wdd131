document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    const temperature = 10; // Static value for temperature
    const windSpeed = 5; // Static value for wind speed

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill;

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + ' °C';
        } else {
            return 'N/A';
        }
    }
});