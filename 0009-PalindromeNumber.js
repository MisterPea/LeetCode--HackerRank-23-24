/* 
Given an integer x, return true if x is a palindrome, and false otherwise.
Solution is a simple reversing of the digits and seeing if it equals the original
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function ( x ) {
  const xOrg = x;
  if ( x < 0 ) {
    return false;
  }
  let digits = Math.floor( Math.log10( x ) );
  let reverse = 0;
  while ( x > 0 ) {
    reverse += ( x % 10 ) * 10 ** digits;
    x = Math.trunc( x / 10 );
    digits -= 1;
  }
  return reverse === xOrg;
};
