/* 
Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 
more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function ( n ) {
  let count = 0;
  return function () {
    const out = n + count;
    count += 1;
    return out;
  };
};

/* 
This works b/c we're attaching counter to lexical environment and the references
to this environment are held; think arrays. Another structure held by reference.
The mechanism is different: Arrays are stored in contiguous blocks of memory while 
closures have an environment record akin to pointers, where each pointer 
references a variable that was in scope at the time the closure was created.
because `n` was in scope at time of creation, we're able to modify it so long as
the reference to it exists.
*/
var createCounterTwo = function ( n ) {
  return () => n++;
};

const counter = createCounter( 10 );
console.log( counter() ); // 10
console.log( counter() ); // 11
console.log( counter() ); // 12
