import { companies, ages } from './00_arrays'

/* filter */

// Get 21 and older
const canDrink = ages.filter((age) => age > 18)
// canDrink

// Filter retail companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
)
// retailCompanies.length //=

// Get 80s companies
const eighties = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
)
// eighties.length //=

// Get companies that lasted 10 years or more
const tenYearsMore = companies.filter(
  (company) => company.end - company.start >= 10
)
// tenYearsMore.length //=
