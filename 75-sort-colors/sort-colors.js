/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let x = 0;
    let y = 0;
    let z = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            x = x +1;
        } else if(nums[i] === 1) {
            y = y + 1;
        } else {
            z = z + 1;
        }
    }
    
    let a = 0;

    while(a<nums.length) {
        if(x>0) {
            nums[a] = 0;
            x--;
            a++;
        } else if(y>0) {
            nums[a] = 1;
            y--;
            a++;
        } else {
            nums[a] = 2;
            y--;
            a++;
        }
    }

    // nums = arr;
    return nums;
};
