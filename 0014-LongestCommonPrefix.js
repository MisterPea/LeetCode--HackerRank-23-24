/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function ( strs ) {
  const maxLength = strs.sort( ( a, b ) => a.length - b.length )[0].length;

  let found = "";

  for ( let letter = 0; letter < maxLength; letter += 1 ) {
    let word = 1;
    let currentLetter = strs[0][letter];
    while ( word < strs.length ) {
      const ltr = strs[word][letter];
      if ( currentLetter !== ltr ) {
        return found;
      }
      word += 1;
      currentLetter = ltr
    }
    found += currentLetter;
  }
  return found;
};

strs = ["flower", "flow", "flight"];
console.log( longestCommonPrefix( strs ) );
