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

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=df2ef9c7e153fcd045bc56337414f4fa&units=imperial";
let weatherForecast = new XMLHttpRequest();
weatherForecast.open('GET', forecastURL, true);
weatherForecast.send();

weatherForecast.onload = function() {
    var weatherForecastData = JSON.parse(weatherForecast.responseText);
    var day1 = document.getElementById("dayone");
    var day2 = document.getElementById("daytwo");
    var day3 = document.getElementById("daythree");
    var day4 = document.getElementById("dayfour");
    var day5 = document.getElementById("dayfive");
    
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thurs";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    weekday[7] = weekday[0];
    weekday[8] = weekday[1];
    weekday[9] = weekday[2];
    weekday[10] = weekday[3];

    day1.innerHTML = weekday[date.getDay()];
    day2.innerHTML = weekday[date.getDay() + 1];
    day3.innerHTML = weekday[date.getDay() + 2];
    day4.innerHTML = weekday[date.getDay() + 3];
    day5.innerHTML = weekday[date.getDay() + 4];
    
    var day1weather = document.getElementById("dayoneweather");
    var day2weather = document.getElementById("daytwoweather");
    var day3weather = document.getElementById("daythreeweather");
    var day4weather = document.getElementById("dayfourweather");
    var day5weather = document.getElementById("dayfiveweather");
}