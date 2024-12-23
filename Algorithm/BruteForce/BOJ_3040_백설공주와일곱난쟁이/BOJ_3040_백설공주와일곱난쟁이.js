const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((item) => +item);

const solution = (arr) => {
  left = 0;
  right = 0;
  const heightSum = arr.reduce((cur, acc) => cur + acc);

  while (right < arr.length) {
    if (right === arr.length - 1) {
      left += 1;
      right = left;
    }

    right += 1;
    if (heightSum - arr[left] - arr[right] === 100) {
      arr.map((item, index) => {
        if (index !== right && index !== left) {
          console.log(item);
        }
      });
      break;
    }
  }
};

solution(arr);
