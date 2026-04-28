class KthLargest {

    private PriorityQueue<Integer> minHeap;
    private int k;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minHeap = new PriorityQueue<>();

        // Build the initial heap from nums
        for (int num : nums) {
            add(num);   // reuse add() logic — no need to duplicate code
        }
    }

    public int add(int val) {
        minHeap.offer(val);

        // Evict smallest if heap exceeds size k
        if (minHeap.size() > k) {
            minHeap.poll();
        }

        return minHeap.peek();  // root = kth largest
    }
}
