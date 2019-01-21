// initialize the weather object from the weatherAPI class and ui from UI class
const weather = new WeatherAPI('London', 'UK');
const ui = new UI();
// Event Listeners For the DOM Elements
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('locationModal').addEventListener('click', changeLocation);

function getWeather(){
weather.getWeather()
    .then(data => {
        ui.render(data)})
    .catch(err => console.log(err));

}

function changeLocation(e){
    if(e.target.id === 'change-btn'){
    const cityInput = document.getElementById('city').value;
    const countryInput = document.getElementById('country-code').value;
    weather.changeLocation(cityInput, countryInput);
    getWeather();
    $('#locationModal').modal('hide');
    } 
}