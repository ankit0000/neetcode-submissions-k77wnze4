class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // characterReplacement(s, k) {
    // let maxLenght = 0;
     

    //  for(let i=0;i<s.length;i++){
    //     let freqMap = new Map();
    //     for(let j =i;j<s.length;j++){
    //          freqMap[s[j]] = (freqMap[s[j]] || 0)+1;
    //           let maxCount = Math.max(...Object.values(freqMap));
    //            let windowSize = j - i + 1;
    //            let replacements = windowSize - maxCount;
    //            if (replacements <= k) {
    //     maxLenght = Math.max(maxLenght, windowSize); // valid window
    //   } else {
    //     break; // adding more chars only makes it worse, stop early
    //   }
           
    //     }
    //  }
    // return maxLenght;
        
    // }

 characterReplacement(s, k) {
  const freq = {};
  let left = 0;
  let maxCount = 0; // most frequent char count in current window
  let best = 0;

  for (let right = 0; right < s.length; right++) {

    // grow window — add right char
    freq[s[right]] = (freq[s[right]] || 0) + 1;

    // update most frequent count
    maxCount = Math.max(maxCount, freq[s[right]]);

    // check if window is valid
    let windowSize = right - left + 1;
    let replacements = windowSize - maxCount;

    if (replacements > k) {
      // too expensive — shrink from left
      freq[s[left]]--;
      left++;
    }

    // window is always valid here, save length
    best = Math.max(best, right - left + 1);
  }

  return best;

}
}
