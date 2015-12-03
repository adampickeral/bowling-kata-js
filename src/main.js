const TOTAL_PINS = 10;

class Main {
  calculate(scoreSheet) {
    var rolls, currentFrame, frameScores;

    const numFrames = 10;

    frameScores = [];
    currentFrame = 0;
    rolls = scoreSheet.split('');

    while (currentFrame < numFrames) {
      currentFrame++;
      frameScores.push(this.calculateFrame(rolls));
      if (this.frameHasStrike(rolls[0])) {
        this.processRoll(rolls);
      } else {
        this.processTwoRolls(rolls);
      }
    }

    return frameScores.reduce((prevVal, curVal) => {
      return prevVal + curVal;
    });
  }

  processTwoRolls(rolls) {
    this.processRoll(rolls);
    this.processRoll(rolls);
  }

  processRoll(rolls) {
    return rolls.shift();
  }

  calculateFrame(rolls) {
    var rollsCopy, firstRoll, secondRoll;

    rollsCopy = Array.from(rolls);
    firstRoll = rolls[0];
    secondRoll = rolls[1];

    if (this.frameHasStrike(firstRoll)) {
      return this.calculateStrikeScore(rollsCopy);
    }

    if (this.frameHasSpare(firstRoll, secondRoll)) {
      return this.calculateSpareScore(rollsCopy);
    }

    if (this.frameHasNormalRolls(firstRoll, secondRoll)) {
      return this.calculateNormalScore(rollsCopy);
    }

    throw new Error('Invalid Roll');
  }

  calculateStrikeScore(rolls) {
    this.processRoll(rolls);
    return this.calculateTwoRolls(TOTAL_PINS, rolls);
  }

  calculateSpareScore(rolls) {
    this.processTwoRolls(rolls);
    return this.calculateFrameScore(TOTAL_PINS, this.processRoll(rolls));
  }

  calculateNormalScore(rolls) {
    return this.calculateTwoRolls(0, rolls);
  }

  calculateTwoRolls(baseTotal, rolls) {
    return this.calculateFrameScore(baseTotal, this.processRoll(rolls), this.processRoll(rolls));
  }

  calculateFrameScore(baseTotal, firstRoll, secondRoll = 0) {
    return baseTotal + this.getRawScore(firstRoll) + this.getRawScore(secondRoll, firstRoll);
  }

  getRawScore(roll, previousRoll = 0) {
    if (this.isStrike(roll)) {
      return TOTAL_PINS;
    }

    if (this.isSpare(roll)) {
      return TOTAL_PINS - previousRoll;
    }

    return this.getNormalScore(roll);
  }

  getNormalScore(roll) {
    if (this.isNumber(roll)) {
      return this.toNumber(roll);
    }
    return 0;
  }

  frameHasStrike(firstRoll) {
    return this.isStrike(firstRoll);
  }

  frameHasSpare(firstRoll, secondRoll) {
    return (this.isNumber(firstRoll) || this.isGutter(firstRoll)) && (this.isSpare(secondRoll));
  }

  frameHasNormalRolls(firstRoll, secondRoll) {
    return this.isValidRoll(firstRoll) && this.isValidRoll(secondRoll);
  }

  isValidRoll(roll) {
    return this.isNumber(roll) || this.isGutter(roll);
  }

  isNumber(roll) {
    return !isNaN(this.toNumber(roll));
  }

  isStrike(roll) {
    return roll === 'x';
  }

  isSpare(roll) {
    return roll === '/';
  }

  isGutter(roll) {
    return roll === '-';
  }

  toNumber(roll) {
    return parseInt(roll, 10);
  }
}

export default {
  Main: Main
};
