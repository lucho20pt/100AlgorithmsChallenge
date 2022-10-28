import { companies, ages } from './00_arrays'

/* sort */

// Sort companies by start year
const sortedByYear = companies.sort((a, b) => {
  a.start > b.start ? 1 : -1
})
// sortedByYear

// Sort ages
const sortedAges = ages.sort((a, b) => a - b)
// sortedAges

// Sort ages reverse
const sortAgesreverse = ages.sort((a, b) => b - a)
sortAgesreverse
