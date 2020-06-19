/*Strict Mode was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a strict operating context. 
This strict context prevents certain actions from being taken and throws more exceptions.
Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
*/

/*
function display(){
    a=20;
    console.log(a);

};

display();       //gives 20
*/


//Eg-1-Using strict mode without var
"use strict";           //using strict mode
function display(){
    a=20;
    console.log(a);     

};

display(); //ReferenceError: a is not defined when use strict is used



//Eg-2-Using strict mode with var
"use strict";           //using strict mode
function display(){
    var a=20;           //var is used
    console.log(a);     

};

display(); //gives 20


//Eg3-Use strict mode for entire code means will be applicable for both functions & outer/global variables
"use strict";

z=90;
console.log(z)      //ReferenceError: z is not defined
function display(){
    p=7;
    console.log(p);
};

display();


//Eg-4-Using strict mode inside function only
z=90;           //gives 90
console.log(z) 

function display(){
    "use strict";       //used strict mode inside function
    p=7;            
    console.log(p);     //ReferenceError: p is not defined
};

display();


//Eg-5-Using strict mode only inside function with var
z=90;           //gives 90
console.log(z) 

function display(){
    "use strict";       //used strict mode inside function
    var p=7;            //var is used
    console.log(p);     //ReferenceError: p is not defined
};

display();