export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let max: number = 0

  // sum args
  const sumHandler = (...args: number[]) => args.reduce((a, b) => a + b)

  for (let i = 0; i < inputArray.length; i++) {
    let tempArr: number[] = []
    let sum: number
    tempArr = inputArray.slice(i, k + i)

    if (tempArr.length === k) {
      sum = sumHandler(...tempArr)
    }

    if (max <= sum) max = sum
  }

  return max
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))
console.log(arrayMaxConsecutiveSum([1, 5, 2, 3, 6], 2))
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3))
