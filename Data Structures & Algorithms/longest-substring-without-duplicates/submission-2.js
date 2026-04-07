class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // lengthOfLongestSubstring(s) {
    //     let maxLenght = 0;
    //      for(let i =0;i<s.length;i++){
    //         let lsSet = new Set();
    //         for(let j =i; j<s.length;j++){
    //           if(lsSet.has(s[j]))break;
    //           lsSet.add(s[j])
    //           maxLenght = Math.max(maxLenght, j-i+1)
    //         }
    //      }

    //      return maxLenght;
    // }

//     lengthOfLongestSubstring(s) {
//     const map = new Map(); // char → last seen index
//     let l = 0;
//     let maxLen = 0;

//     for (let r = 0; r < s.length; r++) {
//         if (map.has(s[r])) {
//             // jump l directly past the old duplicate
//             l = Math.max(l, map.get(s[r]) + 1);
//         }
//         map.set(s[r], r); // update index to latest position
//         maxLen = Math.max(maxLen, r - l + 1);
//     }

//     return maxLen;
// }

lengthOfLongestSubstring(s) {
    const ls = new Set(); // char → last seen index
    let l = 0;
    let maxLen = 0;

    for (let r = 0; r < s.length; r++) {
        while (ls.has(s[r])) {
            // jump l directly past the old duplicate
            ls.delete(s[l]);
            l++;
        }
        ls.add(s[r]); // update index to latest position
        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
}
}
