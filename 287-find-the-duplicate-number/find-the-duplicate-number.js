/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let output = {}
    let outputNum = nums[0];
    let i = 0;
    while(i<nums.length) {
        output[nums[i]] = (output[nums[i]] || 0) + 1;
        console.log(output[nums[i]])
        if(output[nums[i]] > 1) {
            outputNum = nums[i];
            break;
        }
        i++;
    }
    return outputNum;
};