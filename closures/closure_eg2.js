/*Closures are one of the most powerful features of JavaScript. 

JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and 
functions defined inside the outer function (and all other variables and functions that the outer function has access to)

The outer function does not have access to the variables and functions defined inside the inner function.*/


var addTo=function(passed){         //outer function

    var add=function(inner){        //inner function
        return passed+inner;
    };

    return add;
};

var addThree=addTo(3)
console.log(addThree(5))  //gives 8
console.log(addThree(2))  //gives 5