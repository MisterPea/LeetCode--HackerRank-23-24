/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let r1 = m - 1;
  let r2 = n - 1;
  writePointer = nums1.length - 1;
  while (writePointer >= 0) {
    if (nums1[r1] < nums2[r2]) {
      nums1[writePointer] = nums2[r2];
      r2 -= 1;
    } else if (r1 >= 0) {
      nums1[writePointer] = nums1[r1];
      r1 -= 1;
    } else {
      nums1[writePointer] = nums2[r2];
      r2 -= 1;
    }
    writePointer -= 1;
  }
  return nums1;
};

nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
console.log(merge(nums1, m, nums2, n));