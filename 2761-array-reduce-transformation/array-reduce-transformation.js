/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {

    // solution 1: 

    if (nums.length > 0) {
        const value = nums.map((num) => {
            init = fn(init, num);
            return init;
        });

        return value[value.length - 1]
    } else {
        return init;
    }




    // solution 2:
    // let res = init;

    // for (const i of nums) {
    //     res = fn(res, i)
    // }
    //     return res;



};