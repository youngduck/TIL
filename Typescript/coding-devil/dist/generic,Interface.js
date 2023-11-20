"use strict";
const m1 = {
    name: 's21',
    price: 1000,
    option: {
        color: 'red',
        coupon: false
    }
};
const m2 = {
    name: 's20',
    price: 900,
    option: 'good'
};
const u1 = { name: 'kim', age: 25 };
const c2 = { name: 'bmw', color: 'red' };
const b2 = { price: 2000 };
const showName1 = (data) => {
    return data.name;
};
console.log(showName1(u1));
console.log(showName1(c2));
//showName1(b2)
