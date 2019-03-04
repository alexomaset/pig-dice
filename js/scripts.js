//business logic
var player1 = "";
var player2 = "";

var dice = function() {
   return Math.floor(6*Math.random())+1;
}

function Player(turn) {
  this.playerName;
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;


  // player 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  } else {
  this.tempscore += this.roll;
  }
}
