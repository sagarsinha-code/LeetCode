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

    while(x>0) {
        nums[a] = 0;
        x--;
        a++;
    }


    while(y>0){
        nums[a] = 1;
        y--;
        a++;
    }

    while(z>0) {
        nums[a] = 2;
        z--;
        a++;
    }


    // nums = arr;
    return nums;
};
