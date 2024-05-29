/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Solution: We use 2 pointers to check for symmetry. If asymmetry is found we return functions that look
for the two possibilities of needing to advance the left pointer by 1 and decrement the right pointer by 1.

Time Complexity: The best case is O(n/2) as we traversing both the left and right side of the array at the same time.
Worst case would be O(n)
Space Complexity: O(1) - we're not using extra space.
*/

var validPalindrome = function ( s ) {
  let canDeleteChar = true;

  /* Helper function to take care of a non-match on the left and right branch */
  function checkPalindrome( s, left, right ) {
    while ( left < right ) {
      if ( s[left] !== s[right] ) {
        if ( canDeleteChar ) {
          canDeleteChar = false;
          return ( checkPalindrome( s, left + 1, right ) || checkPalindrome( s, left, right - 1 ) );
        }
        return false;
      }
      left += 1;
      right -= 1;
    }
    return true;
  }

  return checkPalindrome( s, left = 0, right = s.length - 1 );
};

