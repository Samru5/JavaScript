/*Argument object contains array of arguments used when the function is called.
The object contains entry for each argument passed to a function,the first entry's index starts at 0.
The arguments object is not an Array. It is similar, but does not have all Array properties except length. */

//Eg-1
function display(){
    console.log(arguments[0]);      //gives Mango
}
display("Mango");


//Eg-2
function disp(){
    console.log(arguments[1]);      //gives Apple
}
disp("Mango","Apple");


//Eg-3
function findLength(){
    console.log(arguments.length);      //3
}
findLength("Mango","Apple","Orange");



//Eg-4
function name(){
    console.log(arguments[0]+" "+arguments[1]);     //gives John Smith
}
name("John","Smith");



//Eg-5
function animals(){
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);          //Dog Cat Cow
    }
}
animals("Dog","Cat","Cow");

//Eg-6
function func1(a) {
    arguments[0] = 99; // updating arguments[0] also updates a & gives 99
    console.log(a);
  }
  func1(10); // 99


  //Eg-7
  function func2(a) {
    a = 99; // updating a also updates arguments[0] & gives 99
    console.log(arguments[0]);
  }
  func2(10); // 99

  //Eg-8
  function func3(a = 55) {
    arguments[0] = 99; // updating arguments[0] does not also update a & gives a=10
    console.log(a);
  }
  func3(10); // 10

  //Eg-9
  function func4(a = 55) {
    a = 99; // updating a does not also update arguments[0] & gives arguments[0]=10
    console.log(arguments[0]);
  }
  func4(10); // 10

  //Eg-10
  function func5(a = 55) {
    console.log(arguments[0]);      //gives undefined
  }
  func5(); // undefined