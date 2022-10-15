export function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0
  const res = isEven
    ? Math.abs(a[Math.floor(a.length / 2) - 1])
    : Math.abs(a[Math.floor(a.length / 2)])

  return res
}

console.log(absoluteValuesSumMinimization([2, 4, 7]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]))
