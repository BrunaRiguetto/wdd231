document.addEventListener("DOMContentLoaded", () => {

  const currentTemp = document.querySelector("#current-temp");
  const weatherDesc = document.querySelector("#weather-desc");
  const weatherIcon = document.querySelector("#weather-icon");
  const humidity = document.querySelector("#humidity");

  const day1 = document.querySelector("#day1");
  const day2 = document.querySelector("#day2");
  const day3 = document.querySelector("#day3");

  // Londrina coordinates (OpenWeather 5-day forecast API)
  const url = "https://api.openweathermap.org/data/2.5/forecast?lat=-23.3045&lon=-51.1696&units=metric&appid=dcbec5dbaf131699da2656bdb1f302bd";

  async function getWeather() {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Weather data fetch failed");
      }

      const data = await response.json();
      displayWeather(data);

    } catch (error) {
      console.error("Weather Error:", error);
    }
  }

  function displayWeather(data) {

    // ===== CURRENT WEATHER =====
    const current = data.list[0];

    currentTemp.textContent = `${Math.round(current.main.temp)}°C`;

    const description = current.weather[0].description;
    weatherDesc.textContent = description;

    humidity.textContent = current.main.humidity;

    const iconSrc = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
    weatherIcon.src = iconSrc;
    weatherIcon.alt = description;

    // ===== 3-DAY FORECAST (24 hour intervals) =====

    day1.textContent = `${Math.round(data.list[8].main.temp)}°C`;
    day2.textContent = `${Math.round(data.list[16].main.temp)}°C`;
    day3.textContent = `${Math.round(data.list[24].main.temp)}°C`;
  }

  getWeather();

});
