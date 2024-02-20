/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {

    // const value = nums.map((num) => {
    //     init = fn(init, num);
    //     return init;
    // });

    // return value[value.length - 1]

    let res = init;

    for (const i of nums) {
        res = fn(res, i)
    }
    

    // return nums.map((num) => {
    //     res = fn(res, num)
        return res;
    // })
};