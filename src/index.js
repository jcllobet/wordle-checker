function wordle(guess, wordle) {
  if (guess === wordle) return new Array(5).fill('Green')
  let guessArr = Array.from(guess)
  let wordleArr = Array.from(wordle)
  let result = new Array(5).fill('Gray')

  for (let j = 0; j < guessArr.length; j++) {
    if (guessArr[j] === wordleArr[j]) {
      result[j] = 'Green'
      wordleArr[j] = '.'
    }
  }

  for (let i = 0; i < guessArr.length; i++) {
    const letter = guessArr[i]
    let index = wordleArr.indexOf(letter)
    if (index !== -1 && wordleArr[i] !== '.') {
      result[i] = 'Yellow'
      wordleArr[index] = '-'
    }
  }
  return result
}

export default wordle

console.log(wordle('aiaxx', 'xxxia'))
