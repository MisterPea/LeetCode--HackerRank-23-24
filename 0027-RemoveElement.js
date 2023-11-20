/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, 
to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
The remaining elements of nums are not important as well as the size of nums.
Return k.

If we have [1,2,2,1,1,4] val = 1;
we can return [2,2,4,1,1,4] - because we're returning k (which is 3 here) 
we don't need to worry about cleaning up after k length.
We could do nums.splice(w, len - w) to delete the appropriate numbers

The idea is two pointers a read (i) and write (w). If we don't have a val match then we advance w (and i) we write the value of i to w
if: [1,3,3,1,2] val 3 
i = 0 | w = 0 [1] advance w
i = 1 | w = 1 [3] We advance i, not w
i = 2 | w = 1 [3] we advance i, not w
i = 3 | w = 2 [1] advance w
i = 4 | w = 3 [2] advance w
output [1,2,2,_,_] where k = 3

Time complexity = O(n) where n is the length of nums
Space complexity = O(1) we're not using extra space
*/

var removeElement = function (nums, val) {
  let len = nums.length;
  let i = 0; // look head
  let w = 0; // write head
      for (; i < len; i += 1) {
      if (nums[i] !== val) {
          nums[w] = nums[i]
          w += 1
      }
  }
  console.log(nums)
  return w
};

const arr = [1,2,2,1,1,4]
const val = 1;
removeElement(arr, val)
