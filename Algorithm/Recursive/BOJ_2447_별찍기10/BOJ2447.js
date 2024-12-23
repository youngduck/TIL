const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input;
const arr = new Array(n).fill().map((item) => new Array(n).fill(" "));

const solution = (n, arr) => {
  const recursive = (x, y, size) => {
    if (size === 1) {
      console.log(x, y, size);
      arr[x][y] = "*";
      return;
    }

    const newSize = size / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
          continue;
        }
        recursive(x + newSize * i, y + newSize * j, newSize);
      }
    }
  };

  recursive(0, 0, n);
};

solution(n, arr);

arr.map((item) => console.log(item.join("")));

console.log(n, arr);
