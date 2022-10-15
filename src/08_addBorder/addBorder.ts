export function addBorder(picture: string[]): string[] {
  const border = '*'.repeat(picture[0].length + 2)
  for (let i = 0; i < picture.length; i++) {
    picture[i] = '*' + picture[i] + '*'
  }
  picture.unshift(border)
  picture.push(border)
  return picture
}

console.log(addBorder(['abc', 'ded']))
