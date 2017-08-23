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

Player.prototype.add = function(roll){
   this.turnScore += roll;
}

Player.prototype.hold = function(turnScore){
  this.score += this.turnScore;
}

Player.prototype.remove = function(turnScore) {
  this.turnScore = 0;
}


// Interface Logic
$(document).ready(function(){
  var playerOne = new Player(0, 0);
  var playerTwo = new Player(0, 0);
  $("#rollOne").click(function(event){
    var roll = getRandomIntInclusive(1,6);
    console.log(roll);
    if(roll === 1) {
      playerOne.remove(playerOne.turnScore)
    } else {
      playerOne.add(roll);
    }
  });
  $("#holdOne").click(function(event){
    playerOne.hold(playerOne.turnScore);
    console.log(playerOne.score);
  });
});
