class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

  for (let word of strs) {

    // sort the word to get the key
    const key = word.split('').sort().join('');
    //  "cat" → ['c','a','t'] → ['a','c','t'] → "act"

    // if key doesn't exist yet, create empty array
    if (!map[key]) {
      map[key] = [];
    }

    // add word under that key
    map[key].push(word);
  }

  // return all groups
  return Object.values(map);
    }
}
