class WeatherAPI{
    constructor(){
        this.apiKey = 'c9b38b4e95fbf05f8c5e1839f9f9ffa7';
        this.city = 'London';
        this.country = 'UK';
    }
    // fetch the weather api
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country.toLowerCase()}&APPID=${this.apiKey}`);
        const data = await response.json();
        return data.main; // returns a promise cuz the async keyword 
    }

    // change the location
    changeLocation(newCity, newCountry){
        this.city = newCity;
        this.country = newCountry
    }
}