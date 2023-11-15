/* 
Given an integer array arr and a mapping function fn, 
return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Solve it without the built-in Array.map method.
*/

// Time Complexity: O(n) - where n is the length of the array
// Space Complexity: O(n) - where using the length of the initial array-extra space

var map = function (arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i += 1) {
    out.push(fn.call(this, arr[i], i));
  }
  return out;
};

// const arr = [1, 2, 3];
// const fn = (n) => n * 2;
// const mapped = map(arr, fn);
