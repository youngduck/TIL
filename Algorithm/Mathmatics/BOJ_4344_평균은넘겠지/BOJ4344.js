const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseNum = +input[0];
const objList = [];
for (let i = 1; i <= testCaseNum; i++) {
	const splitedInput = input[i].split(" ");
	const refineData = {
		N: +splitedInput[0],
		arr: splitedInput.slice(1).map((item) => +item),
	};

	objList.push(refineData);
}

/*
C:테스트케이스 개수
testCase = [
  { N: 5, arr: [ 50, 50, 70, 80, 100 ] },
  { N: 7, arr: [
      100, 95, 90, 80,
       70, 60, 50
    ] },
  { N: 3, arr: [ 70, 90, 80 ] },
  { N: 3, arr: [ 70, 90, 81 ] },
  {
    N: 9,
    arr: [
      100, 99, 98, 97, 96,
       95, 94, 93, 91
    ]
  }
]
*/

function solution(C, testCase) {
	for (let i = 0; i < C; i++) {
		const avr = testCase[i].arr.reduce((a, b) => a + b) / testCase[i].N;
		const greatNum = testCase[i].arr.filter((item) => item > avr).length;

		const result = ((greatNum / testCase[i].N) * 100).toFixed(3);
		console.log(`${result}%`);
	}
}

solution(testCaseNum, objList);
