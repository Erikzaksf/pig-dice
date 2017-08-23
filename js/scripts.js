// Business Logic
function Player(score, turnScore){
  this.score = score;
  this.turnScore = turnScore;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




// Interface Logic
$(document).ready(function(){
  $("#play").click(function(event){
    var playerOne = new Player(0, 0);
    var playerTwo = new Player(0, 0);
  })
  $("#rollOne").click(function(event){
    var roll = getRandomIntInclusive(1,6);
    console.log(roll);
  });


});
