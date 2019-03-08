//f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16
var temperature = parseInt(document.getElementById("current-Temp").innerHTML);
var windSpeed = parseInt(document.getElementById("windSpeed").innerHTML);
var calculation = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
calculation = Math.round(calculation);
document.getElementById("windchill").innerHTML = calculation;