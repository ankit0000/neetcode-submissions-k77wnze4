class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
   subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    // Every path state is a valid subset — collect it
    result.push([...path]);
    for (let i = start; i < nums.length;) {
      path.push(nums[i]);       // choose
      backtrack(++i, path); // explore
      path.pop();               // unchoose (backtrack!)
    }
  }

  backtrack(0, []);
  return result;
}
}
