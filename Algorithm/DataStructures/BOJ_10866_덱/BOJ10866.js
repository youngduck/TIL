const fs = require("fs");
const filePath =
	process.platform === "linux" ? "/dev/stdin" : "./Z_Test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((item) => item.trim());
let deque = [];
let answer = [];

for (let i = 1; i < arr.length; i++) {
	const [order, content] = arr[i].split(" ");

	switch (order) {
		case "pop_back":
			deque.length === 0 ? answer.push(-1) : answer.push(+deque.pop());
			break;
		case "pop_front":
			deque.length === 0 ? answer.push(-1) : answer.push(+deque.shift());
			break;
		case "push_back":
			deque.push(content);
			break;
		case "push_front":
			deque.unshift(content);
			break;
		case "front":
			deque.length === 0 ? answer.push(-1) : answer.push(+deque[0]);
			break;
		case "size":
			answer.push(deque.length);
			break;
		case "back":
			deque.length === 0
				? answer.push(-1)
				: answer.push(+deque[deque.length - 1]);
			break;
		case "empty":
			deque.length === 0 ? answer.push(1) : answer.push(0);
			break;
		default:
			break;
	}
	// answer.push(deque, order, content);
}

console.log(answer.join("\n"));
