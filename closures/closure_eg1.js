/*Closures are one of the most powerful features of JavaScript. 

JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and 
functions defined inside the outer function (and all other variables and functions that the outer function has access to)

The outer function does not have access to the variables and functions defined inside the inner function.*/

var passed=5;

var addTo=function(){
    var inner=2;
    return passed+inner;
};

console.log(addTo()); //gives 7

var passed=9;

console.log(addTo());  //gives 11