const xObj = {
  a: 1,
  b: 2
}
const xString = 'olleh'

/* exercises */
// #1 - return array only with the values of xObj
// #2 - given the s:string return a reversed string
// #3 - modify obj to make this work obj.getA().obj.getB()
// #4 - Given [1,2].print() get the result = 1,2
// #5 - make this work
// #6 - clone the obj and get the log work
// #7 - give a[] and b[] create a merged c[] and keep it sorted
// #8 - what will return in the log ? then make the log return the x = 1

// #1 - return array only with the values of xObj
let xArr = Object.values(xObj)
xArr

// #2 - given the s:string return a reversed string
let myString = xString.split('').reverse().join('')
// myString.reduceRight((prev, curr) => (prev += curr))
myString //=

// #3 - modify obj to make this work obj.getA().obj.getB()
const obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a)
    return this
  },
  getB() {
    console.log(this.b)
    return this
  }
}
obj.getA().getB() //=

// #4 - Given [1,2].print() get the result = 1,2
let arr = [1, 2]
Array.prototype.print = function () {
  this.forEach((element) => {
    console.log(element)
    return element
  })
  return this
}
arr.print()

// #5 - make this work

// const a = (x) => { this.x = x}
// const b = (x, y) => { this.y = y }
// const newB = new b('x', 'y')
// newB.getX() //=
// newB.getY() //=

const a = function (x) {
  this.x = x
  this.getX = () => {
    return this.x
  }
}
const b = function (x, y) {
  a.call(this, x)
  this.y = y
  this.getY = () => {
    return this.y
  }
}
const newB = new b('x', 'y')
newB.getX() //=
newB.getY() //=

// #6 - clone the obj and get the log work
const obj2 = { a: { b: { c: 99 } } }
// let cloneObj = {...obj2} // shallow copy
const cloneObj = JSON.parse(JSON.stringify(obj2)) // deep copy
cloneObj.a.b.c = 88 // return cloneObj c{88}
cloneObj
obj2 //= // return original obj2 c{99}

// #7 - give a[] and b[] create a merged c[] and keep it sorted
const arr1 = [1, 2, 3, 5, 7, 9]
const arr2 = [2, 5, 7, 12, 100]
const c = [...arr1, ...arr2].sort((a, b) => a - b)
c

// #8 - what will return in the log ? then make the log return the x = 1
// const ob = {
//     x: 1,
//     getX() {
//       const inner = function () { console.log(this.x)}
//       inner()
//     }
//   }
//   ob.getX()

const ob = {
  x: 1,
  getX() {
    // _this = this // solution1
    const inner = function () {
      //   console.log(_this.x) //solution1
      console.log(this.x) //solution2
    }
    // inner()
    inner.bind(this)() // solution2
  }
}
ob.getX() //=
