class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    for (let i = 0; i < this.cards.length; i++) {
      let p = Math.floor(Math.random() * this.cards.length);
      let aux = this.this.cards[p];
      this.cards[p] = this.cards[i];
      this.cards[i] = aux;
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      return this.pairsGuessed++;
    } else {
      return this.pairsGuessed;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsClicked === 7) {
      return;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
