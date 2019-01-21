// initialize the weather object from the weatherAPI class
const weather = new WeatherAPI('London', 'UK');
// Event Listeners For the DOM Elements
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
weather.getWeather()
    .then(data => console.log(data))
    .catch(err => console.log(err));

}