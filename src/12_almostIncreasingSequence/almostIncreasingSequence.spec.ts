import { almostIncreasingSequence } from './almostIncreasingSequence'

describe(almostIncreasingSequence.name, () => {
  it('Test 1', () => {
    // arrange
    const data = [1, 3, 2, 1]

    // act
    const response = almostIncreasingSequence(data)

    // assert
    expect(response).toBe(false)
  })

  it('Test 2', () => {
    // arrange
    const data = [1, 3, 2]

    // act
    const response = almostIncreasingSequence(data)

    // assert
    expect(response).toBe(true)
  })

  it('Test 3', () => {
    // arrange
    const data = [1, 2]

    // act
    const response = almostIncreasingSequence(data)

    // assert
    expect(response).toBe(true)
  })

  it('Test 4', () => {
    // arrange
    const data = [1, 3]

    // act
    const response = almostIncreasingSequence(data)

    // assert
    expect(response).toBe(true)
  })

  it('Test 5', () => {
    // arrange
    const data = [1, 5, 6, 4, 7]

    // act
    const response = almostIncreasingSequence(data)

    // assert
    expect(response).toBe(true)
  })
})
