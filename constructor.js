/*The constructor method is a special method for creating and initializing an object created within a class.*/

//Eg-1-Constructor without parameters
class Shape {
    constructor() {
      this.name = 'Square';
    }
  }
  
var s = new Shape();
console.log(s.name);        //gives Square


//Eg-2-Constructor with Parameters
class Employee {

    constructor(ename) {
      this.ename = ename;
    }
  
    show() {
      console.log(`Employee name is ${this.ename}`);        //gives Employee name is John
    }
  
  }
  
var emp= new Employee('John');
emp.show();

/*Object instances are created with constructor,which are specially special function that prepare new instance of an object for use. */

//Eg-3-Constructor without parameters
function Product(){
    this.pname='Rice';
    this.price=function(){
        console.log(this.pname+":"+"50 Rs.");       //gives Rice:50 Rs.
    }
}

var p=new Product();
p.price();

//Eg-4-Constructor with parameters
function Student(name){
    this.name=name;
    this.result=function(){
        console.log(this.name+" got 80%");      //gives Rahul got 80%
    }
}

var s=new Student('Rahul');
s.result();