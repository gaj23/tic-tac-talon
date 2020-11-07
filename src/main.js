var gameboard = document.querySelector('.gameboard');
var restartButton = document.querySelector('button');

gameboard.addEventListener('click', manageGamePlay);
restartButton.addEventListener('click', restartGame)

function manageGamePlay(event) {
  var square = event.target
  if (square.className === 'square') {
    console.log('lolwut');
  }
}

function restartGame() {
  alert('This is the last thing you\'ll do!');
}




//this manages the entirety of the game play
//it asks three questions: who's turn is it? Who's token is being placed? And has the winning scienarios been met?
//and it fires all three of the functions/questions for every click!

//inside of this function the three methods inside of game.js will fire: determineTurn, checkBoard, clearBoard

//in conjunction with determineTurn, I feel as if if will be necessary to thus keep the change of the innerHTML of our header in another function.