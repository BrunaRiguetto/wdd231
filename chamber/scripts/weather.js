const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humidity');

const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');

// Londrina coordinates
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-23.3045&lon=-51.1696&units=metric&appid=dcbec5dbaf131699da2656bdb1f302bd`;

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);

    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }

  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {

  // CURRENT WEATHER (first item)
  const current = data.list[0];

  currentTemp.textContent = `${Math.round(current.main.temp)}°C`;

  humidity.textContent = current.main.humidity;

  const desc = current.weather[0].description;
  weatherDesc.textContent = desc;

  const weatherUrl = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute('src', icon);
  weatherIcon.setAttribute('alt', desc);

  // 3 DAY FORECAST (24h intervals)

  day1.textContent = data.list[8]
    ? `${Math.round(data.list[8].main.temp)}°C`
    : "N/A";

  day2.textContent = data.list[16]
    ? `${Math.round(data.list[16].main.temp)}°C`
    : "N/A";

  day3.textContent = data.list[24]
    ? `${Math.round(data.list[24].main.temp)}°C`
    : "N/A";

}

getWeather();
