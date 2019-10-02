$(document).ready(initializeApp);

function initializeApp(){
  $(".cards").find(".back").on("click", handleCardClick);
}

function handleCardClick(event){
  $(event.currentTarget).addClass("hidden");
  console.log(event);
}
