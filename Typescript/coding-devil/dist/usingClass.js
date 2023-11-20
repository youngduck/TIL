"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_js_1 = require("./class.js");
class Student extends class_js_1.Person {
    study() {
        return `${this.name} is studying`;
    }
}
const student = new Student('lee');
console.log(student.sayHello());
console.log(student.study());
console.log('hi!~vv~');
console.log('bye');
