class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
          let i = 0;
    let j = 0;
    let freqMap = new Map();
    let maxLength = 0;

    while (j < s.length) {
        if (freqMap.has(s[j])) {
            i = Math.max(i, freqMap.get(s[j]) + 1); // ✅ guard against going back
        }
        freqMap.set(s[j], j);                        // ✅ always update map
        maxLength = Math.max(maxLength, j - i + 1);  // ✅ always update maxLength
        j++;
    }

    return maxLength;
        // let i = 0;
        // let j = 0;
        // let freqMap = new Map();
        // let maxLength = 0;
        // while(j<s.length){
        //     if(freqMap.has(s[j])){
        //         i = Math.max(i, freqMap.get(s[j]) + 1);
        //         // i = (freqMap.get(s[j]) || 0) + 1;
        //         // freqMap.set(s[j], j)
        //     }else{
        //         freqMap.set(s[j], j)
        //         maxLength = Math.max(maxLength,j-i+1)
        //     }
        //     j++;
        // }

        // return maxLength;

    }
}
