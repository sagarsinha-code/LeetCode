/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sortedArr = nums.sort((a,b) => a - b);
  let output = 0;
  for(let i=0; i<=sortedArr.length; i++) {
    if(!sortedArr.includes(0)) {
      return output;
    }
    if(sortedArr[i+1] - sortedArr[i] > 1 || sortedArr[i+1] === undefined) {
      output = sortedArr[i] + 1;
      return output;
    }
  }
};