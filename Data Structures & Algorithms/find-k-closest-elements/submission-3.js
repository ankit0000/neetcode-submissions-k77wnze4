class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let distanceArray = [];
        let i =0;
        while(i<arr.length){
            distanceArray.push(Math.abs(arr[i] - x))
            i++;
        }
       let left = 0;
       let right = distanceArray.length-1;

       while(right-left>=k){
        if(distanceArray[left]>distanceArray[right]){
          left++;
        }else{
right--;
        }
        
       }

       return arr.slice(left, right+1)
        
    }
}
