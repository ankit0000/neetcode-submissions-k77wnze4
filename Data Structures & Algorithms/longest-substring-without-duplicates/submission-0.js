class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let maxLenght = 0;
         for(let i =0;i<s.length;i++){
            let lsSet = new Set();
            for(let j =i; j<s.length;j++){
              if(lsSet.has(s[j]))break;
              lsSet.add(s[j])
              maxLenght = Math.max(maxLenght, j-i+1)
            }
         }

         return maxLenght;
    }
}
