//initialize storage object
const storage = new Storage();
//get the location data object from the local storage
const dataFromStorage = storage.getLocation();
// initialize the weather object with location data stored in the local storage 
const weather = new WeatherAPI(dataFromStorage.city, dataFromStorage.country);
//initialize the UI object 
const ui = new UI();

// Event Listener to Load the page
document.addEventListener('DOMContentLoaded', getWeather);
// Event Listener to the modal 
document.getElementById('locationModal').addEventListener('click', changeLocation);

// get the location data from local storage and fetch it to render the weather view 
function getWeather(){
weather.getWeather()
    .then(data => {ui.render(data)})
    .catch(() => alert('Enter Correct City Name and Country Code'))
}
// get the new location data from the input boxes of the modal window
function changeLocation(e){
    if(e.target.id === 'change-btn'){
    // get the value of both text inputs
    const cityInput = document.getElementById('city').value;
    const countryInput = document.getElementById('country-code').value;
    // set the new location data
    weather.changeLocation(cityInput, countryInput);
    storage.setLocation(cityInput, countryInput);
    getWeather();
    // hide the modal window after setting the new location data
    $('#locationModal').modal('hide');
    } 
}