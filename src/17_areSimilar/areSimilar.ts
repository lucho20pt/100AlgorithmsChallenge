export function areSimilar(a: number[], b: number[]): boolean {
  let count: number = 0
  if (
    a.toString() === b.toString() ||
    a.toString() === b.reverse().toString()
  ) {
    return true
  }
  for (let i = 0; i < a.length; i++) {
    let ai: number = a[i]
    for (let j = 0; j < b.length; j++) {
      let bj: number = b[j]
      if (ai === bj) {
        count++
      }
    }
  }
  return count === a.length && count === b.length
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]))
console.log(areSimilar([1, 2, 3], [2, 1, 3]))
console.log(areSimilar([1, 2, 3], [3, 2, 1]))
console.log(areSimilar([1, 2, 2], [2, 1, 1]))
