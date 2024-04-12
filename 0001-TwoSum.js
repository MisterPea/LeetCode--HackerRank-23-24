/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function ( nums, target ) {
  // for every number we find the compliment to meet the target and store it in the map
  const neededMap = new Map();
  for ( let i = 0; i < nums.length; i += 1 ) {
    if ( neededMap.has( `${nums[i]}` ) ) {
      return [i, neededMap.get( `${nums[i]}` )];
    } else {
      neededMap.set( `${target - nums[i]}`, i );
    }
  }
};

const nums = [2, 7, 11, 15], target = 9;
console.log( twoSum( nums, target ) );