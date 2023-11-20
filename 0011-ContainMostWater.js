/* 
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith 
line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.
Notice that you may not slant the container.
*/
// Time complexity: O(n) - We are only looking at the array once;
// Space complexity: O(1) - We'e using constant space
/*
The Idea:
The maximum area would be Min(height[0] * height[n-1]) * n -1
So, we start at the ends and work our way in. Incrementing the left index of Left < Right,
or decrementing the right index if Right < Left
*/

var maxArea = function (height) {
  let area = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    const leftHeight = height[l];
    const rightHeight = height[r];
    const currArea = (Math.min(leftHeight, rightHeight)) * (r - l);
    area = Math.max(currArea, area);
    if (leftHeight < rightHeight) {
      l += 1;
    } else {
      r -= 1;
    }
  };
  return area;
};

console.log(maxArea([2, 1, 5]));

