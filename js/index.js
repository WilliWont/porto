console.log("index.js is loaded");

var x = document.getElementById("top");
window.onscroll = function() {

    var currentScroll = window.pageYOffset;
    if (currentScroll > 0) {
        x.classList.add('show-top');
        x.classList.remove('hide-top');
    } else {
        x.classList.add('hide-top');
        x.classList.remove('show-top');
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

