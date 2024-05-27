/* Convert Roman Numeral To Its Integer Representation */
/* 
We loop backwards through the roman numeral string and we keep track to the previous value. 
If the value id greater than or equal we add the new value to the total. (III, VI, etc).
Else, if the value is less than, it mean it's a subtraction condition (IX, IV, etc), 
therefor we subtract the new value for the total 

Time Complexity: O(n) - where n is the number of characters in the string.
Space Complexity: O(1) - we're not using any extra space
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function ( s ) {
  const key = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };
  let total = 0;
  let prev = 0;
  for ( let i = s.length - 1; i >= 0; i -= 1 ) {
    const val = key[s[i]];
    if ( val >= prev ) {
      total += val;
    } else {
      total -= val;
    }
    prev = val;
  }
  return total;
};
