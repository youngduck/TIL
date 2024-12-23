//SECTION - two pointer 풀이
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const numList = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

const solution = (numList) => {
  let result = [];

  let left = 0;
  let right = 0;
  while (right < numList.length) {
    let dis = numList[right] - numList[left];

    if (dis < 5) {
      right++;
    } else {
      result.push(right - left);
      left++;
      right = left;
    }
    if (right === numList.length) {
      result.push(right - left);
    }
  }

  console.log(5 - Math.max(...result));
};

solution(numList);
//!SECTION

//SECTION 반복문 풀이

const arr = input
  .slice(1)
  .map((item) => +item)
  .sort((a, b) => a - b);

const resultArr = arr.map((item) => {
  const fiveNumItems = new Array(5).fill(item).map((item, idx) => item + idx);

  const cnt = fiveNumItems
    .map((fiveNumItem) => arr.includes(fiveNumItem))
    .filter((boolean) => boolean === true).length;

  return cnt;
});

console.log(5 - Math.max(...resultArr));

//!SECTION
