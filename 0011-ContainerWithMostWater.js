/*
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

Time Complexity: O(n) where n is the number of bars
Space Complexity: O(1) constant, no extra space is used
*/
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxVolume = 0;
  while (left < right) {
      const width = right - left;
      const leftHeight = height[left];
      const rightHeight = height[right];
      const barHeight = Math.min(leftHeight, rightHeight);
      maxVolume = Math.max(maxVolume, barHeight * width);
      if (leftHeight < rightHeight) {
          left += 1;
      } else {
          right -= 1;
      }
  }
  return maxVolume;
};