"use strict";
const Sam = {
    name: 'Sam',
    age: 21,
};
//this
function showName(age, gender) {
    console.log(this.name, this.age, age, gender);
}
const a = showName.bind(Sam);
a(20, 'm');
function join(name, age) {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
const kim = join('kim', 25);
const jane = join("jane", "20");
console.log(kim);
console.log(jane);
