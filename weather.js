const APIkey = "K934HWUK5N9V9FJUZZ7YHVB5D";

const getWeatherData = async (location) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${APIkey}&unitGroup=metric`,
    { mode: "cors" }
  );

  const weatherData = await response.json();

  return weatherData;
};

const getWeatherObject = async (location) => {
  const response = await getWeatherData(location);
  const data = response.days[0];

  data.windspeed = Math.round(data.windspeed);
  data.temp = Math.round(data.temp);
  data.feelslike = Math.round(data.feelslike);
  data.humidity = Math.round(data.humidity);

  return {
    address: response.resolvedAddress,
    temp: data.temp,
    feelslike: data.feelslike,
    conditions: data.conditions,
    humidity: data.humidity,
    windSpeed: data.windspeed,

    background: data.icon,
  };
};
export { getWeatherObject };
