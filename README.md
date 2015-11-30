# bowling-kata-js
Bowling Code Kata in Javascript

### Setup and Tests
Run `scripts/setup` to install dependencies needed to transpile js and run tests
Run `scripts/test` to run tests. This will leave the test runner running while watching for code changes.

### Bowling Requirements
1. Each game of bolwing includes 10 frames per bowler
2. In each frame a bowler gets two tries to knock all of the pins (10) down
3. If all the pins are not knocked down in 2 tries, the score for that frame is the total number of pins knocked down.
4. If all the pins are knocked down after 2 tries, this is called a "spare" and the score for the frame is 10 plus the number of pins knocked down on the next throw (the next turn).
5. If all the pins are knocked down after the first try, this is called a "strike" and the score for the frame is 10 plus the simple total of the pins knocked down on the next two rolls.
6. A bowler's turn is over if a strike is rolled.
7. If a spare or stike is rolled on the last frame, the bowler gets 1 or 2 more rolls, respectively. These rolls are part of the same turn. The bonus throws are only used to calculate the score of the final frame, so the same scoring does not apply to them as does the other frames.
8. The score for the game is the total of all frame scores.