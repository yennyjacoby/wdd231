const theTown = document.querySelector('#town');
const theDescription = document.querySelector('#description');
const theTemperature = document.querySelector('#temperature');
const theGraphic = document.querySelector('#graphic');

const myKey = "da1a707cd89b14fbccf20aeed9365732";
const theLat = "49.75";
const theLong = "6.64";

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${theLat}&lon=${theLong}&appid=${myKey}&units=imperial`


async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayResults(data) {
    console.log('hello');

    theTown.innerHTML = data.name;
    theDescription.innerHTML = data.weather[0].description;

    // temperature
    theTemperature.innerHTML = `${data.main.temp}&deg;F`;

    // weather icon
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    theGraphic.setAttribute('SRC', iconsrc);
    theGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();
