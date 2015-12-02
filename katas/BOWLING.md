## Bowling
Write a program that will calculate the total score for a game of bowling when given a sequence of rolls.

### Requirements
1. Each game of bolwing includes 10 frames per bowler
2. In each frame a bowler gets two tries to knock all of the pins (10) down
3. If all the pins are not knocked down in 2 tries, the score for that frame is the total number of pins knocked down.
4. If all the pins are knocked down after 2 tries, this is called a "spare" and the score for the frame is 10 plus the number of pins knocked down on the next throw (the next turn).
5. If all the pins are knocked down after the first try, this is called a "strike" and the score for the frame is 10 plus the simple total of the pins knocked down on the next two rolls.
6. A bowler's turn is over if a strike is rolled.
7. If a spare or stike is rolled on the last frame, the bowler gets 1 or 2 more rolls, respectively. These rolls are part of the same turn. The bonus throws are only used to calculate the score of the final frame, so the same scoring does not apply to them as does the other frames.
8. The score for the game is the total of all frame scores.
9. Handle invalid rolls

### Tests
Here are some test strings, along with expected output, that can be used as input:

1. `'12345123451234512345'` : `60`
2. `'1-3451234512345-2345'` : `57`
3. 'heartbreak' `'9-9-9-9-9-9-9-9-9-9-'` : `90`
4. `'1/345123451234512345'` : `70`
5. `'1/345/23451234512345'` : `76`
6. `'1/3/5/23451234512345'` : `84`
7. `'5/5/5/5/5/5/5/5/5/5/5'` : `150`
8. `'x345123451234512345'` : `74`
9. `'xx5123451234512345'` : `91`
10. 'perfect game' `'xxxxxxxxxxxx'` : `300`
11. `'1/3/5/-3x1234x2/x9/'` : `124`
12. `'1/3/5/-3x1234x2/xxx'` : `134`
13. `'1/3/5/-3x1/xx2/xxx'` : `173`
14. `'x9/9/9/9/9/9/9/9/9/x'` : `192`
15. `'--------------------'` : 0
16. `'11//9/9/9/9/9/9/9/9/x'`: `new Error('Invalid Roll')`
17. `'x//9/9/9/9/9/9/9/9/x'`: `new Error('Invalid Roll')`

And here's a [bowling calculator](http://www.bowlinggenius.com/) to help with test cases.
