class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {

        let sortNums = nums.sort( (a,b) => a-b);

        return sortNums[sortNums.length-k]
    }
}
