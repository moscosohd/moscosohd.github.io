const requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=df2ef9c7e153fcd045bc56337414f4fa&units=imperial";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', requestURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    var currenttempDiv = document.getElementById("current-temp");
    currenttempDiv.innerHTML = weatherData.main.temp;
}