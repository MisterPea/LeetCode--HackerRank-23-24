/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

• Open brackets must be closed by the same type of brackets.
• Open brackets must be closed in the correct order.
• Every close bracket has a corresponding open bracket of the same type
*/

// Time Complexity: O(n) where n the length of the string;
// Space Complexity: O(1) we use no extra space

var isValid = function (s) {
  const matchKeys = { "(": ")", "[": "]", "{": "}" };
  const queue = [];
  for (let i = 0; i < s.length; i += 1) {
    const isMatch = matchKeys[s[i]];
    if (isMatch) {
      queue.push(isMatch);
    } else {
      const lastIn = queue.pop();
      if (lastIn !== s[i]) {
        return false;
      }
    }
  }
  return queue.length === 0;
};

