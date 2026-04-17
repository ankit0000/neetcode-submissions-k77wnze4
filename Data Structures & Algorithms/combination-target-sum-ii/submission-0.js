class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
          const result = [];
    candidates.sort((a, b) => a - b); // Sort to group duplicates together

    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates at the same recursion level
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            // Prune: since sorted, no point going further
            if (candidates[i] > remaining) break;

            current.push(candidates[i]);
            backtrack(i + 1, current, remaining - candidates[i]); // i+1: each element used once
            current.pop(); // undo choice
        }
    }

    backtrack(0, [], target);
    return result;
    }
}
