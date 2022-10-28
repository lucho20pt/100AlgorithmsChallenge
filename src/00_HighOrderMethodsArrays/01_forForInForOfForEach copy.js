import { companies, ages } from './00_arrays'

/* for, forIn, forOf, ForEach */

// for => companies category
for (let i = 0; i < companies.length; i++) {
  const category = companies[i].category
  // category
}

// for IN => companies category
for (const index in companies) {
  const category = companies[index].category
  // category
}

// for OF => companies category
for (const iterator of companies) {
  const category = iterator.category
  // category
}

// for EACH => companies category
companies.forEach((company) => {
  const category = company.category
  // category
})
