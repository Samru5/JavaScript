/*The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. */

//Eg-1
class Product{
    static display(){
        console.log("This is a static method!!!")
    }
}

Product.display();  //Calling static method gives This is a static method!!!

//Eg-2-Calling static methods from another static method\
class Students{
    static method1(){
        return "First static method";
    }

    static method2(){
        return this.method1()+" calling from this method2";
    }
}
var m1=Students.method1();     //gives First static method
console.log(m1);

var m2=Students.method2();     //gives First static method calling from this method2
console.log(m2);