const set = new Set()

//값 추가 add
set.add(1); // Set(1) {1}
// 연쇄 추가 가능
set.add(1).add('감자').add(true)

//값 삭제 
set.delete(1)
//성공시 true, 실패시 false반환

//값 확인
set.has('감자')

//값 개수 확인
set.size

//모든값 제거
set.clear()

//세트 순회
for (const i of set){
    console.log(i)
}
set.forEach((i)=>console.log(i))

//배열 세트로 변환
const arr = [1,2,3,4,4]
const arrToset = new Set(arr)

//배열 중복값 제거
const arr2 = [1,2,3,4,4]
const uniqueArr = [...new Set(arr2)]

//합집합,교집합,차집합
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// 합집합
const union = new Set([...set1, ...set2]);
console.log([...union]); // [1, 2, 3, 4, 5, 6, 7, 8]

// 교집합
const intersection = new Set([...set1].filter((value) => set2.has(value)));
console.log([...intersection]); // [4, 5]

// 차집합
const difference = new Set([...set1].filter((value) => !set2.has(value)));
console.log([...difference]); // [1, 2, 3]