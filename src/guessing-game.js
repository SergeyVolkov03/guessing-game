class GuessingGame {
    constructor() {}
  
    setRange(min, max) {
      this.maxValue = max;
      this.minValue = min;
    }
  
    guess() {
      this.guessValue = Math.round((this.maxValue + this.minValue) / 2);
      return this.guessValue;
    }
  
    lower() {
      this.maxValue = this.guessValue;
    }
  
    greater() {
      this.minValue = this.guessValue;
    }
  }

module.exports = GuessingGame;
