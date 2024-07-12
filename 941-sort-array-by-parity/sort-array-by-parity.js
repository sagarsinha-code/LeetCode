/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    // let i =0;
    // let j =1;

    // while(j==nums.length) {
    //     if(num[i] % 2 === 0) {

    //     }
    // }
const even = [];
const odd = [];
    for(let i = 0; i<nums.length; i++) {
        if(nums[i]%2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    return [...even, ...odd]
};