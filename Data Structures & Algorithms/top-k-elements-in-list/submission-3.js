class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

const freq = new Map();
for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);


const buckets = Array.from({ length: nums.length + 1 }, () => []);



for (const [num, count] of freq) {
    console.log(num, count)
    buckets[count].push(num);
}

console.log("buckets", buckets);
let res = [];
for (let i = buckets.length - 1; i >= 1 && res.length < k; i--) {
  res.push(...buckets[i]);
}

return res;

    }
}
