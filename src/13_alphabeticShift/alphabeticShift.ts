export function alphabeticShift(inputString: string): string {
  let newStr: string[] = []
  for (let i = 0; i < inputString.length; i++) {
    newStr.push(String.fromCharCode(inputString[i].charCodeAt(0) + 1))
  }
  let res: string = newStr.join('').replace(/{/g, 'a')
  return res
}

console.log(alphabeticShift('crazy'))
