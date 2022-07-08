function wordle(guess, wordle) {
  let guessArr = guess.split('')
  let wordleArr = wordle.split('')
  let result = []
  for (let i = 0; i < guessArr.length; i++) {
    let letter = guessArr[i]
    let index = wordleArr.indexOf(letter)
    if (letter === wordleArr[i]) {
      result.push('Green')
    } else if (
      wordle.includes(letter) && // letter in array
      !(guessArr[index] === wordleArr[index]) // letter not green somewhere else in
    ) {
      result.push('Yellow')
    } else {
      result.push('Gray')
    }
  }
  return result
}

export default wordle

//wordle('steak', 'stake') // returns ["Green", "Green", "Yellow", "Yellow", "Yellow"]
//wordle('aiaia', 'iaiia')
//console.log(wordle('aiaia', 'xxxia'))
