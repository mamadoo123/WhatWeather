class WeatherAPI{
    constructor(city, state){
        this.apiKey = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }
    // fetch the weather api
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/
        ${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        const data = await response.json();
        return data.current_observation;
    }

    // change the location
    changeLocation(newCity, newState){
        this.city = newCity;
        this.state = newState;
    }
}