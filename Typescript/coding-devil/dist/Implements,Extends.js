"use strict";
//implements
class Bmw {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log('gogogo');
    }
}
const b = new Bmw('green');
console.log(b);
b.start();
const benz = {
    color: 'red',
    wheels: 5,
    start() {
        console.log('출발합니다');
    },
    door: 5,
    stop() {
        console.log('stop');
    }
};
