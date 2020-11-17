/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Particles */
particlesJS.load("particles-js", "./JS/particles.json", function () {
  console.log("particles.json loaded...");
});


// Typewriter
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Hello, my name's Joe.")
    .pauseFor(1000)
    .deleteChars(4)
    .typeString("<span class='highlight'>Joe</span>.<br />I'm a Software Developer.")
    .pauseFor(10000)
    .start();