class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let maxHeight = 0;
        for( let i =0 ;i<heights.length;i++){
            for(let j=i+1;j<heights.length;j++){
                let maxSoFar = Math.min(heights[i],heights[j]) * (j-i)
                 maxHeight = Math.max(maxHeight,maxSoFar);
            }
        }

        return maxHeight;
    }
}
