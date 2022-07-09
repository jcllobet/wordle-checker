import wordle from '../src/index.js'

describe('Wordle', () => {
  it('Testing a match', () => {
    expect(wordle('codes', 'codes')).toEqual([
      'Green',
      'Green',
      'Green',
      'Green',
      'Green',
    ])
  })

  it('Testing yellow and gray', () => {
    expect(wordle('kdoes', 'codes')).toEqual([
      'Gray',
      'Yellow',
      'Yellow',
      'Green',
      'Green',
    ])
  })

  it('Special Case: Gray after letter has already been fulfilled', () => {
    expect(wordle('aiaia', 'xxxia')).toEqual([
      'Gray',
      'Gray',
      'Gray',
      'Green',
      'Green',
    ])
  })

  it('Special Case: Yellow after letter has already been fulfilled but another case exists', () => {
    expect(wordle('aiaia', 'iaiia')).toEqual([
      'Yellow',
      'Yellow',
      'Gray',
      'Green',
      'Green',
    ])
  })
  it('Special Case: Yellow before Green', () => {
    expect(wordle('aiaxx', 'xxxia')).toEqual([
      'Yellow',
      'Yellow',
      'Gray',
      'Yellow',
      'Yellow',
    ])
  })
})
