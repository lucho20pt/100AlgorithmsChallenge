export function adjacentElementsProduct(inputArray: number[]): number {
  let product = 0
  for (let i = 1; i < inputArray.length - 1; i++) {
    let temp = inputArray[i] * inputArray[i + 1]
    if (product < temp) {
      product = temp
    }
  }
  return product
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
