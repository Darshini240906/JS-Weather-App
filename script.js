
const geoUrl = "http://api.openweathermap.org/geo/1.0/direct";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
const tempEl = document.querySelector(".temp");
const cityEl = document.querySelector(".city");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");


function getWeatherIcon(condition) {
    const iconMap = {
        Clear: "images/clear.png",
        Clouds: "images/clouds.png",
        Rain: "images/rain.png",
        Drizzle: "images/drizzle.png",
        Mist: "images/mist.png",
        Fog: "images/mist.png",
        Haze: "images/mist.png",
        Snow: "images/snow.png",
        Thunderstorm: "images/rain.png" 
    };
    return iconMap[condition] || "images/clear.png";
}

async function getCoordinates(city) {
    const url = `${geoUrl}?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch location data");
    }

    const data = await response.json();

    if (!data.length) {
        throw new Error("City not found");
    }

    return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
}

async function getWeather(lat, lon) {
    const url = `${weatherUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    return response.json();
}

function updateUI(weatherData, cityName) {
    const condition = weatherData.weather[0].main;

    tempEl.textContent = `${Math.round(weatherData.main.temp)}°C`;
    cityEl.textContent = cityName;
    humidityEl.textContent = `${weatherData.main.humidity}%`;
    windEl.textContent = `${Math.round(weatherData.wind.speed)}km/h`;
    weatherIcon.src = getWeatherIcon(condition);
}

async function searchWeather() {
    const city = searchInput.value.trim();

    if (!city) {
        return;
    }

    try {
        const { lat, lon, name } = await getCoordinates(city);
        const weatherData = await getWeather(lat, lon);
        updateUI(weatherData, name);
    } catch (error) {
        console.error(error);
        cityEl.textContent = "City not found";
        tempEl.textContent = "--°C";
        humidityEl.textContent = "--%";
        windEl.textContent = "--km/h";
    }
}

searchButton.addEventListener("click", searchWeather);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchWeather();
    }
});