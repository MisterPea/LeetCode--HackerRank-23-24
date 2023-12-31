/*
There are numBottles water bottles that are initially full of water. 
You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.
Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.
*/


var numWaterBottles = function (numBottles, numExchange) {
  let drinkCount = numBottles;
  let fullBottles = 0;
  let emptied = numBottles;
  while (emptied >= numExchange) {
    fullBottles = Math.floor(emptied / numExchange);
    drinkCount += fullBottles;
    emptied = fullBottles + (emptied % numExchange);
    console.log(fullBottles,drinkCount,emptied)
  }
};

numWaterBottles(9, 3);