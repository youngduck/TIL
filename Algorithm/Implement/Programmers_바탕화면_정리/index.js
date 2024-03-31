let lux = Infinity;
let luy = Infinity;
let rdx = -Infinity;
let rdy = -Infinity;

function solution(wallpaper) {
  wallpaper.map((item, idx) => {
    let left = item.indexOf("#");
    let right = item.lastIndexOf("#");

    if (left !== -1) {
      if (left === right) {
        lux = Math.min(idx, lux);
        luy = Math.min(left, luy);
        rdx = Math.max(idx, rdx);
        rdy = Math.max(left, rdy);
      } else {
        lux = Math.min(idx, lux);
        luy = Math.min(left, luy);
        rdx = Math.max(idx, rdx);
        rdy = Math.max(right, rdy);
      }
    }
  });
  return [lux, luy, rdx + 1, rdy + 1];
}

// console.log(solution([".#.#.", "..#..", "...#."]));
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
