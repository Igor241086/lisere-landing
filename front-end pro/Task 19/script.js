const apiKey = '89a135214a4a3b1d81dc368420bf4ecb';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const citySelect = document.getElementById('city-select');
const updateButton = document.getElementById('update-button');
const weatherDisplay = document.getElementById('weather-display');

async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
    if (!response.ok) {
      throw new Error('Ошибка получения данных');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherDisplay.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  weatherDisplay.innerHTML = `
    <h2>${name}</h2>
    <p>${weather[0].description}</p>
    <p>Температура: ${main.temp}°C</p>
    <p>Ощущается как: ${main.feels_like}°C</p>
    <p>Влажность: ${main.humidity}%</p>
  `;
}

updateButton.addEventListener('click', () => {
  const city = citySelect.value;
  fetchWeather(city);
});