/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively,
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

// This is a poor implementation - we really only have to count mid-way and we don't need to make a new array,
// We only need length of both arrays / 2 & length/2 -1
var findMedianSortedArrays = function (nums1, nums2) {
  // Merge Arrays
  const arr1Len = nums1.length;
  const arr2Len = nums2.length;
  const total = arr1Len + arr2Len;
  let i1 = 0;
  let i2 = 0;
  const midArray = [];
  while (i1 < arr1Len && i2 < arr2Len) {
    let temp1 = null;
    let temp2 = null;
    if (i1 < arr1Len) {
      temp1 = nums1[i1];
    }
    if (i2 < arr2Len) {
      temp2 = nums2[i2];
    }

    // Compare Values
    if (temp1 <= temp2) {
      midArray.push(temp1);
      i1 += 1;
    } else {
      midArray.push(temp2);
      i2 += 1;
    }
  }
  // Combine Any Remaining Array
  if (i1 < arr1Len) {
    midArray.push(...nums1.slice(i1, arr1Len));
  }
  if (i2 < arr2Len) {
    midArray.push(...nums2.slice(i2, arr2Len));
  }

  // Find Median
  const mid = Math.floor(total / 2);
  if (total % 2 === 0) {
    return (midArray[mid] + midArray[mid - 1]) / 2;
  } else {
    return midArray[mid];
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));