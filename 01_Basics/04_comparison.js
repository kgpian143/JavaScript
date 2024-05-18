//  Basic comparison operators

console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 2); // false
console.log(1 <= 2); // true

// ambigous condition

console.log("2" > 1); // true
console.log("02" > 1); // true how ?

// because of type conversion in javascript 

//  undefinded comparison

console.log(undefined == null); // true
console.log(undefined === null); // false   --> strict comparison

//  null comparison

console.log(null == 0); // false
console.log(null === 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true

//  NaN comparison

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(NaN > NaN); // false
console.log(NaN < NaN); // false
console.log(NaN >= NaN); // false
console.log(NaN <= NaN); // false