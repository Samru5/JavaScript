/*Strict Mode was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a strict operating context. 
This strict context prevents certain actions from being taken and throws more exceptions.
Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
*/

//Eg-1-Without strict mode
var Employee=function(name){
    var myname=name;

    Object.defineProperty(this,"name",{

        get:function(){
            return myname;
        }

    });

};

var emp=new Employee("John");
//Here name is read-only property as we have get method.So it is an error to assign new value to read-only property.
//Javascript 
emp.name="Smith";
console.log(emp.name);      //gives John



//Eg-2-Using strict mode
"use strict";               //using strict mode
var Employee=function(name){
    var myname=name;

    Object.defineProperty(this,"name",{

        get:function(){
            return myname;
        }

    });

};

var emp=new Employee("John");
emp.name="Smith";           //TypeError: Cannot set property name of #<Employee> which has only a getter
console.log(emp.name);   