const requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=df2ef9c7e153fcd045bc56337414f4fa&units=imperial";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', requestURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    var currentTemp = document.getElementById("current-Temp");
    var high = document.getElementById("High");
    var humidity = document.getElementById("Humidity");
    var direction = document.getElementById("direction");
    var windspeed = document.getElementById("windSpeed");
    var calculation = Math.round(35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16));
    document.getElementById("windchill").innerHTML = calculation;
    
    currentTemp.innerHTML = weatherData.main.temp;
    high.innerHTML = weatherData.main.temp_max;
    humidity.innerHTML = weatherData.main.humidity;
    direction.innerHTML = weatherData.wind.speed;
    windspeed.innerHTML = weatherData.wind.deg;
}