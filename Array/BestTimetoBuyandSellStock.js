/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.
*/
//v1
var maxProfit = function(prices) {
	var max = 0
	for(var i = 0; i < prices.length; i++) {
		for(var j = i + 1; j < prices.length; j++) {
			if(prices[i] < prices[j] && prices[j] - prices[i] > max) {
				max = prices[j] - prices[i]
			}
		} 
	}
	return max 
}
//v2
var maxProfit = function(prices) {
	var max = 0
	var index = prices[0] 
	for(var i = 1; i < prices.length; i++) {
		if(prices[i] > index) {
			max = Math.max(prices[i] - index, max)
		} else {
			index = prices[i]
		}
	}
	return max 
}
console.log(maxProfit([7, 6, 4, 3, 1]))