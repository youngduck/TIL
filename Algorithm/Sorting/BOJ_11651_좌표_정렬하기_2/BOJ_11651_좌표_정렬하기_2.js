const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//입력값 N, 이차원배열 arr 생성
const N = +input[0];

// 2차원 좌표를 Y오름차순, X오름차순으로
const arr = input.slice(1).map((item) => item.split(" ").map((item) => +item));
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
arr.sort((a, b) => {
  // Y좌표가 같을때 X좌표를 오름차순으로 처리, Y좌표가 다를때는 기존의 return a-b 활용하여 동일하게 오름차순처리
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

arr.map((item) => console.log(`${item[0]} ${item[1]}`));
