class Solution {
    public int search(int[] nums, int target) {
    int low = 0, high = nums.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (nums[mid] == target) return mid;

        // Left half is sorted
        if (nums[low] <= nums[mid]) {
            // Target lies within the sorted left half
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1;   // go left
            } else {
                low = mid + 1;    // go right
            }
        }
        // Right half is sorted
        else {
            // Target lies within the sorted right half
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;    // go right
            } else {
                high = mid - 1;   // go left
            }
        }
    }

    return -1;
}
}
