/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashmap.has(complement)) {
      return [hashmap.get(complement), i];
    }
    hashmap.set(nums[i], i);
  }
  throw new Error("No solution found");
};
