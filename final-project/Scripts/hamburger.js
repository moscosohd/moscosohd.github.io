/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburger() {
    var x = document.getElementById("topnav");
    var y = document.getElementById("main");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " r-main";
    } else {
        x.className = "topnav";
        y.className = "main";
    }
}