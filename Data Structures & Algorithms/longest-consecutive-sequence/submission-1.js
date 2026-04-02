class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
 const numSet = new Set(nums);  // no sorting, no mutation
    let longest = 0;

    for (const num of numSet) {
        // only start counting if num is START of a sequence
        if (!numSet.has(num - 1)) {
            let current = num;
            let length = 1;

            while (numSet.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }
    return longest;
        
    }
}
