import { companies, ages } from './00_arrays'

/* reduce */

// Ages sum
let agesSum1 = 0
for (let i = 0; i < ages.length; i++) {
  agesSum1 += ages[i]
}
// agesSum1

const agesSum2 = ages.reduce((prev, curr) => (prev += curr), 0)
agesSum2

// Get total years for all companies
const totalYearsCompanies = companies.reduce(
  (prev, curr) => (prev += curr.end - curr.start), 0
)
totalYearsCompanies
