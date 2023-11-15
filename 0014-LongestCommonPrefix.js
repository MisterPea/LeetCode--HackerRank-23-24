/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

// Time Complexity: O(s) Where s is the sum of the length of all elements.
// Space Complexity: O(1) We're not using any extra space.

var longestCommonPrefix = function (strs) {
  let seen = '';
  for (let i = 0; i < strs[0].length; i += 1) {
    let temp = undefined;
    for (let j = 0; j < strs.length; j += 1) {
      if (temp === undefined) {
        temp = strs[j][i];
      } else if (temp !== strs[j][i]) {
        return seen
      }
    }
    seen += temp;
  }
  return seen;
};

console.log(longestCommonPrefix(["flower", "flow", "floght"]));