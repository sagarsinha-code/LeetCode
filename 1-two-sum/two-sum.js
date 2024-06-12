/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // const obj = {};
    // for(let i = 0; i<nums.length; i++) {
    //     console.log(obj[target - nums[i]])
    //     if(obj[target - nums[i]] !== undefined){
    //         return [obj[target - nums[i]], i];
    //     }else{
    //         obj[nums[i]] = i;
    //     }
    // }

    for(let i=0; i<nums.length; i++) {
    const fVal = target - nums[i];
    if(nums.includes(fVal) && nums.indexOf(fVal) !== i) {
      return [i, nums.indexOf(fVal)];
    }
  }
};