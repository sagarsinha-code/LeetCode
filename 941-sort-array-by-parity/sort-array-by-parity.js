var sortArrayByParity = function(nums) {
    if(nums.length < 1) {
        return nums;
    }
    let i=0;
    for(let j=0; j<nums.length; j++) {
        if(nums[j]%2 === 0) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
    return nums;
};