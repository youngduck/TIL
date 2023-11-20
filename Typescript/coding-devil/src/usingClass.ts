import {Person} from './class.js'

class Student extends Person{
    study():string{
        return `${this.name} is studying`;
    }
}

const student = new Student('lee');
console.log(student.sayHello());
console.log(student.study());
console.log('hi!~vv~');
console.log('bye')