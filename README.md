# Warm-up Problem - Wordle Checker

β¬π¨β¬β¬β¬  
β¬π©β¬π¨β¬  
π¨π©β¬π¨β¬  
β¬π©π¨π©β¬  
β¬π©π¨π©π¨  
π©π©π©π©π©

Given a predetermined 5 letter Wordle, and a 5 letter guess, return the appropriate response.

Wordle is a game owned by the New York Times in which a 5 letter 'wordle' is chosen every day. The object of the game is to guess the word. The user types and submits a 5 letter guess. After a guess is submitted, correct letters in their correct position are highlighted in green. Letters in the word in incorrect positions are marked in yellow. Letters not within the word are marked in gray. The game is complete when all letters are marked in green.

For this exercise, return an array of strings with 5 indices in which each index is marked with a "Gray", "Yellow", or "Green" based on the submitted guess and correct Wordle.

For example, if the wordle is "Steak" and the guess is "Stake", the returned array should be ["Green", "Green", "Yellow", "Yellow", "Yellow"]

```js
wordle('steak', 'stake') // returns ["Green", "Green", "Yellow", "Yellow", "Yellow"]
```

Beware of the following case: Let's say the correct wordle contains one 'i' in position three. The following guess is submitted: 'aaiia'. The returned array should have "Green" in position three, and "Gray" in position four, not "Yellow", because the letter has already been correctly marked, and is thus no longer open in the wordle. Let's say, however, that the correct wordle also contains an 'i' in position one. There would then be a yellow in position four because the 'i' should also be in position one.

## Instructions

1. **Fork** β Fork this repo so you have your own copy. Run `git clone` from your own fork.
2. **Setup** β Run `yarn` to install all dependencies.
3. **Work**Β β Implement your solution in the `src/index.js` file. Run `yarn test` to ensure your solution works by passing all the tests.
4. **Deliver** βΒ When you're finished, deliver your work by committing, pushing, and creating a pull request.\

```
(In the terminal)
~$ git add .
~$ git commit -m 'My solution'
~$ git push origin main
```

When the push successfully finishes, go to your GitHub fork and open a Pull Request from there.
