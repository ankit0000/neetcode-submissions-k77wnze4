class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         let leftProduct = [1];
        let result = Array(nums.length).fill(0);
        let rightProduct = new Array(nums.length);
        let numLength = nums.length;
        rightProduct[numLength - 1] = 1
        console.log(rightProduct)
        for(let i=1;i<numLength;i++){
             leftProduct[i] = nums[i-1]*leftProduct[i-1]
        }
        for(let i=numLength-2;i>=0;i--){
             rightProduct[i] = nums[i+1]*rightProduct[i+1]
        }

        console.log(leftProduct)
        console.log(rightProduct)

        for(let i=0;i<numLength;i++){
              result[i] = rightProduct[i]*leftProduct[i]
        }

        return result;
    }
}
