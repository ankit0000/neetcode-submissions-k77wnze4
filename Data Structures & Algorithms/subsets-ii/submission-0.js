class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [];
    nums.sort((a, b) => a - b); // Sort to group duplicates together

    function backtrack(start, current) {
        result.push([...current]); // Add current subset (including empty)

        for (let i = start; i < nums.length; i++) {
            // Skip duplicate elements at the same recursion level
            if (i > start && nums[i] === nums[i - 1]) continue;

            current.push(nums[i]);      // Choose
            backtrack(i + 1, current);  // Explore
            current.pop();              // Un-choose
        }
    }

    backtrack(0, []);
    return result;
    }
}
