/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 투포인터 풀이? , left와 right가 같으면 안되는조건이 있으므로 right 1에서 시작
  let left = 0;
  let right = 1;
  const result = [];

  while (left < nums.length - 1) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      result.push(left, right);
      break;
    } else if (sum !== target && right !== nums.length - 1) {
      right += 1;
    } else {
      left += 1;
      right = left + 1;
    }
  }
  return result;
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
