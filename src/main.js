var game = new Game();
// where should this global variable exist? --> inside of my game.js, but still not sure how to pass in my two players as parameters?

var gameboard = document.querySelector('.gameboard');
var restartButton = document.querySelector('button');
var header = document.querySelector('#player-turn')

gameboard.addEventListener('click', manageGamePlay);
restartButton.addEventListener('click', restartGame);

function manageGamePlay(event) {
  var square = event.target
  if (square.innerHTML !== '') {
    for (var i = 0; i < game.squareIDs.length; i++) {
      if (square.id === game.squareIDs[i] && header.innerText.includes('Turkey')) {
        square.innerHTML = `<img src=${game.player1.imageSrc} alt=${game.player1.alt} class="board-image" id=${game.player1.id}>`
        game.determineTurn();
      } else {
        game.determineTurn();
      }
    }

  }
}

function toggleToken() {}

//why is my image not toggling?



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