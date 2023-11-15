/**
 * Implement the myAtoi(string s) function, which converts a string to a 
 * 32-bit signed integer (similar to C/C++'s atoi function).
 * @param {string} s 
 */
function myAtoi(s) {
  let sign = 1;
  let result = 0;
  let i = 0;
  const INT_MAX = 2147483647; // 2^31 - 1
  const INT_MIN = -2147483648; // -2^31

  while (s[i] === ' ') {
    i += 1;
  }

  if (s[i] === '-' || s[i] === '+') {
    sign = s[i] === '-' ? -1 : 1;
    i += 1;
  }

  // Because successive signs or letters don't meet this condition we return the value.
  while (s[i] >= '0' && s[i] <= '9') {
    result = (result * 10) + (s[i] - 0);
    if (sign === 1 && result > INT_MAX) {
      return INT_MAX;
    }
    if (sign === -1 && result * -1 < INT_MIN) {
      return INT_MIN;
    }
    i += 1;
  }
  return result * sign;
}


console.log(myAtoi('-2147483647'));
