var  dice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

function rollTheDice () {
  var randomiser = (Math.random()*6);
  randomiser = Math.floor(randomiser);
  return randomiser;
}

var player1score = rollTheDice();
var player2score = rollTheDice();
var player1played = false;
var player2played = false;


document.querySelector(".img1").addEventListener('click', function makePicture1 () {
  document.querySelector(".img1").setAttribute("src", dice[player1score]);
  player1played = true;
  checkGameProgress();
})

document.querySelector(".img2").addEventListener('click', function makePicture2 () {
document.querySelector(".img2").setAttribute("src", dice[player2score]);
player2played = true;
checkGameProgress();
})

function checkGameProgress() {
    if (player1played & player2played) {
      if (player1score>player2score) {
      document.querySelector("h1").innerHTML = "🚩Player one win";
      } else if (player2score>player1score){
      document.querySelector("h1").innerHTML = "Player two win🚩";
      }
      else {document.querySelector("h1").innerHTML = "Nobody win, nobody lose";}
    }
}
