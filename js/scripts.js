//business logic
var gamer= []
var turn = []

function Dice(name, totalscore) {
  this.name = name;

  gamer.push(this);
}

Array.prototype.total = function() {
  return this.reduce(function(p1,p2) {return p1 + p2});
}

//user interface
$(document).ready(function() {

  $("form#dice").submit(function(event){
    var player1 = $("input#player1").val();
    var player2 = $("input#player2").val();
      $("#player1").text(player1);
      $("#player2").text(player2);
      $("form").hide();
      $("#roll").show();
      event.preventDefault();
  });
$("#turn").click(function(event) {
  event.preventDefault();
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
$("#win").click(function(event) {
    change();
    if (gamer[0].total >= 100) {
      alert(gamer[0].name + gamer[0].name);
    } else if (gamer[1].total >= 100) {
      alert(gamer[1].name + gamer[1].name);
    }
});
function Display() {
  $("#Player1").text(gamer[0].name)
  $("#Player2").text(gamer[1].name)
  $("#playertotal1").text(gamer[0].score)
  $("#playertotal2").text(gamer[1].score)
}
function change() {
   if ($("#total").is(":visible")) {
     gamer[0].score = (players[0].score += turn.sum());
     switchArray = [0];
     $("#turnTotal").text(turn)
     $("#turn1").hide();
     $("#turn2").text(gamer[1].name + "'its your turn").show();
     alert(players[0].score);
     Display();
   } else {
     gamer[1].score = (gamer[1].score += turn.sum());
     turn = [0];
     $("#turnTotal").text(turn)
     $("#turn1").hide();
     $("#turn2").text(players[0].name + "its your turn").show();
     Display();
     alert(gamer[1].score);
     }
   }
 });
});
