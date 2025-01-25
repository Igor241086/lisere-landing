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
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = error.message;
    errorParagraph.style.color = 'red';
    weatherDisplay.replaceChildren(errorParagraph);
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;

  const cityName = document.createElement('h2');
  cityName.textContent = name;

  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = weather[0].description;

  const temperature = document.createElement('p');
  temperature.textContent = `Tемпература: ${main.temp}°C`;

  const feelsLike = document.createElement('p');
  feelsLike.textContent = `Ощущается как: ${main.feels_like}°C`;

  const humidity = document.createElement('p');
  humidity.textContent = `Влажность: ${main.humidity}%`;

  weatherDisplay.replaceChildren(cityName, weatherDescription, temperature, feelsLike, humidity);
}

updateButton.addEventListener('click', () => {
  const city = citySelect.value;
  fetchWeather(city);
});