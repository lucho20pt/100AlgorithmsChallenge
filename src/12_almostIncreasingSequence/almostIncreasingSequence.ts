export function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0
  for (let i = 1; i < sequence.length; i++) {
    let prev = sequence[i - 1]
    let temp = sequence[i]
    if (!(prev < temp) || !(count <= 1)) {
      count++
    }
  }
  return count <= 1
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))
console.log(almostIncreasingSequence([1, 5, 6, 4, 7]))
