//business logic
var gamer= []
var turn = []

function Dice(name, totalscore) {
  this.name = name;
  this.score = totalscore;
  gamer.push(this)
}

Array.prototype.total = function() {
  return this.reduce(function(p1,p2) {return p1 + p2});
}

function Player(turn) {
  this.playerName;
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;


  // player
Player.prototype.roll = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  } else {
  this.tempscore += this.roll;
  }
}

//user interface
$("#turn").click(function(event) {
  event.prevent.Default();
  $("#playertotal").show();
  $("#results").show();
var dice = function() {
   return Math.floor(6*Math.random())+1;
}
if (dice()!==1) {
  turn.push(dice());
  $("#playertotal").text(dice());
  $("#results").text(dice().total)
} else {
  changePLay();
}
$("#win").click function(event) {
    change();
    if (gamer[0].total >= 100) {
      alert(gamer[0].name + gamer[0].name);
    } else if (gamer[1].total >= 100) {
      alert(gamer[1].name + gamer[1].name);
    }
});
