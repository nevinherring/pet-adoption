const miamiWeatherUrl =
  'https://api.weather.gov/gridpoints/MFL/110,50/forecast';

const petsGitHubApi =
  'https://learnwebcode.github.io/bootcamp-pet-data/pets.json';

async function start() {
  const weatherDataPromise = await fetch(miamiWeatherUrl);
  const weatherData = await weatherDataPromise.json();

  const ourTemperature = weatherData.properties.periods[0].temperature;
  document.querySelector('#temperature-output').textContent = ourTemperature;
}

const temp = start();

async function petsArea() {
  const petsPromise = await fetch(petsGitHubApi);
  const petsData = await petsPromise.json();
  petsData.forEach((pet) => {
    console.log(pet.name);
  });
}

const petsAreaData = petsArea();
