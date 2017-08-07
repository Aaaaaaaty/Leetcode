/**
 * @param {number[]} prices
 * @return {number}
 */
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
console.log(maxProfit([7, 1, 5, 3, 6, 4]))