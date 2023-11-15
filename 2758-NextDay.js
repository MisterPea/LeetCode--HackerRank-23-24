/* 
Write code that enhances all date objects such that you can call the date.nextDay() 
method on any date object and it will return the next day in the format YYYY-MM-DD 
as a string.
*/
// Time Complexity: O(1)
// Space Complexity: O(1) - no extra space

Date.prototype.nextDay = function () {
  // 1000ms (in 1min) * 60 sec/min * 60 min/hr * 24hr/day
  const nextDayHrs = this.getTime() + 1000 * 60 * 60 * 24;
  return new Date(nextDayHrs).toISOString().split('T')[0]
};


const date = new Date("2014-12-31");
console.log(date.nextDay()); // "2015-01-01"