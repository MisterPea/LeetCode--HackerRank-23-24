/*
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros.
For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary 
numbers needed so that they sum up to n.

Time Complexity: O(n) - where n is the length of the number
Space Complexity: O(1) - No extra space needed

Simple solution: Since we're looking at iteration, the most we have to count to is 9
So once we find 9 we return 9 else, we look for the largest number in the string.
*/

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function ( n ) {
  let max = -Infinity;
  for ( let i = 0; i < n.length; i += 1 ) {
    const num = +n[i];
    if ( num === 9 ) {
      return 9;
    }
    if ( num > max ) {
      max = num;
    }
  }
  return max;
};