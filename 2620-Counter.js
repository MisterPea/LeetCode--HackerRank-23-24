/* 
Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more than 
the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

/* 
This is an example of post-increment, that is:
n is returned first, then it's incremented by 1
If we do ++n or n += 1 it's pre-increment, that is:
n is incremented first, then returned. 
*/
const createCounter = function (n) {
  return () => n++;
};

/*
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
*/