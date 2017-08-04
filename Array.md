### 561.Array Partition I

> Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```
### solution
```
function calMax(arr) {
  var result = 0
  arr.sort(function(a, b) {
    return a - b
  })
  for(var j = 0; j < arr.length; j += 2) {
    result += arr[j]
  }
  return result
}
console.log(calMax([1,2,3,4])) //4
```
### 566. Reshape the Matrix

```
//v1
var matrixReshape = function(nums, r, c) {
    var arr = []
	var result = []
    nums.forEach(function(item, index) {
    	item.forEach(function(obj, index) {
    		arr.push(obj)
    	})
    })
    if(r * c !== arr.length) {
    	return nums
    } else {
    	for(var i = 0; i < r; i++) {
    		result[i] = [] 
    		for(var j = 0; j < c; j++) {
    			result[i].push(arr[(i) * c + j])
    		}
    	}
    }
    return result
}
//v2
var matrixReshape = function(nums, r, c) {
    var m = nums.length,
        n = nums[0].length,
        result = new Array(r).fill(0).map(() => [])
    if(r * c !== m * n) {
        return nums
    } else {
        for(var i = 0; i < r * c; i++) {
            result[parseInt(i / c)].push((nums[parseInt(i / n)][(i) % n]))
        }
    }
    return result
}
console.log(matrixReshape([[1,2], [3,4], [5,6]], 2, 3))

console.time('fill')
result = new Array(1000000).fill(0).map(() => [])
console.timeEnd('fill') //962.566ms

console.time('fill')
result = []
for(var j = 0; j < 1000000; j++){ //76.609ms
    result[j] = []
}
console.timeEnd('fill')

```
### 485. Max Consecutive Ones
>Input: [1,1,0,1,1,1]
>Output: 3
>Explanation: The first two digits or the last three digits are consecutive 1s.
>    The maximum number of consecutive 1s is 3.

```
var findMaxConsecutiveOnes = function(nums) {
    var max = nowMax = 0
    nums.forEach(function(item, index) {
        max = Math.max(max, nowMax = item === 0 ? 0 : nowMax + 1)
    })
    return max
}
console.log(findMaxConsecutiveOnes( [1,0,1,1,1,0,1]))
```
### 448. Find All Numbers Disappeared in an Array
>Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

>Find all the elements of [1, n] inclusive that do not appear in this array.

>Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

```
Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```
```
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
```
### 283. Move Zeroes
> Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

> For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
```
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
```
### 167. Two Sum II - Input array is sorted
>Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

>The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that >your returned answers (both index1 and index2) are not zero-based.

>You may assume that each input would have exactly one solution and you may not use the same element twice.
```
Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
```
```
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
```
### 169. Majority Element
```
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
```
### 217. Contains Duplicate
```
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
```
### 628. Maximum Product of Three Numbers
```
var maximumProduct = function(nums) {
    var length = nums.length
    nums.sort(function(a,b) {
        return a-b
    })
    return Math.max(nums[length-1]*nums[length-2]*nums[length-3], nums[0]*nums[1]*nums[length-1])
}
```
