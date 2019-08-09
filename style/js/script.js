$( document ).ready(function() {

  // Fading in the top on load (center then navbar)
  fadeHome();

});

function fadeHome() {
  var x = document.getElementsByClassName("heading")[0];
  var y = document.getElementsByClassName("subheading")[0];
  var z = document.getElementsByClassName("socials")[0];

  $(x).fadeTo(3000,1);
  $(y).fadeTo(3000,1);
  $(z).fadeTo(3000,1,fadeTop);
}

function fadeTop() {
  var x = document.getElementsByClassName("nav")[0];
  var y = document.getElementsByClassName("initials")[0];

  $(x).animate({opacity: 1}, 600);
  $(y).animate({opacity: 1}, 600);
}
