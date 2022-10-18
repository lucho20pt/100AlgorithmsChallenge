export function alphabetSubsequence(s: string): boolean {
  for (let i = 1; i <= s.length - 1; i++) {
    let prev = s.charCodeAt(i - 1)
    let temp = s.charCodeAt(i)
    if (temp <= prev) {
      return false
    }
  }
  return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
