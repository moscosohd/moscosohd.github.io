var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://moscosohd.github.io/assignments/lesson-9/scripts/cities.json', true);
weatherObject.send();
weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('city11').innerHTML = weatherInfo["0"].towns;
}