/* 
Given two strings needle and haystack, return the index of the first occurrence 
of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/
/*
Time Complexity: *not totally sure - O(n log n) it's even though we have have nested loops, it's sub-exponential
Space Complexity: O(1) - No extra space is used
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function ( haystack, needle ) {
  const needleLength = needle.length;
  for ( let i = 0; i <= haystack.length - needleLength; i += 1 ) {
    let windowPointer = 0;
    while ( haystack[i + windowPointer] === needle[windowPointer] ) {
      windowPointer += 1;
      if ( windowPointer === needleLength ) {
        return i;
      }
    }
  }
  return -1;
};

const haystack = 'leetcodeishiring';
const needle = 'code';
console.log( strStr( haystack, needle ) );