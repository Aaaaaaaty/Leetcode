/*
Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/
var containsDuplicate = function(nums) {
    var obj = {}
    var result = false
    nums.forEach(function(item, index) {
        if(!obj[item]) {
            obj[item] = 1
        } else {
            result = true
        }
    })
    return result
}