const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const x = +input[0];

const solution = (x, bar) => {
  let arr = [bar];
  // 막대의 길이를 모두더한후 합이 X보다 크면 아래의 과정을 반복

  let sum = arr.reduce((acc, cur) => acc + cur);
  while (sum > x) {
    // 가장 짧은것을 절반으로 자름
    arr.sort((a, b) => a - b);
    arr = [arr[0] / 2, arr[0] / 2, ...arr.slice(1)];

    // 자른막대의 절반중 하나를 버리고 남아있는 막대의 길이의 합과 X값 비교
    // IF)X보다 크거나같으면 자른막대의 절반중 하나를 버림 -> sum 값 초기화
    // ELSE) X보다 작으면 -> 자른막대 그대로 -> sum값 초기화
    if (x <= arr.slice(1).reduce((acc, cur) => acc + cur)) {
      arr = [...arr.slice(1)];
      sum = arr.reduce((acc, cur) => acc + cur);
    } else {
      sum = arr.reduce((acc, cur) => acc + cur);
    }
  }
  // 막대의 갯수
  console.log(arr.length);
};

solution(x, 64);

// 1부터 64까지 모두 테스트
// for (let i = 1; i <= 64; i++) {
//   solution(i, 64);
// }
