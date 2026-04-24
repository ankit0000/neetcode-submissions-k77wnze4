class Solution {
    public int[] productExceptSelf(int[] nums) {
        int len = nums.length;
        int[] res = new int[len];
        int[] l = new int[len];
        int[] r = new int[len];
        if(len<=1){
            return nums;
        }
         l[0] = nums[0];
         r[len-1] = nums[len-1];
        for(int i=1; i<len; i++){
            l[i] = l[i-1] * nums[i];
        }
        for(int i=len-2; i>=0; i--){
            r[i] = r[i+1] * nums[i];
        }

        res[0]= r[1];
        res[len-1]= l[len-2];
        for(int i=1; i<len-1; i++){
            res[i] = l[i-1]*r[i+1];
        }
        return res;
    }
}  
