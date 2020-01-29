$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;
var firstCardBack = null;
var secondCardBack = null;
var max_matches = 1;
var modal = null;
var attempts = 0;
var games_played = 0;
var accuracy = 0;

function initializeApp(){
  modal = $(".modal")
  $(".cards").on("click", handleCardClick);
}
function calculateAccuracy(){
accuracy = Math.floor((matches / attempts) * 100) + "%";
displayStats();
//return accuracy;
}
function displayStats(){
$(".playedNum").text(games_played);
$(".attemptNum").text(attempts);
$(".accuracyNum").text(accuracy);
}
function resetStats(){
  matches = null;
  attempts = null;
  accuracy = null;
  games_played++;
  displayStats();
  $(modal).addClass("hidden");
  $(".back").removeClass("hidden");
}
function handleCardClick(event){
  displayStats();
  $(event.currentTarget).find(".back").addClass("hidden");

  if (firstCardClicked === null){
    firstCardClicked = $(event.currentTarget).find(".front").css("background-image");
    firstCardBack = $(event.currentTarget).find(".back");
    displayStats();
  }else {
    secondCardClicked = $(event.currentTarget).find(".front").css("background-image");
    secondCardBack = $(event.currentTarget).find(".back");
    attempts++;
    calculateAccuracy();
    $(".cards").off("click");
  }

  if(firstCardClicked === secondCardClicked){
    firstCardClicked = null;
    secondCardClicked = null;
    matches++;
    $(".cards").on("click", handleCardClick);
    calculateAccuracy();
    if (matches === max_matches) {
      games_played++
      displayStats();
      $(modal).removeClass("hidden");
      $("#resetButton").on("click", resetStats);
      }
}  else if (firstCardClicked === null || secondCardClicked === null) {
    return;
}  else if (firstCardClicked !== secondCardClicked){
    calculateAccuracy();
    setTimeout(function(){
      $(firstCardBack).removeClass("hidden");
      $(secondCardBack).removeClass("hidden");
      $(".cards").on("click", handleCardClick);
    }, 1500);
    firstCardClicked = null;
    secondCardClicked = null;
    }
    else if (firstCardClicked === firstCardClicked){
      return;
    }
  }
