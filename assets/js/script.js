$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstCardBack = null;
var secondCardBack = null;

function initializeApp(){
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
  matches++;
} else if (firstCardClicked === null || secondCardClicked === null) {
  return;
}
 else if (firstCardClicked !== secondCardClicked){
  setTimeout(function(){
    $(firstCardBack).removeClass("hidden");
    $(secondCardBack).removeClass("hidden");
  }, 1500);
  firstCardClicked = null;
  secondCardClicked = null;
}

}
