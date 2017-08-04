/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/
var missingNumber = function(nums) {
	var result = 0
    nums.forEach(function(item, index) {
    	result += item
    })
    return (0 + nums.length) * (nums.length + 1) / 2 - result
}
console.log(missingNumber([0]))
console.log(missingNumber([0, 1, 3]))