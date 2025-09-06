/**
 *    Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range
 *    that is missing from the array.
 */

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]; //[0, 1]; //[3, 0, 1];

let missingNums = function (nums) {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;
    let numsArrSum = 0;

    for(let i = 0; i < nums.length; i++) {
        numsArrSum = numsArrSum + nums[i];
    }

    return totalSum - numsArrSum;
}

console.log(missingNums(nums));