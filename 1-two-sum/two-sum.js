/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
    const fVal = target - nums[i];
    if(nums.includes(fVal) && nums.indexOf(fVal) !== i) {
      return [i, nums.indexOf(fVal)];
    }
  }
};