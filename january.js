// 1. Two Sum- Given an array of integers and an integer target, return indices of the two numbers that add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
    for(let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums.length; y++) {
            if(nums[x] + nums[y] == target) {
                if(x != y) {
                    return [x, y];
                }
            }
        }
    }
};

twoSum([1,2,3,4], 6); // should return [1,3]
//twoSum([2,3,5,6], 11); // should return [2,3]

// 2. Find the mean of two arrays
var findMeanSortedArrays = function(nums1, nums2) {
    let arrSum1 = nums1.reduce((sum, i) => sum + i);
    let arrSum2 = nums2.reduce((sum, i) => sum +i);
    let totalSum = arrSum1 + arrSum2;
    let divisor = nums1.length + nums2.length;
    console.log(totalSum/divisor);
    return totalSum/divisor;
};

findMeanSortedArrays([1,2,3], [7,7,8]);

// 3. Find the median of two arrays- if there is an even number of items, return the average of the two middle numbers
var findMedianSortedArrays = function(nums1, nums2) {
    let combinedArr = nums1.concat(nums2);
    combinedArr.sort((a,b) => a-b);
    if(combinedArr.length % 2 == 0) {
        let middle = combinedArr.length/2;
        return (combinedArr[middle] + combinedArr[middle-1])/2;
    }
    else {
        let middle = (combinedArr.length -1) /2;
        return combinedArr[middle];
    }
}
