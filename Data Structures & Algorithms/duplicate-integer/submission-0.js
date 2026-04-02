class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numCountMap = new Map();
        for(let num of nums){
            if(numCountMap.get(num)) return true;
             numCountMap.set(num,true)
        }

        return false;
    }
}
