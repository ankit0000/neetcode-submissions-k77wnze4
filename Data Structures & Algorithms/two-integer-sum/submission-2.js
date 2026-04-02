class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0 ;i < nums.length-1;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j] === target){
                  return [i,j]
                }
            }
        }
    }
}

// [3,4] [3,5] [3,6]
// [4,3] [4,5] [4,6]
// [5,3], [5,4] [5,6]
// [6,3] [6,4] [6,5] 