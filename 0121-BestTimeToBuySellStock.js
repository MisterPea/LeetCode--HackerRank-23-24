/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
*/

var maxProfit = function (prices) {
  let l = 0;
  let maxProfit = 0;
  for (let r = 1; r < prices.length; r += 1) {
    if (prices[l] >= prices[r]) {
      l = r ;
    } else {
      maxProfit = Math.max((prices[r] - prices[l]), maxProfit);
    }
  }
  return maxProfit;
};

prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));