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
