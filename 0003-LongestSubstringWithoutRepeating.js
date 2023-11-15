/*
Given a string s, find the length of the longest 
substring without repeating characters.
*/
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 1;
  let max = 0;
  while (r <= s.length) {
    let subStr = s.slice(l, r);
    let index = subStr.indexOf(s[r]);
    if (index !== -1) {
      l = l + index + 1;
    }
    r += 1;
    max = Math.max(max, subStr.length);
  }
  return max;
};

console.log(lengthOfLongestSubstring('pwwkew'));