/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i += 1) {
    if(nums[i] in seen){
      return [seen[nums[i]],i]
    } else {
      seen[target - nums[i]] = i
    }
  }
};

nums = [3,3], target = 6
console.log(twoSum(nums, target))