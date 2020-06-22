/*The get syntax binds an object property to a function that will be called when that property is looked up.
The set syntax binds an object property to a function to be called when there is an attempt to set that property.
 */

const student={
    firstName:'Amit',
    lastName:'Roy',

    get fullName(){
        return `${student.firstName} ${student.lastName}`;
    },

    set fullName(name){
        const parts=name.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];

    }
};

console.log(student.fullName)   //gives Amit Roy

student.fullName="John Smith";
console.log(student.fullName)       //gives Johnn Smith