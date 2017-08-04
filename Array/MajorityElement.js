/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/
//v1
var majorityElement = function(nums) {
    var obj = {}
    var result
    nums.forEach(function(item, index) {
        if(!obj[item] && obj[item] !== 0) {
            obj[item] = 1
        } else {
            obj[item] ++
        }
    })
    Object.keys(obj).forEach(function(item, index) {
        if(obj[item] > nums.length / 2) {
            result = item
        }
    })
    return parseInt(result)
}
//v2
var majorityElement = function(nums) {
    var major = nums[0], count = 1;
        for(var i = 1; i < nums.length; i++){
            if(count == 0){
                count++;
                major = nums[i];
            }else if(major == nums[i]){
                count++;
            }else count--;
            
        }
    return major;
};