export function alternatingSums(a: number[]): number[] {
  let team1: number = 0
  let team2: number = 0
  const totalWeights: number[] = []
  for (let i = 0; i < a.length; i++) {
    let isEven = i % 2 === 0
    if (isEven) {
      team1 += a[i]
    } else {
      team2 += a[i]
    }
  }
  totalWeights.push(team1)
  totalWeights.push(team2)

  return totalWeights
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
