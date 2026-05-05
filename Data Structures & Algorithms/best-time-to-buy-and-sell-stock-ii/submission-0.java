class Solution {
    public int maxProfit(int[] prices) {
        int buyp = prices[0];
        int result = 0;
        for (int p : prices) {
            if (p > buyp) {
                result += p - buyp; 
            }
            buyp = p; 
        }
        return result;
    }
}
