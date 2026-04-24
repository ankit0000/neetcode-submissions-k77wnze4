class Solution {
    public int[] productExceptSelf(int[] nums) {
        int len = nums.length;
        int[] result = new int[len];
        int[] leftProd = new int[len];
        int[] rightProd = new int[len];
        if(len<=1){
            return nums;
        }
         leftProd[0] = nums[0];
         rightProd[len-1] = nums[len-1];
        for(int i=1; i<len; i++){
            leftProd[i] = leftProd[i-1] * nums[i];
        }
        for(int i=len-2; i>=0; i--){
            rightProd[i] = rightProd[i+1] * nums[i];
        }

        result[0]= rightProd[1];
        result[len-1]= leftProd[len-2];
        for(int i=1; i<len-1; i++){
            result[i] = leftProd[i-1]*rightProd[i+1];
        }
        return result;
    }
}  
