const weatherURL = "http://api.openweathermap.org/data/2.5/group?id=5605242,5586437,5610810,5600685&appid=df2ef9c7e153fcd045bc56337414f4fa&units=imperial";// Rexburg:5605242, Boise:5586437, Twin Falls:5610810 , Meridian:5600685
var request = new XMLHttpRequest();
request.open("GET", weatherURL);
request.responseType = "json";
request.send();

request.onload = function() {
    var weatherData = request.response;
    var imageR = document.getElementById("weatherR");
    var descriptionR = document.getElementById("wordR");
    var tempR = document.getElementById("tempR");
    var imageB = document.getElementById("weatherB");
    var descriptionB = document.getElementById("wordB");
    var tempB = document.getElementById("tempB");
    var imageTF = document.getElementById("weatherTF");
    var descriptionTF = document.getElementById("wordTF");
    var tempTF = document.getElementById("tempTF");
    var imageM = document.getElementById("weatherM");
    var descriptionM = document.getElementById("wordM");
    var tempM = document.getElementById("tempM");

    for (var temple = 0; temple < weatherData.cnt; temple++) {
        switch(temple) {
            case 0: 
            imageR.setAttribute("src", "https://openweathermap.org/img/w/" + weatherData.list["0"].weather["0"].icon + ".png");
            descriptionR.innerHTML = weatherData.list["0"].weather["0"].description.toUpperCase();
            tempR.innerHTML = Math.round(weatherData.list["0"].main.temp);
            break;

            case 1: 
            imageB.setAttribute("src", "https://openweathermap.org/img/w/" + weatherData.list["1"].weather["0"].icon + ".png");
            descriptionB.innerHTML = weatherData.list["1"].weather["0"].description.toUpperCase();
            tempB.innerHTML = Math.round(weatherData.list["1"].main.temp);
            break;

            case 2: 
            imageTF.setAttribute("src", "https://openweathermap.org/img/w/" + weatherData.list["2"].weather["0"].icon + ".png");
            descriptionTF.innerHTML = weatherData.list["2"].weather["0"].description.toUpperCase();
            tempTF.innerHTML = Math.round(weatherData.list["2"].main.temp);
            break;

            case 3: 
            imageM.setAttribute("src", "https://openweathermap.org/img/w/" + weatherData.list["3"].weather["0"].icon + ".png");
            descriptionM.innerHTML = weatherData.list["3"].weather["0"].description.toUpperCase();
            tempM.innerHTML = Math.round(weatherData.list["3"].main.temp);
            break;
        }
    }
}