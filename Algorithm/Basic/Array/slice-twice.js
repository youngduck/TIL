const arr = [1, 2, 3, 4, 5, 6, 7];

//앞에서 2개 뒤에서 2개 짜르는 방법.

const result = arr.slice(2).slice(0, arr.length - 4);

console.log(result);
// [3,4,5]
