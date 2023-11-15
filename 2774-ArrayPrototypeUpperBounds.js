/*
Write code that enhances all arrays such that you can call the upperBound()
method on any array and it will return the last index of a given target number. 
nums is a sorted ascending array of numbers that may contain duplicates. 
If the target number is not found in the array, return -1.
*/
// Runtime: O(n) where n is length of the array
// Space: O(1) We don't use extra space

Array.prototype.upperBound = function (target) {
  for (let i = this.length - 1; i >= 0; i -= 1) {
    if (this[i] === target) {
      return i;
    } else if (this[i] < target) {
      return -1;
    }
  }
  return -1;
};

// [3,4,5].upperBound(5); // 2
// [1,4,5].upperBound(2); // -1
// [3,4,6,6,6,6,7].upperBound(6) // 5