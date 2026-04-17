class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
 combinationSum(nums, target) {
    const result = [];

    function solve(index, currentSum, path) {
        if (currentSum === target) {
            result.push([...path]);  // found a valid combo
            return;
        }
        if (currentSum > target || index === nums.length) {
            return;                  // prune
        }

        // Pick: stay at same index (reuse allowed)
        path.push(nums[index]);
        solve(index, currentSum + nums[index], path);
        path.pop();

        // Skip: move to next index
        solve(index + 1, currentSum, path);
    }

    solve(0, 0, []);
    return result;
}

}
