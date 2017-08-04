var missingNumber = function(nums) {
	var result = 0
    nums.forEach(function(item, index) {
    	result += item
    })
    return (0 + nums.length) * (nums.length + 1) / 2 - result
}
console.log(missingNumber([0]))