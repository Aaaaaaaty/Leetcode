var maxSubArray = function(nums) {
    var max=nums[0], mid=nums[0];
    for (var i=1;i<nums.length;++i){
        mid= Math.max(mid+nums[i],nums[i]);
        max=Math.max(max, mid); 
    }
    return max;
}   
console.log(maxSubArray([2,1,-3,4,5]))