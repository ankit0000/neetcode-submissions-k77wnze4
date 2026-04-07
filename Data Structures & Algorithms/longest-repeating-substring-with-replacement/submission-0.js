class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let maxLenght = 0;
     

     for(let i=0;i<s.length;i++){
        let freqMap = new Map();
        for(let j =i;j<s.length;j++){
             freqMap[s[j]] = (freqMap[s[j]] || 0)+1;
              let maxCount = Math.max(...Object.values(freqMap));
               let windowSize = j - i + 1;
               let replacements = windowSize - maxCount;
               if (replacements <= k) {
        maxLenght = Math.max(maxLenght, windowSize); // valid window
      } else {
        break; // adding more chars only makes it worse, stop early
      }
           
        }
     }
    return maxLenght;
        
    }
}
