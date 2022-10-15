export function addTwoDigits(n: any): number {
  // num => toString => toStringsArray => toNumsArray
  const numArr = n.toString().split('').map(Number)

  return numArr.reduce((a: number, b: number) => a + b, 0)
}

console.log(addTwoDigits(29))
console.log(addTwoDigits(99))
