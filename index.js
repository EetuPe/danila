if (screen.width <= 699) {
document.location = "404.html";
}

alert("Please Register/Login");

var regex = new RegExp("%3c.*%3e","i");
var script = regex.exec(window.location.href);
if (script) {
    window.location.href = "404.html";
}

