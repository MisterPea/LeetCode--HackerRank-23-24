/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
• Open brackets must be closed by the same type of brackets.
• Open brackets must be closed in the correct order.
• Every close bracket has a corresponding open bracket of the same type.

Time Complexity: O(n) - Where n is the length of the string
Space Complexity: O(n) - Worst case is we store n length of unmatched brackets
*/

var isValid = function ( s ) {
  const pairs = { '{': '}', '[': ']', '(': ')' };
  const queue = [];
  for ( let i = 0; i < s.length; i += 1 ) {
    console.log( queue );
    if ( s[i] in pairs ) {
      queue.push( pairs[s[i]] );
    } else {
      const paren = queue.pop();
      if ( s[i] !== paren ) {
        return false;
      }
    }
  }
  return queue.length === 0;
};
