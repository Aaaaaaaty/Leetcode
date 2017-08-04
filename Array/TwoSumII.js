/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/



//v1 复杂度高
var twoSum = function(numbers, target) {
    for(var i = 0; i < numbers.length; i++) {
        for(var j = 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) return [i+1, j+1]
        }
    }
}
//v2 o(n)
var twoSum = function(numbers, target) {
    var index = 0,
        maxIndex = numbers.length - 1
    while(numbers[index] + numbers[maxIndex] !== target) {
        if(numbers[index] + numbers[maxIndex] > target) {
            maxIndex--
        }else {
            index++
        }
    }
    return [index+1, maxIndex+1]
}