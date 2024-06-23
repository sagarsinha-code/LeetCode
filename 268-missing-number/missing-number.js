/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let missingNum = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum = sum + nums[i];
    }
    missingNum = (n * (n + 1) / 2);
    return missingNum - sum;
};