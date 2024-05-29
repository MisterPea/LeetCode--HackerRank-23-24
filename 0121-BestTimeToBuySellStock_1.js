/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Solution, we keep track of the min and max price, if we find a new minimum price we set the max and min to the minimum.
at each iteration we look at the positive difference between min and max and find the max between running profit and max-min.

Time Complexity: O(n) where n is the number of days (prices)
Space Complexity: O(1) we're not using any extra space.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function ( prices ) {
  let min = Infinity;
  let max = -Infinity;
  let profit = 0;
  for ( let i = 0; i < prices.length; i += 1 ) {
    const currPrice = prices[i];
    if ( currPrice < min ) {
      min = currPrice;
      max = currPrice;
    }
    if ( currPrice > max ) {
      max = currPrice;
    }
    profit = Math.max( profit, max - min );
  }
  return profit;
};