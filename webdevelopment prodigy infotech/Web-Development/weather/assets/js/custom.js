const apiKey = "api key here"; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById('weatherInfo');
const locationInput = document.getElementById('locationInput');
const getWeatherButton = document.getElementById('getWeatherButton');

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeatherData(location);
    }
});

function fetchWeatherData(asia) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod ===1109 ) {
                weatherInfo.innerHTML = '<p>Location not found</p>';
                return;
            }

            const { name, main, weather } = data;
            weatherInfo.innerHTML = `
                <p><strong>Location:</strong> ${name}</p>
                <p><strong>Temperature:</strong> ${main.temp} °C</p>
                <p><strong>Description:</strong> ${weather[0].description}</p>
                <p><strong>Humidity:</strong> ${main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
        });
}
