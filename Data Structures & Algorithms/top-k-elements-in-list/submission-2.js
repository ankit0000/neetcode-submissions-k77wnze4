class Solution {
    topKFrequent(nums, k) {
      // Step 1: count
    const countMap = new Map();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Step 2: sort entries by frequency descending
    const sorted = [...countMap.entries()].sort((a, b) => b[1] - a[1]);
    //  countMap.entries() gives: [[1,3], [2,2], [3,1]]
    //  after sort:               [[1,3], [2,2], [3,1]]  (already sorted here)
    //
    //  sort logic: b[1] - a[1]
    //  b[1] = frequency of b
    //  a[1] = frequency of a
    //  if result > 0, b comes first (descending)

    // Step 3: take top k, extract just the number (not frequency)
    return sorted.slice(0, k).map(entry => entry[0]);
}
}