"use strict";
function getSize(arr) {
    return arr.length;
}
console.log(getSize([1, 2, 3, 4, 5]));
console.log(getSize(['a', 'b', 'c']));
console.log(getSize([false, true, true]));
console.log(getSize([{}, {}, { name: "tim" }]));
//getSize()인수들을  generic사용
function getSize2(arr) {
    return arr.length;
}
console.log(getSize2([1, 2, 3, 4, 5]));
console.log(getSize2(['a', 'b', 'c']));
console.log(getSize2([false, true, true]));
console.log(getSize2([{}, {}, { name: "tim" }]));
//화살표함수
const getSize3 = (arr) => {
    return arr.length;
};
console.log(getSize3([1, 2, 3, 4, 5]));
