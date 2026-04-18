class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let i = 0;
        let j = nums.length-1;
        while(i<=j){
            let midIndex = Math.floor((i + j)/2);
            if(nums[midIndex] == target) return midIndex;
            if(target>nums[midIndex]){
                i = midIndex+1
            }else{
                j= midIndex-1;
            }
        }
    return -1;
    }
}
