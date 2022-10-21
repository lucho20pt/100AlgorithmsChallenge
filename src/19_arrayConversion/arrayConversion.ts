export function arrayConversion(inputArray: number[]): number {
  let tempArr: number[] = []
  let count: number = 0

  const sum = (a: number, b: number): number => {
    return a + b
  }
  const prod = (a: number, b: number): number => {
    return a * b
  }

  const recursive = () => {
    if (inputArray.length === 1) return inputArray[0]
    const isEven = count % 2 === 0

    for (let i = inputArray.length / 2; i > 0; i--) {
      let y = inputArray.shift()
      let z = inputArray.shift()

      if (isEven) tempArr.push(sum(y, z))
      else tempArr.push(prod(y, z))
    }

    inputArray = tempArr
    count++
    recursive()
  }

  recursive()

  return inputArray[0]
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))
