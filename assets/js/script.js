$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstCardBack = null;
var secondCardBack = null;
var max_matches = 2;
var modal = null;

function initializeApp(){
  modal = $(".modal")
  $(".cards").on("click", handleCardClick);
}

function handleCardClick(event){

  $(event.currentTarget).find(".back").addClass("hidden");

  if (firstCardClicked === null){

    firstCardClicked = $(event.currentTarget).find(".front").css("background-image");
    firstCardBack = $(event.currentTarget).find(".back");
     console.log("first card clicked",firstCardClicked);
  }else {
    secondCardClicked = $(event.currentTarget).find(".front").css("background-image");
    secondCardBack = $(event.currentTarget).find(".back");
    console.log("second card clicked",secondCardClicked);
  }

if(firstCardClicked === secondCardClicked){
  console.log("card match");
  firstCardClicked = null;
  secondCardClicked = null;
  matches++;
  if (matches === max_matches) {
    $(modal).removeClass("hidden");}
} else if (firstCardClicked === null || secondCardClicked === null) {
  return;
} else if (firstCardClicked !== secondCardClicked){
  setTimeout(function(){
    $(firstCardBack).removeClass("hidden");
    $(secondCardBack).removeClass("hidden");
  }, 1500);
  firstCardClicked = null;
  secondCardClicked = null;
  }
}
