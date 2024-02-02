/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const val = arr.filter((a,i) => {
        return fn(a,i)
    })
    return val

    //Higher order function
    // return arr.filter(fn)
};