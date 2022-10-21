import { arrayMaxConsecutiveSum } from './arrayMaxConsecutiveSum'

describe(arrayMaxConsecutiveSum.name, () => {
  it('Test 1', () => {
    // arrange
    const data = [2, 3, 5, 1, 6]
    const count = 2

    // act
    const response = arrayMaxConsecutiveSum(data, count)

    // assert
    expect(response).toBe(8)
  })
  it('Test 2', () => {
    // arrange
    const data = [1, 6, 2, 3, 6]
    const count = 2

    // act
    const response = arrayMaxConsecutiveSum(data, count)

    // assert
    expect(response).toBe(9)
  })
  it('Test 3', () => {
    // arrange
    const data = [2, 3, 5, 1, 6]
    const count = 3

    // act
    const response = arrayMaxConsecutiveSum(data, count)

    // assert
    expect(response).toBe(12)
  })
})
