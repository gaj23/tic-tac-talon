var game = new Game();
// where should this global variable exist? --> inside of my game.js, but still not sure how to pass in my two players as parameters?

var gameboard = document.querySelector('.gameboard');
var restartButton = document.querySelector('button');
var header = document.querySelector('#player-turn');

gameboard.addEventListener('click', manageGamePlay);
restartButton.addEventListener('click', restartGame);

function manageGamePlay(event) {
  game.determineTurn();
  var square = event.target;
  if (square.innerHTML !== '') {
    for (var i = 0; i < game.squareIDs.length; i++) {
      if (square.id === game.squareIDs[i]) {
        toggleToken(square);
        toggleHeader();
      }
    }
  }
}

//can I refactor by passing in parameters instead? aka currentPlayer?
function toggleHeader() {
  if (header.innerText.includes('Turkey')) {
    header.innerText = "Bald Eagle's turn";
  } else {
    header.innerText = "Turkey's Turn";
  }
}

//Can I refactor using parameters/passing in game.currentPlayer? & interpolating the src, alt, and id?
function toggleToken(square) {
  if (game.playCount === 0) {
    square.innerHTML = '<img src="assets/bald-eagle.png" alt="bald eagle cartoon" class="board-image" id="player-eagle">';
  } else {
    square.innerHTML = '<img src="assets/turkey.png" alt="turkey cartoon" class="board-image" id="player-turkey">';
  }
}




//this manages the entirety of the game play
//it asks three questions: who's turn is it? Who's token is being placed? And has the winning scienarios been met?
//and it fires all three of the functions/questions for every click!

//inside of this function the three methods inside of game.js will fire: determineTurn, checkBoard, clearBoard

//in conjunction with determineTurn, I feel as if if will be necessary to thus keep the change of the innerHTML of our header in another function.

function restartGame() {
  alert('Wow! You pushed the button!');
  localStorage.clear();
  var eagleScore = document.querySelector('.eagle-score');
  var turkeyScore = document.querySelector('.turkey-score');
  eagleScore.innerText = '0';
  turkeyScore.innerText = '0';
}