class Player {

  constructor(playerObj) {
    this.imageSrc = playerObj.imageSrc;
    this.id = playerObj.id;
    this.alt = playerObj.alt;
    this.header = playerObj.header;
    this.score = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.header, JSON.stringify(this.score));
  }

  retrieveWinsFromStorage() {
    this.score = JSON.parse(localStorage.getItem(this.header));
    if (this.score === null || this.score === undefined) {
      this.score = 0;
    }
    return this.score
  }

}