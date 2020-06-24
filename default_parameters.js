/*Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed. */

//Eg-1
function f1(a,b,c=90){
    console.log(a);     //gives 10
    console.log(b);     //gives 20
    console.log(c);     //gives 30
}
f1(10,20,30);


//Eg-2
function f2(a,b,c=90){
    console.log(a);     //gives 10
    console.log(b);     //gives 20
    console.log(c);     //gives 90
}
f2(10,20);


//Eg-3
function f3(a,b,c=90){
    console.log(a);     //gives 10
    console.log(b);     //gives undefined
    console.log(c);     //gives 90
}
f3(10);


//Eg-4
function f4(a,b=50,c=90){
    console.log(a);         //gives 10
    console.log(b);         //gives 50
    console.log(c);         //gives 90
}
f4(10);


//Eg-5
function f5(a,b=50,c){
    console.log(a);     //gives 10
    console.log(b);     //gives 20
    console.log(c);     //undefined
}
f5(10,20);      //problem of undefined expected output is like 10,50,20


//Eg-6
function f6(a,b,c=null){
    console.log(a);     //gives 10
    console.log(b);     //gives undefined
    console.log(c);     //gives null
}
f6(10);


//Eg-7
function f7(a,b,c=null){
    console.log(a);     //gives 10
    console.log(b);     //gives 20
    console.log(c);     //gives null
}
f7(10,20);


//Eg-8-Passing null as default parameter
function f8(a,b,c=null){
    console.log(a);     //gives 10
    console.log(b);     //gives 20
    console.log(c);     //gives 30
}
f8(10,20,30);


//Eg-9-Passing array as default parameter
function f9(a=[100]){
    console.log(a);     //gives [45]
}
f9([45]);


//Eg-10
function f10(a=[200]){
    console.log(a);
}
f10();                  //gives [200]


//Eg-11
function f11(num,a=[200]){
    console.log(num);       //gives 20
    console.log(a);         //gives [105]
}
f11(20,[105]);
