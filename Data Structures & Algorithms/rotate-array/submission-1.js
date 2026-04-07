class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
         const n = nums.length;
  k = k % n;

  // helper to reverse a section of array
  function reverse(left, right) {
    while (left < right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }

  reverse(0, n - 1);   // step 1: reverse all
  reverse(0, k - 1);   // step 2: reverse first k
  reverse(k, n - 1);   // step 3: reverse rest
    }
}
