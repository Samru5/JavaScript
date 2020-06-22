/*The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
Difference between rest parameters & arguments objects is that arguments objects act like array but 
they are not actual array.We can only use length method with them.
But rest parameters acts like actual array.We can use pop,push,length,etc. methods with them.

The rest operator(...) ie. ...args should be the last parameter to function.
Means function f(..args) or function f(a,...args) is allowed
And function f1(...args,a) or function f1(a,...args,b) are not allowed
*/


//Eg-1
function show(...args){
    console.log(args)
}
show(10);       //gives [10]

//Eg-2
function display(...args){
    console.log(args)
}
display(10,20,30);      //gives [10,20,30]


//Eg-3
function f1(a,...args){
    console.log(a);         //gives 1
    console.log(args);      //gives [2,3,4,5]
    console.log(typeof args);   //object
}
f1(1,2,3,4,5);

//Eg-4
function f2(a,b,c,...args){
    console.log(a);         //gives 100
    console.log(b);         //gives 200
    console.log(c);         //gives 300
    console.log(args);      //gives [400,500,3456,9876]
}
f2(100,200,300,400,500,3456,9876);

//Eg-5
function f3(...args){
    console.log(args);      //gives [ 11, 12, 43, 45, 65, 67, 78, 98 ]
    console.log(args.length); //gives 8
    console.log(args.pop());        //gives 98
    console.log(args);          //gives [ 11, 12, 43, 45, 65, 67, 78 ]
    console.log(args.push(2000));   //gives position/index at which value appended ie.8
    console.log(args);              //gives [ 11, 12, 43, 45, 65, 67, 78, 2000 ]
    console.log(args.indexOf(78));   //gives 6
}
f3(11,12,43,45,65,67,78,98);