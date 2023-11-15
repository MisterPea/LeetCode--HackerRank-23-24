/* 
Write code that enhances all arrays such that you can call the array.last() 
method on any array and it will return the last element. 
If there are no elements in the array, it should return -1. 
*/
Array.prototype.last = function () {
  const len = this.length;
  if (len === 0) {
    return -1;
  }
  return this[len - 1];
};

/* 
const arr = [1, 4, '12'];
arr.last() // '12'
*/