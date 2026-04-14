class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    mapsEqual(map1, map2) {
        const keys1 = Object.keys(map1);
        if (keys1.length !== Object.keys(map2).length) return false;
        for (let key of keys1) {
            if (map1[key] !== map2[key]) return false;
        }
        return true;
    }
    checkInclusion(s1, s2) {
        const s1Count = {};
        for (let char of s1) {
            s1Count[char] = (s1Count[char] || 0) + 1;
        }

        const winCount = {};
        let left = 0;

        for (let right = 0; right < s2.length; right++) {

            // STEP 1: New char enters from right
            const rightChar = s2[right];
            winCount[rightChar] = (winCount[rightChar] || 0) + 1;

            // STEP 2: Is window the right size?
            if (right - left + 1 === s1.length) {

                // STEP 3: Check if this window matches
                if (this.mapsEqual(s1Count, winCount)) return true;

                // STEP 4: Old char exits from left (slide forward)
                const leftChar = s2[left];
                winCount[leftChar]--;
                if (winCount[leftChar] === 0) delete winCount[leftChar];
                left++;
            }
        }
        return false;
    }
}
