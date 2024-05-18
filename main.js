const miamiWeatherUrl =
  'https://api.weather.gov/gridpoints/MFL/110,50/forecast';

async function start() {
  const weatherDataPromise = await fetch(miamiWeatherUrl);
  const weatherData = await weatherDataPromise.json();

  const ourTemperature = weatherData.properties.periods[0].temperature;
  document.querySelector('#temperature-output').textContent = ourTemperature;
}

const temp = start();
