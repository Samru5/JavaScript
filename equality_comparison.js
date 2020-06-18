/*Strict equality(===) compares two values for equality.
 Neither value is implicitly converted to some other value before being compared. 
 If the values have different types, the values are considered unequal. 
 If the values have the same type, are not numbers, and have the same value, they're considered equal.
 
 Loose equality(==) compares two values for equality, after converting both values to a common type.

 Object.is() method is used to determine whether two values are the same or not.
 The == and === operator treats the number values +0 and -0 as equal whereas Object.is() method treats them as not equal.
 
 */

var msg='hello';
var data=new String('hello')

console.log(msg == data)    //true
console.log(msg === data)   //false

console.log(0 === -0)       //true
console.log(-5 === +5)      //false
console.log(3 !== '3')      //true
console.log(3 == '3')       //true
console.log(3 != '3')       //false
console.log('S' == 'm')     //false
console.log(3==5)           //false
console.log(3 == 3.0)       //true
console.log(3 == 3.9)       //false
console.log(null == undefined)      //true
console.log(null === undefined)     //false
console.log('' == 0)                //true
console.log('' === 0)               //false
console.log('123'== 123)            //true
console.log('123'=== 123)           //false
console.log(0 == -0)                //true

console.log(Object.is('hello', 'hello'))        //true
console.log(Object.is('hello', 'hi'))           //false
console.log(Object.is(0,-0))            //false

var check = { a: 100 };
console.log(Object.is(check, check))    //true

console.log(Object.is(NaN,NaN))         //true

console.log(NaN == NaN)                 //false
console.log(NaN === NaN)                //false