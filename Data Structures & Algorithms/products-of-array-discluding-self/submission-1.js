class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let numLength = nums.length;
        let leftProduct = new Array(numLength).fill(0);
    leftProduct[0] = 1;
    let rightProduct = new Array(numLength).fill(0);
    rightProduct[numLength - 1] = 1;

    let result =[]
    for (let i = 1; i < numLength; i++) {
        leftProduct[i] = nums[i - 1] * leftProduct[i - 1]
    }
    for (let i = numLength - 2; i >= 0; i--) {
        rightProduct[i] = nums[i + 1] * rightProduct[i + 1]
    }
    for (let i = 0; i < numLength; i++) {
        result[i] = rightProduct[i] * leftProduct[i]
    }

    return result;
    }
}
