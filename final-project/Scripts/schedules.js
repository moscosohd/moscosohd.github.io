const scheduleURL = "https://moscosohd.github.io/final-project/Scripts/schedules.json";
var xhr = new XMLHttpRequest();
xhr.open("GET", scheduleURL);
xhr.send();

xhr.onload = function () {
    var scheduleData = JSON.parse(xhr.response);
    var locationR = document.getElementById("scheduleR");
    var locationB = document.getElementById("scheduleB");
    var locationTF = document.getElementById("scheduleTF");
    var locationM = document.getElementById("scheduleM");

    for (var temple in scheduleData) {
        for (var i = 0; i < scheduleData[temple].length; i++) {
            switch (temple) {
                case "rexburg":
                    try {
                        locationR.innerHTML += scheduleData[temple][i] + ";<br />\n";
                    }
                    catch {
                        continue;
                    }
                    break;

                case "boise":
                    try {
                        locationB.innerHTML += scheduleData[temple][i] + ";<br />\n";
                    }
                    catch {
                        continue;
                    }
                    break;

                case "twin falls":
                    try {
                        locationTF.innerHTML += scheduleData[temple][i] + ";<br />\n";
                    }
                    catch {
                        continue;
                    }
                    break;

                case "meridian":
                    try {
                        locationM.innerHTML += scheduleData[temple][i] + ";<br />\n";
                    }
                    catch {
                        continue;
                    }
                    break;
            }
        }
    }
}