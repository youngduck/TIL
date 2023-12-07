//push() 배열 뒷쪽에 데이터 삽입, 삽입된 배열의 길이 반환
let arr2 = [1, 2, 3];
let arr2Length = arr2.unshift(4, 5);

console.log(arr2Length); // expected output: 5
console.log(arr2); // expected output: [4, 5, 1, 2, 3]

//unshift() 배열 앞쪽에 데이터 삽입, 삽입된 배열의 길이 반환

arr2Length = arr2.push(6);
console.log(arr2Length); // expected output: 6
console.log(arr2); // expected output: [4, 5, 1, 2, 3, 6]
