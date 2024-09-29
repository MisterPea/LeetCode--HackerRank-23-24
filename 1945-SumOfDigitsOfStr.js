/* 
You are given a string s consisting of lowercase English letters, and an integer k. 
Your task is to convert the string into an integer by a special process, and then transform it by summing its digits repeatedly k times. 
More specifically, perform the following steps:

Convert s into an integer by replacing each letter with its position in the alphabet (i.e. replace 'a' with 1, 'b' with 2, ..., 'z' with 26).
Transform the integer by replacing it with the sum of its digits.
Repeat the transform operation (step 2) k times in total.
For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8
Return the resulting integer after performing the operations described above.

Time Complexity: O(n * k) where N is the initial length of the string and k is the number of iterations
Space Complexity: O(n) we use linear space to store/convert the strings
*/

function getLucky( s, k ) {
  let numStr = '';
  let out = 0;
  for ( let i = 0; i < s.length; i += 1 ) {
    numStr += s[i].charCodeAt( 0 ) - 96;
  }
  while ( k > 0 ) {
    let collector = 0;
    for ( let i = 0; i < numStr.length; i += 1 ) {
      collector += +numStr[i];
    }
    numStr = `${collector}`;
    out = collector;
    k -= 1;
  }

  return out;
};