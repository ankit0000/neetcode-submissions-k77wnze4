class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let j = 0;
        let k= 0;
        let result = []
         for(let i=0;i<nums.length-2;i++){
            j = i+1;
            k = nums.length-1 ;
            if(i>0 && nums[i] === nums[i-1]) continue;
          while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            if(sum === 0){
                  result.push([nums[i],nums[j],nums[k]]);;
                  while (j < k && nums[j] === nums[j + 1]) j++;
                    while (j < k && nums[k] === nums[k - 1]) k--;
                  j++;
                  k--;
            }else if( sum>0){
                k--;
            }else{
                j++;
            }
         }
         }
      return result;
    }
}
