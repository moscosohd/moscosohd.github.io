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
    
    currentTemp.innerHTML = weatherData.main.temp;
    high.innerHTML = weatherData.main.temp_max;
    humidity.innerHTML = weatherData.main.humidity;
    direction.innerHTML = weatherData.wind.speed;
    windspeed.innerHTML = weatherData.wind.deg;
}
/*
let weatherForecast = new XMLHttpRequest();
weatherForecast.open('GET', requestURL, true);
weatherForecast.send();

weatherForecast.onload = function() {
    var weatherData = JSON.parse(weatherForecast.responseText);
    var currenttempDiv = document.getElementById("current-Temp");
    currenttempDiv.innerHTML = weatherData.main.temp;
}
*/