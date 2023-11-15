/* 
Given an integer array arr and a filtering function fn, return a 
filtered array filteredArr.

The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for 
which the expression fn(arr[i], i) evaluates to a truthy value. 
A truthy value is a value where Boolean(value) returns true.

Solve it without the built-in Array.filter method.
*/

var filter = function (arr, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i += 1) {
    const value = fn.call(this, arr[i], i);
    if (value) {
      out.push(arr[i]);
    }
  }
  return out;
};

const arr = [-2,-1,0,1,2];
// const fn = (n) => n > 10;
// fn = function firstIndex(n, i) { return i === 0; }
fn = function plusOne(n) { return n + 1 }
console.log(filter(arr, fn));