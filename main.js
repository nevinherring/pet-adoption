const miamiWeatherUrl =
  'https://api.weather.gov/gridpoints/MFL/110,50/forecast';

const petsGitHubApi =
  'https://learnwebcode.github.io/bootcamp-pet-data/pets.json';

const template = document.querySelector('#pet-card-template');
const wrapper = document.createDocumentFragment();

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
    const clone = template.content.cloneNode(true);

    clone.querySelector('h3').textContent = pet.name;

    wrapper.appendChild(clone);
  });
  document.querySelector('.list-of-pets').appendChild(wrapper);
}

const petsAreaData = petsArea();
