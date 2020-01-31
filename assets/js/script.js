var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var attempts = null;
var max_matches = 9;
var games_played = null;
var calculate = null;
var clickable = true; //set up to limit the clicks from player
var name = null;


$(document).ready(function () {
  initializeApp();
});



function initializeApp() {
  var backCard = $(".back");
  backCard.on("click", handleCardClick);
}



function handleCardClick(event) {
  if (clickable === true) { //set up to limit the clicks from player

    $(event.currentTarget).addClass("hidden");

    if (firstCardClicked === null) {
      firstCardClicked = $(event.currentTarget);

    }
    else {
      secondCardClicked = $(event.currentTarget);

      var front1 = firstCardClicked.next().css("background-image");

      var front2 = secondCardClicked.next().css("background-image");



      if (front1 === front2) //win condition
      {
        matches++;

        firstCardClicked = null;
        secondCardClicked = null;
        clickable = false; //set up to limit the clicks from player

        displayStats();

      }

      else { // wrong condition

        setTimeout(function () {

          firstCardClicked.removeClass("hidden");
          secondCardClicked.removeClass("hidden");
          firstCardClicked = null;
          secondCardClicked = null;

        }, 500);

        clickable = false; //set up to limit the clicks from player

        displayStats();

      }

    }

    setTimeout(function () {
      clickable = true;
    }, 1200); //let the player can click again
  }
}


function resetStats() {
  displayStats();

  $(event.currentTarget).removeClass("hidden");

}

function displayStats() {
  attempts++;
  $(".attempts").text(attempts);
  calculateAccuracy();
}

function calculateAccuracy() {
  calculate = Math.round(matches / attempts * 100);
  $(".accuracy").text(calculate + "%");
}
