/* 
ou are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be 
merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Time Complexity: O(m + n) - Where m / n are the lengths of the input array
Space Complexity: O(1) - We're not using any extra space
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function ( nums1, m, nums2, n ) {

  let i = m - 1;
  let j = n - 1;
  for ( let writeHead = m + n - 1; writeHead >= 0; writeHead -= 1 ) {
    if ( j < 0 ) {
      break;
    }
    if ( i >= 0 && nums1[i] > nums2[j] ) {
      nums1[writeHead] = nums1[i];
      i -= 1;
    } else {
      nums1[writeHead] = nums2[j];
      j -= 1;
    }
  }
};

nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
merge( nums1, m, nums2, n );
console.log( nums1 );
