class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
minExtraChar(s, dictionary) {
    const n = s.length;
    const wordSet = new Set(dictionary);
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        // Option 1: skip current character
        dp[i] = dp[i - 1] + 1;

        // Option 2: try all substrings ending at i
        for (let start = 0; start < i; start++) {
            const sub = s.substring(start, i);
            if (wordSet.has(sub)) {
                dp[i] = Math.min(dp[i], dp[start]);
            }
        }
    }

    return dp[n];
}
}
