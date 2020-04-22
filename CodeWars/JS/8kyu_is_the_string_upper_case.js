// Is the string uppercase?
// Task

// Add the isUpperCase method to String to see whether the string is ALL CAPS.
//  For example:

// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

// In this Kata, a string is said to be in ALL CAPS whenever it does not
//  contain any lowercase letter so any string containing no letters at all
//   is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

console.log("C".isUpperCase()) //== true)
console.log("hello I AM DONALD".isUpperCase()) //== false)
console.log("HELLO I AM DONALD".isUpperCase()) // == true)
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()) // == false)
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()) // == true)