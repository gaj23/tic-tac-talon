class Game {
  constructor(player1, player2) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
  }

  updateStoredScore() {
    // A way to keep track of the data for the game board
  }

  updatePlayerScore() {
    // A way to save a winning Game’s board data to the correct player’s wins array
  }

  determineTurn() {
    // A way to keep track of which player’s turn it currently is
  }

  checkBoard() {
    // A way to check the Game’s board data for win conditions
    // A way to detect when a game is a draw (no one has won
  }

  clearBoard() {
    // A way to reset the Game’s board to begin a new game
    //use timeout here?
  }

  restartGame() {
    //should this be here?
  }

}