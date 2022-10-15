export function allLongestStrings(inputArray: string[]): string[] {
  let max = 0
  const resArr: string[] = []
  for (let i = 0; i < inputArray.length - 1; i++) {
    let temp = inputArray[i].length
    if (max < temp) {
      max = temp
    }
  }
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === max) {
      resArr.push(inputArray[j])
    }
  }
  return resArr
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']))
