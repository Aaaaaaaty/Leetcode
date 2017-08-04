/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]
*/



//v1
var findDisappearedNumbers = function(nums) {
    var max = nums.length
    var str = nums.join('')
    var result = []
    nums.forEach(function(item, index) {
        if(str.indexOf(index + 1) === -1) {
            result.push(index + 1)
        }
    })

    return result
}
console.log(findDisappearedNumbers([4,3,2,7,8,9,10,10,10,2,3,1]))
//v2
var findDisappearedNumbers = function(nums) {
    var max = nums.length
    var result = []
    for(var i = 0; i < max; i++) {
        var k  = Math.abs(nums[i]) - 1
        if(nums[k] > 0) nums[k] = -nums[k]
    }
    for(var i = 0; i < max; i++) {
        if(nums[i] > 0) result.push(i+1)
    }
    return result
}
console.log(findDisappearedNumbers([5,4,6,7,9,3,10,9,5,6]))
