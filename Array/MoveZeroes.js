/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
*/


//v1
var moveZeroes = function(nums) {
    nums.forEach(function(item, index) {
        if(item === 0) {
            nums.splice(index, 1)
            nums.push(item)
        }
    })
}
//v2
var moveZeroes = function(nums) {
    var i = 0
    nums.forEach(function(item, index) {
        if(item !== 0) {
            console.log(item, i)
            nums[i++] = item
        }
    })
    while(i < nums.length) {
        nums[i++] = 0
    }
}