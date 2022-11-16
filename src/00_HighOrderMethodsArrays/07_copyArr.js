import { companies, ages } from './00_arrays'
let ingredients = ['noodles', { list: ['eggs', 'flour', 'water'] }]

/* slice && spread */

// using slice() copy ages and sort ascending
const agesSlice = ages.slice().sort((a, b) => a - b)
// agesSlice
ages === agesSlice

// using spread copy ages and sort ascending
const agesSpread = [...ages].sort((a, b) => a - b)
// agesSpread
ages === agesSpread

// using Array from copy ages and sort ascending
const agesArrayFrom = Array.from(ages).sort((a, b) => a - b)
// agesArrayFrom
ages === agesArrayFrom

// if declaring new var = to arr
const a = ages
a.sort((a, b) => a - b)
a === ages
// a
// ages

// DEEP COPY ARR
const obj = { a: { b: { c: 99 } } }
// let cloneObj = {...obj2} // shallow copy
const cloneObj = JSON.parse(JSON.stringify(obj)) // deep copy

cloneObj.a.b.c = 88
cloneObj.a.b.c // return cloneObj c{88}
obj.a.b.c // return Obj2 still c{99}
