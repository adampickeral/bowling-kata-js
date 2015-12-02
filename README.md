# Code Katas in Javascript

### Setup and Tests
Run `scripts/setup` to install dependencies needed to transpile js and run tests
Run `scripts/test` to run tests. This will leave the test runner running while watching for code changes.

### Katas
1. [Bowling](katas/BOWLING.md)
2. [Game of Life](katas/GAMEOFLIFE.md)

### Kata Constraints
Firstly, the goal of all code written should aim to satisfy the four principles of simple design:

1. Passes all the tests
2. Expresses every idea that we need to express
3. Says everything once and only once
4. Has no superfluous parts

Secondly, here are some constraints you can apply to your coding session to help drive you towards different aspects of simple design:

1. TDD (you should always do this)
2. No `if` statements
3. No loops
4. Small methods (< 4 lines)
6. Immutables only
7. Verbs instead of nouns
8. Code Swap
9. [Object Calisthenics](http://williamdurand.fr/2013/06/03/object-calisthenics/)
  1. Only one level of indentation per method
  2. Don't use the `else` keyword
  3. Wrap all primitives and strings
  4. First class collections
  5. One dot per line
  6. Don't abbreviate
  7. Keep all entities small
  8. No classes with more than two instance variables
  9. No getters/setters/properties
