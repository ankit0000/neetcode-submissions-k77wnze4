class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
     permute(nums) {
    const result = [];

    function backtrack(start) {
        // Base case: a complete permutation is formed
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            // Place nums[i] at the current position
            [nums[start], nums[i]] = [nums[i], nums[start]];

            // Recurse to fill the next position
            backtrack(start + 1);

            // Undo the swap (backtrack)
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    backtrack(0);
    return result;

}
}
