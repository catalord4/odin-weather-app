import { getWeatherObject } from "./weather.js";

const weatherApp = (function () {
  const searchInput = document.querySelector("#search");

  const searchButton = document.querySelector("#search-button");

  const main = document.querySelector("#main");

  const renderBackground = (background) => {
    const backgroundImages = {
      snow: "./imgs/snow.jpg",
      rain: "./imgs/rain.jpg",
      fog: "./imgs/fog.jpg",
      wind: "./imgs/wind.jpg",
      cloudy: "./imgs/cloudy.jpg",
      "partly-cloudy-day": "./imgs/partly-cloudy-day.jpg",
      "partly-cloudy-night": "./imgs/partly-cloudy-night.jpg",
      "clear-day": "./imgs/clear-day.jpg",
      "clear-night": "./imgs/clear-night.jpg",
    };
    console.log(backgroundImages[background]);
    main.style["background-image"] = `url(${backgroundImages[background]})`;
  };

  const updateWeatherDisplay = (weatherData) => {
    const locationName = document.querySelector("#location-name");
    const temperature = document.querySelector("#temp");
    const feelslike = document.querySelector("#feelslike");
    const humidity = document.querySelector("#humidity");
    const conditions = document.querySelector("#conditions");
    const windSpeed = document.querySelector("#wind-speed");

    let degreeIndicator = "°C";

    locationName.textContent = weatherData.address;
    conditions.textContent = weatherData.conditions;
    temperature.textContent = weatherData.temp + " " + degreeIndicator;
    feelslike.textContent =
      "FEELS LIKE: " + weatherData.feelslike + " " + degreeIndicator;
    humidity.textContent = "HUMIDITY: " + weatherData.humidity + "%";
    windSpeed.textContent = "WIND: " + weatherData.windSpeed + " KM/H";
  };

  const updateWeather = () => {
    getWeatherObject(searchInput.value).then((value) => {
      let weatherData = value;

      updateWeatherDisplay(weatherData);
      renderBackground(weatherData.background);
    });
  };

  searchButton.addEventListener("click", () => {
    updateWeather();
  });
})();
