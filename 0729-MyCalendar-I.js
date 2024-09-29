// Time Complexity: O(n^2) - We're constantly looking through the array, and we're looking through a multiple of the length
// Space Complexity: O(n) - the max space is the length of all the arrays combined

class MyCalendar {
  constructor() {
    this.bookArray = [];
  }

  book(start, end) {
    for (const [s, e] of this.bookArray) {
      if (s < end && start < e) {
        return false;
      }
    }
    this.bookArray.push([start, end]);
    return true;
  }
}

const obj = new MyCalendar();
const bookings = [[10, 20], [15, 25], [20, 30]];
const out = [];
for (const [s, e] of bookings) {
  const output = obj.book(s, e);
  out.push(output);
}
console.log(out) // [ true, false, true ]