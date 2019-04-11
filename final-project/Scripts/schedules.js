const scheduleURL = "https://moscosohd.github.io/final-project/Scripts/schedules.json";
var xhr = new XMLHttpRequest();
xhr.open("GET", scheduleURL);
xhr.responseType = "json";
xhr.send();

xhr.onload = function() {
    var scheduleData = xhr.response;
    var locationR = document.getElementById("scheduleR");
    var locationB = document.getElementById("scheduleB");
    var locationTF = document.getElementById("scheduleTF");
    var locationM = document.getElementById("scheduleM");

    for (var temple in scheduleData) {
        for (var i = 0; i < scheduleData[temple].length; i++) {
            switch(temple) {
                case "rexburg":locationR.innerHTML += scheduleData[temple][i] + ";<br />\n"; break;
                case "boise":locationB.innerHTML += scheduleData[temple][i] + ";<br />\n"; break;
                case "twin falls":locationTF.innerHTML += scheduleData[temple][i] + ";<br />\n"; break;
                case "meridian":locationM.innerHTML += scheduleData[temple][i] + ";<br />\n"; break;
            }
        }
    }
}