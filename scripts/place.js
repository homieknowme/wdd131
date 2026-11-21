const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) -
        (11.37 * Math.pow(wind, 0.16)) +
        (0.3965 * temp * Math.pow(wind, 0.16));
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind").textContent = windSpeed;
document.querySelector("#windchill").textContent = windChill;