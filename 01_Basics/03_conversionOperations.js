
// let num = 33;

// let str = String(num)

// console.log(str, typeof str) // "33"
let str = NaN;

let num = Boolean(str)

console.log(num, typeof num) // "33"

/* 
    Number() => converts value to number 
    String() => converts value to string 
    Boolean() => converts value to boolean 
    null => 0 
    undefined => NaN 
    "" => 0 
    " " => 0 
    "33" => 33 
    "33.33" => 33.33 
    "33.33.33" => NaN 
    "33 33" => NaN 
    "33a" => NaN 
    "
    for Boolean()
    0 => false
    "" => false
    null => false
    undefined => false
    NaN => false
    "0" => true
    " " => true
    "33" => true
    "33.33" => true
    "33.33.33" => true
    "33 33" => true
    "33a" => true
    NaN meaning Not a Number
*/