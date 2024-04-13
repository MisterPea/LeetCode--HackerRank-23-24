/* 
Given an integer array arr and a mapping function fn, return a new array 
with a transformation applied to each element.

The returned array should be created such that 
returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Time Complexity: O(n) - where n is the length of the array
Space Complexity: O(n) - where n is the length of the output array- for map_3 it's O(1) as no extra space is used

*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map_1 = function ( arr, fn ) {
  const newArray = [];
  for ( let i = 0; i < arr.length; i += 1 ) {
    newArray.push( fn.call( null, arr[i], i ) );
  }
  return newArray;
};
var map_2 = function ( arr, fn ) {
  const newArray = new Array( arr.length );
  for ( let i = 0; i < arr.length; i += 1 ) {
    newArray[i] = fn.call( null, arr[i], i );
  }
  return newArray;
};
var map_3 = function ( arr, fn ) {
  for ( let i = 0; i < arr.length; i += 1 ) {
    arr[i] = fn( arr[i], i );
  }
  return arr;
};

const fn = function plusI( n, i ) { return n + i; };
const arr = [1, 2, 4];
const a = map( arr, fn );
console.log( a );