var answer = [];
const nameSet = new Map();

function solution(name, yearning, photo) {
  for (let i = 0; i < name.length; i++) {
    nameSet.set(name[i], yearning[i]);
  }

  photo.map((item) => {
    let sum = 0;
    item.map((e) => {
      let score = nameSet.get(e) ? nameSet.get(e) : 0;
      sum += score;
    });
    answer.push(sum);
  });

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
);
