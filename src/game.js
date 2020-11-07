class Game {
  constructor() {
    this.player1 = new Player({
      imageSrc: 'assets/turkey.png',
      id: 'turkey',
      alt: 'turkey cartoon'
    });
    this.player2 = new Player({
      imageSrc: 'assets/bald-eagle.png',
      id: 'bald-eagle',
      alt: 'bald eagle cartoon'
    });
    this.squareIDs = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  }

  updateStoredScore() {
    // A way to keep track of the data for the game board
  }

  updatePlayerScore() {
    // A way to save a winning Game’s board data to the correct player’s wins array
  }

  determineTurn() {

    if (header.innerText.includes('Turkey')) {
      header.innerText = "Bald Eagle's turn";

    } else {
      header.innerText = "Turkey's Turn"

    }
  }

  checkBoard() {
    // A way to check the Game’s board data for win conditions
    // A way to detect when a game is a draw (no one has won
  }

  clearBoard() {
    // A way to reset the Game’s board to begin a new game
    //use timeout here?
  }

}