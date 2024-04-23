/* 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements 
in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
*/
/* 
Time Complexity: O(n) - Where n is the length of the array - finding and retrieving info from an object is O(1)
Space Complexity: O(n) - We use linear extra space to hold the seen numbers
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function ( nums ) {
  let writeHead = 0;
  let seen = {};
  for ( let i = 0; i < nums.length; i += 1 ) {
    if ( !seen[nums[i]] ) {
      seen[nums[i]] = 1;
      nums[writeHead] = nums[i];
      writeHead += 1;
    }
  }
  return Object.keys( seen ).length;
};

const arr = [];
console.log( removeDuplicates( arr ) );
console.log(arr)
