const requestURL = "http://moscosohd.github.io/assignments/lesson-9/scripts/cities.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let towndata = request.response;
    let towns = towndata['towns'];


    towns.forEach(town => {
        if (town.name == "Preston") {
            let output = document.getElementById('city1');
            let myH3 = document.createElement('h3');
            let theP1 = document.createElement('p');
            let theP2 = document.createElement('p');
            let theP3 = document.createElement('p');
            let theP4 = document.createElement('p');
            let theP5 = document.createElement('p');
            myH3.textContent = town.name;
            theP1.textContent = town.motto;
            theP2.textContent = "Year Founded: " + town.yearFounded;
            theP3.textContent = "Population: " + town.currentPopulation;
            theP4.textContent = 'Annual Rain Fall: ' + town.averageRainfall + '"';
            theP5.textContent = "Events: " + town.events;
            output.appendChild(myH3);
            output.appendChild(theP1);
            output.appendChild(theP2);
            output.appendChild(theP3);
            output.appendChild(theP4);
            output.appendChild(theP5);
        } else if (town.name == "Soda Springs") {
            let output = document.getElementById('city2');
            let myH3 = document.createElement('h3');
            let theP1 = document.createElement('p');
            let theP2 = document.createElement('p');
            let theP3 = document.createElement('p');
            let theP4 = document.createElement('p');
            let theP5 = document.createElement('p');
            myH3.textContent = town.name;
            theP1.textContent = town.motto;
            theP2.textContent = "Year Founded: " + town.yearFounded;
            theP3.textContent = "Population: " + town.currentPopulation;
            theP4.textContent = 'Annual Rain Fall: ' + town.averageRainfall + '"';
            theP5.textContent = "Events: " + town.events;
            output.appendChild(myH3);
            output.appendChild(theP1);
            output.appendChild(theP2);
            output.appendChild(theP3);
            output.appendChild(theP4);
            output.appendChild(theP5);
        } else if (town.name == "Fish Haven") {
            let output = document.getElementById('city3');
            let myH3 = document.createElement('h3');
            let theP1 = document.createElement('p');
            let theP2 = document.createElement('p');
            let theP3 = document.createElement('p');
            let theP4 = document.createElement('p');
            let theP5 = document.createElement('p');
            myH3.textContent = town.name;
            theP1.textContent = town.motto;
            theP2.textContent = "Year Founded: " + town.yearFounded;
            theP3.textContent = "Population: " + town.currentPopulation;
            theP4.textContent = 'Annual Rain Fall: ' + town.averageRainfall + '"';
            theP5.textContent = "Events: " + town.events;
            output.appendChild(myH3);
            output.appendChild(theP1);
            output.appendChild(theP2);
            output.appendChild(theP3);
            output.appendChild(theP4);
            output.appendChild(theP5);
        }
    });
};