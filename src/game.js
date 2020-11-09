class Game {
  constructor() {
    this.player1 = new Player({
      imageSrc: 'assets/turkey.png',
      id: 'turkey',
      alt: 'turkey cartoon',
      header: 'Turkey'
    });
    this.player2 = new Player({
      imageSrc: 'assets/bald-eagle.png',
      id: 'bald-eagle',
      alt: 'bald eagle cartoon',
      header: 'Bald Eagle'
    });
    this.squareIDs = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    this.currentPlayer = this.player1;
    this.win = false;
    this.playCount = 0; //needed?
  }

  updateStoredScore() {
    // A way to keep track of the data for the game board
  }

  updatePlayerScore() {
    // A way to save a winning Game’s board data to the correct player’s wins array
  }

  determineTurn() {
    if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
  }

  checkBoard() {
    //Why do I need this?
  }

  clearBoard() {
    setTimeout(function() {
      window.location.reload();
    }, 3000);
  }

}