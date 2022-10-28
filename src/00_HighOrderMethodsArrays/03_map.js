import { companies, ages } from './00_arrays'

/* map */

// Create array of company names
const companyNames1 = companies.map((company) => company.name)
// companyNames1

let companyNames2 = []
companies.map((company) => (companyNames2 = [...companyNames2, company.name]))
// companyNames2

// Ages by decades
const ageByDecades = ages.map((age) => Math.trunc(age / 10) * 10)
// ageByDecades

// Ages times 2
const ageTimesTwo = ages.map((age) => age * 2)
// ageTimesTwo
