/*Strict Mode was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a strict operating context. 
This strict context prevents certain actions from being taken and throws more exceptions.
Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
*/


/*a=5;
console.log(a);     //gives 5
*/

//Eg-1
"use strict";       //using strict mode
a=5;
console.log(a);     //ReferenceError: a is not defined when use strict is used


//Eg-2
"use strict";       //using strict mode
var a=5;            //var is used
console.log(a);     //gives 5