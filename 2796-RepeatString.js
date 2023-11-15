/* 
Write code that enhances all strings such that you can call the string.replicate(x) 
method on any string and it will return repeated string x times.

Try to implement it without using the built-in method string.repeat.
*/

String.prototype.replicate = function (times) {
  let out = '';
  for (let i = 0; i < times; i += 1) {
    out += this;
  }
  return out;
};
/* 
const str = "js-"
str.replicate(3) // js-js-js- */