// 주의 인자에 배열을넣으면안된다.

const arr = [1,2,3,4,5]
console.log(Math.max(1,2,3)) //OK
console.log(Math.max(arr)) //NaN 출력


console.log(Math.max(...arr)) //구조분해할당후 넣어줘야한다.