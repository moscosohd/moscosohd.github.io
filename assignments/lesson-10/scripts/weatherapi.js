const requestURL = "https://.json";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', requestURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    let dayList = weatherRequest["list"];
    var tempDiv = document.getElementById("currentTemp");
    for (var i = 0; i > dayList.length; i++) {
    }
}