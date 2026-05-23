const theTown = document.querySelector('#town');
const theDescription = document.querySelector('#description');
const theTemperature = document.querySelector('#temperature');
const theGraphic = document.querySelector('#graphic');
const theHumidity = document.querySelector('#humidity');
const theWind = document.querySelector('#wind');


const myKey = "da1a707cd89b14fbccf20aeed9365732";
const theLat = "39.80";
const theLong = "-105.08";

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${theLat}&lon=${theLong}&appid=${myKey}&units=imperial`

// THIS ONE IS FOR FORECAST
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${theLat}&lon=${theLong}&appid=${myKey}&units=imperial`;

// Fetch the actual weather
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

// Fetch the FORECAST
async function getForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// DISOLAYING WEATHER
function displayResults(data) {

    theTown.innerHTML = data.name;
    theDescription.innerHTML = data.weather[0].description;

    // temperature
    theTemperature.innerHTML = `${data.main.temp}&deg;F`;

    theHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    theWind.innerHTML = `Wind: ${data.wind.speed} mph`;

    // weather icon
    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    theGraphic.src = iconSrc;
    theGraphic.alt = data.weather[0].description;
}


// DISPLAYING FORECAST

function displayForecast(data) {
    const forecastDiv = document.querySelector('#forecast');
    forecastDiv.innerHTML= "";

    // from 10 am
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
// 3 days forecast
    const threeDays = daily.slice(0, 3);

    threeDays.forEach(day => {
      const date = new Date(day.dt_txt).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit'
      });
      const temp = Math.round(day.main.temp);
      const desc = day.weather[0].description;
      const icon = day.weather[0].icon;

      const card = `
        <div class="forecast-day">
          <h3>${date}</h3>
          <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
          <p>${temp}°F</p>
          <p>${desc}</p>
        </div>          
`;
      forecastDiv.innerHTML += card;

    });
  }


apiFetch();
getForecast();
