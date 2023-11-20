"use strict";
const uk = "name";
//Partial<T>
let admin = {
    id: 1,
    name: 'bob'
};
//Required<T>
let admin2 = {
    id: 1,
    name: 'k',
    age: 14,
    gender: 'm'
};
//Readonly<T>
let admin3 = {
    id: 1,
    name: 'bob',
    age: 26,
    gender: 'f'
};
console.log(admin3.id);
const score = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D'
};
const score2 = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
};
function isValid(user) {
    const result = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0
    };
    return result;
}
const aa = {
    id: 5,
    name: 'kim',
    age: 25
};
console.log(isValid(aa));
//Pick<T,K>
const pickAd = {
    id: 0,
    name: 'park'
};
//Omit<T,K>
const omitAd = {
    id: 5,
    name: 'bbb'
};
