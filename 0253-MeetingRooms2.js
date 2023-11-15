/*
Given an array of meeting time intervals intervals where intervals[i] = [start, end],
return the minimum number of conference rooms required.
*/
var minMeetingRooms = function (intervals) {
  let count = 0;
  let maxRooms = 0;
  const intervalsSorted = intervals.sort((a, b) => b[1] - a[1]);
  const meetingRoom = new Array(intervalsSorted[0][1] + 1).fill(0);
  for (let i = 0; i < intervalsSorted.length; i += 1) {
    const start = intervalsSorted[i][0];
    const end = intervalsSorted[i][1];
    meetingRoom[start] += 1;
    meetingRoom[end] -= 1;
  }
  for (let m = 0; m < meetingRoom.length; m += 1) {
    count += meetingRoom[m];
    meetingRoom[m] = count;
    maxRooms = Math.max(count, maxRooms);
  }
  return maxRooms;
};

intervals = [[13, 15], [1, 13]];
minMeetingRooms(intervals);