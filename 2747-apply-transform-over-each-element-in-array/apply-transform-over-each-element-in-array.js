/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const transformArr = arr.map((a, i) => {
       const value = fn(a, i);
       return value
   })
   return transformArr;
};