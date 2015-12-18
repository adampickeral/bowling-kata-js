import { List } from 'immutable';

const NUM_FRAMES = 10;
const NUM_PINS = 10;

class Main {
  calculate(scoresheet) {
    var frameScores;

    frameScores = this.calculateFrameScores(List().merge(scoresheet.split('')));
    return this.addUpFrameScores(frameScores);
  }

  calculateFrameScores(frames) {
    var frameScores, frame;

    frame = 1;
    frameScores = List();
    while(frame <= NUM_FRAMES) {
      frameScores = frameScores.push(this.getFrameScore(frames));
      frames = this.nextFrame(frames);
      frame++;
    }

    return frameScores;
  }

  addUpFrameScores(frameScores) {
    return frameScores.reduce((r, n) => {
      return r + n;
    });
  }

  nextFrame(frames) {
    if (this.isStrike(frames.first())) {
      return this.removeRoll(frames);
    } else {
      frames = this.removeRoll(frames);
      return this.removeRoll(frames);
    }
  }

  removeRoll(frames) {
    return frames.shift();
  }

  getFrameScore(frames) {
    let firstRoll = frames.first();
    this.checkForValidRoll(firstRoll);

    if (this.isStrike(firstRoll)) {
      return this.strikeScore(frames);
    } else if (this.isSpare(this.nextRoll(frames))) {
      return this.spareScore(this.removeRoll(frames));
    } else {
      let secondRoll = this.nextRoll(frames);
      this.checkForValidRoll(secondRoll);
      return this.getRawFrameScore(frames);
    }
  }

  checkForValidRoll(roll) {
    if (!this.isStrike(roll) && !this.isNormalRoll(roll)) {
      throw new Error('Invalid Roll');
    }
  }

  strikeScore(frames) {
    frames = this.removeRoll(frames);
    return NUM_PINS + this.getRawFrameScore(frames);
  }

  spareScore(frames) {
    return NUM_PINS + this.getRawRollScore(this.nextRoll(frames));
  }

  nextRoll(frames) {
    return this.removeRoll(frames).first();
  }

  getRawFrameScore(frames) {
    var firstRollScore, secondRollScore;

    firstRollScore = this.getRawRollScore(frames.first());
    secondRollScore = this.getRawRollScore(this.nextRoll(frames), firstRollScore);

    return firstRollScore + secondRollScore;
  }

  getRawRollScore(roll, firstRollScore = 0) {
    switch (roll) {
      case 'x':
        return NUM_PINS;
      case '-':
        return 0;
      case '/':
        return NUM_PINS - firstRollScore;
      default:
        return this.toNumber(roll);
    }
  }

  isStrike(roll) {
    return roll === 'x';
  }

  isSpare(roll) {
    return roll === '/';
  }

  isNormalRoll(roll) {
    return this.isANumber(roll) || this.isGutter(roll);
  }

  isGutter(roll) {
    return roll === '-';
  }

  isANumber(roll) {
    return !isNaN(this.toNumber(roll));
  }


  toNumber(roll) {
    return parseInt(roll, 10);
  }
}

export default {
  Main: Main
};
