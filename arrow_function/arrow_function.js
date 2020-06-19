/*An arrow function expression is a syntactically compact alternative to a regular function expression*/

const { multiplication } = require("npm-calculator-example-js");

//Eg-1
display=()=>"Hello World";
console.log(display());

//Eg-2
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));

  //Eg-3
  data=msg=>"Welcome to"+" "+msg;
  console.log(data("JavaScript"));

  //Eg-4
var arguments = [1, 2, 3];
var arr = () => arguments;
console.log(arr());

//Eg-5
var arguments = [1, 2, 3];
var arr = () => arguments[0];
console.log(arr());

//Eg-6
var nos=[1,2,3,4,5];

function multiply(n){
    var f=()=>nos[0]*n;
    return f();
};
console.log(multiply(5));

//Eg-7
//Arrow functions cannot be used as constructors and will throw an error when used with new
var msg=()=>"Hello"
var m=new msg();    //TypeError: msg is not a constructor

//Eg-8
//In a concise body, only an expression is specified, which becomes the implicit return value
var multiply=x=>x * x;
console.log(multiply(5));

//Eg-9
//In a block body, you must use an explicit return statement.
var add=(x,y)=>{return x+y;};
console.log(add(3,7));