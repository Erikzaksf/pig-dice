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
  var diceRolls = [];
  var playerOne = new Player(0, 0);
  var playerTwo = new Player(0, 0);
  $("#play").click(function(event){
    $("#playerOneButtons").show();
    $("#play").hide();
    $("#reset").show();
  });
// PLAYER ONE AREA
  $("#rollOne").click(function(event){
    $("#playerTwoRolls").empty();
    var roll = getRandomIntInclusive(1,6);
    if(roll === 1) {
      $("#playerOneRolls").append("<h1>YOU PIGGED OUT</h1>");
      playerOne.remove(playerOne.turnScore);
      var roll = getRandomIntInclusive(1,6);
      for (var i = 0; i < 2; i++) {
        if(roll === 1) {
          $("#playerTwoRolls").append("<h1>YOU PIGGED OUT</h1>");
          playerTwo.remove(playerTwo.turnScore);
          i = 2;
        }else {
          playerTwo.add(roll);
          $("#playerTwoRolls").append("<li>" + roll + "</li><br>");
        }
        playerTwo.hold(playerTwo.turnScore);
        $("#playerTwoScore").text(playerTwo.score);
        playerTwo.remove(playerTwo.turnScore);
      }
    } else {
      playerOne.add(roll);
      $("#playerOneRolls").append("<li>" + roll + "</li><br>");
    }
  });

  $("#holdOne").click(function(event){
    playerOne.hold(playerOne.turnScore);
    $("#playerOneRolls").empty();
    $("#playerOneScore").text(playerOne.score);
    if(playerOne.score >= 100) {
      alert("Player One winner winner chicken dinner!");
    } else {
        playerOne.remove(playerOne.turnScore);
        }
        for (var i = 0; i < 2; i++) {
          var roll = getRandomIntInclusive(1,6);
          if(roll === 1) {
            $("#playerTwoRolls").append("<h1>YOU PIGGED OUT</h1>");
            playerTwo.remove(playerTwo.turnScore);
            i = 2;
          }else {
            playerTwo.add(roll);
            $("#playerTwoRolls").append("<li>" + roll + "</li><br>");
          }
        }
        playerTwo.hold(playerTwo.turnScore);
        playerTwo.remove(playerTwo.turnScore);
        if (playerTwo.score >= 100) {
          alert("Player Two winner winner chicken dinner!");
        }else{
          $("#playerTwoScore").text(playerTwo.score);
        }

  });

});
