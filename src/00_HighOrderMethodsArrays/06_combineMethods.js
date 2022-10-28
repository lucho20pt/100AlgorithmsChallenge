import { companies, ages } from './00_arrays'

/* Combine Methods */

// ages times 2 =>
// get ages over 40 =>
// sort all ages =>
// add all ages together

const combined = ages
  .map((value) => value * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((prev, curr) => (prev += curr), 0)
combined
