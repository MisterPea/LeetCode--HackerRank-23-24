/* 
Given an integer array nums, a reducer function fn, 
and an initial value init, return a reduced array.

A reduced array is created by applying the following 
operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), 
... until every element in the array has been processed. 
The final value of val is returned.

If the length of the array is 0, it should return init.

Solve it without using the built-in Array.reduce method.
*/

var reduce = function (nums, fn, init) {
  let collector = init;
  for (let i = 0; i < nums.length; i += 1) {
    collector = fn.call(this, collector, nums[i]);
  }
  return collector;
};

// nums = [1, 2, 3, 4];
// fn = function sum(accum, curr) { return accum + curr; };
// init = 0;
// reduce(nums, fn, init); // 10