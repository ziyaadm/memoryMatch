$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;
var firstCardBack = null;
var secondCardBack = null;
var max_matches = 2;
var modal = null;
var attempts = 0;
var games_played = 0;
var accuracy = 0;

function initializeApp(){
  modal = $(".modal")
  $(".cards").on("click", handleCardClick);
}

function calculateAccuracy(){
accuracy = Math.floor((matches / attempts) * 100);
console.log(accuracy);
displayStats();
//return accuracy;
}

function displayStats(){
$(".playedNum").text(games_played);
$(".attemptNum").text(attempts);
$(".accuracyNum").text(accuracy);
}

function handleCardClick(event){
  displayStats();
  $(event.currentTarget).find(".back").addClass("hidden");

  if (firstCardClicked === null){

    firstCardClicked = $(event.currentTarget).find(".front").css("background-image");
    firstCardBack = $(event.currentTarget).find(".back");
    console.log("first card clicked",firstCardClicked);
    displayStats();

  }else {
    secondCardClicked = $(event.currentTarget).find(".front").css("background-image");
    secondCardBack = $(event.currentTarget).find(".back");
    console.log("second card clicked",secondCardClicked);
    attempts++;
    console.log(attempts);
    calculateAccuracy();
  }

if(firstCardClicked === secondCardClicked){
  console.log("card match");
  firstCardClicked = null;
  secondCardClicked = null;
  matches++;
  calculateAccuracy();
  if (matches === max_matches) {
    games_played++
    displayStats();
    $(modal).removeClass("hidden");}
} else if (firstCardClicked === null || secondCardClicked === null) {
  return;
} else if (firstCardClicked !== secondCardClicked){
  calculateAccuracy();
  setTimeout(function(){
    $(firstCardBack).removeClass("hidden");
    $(secondCardBack).removeClass("hidden");
  }, 1500);
  firstCardClicked = null;
  secondCardClicked = null;
  }
}
