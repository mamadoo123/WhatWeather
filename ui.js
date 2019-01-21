class UI {
    constructor(){
        this.location    = document.getElementById('w-location');
        this.description = document.getElementById('w-description');
        this.temp        = document.getElementById('w-temp-string');
        this.iconImg     = document.getElementById('w-icon');
        this.detailsUl   = document.getElementById('w-details');
        this.humidityLi  = document.getElementById('w-humidity');
        this.windSpeedLi = document.getElementById('w-wind-speed');
        this.windDegLi   = document.getElementById('w-wind-deg');

    }

    render(data){
        this.location.textContent = data.name;
        this.description.textContent = data.weather[0].description;
        this.temp.textContent = `${data.main.temp} °F`;
        this.iconImg.setAttribute('src',`https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        this.humidityLi.textContent = `Humidity: ${data.main.humidity}`;
        this.windSpeedLi.textContent = `Wind Speed: ${data.wind.speed}`;
        this.windDegLi.textContent = `Wind Degree: ${data.wind.deg}`;
    }
}

{/* <h1 id="w-location"></h1>
            <h3 class="text-dark" id="w-description"></h3>
            <h3 class="w-temp-string"></h3>
            <img id="w-icon">
            <ul id = "w-details" class="list-group my-4">
                <li class="list-group-item" id="w-humidity"></li>
                <li class="list-group-item" id="w-wind-speed"></li>
                <li class="list-group-item" id="w-wind-deg"></li> */}